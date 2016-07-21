// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-3";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30502 = [];
var len__22763__auto___30505 = arguments.length;
var i__22764__auto___30506 = (0);
while(true){
if((i__22764__auto___30506 < len__22763__auto___30505)){
args30502.push((arguments[i__22764__auto___30506]));

var G__30507 = (i__22764__auto___30506 + (1));
i__22764__auto___30506 = G__30507;
continue;
} else {
}
break;
}

var G__30504 = args30502.length;
switch (G__30504) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30502.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;
figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30510 = arguments.length;
var i__22764__auto___30511 = (0);
while(true){
if((i__22764__auto___30511 < len__22763__auto___30510)){
args__22770__auto__.push((arguments[i__22764__auto___30511]));

var G__30512 = (i__22764__auto___30511 + (1));
i__22764__auto___30511 = G__30512;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30509){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30509));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30514 = arguments.length;
var i__22764__auto___30515 = (0);
while(true){
if((i__22764__auto___30515 < len__22763__auto___30514)){
args__22770__auto__.push((arguments[i__22764__auto___30515]));

var G__30516 = (i__22764__auto___30515 + (1));
i__22764__auto___30515 = G__30516;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30513){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30513));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30517 = cljs.core._EQ_;
var expr__30518 = (function (){var or__21693__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30521){if((e30521 instanceof Error)){
var e = e30521;
return false;
} else {
throw e30521;

}
}})();
if(cljs.core.truth_(or__21693__auto__)){
return or__21693__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30517.call(null,"true",expr__30518))){
return true;
} else {
if(cljs.core.truth_(pred__30517.call(null,"false",expr__30518))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30518)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30523){if((e30523 instanceof Error)){
var e = e30523;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30523;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30524){
var map__30527 = p__30524;
var map__30527__$1 = ((((!((map__30527 == null)))?((((map__30527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30527):map__30527);
var message = cljs.core.get.call(null,map__30527__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30527__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21693__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21693__auto__)){
return or__21693__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21681__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21681__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21681__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25033__auto___30689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___30689,ch){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___30689,ch){
return (function (state_30658){
var state_val_30659 = (state_30658[(1)]);
if((state_val_30659 === (7))){
var inst_30654 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30660_30690 = state_30658__$1;
(statearr_30660_30690[(2)] = inst_30654);

(statearr_30660_30690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (1))){
var state_30658__$1 = state_30658;
var statearr_30661_30691 = state_30658__$1;
(statearr_30661_30691[(2)] = null);

(statearr_30661_30691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (4))){
var inst_30611 = (state_30658[(7)]);
var inst_30611__$1 = (state_30658[(2)]);
var state_30658__$1 = (function (){var statearr_30662 = state_30658;
(statearr_30662[(7)] = inst_30611__$1);

return statearr_30662;
})();
if(cljs.core.truth_(inst_30611__$1)){
var statearr_30663_30692 = state_30658__$1;
(statearr_30663_30692[(1)] = (5));

} else {
var statearr_30664_30693 = state_30658__$1;
(statearr_30664_30693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (15))){
var inst_30618 = (state_30658[(8)]);
var inst_30633 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30618);
var inst_30634 = cljs.core.first.call(null,inst_30633);
var inst_30635 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30634);
var inst_30636 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30635)].join('');
var inst_30637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30636);
var state_30658__$1 = state_30658;
var statearr_30665_30694 = state_30658__$1;
(statearr_30665_30694[(2)] = inst_30637);

(statearr_30665_30694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (13))){
var inst_30642 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30666_30695 = state_30658__$1;
(statearr_30666_30695[(2)] = inst_30642);

(statearr_30666_30695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (6))){
var state_30658__$1 = state_30658;
var statearr_30667_30696 = state_30658__$1;
(statearr_30667_30696[(2)] = null);

(statearr_30667_30696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (17))){
var inst_30640 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30668_30697 = state_30658__$1;
(statearr_30668_30697[(2)] = inst_30640);

(statearr_30668_30697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (3))){
var inst_30656 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30658__$1,inst_30656);
} else {
if((state_val_30659 === (12))){
var inst_30617 = (state_30658[(9)]);
var inst_30631 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30617,opts);
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30631)){
var statearr_30669_30698 = state_30658__$1;
(statearr_30669_30698[(1)] = (15));

} else {
var statearr_30670_30699 = state_30658__$1;
(statearr_30670_30699[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (2))){
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(4),ch);
} else {
if((state_val_30659 === (11))){
var inst_30618 = (state_30658[(8)]);
var inst_30623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30624 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30618);
var inst_30625 = cljs.core.async.timeout.call(null,(1000));
var inst_30626 = [inst_30624,inst_30625];
var inst_30627 = (new cljs.core.PersistentVector(null,2,(5),inst_30623,inst_30626,null));
var state_30658__$1 = state_30658;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30658__$1,(14),inst_30627);
} else {
if((state_val_30659 === (9))){
var inst_30618 = (state_30658[(8)]);
var inst_30644 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30645 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30618);
var inst_30646 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30645);
var inst_30647 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30646)].join('');
var inst_30648 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30647);
var state_30658__$1 = (function (){var statearr_30671 = state_30658;
(statearr_30671[(10)] = inst_30644);

return statearr_30671;
})();
var statearr_30672_30700 = state_30658__$1;
(statearr_30672_30700[(2)] = inst_30648);

(statearr_30672_30700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (5))){
var inst_30611 = (state_30658[(7)]);
var inst_30613 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30614 = (new cljs.core.PersistentArrayMap(null,2,inst_30613,null));
var inst_30615 = (new cljs.core.PersistentHashSet(null,inst_30614,null));
var inst_30616 = figwheel.client.focus_msgs.call(null,inst_30615,inst_30611);
var inst_30617 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30616);
var inst_30618 = cljs.core.first.call(null,inst_30616);
var inst_30619 = figwheel.client.autoload_QMARK_.call(null);
var state_30658__$1 = (function (){var statearr_30673 = state_30658;
(statearr_30673[(9)] = inst_30617);

(statearr_30673[(8)] = inst_30618);

return statearr_30673;
})();
if(cljs.core.truth_(inst_30619)){
var statearr_30674_30701 = state_30658__$1;
(statearr_30674_30701[(1)] = (8));

} else {
var statearr_30675_30702 = state_30658__$1;
(statearr_30675_30702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (14))){
var inst_30629 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30676_30703 = state_30658__$1;
(statearr_30676_30703[(2)] = inst_30629);

(statearr_30676_30703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (16))){
var state_30658__$1 = state_30658;
var statearr_30677_30704 = state_30658__$1;
(statearr_30677_30704[(2)] = null);

(statearr_30677_30704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (10))){
var inst_30650 = (state_30658[(2)]);
var state_30658__$1 = (function (){var statearr_30678 = state_30658;
(statearr_30678[(11)] = inst_30650);

return statearr_30678;
})();
var statearr_30679_30705 = state_30658__$1;
(statearr_30679_30705[(2)] = null);

(statearr_30679_30705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (8))){
var inst_30617 = (state_30658[(9)]);
var inst_30621 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30617,opts);
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30621)){
var statearr_30680_30706 = state_30658__$1;
(statearr_30680_30706[(1)] = (11));

} else {
var statearr_30681_30707 = state_30658__$1;
(statearr_30681_30707[(1)] = (12));

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
});})(c__25033__auto___30689,ch))
;
return ((function (switch__24921__auto__,c__25033__auto___30689,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24922__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24922__auto____0 = (function (){
var statearr_30685 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30685[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24922__auto__);

(statearr_30685[(1)] = (1));

return statearr_30685;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24922__auto____1 = (function (state_30658){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_30658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e30686){if((e30686 instanceof Object)){
var ex__24925__auto__ = e30686;
var statearr_30687_30708 = state_30658;
(statearr_30687_30708[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30709 = state_30658;
state_30658 = G__30709;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24922__auto__ = function(state_30658){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24922__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24922__auto____1.call(this,state_30658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24922__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24922__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___30689,ch))
})();
var state__25035__auto__ = (function (){var statearr_30688 = f__25034__auto__.call(null);
(statearr_30688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___30689);

return statearr_30688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___30689,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30710_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30710_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30713 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30713){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30712){if((e30712 instanceof Error)){
var e = e30712;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30713], null));
} else {
var e = e30712;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30713))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30714){
var map__30721 = p__30714;
var map__30721__$1 = ((((!((map__30721 == null)))?((((map__30721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30721):map__30721);
var opts = map__30721__$1;
var build_id = cljs.core.get.call(null,map__30721__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30721,map__30721__$1,opts,build_id){
return (function (p__30723){
var vec__30724 = p__30723;
var map__30725 = cljs.core.nth.call(null,vec__30724,(0),null);
var map__30725__$1 = ((((!((map__30725 == null)))?((((map__30725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30725):map__30725);
var msg = map__30725__$1;
var msg_name = cljs.core.get.call(null,map__30725__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30724,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30724,map__30725,map__30725__$1,msg,msg_name,_,map__30721,map__30721__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30724,map__30725,map__30725__$1,msg,msg_name,_,map__30721,map__30721__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30721,map__30721__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30731){
var vec__30732 = p__30731;
var map__30733 = cljs.core.nth.call(null,vec__30732,(0),null);
var map__30733__$1 = ((((!((map__30733 == null)))?((((map__30733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30733):map__30733);
var msg = map__30733__$1;
var msg_name = cljs.core.get.call(null,map__30733__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30732,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30735){
var map__30745 = p__30735;
var map__30745__$1 = ((((!((map__30745 == null)))?((((map__30745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30745):map__30745);
var on_compile_warning = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30745,map__30745__$1,on_compile_warning,on_compile_fail){
return (function (p__30747){
var vec__30748 = p__30747;
var map__30749 = cljs.core.nth.call(null,vec__30748,(0),null);
var map__30749__$1 = ((((!((map__30749 == null)))?((((map__30749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30749):map__30749);
var msg = map__30749__$1;
var msg_name = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30748,(1));
var pred__30751 = cljs.core._EQ_;
var expr__30752 = msg_name;
if(cljs.core.truth_(pred__30751.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30752))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30751.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30752))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30745,map__30745__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto__,msg_hist,msg_names,msg){
return (function (state_30960){
var state_val_30961 = (state_30960[(1)]);
if((state_val_30961 === (7))){
var inst_30888 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
if(cljs.core.truth_(inst_30888)){
var statearr_30962_31008 = state_30960__$1;
(statearr_30962_31008[(1)] = (8));

} else {
var statearr_30963_31009 = state_30960__$1;
(statearr_30963_31009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (20))){
var inst_30954 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30964_31010 = state_30960__$1;
(statearr_30964_31010[(2)] = inst_30954);

(statearr_30964_31010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (27))){
var inst_30950 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30965_31011 = state_30960__$1;
(statearr_30965_31011[(2)] = inst_30950);

(statearr_30965_31011[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (1))){
var inst_30881 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30960__$1 = state_30960;
if(cljs.core.truth_(inst_30881)){
var statearr_30966_31012 = state_30960__$1;
(statearr_30966_31012[(1)] = (2));

} else {
var statearr_30967_31013 = state_30960__$1;
(statearr_30967_31013[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (24))){
var inst_30952 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30968_31014 = state_30960__$1;
(statearr_30968_31014[(2)] = inst_30952);

(statearr_30968_31014[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (4))){
var inst_30958 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30960__$1,inst_30958);
} else {
if((state_val_30961 === (15))){
var inst_30956 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30969_31015 = state_30960__$1;
(statearr_30969_31015[(2)] = inst_30956);

(statearr_30969_31015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (21))){
var inst_30915 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30970_31016 = state_30960__$1;
(statearr_30970_31016[(2)] = inst_30915);

(statearr_30970_31016[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (31))){
var inst_30939 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30960__$1 = state_30960;
if(cljs.core.truth_(inst_30939)){
var statearr_30971_31017 = state_30960__$1;
(statearr_30971_31017[(1)] = (34));

} else {
var statearr_30972_31018 = state_30960__$1;
(statearr_30972_31018[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (32))){
var inst_30948 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30973_31019 = state_30960__$1;
(statearr_30973_31019[(2)] = inst_30948);

(statearr_30973_31019[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (33))){
var inst_30937 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30974_31020 = state_30960__$1;
(statearr_30974_31020[(2)] = inst_30937);

(statearr_30974_31020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (13))){
var inst_30902 = figwheel.client.heads_up.clear.call(null);
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30960__$1,(16),inst_30902);
} else {
if((state_val_30961 === (22))){
var inst_30919 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30920 = figwheel.client.heads_up.append_warning_message.call(null,inst_30919);
var state_30960__$1 = state_30960;
var statearr_30975_31021 = state_30960__$1;
(statearr_30975_31021[(2)] = inst_30920);

(statearr_30975_31021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (36))){
var inst_30946 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30976_31022 = state_30960__$1;
(statearr_30976_31022[(2)] = inst_30946);

(statearr_30976_31022[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (29))){
var inst_30930 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30977_31023 = state_30960__$1;
(statearr_30977_31023[(2)] = inst_30930);

(statearr_30977_31023[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (6))){
var inst_30883 = (state_30960[(7)]);
var state_30960__$1 = state_30960;
var statearr_30978_31024 = state_30960__$1;
(statearr_30978_31024[(2)] = inst_30883);

(statearr_30978_31024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (28))){
var inst_30926 = (state_30960[(2)]);
var inst_30927 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30928 = figwheel.client.heads_up.display_warning.call(null,inst_30927);
var state_30960__$1 = (function (){var statearr_30979 = state_30960;
(statearr_30979[(8)] = inst_30926);

return statearr_30979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30960__$1,(29),inst_30928);
} else {
if((state_val_30961 === (25))){
var inst_30924 = figwheel.client.heads_up.clear.call(null);
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30960__$1,(28),inst_30924);
} else {
if((state_val_30961 === (34))){
var inst_30941 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30960__$1,(37),inst_30941);
} else {
if((state_val_30961 === (17))){
var inst_30908 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30980_31025 = state_30960__$1;
(statearr_30980_31025[(2)] = inst_30908);

(statearr_30980_31025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (3))){
var inst_30900 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30960__$1 = state_30960;
if(cljs.core.truth_(inst_30900)){
var statearr_30981_31026 = state_30960__$1;
(statearr_30981_31026[(1)] = (13));

} else {
var statearr_30982_31027 = state_30960__$1;
(statearr_30982_31027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (12))){
var inst_30896 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30983_31028 = state_30960__$1;
(statearr_30983_31028[(2)] = inst_30896);

(statearr_30983_31028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (2))){
var inst_30883 = (state_30960[(7)]);
var inst_30883__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30960__$1 = (function (){var statearr_30984 = state_30960;
(statearr_30984[(7)] = inst_30883__$1);

return statearr_30984;
})();
if(cljs.core.truth_(inst_30883__$1)){
var statearr_30985_31029 = state_30960__$1;
(statearr_30985_31029[(1)] = (5));

} else {
var statearr_30986_31030 = state_30960__$1;
(statearr_30986_31030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (23))){
var inst_30922 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30960__$1 = state_30960;
if(cljs.core.truth_(inst_30922)){
var statearr_30987_31031 = state_30960__$1;
(statearr_30987_31031[(1)] = (25));

} else {
var statearr_30988_31032 = state_30960__$1;
(statearr_30988_31032[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (35))){
var state_30960__$1 = state_30960;
var statearr_30989_31033 = state_30960__$1;
(statearr_30989_31033[(2)] = null);

(statearr_30989_31033[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (19))){
var inst_30917 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30960__$1 = state_30960;
if(cljs.core.truth_(inst_30917)){
var statearr_30990_31034 = state_30960__$1;
(statearr_30990_31034[(1)] = (22));

} else {
var statearr_30991_31035 = state_30960__$1;
(statearr_30991_31035[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (11))){
var inst_30892 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30992_31036 = state_30960__$1;
(statearr_30992_31036[(2)] = inst_30892);

(statearr_30992_31036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (9))){
var inst_30894 = figwheel.client.heads_up.clear.call(null);
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30960__$1,(12),inst_30894);
} else {
if((state_val_30961 === (5))){
var inst_30885 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30960__$1 = state_30960;
var statearr_30993_31037 = state_30960__$1;
(statearr_30993_31037[(2)] = inst_30885);

(statearr_30993_31037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (14))){
var inst_30910 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30960__$1 = state_30960;
if(cljs.core.truth_(inst_30910)){
var statearr_30994_31038 = state_30960__$1;
(statearr_30994_31038[(1)] = (18));

} else {
var statearr_30995_31039 = state_30960__$1;
(statearr_30995_31039[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (26))){
var inst_30932 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30960__$1 = state_30960;
if(cljs.core.truth_(inst_30932)){
var statearr_30996_31040 = state_30960__$1;
(statearr_30996_31040[(1)] = (30));

} else {
var statearr_30997_31041 = state_30960__$1;
(statearr_30997_31041[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (16))){
var inst_30904 = (state_30960[(2)]);
var inst_30905 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30906 = figwheel.client.heads_up.display_exception.call(null,inst_30905);
var state_30960__$1 = (function (){var statearr_30998 = state_30960;
(statearr_30998[(9)] = inst_30904);

return statearr_30998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30960__$1,(17),inst_30906);
} else {
if((state_val_30961 === (30))){
var inst_30934 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30935 = figwheel.client.heads_up.display_warning.call(null,inst_30934);
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30960__$1,(33),inst_30935);
} else {
if((state_val_30961 === (10))){
var inst_30898 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30999_31042 = state_30960__$1;
(statearr_30999_31042[(2)] = inst_30898);

(statearr_30999_31042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (18))){
var inst_30912 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30913 = figwheel.client.heads_up.display_exception.call(null,inst_30912);
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30960__$1,(21),inst_30913);
} else {
if((state_val_30961 === (37))){
var inst_30943 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_31000_31043 = state_30960__$1;
(statearr_31000_31043[(2)] = inst_30943);

(statearr_31000_31043[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (8))){
var inst_30890 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30960__$1,(11),inst_30890);
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
});})(c__25033__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24921__auto__,c__25033__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto____0 = (function (){
var statearr_31004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31004[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto__);

(statearr_31004[(1)] = (1));

return statearr_31004;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto____1 = (function (state_30960){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_30960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e31005){if((e31005 instanceof Object)){
var ex__24925__auto__ = e31005;
var statearr_31006_31044 = state_30960;
(statearr_31006_31044[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31045 = state_30960;
state_30960 = G__31045;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto__ = function(state_30960){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto____1.call(this,state_30960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto__,msg_hist,msg_names,msg))
})();
var state__25035__auto__ = (function (){var statearr_31007 = f__25034__auto__.call(null);
(statearr_31007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto__);

return statearr_31007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto__,msg_hist,msg_names,msg))
);

return c__25033__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25033__auto___31108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___31108,ch){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___31108,ch){
return (function (state_31091){
var state_val_31092 = (state_31091[(1)]);
if((state_val_31092 === (1))){
var state_31091__$1 = state_31091;
var statearr_31093_31109 = state_31091__$1;
(statearr_31093_31109[(2)] = null);

(statearr_31093_31109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (2))){
var state_31091__$1 = state_31091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31091__$1,(4),ch);
} else {
if((state_val_31092 === (3))){
var inst_31089 = (state_31091[(2)]);
var state_31091__$1 = state_31091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31091__$1,inst_31089);
} else {
if((state_val_31092 === (4))){
var inst_31079 = (state_31091[(7)]);
var inst_31079__$1 = (state_31091[(2)]);
var state_31091__$1 = (function (){var statearr_31094 = state_31091;
(statearr_31094[(7)] = inst_31079__$1);

return statearr_31094;
})();
if(cljs.core.truth_(inst_31079__$1)){
var statearr_31095_31110 = state_31091__$1;
(statearr_31095_31110[(1)] = (5));

} else {
var statearr_31096_31111 = state_31091__$1;
(statearr_31096_31111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (5))){
var inst_31079 = (state_31091[(7)]);
var inst_31081 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31079);
var state_31091__$1 = state_31091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31091__$1,(8),inst_31081);
} else {
if((state_val_31092 === (6))){
var state_31091__$1 = state_31091;
var statearr_31097_31112 = state_31091__$1;
(statearr_31097_31112[(2)] = null);

(statearr_31097_31112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (7))){
var inst_31087 = (state_31091[(2)]);
var state_31091__$1 = state_31091;
var statearr_31098_31113 = state_31091__$1;
(statearr_31098_31113[(2)] = inst_31087);

(statearr_31098_31113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (8))){
var inst_31083 = (state_31091[(2)]);
var state_31091__$1 = (function (){var statearr_31099 = state_31091;
(statearr_31099[(8)] = inst_31083);

return statearr_31099;
})();
var statearr_31100_31114 = state_31091__$1;
(statearr_31100_31114[(2)] = null);

(statearr_31100_31114[(1)] = (2));


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
});})(c__25033__auto___31108,ch))
;
return ((function (switch__24921__auto__,c__25033__auto___31108,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24922__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24922__auto____0 = (function (){
var statearr_31104 = [null,null,null,null,null,null,null,null,null];
(statearr_31104[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24922__auto__);

(statearr_31104[(1)] = (1));

return statearr_31104;
});
var figwheel$client$heads_up_plugin_$_state_machine__24922__auto____1 = (function (state_31091){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_31091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e31105){if((e31105 instanceof Object)){
var ex__24925__auto__ = e31105;
var statearr_31106_31115 = state_31091;
(statearr_31106_31115[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31116 = state_31091;
state_31091 = G__31116;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24922__auto__ = function(state_31091){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24922__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24922__auto____1.call(this,state_31091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24922__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24922__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___31108,ch))
})();
var state__25035__auto__ = (function (){var statearr_31107 = f__25034__auto__.call(null);
(statearr_31107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___31108);

return statearr_31107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___31108,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto__){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto__){
return (function (state_31137){
var state_val_31138 = (state_31137[(1)]);
if((state_val_31138 === (1))){
var inst_31132 = cljs.core.async.timeout.call(null,(3000));
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31137__$1,(2),inst_31132);
} else {
if((state_val_31138 === (2))){
var inst_31134 = (state_31137[(2)]);
var inst_31135 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31137__$1 = (function (){var statearr_31139 = state_31137;
(statearr_31139[(7)] = inst_31134);

return statearr_31139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31137__$1,inst_31135);
} else {
return null;
}
}
});})(c__25033__auto__))
;
return ((function (switch__24921__auto__,c__25033__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24922__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24922__auto____0 = (function (){
var statearr_31143 = [null,null,null,null,null,null,null,null];
(statearr_31143[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24922__auto__);

(statearr_31143[(1)] = (1));

return statearr_31143;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24922__auto____1 = (function (state_31137){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_31137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e31144){if((e31144 instanceof Object)){
var ex__24925__auto__ = e31144;
var statearr_31145_31147 = state_31137;
(statearr_31145_31147[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31148 = state_31137;
state_31137 = G__31148;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24922__auto__ = function(state_31137){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24922__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24922__auto____1.call(this,state_31137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24922__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24922__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto__))
})();
var state__25035__auto__ = (function (){var statearr_31146 = f__25034__auto__.call(null);
(statearr_31146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto__);

return statearr_31146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto__))
);

return c__25033__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31171){
var state_val_31172 = (state_31171[(1)]);
if((state_val_31172 === (1))){
var inst_31165 = cljs.core.async.timeout.call(null,(2000));
var state_31171__$1 = state_31171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31171__$1,(2),inst_31165);
} else {
if((state_val_31172 === (2))){
var inst_31167 = (state_31171[(2)]);
var inst_31168 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31169 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31168);
var state_31171__$1 = (function (){var statearr_31173 = state_31171;
(statearr_31173[(7)] = inst_31167);

return statearr_31173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31171__$1,inst_31169);
} else {
return null;
}
}
});})(c__25033__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__24921__auto__,c__25033__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto____0 = (function (){
var statearr_31177 = [null,null,null,null,null,null,null,null];
(statearr_31177[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto__);

(statearr_31177[(1)] = (1));

return statearr_31177;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto____1 = (function (state_31171){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_31171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e31178){if((e31178 instanceof Object)){
var ex__24925__auto__ = e31178;
var statearr_31179_31181 = state_31171;
(statearr_31179_31181[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31182 = state_31171;
state_31171 = G__31182;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto__ = function(state_31171){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto____1.call(this,state_31171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto__,figwheel_version,temp__4657__auto__))
})();
var state__25035__auto__ = (function (){var statearr_31180 = f__25034__auto__.call(null);
(statearr_31180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto__);

return statearr_31180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto__,figwheel_version,temp__4657__auto__))
);

return c__25033__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31183){
var map__31187 = p__31183;
var map__31187__$1 = ((((!((map__31187 == null)))?((((map__31187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31187):map__31187);
var file = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31189 = "";
var G__31189__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31189),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31189);
var G__31189__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31189__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31189__$1);
if(cljs.core.truth_((function (){var and__21681__auto__ = line;
if(cljs.core.truth_(and__21681__auto__)){
return column;
} else {
return and__21681__auto__;
}
})())){
return [cljs.core.str(G__31189__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31189__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31190){
var map__31197 = p__31190;
var map__31197__$1 = ((((!((map__31197 == null)))?((((map__31197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31197):map__31197);
var ed = map__31197__$1;
var formatted_exception = cljs.core.get.call(null,map__31197__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31197__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31197__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31199_31203 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31200_31204 = null;
var count__31201_31205 = (0);
var i__31202_31206 = (0);
while(true){
if((i__31202_31206 < count__31201_31205)){
var msg_31207 = cljs.core._nth.call(null,chunk__31200_31204,i__31202_31206);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31207);

var G__31208 = seq__31199_31203;
var G__31209 = chunk__31200_31204;
var G__31210 = count__31201_31205;
var G__31211 = (i__31202_31206 + (1));
seq__31199_31203 = G__31208;
chunk__31200_31204 = G__31209;
count__31201_31205 = G__31210;
i__31202_31206 = G__31211;
continue;
} else {
var temp__4657__auto___31212 = cljs.core.seq.call(null,seq__31199_31203);
if(temp__4657__auto___31212){
var seq__31199_31213__$1 = temp__4657__auto___31212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31199_31213__$1)){
var c__22504__auto___31214 = cljs.core.chunk_first.call(null,seq__31199_31213__$1);
var G__31215 = cljs.core.chunk_rest.call(null,seq__31199_31213__$1);
var G__31216 = c__22504__auto___31214;
var G__31217 = cljs.core.count.call(null,c__22504__auto___31214);
var G__31218 = (0);
seq__31199_31203 = G__31215;
chunk__31200_31204 = G__31216;
count__31201_31205 = G__31217;
i__31202_31206 = G__31218;
continue;
} else {
var msg_31219 = cljs.core.first.call(null,seq__31199_31213__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31219);

var G__31220 = cljs.core.next.call(null,seq__31199_31213__$1);
var G__31221 = null;
var G__31222 = (0);
var G__31223 = (0);
seq__31199_31203 = G__31220;
chunk__31200_31204 = G__31221;
count__31201_31205 = G__31222;
i__31202_31206 = G__31223;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31224){
var map__31227 = p__31224;
var map__31227__$1 = ((((!((map__31227 == null)))?((((map__31227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31227):map__31227);
var w = map__31227__$1;
var message = cljs.core.get.call(null,map__31227__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21681__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21681__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21681__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31235 = cljs.core.seq.call(null,plugins);
var chunk__31236 = null;
var count__31237 = (0);
var i__31238 = (0);
while(true){
if((i__31238 < count__31237)){
var vec__31239 = cljs.core._nth.call(null,chunk__31236,i__31238);
var k = cljs.core.nth.call(null,vec__31239,(0),null);
var plugin = cljs.core.nth.call(null,vec__31239,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31241 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31235,chunk__31236,count__31237,i__31238,pl_31241,vec__31239,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31241.call(null,msg_hist);
});})(seq__31235,chunk__31236,count__31237,i__31238,pl_31241,vec__31239,k,plugin))
);
} else {
}

var G__31242 = seq__31235;
var G__31243 = chunk__31236;
var G__31244 = count__31237;
var G__31245 = (i__31238 + (1));
seq__31235 = G__31242;
chunk__31236 = G__31243;
count__31237 = G__31244;
i__31238 = G__31245;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31235);
if(temp__4657__auto__){
var seq__31235__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31235__$1)){
var c__22504__auto__ = cljs.core.chunk_first.call(null,seq__31235__$1);
var G__31246 = cljs.core.chunk_rest.call(null,seq__31235__$1);
var G__31247 = c__22504__auto__;
var G__31248 = cljs.core.count.call(null,c__22504__auto__);
var G__31249 = (0);
seq__31235 = G__31246;
chunk__31236 = G__31247;
count__31237 = G__31248;
i__31238 = G__31249;
continue;
} else {
var vec__31240 = cljs.core.first.call(null,seq__31235__$1);
var k = cljs.core.nth.call(null,vec__31240,(0),null);
var plugin = cljs.core.nth.call(null,vec__31240,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31250 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31235,chunk__31236,count__31237,i__31238,pl_31250,vec__31240,k,plugin,seq__31235__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31250.call(null,msg_hist);
});})(seq__31235,chunk__31236,count__31237,i__31238,pl_31250,vec__31240,k,plugin,seq__31235__$1,temp__4657__auto__))
);
} else {
}

var G__31251 = cljs.core.next.call(null,seq__31235__$1);
var G__31252 = null;
var G__31253 = (0);
var G__31254 = (0);
seq__31235 = G__31251;
chunk__31236 = G__31252;
count__31237 = G__31253;
i__31238 = G__31254;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31255 = [];
var len__22763__auto___31262 = arguments.length;
var i__22764__auto___31263 = (0);
while(true){
if((i__22764__auto___31263 < len__22763__auto___31262)){
args31255.push((arguments[i__22764__auto___31263]));

var G__31264 = (i__22764__auto___31263 + (1));
i__22764__auto___31263 = G__31264;
continue;
} else {
}
break;
}

var G__31257 = args31255.length;
switch (G__31257) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31255.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31258_31266 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31259_31267 = null;
var count__31260_31268 = (0);
var i__31261_31269 = (0);
while(true){
if((i__31261_31269 < count__31260_31268)){
var msg_31270 = cljs.core._nth.call(null,chunk__31259_31267,i__31261_31269);
figwheel.client.socket.handle_incoming_message.call(null,msg_31270);

var G__31271 = seq__31258_31266;
var G__31272 = chunk__31259_31267;
var G__31273 = count__31260_31268;
var G__31274 = (i__31261_31269 + (1));
seq__31258_31266 = G__31271;
chunk__31259_31267 = G__31272;
count__31260_31268 = G__31273;
i__31261_31269 = G__31274;
continue;
} else {
var temp__4657__auto___31275 = cljs.core.seq.call(null,seq__31258_31266);
if(temp__4657__auto___31275){
var seq__31258_31276__$1 = temp__4657__auto___31275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31258_31276__$1)){
var c__22504__auto___31277 = cljs.core.chunk_first.call(null,seq__31258_31276__$1);
var G__31278 = cljs.core.chunk_rest.call(null,seq__31258_31276__$1);
var G__31279 = c__22504__auto___31277;
var G__31280 = cljs.core.count.call(null,c__22504__auto___31277);
var G__31281 = (0);
seq__31258_31266 = G__31278;
chunk__31259_31267 = G__31279;
count__31260_31268 = G__31280;
i__31261_31269 = G__31281;
continue;
} else {
var msg_31282 = cljs.core.first.call(null,seq__31258_31276__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31282);

var G__31283 = cljs.core.next.call(null,seq__31258_31276__$1);
var G__31284 = null;
var G__31285 = (0);
var G__31286 = (0);
seq__31258_31266 = G__31283;
chunk__31259_31267 = G__31284;
count__31260_31268 = G__31285;
i__31261_31269 = G__31286;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31291 = arguments.length;
var i__22764__auto___31292 = (0);
while(true){
if((i__22764__auto___31292 < len__22763__auto___31291)){
args__22770__auto__.push((arguments[i__22764__auto___31292]));

var G__31293 = (i__22764__auto___31292 + (1));
i__22764__auto___31292 = G__31293;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31288){
var map__31289 = p__31288;
var map__31289__$1 = ((((!((map__31289 == null)))?((((map__31289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31289):map__31289);
var opts = map__31289__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31287){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31287));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31295){if((e31295 instanceof Error)){
var e = e31295;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31295;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31299){
var map__31300 = p__31299;
var map__31300__$1 = ((((!((map__31300 == null)))?((((map__31300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31300):map__31300);
var msg_name = cljs.core.get.call(null,map__31300__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1469132194559