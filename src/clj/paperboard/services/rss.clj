(ns paperboard.services.rss
  (:require [org.httpkit.client :as http]
            [clojure.data.xml :as xml]))

(defn- find-in [item tag]
  "Find the content of a node in the content of the given item"
  (let [content (:content item)
        items (filterv #(= (:tag %) tag) content)]
    (if (= (count items) 0)
      nil
      (first (:content (first items))))))

(defn- transform-items
  "Transform RSS item to the representation we need"
  [item]
  {:title (find-in item :title)
   :url (find-in item :link)
   ;; TODO: use a better ID
   :id (find-in item :link)})

(defn- get-rss-items
  "Get the RSS items in a map from all the content in the feed"
  [rss]
  (let [items (->> rss
                   :content
                   first
                   :content
                   (filter #(= (:tag %) :item)))]
    (mapv transform-items items)))

(defn- parse-rss
  "Turns a string with XML into a hash for easy manipulation of an RSS feed"
  [xml-str]
  (xml/parse-str xml-str))

(defn get-rss
  "Retrieves an RSS feed via HTTP and returns it in a hash.
  If an error occurs, the error will be returned."
  [url]
  (let [{:keys [body error]} @(http/get url)]
    (if error
      error
      (get-rss-items (parse-rss body)))))

