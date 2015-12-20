(ns paperboard.utils
  (:require [clojure.data.codec.base64 :refer [decode]]))

(defn base64-decode
  "Decodes a base64 encoded string and returns a string with the result"
  [b64]
  (let [b (decode (.getBytes b64))]
    (apply str (map char b))))

