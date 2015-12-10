(ns paperboard.core
  (:require [om.core :as om]
            [om.dom :as dom]
            [paperboard.services.news :as news]
            [paperboard.components.desktop :refer [desktop]]
            [cljs.core.async :refer [chan <! close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defn make-col
  "Creates a new column data structure"
  [args]
  "Not implemented")

(defn add-col
  "Adds a new column to the app"
  [cursor args]
  (let [cols (get cursor :columns)]
    (om/transact! cols (conj cols (make-col args)))))

(defn remove-col
  "Removes a column from the app"
  [cursor id]
  "Not implemented yet")

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
                news (<! (news/get-news args kind url))]
            (om/transact! (get-in cursor [:columns id :items]) news))))))

(defonce app-state (atom {:columns []}))

(defn main []
  (let [req-ch (chan)
        col-ch (chan)]
    (om.core/root
     (fn [app owner]
       (reify
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
           (om/build desktop app))))
     app-state
     {:shared {:req-ch req-ch
               :col-ch col-ch}
      :target (.getElementById js/document "app")})))
