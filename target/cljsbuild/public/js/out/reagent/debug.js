// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__32054__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32055__i = 0, G__32055__a = new Array(arguments.length -  0);
while (G__32055__i < G__32055__a.length) {G__32055__a[G__32055__i] = arguments[G__32055__i + 0]; ++G__32055__i;}
  args = new cljs.core.IndexedSeq(G__32055__a,0,null);
} 
return G__32054__delegate.call(this,args);};
G__32054.cljs$lang$maxFixedArity = 0;
G__32054.cljs$lang$applyTo = (function (arglist__32056){
var args = cljs.core.seq(arglist__32056);
return G__32054__delegate(args);
});
G__32054.cljs$core$IFn$_invoke$arity$variadic = G__32054__delegate;
return G__32054;
})()
);

(o.error = (function() { 
var G__32057__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32058__i = 0, G__32058__a = new Array(arguments.length -  0);
while (G__32058__i < G__32058__a.length) {G__32058__a[G__32058__i] = arguments[G__32058__i + 0]; ++G__32058__i;}
  args = new cljs.core.IndexedSeq(G__32058__a,0,null);
} 
return G__32057__delegate.call(this,args);};
G__32057.cljs$lang$maxFixedArity = 0;
G__32057.cljs$lang$applyTo = (function (arglist__32059){
var args = cljs.core.seq(arglist__32059);
return G__32057__delegate(args);
});
G__32057.cljs$core$IFn$_invoke$arity$variadic = G__32057__delegate;
return G__32057;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1672362819788
