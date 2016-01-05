// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.components.add_column_modal');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('paperboard.components.forms');
goog.require('paperboard.components.modal');
goog.require('om.core');
/**
 * Processes the 'URL', which does not always have to be an URL, it can be a
 * subreddit in the case of reddit columns
 */
paperboard.components.add_column_modal.process_url = (function paperboard$components$add_column_modal$process_url(kind,url){
var G__10957 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__10957) {
case "reddit":
return [cljs.core.str("https://www.reddit.com/r/"),cljs.core.str(url),cljs.core.str(".json")].join('');

break;
default:
return url;

}
});
/**
 * Sends a request to add a new column through the column channel
 */
paperboard.components.add_column_modal.add_column = (function paperboard$components$add_column_modal$add_column(owner,title,url,kind){
var ch = cljs.core.constant$keyword$_COLON_col_ch.cljs$core$IFn$_invoke$arity$1(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner));
var col_url = paperboard.components.add_column_modal.process_url(kind,url);
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__,ch,col_url){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__,ch,col_url){
return (function (state_10980){
var state_val_10981 = (state_10980[(1)]);
if((state_val_10981 === (2))){
var inst_10978 = (state_10980[(2)]);
var state_10980__$1 = state_10980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10980__$1,inst_10978);
} else {
if((state_val_10981 === (1))){
var inst_10974 = [cljs.core.constant$keyword$_COLON_type,cljs.core.constant$keyword$_COLON_kind,cljs.core.constant$keyword$_COLON_url,cljs.core.constant$keyword$_COLON_title];
var inst_10975 = [cljs.core.constant$keyword$_COLON_add,kind,col_url,title];
var inst_10976 = cljs.core.PersistentHashMap.fromArrays(inst_10974,inst_10975);
var state_10980__$1 = state_10980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10980__$1,(2),ch,inst_10976);
} else {
return null;
}
}
});})(c__7883__auto__,ch,col_url))
;
return ((function (switch__7803__auto__,c__7883__auto__,ch,col_url){
return (function() {
var paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto__ = null;
var paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto____0 = (function (){
var statearr_10985 = [null,null,null,null,null,null,null];
(statearr_10985[(0)] = paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto__);

(statearr_10985[(1)] = (1));

return statearr_10985;
});
var paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto____1 = (function (state_10980){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_10980);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e10986){if((e10986 instanceof Object)){
var ex__7807__auto__ = e10986;
var statearr_10987_10989 = state_10980;
(statearr_10987_10989[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10980);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e10986;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__10990 = state_10980;
state_10980 = G__10990;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto__ = function(state_10980){
switch(arguments.length){
case 0:
return paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto____0.call(this);
case 1:
return paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto____1.call(this,state_10980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto____0;
paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto____1;
return paperboard$components$add_column_modal$add_column_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__,ch,col_url))
})();
var state__7885__auto__ = (function (){var statearr_10988 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_10988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_10988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__,ch,col_url))
);

return c__7883__auto__;
});
/**
 * Toggles the add column modal
 */
paperboard.components.add_column_modal.toggle_add_modal = (function paperboard$components$add_column_modal$toggle_add_modal(owner){
var ch = cljs.core.constant$keyword$_COLON_action_ch.cljs$core$IFn$_invoke$arity$1(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner));
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__,ch){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__,ch){
return (function (state_11012){
var state_val_11013 = (state_11012[(1)]);
if((state_val_11013 === (2))){
var inst_11010 = (state_11012[(2)]);
var state_11012__$1 = state_11012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11012__$1,inst_11010);
} else {
if((state_val_11013 === (1))){
var inst_11006 = [cljs.core.constant$keyword$_COLON_type];
var inst_11007 = [cljs.core.constant$keyword$_COLON_toggle_add_modal];
var inst_11008 = cljs.core.PersistentHashMap.fromArrays(inst_11006,inst_11007);
var state_11012__$1 = state_11012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11012__$1,(2),ch,inst_11008);
} else {
return null;
}
}
});})(c__7883__auto__,ch))
;
return ((function (switch__7803__auto__,c__7883__auto__,ch){
return (function() {
var paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto__ = null;
var paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto____0 = (function (){
var statearr_11017 = [null,null,null,null,null,null,null];
(statearr_11017[(0)] = paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto__);

(statearr_11017[(1)] = (1));

return statearr_11017;
});
var paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto____1 = (function (state_11012){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_11012);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e11018){if((e11018 instanceof Object)){
var ex__7807__auto__ = e11018;
var statearr_11019_11021 = state_11012;
(statearr_11019_11021[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11012);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11018;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11022 = state_11012;
state_11012 = G__11022;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto__ = function(state_11012){
switch(arguments.length){
case 0:
return paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto____0.call(this);
case 1:
return paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto____1.call(this,state_11012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto____0;
paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto____1;
return paperboard$components$add_column_modal$toggle_add_modal_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__,ch))
})();
var state__7885__auto__ = (function (){var statearr_11020 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_11020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_11020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__,ch))
);

return c__7883__auto__;
});
/**
 * Empties the form
 */
paperboard.components.add_column_modal.reset_form = (function paperboard$components$add_column_modal$reset_form(owner){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_title,"",cljs.core.constant$keyword$_COLON_url,"",cljs.core.constant$keyword$_COLON_col_type,"rss"], null));
});
/**
 * Returns the correct label for the URL input depending on the selected column type
 */
paperboard.components.add_column_modal.label_for_type = (function paperboard$components$add_column_modal$label_for_type(col_type){
var G__11024 = (((cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(col_type) instanceof cljs.core.Keyword))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(col_type).fqn:null);
switch (G__11024) {
case "rss":
return "RSS Feed URL";

break;
case "reddit":
return "Subreddit name";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(col_type))].join('')));

}
});
/**
 * Modal to add a new column to the desktop
 */
paperboard.components.add_column_modal.add_column_modal = (function paperboard$components$add_column_modal$add_column_modal(data,owner){
if(typeof paperboard.components.add_column_modal.t11065 !== 'undefined'){
} else {

/**
* @constructor
*/
paperboard.components.add_column_modal.t11065 = (function (owner,data,add_column_modal,meta11066){
this.owner = owner;
this.data = data;
this.add_column_modal = add_column_modal;
this.meta11066 = meta11066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
paperboard.components.add_column_modal.t11065.prototype.om$core$IRenderState$ = true;

paperboard.components.add_column_modal.t11065.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11068){
var self__ = this;
var map__11069 = p__11068;
var map__11069__$1 = ((cljs.core.seq_QMARK_(map__11069))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11069):map__11069);
var col_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11069__$1,cljs.core.constant$keyword$_COLON_col_type);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11069__$1,cljs.core.constant$keyword$_COLON_url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11069__$1,cljs.core.constant$keyword$_COLON_title);
var ___$1 = this;
return paperboard.components.modal.modal(cljs.core.constant$keyword$_COLON_show_add_modal.cljs$core$IFn$_invoke$arity$1(self__.data),(function (){var G__11070 = {"onSubmit": ((function (___$1,map__11069,map__11069__$1,col_type,url,title){
return (function (p1__11026_SHARP_){
return p1__11026_SHARP_.preventDefault();
});})(___$1,map__11069,map__11069__$1,col_type,url,title))
, "className": "add-col-form"};
var G__11071 = (function (){var G__11076 = null;
var G__11077 = "Add column";
return React.DOM.h2(G__11076,G__11077);
})();
var G__11072 = (function (){var G__11078 = {"className": "form-field"};
var G__11079 = (function (){var G__11080 = {"onChange": ((function (G__11078,G__11070,G__11071,___$1,map__11069,map__11069__$1,col_type,url,title){
return (function (p1__11027_SHARP_){
return paperboard.components.forms.handle_change(p1__11027_SHARP_,cljs.core.constant$keyword$_COLON_title,self__.owner);
});})(G__11078,G__11070,G__11071,___$1,map__11069,map__11069__$1,col_type,url,title))
, "placeholder": "Column title", "name": "title", "value": om.core.value(title), "type": "text"};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__11080) : om.dom.input.call(null,G__11080));
})();
return React.DOM.div(G__11078,G__11079);
})();
var G__11073 = (function (){var G__11081 = {"className": "form-field select-field"};
var G__11082 = (function (){var G__11083 = {"value": om.core.value(col_type), "onChange": ((function (G__11081,G__11070,G__11071,G__11072,___$1,map__11069,map__11069__$1,col_type,url,title){
return (function (p1__11028_SHARP_){
return paperboard.components.forms.handle_change(p1__11028_SHARP_,cljs.core.constant$keyword$_COLON_col_type,self__.owner);
});})(G__11081,G__11070,G__11071,G__11072,___$1,map__11069,map__11069__$1,col_type,url,title))
};
var G__11084 = (function (){var G__11086 = {"value": "rss"};
var G__11087 = "RSS Feed";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__11086,G__11087) : om.dom.option.call(null,G__11086,G__11087));
})();
var G__11085 = (function (){var G__11088 = {"value": "reddit"};
var G__11089 = "Subreddit feed";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__11088,G__11089) : om.dom.option.call(null,G__11088,G__11089));
})();
return React.DOM.select(G__11083,G__11084,G__11085);
})();
return React.DOM.div(G__11081,G__11082);
})();
var G__11074 = (function (){var G__11090 = {"className": "form-field"};
var G__11091 = (function (){var G__11092 = {"onChange": ((function (G__11090,G__11070,G__11071,G__11072,G__11073,___$1,map__11069,map__11069__$1,col_type,url,title){
return (function (p1__11029_SHARP_){
return paperboard.components.forms.handle_change(p1__11029_SHARP_,cljs.core.constant$keyword$_COLON_url,self__.owner);
});})(G__11090,G__11070,G__11071,G__11072,G__11073,___$1,map__11069,map__11069__$1,col_type,url,title))
, "placeholder": paperboard.components.add_column_modal.label_for_type(col_type), "name": "url", "value": om.core.value(url), "type": "text"};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__11092) : om.dom.input.call(null,G__11092));
})();
return React.DOM.div(G__11090,G__11091);
})();
var G__11075 = (function (){var G__11093 = {"className": "form-buttons"};
var G__11094 = (function (){var G__11096 = {"onClick": ((function (G__11093,G__11070,G__11071,G__11072,G__11073,G__11074,___$1,map__11069,map__11069__$1,col_type,url,title){
return (function (___$2){
paperboard.components.add_column_modal.toggle_add_modal(self__.owner);

return paperboard.components.add_column_modal.reset_form(self__.owner);
});})(G__11093,G__11070,G__11071,G__11072,G__11073,G__11074,___$1,map__11069,map__11069__$1,col_type,url,title))
, "className": "btn btn--link"};
var G__11097 = "Cancel";
return React.DOM.button(G__11096,G__11097);
})();
var G__11095 = (function (){var G__11098 = {"onClick": ((function (G__11093,G__11094,G__11070,G__11071,G__11072,G__11073,G__11074,___$1,map__11069,map__11069__$1,col_type,url,title){
return (function (___$2){
paperboard.components.add_column_modal.add_column(self__.owner,title,url,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(col_type));

paperboard.components.add_column_modal.toggle_add_modal(self__.owner);

return paperboard.components.add_column_modal.reset_form(self__.owner);
});})(G__11093,G__11094,G__11070,G__11071,G__11072,G__11073,G__11074,___$1,map__11069,map__11069__$1,col_type,url,title))
, "className": "btn btn--primary"};
var G__11099 = "Add column";
return React.DOM.button(G__11098,G__11099);
})();
return React.DOM.div(G__11093,G__11094,G__11095);
})();
return React.DOM.form(G__11070,G__11071,G__11072,G__11073,G__11074,G__11075);
})());
});

paperboard.components.add_column_modal.t11065.prototype.om$core$IInitState$ = true;

paperboard.components.add_column_modal.t11065.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_title,"",cljs.core.constant$keyword$_COLON_url,"",cljs.core.constant$keyword$_COLON_col_type,"rss"], null);
});

paperboard.components.add_column_modal.t11065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11067){
var self__ = this;
var _11067__$1 = this;
return self__.meta11066;
});

paperboard.components.add_column_modal.t11065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11067,meta11066__$1){
var self__ = this;
var _11067__$1 = this;
return (new paperboard.components.add_column_modal.t11065(self__.owner,self__.data,self__.add_column_modal,meta11066__$1));
});

paperboard.components.add_column_modal.t11065.cljs$lang$type = true;

paperboard.components.add_column_modal.t11065.cljs$lang$ctorStr = "paperboard.components.add-column-modal/t11065";

paperboard.components.add_column_modal.t11065.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"paperboard.components.add-column-modal/t11065");
});

paperboard.components.add_column_modal.__GT_t11065 = (function paperboard$components$add_column_modal$add_column_modal_$___GT_t11065(owner__$1,data__$1,add_column_modal__$1,meta11066){
return (new paperboard.components.add_column_modal.t11065(owner__$1,data__$1,add_column_modal__$1,meta11066));
});

}

return (new paperboard.components.add_column_modal.t11065(owner,data,paperboard$components$add_column_modal$add_column_modal,cljs.core.PersistentArrayMap.EMPTY));
});
