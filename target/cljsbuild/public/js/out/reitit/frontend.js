// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('reitit.frontend');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reitit.coercion');
goog.require('reitit.core');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
reitit.frontend.query_param = (function reitit$frontend$query_param(q,k){
var vs = q.getValues(k);
if((vs.length < (2))){
return (vs[(0)]);
} else {
return cljs.core.vec.call(null,vs);
}
});
/**
 * Given goog.Uri, read query parameters into Clojure map.
 */
reitit.frontend.query_params = (function reitit$frontend$query_params(uri){
var q = uri.getQueryData();
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.keyword,(function (p1__36178_SHARP_){
return reitit.frontend.query_param.call(null,q,p1__36178_SHARP_);
})),q.getKeys()));
});
/**
 * Given routing tree and current path, return match with possibly
 *   coerced parameters. Return nil if no match found.
 * 
 *   :on-coercion-error - a sideeffecting fn of `match exception -> nil`
 */
reitit.frontend.match_by_path = (function reitit$frontend$match_by_path(var_args){
var G__36180 = arguments.length;
switch (G__36180) {
case 2:
return reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2 = (function (router,path){
return reitit.frontend.match_by_path.call(null,router,path,null);
}));

(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$3 = (function (router,path,p__36181){
var map__36182 = p__36181;
var map__36182__$1 = cljs.core.__destructure_map.call(null,map__36182);
var on_coercion_error = cljs.core.get.call(null,map__36182__$1,new cljs.core.Keyword(null,"on-coercion-error","on-coercion-error",-970787));
var uri = goog.Uri.parse(path);
var coerce_BANG_ = (cljs.core.truth_(on_coercion_error)?(function (match){
try{return reitit.coercion.coerce_BANG_.call(null,match);
}catch (e36183){if((e36183 instanceof Error)){
var e = e36183;
on_coercion_error.call(null,match,e);

throw e;
} else {
throw e36183;

}
}}):reitit.coercion.coerce_BANG_);
var temp__5802__auto__ = reitit.core.match_by_path.call(null,router,uri.getPath());
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
var q = reitit.frontend.query_params.call(null,uri);
var match__$1 = cljs.core.assoc.call(null,match,new cljs.core.Keyword(null,"query-params","query-params",900640534),q);
var parameters = (function (){var or__5043__auto__ = coerce_BANG_.call(null,match__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match__$1),new cljs.core.Keyword(null,"query","query",-1288509510),q], null);
}
})();
return cljs.core.assoc.call(null,match__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),parameters);
} else {
return null;
}
}));

(reitit.frontend.match_by_path.cljs$lang$maxFixedArity = 3);

/**
 * Given a router, route name and optionally path-parameters,
 *   will return a Match (exact match), PartialMatch (missing path-parameters)
 *   or `nil` (no match).
 */
reitit.frontend.match_by_name = (function reitit$frontend$match_by_name(var_args){
var G__36186 = arguments.length;
switch (G__36186) {
case 2:
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (router,name){
return reitit.frontend.match_by_name.call(null,router,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (router,name,path_params){
return reitit.core.match_by_name.call(null,router,name,path_params);
}));

(reitit.frontend.match_by_name.cljs$lang$maxFixedArity = 3);

/**
 * Create a `reitit.core.router` from raw route data and optionally an options map.
 *   Enables request coercion. See [[reitit.core/router]] for details on options.
 */
reitit.frontend.router = (function reitit$frontend$router(var_args){
var G__36189 = arguments.length;
switch (G__36189) {
case 1:
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.frontend.router.call(null,raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
return reitit.core.router.call(null,raw_routes,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),reitit.coercion.compile_request_coercers], null),opts));
}));

(reitit.frontend.router.cljs$lang$maxFixedArity = 2);

/**
 * Logs problems using console.warn
 */
reitit.frontend.match_by_name_BANG_ = (function reitit$frontend$match_by_name_BANG_(var_args){
var G__36193 = arguments.length;
switch (G__36193) {
case 2:
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,name){
return reitit.frontend.match_by_name_BANG_.call(null,router,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,name,path_params){
var temp__5802__auto__ = reitit.frontend.match_by_name.call(null,router,name,path_params);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
if(reitit.core.partial_match_QMARK_.call(null,match)){
if(cljs.core.every_QMARK_.call(null,(function (p1__36191_SHARP_){
return cljs.core.contains_QMARK_.call(null,path_params,p1__36191_SHARP_);
}),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match))){
return match;
} else {
var defined = cljs.core.set.call(null,cljs.core.keys.call(null,path_params));
var missing = clojure.set.difference.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),defined);
console.warn("missing path-params for route",name,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"missing","missing",362507769),missing,new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match)], null));

return null;
}
} else {
return match;
}
} else {
console.warn("missing route",name);

return null;
}
}));

(reitit.frontend.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=frontend.js.map?rel=1672362823020
