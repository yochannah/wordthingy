// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21693__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21693__auto__){
return or__21693__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21693__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21693__auto__)){
return or__21693__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27866_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27866_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27871 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27872 = null;
var count__27873 = (0);
var i__27874 = (0);
while(true){
if((i__27874 < count__27873)){
var n = cljs.core._nth.call(null,chunk__27872,i__27874);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27875 = seq__27871;
var G__27876 = chunk__27872;
var G__27877 = count__27873;
var G__27878 = (i__27874 + (1));
seq__27871 = G__27875;
chunk__27872 = G__27876;
count__27873 = G__27877;
i__27874 = G__27878;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27871);
if(temp__4657__auto__){
var seq__27871__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27871__$1)){
var c__22504__auto__ = cljs.core.chunk_first.call(null,seq__27871__$1);
var G__27879 = cljs.core.chunk_rest.call(null,seq__27871__$1);
var G__27880 = c__22504__auto__;
var G__27881 = cljs.core.count.call(null,c__22504__auto__);
var G__27882 = (0);
seq__27871 = G__27879;
chunk__27872 = G__27880;
count__27873 = G__27881;
i__27874 = G__27882;
continue;
} else {
var n = cljs.core.first.call(null,seq__27871__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27883 = cljs.core.next.call(null,seq__27871__$1);
var G__27884 = null;
var G__27885 = (0);
var G__27886 = (0);
seq__27871 = G__27883;
chunk__27872 = G__27884;
count__27873 = G__27885;
i__27874 = G__27886;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27925_27932 = cljs.core.seq.call(null,deps);
var chunk__27926_27933 = null;
var count__27927_27934 = (0);
var i__27928_27935 = (0);
while(true){
if((i__27928_27935 < count__27927_27934)){
var dep_27936 = cljs.core._nth.call(null,chunk__27926_27933,i__27928_27935);
topo_sort_helper_STAR_.call(null,dep_27936,(depth + (1)),state);

var G__27937 = seq__27925_27932;
var G__27938 = chunk__27926_27933;
var G__27939 = count__27927_27934;
var G__27940 = (i__27928_27935 + (1));
seq__27925_27932 = G__27937;
chunk__27926_27933 = G__27938;
count__27927_27934 = G__27939;
i__27928_27935 = G__27940;
continue;
} else {
var temp__4657__auto___27941 = cljs.core.seq.call(null,seq__27925_27932);
if(temp__4657__auto___27941){
var seq__27925_27942__$1 = temp__4657__auto___27941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27925_27942__$1)){
var c__22504__auto___27943 = cljs.core.chunk_first.call(null,seq__27925_27942__$1);
var G__27944 = cljs.core.chunk_rest.call(null,seq__27925_27942__$1);
var G__27945 = c__22504__auto___27943;
var G__27946 = cljs.core.count.call(null,c__22504__auto___27943);
var G__27947 = (0);
seq__27925_27932 = G__27944;
chunk__27926_27933 = G__27945;
count__27927_27934 = G__27946;
i__27928_27935 = G__27947;
continue;
} else {
var dep_27948 = cljs.core.first.call(null,seq__27925_27942__$1);
topo_sort_helper_STAR_.call(null,dep_27948,(depth + (1)),state);

var G__27949 = cljs.core.next.call(null,seq__27925_27942__$1);
var G__27950 = null;
var G__27951 = (0);
var G__27952 = (0);
seq__27925_27932 = G__27949;
chunk__27926_27933 = G__27950;
count__27927_27934 = G__27951;
i__27928_27935 = G__27952;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27929){
var vec__27931 = p__27929;
var x = cljs.core.nth.call(null,vec__27931,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27931,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27931,x,xs,get_deps__$1){
return (function (p1__27887_SHARP_){
return clojure.set.difference.call(null,p1__27887_SHARP_,x);
});})(vec__27931,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27965 = cljs.core.seq.call(null,provides);
var chunk__27966 = null;
var count__27967 = (0);
var i__27968 = (0);
while(true){
if((i__27968 < count__27967)){
var prov = cljs.core._nth.call(null,chunk__27966,i__27968);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27969_27977 = cljs.core.seq.call(null,requires);
var chunk__27970_27978 = null;
var count__27971_27979 = (0);
var i__27972_27980 = (0);
while(true){
if((i__27972_27980 < count__27971_27979)){
var req_27981 = cljs.core._nth.call(null,chunk__27970_27978,i__27972_27980);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27981,prov);

var G__27982 = seq__27969_27977;
var G__27983 = chunk__27970_27978;
var G__27984 = count__27971_27979;
var G__27985 = (i__27972_27980 + (1));
seq__27969_27977 = G__27982;
chunk__27970_27978 = G__27983;
count__27971_27979 = G__27984;
i__27972_27980 = G__27985;
continue;
} else {
var temp__4657__auto___27986 = cljs.core.seq.call(null,seq__27969_27977);
if(temp__4657__auto___27986){
var seq__27969_27987__$1 = temp__4657__auto___27986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27969_27987__$1)){
var c__22504__auto___27988 = cljs.core.chunk_first.call(null,seq__27969_27987__$1);
var G__27989 = cljs.core.chunk_rest.call(null,seq__27969_27987__$1);
var G__27990 = c__22504__auto___27988;
var G__27991 = cljs.core.count.call(null,c__22504__auto___27988);
var G__27992 = (0);
seq__27969_27977 = G__27989;
chunk__27970_27978 = G__27990;
count__27971_27979 = G__27991;
i__27972_27980 = G__27992;
continue;
} else {
var req_27993 = cljs.core.first.call(null,seq__27969_27987__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27993,prov);

var G__27994 = cljs.core.next.call(null,seq__27969_27987__$1);
var G__27995 = null;
var G__27996 = (0);
var G__27997 = (0);
seq__27969_27977 = G__27994;
chunk__27970_27978 = G__27995;
count__27971_27979 = G__27996;
i__27972_27980 = G__27997;
continue;
}
} else {
}
}
break;
}

var G__27998 = seq__27965;
var G__27999 = chunk__27966;
var G__28000 = count__27967;
var G__28001 = (i__27968 + (1));
seq__27965 = G__27998;
chunk__27966 = G__27999;
count__27967 = G__28000;
i__27968 = G__28001;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27965);
if(temp__4657__auto__){
var seq__27965__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27965__$1)){
var c__22504__auto__ = cljs.core.chunk_first.call(null,seq__27965__$1);
var G__28002 = cljs.core.chunk_rest.call(null,seq__27965__$1);
var G__28003 = c__22504__auto__;
var G__28004 = cljs.core.count.call(null,c__22504__auto__);
var G__28005 = (0);
seq__27965 = G__28002;
chunk__27966 = G__28003;
count__27967 = G__28004;
i__27968 = G__28005;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27965__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27973_28006 = cljs.core.seq.call(null,requires);
var chunk__27974_28007 = null;
var count__27975_28008 = (0);
var i__27976_28009 = (0);
while(true){
if((i__27976_28009 < count__27975_28008)){
var req_28010 = cljs.core._nth.call(null,chunk__27974_28007,i__27976_28009);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28010,prov);

var G__28011 = seq__27973_28006;
var G__28012 = chunk__27974_28007;
var G__28013 = count__27975_28008;
var G__28014 = (i__27976_28009 + (1));
seq__27973_28006 = G__28011;
chunk__27974_28007 = G__28012;
count__27975_28008 = G__28013;
i__27976_28009 = G__28014;
continue;
} else {
var temp__4657__auto___28015__$1 = cljs.core.seq.call(null,seq__27973_28006);
if(temp__4657__auto___28015__$1){
var seq__27973_28016__$1 = temp__4657__auto___28015__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27973_28016__$1)){
var c__22504__auto___28017 = cljs.core.chunk_first.call(null,seq__27973_28016__$1);
var G__28018 = cljs.core.chunk_rest.call(null,seq__27973_28016__$1);
var G__28019 = c__22504__auto___28017;
var G__28020 = cljs.core.count.call(null,c__22504__auto___28017);
var G__28021 = (0);
seq__27973_28006 = G__28018;
chunk__27974_28007 = G__28019;
count__27975_28008 = G__28020;
i__27976_28009 = G__28021;
continue;
} else {
var req_28022 = cljs.core.first.call(null,seq__27973_28016__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28022,prov);

var G__28023 = cljs.core.next.call(null,seq__27973_28016__$1);
var G__28024 = null;
var G__28025 = (0);
var G__28026 = (0);
seq__27973_28006 = G__28023;
chunk__27974_28007 = G__28024;
count__27975_28008 = G__28025;
i__27976_28009 = G__28026;
continue;
}
} else {
}
}
break;
}

var G__28027 = cljs.core.next.call(null,seq__27965__$1);
var G__28028 = null;
var G__28029 = (0);
var G__28030 = (0);
seq__27965 = G__28027;
chunk__27966 = G__28028;
count__27967 = G__28029;
i__27968 = G__28030;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28035_28039 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28036_28040 = null;
var count__28037_28041 = (0);
var i__28038_28042 = (0);
while(true){
if((i__28038_28042 < count__28037_28041)){
var ns_28043 = cljs.core._nth.call(null,chunk__28036_28040,i__28038_28042);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28043);

var G__28044 = seq__28035_28039;
var G__28045 = chunk__28036_28040;
var G__28046 = count__28037_28041;
var G__28047 = (i__28038_28042 + (1));
seq__28035_28039 = G__28044;
chunk__28036_28040 = G__28045;
count__28037_28041 = G__28046;
i__28038_28042 = G__28047;
continue;
} else {
var temp__4657__auto___28048 = cljs.core.seq.call(null,seq__28035_28039);
if(temp__4657__auto___28048){
var seq__28035_28049__$1 = temp__4657__auto___28048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28035_28049__$1)){
var c__22504__auto___28050 = cljs.core.chunk_first.call(null,seq__28035_28049__$1);
var G__28051 = cljs.core.chunk_rest.call(null,seq__28035_28049__$1);
var G__28052 = c__22504__auto___28050;
var G__28053 = cljs.core.count.call(null,c__22504__auto___28050);
var G__28054 = (0);
seq__28035_28039 = G__28051;
chunk__28036_28040 = G__28052;
count__28037_28041 = G__28053;
i__28038_28042 = G__28054;
continue;
} else {
var ns_28055 = cljs.core.first.call(null,seq__28035_28049__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28055);

var G__28056 = cljs.core.next.call(null,seq__28035_28049__$1);
var G__28057 = null;
var G__28058 = (0);
var G__28059 = (0);
seq__28035_28039 = G__28056;
chunk__28036_28040 = G__28057;
count__28037_28041 = G__28058;
i__28038_28042 = G__28059;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21693__auto__ = goog.require__;
if(cljs.core.truth_(or__21693__auto__)){
return or__21693__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28060__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28061__i = 0, G__28061__a = new Array(arguments.length -  0);
while (G__28061__i < G__28061__a.length) {G__28061__a[G__28061__i] = arguments[G__28061__i + 0]; ++G__28061__i;}
  args = new cljs.core.IndexedSeq(G__28061__a,0);
} 
return G__28060__delegate.call(this,args);};
G__28060.cljs$lang$maxFixedArity = 0;
G__28060.cljs$lang$applyTo = (function (arglist__28062){
var args = cljs.core.seq(arglist__28062);
return G__28060__delegate(args);
});
G__28060.cljs$core$IFn$_invoke$arity$variadic = G__28060__delegate;
return G__28060;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28064 = cljs.core._EQ_;
var expr__28065 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28064.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28065))){
var path_parts = ((function (pred__28064,expr__28065){
return (function (p1__28063_SHARP_){
return clojure.string.split.call(null,p1__28063_SHARP_,/[\/\\]/);
});})(pred__28064,expr__28065))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28064,expr__28065){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28067){if((e28067 instanceof Error)){
var e = e28067;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28067;

}
}})());
});
;})(path_parts,sep,root,pred__28064,expr__28065))
} else {
if(cljs.core.truth_(pred__28064.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28065))){
return ((function (pred__28064,expr__28065){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28064,expr__28065){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28064,expr__28065))
);

return deferred.addErrback(((function (deferred,pred__28064,expr__28065){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28064,expr__28065))
);
});
;})(pred__28064,expr__28065))
} else {
return ((function (pred__28064,expr__28065){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28064,expr__28065))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28068,callback){
var map__28071 = p__28068;
var map__28071__$1 = ((((!((map__28071 == null)))?((((map__28071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28071):map__28071);
var file_msg = map__28071__$1;
var request_url = cljs.core.get.call(null,map__28071__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28071,map__28071__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28071,map__28071__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto__){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto__){
return (function (state_28095){
var state_val_28096 = (state_28095[(1)]);
if((state_val_28096 === (7))){
var inst_28091 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28097_28117 = state_28095__$1;
(statearr_28097_28117[(2)] = inst_28091);

(statearr_28097_28117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (1))){
var state_28095__$1 = state_28095;
var statearr_28098_28118 = state_28095__$1;
(statearr_28098_28118[(2)] = null);

(statearr_28098_28118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (4))){
var inst_28075 = (state_28095[(7)]);
var inst_28075__$1 = (state_28095[(2)]);
var state_28095__$1 = (function (){var statearr_28099 = state_28095;
(statearr_28099[(7)] = inst_28075__$1);

return statearr_28099;
})();
if(cljs.core.truth_(inst_28075__$1)){
var statearr_28100_28119 = state_28095__$1;
(statearr_28100_28119[(1)] = (5));

} else {
var statearr_28101_28120 = state_28095__$1;
(statearr_28101_28120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (6))){
var state_28095__$1 = state_28095;
var statearr_28102_28121 = state_28095__$1;
(statearr_28102_28121[(2)] = null);

(statearr_28102_28121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (3))){
var inst_28093 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28095__$1,inst_28093);
} else {
if((state_val_28096 === (2))){
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28095__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28096 === (11))){
var inst_28087 = (state_28095[(2)]);
var state_28095__$1 = (function (){var statearr_28103 = state_28095;
(statearr_28103[(8)] = inst_28087);

return statearr_28103;
})();
var statearr_28104_28122 = state_28095__$1;
(statearr_28104_28122[(2)] = null);

(statearr_28104_28122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (9))){
var inst_28081 = (state_28095[(9)]);
var inst_28079 = (state_28095[(10)]);
var inst_28083 = inst_28081.call(null,inst_28079);
var state_28095__$1 = state_28095;
var statearr_28105_28123 = state_28095__$1;
(statearr_28105_28123[(2)] = inst_28083);

(statearr_28105_28123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (5))){
var inst_28075 = (state_28095[(7)]);
var inst_28077 = figwheel.client.file_reloading.blocking_load.call(null,inst_28075);
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28095__$1,(8),inst_28077);
} else {
if((state_val_28096 === (10))){
var inst_28079 = (state_28095[(10)]);
var inst_28085 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28079);
var state_28095__$1 = state_28095;
var statearr_28106_28124 = state_28095__$1;
(statearr_28106_28124[(2)] = inst_28085);

(statearr_28106_28124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (8))){
var inst_28081 = (state_28095[(9)]);
var inst_28075 = (state_28095[(7)]);
var inst_28079 = (state_28095[(2)]);
var inst_28080 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28081__$1 = cljs.core.get.call(null,inst_28080,inst_28075);
var state_28095__$1 = (function (){var statearr_28107 = state_28095;
(statearr_28107[(9)] = inst_28081__$1);

(statearr_28107[(10)] = inst_28079);

return statearr_28107;
})();
if(cljs.core.truth_(inst_28081__$1)){
var statearr_28108_28125 = state_28095__$1;
(statearr_28108_28125[(1)] = (9));

} else {
var statearr_28109_28126 = state_28095__$1;
(statearr_28109_28126[(1)] = (10));

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
});})(c__25033__auto__))
;
return ((function (switch__24921__auto__,c__25033__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24922__auto__ = null;
var figwheel$client$file_reloading$state_machine__24922__auto____0 = (function (){
var statearr_28113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28113[(0)] = figwheel$client$file_reloading$state_machine__24922__auto__);

(statearr_28113[(1)] = (1));

return statearr_28113;
});
var figwheel$client$file_reloading$state_machine__24922__auto____1 = (function (state_28095){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_28095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e28114){if((e28114 instanceof Object)){
var ex__24925__auto__ = e28114;
var statearr_28115_28127 = state_28095;
(statearr_28115_28127[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28128 = state_28095;
state_28095 = G__28128;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24922__auto__ = function(state_28095){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24922__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24922__auto____1.call(this,state_28095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24922__auto____0;
figwheel$client$file_reloading$state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24922__auto____1;
return figwheel$client$file_reloading$state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto__))
})();
var state__25035__auto__ = (function (){var statearr_28116 = f__25034__auto__.call(null);
(statearr_28116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto__);

return statearr_28116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto__))
);

return c__25033__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28129,callback){
var map__28132 = p__28129;
var map__28132__$1 = ((((!((map__28132 == null)))?((((map__28132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28132):map__28132);
var file_msg = map__28132__$1;
var namespace = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28132,map__28132__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28132,map__28132__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28134){
var map__28137 = p__28134;
var map__28137__$1 = ((((!((map__28137 == null)))?((((map__28137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28137):map__28137);
var file_msg = map__28137__$1;
var namespace = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21681__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21681__auto__){
var or__21693__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21693__auto__)){
return or__21693__auto__;
} else {
var or__21693__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21693__auto____$1)){
return or__21693__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21681__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28139,callback){
var map__28142 = p__28139;
var map__28142__$1 = ((((!((map__28142 == null)))?((((map__28142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28142):map__28142);
var file_msg = map__28142__$1;
var request_url = cljs.core.get.call(null,map__28142__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28142__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25033__auto___28230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto___28230,out){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto___28230,out){
return (function (state_28212){
var state_val_28213 = (state_28212[(1)]);
if((state_val_28213 === (1))){
var inst_28190 = cljs.core.nth.call(null,files,(0),null);
var inst_28191 = cljs.core.nthnext.call(null,files,(1));
var inst_28192 = files;
var state_28212__$1 = (function (){var statearr_28214 = state_28212;
(statearr_28214[(7)] = inst_28191);

(statearr_28214[(8)] = inst_28190);

(statearr_28214[(9)] = inst_28192);

return statearr_28214;
})();
var statearr_28215_28231 = state_28212__$1;
(statearr_28215_28231[(2)] = null);

(statearr_28215_28231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (2))){
var inst_28195 = (state_28212[(10)]);
var inst_28192 = (state_28212[(9)]);
var inst_28195__$1 = cljs.core.nth.call(null,inst_28192,(0),null);
var inst_28196 = cljs.core.nthnext.call(null,inst_28192,(1));
var inst_28197 = (inst_28195__$1 == null);
var inst_28198 = cljs.core.not.call(null,inst_28197);
var state_28212__$1 = (function (){var statearr_28216 = state_28212;
(statearr_28216[(11)] = inst_28196);

(statearr_28216[(10)] = inst_28195__$1);

return statearr_28216;
})();
if(inst_28198){
var statearr_28217_28232 = state_28212__$1;
(statearr_28217_28232[(1)] = (4));

} else {
var statearr_28218_28233 = state_28212__$1;
(statearr_28218_28233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (3))){
var inst_28210 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28212__$1,inst_28210);
} else {
if((state_val_28213 === (4))){
var inst_28195 = (state_28212[(10)]);
var inst_28200 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28195);
var state_28212__$1 = state_28212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28212__$1,(7),inst_28200);
} else {
if((state_val_28213 === (5))){
var inst_28206 = cljs.core.async.close_BANG_.call(null,out);
var state_28212__$1 = state_28212;
var statearr_28219_28234 = state_28212__$1;
(statearr_28219_28234[(2)] = inst_28206);

(statearr_28219_28234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (6))){
var inst_28208 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
var statearr_28220_28235 = state_28212__$1;
(statearr_28220_28235[(2)] = inst_28208);

(statearr_28220_28235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (7))){
var inst_28196 = (state_28212[(11)]);
var inst_28202 = (state_28212[(2)]);
var inst_28203 = cljs.core.async.put_BANG_.call(null,out,inst_28202);
var inst_28192 = inst_28196;
var state_28212__$1 = (function (){var statearr_28221 = state_28212;
(statearr_28221[(12)] = inst_28203);

(statearr_28221[(9)] = inst_28192);

return statearr_28221;
})();
var statearr_28222_28236 = state_28212__$1;
(statearr_28222_28236[(2)] = null);

(statearr_28222_28236[(1)] = (2));


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
});})(c__25033__auto___28230,out))
;
return ((function (switch__24921__auto__,c__25033__auto___28230,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto____0 = (function (){
var statearr_28226 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28226[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto__);

(statearr_28226[(1)] = (1));

return statearr_28226;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto____1 = (function (state_28212){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_28212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e28227){if((e28227 instanceof Object)){
var ex__24925__auto__ = e28227;
var statearr_28228_28237 = state_28212;
(statearr_28228_28237[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28238 = state_28212;
state_28212 = G__28238;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto__ = function(state_28212){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto____1.call(this,state_28212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto___28230,out))
})();
var state__25035__auto__ = (function (){var statearr_28229 = f__25034__auto__.call(null);
(statearr_28229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto___28230);

return statearr_28229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto___28230,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28239,opts){
var map__28243 = p__28239;
var map__28243__$1 = ((((!((map__28243 == null)))?((((map__28243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28243):map__28243);
var eval_body__$1 = cljs.core.get.call(null,map__28243__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28243__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21681__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21681__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21681__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28245){var e = e28245;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28246_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28246_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28251){
var vec__28252 = p__28251;
var k = cljs.core.nth.call(null,vec__28252,(0),null);
var v = cljs.core.nth.call(null,vec__28252,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28253){
var vec__28254 = p__28253;
var k = cljs.core.nth.call(null,vec__28254,(0),null);
var v = cljs.core.nth.call(null,vec__28254,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28258,p__28259){
var map__28506 = p__28258;
var map__28506__$1 = ((((!((map__28506 == null)))?((((map__28506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28506):map__28506);
var opts = map__28506__$1;
var before_jsload = cljs.core.get.call(null,map__28506__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28506__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28506__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28507 = p__28259;
var map__28507__$1 = ((((!((map__28507 == null)))?((((map__28507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28507):map__28507);
var msg = map__28507__$1;
var files = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25034__auto__ = (function (){var switch__24921__auto__ = ((function (c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28660){
var state_val_28661 = (state_28660[(1)]);
if((state_val_28661 === (7))){
var inst_28521 = (state_28660[(7)]);
var inst_28522 = (state_28660[(8)]);
var inst_28524 = (state_28660[(9)]);
var inst_28523 = (state_28660[(10)]);
var inst_28529 = cljs.core._nth.call(null,inst_28522,inst_28524);
var inst_28530 = figwheel.client.file_reloading.eval_body.call(null,inst_28529,opts);
var inst_28531 = (inst_28524 + (1));
var tmp28662 = inst_28521;
var tmp28663 = inst_28522;
var tmp28664 = inst_28523;
var inst_28521__$1 = tmp28662;
var inst_28522__$1 = tmp28663;
var inst_28523__$1 = tmp28664;
var inst_28524__$1 = inst_28531;
var state_28660__$1 = (function (){var statearr_28665 = state_28660;
(statearr_28665[(7)] = inst_28521__$1);

(statearr_28665[(8)] = inst_28522__$1);

(statearr_28665[(11)] = inst_28530);

(statearr_28665[(9)] = inst_28524__$1);

(statearr_28665[(10)] = inst_28523__$1);

return statearr_28665;
})();
var statearr_28666_28752 = state_28660__$1;
(statearr_28666_28752[(2)] = null);

(statearr_28666_28752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (20))){
var inst_28564 = (state_28660[(12)]);
var inst_28572 = figwheel.client.file_reloading.sort_files.call(null,inst_28564);
var state_28660__$1 = state_28660;
var statearr_28667_28753 = state_28660__$1;
(statearr_28667_28753[(2)] = inst_28572);

(statearr_28667_28753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (27))){
var state_28660__$1 = state_28660;
var statearr_28668_28754 = state_28660__$1;
(statearr_28668_28754[(2)] = null);

(statearr_28668_28754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (1))){
var inst_28513 = (state_28660[(13)]);
var inst_28510 = before_jsload.call(null,files);
var inst_28511 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28512 = (function (){return ((function (inst_28513,inst_28510,inst_28511,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28255_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28255_SHARP_);
});
;})(inst_28513,inst_28510,inst_28511,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28513__$1 = cljs.core.filter.call(null,inst_28512,files);
var inst_28514 = cljs.core.not_empty.call(null,inst_28513__$1);
var state_28660__$1 = (function (){var statearr_28669 = state_28660;
(statearr_28669[(14)] = inst_28510);

(statearr_28669[(15)] = inst_28511);

(statearr_28669[(13)] = inst_28513__$1);

return statearr_28669;
})();
if(cljs.core.truth_(inst_28514)){
var statearr_28670_28755 = state_28660__$1;
(statearr_28670_28755[(1)] = (2));

} else {
var statearr_28671_28756 = state_28660__$1;
(statearr_28671_28756[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (24))){
var state_28660__$1 = state_28660;
var statearr_28672_28757 = state_28660__$1;
(statearr_28672_28757[(2)] = null);

(statearr_28672_28757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (39))){
var inst_28614 = (state_28660[(16)]);
var state_28660__$1 = state_28660;
var statearr_28673_28758 = state_28660__$1;
(statearr_28673_28758[(2)] = inst_28614);

(statearr_28673_28758[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (46))){
var inst_28655 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28674_28759 = state_28660__$1;
(statearr_28674_28759[(2)] = inst_28655);

(statearr_28674_28759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (4))){
var inst_28558 = (state_28660[(2)]);
var inst_28559 = cljs.core.List.EMPTY;
var inst_28560 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28559);
var inst_28561 = (function (){return ((function (inst_28558,inst_28559,inst_28560,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28256_SHARP_){
var and__21681__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28256_SHARP_);
if(cljs.core.truth_(and__21681__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28256_SHARP_));
} else {
return and__21681__auto__;
}
});
;})(inst_28558,inst_28559,inst_28560,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28562 = cljs.core.filter.call(null,inst_28561,files);
var inst_28563 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28564 = cljs.core.concat.call(null,inst_28562,inst_28563);
var state_28660__$1 = (function (){var statearr_28675 = state_28660;
(statearr_28675[(12)] = inst_28564);

(statearr_28675[(17)] = inst_28560);

(statearr_28675[(18)] = inst_28558);

return statearr_28675;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28676_28760 = state_28660__$1;
(statearr_28676_28760[(1)] = (16));

} else {
var statearr_28677_28761 = state_28660__$1;
(statearr_28677_28761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (15))){
var inst_28548 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28678_28762 = state_28660__$1;
(statearr_28678_28762[(2)] = inst_28548);

(statearr_28678_28762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (21))){
var inst_28574 = (state_28660[(19)]);
var inst_28574__$1 = (state_28660[(2)]);
var inst_28575 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28574__$1);
var state_28660__$1 = (function (){var statearr_28679 = state_28660;
(statearr_28679[(19)] = inst_28574__$1);

return statearr_28679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28660__$1,(22),inst_28575);
} else {
if((state_val_28661 === (31))){
var inst_28658 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28660__$1,inst_28658);
} else {
if((state_val_28661 === (32))){
var inst_28614 = (state_28660[(16)]);
var inst_28619 = inst_28614.cljs$lang$protocol_mask$partition0$;
var inst_28620 = (inst_28619 & (64));
var inst_28621 = inst_28614.cljs$core$ISeq$;
var inst_28622 = (inst_28620) || (inst_28621);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28622)){
var statearr_28680_28763 = state_28660__$1;
(statearr_28680_28763[(1)] = (35));

} else {
var statearr_28681_28764 = state_28660__$1;
(statearr_28681_28764[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (40))){
var inst_28635 = (state_28660[(20)]);
var inst_28634 = (state_28660[(2)]);
var inst_28635__$1 = cljs.core.get.call(null,inst_28634,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28636 = cljs.core.get.call(null,inst_28634,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28637 = cljs.core.not_empty.call(null,inst_28635__$1);
var state_28660__$1 = (function (){var statearr_28682 = state_28660;
(statearr_28682[(21)] = inst_28636);

(statearr_28682[(20)] = inst_28635__$1);

return statearr_28682;
})();
if(cljs.core.truth_(inst_28637)){
var statearr_28683_28765 = state_28660__$1;
(statearr_28683_28765[(1)] = (41));

} else {
var statearr_28684_28766 = state_28660__$1;
(statearr_28684_28766[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (33))){
var state_28660__$1 = state_28660;
var statearr_28685_28767 = state_28660__$1;
(statearr_28685_28767[(2)] = false);

(statearr_28685_28767[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (13))){
var inst_28534 = (state_28660[(22)]);
var inst_28538 = cljs.core.chunk_first.call(null,inst_28534);
var inst_28539 = cljs.core.chunk_rest.call(null,inst_28534);
var inst_28540 = cljs.core.count.call(null,inst_28538);
var inst_28521 = inst_28539;
var inst_28522 = inst_28538;
var inst_28523 = inst_28540;
var inst_28524 = (0);
var state_28660__$1 = (function (){var statearr_28686 = state_28660;
(statearr_28686[(7)] = inst_28521);

(statearr_28686[(8)] = inst_28522);

(statearr_28686[(9)] = inst_28524);

(statearr_28686[(10)] = inst_28523);

return statearr_28686;
})();
var statearr_28687_28768 = state_28660__$1;
(statearr_28687_28768[(2)] = null);

(statearr_28687_28768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (22))){
var inst_28582 = (state_28660[(23)]);
var inst_28574 = (state_28660[(19)]);
var inst_28578 = (state_28660[(24)]);
var inst_28577 = (state_28660[(25)]);
var inst_28577__$1 = (state_28660[(2)]);
var inst_28578__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28577__$1);
var inst_28579 = (function (){var all_files = inst_28574;
var res_SINGLEQUOTE_ = inst_28577__$1;
var res = inst_28578__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28582,inst_28574,inst_28578,inst_28577,inst_28577__$1,inst_28578__$1,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28257_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28257_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28582,inst_28574,inst_28578,inst_28577,inst_28577__$1,inst_28578__$1,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28580 = cljs.core.filter.call(null,inst_28579,inst_28577__$1);
var inst_28581 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28582__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28581);
var inst_28583 = cljs.core.not_empty.call(null,inst_28582__$1);
var state_28660__$1 = (function (){var statearr_28688 = state_28660;
(statearr_28688[(23)] = inst_28582__$1);

(statearr_28688[(24)] = inst_28578__$1);

(statearr_28688[(25)] = inst_28577__$1);

(statearr_28688[(26)] = inst_28580);

return statearr_28688;
})();
if(cljs.core.truth_(inst_28583)){
var statearr_28689_28769 = state_28660__$1;
(statearr_28689_28769[(1)] = (23));

} else {
var statearr_28690_28770 = state_28660__$1;
(statearr_28690_28770[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (36))){
var state_28660__$1 = state_28660;
var statearr_28691_28771 = state_28660__$1;
(statearr_28691_28771[(2)] = false);

(statearr_28691_28771[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (41))){
var inst_28635 = (state_28660[(20)]);
var inst_28639 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28640 = cljs.core.map.call(null,inst_28639,inst_28635);
var inst_28641 = cljs.core.pr_str.call(null,inst_28640);
var inst_28642 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28641)].join('');
var inst_28643 = figwheel.client.utils.log.call(null,inst_28642);
var state_28660__$1 = state_28660;
var statearr_28692_28772 = state_28660__$1;
(statearr_28692_28772[(2)] = inst_28643);

(statearr_28692_28772[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (43))){
var inst_28636 = (state_28660[(21)]);
var inst_28646 = (state_28660[(2)]);
var inst_28647 = cljs.core.not_empty.call(null,inst_28636);
var state_28660__$1 = (function (){var statearr_28693 = state_28660;
(statearr_28693[(27)] = inst_28646);

return statearr_28693;
})();
if(cljs.core.truth_(inst_28647)){
var statearr_28694_28773 = state_28660__$1;
(statearr_28694_28773[(1)] = (44));

} else {
var statearr_28695_28774 = state_28660__$1;
(statearr_28695_28774[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (29))){
var inst_28582 = (state_28660[(23)]);
var inst_28574 = (state_28660[(19)]);
var inst_28614 = (state_28660[(16)]);
var inst_28578 = (state_28660[(24)]);
var inst_28577 = (state_28660[(25)]);
var inst_28580 = (state_28660[(26)]);
var inst_28610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28613 = (function (){var all_files = inst_28574;
var res_SINGLEQUOTE_ = inst_28577;
var res = inst_28578;
var files_not_loaded = inst_28580;
var dependencies_that_loaded = inst_28582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28582,inst_28574,inst_28614,inst_28578,inst_28577,inst_28580,inst_28610,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28612){
var map__28696 = p__28612;
var map__28696__$1 = ((((!((map__28696 == null)))?((((map__28696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28696):map__28696);
var namespace = cljs.core.get.call(null,map__28696__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28582,inst_28574,inst_28614,inst_28578,inst_28577,inst_28580,inst_28610,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28614__$1 = cljs.core.group_by.call(null,inst_28613,inst_28580);
var inst_28616 = (inst_28614__$1 == null);
var inst_28617 = cljs.core.not.call(null,inst_28616);
var state_28660__$1 = (function (){var statearr_28698 = state_28660;
(statearr_28698[(16)] = inst_28614__$1);

(statearr_28698[(28)] = inst_28610);

return statearr_28698;
})();
if(inst_28617){
var statearr_28699_28775 = state_28660__$1;
(statearr_28699_28775[(1)] = (32));

} else {
var statearr_28700_28776 = state_28660__$1;
(statearr_28700_28776[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (44))){
var inst_28636 = (state_28660[(21)]);
var inst_28649 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28636);
var inst_28650 = cljs.core.pr_str.call(null,inst_28649);
var inst_28651 = [cljs.core.str("not required: "),cljs.core.str(inst_28650)].join('');
var inst_28652 = figwheel.client.utils.log.call(null,inst_28651);
var state_28660__$1 = state_28660;
var statearr_28701_28777 = state_28660__$1;
(statearr_28701_28777[(2)] = inst_28652);

(statearr_28701_28777[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (6))){
var inst_28555 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28702_28778 = state_28660__$1;
(statearr_28702_28778[(2)] = inst_28555);

(statearr_28702_28778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (28))){
var inst_28580 = (state_28660[(26)]);
var inst_28607 = (state_28660[(2)]);
var inst_28608 = cljs.core.not_empty.call(null,inst_28580);
var state_28660__$1 = (function (){var statearr_28703 = state_28660;
(statearr_28703[(29)] = inst_28607);

return statearr_28703;
})();
if(cljs.core.truth_(inst_28608)){
var statearr_28704_28779 = state_28660__$1;
(statearr_28704_28779[(1)] = (29));

} else {
var statearr_28705_28780 = state_28660__$1;
(statearr_28705_28780[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (25))){
var inst_28578 = (state_28660[(24)]);
var inst_28594 = (state_28660[(2)]);
var inst_28595 = cljs.core.not_empty.call(null,inst_28578);
var state_28660__$1 = (function (){var statearr_28706 = state_28660;
(statearr_28706[(30)] = inst_28594);

return statearr_28706;
})();
if(cljs.core.truth_(inst_28595)){
var statearr_28707_28781 = state_28660__$1;
(statearr_28707_28781[(1)] = (26));

} else {
var statearr_28708_28782 = state_28660__$1;
(statearr_28708_28782[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (34))){
var inst_28629 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28629)){
var statearr_28709_28783 = state_28660__$1;
(statearr_28709_28783[(1)] = (38));

} else {
var statearr_28710_28784 = state_28660__$1;
(statearr_28710_28784[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (17))){
var state_28660__$1 = state_28660;
var statearr_28711_28785 = state_28660__$1;
(statearr_28711_28785[(2)] = recompile_dependents);

(statearr_28711_28785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (3))){
var state_28660__$1 = state_28660;
var statearr_28712_28786 = state_28660__$1;
(statearr_28712_28786[(2)] = null);

(statearr_28712_28786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (12))){
var inst_28551 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28713_28787 = state_28660__$1;
(statearr_28713_28787[(2)] = inst_28551);

(statearr_28713_28787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (2))){
var inst_28513 = (state_28660[(13)]);
var inst_28520 = cljs.core.seq.call(null,inst_28513);
var inst_28521 = inst_28520;
var inst_28522 = null;
var inst_28523 = (0);
var inst_28524 = (0);
var state_28660__$1 = (function (){var statearr_28714 = state_28660;
(statearr_28714[(7)] = inst_28521);

(statearr_28714[(8)] = inst_28522);

(statearr_28714[(9)] = inst_28524);

(statearr_28714[(10)] = inst_28523);

return statearr_28714;
})();
var statearr_28715_28788 = state_28660__$1;
(statearr_28715_28788[(2)] = null);

(statearr_28715_28788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (23))){
var inst_28582 = (state_28660[(23)]);
var inst_28574 = (state_28660[(19)]);
var inst_28578 = (state_28660[(24)]);
var inst_28577 = (state_28660[(25)]);
var inst_28580 = (state_28660[(26)]);
var inst_28585 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28587 = (function (){var all_files = inst_28574;
var res_SINGLEQUOTE_ = inst_28577;
var res = inst_28578;
var files_not_loaded = inst_28580;
var dependencies_that_loaded = inst_28582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28582,inst_28574,inst_28578,inst_28577,inst_28580,inst_28585,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28586){
var map__28716 = p__28586;
var map__28716__$1 = ((((!((map__28716 == null)))?((((map__28716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28716):map__28716);
var request_url = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28582,inst_28574,inst_28578,inst_28577,inst_28580,inst_28585,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28588 = cljs.core.reverse.call(null,inst_28582);
var inst_28589 = cljs.core.map.call(null,inst_28587,inst_28588);
var inst_28590 = cljs.core.pr_str.call(null,inst_28589);
var inst_28591 = figwheel.client.utils.log.call(null,inst_28590);
var state_28660__$1 = (function (){var statearr_28718 = state_28660;
(statearr_28718[(31)] = inst_28585);

return statearr_28718;
})();
var statearr_28719_28789 = state_28660__$1;
(statearr_28719_28789[(2)] = inst_28591);

(statearr_28719_28789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (35))){
var state_28660__$1 = state_28660;
var statearr_28720_28790 = state_28660__$1;
(statearr_28720_28790[(2)] = true);

(statearr_28720_28790[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (19))){
var inst_28564 = (state_28660[(12)]);
var inst_28570 = figwheel.client.file_reloading.expand_files.call(null,inst_28564);
var state_28660__$1 = state_28660;
var statearr_28721_28791 = state_28660__$1;
(statearr_28721_28791[(2)] = inst_28570);

(statearr_28721_28791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (11))){
var state_28660__$1 = state_28660;
var statearr_28722_28792 = state_28660__$1;
(statearr_28722_28792[(2)] = null);

(statearr_28722_28792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (9))){
var inst_28553 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28723_28793 = state_28660__$1;
(statearr_28723_28793[(2)] = inst_28553);

(statearr_28723_28793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (5))){
var inst_28524 = (state_28660[(9)]);
var inst_28523 = (state_28660[(10)]);
var inst_28526 = (inst_28524 < inst_28523);
var inst_28527 = inst_28526;
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28527)){
var statearr_28724_28794 = state_28660__$1;
(statearr_28724_28794[(1)] = (7));

} else {
var statearr_28725_28795 = state_28660__$1;
(statearr_28725_28795[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (14))){
var inst_28534 = (state_28660[(22)]);
var inst_28543 = cljs.core.first.call(null,inst_28534);
var inst_28544 = figwheel.client.file_reloading.eval_body.call(null,inst_28543,opts);
var inst_28545 = cljs.core.next.call(null,inst_28534);
var inst_28521 = inst_28545;
var inst_28522 = null;
var inst_28523 = (0);
var inst_28524 = (0);
var state_28660__$1 = (function (){var statearr_28726 = state_28660;
(statearr_28726[(7)] = inst_28521);

(statearr_28726[(8)] = inst_28522);

(statearr_28726[(32)] = inst_28544);

(statearr_28726[(9)] = inst_28524);

(statearr_28726[(10)] = inst_28523);

return statearr_28726;
})();
var statearr_28727_28796 = state_28660__$1;
(statearr_28727_28796[(2)] = null);

(statearr_28727_28796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (45))){
var state_28660__$1 = state_28660;
var statearr_28728_28797 = state_28660__$1;
(statearr_28728_28797[(2)] = null);

(statearr_28728_28797[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (26))){
var inst_28582 = (state_28660[(23)]);
var inst_28574 = (state_28660[(19)]);
var inst_28578 = (state_28660[(24)]);
var inst_28577 = (state_28660[(25)]);
var inst_28580 = (state_28660[(26)]);
var inst_28597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28599 = (function (){var all_files = inst_28574;
var res_SINGLEQUOTE_ = inst_28577;
var res = inst_28578;
var files_not_loaded = inst_28580;
var dependencies_that_loaded = inst_28582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28582,inst_28574,inst_28578,inst_28577,inst_28580,inst_28597,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28598){
var map__28729 = p__28598;
var map__28729__$1 = ((((!((map__28729 == null)))?((((map__28729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28729):map__28729);
var namespace = cljs.core.get.call(null,map__28729__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28729__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28582,inst_28574,inst_28578,inst_28577,inst_28580,inst_28597,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28600 = cljs.core.map.call(null,inst_28599,inst_28578);
var inst_28601 = cljs.core.pr_str.call(null,inst_28600);
var inst_28602 = figwheel.client.utils.log.call(null,inst_28601);
var inst_28603 = (function (){var all_files = inst_28574;
var res_SINGLEQUOTE_ = inst_28577;
var res = inst_28578;
var files_not_loaded = inst_28580;
var dependencies_that_loaded = inst_28582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28582,inst_28574,inst_28578,inst_28577,inst_28580,inst_28597,inst_28599,inst_28600,inst_28601,inst_28602,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28582,inst_28574,inst_28578,inst_28577,inst_28580,inst_28597,inst_28599,inst_28600,inst_28601,inst_28602,state_val_28661,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28604 = setTimeout(inst_28603,(10));
var state_28660__$1 = (function (){var statearr_28731 = state_28660;
(statearr_28731[(33)] = inst_28602);

(statearr_28731[(34)] = inst_28597);

return statearr_28731;
})();
var statearr_28732_28798 = state_28660__$1;
(statearr_28732_28798[(2)] = inst_28604);

(statearr_28732_28798[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (16))){
var state_28660__$1 = state_28660;
var statearr_28733_28799 = state_28660__$1;
(statearr_28733_28799[(2)] = reload_dependents);

(statearr_28733_28799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (38))){
var inst_28614 = (state_28660[(16)]);
var inst_28631 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28614);
var state_28660__$1 = state_28660;
var statearr_28734_28800 = state_28660__$1;
(statearr_28734_28800[(2)] = inst_28631);

(statearr_28734_28800[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (30))){
var state_28660__$1 = state_28660;
var statearr_28735_28801 = state_28660__$1;
(statearr_28735_28801[(2)] = null);

(statearr_28735_28801[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (10))){
var inst_28534 = (state_28660[(22)]);
var inst_28536 = cljs.core.chunked_seq_QMARK_.call(null,inst_28534);
var state_28660__$1 = state_28660;
if(inst_28536){
var statearr_28736_28802 = state_28660__$1;
(statearr_28736_28802[(1)] = (13));

} else {
var statearr_28737_28803 = state_28660__$1;
(statearr_28737_28803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (18))){
var inst_28568 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28568)){
var statearr_28738_28804 = state_28660__$1;
(statearr_28738_28804[(1)] = (19));

} else {
var statearr_28739_28805 = state_28660__$1;
(statearr_28739_28805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (42))){
var state_28660__$1 = state_28660;
var statearr_28740_28806 = state_28660__$1;
(statearr_28740_28806[(2)] = null);

(statearr_28740_28806[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (37))){
var inst_28626 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28741_28807 = state_28660__$1;
(statearr_28741_28807[(2)] = inst_28626);

(statearr_28741_28807[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (8))){
var inst_28521 = (state_28660[(7)]);
var inst_28534 = (state_28660[(22)]);
var inst_28534__$1 = cljs.core.seq.call(null,inst_28521);
var state_28660__$1 = (function (){var statearr_28742 = state_28660;
(statearr_28742[(22)] = inst_28534__$1);

return statearr_28742;
})();
if(inst_28534__$1){
var statearr_28743_28808 = state_28660__$1;
(statearr_28743_28808[(1)] = (10));

} else {
var statearr_28744_28809 = state_28660__$1;
(statearr_28744_28809[(1)] = (11));

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
}
});})(c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24921__auto__,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto____0 = (function (){
var statearr_28748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28748[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto__);

(statearr_28748[(1)] = (1));

return statearr_28748;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto____1 = (function (state_28660){
while(true){
var ret_value__24923__auto__ = (function (){try{while(true){
var result__24924__auto__ = switch__24921__auto__.call(null,state_28660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24924__auto__;
}
break;
}
}catch (e28749){if((e28749 instanceof Object)){
var ex__24925__auto__ = e28749;
var statearr_28750_28810 = state_28660;
(statearr_28750_28810[(5)] = ex__24925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28811 = state_28660;
state_28660 = G__28811;
continue;
} else {
return ret_value__24923__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto__ = function(state_28660){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto____1.call(this,state_28660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24922__auto__;
})()
;})(switch__24921__auto__,c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25035__auto__ = (function (){var statearr_28751 = f__25034__auto__.call(null);
(statearr_28751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25033__auto__);

return statearr_28751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25035__auto__);
});})(c__25033__auto__,map__28506,map__28506__$1,opts,before_jsload,on_jsload,reload_dependents,map__28507,map__28507__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25033__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28814,link){
var map__28817 = p__28814;
var map__28817__$1 = ((((!((map__28817 == null)))?((((map__28817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28817):map__28817);
var file = cljs.core.get.call(null,map__28817__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28817,map__28817__$1,file){
return (function (p1__28812_SHARP_,p2__28813_SHARP_){
if(cljs.core._EQ_.call(null,p1__28812_SHARP_,p2__28813_SHARP_)){
return p1__28812_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28817,map__28817__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28823){
var map__28824 = p__28823;
var map__28824__$1 = ((((!((map__28824 == null)))?((((map__28824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28824):map__28824);
var match_length = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28819_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28819_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28826 = [];
var len__22763__auto___28829 = arguments.length;
var i__22764__auto___28830 = (0);
while(true){
if((i__22764__auto___28830 < len__22763__auto___28829)){
args28826.push((arguments[i__22764__auto___28830]));

var G__28831 = (i__22764__auto___28830 + (1));
i__22764__auto___28830 = G__28831;
continue;
} else {
}
break;
}

var G__28828 = args28826.length;
switch (G__28828) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28826.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28833_SHARP_,p2__28834_SHARP_){
return cljs.core.assoc.call(null,p1__28833_SHARP_,cljs.core.get.call(null,p2__28834_SHARP_,key),p2__28834_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28835){
var map__28838 = p__28835;
var map__28838__$1 = ((((!((map__28838 == null)))?((((map__28838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28838):map__28838);
var f_data = map__28838__$1;
var file = cljs.core.get.call(null,map__28838__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28840,files_msg){
var map__28847 = p__28840;
var map__28847__$1 = ((((!((map__28847 == null)))?((((map__28847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28847):map__28847);
var opts = map__28847__$1;
var on_cssload = cljs.core.get.call(null,map__28847__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28849_28853 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28850_28854 = null;
var count__28851_28855 = (0);
var i__28852_28856 = (0);
while(true){
if((i__28852_28856 < count__28851_28855)){
var f_28857 = cljs.core._nth.call(null,chunk__28850_28854,i__28852_28856);
figwheel.client.file_reloading.reload_css_file.call(null,f_28857);

var G__28858 = seq__28849_28853;
var G__28859 = chunk__28850_28854;
var G__28860 = count__28851_28855;
var G__28861 = (i__28852_28856 + (1));
seq__28849_28853 = G__28858;
chunk__28850_28854 = G__28859;
count__28851_28855 = G__28860;
i__28852_28856 = G__28861;
continue;
} else {
var temp__4657__auto___28862 = cljs.core.seq.call(null,seq__28849_28853);
if(temp__4657__auto___28862){
var seq__28849_28863__$1 = temp__4657__auto___28862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28849_28863__$1)){
var c__22504__auto___28864 = cljs.core.chunk_first.call(null,seq__28849_28863__$1);
var G__28865 = cljs.core.chunk_rest.call(null,seq__28849_28863__$1);
var G__28866 = c__22504__auto___28864;
var G__28867 = cljs.core.count.call(null,c__22504__auto___28864);
var G__28868 = (0);
seq__28849_28853 = G__28865;
chunk__28850_28854 = G__28866;
count__28851_28855 = G__28867;
i__28852_28856 = G__28868;
continue;
} else {
var f_28869 = cljs.core.first.call(null,seq__28849_28863__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28869);

var G__28870 = cljs.core.next.call(null,seq__28849_28863__$1);
var G__28871 = null;
var G__28872 = (0);
var G__28873 = (0);
seq__28849_28853 = G__28870;
chunk__28850_28854 = G__28871;
count__28851_28855 = G__28872;
i__28852_28856 = G__28873;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28847,map__28847__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28847,map__28847__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1469132191056