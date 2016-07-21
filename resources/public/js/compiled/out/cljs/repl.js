// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28890_28904 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28891_28905 = null;
var count__28892_28906 = (0);
var i__28893_28907 = (0);
while(true){
if((i__28893_28907 < count__28892_28906)){
var f_28908 = cljs.core._nth.call(null,chunk__28891_28905,i__28893_28907);
cljs.core.println.call(null,"  ",f_28908);

var G__28909 = seq__28890_28904;
var G__28910 = chunk__28891_28905;
var G__28911 = count__28892_28906;
var G__28912 = (i__28893_28907 + (1));
seq__28890_28904 = G__28909;
chunk__28891_28905 = G__28910;
count__28892_28906 = G__28911;
i__28893_28907 = G__28912;
continue;
} else {
var temp__4657__auto___28913 = cljs.core.seq.call(null,seq__28890_28904);
if(temp__4657__auto___28913){
var seq__28890_28914__$1 = temp__4657__auto___28913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28890_28914__$1)){
var c__22504__auto___28915 = cljs.core.chunk_first.call(null,seq__28890_28914__$1);
var G__28916 = cljs.core.chunk_rest.call(null,seq__28890_28914__$1);
var G__28917 = c__22504__auto___28915;
var G__28918 = cljs.core.count.call(null,c__22504__auto___28915);
var G__28919 = (0);
seq__28890_28904 = G__28916;
chunk__28891_28905 = G__28917;
count__28892_28906 = G__28918;
i__28893_28907 = G__28919;
continue;
} else {
var f_28920 = cljs.core.first.call(null,seq__28890_28914__$1);
cljs.core.println.call(null,"  ",f_28920);

var G__28921 = cljs.core.next.call(null,seq__28890_28914__$1);
var G__28922 = null;
var G__28923 = (0);
var G__28924 = (0);
seq__28890_28904 = G__28921;
chunk__28891_28905 = G__28922;
count__28892_28906 = G__28923;
i__28893_28907 = G__28924;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28925 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21693__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21693__auto__)){
return or__21693__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28925);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28925)))?cljs.core.second.call(null,arglists_28925):arglists_28925));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28894 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28895 = null;
var count__28896 = (0);
var i__28897 = (0);
while(true){
if((i__28897 < count__28896)){
var vec__28898 = cljs.core._nth.call(null,chunk__28895,i__28897);
var name = cljs.core.nth.call(null,vec__28898,(0),null);
var map__28899 = cljs.core.nth.call(null,vec__28898,(1),null);
var map__28899__$1 = ((((!((map__28899 == null)))?((((map__28899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28899):map__28899);
var doc = cljs.core.get.call(null,map__28899__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28899__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28926 = seq__28894;
var G__28927 = chunk__28895;
var G__28928 = count__28896;
var G__28929 = (i__28897 + (1));
seq__28894 = G__28926;
chunk__28895 = G__28927;
count__28896 = G__28928;
i__28897 = G__28929;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28894);
if(temp__4657__auto__){
var seq__28894__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28894__$1)){
var c__22504__auto__ = cljs.core.chunk_first.call(null,seq__28894__$1);
var G__28930 = cljs.core.chunk_rest.call(null,seq__28894__$1);
var G__28931 = c__22504__auto__;
var G__28932 = cljs.core.count.call(null,c__22504__auto__);
var G__28933 = (0);
seq__28894 = G__28930;
chunk__28895 = G__28931;
count__28896 = G__28932;
i__28897 = G__28933;
continue;
} else {
var vec__28901 = cljs.core.first.call(null,seq__28894__$1);
var name = cljs.core.nth.call(null,vec__28901,(0),null);
var map__28902 = cljs.core.nth.call(null,vec__28901,(1),null);
var map__28902__$1 = ((((!((map__28902 == null)))?((((map__28902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28902):map__28902);
var doc = cljs.core.get.call(null,map__28902__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28902__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28934 = cljs.core.next.call(null,seq__28894__$1);
var G__28935 = null;
var G__28936 = (0);
var G__28937 = (0);
seq__28894 = G__28934;
chunk__28895 = G__28935;
count__28896 = G__28936;
i__28897 = G__28937;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1469132191153