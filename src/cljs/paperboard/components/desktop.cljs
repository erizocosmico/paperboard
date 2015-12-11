(ns paperboard.components.desktop
  (:require [om.core :as om]
            [paperboard.components.column :refer [column]]
            [om.dom :as dom]))

(defn desktop
  "desktop component is the area containing all user columns"
  [data owner]
  (reify
    om/IRender
    (render [this]
      (let [cols (:columns data)]
        (apply dom/div #js {:className "desktop"}
               (om/build-all column cols {:key :id}))))))
