// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t22280 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.channels.t22280 = (function (val,box,meta22281){
this.val = val;
this.box = box;
this.meta22281 = meta22281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t22280.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t22280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22282){
var self__ = this;
var _22282__$1 = this;
return self__.meta22281;
});

cljs.core.async.impl.channels.t22280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22282,meta22281__$1){
var self__ = this;
var _22282__$1 = this;
return (new cljs.core.async.impl.channels.t22280(self__.val,self__.box,meta22281__$1));
});

cljs.core.async.impl.channels.t22280.cljs$lang$type = true;

cljs.core.async.impl.channels.t22280.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t22280";

cljs.core.async.impl.channels.t22280.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async.impl.channels/t22280");
});

cljs.core.async.impl.channels.__GT_t22280 = (function cljs$core$async$impl$channels$box_$___GT_t22280(val__$1,box__$1,meta22281){
return (new cljs.core.async.impl.channels.t22280(val__$1,box__$1,meta22281));
});

}

return (new cljs.core.async.impl.channels.t22280(val,cljs$core$async$impl$channels$box,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

cljs.core.async.impl.channels.MMC = (function (){var obj22284 = {};
return obj22284;
})();

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (cljs.core.async.impl.channels.abort[(function (){var G__22288 = x__4720__auto__;
return goog.typeOf(G__22288);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__4064__auto__ = self__.buf;
if(cljs.core.truth_(and__4064__auto__)){
return (self__.puts.length === (0));
} else {
return and__4064__auto__;
}
})())){
var G__22289_22301 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__22289_22301) : self__.add_BANG_.call(null,G__22289_22301));
} else {
}

while(true){
var taker_22302 = self__.takes.pop();
if((taker_22302 == null)){
} else {
if(taker_22302.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_22303 = taker_22302.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_22304 = (cljs.core.truth_((function (){var and__4064__auto__ = self__.buf;
if(cljs.core.truth_(and__4064__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4064__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_22303,val_22304,taker_22302,this$__$1){
return (function (){
var G__22290 = val_22304;
return (take_cb_22303.cljs$core$IFn$_invoke$arity$1 ? take_cb_22303.cljs$core$IFn$_invoke$arity$1(G__22290) : take_cb_22303.call(null,G__22290));
});})(take_cb_22303,val_22304,taker_22302,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var retval = cljs.core.async.impl.channels.box(self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null));
while(true){
if(cljs.core.truth_(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))){
} else {
var putter_22305 = self__.puts.pop();
if((putter_22305 == null)){
} else {
var put_handler_22306 = putter_22305.handler;
var val_22307 = putter_22305.val;
if(put_handler_22306.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_22308 = put_handler_22306.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb_22308,put_handler_22306,val_22307,putter_22305,_,retval,this$__$1){
return (function (){
var G__22291 = true;
return (put_cb_22308.cljs$core$IFn$_invoke$arity$1 ? put_cb_22308.cljs$core$IFn$_invoke$arity$1(G__22291) : put_cb_22308.call(null,G__22291));
});})(put_cb_22308,put_handler_22306,val_22307,putter_22305,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_((function (){var G__22292 = self__.buf;
var G__22293 = val_22307;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__22292,G__22293) : self__.add_BANG_.call(null,G__22292,G__22293));
})())){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
var G__22294 = true;
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(G__22294) : put_cb.call(null,G__22294));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
var G__22295_22309 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__22295_22309) : self__.add_BANG_.call(null,G__22295_22309));
} else {
}

if(cljs.core.truth_((function (){var and__4064__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4064__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4064__auto__;
}
})())){
var has_val = (function (){var and__4064__auto__ = self__.buf;
if(cljs.core.truth_(and__4064__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4064__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"takes","takes",298247964,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0)))].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null)))], 0)))].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = self__.buf;
if(cljs.core.truth_(and__4064__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4064__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((function (){var G__22296 = self__.buf;
var G__22297 = val;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__22296,G__22297) : self__.add_BANG_.call(null,G__22296,G__22297));
})());
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker_22310 = self__.takes.pop();
if(taker_22310.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_22311 = taker_22310.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_22312__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (take_cb_22311,val_22312__$1,taker_22310,done_QMARK_,closed__$1,this$__$1){
return (function (){
var G__22298 = val_22312__$1;
return (take_cb_22311.cljs$core$IFn$_invoke$arity$1 ? take_cb_22311.cljs$core$IFn$_invoke$arity$1(G__22298) : take_cb_22311.call(null,G__22298));
});})(take_cb_22311,val_22312__$1,taker_22310,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
var G__22299 = val;
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(G__22299) : take_cb.call(null,G__22299));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"puts","puts",-1883877054,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0)))].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_22313 = self__.puts.pop();
if((putter_22313 == null)){
} else {
var put_handler_22314 = putter_22313.handler;
var val_22315 = putter_22313.val;
if(put_handler_22314.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_22316 = put_handler_22314.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_22316,put_handler_22314,val_22315,putter_22313,this$__$1){
return (function (){
var G__22300 = true;
return (put_cb_22316.cljs$core$IFn$_invoke$arity$1 ? put_cb_22316.cljs$core$IFn$_invoke$arity$1(G__22300) : put_cb_22316.call(null,G__22300));
});})(put_cb_22316,put_handler_22314,val_22315,putter_22313,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__4076__auto__ = exh;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var cljs$core$async$impl$channels$chan = null;
var cljs$core$async$impl$channels$chan__1 = (function (buf){
return cljs$core$async$impl$channels$chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});
var cljs$core$async$impl$channels$chan__2 = (function (buf,xform){
return cljs$core$async$impl$channels$chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});
var cljs$core$async$impl$channels$chan__3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(function (){var G__22328 = cljs.core.async.impl.protocols.add_BANG_;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__22328) : xform.call(null,G__22328));
})():cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__22334 = null;
var G__22334__1 = (function (buf__$1){
try{var G__22330 = buf__$1;
return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(G__22330) : add_BANG_.call(null,G__22330));
}catch (e22329){var t = e22329;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__22334__2 = (function (buf__$1,val){
try{var G__22332 = buf__$1;
var G__22333 = val;
return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(G__22332,G__22333) : add_BANG_.call(null,G__22332,G__22333));
}catch (e22331){var t = e22331;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__22334 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__22334__1.call(this,buf__$1);
case 2:
return G__22334__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22334.cljs$core$IFn$_invoke$arity$1 = G__22334__1;
G__22334.cljs$core$IFn$_invoke$arity$2 = G__22334__2;
return G__22334;
})()
;})(add_BANG_))
})()));
});
cljs$core$async$impl$channels$chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return cljs$core$async$impl$channels$chan__1.call(this,buf);
case 2:
return cljs$core$async$impl$channels$chan__2.call(this,buf,xform);
case 3:
return cljs$core$async$impl$channels$chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$impl$channels$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$impl$channels$chan__1;
cljs$core$async$impl$channels$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$impl$channels$chan__2;
cljs$core$async$impl$channels$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$impl$channels$chan__3;
return cljs$core$async$impl$channels$chan;
})()
;
