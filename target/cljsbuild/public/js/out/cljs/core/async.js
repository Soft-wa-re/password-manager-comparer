// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33647 = arguments.length;
switch (G__33647) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33648 = (function (f,blockable,meta33649){
this.f = f;
this.blockable = blockable;
this.meta33649 = meta33649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33650,meta33649__$1){
var self__ = this;
var _33650__$1 = this;
return (new cljs.core.async.t_cljs$core$async33648(self__.f,self__.blockable,meta33649__$1));
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33650){
var self__ = this;
var _33650__$1 = this;
return self__.meta33649;
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33649","meta33649",637761193,null)], null);
}));

(cljs.core.async.t_cljs$core$async33648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33648");

(cljs.core.async.t_cljs$core$async33648.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async33648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33648.
 */
cljs.core.async.__GT_t_cljs$core$async33648 = (function cljs$core$async$__GT_t_cljs$core$async33648(f__$1,blockable__$1,meta33649){
return (new cljs.core.async.t_cljs$core$async33648(f__$1,blockable__$1,meta33649));
});

}

return (new cljs.core.async.t_cljs$core$async33648(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33654 = arguments.length;
switch (G__33654) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33657 = arguments.length;
switch (G__33657) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33660 = arguments.length;
switch (G__33660) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33662 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33662);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_33662);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33664 = arguments.length;
switch (G__33664) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___33666 = n;
var x_33667 = (0);
while(true){
if((x_33667 < n__5633__auto___33666)){
(a[x_33667] = (0));

var G__33668 = (x_33667 + (1));
x_33667 = G__33668;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33669 = (i + (1));
i = G__33669;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33670 = (function (flag,meta33671){
this.flag = flag;
this.meta33671 = meta33671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33672,meta33671__$1){
var self__ = this;
var _33672__$1 = this;
return (new cljs.core.async.t_cljs$core$async33670(self__.flag,meta33671__$1));
}));

(cljs.core.async.t_cljs$core$async33670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33672){
var self__ = this;
var _33672__$1 = this;
return self__.meta33671;
}));

(cljs.core.async.t_cljs$core$async33670.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async33670.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33671","meta33671",-342257728,null)], null);
}));

(cljs.core.async.t_cljs$core$async33670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33670");

(cljs.core.async.t_cljs$core$async33670.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async33670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33670.
 */
cljs.core.async.__GT_t_cljs$core$async33670 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33670(flag__$1,meta33671){
return (new cljs.core.async.t_cljs$core$async33670(flag__$1,meta33671));
});

}

return (new cljs.core.async.t_cljs$core$async33670(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33673 = (function (flag,cb,meta33674){
this.flag = flag;
this.cb = cb;
this.meta33674 = meta33674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33675,meta33674__$1){
var self__ = this;
var _33675__$1 = this;
return (new cljs.core.async.t_cljs$core$async33673(self__.flag,self__.cb,meta33674__$1));
}));

(cljs.core.async.t_cljs$core$async33673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33675){
var self__ = this;
var _33675__$1 = this;
return self__.meta33674;
}));

(cljs.core.async.t_cljs$core$async33673.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async33673.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33674","meta33674",72868758,null)], null);
}));

(cljs.core.async.t_cljs$core$async33673.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33673");

(cljs.core.async.t_cljs$core$async33673.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async33673");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33673.
 */
cljs.core.async.__GT_t_cljs$core$async33673 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33673(flag__$1,cb__$1,meta33674){
return (new cljs.core.async.t_cljs$core$async33673(flag__$1,cb__$1,meta33674));
});

}

return (new cljs.core.async.t_cljs$core$async33673(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33676_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33676_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33677_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33677_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33678 = (i + (1));
i = G__33678;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___33683 = arguments.length;
var i__5767__auto___33684 = (0);
while(true){
if((i__5767__auto___33684 < len__5766__auto___33683)){
args__5772__auto__.push((arguments[i__5767__auto___33684]));

var G__33685 = (i__5767__auto___33684 + (1));
i__5767__auto___33684 = G__33685;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33681){
var map__33682 = p__33681;
var map__33682__$1 = cljs.core.__destructure_map.call(null,map__33682);
var opts = map__33682__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33679){
var G__33680 = cljs.core.first.call(null,seq33679);
var seq33679__$1 = cljs.core.next.call(null,seq33679);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33680,seq33679__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33687 = arguments.length;
switch (G__33687) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33587__auto___33733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_33711){
var state_val_33712 = (state_33711[(1)]);
if((state_val_33712 === (7))){
var inst_33707 = (state_33711[(2)]);
var state_33711__$1 = state_33711;
var statearr_33713_33734 = state_33711__$1;
(statearr_33713_33734[(2)] = inst_33707);

(statearr_33713_33734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (1))){
var state_33711__$1 = state_33711;
var statearr_33714_33735 = state_33711__$1;
(statearr_33714_33735[(2)] = null);

(statearr_33714_33735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (4))){
var inst_33690 = (state_33711[(7)]);
var inst_33690__$1 = (state_33711[(2)]);
var inst_33691 = (inst_33690__$1 == null);
var state_33711__$1 = (function (){var statearr_33715 = state_33711;
(statearr_33715[(7)] = inst_33690__$1);

return statearr_33715;
})();
if(cljs.core.truth_(inst_33691)){
var statearr_33716_33736 = state_33711__$1;
(statearr_33716_33736[(1)] = (5));

} else {
var statearr_33717_33737 = state_33711__$1;
(statearr_33717_33737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (13))){
var state_33711__$1 = state_33711;
var statearr_33718_33738 = state_33711__$1;
(statearr_33718_33738[(2)] = null);

(statearr_33718_33738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (6))){
var inst_33690 = (state_33711[(7)]);
var state_33711__$1 = state_33711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33711__$1,(11),to,inst_33690);
} else {
if((state_val_33712 === (3))){
var inst_33709 = (state_33711[(2)]);
var state_33711__$1 = state_33711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33711__$1,inst_33709);
} else {
if((state_val_33712 === (12))){
var state_33711__$1 = state_33711;
var statearr_33719_33739 = state_33711__$1;
(statearr_33719_33739[(2)] = null);

(statearr_33719_33739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (2))){
var state_33711__$1 = state_33711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33711__$1,(4),from);
} else {
if((state_val_33712 === (11))){
var inst_33700 = (state_33711[(2)]);
var state_33711__$1 = state_33711;
if(cljs.core.truth_(inst_33700)){
var statearr_33720_33740 = state_33711__$1;
(statearr_33720_33740[(1)] = (12));

} else {
var statearr_33721_33741 = state_33711__$1;
(statearr_33721_33741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (9))){
var state_33711__$1 = state_33711;
var statearr_33722_33742 = state_33711__$1;
(statearr_33722_33742[(2)] = null);

(statearr_33722_33742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (5))){
var state_33711__$1 = state_33711;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33723_33743 = state_33711__$1;
(statearr_33723_33743[(1)] = (8));

} else {
var statearr_33724_33744 = state_33711__$1;
(statearr_33724_33744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (14))){
var inst_33705 = (state_33711[(2)]);
var state_33711__$1 = state_33711;
var statearr_33725_33745 = state_33711__$1;
(statearr_33725_33745[(2)] = inst_33705);

(statearr_33725_33745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (10))){
var inst_33697 = (state_33711[(2)]);
var state_33711__$1 = state_33711;
var statearr_33726_33746 = state_33711__$1;
(statearr_33726_33746[(2)] = inst_33697);

(statearr_33726_33746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33712 === (8))){
var inst_33694 = cljs.core.async.close_BANG_.call(null,to);
var state_33711__$1 = state_33711;
var statearr_33727_33747 = state_33711__$1;
(statearr_33727_33747[(2)] = inst_33694);

(statearr_33727_33747[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_33728 = [null,null,null,null,null,null,null,null];
(statearr_33728[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_33728[(1)] = (1));

return statearr_33728;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_33711){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_33711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e33729){if((e33729 instanceof Object)){
var ex__33494__auto__ = e33729;
var statearr_33730_33748 = state_33711;
(statearr_33730_33748[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33749 = state_33711;
state_33711 = G__33749;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_33711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_33711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_33731 = f__33588__auto__.call(null);
(statearr_33731[(6)] = c__33587__auto___33733);

return statearr_33731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__33750){
var vec__33751 = p__33750;
var v = cljs.core.nth.call(null,vec__33751,(0),null);
var p = cljs.core.nth.call(null,vec__33751,(1),null);
var job = vec__33751;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33587__auto___33922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_33758){
var state_val_33759 = (state_33758[(1)]);
if((state_val_33759 === (1))){
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33758__$1,(2),res,v);
} else {
if((state_val_33759 === (2))){
var inst_33755 = (state_33758[(2)]);
var inst_33756 = cljs.core.async.close_BANG_.call(null,res);
var state_33758__$1 = (function (){var statearr_33760 = state_33758;
(statearr_33760[(7)] = inst_33755);

return statearr_33760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33758__$1,inst_33756);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0 = (function (){
var statearr_33761 = [null,null,null,null,null,null,null,null];
(statearr_33761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__);

(statearr_33761[(1)] = (1));

return statearr_33761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1 = (function (state_33758){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_33758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e33762){if((e33762 instanceof Object)){
var ex__33494__auto__ = e33762;
var statearr_33763_33923 = state_33758;
(statearr_33763_33923[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33924 = state_33758;
state_33758 = G__33924;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__ = function(state_33758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1.call(this,state_33758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_33764 = f__33588__auto__.call(null);
(statearr_33764[(6)] = c__33587__auto___33922);

return statearr_33764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__33765){
var vec__33766 = p__33765;
var v = cljs.core.nth.call(null,vec__33766,(0),null);
var p = cljs.core.nth.call(null,vec__33766,(1),null);
var job = vec__33766;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5633__auto___33925 = n;
var __33926 = (0);
while(true){
if((__33926 < n__5633__auto___33925)){
var G__33769_33927 = type;
var G__33769_33928__$1 = (((G__33769_33927 instanceof cljs.core.Keyword))?G__33769_33927.fqn:null);
switch (G__33769_33928__$1) {
case "compute":
var c__33587__auto___33930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33926,c__33587__auto___33930,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async){
return (function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = ((function (__33926,c__33587__auto___33930,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async){
return (function (state_33782){
var state_val_33783 = (state_33782[(1)]);
if((state_val_33783 === (1))){
var state_33782__$1 = state_33782;
var statearr_33784_33931 = state_33782__$1;
(statearr_33784_33931[(2)] = null);

(statearr_33784_33931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (2))){
var state_33782__$1 = state_33782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33782__$1,(4),jobs);
} else {
if((state_val_33783 === (3))){
var inst_33780 = (state_33782[(2)]);
var state_33782__$1 = state_33782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33782__$1,inst_33780);
} else {
if((state_val_33783 === (4))){
var inst_33772 = (state_33782[(2)]);
var inst_33773 = process__$1.call(null,inst_33772);
var state_33782__$1 = state_33782;
if(cljs.core.truth_(inst_33773)){
var statearr_33785_33932 = state_33782__$1;
(statearr_33785_33932[(1)] = (5));

} else {
var statearr_33786_33933 = state_33782__$1;
(statearr_33786_33933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (5))){
var state_33782__$1 = state_33782;
var statearr_33787_33934 = state_33782__$1;
(statearr_33787_33934[(2)] = null);

(statearr_33787_33934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (6))){
var state_33782__$1 = state_33782;
var statearr_33788_33935 = state_33782__$1;
(statearr_33788_33935[(2)] = null);

(statearr_33788_33935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33783 === (7))){
var inst_33778 = (state_33782[(2)]);
var state_33782__$1 = state_33782;
var statearr_33789_33936 = state_33782__$1;
(statearr_33789_33936[(2)] = inst_33778);

(statearr_33789_33936[(1)] = (3));


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
});})(__33926,c__33587__auto___33930,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async))
;
return ((function (__33926,switch__33490__auto__,c__33587__auto___33930,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0 = (function (){
var statearr_33790 = [null,null,null,null,null,null,null];
(statearr_33790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__);

(statearr_33790[(1)] = (1));

return statearr_33790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1 = (function (state_33782){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_33782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e33791){if((e33791 instanceof Object)){
var ex__33494__auto__ = e33791;
var statearr_33792_33937 = state_33782;
(statearr_33792_33937[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33938 = state_33782;
state_33782 = G__33938;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__ = function(state_33782){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1.call(this,state_33782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__;
})()
;})(__33926,switch__33490__auto__,c__33587__auto___33930,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async))
})();
var state__33589__auto__ = (function (){var statearr_33793 = f__33588__auto__.call(null);
(statearr_33793[(6)] = c__33587__auto___33930);

return statearr_33793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
});})(__33926,c__33587__auto___33930,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async))
);


break;
case "async":
var c__33587__auto___33939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33926,c__33587__auto___33939,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async){
return (function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = ((function (__33926,c__33587__auto___33939,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async){
return (function (state_33806){
var state_val_33807 = (state_33806[(1)]);
if((state_val_33807 === (1))){
var state_33806__$1 = state_33806;
var statearr_33808_33940 = state_33806__$1;
(statearr_33808_33940[(2)] = null);

(statearr_33808_33940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (2))){
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33806__$1,(4),jobs);
} else {
if((state_val_33807 === (3))){
var inst_33804 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33806__$1,inst_33804);
} else {
if((state_val_33807 === (4))){
var inst_33796 = (state_33806[(2)]);
var inst_33797 = async.call(null,inst_33796);
var state_33806__$1 = state_33806;
if(cljs.core.truth_(inst_33797)){
var statearr_33809_33941 = state_33806__$1;
(statearr_33809_33941[(1)] = (5));

} else {
var statearr_33810_33942 = state_33806__$1;
(statearr_33810_33942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (5))){
var state_33806__$1 = state_33806;
var statearr_33811_33943 = state_33806__$1;
(statearr_33811_33943[(2)] = null);

(statearr_33811_33943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (6))){
var state_33806__$1 = state_33806;
var statearr_33812_33944 = state_33806__$1;
(statearr_33812_33944[(2)] = null);

(statearr_33812_33944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (7))){
var inst_33802 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
var statearr_33813_33945 = state_33806__$1;
(statearr_33813_33945[(2)] = inst_33802);

(statearr_33813_33945[(1)] = (3));


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
});})(__33926,c__33587__auto___33939,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async))
;
return ((function (__33926,switch__33490__auto__,c__33587__auto___33939,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0 = (function (){
var statearr_33814 = [null,null,null,null,null,null,null];
(statearr_33814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__);

(statearr_33814[(1)] = (1));

return statearr_33814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1 = (function (state_33806){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_33806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e33815){if((e33815 instanceof Object)){
var ex__33494__auto__ = e33815;
var statearr_33816_33946 = state_33806;
(statearr_33816_33946[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33947 = state_33806;
state_33806 = G__33947;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__ = function(state_33806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1.call(this,state_33806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__;
})()
;})(__33926,switch__33490__auto__,c__33587__auto___33939,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async))
})();
var state__33589__auto__ = (function (){var statearr_33817 = f__33588__auto__.call(null);
(statearr_33817[(6)] = c__33587__auto___33939);

return statearr_33817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
});})(__33926,c__33587__auto___33939,G__33769_33927,G__33769_33928__$1,n__5633__auto___33925,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33769_33928__$1)].join('')));

}

var G__33948 = (__33926 + (1));
__33926 = G__33948;
continue;
} else {
}
break;
}

var c__33587__auto___33949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_33839){
var state_val_33840 = (state_33839[(1)]);
if((state_val_33840 === (7))){
var inst_33835 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33841_33950 = state_33839__$1;
(statearr_33841_33950[(2)] = inst_33835);

(statearr_33841_33950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (1))){
var state_33839__$1 = state_33839;
var statearr_33842_33951 = state_33839__$1;
(statearr_33842_33951[(2)] = null);

(statearr_33842_33951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (4))){
var inst_33820 = (state_33839[(7)]);
var inst_33820__$1 = (state_33839[(2)]);
var inst_33821 = (inst_33820__$1 == null);
var state_33839__$1 = (function (){var statearr_33843 = state_33839;
(statearr_33843[(7)] = inst_33820__$1);

return statearr_33843;
})();
if(cljs.core.truth_(inst_33821)){
var statearr_33844_33952 = state_33839__$1;
(statearr_33844_33952[(1)] = (5));

} else {
var statearr_33845_33953 = state_33839__$1;
(statearr_33845_33953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (6))){
var inst_33820 = (state_33839[(7)]);
var inst_33825 = (state_33839[(8)]);
var inst_33825__$1 = cljs.core.async.chan.call(null,(1));
var inst_33826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33827 = [inst_33820,inst_33825__$1];
var inst_33828 = (new cljs.core.PersistentVector(null,2,(5),inst_33826,inst_33827,null));
var state_33839__$1 = (function (){var statearr_33846 = state_33839;
(statearr_33846[(8)] = inst_33825__$1);

return statearr_33846;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33839__$1,(8),jobs,inst_33828);
} else {
if((state_val_33840 === (3))){
var inst_33837 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33839__$1,inst_33837);
} else {
if((state_val_33840 === (2))){
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(4),from);
} else {
if((state_val_33840 === (9))){
var inst_33832 = (state_33839[(2)]);
var state_33839__$1 = (function (){var statearr_33847 = state_33839;
(statearr_33847[(9)] = inst_33832);

return statearr_33847;
})();
var statearr_33848_33954 = state_33839__$1;
(statearr_33848_33954[(2)] = null);

(statearr_33848_33954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (5))){
var inst_33823 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33839__$1 = state_33839;
var statearr_33849_33955 = state_33839__$1;
(statearr_33849_33955[(2)] = inst_33823);

(statearr_33849_33955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (8))){
var inst_33825 = (state_33839[(8)]);
var inst_33830 = (state_33839[(2)]);
var state_33839__$1 = (function (){var statearr_33850 = state_33839;
(statearr_33850[(10)] = inst_33830);

return statearr_33850;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33839__$1,(9),results,inst_33825);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0 = (function (){
var statearr_33851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__);

(statearr_33851[(1)] = (1));

return statearr_33851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1 = (function (state_33839){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_33839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e33852){if((e33852 instanceof Object)){
var ex__33494__auto__ = e33852;
var statearr_33853_33956 = state_33839;
(statearr_33853_33956[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33957 = state_33839;
state_33839 = G__33957;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__ = function(state_33839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1.call(this,state_33839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_33854 = f__33588__auto__.call(null);
(statearr_33854[(6)] = c__33587__auto___33949);

return statearr_33854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


var c__33587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_33892){
var state_val_33893 = (state_33892[(1)]);
if((state_val_33893 === (7))){
var inst_33888 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33894_33958 = state_33892__$1;
(statearr_33894_33958[(2)] = inst_33888);

(statearr_33894_33958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (20))){
var state_33892__$1 = state_33892;
var statearr_33895_33959 = state_33892__$1;
(statearr_33895_33959[(2)] = null);

(statearr_33895_33959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (1))){
var state_33892__$1 = state_33892;
var statearr_33896_33960 = state_33892__$1;
(statearr_33896_33960[(2)] = null);

(statearr_33896_33960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (4))){
var inst_33857 = (state_33892[(7)]);
var inst_33857__$1 = (state_33892[(2)]);
var inst_33858 = (inst_33857__$1 == null);
var state_33892__$1 = (function (){var statearr_33897 = state_33892;
(statearr_33897[(7)] = inst_33857__$1);

return statearr_33897;
})();
if(cljs.core.truth_(inst_33858)){
var statearr_33898_33961 = state_33892__$1;
(statearr_33898_33961[(1)] = (5));

} else {
var statearr_33899_33962 = state_33892__$1;
(statearr_33899_33962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (15))){
var inst_33870 = (state_33892[(8)]);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33892__$1,(18),to,inst_33870);
} else {
if((state_val_33893 === (21))){
var inst_33883 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33900_33963 = state_33892__$1;
(statearr_33900_33963[(2)] = inst_33883);

(statearr_33900_33963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (13))){
var inst_33885 = (state_33892[(2)]);
var state_33892__$1 = (function (){var statearr_33901 = state_33892;
(statearr_33901[(9)] = inst_33885);

return statearr_33901;
})();
var statearr_33902_33964 = state_33892__$1;
(statearr_33902_33964[(2)] = null);

(statearr_33902_33964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (6))){
var inst_33857 = (state_33892[(7)]);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(11),inst_33857);
} else {
if((state_val_33893 === (17))){
var inst_33878 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33878)){
var statearr_33903_33965 = state_33892__$1;
(statearr_33903_33965[(1)] = (19));

} else {
var statearr_33904_33966 = state_33892__$1;
(statearr_33904_33966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (3))){
var inst_33890 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33892__$1,inst_33890);
} else {
if((state_val_33893 === (12))){
var inst_33867 = (state_33892[(10)]);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(14),inst_33867);
} else {
if((state_val_33893 === (2))){
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(4),results);
} else {
if((state_val_33893 === (19))){
var state_33892__$1 = state_33892;
var statearr_33905_33967 = state_33892__$1;
(statearr_33905_33967[(2)] = null);

(statearr_33905_33967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (11))){
var inst_33867 = (state_33892[(2)]);
var state_33892__$1 = (function (){var statearr_33906 = state_33892;
(statearr_33906[(10)] = inst_33867);

return statearr_33906;
})();
var statearr_33907_33968 = state_33892__$1;
(statearr_33907_33968[(2)] = null);

(statearr_33907_33968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (9))){
var state_33892__$1 = state_33892;
var statearr_33908_33969 = state_33892__$1;
(statearr_33908_33969[(2)] = null);

(statearr_33908_33969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (5))){
var state_33892__$1 = state_33892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33909_33970 = state_33892__$1;
(statearr_33909_33970[(1)] = (8));

} else {
var statearr_33910_33971 = state_33892__$1;
(statearr_33910_33971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (14))){
var inst_33872 = (state_33892[(11)]);
var inst_33870 = (state_33892[(8)]);
var inst_33870__$1 = (state_33892[(2)]);
var inst_33871 = (inst_33870__$1 == null);
var inst_33872__$1 = cljs.core.not.call(null,inst_33871);
var state_33892__$1 = (function (){var statearr_33911 = state_33892;
(statearr_33911[(11)] = inst_33872__$1);

(statearr_33911[(8)] = inst_33870__$1);

return statearr_33911;
})();
if(inst_33872__$1){
var statearr_33912_33972 = state_33892__$1;
(statearr_33912_33972[(1)] = (15));

} else {
var statearr_33913_33973 = state_33892__$1;
(statearr_33913_33973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (16))){
var inst_33872 = (state_33892[(11)]);
var state_33892__$1 = state_33892;
var statearr_33914_33974 = state_33892__$1;
(statearr_33914_33974[(2)] = inst_33872);

(statearr_33914_33974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (10))){
var inst_33864 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33915_33975 = state_33892__$1;
(statearr_33915_33975[(2)] = inst_33864);

(statearr_33915_33975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (18))){
var inst_33875 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33916_33976 = state_33892__$1;
(statearr_33916_33976[(2)] = inst_33875);

(statearr_33916_33976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (8))){
var inst_33861 = cljs.core.async.close_BANG_.call(null,to);
var state_33892__$1 = state_33892;
var statearr_33917_33977 = state_33892__$1;
(statearr_33917_33977[(2)] = inst_33861);

(statearr_33917_33977[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0 = (function (){
var statearr_33918 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__);

(statearr_33918[(1)] = (1));

return statearr_33918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1 = (function (state_33892){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_33892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e33919){if((e33919 instanceof Object)){
var ex__33494__auto__ = e33919;
var statearr_33920_33978 = state_33892;
(statearr_33920_33978[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33979 = state_33892;
state_33892 = G__33979;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__ = function(state_33892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1.call(this,state_33892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_33921 = f__33588__auto__.call(null);
(statearr_33921[(6)] = c__33587__auto__);

return statearr_33921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));

return c__33587__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33981 = arguments.length;
switch (G__33981) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33984 = arguments.length;
switch (G__33984) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33987 = arguments.length;
switch (G__33987) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33587__auto___34036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_34013){
var state_val_34014 = (state_34013[(1)]);
if((state_val_34014 === (7))){
var inst_34009 = (state_34013[(2)]);
var state_34013__$1 = state_34013;
var statearr_34015_34037 = state_34013__$1;
(statearr_34015_34037[(2)] = inst_34009);

(statearr_34015_34037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (1))){
var state_34013__$1 = state_34013;
var statearr_34016_34038 = state_34013__$1;
(statearr_34016_34038[(2)] = null);

(statearr_34016_34038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (4))){
var inst_33990 = (state_34013[(7)]);
var inst_33990__$1 = (state_34013[(2)]);
var inst_33991 = (inst_33990__$1 == null);
var state_34013__$1 = (function (){var statearr_34017 = state_34013;
(statearr_34017[(7)] = inst_33990__$1);

return statearr_34017;
})();
if(cljs.core.truth_(inst_33991)){
var statearr_34018_34039 = state_34013__$1;
(statearr_34018_34039[(1)] = (5));

} else {
var statearr_34019_34040 = state_34013__$1;
(statearr_34019_34040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (13))){
var state_34013__$1 = state_34013;
var statearr_34020_34041 = state_34013__$1;
(statearr_34020_34041[(2)] = null);

(statearr_34020_34041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (6))){
var inst_33990 = (state_34013[(7)]);
var inst_33996 = p.call(null,inst_33990);
var state_34013__$1 = state_34013;
if(cljs.core.truth_(inst_33996)){
var statearr_34021_34042 = state_34013__$1;
(statearr_34021_34042[(1)] = (9));

} else {
var statearr_34022_34043 = state_34013__$1;
(statearr_34022_34043[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (3))){
var inst_34011 = (state_34013[(2)]);
var state_34013__$1 = state_34013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34013__$1,inst_34011);
} else {
if((state_val_34014 === (12))){
var state_34013__$1 = state_34013;
var statearr_34023_34044 = state_34013__$1;
(statearr_34023_34044[(2)] = null);

(statearr_34023_34044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (2))){
var state_34013__$1 = state_34013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34013__$1,(4),ch);
} else {
if((state_val_34014 === (11))){
var inst_33990 = (state_34013[(7)]);
var inst_34000 = (state_34013[(2)]);
var state_34013__$1 = state_34013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34013__$1,(8),inst_34000,inst_33990);
} else {
if((state_val_34014 === (9))){
var state_34013__$1 = state_34013;
var statearr_34024_34045 = state_34013__$1;
(statearr_34024_34045[(2)] = tc);

(statearr_34024_34045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (5))){
var inst_33993 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33994 = cljs.core.async.close_BANG_.call(null,fc);
var state_34013__$1 = (function (){var statearr_34025 = state_34013;
(statearr_34025[(8)] = inst_33993);

return statearr_34025;
})();
var statearr_34026_34046 = state_34013__$1;
(statearr_34026_34046[(2)] = inst_33994);

(statearr_34026_34046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (14))){
var inst_34007 = (state_34013[(2)]);
var state_34013__$1 = state_34013;
var statearr_34027_34047 = state_34013__$1;
(statearr_34027_34047[(2)] = inst_34007);

(statearr_34027_34047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (10))){
var state_34013__$1 = state_34013;
var statearr_34028_34048 = state_34013__$1;
(statearr_34028_34048[(2)] = fc);

(statearr_34028_34048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (8))){
var inst_34002 = (state_34013[(2)]);
var state_34013__$1 = state_34013;
if(cljs.core.truth_(inst_34002)){
var statearr_34029_34049 = state_34013__$1;
(statearr_34029_34049[(1)] = (12));

} else {
var statearr_34030_34050 = state_34013__$1;
(statearr_34030_34050[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_34031 = [null,null,null,null,null,null,null,null,null];
(statearr_34031[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_34031[(1)] = (1));

return statearr_34031;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_34013){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_34013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e34032){if((e34032 instanceof Object)){
var ex__33494__auto__ = e34032;
var statearr_34033_34051 = state_34013;
(statearr_34033_34051[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34052 = state_34013;
state_34013 = G__34052;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_34013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_34013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_34034 = f__33588__auto__.call(null);
(statearr_34034[(6)] = c__33587__auto___34036);

return statearr_34034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_34073){
var state_val_34074 = (state_34073[(1)]);
if((state_val_34074 === (7))){
var inst_34069 = (state_34073[(2)]);
var state_34073__$1 = state_34073;
var statearr_34075_34093 = state_34073__$1;
(statearr_34075_34093[(2)] = inst_34069);

(statearr_34075_34093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (1))){
var inst_34053 = init;
var state_34073__$1 = (function (){var statearr_34076 = state_34073;
(statearr_34076[(7)] = inst_34053);

return statearr_34076;
})();
var statearr_34077_34094 = state_34073__$1;
(statearr_34077_34094[(2)] = null);

(statearr_34077_34094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (4))){
var inst_34056 = (state_34073[(8)]);
var inst_34056__$1 = (state_34073[(2)]);
var inst_34057 = (inst_34056__$1 == null);
var state_34073__$1 = (function (){var statearr_34078 = state_34073;
(statearr_34078[(8)] = inst_34056__$1);

return statearr_34078;
})();
if(cljs.core.truth_(inst_34057)){
var statearr_34079_34095 = state_34073__$1;
(statearr_34079_34095[(1)] = (5));

} else {
var statearr_34080_34096 = state_34073__$1;
(statearr_34080_34096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (6))){
var inst_34060 = (state_34073[(9)]);
var inst_34056 = (state_34073[(8)]);
var inst_34053 = (state_34073[(7)]);
var inst_34060__$1 = f.call(null,inst_34053,inst_34056);
var inst_34061 = cljs.core.reduced_QMARK_.call(null,inst_34060__$1);
var state_34073__$1 = (function (){var statearr_34081 = state_34073;
(statearr_34081[(9)] = inst_34060__$1);

return statearr_34081;
})();
if(inst_34061){
var statearr_34082_34097 = state_34073__$1;
(statearr_34082_34097[(1)] = (8));

} else {
var statearr_34083_34098 = state_34073__$1;
(statearr_34083_34098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (3))){
var inst_34071 = (state_34073[(2)]);
var state_34073__$1 = state_34073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34073__$1,inst_34071);
} else {
if((state_val_34074 === (2))){
var state_34073__$1 = state_34073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34073__$1,(4),ch);
} else {
if((state_val_34074 === (9))){
var inst_34060 = (state_34073[(9)]);
var inst_34053 = inst_34060;
var state_34073__$1 = (function (){var statearr_34084 = state_34073;
(statearr_34084[(7)] = inst_34053);

return statearr_34084;
})();
var statearr_34085_34099 = state_34073__$1;
(statearr_34085_34099[(2)] = null);

(statearr_34085_34099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (5))){
var inst_34053 = (state_34073[(7)]);
var state_34073__$1 = state_34073;
var statearr_34086_34100 = state_34073__$1;
(statearr_34086_34100[(2)] = inst_34053);

(statearr_34086_34100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (10))){
var inst_34067 = (state_34073[(2)]);
var state_34073__$1 = state_34073;
var statearr_34087_34101 = state_34073__$1;
(statearr_34087_34101[(2)] = inst_34067);

(statearr_34087_34101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (8))){
var inst_34060 = (state_34073[(9)]);
var inst_34063 = cljs.core.deref.call(null,inst_34060);
var state_34073__$1 = state_34073;
var statearr_34088_34102 = state_34073__$1;
(statearr_34088_34102[(2)] = inst_34063);

(statearr_34088_34102[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33491__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33491__auto____0 = (function (){
var statearr_34089 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34089[(0)] = cljs$core$async$reduce_$_state_machine__33491__auto__);

(statearr_34089[(1)] = (1));

return statearr_34089;
});
var cljs$core$async$reduce_$_state_machine__33491__auto____1 = (function (state_34073){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_34073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e34090){if((e34090 instanceof Object)){
var ex__33494__auto__ = e34090;
var statearr_34091_34103 = state_34073;
(statearr_34091_34103[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34104 = state_34073;
state_34073 = G__34104;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33491__auto__ = function(state_34073){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33491__auto____1.call(this,state_34073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33491__auto____0;
cljs$core$async$reduce_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33491__auto____1;
return cljs$core$async$reduce_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_34092 = f__33588__auto__.call(null);
(statearr_34092[(6)] = c__33587__auto__);

return statearr_34092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));

return c__33587__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_34110){
var state_val_34111 = (state_34110[(1)]);
if((state_val_34111 === (1))){
var inst_34105 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34110__$1,(2),inst_34105);
} else {
if((state_val_34111 === (2))){
var inst_34107 = (state_34110[(2)]);
var inst_34108 = f__$1.call(null,inst_34107);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34110__$1,inst_34108);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33491__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33491__auto____0 = (function (){
var statearr_34112 = [null,null,null,null,null,null,null];
(statearr_34112[(0)] = cljs$core$async$transduce_$_state_machine__33491__auto__);

(statearr_34112[(1)] = (1));

return statearr_34112;
});
var cljs$core$async$transduce_$_state_machine__33491__auto____1 = (function (state_34110){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_34110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e34113){if((e34113 instanceof Object)){
var ex__33494__auto__ = e34113;
var statearr_34114_34116 = state_34110;
(statearr_34114_34116[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34117 = state_34110;
state_34110 = G__34117;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33491__auto__ = function(state_34110){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33491__auto____1.call(this,state_34110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33491__auto____0;
cljs$core$async$transduce_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33491__auto____1;
return cljs$core$async$transduce_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_34115 = f__33588__auto__.call(null);
(statearr_34115[(6)] = c__33587__auto__);

return statearr_34115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));

return c__33587__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34119 = arguments.length;
switch (G__34119) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_34144){
var state_val_34145 = (state_34144[(1)]);
if((state_val_34145 === (7))){
var inst_34126 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
var statearr_34146_34167 = state_34144__$1;
(statearr_34146_34167[(2)] = inst_34126);

(statearr_34146_34167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (1))){
var inst_34120 = cljs.core.seq.call(null,coll);
var inst_34121 = inst_34120;
var state_34144__$1 = (function (){var statearr_34147 = state_34144;
(statearr_34147[(7)] = inst_34121);

return statearr_34147;
})();
var statearr_34148_34168 = state_34144__$1;
(statearr_34148_34168[(2)] = null);

(statearr_34148_34168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (4))){
var inst_34121 = (state_34144[(7)]);
var inst_34124 = cljs.core.first.call(null,inst_34121);
var state_34144__$1 = state_34144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34144__$1,(7),ch,inst_34124);
} else {
if((state_val_34145 === (13))){
var inst_34138 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
var statearr_34149_34169 = state_34144__$1;
(statearr_34149_34169[(2)] = inst_34138);

(statearr_34149_34169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (6))){
var inst_34129 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
if(cljs.core.truth_(inst_34129)){
var statearr_34150_34170 = state_34144__$1;
(statearr_34150_34170[(1)] = (8));

} else {
var statearr_34151_34171 = state_34144__$1;
(statearr_34151_34171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (3))){
var inst_34142 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34144__$1,inst_34142);
} else {
if((state_val_34145 === (12))){
var state_34144__$1 = state_34144;
var statearr_34152_34172 = state_34144__$1;
(statearr_34152_34172[(2)] = null);

(statearr_34152_34172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (2))){
var inst_34121 = (state_34144[(7)]);
var state_34144__$1 = state_34144;
if(cljs.core.truth_(inst_34121)){
var statearr_34153_34173 = state_34144__$1;
(statearr_34153_34173[(1)] = (4));

} else {
var statearr_34154_34174 = state_34144__$1;
(statearr_34154_34174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (11))){
var inst_34135 = cljs.core.async.close_BANG_.call(null,ch);
var state_34144__$1 = state_34144;
var statearr_34155_34175 = state_34144__$1;
(statearr_34155_34175[(2)] = inst_34135);

(statearr_34155_34175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (9))){
var state_34144__$1 = state_34144;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34156_34176 = state_34144__$1;
(statearr_34156_34176[(1)] = (11));

} else {
var statearr_34157_34177 = state_34144__$1;
(statearr_34157_34177[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (5))){
var inst_34121 = (state_34144[(7)]);
var state_34144__$1 = state_34144;
var statearr_34158_34178 = state_34144__$1;
(statearr_34158_34178[(2)] = inst_34121);

(statearr_34158_34178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (10))){
var inst_34140 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
var statearr_34159_34179 = state_34144__$1;
(statearr_34159_34179[(2)] = inst_34140);

(statearr_34159_34179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34145 === (8))){
var inst_34121 = (state_34144[(7)]);
var inst_34131 = cljs.core.next.call(null,inst_34121);
var inst_34121__$1 = inst_34131;
var state_34144__$1 = (function (){var statearr_34160 = state_34144;
(statearr_34160[(7)] = inst_34121__$1);

return statearr_34160;
})();
var statearr_34161_34180 = state_34144__$1;
(statearr_34161_34180[(2)] = null);

(statearr_34161_34180[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_34162 = [null,null,null,null,null,null,null,null];
(statearr_34162[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_34162[(1)] = (1));

return statearr_34162;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_34144){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_34144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e34163){if((e34163 instanceof Object)){
var ex__33494__auto__ = e34163;
var statearr_34164_34181 = state_34144;
(statearr_34164_34181[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34182 = state_34144;
state_34144 = G__34182;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_34144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_34144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_34165 = f__33588__auto__.call(null);
(statearr_34165[(6)] = c__33587__auto__);

return statearr_34165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));

return c__33587__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34183 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,_);
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34183.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34184 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34184.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34185 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34185.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34186 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34186.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34187 = (function (ch,cs,meta34188){
this.ch = ch;
this.cs = cs;
this.meta34188 = meta34188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34189,meta34188__$1){
var self__ = this;
var _34189__$1 = this;
return (new cljs.core.async.t_cljs$core$async34187(self__.ch,self__.cs,meta34188__$1));
}));

(cljs.core.async.t_cljs$core$async34187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34189){
var self__ = this;
var _34189__$1 = this;
return self__.meta34188;
}));

(cljs.core.async.t_cljs$core$async34187.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34187.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34187.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34187.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34187.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34187.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34188","meta34188",-457597906,null)], null);
}));

(cljs.core.async.t_cljs$core$async34187.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34187");

(cljs.core.async.t_cljs$core$async34187.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async34187");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34187.
 */
cljs.core.async.__GT_t_cljs$core$async34187 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34187(ch__$1,cs__$1,meta34188){
return (new cljs.core.async.t_cljs$core$async34187(ch__$1,cs__$1,meta34188));
});

}

return (new cljs.core.async.t_cljs$core$async34187(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__33587__auto___34409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_34324){
var state_val_34325 = (state_34324[(1)]);
if((state_val_34325 === (7))){
var inst_34320 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34326_34410 = state_34324__$1;
(statearr_34326_34410[(2)] = inst_34320);

(statearr_34326_34410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (20))){
var inst_34223 = (state_34324[(7)]);
var inst_34235 = cljs.core.first.call(null,inst_34223);
var inst_34236 = cljs.core.nth.call(null,inst_34235,(0),null);
var inst_34237 = cljs.core.nth.call(null,inst_34235,(1),null);
var state_34324__$1 = (function (){var statearr_34327 = state_34324;
(statearr_34327[(8)] = inst_34236);

return statearr_34327;
})();
if(cljs.core.truth_(inst_34237)){
var statearr_34328_34411 = state_34324__$1;
(statearr_34328_34411[(1)] = (22));

} else {
var statearr_34329_34412 = state_34324__$1;
(statearr_34329_34412[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (27))){
var inst_34272 = (state_34324[(9)]);
var inst_34265 = (state_34324[(10)]);
var inst_34267 = (state_34324[(11)]);
var inst_34192 = (state_34324[(12)]);
var inst_34272__$1 = cljs.core._nth.call(null,inst_34265,inst_34267);
var inst_34273 = cljs.core.async.put_BANG_.call(null,inst_34272__$1,inst_34192,done);
var state_34324__$1 = (function (){var statearr_34330 = state_34324;
(statearr_34330[(9)] = inst_34272__$1);

return statearr_34330;
})();
if(cljs.core.truth_(inst_34273)){
var statearr_34331_34413 = state_34324__$1;
(statearr_34331_34413[(1)] = (30));

} else {
var statearr_34332_34414 = state_34324__$1;
(statearr_34332_34414[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (1))){
var state_34324__$1 = state_34324;
var statearr_34333_34415 = state_34324__$1;
(statearr_34333_34415[(2)] = null);

(statearr_34333_34415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (24))){
var inst_34223 = (state_34324[(7)]);
var inst_34242 = (state_34324[(2)]);
var inst_34243 = cljs.core.next.call(null,inst_34223);
var inst_34201 = inst_34243;
var inst_34202 = null;
var inst_34203 = (0);
var inst_34204 = (0);
var state_34324__$1 = (function (){var statearr_34334 = state_34324;
(statearr_34334[(13)] = inst_34242);

(statearr_34334[(14)] = inst_34203);

(statearr_34334[(15)] = inst_34202);

(statearr_34334[(16)] = inst_34201);

(statearr_34334[(17)] = inst_34204);

return statearr_34334;
})();
var statearr_34335_34416 = state_34324__$1;
(statearr_34335_34416[(2)] = null);

(statearr_34335_34416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (39))){
var state_34324__$1 = state_34324;
var statearr_34339_34417 = state_34324__$1;
(statearr_34339_34417[(2)] = null);

(statearr_34339_34417[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (4))){
var inst_34192 = (state_34324[(12)]);
var inst_34192__$1 = (state_34324[(2)]);
var inst_34193 = (inst_34192__$1 == null);
var state_34324__$1 = (function (){var statearr_34340 = state_34324;
(statearr_34340[(12)] = inst_34192__$1);

return statearr_34340;
})();
if(cljs.core.truth_(inst_34193)){
var statearr_34341_34418 = state_34324__$1;
(statearr_34341_34418[(1)] = (5));

} else {
var statearr_34342_34419 = state_34324__$1;
(statearr_34342_34419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (15))){
var inst_34203 = (state_34324[(14)]);
var inst_34202 = (state_34324[(15)]);
var inst_34201 = (state_34324[(16)]);
var inst_34204 = (state_34324[(17)]);
var inst_34219 = (state_34324[(2)]);
var inst_34220 = (inst_34204 + (1));
var tmp34336 = inst_34203;
var tmp34337 = inst_34202;
var tmp34338 = inst_34201;
var inst_34201__$1 = tmp34338;
var inst_34202__$1 = tmp34337;
var inst_34203__$1 = tmp34336;
var inst_34204__$1 = inst_34220;
var state_34324__$1 = (function (){var statearr_34343 = state_34324;
(statearr_34343[(14)] = inst_34203__$1);

(statearr_34343[(15)] = inst_34202__$1);

(statearr_34343[(16)] = inst_34201__$1);

(statearr_34343[(17)] = inst_34204__$1);

(statearr_34343[(18)] = inst_34219);

return statearr_34343;
})();
var statearr_34344_34420 = state_34324__$1;
(statearr_34344_34420[(2)] = null);

(statearr_34344_34420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (21))){
var inst_34246 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34348_34421 = state_34324__$1;
(statearr_34348_34421[(2)] = inst_34246);

(statearr_34348_34421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (31))){
var inst_34272 = (state_34324[(9)]);
var inst_34276 = done.call(null,null);
var inst_34277 = cljs.core.async.untap_STAR_.call(null,m,inst_34272);
var state_34324__$1 = (function (){var statearr_34349 = state_34324;
(statearr_34349[(19)] = inst_34276);

return statearr_34349;
})();
var statearr_34350_34422 = state_34324__$1;
(statearr_34350_34422[(2)] = inst_34277);

(statearr_34350_34422[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (32))){
var inst_34266 = (state_34324[(20)]);
var inst_34264 = (state_34324[(21)]);
var inst_34265 = (state_34324[(10)]);
var inst_34267 = (state_34324[(11)]);
var inst_34279 = (state_34324[(2)]);
var inst_34280 = (inst_34267 + (1));
var tmp34345 = inst_34266;
var tmp34346 = inst_34264;
var tmp34347 = inst_34265;
var inst_34264__$1 = tmp34346;
var inst_34265__$1 = tmp34347;
var inst_34266__$1 = tmp34345;
var inst_34267__$1 = inst_34280;
var state_34324__$1 = (function (){var statearr_34351 = state_34324;
(statearr_34351[(20)] = inst_34266__$1);

(statearr_34351[(21)] = inst_34264__$1);

(statearr_34351[(10)] = inst_34265__$1);

(statearr_34351[(11)] = inst_34267__$1);

(statearr_34351[(22)] = inst_34279);

return statearr_34351;
})();
var statearr_34352_34423 = state_34324__$1;
(statearr_34352_34423[(2)] = null);

(statearr_34352_34423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (40))){
var inst_34292 = (state_34324[(23)]);
var inst_34296 = done.call(null,null);
var inst_34297 = cljs.core.async.untap_STAR_.call(null,m,inst_34292);
var state_34324__$1 = (function (){var statearr_34353 = state_34324;
(statearr_34353[(24)] = inst_34296);

return statearr_34353;
})();
var statearr_34354_34424 = state_34324__$1;
(statearr_34354_34424[(2)] = inst_34297);

(statearr_34354_34424[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (33))){
var inst_34283 = (state_34324[(25)]);
var inst_34285 = cljs.core.chunked_seq_QMARK_.call(null,inst_34283);
var state_34324__$1 = state_34324;
if(inst_34285){
var statearr_34355_34425 = state_34324__$1;
(statearr_34355_34425[(1)] = (36));

} else {
var statearr_34356_34426 = state_34324__$1;
(statearr_34356_34426[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (13))){
var inst_34213 = (state_34324[(26)]);
var inst_34216 = cljs.core.async.close_BANG_.call(null,inst_34213);
var state_34324__$1 = state_34324;
var statearr_34357_34427 = state_34324__$1;
(statearr_34357_34427[(2)] = inst_34216);

(statearr_34357_34427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (22))){
var inst_34236 = (state_34324[(8)]);
var inst_34239 = cljs.core.async.close_BANG_.call(null,inst_34236);
var state_34324__$1 = state_34324;
var statearr_34358_34428 = state_34324__$1;
(statearr_34358_34428[(2)] = inst_34239);

(statearr_34358_34428[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (36))){
var inst_34283 = (state_34324[(25)]);
var inst_34287 = cljs.core.chunk_first.call(null,inst_34283);
var inst_34288 = cljs.core.chunk_rest.call(null,inst_34283);
var inst_34289 = cljs.core.count.call(null,inst_34287);
var inst_34264 = inst_34288;
var inst_34265 = inst_34287;
var inst_34266 = inst_34289;
var inst_34267 = (0);
var state_34324__$1 = (function (){var statearr_34359 = state_34324;
(statearr_34359[(20)] = inst_34266);

(statearr_34359[(21)] = inst_34264);

(statearr_34359[(10)] = inst_34265);

(statearr_34359[(11)] = inst_34267);

return statearr_34359;
})();
var statearr_34360_34429 = state_34324__$1;
(statearr_34360_34429[(2)] = null);

(statearr_34360_34429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (41))){
var inst_34283 = (state_34324[(25)]);
var inst_34299 = (state_34324[(2)]);
var inst_34300 = cljs.core.next.call(null,inst_34283);
var inst_34264 = inst_34300;
var inst_34265 = null;
var inst_34266 = (0);
var inst_34267 = (0);
var state_34324__$1 = (function (){var statearr_34361 = state_34324;
(statearr_34361[(20)] = inst_34266);

(statearr_34361[(21)] = inst_34264);

(statearr_34361[(10)] = inst_34265);

(statearr_34361[(11)] = inst_34267);

(statearr_34361[(27)] = inst_34299);

return statearr_34361;
})();
var statearr_34362_34430 = state_34324__$1;
(statearr_34362_34430[(2)] = null);

(statearr_34362_34430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (43))){
var state_34324__$1 = state_34324;
var statearr_34363_34431 = state_34324__$1;
(statearr_34363_34431[(2)] = null);

(statearr_34363_34431[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (29))){
var inst_34308 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34364_34432 = state_34324__$1;
(statearr_34364_34432[(2)] = inst_34308);

(statearr_34364_34432[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (44))){
var inst_34317 = (state_34324[(2)]);
var state_34324__$1 = (function (){var statearr_34365 = state_34324;
(statearr_34365[(28)] = inst_34317);

return statearr_34365;
})();
var statearr_34366_34433 = state_34324__$1;
(statearr_34366_34433[(2)] = null);

(statearr_34366_34433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (6))){
var inst_34256 = (state_34324[(29)]);
var inst_34255 = cljs.core.deref.call(null,cs);
var inst_34256__$1 = cljs.core.keys.call(null,inst_34255);
var inst_34257 = cljs.core.count.call(null,inst_34256__$1);
var inst_34258 = cljs.core.reset_BANG_.call(null,dctr,inst_34257);
var inst_34263 = cljs.core.seq.call(null,inst_34256__$1);
var inst_34264 = inst_34263;
var inst_34265 = null;
var inst_34266 = (0);
var inst_34267 = (0);
var state_34324__$1 = (function (){var statearr_34367 = state_34324;
(statearr_34367[(20)] = inst_34266);

(statearr_34367[(21)] = inst_34264);

(statearr_34367[(29)] = inst_34256__$1);

(statearr_34367[(10)] = inst_34265);

(statearr_34367[(11)] = inst_34267);

(statearr_34367[(30)] = inst_34258);

return statearr_34367;
})();
var statearr_34368_34434 = state_34324__$1;
(statearr_34368_34434[(2)] = null);

(statearr_34368_34434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (28))){
var inst_34264 = (state_34324[(21)]);
var inst_34283 = (state_34324[(25)]);
var inst_34283__$1 = cljs.core.seq.call(null,inst_34264);
var state_34324__$1 = (function (){var statearr_34369 = state_34324;
(statearr_34369[(25)] = inst_34283__$1);

return statearr_34369;
})();
if(inst_34283__$1){
var statearr_34370_34435 = state_34324__$1;
(statearr_34370_34435[(1)] = (33));

} else {
var statearr_34371_34436 = state_34324__$1;
(statearr_34371_34436[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (25))){
var inst_34266 = (state_34324[(20)]);
var inst_34267 = (state_34324[(11)]);
var inst_34269 = (inst_34267 < inst_34266);
var inst_34270 = inst_34269;
var state_34324__$1 = state_34324;
if(cljs.core.truth_(inst_34270)){
var statearr_34372_34437 = state_34324__$1;
(statearr_34372_34437[(1)] = (27));

} else {
var statearr_34373_34438 = state_34324__$1;
(statearr_34373_34438[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (34))){
var state_34324__$1 = state_34324;
var statearr_34374_34439 = state_34324__$1;
(statearr_34374_34439[(2)] = null);

(statearr_34374_34439[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (17))){
var state_34324__$1 = state_34324;
var statearr_34375_34440 = state_34324__$1;
(statearr_34375_34440[(2)] = null);

(statearr_34375_34440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (3))){
var inst_34322 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34324__$1,inst_34322);
} else {
if((state_val_34325 === (12))){
var inst_34251 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34376_34441 = state_34324__$1;
(statearr_34376_34441[(2)] = inst_34251);

(statearr_34376_34441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (2))){
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34324__$1,(4),ch);
} else {
if((state_val_34325 === (23))){
var state_34324__$1 = state_34324;
var statearr_34377_34442 = state_34324__$1;
(statearr_34377_34442[(2)] = null);

(statearr_34377_34442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (35))){
var inst_34306 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34378_34443 = state_34324__$1;
(statearr_34378_34443[(2)] = inst_34306);

(statearr_34378_34443[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (19))){
var inst_34223 = (state_34324[(7)]);
var inst_34227 = cljs.core.chunk_first.call(null,inst_34223);
var inst_34228 = cljs.core.chunk_rest.call(null,inst_34223);
var inst_34229 = cljs.core.count.call(null,inst_34227);
var inst_34201 = inst_34228;
var inst_34202 = inst_34227;
var inst_34203 = inst_34229;
var inst_34204 = (0);
var state_34324__$1 = (function (){var statearr_34379 = state_34324;
(statearr_34379[(14)] = inst_34203);

(statearr_34379[(15)] = inst_34202);

(statearr_34379[(16)] = inst_34201);

(statearr_34379[(17)] = inst_34204);

return statearr_34379;
})();
var statearr_34380_34444 = state_34324__$1;
(statearr_34380_34444[(2)] = null);

(statearr_34380_34444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (11))){
var inst_34223 = (state_34324[(7)]);
var inst_34201 = (state_34324[(16)]);
var inst_34223__$1 = cljs.core.seq.call(null,inst_34201);
var state_34324__$1 = (function (){var statearr_34381 = state_34324;
(statearr_34381[(7)] = inst_34223__$1);

return statearr_34381;
})();
if(inst_34223__$1){
var statearr_34382_34445 = state_34324__$1;
(statearr_34382_34445[(1)] = (16));

} else {
var statearr_34383_34446 = state_34324__$1;
(statearr_34383_34446[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (9))){
var inst_34253 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34384_34447 = state_34324__$1;
(statearr_34384_34447[(2)] = inst_34253);

(statearr_34384_34447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (5))){
var inst_34199 = cljs.core.deref.call(null,cs);
var inst_34200 = cljs.core.seq.call(null,inst_34199);
var inst_34201 = inst_34200;
var inst_34202 = null;
var inst_34203 = (0);
var inst_34204 = (0);
var state_34324__$1 = (function (){var statearr_34385 = state_34324;
(statearr_34385[(14)] = inst_34203);

(statearr_34385[(15)] = inst_34202);

(statearr_34385[(16)] = inst_34201);

(statearr_34385[(17)] = inst_34204);

return statearr_34385;
})();
var statearr_34386_34448 = state_34324__$1;
(statearr_34386_34448[(2)] = null);

(statearr_34386_34448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (14))){
var state_34324__$1 = state_34324;
var statearr_34387_34449 = state_34324__$1;
(statearr_34387_34449[(2)] = null);

(statearr_34387_34449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (45))){
var inst_34314 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34388_34450 = state_34324__$1;
(statearr_34388_34450[(2)] = inst_34314);

(statearr_34388_34450[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (26))){
var inst_34256 = (state_34324[(29)]);
var inst_34310 = (state_34324[(2)]);
var inst_34311 = cljs.core.seq.call(null,inst_34256);
var state_34324__$1 = (function (){var statearr_34389 = state_34324;
(statearr_34389[(31)] = inst_34310);

return statearr_34389;
})();
if(inst_34311){
var statearr_34390_34451 = state_34324__$1;
(statearr_34390_34451[(1)] = (42));

} else {
var statearr_34391_34452 = state_34324__$1;
(statearr_34391_34452[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (16))){
var inst_34223 = (state_34324[(7)]);
var inst_34225 = cljs.core.chunked_seq_QMARK_.call(null,inst_34223);
var state_34324__$1 = state_34324;
if(inst_34225){
var statearr_34392_34453 = state_34324__$1;
(statearr_34392_34453[(1)] = (19));

} else {
var statearr_34393_34454 = state_34324__$1;
(statearr_34393_34454[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (38))){
var inst_34303 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34394_34455 = state_34324__$1;
(statearr_34394_34455[(2)] = inst_34303);

(statearr_34394_34455[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (30))){
var state_34324__$1 = state_34324;
var statearr_34395_34456 = state_34324__$1;
(statearr_34395_34456[(2)] = null);

(statearr_34395_34456[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (10))){
var inst_34202 = (state_34324[(15)]);
var inst_34204 = (state_34324[(17)]);
var inst_34212 = cljs.core._nth.call(null,inst_34202,inst_34204);
var inst_34213 = cljs.core.nth.call(null,inst_34212,(0),null);
var inst_34214 = cljs.core.nth.call(null,inst_34212,(1),null);
var state_34324__$1 = (function (){var statearr_34396 = state_34324;
(statearr_34396[(26)] = inst_34213);

return statearr_34396;
})();
if(cljs.core.truth_(inst_34214)){
var statearr_34397_34457 = state_34324__$1;
(statearr_34397_34457[(1)] = (13));

} else {
var statearr_34398_34458 = state_34324__$1;
(statearr_34398_34458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (18))){
var inst_34249 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34399_34459 = state_34324__$1;
(statearr_34399_34459[(2)] = inst_34249);

(statearr_34399_34459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (42))){
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34324__$1,(45),dchan);
} else {
if((state_val_34325 === (37))){
var inst_34292 = (state_34324[(23)]);
var inst_34283 = (state_34324[(25)]);
var inst_34192 = (state_34324[(12)]);
var inst_34292__$1 = cljs.core.first.call(null,inst_34283);
var inst_34293 = cljs.core.async.put_BANG_.call(null,inst_34292__$1,inst_34192,done);
var state_34324__$1 = (function (){var statearr_34400 = state_34324;
(statearr_34400[(23)] = inst_34292__$1);

return statearr_34400;
})();
if(cljs.core.truth_(inst_34293)){
var statearr_34401_34460 = state_34324__$1;
(statearr_34401_34460[(1)] = (39));

} else {
var statearr_34402_34461 = state_34324__$1;
(statearr_34402_34461[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (8))){
var inst_34203 = (state_34324[(14)]);
var inst_34204 = (state_34324[(17)]);
var inst_34206 = (inst_34204 < inst_34203);
var inst_34207 = inst_34206;
var state_34324__$1 = state_34324;
if(cljs.core.truth_(inst_34207)){
var statearr_34403_34462 = state_34324__$1;
(statearr_34403_34462[(1)] = (10));

} else {
var statearr_34404_34463 = state_34324__$1;
(statearr_34404_34463[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__33491__auto__ = null;
var cljs$core$async$mult_$_state_machine__33491__auto____0 = (function (){
var statearr_34405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34405[(0)] = cljs$core$async$mult_$_state_machine__33491__auto__);

(statearr_34405[(1)] = (1));

return statearr_34405;
});
var cljs$core$async$mult_$_state_machine__33491__auto____1 = (function (state_34324){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_34324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e34406){if((e34406 instanceof Object)){
var ex__33494__auto__ = e34406;
var statearr_34407_34464 = state_34324;
(statearr_34407_34464[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34465 = state_34324;
state_34324 = G__34465;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33491__auto__ = function(state_34324){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33491__auto____1.call(this,state_34324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33491__auto____0;
cljs$core$async$mult_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33491__auto____1;
return cljs$core$async$mult_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_34408 = f__33588__auto__.call(null);
(statearr_34408[(6)] = c__33587__auto___34409);

return statearr_34408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34467 = arguments.length;
switch (G__34467) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34469 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34469.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34470 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34470.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34471 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34471.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34472 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,state_map);
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34472.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34473 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,mode);
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34473.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___34483 = arguments.length;
var i__5767__auto___34484 = (0);
while(true){
if((i__5767__auto___34484 < len__5766__auto___34483)){
args__5772__auto__.push((arguments[i__5767__auto___34484]));

var G__34485 = (i__5767__auto___34484 + (1));
i__5767__auto___34484 = G__34485;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34478){
var map__34479 = p__34478;
var map__34479__$1 = cljs.core.__destructure_map.call(null,map__34479);
var opts = map__34479__$1;
var statearr_34480_34486 = state;
(statearr_34480_34486[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_34481_34487 = state;
(statearr_34481_34487[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34482_34488 = state;
(statearr_34482_34488[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34474){
var G__34475 = cljs.core.first.call(null,seq34474);
var seq34474__$1 = cljs.core.next.call(null,seq34474);
var G__34476 = cljs.core.first.call(null,seq34474__$1);
var seq34474__$2 = cljs.core.next.call(null,seq34474__$1);
var G__34477 = cljs.core.first.call(null,seq34474__$2);
var seq34474__$3 = cljs.core.next.call(null,seq34474__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34475,G__34476,G__34477,seq34474__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34489 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34490){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34490 = meta34490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34491,meta34490__$1){
var self__ = this;
var _34491__$1 = this;
return (new cljs.core.async.t_cljs$core$async34489(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34490__$1));
}));

(cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34491){
var self__ = this;
var _34491__$1 = this;
return self__.meta34490;
}));

(cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34490","meta34490",837541776,null)], null);
}));

(cljs.core.async.t_cljs$core$async34489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34489");

(cljs.core.async.t_cljs$core$async34489.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async34489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34489.
 */
cljs.core.async.__GT_t_cljs$core$async34489 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34489(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34490){
return (new cljs.core.async.t_cljs$core$async34489(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34490));
});

}

return (new cljs.core.async.t_cljs$core$async34489(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33587__auto___34603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34519 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
if(cljs.core.truth_(inst_34519)){
var statearr_34561_34604 = state_34559__$1;
(statearr_34561_34604[(1)] = (8));

} else {
var statearr_34562_34605 = state_34559__$1;
(statearr_34562_34605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (20))){
var inst_34512 = (state_34559[(7)]);
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34559__$1,(23),out,inst_34512);
} else {
if((state_val_34560 === (1))){
var inst_34495 = calc_state.call(null);
var inst_34496 = cljs.core.__destructure_map.call(null,inst_34495);
var inst_34497 = cljs.core.get.call(null,inst_34496,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34498 = cljs.core.get.call(null,inst_34496,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34499 = cljs.core.get.call(null,inst_34496,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34500 = inst_34495;
var state_34559__$1 = (function (){var statearr_34563 = state_34559;
(statearr_34563[(8)] = inst_34499);

(statearr_34563[(9)] = inst_34498);

(statearr_34563[(10)] = inst_34497);

(statearr_34563[(11)] = inst_34500);

return statearr_34563;
})();
var statearr_34564_34606 = state_34559__$1;
(statearr_34564_34606[(2)] = null);

(statearr_34564_34606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (24))){
var inst_34503 = (state_34559[(12)]);
var inst_34500 = inst_34503;
var state_34559__$1 = (function (){var statearr_34565 = state_34559;
(statearr_34565[(11)] = inst_34500);

return statearr_34565;
})();
var statearr_34566_34607 = state_34559__$1;
(statearr_34566_34607[(2)] = null);

(statearr_34566_34607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (4))){
var inst_34514 = (state_34559[(13)]);
var inst_34512 = (state_34559[(7)]);
var inst_34511 = (state_34559[(2)]);
var inst_34512__$1 = cljs.core.nth.call(null,inst_34511,(0),null);
var inst_34513 = cljs.core.nth.call(null,inst_34511,(1),null);
var inst_34514__$1 = (inst_34512__$1 == null);
var state_34559__$1 = (function (){var statearr_34567 = state_34559;
(statearr_34567[(14)] = inst_34513);

(statearr_34567[(13)] = inst_34514__$1);

(statearr_34567[(7)] = inst_34512__$1);

return statearr_34567;
})();
if(cljs.core.truth_(inst_34514__$1)){
var statearr_34568_34608 = state_34559__$1;
(statearr_34568_34608[(1)] = (5));

} else {
var statearr_34569_34609 = state_34559__$1;
(statearr_34569_34609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (15))){
var inst_34533 = (state_34559[(15)]);
var inst_34504 = (state_34559[(16)]);
var inst_34533__$1 = cljs.core.empty_QMARK_.call(null,inst_34504);
var state_34559__$1 = (function (){var statearr_34570 = state_34559;
(statearr_34570[(15)] = inst_34533__$1);

return statearr_34570;
})();
if(inst_34533__$1){
var statearr_34571_34610 = state_34559__$1;
(statearr_34571_34610[(1)] = (17));

} else {
var statearr_34572_34611 = state_34559__$1;
(statearr_34572_34611[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (21))){
var inst_34503 = (state_34559[(12)]);
var inst_34500 = inst_34503;
var state_34559__$1 = (function (){var statearr_34573 = state_34559;
(statearr_34573[(11)] = inst_34500);

return statearr_34573;
})();
var statearr_34574_34612 = state_34559__$1;
(statearr_34574_34612[(2)] = null);

(statearr_34574_34612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (13))){
var inst_34526 = (state_34559[(2)]);
var inst_34527 = calc_state.call(null);
var inst_34500 = inst_34527;
var state_34559__$1 = (function (){var statearr_34575 = state_34559;
(statearr_34575[(17)] = inst_34526);

(statearr_34575[(11)] = inst_34500);

return statearr_34575;
})();
var statearr_34576_34613 = state_34559__$1;
(statearr_34576_34613[(2)] = null);

(statearr_34576_34613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (22))){
var inst_34553 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34577_34614 = state_34559__$1;
(statearr_34577_34614[(2)] = inst_34553);

(statearr_34577_34614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (6))){
var inst_34513 = (state_34559[(14)]);
var inst_34517 = cljs.core._EQ_.call(null,inst_34513,change);
var state_34559__$1 = state_34559;
var statearr_34578_34615 = state_34559__$1;
(statearr_34578_34615[(2)] = inst_34517);

(statearr_34578_34615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (25))){
var state_34559__$1 = state_34559;
var statearr_34579_34616 = state_34559__$1;
(statearr_34579_34616[(2)] = null);

(statearr_34579_34616[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (17))){
var inst_34513 = (state_34559[(14)]);
var inst_34505 = (state_34559[(18)]);
var inst_34535 = inst_34505.call(null,inst_34513);
var inst_34536 = cljs.core.not.call(null,inst_34535);
var state_34559__$1 = state_34559;
var statearr_34580_34617 = state_34559__$1;
(statearr_34580_34617[(2)] = inst_34536);

(statearr_34580_34617[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (3))){
var inst_34557 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34559__$1,inst_34557);
} else {
if((state_val_34560 === (12))){
var state_34559__$1 = state_34559;
var statearr_34581_34618 = state_34559__$1;
(statearr_34581_34618[(2)] = null);

(statearr_34581_34618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (2))){
var inst_34503 = (state_34559[(12)]);
var inst_34500 = (state_34559[(11)]);
var inst_34503__$1 = cljs.core.__destructure_map.call(null,inst_34500);
var inst_34504 = cljs.core.get.call(null,inst_34503__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34505 = cljs.core.get.call(null,inst_34503__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34506 = cljs.core.get.call(null,inst_34503__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34559__$1 = (function (){var statearr_34582 = state_34559;
(statearr_34582[(12)] = inst_34503__$1);

(statearr_34582[(18)] = inst_34505);

(statearr_34582[(16)] = inst_34504);

return statearr_34582;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34559__$1,(4),inst_34506);
} else {
if((state_val_34560 === (23))){
var inst_34544 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
if(cljs.core.truth_(inst_34544)){
var statearr_34583_34619 = state_34559__$1;
(statearr_34583_34619[(1)] = (24));

} else {
var statearr_34584_34620 = state_34559__$1;
(statearr_34584_34620[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (19))){
var inst_34539 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34585_34621 = state_34559__$1;
(statearr_34585_34621[(2)] = inst_34539);

(statearr_34585_34621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (11))){
var inst_34513 = (state_34559[(14)]);
var inst_34523 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34513);
var state_34559__$1 = state_34559;
var statearr_34586_34622 = state_34559__$1;
(statearr_34586_34622[(2)] = inst_34523);

(statearr_34586_34622[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (9))){
var inst_34513 = (state_34559[(14)]);
var inst_34504 = (state_34559[(16)]);
var inst_34530 = (state_34559[(19)]);
var inst_34530__$1 = inst_34504.call(null,inst_34513);
var state_34559__$1 = (function (){var statearr_34587 = state_34559;
(statearr_34587[(19)] = inst_34530__$1);

return statearr_34587;
})();
if(cljs.core.truth_(inst_34530__$1)){
var statearr_34588_34623 = state_34559__$1;
(statearr_34588_34623[(1)] = (14));

} else {
var statearr_34589_34624 = state_34559__$1;
(statearr_34589_34624[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34514 = (state_34559[(13)]);
var state_34559__$1 = state_34559;
var statearr_34590_34625 = state_34559__$1;
(statearr_34590_34625[(2)] = inst_34514);

(statearr_34590_34625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (14))){
var inst_34530 = (state_34559[(19)]);
var state_34559__$1 = state_34559;
var statearr_34591_34626 = state_34559__$1;
(statearr_34591_34626[(2)] = inst_34530);

(statearr_34591_34626[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (26))){
var inst_34549 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34592_34627 = state_34559__$1;
(statearr_34592_34627[(2)] = inst_34549);

(statearr_34592_34627[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (16))){
var inst_34541 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
if(cljs.core.truth_(inst_34541)){
var statearr_34593_34628 = state_34559__$1;
(statearr_34593_34628[(1)] = (20));

} else {
var statearr_34594_34629 = state_34559__$1;
(statearr_34594_34629[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (10))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34595_34630 = state_34559__$1;
(statearr_34595_34630[(2)] = inst_34555);

(statearr_34595_34630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (18))){
var inst_34533 = (state_34559[(15)]);
var state_34559__$1 = state_34559;
var statearr_34596_34631 = state_34559__$1;
(statearr_34596_34631[(2)] = inst_34533);

(statearr_34596_34631[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (8))){
var inst_34512 = (state_34559[(7)]);
var inst_34521 = (inst_34512 == null);
var state_34559__$1 = state_34559;
if(cljs.core.truth_(inst_34521)){
var statearr_34597_34632 = state_34559__$1;
(statearr_34597_34632[(1)] = (11));

} else {
var statearr_34598_34633 = state_34559__$1;
(statearr_34598_34633[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__33491__auto__ = null;
var cljs$core$async$mix_$_state_machine__33491__auto____0 = (function (){
var statearr_34599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34599[(0)] = cljs$core$async$mix_$_state_machine__33491__auto__);

(statearr_34599[(1)] = (1));

return statearr_34599;
});
var cljs$core$async$mix_$_state_machine__33491__auto____1 = (function (state_34559){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_34559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e34600){if((e34600 instanceof Object)){
var ex__33494__auto__ = e34600;
var statearr_34601_34634 = state_34559;
(statearr_34601_34634[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34635 = state_34559;
state_34559 = G__34635;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33491__auto__ = function(state_34559){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33491__auto____1.call(this,state_34559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33491__auto____0;
cljs$core$async$mix_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33491__auto____1;
return cljs$core$async$mix_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_34602 = f__33588__auto__.call(null);
(statearr_34602[(6)] = c__33587__auto___34603);

return statearr_34602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34638 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34638.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34639 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34639.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34640 = (function() {
var G__34641 = null;
var G__34641__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__34641__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__34641 = function(p,v){
switch(arguments.length){
case 1:
return G__34641__1.call(this,p);
case 2:
return G__34641__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34641.cljs$core$IFn$_invoke$arity$1 = G__34641__1;
G__34641.cljs$core$IFn$_invoke$arity$2 = G__34641__2;
return G__34641;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34637 = arguments.length;
switch (G__34637) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34640.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34640.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34645 = arguments.length;
switch (G__34645) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__34643_SHARP_){
if(cljs.core.truth_(p1__34643_SHARP_.call(null,topic))){
return p1__34643_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34643_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34646 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34647){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34647 = meta34647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34648,meta34647__$1){
var self__ = this;
var _34648__$1 = this;
return (new cljs.core.async.t_cljs$core$async34646(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34647__$1));
}));

(cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34648){
var self__ = this;
var _34648__$1 = this;
return self__.meta34647;
}));

(cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34647","meta34647",1269020302,null)], null);
}));

(cljs.core.async.t_cljs$core$async34646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34646");

(cljs.core.async.t_cljs$core$async34646.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async34646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34646.
 */
cljs.core.async.__GT_t_cljs$core$async34646 = (function cljs$core$async$__GT_t_cljs$core$async34646(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34647){
return (new cljs.core.async.t_cljs$core$async34646(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34647));
});

}

return (new cljs.core.async.t_cljs$core$async34646(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33587__auto___34766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_34720){
var state_val_34721 = (state_34720[(1)]);
if((state_val_34721 === (7))){
var inst_34716 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
var statearr_34722_34767 = state_34720__$1;
(statearr_34722_34767[(2)] = inst_34716);

(statearr_34722_34767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (20))){
var state_34720__$1 = state_34720;
var statearr_34723_34768 = state_34720__$1;
(statearr_34723_34768[(2)] = null);

(statearr_34723_34768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (1))){
var state_34720__$1 = state_34720;
var statearr_34724_34769 = state_34720__$1;
(statearr_34724_34769[(2)] = null);

(statearr_34724_34769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (24))){
var inst_34699 = (state_34720[(7)]);
var inst_34708 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34699);
var state_34720__$1 = state_34720;
var statearr_34725_34770 = state_34720__$1;
(statearr_34725_34770[(2)] = inst_34708);

(statearr_34725_34770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (4))){
var inst_34651 = (state_34720[(8)]);
var inst_34651__$1 = (state_34720[(2)]);
var inst_34652 = (inst_34651__$1 == null);
var state_34720__$1 = (function (){var statearr_34726 = state_34720;
(statearr_34726[(8)] = inst_34651__$1);

return statearr_34726;
})();
if(cljs.core.truth_(inst_34652)){
var statearr_34727_34771 = state_34720__$1;
(statearr_34727_34771[(1)] = (5));

} else {
var statearr_34728_34772 = state_34720__$1;
(statearr_34728_34772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (15))){
var inst_34693 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
var statearr_34729_34773 = state_34720__$1;
(statearr_34729_34773[(2)] = inst_34693);

(statearr_34729_34773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (21))){
var inst_34713 = (state_34720[(2)]);
var state_34720__$1 = (function (){var statearr_34730 = state_34720;
(statearr_34730[(9)] = inst_34713);

return statearr_34730;
})();
var statearr_34731_34774 = state_34720__$1;
(statearr_34731_34774[(2)] = null);

(statearr_34731_34774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (13))){
var inst_34675 = (state_34720[(10)]);
var inst_34677 = cljs.core.chunked_seq_QMARK_.call(null,inst_34675);
var state_34720__$1 = state_34720;
if(inst_34677){
var statearr_34732_34775 = state_34720__$1;
(statearr_34732_34775[(1)] = (16));

} else {
var statearr_34733_34776 = state_34720__$1;
(statearr_34733_34776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (22))){
var inst_34705 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
if(cljs.core.truth_(inst_34705)){
var statearr_34734_34777 = state_34720__$1;
(statearr_34734_34777[(1)] = (23));

} else {
var statearr_34735_34778 = state_34720__$1;
(statearr_34735_34778[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (6))){
var inst_34699 = (state_34720[(7)]);
var inst_34651 = (state_34720[(8)]);
var inst_34701 = (state_34720[(11)]);
var inst_34699__$1 = topic_fn.call(null,inst_34651);
var inst_34700 = cljs.core.deref.call(null,mults);
var inst_34701__$1 = cljs.core.get.call(null,inst_34700,inst_34699__$1);
var state_34720__$1 = (function (){var statearr_34736 = state_34720;
(statearr_34736[(7)] = inst_34699__$1);

(statearr_34736[(11)] = inst_34701__$1);

return statearr_34736;
})();
if(cljs.core.truth_(inst_34701__$1)){
var statearr_34737_34779 = state_34720__$1;
(statearr_34737_34779[(1)] = (19));

} else {
var statearr_34738_34780 = state_34720__$1;
(statearr_34738_34780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (25))){
var inst_34710 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
var statearr_34739_34781 = state_34720__$1;
(statearr_34739_34781[(2)] = inst_34710);

(statearr_34739_34781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (17))){
var inst_34675 = (state_34720[(10)]);
var inst_34684 = cljs.core.first.call(null,inst_34675);
var inst_34685 = cljs.core.async.muxch_STAR_.call(null,inst_34684);
var inst_34686 = cljs.core.async.close_BANG_.call(null,inst_34685);
var inst_34687 = cljs.core.next.call(null,inst_34675);
var inst_34661 = inst_34687;
var inst_34662 = null;
var inst_34663 = (0);
var inst_34664 = (0);
var state_34720__$1 = (function (){var statearr_34740 = state_34720;
(statearr_34740[(12)] = inst_34663);

(statearr_34740[(13)] = inst_34664);

(statearr_34740[(14)] = inst_34661);

(statearr_34740[(15)] = inst_34686);

(statearr_34740[(16)] = inst_34662);

return statearr_34740;
})();
var statearr_34741_34782 = state_34720__$1;
(statearr_34741_34782[(2)] = null);

(statearr_34741_34782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (3))){
var inst_34718 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34720__$1,inst_34718);
} else {
if((state_val_34721 === (12))){
var inst_34695 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
var statearr_34742_34783 = state_34720__$1;
(statearr_34742_34783[(2)] = inst_34695);

(statearr_34742_34783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (2))){
var state_34720__$1 = state_34720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34720__$1,(4),ch);
} else {
if((state_val_34721 === (23))){
var state_34720__$1 = state_34720;
var statearr_34743_34784 = state_34720__$1;
(statearr_34743_34784[(2)] = null);

(statearr_34743_34784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (19))){
var inst_34651 = (state_34720[(8)]);
var inst_34701 = (state_34720[(11)]);
var inst_34703 = cljs.core.async.muxch_STAR_.call(null,inst_34701);
var state_34720__$1 = state_34720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34720__$1,(22),inst_34703,inst_34651);
} else {
if((state_val_34721 === (11))){
var inst_34675 = (state_34720[(10)]);
var inst_34661 = (state_34720[(14)]);
var inst_34675__$1 = cljs.core.seq.call(null,inst_34661);
var state_34720__$1 = (function (){var statearr_34744 = state_34720;
(statearr_34744[(10)] = inst_34675__$1);

return statearr_34744;
})();
if(inst_34675__$1){
var statearr_34745_34785 = state_34720__$1;
(statearr_34745_34785[(1)] = (13));

} else {
var statearr_34746_34786 = state_34720__$1;
(statearr_34746_34786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (9))){
var inst_34697 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
var statearr_34747_34787 = state_34720__$1;
(statearr_34747_34787[(2)] = inst_34697);

(statearr_34747_34787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (5))){
var inst_34658 = cljs.core.deref.call(null,mults);
var inst_34659 = cljs.core.vals.call(null,inst_34658);
var inst_34660 = cljs.core.seq.call(null,inst_34659);
var inst_34661 = inst_34660;
var inst_34662 = null;
var inst_34663 = (0);
var inst_34664 = (0);
var state_34720__$1 = (function (){var statearr_34748 = state_34720;
(statearr_34748[(12)] = inst_34663);

(statearr_34748[(13)] = inst_34664);

(statearr_34748[(14)] = inst_34661);

(statearr_34748[(16)] = inst_34662);

return statearr_34748;
})();
var statearr_34749_34788 = state_34720__$1;
(statearr_34749_34788[(2)] = null);

(statearr_34749_34788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (14))){
var state_34720__$1 = state_34720;
var statearr_34753_34789 = state_34720__$1;
(statearr_34753_34789[(2)] = null);

(statearr_34753_34789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (16))){
var inst_34675 = (state_34720[(10)]);
var inst_34679 = cljs.core.chunk_first.call(null,inst_34675);
var inst_34680 = cljs.core.chunk_rest.call(null,inst_34675);
var inst_34681 = cljs.core.count.call(null,inst_34679);
var inst_34661 = inst_34680;
var inst_34662 = inst_34679;
var inst_34663 = inst_34681;
var inst_34664 = (0);
var state_34720__$1 = (function (){var statearr_34754 = state_34720;
(statearr_34754[(12)] = inst_34663);

(statearr_34754[(13)] = inst_34664);

(statearr_34754[(14)] = inst_34661);

(statearr_34754[(16)] = inst_34662);

return statearr_34754;
})();
var statearr_34755_34790 = state_34720__$1;
(statearr_34755_34790[(2)] = null);

(statearr_34755_34790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (10))){
var inst_34663 = (state_34720[(12)]);
var inst_34664 = (state_34720[(13)]);
var inst_34661 = (state_34720[(14)]);
var inst_34662 = (state_34720[(16)]);
var inst_34669 = cljs.core._nth.call(null,inst_34662,inst_34664);
var inst_34670 = cljs.core.async.muxch_STAR_.call(null,inst_34669);
var inst_34671 = cljs.core.async.close_BANG_.call(null,inst_34670);
var inst_34672 = (inst_34664 + (1));
var tmp34750 = inst_34663;
var tmp34751 = inst_34661;
var tmp34752 = inst_34662;
var inst_34661__$1 = tmp34751;
var inst_34662__$1 = tmp34752;
var inst_34663__$1 = tmp34750;
var inst_34664__$1 = inst_34672;
var state_34720__$1 = (function (){var statearr_34756 = state_34720;
(statearr_34756[(17)] = inst_34671);

(statearr_34756[(12)] = inst_34663__$1);

(statearr_34756[(13)] = inst_34664__$1);

(statearr_34756[(14)] = inst_34661__$1);

(statearr_34756[(16)] = inst_34662__$1);

return statearr_34756;
})();
var statearr_34757_34791 = state_34720__$1;
(statearr_34757_34791[(2)] = null);

(statearr_34757_34791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (18))){
var inst_34690 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
var statearr_34758_34792 = state_34720__$1;
(statearr_34758_34792[(2)] = inst_34690);

(statearr_34758_34792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (8))){
var inst_34663 = (state_34720[(12)]);
var inst_34664 = (state_34720[(13)]);
var inst_34666 = (inst_34664 < inst_34663);
var inst_34667 = inst_34666;
var state_34720__$1 = state_34720;
if(cljs.core.truth_(inst_34667)){
var statearr_34759_34793 = state_34720__$1;
(statearr_34759_34793[(1)] = (10));

} else {
var statearr_34760_34794 = state_34720__$1;
(statearr_34760_34794[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_34761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34761[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_34761[(1)] = (1));

return statearr_34761;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_34720){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_34720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e34762){if((e34762 instanceof Object)){
var ex__33494__auto__ = e34762;
var statearr_34763_34795 = state_34720;
(statearr_34763_34795[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34796 = state_34720;
state_34720 = G__34796;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_34720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_34720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_34764 = f__33588__auto__.call(null);
(statearr_34764[(6)] = c__33587__auto___34766);

return statearr_34764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34798 = arguments.length;
switch (G__34798) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34801 = arguments.length;
switch (G__34801) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34804 = arguments.length;
switch (G__34804) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__33587__auto___34871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_34843){
var state_val_34844 = (state_34843[(1)]);
if((state_val_34844 === (7))){
var state_34843__$1 = state_34843;
var statearr_34845_34872 = state_34843__$1;
(statearr_34845_34872[(2)] = null);

(statearr_34845_34872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (1))){
var state_34843__$1 = state_34843;
var statearr_34846_34873 = state_34843__$1;
(statearr_34846_34873[(2)] = null);

(statearr_34846_34873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (4))){
var inst_34807 = (state_34843[(7)]);
var inst_34809 = (inst_34807 < cnt);
var state_34843__$1 = state_34843;
if(cljs.core.truth_(inst_34809)){
var statearr_34847_34874 = state_34843__$1;
(statearr_34847_34874[(1)] = (6));

} else {
var statearr_34848_34875 = state_34843__$1;
(statearr_34848_34875[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (15))){
var inst_34839 = (state_34843[(2)]);
var state_34843__$1 = state_34843;
var statearr_34849_34876 = state_34843__$1;
(statearr_34849_34876[(2)] = inst_34839);

(statearr_34849_34876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (13))){
var inst_34832 = cljs.core.async.close_BANG_.call(null,out);
var state_34843__$1 = state_34843;
var statearr_34850_34877 = state_34843__$1;
(statearr_34850_34877[(2)] = inst_34832);

(statearr_34850_34877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (6))){
var state_34843__$1 = state_34843;
var statearr_34851_34878 = state_34843__$1;
(statearr_34851_34878[(2)] = null);

(statearr_34851_34878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (3))){
var inst_34841 = (state_34843[(2)]);
var state_34843__$1 = state_34843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34843__$1,inst_34841);
} else {
if((state_val_34844 === (12))){
var inst_34829 = (state_34843[(8)]);
var inst_34829__$1 = (state_34843[(2)]);
var inst_34830 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34829__$1);
var state_34843__$1 = (function (){var statearr_34852 = state_34843;
(statearr_34852[(8)] = inst_34829__$1);

return statearr_34852;
})();
if(cljs.core.truth_(inst_34830)){
var statearr_34853_34879 = state_34843__$1;
(statearr_34853_34879[(1)] = (13));

} else {
var statearr_34854_34880 = state_34843__$1;
(statearr_34854_34880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (2))){
var inst_34806 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34807 = (0);
var state_34843__$1 = (function (){var statearr_34855 = state_34843;
(statearr_34855[(7)] = inst_34807);

(statearr_34855[(9)] = inst_34806);

return statearr_34855;
})();
var statearr_34856_34881 = state_34843__$1;
(statearr_34856_34881[(2)] = null);

(statearr_34856_34881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (11))){
var inst_34807 = (state_34843[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34843,(10),Object,null,(9));
var inst_34816 = chs__$1.call(null,inst_34807);
var inst_34817 = done.call(null,inst_34807);
var inst_34818 = cljs.core.async.take_BANG_.call(null,inst_34816,inst_34817);
var state_34843__$1 = state_34843;
var statearr_34857_34882 = state_34843__$1;
(statearr_34857_34882[(2)] = inst_34818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34843__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (9))){
var inst_34807 = (state_34843[(7)]);
var inst_34820 = (state_34843[(2)]);
var inst_34821 = (inst_34807 + (1));
var inst_34807__$1 = inst_34821;
var state_34843__$1 = (function (){var statearr_34858 = state_34843;
(statearr_34858[(7)] = inst_34807__$1);

(statearr_34858[(10)] = inst_34820);

return statearr_34858;
})();
var statearr_34859_34883 = state_34843__$1;
(statearr_34859_34883[(2)] = null);

(statearr_34859_34883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (5))){
var inst_34827 = (state_34843[(2)]);
var state_34843__$1 = (function (){var statearr_34860 = state_34843;
(statearr_34860[(11)] = inst_34827);

return statearr_34860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34843__$1,(12),dchan);
} else {
if((state_val_34844 === (14))){
var inst_34829 = (state_34843[(8)]);
var inst_34834 = cljs.core.apply.call(null,f,inst_34829);
var state_34843__$1 = state_34843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34843__$1,(16),out,inst_34834);
} else {
if((state_val_34844 === (16))){
var inst_34836 = (state_34843[(2)]);
var state_34843__$1 = (function (){var statearr_34861 = state_34843;
(statearr_34861[(12)] = inst_34836);

return statearr_34861;
})();
var statearr_34862_34884 = state_34843__$1;
(statearr_34862_34884[(2)] = null);

(statearr_34862_34884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (10))){
var inst_34811 = (state_34843[(2)]);
var inst_34812 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34843__$1 = (function (){var statearr_34863 = state_34843;
(statearr_34863[(13)] = inst_34811);

return statearr_34863;
})();
var statearr_34864_34885 = state_34843__$1;
(statearr_34864_34885[(2)] = inst_34812);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34843__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (8))){
var inst_34825 = (state_34843[(2)]);
var state_34843__$1 = state_34843;
var statearr_34865_34886 = state_34843__$1;
(statearr_34865_34886[(2)] = inst_34825);

(statearr_34865_34886[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_34866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34866[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_34866[(1)] = (1));

return statearr_34866;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_34843){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_34843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e34867){if((e34867 instanceof Object)){
var ex__33494__auto__ = e34867;
var statearr_34868_34887 = state_34843;
(statearr_34868_34887[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34888 = state_34843;
state_34843 = G__34888;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_34843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_34843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_34869 = f__33588__auto__.call(null);
(statearr_34869[(6)] = c__33587__auto___34871);

return statearr_34869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34891 = arguments.length;
switch (G__34891) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33587__auto___34945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_34923){
var state_val_34924 = (state_34923[(1)]);
if((state_val_34924 === (7))){
var inst_34903 = (state_34923[(7)]);
var inst_34902 = (state_34923[(8)]);
var inst_34902__$1 = (state_34923[(2)]);
var inst_34903__$1 = cljs.core.nth.call(null,inst_34902__$1,(0),null);
var inst_34904 = cljs.core.nth.call(null,inst_34902__$1,(1),null);
var inst_34905 = (inst_34903__$1 == null);
var state_34923__$1 = (function (){var statearr_34925 = state_34923;
(statearr_34925[(7)] = inst_34903__$1);

(statearr_34925[(8)] = inst_34902__$1);

(statearr_34925[(9)] = inst_34904);

return statearr_34925;
})();
if(cljs.core.truth_(inst_34905)){
var statearr_34926_34946 = state_34923__$1;
(statearr_34926_34946[(1)] = (8));

} else {
var statearr_34927_34947 = state_34923__$1;
(statearr_34927_34947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (1))){
var inst_34892 = cljs.core.vec.call(null,chs);
var inst_34893 = inst_34892;
var state_34923__$1 = (function (){var statearr_34928 = state_34923;
(statearr_34928[(10)] = inst_34893);

return statearr_34928;
})();
var statearr_34929_34948 = state_34923__$1;
(statearr_34929_34948[(2)] = null);

(statearr_34929_34948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (4))){
var inst_34893 = (state_34923[(10)]);
var state_34923__$1 = state_34923;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34923__$1,(7),inst_34893);
} else {
if((state_val_34924 === (6))){
var inst_34919 = (state_34923[(2)]);
var state_34923__$1 = state_34923;
var statearr_34930_34949 = state_34923__$1;
(statearr_34930_34949[(2)] = inst_34919);

(statearr_34930_34949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (3))){
var inst_34921 = (state_34923[(2)]);
var state_34923__$1 = state_34923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34923__$1,inst_34921);
} else {
if((state_val_34924 === (2))){
var inst_34893 = (state_34923[(10)]);
var inst_34895 = cljs.core.count.call(null,inst_34893);
var inst_34896 = (inst_34895 > (0));
var state_34923__$1 = state_34923;
if(cljs.core.truth_(inst_34896)){
var statearr_34932_34950 = state_34923__$1;
(statearr_34932_34950[(1)] = (4));

} else {
var statearr_34933_34951 = state_34923__$1;
(statearr_34933_34951[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (11))){
var inst_34893 = (state_34923[(10)]);
var inst_34912 = (state_34923[(2)]);
var tmp34931 = inst_34893;
var inst_34893__$1 = tmp34931;
var state_34923__$1 = (function (){var statearr_34934 = state_34923;
(statearr_34934[(11)] = inst_34912);

(statearr_34934[(10)] = inst_34893__$1);

return statearr_34934;
})();
var statearr_34935_34952 = state_34923__$1;
(statearr_34935_34952[(2)] = null);

(statearr_34935_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (9))){
var inst_34903 = (state_34923[(7)]);
var state_34923__$1 = state_34923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34923__$1,(11),out,inst_34903);
} else {
if((state_val_34924 === (5))){
var inst_34917 = cljs.core.async.close_BANG_.call(null,out);
var state_34923__$1 = state_34923;
var statearr_34936_34953 = state_34923__$1;
(statearr_34936_34953[(2)] = inst_34917);

(statearr_34936_34953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (10))){
var inst_34915 = (state_34923[(2)]);
var state_34923__$1 = state_34923;
var statearr_34937_34954 = state_34923__$1;
(statearr_34937_34954[(2)] = inst_34915);

(statearr_34937_34954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (8))){
var inst_34903 = (state_34923[(7)]);
var inst_34893 = (state_34923[(10)]);
var inst_34902 = (state_34923[(8)]);
var inst_34904 = (state_34923[(9)]);
var inst_34907 = (function (){var cs = inst_34893;
var vec__34898 = inst_34902;
var v = inst_34903;
var c = inst_34904;
return (function (p1__34889_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34889_SHARP_);
});
})();
var inst_34908 = cljs.core.filterv.call(null,inst_34907,inst_34893);
var inst_34893__$1 = inst_34908;
var state_34923__$1 = (function (){var statearr_34938 = state_34923;
(statearr_34938[(10)] = inst_34893__$1);

return statearr_34938;
})();
var statearr_34939_34955 = state_34923__$1;
(statearr_34939_34955[(2)] = null);

(statearr_34939_34955[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_34940 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34940[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_34940[(1)] = (1));

return statearr_34940;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_34923){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_34923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e34941){if((e34941 instanceof Object)){
var ex__33494__auto__ = e34941;
var statearr_34942_34956 = state_34923;
(statearr_34942_34956[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34957 = state_34923;
state_34923 = G__34957;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_34923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_34923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_34943 = f__33588__auto__.call(null);
(statearr_34943[(6)] = c__33587__auto___34945);

return statearr_34943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34959 = arguments.length;
switch (G__34959) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33587__auto___35004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_34983){
var state_val_34984 = (state_34983[(1)]);
if((state_val_34984 === (7))){
var inst_34965 = (state_34983[(7)]);
var inst_34965__$1 = (state_34983[(2)]);
var inst_34966 = (inst_34965__$1 == null);
var inst_34967 = cljs.core.not.call(null,inst_34966);
var state_34983__$1 = (function (){var statearr_34985 = state_34983;
(statearr_34985[(7)] = inst_34965__$1);

return statearr_34985;
})();
if(inst_34967){
var statearr_34986_35005 = state_34983__$1;
(statearr_34986_35005[(1)] = (8));

} else {
var statearr_34987_35006 = state_34983__$1;
(statearr_34987_35006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (1))){
var inst_34960 = (0);
var state_34983__$1 = (function (){var statearr_34988 = state_34983;
(statearr_34988[(8)] = inst_34960);

return statearr_34988;
})();
var statearr_34989_35007 = state_34983__$1;
(statearr_34989_35007[(2)] = null);

(statearr_34989_35007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (4))){
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,(7),ch);
} else {
if((state_val_34984 === (6))){
var inst_34978 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_34990_35008 = state_34983__$1;
(statearr_34990_35008[(2)] = inst_34978);

(statearr_34990_35008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (3))){
var inst_34980 = (state_34983[(2)]);
var inst_34981 = cljs.core.async.close_BANG_.call(null,out);
var state_34983__$1 = (function (){var statearr_34991 = state_34983;
(statearr_34991[(9)] = inst_34980);

return statearr_34991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34983__$1,inst_34981);
} else {
if((state_val_34984 === (2))){
var inst_34960 = (state_34983[(8)]);
var inst_34962 = (inst_34960 < n);
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34962)){
var statearr_34992_35009 = state_34983__$1;
(statearr_34992_35009[(1)] = (4));

} else {
var statearr_34993_35010 = state_34983__$1;
(statearr_34993_35010[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (11))){
var inst_34960 = (state_34983[(8)]);
var inst_34970 = (state_34983[(2)]);
var inst_34971 = (inst_34960 + (1));
var inst_34960__$1 = inst_34971;
var state_34983__$1 = (function (){var statearr_34994 = state_34983;
(statearr_34994[(8)] = inst_34960__$1);

(statearr_34994[(10)] = inst_34970);

return statearr_34994;
})();
var statearr_34995_35011 = state_34983__$1;
(statearr_34995_35011[(2)] = null);

(statearr_34995_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (9))){
var state_34983__$1 = state_34983;
var statearr_34996_35012 = state_34983__$1;
(statearr_34996_35012[(2)] = null);

(statearr_34996_35012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (5))){
var state_34983__$1 = state_34983;
var statearr_34997_35013 = state_34983__$1;
(statearr_34997_35013[(2)] = null);

(statearr_34997_35013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (10))){
var inst_34975 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_34998_35014 = state_34983__$1;
(statearr_34998_35014[(2)] = inst_34975);

(statearr_34998_35014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (8))){
var inst_34965 = (state_34983[(7)]);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34983__$1,(11),out,inst_34965);
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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_34999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34999[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_34999[(1)] = (1));

return statearr_34999;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_34983){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_34983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e35000){if((e35000 instanceof Object)){
var ex__33494__auto__ = e35000;
var statearr_35001_35015 = state_34983;
(statearr_35001_35015[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35016 = state_34983;
state_34983 = G__35016;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_34983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_34983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_35002 = f__33588__auto__.call(null);
(statearr_35002[(6)] = c__33587__auto___35004);

return statearr_35002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35018 = (function (f,ch,meta35019){
this.f = f;
this.ch = ch;
this.meta35019 = meta35019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35020,meta35019__$1){
var self__ = this;
var _35020__$1 = this;
return (new cljs.core.async.t_cljs$core$async35018(self__.f,self__.ch,meta35019__$1));
}));

(cljs.core.async.t_cljs$core$async35018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35020){
var self__ = this;
var _35020__$1 = this;
return self__.meta35019;
}));

(cljs.core.async.t_cljs$core$async35018.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35018.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35018.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35018.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35018.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35021 = (function (f,ch,meta35019,_,fn1,meta35022){
this.f = f;
this.ch = ch;
this.meta35019 = meta35019;
this._ = _;
this.fn1 = fn1;
this.meta35022 = meta35022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35023,meta35022__$1){
var self__ = this;
var _35023__$1 = this;
return (new cljs.core.async.t_cljs$core$async35021(self__.f,self__.ch,self__.meta35019,self__._,self__.fn1,meta35022__$1));
}));

(cljs.core.async.t_cljs$core$async35021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35023){
var self__ = this;
var _35023__$1 = this;
return self__.meta35022;
}));

(cljs.core.async.t_cljs$core$async35021.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35021.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__35017_SHARP_){
return f1.call(null,(((p1__35017_SHARP_ == null))?null:self__.f.call(null,p1__35017_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async35021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35019","meta35019",2024448710,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35018","cljs.core.async/t_cljs$core$async35018",758384650,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35022","meta35022",-530000730,null)], null);
}));

(cljs.core.async.t_cljs$core$async35021.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35021");

(cljs.core.async.t_cljs$core$async35021.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async35021");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35021.
 */
cljs.core.async.__GT_t_cljs$core$async35021 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35021(f__$1,ch__$1,meta35019__$1,___$2,fn1__$1,meta35022){
return (new cljs.core.async.t_cljs$core$async35021(f__$1,ch__$1,meta35019__$1,___$2,fn1__$1,meta35022));
});

}

return (new cljs.core.async.t_cljs$core$async35021(self__.f,self__.ch,self__.meta35019,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35018.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35018.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35019","meta35019",2024448710,null)], null);
}));

(cljs.core.async.t_cljs$core$async35018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35018");

(cljs.core.async.t_cljs$core$async35018.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async35018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35018.
 */
cljs.core.async.__GT_t_cljs$core$async35018 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35018(f__$1,ch__$1,meta35019){
return (new cljs.core.async.t_cljs$core$async35018(f__$1,ch__$1,meta35019));
});

}

return (new cljs.core.async.t_cljs$core$async35018(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35024 = (function (f,ch,meta35025){
this.f = f;
this.ch = ch;
this.meta35025 = meta35025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35026,meta35025__$1){
var self__ = this;
var _35026__$1 = this;
return (new cljs.core.async.t_cljs$core$async35024(self__.f,self__.ch,meta35025__$1));
}));

(cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35026){
var self__ = this;
var _35026__$1 = this;
return self__.meta35025;
}));

(cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async35024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35025","meta35025",828276089,null)], null);
}));

(cljs.core.async.t_cljs$core$async35024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35024");

(cljs.core.async.t_cljs$core$async35024.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async35024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35024.
 */
cljs.core.async.__GT_t_cljs$core$async35024 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35024(f__$1,ch__$1,meta35025){
return (new cljs.core.async.t_cljs$core$async35024(f__$1,ch__$1,meta35025));
});

}

return (new cljs.core.async.t_cljs$core$async35024(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35027 = (function (p,ch,meta35028){
this.p = p;
this.ch = ch;
this.meta35028 = meta35028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35029,meta35028__$1){
var self__ = this;
var _35029__$1 = this;
return (new cljs.core.async.t_cljs$core$async35027(self__.p,self__.ch,meta35028__$1));
}));

(cljs.core.async.t_cljs$core$async35027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35029){
var self__ = this;
var _35029__$1 = this;
return self__.meta35028;
}));

(cljs.core.async.t_cljs$core$async35027.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35027.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35027.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35027.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35028","meta35028",551933580,null)], null);
}));

(cljs.core.async.t_cljs$core$async35027.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35027");

(cljs.core.async.t_cljs$core$async35027.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async35027");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35027.
 */
cljs.core.async.__GT_t_cljs$core$async35027 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35027(p__$1,ch__$1,meta35028){
return (new cljs.core.async.t_cljs$core$async35027(p__$1,ch__$1,meta35028));
});

}

return (new cljs.core.async.t_cljs$core$async35027(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35031 = arguments.length;
switch (G__35031) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33587__auto___35071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_35052){
var state_val_35053 = (state_35052[(1)]);
if((state_val_35053 === (7))){
var inst_35048 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35054_35072 = state_35052__$1;
(statearr_35054_35072[(2)] = inst_35048);

(statearr_35054_35072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (1))){
var state_35052__$1 = state_35052;
var statearr_35055_35073 = state_35052__$1;
(statearr_35055_35073[(2)] = null);

(statearr_35055_35073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (4))){
var inst_35034 = (state_35052[(7)]);
var inst_35034__$1 = (state_35052[(2)]);
var inst_35035 = (inst_35034__$1 == null);
var state_35052__$1 = (function (){var statearr_35056 = state_35052;
(statearr_35056[(7)] = inst_35034__$1);

return statearr_35056;
})();
if(cljs.core.truth_(inst_35035)){
var statearr_35057_35074 = state_35052__$1;
(statearr_35057_35074[(1)] = (5));

} else {
var statearr_35058_35075 = state_35052__$1;
(statearr_35058_35075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (6))){
var inst_35034 = (state_35052[(7)]);
var inst_35039 = p.call(null,inst_35034);
var state_35052__$1 = state_35052;
if(cljs.core.truth_(inst_35039)){
var statearr_35059_35076 = state_35052__$1;
(statearr_35059_35076[(1)] = (8));

} else {
var statearr_35060_35077 = state_35052__$1;
(statearr_35060_35077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (3))){
var inst_35050 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35052__$1,inst_35050);
} else {
if((state_val_35053 === (2))){
var state_35052__$1 = state_35052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35052__$1,(4),ch);
} else {
if((state_val_35053 === (11))){
var inst_35042 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35061_35078 = state_35052__$1;
(statearr_35061_35078[(2)] = inst_35042);

(statearr_35061_35078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (9))){
var state_35052__$1 = state_35052;
var statearr_35062_35079 = state_35052__$1;
(statearr_35062_35079[(2)] = null);

(statearr_35062_35079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (5))){
var inst_35037 = cljs.core.async.close_BANG_.call(null,out);
var state_35052__$1 = state_35052;
var statearr_35063_35080 = state_35052__$1;
(statearr_35063_35080[(2)] = inst_35037);

(statearr_35063_35080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (10))){
var inst_35045 = (state_35052[(2)]);
var state_35052__$1 = (function (){var statearr_35064 = state_35052;
(statearr_35064[(8)] = inst_35045);

return statearr_35064;
})();
var statearr_35065_35081 = state_35052__$1;
(statearr_35065_35081[(2)] = null);

(statearr_35065_35081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (8))){
var inst_35034 = (state_35052[(7)]);
var state_35052__$1 = state_35052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35052__$1,(11),out,inst_35034);
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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_35066 = [null,null,null,null,null,null,null,null,null];
(statearr_35066[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_35066[(1)] = (1));

return statearr_35066;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_35052){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_35052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e35067){if((e35067 instanceof Object)){
var ex__33494__auto__ = e35067;
var statearr_35068_35082 = state_35052;
(statearr_35068_35082[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35083 = state_35052;
state_35052 = G__35083;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_35052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_35052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_35069 = f__33588__auto__.call(null);
(statearr_35069[(6)] = c__33587__auto___35071);

return statearr_35069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35085 = arguments.length;
switch (G__35085) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_35148){
var state_val_35149 = (state_35148[(1)]);
if((state_val_35149 === (7))){
var inst_35144 = (state_35148[(2)]);
var state_35148__$1 = state_35148;
var statearr_35150_35188 = state_35148__$1;
(statearr_35150_35188[(2)] = inst_35144);

(statearr_35150_35188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (20))){
var inst_35114 = (state_35148[(7)]);
var inst_35125 = (state_35148[(2)]);
var inst_35126 = cljs.core.next.call(null,inst_35114);
var inst_35100 = inst_35126;
var inst_35101 = null;
var inst_35102 = (0);
var inst_35103 = (0);
var state_35148__$1 = (function (){var statearr_35151 = state_35148;
(statearr_35151[(8)] = inst_35103);

(statearr_35151[(9)] = inst_35102);

(statearr_35151[(10)] = inst_35101);

(statearr_35151[(11)] = inst_35125);

(statearr_35151[(12)] = inst_35100);

return statearr_35151;
})();
var statearr_35152_35189 = state_35148__$1;
(statearr_35152_35189[(2)] = null);

(statearr_35152_35189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (1))){
var state_35148__$1 = state_35148;
var statearr_35153_35190 = state_35148__$1;
(statearr_35153_35190[(2)] = null);

(statearr_35153_35190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (4))){
var inst_35089 = (state_35148[(13)]);
var inst_35089__$1 = (state_35148[(2)]);
var inst_35090 = (inst_35089__$1 == null);
var state_35148__$1 = (function (){var statearr_35154 = state_35148;
(statearr_35154[(13)] = inst_35089__$1);

return statearr_35154;
})();
if(cljs.core.truth_(inst_35090)){
var statearr_35155_35191 = state_35148__$1;
(statearr_35155_35191[(1)] = (5));

} else {
var statearr_35156_35192 = state_35148__$1;
(statearr_35156_35192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (15))){
var state_35148__$1 = state_35148;
var statearr_35160_35193 = state_35148__$1;
(statearr_35160_35193[(2)] = null);

(statearr_35160_35193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (21))){
var state_35148__$1 = state_35148;
var statearr_35161_35194 = state_35148__$1;
(statearr_35161_35194[(2)] = null);

(statearr_35161_35194[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (13))){
var inst_35103 = (state_35148[(8)]);
var inst_35102 = (state_35148[(9)]);
var inst_35101 = (state_35148[(10)]);
var inst_35100 = (state_35148[(12)]);
var inst_35110 = (state_35148[(2)]);
var inst_35111 = (inst_35103 + (1));
var tmp35157 = inst_35102;
var tmp35158 = inst_35101;
var tmp35159 = inst_35100;
var inst_35100__$1 = tmp35159;
var inst_35101__$1 = tmp35158;
var inst_35102__$1 = tmp35157;
var inst_35103__$1 = inst_35111;
var state_35148__$1 = (function (){var statearr_35162 = state_35148;
(statearr_35162[(8)] = inst_35103__$1);

(statearr_35162[(9)] = inst_35102__$1);

(statearr_35162[(14)] = inst_35110);

(statearr_35162[(10)] = inst_35101__$1);

(statearr_35162[(12)] = inst_35100__$1);

return statearr_35162;
})();
var statearr_35163_35195 = state_35148__$1;
(statearr_35163_35195[(2)] = null);

(statearr_35163_35195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (22))){
var state_35148__$1 = state_35148;
var statearr_35164_35196 = state_35148__$1;
(statearr_35164_35196[(2)] = null);

(statearr_35164_35196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (6))){
var inst_35089 = (state_35148[(13)]);
var inst_35098 = f.call(null,inst_35089);
var inst_35099 = cljs.core.seq.call(null,inst_35098);
var inst_35100 = inst_35099;
var inst_35101 = null;
var inst_35102 = (0);
var inst_35103 = (0);
var state_35148__$1 = (function (){var statearr_35165 = state_35148;
(statearr_35165[(8)] = inst_35103);

(statearr_35165[(9)] = inst_35102);

(statearr_35165[(10)] = inst_35101);

(statearr_35165[(12)] = inst_35100);

return statearr_35165;
})();
var statearr_35166_35197 = state_35148__$1;
(statearr_35166_35197[(2)] = null);

(statearr_35166_35197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (17))){
var inst_35114 = (state_35148[(7)]);
var inst_35118 = cljs.core.chunk_first.call(null,inst_35114);
var inst_35119 = cljs.core.chunk_rest.call(null,inst_35114);
var inst_35120 = cljs.core.count.call(null,inst_35118);
var inst_35100 = inst_35119;
var inst_35101 = inst_35118;
var inst_35102 = inst_35120;
var inst_35103 = (0);
var state_35148__$1 = (function (){var statearr_35167 = state_35148;
(statearr_35167[(8)] = inst_35103);

(statearr_35167[(9)] = inst_35102);

(statearr_35167[(10)] = inst_35101);

(statearr_35167[(12)] = inst_35100);

return statearr_35167;
})();
var statearr_35168_35198 = state_35148__$1;
(statearr_35168_35198[(2)] = null);

(statearr_35168_35198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (3))){
var inst_35146 = (state_35148[(2)]);
var state_35148__$1 = state_35148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35148__$1,inst_35146);
} else {
if((state_val_35149 === (12))){
var inst_35134 = (state_35148[(2)]);
var state_35148__$1 = state_35148;
var statearr_35169_35199 = state_35148__$1;
(statearr_35169_35199[(2)] = inst_35134);

(statearr_35169_35199[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (2))){
var state_35148__$1 = state_35148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35148__$1,(4),in$);
} else {
if((state_val_35149 === (23))){
var inst_35142 = (state_35148[(2)]);
var state_35148__$1 = state_35148;
var statearr_35170_35200 = state_35148__$1;
(statearr_35170_35200[(2)] = inst_35142);

(statearr_35170_35200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (19))){
var inst_35129 = (state_35148[(2)]);
var state_35148__$1 = state_35148;
var statearr_35171_35201 = state_35148__$1;
(statearr_35171_35201[(2)] = inst_35129);

(statearr_35171_35201[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (11))){
var inst_35114 = (state_35148[(7)]);
var inst_35100 = (state_35148[(12)]);
var inst_35114__$1 = cljs.core.seq.call(null,inst_35100);
var state_35148__$1 = (function (){var statearr_35172 = state_35148;
(statearr_35172[(7)] = inst_35114__$1);

return statearr_35172;
})();
if(inst_35114__$1){
var statearr_35173_35202 = state_35148__$1;
(statearr_35173_35202[(1)] = (14));

} else {
var statearr_35174_35203 = state_35148__$1;
(statearr_35174_35203[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (9))){
var inst_35136 = (state_35148[(2)]);
var inst_35137 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35148__$1 = (function (){var statearr_35175 = state_35148;
(statearr_35175[(15)] = inst_35136);

return statearr_35175;
})();
if(cljs.core.truth_(inst_35137)){
var statearr_35176_35204 = state_35148__$1;
(statearr_35176_35204[(1)] = (21));

} else {
var statearr_35177_35205 = state_35148__$1;
(statearr_35177_35205[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (5))){
var inst_35092 = cljs.core.async.close_BANG_.call(null,out);
var state_35148__$1 = state_35148;
var statearr_35178_35206 = state_35148__$1;
(statearr_35178_35206[(2)] = inst_35092);

(statearr_35178_35206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (14))){
var inst_35114 = (state_35148[(7)]);
var inst_35116 = cljs.core.chunked_seq_QMARK_.call(null,inst_35114);
var state_35148__$1 = state_35148;
if(inst_35116){
var statearr_35179_35207 = state_35148__$1;
(statearr_35179_35207[(1)] = (17));

} else {
var statearr_35180_35208 = state_35148__$1;
(statearr_35180_35208[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (16))){
var inst_35132 = (state_35148[(2)]);
var state_35148__$1 = state_35148;
var statearr_35181_35209 = state_35148__$1;
(statearr_35181_35209[(2)] = inst_35132);

(statearr_35181_35209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (10))){
var inst_35103 = (state_35148[(8)]);
var inst_35101 = (state_35148[(10)]);
var inst_35108 = cljs.core._nth.call(null,inst_35101,inst_35103);
var state_35148__$1 = state_35148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35148__$1,(13),out,inst_35108);
} else {
if((state_val_35149 === (18))){
var inst_35114 = (state_35148[(7)]);
var inst_35123 = cljs.core.first.call(null,inst_35114);
var state_35148__$1 = state_35148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35148__$1,(20),out,inst_35123);
} else {
if((state_val_35149 === (8))){
var inst_35103 = (state_35148[(8)]);
var inst_35102 = (state_35148[(9)]);
var inst_35105 = (inst_35103 < inst_35102);
var inst_35106 = inst_35105;
var state_35148__$1 = state_35148;
if(cljs.core.truth_(inst_35106)){
var statearr_35182_35210 = state_35148__$1;
(statearr_35182_35210[(1)] = (10));

} else {
var statearr_35183_35211 = state_35148__$1;
(statearr_35183_35211[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33491__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33491__auto____0 = (function (){
var statearr_35184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35184[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33491__auto__);

(statearr_35184[(1)] = (1));

return statearr_35184;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33491__auto____1 = (function (state_35148){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_35148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e35185){if((e35185 instanceof Object)){
var ex__33494__auto__ = e35185;
var statearr_35186_35212 = state_35148;
(statearr_35186_35212[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35213 = state_35148;
state_35148 = G__35213;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33491__auto__ = function(state_35148){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33491__auto____1.call(this,state_35148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33491__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33491__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_35187 = f__33588__auto__.call(null);
(statearr_35187[(6)] = c__33587__auto__);

return statearr_35187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));

return c__33587__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35215 = arguments.length;
switch (G__35215) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35218 = arguments.length;
switch (G__35218) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35221 = arguments.length;
switch (G__35221) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33587__auto___35268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_35245){
var state_val_35246 = (state_35245[(1)]);
if((state_val_35246 === (7))){
var inst_35240 = (state_35245[(2)]);
var state_35245__$1 = state_35245;
var statearr_35247_35269 = state_35245__$1;
(statearr_35247_35269[(2)] = inst_35240);

(statearr_35247_35269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (1))){
var inst_35222 = null;
var state_35245__$1 = (function (){var statearr_35248 = state_35245;
(statearr_35248[(7)] = inst_35222);

return statearr_35248;
})();
var statearr_35249_35270 = state_35245__$1;
(statearr_35249_35270[(2)] = null);

(statearr_35249_35270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (4))){
var inst_35225 = (state_35245[(8)]);
var inst_35225__$1 = (state_35245[(2)]);
var inst_35226 = (inst_35225__$1 == null);
var inst_35227 = cljs.core.not.call(null,inst_35226);
var state_35245__$1 = (function (){var statearr_35250 = state_35245;
(statearr_35250[(8)] = inst_35225__$1);

return statearr_35250;
})();
if(inst_35227){
var statearr_35251_35271 = state_35245__$1;
(statearr_35251_35271[(1)] = (5));

} else {
var statearr_35252_35272 = state_35245__$1;
(statearr_35252_35272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (6))){
var state_35245__$1 = state_35245;
var statearr_35253_35273 = state_35245__$1;
(statearr_35253_35273[(2)] = null);

(statearr_35253_35273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (3))){
var inst_35242 = (state_35245[(2)]);
var inst_35243 = cljs.core.async.close_BANG_.call(null,out);
var state_35245__$1 = (function (){var statearr_35254 = state_35245;
(statearr_35254[(9)] = inst_35242);

return statearr_35254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35245__$1,inst_35243);
} else {
if((state_val_35246 === (2))){
var state_35245__$1 = state_35245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35245__$1,(4),ch);
} else {
if((state_val_35246 === (11))){
var inst_35225 = (state_35245[(8)]);
var inst_35234 = (state_35245[(2)]);
var inst_35222 = inst_35225;
var state_35245__$1 = (function (){var statearr_35255 = state_35245;
(statearr_35255[(10)] = inst_35234);

(statearr_35255[(7)] = inst_35222);

return statearr_35255;
})();
var statearr_35256_35274 = state_35245__$1;
(statearr_35256_35274[(2)] = null);

(statearr_35256_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (9))){
var inst_35225 = (state_35245[(8)]);
var state_35245__$1 = state_35245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35245__$1,(11),out,inst_35225);
} else {
if((state_val_35246 === (5))){
var inst_35225 = (state_35245[(8)]);
var inst_35222 = (state_35245[(7)]);
var inst_35229 = cljs.core._EQ_.call(null,inst_35225,inst_35222);
var state_35245__$1 = state_35245;
if(inst_35229){
var statearr_35258_35275 = state_35245__$1;
(statearr_35258_35275[(1)] = (8));

} else {
var statearr_35259_35276 = state_35245__$1;
(statearr_35259_35276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (10))){
var inst_35237 = (state_35245[(2)]);
var state_35245__$1 = state_35245;
var statearr_35260_35277 = state_35245__$1;
(statearr_35260_35277[(2)] = inst_35237);

(statearr_35260_35277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (8))){
var inst_35222 = (state_35245[(7)]);
var tmp35257 = inst_35222;
var inst_35222__$1 = tmp35257;
var state_35245__$1 = (function (){var statearr_35261 = state_35245;
(statearr_35261[(7)] = inst_35222__$1);

return statearr_35261;
})();
var statearr_35262_35278 = state_35245__$1;
(statearr_35262_35278[(2)] = null);

(statearr_35262_35278[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_35263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35263[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_35263[(1)] = (1));

return statearr_35263;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_35245){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_35245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e35264){if((e35264 instanceof Object)){
var ex__33494__auto__ = e35264;
var statearr_35265_35279 = state_35245;
(statearr_35265_35279[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35280 = state_35245;
state_35245 = G__35280;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_35245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_35245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_35266 = f__33588__auto__.call(null);
(statearr_35266[(6)] = c__33587__auto___35268);

return statearr_35266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35282 = arguments.length;
switch (G__35282) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33587__auto___35348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_35320){
var state_val_35321 = (state_35320[(1)]);
if((state_val_35321 === (7))){
var inst_35316 = (state_35320[(2)]);
var state_35320__$1 = state_35320;
var statearr_35322_35349 = state_35320__$1;
(statearr_35322_35349[(2)] = inst_35316);

(statearr_35322_35349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (1))){
var inst_35283 = (new Array(n));
var inst_35284 = inst_35283;
var inst_35285 = (0);
var state_35320__$1 = (function (){var statearr_35323 = state_35320;
(statearr_35323[(7)] = inst_35284);

(statearr_35323[(8)] = inst_35285);

return statearr_35323;
})();
var statearr_35324_35350 = state_35320__$1;
(statearr_35324_35350[(2)] = null);

(statearr_35324_35350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (4))){
var inst_35288 = (state_35320[(9)]);
var inst_35288__$1 = (state_35320[(2)]);
var inst_35289 = (inst_35288__$1 == null);
var inst_35290 = cljs.core.not.call(null,inst_35289);
var state_35320__$1 = (function (){var statearr_35325 = state_35320;
(statearr_35325[(9)] = inst_35288__$1);

return statearr_35325;
})();
if(inst_35290){
var statearr_35326_35351 = state_35320__$1;
(statearr_35326_35351[(1)] = (5));

} else {
var statearr_35327_35352 = state_35320__$1;
(statearr_35327_35352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (15))){
var inst_35310 = (state_35320[(2)]);
var state_35320__$1 = state_35320;
var statearr_35328_35353 = state_35320__$1;
(statearr_35328_35353[(2)] = inst_35310);

(statearr_35328_35353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (13))){
var state_35320__$1 = state_35320;
var statearr_35329_35354 = state_35320__$1;
(statearr_35329_35354[(2)] = null);

(statearr_35329_35354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (6))){
var inst_35285 = (state_35320[(8)]);
var inst_35306 = (inst_35285 > (0));
var state_35320__$1 = state_35320;
if(cljs.core.truth_(inst_35306)){
var statearr_35330_35355 = state_35320__$1;
(statearr_35330_35355[(1)] = (12));

} else {
var statearr_35331_35356 = state_35320__$1;
(statearr_35331_35356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (3))){
var inst_35318 = (state_35320[(2)]);
var state_35320__$1 = state_35320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35320__$1,inst_35318);
} else {
if((state_val_35321 === (12))){
var inst_35284 = (state_35320[(7)]);
var inst_35308 = cljs.core.vec.call(null,inst_35284);
var state_35320__$1 = state_35320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35320__$1,(15),out,inst_35308);
} else {
if((state_val_35321 === (2))){
var state_35320__$1 = state_35320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35320__$1,(4),ch);
} else {
if((state_val_35321 === (11))){
var inst_35300 = (state_35320[(2)]);
var inst_35301 = (new Array(n));
var inst_35284 = inst_35301;
var inst_35285 = (0);
var state_35320__$1 = (function (){var statearr_35332 = state_35320;
(statearr_35332[(7)] = inst_35284);

(statearr_35332[(8)] = inst_35285);

(statearr_35332[(10)] = inst_35300);

return statearr_35332;
})();
var statearr_35333_35357 = state_35320__$1;
(statearr_35333_35357[(2)] = null);

(statearr_35333_35357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (9))){
var inst_35284 = (state_35320[(7)]);
var inst_35298 = cljs.core.vec.call(null,inst_35284);
var state_35320__$1 = state_35320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35320__$1,(11),out,inst_35298);
} else {
if((state_val_35321 === (5))){
var inst_35293 = (state_35320[(11)]);
var inst_35284 = (state_35320[(7)]);
var inst_35288 = (state_35320[(9)]);
var inst_35285 = (state_35320[(8)]);
var inst_35292 = (inst_35284[inst_35285] = inst_35288);
var inst_35293__$1 = (inst_35285 + (1));
var inst_35294 = (inst_35293__$1 < n);
var state_35320__$1 = (function (){var statearr_35334 = state_35320;
(statearr_35334[(11)] = inst_35293__$1);

(statearr_35334[(12)] = inst_35292);

return statearr_35334;
})();
if(cljs.core.truth_(inst_35294)){
var statearr_35335_35358 = state_35320__$1;
(statearr_35335_35358[(1)] = (8));

} else {
var statearr_35336_35359 = state_35320__$1;
(statearr_35336_35359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (14))){
var inst_35313 = (state_35320[(2)]);
var inst_35314 = cljs.core.async.close_BANG_.call(null,out);
var state_35320__$1 = (function (){var statearr_35338 = state_35320;
(statearr_35338[(13)] = inst_35313);

return statearr_35338;
})();
var statearr_35339_35360 = state_35320__$1;
(statearr_35339_35360[(2)] = inst_35314);

(statearr_35339_35360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (10))){
var inst_35304 = (state_35320[(2)]);
var state_35320__$1 = state_35320;
var statearr_35340_35361 = state_35320__$1;
(statearr_35340_35361[(2)] = inst_35304);

(statearr_35340_35361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (8))){
var inst_35293 = (state_35320[(11)]);
var inst_35284 = (state_35320[(7)]);
var tmp35337 = inst_35284;
var inst_35284__$1 = tmp35337;
var inst_35285 = inst_35293;
var state_35320__$1 = (function (){var statearr_35341 = state_35320;
(statearr_35341[(7)] = inst_35284__$1);

(statearr_35341[(8)] = inst_35285);

return statearr_35341;
})();
var statearr_35342_35362 = state_35320__$1;
(statearr_35342_35362[(2)] = null);

(statearr_35342_35362[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_35343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35343[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_35343[(1)] = (1));

return statearr_35343;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_35320){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_35320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e35344){if((e35344 instanceof Object)){
var ex__33494__auto__ = e35344;
var statearr_35345_35363 = state_35320;
(statearr_35345_35363[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35364 = state_35320;
state_35320 = G__35364;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_35320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_35320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_35346 = f__33588__auto__.call(null);
(statearr_35346[(6)] = c__33587__auto___35348);

return statearr_35346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35366 = arguments.length;
switch (G__35366) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33587__auto___35443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_35411){
var state_val_35412 = (state_35411[(1)]);
if((state_val_35412 === (7))){
var inst_35407 = (state_35411[(2)]);
var state_35411__$1 = state_35411;
var statearr_35413_35444 = state_35411__$1;
(statearr_35413_35444[(2)] = inst_35407);

(statearr_35413_35444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (1))){
var inst_35367 = [];
var inst_35368 = inst_35367;
var inst_35369 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35411__$1 = (function (){var statearr_35414 = state_35411;
(statearr_35414[(7)] = inst_35369);

(statearr_35414[(8)] = inst_35368);

return statearr_35414;
})();
var statearr_35415_35445 = state_35411__$1;
(statearr_35415_35445[(2)] = null);

(statearr_35415_35445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (4))){
var inst_35372 = (state_35411[(9)]);
var inst_35372__$1 = (state_35411[(2)]);
var inst_35373 = (inst_35372__$1 == null);
var inst_35374 = cljs.core.not.call(null,inst_35373);
var state_35411__$1 = (function (){var statearr_35416 = state_35411;
(statearr_35416[(9)] = inst_35372__$1);

return statearr_35416;
})();
if(inst_35374){
var statearr_35417_35446 = state_35411__$1;
(statearr_35417_35446[(1)] = (5));

} else {
var statearr_35418_35447 = state_35411__$1;
(statearr_35418_35447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (15))){
var inst_35368 = (state_35411[(8)]);
var inst_35399 = cljs.core.vec.call(null,inst_35368);
var state_35411__$1 = state_35411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35411__$1,(18),out,inst_35399);
} else {
if((state_val_35412 === (13))){
var inst_35394 = (state_35411[(2)]);
var state_35411__$1 = state_35411;
var statearr_35419_35448 = state_35411__$1;
(statearr_35419_35448[(2)] = inst_35394);

(statearr_35419_35448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (6))){
var inst_35368 = (state_35411[(8)]);
var inst_35396 = inst_35368.length;
var inst_35397 = (inst_35396 > (0));
var state_35411__$1 = state_35411;
if(cljs.core.truth_(inst_35397)){
var statearr_35420_35449 = state_35411__$1;
(statearr_35420_35449[(1)] = (15));

} else {
var statearr_35421_35450 = state_35411__$1;
(statearr_35421_35450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (17))){
var inst_35404 = (state_35411[(2)]);
var inst_35405 = cljs.core.async.close_BANG_.call(null,out);
var state_35411__$1 = (function (){var statearr_35422 = state_35411;
(statearr_35422[(10)] = inst_35404);

return statearr_35422;
})();
var statearr_35423_35451 = state_35411__$1;
(statearr_35423_35451[(2)] = inst_35405);

(statearr_35423_35451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (3))){
var inst_35409 = (state_35411[(2)]);
var state_35411__$1 = state_35411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35411__$1,inst_35409);
} else {
if((state_val_35412 === (12))){
var inst_35368 = (state_35411[(8)]);
var inst_35387 = cljs.core.vec.call(null,inst_35368);
var state_35411__$1 = state_35411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35411__$1,(14),out,inst_35387);
} else {
if((state_val_35412 === (2))){
var state_35411__$1 = state_35411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35411__$1,(4),ch);
} else {
if((state_val_35412 === (11))){
var inst_35376 = (state_35411[(11)]);
var inst_35368 = (state_35411[(8)]);
var inst_35372 = (state_35411[(9)]);
var inst_35384 = inst_35368.push(inst_35372);
var tmp35424 = inst_35368;
var inst_35368__$1 = tmp35424;
var inst_35369 = inst_35376;
var state_35411__$1 = (function (){var statearr_35425 = state_35411;
(statearr_35425[(7)] = inst_35369);

(statearr_35425[(8)] = inst_35368__$1);

(statearr_35425[(12)] = inst_35384);

return statearr_35425;
})();
var statearr_35426_35452 = state_35411__$1;
(statearr_35426_35452[(2)] = null);

(statearr_35426_35452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (9))){
var inst_35369 = (state_35411[(7)]);
var inst_35380 = cljs.core.keyword_identical_QMARK_.call(null,inst_35369,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35411__$1 = state_35411;
var statearr_35427_35453 = state_35411__$1;
(statearr_35427_35453[(2)] = inst_35380);

(statearr_35427_35453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (5))){
var inst_35369 = (state_35411[(7)]);
var inst_35376 = (state_35411[(11)]);
var inst_35372 = (state_35411[(9)]);
var inst_35377 = (state_35411[(13)]);
var inst_35376__$1 = f.call(null,inst_35372);
var inst_35377__$1 = cljs.core._EQ_.call(null,inst_35376__$1,inst_35369);
var state_35411__$1 = (function (){var statearr_35428 = state_35411;
(statearr_35428[(11)] = inst_35376__$1);

(statearr_35428[(13)] = inst_35377__$1);

return statearr_35428;
})();
if(inst_35377__$1){
var statearr_35429_35454 = state_35411__$1;
(statearr_35429_35454[(1)] = (8));

} else {
var statearr_35430_35455 = state_35411__$1;
(statearr_35430_35455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (14))){
var inst_35376 = (state_35411[(11)]);
var inst_35372 = (state_35411[(9)]);
var inst_35389 = (state_35411[(2)]);
var inst_35390 = [];
var inst_35391 = inst_35390.push(inst_35372);
var inst_35368 = inst_35390;
var inst_35369 = inst_35376;
var state_35411__$1 = (function (){var statearr_35431 = state_35411;
(statearr_35431[(7)] = inst_35369);

(statearr_35431[(8)] = inst_35368);

(statearr_35431[(14)] = inst_35391);

(statearr_35431[(15)] = inst_35389);

return statearr_35431;
})();
var statearr_35432_35456 = state_35411__$1;
(statearr_35432_35456[(2)] = null);

(statearr_35432_35456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (16))){
var state_35411__$1 = state_35411;
var statearr_35433_35457 = state_35411__$1;
(statearr_35433_35457[(2)] = null);

(statearr_35433_35457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (10))){
var inst_35382 = (state_35411[(2)]);
var state_35411__$1 = state_35411;
if(cljs.core.truth_(inst_35382)){
var statearr_35434_35458 = state_35411__$1;
(statearr_35434_35458[(1)] = (11));

} else {
var statearr_35435_35459 = state_35411__$1;
(statearr_35435_35459[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (18))){
var inst_35401 = (state_35411[(2)]);
var state_35411__$1 = state_35411;
var statearr_35436_35460 = state_35411__$1;
(statearr_35436_35460[(2)] = inst_35401);

(statearr_35436_35460[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (8))){
var inst_35377 = (state_35411[(13)]);
var state_35411__$1 = state_35411;
var statearr_35437_35461 = state_35411__$1;
(statearr_35437_35461[(2)] = inst_35377);

(statearr_35437_35461[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__33491__auto__ = null;
var cljs$core$async$state_machine__33491__auto____0 = (function (){
var statearr_35438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35438[(0)] = cljs$core$async$state_machine__33491__auto__);

(statearr_35438[(1)] = (1));

return statearr_35438;
});
var cljs$core$async$state_machine__33491__auto____1 = (function (state_35411){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_35411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e35439){if((e35439 instanceof Object)){
var ex__33494__auto__ = e35439;
var statearr_35440_35462 = state_35411;
(statearr_35440_35462[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35463 = state_35411;
state_35411 = G__35463;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
cljs$core$async$state_machine__33491__auto__ = function(state_35411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33491__auto____1.call(this,state_35411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33491__auto____0;
cljs$core$async$state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33491__auto____1;
return cljs$core$async$state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_35441 = f__33588__auto__.call(null);
(statearr_35441[(6)] = c__33587__auto___35443);

return statearr_35441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1672362821429
