// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.client.socket');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('cljs.reader');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.socket.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client.socket.get_websocket_imp = (function figwheel$client$socket$get_websocket_imp(){
var or__5043__auto__ = figwheel.client.socket.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = figwheel.client.socket.goog$module$goog$object.get.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
if(figwheel.client.utils.html_or_react_native_env_QMARK_.call(null)){
return figwheel.client.socket.goog$module$goog$object.get.call(null,window,"WebSocket");
} else {
if(figwheel.client.utils.node_env_QMARK_.call(null)){
try{return require("ws");
}catch (e38590){if((e38590 instanceof Error)){
var e = e38590;
return null;
} else {
throw e38590;

}
}} else {
if(figwheel.client.utils.worker_env_QMARK_.call(null)){
return figwheel.client.socket.goog$module$goog$object.get.call(null,self,"WebSocket");
} else {
return null;

}
}
}
}
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.socket !== 'undefined') && (typeof figwheel.client.socket.message_history_atom !== 'undefined')){
} else {
figwheel.client.socket.message_history_atom = cljs.core.atom.call(null,cljs.core.List.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.socket !== 'undefined') && (typeof figwheel.client.socket.socket_atom !== 'undefined')){
} else {
figwheel.client.socket.socket_atom = cljs.core.atom.call(null,false);
}
/**
 * Send a end message to the server.
 */
figwheel.client.socket.send_BANG_ = (function figwheel$client$socket$send_BANG_(msg){
if(cljs.core.truth_(cljs.core.deref.call(null,figwheel.client.socket.socket_atom))){
return cljs.core.deref.call(null,figwheel.client.socket.socket_atom).send(cljs.core.pr_str.call(null,msg));
} else {
return null;
}
});
figwheel.client.socket.close_BANG_ = (function figwheel$client$socket$close_BANG_(){
(cljs.core.deref.call(null,figwheel.client.socket.socket_atom).onclose = cljs.core.identity);

return cljs.core.deref.call(null,figwheel.client.socket.socket_atom).close();
});
figwheel.client.socket.handle_incoming_message = (function figwheel$client$socket$handle_incoming_message(msg){
figwheel.client.utils.debug_prn.call(null,msg);

var and__5041__auto__ = cljs.core.map_QMARK_.call(null,msg);
if(and__5041__auto__){
var and__5041__auto____$1 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"ping","ping",-1670114784));
if(and__5041__auto____$2){
return cljs.core.swap_BANG_.call(null,figwheel.client.socket.message_history_atom,cljs.core.conj,msg);
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
figwheel.client.socket.open = (function figwheel$client$socket$open(p__38591){
var map__38592 = p__38591;
var map__38592__$1 = cljs.core.__destructure_map.call(null,map__38592);
var opts = map__38592__$1;
var retry_count = cljs.core.get.call(null,map__38592__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
var retried_count = cljs.core.get.call(null,map__38592__$1,new cljs.core.Keyword(null,"retried-count","retried-count",-2127867357));
var websocket_url = cljs.core.get.call(null,map__38592__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var build_id = cljs.core.get.call(null,map__38592__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
var temp__5802__auto__ = figwheel.client.socket.get_websocket_imp.call(null);
if(cljs.core.truth_(temp__5802__auto__)){
var WebSocket = temp__5802__auto__;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: trying to open cljs reload socket");

var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(websocket_url),(cljs.core.truth_(build_id)?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(build_id)].join(''):"")].join('');
var socket = (new WebSocket(url));
(socket.onmessage = (function (msg_str){
var temp__5804__auto__ = cljs.reader.read_string.call(null,msg_str.data);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.Var(function(){return figwheel.client.socket.handle_incoming_message;},new cljs.core.Symbol("figwheel.client.socket","handle-incoming-message","figwheel.client.socket/handle-incoming-message",-2084786999,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client.socket","figwheel.client.socket",-1038129509,null),new cljs.core.Symbol(null,"handle-incoming-message","handle-incoming-message",-1068736536,null),"target\\cljsbuild\\public\\js\\out\\figwheel\\client\\socket.cljs",30,1,57,57,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msg","msg",254428083,null)], null)),null,(cljs.core.truth_(figwheel.client.socket.handle_incoming_message)?figwheel.client.socket.handle_incoming_message.cljs$lang$test:null)])).call(null,msg);
} else {
return null;
}
}));

(socket.onopen = (function (x){
cljs.core.reset_BANG_.call(null,figwheel.client.socket.socket_atom,socket);

if(figwheel.client.utils.html_env_QMARK_.call(null)){
window.addEventListener("beforeunload",figwheel.client.socket.close_BANG_);
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: socket connection established");
}));

(socket.onclose = (function (x){
var retried_count__$1 = (function (){var or__5043__auto__ = retried_count;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
figwheel.client.utils.debug_prn.call(null,"Figwheel: socket closed or failed to open");

if((retry_count > retried_count__$1)){
return setTimeout((function (){
return figwheel.client.socket.open.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retried-count","retried-count",-2127867357),(retried_count__$1 + (1))));
}),(function (){var x__5131__auto__ = (10000);
var y__5132__auto__ = ((2000) + ((500) * retried_count__$1));
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
} else {
return null;
}
}));

(socket.onerror = (function (x){
return figwheel.client.utils.debug_prn.call(null,"Figwheel: socket error ");
}));

return socket;
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),((figwheel.client.utils.node_env_QMARK_.call(null))?"Figwheel: Can't start Figwheel!! Please make sure ws is installed\n do -> 'npm install ws'":"Figwheel: Can't start Figwheel!! This browser doesn't support WebSockets"));
}
});

//# sourceMappingURL=socket.js.map?rel=1672362826537
