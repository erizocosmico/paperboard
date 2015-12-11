(ns paperboard.components.column
  (:require [om.core :as om]
            [paperboard.components.item :refer [item]]
            [cljs.core.async :refer [>!]]
            [om.dom :as dom])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn column-header
  "The column header is the component that has"
  [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "column__header"}
               (dom/p nil (:title data))))))

(defmulti column
  "A column is the component that contains the column actions and the news items"
  (fn [data] (:type data)))

(defmethod column :normal
  [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [ch (:req-ch (om/get-shared owner))]
        (go 
      (.log js/console (:url data) "is requesting")
          (>! ch {:type (:kind data)
                  :id (:id data)
                  :url (:url data)}))))
    om/IRender
    (render [_]
      (dom/div #js {:className "column" :key (:id data)}
               (om/build column-header data)
               (apply dom/ul #js {:className "column__items"}
                      (om/build-all item (:items data)))))))

(defn handle-change
  "Handles the onChange event of an input setting to the value the given key"
  [e k owner]
  (om/set-state! owner k (.. e -target -value)))

(defn add-column
  "Sends a request to add a new column through the column channel"
  [owner title url kind]
  (let [ch (:col-ch (om/get-shared owner))]
    (go
      (>! ch {:type :add
              :kind kind
              :url url
              :title title}))))

(defn reset-form
  "Empties the form"
  [owner]
  (om/set-state! owner :title "")
  (om/set-state! owner :url "")
  (om/set-state! owner :type :reddit)
  (om/set-state! owner :open false))

(defn label-for-type
  "Returns the correct label for the URL input depending on the selected column type"
  [col-type]
  (case col-type 
    :reddit "Subreddit name"
    :rss "RSS Feed URL"))

(defmethod column :add
  [data owner]
   (reify
     om/IInitState
     (init-state [_]
       {:open false
        :title ""
        :url ""
        :col-type :reddit})
     om/IRenderState
     (render-state [this {:keys [open title url col-type]}]
       (dom/div #js {:className "column column--add"}
                (dom/div #js {:className (str "column__add" (if open " hidden" ""))}
                         (dom/button #js {:onClick #(om/set-state! owner :open (not open))} 
                                     "+"))
                (dom/div #js {:className (str "column__add-form" (if open "" " hidden"))}
                         (dom/form #js {:onSubmit #(.preventDefault %)}
                                   (dom/div #js {:className "form-field"}
                                            (dom/label #js {:htmlFor "title"}
                                                       "Column title")
                                            (dom/input 
                                              #js {:type "text" 
                                                   :value (om/value title)
                                                   :name "title"
                                                   :onChange #(handle-change % :title owner)}))
                                   (dom/div #js {:className "form-field"}
                                            (dom/label #js {:htmlFor "url"}
                                                       (label-for-type col-type))
                                            (dom/input
                                              #js {:type "url"
                                                   :name "url"
                                                   :value (om/value url)
                                                   :onChange #(handle-change % :url owner)}))
                                   (dom/button 
                                     #js {:onClick (fn [_]
                                                     (add-column owner title url col-type)
                                                     (reset-form owner))}
                                     "Create column")))))))
