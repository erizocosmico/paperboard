(ns paperboard.components.app
  (:require [om.core :as om]
            [om.dom :as dom]
            [paperboard.services.storage :refer [store]]
            [paperboard.services.column :as column]
            [paperboard.services.news :refer [get-news]]
            [paperboard.components.desktop :refer [desktop]]
            [paperboard.components.topbar :refer [topbar]]
            [paperboard.components.add-column-modal :refer [add-column-modal]]
            [cljs.core.async :refer [chan <! >! close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defmulti dispatch (fn [kind] kind))

(defmethod dispatch :col
  [_ ch cursor]
  (go (while true
        (let [args (<! ch)]
          (case (:type args)
            :add    (om/transact! cursor [:columns]
                                  #(column/add-col % args))
            :delete (om/transact! cursor [:columns] 
                                  #(column/remove-col % (:id args)))
            :move   (om/transact! cursor [:columns]
                                  #(column/move-col % (:id args) (:dir args))))))))

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

(defn- toggle-add-modal
  [cursor]
  (om/transact! cursor [:show-add-modal] #(not %)))

(defmethod dispatch :action
  [_ ch cursor]
  (go (while true
        (let [args (<! ch)]
          (case (:type args)
            :toggle-add-modal (toggle-add-modal cursor))))))

(defn make-main-app
  "Returns a function to create a main app, that is the root container of the application"
  [req-ch col-ch action-ch]
  (fn [app owner]
    (reify
      om/IDidUpdate
      (did-update [_ _ _]
        (store "columns" (:columns app)))
      om/IWillMount
      (will-mount [_]
        (dispatch :req    req-ch app)
        (dispatch :col    col-ch app)
        (dispatch :action action-ch app))
      om/IWillUnmount
      (will-unmount [_]
        (close! req-ch)
        (close! action-ch)
        (close! col-ch))
      om/IRender
      (render [_]
        (.log js/console (clj->js app))
        (dom/div #js {:className "app"}
                 (om/build topbar app)
                 (om/build desktop app)
                 (om/build add-column-modal app))))))

