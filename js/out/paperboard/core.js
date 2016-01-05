// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('paperboard.components.app');
goog.require('paperboard.services.column');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_();
if(typeof paperboard.core.app_state !== 'undefined'){
} else {
paperboard.core.app_state = (function (){var G__12085 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_columns,paperboard.services.column.initial_columns(),cljs.core.constant$keyword$_COLON_show_add_modal,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12085) : cljs.core.atom.call(null,G__12085));
})();
}
paperboard.core.main = (function paperboard$core$main(){
var req_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var col_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var action_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return om.core.root(paperboard.components.app.make_main_app(req_ch,col_ch,action_ch),paperboard.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_shared,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_req_ch,req_ch,cljs.core.constant$keyword$_COLON_col_ch,col_ch,cljs.core.constant$keyword$_COLON_action_ch,action_ch], null),cljs.core.constant$keyword$_COLON_target,document.getElementById("app")], null));
});
