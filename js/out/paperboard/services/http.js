// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.services.http');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
paperboard.services.http.GET = (function paperboard$services$http$GET(url){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__12119_12135 = url;
var G__12120_12136 = ((function (G__12119_12135,ch){
return (function (event){
var res = event.target.getResponseText();
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__,res,G__12119_12135,ch){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__,res,G__12119_12135,ch){
return (function (state_12125){
var state_val_12126 = (state_12125[(1)]);
if((state_val_12126 === (2))){
var inst_12122 = (state_12125[(2)]);
var inst_12123 = cljs.core.async.close_BANG_(ch);
var state_12125__$1 = (function (){var statearr_12127 = state_12125;
(statearr_12127[(7)] = inst_12122);

return statearr_12127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12125__$1,inst_12123);
} else {
if((state_val_12126 === (1))){
var state_12125__$1 = state_12125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12125__$1,(2),ch,res);
} else {
return null;
}
}
});})(c__7883__auto__,res,G__12119_12135,ch))
;
return ((function (switch__7803__auto__,c__7883__auto__,res,G__12119_12135,ch){
return (function() {
var paperboard$services$http$GET_$_state_machine__7804__auto__ = null;
var paperboard$services$http$GET_$_state_machine__7804__auto____0 = (function (){
var statearr_12131 = [null,null,null,null,null,null,null,null];
(statearr_12131[(0)] = paperboard$services$http$GET_$_state_machine__7804__auto__);

(statearr_12131[(1)] = (1));

return statearr_12131;
});
var paperboard$services$http$GET_$_state_machine__7804__auto____1 = (function (state_12125){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_12125);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e12132){if((e12132 instanceof Object)){
var ex__7807__auto__ = e12132;
var statearr_12133_12137 = state_12125;
(statearr_12133_12137[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12125);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e12132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__12138 = state_12125;
state_12125 = G__12138;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$services$http$GET_$_state_machine__7804__auto__ = function(state_12125){
switch(arguments.length){
case 0:
return paperboard$services$http$GET_$_state_machine__7804__auto____0.call(this);
case 1:
return paperboard$services$http$GET_$_state_machine__7804__auto____1.call(this,state_12125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$services$http$GET_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$services$http$GET_$_state_machine__7804__auto____0;
paperboard$services$http$GET_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$services$http$GET_$_state_machine__7804__auto____1;
return paperboard$services$http$GET_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__,res,G__12119_12135,ch))
})();
var state__7885__auto__ = (function (){var statearr_12134 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_12134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_12134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__,res,G__12119_12135,ch))
);

return c__7883__auto__;
});})(G__12119_12135,ch))
;
goog.net.XhrIo.send(G__12119_12135,G__12120_12136);

return ch;
});
paperboard.services.http.get_json = (function paperboard$services$http$get_json(url){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__7883__auto___12177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___12177,ch){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___12177,ch){
return (function (state_12167){
var state_val_12168 = (state_12167[(1)]);
if((state_val_12168 === (3))){
var inst_12164 = (state_12167[(2)]);
var inst_12165 = cljs.core.async.close_BANG_(ch);
var state_12167__$1 = (function (){var statearr_12169 = state_12167;
(statearr_12169[(7)] = inst_12164);

return statearr_12169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12167__$1,inst_12165);
} else {
if((state_val_12168 === (2))){
var inst_12160 = (state_12167[(2)]);
var inst_12161 = JSON.parse(inst_12160);
var inst_12162 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_12161);
var state_12167__$1 = state_12167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12167__$1,(3),ch,inst_12162);
} else {
if((state_val_12168 === (1))){
var inst_12158 = paperboard.services.http.GET(url);
var state_12167__$1 = state_12167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12167__$1,(2),inst_12158);
} else {
return null;
}
}
}
});})(c__7883__auto___12177,ch))
;
return ((function (switch__7803__auto__,c__7883__auto___12177,ch){
return (function() {
var paperboard$services$http$get_json_$_state_machine__7804__auto__ = null;
var paperboard$services$http$get_json_$_state_machine__7804__auto____0 = (function (){
var statearr_12173 = [null,null,null,null,null,null,null,null];
(statearr_12173[(0)] = paperboard$services$http$get_json_$_state_machine__7804__auto__);

(statearr_12173[(1)] = (1));

return statearr_12173;
});
var paperboard$services$http$get_json_$_state_machine__7804__auto____1 = (function (state_12167){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_12167);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e12174){if((e12174 instanceof Object)){
var ex__7807__auto__ = e12174;
var statearr_12175_12178 = state_12167;
(statearr_12175_12178[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12167);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e12174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__12179 = state_12167;
state_12167 = G__12179;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$services$http$get_json_$_state_machine__7804__auto__ = function(state_12167){
switch(arguments.length){
case 0:
return paperboard$services$http$get_json_$_state_machine__7804__auto____0.call(this);
case 1:
return paperboard$services$http$get_json_$_state_machine__7804__auto____1.call(this,state_12167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$services$http$get_json_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$services$http$get_json_$_state_machine__7804__auto____0;
paperboard$services$http$get_json_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$services$http$get_json_$_state_machine__7804__auto____1;
return paperboard$services$http$get_json_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___12177,ch))
})();
var state__7885__auto__ = (function (){var statearr_12176 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_12176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___12177);

return statearr_12176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___12177,ch))
);


return ch;
});
