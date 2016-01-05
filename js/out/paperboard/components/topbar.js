// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.components.topbar');
goog.require('cljs.core');
goog.require('paperboard.components.add_column_modal');
goog.require('om.dom');
goog.require('om.core');
/**
 * Topbar component renders the title bar with action buttons
 */
paperboard.components.topbar.topbar = (function paperboard$components$topbar$topbar(data,owner){
if(typeof paperboard.components.topbar.t12074 !== 'undefined'){
} else {

/**
* @constructor
*/
paperboard.components.topbar.t12074 = (function (owner,data,topbar,meta12075){
this.owner = owner;
this.data = data;
this.topbar = topbar;
this.meta12075 = meta12075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
paperboard.components.topbar.t12074.prototype.om$core$IRender$ = true;

paperboard.components.topbar.t12074.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__12077 = {"className": "topbar"};
var G__12078 = (function (){var G__12080 = {"className": "topbar__title"};
var G__12081 = "P";
return React.DOM.h1(G__12080,G__12081);
})();
var G__12079 = (function (){var G__12082 = {"onClick": ((function (G__12077,G__12078,___$1){
return (function (){
return paperboard.components.add_column_modal.toggle_add_modal(self__.owner);
});})(G__12077,G__12078,___$1))
, "className": "topbar__add-col pb-icon pb-icon--add"};
return React.DOM.button(G__12082);
})();
return React.DOM.div(G__12077,G__12078,G__12079);
});

paperboard.components.topbar.t12074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12076){
var self__ = this;
var _12076__$1 = this;
return self__.meta12075;
});

paperboard.components.topbar.t12074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12076,meta12075__$1){
var self__ = this;
var _12076__$1 = this;
return (new paperboard.components.topbar.t12074(self__.owner,self__.data,self__.topbar,meta12075__$1));
});

paperboard.components.topbar.t12074.cljs$lang$type = true;

paperboard.components.topbar.t12074.cljs$lang$ctorStr = "paperboard.components.topbar/t12074";

paperboard.components.topbar.t12074.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"paperboard.components.topbar/t12074");
});

paperboard.components.topbar.__GT_t12074 = (function paperboard$components$topbar$topbar_$___GT_t12074(owner__$1,data__$1,topbar__$1,meta12075){
return (new paperboard.components.topbar.t12074(owner__$1,data__$1,topbar__$1,meta12075));
});

}

return (new paperboard.components.topbar.t12074(owner,data,paperboard$components$topbar$topbar,cljs.core.PersistentArrayMap.EMPTY));
});
