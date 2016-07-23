(ns wordthing.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [re-frame.core :as re-frame]
              [wordthing.search.handlers :as search]
              [wordthing.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

   ;;Write a handler to fetch 5 random verbs and 5 random nouns:
   ;;http://developer.wordnik.com/docs.html#!

   ;Maybe have (adjective) (noun) [with a | in a | other? | by the ] more adjective noun.
   ;; could have a button that takes "Interjection, give me another one!"

(re-frame/register-handler
 :thingy
 (fn [db [_ args]]
   (go (let [res (<! (search/geturl "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=interjection&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5" {}))]
   (.log js/console (clj->js res))))
   db))
