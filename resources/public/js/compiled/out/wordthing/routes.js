// Compiled by ClojureScript 1.8.51 {}
goog.provide('wordthing.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
wordthing.routes.hook_browser_navigation_BANG_ = (function wordthing$routes$hook_browser_navigation_BANG_(){
var G__23817 = (new goog.History());
goog.events.listen(G__23817,goog.history.EventType.NAVIGATE,((function (G__23817){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__23817))
);

G__23817.setEnabled(true);

return G__23817;
});
wordthing.routes.app_routes = (function wordthing$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__23710__auto___23830 = (function (params__23711__auto__){
if(cljs.core.map_QMARK_.call(null,params__23711__auto__)){
var map__23824 = params__23711__auto__;
var map__23824__$1 = ((((!((map__23824 == null)))?((((map__23824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23824):map__23824);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23711__auto__)){
var vec__23826 = params__23711__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23710__auto___23830);


var action__23710__auto___23831 = (function (params__23711__auto__){
if(cljs.core.map_QMARK_.call(null,params__23711__auto__)){
var map__23827 = params__23711__auto__;
var map__23827__$1 = ((((!((map__23827 == null)))?((((map__23827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23827):map__23827);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23711__auto__)){
var vec__23829 = params__23711__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__23710__auto___23831);


return wordthing.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1469132187344