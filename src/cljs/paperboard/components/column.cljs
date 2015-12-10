(ns paperboard.components.column
  (:require [om.core :as om]
            [paperboard.components.item :refer [item]]
            [om.dom :as dom]))

(defn column-header
  "The column header is the component that has"
  [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "column__header"}
               (dom/p nil (:name data))))))

(defn column
  "A column is the component that contains the column actions and the news items"
  [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "column" :key (:id data)}
               (om/build column-header data)
               (apply dom/ul #js {:className "column__items"}
                      (om/build-all item (:items data)))))))
