(ns paperboard.components.modal
  (:require [om.core :as om]
            [om.dom :as dom]))

(defn modal
  "Generic modal box that can be extended by more concrete components"
  [open children]
  (dom/div #js {:className (str "modal" (if open " show" ""))}
           (dom/div #js {:className "modal__fade"}
                    (dom/div #js {:className "modal__container"}
                             children))))
