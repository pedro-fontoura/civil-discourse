'use strict;'
const A0={viewport:null,viewport_width:0,pages_container:null,nr_pages:0,lst_pages:null,current_page_idx:0,previous_page_idx:0,client_onResize:null,client_onClick:null,mouse_or_touch:null,PAGE_FREE:0,PAGE_LANDSCAPE:1,PAGE_PORTRAIT:-1,page_before_rotate:-1,page_mode:0,page_rotate_id:0,error_node:null,error_page:null,f23:function(t,i){this.viewport=document.getElementById("AppViewport"),this.pages_container=document.getElementById("AppPagesContainer"),this.lst_pages=Array.from(document.querySelectorAll(".AppPage")),this.nr_pages=this.lst_pages.length,window.hasOwnProperty("cordova")?this.mouse_or_touch="mousedown":this.mouse_or_touch=void 0!==window.ontouchstart?"touchstart":"mousedown",A0.f18(null),this.client_onResize=t||null,this.client_onClick=i||null,window.visualViewport.addEventListener("resize",A0.f18.bind(this))},f18:function(t){this.viewport_width=this.viewport.offsetWidth,this.viewport.style.height=window.visualViewport.height+"px",this.pages_container.style.width=this.nr_pages*this.viewport_width+"px",this.pages_container.style.left=-this.current_page_idx*this.viewport.offsetWidth+"px",this.lst_pages.forEach(t=>t.style.width=this.viewport_width+"px"),this.f8(),this.f11(),null!==this.client_onResize&&this.client_onResize(this.viewport_width,this.viewport.offsetHeight)},f19:function(){return this.viewport_width},f15:function(){return this.viewport.offsetHeight},f20:function(t=""){if("string"==typeof t){var i=0,s=t;for(t=this.current_page_idx;i<this.nr_pages;){if(this.lst_pages[i].id===s){t=i;break}i++}}return this.pages_container.style.left=-t*this.viewport.offsetWidth+"px",this.previous_page_idx=this.current_page_idx,this.current_page_idx=t},f9:function(){return this.current_page_idx},f4:function(){return this.lst_pages[this.current_page_idx].id},f8:function(){this.f20(this.current_page_idx)},f5:function(){this.f20(this.current_page_idx)},f13:function(t,i){this.page_mode=t,this.page_rotate_id=i,this.f11()},f11:function(){return this.show_page=!1,this.page_mode!==this.PAGE_FREE&&(Math.sign(this.viewport.offsetWidth-this.viewport.offsetHeight)!==this.page_mode?(-1===this.page_before_rotate&&(this.page_before_rotate=this.current_page_idx),this.f20(this.page_rotate_id),this.show_page=!0):-1!==this.page_before_rotate&&(this.f20(this.page_before_rotate),this.page_before_rotate=-1,this.show_page=!0)),this.show_page||this.f8(),this.show_page},f0:function(t,i){t.addEventListener(this.mouse_or_touch,this.f21.bind(this,i)),t.addEventListener("contextmenu",this.f10.bind(this))},f6:function(t,i,s){"mousedown"===(i="MOUSE||TOUCH"===i?this.mouse_or_touch:i)&&t.addEventListener("contextmenu",this.f10.bind(this)),t.addEventListener(i,s)},f12:function(t){return t.stopPropagation(),t.preventDefault(),t.target},f21:function(t,i){this.f12(i),null!==this.client_onClick&&this.client_onClick(t,i.target)},f10:function(t){this.f12(t),t.target.click()},f1:function(t){if("serviceWorker"in navigator&&"https:"===window.location.protocol&&void 0===window.cordova){if(this.A1&&!this.A1.f22())return;navigator.serviceWorker.register(t).then(t=>{}).catch(t=>{})}},f7:function(t="AppError"){"string"==typeof t&&(t=document.getElementById(t)),this.error_node=t,this.error_page=g1(t,"section"),window.addEventListener("unhandledrejection",t=>{t.preventDefault(),this.f16("Unhandled rejection",t.reason)}),window.addEventListener("error",t=>{t.preventDefault();t=[t.error.message,t.error.fileName,t.error.lineNumber,this.f2(t.error)].join("<br>");this.f16("Error",t)})},f2:function(t){return t.stack.split("at ").join("<br>&bull; ")},f16:function(t,i){this.error_node.innerHTML+="<h3>"+t+"</h3>"+i,null!==this.error_page&&this.f20(this.error_page.id)}};class C0{#p61=null;#p59=1/0;#p50=1/0;#p43=1/0;#p38=1/0;#p31=null;constructor(t,i=!1){this.#p61=t,!0===i?this.#p31=this.#P19():i instanceof Node&&(this.#p31=i,this.#p31.id=this.#p61,this.#p31.classList.add("FlexBoxEntity"))}#P19(){var t=document.createElement("div");return t.id=this.#p61,t.classList.add("FlexBoxEntity"),t}M94(){return this.#p61}M43(){return[this.#p59,this.#p50]}M58(){return this.#p31}f19(){return this.#p43}f15(){return this.#p38}M92(){return this.#p59}M81(){return this.#p50}f18(t,i,s,h){this.M44(s,h),this.M82(t,i)}M44(t,i){this.#p59=t,this.#p50=i,null!==this.#p31&&(this.#p31.style.top=t+"px",this.#p31.style.left=i+"px")}M82(t,i){this.#p43=t,this.#p38=i,null!==this.#p31&&(this.#p31.style.width=t+"px",this.#p31.style.height=i+"px")}}class E3 extends C0{#p8=null;#p32=null;#p44=null;#p5=[];#p1=null;constructor(t,i,s,h,e=!1){super(t,e),this.#p8=i,this.#p32=s,this.#p44=h,e&&this.M58().classList.add("FlexBox")}M66(t,i=!0){this.#p5[i?"push":"unshift"](t),null!==this.#p1&&this.#p5.sort(this.#p1),this.M4()}M35(t,i=!0){g2(this.#p5,t),i&&this.M4()}f18(t,i,s,h){super.f18(t,i,s,h),this.M4()}M14(i,s){0<this.#p5.length&&this.#p5.forEach(t=>t.M82(i,s))}M4(){var i,s,h,e;0!==this.#p5.length&&(s=i=0,this.#p5.forEach(t=>{i+=t.f19(),s+=t.f15()}),i!==1/0)&&s!==1/0&&("row"===this.#p8?(h=this.#P6(this.#p32)(!0,"width",i),e=this.#P6(this.#p44)(!1,"height",s)):(e=this.#P6(this.#p32)(!0,"height",s),h=this.#P6(this.#p44)(!1,"width",i)),this.#p5.forEach(t=>{t.M44(e.shift(),h.shift())}))}M29(i){this.#p5.forEach(t=>i(t))}#P6(t){return"center"===t?this.#P1.bind(this):"start"===t?this.#P4.bind(this):"end"===t?this.#P5.bind(this):"evenly"===t?this.#P2.bind(this):"between"===t?this.#P0.bind(this):"around"===t?this.#P3.bind(this):void 0}#P7(t,i){for(var s,h="width"===i?this.M81():this.M92(),e=[],n=0;n<this.#p5.length;++n)t&&0<n&&(s=this.#p5[n-1],h+="width"===i?s.f19():s.f15()),e.push(h);return e}#P4(t,i,s){return this.#P7(t,i)}#P1(t,i,s){for(var h,e=this.#P7(t,i),n=this.#p5.length,p="width"===i?this.f19():this.f15(),r=Math.round((p-s)/2),l=0;l<n;++l)t?e[l]+=r:(h=this.#p5[l],e[l]+=Math.round((p-("width"===i?h.f19():h.f15()))/2));return e}#P5(t,i,s){for(var h,e=this.#P7(t,i),n=this.#p5.length,p="width"===i?this.f19():this.f15(),r=Math.round(p-s),l=0;l<n;++l)t?e[l]+=r:(h=this.#p5[l],e[l]+=p-("width"===i?h.f19():h.f15()));return e}#P2(t,i,s){for(var h=this.#P7(t,i),e=this.#p5.length,t="width"===i?this.f19():this.f15(),n=Math.round((t-s)/(e+1)),p=0;p<e;++p)h[p]+=(p+1)*n;return h}#P0(t,i,s){for(var h=this.#P7(t,i),e=this.#p5.length,t="width"===i?this.f19():this.f15(),n=Math.round((t-s)/(e-1)),p=1;p<e;++p)h[p]+=p*n;return h}#P3(t,i,s){for(var h=this.#P7(t,i),e=this.#p5.length,t="width"===i?this.f19():this.f15(),i=Math.round(s/this.#p5.length),n=Math.round((t-i*(this.#p5.length+1))/this.#p5.length),p=Math.round(i/2+n/2),r=0;r<e;++r)h[r]+=p;for(var l=Math.round((t-s-2*p)/(e-1)),r=1;r<e;++r)h[r]+=r*l;return h}M15(t){this.#p1=t}M59(t){this.#p32=t}}function g13(t){return document.getElementById(t)}function g11(t,i){return(i=i||document).getElementsByTagName(t)[0]}function g12(t,i){return(i=i||document).getElementsByTagName(t)}function g9(t,i=document){return i.querySelector(t)}function g10(t,i=document){return i.querySelectorAll(t)}function g1(t,i){for(i=i.toUpperCase();null!==t&&t.tagName!==i;)t=t.parentNode;return t}function g14(s,h=null){return new Promise((t,i)=>setTimeout(t,s,h))}function g5(i,t){t.forEach(t=>null!==t&&i.appendChild(t))}function QuerySeachString(t,i=null,s=!1){t=new URL(window.location).searchParams.get(t);return null===t?t=i:s&&(t=parseInt(t,10)),t}function g8(t,i){t=getComputedStyle(document.documentElement).getPropertyValue("--"+t.split("--").pop()).trim();return i?parseInt(t,10):t}function g6(t){for(var i=t.length-1;0<i;i--){var s=Math.floor(Math.random()*(i+1)),h=t[i];t[i]=t[s],t[s]=h}}function g7(t){return t.concat()}function g2(t,i){return t.includes(i)?t.splice(t.indexOf(i),1).pop():null}function g3(t,i){return i>=t.length?null:t.splice(i,1).pop()}function g0(t){return g3(t,Math.f17(0,t.length-1))}function g4(t){return t[Math.f17(0,t.length-1)]}A0.A1={},A0.A1.f22=function(){return 0<navigator.maxTouchPoints},A0.A1.f24=function(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},A0.A1.f3=function(){this.f24()||this.f22()&&(document.fullscreenElement?document.exitFullscreen instanceof Function&&document.exitFullscreen():document.documentElement.requestFullscreen instanceof Function&&document.documentElement.requestFullscreen({navigationUI:"hide"}).catch(t=>{}))},Math.f17=function(t,i){return Math.floor(Math.random()*(i-t+1))+t},Math.f14=function(t,i){return t+Math.random()*(i-t)},window.addEventListener("load",()=>{new C2});class E5 extends C0{#p61=null;#p51=-1;#p45=-1;#p46=-1;#p33=!0;#p28=!1;#p0=!0;#p29=null;#p39=null;#p40=null;#p41=null;#p34=null;#p11=null;#p42=null;#p52=null;constructor(t,i,s){super("Card_"+t,!0),this.#p61=t,this.#p51=i.id,this.#p45=s.nr,this.#p46=i.color,this.M71(s.symbol,s.nr,i.symbol),this.M16(this.#p0)}M22(){return this.#p39}M16(t){(this.#p0=t)&&(this.M84()||this.M95())?this.#p11.classList.remove("Hidden"):this.#p11.classList.add("Hidden")}M71(t,i,s){this.#p39=document.createElement("div"),this.#p39.classList.add("CardBody"),this.#p39.classList.add("Clickable"),this.#p40=document.createElement("div"),this.#p40.classList.add("CardFace"),this.#p39.appendChild(this.#p40),this.#p41=document.createElement("div"),this.#p41.classList.add("CardBack"),this.#p39.appendChild(this.#p41),this.#p34=document.createElement("p"),this.#p34.classList.add("CardValue"),this.#p34.classList.add("CardValue"+this.#p46);var h=document.createElement("span"),t=(h.innerHTML=t,this.#p34.appendChild(h),this.#p40.appendChild(this.#p34),this.#p11=document.createElement("span"),(this.M84()||this.M95())&&(this.#p11.innerHTML=i),this.#p34.appendChild(this.#p11),this.#p42=document.createElement("p"),this.#p42.innerHTML=s,this.#p42.classList.add("CardSuit"),this.#p42.classList.add("CardSuit"+this.#p46),this.#p40.appendChild(this.#p42),this.#p33||this.#p39.classList.add("FaceDown"),this.M84()?this.#p40.classList.add("CardRoyal"):this.M85()?this.#p40.classList.add("CardJoker"):this.M95()&&this.#p40.classList.add("CardAce"),this.M58());t.classList.add("Card"),t.classList.add("CardSmooth"),t.classList.add("CardHidden"),t.appendChild(this.#p39)}M72(){return this.#p45}M83(){return this.#p51}M73(){return this.#p46}M82(t,i){super.M82(t,i),this.#p34.style.fontSize=Math.round(.3*t)+"px",this.#p34.children.length&&(this.#p34.children[1].style.fontSize=Math.round(.2*t)+"px"),this.#p42.style.fontSize=Math.round(.4*t)+"px"}M67(t){this.#p33=t,this.#p39.classList[t?"remove":"add"]("FaceDown")}M45(t){this.#p28=t,this.#p39.classList[t?"add":"remove"]("CardSelected")}M23(){return this.M45(!this.#p28),this.#p28}M46(t){this.#p29=t}M97(t){return this.#p29===t}M47(){return this.#p29}M84(){return[k20,k14,k21].includes(this.#p45)}M60(){return this.M84()}M85(){return this.#p45===k13}M95(){return this.#p45===k25}M74(){return this.#p33}M61(){return this.#p28}M68(t){this.M58().classList[t?"add":"remove"]("CardHidden")}M69(t){this.M58().classList[t?"add":"remove"]("CardSmooth")}M70(t){this.M58().style.zIndex=t}M36(){return this.M84()||this.M95()}M75(){return"#"+this.#p61+"="+this.#p45+"/"+k19[this.#p51]}M86(t){this.#p52=t}M87(){return this.#p52}M76(t){1===t?(this.#p42.style.display="none",this.#p40.classList.add("CardSuit_"+this.#p51),this.#p34.classList.remove("CardValue"+this.#p46)):(this.#p42.style.display="",this.#p40.classList.remove("CardSuit_"+this.#p51),this.#p34.classList.add("CardValue"+this.#p46))}}class C3{#p16=[];#p3=[];#p17=0;#p9=0;constructor(t,i=null){this.#p17=t,this.#P23(),null!==i&&this.DiscardCards(i)}#P23(){for(var t,i,s,h=0,e=[],n=0;n<4;++n)for(s=this.M38(n),e.includes(s)||e.push(s),i=2;i<=14;++i)t=new E5(h++,{id:n,symbol:this.M30(n),color:s},{nr:i,symbol:this.M24(i)}),this.#p16.push(t),this.#p9+=1;for(var p=0,r=1;r<=this.#p17;++r)t=new E5(h++,{id:k18,symbol:this.M30(k18),color:e[p]},{nr:k13,symbol:this.M24(k13)}),this.#p16.push(t),this.#p9+=1,p=(1+p)%e.length}M37(t){if(!(0<this.#p3.length))return t=this.#p16.filter(t),this.#p9-=t.length,t.forEach(t=>{g2(this.#p16,t)}),t}f18(i,s){this.M48(t=>t.M82(i,s))}M48(t){this.#p16.forEach(t),this.#p3.forEach(t)}M88(){g6(this.#p16)}M89(){var t;return 0===this.#p16.length?null:(t=g0(this.#p16),this.#p3.push(t),t)}M96(){for(;this.#p3.length;)this.#p16.push(this.#p3.pop())}M30(i){return k27.filter(t=>t.id===i).pop().symbol}M38(i){return k27.filter(t=>t.id===i).pop().color}M24(i){return i===k13||11<=i&&i<=13||i===k25?k22.filter(t=>t.value===i).pop().symbol:i}M39(i,s){this.M48(t=>t.M82(i,s))}M11(t){t=this.#p16.filter(t);return t.forEach(t=>{g2(this.#p16,t),this.#p3.push(t)}),t}M62(){return this.#p16.length}M17(){return this.#p9}M7(){for(var t=[];0<this.#p16.length;){var i=this.#p16.pop();this.#p3.push(i),t.push(i)}return t}}class E0 extends E3{#p61=null;#p16=[];#p47=0;#p4=!1;#p53=null;#p18=null;constructor(t){super(t,"column","center","center",!0),this.#p61=t,this.#p53=new C0(this.#p61+"_Base",!0),this.M66(this.#p53);t=this.#p53.M58();t.classList.add("CardPileBase"),t.classList.add("Clickable"),this.#p18=document.createElement("p"),this.#p18.classList.add("Hidden"),t.appendChild(this.#p18)}M25(){return this.#p53.M58()}M49(){return[this.M58(),this.#p53.M58()]}M77(){return g7(this.#p16)}M26(t){this.#p4=t,0<this.#p16.length&&this.#p16[this.#p16.length-1].M67(t)}M44(t,i){super.M44(t,i),this.M4(),this.#P11()}M27(t,i){this.M14(t,i),this.M4(),this.#P11(),this.#p18.style.fontSize=Math.round(.1*t)+"px"}#P11(){const[i,s]=this.#p53.M43();this.#p16.forEach(t=>t.M44(i,s))}M31(){var i=1;this.#p16.forEach(t=>t.M70(i++))}M78(t){this.#p47=t}M40(t){this.M90(t,!0)}M18(t){this.M90(t,!1)}M90(t,i=!0){var s,h;this.#p16.includes(t)||(this.#p16[i?"push":"unshift"](t),this.#p18.innerHTML=this.#p16.length,[s,h]=this.#p53.M43(),t.M45(!1),t.M67(!1),t.M44(s,h),i?t.M70(100+this.#p16.length):t.M70(0),t.M46(this),g14(this.#p47).then(t=>{this.M31(),this.M8()}))}M19(){return this.#p53.M43()}M28(){var t;return 0===this.#p16.length?null:((t=this.#p16.pop()).M70(100+this.#p16.length),t.M68(!1),this.M8(),this.#p18.innerHTML=this.#p16.length,t)}M8(){var t=this.#p16.length-1;if(0<=t){var i=this.#p16[t];for(i.M68(!1),i.M67(this.#p4),--t;0<=t;--t)(i=this.#p16[t]).M68(!0),i.M67(!1)}}M91(){return 0===this.#p16.length}M62(){return this.#p16.length}M63(t){if(this.#p16.includes(t))return g2(this.#p16,t),t.M68(!1),this.#p18.innerHTML=this.#p16.length,this.M8(),t}M50(t){this.#p18.classList[t?"remove":"add"]("Hidden"),t&&(this.#p18.innerHTML=this.#p16.length)}M20(t){for(var i;0<this.#p16.length;)i=this.#p16[0],this.M63(i),t.M90(i)}M22(){return this.#p53.M58()}}class E1 extends E3{#p61=null;#p19=0;#p35=!1;#p16=[];constructor(t,i,s){super(t,"row","evenly","center",!0),this.#p61=t,this.#p35=s,this.#p19=i}f18(t,i,s,h){super.f18(t,i,s,h)}M90(t){this.#p16.length===this.#p19||this.#p16.includes(t)||(t.M46(this),t.M67(!0),t.M70(100+this.#p16.length),this.#p16.unshift(t),this.M66(t,!1))}M63(t){if(this.#p16.includes(t))return g2(this.#p16,t),this.M35(t),t}M64(t){for(var i;0<this.#p16.length;)i=this.#p16[0],this.M63(i),t.M90(i)}M11(t){return this.#p16.filter(t)}M12(){return this.#p16.filter(t=>t.M61())}M2(){this.#p16.filter(t=>t.M61()).forEach(t=>t.M45(!1))}M21(t){return this.#p16[this.#p16.length-1]===t}M62(){return this.#p16.length}M77(){return g7(this.#p16)}}class C1{#p31=null;#p60=null;#p20=0;#p48=0;constructor(t){this.#p31=document.createElement("div"),this.#p31.id="Messenger",this.#p60=document.createElement("p"),this.#p31.appendChild(this.#p60),this.#p20=t<1e3?1e3*t:t}M58(){return this.#p31}f18(t,i,s,h){this.#p31.style.width=t+"px",this.#p31.style.height=i+"px",this.#p31.style.left=h+"px",this.#p60.style.fontSize=Math.min(Math.round(.25*i),17)+"px",this.M98()}M98(){this.#p31.style.top=-1.1*this.#p31.offsetHeight+"px"}M9(t,i){0<this.#p20&&this.M51("<span>"+t+"</span>: "+i)}M51(t){0<this.#p20&&(clearTimeout(this.#p48),this.#p48=setTimeout(this.M98.bind(this),this.#p20),this.#p60.innerHTML=t,this.#p31.style.top=0)}M52(t){clearTimeout(this.timer),this.#p60.innerHTML=t,this.#p31.style.top=0}}class C4{#p31=null;#p54=null;#lst_elements=null;constructor(t,i){this.#p31=t,this.#p54=i,this.#lst_elements=Array.from(t.children),this.#p54.classList.add("Clickable"),this.#lst_elements.forEach(t=>t.classList.add("Clickable"))}M49(){return g7(this.#lst_elements)}M99(){this.#p31.style.right=0}M98(){this.#p31.style.right=-1.1*this.#p31.offsetWidth+"px"}M93(){"0px"===this.#p31.style.right?this.M98():this.M99()}M79(t=!0){this.#p54.classList[t?"remove":"add"]("Hidden")}IsIcon(t){return t.id.startsWith("Menu")}M65(t){g13("Menu_Play").classList[t?"remove":"add"]("Hidden")}}class E2 extends C0{#p61=null;#p21=null;#p36=0;#p12=0;#p13=0;#p10=0;#p5=[];constructor(t,i,s,h=!1){super(t,h),this.#p61=t,this.#p36=i,this.#p12=s,h&&this.M58().classList.add("FlexGrid"),this.#p21=new Array(this.#p36);for(var e=0;e<this.#p36;++e)this.#p21[e]=new Array(this.#p12);this.#P16()}#P16(){for(var t,i=0;i<this.#p36;++i)for(t=0;t<this.#p12;++t)this.#p21[i][t]=null}f18(t,i,s,h){super.f18(t,i,s,h),this.#p13=Math.round(t/this.#p12),this.#p10=Math.round(i/this.#p36),this.#P9()}#P9(){for(var t,i,s,h=this.M81(),e=this.M92(),n=0;n<this.#p36;++n){for(s=h,t=0;t<this.#p12;++t)(i=this.#p21[n][t])instanceof C0&&i.M44(e+Math.round((this.#p10-i.f15())/2),s+Math.round((this.#p13-i.f19())/2)),s+=this.#p13;e+=this.#p10}}M53(t,i,s){return!(t instanceof C0)||i<0||i>=this.#p36||s<0||s>=this.#p12||null!==this.#p21[i][s]?null:(this.#p21[i][s]=t,this.#p5.push(t),this.#P9(),t)}M13(t,i){var s;return t<0||t>=this.#p36||i<0||i>=this.#p12||null===this.#p21[t][i]?null:(s=this.#p21[t][i],g2(this.#p5,s),this.#p21[t][i]=null,s)}M32(t,i){return t<0||t>=this.#p36||i<0||i>=this.#p12||null===this.#p21[t][i]?null:this.#p21[t][i]}M54(){return g7(this.#p5)}M5(t){return this.#p5.filter(t)}#P20(){for(var t,i=0;i<this.#p36;++i)for(t=0;t<this.#p12;++t)if(null===this.#p21[i][t])return[i,t];return null}M66(t){var i=this.#P20();return null===i?null:this.M53(t,i[0],i[1])}M35(t){if(0===this.#p5.length)return null;if(!this.#p5.includes(t))return null;for(var i,s=!1,h=0;h<this.#p36;++h){for(i=0;i<this.#p12;++i)if(this.#p21[h][i]===t){s=!0;break}if(s)break}return this.M13(h,i)}M33(t){if(0===this.#p5.length)return null;if(!this.#p5.includes(t))return null;for(var i,s=!1,h=0;h<this.#p36;++h){for(i=0;i<this.#p12;++i)if(this.#p21[h][i]===t){s=!0;break}if(s)break}return[h,i]}M55(t,i){return t<0||t>=this.#p36||i<0||i>=this.#p12?null:null===this.#p21[t][i]}}class E4 extends E2{#p16=[];#p22=null;constructor(){super("Court",k16,k8,!0)}M90(t){return null!==super.M66(t)?(this.#p16.push(t),t.M46(this),t):null}M63(t){return null!==super.M35(t)?(g2(this.#p16,t),t):null}M77(){return g7(this.#p16)}M6(){this.#p16.forEach(t=>t.M45(!1))}M3(t,s){const h=t.M72();this.#p16.forEach(t=>{var i=Math.abs(t.M72()-h);t.M45(0<i&&i<=s)})}M41(t,i){var s=this.M33(i);if(null===s)return null;this.M6();var h=this.M13(s[0],s[1]);return g2(this.#p16,h),this.M53(t,s[0],s[1]),this.#p16.push(t),t.M46(this),t.M45(!0),this.#p22=t,this.#DeterminePossibleDirections(s[0],s[1],i)}M34(){this.#p22.M45(!1),this.#p22=null}#DeterminePossibleDirections(t,i,s){var h=[];return this.#p22.M83()===s.M83()&&(0<t&&(this.M55(t-1,i)||h.push("up")),t+1<k16)&&(this.M55(t+1,i)||h.push("down")),this.#p22.M72()<s.M72()?0<i&&(this.M55(t,i-1)||h.push("left")):i+1<k8&&(this.M55(t,i+1)||h.push("right")),h}M42(t){var[i,s]=this.M33(this.#p22),t=(this.M13(i,s),"up"===t?--i:"down"===t?i+=1:"left"===t?--s:"right"===t&&(s+=1),this.M13(i,s));return g2(this.#p16,t),this.M53(this.#p22,i,s),this.M34(),t}M1(t){this.#p22.M45(!1);const[h,e]=this.M33(this.#p22);t.forEach(t=>{var i=h,s=e,i=("up"===t?--i:"down"===t?i+=1:"left"===t?--s:"right"===t&&(s+=1),this.M32(i,s));i.M45(!0),i.M86(t)})}}const k6=16/11,k7=1.1;var CARD_ASPECT_RATIO=0;const k23=5,k24=0,k3=g8("CARD_TRANSLATE_TIME",!0),k5=0,k4=1,k2=2,k1=3,k0=4,k16=3,k8=3,k10=k16*k8,k11=0,k12=1,k9=2,k17=3,k18=4,k19=["hearts","spades","diamonds","clubs","joker"],k13=0,k20=11,k14=12,k21=13,k25=14,k26="Red",k15="Black",k27=[{id:k11,symbol:"&hearts;",color:k26},{id:k12,symbol:"&spades;",color:k15},{id:k9,symbol:"&diams;",color:k26},{id:k17,symbol:"&clubs;",color:k15},{id:k18,symbol:"",color:""}],k22=[{value:k20,symbol:"J"},{value:k14,symbol:"Q"},{value:k21,symbol:"K"},{value:k25,symbol:"A"},{value:k13,symbol:"&#x2605;"}];class C2{#p30=null;#p23=null;#p55=null;#p56=null;#p57=!1;#p24=!1;#p49=null;#p58=null;#p25=null;#p6=null;#p7=null;#p26=3;#p2=3;#p14=0;#p37=null;#p15=k5;#p27=null;constructor(){this.clicked_card=null,this.M57(),A0.f23(this.#P25.bind(this),this.#P26.bind(this)),A0.f7(),this.#p30=g13("GameViewport"),this.#p23=new C1(k23),this.#p55=new C4(g13("MenuPannel"),g13("MenuIcon")),this.#p56=new C3(k24),this.#p49=new E4,this.#p58=new E2("Hand",2,3,!0),this.#p25=new E0("Draw"),this.#p6=new E0("Discard"),this.#p7=new E0("TheOne"),this.#p7.M26(!0),this.#p30.appendChild(this.#p49.M58()),this.#p30.appendChild(this.#p58.M58()),g5(this.#p30,this.#p25.M49()),g5(this.#p30,this.#p6.M49()),g5(this.#p30,this.#p7.M49()),g13("Play").appendChild(this.#p23.M58()),A0.f6(window,"contextmenu",A0.f12.bind(A0)),A0.f0(g13("HomeCard"),null),A0.f0(g13("MenuIcon"),null),this.#p55.M49().forEach(t=>A0.f0(t,null)),A0.A1.f22()?A0.f0(g13("btnFullScreen"),null):g13("btnFullScreen").style.display="none",this.#p55.M98(),this.#P25(0,0),window.setTimeout(()=>{A0.f11(),g13("AppViewport").classList.remove("AppInit")},62.5),this.#P24(),this.#P27(),g13("UserAgent").innerHTML=navigator.userAgent,this.#p58.M53(this.#p7,1,1),this.#p25.M50(!0)}#P27(){window.DEV&&(this.Deck=this.#p56,this.Messenger=this.#p23,this.Menu=this.#p55,this.Court=this.#p49,this.Hand=this.#p58,this.DrawPile=this.#p25,this.DiscardPile=this.#p6,this.TheOnePile=this.#p7,this.#P14("Play"))}#P24(){var t;for(this.#p56.M37(t=>0===t.M83()||t.M72()<9);null!==(t=this.#p56.M89());)this.#p30.appendChild(t.M58()),A0.f0(t.M22(),t),t.M68(!1),this.#p6.M90(t);this.SetCardStyle(this.#p14)}#P25(t,i){var s=this.#p30.offsetTop,h=this.#p30.offsetWidth,e=Math.round(h/5),n=Math.round(this.#p30.offsetHeight/5),[s,p]=this.#P17(e,n,s),r=(this.#p56.M39(s,p),3*e),l=Math.round((h-r)/2);this.#p23.f18(h,Math.round(p/2),0,this.#p30.offsetLeft),this.#p49.f18(r,3*n,0,l),this.#p25.f18(e,n,3.5*n,0),this.#p6.f18(e,n,3.5*n,l+r),this.#p7.M82(e,n),this.#p58.f18(r,2*n,3*n,l),this.#p25.M27(s,p),this.#p6.M27(s,p),this.#p7.M27(s,p)}#P17(t,i,s){var s=+s,t=t-s,h=Math.round(t*CARD_ASPECT_RATIO);return i-s<h&&(h=i-s,t=Math.round(h/CARD_ASPECT_RATIO)),[t,h]}#P12(t,i,s){if(0===i)return Promise.resolve(null);for(var h=[],e=k3*t,n=0;0<i--;)h.push(g14(n).then(t=>{s()})),n+=e;return h.push(g14(n-e+k3)),Promise.all(h)}#P10(i,s,t){return this.#P12(.33,Math.min(t,i.M62()),t=>{s.M90(i.M28())})}#P8(){this.#p56.M48(t=>t.M69(!1)),this.#P13(this.#p25.M77(),this.#p6),this.#P13(this.#p7.M77(),this.#p6),this.#P13(this.#p49.M77(),this.#p6),this.#P13(this.#p58.M5(t=>t instanceof E5),this.#p6)}#P13(t,i){for(;0<t.length;){var s,h=(s=t.pop()).M47();h===this.#p58?h.M35(s):h.M63(s),i.M90(s)}}#P18(){this.#P13(this.#p56.M7(),this.#p25),setTimeout(()=>this.#p56.M48(t=>{t.M69(!0)}),0)}#P21(t){this.#p23.M51(t)}#P26(t,i){return this.#p55.IsIcon(i)?this.#P14(i.id.split("_").pop()):"HomeCard"===i.id?this.#P14("Play"):"btnFullScreen"===i.id?A0.A1.f3():(t instanceof E5&&(this.clicked_card=t),void(this.#p57||this.#p24||(t instanceof E5?this.#P22(t):t instanceof E0&&this.#P15(t))))}#P14(t){"MenuIcon"===t?this.#p55.M93():"Play"===t?"Play"===A0.f4()?this.#P28():(this.#p55.M79(!0),this.#p55.M99(),A0.f20("Play")):"Home"===t?(this.#p55.M98(),this.#p55.M79(!1),A0.f20("Home")):A0.f20(t)}#P22(t){if(!this.#p57)return t.M97(this.#p58)?this.onClickHandCard(t):t.M97(this.#p49)?this.onClickCourtCard(t):t===this.#p37?this.#P21("That is your Chosen One."):void this.#P21("That card is face down, let it be.")}#P15(t){this.#p57}#P28(){this.#p57||(this.#p57=!0,this.#p24=!1,this.#p27=null,this.#p37=null,this.#p55.M98(),this.#p55.M65(!1),this.#P8(),this.#p56.M96(),this.#p56.M88(),this.#P18(),this.#P12(.1,k10,()=>{var t=this.#p25.M28();this.#p49.M90(t),g14(k3,t).then(t=>{t.M67(!0)})}).then(()=>this.#P12(.1,this.#p26,()=>{var t=this.#p25.M28();this.#p58.M66(t),t.M46(this.#p58),g14(k3,t).then(t=>t.M67(!0))})).then(()=>{this.#P21("The Chosen One &raquo; Select a hand card."),this.#p55.M65(!0),this.#p15=k4,this.#p57=!1}))}onClickHandCard(t){this.#p23.M98(),this.#p15===k4?t.M97(this.#p58)?this.M56(t):this.#P21("The Chosen One &raquo; Select a hand card."):this.#p15===k2||this.#p15===k1?(null!==this.#p27&&this.#p27!==t&&(this.#p27.M45(!1),this.#p27=null),t.M23()?(this.#p27=t,this.#p49.M3(t,this.#p2),this.#p15=k1):(this.#p27=null,this.#p49.M6())):this.#p15===k0&&this.#P21("Select a court card.")}onClickCourtCard(t){if(this.#p23.M98(),this.#p15===k1){if(!t.M61())return void this.#P21("That is not a candidate to active card.");this.#p57=!0,this.#p58.M35(this.#p27);const i=this.#p49.M41(this.#p27,t);void this.#P12(1,1,()=>{this.#p6.M90(t)}).then(()=>{this.M0(i)})}else{if(this.#p15===k0)return t.M61()?(this.#p57=!0,this.#p49.M6(),void this.M10(t.M87())):void this.#P21("That is not a candidate to passive card.");this.#p15===k4?this.#P21("The Chosen One &raquo; Select a hand card."):this.#P21("Select a hand card.")}}M56(t){this.#p57=!0,this.#p23.M98(),this.#p37=t,this.#p58.M35(t),this.#p7.M90(t),this.M80()}M80(){var t,i;0===this.#p25.M62()?(0===this.#p58.M5(t=>t instanceof E5).length?(t=!(this.#p24=!0),1===(i=this.#p49.M77()).length&&i[0].M83()===this.#p37.GetSUIT()&&(t=!0),this.#p23.M52("Game over &raquo; You "+(t?"win":"lose")+".")):this.#p15=k2,this.#p57=!1):this.#P12(.1,1,()=>{var t=this.#p25.M28();return this.#p58.M66(t),t.M46(this.#p58),g14(k3,t).then(t=>t.M67(!0))}).then(()=>{this.#p15=k2,this.#p57=!1})}M0(t){if(0===t.length)return this.#P21("Cannot move."),this.#p49.M34(),this.#p15=k2,this.M80();1===t.length?this.M10(t[0]):(this.#p15=k0,this.#p49.M1(t),this.#p57=!1)}M10(t){const i=this.#p49.M42(t);this.#P12(.1,1,()=>(this.#p6.M90(i),g14(k3))).then(()=>{this.M80()})}M57(){this.#p26=QuerySeachString("hs",this.#p26,!0),this.#p2=QuerySeachString("ri",this.#p2,!0),this.#p14=QuerySeachString("cs",this.#p14,!0),g13("option_hs_"+this.#p26).checked=!0,g13("option_ri_"+this.#p2).checked=!0,g13("option_cs_"+this.#p14).checked=!0,CARD_ASPECT_RATIO=0===this.#p14?k6:k7,Array.from(g12("input",g13("options"))).forEach(t=>{t.addEventListener("change",this.onChangeOption.bind(this))})}onChangeOption(t){var t=t.target.id.split("_"),i=t[1],t=parseInt(t[2],10);"hs"===i?this.#p26=t:"ri"===i?this.#p2=t:"cs"===i&&(this.#p14=t,this.SetCardStyle(this.#p14))}SetCardStyle(i){this.#p56.M48(t=>t.M76(i)),CARD_ASPECT_RATIO=0===i?k6:k7,this.#P25(0,0)}}