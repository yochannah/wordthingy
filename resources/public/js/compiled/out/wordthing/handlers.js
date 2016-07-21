// Compiled by ClojureScript 1.8.51 {}
goog.provide('wordthing.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('wordthing.db');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return wordthing.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__23685){
var vec__23686 = p__23685;
var _ = cljs.core.nth.call(null,vec__23686,(0),null);
var active_panel = cljs.core.nth.call(null,vec__23686,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=handlers.js.map?rel=1469132186925