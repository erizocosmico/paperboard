(ns paperboard.main
  (:require [paperboard.core :as core]))

(set! (.-config js/window) #js {:backend "YOUR BACKEND URL"})

(core/main)
