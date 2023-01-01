// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('password_manager_comparison.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.dom.server');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
password_manager_comparison.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
password_manager_comparison.core.path_for = (function password_manager_comparison$core$path_for(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39885 = arguments.length;
var i__5767__auto___39886 = (0);
while(true){
if((i__5767__auto___39886 < len__5766__auto___39885)){
args__5772__auto__.push((arguments[i__5767__auto___39886]));

var G__39887 = (i__5767__auto___39886 + (1));
i__5767__auto___39886 = G__39887;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return password_manager_comparison.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(password_manager_comparison.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__39881){
var vec__39882 = p__39881;
var params = cljs.core.nth.call(null,vec__39882,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,password_manager_comparison.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,password_manager_comparison.core.router,route));
}
}));

(password_manager_comparison.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(password_manager_comparison.core.path_for.cljs$lang$applyTo = (function (seq39879){
var G__39880 = cljs.core.first.call(null,seq39879);
var seq39879__$1 = cljs.core.next.call(null,seq39879);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39880,seq39879__$1);
}));

password_manager_comparison.core.home_page = (function password_manager_comparison$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to password-manager-comparison"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),password_manager_comparison.core.path_for.call(null,new cljs.core.Keyword(null,"items","items",1031954938))], null),"Items of password-manager-comparison"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/broken/link"], null),"Broken link"], null)], null)], null)], null);
});
});
password_manager_comparison.core.items_page = (function password_manager_comparison$core$items_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The items of password-manager-comparison"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),password_manager_comparison.core.path_for.call(null,new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null))], null),"Item: ",item_id], null)], null);
}),cljs.core.range.call(null,(1),(60)))], null)], null);
});
});
password_manager_comparison.core.formatValue = (function password_manager_comparison$core$formatValue(v){
return reagent.dom.server.render_to_string.call(null,((typeof v === 'number')?v:(function (){var G__39888 = v;
switch (G__39888) {
case "yes":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"badge bg-success"], null),v], null);

break;
case "poor":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"badge bg-warning"], null),v], null);

break;
case "no":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"badge bg-danger"], null),v], null);

break;
case "unknown":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"badge bg-info"], null),v], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"badge bg-dark"], null),v], null);

}
})()));
});
goog.exportSymbol('password_manager_comparison.core.formatValue', password_manager_comparison.core.formatValue);
password_manager_comparison.core.formatNotes = (function password_manager_comparison$core$formatNotes(v){
return reagent.dom.server.render_to_string.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),v], null));
});
goog.exportSymbol('password_manager_comparison.core.formatNotes', password_manager_comparison.core.formatNotes);
password_manager_comparison.core.makeHeader = (function password_manager_comparison$core$makeHeader(firstHeading,compareesHeaders){
return reagent.dom.server.render_to_string.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),firstHeading], null),cljs.core.map.call(null,(function (h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),h], null);
}),compareesHeaders)], null));
});
goog.exportSymbol('password_manager_comparison.core.makeHeader', password_manager_comparison.core.makeHeader);
password_manager_comparison.core.item_page = (function password_manager_comparison$core$item_page(){
return (function (){
var routing_data = reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309));
var item = cljs.core.get_in.call(null,routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)," of password-manager-comparison"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),password_manager_comparison.core.path_for.call(null,new cljs.core.Keyword(null,"items","items",1031954938))], null),"Back to the list of items"], null)], null)], null);
});
});
password_manager_comparison.core.about_page = (function password_manager_comparison$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About password-manager-comparison"], null)], null);
});
});
password_manager_comparison.core.change_table = (function password_manager_comparison$core$change_table(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),window.formatTable()], null)], null)], null);
});
});
(window.onload = (function (){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [password_manager_comparison.core.change_table], null),document.getElementById("app"));
}));
password_manager_comparison.core.page_for = (function password_manager_comparison$core$page_for(route){
var G__39890 = route;
var G__39890__$1 = (((G__39890 instanceof cljs.core.Keyword))?G__39890.fqn:null);
switch (G__39890__$1) {
case "index":
return new cljs.core.Var(function(){return password_manager_comparison.core.home_page;},new cljs.core.Symbol("password-manager-comparison.core","home-page","password-manager-comparison.core/home-page",1273734267,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"password-manager-comparison.core","password-manager-comparison.core",-804507379,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src\\cljs\\password_manager_comparison\\core.cljs",16,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(password_manager_comparison.core.home_page)?password_manager_comparison.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return password_manager_comparison.core.about_page;},new cljs.core.Symbol("password-manager-comparison.core","about-page","password-manager-comparison.core/about-page",-10586049,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"password-manager-comparison.core","password-manager-comparison.core",-804507379,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src\\cljs\\password_manager_comparison\\core.cljs",17,1,80,80,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(password_manager_comparison.core.about_page)?password_manager_comparison.core.about_page.cljs$lang$test:null)]));

break;
case "items":
return new cljs.core.Var(function(){return password_manager_comparison.core.items_page;},new cljs.core.Symbol("password-manager-comparison.core","items-page","password-manager-comparison.core/items-page",771086580,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"password-manager-comparison.core","password-manager-comparison.core",-804507379,null),new cljs.core.Symbol(null,"items-page","items-page",-1402798074,null),"src\\cljs\\password_manager_comparison\\core.cljs",17,1,38,38,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(password_manager_comparison.core.items_page)?password_manager_comparison.core.items_page.cljs$lang$test:null)]));

break;
case "item":
return new cljs.core.Var(function(){return password_manager_comparison.core.item_page;},new cljs.core.Symbol("password-manager-comparison.core","item-page","password-manager-comparison.core/item-page",-808081246,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"password-manager-comparison.core","password-manager-comparison.core",-804507379,null),new cljs.core.Symbol(null,"item-page","item-page",1282130364,null),"src\\cljs\\password_manager_comparison\\core.cljs",16,1,71,71,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(password_manager_comparison.core.item_page)?password_manager_comparison.core.item_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39890__$1)].join('')));

}
});
password_manager_comparison.core.current_page = (function password_manager_comparison$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),password_manager_comparison.core.path_for.call(null,new cljs.core.Keyword(null,"index","index",-1531685915))], null),"Home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),password_manager_comparison.core.path_for.call(null,new cljs.core.Keyword(null,"about","about",1423892543))], null),"About password-manager-comparison"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"password-manager-comparison was generated by the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/reagent-project/reagent-template"], null),"Reagent Template"], null),"."], null)], null)], null);
});
});
password_manager_comparison.core.mount_root = (function password_manager_comparison$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [password_manager_comparison.core.current_page], null),document.getElementById("app"));
});
password_manager_comparison.core.init_BANG_ = (function password_manager_comparison$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.call(null,password_manager_comparison.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),password_manager_comparison.core.page_for.call(null,current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,reitit.frontend.match_by_path.call(null,password_manager_comparison.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return password_manager_comparison.core.mount_root.call(null);
});
password_manager_comparison.core.reload_BANG_ = (function password_manager_comparison$core$reload_BANG_(){
return password_manager_comparison.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1672586946204
