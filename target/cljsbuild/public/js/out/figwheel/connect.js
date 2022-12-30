// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39256__delegate = function (x__39240__auto__){
if(cljs.core.truth_(password_manager_comparison.core.mount_root)){
return cljs.core.apply.call(null,password_manager_comparison.core.mount_root,x__39240__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","password-manager-comparison.core/mount-root","' is missing"].join(''));
}
};
var G__39256 = function (var_args){
var x__39240__auto__ = null;
if (arguments.length > 0) {
var G__39257__i = 0, G__39257__a = new Array(arguments.length -  0);
while (G__39257__i < G__39257__a.length) {G__39257__a[G__39257__i] = arguments[G__39257__i + 0]; ++G__39257__i;}
  x__39240__auto__ = new cljs.core.IndexedSeq(G__39257__a,0,null);
} 
return G__39256__delegate.call(this,x__39240__auto__);};
G__39256.cljs$lang$maxFixedArity = 0;
G__39256.cljs$lang$applyTo = (function (arglist__39258){
var x__39240__auto__ = cljs.core.seq(arglist__39258);
return G__39256__delegate(x__39240__auto__);
});
G__39256.cljs$core$IFn$_invoke$arity$variadic = G__39256__delegate;
return G__39256;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1672362826976
