// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.components.forms');
goog.require('cljs.core');
goog.require('om.core');
/**
 * Handles the onChange event of an input setting to the value the given key
 */
paperboard.components.forms.handle_change = (function paperboard$components$forms$handle_change(e,k,owner){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,k,e.target.value);
});
