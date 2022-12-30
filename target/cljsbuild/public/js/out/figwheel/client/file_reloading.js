// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.file_reloading.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__5043__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (((typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))))))));
if(or__5043__auto__){
return or__5043__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (((cljs.core._EQ_.call(null,"cljs.core",ns)) || (((cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (((goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")))))))));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__36857 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__36857 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__36857,"requires");
}
}):(function (path){
var G__36858 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__36858 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__36858);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36859_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36859_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__36860 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__36860__$1 = (((G__36860 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__36860,"provides"));
if((G__36860__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__36860__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides")));
})),(function (dep,path,_){
var provides = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides");
var requires = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"requires");
var seq__36861 = cljs.core.seq.call(null,provides);
var chunk__36862 = null;
var count__36863 = (0);
var i__36864 = (0);
while(true){
if((i__36864 < count__36863)){
var prov = cljs.core._nth.call(null,chunk__36862,i__36864);
var seq__36873_36885 = cljs.core.seq.call(null,requires);
var chunk__36874_36886 = null;
var count__36875_36887 = (0);
var i__36876_36888 = (0);
while(true){
if((i__36876_36888 < count__36875_36887)){
var req_36889 = cljs.core._nth.call(null,chunk__36874_36886,i__36876_36888);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36889,prov);


var G__36890 = seq__36873_36885;
var G__36891 = chunk__36874_36886;
var G__36892 = count__36875_36887;
var G__36893 = (i__36876_36888 + (1));
seq__36873_36885 = G__36890;
chunk__36874_36886 = G__36891;
count__36875_36887 = G__36892;
i__36876_36888 = G__36893;
continue;
} else {
var temp__5804__auto___36894 = cljs.core.seq.call(null,seq__36873_36885);
if(temp__5804__auto___36894){
var seq__36873_36895__$1 = temp__5804__auto___36894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36873_36895__$1)){
var c__5565__auto___36896 = cljs.core.chunk_first.call(null,seq__36873_36895__$1);
var G__36897 = cljs.core.chunk_rest.call(null,seq__36873_36895__$1);
var G__36898 = c__5565__auto___36896;
var G__36899 = cljs.core.count.call(null,c__5565__auto___36896);
var G__36900 = (0);
seq__36873_36885 = G__36897;
chunk__36874_36886 = G__36898;
count__36875_36887 = G__36899;
i__36876_36888 = G__36900;
continue;
} else {
var req_36901 = cljs.core.first.call(null,seq__36873_36895__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36901,prov);


var G__36902 = cljs.core.next.call(null,seq__36873_36895__$1);
var G__36903 = null;
var G__36904 = (0);
var G__36905 = (0);
seq__36873_36885 = G__36902;
chunk__36874_36886 = G__36903;
count__36875_36887 = G__36904;
i__36876_36888 = G__36905;
continue;
}
} else {
}
}
break;
}


var G__36906 = seq__36861;
var G__36907 = chunk__36862;
var G__36908 = count__36863;
var G__36909 = (i__36864 + (1));
seq__36861 = G__36906;
chunk__36862 = G__36907;
count__36863 = G__36908;
i__36864 = G__36909;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__36861);
if(temp__5804__auto__){
var seq__36861__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36861__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__36861__$1);
var G__36910 = cljs.core.chunk_rest.call(null,seq__36861__$1);
var G__36911 = c__5565__auto__;
var G__36912 = cljs.core.count.call(null,c__5565__auto__);
var G__36913 = (0);
seq__36861 = G__36910;
chunk__36862 = G__36911;
count__36863 = G__36912;
i__36864 = G__36913;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36861__$1);
var seq__36877_36914 = cljs.core.seq.call(null,requires);
var chunk__36878_36915 = null;
var count__36879_36916 = (0);
var i__36880_36917 = (0);
while(true){
if((i__36880_36917 < count__36879_36916)){
var req_36918 = cljs.core._nth.call(null,chunk__36878_36915,i__36880_36917);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36918,prov);


var G__36919 = seq__36877_36914;
var G__36920 = chunk__36878_36915;
var G__36921 = count__36879_36916;
var G__36922 = (i__36880_36917 + (1));
seq__36877_36914 = G__36919;
chunk__36878_36915 = G__36920;
count__36879_36916 = G__36921;
i__36880_36917 = G__36922;
continue;
} else {
var temp__5804__auto___36923__$1 = cljs.core.seq.call(null,seq__36877_36914);
if(temp__5804__auto___36923__$1){
var seq__36877_36924__$1 = temp__5804__auto___36923__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36877_36924__$1)){
var c__5565__auto___36925 = cljs.core.chunk_first.call(null,seq__36877_36924__$1);
var G__36926 = cljs.core.chunk_rest.call(null,seq__36877_36924__$1);
var G__36927 = c__5565__auto___36925;
var G__36928 = cljs.core.count.call(null,c__5565__auto___36925);
var G__36929 = (0);
seq__36877_36914 = G__36926;
chunk__36878_36915 = G__36927;
count__36879_36916 = G__36928;
i__36880_36917 = G__36929;
continue;
} else {
var req_36930 = cljs.core.first.call(null,seq__36877_36924__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36930,prov);


var G__36931 = cljs.core.next.call(null,seq__36877_36924__$1);
var G__36932 = null;
var G__36933 = (0);
var G__36934 = (0);
seq__36877_36914 = G__36931;
chunk__36878_36915 = G__36932;
count__36879_36916 = G__36933;
i__36880_36917 = G__36934;
continue;
}
} else {
}
}
break;
}


var G__36935 = cljs.core.next.call(null,seq__36861__$1);
var G__36936 = null;
var G__36937 = (0);
var G__36938 = (0);
seq__36861 = G__36935;
chunk__36862 = G__36936;
count__36863 = G__36937;
i__36864 = G__36938;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,requires,(function (deps,path,_){
var seq__36881 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__36882 = null;
var count__36883 = (0);
var i__36884 = (0);
while(true){
if((i__36884 < count__36883)){
var prov = cljs.core._nth.call(null,chunk__36882,i__36884);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__36881,chunk__36882,count__36883,i__36884,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__36881,chunk__36882,count__36883,i__36884,prov,requires))
);


var G__36939 = seq__36881;
var G__36940 = chunk__36882;
var G__36941 = count__36883;
var G__36942 = (i__36884 + (1));
seq__36881 = G__36939;
chunk__36882 = G__36940;
count__36883 = G__36941;
i__36884 = G__36942;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__36881);
if(temp__5804__auto__){
var seq__36881__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36881__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__36881__$1);
var G__36943 = cljs.core.chunk_rest.call(null,seq__36881__$1);
var G__36944 = c__5565__auto__;
var G__36945 = cljs.core.count.call(null,c__5565__auto__);
var G__36946 = (0);
seq__36881 = G__36943;
chunk__36882 = G__36944;
count__36883 = G__36945;
i__36884 = G__36946;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36881__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__36881,chunk__36882,count__36883,i__36884,prov,seq__36881__$1,temp__5804__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__36881,chunk__36882,count__36883,i__36884,prov,seq__36881__$1,temp__5804__auto__,requires))
);


var G__36947 = cljs.core.next.call(null,seq__36881__$1);
var G__36948 = null;
var G__36949 = (0);
var G__36950 = (0);
seq__36881 = G__36947;
chunk__36882 = G__36948;
count__36883 = G__36949;
i__36884 = G__36950;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__36951){
var vec__36952 = p__36951;
var _ = cljs.core.nth.call(null,vec__36952,(0),null);
var v = cljs.core.nth.call(null,vec__36952,(1),null);
var and__5041__auto__ = v;
if(cljs.core.truth_(and__5041__auto__)){
return v.call(null,dep);
} else {
return and__5041__auto__;
}
}),cljs.core.filter.call(null,(function (p__36955){
var vec__36956 = p__36955;
var k = cljs.core.nth.call(null,vec__36956,(0),null);
var v = cljs.core.nth.call(null,vec__36956,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36968_36976 = cljs.core.seq.call(null,deps);
var chunk__36969_36977 = null;
var count__36970_36978 = (0);
var i__36971_36979 = (0);
while(true){
if((i__36971_36979 < count__36970_36978)){
var dep_36980 = cljs.core._nth.call(null,chunk__36969_36977,i__36971_36979);
if(cljs.core.truth_((function (){var and__5041__auto__ = dep_36980;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36980));
} else {
return and__5041__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36980,(depth + (1)),state);
} else {
}


var G__36981 = seq__36968_36976;
var G__36982 = chunk__36969_36977;
var G__36983 = count__36970_36978;
var G__36984 = (i__36971_36979 + (1));
seq__36968_36976 = G__36981;
chunk__36969_36977 = G__36982;
count__36970_36978 = G__36983;
i__36971_36979 = G__36984;
continue;
} else {
var temp__5804__auto___36985 = cljs.core.seq.call(null,seq__36968_36976);
if(temp__5804__auto___36985){
var seq__36968_36986__$1 = temp__5804__auto___36985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36968_36986__$1)){
var c__5565__auto___36987 = cljs.core.chunk_first.call(null,seq__36968_36986__$1);
var G__36988 = cljs.core.chunk_rest.call(null,seq__36968_36986__$1);
var G__36989 = c__5565__auto___36987;
var G__36990 = cljs.core.count.call(null,c__5565__auto___36987);
var G__36991 = (0);
seq__36968_36976 = G__36988;
chunk__36969_36977 = G__36989;
count__36970_36978 = G__36990;
i__36971_36979 = G__36991;
continue;
} else {
var dep_36992 = cljs.core.first.call(null,seq__36968_36986__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = dep_36992;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36992));
} else {
return and__5041__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36992,(depth + (1)),state);
} else {
}


var G__36993 = cljs.core.next.call(null,seq__36968_36986__$1);
var G__36994 = null;
var G__36995 = (0);
var G__36996 = (0);
seq__36968_36976 = G__36993;
chunk__36969_36977 = G__36994;
count__36970_36978 = G__36995;
i__36971_36979 = G__36996;
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
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36972){
var vec__36973 = p__36972;
var seq__36974 = cljs.core.seq.call(null,vec__36973);
var first__36975 = cljs.core.first.call(null,seq__36974);
var seq__36974__$1 = cljs.core.next.call(null,seq__36974);
var x = first__36975;
var xs = seq__36974__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__36959_SHARP_){
return clojure.set.difference.call(null,p1__36959_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__36997_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__36997_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36998 = cljs.core.seq.call(null,provides);
var chunk__36999 = null;
var count__37000 = (0);
var i__37001 = (0);
while(true){
if((i__37001 < count__37000)){
var prov = cljs.core._nth.call(null,chunk__36999,i__37001);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37010_37018 = cljs.core.seq.call(null,requires);
var chunk__37011_37019 = null;
var count__37012_37020 = (0);
var i__37013_37021 = (0);
while(true){
if((i__37013_37021 < count__37012_37020)){
var req_37022 = cljs.core._nth.call(null,chunk__37011_37019,i__37013_37021);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37022,prov);


var G__37023 = seq__37010_37018;
var G__37024 = chunk__37011_37019;
var G__37025 = count__37012_37020;
var G__37026 = (i__37013_37021 + (1));
seq__37010_37018 = G__37023;
chunk__37011_37019 = G__37024;
count__37012_37020 = G__37025;
i__37013_37021 = G__37026;
continue;
} else {
var temp__5804__auto___37027 = cljs.core.seq.call(null,seq__37010_37018);
if(temp__5804__auto___37027){
var seq__37010_37028__$1 = temp__5804__auto___37027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37010_37028__$1)){
var c__5565__auto___37029 = cljs.core.chunk_first.call(null,seq__37010_37028__$1);
var G__37030 = cljs.core.chunk_rest.call(null,seq__37010_37028__$1);
var G__37031 = c__5565__auto___37029;
var G__37032 = cljs.core.count.call(null,c__5565__auto___37029);
var G__37033 = (0);
seq__37010_37018 = G__37030;
chunk__37011_37019 = G__37031;
count__37012_37020 = G__37032;
i__37013_37021 = G__37033;
continue;
} else {
var req_37034 = cljs.core.first.call(null,seq__37010_37028__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37034,prov);


var G__37035 = cljs.core.next.call(null,seq__37010_37028__$1);
var G__37036 = null;
var G__37037 = (0);
var G__37038 = (0);
seq__37010_37018 = G__37035;
chunk__37011_37019 = G__37036;
count__37012_37020 = G__37037;
i__37013_37021 = G__37038;
continue;
}
} else {
}
}
break;
}


var G__37039 = seq__36998;
var G__37040 = chunk__36999;
var G__37041 = count__37000;
var G__37042 = (i__37001 + (1));
seq__36998 = G__37039;
chunk__36999 = G__37040;
count__37000 = G__37041;
i__37001 = G__37042;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__36998);
if(temp__5804__auto__){
var seq__36998__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36998__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__36998__$1);
var G__37043 = cljs.core.chunk_rest.call(null,seq__36998__$1);
var G__37044 = c__5565__auto__;
var G__37045 = cljs.core.count.call(null,c__5565__auto__);
var G__37046 = (0);
seq__36998 = G__37043;
chunk__36999 = G__37044;
count__37000 = G__37045;
i__37001 = G__37046;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36998__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37014_37047 = cljs.core.seq.call(null,requires);
var chunk__37015_37048 = null;
var count__37016_37049 = (0);
var i__37017_37050 = (0);
while(true){
if((i__37017_37050 < count__37016_37049)){
var req_37051 = cljs.core._nth.call(null,chunk__37015_37048,i__37017_37050);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37051,prov);


var G__37052 = seq__37014_37047;
var G__37053 = chunk__37015_37048;
var G__37054 = count__37016_37049;
var G__37055 = (i__37017_37050 + (1));
seq__37014_37047 = G__37052;
chunk__37015_37048 = G__37053;
count__37016_37049 = G__37054;
i__37017_37050 = G__37055;
continue;
} else {
var temp__5804__auto___37056__$1 = cljs.core.seq.call(null,seq__37014_37047);
if(temp__5804__auto___37056__$1){
var seq__37014_37057__$1 = temp__5804__auto___37056__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37014_37057__$1)){
var c__5565__auto___37058 = cljs.core.chunk_first.call(null,seq__37014_37057__$1);
var G__37059 = cljs.core.chunk_rest.call(null,seq__37014_37057__$1);
var G__37060 = c__5565__auto___37058;
var G__37061 = cljs.core.count.call(null,c__5565__auto___37058);
var G__37062 = (0);
seq__37014_37047 = G__37059;
chunk__37015_37048 = G__37060;
count__37016_37049 = G__37061;
i__37017_37050 = G__37062;
continue;
} else {
var req_37063 = cljs.core.first.call(null,seq__37014_37057__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37063,prov);


var G__37064 = cljs.core.next.call(null,seq__37014_37057__$1);
var G__37065 = null;
var G__37066 = (0);
var G__37067 = (0);
seq__37014_37047 = G__37064;
chunk__37015_37048 = G__37065;
count__37016_37049 = G__37066;
i__37017_37050 = G__37067;
continue;
}
} else {
}
}
break;
}


var G__37068 = cljs.core.next.call(null,seq__36998__$1);
var G__37069 = null;
var G__37070 = (0);
var G__37071 = (0);
seq__36998 = G__37068;
chunk__36999 = G__37069;
count__37000 = G__37070;
i__37001 = G__37071;
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
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37072_37076 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37073_37077 = null;
var count__37074_37078 = (0);
var i__37075_37079 = (0);
while(true){
if((i__37075_37079 < count__37074_37078)){
var ns_37080 = cljs.core._nth.call(null,chunk__37073_37077,i__37075_37079);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37080);


var G__37081 = seq__37072_37076;
var G__37082 = chunk__37073_37077;
var G__37083 = count__37074_37078;
var G__37084 = (i__37075_37079 + (1));
seq__37072_37076 = G__37081;
chunk__37073_37077 = G__37082;
count__37074_37078 = G__37083;
i__37075_37079 = G__37084;
continue;
} else {
var temp__5804__auto___37085 = cljs.core.seq.call(null,seq__37072_37076);
if(temp__5804__auto___37085){
var seq__37072_37086__$1 = temp__5804__auto___37085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37072_37086__$1)){
var c__5565__auto___37087 = cljs.core.chunk_first.call(null,seq__37072_37086__$1);
var G__37088 = cljs.core.chunk_rest.call(null,seq__37072_37086__$1);
var G__37089 = c__5565__auto___37087;
var G__37090 = cljs.core.count.call(null,c__5565__auto___37087);
var G__37091 = (0);
seq__37072_37076 = G__37088;
chunk__37073_37077 = G__37089;
count__37074_37078 = G__37090;
i__37075_37079 = G__37091;
continue;
} else {
var ns_37092 = cljs.core.first.call(null,seq__37072_37086__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37092);


var G__37093 = cljs.core.next.call(null,seq__37072_37086__$1);
var G__37094 = null;
var G__37095 = (0);
var G__37096 = (0);
seq__37072_37076 = G__37093;
chunk__37073_37077 = G__37094;
count__37074_37078 = G__37095;
i__37075_37079 = G__37096;
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
(goog.require_figwheel_backup_ = (function (){var or__5043__auto__ = goog.require__;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__37097__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37098__i = 0, G__37098__a = new Array(arguments.length -  0);
while (G__37098__i < G__37098__a.length) {G__37098__a[G__37098__i] = arguments[G__37098__i + 0]; ++G__37098__i;}
  args = new cljs.core.IndexedSeq(G__37098__a,0,null);
} 
return G__37097__delegate.call(this,args);};
G__37097.cljs$lang$maxFixedArity = 0;
G__37097.cljs$lang$applyTo = (function (arglist__37099){
var args = cljs.core.seq(arglist__37099);
return G__37097__delegate(args);
});
G__37097.cljs$core$IFn$_invoke$arity$variadic = G__37097__delegate;
return G__37097;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__37100_SHARP_,p2__37101_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37100_SHARP_)),p2__37101_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__37102_SHARP_,p2__37103_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37102_SHARP_),p2__37103_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37104 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37104.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__37104.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__37104;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37105){if((e37105 instanceof Error)){
var e = e37105;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37105;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.client.file_reloading.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37106){if((e37106 instanceof Error)){
var e = e37106;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37106;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37107 = cljs.core._EQ_;
var expr__37108 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37107.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37108))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37107.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37108))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37107.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37108))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37110,callback){
var map__37111 = p__37110;
var map__37111__$1 = cljs.core.__destructure_map.call(null,map__37111);
var file_msg = map__37111__$1;
var request_url = cljs.core.get.call(null,map__37111__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__5043__auto__ = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_37148){
var state_val_37149 = (state_37148[(1)]);
if((state_val_37149 === (7))){
var inst_37144 = (state_37148[(2)]);
var state_37148__$1 = state_37148;
var statearr_37150_37176 = state_37148__$1;
(statearr_37150_37176[(2)] = inst_37144);

(statearr_37150_37176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (1))){
var state_37148__$1 = state_37148;
var statearr_37151_37177 = state_37148__$1;
(statearr_37151_37177[(2)] = null);

(statearr_37151_37177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (4))){
var inst_37114 = (state_37148[(7)]);
var inst_37114__$1 = (state_37148[(2)]);
var state_37148__$1 = (function (){var statearr_37152 = state_37148;
(statearr_37152[(7)] = inst_37114__$1);

return statearr_37152;
})();
if(cljs.core.truth_(inst_37114__$1)){
var statearr_37153_37178 = state_37148__$1;
(statearr_37153_37178[(1)] = (5));

} else {
var statearr_37154_37179 = state_37148__$1;
(statearr_37154_37179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (15))){
var inst_37129 = (state_37148[(8)]);
var inst_37127 = (state_37148[(9)]);
var inst_37131 = inst_37129.call(null,inst_37127);
var state_37148__$1 = state_37148;
var statearr_37155_37180 = state_37148__$1;
(statearr_37155_37180[(2)] = inst_37131);

(statearr_37155_37180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (13))){
var inst_37138 = (state_37148[(2)]);
var state_37148__$1 = state_37148;
var statearr_37156_37181 = state_37148__$1;
(statearr_37156_37181[(2)] = inst_37138);

(statearr_37156_37181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (6))){
var state_37148__$1 = state_37148;
var statearr_37157_37182 = state_37148__$1;
(statearr_37157_37182[(2)] = null);

(statearr_37157_37182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (17))){
var inst_37135 = (state_37148[(2)]);
var state_37148__$1 = state_37148;
var statearr_37158_37183 = state_37148__$1;
(statearr_37158_37183[(2)] = inst_37135);

(statearr_37158_37183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (3))){
var inst_37146 = (state_37148[(2)]);
var state_37148__$1 = state_37148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37148__$1,inst_37146);
} else {
if((state_val_37149 === (12))){
var state_37148__$1 = state_37148;
var statearr_37159_37184 = state_37148__$1;
(statearr_37159_37184[(2)] = null);

(statearr_37159_37184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (2))){
var state_37148__$1 = state_37148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37148__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37149 === (11))){
var inst_37119 = (state_37148[(10)]);
var inst_37125 = figwheel.client.file_reloading.blocking_load.call(null,inst_37119);
var state_37148__$1 = state_37148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37148__$1,(14),inst_37125);
} else {
if((state_val_37149 === (9))){
var inst_37119 = (state_37148[(10)]);
var state_37148__$1 = state_37148;
if(cljs.core.truth_(inst_37119)){
var statearr_37160_37185 = state_37148__$1;
(statearr_37160_37185[(1)] = (11));

} else {
var statearr_37161_37186 = state_37148__$1;
(statearr_37161_37186[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (5))){
var inst_37114 = (state_37148[(7)]);
var inst_37120 = (state_37148[(11)]);
var inst_37119 = cljs.core.nth.call(null,inst_37114,(0),null);
var inst_37120__$1 = cljs.core.nth.call(null,inst_37114,(1),null);
var state_37148__$1 = (function (){var statearr_37162 = state_37148;
(statearr_37162[(11)] = inst_37120__$1);

(statearr_37162[(10)] = inst_37119);

return statearr_37162;
})();
if(cljs.core.truth_(inst_37120__$1)){
var statearr_37163_37187 = state_37148__$1;
(statearr_37163_37187[(1)] = (8));

} else {
var statearr_37164_37188 = state_37148__$1;
(statearr_37164_37188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (14))){
var inst_37129 = (state_37148[(8)]);
var inst_37119 = (state_37148[(10)]);
var inst_37127 = (state_37148[(2)]);
var inst_37128 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37129__$1 = cljs.core.get.call(null,inst_37128,inst_37119);
var state_37148__$1 = (function (){var statearr_37165 = state_37148;
(statearr_37165[(8)] = inst_37129__$1);

(statearr_37165[(9)] = inst_37127);

return statearr_37165;
})();
if(cljs.core.truth_(inst_37129__$1)){
var statearr_37166_37189 = state_37148__$1;
(statearr_37166_37189[(1)] = (15));

} else {
var statearr_37167_37190 = state_37148__$1;
(statearr_37167_37190[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (16))){
var inst_37127 = (state_37148[(9)]);
var inst_37133 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37127);
var state_37148__$1 = state_37148;
var statearr_37168_37191 = state_37148__$1;
(statearr_37168_37191[(2)] = inst_37133);

(statearr_37168_37191[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (10))){
var inst_37140 = (state_37148[(2)]);
var state_37148__$1 = (function (){var statearr_37169 = state_37148;
(statearr_37169[(12)] = inst_37140);

return statearr_37169;
})();
var statearr_37170_37192 = state_37148__$1;
(statearr_37170_37192[(2)] = null);

(statearr_37170_37192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37149 === (8))){
var inst_37120 = (state_37148[(11)]);
var inst_37122 = eval(inst_37120);
var state_37148__$1 = state_37148;
var statearr_37171_37193 = state_37148__$1;
(statearr_37171_37193[(2)] = inst_37122);

(statearr_37171_37193[(1)] = (10));


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
});
return (function() {
var figwheel$client$file_reloading$state_machine__33491__auto__ = null;
var figwheel$client$file_reloading$state_machine__33491__auto____0 = (function (){
var statearr_37172 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37172[(0)] = figwheel$client$file_reloading$state_machine__33491__auto__);

(statearr_37172[(1)] = (1));

return statearr_37172;
});
var figwheel$client$file_reloading$state_machine__33491__auto____1 = (function (state_37148){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_37148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e37173){if((e37173 instanceof Object)){
var ex__33494__auto__ = e37173;
var statearr_37174_37194 = state_37148;
(statearr_37174_37194[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37195 = state_37148;
state_37148 = G__37195;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33491__auto__ = function(state_37148){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33491__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33491__auto____1.call(this,state_37148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33491__auto____0;
figwheel$client$file_reloading$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33491__auto____1;
return figwheel$client$file_reloading$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_37175 = f__33588__auto__.call(null);
(statearr_37175[(6)] = c__33587__auto__);

return statearr_37175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));

return c__33587__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37197 = arguments.length;
switch (G__37197) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37203,callback){
var map__37204 = p__37203;
var map__37204__$1 = cljs.core.__destructure_map.call(null,map__37204);
var file_msg = map__37204__$1;
var namespace = cljs.core.get.call(null,map__37204__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37209){
var map__37210 = p__37209;
var map__37210__$1 = cljs.core.__destructure_map.call(null,map__37210);
var file_msg = map__37210__$1;
var namespace = cljs.core.get.call(null,map__37210__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37215){
var map__37216 = p__37215;
var map__37216__$1 = cljs.core.__destructure_map.call(null,map__37216);
var file_msg = map__37216__$1;
var namespace = cljs.core.get.call(null,map__37216__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__5041__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__5041__auto__){
var or__5043__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__5041__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37221,callback){
var map__37222 = p__37221;
var map__37222__$1 = cljs.core.__destructure_map.call(null,map__37222);
var file_msg = map__37222__$1;
var request_url = cljs.core.get.call(null,map__37222__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33587__auto___37295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_37265){
var state_val_37266 = (state_37265[(1)]);
if((state_val_37266 === (1))){
var inst_37239 = cljs.core.seq.call(null,files);
var inst_37240 = cljs.core.first.call(null,inst_37239);
var inst_37241 = cljs.core.next.call(null,inst_37239);
var inst_37242 = files;
var state_37265__$1 = (function (){var statearr_37270 = state_37265;
(statearr_37270[(7)] = inst_37242);

(statearr_37270[(8)] = inst_37240);

(statearr_37270[(9)] = inst_37241);

return statearr_37270;
})();
var statearr_37271_37299 = state_37265__$1;
(statearr_37271_37299[(2)] = null);

(statearr_37271_37299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (2))){
var inst_37242 = (state_37265[(7)]);
var inst_37248 = (state_37265[(10)]);
var inst_37247 = cljs.core.seq.call(null,inst_37242);
var inst_37248__$1 = cljs.core.first.call(null,inst_37247);
var inst_37249 = cljs.core.next.call(null,inst_37247);
var inst_37250 = (inst_37248__$1 == null);
var inst_37251 = cljs.core.not.call(null,inst_37250);
var state_37265__$1 = (function (){var statearr_37272 = state_37265;
(statearr_37272[(11)] = inst_37249);

(statearr_37272[(10)] = inst_37248__$1);

return statearr_37272;
})();
if(inst_37251){
var statearr_37274_37302 = state_37265__$1;
(statearr_37274_37302[(1)] = (4));

} else {
var statearr_37275_37303 = state_37265__$1;
(statearr_37275_37303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (3))){
var inst_37263 = (state_37265[(2)]);
var state_37265__$1 = state_37265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37265__$1,inst_37263);
} else {
if((state_val_37266 === (4))){
var inst_37248 = (state_37265[(10)]);
var inst_37253 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37248);
var state_37265__$1 = state_37265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37265__$1,(7),inst_37253);
} else {
if((state_val_37266 === (5))){
var inst_37259 = cljs.core.async.close_BANG_.call(null,out);
var state_37265__$1 = state_37265;
var statearr_37276_37306 = state_37265__$1;
(statearr_37276_37306[(2)] = inst_37259);

(statearr_37276_37306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (6))){
var inst_37261 = (state_37265[(2)]);
var state_37265__$1 = state_37265;
var statearr_37277_37309 = state_37265__$1;
(statearr_37277_37309[(2)] = inst_37261);

(statearr_37277_37309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (7))){
var inst_37249 = (state_37265[(11)]);
var inst_37255 = (state_37265[(2)]);
var inst_37256 = cljs.core.async.put_BANG_.call(null,out,inst_37255);
var inst_37242 = inst_37249;
var state_37265__$1 = (function (){var statearr_37279 = state_37265;
(statearr_37279[(7)] = inst_37242);

(statearr_37279[(12)] = inst_37256);

return statearr_37279;
})();
var statearr_37282_37311 = state_37265__$1;
(statearr_37282_37311[(2)] = null);

(statearr_37282_37311[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto____0 = (function (){
var statearr_37285 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37285[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto__);

(statearr_37285[(1)] = (1));

return statearr_37285;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto____1 = (function (state_37265){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_37265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e37286){if((e37286 instanceof Object)){
var ex__33494__auto__ = e37286;
var statearr_37287_37312 = state_37265;
(statearr_37287_37312[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37313 = state_37265;
state_37265 = G__37313;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto__ = function(state_37265){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto____1.call(this,state_37265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_37293 = f__33588__auto__.call(null);
(statearr_37293[(6)] = c__33587__auto___37295);

return statearr_37293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37314,opts){
var map__37315 = p__37314;
var map__37315__$1 = cljs.core.__destructure_map.call(null,map__37315);
var eval_body = cljs.core.get.call(null,map__37315__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37315__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__5041__auto__ = eval_body;
if(cljs.core.truth_(and__5041__auto__)){
return typeof eval_body === 'string';
} else {
return and__5041__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37316){var e = e37316;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5802__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__37317_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37317_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5802__auto__)){
var file_msg = temp__5802__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
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
return cljs.core.map.call(null,(function (p__37318){
var vec__37319 = p__37318;
var k = cljs.core.nth.call(null,vec__37319,(0),null);
var v = cljs.core.nth.call(null,vec__37319,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37322){
var vec__37323 = p__37322;
var k = cljs.core.nth.call(null,vec__37323,(0),null);
var v = cljs.core.nth.call(null,vec__37323,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37329,p__37330){
var map__37331 = p__37329;
var map__37331__$1 = cljs.core.__destructure_map.call(null,map__37331);
var opts = map__37331__$1;
var before_jsload = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37332 = p__37330;
var map__37332__$1 = cljs.core.__destructure_map.call(null,map__37332);
var msg = map__37332__$1;
var files = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_37464){
var state_val_37465 = (state_37464[(1)]);
if((state_val_37465 === (7))){
var inst_37346 = (state_37464[(7)]);
var inst_37345 = (state_37464[(8)]);
var inst_37344 = (state_37464[(9)]);
var inst_37347 = (state_37464[(10)]);
var inst_37352 = cljs.core._nth.call(null,inst_37345,inst_37347);
var inst_37353 = figwheel.client.file_reloading.eval_body.call(null,inst_37352,opts);
var inst_37354 = (inst_37347 + (1));
var tmp37466 = inst_37346;
var tmp37467 = inst_37345;
var tmp37468 = inst_37344;
var inst_37344__$1 = tmp37468;
var inst_37345__$1 = tmp37467;
var inst_37346__$1 = tmp37466;
var inst_37347__$1 = inst_37354;
var state_37464__$1 = (function (){var statearr_37469 = state_37464;
(statearr_37469[(7)] = inst_37346__$1);

(statearr_37469[(8)] = inst_37345__$1);

(statearr_37469[(11)] = inst_37353);

(statearr_37469[(9)] = inst_37344__$1);

(statearr_37469[(10)] = inst_37347__$1);

return statearr_37469;
})();
var statearr_37470_37537 = state_37464__$1;
(statearr_37470_37537[(2)] = null);

(statearr_37470_37537[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (20))){
var inst_37387 = (state_37464[(12)]);
var inst_37395 = figwheel.client.file_reloading.sort_files.call(null,inst_37387);
var state_37464__$1 = state_37464;
var statearr_37471_37538 = state_37464__$1;
(statearr_37471_37538[(2)] = inst_37395);

(statearr_37471_37538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (27))){
var state_37464__$1 = state_37464;
var statearr_37472_37539 = state_37464__$1;
(statearr_37472_37539[(2)] = null);

(statearr_37472_37539[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (1))){
var inst_37336 = (state_37464[(13)]);
var inst_37333 = before_jsload.call(null,files);
var inst_37334 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37335 = (function (){return (function (p1__37326_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37326_SHARP_);
});
})();
var inst_37336__$1 = cljs.core.filter.call(null,inst_37335,files);
var inst_37337 = cljs.core.not_empty.call(null,inst_37336__$1);
var state_37464__$1 = (function (){var statearr_37473 = state_37464;
(statearr_37473[(14)] = inst_37334);

(statearr_37473[(13)] = inst_37336__$1);

(statearr_37473[(15)] = inst_37333);

return statearr_37473;
})();
if(cljs.core.truth_(inst_37337)){
var statearr_37474_37540 = state_37464__$1;
(statearr_37474_37540[(1)] = (2));

} else {
var statearr_37475_37541 = state_37464__$1;
(statearr_37475_37541[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (24))){
var state_37464__$1 = state_37464;
var statearr_37476_37542 = state_37464__$1;
(statearr_37476_37542[(2)] = null);

(statearr_37476_37542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (4))){
var inst_37381 = (state_37464[(2)]);
var inst_37382 = cljs.core.List.EMPTY;
var inst_37383 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37382);
var inst_37384 = (function (){return (function (p1__37327_SHARP_){
var and__5041__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37327_SHARP_);
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37327_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37327_SHARP_))));
} else {
return and__5041__auto__;
}
});
})();
var inst_37385 = cljs.core.filter.call(null,inst_37384,files);
var inst_37386 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37387 = cljs.core.concat.call(null,inst_37385,inst_37386);
var state_37464__$1 = (function (){var statearr_37477 = state_37464;
(statearr_37477[(16)] = inst_37381);

(statearr_37477[(17)] = inst_37383);

(statearr_37477[(12)] = inst_37387);

return statearr_37477;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37478_37543 = state_37464__$1;
(statearr_37478_37543[(1)] = (16));

} else {
var statearr_37479_37544 = state_37464__$1;
(statearr_37479_37544[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (15))){
var inst_37371 = (state_37464[(2)]);
var state_37464__$1 = state_37464;
var statearr_37480_37545 = state_37464__$1;
(statearr_37480_37545[(2)] = inst_37371);

(statearr_37480_37545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (21))){
var inst_37397 = (state_37464[(18)]);
var inst_37397__$1 = (state_37464[(2)]);
var inst_37398 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37397__$1);
var state_37464__$1 = (function (){var statearr_37481 = state_37464;
(statearr_37481[(18)] = inst_37397__$1);

return statearr_37481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37464__$1,(22),inst_37398);
} else {
if((state_val_37465 === (31))){
var inst_37462 = (state_37464[(2)]);
var state_37464__$1 = state_37464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37464__$1,inst_37462);
} else {
if((state_val_37465 === (32))){
var inst_37439 = (state_37464[(19)]);
var inst_37443 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37444 = cljs.core.map.call(null,inst_37443,inst_37439);
var inst_37445 = cljs.core.pr_str.call(null,inst_37444);
var inst_37446 = ["figwheel-no-load meta-data: ",inst_37445].join('');
var inst_37447 = figwheel.client.utils.log.call(null,inst_37446);
var state_37464__$1 = state_37464;
var statearr_37482_37546 = state_37464__$1;
(statearr_37482_37546[(2)] = inst_37447);

(statearr_37482_37546[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (33))){
var state_37464__$1 = state_37464;
var statearr_37483_37547 = state_37464__$1;
(statearr_37483_37547[(2)] = null);

(statearr_37483_37547[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (13))){
var inst_37357 = (state_37464[(20)]);
var inst_37361 = cljs.core.chunk_first.call(null,inst_37357);
var inst_37362 = cljs.core.chunk_rest.call(null,inst_37357);
var inst_37363 = cljs.core.count.call(null,inst_37361);
var inst_37344 = inst_37362;
var inst_37345 = inst_37361;
var inst_37346 = inst_37363;
var inst_37347 = (0);
var state_37464__$1 = (function (){var statearr_37484 = state_37464;
(statearr_37484[(7)] = inst_37346);

(statearr_37484[(8)] = inst_37345);

(statearr_37484[(9)] = inst_37344);

(statearr_37484[(10)] = inst_37347);

return statearr_37484;
})();
var statearr_37485_37548 = state_37464__$1;
(statearr_37485_37548[(2)] = null);

(statearr_37485_37548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (22))){
var inst_37397 = (state_37464[(18)]);
var inst_37401 = (state_37464[(21)]);
var inst_37405 = (state_37464[(22)]);
var inst_37400 = (state_37464[(23)]);
var inst_37400__$1 = (state_37464[(2)]);
var inst_37401__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37400__$1);
var inst_37402 = (function (){var all_files = inst_37397;
var res_SINGLEQUOTE_ = inst_37400__$1;
var res = inst_37401__$1;
return (function (p1__37328_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37328_SHARP_));
});
})();
var inst_37403 = cljs.core.filter.call(null,inst_37402,inst_37400__$1);
var inst_37404 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37405__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37404);
var inst_37406 = cljs.core.not_empty.call(null,inst_37405__$1);
var state_37464__$1 = (function (){var statearr_37486 = state_37464;
(statearr_37486[(21)] = inst_37401__$1);

(statearr_37486[(22)] = inst_37405__$1);

(statearr_37486[(23)] = inst_37400__$1);

(statearr_37486[(24)] = inst_37403);

return statearr_37486;
})();
if(cljs.core.truth_(inst_37406)){
var statearr_37487_37549 = state_37464__$1;
(statearr_37487_37549[(1)] = (23));

} else {
var statearr_37488_37550 = state_37464__$1;
(statearr_37488_37550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (36))){
var state_37464__$1 = state_37464;
var statearr_37489_37551 = state_37464__$1;
(statearr_37489_37551[(2)] = null);

(statearr_37489_37551[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (29))){
var inst_37397 = (state_37464[(18)]);
var inst_37401 = (state_37464[(21)]);
var inst_37405 = (state_37464[(22)]);
var inst_37439 = (state_37464[(19)]);
var inst_37400 = (state_37464[(23)]);
var inst_37403 = (state_37464[(24)]);
var inst_37433 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37436 = (function (){var all_files = inst_37397;
var res_SINGLEQUOTE_ = inst_37400;
var res = inst_37401;
var files_not_loaded = inst_37403;
var dependencies_that_loaded = inst_37405;
return (function (p__37435){
var map__37490 = p__37435;
var map__37490__$1 = cljs.core.__destructure_map.call(null,map__37490);
var namespace = cljs.core.get.call(null,map__37490__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
})();
var inst_37437 = cljs.core.group_by.call(null,inst_37436,inst_37403);
var inst_37438 = cljs.core.__destructure_map.call(null,inst_37437);
var inst_37439__$1 = cljs.core.get.call(null,inst_37438,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37440 = cljs.core.get.call(null,inst_37438,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37441 = cljs.core.not_empty.call(null,inst_37439__$1);
var state_37464__$1 = (function (){var statearr_37491 = state_37464;
(statearr_37491[(25)] = inst_37440);

(statearr_37491[(19)] = inst_37439__$1);

(statearr_37491[(26)] = inst_37433);

return statearr_37491;
})();
if(cljs.core.truth_(inst_37441)){
var statearr_37492_37552 = state_37464__$1;
(statearr_37492_37552[(1)] = (32));

} else {
var statearr_37493_37553 = state_37464__$1;
(statearr_37493_37553[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (6))){
var inst_37378 = (state_37464[(2)]);
var state_37464__$1 = state_37464;
var statearr_37494_37554 = state_37464__$1;
(statearr_37494_37554[(2)] = inst_37378);

(statearr_37494_37554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (28))){
var inst_37403 = (state_37464[(24)]);
var inst_37430 = (state_37464[(2)]);
var inst_37431 = cljs.core.not_empty.call(null,inst_37403);
var state_37464__$1 = (function (){var statearr_37495 = state_37464;
(statearr_37495[(27)] = inst_37430);

return statearr_37495;
})();
if(cljs.core.truth_(inst_37431)){
var statearr_37496_37555 = state_37464__$1;
(statearr_37496_37555[(1)] = (29));

} else {
var statearr_37497_37556 = state_37464__$1;
(statearr_37497_37556[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (25))){
var inst_37401 = (state_37464[(21)]);
var inst_37417 = (state_37464[(2)]);
var inst_37418 = cljs.core.not_empty.call(null,inst_37401);
var state_37464__$1 = (function (){var statearr_37498 = state_37464;
(statearr_37498[(28)] = inst_37417);

return statearr_37498;
})();
if(cljs.core.truth_(inst_37418)){
var statearr_37499_37557 = state_37464__$1;
(statearr_37499_37557[(1)] = (26));

} else {
var statearr_37500_37558 = state_37464__$1;
(statearr_37500_37558[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (34))){
var inst_37440 = (state_37464[(25)]);
var inst_37450 = (state_37464[(2)]);
var inst_37451 = cljs.core.not_empty.call(null,inst_37440);
var state_37464__$1 = (function (){var statearr_37501 = state_37464;
(statearr_37501[(29)] = inst_37450);

return statearr_37501;
})();
if(cljs.core.truth_(inst_37451)){
var statearr_37502_37559 = state_37464__$1;
(statearr_37502_37559[(1)] = (35));

} else {
var statearr_37503_37560 = state_37464__$1;
(statearr_37503_37560[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (17))){
var state_37464__$1 = state_37464;
var statearr_37504_37561 = state_37464__$1;
(statearr_37504_37561[(2)] = recompile_dependents);

(statearr_37504_37561[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (3))){
var state_37464__$1 = state_37464;
var statearr_37505_37562 = state_37464__$1;
(statearr_37505_37562[(2)] = null);

(statearr_37505_37562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (12))){
var inst_37374 = (state_37464[(2)]);
var state_37464__$1 = state_37464;
var statearr_37506_37563 = state_37464__$1;
(statearr_37506_37563[(2)] = inst_37374);

(statearr_37506_37563[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (2))){
var inst_37336 = (state_37464[(13)]);
var inst_37343 = cljs.core.seq.call(null,inst_37336);
var inst_37344 = inst_37343;
var inst_37345 = null;
var inst_37346 = (0);
var inst_37347 = (0);
var state_37464__$1 = (function (){var statearr_37507 = state_37464;
(statearr_37507[(7)] = inst_37346);

(statearr_37507[(8)] = inst_37345);

(statearr_37507[(9)] = inst_37344);

(statearr_37507[(10)] = inst_37347);

return statearr_37507;
})();
var statearr_37508_37564 = state_37464__$1;
(statearr_37508_37564[(2)] = null);

(statearr_37508_37564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (23))){
var inst_37397 = (state_37464[(18)]);
var inst_37401 = (state_37464[(21)]);
var inst_37405 = (state_37464[(22)]);
var inst_37400 = (state_37464[(23)]);
var inst_37403 = (state_37464[(24)]);
var inst_37408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37410 = (function (){var all_files = inst_37397;
var res_SINGLEQUOTE_ = inst_37400;
var res = inst_37401;
var files_not_loaded = inst_37403;
var dependencies_that_loaded = inst_37405;
return (function (p__37409){
var map__37509 = p__37409;
var map__37509__$1 = cljs.core.__destructure_map.call(null,map__37509);
var request_url = cljs.core.get.call(null,map__37509__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_37411 = cljs.core.reverse.call(null,inst_37405);
var inst_37412 = cljs.core.map.call(null,inst_37410,inst_37411);
var inst_37413 = cljs.core.pr_str.call(null,inst_37412);
var inst_37414 = figwheel.client.utils.log.call(null,inst_37413);
var state_37464__$1 = (function (){var statearr_37510 = state_37464;
(statearr_37510[(30)] = inst_37408);

return statearr_37510;
})();
var statearr_37511_37565 = state_37464__$1;
(statearr_37511_37565[(2)] = inst_37414);

(statearr_37511_37565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (35))){
var inst_37440 = (state_37464[(25)]);
var inst_37453 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37440);
var inst_37454 = cljs.core.pr_str.call(null,inst_37453);
var inst_37455 = ["not required: ",inst_37454].join('');
var inst_37456 = figwheel.client.utils.log.call(null,inst_37455);
var state_37464__$1 = state_37464;
var statearr_37512_37566 = state_37464__$1;
(statearr_37512_37566[(2)] = inst_37456);

(statearr_37512_37566[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (19))){
var inst_37387 = (state_37464[(12)]);
var inst_37393 = figwheel.client.file_reloading.expand_files.call(null,inst_37387);
var state_37464__$1 = state_37464;
var statearr_37513_37567 = state_37464__$1;
(statearr_37513_37567[(2)] = inst_37393);

(statearr_37513_37567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (11))){
var state_37464__$1 = state_37464;
var statearr_37514_37568 = state_37464__$1;
(statearr_37514_37568[(2)] = null);

(statearr_37514_37568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (9))){
var inst_37376 = (state_37464[(2)]);
var state_37464__$1 = state_37464;
var statearr_37515_37569 = state_37464__$1;
(statearr_37515_37569[(2)] = inst_37376);

(statearr_37515_37569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (5))){
var inst_37346 = (state_37464[(7)]);
var inst_37347 = (state_37464[(10)]);
var inst_37349 = (inst_37347 < inst_37346);
var inst_37350 = inst_37349;
var state_37464__$1 = state_37464;
if(cljs.core.truth_(inst_37350)){
var statearr_37516_37570 = state_37464__$1;
(statearr_37516_37570[(1)] = (7));

} else {
var statearr_37517_37571 = state_37464__$1;
(statearr_37517_37571[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (14))){
var inst_37357 = (state_37464[(20)]);
var inst_37366 = cljs.core.first.call(null,inst_37357);
var inst_37367 = figwheel.client.file_reloading.eval_body.call(null,inst_37366,opts);
var inst_37368 = cljs.core.next.call(null,inst_37357);
var inst_37344 = inst_37368;
var inst_37345 = null;
var inst_37346 = (0);
var inst_37347 = (0);
var state_37464__$1 = (function (){var statearr_37518 = state_37464;
(statearr_37518[(31)] = inst_37367);

(statearr_37518[(7)] = inst_37346);

(statearr_37518[(8)] = inst_37345);

(statearr_37518[(9)] = inst_37344);

(statearr_37518[(10)] = inst_37347);

return statearr_37518;
})();
var statearr_37519_37572 = state_37464__$1;
(statearr_37519_37572[(2)] = null);

(statearr_37519_37572[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (26))){
var inst_37397 = (state_37464[(18)]);
var inst_37401 = (state_37464[(21)]);
var inst_37405 = (state_37464[(22)]);
var inst_37400 = (state_37464[(23)]);
var inst_37403 = (state_37464[(24)]);
var inst_37420 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37422 = (function (){var all_files = inst_37397;
var res_SINGLEQUOTE_ = inst_37400;
var res = inst_37401;
var files_not_loaded = inst_37403;
var dependencies_that_loaded = inst_37405;
return (function (p__37421){
var map__37520 = p__37421;
var map__37520__$1 = cljs.core.__destructure_map.call(null,map__37520);
var namespace = cljs.core.get.call(null,map__37520__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_37423 = cljs.core.map.call(null,inst_37422,inst_37401);
var inst_37424 = cljs.core.pr_str.call(null,inst_37423);
var inst_37425 = figwheel.client.utils.log.call(null,inst_37424);
var inst_37426 = (function (){var all_files = inst_37397;
var res_SINGLEQUOTE_ = inst_37400;
var res = inst_37401;
var files_not_loaded = inst_37403;
var dependencies_that_loaded = inst_37405;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_37427 = setTimeout(inst_37426,(10));
var state_37464__$1 = (function (){var statearr_37521 = state_37464;
(statearr_37521[(32)] = inst_37420);

(statearr_37521[(33)] = inst_37425);

return statearr_37521;
})();
var statearr_37522_37573 = state_37464__$1;
(statearr_37522_37573[(2)] = inst_37427);

(statearr_37522_37573[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (16))){
var state_37464__$1 = state_37464;
var statearr_37523_37574 = state_37464__$1;
(statearr_37523_37574[(2)] = reload_dependents);

(statearr_37523_37574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (30))){
var state_37464__$1 = state_37464;
var statearr_37524_37575 = state_37464__$1;
(statearr_37524_37575[(2)] = null);

(statearr_37524_37575[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (10))){
var inst_37357 = (state_37464[(20)]);
var inst_37359 = cljs.core.chunked_seq_QMARK_.call(null,inst_37357);
var state_37464__$1 = state_37464;
if(inst_37359){
var statearr_37525_37576 = state_37464__$1;
(statearr_37525_37576[(1)] = (13));

} else {
var statearr_37526_37577 = state_37464__$1;
(statearr_37526_37577[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (18))){
var inst_37391 = (state_37464[(2)]);
var state_37464__$1 = state_37464;
if(cljs.core.truth_(inst_37391)){
var statearr_37527_37578 = state_37464__$1;
(statearr_37527_37578[(1)] = (19));

} else {
var statearr_37528_37579 = state_37464__$1;
(statearr_37528_37579[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (37))){
var inst_37459 = (state_37464[(2)]);
var state_37464__$1 = state_37464;
var statearr_37529_37580 = state_37464__$1;
(statearr_37529_37580[(2)] = inst_37459);

(statearr_37529_37580[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (8))){
var inst_37357 = (state_37464[(20)]);
var inst_37344 = (state_37464[(9)]);
var inst_37357__$1 = cljs.core.seq.call(null,inst_37344);
var state_37464__$1 = (function (){var statearr_37530 = state_37464;
(statearr_37530[(20)] = inst_37357__$1);

return statearr_37530;
})();
if(inst_37357__$1){
var statearr_37531_37581 = state_37464__$1;
(statearr_37531_37581[(1)] = (10));

} else {
var statearr_37532_37582 = state_37464__$1;
(statearr_37532_37582[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto____0 = (function (){
var statearr_37533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37533[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto__);

(statearr_37533[(1)] = (1));

return statearr_37533;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto____1 = (function (state_37464){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_37464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e37534){if((e37534 instanceof Object)){
var ex__33494__auto__ = e37534;
var statearr_37535_37583 = state_37464;
(statearr_37535_37583[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37584 = state_37464;
state_37464 = G__37584;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto__ = function(state_37464){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto____1.call(this,state_37464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_37536 = f__33588__auto__.call(null);
(statearr_37536[(6)] = c__33587__auto__);

return statearr_37536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));

return c__33587__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37587,link){
var map__37588 = p__37587;
var map__37588__$1 = cljs.core.__destructure_map.call(null,map__37588);
var file = cljs.core.get.call(null,map__37588__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5804__auto__ = link.href;
if(cljs.core.truth_(temp__5804__auto__)){
var link_href = temp__5804__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__37585_SHARP_,p2__37586_SHARP_){
if(cljs.core._EQ_.call(null,p1__37585_SHARP_,p2__37586_SHARP_)){
return p1__37585_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5804__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37590){
var map__37591 = p__37590;
var map__37591__$1 = cljs.core.__destructure_map.call(null,map__37591);
var match_length = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37589_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37589_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5804__auto__)){
var res = temp__5804__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37592_SHARP_,p2__37593_SHARP_){
return cljs.core.assoc.call(null,p1__37592_SHARP_,cljs.core.get.call(null,p2__37593_SHARP_,key),p2__37593_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5802__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5802__auto__)){
var link = temp__5802__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37594 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37594);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37594);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37595,p__37596){
var map__37597 = p__37595;
var map__37597__$1 = cljs.core.__destructure_map.call(null,map__37597);
var on_cssload = cljs.core.get.call(null,map__37597__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37598 = p__37596;
var map__37598__$1 = cljs.core.__destructure_map.call(null,map__37598);
var files_msg = map__37598__$1;
var files = cljs.core.get.call(null,map__37598__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5804__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5804__auto__)){
var f_datas = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1672362825313
