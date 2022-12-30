// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38446){
var map__38447 = p__38446;
var map__38447__$1 = cljs.core.__destructure_map.call(null,map__38447);
var m = map__38447__$1;
var n = cljs.core.get.call(null,map__38447__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38448_38476 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38449_38477 = null;
var count__38450_38478 = (0);
var i__38451_38479 = (0);
while(true){
if((i__38451_38479 < count__38450_38478)){
var f_38480 = cljs.core._nth.call(null,chunk__38449_38477,i__38451_38479);
cljs.core.println.call(null,"  ",f_38480);


var G__38481 = seq__38448_38476;
var G__38482 = chunk__38449_38477;
var G__38483 = count__38450_38478;
var G__38484 = (i__38451_38479 + (1));
seq__38448_38476 = G__38481;
chunk__38449_38477 = G__38482;
count__38450_38478 = G__38483;
i__38451_38479 = G__38484;
continue;
} else {
var temp__5804__auto___38485 = cljs.core.seq.call(null,seq__38448_38476);
if(temp__5804__auto___38485){
var seq__38448_38486__$1 = temp__5804__auto___38485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38448_38486__$1)){
var c__5565__auto___38487 = cljs.core.chunk_first.call(null,seq__38448_38486__$1);
var G__38488 = cljs.core.chunk_rest.call(null,seq__38448_38486__$1);
var G__38489 = c__5565__auto___38487;
var G__38490 = cljs.core.count.call(null,c__5565__auto___38487);
var G__38491 = (0);
seq__38448_38476 = G__38488;
chunk__38449_38477 = G__38489;
count__38450_38478 = G__38490;
i__38451_38479 = G__38491;
continue;
} else {
var f_38492 = cljs.core.first.call(null,seq__38448_38486__$1);
cljs.core.println.call(null,"  ",f_38492);


var G__38493 = cljs.core.next.call(null,seq__38448_38486__$1);
var G__38494 = null;
var G__38495 = (0);
var G__38496 = (0);
seq__38448_38476 = G__38493;
chunk__38449_38477 = G__38494;
count__38450_38478 = G__38495;
i__38451_38479 = G__38496;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38497 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38497);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38497)))?cljs.core.second.call(null,arglists_38497):arglists_38497));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38452_38498 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38453_38499 = null;
var count__38454_38500 = (0);
var i__38455_38501 = (0);
while(true){
if((i__38455_38501 < count__38454_38500)){
var vec__38464_38502 = cljs.core._nth.call(null,chunk__38453_38499,i__38455_38501);
var name_38503 = cljs.core.nth.call(null,vec__38464_38502,(0),null);
var map__38467_38504 = cljs.core.nth.call(null,vec__38464_38502,(1),null);
var map__38467_38505__$1 = cljs.core.__destructure_map.call(null,map__38467_38504);
var doc_38506 = cljs.core.get.call(null,map__38467_38505__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38507 = cljs.core.get.call(null,map__38467_38505__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38503);

cljs.core.println.call(null," ",arglists_38507);

if(cljs.core.truth_(doc_38506)){
cljs.core.println.call(null," ",doc_38506);
} else {
}


var G__38508 = seq__38452_38498;
var G__38509 = chunk__38453_38499;
var G__38510 = count__38454_38500;
var G__38511 = (i__38455_38501 + (1));
seq__38452_38498 = G__38508;
chunk__38453_38499 = G__38509;
count__38454_38500 = G__38510;
i__38455_38501 = G__38511;
continue;
} else {
var temp__5804__auto___38512 = cljs.core.seq.call(null,seq__38452_38498);
if(temp__5804__auto___38512){
var seq__38452_38513__$1 = temp__5804__auto___38512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38452_38513__$1)){
var c__5565__auto___38514 = cljs.core.chunk_first.call(null,seq__38452_38513__$1);
var G__38515 = cljs.core.chunk_rest.call(null,seq__38452_38513__$1);
var G__38516 = c__5565__auto___38514;
var G__38517 = cljs.core.count.call(null,c__5565__auto___38514);
var G__38518 = (0);
seq__38452_38498 = G__38515;
chunk__38453_38499 = G__38516;
count__38454_38500 = G__38517;
i__38455_38501 = G__38518;
continue;
} else {
var vec__38468_38519 = cljs.core.first.call(null,seq__38452_38513__$1);
var name_38520 = cljs.core.nth.call(null,vec__38468_38519,(0),null);
var map__38471_38521 = cljs.core.nth.call(null,vec__38468_38519,(1),null);
var map__38471_38522__$1 = cljs.core.__destructure_map.call(null,map__38471_38521);
var doc_38523 = cljs.core.get.call(null,map__38471_38522__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38524 = cljs.core.get.call(null,map__38471_38522__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38520);

cljs.core.println.call(null," ",arglists_38524);

if(cljs.core.truth_(doc_38523)){
cljs.core.println.call(null," ",doc_38523);
} else {
}


var G__38525 = cljs.core.next.call(null,seq__38452_38513__$1);
var G__38526 = null;
var G__38527 = (0);
var G__38528 = (0);
seq__38452_38498 = G__38525;
chunk__38453_38499 = G__38526;
count__38454_38500 = G__38527;
i__38455_38501 = G__38528;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__38472 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38473 = null;
var count__38474 = (0);
var i__38475 = (0);
while(true){
if((i__38475 < count__38474)){
var role = cljs.core._nth.call(null,chunk__38473,i__38475);
var temp__5804__auto___38529__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38529__$1)){
var spec_38530 = temp__5804__auto___38529__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38530));
} else {
}


var G__38531 = seq__38472;
var G__38532 = chunk__38473;
var G__38533 = count__38474;
var G__38534 = (i__38475 + (1));
seq__38472 = G__38531;
chunk__38473 = G__38532;
count__38474 = G__38533;
i__38475 = G__38534;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__38472);
if(temp__5804__auto____$1){
var seq__38472__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38472__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__38472__$1);
var G__38535 = cljs.core.chunk_rest.call(null,seq__38472__$1);
var G__38536 = c__5565__auto__;
var G__38537 = cljs.core.count.call(null,c__5565__auto__);
var G__38538 = (0);
seq__38472 = G__38535;
chunk__38473 = G__38536;
count__38474 = G__38537;
i__38475 = G__38538;
continue;
} else {
var role = cljs.core.first.call(null,seq__38472__$1);
var temp__5804__auto___38539__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38539__$2)){
var spec_38540 = temp__5804__auto___38539__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38540));
} else {
}


var G__38541 = cljs.core.next.call(null,seq__38472__$1);
var G__38542 = null;
var G__38543 = (0);
var G__38544 = (0);
seq__38472 = G__38541;
chunk__38473 = G__38542;
count__38474 = G__38543;
i__38475 = G__38544;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38545 = cljs.core.conj.call(null,via,t);
var G__38546 = cljs.core.ex_cause.call(null,t);
via = G__38545;
t = G__38546;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38549 = datafied_throwable;
var map__38549__$1 = cljs.core.__destructure_map.call(null,map__38549);
var via = cljs.core.get.call(null,map__38549__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__38549__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__38549__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38550 = cljs.core.last.call(null,via);
var map__38550__$1 = cljs.core.__destructure_map.call(null,map__38550);
var type = cljs.core.get.call(null,map__38550__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__38550__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__38550__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38551 = data;
var map__38551__$1 = cljs.core.__destructure_map.call(null,map__38551);
var problems = cljs.core.get.call(null,map__38551__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__38551__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__38551__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38552 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__38552__$1 = cljs.core.__destructure_map.call(null,map__38552);
var top_data = map__38552__$1;
var source = cljs.core.get.call(null,map__38552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__38553 = phase;
var G__38553__$1 = (((G__38553 instanceof cljs.core.Keyword))?G__38553.fqn:null);
switch (G__38553__$1) {
case "read-source":
var map__38554 = data;
var map__38554__$1 = cljs.core.__destructure_map.call(null,map__38554);
var line = cljs.core.get.call(null,map__38554__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__38554__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38555 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__38555__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__38555,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38555);
var G__38555__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__38555__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38555__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__38555__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38555__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38556 = top_data;
var G__38556__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__38556,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38556);
var G__38556__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__38556__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38556__$1);
var G__38556__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__38556__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38556__$2);
var G__38556__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__38556__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38556__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__38556__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38556__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38557 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__38557,(0),null);
var method = cljs.core.nth.call(null,vec__38557,(1),null);
var file = cljs.core.nth.call(null,vec__38557,(2),null);
var line = cljs.core.nth.call(null,vec__38557,(3),null);
var G__38560 = top_data;
var G__38560__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__38560,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38560);
var G__38560__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__38560__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38560__$1);
var G__38560__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.call(null,G__38560__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38560__$2);
var G__38560__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__38560__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38560__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__38560__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38560__$4;
}

break;
case "execution":
var vec__38561 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__38561,(0),null);
var method = cljs.core.nth.call(null,vec__38561,(1),null);
var file = cljs.core.nth.call(null,vec__38561,(2),null);
var line = cljs.core.nth.call(null,vec__38561,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__38548_SHARP_){
var or__5043__auto__ = (p1__38548_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__38548_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__38564 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38564__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__38564,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38564);
var G__38564__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__38564__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38564__$1);
var G__38564__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.call(null,G__38564__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38564__$2);
var G__38564__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__38564__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38564__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__38564__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38564__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38553__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38568){
var map__38569 = p__38568;
var map__38569__$1 = cljs.core.__destructure_map.call(null,map__38569);
var triage_data = map__38569__$1;
var phase = cljs.core.get.call(null,map__38569__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__38569__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__38569__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__38569__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__38569__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__38569__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__38569__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__38569__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38570 = phase;
var G__38570__$1 = (((G__38570 instanceof cljs.core.Keyword))?G__38570.fqn:null);
switch (G__38570__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38571_38580 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38572_38581 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38573_38582 = true;
var _STAR_print_fn_STAR__temp_val__38574_38583 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38573_38582);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38574_38583);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__38566_SHARP_){
return cljs.core.dissoc.call(null,p1__38566_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38572_38581);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38571_38580);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38575_38584 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38576_38585 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38577_38586 = true;
var _STAR_print_fn_STAR__temp_val__38578_38587 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38577_38586);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38578_38587);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__38567_SHARP_){
return cljs.core.dissoc.call(null,p1__38567_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38576_38585);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38575_38584);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38570__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1672362826488
