(ns wordthing.search.handlers
(:require-macros [cljs.core.async.macros :refer [go]])
(:require [cljs-http.client :as http]
          [re-frame.core :as re-frame]
          [cljs.core.async :refer [put! chan <! >! timeout close!]]))

(defn geturl [url params]
  (go (let [response (<! (http/get url
    {:with-credentials? false
     :query-params params}))]
      (js->clj (-> response :body)))
))
