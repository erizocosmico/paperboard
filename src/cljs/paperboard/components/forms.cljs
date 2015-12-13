(ns paperboard.components.forms
  (:require [om.core :as om]))

(defn handle-change
  "Handles the onChange event of an input setting to the value the given key"
  [e k owner]
  (om/set-state! owner k (.. e -target -value)))
