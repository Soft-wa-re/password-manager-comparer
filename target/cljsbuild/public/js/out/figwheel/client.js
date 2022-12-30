// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e38769){if((e38769 instanceof Error)){
var e = e38769;
return "Error: Unable to stringify";
} else {
throw e38769;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38772 = arguments.length;
switch (G__38772) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38770_SHARP_){
if(typeof p1__38770_SHARP_ === 'string'){
return p1__38770_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38770_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38775 = arguments.length;
var i__5767__auto___38776 = (0);
while(true){
if((i__5767__auto___38776 < len__5766__auto___38775)){
args__5772__auto__.push((arguments[i__5767__auto___38776]));

var G__38777 = (i__5767__auto___38776 + (1));
i__5767__auto___38776 = G__38777;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38774){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38774));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38779 = arguments.length;
var i__5767__auto___38780 = (0);
while(true){
if((i__5767__auto___38780 < len__5766__auto___38779)){
args__5772__auto__.push((arguments[i__5767__auto___38780]));

var G__38781 = (i__5767__auto___38780 + (1));
i__5767__auto___38780 = G__38781;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38778){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38778));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38782){
var map__38783 = p__38782;
var map__38783__$1 = cljs.core.__destructure_map.call(null,map__38783);
var message = cljs.core.get.call(null,map__38783__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38783__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__5043__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__5041__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__5041__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__5041__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33587__auto___38861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_38833){
var state_val_38834 = (state_38833[(1)]);
if((state_val_38834 === (7))){
var inst_38829 = (state_38833[(2)]);
var state_38833__$1 = state_38833;
var statearr_38835_38862 = state_38833__$1;
(statearr_38835_38862[(2)] = inst_38829);

(statearr_38835_38862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (1))){
var state_38833__$1 = state_38833;
var statearr_38836_38863 = state_38833__$1;
(statearr_38836_38863[(2)] = null);

(statearr_38836_38863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (4))){
var inst_38786 = (state_38833[(7)]);
var inst_38786__$1 = (state_38833[(2)]);
var state_38833__$1 = (function (){var statearr_38837 = state_38833;
(statearr_38837[(7)] = inst_38786__$1);

return statearr_38837;
})();
if(cljs.core.truth_(inst_38786__$1)){
var statearr_38838_38864 = state_38833__$1;
(statearr_38838_38864[(1)] = (5));

} else {
var statearr_38839_38865 = state_38833__$1;
(statearr_38839_38865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (15))){
var inst_38793 = (state_38833[(8)]);
var inst_38808 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38793);
var inst_38809 = cljs.core.first.call(null,inst_38808);
var inst_38810 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38809);
var inst_38811 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38810)].join('');
var inst_38812 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38811);
var state_38833__$1 = state_38833;
var statearr_38840_38866 = state_38833__$1;
(statearr_38840_38866[(2)] = inst_38812);

(statearr_38840_38866[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (13))){
var inst_38817 = (state_38833[(2)]);
var state_38833__$1 = state_38833;
var statearr_38841_38867 = state_38833__$1;
(statearr_38841_38867[(2)] = inst_38817);

(statearr_38841_38867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (6))){
var state_38833__$1 = state_38833;
var statearr_38842_38868 = state_38833__$1;
(statearr_38842_38868[(2)] = null);

(statearr_38842_38868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (17))){
var inst_38815 = (state_38833[(2)]);
var state_38833__$1 = state_38833;
var statearr_38843_38869 = state_38833__$1;
(statearr_38843_38869[(2)] = inst_38815);

(statearr_38843_38869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (3))){
var inst_38831 = (state_38833[(2)]);
var state_38833__$1 = state_38833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38833__$1,inst_38831);
} else {
if((state_val_38834 === (12))){
var inst_38792 = (state_38833[(9)]);
var inst_38806 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38792,opts);
var state_38833__$1 = state_38833;
if(inst_38806){
var statearr_38844_38870 = state_38833__$1;
(statearr_38844_38870[(1)] = (15));

} else {
var statearr_38845_38871 = state_38833__$1;
(statearr_38845_38871[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (2))){
var state_38833__$1 = state_38833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38833__$1,(4),ch);
} else {
if((state_val_38834 === (11))){
var inst_38793 = (state_38833[(8)]);
var inst_38798 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38799 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38793);
var inst_38800 = cljs.core.async.timeout.call(null,(1000));
var inst_38801 = [inst_38799,inst_38800];
var inst_38802 = (new cljs.core.PersistentVector(null,2,(5),inst_38798,inst_38801,null));
var state_38833__$1 = state_38833;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38833__$1,(14),inst_38802);
} else {
if((state_val_38834 === (9))){
var inst_38793 = (state_38833[(8)]);
var inst_38819 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38820 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38793);
var inst_38821 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38820);
var inst_38822 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38821)].join('');
var inst_38823 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38822);
var state_38833__$1 = (function (){var statearr_38846 = state_38833;
(statearr_38846[(10)] = inst_38819);

return statearr_38846;
})();
var statearr_38847_38872 = state_38833__$1;
(statearr_38847_38872[(2)] = inst_38823);

(statearr_38847_38872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (5))){
var inst_38786 = (state_38833[(7)]);
var inst_38788 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38789 = (new cljs.core.PersistentArrayMap(null,2,inst_38788,null));
var inst_38790 = (new cljs.core.PersistentHashSet(null,inst_38789,null));
var inst_38791 = figwheel.client.focus_msgs.call(null,inst_38790,inst_38786);
var inst_38792 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38791);
var inst_38793 = cljs.core.first.call(null,inst_38791);
var inst_38794 = figwheel.client.autoload_QMARK_.call(null);
var state_38833__$1 = (function (){var statearr_38848 = state_38833;
(statearr_38848[(8)] = inst_38793);

(statearr_38848[(9)] = inst_38792);

return statearr_38848;
})();
if(cljs.core.truth_(inst_38794)){
var statearr_38849_38873 = state_38833__$1;
(statearr_38849_38873[(1)] = (8));

} else {
var statearr_38850_38874 = state_38833__$1;
(statearr_38850_38874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (14))){
var inst_38804 = (state_38833[(2)]);
var state_38833__$1 = state_38833;
var statearr_38851_38875 = state_38833__$1;
(statearr_38851_38875[(2)] = inst_38804);

(statearr_38851_38875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (16))){
var state_38833__$1 = state_38833;
var statearr_38852_38876 = state_38833__$1;
(statearr_38852_38876[(2)] = null);

(statearr_38852_38876[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (10))){
var inst_38825 = (state_38833[(2)]);
var state_38833__$1 = (function (){var statearr_38853 = state_38833;
(statearr_38853[(11)] = inst_38825);

return statearr_38853;
})();
var statearr_38854_38877 = state_38833__$1;
(statearr_38854_38877[(2)] = null);

(statearr_38854_38877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38834 === (8))){
var inst_38792 = (state_38833[(9)]);
var inst_38796 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38792,opts);
var state_38833__$1 = state_38833;
if(cljs.core.truth_(inst_38796)){
var statearr_38855_38878 = state_38833__$1;
(statearr_38855_38878[(1)] = (11));

} else {
var statearr_38856_38879 = state_38833__$1;
(statearr_38856_38879[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33491__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33491__auto____0 = (function (){
var statearr_38857 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38857[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33491__auto__);

(statearr_38857[(1)] = (1));

return statearr_38857;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33491__auto____1 = (function (state_38833){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_38833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e38858){if((e38858 instanceof Object)){
var ex__33494__auto__ = e38858;
var statearr_38859_38880 = state_38833;
(statearr_38859_38880[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38881 = state_38833;
state_38833 = G__38881;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33491__auto__ = function(state_38833){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33491__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33491__auto____1.call(this,state_38833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33491__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33491__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_38860 = f__33588__auto__.call(null);
(statearr_38860[(6)] = c__33587__auto___38861);

return statearr_38860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38882_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38882_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38888 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38884 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38885 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38886 = true;
var _STAR_print_fn_STAR__temp_val__38887 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38886);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38887);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38885);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38884);
}}catch (e38883){if((e38883 instanceof Error)){
var e = e38883;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38888], null));
} else {
var e = e38883;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38889){
var map__38890 = p__38889;
var map__38890__$1 = cljs.core.__destructure_map.call(null,map__38890);
var opts = map__38890__$1;
var build_id = cljs.core.get.call(null,map__38890__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__38891){
var vec__38892 = p__38891;
var seq__38893 = cljs.core.seq.call(null,vec__38892);
var first__38894 = cljs.core.first.call(null,seq__38893);
var seq__38893__$1 = cljs.core.next.call(null,seq__38893);
var map__38895 = first__38894;
var map__38895__$1 = cljs.core.__destructure_map.call(null,map__38895);
var msg = map__38895__$1;
var msg_name = cljs.core.get.call(null,map__38895__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38893__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38896){
var vec__38897 = p__38896;
var seq__38898 = cljs.core.seq.call(null,vec__38897);
var first__38899 = cljs.core.first.call(null,seq__38898);
var seq__38898__$1 = cljs.core.next.call(null,seq__38898);
var map__38900 = first__38899;
var map__38900__$1 = cljs.core.__destructure_map.call(null,map__38900);
var msg = map__38900__$1;
var msg_name = cljs.core.get.call(null,map__38900__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38898__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38901){
var map__38902 = p__38901;
var map__38902__$1 = cljs.core.__destructure_map.call(null,map__38902);
var on_compile_warning = cljs.core.get.call(null,map__38902__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38902__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__38903){
var vec__38904 = p__38903;
var seq__38905 = cljs.core.seq.call(null,vec__38904);
var first__38906 = cljs.core.first.call(null,seq__38905);
var seq__38905__$1 = cljs.core.next.call(null,seq__38905);
var map__38907 = first__38906;
var map__38907__$1 = cljs.core.__destructure_map.call(null,map__38907);
var msg = map__38907__$1;
var msg_name = cljs.core.get.call(null,map__38907__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38905__$1;
var pred__38908 = cljs.core._EQ_;
var expr__38909 = msg_name;
if(cljs.core.truth_(pred__38908.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38909))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38908.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38909))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_38998){
var state_val_38999 = (state_38998[(1)]);
if((state_val_38999 === (7))){
var inst_38918 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
if(cljs.core.truth_(inst_38918)){
var statearr_39000_39047 = state_38998__$1;
(statearr_39000_39047[(1)] = (8));

} else {
var statearr_39001_39048 = state_38998__$1;
(statearr_39001_39048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (20))){
var inst_38992 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
var statearr_39002_39049 = state_38998__$1;
(statearr_39002_39049[(2)] = inst_38992);

(statearr_39002_39049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (27))){
var inst_38988 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
var statearr_39003_39050 = state_38998__$1;
(statearr_39003_39050[(2)] = inst_38988);

(statearr_39003_39050[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (1))){
var inst_38911 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38998__$1 = state_38998;
if(cljs.core.truth_(inst_38911)){
var statearr_39004_39051 = state_38998__$1;
(statearr_39004_39051[(1)] = (2));

} else {
var statearr_39005_39052 = state_38998__$1;
(statearr_39005_39052[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (24))){
var inst_38990 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
var statearr_39006_39053 = state_38998__$1;
(statearr_39006_39053[(2)] = inst_38990);

(statearr_39006_39053[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (4))){
var inst_38996 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38998__$1,inst_38996);
} else {
if((state_val_38999 === (15))){
var inst_38994 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
var statearr_39007_39054 = state_38998__$1;
(statearr_39007_39054[(2)] = inst_38994);

(statearr_39007_39054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (21))){
var inst_38947 = (state_38998[(2)]);
var inst_38948 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38949 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38948);
var state_38998__$1 = (function (){var statearr_39008 = state_38998;
(statearr_39008[(7)] = inst_38947);

return statearr_39008;
})();
var statearr_39009_39055 = state_38998__$1;
(statearr_39009_39055[(2)] = inst_38949);

(statearr_39009_39055[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (31))){
var inst_38977 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38998__$1 = state_38998;
if(inst_38977){
var statearr_39010_39056 = state_38998__$1;
(statearr_39010_39056[(1)] = (34));

} else {
var statearr_39011_39057 = state_38998__$1;
(statearr_39011_39057[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (32))){
var inst_38986 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
var statearr_39012_39058 = state_38998__$1;
(statearr_39012_39058[(2)] = inst_38986);

(statearr_39012_39058[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (33))){
var inst_38973 = (state_38998[(2)]);
var inst_38974 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38975 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38974);
var state_38998__$1 = (function (){var statearr_39013 = state_38998;
(statearr_39013[(8)] = inst_38973);

return statearr_39013;
})();
var statearr_39014_39059 = state_38998__$1;
(statearr_39014_39059[(2)] = inst_38975);

(statearr_39014_39059[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (13))){
var inst_38932 = figwheel.client.heads_up.clear.call(null);
var state_38998__$1 = state_38998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38998__$1,(16),inst_38932);
} else {
if((state_val_38999 === (22))){
var inst_38953 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38954 = figwheel.client.heads_up.append_warning_message.call(null,inst_38953);
var state_38998__$1 = state_38998;
var statearr_39015_39060 = state_38998__$1;
(statearr_39015_39060[(2)] = inst_38954);

(statearr_39015_39060[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (36))){
var inst_38984 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
var statearr_39016_39061 = state_38998__$1;
(statearr_39016_39061[(2)] = inst_38984);

(statearr_39016_39061[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (29))){
var inst_38964 = (state_38998[(2)]);
var inst_38965 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38966 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38965);
var state_38998__$1 = (function (){var statearr_39017 = state_38998;
(statearr_39017[(9)] = inst_38964);

return statearr_39017;
})();
var statearr_39018_39062 = state_38998__$1;
(statearr_39018_39062[(2)] = inst_38966);

(statearr_39018_39062[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (6))){
var inst_38913 = (state_38998[(10)]);
var state_38998__$1 = state_38998;
var statearr_39019_39063 = state_38998__$1;
(statearr_39019_39063[(2)] = inst_38913);

(statearr_39019_39063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (28))){
var inst_38960 = (state_38998[(2)]);
var inst_38961 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38962 = figwheel.client.heads_up.display_warning.call(null,inst_38961);
var state_38998__$1 = (function (){var statearr_39020 = state_38998;
(statearr_39020[(11)] = inst_38960);

return statearr_39020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38998__$1,(29),inst_38962);
} else {
if((state_val_38999 === (25))){
var inst_38958 = figwheel.client.heads_up.clear.call(null);
var state_38998__$1 = state_38998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38998__$1,(28),inst_38958);
} else {
if((state_val_38999 === (34))){
var inst_38979 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38998__$1 = state_38998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38998__$1,(37),inst_38979);
} else {
if((state_val_38999 === (17))){
var inst_38938 = (state_38998[(2)]);
var inst_38939 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38940 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38939);
var state_38998__$1 = (function (){var statearr_39021 = state_38998;
(statearr_39021[(12)] = inst_38938);

return statearr_39021;
})();
var statearr_39022_39064 = state_38998__$1;
(statearr_39022_39064[(2)] = inst_38940);

(statearr_39022_39064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (3))){
var inst_38930 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38998__$1 = state_38998;
if(inst_38930){
var statearr_39023_39065 = state_38998__$1;
(statearr_39023_39065[(1)] = (13));

} else {
var statearr_39024_39066 = state_38998__$1;
(statearr_39024_39066[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (12))){
var inst_38926 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
var statearr_39025_39067 = state_38998__$1;
(statearr_39025_39067[(2)] = inst_38926);

(statearr_39025_39067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (2))){
var inst_38913 = (state_38998[(10)]);
var inst_38913__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38998__$1 = (function (){var statearr_39026 = state_38998;
(statearr_39026[(10)] = inst_38913__$1);

return statearr_39026;
})();
if(cljs.core.truth_(inst_38913__$1)){
var statearr_39027_39068 = state_38998__$1;
(statearr_39027_39068[(1)] = (5));

} else {
var statearr_39028_39069 = state_38998__$1;
(statearr_39028_39069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (23))){
var inst_38956 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38998__$1 = state_38998;
if(inst_38956){
var statearr_39029_39070 = state_38998__$1;
(statearr_39029_39070[(1)] = (25));

} else {
var statearr_39030_39071 = state_38998__$1;
(statearr_39030_39071[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (35))){
var state_38998__$1 = state_38998;
var statearr_39031_39072 = state_38998__$1;
(statearr_39031_39072[(2)] = null);

(statearr_39031_39072[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (19))){
var inst_38951 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38998__$1 = state_38998;
if(inst_38951){
var statearr_39032_39073 = state_38998__$1;
(statearr_39032_39073[(1)] = (22));

} else {
var statearr_39033_39074 = state_38998__$1;
(statearr_39033_39074[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (11))){
var inst_38922 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
var statearr_39034_39075 = state_38998__$1;
(statearr_39034_39075[(2)] = inst_38922);

(statearr_39034_39075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (9))){
var inst_38924 = figwheel.client.heads_up.clear.call(null);
var state_38998__$1 = state_38998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38998__$1,(12),inst_38924);
} else {
if((state_val_38999 === (5))){
var inst_38915 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38998__$1 = state_38998;
var statearr_39035_39076 = state_38998__$1;
(statearr_39035_39076[(2)] = inst_38915);

(statearr_39035_39076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (14))){
var inst_38942 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38998__$1 = state_38998;
if(inst_38942){
var statearr_39036_39077 = state_38998__$1;
(statearr_39036_39077[(1)] = (18));

} else {
var statearr_39037_39078 = state_38998__$1;
(statearr_39037_39078[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (26))){
var inst_38968 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38998__$1 = state_38998;
if(inst_38968){
var statearr_39038_39079 = state_38998__$1;
(statearr_39038_39079[(1)] = (30));

} else {
var statearr_39039_39080 = state_38998__$1;
(statearr_39039_39080[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (16))){
var inst_38934 = (state_38998[(2)]);
var inst_38935 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38936 = figwheel.client.heads_up.display_exception.call(null,inst_38935);
var state_38998__$1 = (function (){var statearr_39040 = state_38998;
(statearr_39040[(13)] = inst_38934);

return statearr_39040;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38998__$1,(17),inst_38936);
} else {
if((state_val_38999 === (30))){
var inst_38970 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38971 = figwheel.client.heads_up.display_warning.call(null,inst_38970);
var state_38998__$1 = state_38998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38998__$1,(33),inst_38971);
} else {
if((state_val_38999 === (10))){
var inst_38928 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
var statearr_39041_39081 = state_38998__$1;
(statearr_39041_39081[(2)] = inst_38928);

(statearr_39041_39081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (18))){
var inst_38944 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38945 = figwheel.client.heads_up.display_exception.call(null,inst_38944);
var state_38998__$1 = state_38998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38998__$1,(21),inst_38945);
} else {
if((state_val_38999 === (37))){
var inst_38981 = (state_38998[(2)]);
var state_38998__$1 = state_38998;
var statearr_39042_39082 = state_38998__$1;
(statearr_39042_39082[(2)] = inst_38981);

(statearr_39042_39082[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38999 === (8))){
var inst_38920 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38998__$1 = state_38998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38998__$1,(11),inst_38920);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto____0 = (function (){
var statearr_39043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39043[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto__);

(statearr_39043[(1)] = (1));

return statearr_39043;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto____1 = (function (state_38998){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_38998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e39044){if((e39044 instanceof Object)){
var ex__33494__auto__ = e39044;
var statearr_39045_39083 = state_38998;
(statearr_39045_39083[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39084 = state_38998;
state_38998 = G__39084;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto__ = function(state_38998){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto____1.call(this,state_38998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_39046 = f__33588__auto__.call(null);
(statearr_39046[(6)] = c__33587__auto__);

return statearr_39046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));

return c__33587__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33587__auto___39113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_39099){
var state_val_39100 = (state_39099[(1)]);
if((state_val_39100 === (1))){
var state_39099__$1 = state_39099;
var statearr_39101_39114 = state_39099__$1;
(statearr_39101_39114[(2)] = null);

(statearr_39101_39114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (2))){
var state_39099__$1 = state_39099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39099__$1,(4),ch);
} else {
if((state_val_39100 === (3))){
var inst_39097 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39099__$1,inst_39097);
} else {
if((state_val_39100 === (4))){
var inst_39087 = (state_39099[(7)]);
var inst_39087__$1 = (state_39099[(2)]);
var state_39099__$1 = (function (){var statearr_39102 = state_39099;
(statearr_39102[(7)] = inst_39087__$1);

return statearr_39102;
})();
if(cljs.core.truth_(inst_39087__$1)){
var statearr_39103_39115 = state_39099__$1;
(statearr_39103_39115[(1)] = (5));

} else {
var statearr_39104_39116 = state_39099__$1;
(statearr_39104_39116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (5))){
var inst_39087 = (state_39099[(7)]);
var inst_39089 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39087);
var state_39099__$1 = state_39099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39099__$1,(8),inst_39089);
} else {
if((state_val_39100 === (6))){
var state_39099__$1 = state_39099;
var statearr_39105_39117 = state_39099__$1;
(statearr_39105_39117[(2)] = null);

(statearr_39105_39117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (7))){
var inst_39095 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
var statearr_39106_39118 = state_39099__$1;
(statearr_39106_39118[(2)] = inst_39095);

(statearr_39106_39118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (8))){
var inst_39091 = (state_39099[(2)]);
var state_39099__$1 = (function (){var statearr_39107 = state_39099;
(statearr_39107[(8)] = inst_39091);

return statearr_39107;
})();
var statearr_39108_39119 = state_39099__$1;
(statearr_39108_39119[(2)] = null);

(statearr_39108_39119[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33491__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33491__auto____0 = (function (){
var statearr_39109 = [null,null,null,null,null,null,null,null,null];
(statearr_39109[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33491__auto__);

(statearr_39109[(1)] = (1));

return statearr_39109;
});
var figwheel$client$heads_up_plugin_$_state_machine__33491__auto____1 = (function (state_39099){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_39099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e39110){if((e39110 instanceof Object)){
var ex__33494__auto__ = e39110;
var statearr_39111_39120 = state_39099;
(statearr_39111_39120[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39121 = state_39099;
state_39099 = G__39121;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33491__auto__ = function(state_39099){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33491__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33491__auto____1.call(this,state_39099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33491__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33491__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_39112 = f__33588__auto__.call(null);
(statearr_39112[(6)] = c__33587__auto___39113);

return statearr_39112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_39127){
var state_val_39128 = (state_39127[(1)]);
if((state_val_39128 === (1))){
var inst_39122 = cljs.core.async.timeout.call(null,(3000));
var state_39127__$1 = state_39127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39127__$1,(2),inst_39122);
} else {
if((state_val_39128 === (2))){
var inst_39124 = (state_39127[(2)]);
var inst_39125 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39127__$1 = (function (){var statearr_39129 = state_39127;
(statearr_39129[(7)] = inst_39124);

return statearr_39129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39127__$1,inst_39125);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33491__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33491__auto____0 = (function (){
var statearr_39130 = [null,null,null,null,null,null,null,null];
(statearr_39130[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33491__auto__);

(statearr_39130[(1)] = (1));

return statearr_39130;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33491__auto____1 = (function (state_39127){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_39127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e39131){if((e39131 instanceof Object)){
var ex__33494__auto__ = e39131;
var statearr_39132_39134 = state_39127;
(statearr_39132_39134[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39135 = state_39127;
state_39127 = G__39135;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33491__auto__ = function(state_39127){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33491__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33491__auto____1.call(this,state_39127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33491__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33491__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_39133 = f__33588__auto__.call(null);
(statearr_39133[(6)] = c__33587__auto__);

return statearr_39133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));

return c__33587__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5804__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5804__auto__)){
var figwheel_version = temp__5804__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33588__auto__ = (function (){var switch__33490__auto__ = (function (state_39142){
var state_val_39143 = (state_39142[(1)]);
if((state_val_39143 === (1))){
var inst_39136 = cljs.core.async.timeout.call(null,(2000));
var state_39142__$1 = state_39142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39142__$1,(2),inst_39136);
} else {
if((state_val_39143 === (2))){
var inst_39138 = (state_39142[(2)]);
var inst_39139 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39140 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39139);
var state_39142__$1 = (function (){var statearr_39144 = state_39142;
(statearr_39144[(7)] = inst_39138);

return statearr_39144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39142__$1,inst_39140);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto____0 = (function (){
var statearr_39145 = [null,null,null,null,null,null,null,null];
(statearr_39145[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto__);

(statearr_39145[(1)] = (1));

return statearr_39145;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto____1 = (function (state_39142){
while(true){
var ret_value__33492__auto__ = (function (){try{while(true){
var result__33493__auto__ = switch__33490__auto__.call(null,state_39142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33493__auto__;
}
break;
}
}catch (e39146){if((e39146 instanceof Object)){
var ex__33494__auto__ = e39146;
var statearr_39147_39149 = state_39142;
(statearr_39147_39149[(5)] = ex__33494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39150 = state_39142;
state_39142 = G__39150;
continue;
} else {
return ret_value__33492__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto__ = function(state_39142){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto____1.call(this,state_39142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33491__auto__;
})()
})();
var state__33589__auto__ = (function (){var statearr_39148 = f__33588__auto__.call(null);
(statearr_39148[(6)] = c__33587__auto__);

return statearr_39148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33589__auto__);
}));

return c__33587__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39151){
var map__39152 = p__39151;
var map__39152__$1 = cljs.core.__destructure_map.call(null,map__39152);
var file = cljs.core.get.call(null,map__39152__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39152__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39152__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39153 = "";
var G__39153__$1 = (cljs.core.truth_(file)?[G__39153,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39153);
var G__39153__$2 = (cljs.core.truth_(line)?[G__39153__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39153__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = line;
if(cljs.core.truth_(and__5041__auto__)){
return column;
} else {
return and__5041__auto__;
}
})())){
return [G__39153__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39153__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39154){
var map__39155 = p__39154;
var map__39155__$1 = cljs.core.__destructure_map.call(null,map__39155);
var ed = map__39155__$1;
var exception_data = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_39157 = (function (){var G__39156 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39156)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__39156;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_39157);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39158){
var map__39159 = p__39158;
var map__39159__$1 = cljs.core.__destructure_map.call(null,map__39159);
var w = map__39159__$1;
var message = cljs.core.get.call(null,map__39159__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target\\cljsbuild\\public\\js\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target\\cljsbuild\\public\\js\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__5041__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39160 = cljs.core.seq.call(null,plugins);
var chunk__39161 = null;
var count__39162 = (0);
var i__39163 = (0);
while(true){
if((i__39163 < count__39162)){
var vec__39170 = cljs.core._nth.call(null,chunk__39161,i__39163);
var k = cljs.core.nth.call(null,vec__39170,(0),null);
var plugin = cljs.core.nth.call(null,vec__39170,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39176 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39160,chunk__39161,count__39162,i__39163,pl_39176,vec__39170,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39176.call(null,msg_hist);
});})(seq__39160,chunk__39161,count__39162,i__39163,pl_39176,vec__39170,k,plugin))
);
} else {
}


var G__39177 = seq__39160;
var G__39178 = chunk__39161;
var G__39179 = count__39162;
var G__39180 = (i__39163 + (1));
seq__39160 = G__39177;
chunk__39161 = G__39178;
count__39162 = G__39179;
i__39163 = G__39180;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__39160);
if(temp__5804__auto__){
var seq__39160__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39160__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__39160__$1);
var G__39181 = cljs.core.chunk_rest.call(null,seq__39160__$1);
var G__39182 = c__5565__auto__;
var G__39183 = cljs.core.count.call(null,c__5565__auto__);
var G__39184 = (0);
seq__39160 = G__39181;
chunk__39161 = G__39182;
count__39162 = G__39183;
i__39163 = G__39184;
continue;
} else {
var vec__39173 = cljs.core.first.call(null,seq__39160__$1);
var k = cljs.core.nth.call(null,vec__39173,(0),null);
var plugin = cljs.core.nth.call(null,vec__39173,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39185 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39160,chunk__39161,count__39162,i__39163,pl_39185,vec__39173,k,plugin,seq__39160__$1,temp__5804__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39185.call(null,msg_hist);
});})(seq__39160,chunk__39161,count__39162,i__39163,pl_39185,vec__39173,k,plugin,seq__39160__$1,temp__5804__auto__))
);
} else {
}


var G__39186 = cljs.core.next.call(null,seq__39160__$1);
var G__39187 = null;
var G__39188 = (0);
var G__39189 = (0);
seq__39160 = G__39186;
chunk__39161 = G__39187;
count__39162 = G__39188;
i__39163 = G__39189;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39191 = arguments.length;
switch (G__39191) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39192_39197 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39193_39198 = null;
var count__39194_39199 = (0);
var i__39195_39200 = (0);
while(true){
if((i__39195_39200 < count__39194_39199)){
var msg_39201 = cljs.core._nth.call(null,chunk__39193_39198,i__39195_39200);
figwheel.client.socket.handle_incoming_message.call(null,msg_39201);


var G__39202 = seq__39192_39197;
var G__39203 = chunk__39193_39198;
var G__39204 = count__39194_39199;
var G__39205 = (i__39195_39200 + (1));
seq__39192_39197 = G__39202;
chunk__39193_39198 = G__39203;
count__39194_39199 = G__39204;
i__39195_39200 = G__39205;
continue;
} else {
var temp__5804__auto___39206 = cljs.core.seq.call(null,seq__39192_39197);
if(temp__5804__auto___39206){
var seq__39192_39207__$1 = temp__5804__auto___39206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39192_39207__$1)){
var c__5565__auto___39208 = cljs.core.chunk_first.call(null,seq__39192_39207__$1);
var G__39209 = cljs.core.chunk_rest.call(null,seq__39192_39207__$1);
var G__39210 = c__5565__auto___39208;
var G__39211 = cljs.core.count.call(null,c__5565__auto___39208);
var G__39212 = (0);
seq__39192_39197 = G__39209;
chunk__39193_39198 = G__39210;
count__39194_39199 = G__39211;
i__39195_39200 = G__39212;
continue;
} else {
var msg_39213 = cljs.core.first.call(null,seq__39192_39207__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39213);


var G__39214 = cljs.core.next.call(null,seq__39192_39207__$1);
var G__39215 = null;
var G__39216 = (0);
var G__39217 = (0);
seq__39192_39197 = G__39214;
chunk__39193_39198 = G__39215;
count__39194_39199 = G__39216;
i__39195_39200 = G__39217;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39221 = arguments.length;
var i__5767__auto___39222 = (0);
while(true){
if((i__5767__auto___39222 < len__5766__auto___39221)){
args__5772__auto__.push((arguments[i__5767__auto___39222]));

var G__39223 = (i__5767__auto___39222 + (1));
i__5767__auto___39222 = G__39223;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39219){
var map__39220 = p__39219;
var map__39220__$1 = cljs.core.__destructure_map.call(null,map__39220);
var opts = map__39220__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39218){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39218));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39224){if((e39224 instanceof Error)){
var e = e39224;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39224;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__39225){
var map__39226 = p__39225;
var map__39226__$1 = cljs.core.__destructure_map.call(null,map__39226);
var msg_name = cljs.core.get.call(null,map__39226__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1672362826911
