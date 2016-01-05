// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.components.item');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
/**
 * Item contains the title and the action to browse the URL of the news item
 */
paperboard.components.item.item = (function paperboard$components$item$item(data,owner){
if(typeof paperboard.components.item.t12042 !== 'undefined'){
} else {

/**
* @constructor
*/
paperboard.components.item.t12042 = (function (owner,data,item,meta12043){
this.owner = owner;
this.data = data;
this.item = item;
this.meta12043 = meta12043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
paperboard.components.item.t12042.prototype.om$core$IRender$ = true;

paperboard.components.item.t12042.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__12045 = {"className": "item"};
var G__12046 = (function (){var G__12047 = {"title": cljs.core.constant$keyword$_COLON_title.cljs$core$IFn$_invoke$arity$1(self__.data), "target": "_blank", "href": cljs.core.constant$keyword$_COLON_url.cljs$core$IFn$_invoke$arity$1(self__.data)};
var G__12048 = cljs.core.constant$keyword$_COLON_title.cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.a(G__12047,G__12048);
})();
return React.DOM.li(G__12045,G__12046);
});

paperboard.components.item.t12042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12044){
var self__ = this;
var _12044__$1 = this;
return self__.meta12043;
});

paperboard.components.item.t12042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12044,meta12043__$1){
var self__ = this;
var _12044__$1 = this;
return (new paperboard.components.item.t12042(self__.owner,self__.data,self__.item,meta12043__$1));
});

paperboard.components.item.t12042.cljs$lang$type = true;

paperboard.components.item.t12042.cljs$lang$ctorStr = "paperboard.components.item/t12042";

paperboard.components.item.t12042.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"paperboard.components.item/t12042");
});

paperboard.components.item.__GT_t12042 = (function paperboard$components$item$item_$___GT_t12042(owner__$1,data__$1,item__$1,meta12043){
return (new paperboard.components.item.t12042(owner__$1,data__$1,item__$1,meta12043));
});

}

return (new paperboard.components.item.t12042(owner,data,paperboard$components$item$item,cljs.core.PersistentArrayMap.EMPTY));
});
