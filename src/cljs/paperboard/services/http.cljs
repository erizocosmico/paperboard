(ns paperboard.services.http
  (:require [goog.net.XhrIo :as xhr]
            [cljs.core.async :refer [chan close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn GET [url]
  (let [ch (chan 1)]
    (xhr/send url
              (fn [event]
                (let [res (-> event .-target .getResponseText)]
                  (go (>! ch res)
                      (close! ch)))))
    ch))

(defn get-json [url]
  (let [ch (chan 1)]
    (go (let [resp (js->clj
                    (.parse js/JSON (<! (GET url))))]
          (>! ch resp)
          (close! ch)))
    ch))
