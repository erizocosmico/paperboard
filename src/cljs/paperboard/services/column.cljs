(ns paperboard.services.column
  (:require [paperboard.services.storage :refer [retrieve]]
            [om.core :as om]))

(defn make-col
  "Creates a new column data structure"
  [args]
  {:id (.getTime (js/Date.))
   :items []
   :type :normal
   :kind (:kind args)
   :title (:title args)
   :url (:url args)
   :last-update 0})

(defn make-add-col
  "Creates an empty column to add columns"
  [] {:id (.getTime (js/Date.)) :type :add})

(defn add-col
  "Adds a new column to the app"
  [cursor args]
  (let [col (make-col args)]
    (om/transact! cursor [:columns] #(vec (concat [col] %)))))

(defn remove-col
  "Removes a column from the app"
  [cursor id]
  "Not implemented yet")

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
                    :items (merge-news news (:items col))
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
         [(make-add-col)]
         (vec (map initial-col cols)))))

