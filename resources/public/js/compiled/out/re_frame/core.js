// Compiled by ClojureScript 1.8.51 {}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.subs');
goog.require('re_frame.router');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('re_frame.middleware');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.register_sub = re_frame.subs.register;
re_frame.core.clear_sub_handlers_BANG_ = re_frame.subs.clear_handlers_BANG_;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_event_handlers_BANG_ = re_frame.handlers.clear_handlers_BANG_;
re_frame.core.pure = re_frame.middleware.pure;
re_frame.core.debug = re_frame.middleware.debug;
re_frame.core.undoable = re_frame.middleware.undoable;
re_frame.core.path = re_frame.middleware.path;
re_frame.core.enrich = re_frame.middleware.enrich;
re_frame.core.trim_v = re_frame.middleware.trim_v;
re_frame.core.after = re_frame.middleware.after;
re_frame.core.on_changes = re_frame.middleware.on_changes;
re_frame.core.set_loggers_BANG_ = re_frame.utils.set_loggers_BANG_;
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args23676 = [];
var len__22763__auto___23679 = arguments.length;
var i__22764__auto___23680 = (0);
while(true){
if((i__22764__auto___23680 < len__22763__auto___23679)){
args23676.push((arguments[i__22764__auto___23680]));

var G__23681 = (i__22764__auto___23680 + (1));
i__22764__auto___23680 = G__23681;
continue;
} else {
}
break;
}

var G__23678 = args23676.length;
switch (G__23678) {
case 2:
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23676.length)].join('')));

}
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.handlers.register_base.call(null,id,re_frame.core.pure,handler);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3 = (function (id,middleware,handler){
return re_frame.handlers.register_base.call(null,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.pure,middleware], null),handler);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = 3;
/**
 * Normal users of re-frame can ignore this part of the API. Useful
 *   only to libraries providing 'isomorphic javascript' rendering on
 *   Nodejs or Nashorn.
 * 
 *   Registers a callback function 'f'.
 *   f will be called after each dispatched event is procecessed
 *   f will be called with two parameters:
 *  - the event's vector. That which was dispatched orignally.
 *  - the further event queue - what is still to be processed. A PersistentQueue.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(f){
return re_frame.router.add_post_event_callback.call(null,re_frame.router.event_queue,f);
});

//# sourceMappingURL=core.js.map?rel=1469132186912