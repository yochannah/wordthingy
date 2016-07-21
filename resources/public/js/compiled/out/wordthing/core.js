// Compiled by ClojureScript 1.8.51 {}
goog.provide('wordthing.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('wordthing.views');
goog.require('wordthing.config');
goog.require('wordthing.handlers');
goog.require('wordthing.routes');
goog.require('wordthing.subs');
goog.require('devtools.core');
goog.require('re_frame.core');
wordthing.core.dev_setup = (function wordthing$core$dev_setup(){
if(cljs.core.truth_(wordthing.config.debug_QMARK_)){
cljs.core.println.call(null,"dev mode");

return devtools.core.install_BANG_.call(null);
} else {
return null;
}
});
wordthing.core.mount_root = (function wordthing$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wordthing.views.main_panel], null),document.getElementById("app"));
});
wordthing.core.init = (function wordthing$core$init(){
wordthing.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

wordthing.core.dev_setup.call(null);

return wordthing.core.mount_root.call(null);
});
goog.exportSymbol('wordthing.core.init', wordthing.core.init);

//# sourceMappingURL=core.js.map?rel=1469133024633