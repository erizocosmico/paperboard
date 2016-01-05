(ns paperboard.components.add-column-modal
  (:require [om.core :as om]
            [paperboard.components.modal :refer [modal]]
            [paperboard.components.forms :refer [handle-change]]
            [cljs.core.async :refer [>!]]
            [om.dom :as dom])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn- process-url
  "Processes the 'URL', which does not always have to be an URL, it can be a
  subreddit in the case of reddit columns"
  [kind url]
  (case kind
    :reddit (str "https://www.reddit.com/r/" url ".json")
    url))

(defn add-column
  "Sends a request to add a new column through the column channel"
  [owner title url kind]
  (let [ch      (:col-ch (om/get-shared owner))
        col-url (process-url kind url)]
    (go
      (>! ch {:type  :add
              :kind  kind
              :url   col-url
              :title title}))))

(defn toggle-add-modal
  "Toggles the add column modal"
  [owner]
  (let [ch (:action-ch (om/get-shared owner))]
    (go (>! ch {:type :toggle-add-modal}))))

(defn reset-form
  "Empties the form"
  [owner]
  (om/set-state! owner {:title "" :url "" :col-type "rss"}))

(defn label-for-type
  "Returns the correct label for the URL input depending on the selected column type"
  [col-type]
  (case (keyword col-type) 
    :reddit "Subreddit name"
    :rss "RSS Feed URL"))

(defn add-column-modal
  "Modal to add a new column to the desktop"
  [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:title ""
       :url ""
       :col-type "rss"})
    om/IRenderState
    (render-state [_ {:keys [title url col-type]}]
      (modal (:show-add-modal data)
             (dom/form #js {:className "add-col-form" :onSubmit #(.preventDefault %)}
                       (dom/h2 nil "Add column")
                       (dom/div #js {:className "form-field"}
                                (dom/input 
                                 #js {:type "text"
                                      :value (om/value title)
                                      :name "title"
                                      :placeholder "Column title"
                                      :onChange #(handle-change % :title owner)}))
                       (dom/div #js {:className "form-field select-field"}
                                (dom/select #js {:onChange #(handle-change % :col-type owner)
                                                 :value (om/value col-type)}
                                            (dom/option #js {:value "rss"} "RSS Feed")
                                            (dom/option #js {:value "reddit"} "Subreddit feed")))
                       (dom/div #js {:className "form-field"}
                                (dom/input
                                 #js {:type "text"
                                      :value (om/value url)
                                      :name "url"
                                      :placeholder (label-for-type col-type)
                                      :onChange #(handle-change % :url owner)}))
                       (dom/div #js {:className "form-buttons"}
                                (dom/button #js {:className "btn btn--link"
                                                 :onClick (fn [_]
                                                            (toggle-add-modal owner)
                                                            (reset-form owner))}
                                            "Cancel")
                                (dom/button #js {:className "btn btn--primary"
                                                 :onClick (fn [_]
                                                            (add-column owner title url (keyword col-type))
                                                            (toggle-add-modal owner)
                                                            (reset-form owner))}
                                            "Add column")))))))

