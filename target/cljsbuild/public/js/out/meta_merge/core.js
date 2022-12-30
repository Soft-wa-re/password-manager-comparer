// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('meta_merge.core');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Returns the metadata of an object, or nil if the object cannot hold
 *   metadata.
 */
meta_merge.core.meta_STAR_ = (function meta_merge$core$meta_STAR_(obj){
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IMeta$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,obj))){
return cljs.core.meta.call(null,obj);
} else {
return null;
}
});
/**
 * Returns an object of the same type and value as obj, with map m as its
 *   metadata if the object can hold metadata.
 */
meta_merge.core.with_meta_STAR_ = (function meta_merge$core$with_meta_STAR_(obj,m){
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj))){
return cljs.core.with_meta.call(null,obj,m);
} else {
return obj;
}
});
/**
 * Returns true if the object is marked as displaceable
 */
meta_merge.core.displace_QMARK_ = (function meta_merge$core$displace_QMARK_(obj){
return new cljs.core.Keyword(null,"displace","displace",-1153355602).cljs$core$IFn$_invoke$arity$1(meta_merge.core.meta_STAR_.call(null,obj));
});
/**
 * Returns true if the object is marked as replaceable
 */
meta_merge.core.replace_QMARK_ = (function meta_merge$core$replace_QMARK_(obj){
return new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(meta_merge.core.meta_STAR_.call(null,obj));
});
/**
 * Returns true if the object is marked as top-displaceable
 */
meta_merge.core.top_displace_QMARK_ = (function meta_merge$core$top_displace_QMARK_(obj){
return new cljs.core.Keyword(null,"top-displace","top-displace",-2094589019).cljs$core$IFn$_invoke$arity$1(meta_merge.core.meta_STAR_.call(null,obj));
});
/**
 * Returns true if either left has a higher priority than right or vice versa.
 */
meta_merge.core.different_priority_QMARK_ = (function meta_merge$core$different_priority_QMARK_(left,right){
return cljs.core.boolean$.call(null,(function (){var or__5043__auto__ = cljs.core.some.call(null,cljs.core.some_fn.call(null,cljs.core.nil_QMARK_,meta_merge.core.displace_QMARK_,meta_merge.core.replace_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return meta_merge.core.top_displace_QMARK_.call(null,left);
}
})());
});
meta_merge.core.remove_top_displace = (function meta_merge$core$remove_top_displace(obj){
if(cljs.core.not.call(null,meta_merge.core.top_displace_QMARK_.call(null,obj))){
return obj;
} else {
return cljs.core.vary_meta.call(null,obj,cljs.core.dissoc,new cljs.core.Keyword(null,"top-displace","top-displace",-2094589019));
}
});
/**
 * Picks the highest prioritized element of left and right and merge their
 *   metadata.
 */
meta_merge.core.pick_prioritized = (function meta_merge$core$pick_prioritized(left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return meta_merge.core.remove_top_displace.call(null,left);
} else {
if(cljs.core.truth_(meta_merge.core.top_displace_QMARK_.call(null,left))){
return right;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = meta_merge.core.displace_QMARK_.call(null,left);
if(cljs.core.truth_(and__5041__auto__)){
return meta_merge.core.displace_QMARK_.call(null,right);
} else {
return and__5041__auto__;
}
})())){
return meta_merge.core.with_meta_STAR_.call(null,right,cljs.core.merge.call(null,meta_merge.core.meta_STAR_.call(null,left),meta_merge.core.meta_STAR_.call(null,right)));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = meta_merge.core.replace_QMARK_.call(null,left);
if(cljs.core.truth_(and__5041__auto__)){
return meta_merge.core.replace_QMARK_.call(null,right);
} else {
return and__5041__auto__;
}
})())){
return meta_merge.core.with_meta_STAR_.call(null,right,cljs.core.merge.call(null,meta_merge.core.meta_STAR_.call(null,left),meta_merge.core.meta_STAR_.call(null,right)));
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = meta_merge.core.displace_QMARK_.call(null,left);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return meta_merge.core.replace_QMARK_.call(null,right);
}
})())){
return meta_merge.core.with_meta_STAR_.call(null,right,cljs.core.merge.call(null,cljs.core.dissoc.call(null,meta_merge.core.meta_STAR_.call(null,left),new cljs.core.Keyword(null,"displace","displace",-1153355602)),cljs.core.dissoc.call(null,meta_merge.core.meta_STAR_.call(null,right),new cljs.core.Keyword(null,"replace","replace",-786587770))));
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = meta_merge.core.replace_QMARK_.call(null,left);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return meta_merge.core.displace_QMARK_.call(null,right);
}
})())){
return meta_merge.core.with_meta_STAR_.call(null,left,cljs.core.merge.call(null,cljs.core.dissoc.call(null,meta_merge.core.meta_STAR_.call(null,right),new cljs.core.Keyword(null,"displace","displace",-1153355602)),cljs.core.dissoc.call(null,meta_merge.core.meta_STAR_.call(null,left),new cljs.core.Keyword(null,"replace","replace",-786587770))));
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
/**
 * Recursively merge values based on the information in their metadata.
 */
meta_merge.core.meta_merge = (function meta_merge$core$meta_merge(var_args){
var G__29000 = arguments.length;
switch (G__29000) {
case 0:
return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___29002 = arguments.length;
var i__5767__auto___29003 = (0);
while(true){
if((i__5767__auto___29003 < len__5766__auto___29002)){
args_arr__5791__auto__.push((arguments[i__5767__auto___29003]));

var G__29004 = (i__5767__auto___29003 + (1));
i__5767__auto___29003 = G__29004;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentArrayMap.EMPTY;
}));

(meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$1 = (function (left){
return left;
}));

(meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if(meta_merge.core.different_priority_QMARK_.call(null,left,right)){
return meta_merge.core.pick_prioritized.call(null,left,right);
} else {
if(((cljs.core.map_QMARK_.call(null,left)) && (cljs.core.map_QMARK_.call(null,right)))){
return cljs.core.merge_with.call(null,meta_merge.core.meta_merge,left,right);
} else {
if(((cljs.core.set_QMARK_.call(null,left)) && (cljs.core.set_QMARK_.call(null,right)))){
return clojure.set.union.call(null,right,left);
} else {
if(((cljs.core.coll_QMARK_.call(null,left)) && (cljs.core.coll_QMARK_.call(null,right)))){
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"prepend","prepend",342616040).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,left));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"prepend","prepend",342616040).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,right));
}
})())){
return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,left),cljs.core.concat.call(null,right,left)),cljs.core.merge.call(null,cljs.core.meta.call(null,left),cljs.core.select_keys.call(null,cljs.core.meta.call(null,right),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"displace","displace",-1153355602)], null))));
} else {
return cljs.core.into.call(null,cljs.core.empty.call(null,left),cljs.core.concat.call(null,left,right));
}
} else {
return right;

}
}
}
}
}));

(meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$variadic = (function (left,right,more){
return cljs.core.reduce.call(null,meta_merge.core.meta_merge,left,cljs.core.cons.call(null,right,more));
}));

/** @this {Function} */
(meta_merge.core.meta_merge.cljs$lang$applyTo = (function (seq28997){
var G__28998 = cljs.core.first.call(null,seq28997);
var seq28997__$1 = cljs.core.next.call(null,seq28997);
var G__28999 = cljs.core.first.call(null,seq28997__$1);
var seq28997__$2 = cljs.core.next.call(null,seq28997__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28998,G__28999,seq28997__$2);
}));

(meta_merge.core.meta_merge.cljs$lang$maxFixedArity = (2));


//# sourceMappingURL=core.js.map?rel=1672362814604
