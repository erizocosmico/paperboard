// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.components.desktop');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('paperboard.components.column');
goog.require('om.core');
/**
 * desktop component is the area containing all user columns
 */
paperboard.components.desktop.desktop = (function paperboard$components$desktop$desktop(data,owner){
if(typeof paperboard.components.desktop.t12028 !== 'undefined'){
} else {

/**
* @constructor
*/
paperboard.components.desktop.t12028 = (function (owner,data,desktop,meta12029){
this.owner = owner;
this.data = data;
this.desktop = desktop;
this.meta12029 = meta12029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
paperboard.components.desktop.t12028.prototype.om$core$IRender$ = true;

paperboard.components.desktop.t12028.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var cols = cljs.core.constant$keyword$_COLON_columns.cljs$core$IFn$_invoke$arity$1(self__.data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "desktop"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(paperboard.components.column.column,cols,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,cljs.core.constant$keyword$_COLON_id], null)));
});

paperboard.components.desktop.t12028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12030){
var self__ = this;
var _12030__$1 = this;
return self__.meta12029;
});

paperboard.components.desktop.t12028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12030,meta12029__$1){
var self__ = this;
var _12030__$1 = this;
return (new paperboard.components.desktop.t12028(self__.owner,self__.data,self__.desktop,meta12029__$1));
});

paperboard.components.desktop.t12028.cljs$lang$type = true;

paperboard.components.desktop.t12028.cljs$lang$ctorStr = "paperboard.components.desktop/t12028";

paperboard.components.desktop.t12028.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"paperboard.components.desktop/t12028");
});

paperboard.components.desktop.__GT_t12028 = (function paperboard$components$desktop$desktop_$___GT_t12028(owner__$1,data__$1,desktop__$1,meta12029){
return (new paperboard.components.desktop.t12028(owner__$1,data__$1,desktop__$1,meta12029));
});

}

return (new paperboard.components.desktop.t12028(owner,data,paperboard$components$desktop$desktop,cljs.core.PersistentArrayMap.EMPTY));
});
