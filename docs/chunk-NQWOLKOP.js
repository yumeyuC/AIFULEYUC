import{a as u}from"./chunk-UXUA2C4C.js";import{c as g,g as m}from"./chunk-S242FNQS.js";import{Fa as p,Ga as a,Ja as r,K as c,P as f,va as i,wa as l}from"./chunk-B23RA5TB.js";var n=class t{ngOnInit(){console.log("FirstPageComponent ngOnInit")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=i({type:t,selectors:[["app-first-page"]],decls:2,vars:0,template:function(e,P){e&1&&(p(0,"p"),r(1,"first-page works!"),a())},encapsulation:2})};var s=class t{activeRouter=f(g);ngOnInit(){console.log("SecPageComponent ngOnInit")}getDetailID(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=i({type:t,selectors:[["app-sec-page"]],decls:2,vars:0,template:function(e,P){e&1&&(p(0,"p"),r(1,"sec-page works!"),a())},encapsulation:2})};var I=[{path:"",component:n},{path:"fir",component:n},{path:"sec",component:s},{path:"my",component:u},{path:"**",redirectTo:"/fir"}],C=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=l({type:t});static \u0275inj=c({imports:[m.forChild(I),m]})};export{C as YumeyuRoutingModule};
