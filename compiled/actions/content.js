"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getProducts=exports.getDocs=void 0;var _content=require("../apis/content"),_index=require("../constants/index"),loadDocs=function(a){return{type:_index.Constants.ACTIONS.CONTENT.DOCS.LOAD,data:a}},loadProducts=function(a){return{type:_index.Constants.ACTIONS.CONTENT.PRODUCTS.LOAD,data:a}},getDocs=function(a){return function(b){return _content.Content.getDocs(a).then(function(a){b(loadDocs(a.data))}).catch(function(a){throw a})}};exports.getDocs=getDocs;var getProducts=function(a){return function(b){return _content.Content.getProducts(a).then(function(a){b(loadProducts(a.data))}).catch(function(a){throw a})}};exports.getProducts=getProducts;