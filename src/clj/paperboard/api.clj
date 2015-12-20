(ns paperboard.api
  (:require [compojure.core :refer [GET defroutes context]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.util.response :refer [response content-type]]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [paperboard.handlers.rss :refer [get-rss-feed]]
            [paperboard.utils :refer [base64-decode]])
  (:gen-class))

(defn json
  "Respond JSON with the appropiate format"
  [content]
  (content-type (response content) "application/json;charset=utf-8"))

(defroutes routes
  (GET "/rss/:url" [url] 
       (json (get-rss-feed (base64-decode url)))))

(def http-handler
  (-> routes
      (wrap-json-response)
      (wrap-defaults api-defaults)))

(defn run-web-server [port]
  (let [port (Integer. (or port (env :port) 8080))]
    (println (format "Starting api server on port %d." port))
    (run-jetty http-handler {:port port :join? false})))

(defn -main [& [port]]
  (run-web-server port))
