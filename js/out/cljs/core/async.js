// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function() {
var cljs$core$async$fn_handler = null;
var cljs$core$async$fn_handler__1 = (function (f){
return cljs$core$async$fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});
var cljs$core$async$fn_handler__2 = (function (f,blockable){
if(typeof cljs.core.async.t18700 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18700 = (function (blockable,f,fn_handler,meta18701){
this.blockable = blockable;
this.f = f;
this.fn_handler = fn_handler;
this.meta18701 = meta18701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18700.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18700.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t18700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18702){
var self__ = this;
var _18702__$1 = this;
return self__.meta18701;
});

cljs.core.async.t18700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18702,meta18701__$1){
var self__ = this;
var _18702__$1 = this;
return (new cljs.core.async.t18700(self__.blockable,self__.f,self__.fn_handler,meta18701__$1));
});

cljs.core.async.t18700.cljs$lang$type = true;

cljs.core.async.t18700.cljs$lang$ctorStr = "cljs.core.async/t18700";

cljs.core.async.t18700.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t18700");
});

cljs.core.async.__GT_t18700 = (function cljs$core$async$fn_handler_$___GT_t18700(blockable__$1,f__$1,fn_handler__$1,meta18701){
return (new cljs.core.async.t18700(blockable__$1,f__$1,fn_handler__$1,meta18701));
});

}

return (new cljs.core.async.t18700(blockable,f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs$core$async$fn_handler = function(f,blockable){
switch(arguments.length){
case 1:
return cljs$core$async$fn_handler__1.call(this,f);
case 2:
return cljs$core$async$fn_handler__2.call(this,f,blockable);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$fn_handler.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$fn_handler__1;
cljs$core$async$fn_handler.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$fn_handler__2;
return cljs$core$async$fn_handler;
})()
;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__18704 = buff;
if(G__18704){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__18704.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18704.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__18704);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__18704);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1(null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Creates a promise channel with an optional transducer, and an optional
 * exception-handler. A promise channel can take exactly one value that consumers
 * will receive. Once full, puts complete but val is dropped (no transfer).
 * Consumers will block until either a value is placed in the channel or the
 * channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function() {
var cljs$core$async$promise_chan = null;
var cljs$core$async$promise_chan__0 = (function (){
return cljs$core$async$promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});
var cljs$core$async$promise_chan__1 = (function (xform){
return cljs$core$async$promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});
var cljs$core$async$promise_chan__2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});
cljs$core$async$promise_chan = function(xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$promise_chan__0.call(this);
case 1:
return cljs$core$async$promise_chan__1.call(this,xform);
case 2:
return cljs$core$async$promise_chan__2.call(this,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$promise_chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$promise_chan__0;
cljs$core$async$promise_chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$promise_chan__1;
cljs$core$async$promise_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$promise_chan__2;
return cljs$core$async$promise_chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18724 = (function (){var G__18721 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18721) : cljs.core.deref.call(null,G__18721));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__18722_18725 = val_18724;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__18722_18725) : fn1.call(null,G__18722_18725));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18724,ret){
return (function (){
var G__18723 = val_18724;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__18723) : fn1.call(null,G__18723));
});})(val_18724,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__18734 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18734) : cljs.core.deref.call(null,G__18734));
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__18735 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18735) : cljs.core.deref.call(null,G__18735));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__18736_18738 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__18736_18738) : fn1.call(null,G__18736_18738));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__18737 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__18737) : fn1.call(null,G__18737));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4963__auto___18739 = n;
var x_18740 = (0);
while(true){
if((x_18740 < n__4963__auto___18739)){
(a[x_18740] = (0));

var G__18741 = (x_18740 + (1));
x_18740 = G__18741;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__18742 = (i + (1));
i = G__18742;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__18750 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18750) : cljs.core.atom.call(null,G__18750));
})();
if(typeof cljs.core.async.t18751 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18751 = (function (flag,alt_flag,meta18752){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18752 = meta18752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18751.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18754 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18754) : cljs.core.deref.call(null,G__18754));
});})(flag))
;

cljs.core.async.t18751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t18751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18755_18757 = self__.flag;
var G__18756_18758 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18755_18757,G__18756_18758) : cljs.core.reset_BANG_.call(null,G__18755_18757,G__18756_18758));

return true;
});})(flag))
;

cljs.core.async.t18751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18753){
var self__ = this;
var _18753__$1 = this;
return self__.meta18752;
});})(flag))
;

cljs.core.async.t18751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18753,meta18752__$1){
var self__ = this;
var _18753__$1 = this;
return (new cljs.core.async.t18751(self__.flag,self__.alt_flag,meta18752__$1));
});})(flag))
;

cljs.core.async.t18751.cljs$lang$type = true;

cljs.core.async.t18751.cljs$lang$ctorStr = "cljs.core.async/t18751";

cljs.core.async.t18751.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t18751");
});})(flag))
;

cljs.core.async.__GT_t18751 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t18751(flag__$1,alt_flag__$1,meta18752){
return (new cljs.core.async.t18751(flag__$1,alt_flag__$1,meta18752));
});})(flag))
;

}

return (new cljs.core.async.t18751(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t18762 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18762 = (function (cb,flag,alt_handler,meta18763){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18763 = meta18763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18762.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t18762.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t18762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18764){
var self__ = this;
var _18764__$1 = this;
return self__.meta18763;
});

cljs.core.async.t18762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18764,meta18763__$1){
var self__ = this;
var _18764__$1 = this;
return (new cljs.core.async.t18762(self__.cb,self__.flag,self__.alt_handler,meta18763__$1));
});

cljs.core.async.t18762.cljs$lang$type = true;

cljs.core.async.t18762.cljs$lang$ctorStr = "cljs.core.async/t18762";

cljs.core.async.t18762.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t18762");
});

cljs.core.async.__GT_t18762 = (function cljs$core$async$alt_handler_$___GT_t18762(cb__$1,flag__$1,alt_handler__$1,meta18763){
return (new cljs.core.async.t18762(cb__$1,flag__$1,alt_handler__$1,meta18763));
});

}

return (new cljs.core.async.t18762(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$_COLON_priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__18772 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__18772) : port.call(null,G__18772));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__18773 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__18773) : port.call(null,G__18773));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18765_SHARP_){
var G__18774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18765_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18774) : fret.call(null,G__18774));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18766_SHARP_){
var G__18775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18766_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18775) : fret.call(null,G__18775));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18776 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18776) : cljs.core.deref.call(null,G__18776));
})(),(function (){var or__4076__auto__ = wport;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18777 = (i + (1));
i = G__18777;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4076__auto__ = ret;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$_COLON_default)){
var temp__4126__auto__ = (function (){var and__4064__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4064__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4064__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$_COLON_default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__18778){
var map__18780 = p__18778;
var map__18780__$1 = ((cljs.core.seq_QMARK_(map__18780))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18780):map__18780);
var opts = map__18780__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__18778 = null;
if (arguments.length > 1) {
var G__18781__i = 0, G__18781__a = new Array(arguments.length -  1);
while (G__18781__i < G__18781__a.length) {G__18781__a[G__18781__i] = arguments[G__18781__i + 1]; ++G__18781__i;}
  p__18778 = new cljs.core.IndexedSeq(G__18781__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__18778);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__18782){
var ports = cljs.core.first(arglist__18782);
var p__18778 = cljs.core.rest(arglist__18782);
return cljs$core$async$alts_BANG___delegate(ports,p__18778);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Puts a val into port if it's possible to do so immediately.
 * nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
var G__18784 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18784) : cljs.core.deref.call(null,G__18784));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 * Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
var G__18786 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18786) : cljs.core.deref.call(null,G__18786));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__7883__auto___18884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___18884){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___18884){
return (function (state_18860){
var state_val_18861 = (state_18860[(1)]);
if((state_val_18861 === (7))){
var inst_18856 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
var statearr_18862_18885 = state_18860__$1;
(statearr_18862_18885[(2)] = inst_18856);

(statearr_18862_18885[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18861 === (1))){
var state_18860__$1 = state_18860;
var statearr_18863_18886 = state_18860__$1;
(statearr_18863_18886[(2)] = null);

(statearr_18863_18886[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18861 === (4))){
var inst_18839 = (state_18860[(7)]);
var inst_18839__$1 = (state_18860[(2)]);
var inst_18840 = (inst_18839__$1 == null);
var state_18860__$1 = (function (){var statearr_18864 = state_18860;
(statearr_18864[(7)] = inst_18839__$1);

return statearr_18864;
})();
if(cljs.core.truth_(inst_18840)){
var statearr_18865_18887 = state_18860__$1;
(statearr_18865_18887[(1)] = (5));

} else {
var statearr_18866_18888 = state_18860__$1;
(statearr_18866_18888[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18861 === (13))){
var state_18860__$1 = state_18860;
var statearr_18867_18889 = state_18860__$1;
(statearr_18867_18889[(2)] = null);

(statearr_18867_18889[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18861 === (6))){
var inst_18839 = (state_18860[(7)]);
var state_18860__$1 = state_18860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18860__$1,(11),to,inst_18839);
} else {
if((state_val_18861 === (3))){
var inst_18858 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18860__$1,inst_18858);
} else {
if((state_val_18861 === (12))){
var state_18860__$1 = state_18860;
var statearr_18868_18890 = state_18860__$1;
(statearr_18868_18890[(2)] = null);

(statearr_18868_18890[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18861 === (2))){
var state_18860__$1 = state_18860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18860__$1,(4),from);
} else {
if((state_val_18861 === (11))){
var inst_18849 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
if(cljs.core.truth_(inst_18849)){
var statearr_18869_18891 = state_18860__$1;
(statearr_18869_18891[(1)] = (12));

} else {
var statearr_18870_18892 = state_18860__$1;
(statearr_18870_18892[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18861 === (9))){
var state_18860__$1 = state_18860;
var statearr_18871_18893 = state_18860__$1;
(statearr_18871_18893[(2)] = null);

(statearr_18871_18893[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18861 === (5))){
var state_18860__$1 = state_18860;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18872_18894 = state_18860__$1;
(statearr_18872_18894[(1)] = (8));

} else {
var statearr_18873_18895 = state_18860__$1;
(statearr_18873_18895[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18861 === (14))){
var inst_18854 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
var statearr_18874_18896 = state_18860__$1;
(statearr_18874_18896[(2)] = inst_18854);

(statearr_18874_18896[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18861 === (10))){
var inst_18846 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
var statearr_18875_18897 = state_18860__$1;
(statearr_18875_18897[(2)] = inst_18846);

(statearr_18875_18897[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18861 === (8))){
var inst_18843 = cljs.core.async.close_BANG_(to);
var state_18860__$1 = state_18860;
var statearr_18876_18898 = state_18860__$1;
(statearr_18876_18898[(2)] = inst_18843);

(statearr_18876_18898[(1)] = (10));


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
}
}
}
});})(c__7883__auto___18884))
;
return ((function (switch__7803__auto__,c__7883__auto___18884){
return (function() {
var cljs$core$async$pipe_$_state_machine__7804__auto__ = null;
var cljs$core$async$pipe_$_state_machine__7804__auto____0 = (function (){
var statearr_18880 = [null,null,null,null,null,null,null,null];
(statearr_18880[(0)] = cljs$core$async$pipe_$_state_machine__7804__auto__);

(statearr_18880[(1)] = (1));

return statearr_18880;
});
var cljs$core$async$pipe_$_state_machine__7804__auto____1 = (function (state_18860){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_18860);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e18881){if((e18881 instanceof Object)){
var ex__7807__auto__ = e18881;
var statearr_18882_18899 = state_18860;
(statearr_18882_18899[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18860);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18900 = state_18860;
state_18860 = G__18900;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__7804__auto__ = function(state_18860){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__7804__auto____1.call(this,state_18860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__7804__auto____0;
cljs$core$async$pipe_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__7804__auto____1;
return cljs$core$async$pipe_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___18884))
})();
var state__7885__auto__ = (function (){var statearr_18883 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_18883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___18884);

return statearr_18883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___18884))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__19086){
var vec__19087 = p__19086;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19087,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19087,(1),null);
var job = vec__19087;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7883__auto___19271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___19271,res,vec__19087,v,p,job,jobs,results){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___19271,res,vec__19087,v,p,job,jobs,results){
return (function (state_19092){
var state_val_19093 = (state_19092[(1)]);
if((state_val_19093 === (2))){
var inst_19089 = (state_19092[(2)]);
var inst_19090 = cljs.core.async.close_BANG_(res);
var state_19092__$1 = (function (){var statearr_19094 = state_19092;
(statearr_19094[(7)] = inst_19089);

return statearr_19094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19092__$1,inst_19090);
} else {
if((state_val_19093 === (1))){
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19092__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7883__auto___19271,res,vec__19087,v,p,job,jobs,results))
;
return ((function (switch__7803__auto__,c__7883__auto___19271,res,vec__19087,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0 = (function (){
var statearr_19098 = [null,null,null,null,null,null,null,null];
(statearr_19098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__);

(statearr_19098[(1)] = (1));

return statearr_19098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1 = (function (state_19092){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_19092);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e19099){if((e19099 instanceof Object)){
var ex__7807__auto__ = e19099;
var statearr_19100_19272 = state_19092;
(statearr_19100_19272[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19092);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19273 = state_19092;
state_19092 = G__19273;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__ = function(state_19092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1.call(this,state_19092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___19271,res,vec__19087,v,p,job,jobs,results))
})();
var state__7885__auto__ = (function (){var statearr_19101 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_19101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___19271);

return statearr_19101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___19271,res,vec__19087,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19102){
var vec__19103 = p__19102;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19103,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19103,(1),null);
var job = vec__19103;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__19104_19274 = v;
var G__19105_19275 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__19104_19274,G__19105_19275) : xf.call(null,G__19104_19274,G__19105_19275));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4963__auto___19276 = n;
var __19277 = (0);
while(true){
if((__19277 < n__4963__auto___19276)){
var G__19106_19278 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19106_19278) {
case "async":
var c__7883__auto___19280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19277,c__7883__auto___19280,G__19106_19278,n__4963__auto___19276,jobs,results,process,async){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (__19277,c__7883__auto___19280,G__19106_19278,n__4963__auto___19276,jobs,results,process,async){
return (function (state_19119){
var state_val_19120 = (state_19119[(1)]);
if((state_val_19120 === (7))){
var inst_19115 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19121_19281 = state_19119__$1;
(statearr_19121_19281[(2)] = inst_19115);

(statearr_19121_19281[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19120 === (6))){
var state_19119__$1 = state_19119;
var statearr_19122_19282 = state_19119__$1;
(statearr_19122_19282[(2)] = null);

(statearr_19122_19282[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19120 === (5))){
var state_19119__$1 = state_19119;
var statearr_19123_19283 = state_19119__$1;
(statearr_19123_19283[(2)] = null);

(statearr_19123_19283[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19120 === (4))){
var inst_19109 = (state_19119[(2)]);
var inst_19110 = async(inst_19109);
var state_19119__$1 = state_19119;
if(cljs.core.truth_(inst_19110)){
var statearr_19124_19284 = state_19119__$1;
(statearr_19124_19284[(1)] = (5));

} else {
var statearr_19125_19285 = state_19119__$1;
(statearr_19125_19285[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19120 === (3))){
var inst_19117 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19119__$1,inst_19117);
} else {
if((state_val_19120 === (2))){
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19119__$1,(4),jobs);
} else {
if((state_val_19120 === (1))){
var state_19119__$1 = state_19119;
var statearr_19126_19286 = state_19119__$1;
(statearr_19126_19286[(2)] = null);

(statearr_19126_19286[(1)] = (2));


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
});})(__19277,c__7883__auto___19280,G__19106_19278,n__4963__auto___19276,jobs,results,process,async))
;
return ((function (__19277,switch__7803__auto__,c__7883__auto___19280,G__19106_19278,n__4963__auto___19276,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0 = (function (){
var statearr_19130 = [null,null,null,null,null,null,null];
(statearr_19130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__);

(statearr_19130[(1)] = (1));

return statearr_19130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1 = (function (state_19119){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_19119);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e19131){if((e19131 instanceof Object)){
var ex__7807__auto__ = e19131;
var statearr_19132_19287 = state_19119;
(statearr_19132_19287[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19119);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19131;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19288 = state_19119;
state_19119 = G__19288;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__ = function(state_19119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1.call(this,state_19119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__;
})()
;})(__19277,switch__7803__auto__,c__7883__auto___19280,G__19106_19278,n__4963__auto___19276,jobs,results,process,async))
})();
var state__7885__auto__ = (function (){var statearr_19133 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_19133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___19280);

return statearr_19133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(__19277,c__7883__auto___19280,G__19106_19278,n__4963__auto___19276,jobs,results,process,async))
);


break;
case "compute":
var c__7883__auto___19289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19277,c__7883__auto___19289,G__19106_19278,n__4963__auto___19276,jobs,results,process,async){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (__19277,c__7883__auto___19289,G__19106_19278,n__4963__auto___19276,jobs,results,process,async){
return (function (state_19146){
var state_val_19147 = (state_19146[(1)]);
if((state_val_19147 === (7))){
var inst_19142 = (state_19146[(2)]);
var state_19146__$1 = state_19146;
var statearr_19148_19290 = state_19146__$1;
(statearr_19148_19290[(2)] = inst_19142);

(statearr_19148_19290[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19147 === (6))){
var state_19146__$1 = state_19146;
var statearr_19149_19291 = state_19146__$1;
(statearr_19149_19291[(2)] = null);

(statearr_19149_19291[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19147 === (5))){
var state_19146__$1 = state_19146;
var statearr_19150_19292 = state_19146__$1;
(statearr_19150_19292[(2)] = null);

(statearr_19150_19292[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19147 === (4))){
var inst_19136 = (state_19146[(2)]);
var inst_19137 = process(inst_19136);
var state_19146__$1 = state_19146;
if(cljs.core.truth_(inst_19137)){
var statearr_19151_19293 = state_19146__$1;
(statearr_19151_19293[(1)] = (5));

} else {
var statearr_19152_19294 = state_19146__$1;
(statearr_19152_19294[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19147 === (3))){
var inst_19144 = (state_19146[(2)]);
var state_19146__$1 = state_19146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19146__$1,inst_19144);
} else {
if((state_val_19147 === (2))){
var state_19146__$1 = state_19146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19146__$1,(4),jobs);
} else {
if((state_val_19147 === (1))){
var state_19146__$1 = state_19146;
var statearr_19153_19295 = state_19146__$1;
(statearr_19153_19295[(2)] = null);

(statearr_19153_19295[(1)] = (2));


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
});})(__19277,c__7883__auto___19289,G__19106_19278,n__4963__auto___19276,jobs,results,process,async))
;
return ((function (__19277,switch__7803__auto__,c__7883__auto___19289,G__19106_19278,n__4963__auto___19276,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0 = (function (){
var statearr_19157 = [null,null,null,null,null,null,null];
(statearr_19157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__);

(statearr_19157[(1)] = (1));

return statearr_19157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1 = (function (state_19146){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_19146);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e19158){if((e19158 instanceof Object)){
var ex__7807__auto__ = e19158;
var statearr_19159_19296 = state_19146;
(statearr_19159_19296[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19146);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19158;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19297 = state_19146;
state_19146 = G__19297;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__ = function(state_19146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1.call(this,state_19146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__;
})()
;})(__19277,switch__7803__auto__,c__7883__auto___19289,G__19106_19278,n__4963__auto___19276,jobs,results,process,async))
})();
var state__7885__auto__ = (function (){var statearr_19160 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_19160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___19289);

return statearr_19160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(__19277,c__7883__auto___19289,G__19106_19278,n__4963__auto___19276,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19298 = (__19277 + (1));
__19277 = G__19298;
continue;
} else {
}
break;
}

var c__7883__auto___19299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___19299,jobs,results,process,async){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___19299,jobs,results,process,async){
return (function (state_19182){
var state_val_19183 = (state_19182[(1)]);
if((state_val_19183 === (9))){
var inst_19175 = (state_19182[(2)]);
var state_19182__$1 = (function (){var statearr_19184 = state_19182;
(statearr_19184[(7)] = inst_19175);

return statearr_19184;
})();
var statearr_19185_19300 = state_19182__$1;
(statearr_19185_19300[(2)] = null);

(statearr_19185_19300[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19183 === (8))){
var inst_19168 = (state_19182[(8)]);
var inst_19173 = (state_19182[(2)]);
var state_19182__$1 = (function (){var statearr_19186 = state_19182;
(statearr_19186[(9)] = inst_19173);

return statearr_19186;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19182__$1,(9),results,inst_19168);
} else {
if((state_val_19183 === (7))){
var inst_19178 = (state_19182[(2)]);
var state_19182__$1 = state_19182;
var statearr_19187_19301 = state_19182__$1;
(statearr_19187_19301[(2)] = inst_19178);

(statearr_19187_19301[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19183 === (6))){
var inst_19168 = (state_19182[(8)]);
var inst_19163 = (state_19182[(10)]);
var inst_19168__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19169 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19170 = [inst_19163,inst_19168__$1];
var inst_19171 = (new cljs.core.PersistentVector(null,2,(5),inst_19169,inst_19170,null));
var state_19182__$1 = (function (){var statearr_19188 = state_19182;
(statearr_19188[(8)] = inst_19168__$1);

return statearr_19188;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19182__$1,(8),jobs,inst_19171);
} else {
if((state_val_19183 === (5))){
var inst_19166 = cljs.core.async.close_BANG_(jobs);
var state_19182__$1 = state_19182;
var statearr_19189_19302 = state_19182__$1;
(statearr_19189_19302[(2)] = inst_19166);

(statearr_19189_19302[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19183 === (4))){
var inst_19163 = (state_19182[(10)]);
var inst_19163__$1 = (state_19182[(2)]);
var inst_19164 = (inst_19163__$1 == null);
var state_19182__$1 = (function (){var statearr_19190 = state_19182;
(statearr_19190[(10)] = inst_19163__$1);

return statearr_19190;
})();
if(cljs.core.truth_(inst_19164)){
var statearr_19191_19303 = state_19182__$1;
(statearr_19191_19303[(1)] = (5));

} else {
var statearr_19192_19304 = state_19182__$1;
(statearr_19192_19304[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19183 === (3))){
var inst_19180 = (state_19182[(2)]);
var state_19182__$1 = state_19182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19182__$1,inst_19180);
} else {
if((state_val_19183 === (2))){
var state_19182__$1 = state_19182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19182__$1,(4),from);
} else {
if((state_val_19183 === (1))){
var state_19182__$1 = state_19182;
var statearr_19193_19305 = state_19182__$1;
(statearr_19193_19305[(2)] = null);

(statearr_19193_19305[(1)] = (2));


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
});})(c__7883__auto___19299,jobs,results,process,async))
;
return ((function (switch__7803__auto__,c__7883__auto___19299,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0 = (function (){
var statearr_19197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__);

(statearr_19197[(1)] = (1));

return statearr_19197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1 = (function (state_19182){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_19182);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e19198){if((e19198 instanceof Object)){
var ex__7807__auto__ = e19198;
var statearr_19199_19306 = state_19182;
(statearr_19199_19306[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19182);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19307 = state_19182;
state_19182 = G__19307;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__ = function(state_19182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1.call(this,state_19182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___19299,jobs,results,process,async))
})();
var state__7885__auto__ = (function (){var statearr_19200 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_19200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___19299);

return statearr_19200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___19299,jobs,results,process,async))
);


var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__,jobs,results,process,async){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__,jobs,results,process,async){
return (function (state_19238){
var state_val_19239 = (state_19238[(1)]);
if((state_val_19239 === (7))){
var inst_19234 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19240_19308 = state_19238__$1;
(statearr_19240_19308[(2)] = inst_19234);

(statearr_19240_19308[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (20))){
var state_19238__$1 = state_19238;
var statearr_19241_19309 = state_19238__$1;
(statearr_19241_19309[(2)] = null);

(statearr_19241_19309[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (1))){
var state_19238__$1 = state_19238;
var statearr_19242_19310 = state_19238__$1;
(statearr_19242_19310[(2)] = null);

(statearr_19242_19310[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (4))){
var inst_19203 = (state_19238[(7)]);
var inst_19203__$1 = (state_19238[(2)]);
var inst_19204 = (inst_19203__$1 == null);
var state_19238__$1 = (function (){var statearr_19243 = state_19238;
(statearr_19243[(7)] = inst_19203__$1);

return statearr_19243;
})();
if(cljs.core.truth_(inst_19204)){
var statearr_19244_19311 = state_19238__$1;
(statearr_19244_19311[(1)] = (5));

} else {
var statearr_19245_19312 = state_19238__$1;
(statearr_19245_19312[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (15))){
var inst_19216 = (state_19238[(8)]);
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19238__$1,(18),to,inst_19216);
} else {
if((state_val_19239 === (21))){
var inst_19229 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19246_19313 = state_19238__$1;
(statearr_19246_19313[(2)] = inst_19229);

(statearr_19246_19313[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (13))){
var inst_19231 = (state_19238[(2)]);
var state_19238__$1 = (function (){var statearr_19247 = state_19238;
(statearr_19247[(9)] = inst_19231);

return statearr_19247;
})();
var statearr_19248_19314 = state_19238__$1;
(statearr_19248_19314[(2)] = null);

(statearr_19248_19314[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (6))){
var inst_19203 = (state_19238[(7)]);
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19238__$1,(11),inst_19203);
} else {
if((state_val_19239 === (17))){
var inst_19224 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
if(cljs.core.truth_(inst_19224)){
var statearr_19249_19315 = state_19238__$1;
(statearr_19249_19315[(1)] = (19));

} else {
var statearr_19250_19316 = state_19238__$1;
(statearr_19250_19316[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (3))){
var inst_19236 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19238__$1,inst_19236);
} else {
if((state_val_19239 === (12))){
var inst_19213 = (state_19238[(10)]);
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19238__$1,(14),inst_19213);
} else {
if((state_val_19239 === (2))){
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19238__$1,(4),results);
} else {
if((state_val_19239 === (19))){
var state_19238__$1 = state_19238;
var statearr_19251_19317 = state_19238__$1;
(statearr_19251_19317[(2)] = null);

(statearr_19251_19317[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (11))){
var inst_19213 = (state_19238[(2)]);
var state_19238__$1 = (function (){var statearr_19252 = state_19238;
(statearr_19252[(10)] = inst_19213);

return statearr_19252;
})();
var statearr_19253_19318 = state_19238__$1;
(statearr_19253_19318[(2)] = null);

(statearr_19253_19318[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (9))){
var state_19238__$1 = state_19238;
var statearr_19254_19319 = state_19238__$1;
(statearr_19254_19319[(2)] = null);

(statearr_19254_19319[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (5))){
var state_19238__$1 = state_19238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19255_19320 = state_19238__$1;
(statearr_19255_19320[(1)] = (8));

} else {
var statearr_19256_19321 = state_19238__$1;
(statearr_19256_19321[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (14))){
var inst_19216 = (state_19238[(8)]);
var inst_19218 = (state_19238[(11)]);
var inst_19216__$1 = (state_19238[(2)]);
var inst_19217 = (inst_19216__$1 == null);
var inst_19218__$1 = cljs.core.not(inst_19217);
var state_19238__$1 = (function (){var statearr_19257 = state_19238;
(statearr_19257[(8)] = inst_19216__$1);

(statearr_19257[(11)] = inst_19218__$1);

return statearr_19257;
})();
if(inst_19218__$1){
var statearr_19258_19322 = state_19238__$1;
(statearr_19258_19322[(1)] = (15));

} else {
var statearr_19259_19323 = state_19238__$1;
(statearr_19259_19323[(1)] = (16));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (16))){
var inst_19218 = (state_19238[(11)]);
var state_19238__$1 = state_19238;
var statearr_19260_19324 = state_19238__$1;
(statearr_19260_19324[(2)] = inst_19218);

(statearr_19260_19324[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (10))){
var inst_19210 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19261_19325 = state_19238__$1;
(statearr_19261_19325[(2)] = inst_19210);

(statearr_19261_19325[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (18))){
var inst_19221 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19262_19326 = state_19238__$1;
(statearr_19262_19326[(2)] = inst_19221);

(statearr_19262_19326[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19239 === (8))){
var inst_19207 = cljs.core.async.close_BANG_(to);
var state_19238__$1 = state_19238;
var statearr_19263_19327 = state_19238__$1;
(statearr_19263_19327[(2)] = inst_19207);

(statearr_19263_19327[(1)] = (10));


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
});})(c__7883__auto__,jobs,results,process,async))
;
return ((function (switch__7803__auto__,c__7883__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0 = (function (){
var statearr_19267 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__);

(statearr_19267[(1)] = (1));

return statearr_19267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1 = (function (state_19238){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_19238);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e19268){if((e19268 instanceof Object)){
var ex__7807__auto__ = e19268;
var statearr_19269_19328 = state_19238;
(statearr_19269_19328[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19238);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19268;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19329 = state_19238;
state_19238 = G__19329;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__ = function(state_19238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1.call(this,state_19238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7804__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__,jobs,results,process,async))
})();
var state__7885__auto__ = (function (){var statearr_19270 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_19270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_19270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__,jobs,results,process,async))
);

return c__7883__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$_COLON_async);
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$_COLON_compute);
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__7883__auto___19452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___19452,tc,fc){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___19452,tc,fc){
return (function (state_19426){
var state_val_19427 = (state_19426[(1)]);
if((state_val_19427 === (7))){
var inst_19422 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19428_19453 = state_19426__$1;
(statearr_19428_19453[(2)] = inst_19422);

(statearr_19428_19453[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19427 === (1))){
var state_19426__$1 = state_19426;
var statearr_19429_19454 = state_19426__$1;
(statearr_19429_19454[(2)] = null);

(statearr_19429_19454[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19427 === (4))){
var inst_19403 = (state_19426[(7)]);
var inst_19403__$1 = (state_19426[(2)]);
var inst_19404 = (inst_19403__$1 == null);
var state_19426__$1 = (function (){var statearr_19430 = state_19426;
(statearr_19430[(7)] = inst_19403__$1);

return statearr_19430;
})();
if(cljs.core.truth_(inst_19404)){
var statearr_19431_19455 = state_19426__$1;
(statearr_19431_19455[(1)] = (5));

} else {
var statearr_19432_19456 = state_19426__$1;
(statearr_19432_19456[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19427 === (13))){
var state_19426__$1 = state_19426;
var statearr_19433_19457 = state_19426__$1;
(statearr_19433_19457[(2)] = null);

(statearr_19433_19457[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19427 === (6))){
var inst_19403 = (state_19426[(7)]);
var inst_19409 = (function (){var G__19434 = inst_19403;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19434) : p.call(null,G__19434));
})();
var state_19426__$1 = state_19426;
if(cljs.core.truth_(inst_19409)){
var statearr_19435_19458 = state_19426__$1;
(statearr_19435_19458[(1)] = (9));

} else {
var statearr_19436_19459 = state_19426__$1;
(statearr_19436_19459[(1)] = (10));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19427 === (3))){
var inst_19424 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19426__$1,inst_19424);
} else {
if((state_val_19427 === (12))){
var state_19426__$1 = state_19426;
var statearr_19437_19460 = state_19426__$1;
(statearr_19437_19460[(2)] = null);

(statearr_19437_19460[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19427 === (2))){
var state_19426__$1 = state_19426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19426__$1,(4),ch);
} else {
if((state_val_19427 === (11))){
var inst_19403 = (state_19426[(7)]);
var inst_19413 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19426__$1,(8),inst_19413,inst_19403);
} else {
if((state_val_19427 === (9))){
var state_19426__$1 = state_19426;
var statearr_19438_19461 = state_19426__$1;
(statearr_19438_19461[(2)] = tc);

(statearr_19438_19461[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19427 === (5))){
var inst_19406 = cljs.core.async.close_BANG_(tc);
var inst_19407 = cljs.core.async.close_BANG_(fc);
var state_19426__$1 = (function (){var statearr_19439 = state_19426;
(statearr_19439[(8)] = inst_19406);

return statearr_19439;
})();
var statearr_19440_19462 = state_19426__$1;
(statearr_19440_19462[(2)] = inst_19407);

(statearr_19440_19462[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19427 === (14))){
var inst_19420 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19441_19463 = state_19426__$1;
(statearr_19441_19463[(2)] = inst_19420);

(statearr_19441_19463[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19427 === (10))){
var state_19426__$1 = state_19426;
var statearr_19442_19464 = state_19426__$1;
(statearr_19442_19464[(2)] = fc);

(statearr_19442_19464[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19427 === (8))){
var inst_19415 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
if(cljs.core.truth_(inst_19415)){
var statearr_19443_19465 = state_19426__$1;
(statearr_19443_19465[(1)] = (12));

} else {
var statearr_19444_19466 = state_19426__$1;
(statearr_19444_19466[(1)] = (13));

}

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
}
}
}
});})(c__7883__auto___19452,tc,fc))
;
return ((function (switch__7803__auto__,c__7883__auto___19452,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__7804__auto__ = null;
var cljs$core$async$split_$_state_machine__7804__auto____0 = (function (){
var statearr_19448 = [null,null,null,null,null,null,null,null,null];
(statearr_19448[(0)] = cljs$core$async$split_$_state_machine__7804__auto__);

(statearr_19448[(1)] = (1));

return statearr_19448;
});
var cljs$core$async$split_$_state_machine__7804__auto____1 = (function (state_19426){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_19426);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e19449){if((e19449 instanceof Object)){
var ex__7807__auto__ = e19449;
var statearr_19450_19467 = state_19426;
(statearr_19450_19467[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19426);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19468 = state_19426;
state_19426 = G__19468;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__7804__auto__ = function(state_19426){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__7804__auto____1.call(this,state_19426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__7804__auto____0;
cljs$core$async$split_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__7804__auto____1;
return cljs$core$async$split_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___19452,tc,fc))
})();
var state__7885__auto__ = (function (){var statearr_19451 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_19451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___19452);

return statearr_19451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___19452,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__){
return (function (state_19535){
var state_val_19536 = (state_19535[(1)]);
if((state_val_19536 === (7))){
var inst_19531 = (state_19535[(2)]);
var state_19535__$1 = state_19535;
var statearr_19537_19561 = state_19535__$1;
(statearr_19537_19561[(2)] = inst_19531);

(statearr_19537_19561[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19536 === (1))){
var inst_19515 = init;
var state_19535__$1 = (function (){var statearr_19538 = state_19535;
(statearr_19538[(7)] = inst_19515);

return statearr_19538;
})();
var statearr_19539_19562 = state_19535__$1;
(statearr_19539_19562[(2)] = null);

(statearr_19539_19562[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19536 === (4))){
var inst_19518 = (state_19535[(8)]);
var inst_19518__$1 = (state_19535[(2)]);
var inst_19519 = (inst_19518__$1 == null);
var state_19535__$1 = (function (){var statearr_19540 = state_19535;
(statearr_19540[(8)] = inst_19518__$1);

return statearr_19540;
})();
if(cljs.core.truth_(inst_19519)){
var statearr_19541_19563 = state_19535__$1;
(statearr_19541_19563[(1)] = (5));

} else {
var statearr_19542_19564 = state_19535__$1;
(statearr_19542_19564[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19536 === (6))){
var inst_19522 = (state_19535[(9)]);
var inst_19515 = (state_19535[(7)]);
var inst_19518 = (state_19535[(8)]);
var inst_19522__$1 = (function (){var G__19543 = inst_19515;
var G__19544 = inst_19518;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19543,G__19544) : f.call(null,G__19543,G__19544));
})();
var inst_19523 = cljs.core.reduced_QMARK_(inst_19522__$1);
var state_19535__$1 = (function (){var statearr_19545 = state_19535;
(statearr_19545[(9)] = inst_19522__$1);

return statearr_19545;
})();
if(inst_19523){
var statearr_19546_19565 = state_19535__$1;
(statearr_19546_19565[(1)] = (8));

} else {
var statearr_19547_19566 = state_19535__$1;
(statearr_19547_19566[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19536 === (3))){
var inst_19533 = (state_19535[(2)]);
var state_19535__$1 = state_19535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19535__$1,inst_19533);
} else {
if((state_val_19536 === (2))){
var state_19535__$1 = state_19535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19535__$1,(4),ch);
} else {
if((state_val_19536 === (9))){
var inst_19522 = (state_19535[(9)]);
var inst_19515 = inst_19522;
var state_19535__$1 = (function (){var statearr_19548 = state_19535;
(statearr_19548[(7)] = inst_19515);

return statearr_19548;
})();
var statearr_19549_19567 = state_19535__$1;
(statearr_19549_19567[(2)] = null);

(statearr_19549_19567[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19536 === (5))){
var inst_19515 = (state_19535[(7)]);
var state_19535__$1 = state_19535;
var statearr_19550_19568 = state_19535__$1;
(statearr_19550_19568[(2)] = inst_19515);

(statearr_19550_19568[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19536 === (10))){
var inst_19529 = (state_19535[(2)]);
var state_19535__$1 = state_19535;
var statearr_19551_19569 = state_19535__$1;
(statearr_19551_19569[(2)] = inst_19529);

(statearr_19551_19569[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19536 === (8))){
var inst_19522 = (state_19535[(9)]);
var inst_19525 = (function (){var G__19552 = inst_19522;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19552) : cljs.core.deref.call(null,G__19552));
})();
var state_19535__$1 = state_19535;
var statearr_19553_19570 = state_19535__$1;
(statearr_19553_19570[(2)] = inst_19525);

(statearr_19553_19570[(1)] = (10));


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
});})(c__7883__auto__))
;
return ((function (switch__7803__auto__,c__7883__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7804__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7804__auto____0 = (function (){
var statearr_19557 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19557[(0)] = cljs$core$async$reduce_$_state_machine__7804__auto__);

(statearr_19557[(1)] = (1));

return statearr_19557;
});
var cljs$core$async$reduce_$_state_machine__7804__auto____1 = (function (state_19535){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_19535);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e19558){if((e19558 instanceof Object)){
var ex__7807__auto__ = e19558;
var statearr_19559_19571 = state_19535;
(statearr_19559_19571[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19535);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19572 = state_19535;
state_19535 = G__19572;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7804__auto__ = function(state_19535){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7804__auto____1.call(this,state_19535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7804__auto____0;
cljs$core$async$reduce_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7804__auto____1;
return cljs$core$async$reduce_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__))
})();
var state__7885__auto__ = (function (){var statearr_19560 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_19560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_19560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__))
);

return c__7883__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__){
return (function (state_19649){
var state_val_19650 = (state_19649[(1)]);
if((state_val_19650 === (7))){
var inst_19631 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
var statearr_19651_19674 = state_19649__$1;
(statearr_19651_19674[(2)] = inst_19631);

(statearr_19651_19674[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19650 === (1))){
var inst_19625 = cljs.core.seq(coll);
var inst_19626 = inst_19625;
var state_19649__$1 = (function (){var statearr_19652 = state_19649;
(statearr_19652[(7)] = inst_19626);

return statearr_19652;
})();
var statearr_19653_19675 = state_19649__$1;
(statearr_19653_19675[(2)] = null);

(statearr_19653_19675[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19650 === (4))){
var inst_19626 = (state_19649[(7)]);
var inst_19629 = cljs.core.first(inst_19626);
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19649__$1,(7),ch,inst_19629);
} else {
if((state_val_19650 === (13))){
var inst_19643 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
var statearr_19654_19676 = state_19649__$1;
(statearr_19654_19676[(2)] = inst_19643);

(statearr_19654_19676[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19650 === (6))){
var inst_19634 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
if(cljs.core.truth_(inst_19634)){
var statearr_19655_19677 = state_19649__$1;
(statearr_19655_19677[(1)] = (8));

} else {
var statearr_19656_19678 = state_19649__$1;
(statearr_19656_19678[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19650 === (3))){
var inst_19647 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19649__$1,inst_19647);
} else {
if((state_val_19650 === (12))){
var state_19649__$1 = state_19649;
var statearr_19657_19679 = state_19649__$1;
(statearr_19657_19679[(2)] = null);

(statearr_19657_19679[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19650 === (2))){
var inst_19626 = (state_19649[(7)]);
var state_19649__$1 = state_19649;
if(cljs.core.truth_(inst_19626)){
var statearr_19658_19680 = state_19649__$1;
(statearr_19658_19680[(1)] = (4));

} else {
var statearr_19659_19681 = state_19649__$1;
(statearr_19659_19681[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19650 === (11))){
var inst_19640 = cljs.core.async.close_BANG_(ch);
var state_19649__$1 = state_19649;
var statearr_19660_19682 = state_19649__$1;
(statearr_19660_19682[(2)] = inst_19640);

(statearr_19660_19682[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19650 === (9))){
var state_19649__$1 = state_19649;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19661_19683 = state_19649__$1;
(statearr_19661_19683[(1)] = (11));

} else {
var statearr_19662_19684 = state_19649__$1;
(statearr_19662_19684[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19650 === (5))){
var inst_19626 = (state_19649[(7)]);
var state_19649__$1 = state_19649;
var statearr_19663_19685 = state_19649__$1;
(statearr_19663_19685[(2)] = inst_19626);

(statearr_19663_19685[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19650 === (10))){
var inst_19645 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
var statearr_19664_19686 = state_19649__$1;
(statearr_19664_19686[(2)] = inst_19645);

(statearr_19664_19686[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19650 === (8))){
var inst_19626 = (state_19649[(7)]);
var inst_19636 = cljs.core.next(inst_19626);
var inst_19626__$1 = inst_19636;
var state_19649__$1 = (function (){var statearr_19665 = state_19649;
(statearr_19665[(7)] = inst_19626__$1);

return statearr_19665;
})();
var statearr_19666_19687 = state_19649__$1;
(statearr_19666_19687[(2)] = null);

(statearr_19666_19687[(1)] = (2));


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
}
}
});})(c__7883__auto__))
;
return ((function (switch__7803__auto__,c__7883__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__7804__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__7804__auto____0 = (function (){
var statearr_19670 = [null,null,null,null,null,null,null,null];
(statearr_19670[(0)] = cljs$core$async$onto_chan_$_state_machine__7804__auto__);

(statearr_19670[(1)] = (1));

return statearr_19670;
});
var cljs$core$async$onto_chan_$_state_machine__7804__auto____1 = (function (state_19649){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_19649);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e19671){if((e19671 instanceof Object)){
var ex__7807__auto__ = e19671;
var statearr_19672_19688 = state_19649;
(statearr_19672_19688[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19649);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19689 = state_19649;
state_19649 = G__19689;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__7804__auto__ = function(state_19649){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__7804__auto____1.call(this,state_19649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__7804__auto____0;
cljs$core$async$onto_chan_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__7804__auto____1;
return cljs$core$async$onto_chan_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__))
})();
var state__7885__auto__ = (function (){var statearr_19673 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_19673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_19673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__))
);

return c__7883__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj19691 = {};
return obj19691;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4064__auto__ = _;
if(and__4064__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4720__auto__ = (((_ == null))?null:_);
return (function (){var or__4076__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__19695 = x__4720__auto__;
return goog.typeOf(G__19695);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj19697 = {};
return obj19697;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__19701 = x__4720__auto__;
return goog.typeOf(G__19701);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__19705 = x__4720__auto__;
return goog.typeOf(G__19705);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__19709 = x__4720__auto__;
return goog.typeOf(G__19709);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__19939 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19939) : cljs.core.atom.call(null,G__19939));
})();
var m = (function (){
if(typeof cljs.core.async.t19940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19940 = (function (cs,ch,mult,meta19941){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19941 = meta19941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19940.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19940.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19940.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19940.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19943_20168 = self__.cs;
var G__19944_20169 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19943_20168,G__19944_20169) : cljs.core.reset_BANG_.call(null,G__19943_20168,G__19944_20169));

return null;
});})(cs))
;

cljs.core.async.t19940.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19942){
var self__ = this;
var _19942__$1 = this;
return self__.meta19941;
});})(cs))
;

cljs.core.async.t19940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19942,meta19941__$1){
var self__ = this;
var _19942__$1 = this;
return (new cljs.core.async.t19940(self__.cs,self__.ch,self__.mult,meta19941__$1));
});})(cs))
;

cljs.core.async.t19940.cljs$lang$type = true;

cljs.core.async.t19940.cljs$lang$ctorStr = "cljs.core.async/t19940";

cljs.core.async.t19940.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19940");
});})(cs))
;

cljs.core.async.__GT_t19940 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t19940(cs__$1,ch__$1,mult__$1,meta19941){
return (new cljs.core.async.t19940(cs__$1,ch__$1,mult__$1,meta19941));
});})(cs))
;

}

return (new cljs.core.async.t19940(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__19945 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19945) : cljs.core.atom.call(null,G__19945));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7883__auto___20170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___20170,cs,m,dchan,dctr,done){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___20170,cs,m,dchan,dctr,done){
return (function (state_20076){
var state_val_20077 = (state_20076[(1)]);
if((state_val_20077 === (7))){
var inst_20072 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20078_20171 = state_20076__$1;
(statearr_20078_20171[(2)] = inst_20072);

(statearr_20078_20171[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (20))){
var inst_19977 = (state_20076[(7)]);
var inst_19987 = cljs.core.first(inst_19977);
var inst_19988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19987,(0),null);
var inst_19989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19987,(1),null);
var state_20076__$1 = (function (){var statearr_20079 = state_20076;
(statearr_20079[(8)] = inst_19988);

return statearr_20079;
})();
if(cljs.core.truth_(inst_19989)){
var statearr_20080_20172 = state_20076__$1;
(statearr_20080_20172[(1)] = (22));

} else {
var statearr_20081_20173 = state_20076__$1;
(statearr_20081_20173[(1)] = (23));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (27))){
var inst_20017 = (state_20076[(9)]);
var inst_19948 = (state_20076[(10)]);
var inst_20019 = (state_20076[(11)]);
var inst_20024 = (state_20076[(12)]);
var inst_20024__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20017,inst_20019);
var inst_20025 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20024__$1,inst_19948,done);
var state_20076__$1 = (function (){var statearr_20082 = state_20076;
(statearr_20082[(12)] = inst_20024__$1);

return statearr_20082;
})();
if(cljs.core.truth_(inst_20025)){
var statearr_20083_20174 = state_20076__$1;
(statearr_20083_20174[(1)] = (30));

} else {
var statearr_20084_20175 = state_20076__$1;
(statearr_20084_20175[(1)] = (31));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (1))){
var state_20076__$1 = state_20076;
var statearr_20085_20176 = state_20076__$1;
(statearr_20085_20176[(2)] = null);

(statearr_20085_20176[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (24))){
var inst_19977 = (state_20076[(7)]);
var inst_19994 = (state_20076[(2)]);
var inst_19995 = cljs.core.next(inst_19977);
var inst_19957 = inst_19995;
var inst_19958 = null;
var inst_19959 = (0);
var inst_19960 = (0);
var state_20076__$1 = (function (){var statearr_20086 = state_20076;
(statearr_20086[(13)] = inst_19957);

(statearr_20086[(14)] = inst_19958);

(statearr_20086[(15)] = inst_19994);

(statearr_20086[(16)] = inst_19959);

(statearr_20086[(17)] = inst_19960);

return statearr_20086;
})();
var statearr_20087_20177 = state_20076__$1;
(statearr_20087_20177[(2)] = null);

(statearr_20087_20177[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (39))){
var state_20076__$1 = state_20076;
var statearr_20091_20178 = state_20076__$1;
(statearr_20091_20178[(2)] = null);

(statearr_20091_20178[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (4))){
var inst_19948 = (state_20076[(10)]);
var inst_19948__$1 = (state_20076[(2)]);
var inst_19949 = (inst_19948__$1 == null);
var state_20076__$1 = (function (){var statearr_20092 = state_20076;
(statearr_20092[(10)] = inst_19948__$1);

return statearr_20092;
})();
if(cljs.core.truth_(inst_19949)){
var statearr_20093_20179 = state_20076__$1;
(statearr_20093_20179[(1)] = (5));

} else {
var statearr_20094_20180 = state_20076__$1;
(statearr_20094_20180[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (15))){
var inst_19957 = (state_20076[(13)]);
var inst_19958 = (state_20076[(14)]);
var inst_19959 = (state_20076[(16)]);
var inst_19960 = (state_20076[(17)]);
var inst_19973 = (state_20076[(2)]);
var inst_19974 = (inst_19960 + (1));
var tmp20088 = inst_19957;
var tmp20089 = inst_19958;
var tmp20090 = inst_19959;
var inst_19957__$1 = tmp20088;
var inst_19958__$1 = tmp20089;
var inst_19959__$1 = tmp20090;
var inst_19960__$1 = inst_19974;
var state_20076__$1 = (function (){var statearr_20095 = state_20076;
(statearr_20095[(13)] = inst_19957__$1);

(statearr_20095[(14)] = inst_19958__$1);

(statearr_20095[(18)] = inst_19973);

(statearr_20095[(16)] = inst_19959__$1);

(statearr_20095[(17)] = inst_19960__$1);

return statearr_20095;
})();
var statearr_20096_20181 = state_20076__$1;
(statearr_20096_20181[(2)] = null);

(statearr_20096_20181[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (21))){
var inst_19998 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20100_20182 = state_20076__$1;
(statearr_20100_20182[(2)] = inst_19998);

(statearr_20100_20182[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (31))){
var inst_20024 = (state_20076[(12)]);
var inst_20028 = done(null);
var inst_20029 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20024);
var state_20076__$1 = (function (){var statearr_20101 = state_20076;
(statearr_20101[(19)] = inst_20028);

return statearr_20101;
})();
var statearr_20102_20183 = state_20076__$1;
(statearr_20102_20183[(2)] = inst_20029);

(statearr_20102_20183[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (32))){
var inst_20017 = (state_20076[(9)]);
var inst_20018 = (state_20076[(20)]);
var inst_20016 = (state_20076[(21)]);
var inst_20019 = (state_20076[(11)]);
var inst_20031 = (state_20076[(2)]);
var inst_20032 = (inst_20019 + (1));
var tmp20097 = inst_20017;
var tmp20098 = inst_20018;
var tmp20099 = inst_20016;
var inst_20016__$1 = tmp20099;
var inst_20017__$1 = tmp20097;
var inst_20018__$1 = tmp20098;
var inst_20019__$1 = inst_20032;
var state_20076__$1 = (function (){var statearr_20103 = state_20076;
(statearr_20103[(9)] = inst_20017__$1);

(statearr_20103[(20)] = inst_20018__$1);

(statearr_20103[(22)] = inst_20031);

(statearr_20103[(21)] = inst_20016__$1);

(statearr_20103[(11)] = inst_20019__$1);

return statearr_20103;
})();
var statearr_20104_20184 = state_20076__$1;
(statearr_20104_20184[(2)] = null);

(statearr_20104_20184[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (40))){
var inst_20044 = (state_20076[(23)]);
var inst_20048 = done(null);
var inst_20049 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20044);
var state_20076__$1 = (function (){var statearr_20105 = state_20076;
(statearr_20105[(24)] = inst_20048);

return statearr_20105;
})();
var statearr_20106_20185 = state_20076__$1;
(statearr_20106_20185[(2)] = inst_20049);

(statearr_20106_20185[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (33))){
var inst_20035 = (state_20076[(25)]);
var inst_20037 = cljs.core.chunked_seq_QMARK_(inst_20035);
var state_20076__$1 = state_20076;
if(inst_20037){
var statearr_20107_20186 = state_20076__$1;
(statearr_20107_20186[(1)] = (36));

} else {
var statearr_20108_20187 = state_20076__$1;
(statearr_20108_20187[(1)] = (37));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (13))){
var inst_19967 = (state_20076[(26)]);
var inst_19970 = cljs.core.async.close_BANG_(inst_19967);
var state_20076__$1 = state_20076;
var statearr_20109_20188 = state_20076__$1;
(statearr_20109_20188[(2)] = inst_19970);

(statearr_20109_20188[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (22))){
var inst_19988 = (state_20076[(8)]);
var inst_19991 = cljs.core.async.close_BANG_(inst_19988);
var state_20076__$1 = state_20076;
var statearr_20110_20189 = state_20076__$1;
(statearr_20110_20189[(2)] = inst_19991);

(statearr_20110_20189[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (36))){
var inst_20035 = (state_20076[(25)]);
var inst_20039 = cljs.core.chunk_first(inst_20035);
var inst_20040 = cljs.core.chunk_rest(inst_20035);
var inst_20041 = cljs.core.count(inst_20039);
var inst_20016 = inst_20040;
var inst_20017 = inst_20039;
var inst_20018 = inst_20041;
var inst_20019 = (0);
var state_20076__$1 = (function (){var statearr_20111 = state_20076;
(statearr_20111[(9)] = inst_20017);

(statearr_20111[(20)] = inst_20018);

(statearr_20111[(21)] = inst_20016);

(statearr_20111[(11)] = inst_20019);

return statearr_20111;
})();
var statearr_20112_20190 = state_20076__$1;
(statearr_20112_20190[(2)] = null);

(statearr_20112_20190[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (41))){
var inst_20035 = (state_20076[(25)]);
var inst_20051 = (state_20076[(2)]);
var inst_20052 = cljs.core.next(inst_20035);
var inst_20016 = inst_20052;
var inst_20017 = null;
var inst_20018 = (0);
var inst_20019 = (0);
var state_20076__$1 = (function (){var statearr_20113 = state_20076;
(statearr_20113[(9)] = inst_20017);

(statearr_20113[(20)] = inst_20018);

(statearr_20113[(27)] = inst_20051);

(statearr_20113[(21)] = inst_20016);

(statearr_20113[(11)] = inst_20019);

return statearr_20113;
})();
var statearr_20114_20191 = state_20076__$1;
(statearr_20114_20191[(2)] = null);

(statearr_20114_20191[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (43))){
var state_20076__$1 = state_20076;
var statearr_20115_20192 = state_20076__$1;
(statearr_20115_20192[(2)] = null);

(statearr_20115_20192[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (29))){
var inst_20060 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20116_20193 = state_20076__$1;
(statearr_20116_20193[(2)] = inst_20060);

(statearr_20116_20193[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (44))){
var inst_20069 = (state_20076[(2)]);
var state_20076__$1 = (function (){var statearr_20117 = state_20076;
(statearr_20117[(28)] = inst_20069);

return statearr_20117;
})();
var statearr_20118_20194 = state_20076__$1;
(statearr_20118_20194[(2)] = null);

(statearr_20118_20194[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (6))){
var inst_20008 = (state_20076[(29)]);
var inst_20007 = (function (){var G__20119 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20119) : cljs.core.deref.call(null,G__20119));
})();
var inst_20008__$1 = cljs.core.keys(inst_20007);
var inst_20009 = cljs.core.count(inst_20008__$1);
var inst_20010 = (function (){var G__20120 = dctr;
var G__20121 = inst_20009;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20120,G__20121) : cljs.core.reset_BANG_.call(null,G__20120,G__20121));
})();
var inst_20015 = cljs.core.seq(inst_20008__$1);
var inst_20016 = inst_20015;
var inst_20017 = null;
var inst_20018 = (0);
var inst_20019 = (0);
var state_20076__$1 = (function (){var statearr_20122 = state_20076;
(statearr_20122[(9)] = inst_20017);

(statearr_20122[(20)] = inst_20018);

(statearr_20122[(21)] = inst_20016);

(statearr_20122[(30)] = inst_20010);

(statearr_20122[(11)] = inst_20019);

(statearr_20122[(29)] = inst_20008__$1);

return statearr_20122;
})();
var statearr_20123_20195 = state_20076__$1;
(statearr_20123_20195[(2)] = null);

(statearr_20123_20195[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (28))){
var inst_20016 = (state_20076[(21)]);
var inst_20035 = (state_20076[(25)]);
var inst_20035__$1 = cljs.core.seq(inst_20016);
var state_20076__$1 = (function (){var statearr_20124 = state_20076;
(statearr_20124[(25)] = inst_20035__$1);

return statearr_20124;
})();
if(inst_20035__$1){
var statearr_20125_20196 = state_20076__$1;
(statearr_20125_20196[(1)] = (33));

} else {
var statearr_20126_20197 = state_20076__$1;
(statearr_20126_20197[(1)] = (34));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (25))){
var inst_20018 = (state_20076[(20)]);
var inst_20019 = (state_20076[(11)]);
var inst_20021 = (inst_20019 < inst_20018);
var inst_20022 = inst_20021;
var state_20076__$1 = state_20076;
if(cljs.core.truth_(inst_20022)){
var statearr_20127_20198 = state_20076__$1;
(statearr_20127_20198[(1)] = (27));

} else {
var statearr_20128_20199 = state_20076__$1;
(statearr_20128_20199[(1)] = (28));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (34))){
var state_20076__$1 = state_20076;
var statearr_20129_20200 = state_20076__$1;
(statearr_20129_20200[(2)] = null);

(statearr_20129_20200[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (17))){
var state_20076__$1 = state_20076;
var statearr_20130_20201 = state_20076__$1;
(statearr_20130_20201[(2)] = null);

(statearr_20130_20201[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (3))){
var inst_20074 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20076__$1,inst_20074);
} else {
if((state_val_20077 === (12))){
var inst_20003 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20131_20202 = state_20076__$1;
(statearr_20131_20202[(2)] = inst_20003);

(statearr_20131_20202[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (2))){
var state_20076__$1 = state_20076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20076__$1,(4),ch);
} else {
if((state_val_20077 === (23))){
var state_20076__$1 = state_20076;
var statearr_20132_20203 = state_20076__$1;
(statearr_20132_20203[(2)] = null);

(statearr_20132_20203[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (35))){
var inst_20058 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20133_20204 = state_20076__$1;
(statearr_20133_20204[(2)] = inst_20058);

(statearr_20133_20204[(1)] = (29));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (19))){
var inst_19977 = (state_20076[(7)]);
var inst_19981 = cljs.core.chunk_first(inst_19977);
var inst_19982 = cljs.core.chunk_rest(inst_19977);
var inst_19983 = cljs.core.count(inst_19981);
var inst_19957 = inst_19982;
var inst_19958 = inst_19981;
var inst_19959 = inst_19983;
var inst_19960 = (0);
var state_20076__$1 = (function (){var statearr_20134 = state_20076;
(statearr_20134[(13)] = inst_19957);

(statearr_20134[(14)] = inst_19958);

(statearr_20134[(16)] = inst_19959);

(statearr_20134[(17)] = inst_19960);

return statearr_20134;
})();
var statearr_20135_20205 = state_20076__$1;
(statearr_20135_20205[(2)] = null);

(statearr_20135_20205[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (11))){
var inst_19957 = (state_20076[(13)]);
var inst_19977 = (state_20076[(7)]);
var inst_19977__$1 = cljs.core.seq(inst_19957);
var state_20076__$1 = (function (){var statearr_20136 = state_20076;
(statearr_20136[(7)] = inst_19977__$1);

return statearr_20136;
})();
if(inst_19977__$1){
var statearr_20137_20206 = state_20076__$1;
(statearr_20137_20206[(1)] = (16));

} else {
var statearr_20138_20207 = state_20076__$1;
(statearr_20138_20207[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (9))){
var inst_20005 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20139_20208 = state_20076__$1;
(statearr_20139_20208[(2)] = inst_20005);

(statearr_20139_20208[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (5))){
var inst_19955 = (function (){var G__20140 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20140) : cljs.core.deref.call(null,G__20140));
})();
var inst_19956 = cljs.core.seq(inst_19955);
var inst_19957 = inst_19956;
var inst_19958 = null;
var inst_19959 = (0);
var inst_19960 = (0);
var state_20076__$1 = (function (){var statearr_20141 = state_20076;
(statearr_20141[(13)] = inst_19957);

(statearr_20141[(14)] = inst_19958);

(statearr_20141[(16)] = inst_19959);

(statearr_20141[(17)] = inst_19960);

return statearr_20141;
})();
var statearr_20142_20209 = state_20076__$1;
(statearr_20142_20209[(2)] = null);

(statearr_20142_20209[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (14))){
var state_20076__$1 = state_20076;
var statearr_20143_20210 = state_20076__$1;
(statearr_20143_20210[(2)] = null);

(statearr_20143_20210[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (45))){
var inst_20066 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20144_20211 = state_20076__$1;
(statearr_20144_20211[(2)] = inst_20066);

(statearr_20144_20211[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (26))){
var inst_20008 = (state_20076[(29)]);
var inst_20062 = (state_20076[(2)]);
var inst_20063 = cljs.core.seq(inst_20008);
var state_20076__$1 = (function (){var statearr_20145 = state_20076;
(statearr_20145[(31)] = inst_20062);

return statearr_20145;
})();
if(inst_20063){
var statearr_20146_20212 = state_20076__$1;
(statearr_20146_20212[(1)] = (42));

} else {
var statearr_20147_20213 = state_20076__$1;
(statearr_20147_20213[(1)] = (43));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (16))){
var inst_19977 = (state_20076[(7)]);
var inst_19979 = cljs.core.chunked_seq_QMARK_(inst_19977);
var state_20076__$1 = state_20076;
if(inst_19979){
var statearr_20148_20214 = state_20076__$1;
(statearr_20148_20214[(1)] = (19));

} else {
var statearr_20149_20215 = state_20076__$1;
(statearr_20149_20215[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (38))){
var inst_20055 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20150_20216 = state_20076__$1;
(statearr_20150_20216[(2)] = inst_20055);

(statearr_20150_20216[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (30))){
var state_20076__$1 = state_20076;
var statearr_20151_20217 = state_20076__$1;
(statearr_20151_20217[(2)] = null);

(statearr_20151_20217[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (10))){
var inst_19958 = (state_20076[(14)]);
var inst_19960 = (state_20076[(17)]);
var inst_19966 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19958,inst_19960);
var inst_19967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19966,(0),null);
var inst_19968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19966,(1),null);
var state_20076__$1 = (function (){var statearr_20152 = state_20076;
(statearr_20152[(26)] = inst_19967);

return statearr_20152;
})();
if(cljs.core.truth_(inst_19968)){
var statearr_20153_20218 = state_20076__$1;
(statearr_20153_20218[(1)] = (13));

} else {
var statearr_20154_20219 = state_20076__$1;
(statearr_20154_20219[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (18))){
var inst_20001 = (state_20076[(2)]);
var state_20076__$1 = state_20076;
var statearr_20155_20220 = state_20076__$1;
(statearr_20155_20220[(2)] = inst_20001);

(statearr_20155_20220[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (42))){
var state_20076__$1 = state_20076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20076__$1,(45),dchan);
} else {
if((state_val_20077 === (37))){
var inst_19948 = (state_20076[(10)]);
var inst_20044 = (state_20076[(23)]);
var inst_20035 = (state_20076[(25)]);
var inst_20044__$1 = cljs.core.first(inst_20035);
var inst_20045 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20044__$1,inst_19948,done);
var state_20076__$1 = (function (){var statearr_20156 = state_20076;
(statearr_20156[(23)] = inst_20044__$1);

return statearr_20156;
})();
if(cljs.core.truth_(inst_20045)){
var statearr_20157_20221 = state_20076__$1;
(statearr_20157_20221[(1)] = (39));

} else {
var statearr_20158_20222 = state_20076__$1;
(statearr_20158_20222[(1)] = (40));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20077 === (8))){
var inst_19959 = (state_20076[(16)]);
var inst_19960 = (state_20076[(17)]);
var inst_19962 = (inst_19960 < inst_19959);
var inst_19963 = inst_19962;
var state_20076__$1 = state_20076;
if(cljs.core.truth_(inst_19963)){
var statearr_20159_20223 = state_20076__$1;
(statearr_20159_20223[(1)] = (10));

} else {
var statearr_20160_20224 = state_20076__$1;
(statearr_20160_20224[(1)] = (11));

}

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
}
});})(c__7883__auto___20170,cs,m,dchan,dctr,done))
;
return ((function (switch__7803__auto__,c__7883__auto___20170,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7804__auto__ = null;
var cljs$core$async$mult_$_state_machine__7804__auto____0 = (function (){
var statearr_20164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20164[(0)] = cljs$core$async$mult_$_state_machine__7804__auto__);

(statearr_20164[(1)] = (1));

return statearr_20164;
});
var cljs$core$async$mult_$_state_machine__7804__auto____1 = (function (state_20076){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_20076);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e20165){if((e20165 instanceof Object)){
var ex__7807__auto__ = e20165;
var statearr_20166_20225 = state_20076;
(statearr_20166_20225[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20076);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20226 = state_20076;
state_20076 = G__20226;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7804__auto__ = function(state_20076){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7804__auto____1.call(this,state_20076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7804__auto____0;
cljs$core$async$mult_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7804__auto____1;
return cljs$core$async$mult_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___20170,cs,m,dchan,dctr,done))
})();
var state__7885__auto__ = (function (){var statearr_20167 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_20167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___20170);

return statearr_20167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___20170,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj20231 = {};
return obj20231;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__20235 = x__4720__auto__;
return goog.typeOf(G__20235);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__20239 = x__4720__auto__;
return goog.typeOf(G__20239);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__20243 = x__4720__auto__;
return goog.typeOf(G__20243);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__20247 = x__4720__auto__;
return goog.typeOf(G__20247);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__20251 = x__4720__auto__;
return goog.typeOf(G__20251);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20252){
var map__20258 = p__20252;
var map__20258__$1 = ((cljs.core.seq_QMARK_(map__20258))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20258):map__20258);
var opts = map__20258__$1;
var statearr_20259_20263 = state;
(statearr_20259_20263[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__20258,map__20258__$1,opts){
return (function (val){
var statearr_20260_20264 = state;
(statearr_20260_20264[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__20258,map__20258__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20261_20265 = state;
(statearr_20261_20265[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__20262 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20262) : cljs.core.deref.call(null,G__20262));
})());


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20252 = null;
if (arguments.length > 3) {
var G__20266__i = 0, G__20266__a = new Array(arguments.length -  3);
while (G__20266__i < G__20266__a.length) {G__20266__a[G__20266__i] = arguments[G__20266__i + 3]; ++G__20266__i;}
  p__20252 = new cljs.core.IndexedSeq(G__20266__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20252);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20267){
var state = cljs.core.first(arglist__20267);
arglist__20267 = cljs.core.next(arglist__20267);
var cont_block = cljs.core.first(arglist__20267);
arglist__20267 = cljs.core.next(arglist__20267);
var ports = cljs.core.first(arglist__20267);
var p__20252 = cljs.core.rest(arglist__20267);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__20252);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__20401 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20401) : cljs.core.atom.call(null,G__20401));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_pause,null,cljs.core.constant$keyword$_COLON_mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$_COLON_solo);
var solo_mode = (function (){var G__20402 = cljs.core.constant$keyword$_COLON_mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20402) : cljs.core.atom.call(null,G__20402));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__20403 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__20403) : attr.call(null,G__20403));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__20404 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20404) : cljs.core.deref.call(null,G__20404));
})();
var mode = (function (){var G__20405 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20405) : cljs.core.deref.call(null,G__20405));
})();
var solos = pick(cljs.core.constant$keyword$_COLON_solo,chs);
var pauses = pick(cljs.core.constant$keyword$_COLON_pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_solos,solos,cljs.core.constant$keyword$_COLON_mutes,pick(cljs.core.constant$keyword$_COLON_mute,chs),cljs.core.constant$keyword$_COLON_reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$_COLON_pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t20406 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20406 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20407){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20407 = meta20407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20406.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20406.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20406.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20406.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20409_20534 = self__.cs;
var G__20410_20535 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20409_20534,G__20410_20535) : cljs.core.reset_BANG_.call(null,G__20409_20534,G__20410_20535));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20406.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20406.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__20411 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__20411) : self__.solo_modes.call(null,G__20411));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__20412_20536 = self__.solo_mode;
var G__20413_20537 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20412_20536,G__20413_20537) : cljs.core.reset_BANG_.call(null,G__20412_20536,G__20413_20537));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20406.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20408){
var self__ = this;
var _20408__$1 = this;
return self__.meta20407;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20408,meta20407__$1){
var self__ = this;
var _20408__$1 = this;
return (new cljs.core.async.t20406(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20407__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20406.cljs$lang$type = true;

cljs.core.async.t20406.cljs$lang$ctorStr = "cljs.core.async/t20406";

cljs.core.async.t20406.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t20406");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20406 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t20406(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20407){
return (new cljs.core.async.t20406(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20407));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20406(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7883__auto___20538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___20538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___20538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20485){
var state_val_20486 = (state_20485[(1)]);
if((state_val_20486 === (7))){
var inst_20427 = (state_20485[(7)]);
var inst_20432 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20427);
var state_20485__$1 = state_20485;
var statearr_20487_20539 = state_20485__$1;
(statearr_20487_20539[(2)] = inst_20432);

(statearr_20487_20539[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (20))){
var inst_20442 = (state_20485[(8)]);
var state_20485__$1 = state_20485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20485__$1,(23),out,inst_20442);
} else {
if((state_val_20486 === (1))){
var inst_20417 = (state_20485[(9)]);
var inst_20417__$1 = calc_state();
var inst_20418 = cljs.core.seq_QMARK_(inst_20417__$1);
var state_20485__$1 = (function (){var statearr_20488 = state_20485;
(statearr_20488[(9)] = inst_20417__$1);

return statearr_20488;
})();
if(inst_20418){
var statearr_20489_20540 = state_20485__$1;
(statearr_20489_20540[(1)] = (2));

} else {
var statearr_20490_20541 = state_20485__$1;
(statearr_20490_20541[(1)] = (3));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (24))){
var inst_20435 = (state_20485[(10)]);
var inst_20427 = inst_20435;
var state_20485__$1 = (function (){var statearr_20491 = state_20485;
(statearr_20491[(7)] = inst_20427);

return statearr_20491;
})();
var statearr_20492_20542 = state_20485__$1;
(statearr_20492_20542[(2)] = null);

(statearr_20492_20542[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (4))){
var inst_20417 = (state_20485[(9)]);
var inst_20423 = (state_20485[(2)]);
var inst_20424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20423,cljs.core.constant$keyword$_COLON_reads);
var inst_20425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20423,cljs.core.constant$keyword$_COLON_mutes);
var inst_20426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20423,cljs.core.constant$keyword$_COLON_solos);
var inst_20427 = inst_20417;
var state_20485__$1 = (function (){var statearr_20493 = state_20485;
(statearr_20493[(11)] = inst_20426);

(statearr_20493[(12)] = inst_20424);

(statearr_20493[(7)] = inst_20427);

(statearr_20493[(13)] = inst_20425);

return statearr_20493;
})();
var statearr_20494_20543 = state_20485__$1;
(statearr_20494_20543[(2)] = null);

(statearr_20494_20543[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (15))){
var state_20485__$1 = state_20485;
var statearr_20495_20544 = state_20485__$1;
(statearr_20495_20544[(2)] = null);

(statearr_20495_20544[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (21))){
var inst_20435 = (state_20485[(10)]);
var inst_20427 = inst_20435;
var state_20485__$1 = (function (){var statearr_20496 = state_20485;
(statearr_20496[(7)] = inst_20427);

return statearr_20496;
})();
var statearr_20497_20545 = state_20485__$1;
(statearr_20497_20545[(2)] = null);

(statearr_20497_20545[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (13))){
var inst_20481 = (state_20485[(2)]);
var state_20485__$1 = state_20485;
var statearr_20498_20546 = state_20485__$1;
(statearr_20498_20546[(2)] = inst_20481);

(statearr_20498_20546[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (22))){
var inst_20479 = (state_20485[(2)]);
var state_20485__$1 = state_20485;
var statearr_20499_20547 = state_20485__$1;
(statearr_20499_20547[(2)] = inst_20479);

(statearr_20499_20547[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (6))){
var inst_20483 = (state_20485[(2)]);
var state_20485__$1 = state_20485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20485__$1,inst_20483);
} else {
if((state_val_20486 === (25))){
var state_20485__$1 = state_20485;
var statearr_20500_20548 = state_20485__$1;
(statearr_20500_20548[(2)] = null);

(statearr_20500_20548[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (17))){
var inst_20458 = (state_20485[(14)]);
var state_20485__$1 = state_20485;
var statearr_20501_20549 = state_20485__$1;
(statearr_20501_20549[(2)] = inst_20458);

(statearr_20501_20549[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (3))){
var inst_20417 = (state_20485[(9)]);
var state_20485__$1 = state_20485;
var statearr_20502_20550 = state_20485__$1;
(statearr_20502_20550[(2)] = inst_20417);

(statearr_20502_20550[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (12))){
var inst_20438 = (state_20485[(15)]);
var inst_20443 = (state_20485[(16)]);
var inst_20458 = (state_20485[(14)]);
var inst_20458__$1 = (function (){var G__20503 = inst_20443;
return (inst_20438.cljs$core$IFn$_invoke$arity$1 ? inst_20438.cljs$core$IFn$_invoke$arity$1(G__20503) : inst_20438.call(null,G__20503));
})();
var state_20485__$1 = (function (){var statearr_20504 = state_20485;
(statearr_20504[(14)] = inst_20458__$1);

return statearr_20504;
})();
if(cljs.core.truth_(inst_20458__$1)){
var statearr_20505_20551 = state_20485__$1;
(statearr_20505_20551[(1)] = (17));

} else {
var statearr_20506_20552 = state_20485__$1;
(statearr_20506_20552[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (2))){
var inst_20417 = (state_20485[(9)]);
var inst_20420 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20417);
var state_20485__$1 = state_20485;
var statearr_20507_20553 = state_20485__$1;
(statearr_20507_20553[(2)] = inst_20420);

(statearr_20507_20553[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (23))){
var inst_20470 = (state_20485[(2)]);
var state_20485__$1 = state_20485;
if(cljs.core.truth_(inst_20470)){
var statearr_20508_20554 = state_20485__$1;
(statearr_20508_20554[(1)] = (24));

} else {
var statearr_20509_20555 = state_20485__$1;
(statearr_20509_20555[(1)] = (25));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (19))){
var inst_20467 = (state_20485[(2)]);
var state_20485__$1 = state_20485;
if(cljs.core.truth_(inst_20467)){
var statearr_20510_20556 = state_20485__$1;
(statearr_20510_20556[(1)] = (20));

} else {
var statearr_20511_20557 = state_20485__$1;
(statearr_20511_20557[(1)] = (21));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (11))){
var inst_20442 = (state_20485[(8)]);
var inst_20448 = (inst_20442 == null);
var state_20485__$1 = state_20485;
if(cljs.core.truth_(inst_20448)){
var statearr_20512_20558 = state_20485__$1;
(statearr_20512_20558[(1)] = (14));

} else {
var statearr_20513_20559 = state_20485__$1;
(statearr_20513_20559[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (9))){
var inst_20435 = (state_20485[(10)]);
var inst_20435__$1 = (state_20485[(2)]);
var inst_20436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20435__$1,cljs.core.constant$keyword$_COLON_reads);
var inst_20437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20435__$1,cljs.core.constant$keyword$_COLON_mutes);
var inst_20438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20435__$1,cljs.core.constant$keyword$_COLON_solos);
var state_20485__$1 = (function (){var statearr_20514 = state_20485;
(statearr_20514[(15)] = inst_20438);

(statearr_20514[(10)] = inst_20435__$1);

(statearr_20514[(17)] = inst_20437);

return statearr_20514;
})();
return cljs.core.async.ioc_alts_BANG_(state_20485__$1,(10),inst_20436);
} else {
if((state_val_20486 === (5))){
var inst_20427 = (state_20485[(7)]);
var inst_20430 = cljs.core.seq_QMARK_(inst_20427);
var state_20485__$1 = state_20485;
if(inst_20430){
var statearr_20515_20560 = state_20485__$1;
(statearr_20515_20560[(1)] = (7));

} else {
var statearr_20516_20561 = state_20485__$1;
(statearr_20516_20561[(1)] = (8));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (14))){
var inst_20443 = (state_20485[(16)]);
var inst_20450 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_20443);
var state_20485__$1 = state_20485;
var statearr_20517_20562 = state_20485__$1;
(statearr_20517_20562[(2)] = inst_20450);

(statearr_20517_20562[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (26))){
var inst_20475 = (state_20485[(2)]);
var state_20485__$1 = state_20485;
var statearr_20518_20563 = state_20485__$1;
(statearr_20518_20563[(2)] = inst_20475);

(statearr_20518_20563[(1)] = (22));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (16))){
var inst_20453 = (state_20485[(2)]);
var inst_20454 = calc_state();
var inst_20427 = inst_20454;
var state_20485__$1 = (function (){var statearr_20519 = state_20485;
(statearr_20519[(18)] = inst_20453);

(statearr_20519[(7)] = inst_20427);

return statearr_20519;
})();
var statearr_20520_20564 = state_20485__$1;
(statearr_20520_20564[(2)] = null);

(statearr_20520_20564[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (10))){
var inst_20443 = (state_20485[(16)]);
var inst_20442 = (state_20485[(8)]);
var inst_20441 = (state_20485[(2)]);
var inst_20442__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20441,(0),null);
var inst_20443__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20441,(1),null);
var inst_20444 = (inst_20442__$1 == null);
var inst_20445 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20443__$1,change);
var inst_20446 = (inst_20444) || (inst_20445);
var state_20485__$1 = (function (){var statearr_20521 = state_20485;
(statearr_20521[(16)] = inst_20443__$1);

(statearr_20521[(8)] = inst_20442__$1);

return statearr_20521;
})();
if(cljs.core.truth_(inst_20446)){
var statearr_20522_20565 = state_20485__$1;
(statearr_20522_20565[(1)] = (11));

} else {
var statearr_20523_20566 = state_20485__$1;
(statearr_20523_20566[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (18))){
var inst_20438 = (state_20485[(15)]);
var inst_20443 = (state_20485[(16)]);
var inst_20437 = (state_20485[(17)]);
var inst_20462 = cljs.core.empty_QMARK_(inst_20438);
var inst_20463 = (function (){var G__20524 = inst_20443;
return (inst_20437.cljs$core$IFn$_invoke$arity$1 ? inst_20437.cljs$core$IFn$_invoke$arity$1(G__20524) : inst_20437.call(null,G__20524));
})();
var inst_20464 = cljs.core.not(inst_20463);
var inst_20465 = (inst_20462) && (inst_20464);
var state_20485__$1 = state_20485;
var statearr_20525_20567 = state_20485__$1;
(statearr_20525_20567[(2)] = inst_20465);

(statearr_20525_20567[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20486 === (8))){
var inst_20427 = (state_20485[(7)]);
var state_20485__$1 = state_20485;
var statearr_20526_20568 = state_20485__$1;
(statearr_20526_20568[(2)] = inst_20427);

(statearr_20526_20568[(1)] = (9));


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
}
}
}
}
});})(c__7883__auto___20538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7803__auto__,c__7883__auto___20538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7804__auto__ = null;
var cljs$core$async$mix_$_state_machine__7804__auto____0 = (function (){
var statearr_20530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20530[(0)] = cljs$core$async$mix_$_state_machine__7804__auto__);

(statearr_20530[(1)] = (1));

return statearr_20530;
});
var cljs$core$async$mix_$_state_machine__7804__auto____1 = (function (state_20485){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_20485);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e20531){if((e20531 instanceof Object)){
var ex__7807__auto__ = e20531;
var statearr_20532_20569 = state_20485;
(statearr_20532_20569[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20485);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20531;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20570 = state_20485;
state_20485 = G__20570;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7804__auto__ = function(state_20485){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7804__auto____1.call(this,state_20485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7804__auto____0;
cljs$core$async$mix_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7804__auto____1;
return cljs$core$async$mix_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___20538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7885__auto__ = (function (){var statearr_20533 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_20533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___20538);

return statearr_20533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___20538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj20572 = {};
return obj20572;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__20576 = x__4720__auto__;
return goog.typeOf(G__20576);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__20580 = x__4720__auto__;
return goog.typeOf(G__20580);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__20586 = x__4720__auto__;
return goog.typeOf(G__20586);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__20588 = x__4720__auto__;
return goog.typeOf(G__20588);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__20727 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20727) : cljs.core.atom.call(null,G__20727));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4076__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__20729 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20729) : cljs.core.deref.call(null,G__20729));
})(),topic);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4076__auto__,mults){
return (function (p1__20589_SHARP_){
if(cljs.core.truth_((function (){var G__20730 = topic;
return (p1__20589_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20589_SHARP_.cljs$core$IFn$_invoke$arity$1(G__20730) : p1__20589_SHARP_.call(null,G__20730));
})())){
return p1__20589_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20589_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__20731 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__20731) : buf_fn.call(null,G__20731));
})())));
}
});})(or__4076__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20732 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20732 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20733){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20733 = meta20733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20732.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20732.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__20735 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__20735) : self__.ensure_mult.call(null,G__20735));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20732.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__20736 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20736) : cljs.core.deref.call(null,G__20736));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t20732.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20737 = self__.mults;
var G__20738 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20737,G__20738) : cljs.core.reset_BANG_.call(null,G__20737,G__20738));
});})(mults,ensure_mult))
;

cljs.core.async.t20732.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20732.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20734){
var self__ = this;
var _20734__$1 = this;
return self__.meta20733;
});})(mults,ensure_mult))
;

cljs.core.async.t20732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20734,meta20733__$1){
var self__ = this;
var _20734__$1 = this;
return (new cljs.core.async.t20732(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20733__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20732.cljs$lang$type = true;

cljs.core.async.t20732.cljs$lang$ctorStr = "cljs.core.async/t20732";

cljs.core.async.t20732.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t20732");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20732 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t20732(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20733){
return (new cljs.core.async.t20732(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20733));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20732(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7883__auto___20861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___20861,mults,ensure_mult,p){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___20861,mults,ensure_mult,p){
return (function (state_20810){
var state_val_20811 = (state_20810[(1)]);
if((state_val_20811 === (7))){
var inst_20806 = (state_20810[(2)]);
var state_20810__$1 = state_20810;
var statearr_20812_20862 = state_20810__$1;
(statearr_20812_20862[(2)] = inst_20806);

(statearr_20812_20862[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (20))){
var state_20810__$1 = state_20810;
var statearr_20813_20863 = state_20810__$1;
(statearr_20813_20863[(2)] = null);

(statearr_20813_20863[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (1))){
var state_20810__$1 = state_20810;
var statearr_20814_20864 = state_20810__$1;
(statearr_20814_20864[(2)] = null);

(statearr_20814_20864[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (24))){
var inst_20789 = (state_20810[(7)]);
var inst_20798 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20789);
var state_20810__$1 = state_20810;
var statearr_20815_20865 = state_20810__$1;
(statearr_20815_20865[(2)] = inst_20798);

(statearr_20815_20865[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (4))){
var inst_20741 = (state_20810[(8)]);
var inst_20741__$1 = (state_20810[(2)]);
var inst_20742 = (inst_20741__$1 == null);
var state_20810__$1 = (function (){var statearr_20816 = state_20810;
(statearr_20816[(8)] = inst_20741__$1);

return statearr_20816;
})();
if(cljs.core.truth_(inst_20742)){
var statearr_20817_20866 = state_20810__$1;
(statearr_20817_20866[(1)] = (5));

} else {
var statearr_20818_20867 = state_20810__$1;
(statearr_20818_20867[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (15))){
var inst_20783 = (state_20810[(2)]);
var state_20810__$1 = state_20810;
var statearr_20819_20868 = state_20810__$1;
(statearr_20819_20868[(2)] = inst_20783);

(statearr_20819_20868[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (21))){
var inst_20803 = (state_20810[(2)]);
var state_20810__$1 = (function (){var statearr_20820 = state_20810;
(statearr_20820[(9)] = inst_20803);

return statearr_20820;
})();
var statearr_20821_20869 = state_20810__$1;
(statearr_20821_20869[(2)] = null);

(statearr_20821_20869[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (13))){
var inst_20765 = (state_20810[(10)]);
var inst_20767 = cljs.core.chunked_seq_QMARK_(inst_20765);
var state_20810__$1 = state_20810;
if(inst_20767){
var statearr_20822_20870 = state_20810__$1;
(statearr_20822_20870[(1)] = (16));

} else {
var statearr_20823_20871 = state_20810__$1;
(statearr_20823_20871[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (22))){
var inst_20795 = (state_20810[(2)]);
var state_20810__$1 = state_20810;
if(cljs.core.truth_(inst_20795)){
var statearr_20824_20872 = state_20810__$1;
(statearr_20824_20872[(1)] = (23));

} else {
var statearr_20825_20873 = state_20810__$1;
(statearr_20825_20873[(1)] = (24));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (6))){
var inst_20789 = (state_20810[(7)]);
var inst_20791 = (state_20810[(11)]);
var inst_20741 = (state_20810[(8)]);
var inst_20789__$1 = (function (){var G__20826 = inst_20741;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__20826) : topic_fn.call(null,G__20826));
})();
var inst_20790 = (function (){var G__20827 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20827) : cljs.core.deref.call(null,G__20827));
})();
var inst_20791__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20790,inst_20789__$1);
var state_20810__$1 = (function (){var statearr_20828 = state_20810;
(statearr_20828[(7)] = inst_20789__$1);

(statearr_20828[(11)] = inst_20791__$1);

return statearr_20828;
})();
if(cljs.core.truth_(inst_20791__$1)){
var statearr_20829_20874 = state_20810__$1;
(statearr_20829_20874[(1)] = (19));

} else {
var statearr_20830_20875 = state_20810__$1;
(statearr_20830_20875[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (25))){
var inst_20800 = (state_20810[(2)]);
var state_20810__$1 = state_20810;
var statearr_20831_20876 = state_20810__$1;
(statearr_20831_20876[(2)] = inst_20800);

(statearr_20831_20876[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (17))){
var inst_20765 = (state_20810[(10)]);
var inst_20774 = cljs.core.first(inst_20765);
var inst_20775 = cljs.core.async.muxch_STAR_(inst_20774);
var inst_20776 = cljs.core.async.close_BANG_(inst_20775);
var inst_20777 = cljs.core.next(inst_20765);
var inst_20751 = inst_20777;
var inst_20752 = null;
var inst_20753 = (0);
var inst_20754 = (0);
var state_20810__$1 = (function (){var statearr_20832 = state_20810;
(statearr_20832[(12)] = inst_20753);

(statearr_20832[(13)] = inst_20776);

(statearr_20832[(14)] = inst_20754);

(statearr_20832[(15)] = inst_20752);

(statearr_20832[(16)] = inst_20751);

return statearr_20832;
})();
var statearr_20833_20877 = state_20810__$1;
(statearr_20833_20877[(2)] = null);

(statearr_20833_20877[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (3))){
var inst_20808 = (state_20810[(2)]);
var state_20810__$1 = state_20810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20810__$1,inst_20808);
} else {
if((state_val_20811 === (12))){
var inst_20785 = (state_20810[(2)]);
var state_20810__$1 = state_20810;
var statearr_20834_20878 = state_20810__$1;
(statearr_20834_20878[(2)] = inst_20785);

(statearr_20834_20878[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (2))){
var state_20810__$1 = state_20810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20810__$1,(4),ch);
} else {
if((state_val_20811 === (23))){
var state_20810__$1 = state_20810;
var statearr_20835_20879 = state_20810__$1;
(statearr_20835_20879[(2)] = null);

(statearr_20835_20879[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (19))){
var inst_20791 = (state_20810[(11)]);
var inst_20741 = (state_20810[(8)]);
var inst_20793 = cljs.core.async.muxch_STAR_(inst_20791);
var state_20810__$1 = state_20810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20810__$1,(22),inst_20793,inst_20741);
} else {
if((state_val_20811 === (11))){
var inst_20765 = (state_20810[(10)]);
var inst_20751 = (state_20810[(16)]);
var inst_20765__$1 = cljs.core.seq(inst_20751);
var state_20810__$1 = (function (){var statearr_20836 = state_20810;
(statearr_20836[(10)] = inst_20765__$1);

return statearr_20836;
})();
if(inst_20765__$1){
var statearr_20837_20880 = state_20810__$1;
(statearr_20837_20880[(1)] = (13));

} else {
var statearr_20838_20881 = state_20810__$1;
(statearr_20838_20881[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (9))){
var inst_20787 = (state_20810[(2)]);
var state_20810__$1 = state_20810;
var statearr_20839_20882 = state_20810__$1;
(statearr_20839_20882[(2)] = inst_20787);

(statearr_20839_20882[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (5))){
var inst_20748 = (function (){var G__20840 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20840) : cljs.core.deref.call(null,G__20840));
})();
var inst_20749 = cljs.core.vals(inst_20748);
var inst_20750 = cljs.core.seq(inst_20749);
var inst_20751 = inst_20750;
var inst_20752 = null;
var inst_20753 = (0);
var inst_20754 = (0);
var state_20810__$1 = (function (){var statearr_20841 = state_20810;
(statearr_20841[(12)] = inst_20753);

(statearr_20841[(14)] = inst_20754);

(statearr_20841[(15)] = inst_20752);

(statearr_20841[(16)] = inst_20751);

return statearr_20841;
})();
var statearr_20842_20883 = state_20810__$1;
(statearr_20842_20883[(2)] = null);

(statearr_20842_20883[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (14))){
var state_20810__$1 = state_20810;
var statearr_20846_20884 = state_20810__$1;
(statearr_20846_20884[(2)] = null);

(statearr_20846_20884[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (16))){
var inst_20765 = (state_20810[(10)]);
var inst_20769 = cljs.core.chunk_first(inst_20765);
var inst_20770 = cljs.core.chunk_rest(inst_20765);
var inst_20771 = cljs.core.count(inst_20769);
var inst_20751 = inst_20770;
var inst_20752 = inst_20769;
var inst_20753 = inst_20771;
var inst_20754 = (0);
var state_20810__$1 = (function (){var statearr_20847 = state_20810;
(statearr_20847[(12)] = inst_20753);

(statearr_20847[(14)] = inst_20754);

(statearr_20847[(15)] = inst_20752);

(statearr_20847[(16)] = inst_20751);

return statearr_20847;
})();
var statearr_20848_20885 = state_20810__$1;
(statearr_20848_20885[(2)] = null);

(statearr_20848_20885[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (10))){
var inst_20753 = (state_20810[(12)]);
var inst_20754 = (state_20810[(14)]);
var inst_20752 = (state_20810[(15)]);
var inst_20751 = (state_20810[(16)]);
var inst_20759 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20752,inst_20754);
var inst_20760 = cljs.core.async.muxch_STAR_(inst_20759);
var inst_20761 = cljs.core.async.close_BANG_(inst_20760);
var inst_20762 = (inst_20754 + (1));
var tmp20843 = inst_20753;
var tmp20844 = inst_20752;
var tmp20845 = inst_20751;
var inst_20751__$1 = tmp20845;
var inst_20752__$1 = tmp20844;
var inst_20753__$1 = tmp20843;
var inst_20754__$1 = inst_20762;
var state_20810__$1 = (function (){var statearr_20849 = state_20810;
(statearr_20849[(12)] = inst_20753__$1);

(statearr_20849[(14)] = inst_20754__$1);

(statearr_20849[(15)] = inst_20752__$1);

(statearr_20849[(16)] = inst_20751__$1);

(statearr_20849[(17)] = inst_20761);

return statearr_20849;
})();
var statearr_20850_20886 = state_20810__$1;
(statearr_20850_20886[(2)] = null);

(statearr_20850_20886[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (18))){
var inst_20780 = (state_20810[(2)]);
var state_20810__$1 = state_20810;
var statearr_20851_20887 = state_20810__$1;
(statearr_20851_20887[(2)] = inst_20780);

(statearr_20851_20887[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20811 === (8))){
var inst_20753 = (state_20810[(12)]);
var inst_20754 = (state_20810[(14)]);
var inst_20756 = (inst_20754 < inst_20753);
var inst_20757 = inst_20756;
var state_20810__$1 = state_20810;
if(cljs.core.truth_(inst_20757)){
var statearr_20852_20888 = state_20810__$1;
(statearr_20852_20888[(1)] = (10));

} else {
var statearr_20853_20889 = state_20810__$1;
(statearr_20853_20889[(1)] = (11));

}

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
}
}
}
});})(c__7883__auto___20861,mults,ensure_mult,p))
;
return ((function (switch__7803__auto__,c__7883__auto___20861,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__7804__auto__ = null;
var cljs$core$async$pub_$_state_machine__7804__auto____0 = (function (){
var statearr_20857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20857[(0)] = cljs$core$async$pub_$_state_machine__7804__auto__);

(statearr_20857[(1)] = (1));

return statearr_20857;
});
var cljs$core$async$pub_$_state_machine__7804__auto____1 = (function (state_20810){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_20810);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e20858){if((e20858 instanceof Object)){
var ex__7807__auto__ = e20858;
var statearr_20859_20890 = state_20810;
(statearr_20859_20890[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20810);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20858;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20891 = state_20810;
state_20810 = G__20891;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__7804__auto__ = function(state_20810){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__7804__auto____1.call(this,state_20810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__7804__auto____0;
cljs$core$async$pub_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__7804__auto____1;
return cljs$core$async$pub_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___20861,mults,ensure_mult,p))
})();
var state__7885__auto__ = (function (){var statearr_20860 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_20860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___20861);

return statearr_20860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___20861,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__20972 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20972) : cljs.core.atom.call(null,G__20972));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__7883__auto___21045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___21045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___21045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21011){
var state_val_21012 = (state_21011[(1)]);
if((state_val_21012 === (7))){
var state_21011__$1 = state_21011;
var statearr_21013_21046 = state_21011__$1;
(statearr_21013_21046[(2)] = null);

(statearr_21013_21046[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (1))){
var state_21011__$1 = state_21011;
var statearr_21014_21047 = state_21011__$1;
(statearr_21014_21047[(2)] = null);

(statearr_21014_21047[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (4))){
var inst_20975 = (state_21011[(7)]);
var inst_20977 = (inst_20975 < cnt);
var state_21011__$1 = state_21011;
if(cljs.core.truth_(inst_20977)){
var statearr_21015_21048 = state_21011__$1;
(statearr_21015_21048[(1)] = (6));

} else {
var statearr_21016_21049 = state_21011__$1;
(statearr_21016_21049[(1)] = (7));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (15))){
var inst_21007 = (state_21011[(2)]);
var state_21011__$1 = state_21011;
var statearr_21017_21050 = state_21011__$1;
(statearr_21017_21050[(2)] = inst_21007);

(statearr_21017_21050[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (13))){
var inst_21000 = cljs.core.async.close_BANG_(out);
var state_21011__$1 = state_21011;
var statearr_21018_21051 = state_21011__$1;
(statearr_21018_21051[(2)] = inst_21000);

(statearr_21018_21051[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (6))){
var state_21011__$1 = state_21011;
var statearr_21019_21052 = state_21011__$1;
(statearr_21019_21052[(2)] = null);

(statearr_21019_21052[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (3))){
var inst_21009 = (state_21011[(2)]);
var state_21011__$1 = state_21011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21011__$1,inst_21009);
} else {
if((state_val_21012 === (12))){
var inst_20997 = (state_21011[(8)]);
var inst_20997__$1 = (state_21011[(2)]);
var inst_20998 = cljs.core.some(cljs.core.nil_QMARK_,inst_20997__$1);
var state_21011__$1 = (function (){var statearr_21020 = state_21011;
(statearr_21020[(8)] = inst_20997__$1);

return statearr_21020;
})();
if(cljs.core.truth_(inst_20998)){
var statearr_21021_21053 = state_21011__$1;
(statearr_21021_21053[(1)] = (13));

} else {
var statearr_21022_21054 = state_21011__$1;
(statearr_21022_21054[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (2))){
var inst_20974 = (function (){var G__21023 = dctr;
var G__21024 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21023,G__21024) : cljs.core.reset_BANG_.call(null,G__21023,G__21024));
})();
var inst_20975 = (0);
var state_21011__$1 = (function (){var statearr_21025 = state_21011;
(statearr_21025[(9)] = inst_20974);

(statearr_21025[(7)] = inst_20975);

return statearr_21025;
})();
var statearr_21026_21055 = state_21011__$1;
(statearr_21026_21055[(2)] = null);

(statearr_21026_21055[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (11))){
var inst_20975 = (state_21011[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21011,(10),Object,null,(9));
var inst_20984 = (function (){var G__21027 = inst_20975;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__21027) : chs__$1.call(null,G__21027));
})();
var inst_20985 = (function (){var G__21028 = inst_20975;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21028) : done.call(null,G__21028));
})();
var inst_20986 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20984,inst_20985);
var state_21011__$1 = state_21011;
var statearr_21029_21056 = state_21011__$1;
(statearr_21029_21056[(2)] = inst_20986);


cljs.core.async.impl.ioc_helpers.process_exception(state_21011__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (9))){
var inst_20975 = (state_21011[(7)]);
var inst_20988 = (state_21011[(2)]);
var inst_20989 = (inst_20975 + (1));
var inst_20975__$1 = inst_20989;
var state_21011__$1 = (function (){var statearr_21030 = state_21011;
(statearr_21030[(10)] = inst_20988);

(statearr_21030[(7)] = inst_20975__$1);

return statearr_21030;
})();
var statearr_21031_21057 = state_21011__$1;
(statearr_21031_21057[(2)] = null);

(statearr_21031_21057[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (5))){
var inst_20995 = (state_21011[(2)]);
var state_21011__$1 = (function (){var statearr_21032 = state_21011;
(statearr_21032[(11)] = inst_20995);

return statearr_21032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21011__$1,(12),dchan);
} else {
if((state_val_21012 === (14))){
var inst_20997 = (state_21011[(8)]);
var inst_21002 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20997);
var state_21011__$1 = state_21011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21011__$1,(16),out,inst_21002);
} else {
if((state_val_21012 === (16))){
var inst_21004 = (state_21011[(2)]);
var state_21011__$1 = (function (){var statearr_21033 = state_21011;
(statearr_21033[(12)] = inst_21004);

return statearr_21033;
})();
var statearr_21034_21058 = state_21011__$1;
(statearr_21034_21058[(2)] = null);

(statearr_21034_21058[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (10))){
var inst_20979 = (state_21011[(2)]);
var inst_20980 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_21011__$1 = (function (){var statearr_21035 = state_21011;
(statearr_21035[(13)] = inst_20979);

return statearr_21035;
})();
var statearr_21036_21059 = state_21011__$1;
(statearr_21036_21059[(2)] = inst_20980);


cljs.core.async.impl.ioc_helpers.process_exception(state_21011__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21012 === (8))){
var inst_20993 = (state_21011[(2)]);
var state_21011__$1 = state_21011;
var statearr_21037_21060 = state_21011__$1;
(statearr_21037_21060[(2)] = inst_20993);

(statearr_21037_21060[(1)] = (5));


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
}
}
}
}
}
});})(c__7883__auto___21045,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7803__auto__,c__7883__auto___21045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__7804__auto__ = null;
var cljs$core$async$map_$_state_machine__7804__auto____0 = (function (){
var statearr_21041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21041[(0)] = cljs$core$async$map_$_state_machine__7804__auto__);

(statearr_21041[(1)] = (1));

return statearr_21041;
});
var cljs$core$async$map_$_state_machine__7804__auto____1 = (function (state_21011){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_21011);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e21042){if((e21042 instanceof Object)){
var ex__7807__auto__ = e21042;
var statearr_21043_21061 = state_21011;
(statearr_21043_21061[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21011);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e21042;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__21062 = state_21011;
state_21011 = G__21062;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__7804__auto__ = function(state_21011){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__7804__auto____1.call(this,state_21011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__7804__auto____0;
cljs$core$async$map_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__7804__auto____1;
return cljs$core$async$map_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___21045,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7885__auto__ = (function (){var statearr_21044 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_21044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___21045);

return statearr_21044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___21045,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7883__auto___21172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___21172,out){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___21172,out){
return (function (state_21148){
var state_val_21149 = (state_21148[(1)]);
if((state_val_21149 === (7))){
var inst_21127 = (state_21148[(7)]);
var inst_21128 = (state_21148[(8)]);
var inst_21127__$1 = (state_21148[(2)]);
var inst_21128__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21127__$1,(0),null);
var inst_21129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21127__$1,(1),null);
var inst_21130 = (inst_21128__$1 == null);
var state_21148__$1 = (function (){var statearr_21150 = state_21148;
(statearr_21150[(9)] = inst_21129);

(statearr_21150[(7)] = inst_21127__$1);

(statearr_21150[(8)] = inst_21128__$1);

return statearr_21150;
})();
if(cljs.core.truth_(inst_21130)){
var statearr_21151_21173 = state_21148__$1;
(statearr_21151_21173[(1)] = (8));

} else {
var statearr_21152_21174 = state_21148__$1;
(statearr_21152_21174[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21149 === (1))){
var inst_21119 = cljs.core.vec(chs);
var inst_21120 = inst_21119;
var state_21148__$1 = (function (){var statearr_21153 = state_21148;
(statearr_21153[(10)] = inst_21120);

return statearr_21153;
})();
var statearr_21154_21175 = state_21148__$1;
(statearr_21154_21175[(2)] = null);

(statearr_21154_21175[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21149 === (4))){
var inst_21120 = (state_21148[(10)]);
var state_21148__$1 = state_21148;
return cljs.core.async.ioc_alts_BANG_(state_21148__$1,(7),inst_21120);
} else {
if((state_val_21149 === (6))){
var inst_21144 = (state_21148[(2)]);
var state_21148__$1 = state_21148;
var statearr_21155_21176 = state_21148__$1;
(statearr_21155_21176[(2)] = inst_21144);

(statearr_21155_21176[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21149 === (3))){
var inst_21146 = (state_21148[(2)]);
var state_21148__$1 = state_21148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21148__$1,inst_21146);
} else {
if((state_val_21149 === (2))){
var inst_21120 = (state_21148[(10)]);
var inst_21122 = cljs.core.count(inst_21120);
var inst_21123 = (inst_21122 > (0));
var state_21148__$1 = state_21148;
if(cljs.core.truth_(inst_21123)){
var statearr_21157_21177 = state_21148__$1;
(statearr_21157_21177[(1)] = (4));

} else {
var statearr_21158_21178 = state_21148__$1;
(statearr_21158_21178[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21149 === (11))){
var inst_21120 = (state_21148[(10)]);
var inst_21137 = (state_21148[(2)]);
var tmp21156 = inst_21120;
var inst_21120__$1 = tmp21156;
var state_21148__$1 = (function (){var statearr_21159 = state_21148;
(statearr_21159[(10)] = inst_21120__$1);

(statearr_21159[(11)] = inst_21137);

return statearr_21159;
})();
var statearr_21160_21179 = state_21148__$1;
(statearr_21160_21179[(2)] = null);

(statearr_21160_21179[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21149 === (9))){
var inst_21128 = (state_21148[(8)]);
var state_21148__$1 = state_21148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21148__$1,(11),out,inst_21128);
} else {
if((state_val_21149 === (5))){
var inst_21142 = cljs.core.async.close_BANG_(out);
var state_21148__$1 = state_21148;
var statearr_21161_21180 = state_21148__$1;
(statearr_21161_21180[(2)] = inst_21142);

(statearr_21161_21180[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21149 === (10))){
var inst_21140 = (state_21148[(2)]);
var state_21148__$1 = state_21148;
var statearr_21162_21181 = state_21148__$1;
(statearr_21162_21181[(2)] = inst_21140);

(statearr_21162_21181[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21149 === (8))){
var inst_21129 = (state_21148[(9)]);
var inst_21120 = (state_21148[(10)]);
var inst_21127 = (state_21148[(7)]);
var inst_21128 = (state_21148[(8)]);
var inst_21132 = (function (){var c = inst_21129;
var v = inst_21128;
var vec__21125 = inst_21127;
var cs = inst_21120;
return ((function (c,v,vec__21125,cs,inst_21129,inst_21120,inst_21127,inst_21128,state_val_21149,c__7883__auto___21172,out){
return (function (p1__21063_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__21063_SHARP_);
});
;})(c,v,vec__21125,cs,inst_21129,inst_21120,inst_21127,inst_21128,state_val_21149,c__7883__auto___21172,out))
})();
var inst_21133 = cljs.core.filterv(inst_21132,inst_21120);
var inst_21120__$1 = inst_21133;
var state_21148__$1 = (function (){var statearr_21163 = state_21148;
(statearr_21163[(10)] = inst_21120__$1);

return statearr_21163;
})();
var statearr_21164_21182 = state_21148__$1;
(statearr_21164_21182[(2)] = null);

(statearr_21164_21182[(1)] = (2));


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
});})(c__7883__auto___21172,out))
;
return ((function (switch__7803__auto__,c__7883__auto___21172,out){
return (function() {
var cljs$core$async$merge_$_state_machine__7804__auto__ = null;
var cljs$core$async$merge_$_state_machine__7804__auto____0 = (function (){
var statearr_21168 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21168[(0)] = cljs$core$async$merge_$_state_machine__7804__auto__);

(statearr_21168[(1)] = (1));

return statearr_21168;
});
var cljs$core$async$merge_$_state_machine__7804__auto____1 = (function (state_21148){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_21148);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e21169){if((e21169 instanceof Object)){
var ex__7807__auto__ = e21169;
var statearr_21170_21183 = state_21148;
(statearr_21170_21183[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21148);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e21169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__21184 = state_21148;
state_21148 = G__21184;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__7804__auto__ = function(state_21148){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__7804__auto____1.call(this,state_21148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__7804__auto____0;
cljs$core$async$merge_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__7804__auto____1;
return cljs$core$async$merge_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___21172,out))
})();
var state__7885__auto__ = (function (){var statearr_21171 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_21171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___21172);

return statearr_21171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___21172,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7883__auto___21280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___21280,out){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___21280,out){
return (function (state_21257){
var state_val_21258 = (state_21257[(1)]);
if((state_val_21258 === (7))){
var inst_21239 = (state_21257[(7)]);
var inst_21239__$1 = (state_21257[(2)]);
var inst_21240 = (inst_21239__$1 == null);
var inst_21241 = cljs.core.not(inst_21240);
var state_21257__$1 = (function (){var statearr_21259 = state_21257;
(statearr_21259[(7)] = inst_21239__$1);

return statearr_21259;
})();
if(inst_21241){
var statearr_21260_21281 = state_21257__$1;
(statearr_21260_21281[(1)] = (8));

} else {
var statearr_21261_21282 = state_21257__$1;
(statearr_21261_21282[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21258 === (1))){
var inst_21234 = (0);
var state_21257__$1 = (function (){var statearr_21262 = state_21257;
(statearr_21262[(8)] = inst_21234);

return statearr_21262;
})();
var statearr_21263_21283 = state_21257__$1;
(statearr_21263_21283[(2)] = null);

(statearr_21263_21283[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21258 === (4))){
var state_21257__$1 = state_21257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21257__$1,(7),ch);
} else {
if((state_val_21258 === (6))){
var inst_21252 = (state_21257[(2)]);
var state_21257__$1 = state_21257;
var statearr_21264_21284 = state_21257__$1;
(statearr_21264_21284[(2)] = inst_21252);

(statearr_21264_21284[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21258 === (3))){
var inst_21254 = (state_21257[(2)]);
var inst_21255 = cljs.core.async.close_BANG_(out);
var state_21257__$1 = (function (){var statearr_21265 = state_21257;
(statearr_21265[(9)] = inst_21254);

return statearr_21265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21257__$1,inst_21255);
} else {
if((state_val_21258 === (2))){
var inst_21234 = (state_21257[(8)]);
var inst_21236 = (inst_21234 < n);
var state_21257__$1 = state_21257;
if(cljs.core.truth_(inst_21236)){
var statearr_21266_21285 = state_21257__$1;
(statearr_21266_21285[(1)] = (4));

} else {
var statearr_21267_21286 = state_21257__$1;
(statearr_21267_21286[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21258 === (11))){
var inst_21234 = (state_21257[(8)]);
var inst_21244 = (state_21257[(2)]);
var inst_21245 = (inst_21234 + (1));
var inst_21234__$1 = inst_21245;
var state_21257__$1 = (function (){var statearr_21268 = state_21257;
(statearr_21268[(10)] = inst_21244);

(statearr_21268[(8)] = inst_21234__$1);

return statearr_21268;
})();
var statearr_21269_21287 = state_21257__$1;
(statearr_21269_21287[(2)] = null);

(statearr_21269_21287[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21258 === (9))){
var state_21257__$1 = state_21257;
var statearr_21270_21288 = state_21257__$1;
(statearr_21270_21288[(2)] = null);

(statearr_21270_21288[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21258 === (5))){
var state_21257__$1 = state_21257;
var statearr_21271_21289 = state_21257__$1;
(statearr_21271_21289[(2)] = null);

(statearr_21271_21289[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21258 === (10))){
var inst_21249 = (state_21257[(2)]);
var state_21257__$1 = state_21257;
var statearr_21272_21290 = state_21257__$1;
(statearr_21272_21290[(2)] = inst_21249);

(statearr_21272_21290[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21258 === (8))){
var inst_21239 = (state_21257[(7)]);
var state_21257__$1 = state_21257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21257__$1,(11),out,inst_21239);
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
});})(c__7883__auto___21280,out))
;
return ((function (switch__7803__auto__,c__7883__auto___21280,out){
return (function() {
var cljs$core$async$take_$_state_machine__7804__auto__ = null;
var cljs$core$async$take_$_state_machine__7804__auto____0 = (function (){
var statearr_21276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21276[(0)] = cljs$core$async$take_$_state_machine__7804__auto__);

(statearr_21276[(1)] = (1));

return statearr_21276;
});
var cljs$core$async$take_$_state_machine__7804__auto____1 = (function (state_21257){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_21257);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e21277){if((e21277 instanceof Object)){
var ex__7807__auto__ = e21277;
var statearr_21278_21291 = state_21257;
(statearr_21278_21291[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21257);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e21277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__21292 = state_21257;
state_21257 = G__21292;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__7804__auto__ = function(state_21257){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__7804__auto____1.call(this,state_21257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__7804__auto____0;
cljs$core$async$take_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__7804__auto____1;
return cljs$core$async$take_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___21280,out))
})();
var state__7885__auto__ = (function (){var statearr_21279 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_21279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___21280);

return statearr_21279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___21280,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t21305 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21305 = (function (ch,f,map_LT_,meta21306){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21306 = meta21306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t21308 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21308 = (function (fn1,_,meta21306,map_LT_,f,ch,meta21309){
this.fn1 = fn1;
this._ = _;
this.meta21306 = meta21306;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21309 = meta21309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21308.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t21308.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t21308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21293_SHARP_){
var G__21311 = (((p1__21293_SHARP_ == null))?null:(function (){var G__21312 = p1__21293_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21312) : self__.f.call(null,G__21312));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__21311) : f1.call(null,G__21311));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21310){
var self__ = this;
var _21310__$1 = this;
return self__.meta21309;
});})(___$1))
;

cljs.core.async.t21308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21310,meta21309__$1){
var self__ = this;
var _21310__$1 = this;
return (new cljs.core.async.t21308(self__.fn1,self__._,self__.meta21306,self__.map_LT_,self__.f,self__.ch,meta21309__$1));
});})(___$1))
;

cljs.core.async.t21308.cljs$lang$type = true;

cljs.core.async.t21308.cljs$lang$ctorStr = "cljs.core.async/t21308";

cljs.core.async.t21308.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t21308");
});})(___$1))
;

cljs.core.async.__GT_t21308 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t21308(fn1__$1,___$2,meta21306__$1,map_LT___$1,f__$1,ch__$1,meta21309){
return (new cljs.core.async.t21308(fn1__$1,___$2,meta21306__$1,map_LT___$1,f__$1,ch__$1,meta21309));
});})(___$1))
;

}

return (new cljs.core.async.t21308(fn1,___$1,self__.meta21306,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4064__auto__ = ret;
if(cljs.core.truth_(and__4064__auto__)){
return !(((function (){var G__21313 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21313) : cljs.core.deref.call(null,G__21313));
})() == null));
} else {
return and__4064__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__21314 = (function (){var G__21315 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21315) : cljs.core.deref.call(null,G__21315));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21314) : self__.f.call(null,G__21314));
})());
} else {
return ret;
}
});

cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t21305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21307){
var self__ = this;
var _21307__$1 = this;
return self__.meta21306;
});

cljs.core.async.t21305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21307,meta21306__$1){
var self__ = this;
var _21307__$1 = this;
return (new cljs.core.async.t21305(self__.ch,self__.f,self__.map_LT_,meta21306__$1));
});

cljs.core.async.t21305.cljs$lang$type = true;

cljs.core.async.t21305.cljs$lang$ctorStr = "cljs.core.async/t21305";

cljs.core.async.t21305.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t21305");
});

cljs.core.async.__GT_t21305 = (function cljs$core$async$map_LT__$___GT_t21305(ch__$1,f__$1,map_LT___$1,meta21306){
return (new cljs.core.async.t21305(ch__$1,f__$1,map_LT___$1,meta21306));
});

}

return (new cljs.core.async.t21305(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t21320 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21320 = (function (ch,f,map_GT_,meta21321){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21321 = meta21321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21320.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__21323 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21323) : self__.f.call(null,G__21323));
})(),fn1);
});

cljs.core.async.t21320.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t21320.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t21320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21322){
var self__ = this;
var _21322__$1 = this;
return self__.meta21321;
});

cljs.core.async.t21320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21322,meta21321__$1){
var self__ = this;
var _21322__$1 = this;
return (new cljs.core.async.t21320(self__.ch,self__.f,self__.map_GT_,meta21321__$1));
});

cljs.core.async.t21320.cljs$lang$type = true;

cljs.core.async.t21320.cljs$lang$ctorStr = "cljs.core.async/t21320";

cljs.core.async.t21320.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t21320");
});

cljs.core.async.__GT_t21320 = (function cljs$core$async$map_GT__$___GT_t21320(ch__$1,f__$1,map_GT___$1,meta21321){
return (new cljs.core.async.t21320(ch__$1,f__$1,map_GT___$1,meta21321));
});

}

return (new cljs.core.async.t21320(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t21328 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21328 = (function (ch,p,filter_GT_,meta21329){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21329 = meta21329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21328.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__21331 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__21331) : self__.p.call(null,G__21331));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t21328.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t21328.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t21328.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t21328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21330){
var self__ = this;
var _21330__$1 = this;
return self__.meta21329;
});

cljs.core.async.t21328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21330,meta21329__$1){
var self__ = this;
var _21330__$1 = this;
return (new cljs.core.async.t21328(self__.ch,self__.p,self__.filter_GT_,meta21329__$1));
});

cljs.core.async.t21328.cljs$lang$type = true;

cljs.core.async.t21328.cljs$lang$ctorStr = "cljs.core.async/t21328";

cljs.core.async.t21328.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t21328");
});

cljs.core.async.__GT_t21328 = (function cljs$core$async$filter_GT__$___GT_t21328(ch__$1,p__$1,filter_GT___$1,meta21329){
return (new cljs.core.async.t21328(ch__$1,p__$1,filter_GT___$1,meta21329));
});

}

return (new cljs.core.async.t21328(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7883__auto___21419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___21419,out){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___21419,out){
return (function (state_21397){
var state_val_21398 = (state_21397[(1)]);
if((state_val_21398 === (7))){
var inst_21393 = (state_21397[(2)]);
var state_21397__$1 = state_21397;
var statearr_21399_21420 = state_21397__$1;
(statearr_21399_21420[(2)] = inst_21393);

(statearr_21399_21420[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21398 === (1))){
var state_21397__$1 = state_21397;
var statearr_21400_21421 = state_21397__$1;
(statearr_21400_21421[(2)] = null);

(statearr_21400_21421[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21398 === (4))){
var inst_21379 = (state_21397[(7)]);
var inst_21379__$1 = (state_21397[(2)]);
var inst_21380 = (inst_21379__$1 == null);
var state_21397__$1 = (function (){var statearr_21401 = state_21397;
(statearr_21401[(7)] = inst_21379__$1);

return statearr_21401;
})();
if(cljs.core.truth_(inst_21380)){
var statearr_21402_21422 = state_21397__$1;
(statearr_21402_21422[(1)] = (5));

} else {
var statearr_21403_21423 = state_21397__$1;
(statearr_21403_21423[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21398 === (6))){
var inst_21379 = (state_21397[(7)]);
var inst_21384 = (function (){var G__21404 = inst_21379;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__21404) : p.call(null,G__21404));
})();
var state_21397__$1 = state_21397;
if(cljs.core.truth_(inst_21384)){
var statearr_21405_21424 = state_21397__$1;
(statearr_21405_21424[(1)] = (8));

} else {
var statearr_21406_21425 = state_21397__$1;
(statearr_21406_21425[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21398 === (3))){
var inst_21395 = (state_21397[(2)]);
var state_21397__$1 = state_21397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21397__$1,inst_21395);
} else {
if((state_val_21398 === (2))){
var state_21397__$1 = state_21397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21397__$1,(4),ch);
} else {
if((state_val_21398 === (11))){
var inst_21387 = (state_21397[(2)]);
var state_21397__$1 = state_21397;
var statearr_21407_21426 = state_21397__$1;
(statearr_21407_21426[(2)] = inst_21387);

(statearr_21407_21426[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21398 === (9))){
var state_21397__$1 = state_21397;
var statearr_21408_21427 = state_21397__$1;
(statearr_21408_21427[(2)] = null);

(statearr_21408_21427[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21398 === (5))){
var inst_21382 = cljs.core.async.close_BANG_(out);
var state_21397__$1 = state_21397;
var statearr_21409_21428 = state_21397__$1;
(statearr_21409_21428[(2)] = inst_21382);

(statearr_21409_21428[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21398 === (10))){
var inst_21390 = (state_21397[(2)]);
var state_21397__$1 = (function (){var statearr_21410 = state_21397;
(statearr_21410[(8)] = inst_21390);

return statearr_21410;
})();
var statearr_21411_21429 = state_21397__$1;
(statearr_21411_21429[(2)] = null);

(statearr_21411_21429[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21398 === (8))){
var inst_21379 = (state_21397[(7)]);
var state_21397__$1 = state_21397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21397__$1,(11),out,inst_21379);
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
});})(c__7883__auto___21419,out))
;
return ((function (switch__7803__auto__,c__7883__auto___21419,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__7804__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__7804__auto____0 = (function (){
var statearr_21415 = [null,null,null,null,null,null,null,null,null];
(statearr_21415[(0)] = cljs$core$async$filter_LT__$_state_machine__7804__auto__);

(statearr_21415[(1)] = (1));

return statearr_21415;
});
var cljs$core$async$filter_LT__$_state_machine__7804__auto____1 = (function (state_21397){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_21397);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e21416){if((e21416 instanceof Object)){
var ex__7807__auto__ = e21416;
var statearr_21417_21430 = state_21397;
(statearr_21417_21430[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21397);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e21416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__21431 = state_21397;
state_21397 = G__21431;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__7804__auto__ = function(state_21397){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__7804__auto____1.call(this,state_21397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__7804__auto____0;
cljs$core$async$filter_LT__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__7804__auto____1;
return cljs$core$async$filter_LT__$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___21419,out))
})();
var state__7885__auto__ = (function (){var statearr_21418 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_21418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___21419);

return statearr_21418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___21419,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto__){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto__){
return (function (state_21601){
var state_val_21602 = (state_21601[(1)]);
if((state_val_21602 === (7))){
var inst_21597 = (state_21601[(2)]);
var state_21601__$1 = state_21601;
var statearr_21603_21645 = state_21601__$1;
(statearr_21603_21645[(2)] = inst_21597);

(statearr_21603_21645[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (20))){
var inst_21567 = (state_21601[(7)]);
var inst_21578 = (state_21601[(2)]);
var inst_21579 = cljs.core.next(inst_21567);
var inst_21553 = inst_21579;
var inst_21554 = null;
var inst_21555 = (0);
var inst_21556 = (0);
var state_21601__$1 = (function (){var statearr_21604 = state_21601;
(statearr_21604[(8)] = inst_21578);

(statearr_21604[(9)] = inst_21556);

(statearr_21604[(10)] = inst_21555);

(statearr_21604[(11)] = inst_21553);

(statearr_21604[(12)] = inst_21554);

return statearr_21604;
})();
var statearr_21605_21646 = state_21601__$1;
(statearr_21605_21646[(2)] = null);

(statearr_21605_21646[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (1))){
var state_21601__$1 = state_21601;
var statearr_21606_21647 = state_21601__$1;
(statearr_21606_21647[(2)] = null);

(statearr_21606_21647[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (4))){
var inst_21542 = (state_21601[(13)]);
var inst_21542__$1 = (state_21601[(2)]);
var inst_21543 = (inst_21542__$1 == null);
var state_21601__$1 = (function (){var statearr_21607 = state_21601;
(statearr_21607[(13)] = inst_21542__$1);

return statearr_21607;
})();
if(cljs.core.truth_(inst_21543)){
var statearr_21608_21648 = state_21601__$1;
(statearr_21608_21648[(1)] = (5));

} else {
var statearr_21609_21649 = state_21601__$1;
(statearr_21609_21649[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (15))){
var state_21601__$1 = state_21601;
var statearr_21613_21650 = state_21601__$1;
(statearr_21613_21650[(2)] = null);

(statearr_21613_21650[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (21))){
var state_21601__$1 = state_21601;
var statearr_21614_21651 = state_21601__$1;
(statearr_21614_21651[(2)] = null);

(statearr_21614_21651[(1)] = (23));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (13))){
var inst_21556 = (state_21601[(9)]);
var inst_21555 = (state_21601[(10)]);
var inst_21553 = (state_21601[(11)]);
var inst_21554 = (state_21601[(12)]);
var inst_21563 = (state_21601[(2)]);
var inst_21564 = (inst_21556 + (1));
var tmp21610 = inst_21555;
var tmp21611 = inst_21553;
var tmp21612 = inst_21554;
var inst_21553__$1 = tmp21611;
var inst_21554__$1 = tmp21612;
var inst_21555__$1 = tmp21610;
var inst_21556__$1 = inst_21564;
var state_21601__$1 = (function (){var statearr_21615 = state_21601;
(statearr_21615[(9)] = inst_21556__$1);

(statearr_21615[(10)] = inst_21555__$1);

(statearr_21615[(11)] = inst_21553__$1);

(statearr_21615[(12)] = inst_21554__$1);

(statearr_21615[(14)] = inst_21563);

return statearr_21615;
})();
var statearr_21616_21652 = state_21601__$1;
(statearr_21616_21652[(2)] = null);

(statearr_21616_21652[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (22))){
var state_21601__$1 = state_21601;
var statearr_21617_21653 = state_21601__$1;
(statearr_21617_21653[(2)] = null);

(statearr_21617_21653[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (6))){
var inst_21542 = (state_21601[(13)]);
var inst_21551 = (function (){var G__21618 = inst_21542;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21618) : f.call(null,G__21618));
})();
var inst_21552 = cljs.core.seq(inst_21551);
var inst_21553 = inst_21552;
var inst_21554 = null;
var inst_21555 = (0);
var inst_21556 = (0);
var state_21601__$1 = (function (){var statearr_21619 = state_21601;
(statearr_21619[(9)] = inst_21556);

(statearr_21619[(10)] = inst_21555);

(statearr_21619[(11)] = inst_21553);

(statearr_21619[(12)] = inst_21554);

return statearr_21619;
})();
var statearr_21620_21654 = state_21601__$1;
(statearr_21620_21654[(2)] = null);

(statearr_21620_21654[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (17))){
var inst_21567 = (state_21601[(7)]);
var inst_21571 = cljs.core.chunk_first(inst_21567);
var inst_21572 = cljs.core.chunk_rest(inst_21567);
var inst_21573 = cljs.core.count(inst_21571);
var inst_21553 = inst_21572;
var inst_21554 = inst_21571;
var inst_21555 = inst_21573;
var inst_21556 = (0);
var state_21601__$1 = (function (){var statearr_21621 = state_21601;
(statearr_21621[(9)] = inst_21556);

(statearr_21621[(10)] = inst_21555);

(statearr_21621[(11)] = inst_21553);

(statearr_21621[(12)] = inst_21554);

return statearr_21621;
})();
var statearr_21622_21655 = state_21601__$1;
(statearr_21622_21655[(2)] = null);

(statearr_21622_21655[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (3))){
var inst_21599 = (state_21601[(2)]);
var state_21601__$1 = state_21601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21601__$1,inst_21599);
} else {
if((state_val_21602 === (12))){
var inst_21587 = (state_21601[(2)]);
var state_21601__$1 = state_21601;
var statearr_21623_21656 = state_21601__$1;
(statearr_21623_21656[(2)] = inst_21587);

(statearr_21623_21656[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (2))){
var state_21601__$1 = state_21601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21601__$1,(4),in$);
} else {
if((state_val_21602 === (23))){
var inst_21595 = (state_21601[(2)]);
var state_21601__$1 = state_21601;
var statearr_21624_21657 = state_21601__$1;
(statearr_21624_21657[(2)] = inst_21595);

(statearr_21624_21657[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (19))){
var inst_21582 = (state_21601[(2)]);
var state_21601__$1 = state_21601;
var statearr_21625_21658 = state_21601__$1;
(statearr_21625_21658[(2)] = inst_21582);

(statearr_21625_21658[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (11))){
var inst_21553 = (state_21601[(11)]);
var inst_21567 = (state_21601[(7)]);
var inst_21567__$1 = cljs.core.seq(inst_21553);
var state_21601__$1 = (function (){var statearr_21626 = state_21601;
(statearr_21626[(7)] = inst_21567__$1);

return statearr_21626;
})();
if(inst_21567__$1){
var statearr_21627_21659 = state_21601__$1;
(statearr_21627_21659[(1)] = (14));

} else {
var statearr_21628_21660 = state_21601__$1;
(statearr_21628_21660[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (9))){
var inst_21589 = (state_21601[(2)]);
var inst_21590 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_21601__$1 = (function (){var statearr_21629 = state_21601;
(statearr_21629[(15)] = inst_21589);

return statearr_21629;
})();
if(cljs.core.truth_(inst_21590)){
var statearr_21630_21661 = state_21601__$1;
(statearr_21630_21661[(1)] = (21));

} else {
var statearr_21631_21662 = state_21601__$1;
(statearr_21631_21662[(1)] = (22));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (5))){
var inst_21545 = cljs.core.async.close_BANG_(out);
var state_21601__$1 = state_21601;
var statearr_21632_21663 = state_21601__$1;
(statearr_21632_21663[(2)] = inst_21545);

(statearr_21632_21663[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (14))){
var inst_21567 = (state_21601[(7)]);
var inst_21569 = cljs.core.chunked_seq_QMARK_(inst_21567);
var state_21601__$1 = state_21601;
if(inst_21569){
var statearr_21633_21664 = state_21601__$1;
(statearr_21633_21664[(1)] = (17));

} else {
var statearr_21634_21665 = state_21601__$1;
(statearr_21634_21665[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (16))){
var inst_21585 = (state_21601[(2)]);
var state_21601__$1 = state_21601;
var statearr_21635_21666 = state_21601__$1;
(statearr_21635_21666[(2)] = inst_21585);

(statearr_21635_21666[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21602 === (10))){
var inst_21556 = (state_21601[(9)]);
var inst_21554 = (state_21601[(12)]);
var inst_21561 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21554,inst_21556);
var state_21601__$1 = state_21601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21601__$1,(13),out,inst_21561);
} else {
if((state_val_21602 === (18))){
var inst_21567 = (state_21601[(7)]);
var inst_21576 = cljs.core.first(inst_21567);
var state_21601__$1 = state_21601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21601__$1,(20),out,inst_21576);
} else {
if((state_val_21602 === (8))){
var inst_21556 = (state_21601[(9)]);
var inst_21555 = (state_21601[(10)]);
var inst_21558 = (inst_21556 < inst_21555);
var inst_21559 = inst_21558;
var state_21601__$1 = state_21601;
if(cljs.core.truth_(inst_21559)){
var statearr_21636_21667 = state_21601__$1;
(statearr_21636_21667[(1)] = (10));

} else {
var statearr_21637_21668 = state_21601__$1;
(statearr_21637_21668[(1)] = (11));

}

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
}
});})(c__7883__auto__))
;
return ((function (switch__7803__auto__,c__7883__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7804__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7804__auto____0 = (function (){
var statearr_21641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21641[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7804__auto__);

(statearr_21641[(1)] = (1));

return statearr_21641;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7804__auto____1 = (function (state_21601){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_21601);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e21642){if((e21642 instanceof Object)){
var ex__7807__auto__ = e21642;
var statearr_21643_21669 = state_21601;
(statearr_21643_21669[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21601);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e21642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__21670 = state_21601;
state_21601 = G__21670;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7804__auto__ = function(state_21601){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7804__auto____1.call(this,state_21601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7804__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7804__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto__))
})();
var state__7885__auto__ = (function (){var statearr_21644 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_21644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto__);

return statearr_21644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto__))
);

return c__7883__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7883__auto___21775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___21775,out){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___21775,out){
return (function (state_21750){
var state_val_21751 = (state_21750[(1)]);
if((state_val_21751 === (7))){
var inst_21745 = (state_21750[(2)]);
var state_21750__$1 = state_21750;
var statearr_21752_21776 = state_21750__$1;
(statearr_21752_21776[(2)] = inst_21745);

(statearr_21752_21776[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21751 === (1))){
var inst_21727 = null;
var state_21750__$1 = (function (){var statearr_21753 = state_21750;
(statearr_21753[(7)] = inst_21727);

return statearr_21753;
})();
var statearr_21754_21777 = state_21750__$1;
(statearr_21754_21777[(2)] = null);

(statearr_21754_21777[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21751 === (4))){
var inst_21730 = (state_21750[(8)]);
var inst_21730__$1 = (state_21750[(2)]);
var inst_21731 = (inst_21730__$1 == null);
var inst_21732 = cljs.core.not(inst_21731);
var state_21750__$1 = (function (){var statearr_21755 = state_21750;
(statearr_21755[(8)] = inst_21730__$1);

return statearr_21755;
})();
if(inst_21732){
var statearr_21756_21778 = state_21750__$1;
(statearr_21756_21778[(1)] = (5));

} else {
var statearr_21757_21779 = state_21750__$1;
(statearr_21757_21779[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21751 === (6))){
var state_21750__$1 = state_21750;
var statearr_21758_21780 = state_21750__$1;
(statearr_21758_21780[(2)] = null);

(statearr_21758_21780[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21751 === (3))){
var inst_21747 = (state_21750[(2)]);
var inst_21748 = cljs.core.async.close_BANG_(out);
var state_21750__$1 = (function (){var statearr_21759 = state_21750;
(statearr_21759[(9)] = inst_21747);

return statearr_21759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21750__$1,inst_21748);
} else {
if((state_val_21751 === (2))){
var state_21750__$1 = state_21750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21750__$1,(4),ch);
} else {
if((state_val_21751 === (11))){
var inst_21730 = (state_21750[(8)]);
var inst_21739 = (state_21750[(2)]);
var inst_21727 = inst_21730;
var state_21750__$1 = (function (){var statearr_21760 = state_21750;
(statearr_21760[(10)] = inst_21739);

(statearr_21760[(7)] = inst_21727);

return statearr_21760;
})();
var statearr_21761_21781 = state_21750__$1;
(statearr_21761_21781[(2)] = null);

(statearr_21761_21781[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21751 === (9))){
var inst_21730 = (state_21750[(8)]);
var state_21750__$1 = state_21750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21750__$1,(11),out,inst_21730);
} else {
if((state_val_21751 === (5))){
var inst_21730 = (state_21750[(8)]);
var inst_21727 = (state_21750[(7)]);
var inst_21734 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21730,inst_21727);
var state_21750__$1 = state_21750;
if(inst_21734){
var statearr_21763_21782 = state_21750__$1;
(statearr_21763_21782[(1)] = (8));

} else {
var statearr_21764_21783 = state_21750__$1;
(statearr_21764_21783[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21751 === (10))){
var inst_21742 = (state_21750[(2)]);
var state_21750__$1 = state_21750;
var statearr_21765_21784 = state_21750__$1;
(statearr_21765_21784[(2)] = inst_21742);

(statearr_21765_21784[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21751 === (8))){
var inst_21727 = (state_21750[(7)]);
var tmp21762 = inst_21727;
var inst_21727__$1 = tmp21762;
var state_21750__$1 = (function (){var statearr_21766 = state_21750;
(statearr_21766[(7)] = inst_21727__$1);

return statearr_21766;
})();
var statearr_21767_21785 = state_21750__$1;
(statearr_21767_21785[(2)] = null);

(statearr_21767_21785[(1)] = (2));


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
});})(c__7883__auto___21775,out))
;
return ((function (switch__7803__auto__,c__7883__auto___21775,out){
return (function() {
var cljs$core$async$unique_$_state_machine__7804__auto__ = null;
var cljs$core$async$unique_$_state_machine__7804__auto____0 = (function (){
var statearr_21771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21771[(0)] = cljs$core$async$unique_$_state_machine__7804__auto__);

(statearr_21771[(1)] = (1));

return statearr_21771;
});
var cljs$core$async$unique_$_state_machine__7804__auto____1 = (function (state_21750){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_21750);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e21772){if((e21772 instanceof Object)){
var ex__7807__auto__ = e21772;
var statearr_21773_21786 = state_21750;
(statearr_21773_21786[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21750);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e21772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__21787 = state_21750;
state_21750 = G__21787;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__7804__auto__ = function(state_21750){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__7804__auto____1.call(this,state_21750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__7804__auto____0;
cljs$core$async$unique_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__7804__auto____1;
return cljs$core$async$unique_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___21775,out))
})();
var state__7885__auto__ = (function (){var statearr_21774 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_21774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___21775);

return statearr_21774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___21775,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7883__auto___21925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___21925,out){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___21925,out){
return (function (state_21895){
var state_val_21896 = (state_21895[(1)]);
if((state_val_21896 === (7))){
var inst_21891 = (state_21895[(2)]);
var state_21895__$1 = state_21895;
var statearr_21897_21926 = state_21895__$1;
(statearr_21897_21926[(2)] = inst_21891);

(statearr_21897_21926[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21896 === (1))){
var inst_21858 = (new Array(n));
var inst_21859 = inst_21858;
var inst_21860 = (0);
var state_21895__$1 = (function (){var statearr_21898 = state_21895;
(statearr_21898[(7)] = inst_21860);

(statearr_21898[(8)] = inst_21859);

return statearr_21898;
})();
var statearr_21899_21927 = state_21895__$1;
(statearr_21899_21927[(2)] = null);

(statearr_21899_21927[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21896 === (4))){
var inst_21863 = (state_21895[(9)]);
var inst_21863__$1 = (state_21895[(2)]);
var inst_21864 = (inst_21863__$1 == null);
var inst_21865 = cljs.core.not(inst_21864);
var state_21895__$1 = (function (){var statearr_21900 = state_21895;
(statearr_21900[(9)] = inst_21863__$1);

return statearr_21900;
})();
if(inst_21865){
var statearr_21901_21928 = state_21895__$1;
(statearr_21901_21928[(1)] = (5));

} else {
var statearr_21902_21929 = state_21895__$1;
(statearr_21902_21929[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21896 === (15))){
var inst_21885 = (state_21895[(2)]);
var state_21895__$1 = state_21895;
var statearr_21903_21930 = state_21895__$1;
(statearr_21903_21930[(2)] = inst_21885);

(statearr_21903_21930[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21896 === (13))){
var state_21895__$1 = state_21895;
var statearr_21904_21931 = state_21895__$1;
(statearr_21904_21931[(2)] = null);

(statearr_21904_21931[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21896 === (6))){
var inst_21860 = (state_21895[(7)]);
var inst_21881 = (inst_21860 > (0));
var state_21895__$1 = state_21895;
if(cljs.core.truth_(inst_21881)){
var statearr_21905_21932 = state_21895__$1;
(statearr_21905_21932[(1)] = (12));

} else {
var statearr_21906_21933 = state_21895__$1;
(statearr_21906_21933[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21896 === (3))){
var inst_21893 = (state_21895[(2)]);
var state_21895__$1 = state_21895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21895__$1,inst_21893);
} else {
if((state_val_21896 === (12))){
var inst_21859 = (state_21895[(8)]);
var inst_21883 = cljs.core.vec(inst_21859);
var state_21895__$1 = state_21895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21895__$1,(15),out,inst_21883);
} else {
if((state_val_21896 === (2))){
var state_21895__$1 = state_21895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21895__$1,(4),ch);
} else {
if((state_val_21896 === (11))){
var inst_21875 = (state_21895[(2)]);
var inst_21876 = (new Array(n));
var inst_21859 = inst_21876;
var inst_21860 = (0);
var state_21895__$1 = (function (){var statearr_21907 = state_21895;
(statearr_21907[(10)] = inst_21875);

(statearr_21907[(7)] = inst_21860);

(statearr_21907[(8)] = inst_21859);

return statearr_21907;
})();
var statearr_21908_21934 = state_21895__$1;
(statearr_21908_21934[(2)] = null);

(statearr_21908_21934[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21896 === (9))){
var inst_21859 = (state_21895[(8)]);
var inst_21873 = cljs.core.vec(inst_21859);
var state_21895__$1 = state_21895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21895__$1,(11),out,inst_21873);
} else {
if((state_val_21896 === (5))){
var inst_21863 = (state_21895[(9)]);
var inst_21860 = (state_21895[(7)]);
var inst_21868 = (state_21895[(11)]);
var inst_21859 = (state_21895[(8)]);
var inst_21867 = (inst_21859[inst_21860] = inst_21863);
var inst_21868__$1 = (inst_21860 + (1));
var inst_21869 = (inst_21868__$1 < n);
var state_21895__$1 = (function (){var statearr_21909 = state_21895;
(statearr_21909[(11)] = inst_21868__$1);

(statearr_21909[(12)] = inst_21867);

return statearr_21909;
})();
if(cljs.core.truth_(inst_21869)){
var statearr_21910_21935 = state_21895__$1;
(statearr_21910_21935[(1)] = (8));

} else {
var statearr_21911_21936 = state_21895__$1;
(statearr_21911_21936[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21896 === (14))){
var inst_21888 = (state_21895[(2)]);
var inst_21889 = cljs.core.async.close_BANG_(out);
var state_21895__$1 = (function (){var statearr_21913 = state_21895;
(statearr_21913[(13)] = inst_21888);

return statearr_21913;
})();
var statearr_21914_21937 = state_21895__$1;
(statearr_21914_21937[(2)] = inst_21889);

(statearr_21914_21937[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21896 === (10))){
var inst_21879 = (state_21895[(2)]);
var state_21895__$1 = state_21895;
var statearr_21915_21938 = state_21895__$1;
(statearr_21915_21938[(2)] = inst_21879);

(statearr_21915_21938[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21896 === (8))){
var inst_21868 = (state_21895[(11)]);
var inst_21859 = (state_21895[(8)]);
var tmp21912 = inst_21859;
var inst_21859__$1 = tmp21912;
var inst_21860 = inst_21868;
var state_21895__$1 = (function (){var statearr_21916 = state_21895;
(statearr_21916[(7)] = inst_21860);

(statearr_21916[(8)] = inst_21859__$1);

return statearr_21916;
})();
var statearr_21917_21939 = state_21895__$1;
(statearr_21917_21939[(2)] = null);

(statearr_21917_21939[(1)] = (2));


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
}
}
}
}
});})(c__7883__auto___21925,out))
;
return ((function (switch__7803__auto__,c__7883__auto___21925,out){
return (function() {
var cljs$core$async$partition_$_state_machine__7804__auto__ = null;
var cljs$core$async$partition_$_state_machine__7804__auto____0 = (function (){
var statearr_21921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21921[(0)] = cljs$core$async$partition_$_state_machine__7804__auto__);

(statearr_21921[(1)] = (1));

return statearr_21921;
});
var cljs$core$async$partition_$_state_machine__7804__auto____1 = (function (state_21895){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_21895);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e21922){if((e21922 instanceof Object)){
var ex__7807__auto__ = e21922;
var statearr_21923_21940 = state_21895;
(statearr_21923_21940[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21895);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e21922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__21941 = state_21895;
state_21895 = G__21941;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__7804__auto__ = function(state_21895){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__7804__auto____1.call(this,state_21895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__7804__auto____0;
cljs$core$async$partition_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__7804__auto____1;
return cljs$core$async$partition_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___21925,out))
})();
var state__7885__auto__ = (function (){var statearr_21924 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_21924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___21925);

return statearr_21924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___21925,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7883__auto___22089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7883__auto___22089,out){
return (function (){
var f__7884__auto__ = (function (){var switch__7803__auto__ = ((function (c__7883__auto___22089,out){
return (function (state_22058){
var state_val_22059 = (state_22058[(1)]);
if((state_val_22059 === (7))){
var inst_22054 = (state_22058[(2)]);
var state_22058__$1 = state_22058;
var statearr_22060_22090 = state_22058__$1;
(statearr_22060_22090[(2)] = inst_22054);

(statearr_22060_22090[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22059 === (1))){
var inst_22017 = [];
var inst_22018 = inst_22017;
var inst_22019 = cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing;
var state_22058__$1 = (function (){var statearr_22061 = state_22058;
(statearr_22061[(7)] = inst_22019);

(statearr_22061[(8)] = inst_22018);

return statearr_22061;
})();
var statearr_22062_22091 = state_22058__$1;
(statearr_22062_22091[(2)] = null);

(statearr_22062_22091[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22059 === (4))){
var inst_22022 = (state_22058[(9)]);
var inst_22022__$1 = (state_22058[(2)]);
var inst_22023 = (inst_22022__$1 == null);
var inst_22024 = cljs.core.not(inst_22023);
var state_22058__$1 = (function (){var statearr_22063 = state_22058;
(statearr_22063[(9)] = inst_22022__$1);

return statearr_22063;
})();
if(inst_22024){
var statearr_22064_22092 = state_22058__$1;
(statearr_22064_22092[(1)] = (5));

} else {
var statearr_22065_22093 = state_22058__$1;
(statearr_22065_22093[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22059 === (15))){
var inst_22048 = (state_22058[(2)]);
var state_22058__$1 = state_22058;
var statearr_22066_22094 = state_22058__$1;
(statearr_22066_22094[(2)] = inst_22048);

(statearr_22066_22094[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22059 === (13))){
var state_22058__$1 = state_22058;
var statearr_22067_22095 = state_22058__$1;
(statearr_22067_22095[(2)] = null);

(statearr_22067_22095[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22059 === (6))){
var inst_22018 = (state_22058[(8)]);
var inst_22043 = inst_22018.length;
var inst_22044 = (inst_22043 > (0));
var state_22058__$1 = state_22058;
if(cljs.core.truth_(inst_22044)){
var statearr_22068_22096 = state_22058__$1;
(statearr_22068_22096[(1)] = (12));

} else {
var statearr_22069_22097 = state_22058__$1;
(statearr_22069_22097[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22059 === (3))){
var inst_22056 = (state_22058[(2)]);
var state_22058__$1 = state_22058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22058__$1,inst_22056);
} else {
if((state_val_22059 === (12))){
var inst_22018 = (state_22058[(8)]);
var inst_22046 = cljs.core.vec(inst_22018);
var state_22058__$1 = state_22058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22058__$1,(15),out,inst_22046);
} else {
if((state_val_22059 === (2))){
var state_22058__$1 = state_22058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22058__$1,(4),ch);
} else {
if((state_val_22059 === (11))){
var inst_22026 = (state_22058[(10)]);
var inst_22022 = (state_22058[(9)]);
var inst_22036 = (state_22058[(2)]);
var inst_22037 = [];
var inst_22038 = inst_22037.push(inst_22022);
var inst_22018 = inst_22037;
var inst_22019 = inst_22026;
var state_22058__$1 = (function (){var statearr_22070 = state_22058;
(statearr_22070[(7)] = inst_22019);

(statearr_22070[(11)] = inst_22036);

(statearr_22070[(8)] = inst_22018);

(statearr_22070[(12)] = inst_22038);

return statearr_22070;
})();
var statearr_22071_22098 = state_22058__$1;
(statearr_22071_22098[(2)] = null);

(statearr_22071_22098[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22059 === (9))){
var inst_22018 = (state_22058[(8)]);
var inst_22034 = cljs.core.vec(inst_22018);
var state_22058__$1 = state_22058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22058__$1,(11),out,inst_22034);
} else {
if((state_val_22059 === (5))){
var inst_22019 = (state_22058[(7)]);
var inst_22026 = (state_22058[(10)]);
var inst_22022 = (state_22058[(9)]);
var inst_22026__$1 = (function (){var G__22072 = inst_22022;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22072) : f.call(null,G__22072));
})();
var inst_22027 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22026__$1,inst_22019);
var inst_22028 = cljs.core.keyword_identical_QMARK_(inst_22019,cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing);
var inst_22029 = (inst_22027) || (inst_22028);
var state_22058__$1 = (function (){var statearr_22073 = state_22058;
(statearr_22073[(10)] = inst_22026__$1);

return statearr_22073;
})();
if(cljs.core.truth_(inst_22029)){
var statearr_22074_22099 = state_22058__$1;
(statearr_22074_22099[(1)] = (8));

} else {
var statearr_22075_22100 = state_22058__$1;
(statearr_22075_22100[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22059 === (14))){
var inst_22051 = (state_22058[(2)]);
var inst_22052 = cljs.core.async.close_BANG_(out);
var state_22058__$1 = (function (){var statearr_22077 = state_22058;
(statearr_22077[(13)] = inst_22051);

return statearr_22077;
})();
var statearr_22078_22101 = state_22058__$1;
(statearr_22078_22101[(2)] = inst_22052);

(statearr_22078_22101[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22059 === (10))){
var inst_22041 = (state_22058[(2)]);
var state_22058__$1 = state_22058;
var statearr_22079_22102 = state_22058__$1;
(statearr_22079_22102[(2)] = inst_22041);

(statearr_22079_22102[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22059 === (8))){
var inst_22018 = (state_22058[(8)]);
var inst_22026 = (state_22058[(10)]);
var inst_22022 = (state_22058[(9)]);
var inst_22031 = inst_22018.push(inst_22022);
var tmp22076 = inst_22018;
var inst_22018__$1 = tmp22076;
var inst_22019 = inst_22026;
var state_22058__$1 = (function (){var statearr_22080 = state_22058;
(statearr_22080[(7)] = inst_22019);

(statearr_22080[(8)] = inst_22018__$1);

(statearr_22080[(14)] = inst_22031);

return statearr_22080;
})();
var statearr_22081_22103 = state_22058__$1;
(statearr_22081_22103[(2)] = null);

(statearr_22081_22103[(1)] = (2));


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
}
}
}
}
});})(c__7883__auto___22089,out))
;
return ((function (switch__7803__auto__,c__7883__auto___22089,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__7804__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__7804__auto____0 = (function (){
var statearr_22085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22085[(0)] = cljs$core$async$partition_by_$_state_machine__7804__auto__);

(statearr_22085[(1)] = (1));

return statearr_22085;
});
var cljs$core$async$partition_by_$_state_machine__7804__auto____1 = (function (state_22058){
while(true){
var ret_value__7805__auto__ = (function (){try{while(true){
var result__7806__auto__ = switch__7803__auto__(state_22058);
if(cljs.core.keyword_identical_QMARK_(result__7806__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7806__auto__;
}
break;
}
}catch (e22086){if((e22086 instanceof Object)){
var ex__7807__auto__ = e22086;
var statearr_22087_22104 = state_22058;
(statearr_22087_22104[(5)] = ex__7807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22058);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e22086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7805__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__22105 = state_22058;
state_22058 = G__22105;
continue;
} else {
return ret_value__7805__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__7804__auto__ = function(state_22058){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__7804__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__7804__auto____1.call(this,state_22058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__7804__auto____0;
cljs$core$async$partition_by_$_state_machine__7804__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__7804__auto____1;
return cljs$core$async$partition_by_$_state_machine__7804__auto__;
})()
;})(switch__7803__auto__,c__7883__auto___22089,out))
})();
var state__7885__auto__ = (function (){var statearr_22088 = (function (){return (f__7884__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7884__auto__.cljs$core$IFn$_invoke$arity$0() : f__7884__auto__.call(null));
})();
(statearr_22088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7883__auto___22089);

return statearr_22088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7885__auto__);
});})(c__7883__auto___22089,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;
