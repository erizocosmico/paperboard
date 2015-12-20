(ns paperboard.handlers.rss
  (:require [paperboard.services.rss :refer [get-rss]]))

(defn get-rss-feed
  "Retrieves the contents of an RSS feed in a JSON format"
  [url]
  (get-rss url))
