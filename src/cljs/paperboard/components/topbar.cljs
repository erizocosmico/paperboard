(ns paperboard.components.topbar
  (:require [om.core :as om]
            [om.dom :as dom]))

(defn topbar
  "Topbar component renders the title bar with action buttons"
  [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/h1 nil "paperboard"))))
