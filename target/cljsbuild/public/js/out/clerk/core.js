// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('clerk.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.fx.dom');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('cljs.core.async');
goog.require('goog.Uri');
clerk.core.current_path = cljs.core.atom.call(null,location.pathname);
clerk.core.deferred_navigation_chan = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
clerk.core.debounce = (function clerk$core$debounce(var_args){
var G__35467 = arguments.length;
switch (G__35467) {
case 1:
return clerk.core.debounce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clerk.core.debounce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clerk.core.debounce.cljs$core$IFn$_invoke$arity$1 = (function (f){
return clerk.core.debounce.call(null,f,(1000));
}));

(clerk.core.debounce.cljs$core$IFn$_invoke$arity$2 = (function (f,timeout){
var id = cljs.core.atom.call(null,null);
return (function (evt){
if((!((cljs.core.deref.call(null,id) == null)))){
clearTimeout(cljs.core.deref.call(null,id));
} else {
}

return cljs.core.reset_BANG_.call(null,id,setTimeout(cljs.core.partial.call(null,f,evt),timeout));
});
}));

(clerk.core.debounce.cljs$lang$maxFixedArity = 2);

/**
 * We put any navigation that needs to be performed after the page is rendered here,
 * in the form of a function to be called.
 */
clerk.core.defer_page_navigation_BANG_ = (function clerk$core$defer_page_navigation_BANG_(page_nav_fn){
return cljs.core.async.offer_BANG_.call(null,clerk.core.deferred_navigation_chan,page_nav_fn);
});
/**
 * Where we save stuff we want to remember when the user
 *   navigates back and forths in the history stack
 */
clerk.core.get_history_state = (function clerk$core$get_history_state(){
return history.state;
});
/**
 * If we have a saved scroll-top in the history state return it,
 * otherwise return nil
 */
clerk.core.get_history_scroll_top = (function clerk$core$get_history_scroll_top(){
var temp__5804__auto__ = clerk.core.get_history_state.call(null);
if(cljs.core.truth_(temp__5804__auto__)){
var state = temp__5804__auto__;
return (state["scroll-top"]);
} else {
return null;
}
});
/**
 * Current scroll position
 */
clerk.core.get_scroll_top = (function clerk$core$get_scroll_top(){
return goog.dom.getDocumentScroll().y;
});
/**
 * Scroll immediatelly to y
 */
clerk.core.scroll_to = (function clerk$core$scroll_to(y){
return scrollTo((0),y);
});
/**
 * Scroll with some easing
 */
clerk.core.smooth_scroll_to = (function clerk$core$smooth_scroll_to(y){
return (new goog.fx.dom.Scroll(goog.dom.getDocumentScrollElement(),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clerk.core.get_scroll_top.call(null)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)),(300))).play();
});
clerk.core.top_of_element_with_id = (function clerk$core$top_of_element_with_id(id){
var temp__5802__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5802__auto__)){
var element = temp__5802__auto__;
return goog.style.getPageOffsetTop(element);
} else {
return (0);
}
});
clerk.core.bottom_of_element_with_id = (function clerk$core$bottom_of_element_with_id(id){
var temp__5802__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5802__auto__)){
var element = temp__5802__auto__;
return (goog.style.getPosition(element).y + goog.style.getSize(element).height);
} else {
return (0);
}
});
clerk.core.browser_supports_manual_restoration_QMARK_ = history.scrollRestoration;
/**
 * The browser's default behaviour is to restore scroll position on revisit of a
 *   history stack entry. Chrome supports to disable it. Other browsers don't really,
 *   but there's no visible penalty for trying, so we try.
 */
clerk.core.disable_default_scroll_restoration = (function clerk$core$disable_default_scroll_restoration(){
if(cljs.core.truth_(clerk.core.browser_supports_manual_restoration_QMARK_)){
return (history.scrollRestoration = "manual");
} else {
return goog.events.listen(window,goog.events.EventType.POPSTATE,(function (event){
var temp__5802__auto___35469 = event.state;
if(cljs.core.truth_(temp__5802__auto___35469)){
var state_35470 = temp__5802__auto___35469;
var temp__5804__auto___35471 = (state_35470["scroll-top"]);
if(cljs.core.truth_(temp__5804__auto___35471)){
var scroll_top_35472 = temp__5804__auto___35471;
goog.events.listenOnce(window,goog.events.EventType.SCROLL,(function (){
scrollTo((0),scroll_top_35472);

return null;
}));
} else {
}
} else {
}

return null;
}));
}
});
/**
 * When the user scrolls we save the current scroll position in the
 *   history objects state.
 */
clerk.core.install_scroll_saver = (function clerk$core$install_scroll_saver(){
return goog.events.listen(window,goog.events.EventType.SCROLL,clerk.core.debounce.call(null,(function (event){
var scroll_top_35473 = clerk.core.get_scroll_top.call(null);
var state_35474 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top_35473], null);
history.replaceState(cljs.core.clj__GT_js.call(null,state_35474),document.title);

return null;
}),(200)));
});
/**
 * Call this after the page has rendered to perform any deferred
 * page-navigation (i.e. scrolling).
 */
clerk.core.after_render_BANG_ = (function clerk$core$after_render_BANG_(){
var temp__5804__auto__ = cljs.core.async.poll_BANG_.call(null,clerk.core.deferred_navigation_chan);
if(cljs.core.truth_(temp__5804__auto__)){
var page_nav_fn = temp__5804__auto__;
return page_nav_fn.call(null);
} else {
return null;
}
});
/**
 * Call this on every navigation.
 * Navigates the page by scrolling to the appropriate y position. It's either:
 * * A history stack navigation => any saved scroll position should be used
 * * A new history stack element => either scroll to the top or to any hash target (URL fragment)
 * In both cases consider if the navigation is:
 * * on the same page -> scroll immediatelly (and smooth)
 * * not on the same page -> defer scrolling (for an after render handler to deal with
 * If a `top-element-id` is given we translate the y coordinate to the bottom
 * the top element (sometimes needed with those sticky menus at the top of pages.)
 */
clerk.core.navigate_page_BANG_ = (function clerk$core$navigate_page_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35481 = arguments.length;
var i__5767__auto___35482 = (0);
while(true){
if((i__5767__auto___35482 < len__5766__auto___35481)){
args__5772__auto__.push((arguments[i__5767__auto___35482]));

var G__35483 = (i__5767__auto___35482 + (1));
i__5767__auto___35482 = G__35483;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return clerk.core.navigate_page_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(clerk.core.navigate_page_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35477){
var vec__35478 = p__35477;
var top_element_id = cljs.core.nth.call(null,vec__35478,(0),null);
if(typeof url === 'string'){
} else {
throw (new Error("Assert failed: (string? url)"));
}

var uri = goog.Uri.parse(url);
var path = uri.getPath();
var old_path = goog.Uri.parse(cljs.core.deref.call(null,clerk.core.current_path)).getPath();
var same_page_QMARK_ = cljs.core._EQ_.call(null,path,old_path);
var fragment = cljs.core.not_empty.call(null,uri.getFragment());
cljs.core.reset_BANG_.call(null,clerk.core.current_path,path);

var temp__5802__auto__ = clerk.core.get_history_scroll_top.call(null);
if(cljs.core.truth_(temp__5802__auto__)){
var y = temp__5802__auto__;
if(same_page_QMARK_){
return clerk.core.smooth_scroll_to.call(null,y);
} else {
return clerk.core.defer_page_navigation_BANG_.call(null,(function (){
return clerk.core.scroll_to.call(null,y);
}));
}
} else {
var y_translation = (cljs.core.truth_(top_element_id)?clerk.core.bottom_of_element_with_id.call(null,top_element_id):(0));
if(cljs.core.truth_((function (){var and__5041__auto__ = same_page_QMARK_;
if(and__5041__auto__){
return fragment;
} else {
return and__5041__auto__;
}
})())){
var y = clerk.core.top_of_element_with_id.call(null,fragment);
return clerk.core.smooth_scroll_to.call(null,(y - y_translation));
} else {
return clerk.core.defer_page_navigation_BANG_.call(null,(function (){
var y = (cljs.core.truth_(fragment)?clerk.core.top_of_element_with_id.call(null,fragment):(0));
return clerk.core.scroll_to.call(null,(y - y_translation));
}));
}
}
}));

(clerk.core.navigate_page_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clerk.core.navigate_page_BANG_.cljs$lang$applyTo = (function (seq35475){
var G__35476 = cljs.core.first.call(null,seq35475);
var seq35475__$1 = cljs.core.next.call(null,seq35475);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35476,seq35475__$1);
}));

/**
 * Call when your app is starting.
 */
clerk.core.initialize_BANG_ = (function clerk$core$initialize_BANG_(){
clerk.core.disable_default_scroll_restoration.call(null);

return clerk.core.install_scroll_saver.call(null);
});

//# sourceMappingURL=core.js.map?rel=1672362821722
