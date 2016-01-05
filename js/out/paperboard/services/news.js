// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.services.news');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('paperboard.services.http');
/**
 * Returns the URL of the backend to get the RSS feed of a page
 */
paperboard.services.news.rss_url = (function paperboard$services$news$rss_url(url){
return [cljs.core.str(window.config.backend),cljs.core.str("/rss/"),cljs.core.str(window.btoa(url))].join('');
});
/**
 * Returns the given URL of a subreddit with the proper pagination
 */
paperboard.services.news.paged_reddit_url = (function paperboard$services$news$paged_reddit_url(url,after){
return [cljs.core.str(url),cljs.core.str("?limit=25&after="),cljs.core.str(after)].join('');
});
/**
 * Returns the given URL of a RSS feed with the proper pagination
 */
paperboard.services.news.paged_rss_url = (function paperboard$services$news$paged_rss_url(url,page){
return "not implemented yet";
});
/**
 * Returns the given URL with the proper pagination added to it
 */
paperboard.services.news.paged_url = (function paperboard$services$news$paged_url(col_type,url,page){
var G__12183 = (((col_type instanceof cljs.core.Keyword))?col_type.fqn:null);
switch (G__12183) {
case "rss":
return paperboard.services.news.paged_rss_url(url,page);

break;
case "reddit":
return paperboard.services.news.paged_reddit_url(url,page);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(col_type)].join('')));

}
});
/**
 * Converts the JSON result of a reddit post to the item format
 */
paperboard.services.news.reddit_post_to_item = (function paperboard$services$news$reddit_post_to_item(post){
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"data");
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$_COLON_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"id"),cljs.core.constant$keyword$_COLON_type,cljs.core.constant$keyword$_COLON_reddit,cljs.core.constant$keyword$_COLON_comments,[cljs.core.str("http://reddit.com"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"permalink"))].join(''),cljs.core.constant$keyword$_COLON_url,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"url"),cljs.core.constant$keyword$_COLON_title,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"title")], null);
});
/**
 * Converts the JSON result of an rss post to the item format
 */
paperboard.services.news.rss_post_to_item = (function paperboard$services$news$rss_post_to_item(post){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$_COLON_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"id"),cljs.core.constant$keyword$_COLON_type,cljs.core.constant$keyword$_COLON_rss,cljs.core.constant$keyword$_COLON_url,cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"url"),cljs.core.constant$keyword$_COLON_title,cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,"title")], null);
});
/**
 * Retrieves the feed with the latest news of a subreddit
 */
paperboard.services.news.get_reddit = (function paperboard$services$news$get_reddit(url){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__7883__auto___12233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___12233,ch){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___12233,ch){
return (function (state_12223){
var state_val_12224 = (state_12223[(1)]);
if((state_val_12224 === (3))){
var inst_12220 = (state_12223[(2)]);
var inst_12221 = cljs.core.async.close_BANG_(ch);
var state_12223__$1 = (function (){var statearr_12225 = state_12223;
(statearr_12225[(7)] = inst_12220);

return statearr_12225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12223__$1,inst_12221);
} else {
if((state_val_12224 === (2))){
var inst_12211 = (state_12223[(2)]);
var inst_12212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12211,"data");
var inst_12213 = [cljs.core.constant$keyword$_COLON_next_page,cljs.core.constant$keyword$_COLON_items];
var inst_12214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12212,"after");
var inst_12215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12212,"children");
var inst_12216 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(paperboard.services.news.reddit_post_to_item,inst_12215);
var inst_12217 = [inst_12214,inst_12216];
var inst_12218 = cljs.core.PersistentHashMap.fromArrays(inst_12213,inst_12217);
var state_12223__$1 = state_12223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12223__$1,(3),ch,inst_12218);
} else {
if((state_val_12224 === (1))){
var inst_12209 = paperboard.services.http.get_json(url);
var state_12223__$1 = state_12223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12223__$1,(2),inst_12209);
} else {
return null;
}
}
}
});})(c__7883__auto___12233,ch))
;
return ((function (switch__7803__auto__,c__7883__auto___12233,ch){
return (function() {
var paperboard$services$news$get_reddit_$_state_machine__7804__auto__ = null;
var paperboard$services$news$get_reddit_$_state_machine__7804__auto____0 = (function (){
var statearr_12229 = [null,null,null,null,null,null,null,null];
(statearr_12229[(0)] = paperboard$services$news$get_reddit_$_state_machine__7804__auto__);

(statearr_12229[(1)] = (1));

return statearr_12229;
});
var paperboard$services$news$get_reddit_$_state_machine__7804__auto____1 = (function (state_12223){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_12223);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e12230){if((e12230 instanceof Object)){
var ex__7807__auto__ = e12230;
var statearr_12231_12234 = state_12223;
(statearr_12231_12234[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12223);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e12230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__12235 = state_12223;
state_12223 = G__12235;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$services$news$get_reddit_$_state_machine__7804__auto__ = function(state_12223){
switch(arguments.length){
case 0:
return paperboard$services$news$get_reddit_$_state_machine__7804__auto____0.call(this);
case 1:
return paperboard$services$news$get_reddit_$_state_machine__7804__auto____1.call(this,state_12223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$services$news$get_reddit_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$services$news$get_reddit_$_state_machine__7804__auto____0;
paperboard$services$news$get_reddit_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$services$news$get_reddit_$_state_machine__7804__auto____1;
return paperboard$services$news$get_reddit_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___12233,ch))
})();
var state__7885__auto__ = (function (){var statearr_12232 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_12232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___12233);

return statearr_12232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___12233,ch))
);


return ch;
});
/**
 * Retrieves the feed with the latest news of a RSS feed
 */
paperboard.services.news.get_rss = (function paperboard$services$news$get_rss(url){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__7883__auto___12280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___12280,ch){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___12280,ch){
return (function (state_12270){
var state_val_12271 = (state_12270[(1)]);
if((state_val_12271 === (3))){
var inst_12267 = (state_12270[(2)]);
var inst_12268 = cljs.core.async.close_BANG_(ch);
var state_12270__$1 = (function (){var statearr_12272 = state_12270;
(statearr_12272[(7)] = inst_12267);

return statearr_12272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12270__$1,inst_12268);
} else {
if((state_val_12271 === (2))){
var inst_12261 = (state_12270[(2)]);
var inst_12262 = [cljs.core.constant$keyword$_COLON_next_page,cljs.core.constant$keyword$_COLON_items];
var inst_12263 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(paperboard.services.news.rss_post_to_item,inst_12261);
var inst_12264 = [null,inst_12263];
var inst_12265 = cljs.core.PersistentHashMap.fromArrays(inst_12262,inst_12264);
var state_12270__$1 = state_12270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12270__$1,(3),ch,inst_12265);
} else {
if((state_val_12271 === (1))){
var inst_12258 = paperboard.services.news.rss_url(url);
var inst_12259 = paperboard.services.http.get_json(inst_12258);
var state_12270__$1 = state_12270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12270__$1,(2),inst_12259);
} else {
return null;
}
}
}
});})(c__7883__auto___12280,ch))
;
return ((function (switch__7803__auto__,c__7883__auto___12280,ch){
return (function() {
var paperboard$services$news$get_rss_$_state_machine__7804__auto__ = null;
var paperboard$services$news$get_rss_$_state_machine__7804__auto____0 = (function (){
var statearr_12276 = [null,null,null,null,null,null,null,null];
(statearr_12276[(0)] = paperboard$services$news$get_rss_$_state_machine__7804__auto__);

(statearr_12276[(1)] = (1));

return statearr_12276;
});
var paperboard$services$news$get_rss_$_state_machine__7804__auto____1 = (function (state_12270){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_12270);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e12277){if((e12277 instanceof Object)){
var ex__7807__auto__ = e12277;
var statearr_12278_12281 = state_12270;
(statearr_12278_12281[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12270);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e12277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__12282 = state_12270;
state_12270 = G__12282;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
paperboard$services$news$get_rss_$_state_machine__7804__auto__ = function(state_12270){
switch(arguments.length){
case 0:
return paperboard$services$news$get_rss_$_state_machine__7804__auto____0.call(this);
case 1:
return paperboard$services$news$get_rss_$_state_machine__7804__auto____1.call(this,state_12270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$services$news$get_rss_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = paperboard$services$news$get_rss_$_state_machine__7804__auto____0;
paperboard$services$news$get_rss_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = paperboard$services$news$get_rss_$_state_machine__7804__auto____1;
return paperboard$services$news$get_rss_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___12280,ch))
})();
var state__7885__auto__ = (function (){var statearr_12279 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_12279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___12280);

return statearr_12279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___12280,ch))
);


return ch;
});
/**
 * Retrieves the items for the news column in a JSON format
 */
paperboard.services.news.get_news = (function() {
var paperboard$services$news$get_news = null;
var paperboard$services$news$get_news__2 = (function (col_type,url){
var G__12286 = (((col_type instanceof cljs.core.Keyword))?col_type.fqn:null);
switch (G__12286) {
case "rss":
return paperboard.services.news.get_rss(url);

break;
case "reddit":
return paperboard.services.news.get_reddit(url);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(col_type)].join('')));

}
});
var paperboard$services$news$get_news__3 = (function (col_type,url,page){
var req_url = paperboard.services.news.paged_url(col_type,url,page);
return paperboard$services$news$get_news.cljs$core$IFn$_invoke$arity$2(col_type,url);
});
paperboard$services$news$get_news = function(col_type,url,page){
switch(arguments.length){
case 2:
return paperboard$services$news$get_news__2.call(this,col_type,url);
case 3:
return paperboard$services$news$get_news__3.call(this,col_type,url,page);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paperboard$services$news$get_news.cljs$core$IFn$_invoke$arity$2 = paperboard$services$news$get_news__2;
paperboard$services$news$get_news.cljs$core$IFn$_invoke$arity$3 = paperboard$services$news$get_news__3;
return paperboard$services$news$get_news;
})()
;
