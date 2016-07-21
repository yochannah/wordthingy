// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('wordthing.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31419__delegate = function (x){
if(cljs.core.truth_(wordthing.core.mount_root)){
return cljs.core.apply.call(null,wordthing.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wordthing.core/mount-root' is missing");
}
};
var G__31419 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31420__i = 0, G__31420__a = new Array(arguments.length -  0);
while (G__31420__i < G__31420__a.length) {G__31420__a[G__31420__i] = arguments[G__31420__i + 0]; ++G__31420__i;}
  x = new cljs.core.IndexedSeq(G__31420__a,0);
} 
return G__31419__delegate.call(this,x);};
G__31419.cljs$lang$maxFixedArity = 0;
G__31419.cljs$lang$applyTo = (function (arglist__31421){
var x = cljs.core.seq(arglist__31421);
return G__31419__delegate(x);
});
G__31419.cljs$core$IFn$_invoke$arity$variadic = G__31419__delegate;
return G__31419;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1469134245216