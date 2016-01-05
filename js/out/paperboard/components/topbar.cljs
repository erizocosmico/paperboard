(ns paperboard.components.topbar
  (:require [om.core :as om]
            [om.dom :as dom]
            [paperboard.components.add-column-modal :refer [toggle-add-modal]]))

(defn topbar
  "Topbar component renders the title bar with action buttons"
  [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "topbar"}
               (dom/h1 #js {:className "topbar__title"}
                       "P")
               (dom/button #js {:className "topbar__add-col pb-icon pb-icon--add"
                                :onClick #(toggle-add-modal owner)})))))
