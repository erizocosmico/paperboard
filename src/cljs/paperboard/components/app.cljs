(ns paperboard.components.app
  (:require [om.core :as om]
            [om.dom :as dom]
            [paperboard.services.storage :refer [store]]
            [paperboard.services.column :as column]
            [paperboard.services.news :refer [get-news]]
            [paperboard.components.desktop :refer [desktop]]
            [cljs.core.async :refer [chan <! >! close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defmulti dispatch (fn [kind] kind))

(defmethod dispatch :col
  [_ ch cursor]
  (go (while true
        (let [args (<! ch)]
          (case (:type args)
            :add (column/add-col cursor args)
            :delete (column/remove-col cursor (:id args)))))))

(defmethod dispatch :req
  [_ ch cursor]
  (go (while true
        (let [args (<! ch)]
          (let [id (:id args)
                url (:url args)
                kind (:type args)
                news (<! (get-news kind url))]
            (om/transact! cursor [:columns] 
                          (column/update-col-news id news)))))))

(defn make-main-app
  "Returns a function to create a main app, that is the root container of the application"
  [req-ch col-ch]
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
        (om/build desktop app)))))

