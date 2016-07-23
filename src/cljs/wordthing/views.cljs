(ns wordthing.views
    (:require [re-frame.core :as re-frame]
              [json-html.core :as json-html])
(:use [json-html.core :only [edn->hiccup]]))


;; home

(defn home-panel []
  (let [name (re-frame/subscribe [:name])
        interjection (re-frame/subscribe [:interjection])
        ]
    (fn []
      [:main [:h1 "Writing inspirationifier"]
        [:button
          {:on-click (fn [e]
            (.preventDefault js/e)
            (re-frame/dispatch [:search]))}
          @interjection
         ;"Inspire me"
         ] ;; dispatch handler here
       [:div [:a {:href "#/about"} "go to About Page"]]
       [:div.db  (edn->hiccup  @(re-frame/subscribe [:db]) )]
       ])))

(defn results []
  [:div
    [:div "Boing"]
    [:div]
  ])


;; about

(defn about-panel []
  (fn []
    [:div "This is the About Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))


;; main

(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :default [] [home-panel])

(defn show-panel
  [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [show-panel @active-panel])))
