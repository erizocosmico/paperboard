(ns paperboard.main
  (:require [paperboard.core :as core]))

(set! (.-config js/window) #js {:backend "https://paperboard-api.herokuapp.com"})

(core/main)
