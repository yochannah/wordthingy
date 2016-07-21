// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('wordthing.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31367__delegate = function (x){
if(cljs.core.truth_(wordthing.core.mount_root)){
return cljs.core.apply.call(null,wordthing.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wordthing.core/mount-root' is missing");
}
};
var G__31367 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31368__i = 0, G__31368__a = new Array(arguments.length -  0);
while (G__31368__i < G__31368__a.length) {G__31368__a[G__31368__i] = arguments[G__31368__i + 0]; ++G__31368__i;}
  x = new cljs.core.IndexedSeq(G__31368__a,0);
} 
return G__31367__delegate.call(this,x);};
G__31367.cljs$lang$maxFixedArity = 0;
G__31367.cljs$lang$applyTo = (function (arglist__31369){
var x = cljs.core.seq(arglist__31369);
return G__31367__delegate(x);
});
G__31367.cljs$core$IFn$_invoke$arity$variadic = G__31367__delegate;
return G__31367;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1469133024667