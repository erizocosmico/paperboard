// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$_COLON_finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t22147 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t22147 = (function (f,fn_handler,meta22148){
this.f = f;
this.fn_handler = fn_handler;
this.meta22148 = meta22148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t22147.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t22147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t22147.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t22147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t22147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22149){
var self__ = this;
var _22149__$1 = this;
return self__.meta22148;
});

cljs.core.async.impl.ioc_helpers.t22147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22149,meta22148__$1){
var self__ = this;
var _22149__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t22147(self__.f,self__.fn_handler,meta22148__$1));
});

cljs.core.async.impl.ioc_helpers.t22147.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t22147.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t22147";

cljs.core.async.impl.ioc_helpers.t22147.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async.impl.ioc-helpers/t22147");
});

cljs.core.async.impl.ioc_helpers.__GT_t22147 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t22147(f__$1,fn_handler__$1,meta22148){
return (new cljs.core.async.impl.ioc_helpers.t22147(f__$1,fn_handler__$1,meta22148));
});

}

return (new cljs.core.async.impl.ioc_helpers.t22147(f,cljs$core$async$impl$ioc_helpers$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e22151){if((e22151 instanceof Object)){
var ex = e22151;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e22151;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_22155_22158 = state;
(statearr_22155_22158[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_22155_22158[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_22156_22159 = state;
(statearr_22156_22159[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__22157 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22157) : cljs.core.deref.call(null,G__22157));
})());

(statearr_22156_22159[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_22163_22166 = state;
(statearr_22163_22166[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_22163_22166[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_22164_22167 = state;
(statearr_22164_22167[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__22165 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22165) : cljs.core.deref.call(null,G__22165));
})());

(statearr_22164_22167[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4679__auto__,k__4680__auto__){
var self__ = this;
var this__4679__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4679__auto____$1,k__4680__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4681__auto__,k22169,else__4682__auto__){
var self__ = this;
var this__4681__auto____$1 = this;
var G__22171 = (((k22169 instanceof cljs.core.Keyword))?k22169.fqn:null);
switch (G__22171) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22169,else__4682__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4693__auto__,writer__4694__auto__,opts__4695__auto__){
var self__ = this;
var this__4693__auto____$1 = this;
var pr_pair__4696__auto__ = ((function (this__4693__auto____$1){
return (function (keyval__4697__auto__){
return cljs.core.pr_sequential_writer(writer__4694__auto__,cljs.core.pr_writer,""," ","",opts__4695__auto__,keyval__4697__auto__);
});})(this__4693__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4694__auto__,pr_pair__4696__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4695__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_finally_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_continue_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4677__auto__){
var self__ = this;
var this__4677__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4673__auto__){
var self__ = this;
var this__4673__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4683__auto__){
var self__ = this;
var this__4683__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4674__auto__){
var self__ = this;
var this__4674__auto____$1 = this;
var h__4497__auto__ = self__.__hash;
if(!((h__4497__auto__ == null))){
return h__4497__auto__;
} else {
var h__4497__auto____$1 = cljs.core.hash_imap(this__4674__auto____$1);
self__.__hash = h__4497__auto____$1;

return h__4497__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4675__auto__,other__4676__auto__){
var self__ = this;
var this__4675__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4064__auto__ = other__4676__auto__;
if(cljs.core.truth_(and__4064__auto__)){
return ((this__4675__auto____$1.constructor === other__4676__auto__.constructor)) && (cljs.core.equiv_map(this__4675__auto____$1,other__4676__auto__));
} else {
return and__4064__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4688__auto__,k__4689__auto__){
var self__ = this;
var this__4688__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$_COLON_finally_block,null,cljs.core.constant$keyword$_COLON_catch_block,null,cljs.core.constant$keyword$_COLON_catch_exception,null,cljs.core.constant$keyword$_COLON_prev,null,cljs.core.constant$keyword$_COLON_continue_block,null], null), null),k__4689__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4688__auto____$1),self__.__meta),k__4689__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4689__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4686__auto__,k__4687__auto__,G__22168){
var self__ = this;
var this__4686__auto____$1 = this;
var pred__22172 = cljs.core.keyword_identical_QMARK_;
var expr__22173 = k__4687__auto__;
if(cljs.core.truth_((function (){var G__22175 = cljs.core.constant$keyword$_COLON_catch_block;
var G__22176 = expr__22173;
return (pred__22172.cljs$core$IFn$_invoke$arity$2 ? pred__22172.cljs$core$IFn$_invoke$arity$2(G__22175,G__22176) : pred__22172.call(null,G__22175,G__22176));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__22168,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22177 = cljs.core.constant$keyword$_COLON_catch_exception;
var G__22178 = expr__22173;
return (pred__22172.cljs$core$IFn$_invoke$arity$2 ? pred__22172.cljs$core$IFn$_invoke$arity$2(G__22177,G__22178) : pred__22172.call(null,G__22177,G__22178));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__22168,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22179 = cljs.core.constant$keyword$_COLON_finally_block;
var G__22180 = expr__22173;
return (pred__22172.cljs$core$IFn$_invoke$arity$2 ? pred__22172.cljs$core$IFn$_invoke$arity$2(G__22179,G__22180) : pred__22172.call(null,G__22179,G__22180));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__22168,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22181 = cljs.core.constant$keyword$_COLON_continue_block;
var G__22182 = expr__22173;
return (pred__22172.cljs$core$IFn$_invoke$arity$2 ? pred__22172.cljs$core$IFn$_invoke$arity$2(G__22181,G__22182) : pred__22172.call(null,G__22181,G__22182));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__22168,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22183 = cljs.core.constant$keyword$_COLON_prev;
var G__22184 = expr__22173;
return (pred__22172.cljs$core$IFn$_invoke$arity$2 ? pred__22172.cljs$core$IFn$_invoke$arity$2(G__22183,G__22184) : pred__22172.call(null,G__22183,G__22184));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__22168,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4687__auto__,G__22168),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4691__auto__){
var self__ = this;
var this__4691__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_finally_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_continue_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4678__auto__,G__22168){
var self__ = this;
var this__4678__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__22168,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4684__auto__,entry__4685__auto__){
var self__ = this;
var this__4684__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4685__auto__)){
return cljs.core._assoc(this__4684__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4685__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4685__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4684__auto____$1,entry__4685__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4713__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4713__auto__,writer__4714__auto__){
return cljs.core._write(writer__4714__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__22170){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$_COLON_catch_block.cljs$core$IFn$_invoke$arity$1(G__22170),cljs.core.constant$keyword$_COLON_catch_exception.cljs$core$IFn$_invoke$arity$1(G__22170),cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(G__22170),cljs.core.constant$keyword$_COLON_continue_block.cljs$core$IFn$_invoke$arity$1(G__22170),cljs.core.constant$keyword$_COLON_prev.cljs$core$IFn$_invoke$arity$1(G__22170),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22170,cljs.core.constant$keyword$_COLON_catch_block,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_catch_exception,cljs.core.constant$keyword$_COLON_finally_block,cljs.core.constant$keyword$_COLON_continue_block,cljs.core.constant$keyword$_COLON_prev], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_22187 = state;
(statearr_22187[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_22187;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$_COLON_catch_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$_COLON_catch_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__4064__auto__ = exception;
if(cljs.core.truth_(and__4064__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__4064__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = exception;
if(cljs.core.truth_(and__4064__auto__)){
var and__4064__auto____$1 = catch_block;
if(cljs.core.truth_(and__4064__auto____$1)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON_default,catch_exception)) || ((exception instanceof catch_exception));
} else {
return and__4064__auto____$1;
}
} else {
return and__4064__auto__;
}
})())){
var statearr_22193 = state;
(statearr_22193[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_22193[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_22193[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_22193[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$_COLON_catch_block,null,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_catch_exception,null], 0)));

return statearr_22193;
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = exception;
if(cljs.core.truth_(and__4064__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__4064__auto__;
}
})())){
var statearr_22194_22198 = state;
(statearr_22194_22198[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$_COLON_prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__22199 = state;
state = G__22199;
continue;
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = exception;
if(cljs.core.truth_(and__4064__auto__)){
var and__4064__auto____$1 = cljs.core.not(catch_block);
if(and__4064__auto____$1){
return cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4064__auto____$1;
}
} else {
return and__4064__auto__;
}
})())){
var statearr_22195 = state;
(statearr_22195[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_22195[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$_COLON_finally_block,null));

return statearr_22195;
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = cljs.core.not(exception);
if(and__4064__auto__){
return cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4064__auto__;
}
})())){
var statearr_22196 = state;
(statearr_22196[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_22196[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$_COLON_finally_block,null));

return statearr_22196;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_22197 = state;
(statearr_22197[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$_COLON_continue_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_22197[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$_COLON_prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_22197;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
