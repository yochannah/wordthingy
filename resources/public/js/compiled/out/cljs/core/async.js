// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args25078 = [];
var len__22763__auto___25084 = arguments.length;
var i__22764__auto___25085 = (0);
while(true){
if((i__22764__auto___25085 < len__22763__auto___25084)){
args25078.push((arguments[i__22764__auto___25085]));

var G__25086 = (i__22764__auto___25085 + (1));
i__22764__auto___25085 = G__25086;
continue;
} else {
}
break;
}

var G__25080 = args25078.length;
switch (G__25080) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25078.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25081 = (function (f,blockable,meta25082){
this.f = f;
this.blockable = blockable;
this.meta25082 = meta25082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25083,meta25082__$1){
var self__ = this;
var _25083__$1 = this;
return (new cljs.core.async.t_cljs$core$async25081(self__.f,self__.blockable,meta25082__$1));
});

cljs.core.async.t_cljs$core$async25081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25083){
var self__ = this;
var _25083__$1 = this;
return self__.meta25082;
});

cljs.core.async.t_cljs$core$async25081.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25081.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25082","meta25082",258071300,null)], null);
});

cljs.core.async.t_cljs$core$async25081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25081";

cljs.core.async.t_cljs$core$async25081.cljs$lang$ctorPrWriter = (function (this__22299__auto__,writer__22300__auto__,opt__22301__auto__){
return cljs.core._write.call(null,writer__22300__auto__,"cljs.core.async/t_cljs$core$async25081");
});

cljs.core.async.__GT_t_cljs$core$async25081 = (function cljs$core$async$__GT_t_cljs$core$async25081(f__$1,blockable__$1,meta25082){
return (new cljs.core.async.t_cljs$core$async25081(f__$1,blockable__$1,meta25082));
});

}

return (new cljs.core.async.t_cljs$core$async25081(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args25090 = [];
var len__22763__auto___25093 = arguments.length;
var i__22764__auto___25094 = (0);
while(true){
if((i__22764__auto___25094 < len__22763__auto___25093)){
args25090.push((arguments[i__22764__auto___25094]));

var G__25095 = (i__22764__auto___25094 + (1));
i__22764__auto___25094 = G__25095;
continue;
} else {
}
break;
}

var G__25092 = args25090.length;
switch (G__25092) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25090.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args25097 = [];
var len__22763__auto___25100 = arguments.length;
var i__22764__auto___25101 = (0);
while(true){
if((i__22764__auto___25101 < len__22763__auto___25100)){
args25097.push((arguments[i__22764__auto___25101]));

var G__25102 = (i__22764__auto___25101 + (1));
i__22764__auto___25101 = G__25102;
continue;
} else {
}
break;
}

var G__25099 = args25097.length;
switch (G__25099) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25097.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args25104 = [];
var len__22763__auto___25107 = arguments.length;
var i__22764__auto___25108 = (0);
while(true){
if((i__22764__auto___25108 < len__22763__auto___25107)){
args25104.push((arguments[i__22764__auto___25108]));

var G__25109 = (i__22764__auto___25108 + (1));
i__22764__auto___25108 = G__25109;
continue;
} else {
}
break;
}

var G__25106 = args25104.length;
switch (G__25106) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25104.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25111 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25111);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25111,ret){
return (function (){
return fn1.call(null,val_25111);
});})(val_25111,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25112 = [];
var len__22763__auto___25115 = arguments.length;
var i__22764__auto___25116 = (0);
while(true){
if((i__22764__auto___25116 < len__22763__auto___25115)){
args25112.push((arguments[i__22764__auto___25116]));

var G__25117 = (i__22764__auto___25116 + (1));
i__22764__auto___25116 = G__25117;
continue;
} else {
}
break;
}

var G__25114 = args25112.length;
switch (G__25114) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25112.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22608__auto___25119 = n;
var x_25120 = (0);
while(true){
if((x_25120 < n__22608__auto___25119)){
(a[x_25120] = (0));

var G__25121 = (x_25120 + (1));
x_25120 = G__25121;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25122 = (i + (1));
i = G__25122;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25126 = (function (alt_flag,flag,meta25127){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25127 = meta25127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25128,meta25127__$1){
var self__ = this;
var _25128__$1 = this;
return (new cljs.core.async.t_cljs$core$async25126(self__.alt_flag,self__.flag,meta25127__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25126.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25128){
var self__ = this;
var _25128__$1 = this;
return self__.meta25127;
});})(flag))
;

cljs.core.async.t_cljs$core$async25126.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25126.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25126.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25126.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25126.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25127","meta25127",-369113269,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25126";

cljs.core.async.t_cljs$core$async25126.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22299__auto__,writer__22300__auto__,opt__22301__auto__){
return cljs.core._write.call(null,writer__22300__auto__,"cljs.core.async/t_cljs$core$async25126");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25126 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25126(alt_flag__$1,flag__$1,meta25127){
return (new cljs.core.async.t_cljs$core$async25126(alt_flag__$1,flag__$1,meta25127));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25126(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25132 = (function (alt_handler,flag,cb,meta25133){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25133 = meta25133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25134,meta25133__$1){
var self__ = this;
var _25134__$1 = this;
return (new cljs.core.async.t_cljs$core$async25132(self__.alt_handler,self__.flag,self__.cb,meta25133__$1));
});

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25134){
var self__ = this;
var _25134__$1 = this;
return self__.meta25133;
});

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25133","meta25133",-947729399,null)], null);
});

cljs.core.async.t_cljs$core$async25132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25132";

cljs.core.async.t_cljs$core$async25132.cljs$lang$ctorPrWriter = (function (this__22299__auto__,writer__22300__auto__,opt__22301__auto__){
return cljs.core._write.call(null,writer__22300__auto__,"cljs.core.async/t_cljs$core$async25132");
});

cljs.core.async.__GT_t_cljs$core$async25132 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25132(alt_handler__$1,flag__$1,cb__$1,meta25133){
return (new cljs.core.async.t_cljs$core$async25132(alt_handler__$1,flag__$1,cb__$1,meta25133));
});

}

return (new cljs.core.async.t_cljs$core$async25132(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25135_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25135_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25136_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25136_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21693__auto__ = wport;
if(cljs.core.truth_(or__21693__auto__)){
return or__21693__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25137 = (i + (1));
i = G__25137;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21693__auto__ = ret;
if(cljs.core.truth_(or__21693__auto__)){
return or__21693__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21681__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21681__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21681__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___25143 = arguments.length;
var i__22764__auto___25144 = (0);
while(true){
if((i__22764__auto___25144 < len__22763__auto___25143)){
args__22770__auto__.push((arguments[i__22764__auto___25144]));

var G__25145 = (i__22764__auto___25144 + (1));
i__22764__auto___25144 = G__25145;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25140){
var map__25141 = p__25140;
var map__25141__$1 = ((((!((map__25141 == null)))?((((map__25141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25141):map__25141);
var opts = map__25141__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25138){
var G__25139 = cljs.core.first.call(null,seq25138);
var seq25138__$1 = cljs.core.next.call(null,seq25138);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25139,seq25138__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25146 = [];
var len__22763__auto___25196 = arguments.length;
var i__22764__auto___25197 = (0);
while(true){
if((i__22764__auto___25197 < len__22763__auto___25196)){
args25146.push((arguments[i__22764__auto___25197]));

var G__25198 = (i__22764__auto___25197 + (1));
i__22764__auto___25197 = G__25198;
continue;
} else {
}
break;
}

var G__25148 = args25146.length;
switch (G__25148) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25146.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25033__auto___25200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___25200){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___25200){
return (function (state_25172){
var state_val_25173 = (state_25172[(1)]);
if((state_val_25173 === (7))){
var inst_25168 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
var statearr_25174_25201 = state_25172__$1;
(statearr_25174_25201[(2)] = inst_25168);

(statearr_25174_25201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (1))){
var state_25172__$1 = state_25172;
var statearr_25175_25202 = state_25172__$1;
(statearr_25175_25202[(2)] = null);

(statearr_25175_25202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (4))){
var inst_25151 = (state_25172[(7)]);
var inst_25151__$1 = (state_25172[(2)]);
var inst_25152 = (inst_25151__$1 == null);
var state_25172__$1 = (function (){var statearr_25176 = state_25172;
(statearr_25176[(7)] = inst_25151__$1);

return statearr_25176;
})();
if(cljs.core.truth_(inst_25152)){
var statearr_25177_25203 = state_25172__$1;
(statearr_25177_25203[(1)] = (5));

} else {
var statearr_25178_25204 = state_25172__$1;
(statearr_25178_25204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (13))){
var state_25172__$1 = state_25172;
var statearr_25179_25205 = state_25172__$1;
(statearr_25179_25205[(2)] = null);

(statearr_25179_25205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (6))){
var inst_25151 = (state_25172[(7)]);
var state_25172__$1 = state_25172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25172__$1,(11),to,inst_25151);
} else {
if((state_val_25173 === (3))){
var inst_25170 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25172__$1,inst_25170);
} else {
if((state_val_25173 === (12))){
var state_25172__$1 = state_25172;
var statearr_25180_25206 = state_25172__$1;
(statearr_25180_25206[(2)] = null);

(statearr_25180_25206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (2))){
var state_25172__$1 = state_25172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25172__$1,(4),from);
} else {
if((state_val_25173 === (11))){
var inst_25161 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
if(cljs.core.truth_(inst_25161)){
var statearr_25181_25207 = state_25172__$1;
(statearr_25181_25207[(1)] = (12));

} else {
var statearr_25182_25208 = state_25172__$1;
(statearr_25182_25208[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (9))){
var state_25172__$1 = state_25172;
var statearr_25183_25209 = state_25172__$1;
(statearr_25183_25209[(2)] = null);

(statearr_25183_25209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (5))){
var state_25172__$1 = state_25172;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25184_25210 = state_25172__$1;
(statearr_25184_25210[(1)] = (8));

} else {
var statearr_25185_25211 = state_25172__$1;
(statearr_25185_25211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (14))){
var inst_25166 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
var statearr_25186_25212 = state_25172__$1;
(statearr_25186_25212[(2)] = inst_25166);

(statearr_25186_25212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (10))){
var inst_25158 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
var statearr_25187_25213 = state_25172__$1;
(statearr_25187_25213[(2)] = inst_25158);

(statearr_25187_25213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (8))){
var inst_25155 = cljs.core.async.close_BANG_.call(null,to);
var state_25172__$1 = state_25172;
var statearr_25188_25214 = state_25172__$1;
(statearr_25188_25214[(2)] = inst_25155);

(statearr_25188_25214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___25200))
;
return ((function (switch__24921__auto__,c__25033__auto___25200){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_25192 = [null,null,null,null,null,null,null,null];
(statearr_25192[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_25192[(1)] = (1));

return statearr_25192;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_25172){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_25172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e25193){if((e25193 instanceof Object)){
var ex__24925__auto__ = e25193;
var statearr_25194_25215 = state_25172;
(statearr_25194_25215[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25216 = state_25172;
state_25172 = G__25216;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_25172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_25172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___25200))
})();
var state__25035__auto__ = (function (){var statearr_25195 = f__25034__auto__.call(null);
(statearr_25195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___25200);

return statearr_25195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___25200))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25400){
var vec__25401 = p__25400;
var v = cljs.core.nth.call(null,vec__25401,(0),null);
var p = cljs.core.nth.call(null,vec__25401,(1),null);
var job = vec__25401;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25033__auto___25583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___25583,res,vec__25401,v,p,job,jobs,results){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___25583,res,vec__25401,v,p,job,jobs,results){
return (function (state_25406){
var state_val_25407 = (state_25406[(1)]);
if((state_val_25407 === (1))){
var state_25406__$1 = state_25406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25406__$1,(2),res,v);
} else {
if((state_val_25407 === (2))){
var inst_25403 = (state_25406[(2)]);
var inst_25404 = cljs.core.async.close_BANG_.call(null,res);
var state_25406__$1 = (function (){var statearr_25408 = state_25406;
(statearr_25408[(7)] = inst_25403);

return statearr_25408;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25406__$1,inst_25404);
} else {
return null;
}
}
});})(c__25033__auto___25583,res,vec__25401,v,p,job,jobs,results))
;
return ((function (switch__24921__auto__,c__25033__auto___25583,res,vec__25401,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0 = (function (){
var statearr_25412 = [null,null,null,null,null,null,null,null];
(statearr_25412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__);

(statearr_25412[(1)] = (1));

return statearr_25412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1 = (function (state_25406){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_25406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e25413){if((e25413 instanceof Object)){
var ex__24925__auto__ = e25413;
var statearr_25414_25584 = state_25406;
(statearr_25414_25584[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25585 = state_25406;
state_25406 = G__25585;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__ = function(state_25406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1.call(this,state_25406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___25583,res,vec__25401,v,p,job,jobs,results))
})();
var state__25035__auto__ = (function (){var statearr_25415 = f__25034__auto__.call(null);
(statearr_25415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___25583);

return statearr_25415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___25583,res,vec__25401,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25416){
var vec__25417 = p__25416;
var v = cljs.core.nth.call(null,vec__25417,(0),null);
var p = cljs.core.nth.call(null,vec__25417,(1),null);
var job = vec__25417;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22608__auto___25586 = n;
var __25587 = (0);
while(true){
if((__25587 < n__22608__auto___25586)){
var G__25418_25588 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25418_25588) {
case "compute":
var c__25033__auto___25590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25587,c__25033__auto___25590,G__25418_25588,n__22608__auto___25586,jobs,results,process,async){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (__25587,c__25033__auto___25590,G__25418_25588,n__22608__auto___25586,jobs,results,process,async){
return (function (state_25431){
var state_val_25432 = (state_25431[(1)]);
if((state_val_25432 === (1))){
var state_25431__$1 = state_25431;
var statearr_25433_25591 = state_25431__$1;
(statearr_25433_25591[(2)] = null);

(statearr_25433_25591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (2))){
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,(4),jobs);
} else {
if((state_val_25432 === (3))){
var inst_25429 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25431__$1,inst_25429);
} else {
if((state_val_25432 === (4))){
var inst_25421 = (state_25431[(2)]);
var inst_25422 = process.call(null,inst_25421);
var state_25431__$1 = state_25431;
if(cljs.core.truth_(inst_25422)){
var statearr_25434_25592 = state_25431__$1;
(statearr_25434_25592[(1)] = (5));

} else {
var statearr_25435_25593 = state_25431__$1;
(statearr_25435_25593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (5))){
var state_25431__$1 = state_25431;
var statearr_25436_25594 = state_25431__$1;
(statearr_25436_25594[(2)] = null);

(statearr_25436_25594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (6))){
var state_25431__$1 = state_25431;
var statearr_25437_25595 = state_25431__$1;
(statearr_25437_25595[(2)] = null);

(statearr_25437_25595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (7))){
var inst_25427 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25438_25596 = state_25431__$1;
(statearr_25438_25596[(2)] = inst_25427);

(statearr_25438_25596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25587,c__25033__auto___25590,G__25418_25588,n__22608__auto___25586,jobs,results,process,async))
;
return ((function (__25587,switch__24921__auto__,c__25033__auto___25590,G__25418_25588,n__22608__auto___25586,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0 = (function (){
var statearr_25442 = [null,null,null,null,null,null,null];
(statearr_25442[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__);

(statearr_25442[(1)] = (1));

return statearr_25442;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1 = (function (state_25431){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_25431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e25443){if((e25443 instanceof Object)){
var ex__24925__auto__ = e25443;
var statearr_25444_25597 = state_25431;
(statearr_25444_25597[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25598 = state_25431;
state_25431 = G__25598;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__ = function(state_25431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1.call(this,state_25431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__;
})()
;})(__25587,switch__24921__auto__,c__25033__auto___25590,G__25418_25588,n__22608__auto___25586,jobs,results,process,async))
})();
var state__25035__auto__ = (function (){var statearr_25445 = f__25034__auto__.call(null);
(statearr_25445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___25590);

return statearr_25445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(__25587,c__25033__auto___25590,G__25418_25588,n__22608__auto___25586,jobs,results,process,async))
);


break;
case "async":
var c__25033__auto___25599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25587,c__25033__auto___25599,G__25418_25588,n__22608__auto___25586,jobs,results,process,async){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (__25587,c__25033__auto___25599,G__25418_25588,n__22608__auto___25586,jobs,results,process,async){
return (function (state_25458){
var state_val_25459 = (state_25458[(1)]);
if((state_val_25459 === (1))){
var state_25458__$1 = state_25458;
var statearr_25460_25600 = state_25458__$1;
(statearr_25460_25600[(2)] = null);

(statearr_25460_25600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (2))){
var state_25458__$1 = state_25458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25458__$1,(4),jobs);
} else {
if((state_val_25459 === (3))){
var inst_25456 = (state_25458[(2)]);
var state_25458__$1 = state_25458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25458__$1,inst_25456);
} else {
if((state_val_25459 === (4))){
var inst_25448 = (state_25458[(2)]);
var inst_25449 = async.call(null,inst_25448);
var state_25458__$1 = state_25458;
if(cljs.core.truth_(inst_25449)){
var statearr_25461_25601 = state_25458__$1;
(statearr_25461_25601[(1)] = (5));

} else {
var statearr_25462_25602 = state_25458__$1;
(statearr_25462_25602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (5))){
var state_25458__$1 = state_25458;
var statearr_25463_25603 = state_25458__$1;
(statearr_25463_25603[(2)] = null);

(statearr_25463_25603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (6))){
var state_25458__$1 = state_25458;
var statearr_25464_25604 = state_25458__$1;
(statearr_25464_25604[(2)] = null);

(statearr_25464_25604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25459 === (7))){
var inst_25454 = (state_25458[(2)]);
var state_25458__$1 = state_25458;
var statearr_25465_25605 = state_25458__$1;
(statearr_25465_25605[(2)] = inst_25454);

(statearr_25465_25605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25587,c__25033__auto___25599,G__25418_25588,n__22608__auto___25586,jobs,results,process,async))
;
return ((function (__25587,switch__24921__auto__,c__25033__auto___25599,G__25418_25588,n__22608__auto___25586,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0 = (function (){
var statearr_25469 = [null,null,null,null,null,null,null];
(statearr_25469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__);

(statearr_25469[(1)] = (1));

return statearr_25469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1 = (function (state_25458){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_25458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e25470){if((e25470 instanceof Object)){
var ex__24925__auto__ = e25470;
var statearr_25471_25606 = state_25458;
(statearr_25471_25606[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25607 = state_25458;
state_25458 = G__25607;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__ = function(state_25458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1.call(this,state_25458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__;
})()
;})(__25587,switch__24921__auto__,c__25033__auto___25599,G__25418_25588,n__22608__auto___25586,jobs,results,process,async))
})();
var state__25035__auto__ = (function (){var statearr_25472 = f__25034__auto__.call(null);
(statearr_25472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___25599);

return statearr_25472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(__25587,c__25033__auto___25599,G__25418_25588,n__22608__auto___25586,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25608 = (__25587 + (1));
__25587 = G__25608;
continue;
} else {
}
break;
}

var c__25033__auto___25609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___25609,jobs,results,process,async){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___25609,jobs,results,process,async){
return (function (state_25494){
var state_val_25495 = (state_25494[(1)]);
if((state_val_25495 === (1))){
var state_25494__$1 = state_25494;
var statearr_25496_25610 = state_25494__$1;
(statearr_25496_25610[(2)] = null);

(statearr_25496_25610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25495 === (2))){
var state_25494__$1 = state_25494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25494__$1,(4),from);
} else {
if((state_val_25495 === (3))){
var inst_25492 = (state_25494[(2)]);
var state_25494__$1 = state_25494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25494__$1,inst_25492);
} else {
if((state_val_25495 === (4))){
var inst_25475 = (state_25494[(7)]);
var inst_25475__$1 = (state_25494[(2)]);
var inst_25476 = (inst_25475__$1 == null);
var state_25494__$1 = (function (){var statearr_25497 = state_25494;
(statearr_25497[(7)] = inst_25475__$1);

return statearr_25497;
})();
if(cljs.core.truth_(inst_25476)){
var statearr_25498_25611 = state_25494__$1;
(statearr_25498_25611[(1)] = (5));

} else {
var statearr_25499_25612 = state_25494__$1;
(statearr_25499_25612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25495 === (5))){
var inst_25478 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25494__$1 = state_25494;
var statearr_25500_25613 = state_25494__$1;
(statearr_25500_25613[(2)] = inst_25478);

(statearr_25500_25613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25495 === (6))){
var inst_25475 = (state_25494[(7)]);
var inst_25480 = (state_25494[(8)]);
var inst_25480__$1 = cljs.core.async.chan.call(null,(1));
var inst_25481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25482 = [inst_25475,inst_25480__$1];
var inst_25483 = (new cljs.core.PersistentVector(null,2,(5),inst_25481,inst_25482,null));
var state_25494__$1 = (function (){var statearr_25501 = state_25494;
(statearr_25501[(8)] = inst_25480__$1);

return statearr_25501;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25494__$1,(8),jobs,inst_25483);
} else {
if((state_val_25495 === (7))){
var inst_25490 = (state_25494[(2)]);
var state_25494__$1 = state_25494;
var statearr_25502_25614 = state_25494__$1;
(statearr_25502_25614[(2)] = inst_25490);

(statearr_25502_25614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25495 === (8))){
var inst_25480 = (state_25494[(8)]);
var inst_25485 = (state_25494[(2)]);
var state_25494__$1 = (function (){var statearr_25503 = state_25494;
(statearr_25503[(9)] = inst_25485);

return statearr_25503;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25494__$1,(9),results,inst_25480);
} else {
if((state_val_25495 === (9))){
var inst_25487 = (state_25494[(2)]);
var state_25494__$1 = (function (){var statearr_25504 = state_25494;
(statearr_25504[(10)] = inst_25487);

return statearr_25504;
})();
var statearr_25505_25615 = state_25494__$1;
(statearr_25505_25615[(2)] = null);

(statearr_25505_25615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___25609,jobs,results,process,async))
;
return ((function (switch__24921__auto__,c__25033__auto___25609,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0 = (function (){
var statearr_25509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__);

(statearr_25509[(1)] = (1));

return statearr_25509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1 = (function (state_25494){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_25494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e25510){if((e25510 instanceof Object)){
var ex__24925__auto__ = e25510;
var statearr_25511_25616 = state_25494;
(statearr_25511_25616[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25617 = state_25494;
state_25494 = G__25617;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__ = function(state_25494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1.call(this,state_25494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___25609,jobs,results,process,async))
})();
var state__25035__auto__ = (function (){var statearr_25512 = f__25034__auto__.call(null);
(statearr_25512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___25609);

return statearr_25512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___25609,jobs,results,process,async))
);


var c__25033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto__,jobs,results,process,async){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto__,jobs,results,process,async){
return (function (state_25550){
var state_val_25551 = (state_25550[(1)]);
if((state_val_25551 === (7))){
var inst_25546 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25552_25618 = state_25550__$1;
(statearr_25552_25618[(2)] = inst_25546);

(statearr_25552_25618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (20))){
var state_25550__$1 = state_25550;
var statearr_25553_25619 = state_25550__$1;
(statearr_25553_25619[(2)] = null);

(statearr_25553_25619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (1))){
var state_25550__$1 = state_25550;
var statearr_25554_25620 = state_25550__$1;
(statearr_25554_25620[(2)] = null);

(statearr_25554_25620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (4))){
var inst_25515 = (state_25550[(7)]);
var inst_25515__$1 = (state_25550[(2)]);
var inst_25516 = (inst_25515__$1 == null);
var state_25550__$1 = (function (){var statearr_25555 = state_25550;
(statearr_25555[(7)] = inst_25515__$1);

return statearr_25555;
})();
if(cljs.core.truth_(inst_25516)){
var statearr_25556_25621 = state_25550__$1;
(statearr_25556_25621[(1)] = (5));

} else {
var statearr_25557_25622 = state_25550__$1;
(statearr_25557_25622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (15))){
var inst_25528 = (state_25550[(8)]);
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25550__$1,(18),to,inst_25528);
} else {
if((state_val_25551 === (21))){
var inst_25541 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25558_25623 = state_25550__$1;
(statearr_25558_25623[(2)] = inst_25541);

(statearr_25558_25623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (13))){
var inst_25543 = (state_25550[(2)]);
var state_25550__$1 = (function (){var statearr_25559 = state_25550;
(statearr_25559[(9)] = inst_25543);

return statearr_25559;
})();
var statearr_25560_25624 = state_25550__$1;
(statearr_25560_25624[(2)] = null);

(statearr_25560_25624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (6))){
var inst_25515 = (state_25550[(7)]);
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25550__$1,(11),inst_25515);
} else {
if((state_val_25551 === (17))){
var inst_25536 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
if(cljs.core.truth_(inst_25536)){
var statearr_25561_25625 = state_25550__$1;
(statearr_25561_25625[(1)] = (19));

} else {
var statearr_25562_25626 = state_25550__$1;
(statearr_25562_25626[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (3))){
var inst_25548 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25550__$1,inst_25548);
} else {
if((state_val_25551 === (12))){
var inst_25525 = (state_25550[(10)]);
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25550__$1,(14),inst_25525);
} else {
if((state_val_25551 === (2))){
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25550__$1,(4),results);
} else {
if((state_val_25551 === (19))){
var state_25550__$1 = state_25550;
var statearr_25563_25627 = state_25550__$1;
(statearr_25563_25627[(2)] = null);

(statearr_25563_25627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (11))){
var inst_25525 = (state_25550[(2)]);
var state_25550__$1 = (function (){var statearr_25564 = state_25550;
(statearr_25564[(10)] = inst_25525);

return statearr_25564;
})();
var statearr_25565_25628 = state_25550__$1;
(statearr_25565_25628[(2)] = null);

(statearr_25565_25628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (9))){
var state_25550__$1 = state_25550;
var statearr_25566_25629 = state_25550__$1;
(statearr_25566_25629[(2)] = null);

(statearr_25566_25629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (5))){
var state_25550__$1 = state_25550;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25567_25630 = state_25550__$1;
(statearr_25567_25630[(1)] = (8));

} else {
var statearr_25568_25631 = state_25550__$1;
(statearr_25568_25631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (14))){
var inst_25530 = (state_25550[(11)]);
var inst_25528 = (state_25550[(8)]);
var inst_25528__$1 = (state_25550[(2)]);
var inst_25529 = (inst_25528__$1 == null);
var inst_25530__$1 = cljs.core.not.call(null,inst_25529);
var state_25550__$1 = (function (){var statearr_25569 = state_25550;
(statearr_25569[(11)] = inst_25530__$1);

(statearr_25569[(8)] = inst_25528__$1);

return statearr_25569;
})();
if(inst_25530__$1){
var statearr_25570_25632 = state_25550__$1;
(statearr_25570_25632[(1)] = (15));

} else {
var statearr_25571_25633 = state_25550__$1;
(statearr_25571_25633[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (16))){
var inst_25530 = (state_25550[(11)]);
var state_25550__$1 = state_25550;
var statearr_25572_25634 = state_25550__$1;
(statearr_25572_25634[(2)] = inst_25530);

(statearr_25572_25634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (10))){
var inst_25522 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25573_25635 = state_25550__$1;
(statearr_25573_25635[(2)] = inst_25522);

(statearr_25573_25635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (18))){
var inst_25533 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25574_25636 = state_25550__$1;
(statearr_25574_25636[(2)] = inst_25533);

(statearr_25574_25636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25551 === (8))){
var inst_25519 = cljs.core.async.close_BANG_.call(null,to);
var state_25550__$1 = state_25550;
var statearr_25575_25637 = state_25550__$1;
(statearr_25575_25637[(2)] = inst_25519);

(statearr_25575_25637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto__,jobs,results,process,async))
;
return ((function (switch__24921__auto__,c__25033__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0 = (function (){
var statearr_25579 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__);

(statearr_25579[(1)] = (1));

return statearr_25579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1 = (function (state_25550){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_25550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e25580){if((e25580 instanceof Object)){
var ex__24925__auto__ = e25580;
var statearr_25581_25638 = state_25550;
(statearr_25581_25638[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25639 = state_25550;
state_25550 = G__25639;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__ = function(state_25550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1.call(this,state_25550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto__,jobs,results,process,async))
})();
var state__25035__auto__ = (function (){var statearr_25582 = f__25034__auto__.call(null);
(statearr_25582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto__);

return statearr_25582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto__,jobs,results,process,async))
);

return c__25033__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25640 = [];
var len__22763__auto___25643 = arguments.length;
var i__22764__auto___25644 = (0);
while(true){
if((i__22764__auto___25644 < len__22763__auto___25643)){
args25640.push((arguments[i__22764__auto___25644]));

var G__25645 = (i__22764__auto___25644 + (1));
i__22764__auto___25644 = G__25645;
continue;
} else {
}
break;
}

var G__25642 = args25640.length;
switch (G__25642) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25640.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25647 = [];
var len__22763__auto___25650 = arguments.length;
var i__22764__auto___25651 = (0);
while(true){
if((i__22764__auto___25651 < len__22763__auto___25650)){
args25647.push((arguments[i__22764__auto___25651]));

var G__25652 = (i__22764__auto___25651 + (1));
i__22764__auto___25651 = G__25652;
continue;
} else {
}
break;
}

var G__25649 = args25647.length;
switch (G__25649) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25647.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25654 = [];
var len__22763__auto___25707 = arguments.length;
var i__22764__auto___25708 = (0);
while(true){
if((i__22764__auto___25708 < len__22763__auto___25707)){
args25654.push((arguments[i__22764__auto___25708]));

var G__25709 = (i__22764__auto___25708 + (1));
i__22764__auto___25708 = G__25709;
continue;
} else {
}
break;
}

var G__25656 = args25654.length;
switch (G__25656) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25654.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25033__auto___25711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___25711,tc,fc){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___25711,tc,fc){
return (function (state_25682){
var state_val_25683 = (state_25682[(1)]);
if((state_val_25683 === (7))){
var inst_25678 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
var statearr_25684_25712 = state_25682__$1;
(statearr_25684_25712[(2)] = inst_25678);

(statearr_25684_25712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (1))){
var state_25682__$1 = state_25682;
var statearr_25685_25713 = state_25682__$1;
(statearr_25685_25713[(2)] = null);

(statearr_25685_25713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (4))){
var inst_25659 = (state_25682[(7)]);
var inst_25659__$1 = (state_25682[(2)]);
var inst_25660 = (inst_25659__$1 == null);
var state_25682__$1 = (function (){var statearr_25686 = state_25682;
(statearr_25686[(7)] = inst_25659__$1);

return statearr_25686;
})();
if(cljs.core.truth_(inst_25660)){
var statearr_25687_25714 = state_25682__$1;
(statearr_25687_25714[(1)] = (5));

} else {
var statearr_25688_25715 = state_25682__$1;
(statearr_25688_25715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (13))){
var state_25682__$1 = state_25682;
var statearr_25689_25716 = state_25682__$1;
(statearr_25689_25716[(2)] = null);

(statearr_25689_25716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (6))){
var inst_25659 = (state_25682[(7)]);
var inst_25665 = p.call(null,inst_25659);
var state_25682__$1 = state_25682;
if(cljs.core.truth_(inst_25665)){
var statearr_25690_25717 = state_25682__$1;
(statearr_25690_25717[(1)] = (9));

} else {
var statearr_25691_25718 = state_25682__$1;
(statearr_25691_25718[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (3))){
var inst_25680 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25682__$1,inst_25680);
} else {
if((state_val_25683 === (12))){
var state_25682__$1 = state_25682;
var statearr_25692_25719 = state_25682__$1;
(statearr_25692_25719[(2)] = null);

(statearr_25692_25719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (2))){
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25682__$1,(4),ch);
} else {
if((state_val_25683 === (11))){
var inst_25659 = (state_25682[(7)]);
var inst_25669 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25682__$1,(8),inst_25669,inst_25659);
} else {
if((state_val_25683 === (9))){
var state_25682__$1 = state_25682;
var statearr_25693_25720 = state_25682__$1;
(statearr_25693_25720[(2)] = tc);

(statearr_25693_25720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (5))){
var inst_25662 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25663 = cljs.core.async.close_BANG_.call(null,fc);
var state_25682__$1 = (function (){var statearr_25694 = state_25682;
(statearr_25694[(8)] = inst_25662);

return statearr_25694;
})();
var statearr_25695_25721 = state_25682__$1;
(statearr_25695_25721[(2)] = inst_25663);

(statearr_25695_25721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (14))){
var inst_25676 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
var statearr_25696_25722 = state_25682__$1;
(statearr_25696_25722[(2)] = inst_25676);

(statearr_25696_25722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (10))){
var state_25682__$1 = state_25682;
var statearr_25697_25723 = state_25682__$1;
(statearr_25697_25723[(2)] = fc);

(statearr_25697_25723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (8))){
var inst_25671 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
if(cljs.core.truth_(inst_25671)){
var statearr_25698_25724 = state_25682__$1;
(statearr_25698_25724[(1)] = (12));

} else {
var statearr_25699_25725 = state_25682__$1;
(statearr_25699_25725[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___25711,tc,fc))
;
return ((function (switch__24921__auto__,c__25033__auto___25711,tc,fc){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_25703 = [null,null,null,null,null,null,null,null,null];
(statearr_25703[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_25703[(1)] = (1));

return statearr_25703;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_25682){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_25682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e25704){if((e25704 instanceof Object)){
var ex__24925__auto__ = e25704;
var statearr_25705_25726 = state_25682;
(statearr_25705_25726[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25727 = state_25682;
state_25682 = G__25727;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_25682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_25682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___25711,tc,fc))
})();
var state__25035__auto__ = (function (){var statearr_25706 = f__25034__auto__.call(null);
(statearr_25706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___25711);

return statearr_25706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___25711,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto__){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto__){
return (function (state_25791){
var state_val_25792 = (state_25791[(1)]);
if((state_val_25792 === (7))){
var inst_25787 = (state_25791[(2)]);
var state_25791__$1 = state_25791;
var statearr_25793_25814 = state_25791__$1;
(statearr_25793_25814[(2)] = inst_25787);

(statearr_25793_25814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (1))){
var inst_25771 = init;
var state_25791__$1 = (function (){var statearr_25794 = state_25791;
(statearr_25794[(7)] = inst_25771);

return statearr_25794;
})();
var statearr_25795_25815 = state_25791__$1;
(statearr_25795_25815[(2)] = null);

(statearr_25795_25815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (4))){
var inst_25774 = (state_25791[(8)]);
var inst_25774__$1 = (state_25791[(2)]);
var inst_25775 = (inst_25774__$1 == null);
var state_25791__$1 = (function (){var statearr_25796 = state_25791;
(statearr_25796[(8)] = inst_25774__$1);

return statearr_25796;
})();
if(cljs.core.truth_(inst_25775)){
var statearr_25797_25816 = state_25791__$1;
(statearr_25797_25816[(1)] = (5));

} else {
var statearr_25798_25817 = state_25791__$1;
(statearr_25798_25817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (6))){
var inst_25771 = (state_25791[(7)]);
var inst_25778 = (state_25791[(9)]);
var inst_25774 = (state_25791[(8)]);
var inst_25778__$1 = f.call(null,inst_25771,inst_25774);
var inst_25779 = cljs.core.reduced_QMARK_.call(null,inst_25778__$1);
var state_25791__$1 = (function (){var statearr_25799 = state_25791;
(statearr_25799[(9)] = inst_25778__$1);

return statearr_25799;
})();
if(inst_25779){
var statearr_25800_25818 = state_25791__$1;
(statearr_25800_25818[(1)] = (8));

} else {
var statearr_25801_25819 = state_25791__$1;
(statearr_25801_25819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (3))){
var inst_25789 = (state_25791[(2)]);
var state_25791__$1 = state_25791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25791__$1,inst_25789);
} else {
if((state_val_25792 === (2))){
var state_25791__$1 = state_25791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25791__$1,(4),ch);
} else {
if((state_val_25792 === (9))){
var inst_25778 = (state_25791[(9)]);
var inst_25771 = inst_25778;
var state_25791__$1 = (function (){var statearr_25802 = state_25791;
(statearr_25802[(7)] = inst_25771);

return statearr_25802;
})();
var statearr_25803_25820 = state_25791__$1;
(statearr_25803_25820[(2)] = null);

(statearr_25803_25820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (5))){
var inst_25771 = (state_25791[(7)]);
var state_25791__$1 = state_25791;
var statearr_25804_25821 = state_25791__$1;
(statearr_25804_25821[(2)] = inst_25771);

(statearr_25804_25821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (10))){
var inst_25785 = (state_25791[(2)]);
var state_25791__$1 = state_25791;
var statearr_25805_25822 = state_25791__$1;
(statearr_25805_25822[(2)] = inst_25785);

(statearr_25805_25822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (8))){
var inst_25778 = (state_25791[(9)]);
var inst_25781 = cljs.core.deref.call(null,inst_25778);
var state_25791__$1 = state_25791;
var statearr_25806_25823 = state_25791__$1;
(statearr_25806_25823[(2)] = inst_25781);

(statearr_25806_25823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto__))
;
return ((function (switch__24921__auto__,c__25033__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24922__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24922__auto____0 = (function (){
var statearr_25810 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25810[(0)] = cljs$core$async$reduce_$_state_machine__24922__auto__);

(statearr_25810[(1)] = (1));

return statearr_25810;
});
var cljs$core$async$reduce_$_state_machine__24922__auto____1 = (function (state_25791){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_25791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e25811){if((e25811 instanceof Object)){
var ex__24925__auto__ = e25811;
var statearr_25812_25824 = state_25791;
(statearr_25812_25824[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25825 = state_25791;
state_25791 = G__25825;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24922__auto__ = function(state_25791){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24922__auto____1.call(this,state_25791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24922__auto____0;
cljs$core$async$reduce_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24922__auto____1;
return cljs$core$async$reduce_$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto__))
})();
var state__25035__auto__ = (function (){var statearr_25813 = f__25034__auto__.call(null);
(statearr_25813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto__);

return statearr_25813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto__))
);

return c__25033__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25826 = [];
var len__22763__auto___25878 = arguments.length;
var i__22764__auto___25879 = (0);
while(true){
if((i__22764__auto___25879 < len__22763__auto___25878)){
args25826.push((arguments[i__22764__auto___25879]));

var G__25880 = (i__22764__auto___25879 + (1));
i__22764__auto___25879 = G__25880;
continue;
} else {
}
break;
}

var G__25828 = args25826.length;
switch (G__25828) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25826.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto__){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto__){
return (function (state_25853){
var state_val_25854 = (state_25853[(1)]);
if((state_val_25854 === (7))){
var inst_25835 = (state_25853[(2)]);
var state_25853__$1 = state_25853;
var statearr_25855_25882 = state_25853__$1;
(statearr_25855_25882[(2)] = inst_25835);

(statearr_25855_25882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25854 === (1))){
var inst_25829 = cljs.core.seq.call(null,coll);
var inst_25830 = inst_25829;
var state_25853__$1 = (function (){var statearr_25856 = state_25853;
(statearr_25856[(7)] = inst_25830);

return statearr_25856;
})();
var statearr_25857_25883 = state_25853__$1;
(statearr_25857_25883[(2)] = null);

(statearr_25857_25883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25854 === (4))){
var inst_25830 = (state_25853[(7)]);
var inst_25833 = cljs.core.first.call(null,inst_25830);
var state_25853__$1 = state_25853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25853__$1,(7),ch,inst_25833);
} else {
if((state_val_25854 === (13))){
var inst_25847 = (state_25853[(2)]);
var state_25853__$1 = state_25853;
var statearr_25858_25884 = state_25853__$1;
(statearr_25858_25884[(2)] = inst_25847);

(statearr_25858_25884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25854 === (6))){
var inst_25838 = (state_25853[(2)]);
var state_25853__$1 = state_25853;
if(cljs.core.truth_(inst_25838)){
var statearr_25859_25885 = state_25853__$1;
(statearr_25859_25885[(1)] = (8));

} else {
var statearr_25860_25886 = state_25853__$1;
(statearr_25860_25886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25854 === (3))){
var inst_25851 = (state_25853[(2)]);
var state_25853__$1 = state_25853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25853__$1,inst_25851);
} else {
if((state_val_25854 === (12))){
var state_25853__$1 = state_25853;
var statearr_25861_25887 = state_25853__$1;
(statearr_25861_25887[(2)] = null);

(statearr_25861_25887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25854 === (2))){
var inst_25830 = (state_25853[(7)]);
var state_25853__$1 = state_25853;
if(cljs.core.truth_(inst_25830)){
var statearr_25862_25888 = state_25853__$1;
(statearr_25862_25888[(1)] = (4));

} else {
var statearr_25863_25889 = state_25853__$1;
(statearr_25863_25889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25854 === (11))){
var inst_25844 = cljs.core.async.close_BANG_.call(null,ch);
var state_25853__$1 = state_25853;
var statearr_25864_25890 = state_25853__$1;
(statearr_25864_25890[(2)] = inst_25844);

(statearr_25864_25890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25854 === (9))){
var state_25853__$1 = state_25853;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25865_25891 = state_25853__$1;
(statearr_25865_25891[(1)] = (11));

} else {
var statearr_25866_25892 = state_25853__$1;
(statearr_25866_25892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25854 === (5))){
var inst_25830 = (state_25853[(7)]);
var state_25853__$1 = state_25853;
var statearr_25867_25893 = state_25853__$1;
(statearr_25867_25893[(2)] = inst_25830);

(statearr_25867_25893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25854 === (10))){
var inst_25849 = (state_25853[(2)]);
var state_25853__$1 = state_25853;
var statearr_25868_25894 = state_25853__$1;
(statearr_25868_25894[(2)] = inst_25849);

(statearr_25868_25894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25854 === (8))){
var inst_25830 = (state_25853[(7)]);
var inst_25840 = cljs.core.next.call(null,inst_25830);
var inst_25830__$1 = inst_25840;
var state_25853__$1 = (function (){var statearr_25869 = state_25853;
(statearr_25869[(7)] = inst_25830__$1);

return statearr_25869;
})();
var statearr_25870_25895 = state_25853__$1;
(statearr_25870_25895[(2)] = null);

(statearr_25870_25895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto__))
;
return ((function (switch__24921__auto__,c__25033__auto__){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_25874 = [null,null,null,null,null,null,null,null];
(statearr_25874[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_25874[(1)] = (1));

return statearr_25874;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_25853){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_25853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e25875){if((e25875 instanceof Object)){
var ex__24925__auto__ = e25875;
var statearr_25876_25896 = state_25853;
(statearr_25876_25896[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25897 = state_25853;
state_25853 = G__25897;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_25853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_25853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto__))
})();
var state__25035__auto__ = (function (){var statearr_25877 = f__25034__auto__.call(null);
(statearr_25877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto__);

return statearr_25877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto__))
);

return c__25033__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22356__auto__ = (((_ == null))?null:_);
var m__22357__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,_);
} else {
var m__22357__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22356__auto__ = (((m == null))?null:m);
var m__22357__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22357__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22356__auto__ = (((m == null))?null:m);
var m__22357__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,m,ch);
} else {
var m__22357__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22356__auto__ = (((m == null))?null:m);
var m__22357__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,m);
} else {
var m__22357__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26119 = (function (mult,ch,cs,meta26120){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26120 = meta26120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26121,meta26120__$1){
var self__ = this;
var _26121__$1 = this;
return (new cljs.core.async.t_cljs$core$async26119(self__.mult,self__.ch,self__.cs,meta26120__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26121){
var self__ = this;
var _26121__$1 = this;
return self__.meta26120;
});})(cs))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26119.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26120","meta26120",2138889341,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26119";

cljs.core.async.t_cljs$core$async26119.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22299__auto__,writer__22300__auto__,opt__22301__auto__){
return cljs.core._write.call(null,writer__22300__auto__,"cljs.core.async/t_cljs$core$async26119");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26119 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26119(mult__$1,ch__$1,cs__$1,meta26120){
return (new cljs.core.async.t_cljs$core$async26119(mult__$1,ch__$1,cs__$1,meta26120));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26119(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25033__auto___26340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___26340,cs,m,dchan,dctr,done){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___26340,cs,m,dchan,dctr,done){
return (function (state_26252){
var state_val_26253 = (state_26252[(1)]);
if((state_val_26253 === (7))){
var inst_26248 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
var statearr_26254_26341 = state_26252__$1;
(statearr_26254_26341[(2)] = inst_26248);

(statearr_26254_26341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (20))){
var inst_26153 = (state_26252[(7)]);
var inst_26163 = cljs.core.first.call(null,inst_26153);
var inst_26164 = cljs.core.nth.call(null,inst_26163,(0),null);
var inst_26165 = cljs.core.nth.call(null,inst_26163,(1),null);
var state_26252__$1 = (function (){var statearr_26255 = state_26252;
(statearr_26255[(8)] = inst_26164);

return statearr_26255;
})();
if(cljs.core.truth_(inst_26165)){
var statearr_26256_26342 = state_26252__$1;
(statearr_26256_26342[(1)] = (22));

} else {
var statearr_26257_26343 = state_26252__$1;
(statearr_26257_26343[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (27))){
var inst_26195 = (state_26252[(9)]);
var inst_26193 = (state_26252[(10)]);
var inst_26124 = (state_26252[(11)]);
var inst_26200 = (state_26252[(12)]);
var inst_26200__$1 = cljs.core._nth.call(null,inst_26193,inst_26195);
var inst_26201 = cljs.core.async.put_BANG_.call(null,inst_26200__$1,inst_26124,done);
var state_26252__$1 = (function (){var statearr_26258 = state_26252;
(statearr_26258[(12)] = inst_26200__$1);

return statearr_26258;
})();
if(cljs.core.truth_(inst_26201)){
var statearr_26259_26344 = state_26252__$1;
(statearr_26259_26344[(1)] = (30));

} else {
var statearr_26260_26345 = state_26252__$1;
(statearr_26260_26345[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (1))){
var state_26252__$1 = state_26252;
var statearr_26261_26346 = state_26252__$1;
(statearr_26261_26346[(2)] = null);

(statearr_26261_26346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (24))){
var inst_26153 = (state_26252[(7)]);
var inst_26170 = (state_26252[(2)]);
var inst_26171 = cljs.core.next.call(null,inst_26153);
var inst_26133 = inst_26171;
var inst_26134 = null;
var inst_26135 = (0);
var inst_26136 = (0);
var state_26252__$1 = (function (){var statearr_26262 = state_26252;
(statearr_26262[(13)] = inst_26133);

(statearr_26262[(14)] = inst_26135);

(statearr_26262[(15)] = inst_26134);

(statearr_26262[(16)] = inst_26170);

(statearr_26262[(17)] = inst_26136);

return statearr_26262;
})();
var statearr_26263_26347 = state_26252__$1;
(statearr_26263_26347[(2)] = null);

(statearr_26263_26347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (39))){
var state_26252__$1 = state_26252;
var statearr_26267_26348 = state_26252__$1;
(statearr_26267_26348[(2)] = null);

(statearr_26267_26348[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (4))){
var inst_26124 = (state_26252[(11)]);
var inst_26124__$1 = (state_26252[(2)]);
var inst_26125 = (inst_26124__$1 == null);
var state_26252__$1 = (function (){var statearr_26268 = state_26252;
(statearr_26268[(11)] = inst_26124__$1);

return statearr_26268;
})();
if(cljs.core.truth_(inst_26125)){
var statearr_26269_26349 = state_26252__$1;
(statearr_26269_26349[(1)] = (5));

} else {
var statearr_26270_26350 = state_26252__$1;
(statearr_26270_26350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (15))){
var inst_26133 = (state_26252[(13)]);
var inst_26135 = (state_26252[(14)]);
var inst_26134 = (state_26252[(15)]);
var inst_26136 = (state_26252[(17)]);
var inst_26149 = (state_26252[(2)]);
var inst_26150 = (inst_26136 + (1));
var tmp26264 = inst_26133;
var tmp26265 = inst_26135;
var tmp26266 = inst_26134;
var inst_26133__$1 = tmp26264;
var inst_26134__$1 = tmp26266;
var inst_26135__$1 = tmp26265;
var inst_26136__$1 = inst_26150;
var state_26252__$1 = (function (){var statearr_26271 = state_26252;
(statearr_26271[(18)] = inst_26149);

(statearr_26271[(13)] = inst_26133__$1);

(statearr_26271[(14)] = inst_26135__$1);

(statearr_26271[(15)] = inst_26134__$1);

(statearr_26271[(17)] = inst_26136__$1);

return statearr_26271;
})();
var statearr_26272_26351 = state_26252__$1;
(statearr_26272_26351[(2)] = null);

(statearr_26272_26351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (21))){
var inst_26174 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
var statearr_26276_26352 = state_26252__$1;
(statearr_26276_26352[(2)] = inst_26174);

(statearr_26276_26352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (31))){
var inst_26200 = (state_26252[(12)]);
var inst_26204 = done.call(null,null);
var inst_26205 = cljs.core.async.untap_STAR_.call(null,m,inst_26200);
var state_26252__$1 = (function (){var statearr_26277 = state_26252;
(statearr_26277[(19)] = inst_26204);

return statearr_26277;
})();
var statearr_26278_26353 = state_26252__$1;
(statearr_26278_26353[(2)] = inst_26205);

(statearr_26278_26353[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (32))){
var inst_26195 = (state_26252[(9)]);
var inst_26193 = (state_26252[(10)]);
var inst_26194 = (state_26252[(20)]);
var inst_26192 = (state_26252[(21)]);
var inst_26207 = (state_26252[(2)]);
var inst_26208 = (inst_26195 + (1));
var tmp26273 = inst_26193;
var tmp26274 = inst_26194;
var tmp26275 = inst_26192;
var inst_26192__$1 = tmp26275;
var inst_26193__$1 = tmp26273;
var inst_26194__$1 = tmp26274;
var inst_26195__$1 = inst_26208;
var state_26252__$1 = (function (){var statearr_26279 = state_26252;
(statearr_26279[(22)] = inst_26207);

(statearr_26279[(9)] = inst_26195__$1);

(statearr_26279[(10)] = inst_26193__$1);

(statearr_26279[(20)] = inst_26194__$1);

(statearr_26279[(21)] = inst_26192__$1);

return statearr_26279;
})();
var statearr_26280_26354 = state_26252__$1;
(statearr_26280_26354[(2)] = null);

(statearr_26280_26354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (40))){
var inst_26220 = (state_26252[(23)]);
var inst_26224 = done.call(null,null);
var inst_26225 = cljs.core.async.untap_STAR_.call(null,m,inst_26220);
var state_26252__$1 = (function (){var statearr_26281 = state_26252;
(statearr_26281[(24)] = inst_26224);

return statearr_26281;
})();
var statearr_26282_26355 = state_26252__$1;
(statearr_26282_26355[(2)] = inst_26225);

(statearr_26282_26355[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (33))){
var inst_26211 = (state_26252[(25)]);
var inst_26213 = cljs.core.chunked_seq_QMARK_.call(null,inst_26211);
var state_26252__$1 = state_26252;
if(inst_26213){
var statearr_26283_26356 = state_26252__$1;
(statearr_26283_26356[(1)] = (36));

} else {
var statearr_26284_26357 = state_26252__$1;
(statearr_26284_26357[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (13))){
var inst_26143 = (state_26252[(26)]);
var inst_26146 = cljs.core.async.close_BANG_.call(null,inst_26143);
var state_26252__$1 = state_26252;
var statearr_26285_26358 = state_26252__$1;
(statearr_26285_26358[(2)] = inst_26146);

(statearr_26285_26358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (22))){
var inst_26164 = (state_26252[(8)]);
var inst_26167 = cljs.core.async.close_BANG_.call(null,inst_26164);
var state_26252__$1 = state_26252;
var statearr_26286_26359 = state_26252__$1;
(statearr_26286_26359[(2)] = inst_26167);

(statearr_26286_26359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (36))){
var inst_26211 = (state_26252[(25)]);
var inst_26215 = cljs.core.chunk_first.call(null,inst_26211);
var inst_26216 = cljs.core.chunk_rest.call(null,inst_26211);
var inst_26217 = cljs.core.count.call(null,inst_26215);
var inst_26192 = inst_26216;
var inst_26193 = inst_26215;
var inst_26194 = inst_26217;
var inst_26195 = (0);
var state_26252__$1 = (function (){var statearr_26287 = state_26252;
(statearr_26287[(9)] = inst_26195);

(statearr_26287[(10)] = inst_26193);

(statearr_26287[(20)] = inst_26194);

(statearr_26287[(21)] = inst_26192);

return statearr_26287;
})();
var statearr_26288_26360 = state_26252__$1;
(statearr_26288_26360[(2)] = null);

(statearr_26288_26360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (41))){
var inst_26211 = (state_26252[(25)]);
var inst_26227 = (state_26252[(2)]);
var inst_26228 = cljs.core.next.call(null,inst_26211);
var inst_26192 = inst_26228;
var inst_26193 = null;
var inst_26194 = (0);
var inst_26195 = (0);
var state_26252__$1 = (function (){var statearr_26289 = state_26252;
(statearr_26289[(9)] = inst_26195);

(statearr_26289[(27)] = inst_26227);

(statearr_26289[(10)] = inst_26193);

(statearr_26289[(20)] = inst_26194);

(statearr_26289[(21)] = inst_26192);

return statearr_26289;
})();
var statearr_26290_26361 = state_26252__$1;
(statearr_26290_26361[(2)] = null);

(statearr_26290_26361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (43))){
var state_26252__$1 = state_26252;
var statearr_26291_26362 = state_26252__$1;
(statearr_26291_26362[(2)] = null);

(statearr_26291_26362[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (29))){
var inst_26236 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
var statearr_26292_26363 = state_26252__$1;
(statearr_26292_26363[(2)] = inst_26236);

(statearr_26292_26363[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (44))){
var inst_26245 = (state_26252[(2)]);
var state_26252__$1 = (function (){var statearr_26293 = state_26252;
(statearr_26293[(28)] = inst_26245);

return statearr_26293;
})();
var statearr_26294_26364 = state_26252__$1;
(statearr_26294_26364[(2)] = null);

(statearr_26294_26364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (6))){
var inst_26184 = (state_26252[(29)]);
var inst_26183 = cljs.core.deref.call(null,cs);
var inst_26184__$1 = cljs.core.keys.call(null,inst_26183);
var inst_26185 = cljs.core.count.call(null,inst_26184__$1);
var inst_26186 = cljs.core.reset_BANG_.call(null,dctr,inst_26185);
var inst_26191 = cljs.core.seq.call(null,inst_26184__$1);
var inst_26192 = inst_26191;
var inst_26193 = null;
var inst_26194 = (0);
var inst_26195 = (0);
var state_26252__$1 = (function (){var statearr_26295 = state_26252;
(statearr_26295[(29)] = inst_26184__$1);

(statearr_26295[(9)] = inst_26195);

(statearr_26295[(10)] = inst_26193);

(statearr_26295[(20)] = inst_26194);

(statearr_26295[(30)] = inst_26186);

(statearr_26295[(21)] = inst_26192);

return statearr_26295;
})();
var statearr_26296_26365 = state_26252__$1;
(statearr_26296_26365[(2)] = null);

(statearr_26296_26365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (28))){
var inst_26211 = (state_26252[(25)]);
var inst_26192 = (state_26252[(21)]);
var inst_26211__$1 = cljs.core.seq.call(null,inst_26192);
var state_26252__$1 = (function (){var statearr_26297 = state_26252;
(statearr_26297[(25)] = inst_26211__$1);

return statearr_26297;
})();
if(inst_26211__$1){
var statearr_26298_26366 = state_26252__$1;
(statearr_26298_26366[(1)] = (33));

} else {
var statearr_26299_26367 = state_26252__$1;
(statearr_26299_26367[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (25))){
var inst_26195 = (state_26252[(9)]);
var inst_26194 = (state_26252[(20)]);
var inst_26197 = (inst_26195 < inst_26194);
var inst_26198 = inst_26197;
var state_26252__$1 = state_26252;
if(cljs.core.truth_(inst_26198)){
var statearr_26300_26368 = state_26252__$1;
(statearr_26300_26368[(1)] = (27));

} else {
var statearr_26301_26369 = state_26252__$1;
(statearr_26301_26369[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (34))){
var state_26252__$1 = state_26252;
var statearr_26302_26370 = state_26252__$1;
(statearr_26302_26370[(2)] = null);

(statearr_26302_26370[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (17))){
var state_26252__$1 = state_26252;
var statearr_26303_26371 = state_26252__$1;
(statearr_26303_26371[(2)] = null);

(statearr_26303_26371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (3))){
var inst_26250 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26252__$1,inst_26250);
} else {
if((state_val_26253 === (12))){
var inst_26179 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
var statearr_26304_26372 = state_26252__$1;
(statearr_26304_26372[(2)] = inst_26179);

(statearr_26304_26372[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (2))){
var state_26252__$1 = state_26252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26252__$1,(4),ch);
} else {
if((state_val_26253 === (23))){
var state_26252__$1 = state_26252;
var statearr_26305_26373 = state_26252__$1;
(statearr_26305_26373[(2)] = null);

(statearr_26305_26373[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (35))){
var inst_26234 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
var statearr_26306_26374 = state_26252__$1;
(statearr_26306_26374[(2)] = inst_26234);

(statearr_26306_26374[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (19))){
var inst_26153 = (state_26252[(7)]);
var inst_26157 = cljs.core.chunk_first.call(null,inst_26153);
var inst_26158 = cljs.core.chunk_rest.call(null,inst_26153);
var inst_26159 = cljs.core.count.call(null,inst_26157);
var inst_26133 = inst_26158;
var inst_26134 = inst_26157;
var inst_26135 = inst_26159;
var inst_26136 = (0);
var state_26252__$1 = (function (){var statearr_26307 = state_26252;
(statearr_26307[(13)] = inst_26133);

(statearr_26307[(14)] = inst_26135);

(statearr_26307[(15)] = inst_26134);

(statearr_26307[(17)] = inst_26136);

return statearr_26307;
})();
var statearr_26308_26375 = state_26252__$1;
(statearr_26308_26375[(2)] = null);

(statearr_26308_26375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (11))){
var inst_26133 = (state_26252[(13)]);
var inst_26153 = (state_26252[(7)]);
var inst_26153__$1 = cljs.core.seq.call(null,inst_26133);
var state_26252__$1 = (function (){var statearr_26309 = state_26252;
(statearr_26309[(7)] = inst_26153__$1);

return statearr_26309;
})();
if(inst_26153__$1){
var statearr_26310_26376 = state_26252__$1;
(statearr_26310_26376[(1)] = (16));

} else {
var statearr_26311_26377 = state_26252__$1;
(statearr_26311_26377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (9))){
var inst_26181 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
var statearr_26312_26378 = state_26252__$1;
(statearr_26312_26378[(2)] = inst_26181);

(statearr_26312_26378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (5))){
var inst_26131 = cljs.core.deref.call(null,cs);
var inst_26132 = cljs.core.seq.call(null,inst_26131);
var inst_26133 = inst_26132;
var inst_26134 = null;
var inst_26135 = (0);
var inst_26136 = (0);
var state_26252__$1 = (function (){var statearr_26313 = state_26252;
(statearr_26313[(13)] = inst_26133);

(statearr_26313[(14)] = inst_26135);

(statearr_26313[(15)] = inst_26134);

(statearr_26313[(17)] = inst_26136);

return statearr_26313;
})();
var statearr_26314_26379 = state_26252__$1;
(statearr_26314_26379[(2)] = null);

(statearr_26314_26379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (14))){
var state_26252__$1 = state_26252;
var statearr_26315_26380 = state_26252__$1;
(statearr_26315_26380[(2)] = null);

(statearr_26315_26380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (45))){
var inst_26242 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
var statearr_26316_26381 = state_26252__$1;
(statearr_26316_26381[(2)] = inst_26242);

(statearr_26316_26381[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (26))){
var inst_26184 = (state_26252[(29)]);
var inst_26238 = (state_26252[(2)]);
var inst_26239 = cljs.core.seq.call(null,inst_26184);
var state_26252__$1 = (function (){var statearr_26317 = state_26252;
(statearr_26317[(31)] = inst_26238);

return statearr_26317;
})();
if(inst_26239){
var statearr_26318_26382 = state_26252__$1;
(statearr_26318_26382[(1)] = (42));

} else {
var statearr_26319_26383 = state_26252__$1;
(statearr_26319_26383[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (16))){
var inst_26153 = (state_26252[(7)]);
var inst_26155 = cljs.core.chunked_seq_QMARK_.call(null,inst_26153);
var state_26252__$1 = state_26252;
if(inst_26155){
var statearr_26320_26384 = state_26252__$1;
(statearr_26320_26384[(1)] = (19));

} else {
var statearr_26321_26385 = state_26252__$1;
(statearr_26321_26385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (38))){
var inst_26231 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
var statearr_26322_26386 = state_26252__$1;
(statearr_26322_26386[(2)] = inst_26231);

(statearr_26322_26386[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (30))){
var state_26252__$1 = state_26252;
var statearr_26323_26387 = state_26252__$1;
(statearr_26323_26387[(2)] = null);

(statearr_26323_26387[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (10))){
var inst_26134 = (state_26252[(15)]);
var inst_26136 = (state_26252[(17)]);
var inst_26142 = cljs.core._nth.call(null,inst_26134,inst_26136);
var inst_26143 = cljs.core.nth.call(null,inst_26142,(0),null);
var inst_26144 = cljs.core.nth.call(null,inst_26142,(1),null);
var state_26252__$1 = (function (){var statearr_26324 = state_26252;
(statearr_26324[(26)] = inst_26143);

return statearr_26324;
})();
if(cljs.core.truth_(inst_26144)){
var statearr_26325_26388 = state_26252__$1;
(statearr_26325_26388[(1)] = (13));

} else {
var statearr_26326_26389 = state_26252__$1;
(statearr_26326_26389[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (18))){
var inst_26177 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
var statearr_26327_26390 = state_26252__$1;
(statearr_26327_26390[(2)] = inst_26177);

(statearr_26327_26390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (42))){
var state_26252__$1 = state_26252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26252__$1,(45),dchan);
} else {
if((state_val_26253 === (37))){
var inst_26211 = (state_26252[(25)]);
var inst_26124 = (state_26252[(11)]);
var inst_26220 = (state_26252[(23)]);
var inst_26220__$1 = cljs.core.first.call(null,inst_26211);
var inst_26221 = cljs.core.async.put_BANG_.call(null,inst_26220__$1,inst_26124,done);
var state_26252__$1 = (function (){var statearr_26328 = state_26252;
(statearr_26328[(23)] = inst_26220__$1);

return statearr_26328;
})();
if(cljs.core.truth_(inst_26221)){
var statearr_26329_26391 = state_26252__$1;
(statearr_26329_26391[(1)] = (39));

} else {
var statearr_26330_26392 = state_26252__$1;
(statearr_26330_26392[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (8))){
var inst_26135 = (state_26252[(14)]);
var inst_26136 = (state_26252[(17)]);
var inst_26138 = (inst_26136 < inst_26135);
var inst_26139 = inst_26138;
var state_26252__$1 = state_26252;
if(cljs.core.truth_(inst_26139)){
var statearr_26331_26393 = state_26252__$1;
(statearr_26331_26393[(1)] = (10));

} else {
var statearr_26332_26394 = state_26252__$1;
(statearr_26332_26394[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___26340,cs,m,dchan,dctr,done))
;
return ((function (switch__24921__auto__,c__25033__auto___26340,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24922__auto__ = null;
var cljs$core$async$mult_$_state_machine__24922__auto____0 = (function (){
var statearr_26336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26336[(0)] = cljs$core$async$mult_$_state_machine__24922__auto__);

(statearr_26336[(1)] = (1));

return statearr_26336;
});
var cljs$core$async$mult_$_state_machine__24922__auto____1 = (function (state_26252){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_26252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e26337){if((e26337 instanceof Object)){
var ex__24925__auto__ = e26337;
var statearr_26338_26395 = state_26252;
(statearr_26338_26395[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26396 = state_26252;
state_26252 = G__26396;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24922__auto__ = function(state_26252){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24922__auto____1.call(this,state_26252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24922__auto____0;
cljs$core$async$mult_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24922__auto____1;
return cljs$core$async$mult_$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___26340,cs,m,dchan,dctr,done))
})();
var state__25035__auto__ = (function (){var statearr_26339 = f__25034__auto__.call(null);
(statearr_26339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___26340);

return statearr_26339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___26340,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26397 = [];
var len__22763__auto___26400 = arguments.length;
var i__22764__auto___26401 = (0);
while(true){
if((i__22764__auto___26401 < len__22763__auto___26400)){
args26397.push((arguments[i__22764__auto___26401]));

var G__26402 = (i__22764__auto___26401 + (1));
i__22764__auto___26401 = G__26402;
continue;
} else {
}
break;
}

var G__26399 = args26397.length;
switch (G__26399) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26397.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22356__auto__ = (((m == null))?null:m);
var m__22357__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,m,ch);
} else {
var m__22357__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22356__auto__ = (((m == null))?null:m);
var m__22357__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,m,ch);
} else {
var m__22357__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22356__auto__ = (((m == null))?null:m);
var m__22357__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,m);
} else {
var m__22357__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22356__auto__ = (((m == null))?null:m);
var m__22357__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,m,state_map);
} else {
var m__22357__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22356__auto__ = (((m == null))?null:m);
var m__22357__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,m,mode);
} else {
var m__22357__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___26414 = arguments.length;
var i__22764__auto___26415 = (0);
while(true){
if((i__22764__auto___26415 < len__22763__auto___26414)){
args__22770__auto__.push((arguments[i__22764__auto___26415]));

var G__26416 = (i__22764__auto___26415 + (1));
i__22764__auto___26415 = G__26416;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((3) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22771__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26408){
var map__26409 = p__26408;
var map__26409__$1 = ((((!((map__26409 == null)))?((((map__26409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26409):map__26409);
var opts = map__26409__$1;
var statearr_26411_26417 = state;
(statearr_26411_26417[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26409,map__26409__$1,opts){
return (function (val){
var statearr_26412_26418 = state;
(statearr_26412_26418[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26409,map__26409__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26413_26419 = state;
(statearr_26413_26419[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26404){
var G__26405 = cljs.core.first.call(null,seq26404);
var seq26404__$1 = cljs.core.next.call(null,seq26404);
var G__26406 = cljs.core.first.call(null,seq26404__$1);
var seq26404__$2 = cljs.core.next.call(null,seq26404__$1);
var G__26407 = cljs.core.first.call(null,seq26404__$2);
var seq26404__$3 = cljs.core.next.call(null,seq26404__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26405,G__26406,G__26407,seq26404__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26583 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26584){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26584 = meta26584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26585,meta26584__$1){
var self__ = this;
var _26585__$1 = this;
return (new cljs.core.async.t_cljs$core$async26583(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26584__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26585){
var self__ = this;
var _26585__$1 = this;
return self__.meta26584;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26583.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26583.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26583.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26583.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26583.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26583.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26583.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26583.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26584","meta26584",148769695,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26583";

cljs.core.async.t_cljs$core$async26583.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22299__auto__,writer__22300__auto__,opt__22301__auto__){
return cljs.core._write.call(null,writer__22300__auto__,"cljs.core.async/t_cljs$core$async26583");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26583 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26583(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26584){
return (new cljs.core.async.t_cljs$core$async26583(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26584));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26583(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25033__auto___26746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___26746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___26746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26683){
var state_val_26684 = (state_26683[(1)]);
if((state_val_26684 === (7))){
var inst_26601 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
var statearr_26685_26747 = state_26683__$1;
(statearr_26685_26747[(2)] = inst_26601);

(statearr_26685_26747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (20))){
var inst_26613 = (state_26683[(7)]);
var state_26683__$1 = state_26683;
var statearr_26686_26748 = state_26683__$1;
(statearr_26686_26748[(2)] = inst_26613);

(statearr_26686_26748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (27))){
var state_26683__$1 = state_26683;
var statearr_26687_26749 = state_26683__$1;
(statearr_26687_26749[(2)] = null);

(statearr_26687_26749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (1))){
var inst_26589 = (state_26683[(8)]);
var inst_26589__$1 = calc_state.call(null);
var inst_26591 = (inst_26589__$1 == null);
var inst_26592 = cljs.core.not.call(null,inst_26591);
var state_26683__$1 = (function (){var statearr_26688 = state_26683;
(statearr_26688[(8)] = inst_26589__$1);

return statearr_26688;
})();
if(inst_26592){
var statearr_26689_26750 = state_26683__$1;
(statearr_26689_26750[(1)] = (2));

} else {
var statearr_26690_26751 = state_26683__$1;
(statearr_26690_26751[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (24))){
var inst_26636 = (state_26683[(9)]);
var inst_26643 = (state_26683[(10)]);
var inst_26657 = (state_26683[(11)]);
var inst_26657__$1 = inst_26636.call(null,inst_26643);
var state_26683__$1 = (function (){var statearr_26691 = state_26683;
(statearr_26691[(11)] = inst_26657__$1);

return statearr_26691;
})();
if(cljs.core.truth_(inst_26657__$1)){
var statearr_26692_26752 = state_26683__$1;
(statearr_26692_26752[(1)] = (29));

} else {
var statearr_26693_26753 = state_26683__$1;
(statearr_26693_26753[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (4))){
var inst_26604 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
if(cljs.core.truth_(inst_26604)){
var statearr_26694_26754 = state_26683__$1;
(statearr_26694_26754[(1)] = (8));

} else {
var statearr_26695_26755 = state_26683__$1;
(statearr_26695_26755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (15))){
var inst_26630 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
if(cljs.core.truth_(inst_26630)){
var statearr_26696_26756 = state_26683__$1;
(statearr_26696_26756[(1)] = (19));

} else {
var statearr_26697_26757 = state_26683__$1;
(statearr_26697_26757[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (21))){
var inst_26635 = (state_26683[(12)]);
var inst_26635__$1 = (state_26683[(2)]);
var inst_26636 = cljs.core.get.call(null,inst_26635__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26637 = cljs.core.get.call(null,inst_26635__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26638 = cljs.core.get.call(null,inst_26635__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26683__$1 = (function (){var statearr_26698 = state_26683;
(statearr_26698[(13)] = inst_26637);

(statearr_26698[(9)] = inst_26636);

(statearr_26698[(12)] = inst_26635__$1);

return statearr_26698;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26683__$1,(22),inst_26638);
} else {
if((state_val_26684 === (31))){
var inst_26665 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
if(cljs.core.truth_(inst_26665)){
var statearr_26699_26758 = state_26683__$1;
(statearr_26699_26758[(1)] = (32));

} else {
var statearr_26700_26759 = state_26683__$1;
(statearr_26700_26759[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (32))){
var inst_26642 = (state_26683[(14)]);
var state_26683__$1 = state_26683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26683__$1,(35),out,inst_26642);
} else {
if((state_val_26684 === (33))){
var inst_26635 = (state_26683[(12)]);
var inst_26613 = inst_26635;
var state_26683__$1 = (function (){var statearr_26701 = state_26683;
(statearr_26701[(7)] = inst_26613);

return statearr_26701;
})();
var statearr_26702_26760 = state_26683__$1;
(statearr_26702_26760[(2)] = null);

(statearr_26702_26760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (13))){
var inst_26613 = (state_26683[(7)]);
var inst_26620 = inst_26613.cljs$lang$protocol_mask$partition0$;
var inst_26621 = (inst_26620 & (64));
var inst_26622 = inst_26613.cljs$core$ISeq$;
var inst_26623 = (inst_26621) || (inst_26622);
var state_26683__$1 = state_26683;
if(cljs.core.truth_(inst_26623)){
var statearr_26703_26761 = state_26683__$1;
(statearr_26703_26761[(1)] = (16));

} else {
var statearr_26704_26762 = state_26683__$1;
(statearr_26704_26762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (22))){
var inst_26642 = (state_26683[(14)]);
var inst_26643 = (state_26683[(10)]);
var inst_26641 = (state_26683[(2)]);
var inst_26642__$1 = cljs.core.nth.call(null,inst_26641,(0),null);
var inst_26643__$1 = cljs.core.nth.call(null,inst_26641,(1),null);
var inst_26644 = (inst_26642__$1 == null);
var inst_26645 = cljs.core._EQ_.call(null,inst_26643__$1,change);
var inst_26646 = (inst_26644) || (inst_26645);
var state_26683__$1 = (function (){var statearr_26705 = state_26683;
(statearr_26705[(14)] = inst_26642__$1);

(statearr_26705[(10)] = inst_26643__$1);

return statearr_26705;
})();
if(cljs.core.truth_(inst_26646)){
var statearr_26706_26763 = state_26683__$1;
(statearr_26706_26763[(1)] = (23));

} else {
var statearr_26707_26764 = state_26683__$1;
(statearr_26707_26764[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (36))){
var inst_26635 = (state_26683[(12)]);
var inst_26613 = inst_26635;
var state_26683__$1 = (function (){var statearr_26708 = state_26683;
(statearr_26708[(7)] = inst_26613);

return statearr_26708;
})();
var statearr_26709_26765 = state_26683__$1;
(statearr_26709_26765[(2)] = null);

(statearr_26709_26765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (29))){
var inst_26657 = (state_26683[(11)]);
var state_26683__$1 = state_26683;
var statearr_26710_26766 = state_26683__$1;
(statearr_26710_26766[(2)] = inst_26657);

(statearr_26710_26766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (6))){
var state_26683__$1 = state_26683;
var statearr_26711_26767 = state_26683__$1;
(statearr_26711_26767[(2)] = false);

(statearr_26711_26767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (28))){
var inst_26653 = (state_26683[(2)]);
var inst_26654 = calc_state.call(null);
var inst_26613 = inst_26654;
var state_26683__$1 = (function (){var statearr_26712 = state_26683;
(statearr_26712[(7)] = inst_26613);

(statearr_26712[(15)] = inst_26653);

return statearr_26712;
})();
var statearr_26713_26768 = state_26683__$1;
(statearr_26713_26768[(2)] = null);

(statearr_26713_26768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (25))){
var inst_26679 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
var statearr_26714_26769 = state_26683__$1;
(statearr_26714_26769[(2)] = inst_26679);

(statearr_26714_26769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (34))){
var inst_26677 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
var statearr_26715_26770 = state_26683__$1;
(statearr_26715_26770[(2)] = inst_26677);

(statearr_26715_26770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (17))){
var state_26683__$1 = state_26683;
var statearr_26716_26771 = state_26683__$1;
(statearr_26716_26771[(2)] = false);

(statearr_26716_26771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (3))){
var state_26683__$1 = state_26683;
var statearr_26717_26772 = state_26683__$1;
(statearr_26717_26772[(2)] = false);

(statearr_26717_26772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (12))){
var inst_26681 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26683__$1,inst_26681);
} else {
if((state_val_26684 === (2))){
var inst_26589 = (state_26683[(8)]);
var inst_26594 = inst_26589.cljs$lang$protocol_mask$partition0$;
var inst_26595 = (inst_26594 & (64));
var inst_26596 = inst_26589.cljs$core$ISeq$;
var inst_26597 = (inst_26595) || (inst_26596);
var state_26683__$1 = state_26683;
if(cljs.core.truth_(inst_26597)){
var statearr_26718_26773 = state_26683__$1;
(statearr_26718_26773[(1)] = (5));

} else {
var statearr_26719_26774 = state_26683__$1;
(statearr_26719_26774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (23))){
var inst_26642 = (state_26683[(14)]);
var inst_26648 = (inst_26642 == null);
var state_26683__$1 = state_26683;
if(cljs.core.truth_(inst_26648)){
var statearr_26720_26775 = state_26683__$1;
(statearr_26720_26775[(1)] = (26));

} else {
var statearr_26721_26776 = state_26683__$1;
(statearr_26721_26776[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (35))){
var inst_26668 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
if(cljs.core.truth_(inst_26668)){
var statearr_26722_26777 = state_26683__$1;
(statearr_26722_26777[(1)] = (36));

} else {
var statearr_26723_26778 = state_26683__$1;
(statearr_26723_26778[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (19))){
var inst_26613 = (state_26683[(7)]);
var inst_26632 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26613);
var state_26683__$1 = state_26683;
var statearr_26724_26779 = state_26683__$1;
(statearr_26724_26779[(2)] = inst_26632);

(statearr_26724_26779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (11))){
var inst_26613 = (state_26683[(7)]);
var inst_26617 = (inst_26613 == null);
var inst_26618 = cljs.core.not.call(null,inst_26617);
var state_26683__$1 = state_26683;
if(inst_26618){
var statearr_26725_26780 = state_26683__$1;
(statearr_26725_26780[(1)] = (13));

} else {
var statearr_26726_26781 = state_26683__$1;
(statearr_26726_26781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (9))){
var inst_26589 = (state_26683[(8)]);
var state_26683__$1 = state_26683;
var statearr_26727_26782 = state_26683__$1;
(statearr_26727_26782[(2)] = inst_26589);

(statearr_26727_26782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (5))){
var state_26683__$1 = state_26683;
var statearr_26728_26783 = state_26683__$1;
(statearr_26728_26783[(2)] = true);

(statearr_26728_26783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (14))){
var state_26683__$1 = state_26683;
var statearr_26729_26784 = state_26683__$1;
(statearr_26729_26784[(2)] = false);

(statearr_26729_26784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (26))){
var inst_26643 = (state_26683[(10)]);
var inst_26650 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26643);
var state_26683__$1 = state_26683;
var statearr_26730_26785 = state_26683__$1;
(statearr_26730_26785[(2)] = inst_26650);

(statearr_26730_26785[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (16))){
var state_26683__$1 = state_26683;
var statearr_26731_26786 = state_26683__$1;
(statearr_26731_26786[(2)] = true);

(statearr_26731_26786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (38))){
var inst_26673 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
var statearr_26732_26787 = state_26683__$1;
(statearr_26732_26787[(2)] = inst_26673);

(statearr_26732_26787[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (30))){
var inst_26637 = (state_26683[(13)]);
var inst_26636 = (state_26683[(9)]);
var inst_26643 = (state_26683[(10)]);
var inst_26660 = cljs.core.empty_QMARK_.call(null,inst_26636);
var inst_26661 = inst_26637.call(null,inst_26643);
var inst_26662 = cljs.core.not.call(null,inst_26661);
var inst_26663 = (inst_26660) && (inst_26662);
var state_26683__$1 = state_26683;
var statearr_26733_26788 = state_26683__$1;
(statearr_26733_26788[(2)] = inst_26663);

(statearr_26733_26788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (10))){
var inst_26589 = (state_26683[(8)]);
var inst_26609 = (state_26683[(2)]);
var inst_26610 = cljs.core.get.call(null,inst_26609,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26611 = cljs.core.get.call(null,inst_26609,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26612 = cljs.core.get.call(null,inst_26609,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26613 = inst_26589;
var state_26683__$1 = (function (){var statearr_26734 = state_26683;
(statearr_26734[(7)] = inst_26613);

(statearr_26734[(16)] = inst_26611);

(statearr_26734[(17)] = inst_26610);

(statearr_26734[(18)] = inst_26612);

return statearr_26734;
})();
var statearr_26735_26789 = state_26683__$1;
(statearr_26735_26789[(2)] = null);

(statearr_26735_26789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (18))){
var inst_26627 = (state_26683[(2)]);
var state_26683__$1 = state_26683;
var statearr_26736_26790 = state_26683__$1;
(statearr_26736_26790[(2)] = inst_26627);

(statearr_26736_26790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (37))){
var state_26683__$1 = state_26683;
var statearr_26737_26791 = state_26683__$1;
(statearr_26737_26791[(2)] = null);

(statearr_26737_26791[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26684 === (8))){
var inst_26589 = (state_26683[(8)]);
var inst_26606 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26589);
var state_26683__$1 = state_26683;
var statearr_26738_26792 = state_26683__$1;
(statearr_26738_26792[(2)] = inst_26606);

(statearr_26738_26792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___26746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24921__auto__,c__25033__auto___26746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24922__auto__ = null;
var cljs$core$async$mix_$_state_machine__24922__auto____0 = (function (){
var statearr_26742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26742[(0)] = cljs$core$async$mix_$_state_machine__24922__auto__);

(statearr_26742[(1)] = (1));

return statearr_26742;
});
var cljs$core$async$mix_$_state_machine__24922__auto____1 = (function (state_26683){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_26683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e26743){if((e26743 instanceof Object)){
var ex__24925__auto__ = e26743;
var statearr_26744_26793 = state_26683;
(statearr_26744_26793[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26794 = state_26683;
state_26683 = G__26794;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24922__auto__ = function(state_26683){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24922__auto____1.call(this,state_26683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24922__auto____0;
cljs$core$async$mix_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24922__auto____1;
return cljs$core$async$mix_$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___26746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25035__auto__ = (function (){var statearr_26745 = f__25034__auto__.call(null);
(statearr_26745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___26746);

return statearr_26745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___26746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22356__auto__ = (((p == null))?null:p);
var m__22357__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22357__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22356__auto__ = (((p == null))?null:p);
var m__22357__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,p,v,ch);
} else {
var m__22357__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26795 = [];
var len__22763__auto___26798 = arguments.length;
var i__22764__auto___26799 = (0);
while(true){
if((i__22764__auto___26799 < len__22763__auto___26798)){
args26795.push((arguments[i__22764__auto___26799]));

var G__26800 = (i__22764__auto___26799 + (1));
i__22764__auto___26799 = G__26800;
continue;
} else {
}
break;
}

var G__26797 = args26795.length;
switch (G__26797) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26795.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22356__auto__ = (((p == null))?null:p);
var m__22357__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,p);
} else {
var m__22357__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22356__auto__ = (((p == null))?null:p);
var m__22357__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22356__auto__)]);
if(!((m__22357__auto__ == null))){
return m__22357__auto__.call(null,p,v);
} else {
var m__22357__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22357__auto____$1 == null))){
return m__22357__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26803 = [];
var len__22763__auto___26928 = arguments.length;
var i__22764__auto___26929 = (0);
while(true){
if((i__22764__auto___26929 < len__22763__auto___26928)){
args26803.push((arguments[i__22764__auto___26929]));

var G__26930 = (i__22764__auto___26929 + (1));
i__22764__auto___26929 = G__26930;
continue;
} else {
}
break;
}

var G__26805 = args26803.length;
switch (G__26805) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26803.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21693__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21693__auto__)){
return or__21693__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21693__auto__,mults){
return (function (p1__26802_SHARP_){
if(cljs.core.truth_(p1__26802_SHARP_.call(null,topic))){
return p1__26802_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26802_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21693__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26806 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26807){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26807 = meta26807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26808,meta26807__$1){
var self__ = this;
var _26808__$1 = this;
return (new cljs.core.async.t_cljs$core$async26806(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26807__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26808){
var self__ = this;
var _26808__$1 = this;
return self__.meta26807;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26806.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26807","meta26807",1506458211,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26806";

cljs.core.async.t_cljs$core$async26806.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22299__auto__,writer__22300__auto__,opt__22301__auto__){
return cljs.core._write.call(null,writer__22300__auto__,"cljs.core.async/t_cljs$core$async26806");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26806 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26806(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26807){
return (new cljs.core.async.t_cljs$core$async26806(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26807));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26806(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25033__auto___26932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___26932,mults,ensure_mult,p){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___26932,mults,ensure_mult,p){
return (function (state_26880){
var state_val_26881 = (state_26880[(1)]);
if((state_val_26881 === (7))){
var inst_26876 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26882_26933 = state_26880__$1;
(statearr_26882_26933[(2)] = inst_26876);

(statearr_26882_26933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (20))){
var state_26880__$1 = state_26880;
var statearr_26883_26934 = state_26880__$1;
(statearr_26883_26934[(2)] = null);

(statearr_26883_26934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (1))){
var state_26880__$1 = state_26880;
var statearr_26884_26935 = state_26880__$1;
(statearr_26884_26935[(2)] = null);

(statearr_26884_26935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (24))){
var inst_26859 = (state_26880[(7)]);
var inst_26868 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26859);
var state_26880__$1 = state_26880;
var statearr_26885_26936 = state_26880__$1;
(statearr_26885_26936[(2)] = inst_26868);

(statearr_26885_26936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (4))){
var inst_26811 = (state_26880[(8)]);
var inst_26811__$1 = (state_26880[(2)]);
var inst_26812 = (inst_26811__$1 == null);
var state_26880__$1 = (function (){var statearr_26886 = state_26880;
(statearr_26886[(8)] = inst_26811__$1);

return statearr_26886;
})();
if(cljs.core.truth_(inst_26812)){
var statearr_26887_26937 = state_26880__$1;
(statearr_26887_26937[(1)] = (5));

} else {
var statearr_26888_26938 = state_26880__$1;
(statearr_26888_26938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (15))){
var inst_26853 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26889_26939 = state_26880__$1;
(statearr_26889_26939[(2)] = inst_26853);

(statearr_26889_26939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (21))){
var inst_26873 = (state_26880[(2)]);
var state_26880__$1 = (function (){var statearr_26890 = state_26880;
(statearr_26890[(9)] = inst_26873);

return statearr_26890;
})();
var statearr_26891_26940 = state_26880__$1;
(statearr_26891_26940[(2)] = null);

(statearr_26891_26940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (13))){
var inst_26835 = (state_26880[(10)]);
var inst_26837 = cljs.core.chunked_seq_QMARK_.call(null,inst_26835);
var state_26880__$1 = state_26880;
if(inst_26837){
var statearr_26892_26941 = state_26880__$1;
(statearr_26892_26941[(1)] = (16));

} else {
var statearr_26893_26942 = state_26880__$1;
(statearr_26893_26942[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (22))){
var inst_26865 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
if(cljs.core.truth_(inst_26865)){
var statearr_26894_26943 = state_26880__$1;
(statearr_26894_26943[(1)] = (23));

} else {
var statearr_26895_26944 = state_26880__$1;
(statearr_26895_26944[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (6))){
var inst_26861 = (state_26880[(11)]);
var inst_26859 = (state_26880[(7)]);
var inst_26811 = (state_26880[(8)]);
var inst_26859__$1 = topic_fn.call(null,inst_26811);
var inst_26860 = cljs.core.deref.call(null,mults);
var inst_26861__$1 = cljs.core.get.call(null,inst_26860,inst_26859__$1);
var state_26880__$1 = (function (){var statearr_26896 = state_26880;
(statearr_26896[(11)] = inst_26861__$1);

(statearr_26896[(7)] = inst_26859__$1);

return statearr_26896;
})();
if(cljs.core.truth_(inst_26861__$1)){
var statearr_26897_26945 = state_26880__$1;
(statearr_26897_26945[(1)] = (19));

} else {
var statearr_26898_26946 = state_26880__$1;
(statearr_26898_26946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (25))){
var inst_26870 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26899_26947 = state_26880__$1;
(statearr_26899_26947[(2)] = inst_26870);

(statearr_26899_26947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (17))){
var inst_26835 = (state_26880[(10)]);
var inst_26844 = cljs.core.first.call(null,inst_26835);
var inst_26845 = cljs.core.async.muxch_STAR_.call(null,inst_26844);
var inst_26846 = cljs.core.async.close_BANG_.call(null,inst_26845);
var inst_26847 = cljs.core.next.call(null,inst_26835);
var inst_26821 = inst_26847;
var inst_26822 = null;
var inst_26823 = (0);
var inst_26824 = (0);
var state_26880__$1 = (function (){var statearr_26900 = state_26880;
(statearr_26900[(12)] = inst_26823);

(statearr_26900[(13)] = inst_26821);

(statearr_26900[(14)] = inst_26822);

(statearr_26900[(15)] = inst_26846);

(statearr_26900[(16)] = inst_26824);

return statearr_26900;
})();
var statearr_26901_26948 = state_26880__$1;
(statearr_26901_26948[(2)] = null);

(statearr_26901_26948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (3))){
var inst_26878 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26880__$1,inst_26878);
} else {
if((state_val_26881 === (12))){
var inst_26855 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26902_26949 = state_26880__$1;
(statearr_26902_26949[(2)] = inst_26855);

(statearr_26902_26949[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (2))){
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26880__$1,(4),ch);
} else {
if((state_val_26881 === (23))){
var state_26880__$1 = state_26880;
var statearr_26903_26950 = state_26880__$1;
(statearr_26903_26950[(2)] = null);

(statearr_26903_26950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (19))){
var inst_26861 = (state_26880[(11)]);
var inst_26811 = (state_26880[(8)]);
var inst_26863 = cljs.core.async.muxch_STAR_.call(null,inst_26861);
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26880__$1,(22),inst_26863,inst_26811);
} else {
if((state_val_26881 === (11))){
var inst_26821 = (state_26880[(13)]);
var inst_26835 = (state_26880[(10)]);
var inst_26835__$1 = cljs.core.seq.call(null,inst_26821);
var state_26880__$1 = (function (){var statearr_26904 = state_26880;
(statearr_26904[(10)] = inst_26835__$1);

return statearr_26904;
})();
if(inst_26835__$1){
var statearr_26905_26951 = state_26880__$1;
(statearr_26905_26951[(1)] = (13));

} else {
var statearr_26906_26952 = state_26880__$1;
(statearr_26906_26952[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (9))){
var inst_26857 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26907_26953 = state_26880__$1;
(statearr_26907_26953[(2)] = inst_26857);

(statearr_26907_26953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (5))){
var inst_26818 = cljs.core.deref.call(null,mults);
var inst_26819 = cljs.core.vals.call(null,inst_26818);
var inst_26820 = cljs.core.seq.call(null,inst_26819);
var inst_26821 = inst_26820;
var inst_26822 = null;
var inst_26823 = (0);
var inst_26824 = (0);
var state_26880__$1 = (function (){var statearr_26908 = state_26880;
(statearr_26908[(12)] = inst_26823);

(statearr_26908[(13)] = inst_26821);

(statearr_26908[(14)] = inst_26822);

(statearr_26908[(16)] = inst_26824);

return statearr_26908;
})();
var statearr_26909_26954 = state_26880__$1;
(statearr_26909_26954[(2)] = null);

(statearr_26909_26954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (14))){
var state_26880__$1 = state_26880;
var statearr_26913_26955 = state_26880__$1;
(statearr_26913_26955[(2)] = null);

(statearr_26913_26955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (16))){
var inst_26835 = (state_26880[(10)]);
var inst_26839 = cljs.core.chunk_first.call(null,inst_26835);
var inst_26840 = cljs.core.chunk_rest.call(null,inst_26835);
var inst_26841 = cljs.core.count.call(null,inst_26839);
var inst_26821 = inst_26840;
var inst_26822 = inst_26839;
var inst_26823 = inst_26841;
var inst_26824 = (0);
var state_26880__$1 = (function (){var statearr_26914 = state_26880;
(statearr_26914[(12)] = inst_26823);

(statearr_26914[(13)] = inst_26821);

(statearr_26914[(14)] = inst_26822);

(statearr_26914[(16)] = inst_26824);

return statearr_26914;
})();
var statearr_26915_26956 = state_26880__$1;
(statearr_26915_26956[(2)] = null);

(statearr_26915_26956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (10))){
var inst_26823 = (state_26880[(12)]);
var inst_26821 = (state_26880[(13)]);
var inst_26822 = (state_26880[(14)]);
var inst_26824 = (state_26880[(16)]);
var inst_26829 = cljs.core._nth.call(null,inst_26822,inst_26824);
var inst_26830 = cljs.core.async.muxch_STAR_.call(null,inst_26829);
var inst_26831 = cljs.core.async.close_BANG_.call(null,inst_26830);
var inst_26832 = (inst_26824 + (1));
var tmp26910 = inst_26823;
var tmp26911 = inst_26821;
var tmp26912 = inst_26822;
var inst_26821__$1 = tmp26911;
var inst_26822__$1 = tmp26912;
var inst_26823__$1 = tmp26910;
var inst_26824__$1 = inst_26832;
var state_26880__$1 = (function (){var statearr_26916 = state_26880;
(statearr_26916[(12)] = inst_26823__$1);

(statearr_26916[(17)] = inst_26831);

(statearr_26916[(13)] = inst_26821__$1);

(statearr_26916[(14)] = inst_26822__$1);

(statearr_26916[(16)] = inst_26824__$1);

return statearr_26916;
})();
var statearr_26917_26957 = state_26880__$1;
(statearr_26917_26957[(2)] = null);

(statearr_26917_26957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (18))){
var inst_26850 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26918_26958 = state_26880__$1;
(statearr_26918_26958[(2)] = inst_26850);

(statearr_26918_26958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (8))){
var inst_26823 = (state_26880[(12)]);
var inst_26824 = (state_26880[(16)]);
var inst_26826 = (inst_26824 < inst_26823);
var inst_26827 = inst_26826;
var state_26880__$1 = state_26880;
if(cljs.core.truth_(inst_26827)){
var statearr_26919_26959 = state_26880__$1;
(statearr_26919_26959[(1)] = (10));

} else {
var statearr_26920_26960 = state_26880__$1;
(statearr_26920_26960[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___26932,mults,ensure_mult,p))
;
return ((function (switch__24921__auto__,c__25033__auto___26932,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_26924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26924[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_26924[(1)] = (1));

return statearr_26924;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_26880){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_26880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e26925){if((e26925 instanceof Object)){
var ex__24925__auto__ = e26925;
var statearr_26926_26961 = state_26880;
(statearr_26926_26961[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26962 = state_26880;
state_26880 = G__26962;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_26880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_26880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___26932,mults,ensure_mult,p))
})();
var state__25035__auto__ = (function (){var statearr_26927 = f__25034__auto__.call(null);
(statearr_26927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___26932);

return statearr_26927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___26932,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26963 = [];
var len__22763__auto___26966 = arguments.length;
var i__22764__auto___26967 = (0);
while(true){
if((i__22764__auto___26967 < len__22763__auto___26966)){
args26963.push((arguments[i__22764__auto___26967]));

var G__26968 = (i__22764__auto___26967 + (1));
i__22764__auto___26967 = G__26968;
continue;
} else {
}
break;
}

var G__26965 = args26963.length;
switch (G__26965) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26963.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26970 = [];
var len__22763__auto___26973 = arguments.length;
var i__22764__auto___26974 = (0);
while(true){
if((i__22764__auto___26974 < len__22763__auto___26973)){
args26970.push((arguments[i__22764__auto___26974]));

var G__26975 = (i__22764__auto___26974 + (1));
i__22764__auto___26974 = G__26975;
continue;
} else {
}
break;
}

var G__26972 = args26970.length;
switch (G__26972) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26970.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26977 = [];
var len__22763__auto___27048 = arguments.length;
var i__22764__auto___27049 = (0);
while(true){
if((i__22764__auto___27049 < len__22763__auto___27048)){
args26977.push((arguments[i__22764__auto___27049]));

var G__27050 = (i__22764__auto___27049 + (1));
i__22764__auto___27049 = G__27050;
continue;
} else {
}
break;
}

var G__26979 = args26977.length;
switch (G__26979) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26977.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25033__auto___27052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___27052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___27052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27018){
var state_val_27019 = (state_27018[(1)]);
if((state_val_27019 === (7))){
var state_27018__$1 = state_27018;
var statearr_27020_27053 = state_27018__$1;
(statearr_27020_27053[(2)] = null);

(statearr_27020_27053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (1))){
var state_27018__$1 = state_27018;
var statearr_27021_27054 = state_27018__$1;
(statearr_27021_27054[(2)] = null);

(statearr_27021_27054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (4))){
var inst_26982 = (state_27018[(7)]);
var inst_26984 = (inst_26982 < cnt);
var state_27018__$1 = state_27018;
if(cljs.core.truth_(inst_26984)){
var statearr_27022_27055 = state_27018__$1;
(statearr_27022_27055[(1)] = (6));

} else {
var statearr_27023_27056 = state_27018__$1;
(statearr_27023_27056[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (15))){
var inst_27014 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
var statearr_27024_27057 = state_27018__$1;
(statearr_27024_27057[(2)] = inst_27014);

(statearr_27024_27057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (13))){
var inst_27007 = cljs.core.async.close_BANG_.call(null,out);
var state_27018__$1 = state_27018;
var statearr_27025_27058 = state_27018__$1;
(statearr_27025_27058[(2)] = inst_27007);

(statearr_27025_27058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (6))){
var state_27018__$1 = state_27018;
var statearr_27026_27059 = state_27018__$1;
(statearr_27026_27059[(2)] = null);

(statearr_27026_27059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (3))){
var inst_27016 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27018__$1,inst_27016);
} else {
if((state_val_27019 === (12))){
var inst_27004 = (state_27018[(8)]);
var inst_27004__$1 = (state_27018[(2)]);
var inst_27005 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27004__$1);
var state_27018__$1 = (function (){var statearr_27027 = state_27018;
(statearr_27027[(8)] = inst_27004__$1);

return statearr_27027;
})();
if(cljs.core.truth_(inst_27005)){
var statearr_27028_27060 = state_27018__$1;
(statearr_27028_27060[(1)] = (13));

} else {
var statearr_27029_27061 = state_27018__$1;
(statearr_27029_27061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (2))){
var inst_26981 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26982 = (0);
var state_27018__$1 = (function (){var statearr_27030 = state_27018;
(statearr_27030[(7)] = inst_26982);

(statearr_27030[(9)] = inst_26981);

return statearr_27030;
})();
var statearr_27031_27062 = state_27018__$1;
(statearr_27031_27062[(2)] = null);

(statearr_27031_27062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (11))){
var inst_26982 = (state_27018[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27018,(10),Object,null,(9));
var inst_26991 = chs__$1.call(null,inst_26982);
var inst_26992 = done.call(null,inst_26982);
var inst_26993 = cljs.core.async.take_BANG_.call(null,inst_26991,inst_26992);
var state_27018__$1 = state_27018;
var statearr_27032_27063 = state_27018__$1;
(statearr_27032_27063[(2)] = inst_26993);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27018__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (9))){
var inst_26982 = (state_27018[(7)]);
var inst_26995 = (state_27018[(2)]);
var inst_26996 = (inst_26982 + (1));
var inst_26982__$1 = inst_26996;
var state_27018__$1 = (function (){var statearr_27033 = state_27018;
(statearr_27033[(7)] = inst_26982__$1);

(statearr_27033[(10)] = inst_26995);

return statearr_27033;
})();
var statearr_27034_27064 = state_27018__$1;
(statearr_27034_27064[(2)] = null);

(statearr_27034_27064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (5))){
var inst_27002 = (state_27018[(2)]);
var state_27018__$1 = (function (){var statearr_27035 = state_27018;
(statearr_27035[(11)] = inst_27002);

return statearr_27035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27018__$1,(12),dchan);
} else {
if((state_val_27019 === (14))){
var inst_27004 = (state_27018[(8)]);
var inst_27009 = cljs.core.apply.call(null,f,inst_27004);
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27018__$1,(16),out,inst_27009);
} else {
if((state_val_27019 === (16))){
var inst_27011 = (state_27018[(2)]);
var state_27018__$1 = (function (){var statearr_27036 = state_27018;
(statearr_27036[(12)] = inst_27011);

return statearr_27036;
})();
var statearr_27037_27065 = state_27018__$1;
(statearr_27037_27065[(2)] = null);

(statearr_27037_27065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (10))){
var inst_26986 = (state_27018[(2)]);
var inst_26987 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27018__$1 = (function (){var statearr_27038 = state_27018;
(statearr_27038[(13)] = inst_26986);

return statearr_27038;
})();
var statearr_27039_27066 = state_27018__$1;
(statearr_27039_27066[(2)] = inst_26987);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27018__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (8))){
var inst_27000 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
var statearr_27040_27067 = state_27018__$1;
(statearr_27040_27067[(2)] = inst_27000);

(statearr_27040_27067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___27052,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24921__auto__,c__25033__auto___27052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_27044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27044[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_27044[(1)] = (1));

return statearr_27044;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_27018){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_27018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e27045){if((e27045 instanceof Object)){
var ex__24925__auto__ = e27045;
var statearr_27046_27068 = state_27018;
(statearr_27046_27068[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27069 = state_27018;
state_27018 = G__27069;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_27018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_27018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___27052,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25035__auto__ = (function (){var statearr_27047 = f__25034__auto__.call(null);
(statearr_27047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___27052);

return statearr_27047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___27052,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args27071 = [];
var len__22763__auto___27127 = arguments.length;
var i__22764__auto___27128 = (0);
while(true){
if((i__22764__auto___27128 < len__22763__auto___27127)){
args27071.push((arguments[i__22764__auto___27128]));

var G__27129 = (i__22764__auto___27128 + (1));
i__22764__auto___27128 = G__27129;
continue;
} else {
}
break;
}

var G__27073 = args27071.length;
switch (G__27073) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27071.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25033__auto___27131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___27131,out){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___27131,out){
return (function (state_27103){
var state_val_27104 = (state_27103[(1)]);
if((state_val_27104 === (7))){
var inst_27083 = (state_27103[(7)]);
var inst_27082 = (state_27103[(8)]);
var inst_27082__$1 = (state_27103[(2)]);
var inst_27083__$1 = cljs.core.nth.call(null,inst_27082__$1,(0),null);
var inst_27084 = cljs.core.nth.call(null,inst_27082__$1,(1),null);
var inst_27085 = (inst_27083__$1 == null);
var state_27103__$1 = (function (){var statearr_27105 = state_27103;
(statearr_27105[(7)] = inst_27083__$1);

(statearr_27105[(8)] = inst_27082__$1);

(statearr_27105[(9)] = inst_27084);

return statearr_27105;
})();
if(cljs.core.truth_(inst_27085)){
var statearr_27106_27132 = state_27103__$1;
(statearr_27106_27132[(1)] = (8));

} else {
var statearr_27107_27133 = state_27103__$1;
(statearr_27107_27133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (1))){
var inst_27074 = cljs.core.vec.call(null,chs);
var inst_27075 = inst_27074;
var state_27103__$1 = (function (){var statearr_27108 = state_27103;
(statearr_27108[(10)] = inst_27075);

return statearr_27108;
})();
var statearr_27109_27134 = state_27103__$1;
(statearr_27109_27134[(2)] = null);

(statearr_27109_27134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (4))){
var inst_27075 = (state_27103[(10)]);
var state_27103__$1 = state_27103;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27103__$1,(7),inst_27075);
} else {
if((state_val_27104 === (6))){
var inst_27099 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27110_27135 = state_27103__$1;
(statearr_27110_27135[(2)] = inst_27099);

(statearr_27110_27135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (3))){
var inst_27101 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27103__$1,inst_27101);
} else {
if((state_val_27104 === (2))){
var inst_27075 = (state_27103[(10)]);
var inst_27077 = cljs.core.count.call(null,inst_27075);
var inst_27078 = (inst_27077 > (0));
var state_27103__$1 = state_27103;
if(cljs.core.truth_(inst_27078)){
var statearr_27112_27136 = state_27103__$1;
(statearr_27112_27136[(1)] = (4));

} else {
var statearr_27113_27137 = state_27103__$1;
(statearr_27113_27137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (11))){
var inst_27075 = (state_27103[(10)]);
var inst_27092 = (state_27103[(2)]);
var tmp27111 = inst_27075;
var inst_27075__$1 = tmp27111;
var state_27103__$1 = (function (){var statearr_27114 = state_27103;
(statearr_27114[(10)] = inst_27075__$1);

(statearr_27114[(11)] = inst_27092);

return statearr_27114;
})();
var statearr_27115_27138 = state_27103__$1;
(statearr_27115_27138[(2)] = null);

(statearr_27115_27138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (9))){
var inst_27083 = (state_27103[(7)]);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27103__$1,(11),out,inst_27083);
} else {
if((state_val_27104 === (5))){
var inst_27097 = cljs.core.async.close_BANG_.call(null,out);
var state_27103__$1 = state_27103;
var statearr_27116_27139 = state_27103__$1;
(statearr_27116_27139[(2)] = inst_27097);

(statearr_27116_27139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (10))){
var inst_27095 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27117_27140 = state_27103__$1;
(statearr_27117_27140[(2)] = inst_27095);

(statearr_27117_27140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (8))){
var inst_27075 = (state_27103[(10)]);
var inst_27083 = (state_27103[(7)]);
var inst_27082 = (state_27103[(8)]);
var inst_27084 = (state_27103[(9)]);
var inst_27087 = (function (){var cs = inst_27075;
var vec__27080 = inst_27082;
var v = inst_27083;
var c = inst_27084;
return ((function (cs,vec__27080,v,c,inst_27075,inst_27083,inst_27082,inst_27084,state_val_27104,c__25033__auto___27131,out){
return (function (p1__27070_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27070_SHARP_);
});
;})(cs,vec__27080,v,c,inst_27075,inst_27083,inst_27082,inst_27084,state_val_27104,c__25033__auto___27131,out))
})();
var inst_27088 = cljs.core.filterv.call(null,inst_27087,inst_27075);
var inst_27075__$1 = inst_27088;
var state_27103__$1 = (function (){var statearr_27118 = state_27103;
(statearr_27118[(10)] = inst_27075__$1);

return statearr_27118;
})();
var statearr_27119_27141 = state_27103__$1;
(statearr_27119_27141[(2)] = null);

(statearr_27119_27141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___27131,out))
;
return ((function (switch__24921__auto__,c__25033__auto___27131,out){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_27123 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27123[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_27123[(1)] = (1));

return statearr_27123;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_27103){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_27103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e27124){if((e27124 instanceof Object)){
var ex__24925__auto__ = e27124;
var statearr_27125_27142 = state_27103;
(statearr_27125_27142[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27143 = state_27103;
state_27103 = G__27143;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_27103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_27103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___27131,out))
})();
var state__25035__auto__ = (function (){var statearr_27126 = f__25034__auto__.call(null);
(statearr_27126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___27131);

return statearr_27126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___27131,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27144 = [];
var len__22763__auto___27193 = arguments.length;
var i__22764__auto___27194 = (0);
while(true){
if((i__22764__auto___27194 < len__22763__auto___27193)){
args27144.push((arguments[i__22764__auto___27194]));

var G__27195 = (i__22764__auto___27194 + (1));
i__22764__auto___27194 = G__27195;
continue;
} else {
}
break;
}

var G__27146 = args27144.length;
switch (G__27146) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27144.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25033__auto___27197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___27197,out){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___27197,out){
return (function (state_27170){
var state_val_27171 = (state_27170[(1)]);
if((state_val_27171 === (7))){
var inst_27152 = (state_27170[(7)]);
var inst_27152__$1 = (state_27170[(2)]);
var inst_27153 = (inst_27152__$1 == null);
var inst_27154 = cljs.core.not.call(null,inst_27153);
var state_27170__$1 = (function (){var statearr_27172 = state_27170;
(statearr_27172[(7)] = inst_27152__$1);

return statearr_27172;
})();
if(inst_27154){
var statearr_27173_27198 = state_27170__$1;
(statearr_27173_27198[(1)] = (8));

} else {
var statearr_27174_27199 = state_27170__$1;
(statearr_27174_27199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (1))){
var inst_27147 = (0);
var state_27170__$1 = (function (){var statearr_27175 = state_27170;
(statearr_27175[(8)] = inst_27147);

return statearr_27175;
})();
var statearr_27176_27200 = state_27170__$1;
(statearr_27176_27200[(2)] = null);

(statearr_27176_27200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (4))){
var state_27170__$1 = state_27170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27170__$1,(7),ch);
} else {
if((state_val_27171 === (6))){
var inst_27165 = (state_27170[(2)]);
var state_27170__$1 = state_27170;
var statearr_27177_27201 = state_27170__$1;
(statearr_27177_27201[(2)] = inst_27165);

(statearr_27177_27201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (3))){
var inst_27167 = (state_27170[(2)]);
var inst_27168 = cljs.core.async.close_BANG_.call(null,out);
var state_27170__$1 = (function (){var statearr_27178 = state_27170;
(statearr_27178[(9)] = inst_27167);

return statearr_27178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27170__$1,inst_27168);
} else {
if((state_val_27171 === (2))){
var inst_27147 = (state_27170[(8)]);
var inst_27149 = (inst_27147 < n);
var state_27170__$1 = state_27170;
if(cljs.core.truth_(inst_27149)){
var statearr_27179_27202 = state_27170__$1;
(statearr_27179_27202[(1)] = (4));

} else {
var statearr_27180_27203 = state_27170__$1;
(statearr_27180_27203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (11))){
var inst_27147 = (state_27170[(8)]);
var inst_27157 = (state_27170[(2)]);
var inst_27158 = (inst_27147 + (1));
var inst_27147__$1 = inst_27158;
var state_27170__$1 = (function (){var statearr_27181 = state_27170;
(statearr_27181[(8)] = inst_27147__$1);

(statearr_27181[(10)] = inst_27157);

return statearr_27181;
})();
var statearr_27182_27204 = state_27170__$1;
(statearr_27182_27204[(2)] = null);

(statearr_27182_27204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (9))){
var state_27170__$1 = state_27170;
var statearr_27183_27205 = state_27170__$1;
(statearr_27183_27205[(2)] = null);

(statearr_27183_27205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (5))){
var state_27170__$1 = state_27170;
var statearr_27184_27206 = state_27170__$1;
(statearr_27184_27206[(2)] = null);

(statearr_27184_27206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (10))){
var inst_27162 = (state_27170[(2)]);
var state_27170__$1 = state_27170;
var statearr_27185_27207 = state_27170__$1;
(statearr_27185_27207[(2)] = inst_27162);

(statearr_27185_27207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (8))){
var inst_27152 = (state_27170[(7)]);
var state_27170__$1 = state_27170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27170__$1,(11),out,inst_27152);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___27197,out))
;
return ((function (switch__24921__auto__,c__25033__auto___27197,out){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_27189 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27189[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_27189[(1)] = (1));

return statearr_27189;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_27170){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_27170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e27190){if((e27190 instanceof Object)){
var ex__24925__auto__ = e27190;
var statearr_27191_27208 = state_27170;
(statearr_27191_27208[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27209 = state_27170;
state_27170 = G__27209;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_27170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_27170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___27197,out))
})();
var state__25035__auto__ = (function (){var statearr_27192 = f__25034__auto__.call(null);
(statearr_27192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___27197);

return statearr_27192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___27197,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27217 = (function (map_LT_,f,ch,meta27218){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27218 = meta27218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27219,meta27218__$1){
var self__ = this;
var _27219__$1 = this;
return (new cljs.core.async.t_cljs$core$async27217(self__.map_LT_,self__.f,self__.ch,meta27218__$1));
});

cljs.core.async.t_cljs$core$async27217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27219){
var self__ = this;
var _27219__$1 = this;
return self__.meta27218;
});

cljs.core.async.t_cljs$core$async27217.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27217.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27217.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27217.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27217.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27220 = (function (map_LT_,f,ch,meta27218,_,fn1,meta27221){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27218 = meta27218;
this._ = _;
this.fn1 = fn1;
this.meta27221 = meta27221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27222,meta27221__$1){
var self__ = this;
var _27222__$1 = this;
return (new cljs.core.async.t_cljs$core$async27220(self__.map_LT_,self__.f,self__.ch,self__.meta27218,self__._,self__.fn1,meta27221__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27222){
var self__ = this;
var _27222__$1 = this;
return self__.meta27221;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27220.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27210_SHARP_){
return f1.call(null,(((p1__27210_SHARP_ == null))?null:self__.f.call(null,p1__27210_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27220.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27218","meta27218",-1749540378,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27217","cljs.core.async/t_cljs$core$async27217",-774249303,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27221","meta27221",-22798367,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27220";

cljs.core.async.t_cljs$core$async27220.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22299__auto__,writer__22300__auto__,opt__22301__auto__){
return cljs.core._write.call(null,writer__22300__auto__,"cljs.core.async/t_cljs$core$async27220");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27220 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27220(map_LT___$1,f__$1,ch__$1,meta27218__$1,___$2,fn1__$1,meta27221){
return (new cljs.core.async.t_cljs$core$async27220(map_LT___$1,f__$1,ch__$1,meta27218__$1,___$2,fn1__$1,meta27221));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27220(self__.map_LT_,self__.f,self__.ch,self__.meta27218,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21681__auto__ = ret;
if(cljs.core.truth_(and__21681__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21681__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27217.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27217.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27218","meta27218",-1749540378,null)], null);
});

cljs.core.async.t_cljs$core$async27217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27217";

cljs.core.async.t_cljs$core$async27217.cljs$lang$ctorPrWriter = (function (this__22299__auto__,writer__22300__auto__,opt__22301__auto__){
return cljs.core._write.call(null,writer__22300__auto__,"cljs.core.async/t_cljs$core$async27217");
});

cljs.core.async.__GT_t_cljs$core$async27217 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27217(map_LT___$1,f__$1,ch__$1,meta27218){
return (new cljs.core.async.t_cljs$core$async27217(map_LT___$1,f__$1,ch__$1,meta27218));
});

}

return (new cljs.core.async.t_cljs$core$async27217(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27226 = (function (map_GT_,f,ch,meta27227){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27227 = meta27227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27228,meta27227__$1){
var self__ = this;
var _27228__$1 = this;
return (new cljs.core.async.t_cljs$core$async27226(self__.map_GT_,self__.f,self__.ch,meta27227__$1));
});

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27228){
var self__ = this;
var _27228__$1 = this;
return self__.meta27227;
});

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27227","meta27227",-853501250,null)], null);
});

cljs.core.async.t_cljs$core$async27226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27226";

cljs.core.async.t_cljs$core$async27226.cljs$lang$ctorPrWriter = (function (this__22299__auto__,writer__22300__auto__,opt__22301__auto__){
return cljs.core._write.call(null,writer__22300__auto__,"cljs.core.async/t_cljs$core$async27226");
});

cljs.core.async.__GT_t_cljs$core$async27226 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27226(map_GT___$1,f__$1,ch__$1,meta27227){
return (new cljs.core.async.t_cljs$core$async27226(map_GT___$1,f__$1,ch__$1,meta27227));
});

}

return (new cljs.core.async.t_cljs$core$async27226(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27232 = (function (filter_GT_,p,ch,meta27233){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27233 = meta27233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27234,meta27233__$1){
var self__ = this;
var _27234__$1 = this;
return (new cljs.core.async.t_cljs$core$async27232(self__.filter_GT_,self__.p,self__.ch,meta27233__$1));
});

cljs.core.async.t_cljs$core$async27232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27234){
var self__ = this;
var _27234__$1 = this;
return self__.meta27233;
});

cljs.core.async.t_cljs$core$async27232.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27232.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27232.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27232.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27233","meta27233",-752621577,null)], null);
});

cljs.core.async.t_cljs$core$async27232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27232";

cljs.core.async.t_cljs$core$async27232.cljs$lang$ctorPrWriter = (function (this__22299__auto__,writer__22300__auto__,opt__22301__auto__){
return cljs.core._write.call(null,writer__22300__auto__,"cljs.core.async/t_cljs$core$async27232");
});

cljs.core.async.__GT_t_cljs$core$async27232 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27232(filter_GT___$1,p__$1,ch__$1,meta27233){
return (new cljs.core.async.t_cljs$core$async27232(filter_GT___$1,p__$1,ch__$1,meta27233));
});

}

return (new cljs.core.async.t_cljs$core$async27232(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27235 = [];
var len__22763__auto___27279 = arguments.length;
var i__22764__auto___27280 = (0);
while(true){
if((i__22764__auto___27280 < len__22763__auto___27279)){
args27235.push((arguments[i__22764__auto___27280]));

var G__27281 = (i__22764__auto___27280 + (1));
i__22764__auto___27280 = G__27281;
continue;
} else {
}
break;
}

var G__27237 = args27235.length;
switch (G__27237) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27235.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25033__auto___27283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___27283,out){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___27283,out){
return (function (state_27258){
var state_val_27259 = (state_27258[(1)]);
if((state_val_27259 === (7))){
var inst_27254 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
var statearr_27260_27284 = state_27258__$1;
(statearr_27260_27284[(2)] = inst_27254);

(statearr_27260_27284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (1))){
var state_27258__$1 = state_27258;
var statearr_27261_27285 = state_27258__$1;
(statearr_27261_27285[(2)] = null);

(statearr_27261_27285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (4))){
var inst_27240 = (state_27258[(7)]);
var inst_27240__$1 = (state_27258[(2)]);
var inst_27241 = (inst_27240__$1 == null);
var state_27258__$1 = (function (){var statearr_27262 = state_27258;
(statearr_27262[(7)] = inst_27240__$1);

return statearr_27262;
})();
if(cljs.core.truth_(inst_27241)){
var statearr_27263_27286 = state_27258__$1;
(statearr_27263_27286[(1)] = (5));

} else {
var statearr_27264_27287 = state_27258__$1;
(statearr_27264_27287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (6))){
var inst_27240 = (state_27258[(7)]);
var inst_27245 = p.call(null,inst_27240);
var state_27258__$1 = state_27258;
if(cljs.core.truth_(inst_27245)){
var statearr_27265_27288 = state_27258__$1;
(statearr_27265_27288[(1)] = (8));

} else {
var statearr_27266_27289 = state_27258__$1;
(statearr_27266_27289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (3))){
var inst_27256 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27258__$1,inst_27256);
} else {
if((state_val_27259 === (2))){
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27258__$1,(4),ch);
} else {
if((state_val_27259 === (11))){
var inst_27248 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
var statearr_27267_27290 = state_27258__$1;
(statearr_27267_27290[(2)] = inst_27248);

(statearr_27267_27290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (9))){
var state_27258__$1 = state_27258;
var statearr_27268_27291 = state_27258__$1;
(statearr_27268_27291[(2)] = null);

(statearr_27268_27291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (5))){
var inst_27243 = cljs.core.async.close_BANG_.call(null,out);
var state_27258__$1 = state_27258;
var statearr_27269_27292 = state_27258__$1;
(statearr_27269_27292[(2)] = inst_27243);

(statearr_27269_27292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (10))){
var inst_27251 = (state_27258[(2)]);
var state_27258__$1 = (function (){var statearr_27270 = state_27258;
(statearr_27270[(8)] = inst_27251);

return statearr_27270;
})();
var statearr_27271_27293 = state_27258__$1;
(statearr_27271_27293[(2)] = null);

(statearr_27271_27293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (8))){
var inst_27240 = (state_27258[(7)]);
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27258__$1,(11),out,inst_27240);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___27283,out))
;
return ((function (switch__24921__auto__,c__25033__auto___27283,out){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_27275 = [null,null,null,null,null,null,null,null,null];
(statearr_27275[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_27275[(1)] = (1));

return statearr_27275;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_27258){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_27258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e27276){if((e27276 instanceof Object)){
var ex__24925__auto__ = e27276;
var statearr_27277_27294 = state_27258;
(statearr_27277_27294[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27295 = state_27258;
state_27258 = G__27295;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_27258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_27258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___27283,out))
})();
var state__25035__auto__ = (function (){var statearr_27278 = f__25034__auto__.call(null);
(statearr_27278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___27283);

return statearr_27278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___27283,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27296 = [];
var len__22763__auto___27299 = arguments.length;
var i__22764__auto___27300 = (0);
while(true){
if((i__22764__auto___27300 < len__22763__auto___27299)){
args27296.push((arguments[i__22764__auto___27300]));

var G__27301 = (i__22764__auto___27300 + (1));
i__22764__auto___27300 = G__27301;
continue;
} else {
}
break;
}

var G__27298 = args27296.length;
switch (G__27298) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27296.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto__){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto__){
return (function (state_27468){
var state_val_27469 = (state_27468[(1)]);
if((state_val_27469 === (7))){
var inst_27464 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27470_27511 = state_27468__$1;
(statearr_27470_27511[(2)] = inst_27464);

(statearr_27470_27511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (20))){
var inst_27434 = (state_27468[(7)]);
var inst_27445 = (state_27468[(2)]);
var inst_27446 = cljs.core.next.call(null,inst_27434);
var inst_27420 = inst_27446;
var inst_27421 = null;
var inst_27422 = (0);
var inst_27423 = (0);
var state_27468__$1 = (function (){var statearr_27471 = state_27468;
(statearr_27471[(8)] = inst_27420);

(statearr_27471[(9)] = inst_27422);

(statearr_27471[(10)] = inst_27423);

(statearr_27471[(11)] = inst_27445);

(statearr_27471[(12)] = inst_27421);

return statearr_27471;
})();
var statearr_27472_27512 = state_27468__$1;
(statearr_27472_27512[(2)] = null);

(statearr_27472_27512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (1))){
var state_27468__$1 = state_27468;
var statearr_27473_27513 = state_27468__$1;
(statearr_27473_27513[(2)] = null);

(statearr_27473_27513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (4))){
var inst_27409 = (state_27468[(13)]);
var inst_27409__$1 = (state_27468[(2)]);
var inst_27410 = (inst_27409__$1 == null);
var state_27468__$1 = (function (){var statearr_27474 = state_27468;
(statearr_27474[(13)] = inst_27409__$1);

return statearr_27474;
})();
if(cljs.core.truth_(inst_27410)){
var statearr_27475_27514 = state_27468__$1;
(statearr_27475_27514[(1)] = (5));

} else {
var statearr_27476_27515 = state_27468__$1;
(statearr_27476_27515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (15))){
var state_27468__$1 = state_27468;
var statearr_27480_27516 = state_27468__$1;
(statearr_27480_27516[(2)] = null);

(statearr_27480_27516[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (21))){
var state_27468__$1 = state_27468;
var statearr_27481_27517 = state_27468__$1;
(statearr_27481_27517[(2)] = null);

(statearr_27481_27517[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (13))){
var inst_27420 = (state_27468[(8)]);
var inst_27422 = (state_27468[(9)]);
var inst_27423 = (state_27468[(10)]);
var inst_27421 = (state_27468[(12)]);
var inst_27430 = (state_27468[(2)]);
var inst_27431 = (inst_27423 + (1));
var tmp27477 = inst_27420;
var tmp27478 = inst_27422;
var tmp27479 = inst_27421;
var inst_27420__$1 = tmp27477;
var inst_27421__$1 = tmp27479;
var inst_27422__$1 = tmp27478;
var inst_27423__$1 = inst_27431;
var state_27468__$1 = (function (){var statearr_27482 = state_27468;
(statearr_27482[(8)] = inst_27420__$1);

(statearr_27482[(9)] = inst_27422__$1);

(statearr_27482[(10)] = inst_27423__$1);

(statearr_27482[(14)] = inst_27430);

(statearr_27482[(12)] = inst_27421__$1);

return statearr_27482;
})();
var statearr_27483_27518 = state_27468__$1;
(statearr_27483_27518[(2)] = null);

(statearr_27483_27518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (22))){
var state_27468__$1 = state_27468;
var statearr_27484_27519 = state_27468__$1;
(statearr_27484_27519[(2)] = null);

(statearr_27484_27519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (6))){
var inst_27409 = (state_27468[(13)]);
var inst_27418 = f.call(null,inst_27409);
var inst_27419 = cljs.core.seq.call(null,inst_27418);
var inst_27420 = inst_27419;
var inst_27421 = null;
var inst_27422 = (0);
var inst_27423 = (0);
var state_27468__$1 = (function (){var statearr_27485 = state_27468;
(statearr_27485[(8)] = inst_27420);

(statearr_27485[(9)] = inst_27422);

(statearr_27485[(10)] = inst_27423);

(statearr_27485[(12)] = inst_27421);

return statearr_27485;
})();
var statearr_27486_27520 = state_27468__$1;
(statearr_27486_27520[(2)] = null);

(statearr_27486_27520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (17))){
var inst_27434 = (state_27468[(7)]);
var inst_27438 = cljs.core.chunk_first.call(null,inst_27434);
var inst_27439 = cljs.core.chunk_rest.call(null,inst_27434);
var inst_27440 = cljs.core.count.call(null,inst_27438);
var inst_27420 = inst_27439;
var inst_27421 = inst_27438;
var inst_27422 = inst_27440;
var inst_27423 = (0);
var state_27468__$1 = (function (){var statearr_27487 = state_27468;
(statearr_27487[(8)] = inst_27420);

(statearr_27487[(9)] = inst_27422);

(statearr_27487[(10)] = inst_27423);

(statearr_27487[(12)] = inst_27421);

return statearr_27487;
})();
var statearr_27488_27521 = state_27468__$1;
(statearr_27488_27521[(2)] = null);

(statearr_27488_27521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (3))){
var inst_27466 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27468__$1,inst_27466);
} else {
if((state_val_27469 === (12))){
var inst_27454 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27489_27522 = state_27468__$1;
(statearr_27489_27522[(2)] = inst_27454);

(statearr_27489_27522[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (2))){
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27468__$1,(4),in$);
} else {
if((state_val_27469 === (23))){
var inst_27462 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27490_27523 = state_27468__$1;
(statearr_27490_27523[(2)] = inst_27462);

(statearr_27490_27523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (19))){
var inst_27449 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27491_27524 = state_27468__$1;
(statearr_27491_27524[(2)] = inst_27449);

(statearr_27491_27524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (11))){
var inst_27420 = (state_27468[(8)]);
var inst_27434 = (state_27468[(7)]);
var inst_27434__$1 = cljs.core.seq.call(null,inst_27420);
var state_27468__$1 = (function (){var statearr_27492 = state_27468;
(statearr_27492[(7)] = inst_27434__$1);

return statearr_27492;
})();
if(inst_27434__$1){
var statearr_27493_27525 = state_27468__$1;
(statearr_27493_27525[(1)] = (14));

} else {
var statearr_27494_27526 = state_27468__$1;
(statearr_27494_27526[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (9))){
var inst_27456 = (state_27468[(2)]);
var inst_27457 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27468__$1 = (function (){var statearr_27495 = state_27468;
(statearr_27495[(15)] = inst_27456);

return statearr_27495;
})();
if(cljs.core.truth_(inst_27457)){
var statearr_27496_27527 = state_27468__$1;
(statearr_27496_27527[(1)] = (21));

} else {
var statearr_27497_27528 = state_27468__$1;
(statearr_27497_27528[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (5))){
var inst_27412 = cljs.core.async.close_BANG_.call(null,out);
var state_27468__$1 = state_27468;
var statearr_27498_27529 = state_27468__$1;
(statearr_27498_27529[(2)] = inst_27412);

(statearr_27498_27529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (14))){
var inst_27434 = (state_27468[(7)]);
var inst_27436 = cljs.core.chunked_seq_QMARK_.call(null,inst_27434);
var state_27468__$1 = state_27468;
if(inst_27436){
var statearr_27499_27530 = state_27468__$1;
(statearr_27499_27530[(1)] = (17));

} else {
var statearr_27500_27531 = state_27468__$1;
(statearr_27500_27531[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (16))){
var inst_27452 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27501_27532 = state_27468__$1;
(statearr_27501_27532[(2)] = inst_27452);

(statearr_27501_27532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (10))){
var inst_27423 = (state_27468[(10)]);
var inst_27421 = (state_27468[(12)]);
var inst_27428 = cljs.core._nth.call(null,inst_27421,inst_27423);
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27468__$1,(13),out,inst_27428);
} else {
if((state_val_27469 === (18))){
var inst_27434 = (state_27468[(7)]);
var inst_27443 = cljs.core.first.call(null,inst_27434);
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27468__$1,(20),out,inst_27443);
} else {
if((state_val_27469 === (8))){
var inst_27422 = (state_27468[(9)]);
var inst_27423 = (state_27468[(10)]);
var inst_27425 = (inst_27423 < inst_27422);
var inst_27426 = inst_27425;
var state_27468__$1 = state_27468;
if(cljs.core.truth_(inst_27426)){
var statearr_27502_27533 = state_27468__$1;
(statearr_27502_27533[(1)] = (10));

} else {
var statearr_27503_27534 = state_27468__$1;
(statearr_27503_27534[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto__))
;
return ((function (switch__24921__auto__,c__25033__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24922__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24922__auto____0 = (function (){
var statearr_27507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27507[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24922__auto__);

(statearr_27507[(1)] = (1));

return statearr_27507;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24922__auto____1 = (function (state_27468){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_27468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e27508){if((e27508 instanceof Object)){
var ex__24925__auto__ = e27508;
var statearr_27509_27535 = state_27468;
(statearr_27509_27535[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27536 = state_27468;
state_27468 = G__27536;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24922__auto__ = function(state_27468){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24922__auto____1.call(this,state_27468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24922__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24922__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto__))
})();
var state__25035__auto__ = (function (){var statearr_27510 = f__25034__auto__.call(null);
(statearr_27510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto__);

return statearr_27510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto__))
);

return c__25033__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27537 = [];
var len__22763__auto___27540 = arguments.length;
var i__22764__auto___27541 = (0);
while(true){
if((i__22764__auto___27541 < len__22763__auto___27540)){
args27537.push((arguments[i__22764__auto___27541]));

var G__27542 = (i__22764__auto___27541 + (1));
i__22764__auto___27541 = G__27542;
continue;
} else {
}
break;
}

var G__27539 = args27537.length;
switch (G__27539) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27537.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27544 = [];
var len__22763__auto___27547 = arguments.length;
var i__22764__auto___27548 = (0);
while(true){
if((i__22764__auto___27548 < len__22763__auto___27547)){
args27544.push((arguments[i__22764__auto___27548]));

var G__27549 = (i__22764__auto___27548 + (1));
i__22764__auto___27548 = G__27549;
continue;
} else {
}
break;
}

var G__27546 = args27544.length;
switch (G__27546) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27544.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27551 = [];
var len__22763__auto___27602 = arguments.length;
var i__22764__auto___27603 = (0);
while(true){
if((i__22764__auto___27603 < len__22763__auto___27602)){
args27551.push((arguments[i__22764__auto___27603]));

var G__27604 = (i__22764__auto___27603 + (1));
i__22764__auto___27603 = G__27604;
continue;
} else {
}
break;
}

var G__27553 = args27551.length;
switch (G__27553) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27551.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25033__auto___27606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___27606,out){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___27606,out){
return (function (state_27577){
var state_val_27578 = (state_27577[(1)]);
if((state_val_27578 === (7))){
var inst_27572 = (state_27577[(2)]);
var state_27577__$1 = state_27577;
var statearr_27579_27607 = state_27577__$1;
(statearr_27579_27607[(2)] = inst_27572);

(statearr_27579_27607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (1))){
var inst_27554 = null;
var state_27577__$1 = (function (){var statearr_27580 = state_27577;
(statearr_27580[(7)] = inst_27554);

return statearr_27580;
})();
var statearr_27581_27608 = state_27577__$1;
(statearr_27581_27608[(2)] = null);

(statearr_27581_27608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (4))){
var inst_27557 = (state_27577[(8)]);
var inst_27557__$1 = (state_27577[(2)]);
var inst_27558 = (inst_27557__$1 == null);
var inst_27559 = cljs.core.not.call(null,inst_27558);
var state_27577__$1 = (function (){var statearr_27582 = state_27577;
(statearr_27582[(8)] = inst_27557__$1);

return statearr_27582;
})();
if(inst_27559){
var statearr_27583_27609 = state_27577__$1;
(statearr_27583_27609[(1)] = (5));

} else {
var statearr_27584_27610 = state_27577__$1;
(statearr_27584_27610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (6))){
var state_27577__$1 = state_27577;
var statearr_27585_27611 = state_27577__$1;
(statearr_27585_27611[(2)] = null);

(statearr_27585_27611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (3))){
var inst_27574 = (state_27577[(2)]);
var inst_27575 = cljs.core.async.close_BANG_.call(null,out);
var state_27577__$1 = (function (){var statearr_27586 = state_27577;
(statearr_27586[(9)] = inst_27574);

return statearr_27586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27577__$1,inst_27575);
} else {
if((state_val_27578 === (2))){
var state_27577__$1 = state_27577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27577__$1,(4),ch);
} else {
if((state_val_27578 === (11))){
var inst_27557 = (state_27577[(8)]);
var inst_27566 = (state_27577[(2)]);
var inst_27554 = inst_27557;
var state_27577__$1 = (function (){var statearr_27587 = state_27577;
(statearr_27587[(10)] = inst_27566);

(statearr_27587[(7)] = inst_27554);

return statearr_27587;
})();
var statearr_27588_27612 = state_27577__$1;
(statearr_27588_27612[(2)] = null);

(statearr_27588_27612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (9))){
var inst_27557 = (state_27577[(8)]);
var state_27577__$1 = state_27577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27577__$1,(11),out,inst_27557);
} else {
if((state_val_27578 === (5))){
var inst_27554 = (state_27577[(7)]);
var inst_27557 = (state_27577[(8)]);
var inst_27561 = cljs.core._EQ_.call(null,inst_27557,inst_27554);
var state_27577__$1 = state_27577;
if(inst_27561){
var statearr_27590_27613 = state_27577__$1;
(statearr_27590_27613[(1)] = (8));

} else {
var statearr_27591_27614 = state_27577__$1;
(statearr_27591_27614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (10))){
var inst_27569 = (state_27577[(2)]);
var state_27577__$1 = state_27577;
var statearr_27592_27615 = state_27577__$1;
(statearr_27592_27615[(2)] = inst_27569);

(statearr_27592_27615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (8))){
var inst_27554 = (state_27577[(7)]);
var tmp27589 = inst_27554;
var inst_27554__$1 = tmp27589;
var state_27577__$1 = (function (){var statearr_27593 = state_27577;
(statearr_27593[(7)] = inst_27554__$1);

return statearr_27593;
})();
var statearr_27594_27616 = state_27577__$1;
(statearr_27594_27616[(2)] = null);

(statearr_27594_27616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___27606,out))
;
return ((function (switch__24921__auto__,c__25033__auto___27606,out){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_27598 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27598[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_27598[(1)] = (1));

return statearr_27598;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_27577){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_27577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e27599){if((e27599 instanceof Object)){
var ex__24925__auto__ = e27599;
var statearr_27600_27617 = state_27577;
(statearr_27600_27617[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27618 = state_27577;
state_27577 = G__27618;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_27577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_27577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___27606,out))
})();
var state__25035__auto__ = (function (){var statearr_27601 = f__25034__auto__.call(null);
(statearr_27601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___27606);

return statearr_27601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___27606,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27619 = [];
var len__22763__auto___27689 = arguments.length;
var i__22764__auto___27690 = (0);
while(true){
if((i__22764__auto___27690 < len__22763__auto___27689)){
args27619.push((arguments[i__22764__auto___27690]));

var G__27691 = (i__22764__auto___27690 + (1));
i__22764__auto___27690 = G__27691;
continue;
} else {
}
break;
}

var G__27621 = args27619.length;
switch (G__27621) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27619.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25033__auto___27693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___27693,out){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___27693,out){
return (function (state_27659){
var state_val_27660 = (state_27659[(1)]);
if((state_val_27660 === (7))){
var inst_27655 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27661_27694 = state_27659__$1;
(statearr_27661_27694[(2)] = inst_27655);

(statearr_27661_27694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (1))){
var inst_27622 = (new Array(n));
var inst_27623 = inst_27622;
var inst_27624 = (0);
var state_27659__$1 = (function (){var statearr_27662 = state_27659;
(statearr_27662[(7)] = inst_27624);

(statearr_27662[(8)] = inst_27623);

return statearr_27662;
})();
var statearr_27663_27695 = state_27659__$1;
(statearr_27663_27695[(2)] = null);

(statearr_27663_27695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (4))){
var inst_27627 = (state_27659[(9)]);
var inst_27627__$1 = (state_27659[(2)]);
var inst_27628 = (inst_27627__$1 == null);
var inst_27629 = cljs.core.not.call(null,inst_27628);
var state_27659__$1 = (function (){var statearr_27664 = state_27659;
(statearr_27664[(9)] = inst_27627__$1);

return statearr_27664;
})();
if(inst_27629){
var statearr_27665_27696 = state_27659__$1;
(statearr_27665_27696[(1)] = (5));

} else {
var statearr_27666_27697 = state_27659__$1;
(statearr_27666_27697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (15))){
var inst_27649 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27667_27698 = state_27659__$1;
(statearr_27667_27698[(2)] = inst_27649);

(statearr_27667_27698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (13))){
var state_27659__$1 = state_27659;
var statearr_27668_27699 = state_27659__$1;
(statearr_27668_27699[(2)] = null);

(statearr_27668_27699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (6))){
var inst_27624 = (state_27659[(7)]);
var inst_27645 = (inst_27624 > (0));
var state_27659__$1 = state_27659;
if(cljs.core.truth_(inst_27645)){
var statearr_27669_27700 = state_27659__$1;
(statearr_27669_27700[(1)] = (12));

} else {
var statearr_27670_27701 = state_27659__$1;
(statearr_27670_27701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (3))){
var inst_27657 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27659__$1,inst_27657);
} else {
if((state_val_27660 === (12))){
var inst_27623 = (state_27659[(8)]);
var inst_27647 = cljs.core.vec.call(null,inst_27623);
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27659__$1,(15),out,inst_27647);
} else {
if((state_val_27660 === (2))){
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27659__$1,(4),ch);
} else {
if((state_val_27660 === (11))){
var inst_27639 = (state_27659[(2)]);
var inst_27640 = (new Array(n));
var inst_27623 = inst_27640;
var inst_27624 = (0);
var state_27659__$1 = (function (){var statearr_27671 = state_27659;
(statearr_27671[(7)] = inst_27624);

(statearr_27671[(8)] = inst_27623);

(statearr_27671[(10)] = inst_27639);

return statearr_27671;
})();
var statearr_27672_27702 = state_27659__$1;
(statearr_27672_27702[(2)] = null);

(statearr_27672_27702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (9))){
var inst_27623 = (state_27659[(8)]);
var inst_27637 = cljs.core.vec.call(null,inst_27623);
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27659__$1,(11),out,inst_27637);
} else {
if((state_val_27660 === (5))){
var inst_27624 = (state_27659[(7)]);
var inst_27623 = (state_27659[(8)]);
var inst_27632 = (state_27659[(11)]);
var inst_27627 = (state_27659[(9)]);
var inst_27631 = (inst_27623[inst_27624] = inst_27627);
var inst_27632__$1 = (inst_27624 + (1));
var inst_27633 = (inst_27632__$1 < n);
var state_27659__$1 = (function (){var statearr_27673 = state_27659;
(statearr_27673[(11)] = inst_27632__$1);

(statearr_27673[(12)] = inst_27631);

return statearr_27673;
})();
if(cljs.core.truth_(inst_27633)){
var statearr_27674_27703 = state_27659__$1;
(statearr_27674_27703[(1)] = (8));

} else {
var statearr_27675_27704 = state_27659__$1;
(statearr_27675_27704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (14))){
var inst_27652 = (state_27659[(2)]);
var inst_27653 = cljs.core.async.close_BANG_.call(null,out);
var state_27659__$1 = (function (){var statearr_27677 = state_27659;
(statearr_27677[(13)] = inst_27652);

return statearr_27677;
})();
var statearr_27678_27705 = state_27659__$1;
(statearr_27678_27705[(2)] = inst_27653);

(statearr_27678_27705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (10))){
var inst_27643 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27679_27706 = state_27659__$1;
(statearr_27679_27706[(2)] = inst_27643);

(statearr_27679_27706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (8))){
var inst_27623 = (state_27659[(8)]);
var inst_27632 = (state_27659[(11)]);
var tmp27676 = inst_27623;
var inst_27623__$1 = tmp27676;
var inst_27624 = inst_27632;
var state_27659__$1 = (function (){var statearr_27680 = state_27659;
(statearr_27680[(7)] = inst_27624);

(statearr_27680[(8)] = inst_27623__$1);

return statearr_27680;
})();
var statearr_27681_27707 = state_27659__$1;
(statearr_27681_27707[(2)] = null);

(statearr_27681_27707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___27693,out))
;
return ((function (switch__24921__auto__,c__25033__auto___27693,out){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_27685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27685[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_27685[(1)] = (1));

return statearr_27685;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_27659){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_27659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e27686){if((e27686 instanceof Object)){
var ex__24925__auto__ = e27686;
var statearr_27687_27708 = state_27659;
(statearr_27687_27708[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27709 = state_27659;
state_27659 = G__27709;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_27659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_27659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___27693,out))
})();
var state__25035__auto__ = (function (){var statearr_27688 = f__25034__auto__.call(null);
(statearr_27688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___27693);

return statearr_27688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___27693,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27710 = [];
var len__22763__auto___27784 = arguments.length;
var i__22764__auto___27785 = (0);
while(true){
if((i__22764__auto___27785 < len__22763__auto___27784)){
args27710.push((arguments[i__22764__auto___27785]));

var G__27786 = (i__22764__auto___27785 + (1));
i__22764__auto___27785 = G__27786;
continue;
} else {
}
break;
}

var G__27712 = args27710.length;
switch (G__27712) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27710.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25033__auto___27788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___27788,out){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___27788,out){
return (function (state_27754){
var state_val_27755 = (state_27754[(1)]);
if((state_val_27755 === (7))){
var inst_27750 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27756_27789 = state_27754__$1;
(statearr_27756_27789[(2)] = inst_27750);

(statearr_27756_27789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (1))){
var inst_27713 = [];
var inst_27714 = inst_27713;
var inst_27715 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27754__$1 = (function (){var statearr_27757 = state_27754;
(statearr_27757[(7)] = inst_27714);

(statearr_27757[(8)] = inst_27715);

return statearr_27757;
})();
var statearr_27758_27790 = state_27754__$1;
(statearr_27758_27790[(2)] = null);

(statearr_27758_27790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (4))){
var inst_27718 = (state_27754[(9)]);
var inst_27718__$1 = (state_27754[(2)]);
var inst_27719 = (inst_27718__$1 == null);
var inst_27720 = cljs.core.not.call(null,inst_27719);
var state_27754__$1 = (function (){var statearr_27759 = state_27754;
(statearr_27759[(9)] = inst_27718__$1);

return statearr_27759;
})();
if(inst_27720){
var statearr_27760_27791 = state_27754__$1;
(statearr_27760_27791[(1)] = (5));

} else {
var statearr_27761_27792 = state_27754__$1;
(statearr_27761_27792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (15))){
var inst_27744 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27762_27793 = state_27754__$1;
(statearr_27762_27793[(2)] = inst_27744);

(statearr_27762_27793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (13))){
var state_27754__$1 = state_27754;
var statearr_27763_27794 = state_27754__$1;
(statearr_27763_27794[(2)] = null);

(statearr_27763_27794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (6))){
var inst_27714 = (state_27754[(7)]);
var inst_27739 = inst_27714.length;
var inst_27740 = (inst_27739 > (0));
var state_27754__$1 = state_27754;
if(cljs.core.truth_(inst_27740)){
var statearr_27764_27795 = state_27754__$1;
(statearr_27764_27795[(1)] = (12));

} else {
var statearr_27765_27796 = state_27754__$1;
(statearr_27765_27796[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (3))){
var inst_27752 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27754__$1,inst_27752);
} else {
if((state_val_27755 === (12))){
var inst_27714 = (state_27754[(7)]);
var inst_27742 = cljs.core.vec.call(null,inst_27714);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27754__$1,(15),out,inst_27742);
} else {
if((state_val_27755 === (2))){
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27754__$1,(4),ch);
} else {
if((state_val_27755 === (11))){
var inst_27718 = (state_27754[(9)]);
var inst_27722 = (state_27754[(10)]);
var inst_27732 = (state_27754[(2)]);
var inst_27733 = [];
var inst_27734 = inst_27733.push(inst_27718);
var inst_27714 = inst_27733;
var inst_27715 = inst_27722;
var state_27754__$1 = (function (){var statearr_27766 = state_27754;
(statearr_27766[(7)] = inst_27714);

(statearr_27766[(11)] = inst_27734);

(statearr_27766[(8)] = inst_27715);

(statearr_27766[(12)] = inst_27732);

return statearr_27766;
})();
var statearr_27767_27797 = state_27754__$1;
(statearr_27767_27797[(2)] = null);

(statearr_27767_27797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (9))){
var inst_27714 = (state_27754[(7)]);
var inst_27730 = cljs.core.vec.call(null,inst_27714);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27754__$1,(11),out,inst_27730);
} else {
if((state_val_27755 === (5))){
var inst_27718 = (state_27754[(9)]);
var inst_27715 = (state_27754[(8)]);
var inst_27722 = (state_27754[(10)]);
var inst_27722__$1 = f.call(null,inst_27718);
var inst_27723 = cljs.core._EQ_.call(null,inst_27722__$1,inst_27715);
var inst_27724 = cljs.core.keyword_identical_QMARK_.call(null,inst_27715,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27725 = (inst_27723) || (inst_27724);
var state_27754__$1 = (function (){var statearr_27768 = state_27754;
(statearr_27768[(10)] = inst_27722__$1);

return statearr_27768;
})();
if(cljs.core.truth_(inst_27725)){
var statearr_27769_27798 = state_27754__$1;
(statearr_27769_27798[(1)] = (8));

} else {
var statearr_27770_27799 = state_27754__$1;
(statearr_27770_27799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (14))){
var inst_27747 = (state_27754[(2)]);
var inst_27748 = cljs.core.async.close_BANG_.call(null,out);
var state_27754__$1 = (function (){var statearr_27772 = state_27754;
(statearr_27772[(13)] = inst_27747);

return statearr_27772;
})();
var statearr_27773_27800 = state_27754__$1;
(statearr_27773_27800[(2)] = inst_27748);

(statearr_27773_27800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (10))){
var inst_27737 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27774_27801 = state_27754__$1;
(statearr_27774_27801[(2)] = inst_27737);

(statearr_27774_27801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (8))){
var inst_27714 = (state_27754[(7)]);
var inst_27718 = (state_27754[(9)]);
var inst_27722 = (state_27754[(10)]);
var inst_27727 = inst_27714.push(inst_27718);
var tmp27771 = inst_27714;
var inst_27714__$1 = tmp27771;
var inst_27715 = inst_27722;
var state_27754__$1 = (function (){var statearr_27775 = state_27754;
(statearr_27775[(7)] = inst_27714__$1);

(statearr_27775[(14)] = inst_27727);

(statearr_27775[(8)] = inst_27715);

return statearr_27775;
})();
var statearr_27776_27802 = state_27754__$1;
(statearr_27776_27802[(2)] = null);

(statearr_27776_27802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25033__auto___27788,out))
;
return ((function (switch__24921__auto__,c__25033__auto___27788,out){
return (function() {
var cljs$core$async$state_machine__24922__auto__ = null;
var cljs$core$async$state_machine__24922__auto____0 = (function (){
var statearr_27780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27780[(0)] = cljs$core$async$state_machine__24922__auto__);

(statearr_27780[(1)] = (1));

return statearr_27780;
});
var cljs$core$async$state_machine__24922__auto____1 = (function (state_27754){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_27754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e27781){if((e27781 instanceof Object)){
var ex__24925__auto__ = e27781;
var statearr_27782_27803 = state_27754;
(statearr_27782_27803[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27804 = state_27754;
state_27754 = G__27804;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
cljs$core$async$state_machine__24922__auto__ = function(state_27754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24922__auto____1.call(this,state_27754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24922__auto____0;
cljs$core$async$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24922__auto____1;
return cljs$core$async$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___27788,out))
})();
var state__25035__auto__ = (function (){var statearr_27783 = f__25034__auto__.call(null);
(statearr_27783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___27788);

return statearr_27783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___27788,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1469132190308