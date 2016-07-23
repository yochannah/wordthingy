(ns wordthing.views
    (:require [re-frame.core :as re-frame]))


;; home

(defn home-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:main [:h1 "Writing inspirationifier"]
      [:button {:on-click #(re-frame/dispatch [:thingy])} "Inspire me."] ;; dispatch handler here
       [:div [:a {:href "#/about"} "go to About Page"]]])))

(defn results []
  [:div
    [:div "Ok, try to write about... "]
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
(defmethod panels :default [] [:div])

(defn show-panel
  [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [show-panel @active-panel])))
