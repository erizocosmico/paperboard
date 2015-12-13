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

(defn- match-id
  [coll [i id]]
  (is (= (:id (get coll i)) id)))

(deftest merge-news-test
  (let [old (make-old-news)
        news (make-new-news)
        merged (cols/merge-news news old)
        match-merged-id (partial match-id merged)]
    (is (= (count merged) 5))
    (vec (map match-merged-id (map vector 
                                   (take 5 (range)) 
                                   '("new-1" "new-2" "old-1" "old-2" "old-3"))))))

(defn- make-cols [] [{:id "c1"} {:id "c2"} {:id "c3"}])

(defn- do-move-col-test
  ([id dir result]
   (do-move-col-test (make-cols) id dir result))
  ([target-cols id dir result]
   (let [columns (cols/move-col target-cols id dir)
         match-cols-id (partial match-id columns)]
     (vec (map match-cols-id (map vector (take (count target-cols) (range))
                                  result))))))                            

(deftest move-col-left
  (do-move-col-test "c2" :left ["c2" "c1" "c3"]))

(deftest move-col-right
  (do-move-col-test "c2" :right ["c1" "c3" "c2"]))

(deftest move-col-left-zero-index
  (do-move-col-test "c1" :left ["c1" "c2" "c3"]))

(deftest move-col-right-last-index
  (do-move-col-test "c3" :right ["c1" "c2" "c3"]))

(deftest move-col-right-middle
  (do-move-col-test [{:id "c1"} {:id "c2"} {:id "c3"} {:id "c4"} {:id "c5"}] 
                    "c3" :right ["c1" "c2" "c4" "c3" "c5"]))

(deftest move-col-left-middle
  (do-move-col-test [{:id "c1"} {:id "c2"} {:id "c3"} {:id "c4"} {:id "c5"}]
                    "c3" :left ["c1" "c3" "c2" "c4" "c5"]))

(defn- do-remove-col-test
  [id]
  (let [columns (make-cols)
        result (cols/remove-col columns id)]
    (is (= (count result) (- (count columns) 1)))
    (is (not (some (fn [c] (= (:id c) id)) result)))))

(deftest remove-col-left
  (do-remove-col-test "c1"))

(deftest remove-col-middle
  (do-remove-col-test "c2"))

(deftest remove-col-right
  (do-remove-col-test "c3"))
