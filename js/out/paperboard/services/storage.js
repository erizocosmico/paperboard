// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.services.storage');
goog.require('cljs.core');
goog.require('cljs.reader');
/**
 * Store data on the given key in localStorage
 */
paperboard.services.storage.store = (function paperboard$services$storage$store(k,data){
return localStorage.setItem(k,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0)));
});
/**
 * Retrieves the data for the given key from localStorage
 */
paperboard.services.storage.retrieve = (function paperboard$services$storage$retrieve(k,default_val){
var val = localStorage.getItem(k);
if((val == null)){
return default_val;
} else {
return cljs.reader.read_string(val);
}
});
