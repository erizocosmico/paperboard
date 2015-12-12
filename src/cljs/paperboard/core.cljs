(ns paperboard.core
  (:require [om.core :as om]
            [om.dom :as dom]
            [paperboard.services.column :refer [initial-columns]]
            [paperboard.components.app :refer [make-main-app]]
            [cljs.core.async :refer [chan]]))

(enable-console-print!)

(defonce app-state (atom {:columns (initial-columns)}))

(defn main []
  (let [req-ch (chan)
        col-ch (chan)]
    (om.core/root
     (make-main-app req-ch col-ch)
     app-state
     {:shared {:req-ch req-ch
               :col-ch col-ch}
      :target (.getElementById js/document "app")})))
