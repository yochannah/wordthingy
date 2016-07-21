(ns figwheel.connect (:require [wordthing.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/wordthing.core.mount-root (apply js/wordthing.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'wordthing.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

