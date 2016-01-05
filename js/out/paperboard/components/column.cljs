(ns paperboard.components.column
  (:require [om.core :as om]
            [paperboard.components.item :refer [item]]
            [cljs.core.async :refer [>!]]
            [om.dom :as dom])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn- move-col
  [dir id owner]
  (let [ch (:col-ch (om/get-shared owner))]
    (go (>! ch {:type :move
                :id id
                :dir dir}))))

(defn- delete-col
  [id owner]
  (let [ch (:col-ch (om/get-shared owner))]
    (go (>! ch {:type :delete
                :id id}))))

(defn- column-actions
  "When hovered, the column header shows the column actions, such as move or delete"
  [data owner]
  (reify
    om/IRender 
    (render [_]
      (let [id (:id data)]
        (dom/div #js {:className "column__actions"}
                 (dom/button #js {:className "action-left pb-icon pb-icon--arrow-left"
                                  :onClick #(move-col :left id owner)})
                 (dom/button #js {:className "action-right pb-icon pb-icon--arrow-right"
                                  :onClick #(move-col :right id owner)})
                 (dom/button #js {:className "action-remove pb-icon pb-icon--delete"
                                  :onClick #(delete-col id owner)}))))))

(defn- column-header
  "The column header is the component that has"
  [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "column__header"}
               (dom/span #js {:className 
                              (str "column__header__icon pb-icon pb-icon--" (name (:kind data)))})
               (dom/h3 nil (:title data))
               (om/build column-actions {:id (:id data)})))))

(defn column
  "A column is the component that contains the column actions and the news items"
  [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (when (< (+ (:last-update data) 3600) (/ (.getTime (js/Date.)) 1000))
        (let [ch (:req-ch (om/get-shared owner))]
          (go 
            (>! ch {:type (:kind data)
                    :id (:id data)
                    :url (:url data)})))))
    om/IRender
    (render [_]
      (dom/div #js {:className "column-wrap"}
               (dom/div #js {:className "column" :key (:id data)}
                        (om/build column-header data)
                        (apply dom/ul #js {:className "column__items"}
                               (om/build-all item (:items data) 
                                             {:key :id})))))))

