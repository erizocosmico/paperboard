// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.services.column');
goog.require('cljs.core');
goog.require('om.core');
goog.require('paperboard.services.storage');
/**
 * Creates a new column data structure
 */
paperboard.services.column.make_col = (function paperboard$services$column$make_col(args){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$_COLON_id,(new Date()).getTime(),cljs.core.constant$keyword$_COLON_items,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$_COLON_kind,cljs.core.constant$keyword$_COLON_kind.cljs$core$IFn$_invoke$arity$1(args),cljs.core.constant$keyword$_COLON_title,cljs.core.constant$keyword$_COLON_title.cljs$core$IFn$_invoke$arity$1(args),cljs.core.constant$keyword$_COLON_url,cljs.core.constant$keyword$_COLON_url.cljs$core$IFn$_invoke$arity$1(args),cljs.core.constant$keyword$_COLON_last_update,(0)], null);
});
/**
 * Adds a new column to the app
 */
paperboard.services.column.add_col = (function paperboard$services$column$add_col(cols,args){
var col = paperboard.services.column.make_col(args);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cols));
});
/**
 * Removes a column from the list
 */
paperboard.services.column.remove_col = (function paperboard$services$column$remove_col(cols,id){
return cljs.core.filterv((function (c){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(c),id));
}),cols);
});
/**
 * Moves a column to the right or to the left
 */
paperboard.services.column.move_col = (function paperboard$services$column$move_col(cols,id,dir){
var result = cljs.core.PersistentVector.EMPTY;
var remaining = cols;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(remaining),(0))){
return result;
} else {
var col = cljs.core.first(remaining);
var tail = cljs.core.rest(remaining);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(col),id)){
var G__12089 = (((dir instanceof cljs.core.Keyword))?dir.fqn:null);
switch (G__12089) {
case "right":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(tail),(0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,col);
} else {
var G__12091 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.first(tail),cljs.core.array_seq([col], 0));
var G__12092 = cljs.core.rest(tail);
result = G__12091;
remaining = G__12092;
continue;
}

break;
case "left":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(result),(0))){
return remaining;
} else {
var G__12093 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.butlast(result)),col,cljs.core.array_seq([cljs.core.last(result)], 0));
var G__12094 = tail;
result = G__12093;
remaining = G__12094;
continue;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dir)].join('')));

}
} else {
var G__12095 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,col);
var G__12096 = tail;
result = G__12095;
remaining = G__12096;
continue;
}
}
break;
}
});
/**
 * Merges two vectors of news taking care that there are no duplicates
 */
paperboard.services.column.merge_news = (function paperboard$services$column$merge_news(news,prev){
var result = news;
var to_add = prev;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(to_add),(0))){
return result;
} else {
var item = cljs.core.first(to_add);
var more = cljs.core.rest(to_add);
if(cljs.core.truth_(cljs.core.some(((function (result,to_add,item,more){
return (function (i){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(i),cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(item));
});})(result,to_add,item,more))
,news))){
var G__12097 = result;
var G__12098 = more;
result = G__12097;
to_add = G__12098;
continue;
} else {
var G__12099 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,item);
var G__12100 = more;
result = G__12099;
to_add = G__12100;
continue;
}
}
break;
}
});
/**
 * Returns a function to update the news in a column
 */
paperboard.services.column.update_col_news = (function paperboard$services$column$update_col_news(id,news){
return (function (cols){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (col){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(col),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(col,cljs.core.constant$keyword$_COLON_items,paperboard.services.column.merge_news(cljs.core.constant$keyword$_COLON_items.cljs$core$IFn$_invoke$arity$1(news),cljs.core.constant$keyword$_COLON_items.cljs$core$IFn$_invoke$arity$1(col)),cljs.core.array_seq([cljs.core.constant$keyword$_COLON_last_update,((new Date()).getTime() / (1000))], 0));
} else {
return col;
}
}),cols);
});
});
/**
 * Only the first 25 items of a column should be retrieved at startup
 */
paperboard.services.column.initial_col = (function paperboard$services$column$initial_col(col){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,cljs.core.constant$keyword$_COLON_items,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((25),cljs.core.constant$keyword$_COLON_items.cljs$core$IFn$_invoke$arity$1(col))));
});
/**
 * Returns the columns at the startup time. If there are columns in
 * localStorage they will be retrieved from there.
 */
paperboard.services.column.initial_columns = (function paperboard$services$column$initial_columns(){
var cols = paperboard.services.storage.retrieve("columns",null);
if((cols == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(paperboard.services.column.initial_col,cols));
}
});
