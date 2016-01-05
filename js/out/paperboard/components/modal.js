// Compiled by ClojureScript 0.0-3058 {}
goog.provide('paperboard.components.modal');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
/**
 * Generic modal box that can be extended by more concrete components
 */
paperboard.components.modal.modal = (function paperboard$components$modal$modal(open,children){
var G__12057 = {"className": [cljs.core.str("modal"),cljs.core.str((cljs.core.truth_(open)?" show":""))].join('')};
var G__12058 = (function (){var G__12059 = {"className": "modal__fade"};
var G__12060 = (function (){var G__12061 = {"className": "modal__container"};
var G__12062 = children;
return React.DOM.div(G__12061,G__12062);
})();
return React.DOM.div(G__12059,G__12060);
})();
return React.DOM.div(G__12057,G__12058);
});
