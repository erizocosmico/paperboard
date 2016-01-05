// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.components.column');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('paperboard.components.item');
goog.require('om.core');
paperboard.components.column.move_col = (function paperboard$components$column$move_col(dir,id,owner){
var ch = cljs.core.constant$keyword$_COLON_col_ch.cljs$core$IFn$_invoke$arity$1(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner));
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__,ch){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__,ch){
return (function (state_11886){
var state_val_11887 = (state_11886[(1)]);
if((state_val_11887 === (2))){
var inst_11884 = (state_11886[(2)]);
var state_11886__$1 = state_11886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11886__$1,inst_11884);
} else {
if((state_val_11887 === (1))){
var inst_11880 = [cljs.core.constant$keyword$_COLON_type,cljs.core.constant$keyword$_COLON_id,cljs.core.constant$keyword$_COLON_dir];
var inst_11881 = [cljs.core.constant$keyword$_COLON_move,id,dir];
var inst_11882 = cljs.core.PersistentHashMap.fromArrays(inst_11880,inst_11881);
var state_11886__$1 = state_11886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11886__$1,(2),ch,inst_11882);
} else {
return null;
}
}
});})(c__7883__auto__,ch))
;
return ((function (switch__7803__auto__,c__7883__auto__,ch){
return (function() {
var paperboard$components$column$move_col_$_state_machine__7804__auto__ = null;
var paperboard$components$column$move_col_$_state_machine__7804__auto____0 = (function (){
var statearr_11891 = [null,null,null,null,null,null,null];
(statearr_11891[(0)] = paperboard$components$column$move_col_$_state_machine__7804__auto__);

(statearr_11891[(1)] = (1));

return statearr_11891;
});
var paperboard$components$column$move_col_$_state_machine__7804__auto____1 = (function (state_11886){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_11886);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e11892){if((e11892 instanceof Object)){
var ex__7807__auto__ = e11892;
var statearr_11893_11895 = state_11886;
(statearr_11893_11895[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11886);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11896 = state_11886;
state_11886 = G__11896;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$components$column$move_col_$_state_machine__7804__auto__ = function(state_11886){
switch(arguments.length){
case 0:
return paperboard$components$column$move_col_$_state_machine__7804__auto____0.call(this);
case 1:
return paperboard$components$column$move_col_$_state_machine__7804__auto____1.call(this,state_11886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$components$column$move_col_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$components$column$move_col_$_state_machine__7804__auto____0;
paperboard$components$column$move_col_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$components$column$move_col_$_state_machine__7804__auto____1;
return paperboard$components$column$move_col_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__,ch))
})();
var state__7885__auto__ = (function (){var statearr_11894 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_11894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_11894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__,ch))
);

return c__7883__auto__;
});
paperboard.components.column.delete_col = (function paperboard$components$column$delete_col(id,owner){
var ch = cljs.core.constant$keyword$_COLON_col_ch.cljs$core$IFn$_invoke$arity$1(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner));
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__,ch){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__,ch){
return (function (state_11918){
var state_val_11919 = (state_11918[(1)]);
if((state_val_11919 === (2))){
var inst_11916 = (state_11918[(2)]);
var state_11918__$1 = state_11918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11918__$1,inst_11916);
} else {
if((state_val_11919 === (1))){
var inst_11912 = [cljs.core.constant$keyword$_COLON_type,cljs.core.constant$keyword$_COLON_id];
var inst_11913 = [cljs.core.constant$keyword$_COLON_delete,id];
var inst_11914 = cljs.core.PersistentHashMap.fromArrays(inst_11912,inst_11913);
var state_11918__$1 = state_11918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11918__$1,(2),ch,inst_11914);
} else {
return null;
}
}
});})(c__7883__auto__,ch))
;
return ((function (switch__7803__auto__,c__7883__auto__,ch){
return (function() {
var paperboard$components$column$delete_col_$_state_machine__7804__auto__ = null;
var paperboard$components$column$delete_col_$_state_machine__7804__auto____0 = (function (){
var statearr_11923 = [null,null,null,null,null,null,null];
(statearr_11923[(0)] = paperboard$components$column$delete_col_$_state_machine__7804__auto__);

(statearr_11923[(1)] = (1));

return statearr_11923;
});
var paperboard$components$column$delete_col_$_state_machine__7804__auto____1 = (function (state_11918){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_11918);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e11924){if((e11924 instanceof Object)){
var ex__7807__auto__ = e11924;
var statearr_11925_11927 = state_11918;
(statearr_11925_11927[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11918);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11928 = state_11918;
state_11918 = G__11928;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$components$column$delete_col_$_state_machine__7804__auto__ = function(state_11918){
switch(arguments.length){
case 0:
return paperboard$components$column$delete_col_$_state_machine__7804__auto____0.call(this);
case 1:
return paperboard$components$column$delete_col_$_state_machine__7804__auto____1.call(this,state_11918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$components$column$delete_col_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$components$column$delete_col_$_state_machine__7804__auto____0;
paperboard$components$column$delete_col_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$components$column$delete_col_$_state_machine__7804__auto____1;
return paperboard$components$column$delete_col_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__,ch))
})();
var state__7885__auto__ = (function (){var statearr_11926 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_11926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_11926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__,ch))
);

return c__7883__auto__;
});
/**
 * When hovered, the column header shows the column actions, such as move or delete
 */
paperboard.components.column.column_actions = (function paperboard$components$column$column_actions(data,owner){
if(typeof paperboard.components.column.t11939 !== 'undefined'){
} else {

/**
* @constructor
*/
paperboard.components.column.t11939 = (function (owner,data,column_actions,meta11940){
this.owner = owner;
this.data = data;
this.column_actions = column_actions;
this.meta11940 = meta11940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
paperboard.components.column.t11939.prototype.om$core$IRender$ = true;

paperboard.components.column.t11939.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var id = cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(self__.data);
var G__11942 = {"className": "column__actions"};
var G__11943 = (function (){var G__11946 = {"onClick": ((function (G__11942,id,___$1){
return (function (){
return paperboard.components.column.move_col(cljs.core.constant$keyword$_COLON_left,id,self__.owner);
});})(G__11942,id,___$1))
, "className": "action-left pb-icon pb-icon--arrow-left"};
return React.DOM.button(G__11946);
})();
var G__11944 = (function (){var G__11947 = {"onClick": ((function (G__11942,G__11943,id,___$1){
return (function (){
return paperboard.components.column.move_col(cljs.core.constant$keyword$_COLON_right,id,self__.owner);
});})(G__11942,G__11943,id,___$1))
, "className": "action-right pb-icon pb-icon--arrow-right"};
return React.DOM.button(G__11947);
})();
var G__11945 = (function (){var G__11948 = {"onClick": ((function (G__11942,G__11943,G__11944,id,___$1){
return (function (){
return paperboard.components.column.delete_col(id,self__.owner);
});})(G__11942,G__11943,G__11944,id,___$1))
, "className": "action-remove pb-icon pb-icon--delete"};
return React.DOM.button(G__11948);
})();
return React.DOM.div(G__11942,G__11943,G__11944,G__11945);
});

paperboard.components.column.t11939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11941){
var self__ = this;
var _11941__$1 = this;
return self__.meta11940;
});

paperboard.components.column.t11939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11941,meta11940__$1){
var self__ = this;
var _11941__$1 = this;
return (new paperboard.components.column.t11939(self__.owner,self__.data,self__.column_actions,meta11940__$1));
});

paperboard.components.column.t11939.cljs$lang$type = true;

paperboard.components.column.t11939.cljs$lang$ctorStr = "paperboard.components.column/t11939";

paperboard.components.column.t11939.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"paperboard.components.column/t11939");
});

paperboard.components.column.__GT_t11939 = (function paperboard$components$column$column_actions_$___GT_t11939(owner__$1,data__$1,column_actions__$1,meta11940){
return (new paperboard.components.column.t11939(owner__$1,data__$1,column_actions__$1,meta11940));
});

}

return (new paperboard.components.column.t11939(owner,data,paperboard$components$column$column_actions,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * The column header is the component that has
 */
paperboard.components.column.column_header = (function paperboard$components$column$column_header(data,owner){
if(typeof paperboard.components.column.t11959 !== 'undefined'){
} else {

/**
* @constructor
*/
paperboard.components.column.t11959 = (function (owner,data,column_header,meta11960){
this.owner = owner;
this.data = data;
this.column_header = column_header;
this.meta11960 = meta11960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
paperboard.components.column.t11959.prototype.om$core$IRender$ = true;

paperboard.components.column.t11959.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__11962 = {"className": "column__header"};
var G__11963 = (function (){var G__11966 = {"className": [cljs.core.str("column__header__icon pb-icon pb-icon--"),cljs.core.str(cljs.core.name(cljs.core.constant$keyword$_COLON_kind.cljs$core$IFn$_invoke$arity$1(self__.data)))].join('')};
return React.DOM.span(G__11966);
})();
var G__11964 = (function (){var G__11967 = null;
var G__11968 = cljs.core.constant$keyword$_COLON_title.cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.h3(G__11967,G__11968);
})();
var G__11965 = om.core.build.cljs$core$IFn$_invoke$arity$2(paperboard.components.column.column_actions,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_id,cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(self__.data)], null));
return React.DOM.div(G__11962,G__11963,G__11964,G__11965);
});

paperboard.components.column.t11959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11961){
var self__ = this;
var _11961__$1 = this;
return self__.meta11960;
});

paperboard.components.column.t11959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11961,meta11960__$1){
var self__ = this;
var _11961__$1 = this;
return (new paperboard.components.column.t11959(self__.owner,self__.data,self__.column_header,meta11960__$1));
});

paperboard.components.column.t11959.cljs$lang$type = true;

paperboard.components.column.t11959.cljs$lang$ctorStr = "paperboard.components.column/t11959";

paperboard.components.column.t11959.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"paperboard.components.column/t11959");
});

paperboard.components.column.__GT_t11959 = (function paperboard$components$column$column_header_$___GT_t11959(owner__$1,data__$1,column_header__$1,meta11960){
return (new paperboard.components.column.t11959(owner__$1,data__$1,column_header__$1,meta11960));
});

}

return (new paperboard.components.column.t11959(owner,data,paperboard$components$column$column_header,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A column is the component that contains the column actions and the news items
 */
paperboard.components.column.column = (function paperboard$components$column$column(data,owner){
if(typeof paperboard.components.column.t11995 !== 'undefined'){
} else {

/**
* @constructor
*/
paperboard.components.column.t11995 = (function (owner,data,column,meta11996){
this.owner = owner;
this.data = data;
this.column = column;
this.meta11996 = meta11996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
paperboard.components.column.t11995.prototype.om$core$IRender$ = true;

paperboard.components.column.t11995.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__11998 = {"className": "column-wrap"};
var G__11999 = (function (){var G__12000 = {"key": cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(self__.data), "className": "column"};
var G__12001 = om.core.build.cljs$core$IFn$_invoke$arity$2(paperboard.components.column.column_header,self__.data);
var G__12002 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "column__items"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(paperboard.components.item.item,cljs.core.constant$keyword$_COLON_items.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,cljs.core.constant$keyword$_COLON_id], null)));
return React.DOM.div(G__12000,G__12001,G__12002);
})();
return React.DOM.div(G__11998,G__11999);
});

paperboard.components.column.t11995.prototype.om$core$IWillMount$ = true;

paperboard.components.column.t11995.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((cljs.core.constant$keyword$_COLON_last_update.cljs$core$IFn$_invoke$arity$1(self__.data) + (3600)) < ((new Date()).getTime() / (1000)))){
var ch = cljs.core.constant$keyword$_COLON_req_ch.cljs$core$IFn$_invoke$arity$1(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner));
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__,ch,___$1){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__,ch,___$1){
return (function (state_12012){
var state_val_12013 = (state_12012[(1)]);
if((state_val_12013 === (2))){
var inst_12010 = (state_12012[(2)]);
var state_12012__$1 = state_12012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12012__$1,inst_12010);
} else {
if((state_val_12013 === (1))){
var inst_12003 = [cljs.core.constant$keyword$_COLON_type,cljs.core.constant$keyword$_COLON_id,cljs.core.constant$keyword$_COLON_url];
var inst_12004 = cljs.core.constant$keyword$_COLON_kind.cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_12005 = cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_12006 = cljs.core.constant$keyword$_COLON_url.cljs$core$IFn$_invoke$arity$1(self__.data);
var inst_12007 = [inst_12004,inst_12005,inst_12006];
var inst_12008 = cljs.core.PersistentHashMap.fromArrays(inst_12003,inst_12007);
var state_12012__$1 = state_12012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12012__$1,(2),ch,inst_12008);
} else {
return null;
}
}
});})(c__7883__auto__,ch,___$1))
;
return ((function (switch__7803__auto__,c__7883__auto__,ch,___$1){
return (function() {
var paperboard$components$column$column_$_state_machine__7804__auto__ = null;
var paperboard$components$column$column_$_state_machine__7804__auto____0 = (function (){
var statearr_12017 = [null,null,null,null,null,null,null];
(statearr_12017[(0)] = paperboard$components$column$column_$_state_machine__7804__auto__);

(statearr_12017[(1)] = (1));

return statearr_12017;
});
var paperboard$components$column$column_$_state_machine__7804__auto____1 = (function (state_12012){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_12012);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e12018){if((e12018 instanceof Object)){
var ex__7807__auto__ = e12018;
var statearr_12019_12021 = state_12012;
(statearr_12019_12021[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12012);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e12018;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__12022 = state_12012;
state_12012 = G__12022;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$components$column$column_$_state_machine__7804__auto__ = function(state_12012){
switch(arguments.length){
case 0:
return paperboard$components$column$column_$_state_machine__7804__auto____0.call(this);
case 1:
return paperboard$components$column$column_$_state_machine__7804__auto____1.call(this,state_12012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$components$column$column_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$components$column$column_$_state_machine__7804__auto____0;
paperboard$components$column$column_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$components$column$column_$_state_machine__7804__auto____1;
return paperboard$components$column$column_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__,ch,___$1))
})();
var state__7885__auto__ = (function (){var statearr_12020 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_12020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_12020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__,ch,___$1))
);

return c__7883__auto__;
} else {
return null;
}
});

paperboard.components.column.t11995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11997){
var self__ = this;
var _11997__$1 = this;
return self__.meta11996;
});

paperboard.components.column.t11995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11997,meta11996__$1){
var self__ = this;
var _11997__$1 = this;
return (new paperboard.components.column.t11995(self__.owner,self__.data,self__.column,meta11996__$1));
});

paperboard.components.column.t11995.cljs$lang$type = true;

paperboard.components.column.t11995.cljs$lang$ctorStr = "paperboard.components.column/t11995";

paperboard.components.column.t11995.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"paperboard.components.column/t11995");
});

paperboard.components.column.__GT_t11995 = (function paperboard$components$column$column_$___GT_t11995(owner__$1,data__$1,column__$1,meta11996){
return (new paperboard.components.column.t11995(owner__$1,data__$1,column__$1,meta11996));
});

}

return (new paperboard.components.column.t11995(owner,data,paperboard$components$column$column,cljs.core.PersistentArrayMap.EMPTY));
});
