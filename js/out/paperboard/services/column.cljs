(ns paperboard.services.column
  (:require [paperboard.services.storage :refer [retrieve]]
            [om.core :as om]))

(defn make-col
  "Creates a new column data structure"
  [args]
  {:id (.getTime (js/Date.))
   :items []
   :kind (:kind args)
   :title (:title args)
   :url (:url args)
   :last-update 0})

(defn add-col
  "Adds a new column to the app"
  [cols args]
  (let [col (make-col args)]
    (vec (concat [col] cols))))

(defn remove-col
  "Removes a column from the list"
  [cols id]
  (filterv (fn [c]
             (not (= (:id c) id))) cols))

(defn move-col
  "Moves a column to the right or to the left"
  [cols id dir]
  (loop [result [] remaining cols]
    (if (= (count remaining) 0)
      result
      (let [col  (first remaining)
            tail (rest remaining)]
        (if (= (:id col) id)
          (case dir
            :left (if (= (count result) 0)
                    remaining
                    (recur 
                     (conj (vec (butlast result)) col (last result))
                     tail))
            :right (if (= (count tail) 0)
                     (conj result col)
                     (recur
                      (conj result (first tail) col)
                      (rest tail))))
          (recur (conj result col) tail))))))

(defn merge-news
  "Merges two vectors of news taking care that there are no duplicates"
  [news prev]
  (loop [result news to-add prev]
    (if (= (count to-add) 0)
      result
      (let [item (first to-add)
            more (rest to-add)]
        (if (some (fn [i] 
                    (= (:id i) (:id item))) news)
          (recur result more)
          (recur (conj result item) more))))))

(defn update-col-news
  "Returns a function to update the news in a column"
  [id news]
  (fn [cols]
    (map (fn [col] 
           (if (= (:id col) id) 
             (assoc col
                    :items (merge-news (:items news) (:items col))
                    :last-update (/ (.getTime (js/Date.)) 1000))
             col)) cols)))

(defn- initial-col
  "Only the first 25 items of a column should be retrieved at startup"
  [col]
  (assoc col :items (vec (take 25 (:items col)))))

(defn initial-columns
  "Returns the columns at the startup time. If there are columns in
  localStorage they will be retrieved from there."
  [] (let [cols (retrieve "columns" nil)]
       (if (nil? cols)
         []
         (vec (map initial-col cols)))))

