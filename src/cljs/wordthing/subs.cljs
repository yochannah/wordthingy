(ns wordthing.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :db
 (fn [db]
   (reaction @db)))

(re-frame/register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))

 (re-frame/register-sub
  :interjection
  (fn [db _]
    (reaction
      (if (:initialised? @db)
        (str (:interjection @db) ", I need another idea!")
        "Inspire me!"
  ))))
