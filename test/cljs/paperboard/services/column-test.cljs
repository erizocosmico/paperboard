(ns paperboard.services.column-test
  (:require-macros [cljs.test :refer [is deftest testing]])
  (:require [cljs.test]
            [paperboard.services.column :as cols]))

(defn- make-old-news
  []
  [{:id "old-1"} {:id "old-2"} {:id "old-3"}])

(defn- make-new-news
  []
  [{:id "new-1"} {:id "new-2"} {:id "old-1"}])  

(defn- match-url
  [news [i url]] (is (= (:id (get news i)) url)))

(deftest merge-news-test
  (let [old (make-old-news)
        news (make-new-news)
        merged (cols/merge-news news old)
        match-merged-url (partial match-url merged)]
    (is (= (count merged) 5))
    (vec (map match-merged-url (map vector 
                        (take 5 (range)) 
                        '("new-1" "new-2" "old-1" "old-2" "old-3"))))))
    
