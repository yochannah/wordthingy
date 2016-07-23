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
