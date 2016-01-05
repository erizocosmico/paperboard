// Compiled by ClojureScript 0.0-3058 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj22338 = {};
return obj22338;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.display_name[(function (){var G__22342 = x__4720__auto__;
return goog.typeOf(G__22342);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.display_name["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj22344 = {};
return obj22344;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.init_state[(function (){var G__22348 = x__4720__auto__;
return goog.typeOf(G__22348);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.init_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj22350 = {};
return obj22350;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.should_update[(function (){var G__22354 = x__4720__auto__;
return goog.typeOf(G__22354);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.should_update["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj22356 = {};
return obj22356;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_mount[(function (){var G__22360 = x__4720__auto__;
return goog.typeOf(G__22360);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_mount["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj22362 = {};
return obj22362;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.did_mount[(function (){var G__22366 = x__4720__auto__;
return goog.typeOf(G__22366);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.did_mount["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj22368 = {};
return obj22368;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_unmount[(function (){var G__22372 = x__4720__auto__;
return goog.typeOf(G__22372);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_unmount["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj22374 = {};
return obj22374;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_update[(function (){var G__22378 = x__4720__auto__;
return goog.typeOf(G__22378);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_update["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj22380 = {};
return obj22380;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.did_update[(function (){var G__22384 = x__4720__auto__;
return goog.typeOf(G__22384);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.did_update["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj22386 = {};
return obj22386;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_receive_props[(function (){var G__22390 = x__4720__auto__;
return goog.typeOf(G__22390);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj22392 = {};
return obj22392;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.render[(function (){var G__22396 = x__4720__auto__;
return goog.typeOf(G__22396);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.render["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj22398 = {};
return obj22398;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.render_props[(function (){var G__22402 = x__4720__auto__;
return goog.typeOf(G__22402);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.render_props["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj22404 = {};
return obj22404;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.render_state[(function (){var G__22408 = x__4720__auto__;
return goog.typeOf(G__22408);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.render_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj22410 = {};
return obj22410;
})();


om.core.IOmSwap = (function (){var obj22412 = {};
return obj22412;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._om_swap_BANG_[(function (){var G__22416 = x__4720__auto__;
return goog.typeOf(G__22416);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj22418 = {};
return obj22418;
})();

om.core._get_state = (function() {
var om$core$_get_state = null;
var om$core$_get_state__1 = (function (this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_state[(function (){var G__22424 = x__4720__auto__;
return goog.typeOf(G__22424);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var om$core$_get_state__2 = (function (this$,ks){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_state[(function (){var G__22426 = x__4720__auto__;
return goog.typeOf(G__22426);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
om$core$_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return om$core$_get_state__1.call(this,this$);
case 2:
return om$core$_get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_get_state.cljs$core$IFn$_invoke$arity$1 = om$core$_get_state__1;
om$core$_get_state.cljs$core$IFn$_invoke$arity$2 = om$core$_get_state__2;
return om$core$_get_state;
})()
;


om.core.IGetRenderState = (function (){var obj22428 = {};
return obj22428;
})();

om.core._get_render_state = (function() {
var om$core$_get_render_state = null;
var om$core$_get_render_state__1 = (function (this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_render_state[(function (){var G__22434 = x__4720__auto__;
return goog.typeOf(G__22434);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_render_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var om$core$_get_render_state__2 = (function (this$,ks){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_render_state[(function (){var G__22436 = x__4720__auto__;
return goog.typeOf(G__22436);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_render_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
om$core$_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return om$core$_get_render_state__1.call(this,this$);
case 2:
return om$core$_get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_get_render_state.cljs$core$IFn$_invoke$arity$1 = om$core$_get_render_state__1;
om$core$_get_render_state.cljs$core$IFn$_invoke$arity$2 = om$core$_get_render_state__2;
return om$core$_get_render_state;
})()
;


om.core.ISetState = (function (){var obj22438 = {};
return obj22438;
})();

om.core._set_state_BANG_ = (function() {
var om$core$_set_state_BANG_ = null;
var om$core$_set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._set_state_BANG_[(function (){var G__22444 = x__4720__auto__;
return goog.typeOf(G__22444);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var om$core$_set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._set_state_BANG_[(function (){var G__22446 = x__4720__auto__;
return goog.typeOf(G__22446);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
om$core$_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return om$core$_set_state_BANG___3.call(this,this$,ks,val);
case 4:
return om$core$_set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$_set_state_BANG___3;
om$core$_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$_set_state_BANG___4;
return om$core$_set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj22448 = {};
return obj22448;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_queue[(function (){var G__22452 = x__4720__auto__;
return goog.typeOf(G__22452);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_queue["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._queue_render_BANG_[(function (){var G__22456 = x__4720__auto__;
return goog.typeOf(G__22456);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._empty_queue_BANG_[(function (){var G__22460 = x__4720__auto__;
return goog.typeOf(G__22460);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj22462 = {};
return obj22462;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._value[(function (){var G__22466 = x__4720__auto__;
return goog.typeOf(G__22466);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._value["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj22468 = {};
return obj22468;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._path[(function (){var G__22472 = x__4720__auto__;
return goog.typeOf(G__22472);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._path["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._state[(function (){var G__22476 = x__4720__auto__;
return goog.typeOf(G__22476);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj22478 = {};
return obj22478;
})();

om.core._to_cursor = (function() {
var om$core$_to_cursor = null;
var om$core$_to_cursor__2 = (function (value,state){
if((function (){var and__4064__auto__ = value;
if(and__4064__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4064__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4720__auto__ = (((value == null))?null:value);
return (function (){var or__4076__auto__ = (om.core._to_cursor[(function (){var G__22484 = x__4720__auto__;
return goog.typeOf(G__22484);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._to_cursor["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var om$core$_to_cursor__3 = (function (value,state,path){
if((function (){var and__4064__auto__ = value;
if(and__4064__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4064__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4720__auto__ = (((value == null))?null:value);
return (function (){var or__4076__auto__ = (om.core._to_cursor[(function (){var G__22486 = x__4720__auto__;
return goog.typeOf(G__22486);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._to_cursor["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
om$core$_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return om$core$_to_cursor__2.call(this,value,state);
case 3:
return om$core$_to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_to_cursor.cljs$core$IFn$_invoke$arity$2 = om$core$_to_cursor__2;
om$core$_to_cursor.cljs$core$IFn$_invoke$arity$3 = om$core$_to_cursor__3;
return om$core$_to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj22488 = {};
return obj22488;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._derive[(function (){var G__22492 = x__4720__auto__;
return goog.typeOf(G__22492);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._derive["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__22493 = derived;
var G__22494 = state;
var G__22495 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__22493,G__22494,G__22495) : om.core.to_cursor.call(null,G__22493,G__22494,G__22495));
}));
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value(cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state(cursor);
});

om.core.ITransact = (function (){var obj22497 = {};
return obj22497;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._transact_BANG_[(function (){var G__22501 = x__4720__auto__;
return goog.typeOf(G__22501);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj22503 = {};
return obj22503;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._listen_BANG_[(function (){var G__22507 = x__4720__auto__;
return goog.typeOf(G__22507);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._unlisten_BANG_[(function (){var G__22511 = x__4720__auto__;
return goog.typeOf(G__22511);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._notify_BANG_[(function (){var G__22515 = x__4720__auto__;
return goog.typeOf(G__22515);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj22517 = {};
return obj22517;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._set_property_BANG_[(function (){var G__22521 = x__4720__auto__;
return goog.typeOf(G__22521);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._remove_property_BANG_[(function (){var G__22525 = x__4720__auto__;
return goog.typeOf(G__22525);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._remove_properties_BANG_[(function (){var G__22529 = x__4720__auto__;
return goog.typeOf(G__22529);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_property[(function (){var G__22533 = x__4720__auto__;
return goog.typeOf(G__22533);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_property["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj22535 = {};
return obj22535;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._root_key[(function (){var G__22539 = x__4720__auto__;
return goog.typeOf(G__22539);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._root_key["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj22541 = {};
return obj22541;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._adapt[(function (){var G__22545 = x__4720__auto__;
return goog.typeOf(G__22545);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._adapt["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt(x,other);
});

om.core.IOmRef = (function (){var obj22547 = {};
return obj22547;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._add_dep_BANG_[(function (){var G__22551 = x__4720__auto__;
return goog.typeOf(G__22551);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._remove_dep_BANG_[(function (){var G__22555 = x__4720__auto__;
return goog.typeOf(G__22555);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__22559 = x__4720__auto__;
return goog.typeOf(G__22559);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_deps[(function (){var G__22563 = x__4720__auto__;
return goog.typeOf(G__22563);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_deps["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__22573 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22573) : cljs.core.deref.call(null,G__22573));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__22574 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22574) : om.core.path.call(null,G__22574));
})(),korks);
var ret = (((function (){var G__22575 = state;
if(G__22575){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22575.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__22575.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__22575);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__22575);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$_COLON_om$core_SLASH_defer)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$_COLON_path,path,cljs.core.constant$keyword$_COLON_old_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$_COLON_new_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22576 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22576) : cljs.core.deref.call(null,G__22576));
})(),path),cljs.core.constant$keyword$_COLON_old_state,old_state,cljs.core.constant$keyword$_COLON_new_state,(function (){var G__22577 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22577) : cljs.core.deref.call(null,G__22577));
})()], null);
if(!((tag == null))){
var G__22578 = cursor;
var G__22579 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$_COLON_tag,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__22578,G__22579) : om.core.notify_STAR_.call(null,G__22578,G__22579));
} else {
var G__22580 = cursor;
var G__22581 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__22580,G__22581) : om.core.notify_STAR_.call(null,G__22580,G__22581));
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__22583 = x;
if(G__22583){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22583.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__22583.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__22583);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__22583);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__22585 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__22585) : c.call(null,G__22585));
})();
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function() {
var om$core$get_props = null;
var om$core$get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

return (x.props["__om_cursor"]);
});
var om$core$get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__22587 = (x.props["__om_cursor"]);
var G__22587__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__22587,korks__$1):G__22587);
return G__22587__$1;
});
om$core$get_props = function(x,korks){
switch(arguments.length){
case 1:
return om$core$get_props__1.call(this,x);
case 2:
return om$core$get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_props.cljs$core$IFn$_invoke$arity$1 = om$core$get_props__1;
om$core$get_props.cljs$core$IFn$_invoke$arity$2 = om$core$get_props__2;
return om$core$get_props;
})()
;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function() {
var om$core$get_state = null;
var om$core$get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var om$core$get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
om$core$get_state = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_state__1.call(this,owner);
case 2:
return om$core$get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_state.cljs$core$IFn$_invoke$arity$1 = om$core$get_state__1;
om$core$get_state.cljs$core$IFn$_invoke$arity$2 = om$core$get_state__2;
return om$core$get_state;
})()
;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function() {
var om$core$get_shared = null;
var om$core$get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var om$core$get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om$core$get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om$core$get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om$core$get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
om$core$get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_shared__1.call(this,owner);
case 2:
return om$core$get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_shared.cljs$core$IFn$_invoke$arity$1 = om$core$get_shared__1;
om$core$get_shared.cljs$core$IFn$_invoke$arity$2 = om$core$get_shared__2;
return om$core$get_shared;
})()
;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__22592 = state;
(G__22592["__om_prev_state"] = (state["__om_state"]));

(G__22592["__om_state"] = pending_state);

(G__22592["__om_pending_state"] = null);

return G__22592;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var om$core$merge_props_state = null;
var om$core$merge_props_state__1 = (function (owner){
return om$core$merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var om$core$merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__4076__auto__ = props;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__4076__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
om$core$merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return om$core$merge_props_state__1.call(this,owner);
case 2:
return om$core$merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$merge_props_state.cljs$core$IFn$_invoke$arity$1 = om$core$merge_props_state__1;
om$core$merge_props_state.cljs$core$IFn$_invoke$arity$2 = om$core$merge_props_state__2;
return om$core$merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__22597 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22597) : cljs.core.deref.call(null,G__22597));
})(),(function (){var G__22598 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22598) : om.core.path.call(null,G__22598));
})(),cljs.core.constant$keyword$_COLON_om$core_SLASH_not_found);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = (function (){var G__22604 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22604) : om.core.path.call(null,G__22604));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__22605 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22605) : cljs.core.deref.call(null,G__22605));
})(),ref_path,cljs.core.constant$keyword$_COLON_om$core_SLASH_not_found);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$_COLON_om$core_SLASH_not_found)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__22606 = ref_val_SINGLEQUOTE_;
var G__22607 = ref_state;
var G__22608 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__22606,G__22607,G__22608) : om.core.to_cursor.call(null,G__22606,G__22607,G__22608));
})());
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$_COLON_componentDidUpdate,cljs.core.constant$keyword$_COLON_isOmComponent,cljs.core.constant$keyword$_COLON_componentWillUnmount,cljs.core.constant$keyword$_COLON_componentWillReceiveProps,cljs.core.constant$keyword$_COLON_shouldComponentUpdate,cljs.core.constant$keyword$_COLON_render,cljs.core.constant$keyword$_COLON_componentWillUpdate,cljs.core.constant$keyword$_COLON_getInitialState,cljs.core.constant$keyword$_COLON_componentDidMount,cljs.core.constant$keyword$_COLON_getDisplayName,cljs.core.constant$keyword$_COLON_componentWillMount],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__22610 = c;
if(G__22610){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22610.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__22610.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22610);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22610);
}
})()){
var state_22635 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__4076__auto__ = (state_22635["__om_prev_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (state_22635["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__22611 = c;
if(G__22611){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22611.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__22611.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22611);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22611);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__22612 = cljs.core.seq(refs);
var chunk__22613 = null;
var count__22614 = (0);
var i__22615 = (0);
while(true){
if((i__22615 < count__22614)){
var ref = chunk__22613.cljs$core$IIndexed$_nth$arity$2(null,i__22615);
var G__22616_22636 = this$;
var G__22617_22637 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__22616_22636,G__22617_22637) : om.core.unobserve.call(null,G__22616_22636,G__22617_22637));

var G__22638 = seq__22612;
var G__22639 = chunk__22613;
var G__22640 = count__22614;
var G__22641 = (i__22615 + (1));
seq__22612 = G__22638;
chunk__22613 = G__22639;
count__22614 = G__22640;
i__22615 = G__22641;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__22612);
if(temp__4126__auto____$1){
var seq__22612__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22612__$1)){
var c__4863__auto__ = cljs.core.chunk_first(seq__22612__$1);
var G__22642 = cljs.core.chunk_rest(seq__22612__$1);
var G__22643 = c__4863__auto__;
var G__22644 = cljs.core.count(c__4863__auto__);
var G__22645 = (0);
seq__22612 = G__22642;
chunk__22613 = G__22643;
count__22614 = G__22644;
i__22615 = G__22645;
continue;
} else {
var ref = cljs.core.first(seq__22612__$1);
var G__22618_22646 = this$;
var G__22619_22647 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__22618_22646,G__22619_22647) : om.core.unobserve.call(null,G__22618_22646,G__22619_22647));

var G__22648 = cljs.core.next(seq__22612__$1);
var G__22649 = null;
var G__22650 = (0);
var G__22651 = (0);
seq__22612 = G__22648;
chunk__22613 = G__22649;
count__22614 = G__22650;
i__22615 = G__22651;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__22620 = c;
if(G__22620){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22620.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__22620.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__22620);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__22620);
}
})()){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__22621 = c;
if(G__22621){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22621.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__22621.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__22621);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__22621);
}
})()){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__4064__auto__){
return cljs.core.some(((function (and__4064__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__22609_SHARP_){
return om.core.ref_changed_QMARK_(p1__22609_SHARP_);
});})(and__4064__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4064__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_22622 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_22623 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_22624 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_22625 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_22626 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__22627 = c;
if(G__22627){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22627.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__22627.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22627);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22627);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__22628 = c;
if(G__22628){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22628.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__22628.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22628);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22628);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__22629 = c;
if(G__22629){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22629.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__22629.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22629);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22629);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_22626;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_22625;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_22624;

om.core._STAR_state_STAR_ = _STAR_state_STAR_22623;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_22622;
}}),(function (next_props,next_state){
var this$ = this;
var c_22652 = om.core.children(this$);
if((function (){var G__22630 = c_22652;
if(G__22630){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22630.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__22630.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22630);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22630);
}
})()){
var state_22653 = this$.state;
om.core.will_update(c_22652,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4076__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$_COLON_om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__22631 = c;
if(G__22631){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22631.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__22631.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22631);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22631);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$_COLON_om$core_SLASH_id)], 0)), "__om_id": (function (){var or__4076__auto__ = id;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__22632 = c;
if(G__22632){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22632.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__22632.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__22632);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__22632);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__22633 = c;
if(G__22633){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22633.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__22633.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__22633);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__22633);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_22654 = om.core.children(this$);
if((function (){var G__22634 = c_22654;
if(G__22634){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22634.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__22634.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22634);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22634);
}
})()){
om.core.will_mount(c_22654);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x22656 = obj;
x22656.om$core$IGetState$ = true;

x22656.om$core$IGetState$_get_state$arity$1 = ((function (x22656){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4076__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (state["__om_state"]);
}
});})(x22656))
;

x22656.om$core$IGetState$_get_state$arity$2 = ((function (x22656){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22656))
;

x22656.om$core$IGetRenderState$ = true;

x22656.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x22656){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x22656))
;

x22656.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x22656){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22656))
;

x22656.om$core$ISetState$ = true;

x22656.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x22656){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4064__auto__ = !((app_state == null));
if(and__4064__auto__){
return render;
} else {
return and__4064__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x22656))
;

x22656.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x22656){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__4064__auto__ = !((app_state == null));
if(and__4064__auto__){
return render;
} else {
return and__4064__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x22656))
;

return x22656;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22658 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22658) : cljs.core.deref.call(null,G__22658));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_pending_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$_COLON_previous_state,cljs.core.constant$keyword$_COLON_render_state.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$_COLON_render_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$_COLON_render_state.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$_COLON_pending_state.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$_COLON_pending_state);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$_COLON_getInitialState,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4076__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4076__auto__ = cljs.core.constant$keyword$_COLON_om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$_COLON_om$core_SLASH_id),(((function (){var G__22659 = c;
if(G__22659){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22659.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__22659.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22659);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22659);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$),cljs.core.constant$keyword$_COLON_render_state], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$_COLON_componentWillMount,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_22673 = om.core.children(this$);
if((function (){var G__22660 = c_22673;
if(G__22660){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22660.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__22660.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22660);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22660);
}
})()){
om.core.will_mount(c_22673);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$_COLON_componentWillUnmount,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__22661 = c;
if(G__22661){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22661.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__22661.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22661);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22661);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__22662 = cljs.core.seq(refs);
var chunk__22663 = null;
var count__22664 = (0);
var i__22665 = (0);
while(true){
if((i__22665 < count__22664)){
var ref = chunk__22663.cljs$core$IIndexed$_nth$arity$2(null,i__22665);
var G__22666_22674 = this$;
var G__22667_22675 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__22666_22674,G__22667_22675) : om.core.unobserve.call(null,G__22666_22674,G__22667_22675));

var G__22676 = seq__22662;
var G__22677 = chunk__22663;
var G__22678 = count__22664;
var G__22679 = (i__22665 + (1));
seq__22662 = G__22676;
chunk__22663 = G__22677;
count__22664 = G__22678;
i__22665 = G__22679;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__22662);
if(temp__4126__auto____$1){
var seq__22662__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22662__$1)){
var c__4863__auto__ = cljs.core.chunk_first(seq__22662__$1);
var G__22680 = cljs.core.chunk_rest(seq__22662__$1);
var G__22681 = c__4863__auto__;
var G__22682 = cljs.core.count(c__4863__auto__);
var G__22683 = (0);
seq__22662 = G__22680;
chunk__22663 = G__22681;
count__22664 = G__22682;
i__22665 = G__22683;
continue;
} else {
var ref = cljs.core.first(seq__22662__$1);
var G__22668_22684 = this$;
var G__22669_22685 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__22668_22684,G__22669_22685) : om.core.unobserve.call(null,G__22668_22684,G__22669_22685));

var G__22686 = cljs.core.next(seq__22662__$1);
var G__22687 = null;
var G__22688 = (0);
var G__22689 = (0);
seq__22662 = G__22686;
chunk__22663 = G__22687;
count__22664 = G__22688;
i__22665 = G__22689;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.constant$keyword$_COLON_componentWillUpdate,(function (next_props,next_state){
var this$ = this;
var props_22690 = this$.props;
var c_22691 = om.core.children(this$);
if((function (){var G__22670 = c_22691;
if(G__22670){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22670.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__22670.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22670);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22670);
}
})()){
var state_22692 = this$.state;
om.core.will_update(c_22691,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$_COLON_componentDidUpdate,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22671 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22671) : cljs.core.deref.call(null,G__22671));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$)], null);
if((function (){var G__22672 = c;
if(G__22672){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22672.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__22672.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22672);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22672);
}
})()){
var state_22693 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__4076__auto__ = cljs.core.constant$keyword$_COLON_previous_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.constant$keyword$_COLON_render_state.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_previous_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_previous_state], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x22697 = cljs.core.clj__GT_js(methods$);
x22697.om$core$IGetState$ = true;

x22697.om$core$IGetState$_get_state$arity$1 = ((function (x22697){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22698 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22698) : cljs.core.deref.call(null,G__22698));
})(),spath);
var or__4076__auto__ = cljs.core.constant$keyword$_COLON_pending_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.constant$keyword$_COLON_render_state.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x22697))
;

x22697.om$core$IGetState$_get_state$arity$2 = ((function (x22697){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22697))
;

x22697.om$core$IGetRenderState$ = true;

x22697.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x22697){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$__$1),cljs.core.constant$keyword$_COLON_render_state], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22699 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22699) : cljs.core.deref.call(null,G__22699));
})(),spath);
});})(x22697))
;

x22697.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x22697){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22697))
;

x22697.om$core$ISetState$ = true;

x22697.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x22697){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$__$1),cljs.core.constant$keyword$_COLON_pending_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4064__auto__ = !((gstate == null));
if(and__4064__auto__){
return render;
} else {
return and__4064__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x22697))
;

x22697.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x22697){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x22697))
;

return x22697;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__22702 = x;
if(G__22702){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22702.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__22702.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__22702);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__22702);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__22703 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22703) : cljs.core.deref.call(null,G__22703));
})(),cljs.core.constant$keyword$_COLON_om$core_SLASH_invalid));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$_COLON_om$core_SLASH_not_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$_COLON_om$core_SLASH_not_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__22705){
var vec__22706 = p__22705;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22706,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22706,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__22708 = null;
var G__22708__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__22708__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__22708 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__22708__2.call(this,self__,k);
case 3:
return G__22708__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22708.cljs$core$IFn$_invoke$arity$2 = G__22708__2;
G__22708.cljs$core$IFn$_invoke$arity$3 = G__22708__3;
return G__22708;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args22704){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args22704)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__22707 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22707) : cljs.core.deref.call(null,G__22707));
})(),self__.path,cljs.core.constant$keyword$_COLON_om$core_SLASH_invalid);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__22711 = null;
var G__22711__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__22711__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__22711 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__22711__2.call(this,self__,k);
case 3:
return G__22711__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22711.cljs$core$IFn$_invoke$arity$2 = G__22711__2;
G__22711.cljs$core$IFn$_invoke$arity$3 = G__22711__3;
return G__22711;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args22709){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args22709)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__22710 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22710) : cljs.core.deref.call(null,G__22710));
})(),self__.path,cljs.core.constant$keyword$_COLON_om$core_SLASH_invalid);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x22714 = cljs.core.clone(val);
x22714.cljs$core$IEquiv$ = true;

x22714.cljs$core$IEquiv$_equiv$arity$2 = ((function (x22714){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x22714))
;

x22714.om$core$ITransact$ = true;

x22714.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x22714){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x22714))
;

x22714.om$core$ICursor$ = true;

x22714.om$core$ICursor$_path$arity$1 = ((function (x22714){
return (function (_){
var ___$1 = this;
return path;
});})(x22714))
;

x22714.om$core$ICursor$_state$arity$1 = ((function (x22714){
return (function (_){
var ___$1 = this;
return state;
});})(x22714))
;

x22714.cljs$core$IDeref$ = true;

x22714.cljs$core$IDeref$_deref$arity$1 = ((function (x22714){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__22715 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22715) : cljs.core.deref.call(null,G__22715));
})(),path,cljs.core.constant$keyword$_COLON_om$core_SLASH_invalid);
});})(x22714))
;

return x22714;
});
om.core.to_cursor = (function() {
var om$core$to_cursor = null;
var om$core$to_cursor__1 = (function (val){
return om$core$to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var om$core$to_cursor__2 = (function (val,state){
return om$core$to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var om$core$to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_(val)){
return val;
} else {
if((function (){var G__22724 = val;
if(G__22724){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22724.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__22724.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__22724);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__22724);
}
})()){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__22725 = val;
if(G__22725){
var bit__4757__auto__ = (G__22725.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4757__auto__) || (G__22725.cljs$core$ICloneable$)){
return true;
} else {
if((!G__22725.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__22725);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__22725);
}
})()){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});
om$core$to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return om$core$to_cursor__1.call(this,val);
case 2:
return om$core$to_cursor__2.call(this,val,state);
case 3:
return om$core$to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$to_cursor.cljs$core$IFn$_invoke$arity$1 = om$core$to_cursor__1;
om$core$to_cursor.cljs$core$IFn$_invoke$arity$2 = om$core$to_cursor__2;
om$core$to_cursor.cljs$core$IFn$_invoke$arity$3 = om$core$to_cursor__3;
return om$core$to_cursor;
})()
;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__22727 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22727) : cljs.core.deref.call(null,G__22727));
})(),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((function (){var G__22730 = atom;
if(G__22730){
var bit__4757__auto__ = (G__22730.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4757__auto__) || (G__22730.cljs$core$IDeref$)){
return true;
} else {
if((!G__22730.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__22730);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__22730);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__22731 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22731) : cljs.core.deref.call(null,G__22731));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__22732 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22732) : cljs.core.atom.call(null,G__22732));
})();
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x22741 = cljs.core.clone(x);
x22741.om$core$ITransact$ = true;

x22741.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x22741){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__22742_22745 = cursor__$1;
var G__22743_22746 = korks;
var G__22744_22747 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__22742_22745,G__22743_22746,G__22744_22747) : om.core.commit_BANG_.call(null,G__22742_22745,G__22743_22746,G__22744_22747));

return om.core._refresh_deps_BANG_(parent);
});})(x22741))
;

x22741.om$core$ICursorDerive$ = true;

x22741.om$core$ICursorDerive$_derive$arity$4 = ((function (x22741){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x22741))
;

x22741.om$core$IAdapt$ = true;

x22741.om$core$IAdapt$_adapt$arity$2 = ((function (x22741){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x22741))
;

x22741.cljs$core$ICloneable$ = true;

x22741.cljs$core$ICloneable$_clone$arity$1 = ((function (x22741){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor(cljs.core.clone(x),parent);
});})(x22741))
;

return x22741;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if((function (){var G__22763 = cursor;
if(G__22763){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22763.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__22763.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__22763);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__22763);
}
})()){
return cursor;
} else {
var path = (function (){var G__22764 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22764) : om.core.path.call(null,G__22764));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__22765 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22765) : cljs.core.atom.call(null,G__22765));
})())),path);
var x22766 = cljs.core.clone(cursor);
x22766.om$core$ITransact$ = true;

x22766.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x22766,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__22767_22778 = cursor__$2;
var G__22768_22779 = korks;
var G__22769_22780 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__22767_22778,G__22768_22779,G__22769_22780) : om.core.commit_BANG_.call(null,G__22767_22778,G__22768_22779,G__22769_22780));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x22766,path,storage))
;

x22766.om$core$IOmRef$ = true;

x22766.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x22766,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__22770 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__22770) : om.core.id.call(null,G__22770));
})(),c);
});})(x22766,path,storage))
;

x22766.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x22766,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__22771 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__22771) : om.core.id.call(null,G__22771));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x22766,path,storage))
;

x22766.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x22766,path,storage){
return (function (_){
var ___$1 = this;
var seq__22772 = cljs.core.seq(cljs.core.vals((function (){var G__22776 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22776) : cljs.core.deref.call(null,G__22776));
})()));
var chunk__22773 = null;
var count__22774 = (0);
var i__22775 = (0);
while(true){
if((i__22775 < count__22774)){
var c = chunk__22773.cljs$core$IIndexed$_nth$arity$2(null,i__22775);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__22781 = seq__22772;
var G__22782 = chunk__22773;
var G__22783 = count__22774;
var G__22784 = (i__22775 + (1));
seq__22772 = G__22781;
chunk__22773 = G__22782;
count__22774 = G__22783;
i__22775 = G__22784;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__22772);
if(temp__4126__auto__){
var seq__22772__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22772__$1)){
var c__4863__auto__ = cljs.core.chunk_first(seq__22772__$1);
var G__22785 = cljs.core.chunk_rest(seq__22772__$1);
var G__22786 = c__4863__auto__;
var G__22787 = cljs.core.count(c__4863__auto__);
var G__22788 = (0);
seq__22772 = G__22785;
chunk__22773 = G__22786;
count__22774 = G__22787;
i__22775 = G__22788;
continue;
} else {
var c = cljs.core.first(seq__22772__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__22789 = cljs.core.next(seq__22772__$1);
var G__22790 = null;
var G__22791 = (0);
var G__22792 = (0);
seq__22772 = G__22789;
chunk__22773 = G__22790;
count__22774 = G__22791;
i__22775 = G__22792;
continue;
}
} else {
return null;
}
}
break;
}
});})(x22766,path,storage))
;

x22766.om$core$IOmRef$_get_deps$arity$1 = ((function (x22766,path,storage){
return (function (_){
var ___$1 = this;
var G__22777 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22777) : cljs.core.deref.call(null,G__22777));
});})(x22766,path,storage))
;

x22766.om$core$ICursorDerive$ = true;

x22766.om$core$ICursorDerive$_derive$arity$4 = ((function (x22766,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x22766,path,storage))
;

return x22766;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4076__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

if(om.core.cursor_QMARK_(ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))], 0)))].join('')));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__22793 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22793) : cljs.core.atom.call(null,G__22793));
})();
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4076__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function() {
var om$core$render_all = null;
var om$core$render_all__0 = (function (){
return om$core$render_all.cljs$core$IFn$_invoke$arity$1(null);
});
var om$core$render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__22800_22805 = cljs.core.seq((function (){var G__22804 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22804) : cljs.core.deref.call(null,G__22804));
})());
var chunk__22801_22806 = null;
var count__22802_22807 = (0);
var i__22803_22808 = (0);
while(true){
if((i__22803_22808 < count__22802_22807)){
var f_22809 = chunk__22801_22806.cljs$core$IIndexed$_nth$arity$2(null,i__22803_22808);
(f_22809.cljs$core$IFn$_invoke$arity$0 ? f_22809.cljs$core$IFn$_invoke$arity$0() : f_22809.call(null));

var G__22810 = seq__22800_22805;
var G__22811 = chunk__22801_22806;
var G__22812 = count__22802_22807;
var G__22813 = (i__22803_22808 + (1));
seq__22800_22805 = G__22810;
chunk__22801_22806 = G__22811;
count__22802_22807 = G__22812;
i__22803_22808 = G__22813;
continue;
} else {
var temp__4126__auto___22814 = cljs.core.seq(seq__22800_22805);
if(temp__4126__auto___22814){
var seq__22800_22815__$1 = temp__4126__auto___22814;
if(cljs.core.chunked_seq_QMARK_(seq__22800_22815__$1)){
var c__4863__auto___22816 = cljs.core.chunk_first(seq__22800_22815__$1);
var G__22817 = cljs.core.chunk_rest(seq__22800_22815__$1);
var G__22818 = c__4863__auto___22816;
var G__22819 = cljs.core.count(c__4863__auto___22816);
var G__22820 = (0);
seq__22800_22805 = G__22817;
chunk__22801_22806 = G__22818;
count__22802_22807 = G__22819;
i__22803_22808 = G__22820;
continue;
} else {
var f_22821 = cljs.core.first(seq__22800_22815__$1);
(f_22821.cljs$core$IFn$_invoke$arity$0 ? f_22821.cljs$core$IFn$_invoke$arity$0() : f_22821.call(null));

var G__22822 = cljs.core.next(seq__22800_22815__$1);
var G__22823 = null;
var G__22824 = (0);
var G__22825 = (0);
seq__22800_22805 = G__22822;
chunk__22801_22806 = G__22823;
count__22802_22807 = G__22824;
i__22803_22808 = G__22825;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});
om$core$render_all = function(state){
switch(arguments.length){
case 0:
return om$core$render_all__0.call(this);
case 1:
return om$core$render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$render_all.cljs$core$IFn$_invoke$arity$0 = om$core$render_all__0;
om$core$render_all.cljs$core$IFn$_invoke$arity$1 = om$core$render_all__1;
return om$core$render_all;
})()
;
om.core.roots = (function (){var G__22826 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22826) : cljs.core.atom.call(null,G__22826));
})();
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4076__auto__ = (function (){var G__22833 = x;
if(G__22833){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22833.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__22833.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22833);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22833);
}
})();
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (function (){var G__22835 = x;
if(G__22835){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto____$1 = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto____$1)){
return or__4076__auto____$1;
} else {
return G__22835.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__22835.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22835);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22835);
}
})();
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
var G__22836 = x;
if(G__22836){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto____$2 = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto____$2)){
return or__4076__auto____$2;
} else {
return G__22836.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__22836.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22836);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22836);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0)))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$_COLON_descriptor,null,cljs.core.constant$keyword$_COLON_fn,null,cljs.core.constant$keyword$_COLON_instrument,null,cljs.core.constant$keyword$_COLON_react_key,null,cljs.core.constant$keyword$_COLON_key,null,cljs.core.constant$keyword$_COLON_init_state,null,cljs.core.constant$keyword$_COLON_state,null,cljs.core.constant$keyword$_COLON_key_fn,null,cljs.core.constant$keyword$_COLON_opts,null,cljs.core.constant$keyword$_COLON_om$core_SLASH_index,null,cljs.core.constant$keyword$_COLON_shared,null], null), null),cljs.core.keys(m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var om$core$get_descriptor = null;
var om$core$get_descriptor__1 = (function (f){
return om$core$get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var om$core$get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = (function (){var G__22841 = (function (){var G__22842 = (function (){var or__4076__auto__ = descriptor;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4076__auto____$1)){
return or__4076__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__22842);
})();
return React.createFactory(G__22841);
})());
} else {
}

return (f["om$descriptor"]);
});
om$core$get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return om$core$get_descriptor__1.call(this,f);
case 2:
return om$core$get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_descriptor.cljs$core$IFn$_invoke$arity$1 = om$core$get_descriptor__1;
om$core$get_descriptor.cljs$core$IFn$_invoke$arity$2 = om$core$get_descriptor__2;
return om$core$get_descriptor;
})()
;
om.core.getf = (function() {
var om$core$getf = null;
var om$core$getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
var om$core$getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
om$core$getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return om$core$getf__2.call(this,f,cursor);
case 3:
return om$core$getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$getf.cljs$core$IFn$_invoke$arity$2 = om$core$getf__2;
om$core$getf.cljs$core$IFn$_invoke$arity$3 = om$core$getf__3;
return om$core$getf;
})()
;
om.core.build_STAR_ = (function() {
var om$core$build_STAR_ = null;
var om$core$build_STAR___2 = (function (f,cursor){
return om$core$build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var om$core$build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(om.core.valid_opts_QMARK_(m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__22860 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__22861 = cursor;
var G__22862 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22861,G__22862) : f.call(null,G__22861,G__22862));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__22860) : ctor.call(null,G__22860));
} else {
var map__22863 = m;
var map__22863__$1 = ((cljs.core.seq_QMARK_(map__22863))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22863):map__22863);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22863__$1,cljs.core.constant$keyword$_COLON_opts);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22863__$1,cljs.core.constant$keyword$_COLON_init_state);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22863__$1,cljs.core.constant$keyword$_COLON_state);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22863__$1,cljs.core.constant$keyword$_COLON_key_fn);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22863__$1,cljs.core.constant$keyword$_COLON_key);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$_COLON_fn);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$_COLON_om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__22864 = cursor;
var G__22865 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__22864,G__22865) : dataf.call(null,G__22864,G__22865));
} else {
var G__22866 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__22866) : dataf.call(null,G__22866));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__22867 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__22867) : key_fn.call(null,G__22867));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$_COLON_react_key)
));
var shared = (function (){var or__4076__auto__ = cljs.core.constant$keyword$_COLON_shared.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$_COLON_descriptor.cljs$core$IFn$_invoke$arity$1(m));
var G__22868 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__22863,map__22863__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__22869 = cursor_SINGLEQUOTE_;
var G__22870 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22869,G__22870) : f.call(null,G__22869,G__22870));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__22863,map__22863__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__22863,map__22863__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__22871 = cursor_SINGLEQUOTE_;
var G__22872 = this$;
var G__22873 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22871,G__22872,G__22873) : f.call(null,G__22871,G__22872,G__22873));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__22863,map__22863__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4076__auto__ = rkey;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$_COLON_om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__22868) : ctor.call(null,G__22868));

}
});
om$core$build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return om$core$build_STAR___2.call(this,f,cursor);
case 3:
return om$core$build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build_STAR_.cljs$core$IFn$_invoke$arity$2 = om$core$build_STAR___2;
om$core$build_STAR_.cljs$core$IFn$_invoke$arity$3 = om$core$build_STAR___3;
return om$core$build_STAR_;
})()
;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function() {
var om$core$build = null;
var om$core$build__2 = (function (f,x){
return om$core$build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var om$core$build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var G__22880 = f;
var G__22881 = x;
var G__22882 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__22880,G__22881,G__22882) : om.core._STAR_instrument_STAR_.call(null,G__22880,G__22881,G__22882));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$_COLON_om$core_SLASH_pass)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});
om$core$build = function(f,x,m){
switch(arguments.length){
case 2:
return om$core$build__2.call(this,f,x);
case 3:
return om$core$build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build.cljs$core$IFn$_invoke$arity$2 = om$core$build__2;
om$core$build.cljs$core$IFn$_invoke$arity$3 = om$core$build__3;
return om$core$build;
})()
;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function() {
var om$core$build_all = null;
var om$core$build_all__2 = (function (f,xs){
return om$core$build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var om$core$build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$_COLON_om$core_SLASH_index,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
om$core$build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return om$core$build_all__2.call(this,f,xs);
case 3:
return om$core$build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build_all.cljs$core$IFn$_invoke$arity$2 = om$core$build_all__2;
om$core$build_all.cljs$core$IFn$_invoke$arity$3 = om$core$build_all__3;
return om$core$build_all;
})()
;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__22905 = state;
if(G__22905){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22905.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__22905.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__22905);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__22905);
}
})()){
} else {
var properties_22924 = (function (){var G__22906 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22906) : cljs.core.atom.call(null,G__22906));
})();
var listeners_22925 = (function (){var G__22907 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22907) : cljs.core.atom.call(null,G__22907));
})();
var render_queue_22926 = (function (){var G__22908 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22908) : cljs.core.atom.call(null,G__22908));
})();
var x22909_22927 = state;
x22909_22927.om$core$IRenderQueue$ = true;

x22909_22927.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x22909_22927,properties_22924,listeners_22925,render_queue_22926){
return (function (this$){
var this$__$1 = this;
var G__22910 = render_queue_22926;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22910) : cljs.core.deref.call(null,G__22910));
});})(x22909_22927,properties_22924,listeners_22925,render_queue_22926))
;

x22909_22927.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x22909_22927,properties_22924,listeners_22925,render_queue_22926){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__22911 = render_queue_22926;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22911) : cljs.core.deref.call(null,G__22911));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_22926,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x22909_22927,properties_22924,listeners_22925,render_queue_22926))
;

x22909_22927.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x22909_22927,properties_22924,listeners_22925,render_queue_22926){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_22926,cljs.core.empty);
});})(x22909_22927,properties_22924,listeners_22925,render_queue_22926))
;

x22909_22927.om$core$INotify$ = true;

x22909_22927.om$core$INotify$_listen_BANG_$arity$3 = ((function (x22909_22927,properties_22924,listeners_22925,render_queue_22926){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_22925,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x22909_22927,properties_22924,listeners_22925,render_queue_22926))
;

x22909_22927.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x22909_22927,properties_22924,listeners_22925,render_queue_22926){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_22925,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x22909_22927,properties_22924,listeners_22925,render_queue_22926))
;

x22909_22927.om$core$INotify$_notify_BANG_$arity$3 = ((function (x22909_22927,properties_22924,listeners_22925,render_queue_22926){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__22912_22928 = cljs.core.seq((function (){var G__22916 = listeners_22925;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22916) : cljs.core.deref.call(null,G__22916));
})());
var chunk__22913_22929 = null;
var count__22914_22930 = (0);
var i__22915_22931 = (0);
while(true){
if((i__22915_22931 < count__22914_22930)){
var vec__22917_22932 = chunk__22913_22929.cljs$core$IIndexed$_nth$arity$2(null,i__22915_22931);
var __22933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_22932,(0),null);
var f_22934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917_22932,(1),null);
var G__22918_22935 = tx_data;
var G__22919_22936 = root_cursor;
(f_22934.cljs$core$IFn$_invoke$arity$2 ? f_22934.cljs$core$IFn$_invoke$arity$2(G__22918_22935,G__22919_22936) : f_22934.call(null,G__22918_22935,G__22919_22936));

var G__22937 = seq__22912_22928;
var G__22938 = chunk__22913_22929;
var G__22939 = count__22914_22930;
var G__22940 = (i__22915_22931 + (1));
seq__22912_22928 = G__22937;
chunk__22913_22929 = G__22938;
count__22914_22930 = G__22939;
i__22915_22931 = G__22940;
continue;
} else {
var temp__4126__auto___22941 = cljs.core.seq(seq__22912_22928);
if(temp__4126__auto___22941){
var seq__22912_22942__$1 = temp__4126__auto___22941;
if(cljs.core.chunked_seq_QMARK_(seq__22912_22942__$1)){
var c__4863__auto___22943 = cljs.core.chunk_first(seq__22912_22942__$1);
var G__22944 = cljs.core.chunk_rest(seq__22912_22942__$1);
var G__22945 = c__4863__auto___22943;
var G__22946 = cljs.core.count(c__4863__auto___22943);
var G__22947 = (0);
seq__22912_22928 = G__22944;
chunk__22913_22929 = G__22945;
count__22914_22930 = G__22946;
i__22915_22931 = G__22947;
continue;
} else {
var vec__22920_22948 = cljs.core.first(seq__22912_22942__$1);
var __22949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920_22948,(0),null);
var f_22950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920_22948,(1),null);
var G__22921_22951 = tx_data;
var G__22922_22952 = root_cursor;
(f_22950.cljs$core$IFn$_invoke$arity$2 ? f_22950.cljs$core$IFn$_invoke$arity$2(G__22921_22951,G__22922_22952) : f_22950.call(null,G__22921_22951,G__22922_22952));

var G__22953 = cljs.core.next(seq__22912_22942__$1);
var G__22954 = null;
var G__22955 = (0);
var G__22956 = (0);
seq__22912_22928 = G__22953;
chunk__22913_22929 = G__22954;
count__22914_22930 = G__22955;
i__22915_22931 = G__22956;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x22909_22927,properties_22924,listeners_22925,render_queue_22926))
;

x22909_22927.om$core$IRootProperties$ = true;

x22909_22927.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x22909_22927,properties_22924,listeners_22925,render_queue_22926){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_22924,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x22909_22927,properties_22924,listeners_22925,render_queue_22926))
;

x22909_22927.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x22909_22927,properties_22924,listeners_22925,render_queue_22926){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_22924,cljs.core.dissoc,id,k);
});})(x22909_22927,properties_22924,listeners_22925,render_queue_22926))
;

x22909_22927.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x22909_22927,properties_22924,listeners_22925,render_queue_22926){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_22924,cljs.core.dissoc,id);
});})(x22909_22927,properties_22924,listeners_22925,render_queue_22926))
;

x22909_22927.om$core$IRootProperties$_get_property$arity$3 = ((function (x22909_22927,properties_22924,listeners_22925,render_queue_22926){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22923 = properties_22924;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22923) : cljs.core.deref.call(null,G__22923));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x22909_22927,properties_22924,listeners_22925,render_queue_22926))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x22962 = cljs.core.clone(cursor);
x22962.om$core$IRootKey$ = true;

x22962.om$core$IRootKey$_root_key$arity$1 = ((function (x22962){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x22962))
;

x22962.om$core$IAdapt$ = true;

x22962.om$core$IAdapt$_adapt$arity$2 = ((function (x22962){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x22962))
;

x22962.cljs$core$ICloneable$ = true;

x22962.cljs$core$ICloneable$_clone$arity$1 = ((function (x22962){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key(cljs.core.clone(cursor),root_key);
});})(x22962))
;

return x22962;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__22963){
var map__23052 = p__22963;
var map__23052__$1 = ((cljs.core.seq_QMARK_(map__23052))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23052):map__23052);
var options = map__23052__$1;
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23052__$1,cljs.core.constant$keyword$_COLON_raf);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23052__$1,cljs.core.constant$keyword$_COLON_adapt);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23052__$1,cljs.core.constant$keyword$_COLON_descriptor);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23052__$1,cljs.core.constant$keyword$_COLON_instrument);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23052__$1,cljs.core.constant$keyword$_COLON_path);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23052__$1,cljs.core.constant$keyword$_COLON_tx_listen);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23052__$1,cljs.core.constant$keyword$_COLON_target);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__23140 = (function (){var G__23053 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23053) : cljs.core.deref.call(null,G__23053));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__23140,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__23140,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__23054 = value;
if(G__23054){
var bit__4757__auto__ = (G__23054.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4757__auto__) || (G__23054.cljs$core$IAtom$)){
return true;
} else {
if((!G__23054.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__23054);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__23054);
}
})())?value:(function (){var G__23055 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23055) : cljs.core.atom.call(null,G__23055));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4076__auto__ = adapt;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$_COLON_target,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_tx_listen,cljs.core.constant$keyword$_COLON_path,cljs.core.constant$keyword$_COLON_adapt,cljs.core.constant$keyword$_COLON_raf], 0));
var ret = (function (){var G__23056 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23056) : cljs.core.atom.call(null,G__23056));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__23052,map__23052__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = (function (){var G__23096 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23096) : cljs.core.deref.call(null,G__23096));
})();
var cursor = (function (){var G__23097 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__23097) : adapt__$1.call(null,G__23097));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$_COLON_skip_render_root))){
} else {
var c_23141 = om.dom.render((function (){var _STAR_descriptor_STAR_23098 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_23099 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_23100 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_23101 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_23101;

om.core._STAR_state_STAR_ = _STAR_state_STAR_23100;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_23099;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_23098;
}})(),target);
if(((function (){var G__23102 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23102) : cljs.core.deref.call(null,G__23102));
})() == null)){
var G__23103_23142 = ret;
var G__23104_23143 = c_23141;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23103_23142,G__23104_23143) : cljs.core.reset_BANG_.call(null,G__23103_23142,G__23104_23143));
} else {
}
}

var queue_23144 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_23144)){
} else {
var seq__23105_23145 = cljs.core.seq(queue_23144);
var chunk__23106_23146 = null;
var count__23107_23147 = (0);
var i__23108_23148 = (0);
while(true){
if((i__23108_23148 < count__23107_23147)){
var c_23149 = chunk__23106_23146.cljs$core$IIndexed$_nth$arity$2(null,i__23108_23148);
if(cljs.core.truth_(c_23149.isMounted())){
var temp__4126__auto___23150 = (c_23149.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___23150)){
var next_props_23151 = temp__4126__auto___23150;
(c_23149.props["__om_cursor"] = next_props_23151);

(c_23149.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4076__auto__ = !((function (){var G__23110 = om.core.children(c_23149);
if(G__23110){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__23110.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__23110.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__23110);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__23110);
}
})());
if(or__4076__auto__){
return or__4076__auto__;
} else {
return c_23149.shouldComponentUpdate(c_23149.props,c_23149.state);
}
})())){
c_23149.forceUpdate();
} else {
}
} else {
}

var G__23152 = seq__23105_23145;
var G__23153 = chunk__23106_23146;
var G__23154 = count__23107_23147;
var G__23155 = (i__23108_23148 + (1));
seq__23105_23145 = G__23152;
chunk__23106_23146 = G__23153;
count__23107_23147 = G__23154;
i__23108_23148 = G__23155;
continue;
} else {
var temp__4126__auto___23156 = cljs.core.seq(seq__23105_23145);
if(temp__4126__auto___23156){
var seq__23105_23157__$1 = temp__4126__auto___23156;
if(cljs.core.chunked_seq_QMARK_(seq__23105_23157__$1)){
var c__4863__auto___23158 = cljs.core.chunk_first(seq__23105_23157__$1);
var G__23159 = cljs.core.chunk_rest(seq__23105_23157__$1);
var G__23160 = c__4863__auto___23158;
var G__23161 = cljs.core.count(c__4863__auto___23158);
var G__23162 = (0);
seq__23105_23145 = G__23159;
chunk__23106_23146 = G__23160;
count__23107_23147 = G__23161;
i__23108_23148 = G__23162;
continue;
} else {
var c_23163 = cljs.core.first(seq__23105_23157__$1);
if(cljs.core.truth_(c_23163.isMounted())){
var temp__4126__auto___23164__$1 = (c_23163.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___23164__$1)){
var next_props_23165 = temp__4126__auto___23164__$1;
(c_23163.props["__om_cursor"] = next_props_23165);

(c_23163.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4076__auto__ = !((function (){var G__23112 = om.core.children(c_23163);
if(G__23112){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__23112.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__23112.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__23112);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__23112);
}
})());
if(or__4076__auto__){
return or__4076__auto__;
} else {
return c_23163.shouldComponentUpdate(c_23163.props,c_23163.state);
}
})())){
c_23163.forceUpdate();
} else {
}
} else {
}

var G__23166 = cljs.core.next(seq__23105_23157__$1);
var G__23167 = null;
var G__23168 = (0);
var G__23169 = (0);
seq__23105_23145 = G__23166;
chunk__23106_23146 = G__23167;
count__23107_23147 = G__23168;
i__23108_23148 = G__23169;
continue;
}
} else {
}
}
break;
}
}

var _refs_23170 = (function (){var G__23113 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23113) : cljs.core.deref.call(null,G__23113));
})();
if(cljs.core.empty_QMARK_(_refs_23170)){
} else {
var seq__23114_23171 = cljs.core.seq(_refs_23170);
var chunk__23115_23172 = null;
var count__23116_23173 = (0);
var i__23117_23174 = (0);
while(true){
if((i__23117_23174 < count__23116_23173)){
var vec__23118_23175 = chunk__23115_23172.cljs$core$IIndexed$_nth$arity$2(null,i__23117_23174);
var path_23176__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23118_23175,(0),null);
var cs_23177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23118_23175,(1),null);
var cs_23178__$1 = (function (){var G__23119 = cs_23177;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23119) : cljs.core.deref.call(null,G__23119));
})();
var seq__23120_23179 = cljs.core.seq(cs_23178__$1);
var chunk__23121_23180 = null;
var count__23122_23181 = (0);
var i__23123_23182 = (0);
while(true){
if((i__23123_23182 < count__23122_23181)){
var vec__23124_23183 = chunk__23121_23180.cljs$core$IIndexed$_nth$arity$2(null,i__23123_23182);
var id_23184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23124_23183,(0),null);
var c_23185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23124_23183,(1),null);
if(cljs.core.truth_(c_23185.shouldComponentUpdate(c_23185.props,c_23185.state))){
c_23185.forceUpdate();
} else {
}

var G__23186 = seq__23120_23179;
var G__23187 = chunk__23121_23180;
var G__23188 = count__23122_23181;
var G__23189 = (i__23123_23182 + (1));
seq__23120_23179 = G__23186;
chunk__23121_23180 = G__23187;
count__23122_23181 = G__23188;
i__23123_23182 = G__23189;
continue;
} else {
var temp__4126__auto___23190 = cljs.core.seq(seq__23120_23179);
if(temp__4126__auto___23190){
var seq__23120_23191__$1 = temp__4126__auto___23190;
if(cljs.core.chunked_seq_QMARK_(seq__23120_23191__$1)){
var c__4863__auto___23192 = cljs.core.chunk_first(seq__23120_23191__$1);
var G__23193 = cljs.core.chunk_rest(seq__23120_23191__$1);
var G__23194 = c__4863__auto___23192;
var G__23195 = cljs.core.count(c__4863__auto___23192);
var G__23196 = (0);
seq__23120_23179 = G__23193;
chunk__23121_23180 = G__23194;
count__23122_23181 = G__23195;
i__23123_23182 = G__23196;
continue;
} else {
var vec__23125_23197 = cljs.core.first(seq__23120_23191__$1);
var id_23198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23125_23197,(0),null);
var c_23199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23125_23197,(1),null);
if(cljs.core.truth_(c_23199.shouldComponentUpdate(c_23199.props,c_23199.state))){
c_23199.forceUpdate();
} else {
}

var G__23200 = cljs.core.next(seq__23120_23191__$1);
var G__23201 = null;
var G__23202 = (0);
var G__23203 = (0);
seq__23120_23179 = G__23200;
chunk__23121_23180 = G__23201;
count__23122_23181 = G__23202;
i__23123_23182 = G__23203;
continue;
}
} else {
}
}
break;
}

var G__23204 = seq__23114_23171;
var G__23205 = chunk__23115_23172;
var G__23206 = count__23116_23173;
var G__23207 = (i__23117_23174 + (1));
seq__23114_23171 = G__23204;
chunk__23115_23172 = G__23205;
count__23116_23173 = G__23206;
i__23117_23174 = G__23207;
continue;
} else {
var temp__4126__auto___23208 = cljs.core.seq(seq__23114_23171);
if(temp__4126__auto___23208){
var seq__23114_23209__$1 = temp__4126__auto___23208;
if(cljs.core.chunked_seq_QMARK_(seq__23114_23209__$1)){
var c__4863__auto___23210 = cljs.core.chunk_first(seq__23114_23209__$1);
var G__23211 = cljs.core.chunk_rest(seq__23114_23209__$1);
var G__23212 = c__4863__auto___23210;
var G__23213 = cljs.core.count(c__4863__auto___23210);
var G__23214 = (0);
seq__23114_23171 = G__23211;
chunk__23115_23172 = G__23212;
count__23116_23173 = G__23213;
i__23117_23174 = G__23214;
continue;
} else {
var vec__23126_23215 = cljs.core.first(seq__23114_23209__$1);
var path_23216__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23126_23215,(0),null);
var cs_23217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23126_23215,(1),null);
var cs_23218__$1 = (function (){var G__23127 = cs_23217;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23127) : cljs.core.deref.call(null,G__23127));
})();
var seq__23128_23219 = cljs.core.seq(cs_23218__$1);
var chunk__23129_23220 = null;
var count__23130_23221 = (0);
var i__23131_23222 = (0);
while(true){
if((i__23131_23222 < count__23130_23221)){
var vec__23132_23223 = chunk__23129_23220.cljs$core$IIndexed$_nth$arity$2(null,i__23131_23222);
var id_23224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23132_23223,(0),null);
var c_23225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23132_23223,(1),null);
if(cljs.core.truth_(c_23225.shouldComponentUpdate(c_23225.props,c_23225.state))){
c_23225.forceUpdate();
} else {
}

var G__23226 = seq__23128_23219;
var G__23227 = chunk__23129_23220;
var G__23228 = count__23130_23221;
var G__23229 = (i__23131_23222 + (1));
seq__23128_23219 = G__23226;
chunk__23129_23220 = G__23227;
count__23130_23221 = G__23228;
i__23131_23222 = G__23229;
continue;
} else {
var temp__4126__auto___23230__$1 = cljs.core.seq(seq__23128_23219);
if(temp__4126__auto___23230__$1){
var seq__23128_23231__$1 = temp__4126__auto___23230__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23128_23231__$1)){
var c__4863__auto___23232 = cljs.core.chunk_first(seq__23128_23231__$1);
var G__23233 = cljs.core.chunk_rest(seq__23128_23231__$1);
var G__23234 = c__4863__auto___23232;
var G__23235 = cljs.core.count(c__4863__auto___23232);
var G__23236 = (0);
seq__23128_23219 = G__23233;
chunk__23129_23220 = G__23234;
count__23130_23221 = G__23235;
i__23131_23222 = G__23236;
continue;
} else {
var vec__23133_23237 = cljs.core.first(seq__23128_23231__$1);
var id_23238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133_23237,(0),null);
var c_23239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133_23237,(1),null);
if(cljs.core.truth_(c_23239.shouldComponentUpdate(c_23239.props,c_23239.state))){
c_23239.forceUpdate();
} else {
}

var G__23240 = cljs.core.next(seq__23128_23231__$1);
var G__23241 = null;
var G__23242 = (0);
var G__23243 = (0);
seq__23128_23219 = G__23240;
chunk__23129_23220 = G__23241;
count__23130_23221 = G__23242;
i__23131_23222 = G__23243;
continue;
}
} else {
}
}
break;
}

var G__23244 = cljs.core.next(seq__23114_23209__$1);
var G__23245 = null;
var G__23246 = (0);
var G__23247 = (0);
seq__23114_23171 = G__23244;
chunk__23115_23172 = G__23245;
count__23116_23173 = G__23246;
i__23117_23174 = G__23247;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$_COLON_skip_render_root,true);

var G__23134 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23134) : cljs.core.deref.call(null,G__23134));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__23052,map__23052__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__23052,map__23052__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$_COLON_ignore))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$_COLON_skip_render_root,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$_COLON_ignore,false);

if(cljs.core.contains_QMARK_((function (){var G__23135 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23135) : cljs.core.deref.call(null,G__23135));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__23136 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__23052,map__23052__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__23052,map__23052__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__23137 = (16);
return setTimeout(G__23136,G__23137);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__23138 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__23052,map__23052__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__23052,map__23052__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__23138);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__23052,map__23052__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__23052,map__23052__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__23139 = target;
return React.unmountComponentAtNode(G__23139);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__23052,map__23052__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_((function (){var G__23250 = target;
return goog.dom.isElement(G__23250);
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], 0)))].join('')));
}

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23251 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23251) : cljs.core.deref.call(null,G__23251));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__23253 = x;
if(G__23253){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__23253.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__23253.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__23253);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__23253);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function() {
var om$core$transact_BANG_ = null;
var om$core$transact_BANG___2 = (function (cursor,f){
return om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var om$core$transact_BANG___3 = (function (cursor,korks,f){
return om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var om$core$transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
om$core$transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return om$core$transact_BANG___2.call(this,cursor,korks);
case 3:
return om$core$transact_BANG___3.call(this,cursor,korks,f);
case 4:
return om$core$transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$transact_BANG___2;
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$transact_BANG___3;
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$transact_BANG___4;
return om$core$transact_BANG_;
})()
;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function() {
var om$core$update_BANG_ = null;
var om$core$update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var om$core$update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});
var om$core$update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});
om$core$update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return om$core$update_BANG___2.call(this,cursor,korks);
case 3:
return om$core$update_BANG___3.call(this,cursor,korks,v);
case 4:
return om$core$update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_BANG___2;
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_BANG___3;
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$update_BANG___4;
return om$core$update_BANG_;
})()
;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var key = (((function (){var G__23264 = cursor;
if(G__23264){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__23264.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__23264.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__23264);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__23264);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__23265 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__23265) : om.core.path.call(null,G__23265));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$_COLON_ignore,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function() {
var om$core$get_node = null;
var om$core$get_node__1 = (function (owner){
return owner.getDOMNode();
});
var om$core$get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))], 0)))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
om$core$get_node = function(owner,name){
switch(arguments.length){
case 1:
return om$core$get_node__1.call(this,owner);
case 2:
return om$core$get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_node.cljs$core$IFn$_invoke$arity$1 = om$core$get_node__1;
om$core$get_node.cljs$core$IFn$_invoke$arity$2 = om$core$get_node__2;
return om$core$get_node;
})()
;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function() {
var om$core$set_state_BANG_ = null;
var om$core$set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var om$core$set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
om$core$set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return om$core$set_state_BANG___2.call(this,owner,korks);
case 3:
return om$core$set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$set_state_BANG___2;
om$core$set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$set_state_BANG___3;
return om$core$set_state_BANG_;
})()
;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function() {
var om$core$set_state_nr_BANG_ = null;
var om$core$set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var om$core$set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
om$core$set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return om$core$set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return om$core$set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$set_state_nr_BANG___2;
om$core$set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$set_state_nr_BANG___3;
return om$core$set_state_nr_BANG_;
})()
;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function() {
var om$core$update_state_BANG_ = null;
var om$core$update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__23268 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23268) : f.call(null,G__23268));
})());
});
var om$core$update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__23269 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23269) : f.call(null,G__23269));
})());
});
om$core$update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return om$core$update_state_BANG___2.call(this,owner,korks);
case 3:
return om$core$update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_state_BANG___2;
om$core$update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_state_BANG___3;
return om$core$update_state_BANG_;
})()
;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function() {
var om$core$update_state_nr_BANG_ = null;
var om$core$update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__23272 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23272) : f.call(null,G__23272));
})());
});
var om$core$update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__23273 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23273) : f.call(null,G__23273));
})());
});
om$core$update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return om$core$update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return om$core$update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_state_nr_BANG___2;
om$core$update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_state_nr_BANG___3;
return om$core$update_state_nr_BANG_;
})()
;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function() {
var om$core$get_render_state = null;
var om$core$get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var om$core$get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
om$core$get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_render_state__1.call(this,owner);
case 2:
return om$core$get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_render_state.cljs$core$IFn$_invoke$arity$1 = om$core$get_render_state__1;
om$core$get_render_state.cljs$core$IFn$_invoke$arity$2 = om$core$get_render_state__2;
return om$core$get_render_state;
})()
;
