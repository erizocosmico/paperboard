(ns paperboard.services.storage
  (:require [cljs.reader :as reader]))

(defn store
  "Store data on the given key in localStorage"
  [k data]
  (.setItem js/localStorage k (pr-str data)))

(defn retrieve
  "Retrieves the data for the given key from localStorage"
  [k default-val]
  (let [val (.getItem js/localStorage k)]
    (if (nil? val)
      default-val
      (reader/read-string val))))

