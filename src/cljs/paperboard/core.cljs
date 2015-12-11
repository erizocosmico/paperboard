(ns paperboard.core
  (:require [om.core :as om]
            [om.dom :as dom]
            [paperboard.services.news :as news]
            [paperboard.services.storage :refer [store retrieve]]
            [paperboard.components.desktop :refer [desktop]]
            [cljs.core.async :refer [chan <! >! close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

;; TODO: Move column related funcs to service

(defn make-col
  "Creates a new column data structure"
  [args]
  {:id (.getTime (js/Date.))
   :items []
   :type :normal
   :kind (:kind args)
   :title (:title args)
   :url (:url args)
   :last-update 0})

(defn make-add-col
  "Creates an empty column to add columns"
  [] {:id (.getTime (js/Date.)) :type :add})

(defn add-col
  "Adds a new column to the app"
  [cursor args]
  (let [col (make-col args)]
    (om/transact! cursor [:columns] #(vec (concat [col] %)))))

(defn remove-col
  "Removes a column from the app"
  [cursor id]
  "Not implemented yet")

(defn update-col-news
  "Returns a function to update the news in a column"
  [id news]
  (fn [cols]
    (map (fn [col] 
           (if (= (:id col) id) 
             (assoc col
                  :items (vec (concat (:items news) (:items col)))
                    :last-update (/ (.getTime (js/Date.)) 1000))
             col)) cols)))

(defmulti dispatch (fn [kind] kind))

(defmethod dispatch :col
  [_ ch cursor]
  (go (while true
        (let [args (<! ch)]
          (case (:type args)
            :add (add-col cursor args)
            :delete (remove-col cursor (:id args)))))))

(defmethod dispatch :req
  [_ ch cursor]
  (go (while true
        (let [args (<! ch)]
          (let [id (:id args)
                url (:url args)
                kind (:type args)
                news (<! (news/get-news kind url))]
            (om/transact! cursor [:columns] (update-col-news id news)))))))

(defn- initial-columns
  []
  (let [cols (retrieve "columns" nil)]
    (if (nil? cols) [(make-add-col)] cols)))

(defonce app-state (atom {:columns (initial-columns)}))

(defn main []
  (let [req-ch (chan)
        col-ch (chan)]
    (om.core/root
     (fn [app owner]
       (reify
         om/IDidUpdate
         (did-update [_ _ _]
           (store "columns" (:columns app)))
         om/IWillMount
         (will-mount [_]
           (dispatch :req req-ch app)
           (dispatch :col col-ch app))
         om/IWillUnmount
         (will-unmount [_]
           (close! req-ch)
           (close! col-ch))
         om/IRender
         (render [_]
           (.log js/console (clj->js app))
           (om/build desktop app))))
     app-state
     {:shared {:req-ch req-ch
               :col-ch col-ch}
      :target (.getElementById js/document "app")})))
