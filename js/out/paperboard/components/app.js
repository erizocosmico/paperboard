// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.components.app');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('paperboard.components.topbar');
goog.require('paperboard.services.news');
goog.require('cljs.core.async');
goog.require('paperboard.services.storage');
goog.require('paperboard.components.add_column_modal');
goog.require('paperboard.services.column');
goog.require('om.core');
goog.require('paperboard.components.desktop');
paperboard.components.app.dispatch = (function (){var method_table__4973__auto__ = (function (){var G__11654 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11654) : cljs.core.atom.call(null,G__11654));
})();
var prefer_table__4974__auto__ = (function (){var G__11655 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11655) : cljs.core.atom.call(null,G__11655));
})();
var method_cache__4975__auto__ = (function (){var G__11656 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11656) : cljs.core.atom.call(null,G__11656));
})();
var cached_hierarchy__4976__auto__ = (function (){var G__11657 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11657) : cljs.core.atom.call(null,G__11657));
})();
var hierarchy__4977__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$_COLON_hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("paperboard.components.app","dispatch"),((function (method_table__4973__auto__,prefer_table__4974__auto__,method_cache__4975__auto__,cached_hierarchy__4976__auto__,hierarchy__4977__auto__){
return (function (kind){
return kind;
});})(method_table__4973__auto__,prefer_table__4974__auto__,method_cache__4975__auto__,cached_hierarchy__4976__auto__,hierarchy__4977__auto__))
,cljs.core.constant$keyword$_COLON_default,hierarchy__4977__auto__,method_table__4973__auto__,prefer_table__4974__auto__,method_cache__4975__auto__,cached_hierarchy__4976__auto__));
})();
paperboard.components.app.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$_COLON_col,(function (_,ch,cursor){
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__){
return (function (state_11693){
var state_val_11694 = (state_11693[(1)]);
if((state_val_11694 === (7))){
var inst_11664 = (state_11693[(7)]);
var inst_11664__$1 = (state_11693[(2)]);
var inst_11683 = cljs.core.constant$keyword$_COLON_type.cljs$core$IFn$_invoke$arity$1(inst_11664__$1);
var state_11693__$1 = (function (){var statearr_11695 = state_11693;
(statearr_11695[(7)] = inst_11664__$1);

return statearr_11695;
})();
var G__11696_11717 = (((inst_11683 instanceof cljs.core.Keyword))?inst_11683.fqn:null);
switch (G__11696_11717) {
case "move":
var statearr_11697_11719 = state_11693__$1;
(statearr_11697_11719[(1)] = (11));


break;
case "delete":
var statearr_11698_11720 = state_11693__$1;
(statearr_11698_11720[(1)] = (10));


break;
case "add":
var statearr_11699_11721 = state_11693__$1;
(statearr_11699_11721[(1)] = (9));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11683)].join('')));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11694 === (1))){
var state_11693__$1 = state_11693;
var statearr_11700_11722 = state_11693__$1;
(statearr_11700_11722[(2)] = null);

(statearr_11700_11722[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11694 === (4))){
var state_11693__$1 = state_11693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11693__$1,(7),ch);
} else {
if((state_val_11694 === (6))){
var inst_11689 = (state_11693[(2)]);
var state_11693__$1 = state_11693;
var statearr_11701_11723 = state_11693__$1;
(statearr_11701_11723[(2)] = inst_11689);

(statearr_11701_11723[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11694 === (3))){
var inst_11691 = (state_11693[(2)]);
var state_11693__$1 = state_11693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11693__$1,inst_11691);
} else {
if((state_val_11694 === (2))){
var state_11693__$1 = state_11693;
var statearr_11702_11724 = state_11693__$1;
(statearr_11702_11724[(1)] = (4));



return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11694 === (11))){
var inst_11664 = (state_11693[(7)]);
var inst_11677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11678 = [cljs.core.constant$keyword$_COLON_columns];
var inst_11679 = (new cljs.core.PersistentVector(null,1,(5),inst_11677,inst_11678,null));
var inst_11680 = (function (){var args = inst_11664;
return ((function (args,inst_11664,inst_11677,inst_11678,inst_11679,state_val_11694,c__7883__auto__){
return (function (p1__11660_SHARP_){
return paperboard.services.column.move_col(p1__11660_SHARP_,cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(args),cljs.core.constant$keyword$_COLON_dir.cljs$core$IFn$_invoke$arity$1(args));
});
;})(args,inst_11664,inst_11677,inst_11678,inst_11679,state_val_11694,c__7883__auto__))
})();
var inst_11681 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,inst_11679,inst_11680);
var state_11693__$1 = state_11693;
var statearr_11704_11725 = state_11693__$1;
(statearr_11704_11725[(2)] = inst_11681);

(statearr_11704_11725[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11694 === (9))){
var inst_11664 = (state_11693[(7)]);
var inst_11665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11666 = [cljs.core.constant$keyword$_COLON_columns];
var inst_11667 = (new cljs.core.PersistentVector(null,1,(5),inst_11665,inst_11666,null));
var inst_11668 = (function (){var args = inst_11664;
return ((function (args,inst_11664,inst_11665,inst_11666,inst_11667,state_val_11694,c__7883__auto__){
return (function (p1__11658_SHARP_){
return paperboard.services.column.add_col(p1__11658_SHARP_,args);
});
;})(args,inst_11664,inst_11665,inst_11666,inst_11667,state_val_11694,c__7883__auto__))
})();
var inst_11669 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,inst_11667,inst_11668);
var state_11693__$1 = state_11693;
var statearr_11705_11726 = state_11693__$1;
(statearr_11705_11726[(2)] = inst_11669);

(statearr_11705_11726[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11694 === (5))){
var state_11693__$1 = state_11693;
var statearr_11706_11727 = state_11693__$1;
(statearr_11706_11727[(2)] = null);

(statearr_11706_11727[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11694 === (10))){
var inst_11664 = (state_11693[(7)]);
var inst_11671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11672 = [cljs.core.constant$keyword$_COLON_columns];
var inst_11673 = (new cljs.core.PersistentVector(null,1,(5),inst_11671,inst_11672,null));
var inst_11674 = (function (){var args = inst_11664;
return ((function (args,inst_11664,inst_11671,inst_11672,inst_11673,state_val_11694,c__7883__auto__){
return (function (p1__11659_SHARP_){
return paperboard.services.column.remove_col(p1__11659_SHARP_,cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(args));
});
;})(args,inst_11664,inst_11671,inst_11672,inst_11673,state_val_11694,c__7883__auto__))
})();
var inst_11675 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,inst_11673,inst_11674);
var state_11693__$1 = state_11693;
var statearr_11707_11728 = state_11693__$1;
(statearr_11707_11728[(2)] = inst_11675);

(statearr_11707_11728[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11694 === (8))){
var inst_11685 = (state_11693[(2)]);
var state_11693__$1 = (function (){var statearr_11708 = state_11693;
(statearr_11708[(8)] = inst_11685);

return statearr_11708;
})();
var statearr_11709_11729 = state_11693__$1;
(statearr_11709_11729[(2)] = null);

(statearr_11709_11729[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
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
});})(c__7883__auto__))
;
return ((function (switch__7803__auto__,c__7883__auto__){
return (function() {
var paperboard$components$app$state_machine__7804__auto__ = null;
var paperboard$components$app$state_machine__7804__auto____0 = (function (){
var statearr_11713 = [null,null,null,null,null,null,null,null,null];
(statearr_11713[(0)] = paperboard$components$app$state_machine__7804__auto__);

(statearr_11713[(1)] = (1));

return statearr_11713;
});
var paperboard$components$app$state_machine__7804__auto____1 = (function (state_11693){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_11693);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e11714){if((e11714 instanceof Object)){
var ex__7807__auto__ = e11714;
var statearr_11715_11730 = state_11693;
(statearr_11715_11730[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11693);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11731 = state_11693;
state_11693 = G__11731;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$components$app$state_machine__7804__auto__ = function(state_11693){
switch(arguments.length){
case 0:
return paperboard$components$app$state_machine__7804__auto____0.call(this);
case 1:
return paperboard$components$app$state_machine__7804__auto____1.call(this,state_11693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$components$app$state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$components$app$state_machine__7804__auto____0;
paperboard$components$app$state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$components$app$state_machine__7804__auto____1;
return paperboard$components$app$state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__))
})();
var state__7885__auto__ = (function (){var statearr_11716 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_11716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_11716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__))
);

return c__7883__auto__;
}));
paperboard.components.app.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$_COLON_req,(function (_,ch,cursor){
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__){
return (function (state_11754){
var state_val_11755 = (state_11754[(1)]);
if((state_val_11755 === (8))){
var inst_11736 = (state_11754[(7)]);
var inst_11741 = (state_11754[(2)]);
var inst_11742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11743 = [cljs.core.constant$keyword$_COLON_columns];
var inst_11744 = (new cljs.core.PersistentVector(null,1,(5),inst_11742,inst_11743,null));
var inst_11745 = paperboard.services.column.update_col_news(inst_11736,inst_11741);
var inst_11746 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,inst_11744,inst_11745);
var state_11754__$1 = (function (){var statearr_11756 = state_11754;
(statearr_11756[(8)] = inst_11746);

return statearr_11756;
})();
var statearr_11757_11771 = state_11754__$1;
(statearr_11757_11771[(2)] = null);

(statearr_11757_11771[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11755 === (7))){
var inst_11735 = (state_11754[(2)]);
var inst_11736 = cljs.core.constant$keyword$_COLON_id.cljs$core$IFn$_invoke$arity$1(inst_11735);
var inst_11737 = cljs.core.constant$keyword$_COLON_url.cljs$core$IFn$_invoke$arity$1(inst_11735);
var inst_11738 = cljs.core.constant$keyword$_COLON_type.cljs$core$IFn$_invoke$arity$1(inst_11735);
var inst_11739 = paperboard.services.news.get_news.cljs$core$IFn$_invoke$arity$2(inst_11738,inst_11737);
var state_11754__$1 = (function (){var statearr_11758 = state_11754;
(statearr_11758[(7)] = inst_11736);

return statearr_11758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11754__$1,(8),inst_11739);
} else {
if((state_val_11755 === (6))){
var inst_11750 = (state_11754[(2)]);
var state_11754__$1 = state_11754;
var statearr_11759_11772 = state_11754__$1;
(statearr_11759_11772[(2)] = inst_11750);

(statearr_11759_11772[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11755 === (5))){
var state_11754__$1 = state_11754;
var statearr_11760_11773 = state_11754__$1;
(statearr_11760_11773[(2)] = null);

(statearr_11760_11773[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11755 === (4))){
var state_11754__$1 = state_11754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11754__$1,(7),ch);
} else {
if((state_val_11755 === (3))){
var inst_11752 = (state_11754[(2)]);
var state_11754__$1 = state_11754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11754__$1,inst_11752);
} else {
if((state_val_11755 === (2))){
var state_11754__$1 = state_11754;
var statearr_11761_11774 = state_11754__$1;
(statearr_11761_11774[(1)] = (4));



return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11755 === (1))){
var state_11754__$1 = state_11754;
var statearr_11763_11775 = state_11754__$1;
(statearr_11763_11775[(2)] = null);

(statearr_11763_11775[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
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
});})(c__7883__auto__))
;
return ((function (switch__7803__auto__,c__7883__auto__){
return (function() {
var paperboard$components$app$state_machine__7804__auto__ = null;
var paperboard$components$app$state_machine__7804__auto____0 = (function (){
var statearr_11767 = [null,null,null,null,null,null,null,null,null];
(statearr_11767[(0)] = paperboard$components$app$state_machine__7804__auto__);

(statearr_11767[(1)] = (1));

return statearr_11767;
});
var paperboard$components$app$state_machine__7804__auto____1 = (function (state_11754){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_11754);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e11768){if((e11768 instanceof Object)){
var ex__7807__auto__ = e11768;
var statearr_11769_11776 = state_11754;
(statearr_11769_11776[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11754);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11777 = state_11754;
state_11754 = G__11777;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$components$app$state_machine__7804__auto__ = function(state_11754){
switch(arguments.length){
case 0:
return paperboard$components$app$state_machine__7804__auto____0.call(this);
case 1:
return paperboard$components$app$state_machine__7804__auto____1.call(this,state_11754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$components$app$state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$components$app$state_machine__7804__auto____0;
paperboard$components$app$state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$components$app$state_machine__7804__auto____1;
return paperboard$components$app$state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__))
})();
var state__7885__auto__ = (function (){var statearr_11770 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_11770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_11770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__))
);

return c__7883__auto__;
}));
paperboard.components.app.toggle_add_modal = (function paperboard$components$app$toggle_add_modal(cursor){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_show_add_modal], null),(function (p1__11778_SHARP_){
return cljs.core.not(p1__11778_SHARP_);
}));
});
paperboard.components.app.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$_COLON_action,(function (_,ch,cursor){
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__){
return (function (state_11795){
var state_val_11796 = (state_11795[(1)]);
if((state_val_11796 === (9))){
var inst_11783 = paperboard.components.app.toggle_add_modal(cursor);
var state_11795__$1 = state_11795;
var statearr_11797_11814 = state_11795__$1;
(statearr_11797_11814[(2)] = inst_11783);

(statearr_11797_11814[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11796 === (8))){
var inst_11787 = (state_11795[(2)]);
var state_11795__$1 = (function (){var statearr_11798 = state_11795;
(statearr_11798[(7)] = inst_11787);

return statearr_11798;
})();
var statearr_11799_11815 = state_11795__$1;
(statearr_11799_11815[(2)] = null);

(statearr_11799_11815[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11796 === (7))){
var inst_11782 = (state_11795[(2)]);
var inst_11785 = cljs.core.constant$keyword$_COLON_type.cljs$core$IFn$_invoke$arity$1(inst_11782);
var state_11795__$1 = state_11795;
var G__11800_11816 = (((inst_11785 instanceof cljs.core.Keyword))?inst_11785.fqn:null);
switch (G__11800_11816) {
case "toggle-add-modal":
var statearr_11801_11818 = state_11795__$1;
(statearr_11801_11818[(1)] = (9));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11785)].join('')));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11796 === (6))){
var inst_11791 = (state_11795[(2)]);
var state_11795__$1 = state_11795;
var statearr_11802_11819 = state_11795__$1;
(statearr_11802_11819[(2)] = inst_11791);

(statearr_11802_11819[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11796 === (5))){
var state_11795__$1 = state_11795;
var statearr_11803_11820 = state_11795__$1;
(statearr_11803_11820[(2)] = null);

(statearr_11803_11820[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11796 === (4))){
var state_11795__$1 = state_11795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11795__$1,(7),ch);
} else {
if((state_val_11796 === (3))){
var inst_11793 = (state_11795[(2)]);
var state_11795__$1 = state_11795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11795__$1,inst_11793);
} else {
if((state_val_11796 === (2))){
var state_11795__$1 = state_11795;
var statearr_11804_11821 = state_11795__$1;
(statearr_11804_11821[(1)] = (4));



return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11796 === (1))){
var state_11795__$1 = state_11795;
var statearr_11806_11822 = state_11795__$1;
(statearr_11806_11822[(2)] = null);

(statearr_11806_11822[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
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
});})(c__7883__auto__))
;
return ((function (switch__7803__auto__,c__7883__auto__){
return (function() {
var paperboard$components$app$state_machine__7804__auto__ = null;
var paperboard$components$app$state_machine__7804__auto____0 = (function (){
var statearr_11810 = [null,null,null,null,null,null,null,null];
(statearr_11810[(0)] = paperboard$components$app$state_machine__7804__auto__);

(statearr_11810[(1)] = (1));

return statearr_11810;
});
var paperboard$components$app$state_machine__7804__auto____1 = (function (state_11795){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_11795);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e11811){if((e11811 instanceof Object)){
var ex__7807__auto__ = e11811;
var statearr_11812_11823 = state_11795;
(statearr_11812_11823[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11795);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11824 = state_11795;
state_11795 = G__11824;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$components$app$state_machine__7804__auto__ = function(state_11795){
switch(arguments.length){
case 0:
return paperboard$components$app$state_machine__7804__auto____0.call(this);
case 1:
return paperboard$components$app$state_machine__7804__auto____1.call(this,state_11795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$components$app$state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$components$app$state_machine__7804__auto____0;
paperboard$components$app$state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$components$app$state_machine__7804__auto____1;
return paperboard$components$app$state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__))
})();
var state__7885__auto__ = (function (){var statearr_11813 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_11813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_11813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__))
);

return c__7883__auto__;
}));
/**
 * Returns a function to create a main app, that is the root container of the application
 */
paperboard.components.app.make_main_app = (function paperboard$components$app$make_main_app(req_ch,col_ch,action_ch){
return (function (app,owner){
if(typeof paperboard.components.app.t11841 !== 'undefined'){
} else {

/**
* @constructor
*/
paperboard.components.app.t11841 = (function (owner,app,action_ch,col_ch,req_ch,make_main_app,meta11842){
this.owner = owner;
this.app = app;
this.action_ch = action_ch;
this.col_ch = col_ch;
this.req_ch = req_ch;
this.make_main_app = make_main_app;
this.meta11842 = meta11842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
paperboard.components.app.t11841.prototype.om$core$IRender$ = true;

paperboard.components.app.t11841.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
console.log(cljs.core.clj__GT_js(self__.app));

var G__11844 = {"className": "app"};
var G__11845 = om.core.build.cljs$core$IFn$_invoke$arity$2(paperboard.components.topbar.topbar,self__.app);
var G__11846 = om.core.build.cljs$core$IFn$_invoke$arity$2(paperboard.components.desktop.desktop,self__.app);
var G__11847 = om.core.build.cljs$core$IFn$_invoke$arity$2(paperboard.components.add_column_modal.add_column_modal,self__.app);
return React.DOM.div(G__11844,G__11845,G__11846,G__11847);
});

paperboard.components.app.t11841.prototype.om$core$IWillUnmount$ = true;

paperboard.components.app.t11841.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.close_BANG_(self__.req_ch);

cljs.core.async.close_BANG_(self__.action_ch);

return cljs.core.async.close_BANG_(self__.col_ch);
});

paperboard.components.app.t11841.prototype.om$core$IWillMount$ = true;

paperboard.components.app.t11841.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__11848_11857 = cljs.core.constant$keyword$_COLON_req;
var G__11849_11858 = self__.req_ch;
var G__11850_11859 = self__.app;
(paperboard.components.app.dispatch.cljs$core$IFn$_invoke$arity$3 ? paperboard.components.app.dispatch.cljs$core$IFn$_invoke$arity$3(G__11848_11857,G__11849_11858,G__11850_11859) : paperboard.components.app.dispatch.call(null,G__11848_11857,G__11849_11858,G__11850_11859));

var G__11851_11860 = cljs.core.constant$keyword$_COLON_col;
var G__11852_11861 = self__.col_ch;
var G__11853_11862 = self__.app;
(paperboard.components.app.dispatch.cljs$core$IFn$_invoke$arity$3 ? paperboard.components.app.dispatch.cljs$core$IFn$_invoke$arity$3(G__11851_11860,G__11852_11861,G__11853_11862) : paperboard.components.app.dispatch.call(null,G__11851_11860,G__11852_11861,G__11853_11862));

var G__11854 = cljs.core.constant$keyword$_COLON_action;
var G__11855 = self__.action_ch;
var G__11856 = self__.app;
return (paperboard.components.app.dispatch.cljs$core$IFn$_invoke$arity$3 ? paperboard.components.app.dispatch.cljs$core$IFn$_invoke$arity$3(G__11854,G__11855,G__11856) : paperboard.components.app.dispatch.call(null,G__11854,G__11855,G__11856));
});

paperboard.components.app.t11841.prototype.om$core$IDidUpdate$ = true;

paperboard.components.app.t11841.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return paperboard.services.storage.store("columns",cljs.core.constant$keyword$_COLON_columns.cljs$core$IFn$_invoke$arity$1(self__.app));
});

paperboard.components.app.t11841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11843){
var self__ = this;
var _11843__$1 = this;
return self__.meta11842;
});

paperboard.components.app.t11841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11843,meta11842__$1){
var self__ = this;
var _11843__$1 = this;
return (new paperboard.components.app.t11841(self__.owner,self__.app,self__.action_ch,self__.col_ch,self__.req_ch,self__.make_main_app,meta11842__$1));
});

paperboard.components.app.t11841.cljs$lang$type = true;

paperboard.components.app.t11841.cljs$lang$ctorStr = "paperboard.components.app/t11841";

paperboard.components.app.t11841.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"paperboard.components.app/t11841");
});

paperboard.components.app.__GT_t11841 = (function paperboard$components$app$make_main_app_$___GT_t11841(owner__$1,app__$1,action_ch__$1,col_ch__$1,req_ch__$1,make_main_app__$1,meta11842){
return (new paperboard.components.app.t11841(owner__$1,app__$1,action_ch__$1,col_ch__$1,req_ch__$1,make_main_app__$1,meta11842));
});

}

return (new paperboard.components.app.t11841(owner,app,action_ch,col_ch,req_ch,paperboard$components$app$make_main_app,cljs.core.PersistentArrayMap.EMPTY));
});
});
