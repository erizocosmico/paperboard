(ns paperboard.api
  (:require [compojure.core :refer [GET OPTIONS defroutes context]]
            [compojure.route :refer [not-found]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.util.response :refer [response content-type]]
            [environ.core :refer [env]]
            [paperboard.handlers.rss :refer [get-rss-feed]]
            [paperboard.utils :refer [base64-decode]])
  (:use org.httpkit.server)
  (:gen-class))

(defn json
  "Respond JSON with the appropiate format"
  [content]
  (content-type (response content) "application/json;charset=utf-8"))

(defroutes routes
  (OPTIONS "/*" [] "")
  (GET "/rss/:url" [url] 
       (json (get-rss-feed (base64-decode url))))
  (not-found (json {:error true :message "route not found"})))

(defn wrap-cors
  "Allow cross origin support"
  [handler]
  (fn [request]
   (let [response (handler request)]
     (-> response
         (assoc-in [:headers "Access-Control-Allow-Origin"] "*")
         (assoc-in [:headers "Access-Control-Allow-Methods"] "GET, OPTIONS")))))

(def http-handler
  (-> routes
      (wrap-json-response)
      (wrap-defaults api-defaults)
      (wrap-cors)))

(defn run-web-server [port]
  (let [port (Integer. (or port (env :port) 3000))]
    (println (format "Starting api server on port %d." port))
    (run-server http-handler {:port port})))

(defn -main [& [port]]
  (run-web-server port))
