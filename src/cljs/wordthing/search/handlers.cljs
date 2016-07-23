(ns wordthing.search.handlers
(:require-macros [cljs.core.async.macros :refer [go]])
(:require [cljs-http.client :as http]
          [re-frame.core :as re-frame]
          [wordthing.db :as db]
          [cljs.core.async :refer [put! chan <! >! timeout close!]]))

(defn geturl [url params]
  (go (let [response (<! (http/get url
    {:with-credentials? false
     :query-params params}))]
      (js->clj (-> response :body)))
))

(re-frame/register-handler
 :save
 (fn [db [_ keyword vals]]
   (assoc db keyword vals :initialised? true)))

(re-frame/register-handler
 :search
 (fn [db [_ args]]
   (go (let [res (<! (geturl "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=interjection&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5" {}))
             word (:word res)]
         (re-frame/dispatch [:save :interjection word])
)) db))
