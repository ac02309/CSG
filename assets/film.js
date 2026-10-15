/* Clarke Systems Group film. Source: src/film. Includes three.js (MIT licence). */
(()=>{var Za="169";var zl=0,uo=1,kl=2;var hl=1,Vl=2,cn=3,In=0,Ie=1,Ve=2,Rn=0,Cn=1,fo=2,po=3,mo=4,Hl=5,Hn=100,Gl=101,Wl=102,Xl=103,Ql=104,Yl=200,Zl=201,ql=202,Jl=203,Ir=204,Ur=205,Kl=206,jl=207,$l=208,tc=209,ec=210,nc=211,ic=212,sc=213,rc=214,Dr=0,Lr=1,Nr=2,yi=3,Fr=4,Br=5,Or=6,zr=7,ul=0,ac=1,oc=2,Pn=0,lc=1,cc=2,hc=3,uc=4,dc=5,fc=6,pc=7;var dl=300,_i=301,Mi=302,kr=303,Vr=304,Ws=306,Hr=1e3,Xn=1001,Gr=1002,He=1003,mc=1004;var Gi=1005;var Ke=1006,Ks=1007;var Qn=1008;var fn=1009,fl=1010,pl=1011,zi=1012,qa=1013,Yn=1014,un=1015,ki=1016,Ja=1017,Ka=1018,Si=1020,ml=35902,gl=1021,xl=1022,je=1023,vl=1024,yl=1025,gi=1026,Ei=1027,_l=1028,ja=1029,Ml=1030,$a=1031;var to=1033,ps=33776,ms=33777,gs=33778,xs=33779,Wr=35840,Xr=35841,Qr=35842,Yr=35843,Zr=36196,qr=37492,Jr=37496,Kr=37808,jr=37809,$r=37810,ta=37811,ea=37812,na=37813,ia=37814,sa=37815,ra=37816,aa=37817,oa=37818,la=37819,ca=37820,ha=37821,vs=36492,ua=36494,da=36495,Sl=36283,fa=36284,pa=36285,ma=36286;var _s=2300,ga=2301,js=2302,go=2400,xo=2401,vo=2402;var gc=3200,xc=3201;var vc=0,yc=1,bn="",tn="srgb",nn="srgb-linear",eo="display-p3",Xs="display-p3-linear",Ms="linear",ie="srgb",Ss="rec709",Es="p3";var ei=7680;var yo=519,_c=512,Mc=513,Sc=514,El=515,Ec=516,Ac=517,wc=518,bc=519,_o=35044;var Mo="300 es",dn=2e3,As=2001,Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $s=Math.PI/180,xa=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function Tc(i,t){return(i%t+t)%t}function tr(i,t,e){return(1-e)*i+e*t}function Ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var te=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],x=n[8],_=s[0],p=s[3],u=s[6],w=s[1],S=s[4],A=s[7],O=s[2],R=s[5],b=s[8];return r[0]=a*_+o*w+l*O,r[3]=a*p+o*S+l*R,r[6]=a*u+o*A+l*b,r[1]=c*_+h*w+f*O,r[4]=c*p+h*S+f*R,r[7]=c*u+h*A+f*b,r[2]=d*_+m*w+x*O,r[5]=d*p+m*S+x*R,r[8]=d*u+m*A+x*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,m=c*r-a*l,x=e*f+n*d+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(er.makeScale(t,e)),this}rotate(t){return this.premultiply(er.makeRotation(-t)),this}translate(t,e){return this.premultiply(er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},er=new zt;function Al(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rc(){let i=ws("canvas");return i.style.display="block",i}var So={};function ys(i){i in So||(So[i]=!0,console.warn(i))}function Cc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pc(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ic(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Eo=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ao=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ui={[nn]:{transfer:Ms,primaries:Ss,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[tn]:{transfer:ie,primaries:Ss,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xs]:{transfer:Ms,primaries:Es,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ao),fromReference:i=>i.applyMatrix3(Eo)},[eo]:{transfer:ie,primaries:Es,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ao),fromReference:i=>i.applyMatrix3(Eo).convertLinearToSRGB()}},Uc=new Set([nn,Xs]),qt={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Uc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Ui[t].toReference,s=Ui[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ui[i].primaries},getTransfer:function(i){return i===bn?Ms:Ui[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ui[t].luminanceCoefficients)}};function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ni,va=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=ws("canvas")),ni.width=t.width,ni.height=t.height;let n=ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ws("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dc=0,bs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ir(s[a].image)):r.push(ir(s[a]))}else r=ir(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lc=0,We=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=Ke,a=Qn,o=je,l=fn,c=i.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Vi(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hr:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hr:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=dl;We.DEFAULT_ANISOTROPY=1;var he=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],x=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,A=(m+1)/2,O=(u+1)/2,R=(h+d)/4,b=(f+_)/4,k=(x+p)/4;return S>A&&S>O?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=b/n):A>O?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=R/s,r=k/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=b/r,s=k/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-x)/w,this.y=(f-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ya=class extends Un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new bs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ts=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _a=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],m=r[a+1],x=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=x,t[e+3]=_;return}if(f!==_||l!==d||c!==m||h!==x){let p=1-o,u=l*d+c*m+h*x+f*_,w=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){let O=Math.sqrt(S),R=Math.atan2(O,u*w);p=Math.sin(p*R)/O,o=Math.sin(o*R)/O}let A=o*w;if(l=l*p+d*A,c=c*p+m*A,h=h*p+x*A,f=f*p+_*A,p===1-o){let O=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=O,c*=O,h*=O,f*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+h*f+l*m-c*d,t[e+1]=l*x+h*d+c*f-o*m,t[e+2]=c*x+h*m+o*d-l*f,t[e+3]=h*x-o*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*m*x,this._y=c*m*f-d*h*x,this._z=c*h*x+d*m*f,this._w=c*h*f-d*m*x;break;case"YXZ":this._x=d*h*f+c*m*x,this._y=c*m*f-d*h*x,this._z=c*h*x-d*m*f,this._w=c*h*f+d*m*x;break;case"ZXY":this._x=d*h*f-c*m*x,this._y=c*m*f+d*h*x,this._z=c*h*x+d*m*f,this._w=c*h*f-d*m*x;break;case"ZYX":this._x=d*h*f-c*m*x,this._y=c*m*f+d*h*x,this._z=c*h*x-d*m*f,this._w=c*h*f+d*m*x;break;case"YZX":this._x=d*h*f+c*m*x,this._y=c*m*f+d*h*x,this._z=c*h*x-d*m*f,this._w=c*h*f-d*m*x;break;case"XZY":this._x=d*h*f-c*m*x,this._y=c*m*f-d*h*x,this._z=c*h*x+d*m*f,this._w=c*h*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sr.copy(this).projectOnVector(t),this.sub(sr)}reflect(t){return this.sub(sr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sr=new D,wo=new Dn,Zn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(r,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),Xi.subVectors(this.max,Di),ii.subVectors(t.a,Di),si.subVectors(t.b,Di),ri.subVectors(t.c,Di),_n.subVectors(si,ii),Mn.subVectors(ri,si),Nn.subVectors(ii,ri);let e=[0,-_n.z,_n.y,0,-Mn.z,Mn.y,0,-Nn.z,Nn.y,_n.z,0,-_n.x,Mn.z,0,-Mn.x,Nn.z,0,-Nn.x,-_n.y,_n.x,0,-Mn.y,Mn.x,0,-Nn.y,Nn.x,0];return!rr(e,ii,si,ri,Xi)||(e=[1,0,0,0,1,0,0,0,1],!rr(e,ii,si,ri,Xi))?!1:(Qi.crossVectors(_n,Mn),e=[Qi.x,Qi.y,Qi.z],rr(e,ii,si,ri,Xi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},sn=[new D,new D,new D,new D,new D,new D,new D,new D],Ze=new D,Wi=new Zn,ii=new D,si=new D,ri=new D,_n=new D,Mn=new D,Nn=new D,Di=new D,Xi=new D,Qi=new D,Fn=new D;function rr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fn.fromArray(i,r);let o=s.x*Math.abs(Fn.x)+s.y*Math.abs(Fn.y)+s.z*Math.abs(Fn.z),l=t.dot(Fn),c=e.dot(Fn),h=n.dot(Fn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Nc=new Zn,Li=new D,ar=new D,Ai=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Nc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Li.subVectors(t,this.center);let e=Li.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Li.copy(t.center).add(ar)),this.expandByPoint(Li.copy(t.center).sub(ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},rn=new D,or=new D,Yi=new D,Sn=new D,lr=new D,Zi=new D,cr=new D,Rs=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){or.copy(t).add(e).multiplyScalar(.5),Yi.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(or);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Yi),o=Sn.dot(this.direction),l=-Sn.dot(Yi),c=Sn.lengthSq(),h=Math.abs(1-a*a),f,d,m,x;if(h>0)if(f=a*l-o,d=a*o-l,x=r*h,f>=0)if(d>=-x)if(d<=x){let _=1/h;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(or).addScaledVector(Yi,d),m}intersectSphere(t,e){rn.subVectors(t.center,this.origin);let n=rn.dot(this.direction),s=rn.dot(rn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,n,s,r){lr.subVectors(e,t),Zi.subVectors(n,t),cr.crossVectors(lr,Zi);let a=this.direction.dot(cr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,t);let l=o*this.direction.dot(Zi.crossVectors(Sn,Zi));if(l<0)return null;let c=o*this.direction.dot(lr.cross(Sn));if(c<0||l+c>a)return null;let h=-o*Sn.dot(cr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,a,o,l,c,h,f,d,m,x,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,d,m,x,_,p)}set(t,e,n,s,r,a,o,l,c,h,f,d,m,x,_,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ai.setFromMatrixColumn(t,0).length(),r=1/ai.setFromMatrixColumn(t,1).length(),a=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,m=a*f,x=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+x*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=x+m*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,m=l*f,x=c*h,_=c*f;e[0]=d+_*o,e[4]=x*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-x,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,m=l*f,x=c*h,_=c*f;e[0]=d-_*o,e[4]=-a*f,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,m=a*f,x=o*h,_=o*f;e[0]=l*h,e[4]=x*c-m,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=m*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,m=a*c,x=o*l,_=o*c;e[0]=l*h,e[4]=_-d*f,e[8]=x*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*f+x,e[10]=d-_*f}else if(t.order==="XZY"){let d=a*l,m=a*c,x=o*l,_=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+_,e[5]=a*h,e[9]=m*f-x,e[2]=x*f-m,e[6]=o*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fc,t,Bc)}lookAt(t,e,n){let s=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),En.crossVectors(n,Le),En.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),En.crossVectors(n,Le)),En.normalize(),qi.crossVectors(Le,En),s[0]=En.x,s[4]=qi.x,s[8]=Le.x,s[1]=En.y,s[5]=qi.y,s[9]=Le.y,s[2]=En.z,s[6]=qi.z,s[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],x=n[2],_=n[6],p=n[10],u=n[14],w=n[3],S=n[7],A=n[11],O=n[15],R=s[0],b=s[4],k=s[8],J=s[12],g=s[1],M=s[5],W=s[9],H=s[13],Y=s[2],$=s[6],V=s[10],et=s[14],G=s[3],xt=s[7],pt=s[11],yt=s[15];return r[0]=a*R+o*g+l*Y+c*G,r[4]=a*b+o*M+l*$+c*xt,r[8]=a*k+o*W+l*V+c*pt,r[12]=a*J+o*H+l*et+c*yt,r[1]=h*R+f*g+d*Y+m*G,r[5]=h*b+f*M+d*$+m*xt,r[9]=h*k+f*W+d*V+m*pt,r[13]=h*J+f*H+d*et+m*yt,r[2]=x*R+_*g+p*Y+u*G,r[6]=x*b+_*M+p*$+u*xt,r[10]=x*k+_*W+p*V+u*pt,r[14]=x*J+_*H+p*et+u*yt,r[3]=w*R+S*g+A*Y+O*G,r[7]=w*b+S*M+A*$+O*xt,r[11]=w*k+S*W+A*V+O*pt,r[15]=w*J+S*H+A*et+O*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],m=t[14],x=t[3],_=t[7],p=t[11],u=t[15];return x*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*m-n*l*m)+_*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+e*c*f-e*o*m-r*a*f+n*a*m+r*o*h-n*c*h)+u*(-s*o*h-e*l*f+e*o*d+s*a*f-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],m=t[11],x=t[12],_=t[13],p=t[14],u=t[15],w=f*p*c-_*d*c+_*l*m-o*p*m-f*l*u+o*d*u,S=x*d*c-h*p*c-x*l*m+a*p*m+h*l*u-a*d*u,A=h*_*c-x*f*c+x*o*m-a*_*m-h*o*u+a*f*u,O=x*f*l-h*_*l-x*o*d+a*_*d+h*o*p-a*f*p,R=e*w+n*S+s*A+r*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/R;return t[0]=w*b,t[1]=(_*d*r-f*p*r-_*s*m+n*p*m+f*s*u-n*d*u)*b,t[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*u+n*l*u)*b,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*m-n*l*m)*b,t[4]=S*b,t[5]=(h*p*r-x*d*r+x*s*m-e*p*m-h*s*u+e*d*u)*b,t[6]=(x*l*r-a*p*r-x*s*c+e*p*c+a*s*u-e*l*u)*b,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*m+e*l*m)*b,t[8]=A*b,t[9]=(x*f*r-h*_*r-x*n*m+e*_*m+h*n*u-e*f*u)*b,t[10]=(a*_*r-x*o*r+x*n*c-e*_*c-a*n*u+e*o*u)*b,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*m-e*o*m)*b,t[12]=O*b,t[13]=(h*_*s-x*f*s+x*n*d-e*_*d-h*n*p+e*f*p)*b,t[14]=(x*o*s-a*_*s-x*n*l+e*_*l+a*n*p-e*o*p)*b,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*d+e*o*d)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,m=r*h,x=r*f,_=a*h,p=a*f,u=o*f,w=l*c,S=l*h,A=l*f,O=n.x,R=n.y,b=n.z;return s[0]=(1-(_+u))*O,s[1]=(m+A)*O,s[2]=(x-S)*O,s[3]=0,s[4]=(m-A)*R,s[5]=(1-(d+u))*R,s[6]=(p+w)*R,s[7]=0,s[8]=(x+S)*b,s[9]=(p-w)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ai.set(s[0],s[1],s[2]).length(),a=ai.set(s[4],s[5],s[6]).length(),o=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);let c=1/r,h=1/a,f=1/o;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=f,qe.elements[9]*=f,qe.elements[10]*=f,e.setFromRotationMatrix(qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=dn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,x;if(o===dn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===As)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=dn){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*c,m=(n+s)*h,x,_;if(o===dn)x=(a+r)*f,_=-2*f;else if(o===As)x=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ai=new D,qe=new ue,Fc=new D(0,0,0),Bc=new D(1,1,1),En=new D,qi=new D,Le=new D,bo=new ue,To=new Dn,mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return To.setFromEuler(this),this.setFromQuaternion(To,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Oc=0,Ro=new D,oi=new Dn,an=new ue,Ji=new D,Ni=new D,zc=new D,kc=new Dn,Co=new D(1,0,0),Po=new D(0,1,0),Io=new D(0,0,1),Uo={type:"added"},Vc={type:"removed"},li={type:"childadded",child:null},hr={type:"childremoved",child:null},Xe=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new mn,n=new Dn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new zt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(Co,t)}rotateY(t){return this.rotateOnAxis(Po,t)}rotateZ(t){return this.rotateOnAxis(Io,t)}translateOnAxis(t,e){return Ro.copy(t).applyQuaternion(this.quaternion),this.position.add(Ro.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Co,t)}translateY(t){return this.translateOnAxis(Po,t)}translateZ(t){return this.translateOnAxis(Io,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ji.copy(t):Ji.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ni,Ji,this.up):an.lookAt(Ji,Ni,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(an),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uo),li.child=t,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vc),hr.child=t,this.dispatchEvent(hr),hr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uo),li.child=t,this.dispatchEvent(li),li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,zc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,kc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new D(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=new D,on=new D,ur=new D,ln=new D,ci=new D,hi=new D,Do=new D,dr=new D,fr=new D,pr=new D,mr=new he,gr=new he,xr=new he,Gn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),on.subVectors(n,e),ur.subVectors(t,e);let a=Je.dot(Je),o=Je.dot(on),l=Je.dot(ur),c=on.dot(on),h=on.dot(ur),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ln.x),l.addScaledVector(a,ln.y),l.addScaledVector(o,ln.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return mr.setScalar(0),gr.setScalar(0),xr.setScalar(0),mr.fromBufferAttribute(t,e),gr.fromBufferAttribute(t,n),xr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(mr,r.x),a.addScaledVector(gr,r.y),a.addScaledVector(xr,r.z),a}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),on.subVectors(t,e),Je.cross(on).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Je.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ci.subVectors(s,n),hi.subVectors(r,n),dr.subVectors(t,n);let l=ci.dot(dr),c=hi.dot(dr);if(l<=0&&c<=0)return e.copy(n);fr.subVectors(t,s);let h=ci.dot(fr),f=hi.dot(fr);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ci,a);pr.subVectors(t,r);let m=ci.dot(pr),x=hi.dot(pr);if(x>=0&&m<=x)return e.copy(r);let _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(hi,o);let p=h*x-m*f;if(p<=0&&f-h>=0&&m-x>=0)return Do.subVectors(r,s),o=(f-h)/(f-h+(m-x)),e.copy(s).addScaledVector(Do,o);let u=1/(p+_+d);return a=_*u,o=d*u,e.copy(n).addScaledVector(ci,a).addScaledVector(hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function vr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Tc(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vr(a,r,t+1/3),this.g=vr(a,r,t),this.b=vr(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=wl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return qt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Ae(Ee.r*255,0,255))*65536+Math.round(Ae(Ee.g*255,0,255))*256+Math.round(Ae(Ee.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ee.copy(this),e);let n=Ee.r,s=Ee.g,r=Ee.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=tn){qt.fromWorkingColorSpace(Ee.copy(this),t);let e=Ee.r,n=Ee.g,s=Ee.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(Ki);let n=tr(An.h,Ki.h,e),s=tr(An.s,Ki.s,e),r=tr(An.l,Ki.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ee=new kt;kt.NAMES=wl;var Hc=0,qn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Cn,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Ur,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cn&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Ur&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ps=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new D,ji=new te,ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ji.fromBufferAttribute(this,e),ji.applyMatrix3(t),this.setXY(e,ji.x,ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_o&&(t.usage=this.usage),t}};var Is=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Us=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ge=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gc=0,ke=new ue,yr=new Xe,ui=new D,Ne=new Zn,Fi=new Zn,xe=new D,Ce=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Al(t)?Us:Is)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return yr.lookAt(t),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ne.min,Fi.min),Ne.expandByPoint(xe),xe.addVectors(Ne.max,Fi.max),Ne.expandByPoint(xe)):(Ne.expandByPoint(Fi.min),Ne.expandByPoint(Fi.max))}Ne.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xe.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(t,c),xe.add(ui)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<n.count;k++)o[k]=new D,l[k]=new D;let c=new D,h=new D,f=new D,d=new te,m=new te,x=new te,_=new D,p=new D;function u(k,J,g){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,J),f.fromBufferAttribute(n,g),d.fromBufferAttribute(r,k),m.fromBufferAttribute(r,J),x.fromBufferAttribute(r,g),h.sub(c),f.sub(c),m.sub(d),x.sub(d);let M=1/(m.x*x.y-x.x*m.y);isFinite(M)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(M),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(M),o[k].add(_),o[J].add(_),o[g].add(_),l[k].add(p),l[J].add(p),l[g].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let k=0,J=w.length;k<J;++k){let g=w[k],M=g.start,W=g.count;for(let H=M,Y=M+W;H<Y;H+=3)u(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let S=new D,A=new D,O=new D,R=new D;function b(k){O.fromBufferAttribute(s,k),R.copy(O);let J=o[k];S.copy(J),S.sub(O.multiplyScalar(O.dot(J))).normalize(),A.crossVectors(R,J);let M=A.dot(l[k])<0?-1:1;a.setXYZW(k,S.x,S.y,S.z,M)}for(let k=0,J=w.length;k<J;++k){let g=w[k],M=g.start,W=g.count;for(let H=M,Y=M+W;H<Y;H+=3)b(t.getX(H+0)),b(t.getX(H+1)),b(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){let x=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),m=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let u=0;u<h;u++)d[x++]=c[m++]}return new ae(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lo=new ue,Bn=new Rs,$i=new Ai,No=new D,ts=new D,es=new D,ns=new D,_r=new D,is=new D,Fo=new D,ss=new D,ye=class extends Xe{constructor(t=new Ce,e=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){is.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(_r.fromBufferAttribute(f,t),a?is.addScaledVector(_r,h):is.addScaledVector(_r.sub(e),h))}e.add(is)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!($i.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere($i,No)===null||Bn.origin.distanceToSquared(No)>(t.far-t.near)**2))&&(Lo.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(Lo),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){let p=d[x],u=a[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=w,O=S;A<O;A+=3){let R=o.getX(A),b=o.getX(A+1),k=o.getX(A+2);s=rs(this,u,t,n,c,h,f,R,b,k),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){let w=o.getX(p),S=o.getX(p+1),A=o.getX(p+2);s=rs(this,a,t,n,c,h,f,w,S,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){let p=d[x],u=a[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=w,O=S;A<O;A+=3){let R=A,b=A+1,k=A+2;s=rs(this,u,t,n,c,h,f,R,b,k),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){let w=p,S=p+1,A=p+2;s=rs(this,a,t,n,c,h,f,w,S,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Wc(i,t,e,n,s,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===In,o),l===null)return null;ss.copy(o),ss.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ss);return c<e.near||c>e.far?null:{distance:c,point:ss.clone(),object:i}}function rs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ts),i.getVertexPosition(l,es),i.getVertexPosition(c,ns);let h=Wc(i,t,e,n,ts,es,ns,Fo);if(h){let f=new D;Gn.getBarycoord(Fo,ts,es,ns,f),s&&(h.uv=Gn.getInterpolatedAttribute(s,o,l,c,f,new te)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,o,l,c,f,new te)),a&&(h.normal=Gn.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Gn.getNormal(ts,es,ns,d.normal),h.face=d,h.barycoord=f}return h}var Jn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(f,2));function x(_,p,u,w,S,A,O,R,b,k,J){let g=A/b,M=O/k,W=A/2,H=O/2,Y=R/2,$=b+1,V=k+1,et=0,G=0,xt=new D;for(let pt=0;pt<V;pt++){let yt=pt*M-H;for(let Yt=0;Yt<$;Yt++){let Ft=Yt*g-W;xt[_]=Ft*w,xt[p]=yt*S,xt[u]=Y,c.push(xt.x,xt.y,xt.z),xt[_]=0,xt[p]=0,xt[u]=R>0?1:-1,h.push(xt.x,xt.y,xt.z),f.push(Yt/b),f.push(1-pt/k),et+=1}}for(let pt=0;pt<k;pt++)for(let yt=0;yt<b;yt++){let Yt=d+yt+$*pt,Ft=d+yt+$*(pt+1),X=d+(yt+1)+$*(pt+1),j=d+(yt+1)+$*pt;l.push(Yt,Ft,j),l.push(Ft,X,j),G+=6}o.addGroup(m,G,J),m+=G,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){let t={};for(let e=0;e<i.length;e++){let n=wi(i[e]);for(let s in n)t[s]=n[s]}return t}function Xc(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Qc={clone:wi,merge:Te},Yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fe=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yc,this.fragmentShader=Zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=Xc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ds=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wn=new D,Bo=new te,Oo=new te,Re=class extends Ds{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xa*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,Bo,Oo),e.subVectors(Oo,Bo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},di=-90,fi=1,Ma=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Re(di,fi,t,e);s.layers=this.layers,this.add(s);let r=new Re(di,fi,t,e);r.layers=this.layers,this.add(r);let a=new Re(di,fi,t,e);a.layers=this.layers,this.add(a);let o=new Re(di,fi,t,e);o.layers=this.layers,this.add(o);let l=new Re(di,fi,t,e);l.layers=this.layers,this.add(l);let c=new Re(di,fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ls=class extends We{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sa=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ls(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Jn(5,5,5),r=new fe({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Rn});r.uniforms.tEquirect.value=e;let a=new ye(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Ke),new Ma(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Mr=new D,qc=new D,Jc=new zt,hn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Mr.subVectors(n,e).cross(qc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Mr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jc.getNormalMatrix(t),s=this.coplanarPoint(Mr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},On=new Ai,as=new D,Ns=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],m=s[8],x=s[9],_=s[10],p=s[11],u=s[12],w=s[13],S=s[14],A=s[15];if(n[0].setComponents(l-r,d-c,p-m,A-u).normalize(),n[1].setComponents(l+r,d+c,p+m,A+u).normalize(),n[2].setComponents(l+a,d+h,p+x,A+w).normalize(),n[3].setComponents(l-a,d-h,p-x,A-w).normalize(),n[4].setComponents(l-o,d-f,p-_,A-S).normalize(),e===dn)n[5].setComponents(l+o,d+f,p+_,A+S).normalize();else if(e===As)n[5].setComponents(o,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(as.x=s.normal.x>0?t.max.x:t.min.x,as.y=s.normal.y>0?t.max.y:t.min.y,as.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(as)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kc(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<f.length;m++){let x=f[d],_=f[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,x=f.length;m<x;m++){let _=f[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Kn=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,m=[],x=[],_=[],p=[];for(let u=0;u<h;u++){let w=u*d-a;for(let S=0;S<c;S++){let A=S*f-r;x.push(A,-w,0),_.push(0,0,1),p.push(S/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){let S=w+c*u,A=w+c*(u+1),O=w+1+c*(u+1),R=w+1+c*u;m.push(S,A,R),m.push(A,O,R)}this.setIndex(m),this.setAttribute("position",new Ge(x,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$c=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ah=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ch=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ph=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ou=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_u=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ou=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ku=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ju=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ju=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ad=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ud=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Td=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:jc,alphahash_pars_fragment:$c,alphamap_fragment:th,alphamap_pars_fragment:eh,alphatest_fragment:nh,alphatest_pars_fragment:ih,aomap_fragment:sh,aomap_pars_fragment:rh,batching_pars_vertex:ah,batching_vertex:oh,begin_vertex:lh,beginnormal_vertex:ch,bsdfs:hh,iridescence_fragment:uh,bumpmap_pars_fragment:dh,clipping_planes_fragment:fh,clipping_planes_pars_fragment:ph,clipping_planes_pars_vertex:mh,clipping_planes_vertex:gh,color_fragment:xh,color_pars_fragment:vh,color_pars_vertex:yh,color_vertex:_h,common:Mh,cube_uv_reflection_fragment:Sh,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Ah,displacementmap_vertex:wh,emissivemap_fragment:bh,emissivemap_pars_fragment:Th,colorspace_fragment:Rh,colorspace_pars_fragment:Ch,envmap_fragment:Ph,envmap_common_pars_fragment:Ih,envmap_pars_fragment:Uh,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Wh,envmap_vertex:Lh,fog_vertex:Nh,fog_pars_vertex:Fh,fog_fragment:Bh,fog_pars_fragment:Oh,gradientmap_pars_fragment:zh,lightmap_pars_fragment:kh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Hh,lights_pars_begin:Gh,lights_toon_fragment:Xh,lights_toon_pars_fragment:Qh,lights_phong_fragment:Yh,lights_phong_pars_fragment:Zh,lights_physical_fragment:qh,lights_physical_pars_fragment:Jh,lights_fragment_begin:Kh,lights_fragment_maps:jh,lights_fragment_end:$h,logdepthbuf_fragment:tu,logdepthbuf_pars_fragment:eu,logdepthbuf_pars_vertex:nu,logdepthbuf_vertex:iu,map_fragment:su,map_pars_fragment:ru,map_particle_fragment:au,map_particle_pars_fragment:ou,metalnessmap_fragment:lu,metalnessmap_pars_fragment:cu,morphinstance_vertex:hu,morphcolor_vertex:uu,morphnormal_vertex:du,morphtarget_pars_vertex:fu,morphtarget_vertex:pu,normal_fragment_begin:mu,normal_fragment_maps:gu,normal_pars_fragment:xu,normal_pars_vertex:vu,normal_vertex:yu,normalmap_pars_fragment:_u,clearcoat_normal_fragment_begin:Mu,clearcoat_normal_fragment_maps:Su,clearcoat_pars_fragment:Eu,iridescence_pars_fragment:Au,opaque_fragment:wu,packing:bu,premultiplied_alpha_fragment:Tu,project_vertex:Ru,dithering_fragment:Cu,dithering_pars_fragment:Pu,roughnessmap_fragment:Iu,roughnessmap_pars_fragment:Uu,shadowmap_pars_fragment:Du,shadowmap_pars_vertex:Lu,shadowmap_vertex:Nu,shadowmask_pars_fragment:Fu,skinbase_vertex:Bu,skinning_pars_vertex:Ou,skinning_vertex:zu,skinnormal_vertex:ku,specularmap_fragment:Vu,specularmap_pars_fragment:Hu,tonemapping_fragment:Gu,tonemapping_pars_fragment:Wu,transmission_fragment:Xu,transmission_pars_fragment:Qu,uv_pars_fragment:Yu,uv_pars_vertex:Zu,uv_vertex:qu,worldpos_vertex:Ju,background_vert:Ku,background_frag:ju,backgroundCube_vert:$u,backgroundCube_frag:td,cube_vert:ed,cube_frag:nd,depth_vert:id,depth_frag:sd,distanceRGBA_vert:rd,distanceRGBA_frag:ad,equirect_vert:od,equirect_frag:ld,linedashed_vert:cd,linedashed_frag:hd,meshbasic_vert:ud,meshbasic_frag:dd,meshlambert_vert:fd,meshlambert_frag:pd,meshmatcap_vert:md,meshmatcap_frag:gd,meshnormal_vert:xd,meshnormal_frag:vd,meshphong_vert:yd,meshphong_frag:_d,meshphysical_vert:Md,meshphysical_frag:Sd,meshtoon_vert:Ed,meshtoon_frag:Ad,points_vert:wd,points_frag:bd,shadow_vert:Td,shadow_frag:Rd,sprite_vert:Cd,sprite_frag:Pd},ht={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},en={basic:{uniforms:Te([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Te([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Te([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Te([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Te([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Te([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Te([ht.points,ht.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Te([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Te([ht.common,ht.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Te([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Te([ht.sprite,ht.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Te([ht.common,ht.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Te([ht.lights,ht.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};en.physical={uniforms:Te([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var os={r:0,b:0,g:0},zn=new mn,Id=new ue;function Ud(i,t,e,n,s,r,a){let o=new kt(0),l=r===!0?0:1,c,h,f=null,d=0,m=null;function x(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function _(w){let S=!1,A=x(w);A===null?u(o,l):A&&A.isColor&&(u(A,1),S=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,S){let A=x(S);A&&(A.isCubeTexture||A.mapping===Ws)?(h===void 0&&(h=new ye(new Jn(1,1,1),new fe({name:"BackgroundCubeMaterial",uniforms:wi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zn.copy(S.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Id.makeRotationFromEuler(zn)),h.material.toneMapped=qt.getTransfer(A.colorSpace)!==ie,(f!==A||d!==A.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=A,d=A.version,m=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ye(new Kn(2,2),new fe({name:"BackgroundMaterial",uniforms:wi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qt.getTransfer(A.colorSpace)!==ie,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,m=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,S){w.getRGB(os,bl(i)),n.buffers.color.setClear(os.r,os.g,os.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:_,addToRenderList:p}}function Dd(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(g,M,W,H,Y){let $=!1,V=f(H,W,M);r!==V&&(r=V,c(r.object)),$=m(g,H,W,Y),$&&x(g,H,W,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,A(g,M,W,H),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function f(g,M,W){let H=W.wireframe===!0,Y=n[g.id];Y===void 0&&(Y={},n[g.id]=Y);let $=Y[M.id];$===void 0&&($={},Y[M.id]=$);let V=$[H];return V===void 0&&(V=d(l()),$[H]=V),V}function d(g){let M=[],W=[],H=[];for(let Y=0;Y<e;Y++)M[Y]=0,W[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:W,attributeDivisors:H,object:g,attributes:{},index:null}}function m(g,M,W,H){let Y=r.attributes,$=M.attributes,V=0,et=W.getAttributes();for(let G in et)if(et[G].location>=0){let pt=Y[G],yt=$[G];if(yt===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(yt=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(yt=g.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;V++}return r.attributesNum!==V||r.index!==H}function x(g,M,W,H){let Y={},$=M.attributes,V=0,et=W.getAttributes();for(let G in et)if(et[G].location>=0){let pt=$[G];pt===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(pt=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(pt=g.instanceColor));let yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),Y[G]=yt,V++}r.attributes=Y,r.attributesNum=V,r.index=H}function _(){let g=r.newAttributes;for(let M=0,W=g.length;M<W;M++)g[M]=0}function p(g){u(g,0)}function u(g,M){let W=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;W[g]=1,H[g]===0&&(i.enableVertexAttribArray(g),H[g]=1),Y[g]!==M&&(i.vertexAttribDivisor(g,M),Y[g]=M)}function w(){let g=r.newAttributes,M=r.enabledAttributes;for(let W=0,H=M.length;W<H;W++)M[W]!==g[W]&&(i.disableVertexAttribArray(W),M[W]=0)}function S(g,M,W,H,Y,$,V){V===!0?i.vertexAttribIPointer(g,M,W,Y,$):i.vertexAttribPointer(g,M,W,H,Y,$)}function A(g,M,W,H){_();let Y=H.attributes,$=W.getAttributes(),V=M.defaultAttributeValues;for(let et in $){let G=$[et];if(G.location>=0){let xt=Y[et];if(xt===void 0&&(et==="instanceMatrix"&&g.instanceMatrix&&(xt=g.instanceMatrix),et==="instanceColor"&&g.instanceColor&&(xt=g.instanceColor)),xt!==void 0){let pt=xt.normalized,yt=xt.itemSize,Yt=t.get(xt);if(Yt===void 0)continue;let Ft=Yt.buffer,X=Yt.type,j=Yt.bytesPerElement,vt=X===i.INT||X===i.UNSIGNED_INT||xt.gpuType===qa;if(xt.isInterleavedBufferAttribute){let dt=xt.data,Rt=dt.stride,Tt=xt.offset;if(dt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<G.locationSize;Ht++)u(G.location+Ht,dt.meshPerAttribute);g.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ht=0;Ht<G.locationSize;Ht++)p(G.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let Ht=0;Ht<G.locationSize;Ht++)S(G.location+Ht,yt/G.locationSize,X,pt,Rt*j,(Tt+yt/G.locationSize*Ht)*j,vt)}else{if(xt.isInstancedBufferAttribute){for(let dt=0;dt<G.locationSize;dt++)u(G.location+dt,xt.meshPerAttribute);g.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let dt=0;dt<G.locationSize;dt++)p(G.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let dt=0;dt<G.locationSize;dt++)S(G.location+dt,yt/G.locationSize,X,pt,yt*j,yt/G.locationSize*dt*j,vt)}}else if(V!==void 0){let pt=V[et];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(G.location,pt);break;case 3:i.vertexAttrib3fv(G.location,pt);break;case 4:i.vertexAttrib4fv(G.location,pt);break;default:i.vertexAttrib1fv(G.location,pt)}}}}w()}function O(){k();for(let g in n){let M=n[g];for(let W in M){let H=M[W];for(let Y in H)h(H[Y].object),delete H[Y];delete M[W]}delete n[g]}}function R(g){if(n[g.id]===void 0)return;let M=n[g.id];for(let W in M){let H=M[W];for(let Y in H)h(H[Y].object),delete H[Y];delete M[W]}delete n[g.id]}function b(g){for(let M in n){let W=n[M];if(W[g.id]===void 0)continue;let H=W[g.id];for(let Y in H)h(H[Y].object),delete H[Y];delete W[g.id]}}function k(){J(),a=!0,r!==s&&(r=s,c(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:J,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function Ld(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x];e.update(m,n,1)}function l(c,h,f,d){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let x=0;for(let _=0;_<f;_++)x+=h[_];for(let _=0;_<d.length;_++)e.update(x,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Nd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==je&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let k=b===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==fn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==un&&!k)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=x>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:O,maxSamples:R}}function Fd(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){let x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let w=r?0:n,S=w*4,A=u.clippingState||null;l.value=A,A=h(x,d,S,m);for(let O=0;O!==S;++O)A[O]=e[O];u.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,x){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,x!==!0||p===null){let u=m+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,A=m;S!==_;++S,A+=4)a.copy(f[S]).applyMatrix4(w,o),a.normal.toArray(p,A),p[A+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Bd(i){let t=new WeakMap;function e(a,o){return o===kr?a.mapping=_i:o===Vr&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===kr||o===Vr)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Sa(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ea=class extends Ds{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mi=4,zo=[.125,.215,.35,.446,.526,.582],Wn=20,Sr=new Ea,ko=new kt,Er=null,Ar=0,wr=0,br=!1,Vn=(1+Math.sqrt(5))/2,pi=1/Vn,Vo=[new D(-Vn,pi,0),new D(Vn,pi,0),new D(-pi,0,Vn),new D(pi,0,Vn),new D(0,Vn,-pi),new D(0,Vn,pi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Fs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Er=this._renderer.getRenderTarget(),Ar=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Er,Ar,wr),this._renderer.xr.enabled=br,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Er=this._renderer.getRenderTarget(),Ar=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:ki,format:je,colorSpace:nn,depthBuffer:!1},s=Ho(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Od(r)),this._blurMaterial=zd(r,t,e)}return s}_compileMaterial(t){let e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,Sr)}_sceneToCubeUV(t,e,n,s){let o=new Re(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ko),h.toneMapping=Pn,h.autoClear=!1;let m=new Ps({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),x=new ye(new Jn,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(ko),_=!0);for(let u=0;u<6;u++){let w=u%3;w===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):w===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let S=this._cubeSize;ls(s,w*S,u>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_i||t.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Sr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vo[(s-r-1)%Vo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ye(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Wn-1),_=r/x,p=isFinite(r)?1+Math.floor(h*_):Wn;p>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);let u=[],w=0;for(let b=0;b<Wn;++b){let k=b/_,J=Math.exp(-k*k/2);u.push(J),b===0?w+=J:b<p&&(w+=2*J)}for(let b=0;b<u.length;b++)u[b]=u[b]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=x,d.mipInt.value=S-n;let A=this._sizeLods[s],O=3*A*(s>S-mi?s-S+mi:0),R=4*(this._cubeSize-A);ls(e,O,R,3*A,2*A),l.setRenderTarget(e),l.render(f,Sr)}};function Od(i){let t=[],e=[],n=[],s=i,r=i-mi+1+zo.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-mi?l=zo[a-i+mi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,_=3,p=2,u=1,w=new Float32Array(_*x*m),S=new Float32Array(p*x*m),A=new Float32Array(u*x*m);for(let R=0;R<m;R++){let b=R%3*2/3-1,k=R>2?0:-1,J=[b,k,0,b+2/3,k,0,b+2/3,k+1,0,b,k,0,b+2/3,k+1,0,b,k+1,0];w.set(J,_*x*R),S.set(d,p*x*R);let g=[R,R,R,R,R,R];A.set(g,u*x*R)}let O=new Ce;O.setAttribute("position",new ae(w,_)),O.setAttribute("uv",new ae(S,p)),O.setAttribute("faceIndex",new ae(A,u)),t.push(O),s>mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ho(i,t,e){let n=new pn(i,t,e);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zd(i,t,e){let n=new Float32Array(Wn),s=new D(0,1,0);return new fe({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Go(){return new fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Wo(){return new fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function no(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===kr||l===Vr,h=l===_i||l===Mi;if(c||h){let f=t.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Fs(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Fs(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Vd(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hd(i,t,e,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let _=d.morphAttributes[x];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let x in m){let _=m[x];for(let p=0,u=_.length;p<u;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(f){let d=[],m=f.index,x=f.attributes.position,_=0;if(m!==null){let w=m.array;_=m.version;for(let S=0,A=w.length;S<A;S+=3){let O=w[S+0],R=w[S+1],b=w[S+2];d.push(O,R,R,b,b,O)}}else if(x!==void 0){let w=x.array;_=x.version;for(let S=0,A=w.length/3-1;S<A;S+=3){let O=S+0,R=S+1,b=S+2;d.push(O,R,R,b,b,O)}}else return;let p=new(Al(d)?Us:Is)(d,1);p.version=_;let u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Gd(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function c(d,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,d*a,x),e.update(m,n,x))}function h(d,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,x);let p=0;for(let u=0;u<x;u++)p+=m[u];e.update(p,n,1)}function f(d,m,x,_){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,_,0,x);let u=0;for(let w=0;w<x;w++)u+=m[w];for(let w=0;w<_.length;w++)e.update(u,n,_[w])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Wd(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xd(i,t,e){let n=new WeakMap,s=new he;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let J=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",J)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],S=0;m===!0&&(S=1),x===!0&&(S=2),_===!0&&(S=3);let A=o.attributes.position.count*S,O=1;A>t.maxTextureSize&&(O=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let R=new Float32Array(A*O*4*f),b=new Ts(R,A,O,f);b.type=un,b.needsUpdate=!0;let k=S*4;for(let g=0;g<f;g++){let M=p[g],W=u[g],H=w[g],Y=A*O*4*g;for(let $=0;$<M.count;$++){let V=$*k;m===!0&&(s.fromBufferAttribute(M,$),R[Y+V+0]=s.x,R[Y+V+1]=s.y,R[Y+V+2]=s.z,R[Y+V+3]=0),x===!0&&(s.fromBufferAttribute(W,$),R[Y+V+4]=s.x,R[Y+V+5]=s.y,R[Y+V+6]=s.z,R[Y+V+7]=0),_===!0&&(s.fromBufferAttribute(H,$),R[Y+V+8]=s.x,R[Y+V+9]=s.y,R[Y+V+10]=s.z,R[Y+V+11]=H.itemSize===4?s.w:1)}}d={count:f,texture:b,size:new te(A,O)},n.set(o,d),o.addEventListener("dispose",J)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Qd(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Bs=class extends We{constructor(t,e,n,s,r,a,o,l,c,h=gi){if(h!==gi&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gi&&(n=Yn),n===void 0&&h===Ei&&(n=Si),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rl=new We,Xo=new Bs(1,1),Cl=new Ts,Pl=new _a,Il=new Ls,Qo=[],Yo=[],Zo=new Float32Array(16),qo=new Float32Array(9),Jo=new Float32Array(4);function Ri(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Qo[s];if(r===void 0&&(r=new Float32Array(s),Qo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qs(i,t){let e=Yo[t];e===void 0&&(e=new Int32Array(t),Yo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yd(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function qd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Jd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Kd(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Jo.set(n),i.uniformMatrix2fv(this.addr,!1,Jo),me(e,n)}}function jd(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;qo.set(n),i.uniformMatrix3fv(this.addr,!1,qo),me(e,n)}}function $d(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Zo.set(n),i.uniformMatrix4fv(this.addr,!1,Zo),me(e,n)}}function tf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ef(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function nf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function sf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function rf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function af(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function of(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function lf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function cf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xo.compareFunction=El,r=Xo):r=Rl,e.setTexture2D(t||r,s)}function hf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pl,s)}function uf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Il,s)}function df(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cl,s)}function ff(i){switch(i){case 5126:return Yd;case 35664:return Zd;case 35665:return qd;case 35666:return Jd;case 35674:return Kd;case 35675:return jd;case 35676:return $d;case 5124:case 35670:return tf;case 35667:case 35671:return ef;case 35668:case 35672:return nf;case 35669:case 35673:return sf;case 5125:return rf;case 36294:return af;case 36295:return of;case 36296:return lf;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return hf;case 35680:case 36300:case 36308:case 36293:return uf;case 36289:case 36303:case 36311:case 36292:return df}}function pf(i,t){i.uniform1fv(this.addr,t)}function mf(i,t){let e=Ri(t,this.size,2);i.uniform2fv(this.addr,e)}function gf(i,t){let e=Ri(t,this.size,3);i.uniform3fv(this.addr,e)}function xf(i,t){let e=Ri(t,this.size,4);i.uniform4fv(this.addr,e)}function vf(i,t){let e=Ri(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yf(i,t){let e=Ri(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _f(i,t){let e=Ri(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mf(i,t){i.uniform1iv(this.addr,t)}function Sf(i,t){i.uniform2iv(this.addr,t)}function Ef(i,t){i.uniform3iv(this.addr,t)}function Af(i,t){i.uniform4iv(this.addr,t)}function wf(i,t){i.uniform1uiv(this.addr,t)}function bf(i,t){i.uniform2uiv(this.addr,t)}function Tf(i,t){i.uniform3uiv(this.addr,t)}function Rf(i,t){i.uniform4uiv(this.addr,t)}function Cf(i,t,e){let n=this.cache,s=t.length,r=Qs(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Rl,r[a])}function Pf(i,t,e){let n=this.cache,s=t.length,r=Qs(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Pl,r[a])}function If(i,t,e){let n=this.cache,s=t.length,r=Qs(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Il,r[a])}function Uf(i,t,e){let n=this.cache,s=t.length,r=Qs(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cl,r[a])}function Df(i){switch(i){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return xf;case 35674:return vf;case 35675:return yf;case 35676:return _f;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return Ef;case 35669:case 35673:return Af;case 5125:return wf;case 36294:return bf;case 36295:return Tf;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return Uf}}var Aa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ff(e.type)}},wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Df(e.type)}},ba=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Tr=/(\w+)(\])?(\[|\.)?/g;function Ko(i,t){i.seq.push(t),i.map[t.id]=t}function Lf(i,t,e){let n=i.name,s=n.length;for(Tr.lastIndex=0;;){let r=Tr.exec(n),a=Tr.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ko(e,c===void 0?new Aa(o,i,t):new wa(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new ba(o),Ko(e,f)),e=f}}}var vi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Lf(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function jo(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Nf=37297,Ff=0;function Bf(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Of(i){let t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i),n;switch(t===e?n="":t===Es&&e===Ss?n="LinearDisplayP3ToLinearSRGB":t===Ss&&e===Es&&(n="LinearSRGBToLinearDisplayP3"),i){case nn:case Xs:return[n,"LinearTransferOETF"];case tn:case eo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $o(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Bf(i.getShaderSource(t),a)}else return s}function zf(i,t){let e=Of(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kf(i,t){let e;switch(t){case lc:e="Linear";break;case cc:e="Reinhard";break;case hc:e="Cineon";break;case uc:e="ACESFilmic";break;case fc:e="AgX";break;case pc:e="Neutral";break;case dc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var cs=new D;function Vf(){qt.getLuminanceCoefficients(cs);let i=cs.x.toFixed(4),t=cs.y.toFixed(4),e=cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function Gf(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wf(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Bi(i){return i!==""}function tl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(Xf,Yf)}var Qf=new Map;function Yf(i,t){let e=Ot[t];if(e===void 0){let n=Qf.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ta(e)}var Zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(i){return i.replace(Zf,qf)}function qf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function il(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Kf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case Mi:t="ENVMAP_TYPE_CUBE";break;case Ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mi:t="ENVMAP_MODE_REFRACTION";break}return t}function $f(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case ac:t="ENVMAP_BLENDING_MIX";break;case oc:t="ENVMAP_BLENDING_ADD";break}return t}function tp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ep(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Jf(e),c=Kf(e),h=jf(e),f=$f(e),d=tp(e),m=Hf(e),x=Gf(r),_=s.createProgram(),p,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Bi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Bi).join(`
`),u.length>0&&(u+=`
`)):(p=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),u=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Pn?kf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,zf("linearToOutputTexel",e.outputColorSpace),Vf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),a=Ta(a),a=tl(a,e),a=el(a,e),o=Ta(o),o=tl(o,e),o=el(o,e),a=nl(a),o=nl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=w+p+a,A=w+u+o,O=jo(s,s.VERTEX_SHADER,S),R=jo(s,s.FRAGMENT_SHADER,A);s.attachShader(_,O),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(M){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(O).trim(),Y=s.getShaderInfoLog(R).trim(),$=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,O,R);else{let et=$o(s,O,"vertex"),G=$o(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+W+`
`+et+`
`+G)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||Y==="")&&(V=!1);V&&(M.diagnostics={runnable:$,programLog:W,vertexShader:{log:H,prefix:p},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(O),s.deleteShader(R),k=new vi(s,_),J=Wf(s,_)}let k;this.getUniforms=function(){return k===void 0&&b(this),k};let J;this.getAttributes=function(){return J===void 0&&b(this),J};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(_,Nf)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ff++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=R,this}var np=0,Ra=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ca(t),e.set(t,n)),n}},Ca=class{constructor(t){this.id=np++,this.code=t,this.usedTimes=0}};function ip(i,t,e,n,s,r,a){let o=new Cs,l=new Ra,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,m=s.vertexTextures,x=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function u(g,M,W,H,Y){let $=H.fog,V=Y.geometry,et=g.isMeshStandardMaterial?H.environment:null,G=(g.isMeshStandardMaterial?e:t).get(g.envMap||et),xt=G&&G.mapping===Ws?G.image.height:null,pt=_[g.type];g.precision!==null&&(x=s.getMaxPrecision(g.precision),x!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",x,"instead."));let yt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Yt=yt!==void 0?yt.length:0,Ft=0;V.morphAttributes.position!==void 0&&(Ft=1),V.morphAttributes.normal!==void 0&&(Ft=2),V.morphAttributes.color!==void 0&&(Ft=3);let X,j,vt,dt;if(pt){let st=en[pt];X=st.vertexShader,j=st.fragmentShader}else X=g.vertexShader,j=g.fragmentShader,l.update(g),vt=l.getVertexShaderID(g),dt=l.getFragmentShaderID(g);let Rt=i.getRenderTarget(),Tt=Y.isInstancedMesh===!0,Ht=Y.isBatchedMesh===!0,Jt=!!g.map,Gt=!!g.matcap,T=!!G,we=!!g.aoMap,Lt=!!g.lightMap,Vt=!!g.bumpMap,Ct=!!g.normalMap,ee=!!g.displacementMap,Pt=!!g.emissiveMap,E=!!g.metalnessMap,v=!!g.roughnessMap,L=g.anisotropy>0,Z=g.clearcoat>0,tt=g.dispersion>0,q=g.iridescence>0,St=g.sheen>0,ut=g.transmission>0,gt=L&&!!g.anisotropyMap,Wt=Z&&!!g.clearcoatMap,P=Z&&!!g.clearcoatNormalMap,N=Z&&!!g.clearcoatRoughnessMap,nt=q&&!!g.iridescenceMap,rt=q&&!!g.iridescenceThicknessMap,K=St&&!!g.sheenColorMap,_t=St&&!!g.sheenRoughnessMap,ft=!!g.specularMap,It=!!g.specularColorMap,C=!!g.specularIntensityMap,at=ut&&!!g.transmissionMap,F=ut&&!!g.thicknessMap,Q=!!g.gradientMap,ot=!!g.alphaMap,lt=g.alphaTest>0,ct=!!g.alphaHash,Nt=!!g.extensions,Bt=Pn;g.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let bt={shaderID:pt,shaderType:g.type,shaderName:g.name,vertexShader:X,fragmentShader:j,defines:g.defines,customVertexShaderID:vt,customFragmentShaderID:dt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:x,batching:Ht,batchingColor:Ht&&Y._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&Y.instanceColor!==null,instancingMorph:Tt&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:nn,alphaToCoverage:!!g.alphaToCoverage,map:Jt,matcap:Gt,envMap:T,envMapMode:T&&G.mapping,envMapCubeUVHeight:xt,aoMap:we,lightMap:Lt,bumpMap:Vt,normalMap:Ct,displacementMap:m&&ee,emissiveMap:Pt,normalMapObjectSpace:Ct&&g.normalMapType===yc,normalMapTangentSpace:Ct&&g.normalMapType===vc,metalnessMap:E,roughnessMap:v,anisotropy:L,anisotropyMap:gt,clearcoat:Z,clearcoatMap:Wt,clearcoatNormalMap:P,clearcoatRoughnessMap:N,dispersion:tt,iridescence:q,iridescenceMap:nt,iridescenceThicknessMap:rt,sheen:St,sheenColorMap:K,sheenRoughnessMap:_t,specularMap:ft,specularColorMap:It,specularIntensityMap:C,transmission:ut,transmissionMap:at,thicknessMap:F,gradientMap:Q,opaque:g.transparent===!1&&g.blending===Cn&&g.alphaToCoverage===!1,alphaMap:ot,alphaTest:lt,alphaHash:ct,combine:g.combine,mapUv:Jt&&p(g.map.channel),aoMapUv:we&&p(g.aoMap.channel),lightMapUv:Lt&&p(g.lightMap.channel),bumpMapUv:Vt&&p(g.bumpMap.channel),normalMapUv:Ct&&p(g.normalMap.channel),displacementMapUv:ee&&p(g.displacementMap.channel),emissiveMapUv:Pt&&p(g.emissiveMap.channel),metalnessMapUv:E&&p(g.metalnessMap.channel),roughnessMapUv:v&&p(g.roughnessMap.channel),anisotropyMapUv:gt&&p(g.anisotropyMap.channel),clearcoatMapUv:Wt&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:P&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:K&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(g.sheenRoughnessMap.channel),specularMapUv:ft&&p(g.specularMap.channel),specularColorMapUv:It&&p(g.specularColorMap.channel),specularIntensityMapUv:C&&p(g.specularIntensityMap.channel),transmissionMapUv:at&&p(g.transmissionMap.channel),thicknessMapUv:F&&p(g.thicknessMap.channel),alphaMapUv:ot&&p(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ct||L),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!V.attributes.uv&&(Jt||ot),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Jt&&g.map.isVideoTexture===!0&&qt.getTransfer(g.map.colorSpace)===ie,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ve,flipSided:g.side===Ie,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Nt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&g.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function w(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let W in g.defines)M.push(W),M.push(g.defines[W]);return g.isRawShaderMaterial===!1&&(S(M,g),A(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function S(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function A(g,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),g.push(o.mask)}function O(g){let M=_[g.type],W;if(M){let H=en[M];W=Qc.clone(H.uniforms)}else W=g.uniforms;return W}function R(g,M){let W;for(let H=0,Y=h.length;H<Y;H++){let $=h[H];if($.cacheKey===M){W=$,++W.usedTimes;break}}return W===void 0&&(W=new ep(i,M,g,r),h.push(W)),W}function b(g){if(--g.usedTimes===0){let M=h.indexOf(g);h[M]=h[h.length-1],h.pop(),g.destroy()}}function k(g){l.remove(g)}function J(){l.dispose()}return{getParameters:u,getProgramCacheKey:w,getUniforms:O,acquireProgram:R,releaseProgram:b,releaseShaderCache:k,programs:h,dispose:J}}function sp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,m,x,_,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=_,u.group=p),t++,u}function o(f,d,m,x,_,p){let u=a(f,d,m,x,_,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(f,d,m,x,_,p){let u=a(f,d,m,x,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,d){e.length>1&&e.sort(f||rp),n.length>1&&n.sort(d||sl),s.length>1&&s.sort(d||sl)}function h(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function ap(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rl,i.set(n,[a])):s>=r.length?(a=new rl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function op(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new kt};break;case"SpotLight":e={position:new D,direction:new D,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function lp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cp=0;function hp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function up(i){let t=new op,e=lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ue,a=new ue;function o(c){let h=0,f=0,d=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let m=0,x=0,_=0,p=0,u=0,w=0,S=0,A=0,O=0,R=0,b=0;c.sort(hp);for(let J=0,g=c.length;J<g;J++){let M=c[J],W=M.color,H=M.intensity,Y=M.distance,$=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=W.r*H,f+=W.g*H,d+=W.b*H;else if(M.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(M.sh.coefficients[V],H);b++}else if(M.isDirectionalLight){let V=t.get(M);if(V.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let et=M.shadow,G=e.get(M);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=M.shadow.matrix,w++}n.directional[m]=V,m++}else if(M.isSpotLight){let V=t.get(M);V.position.setFromMatrixPosition(M.matrixWorld),V.color.copy(W).multiplyScalar(H),V.distance=Y,V.coneCos=Math.cos(M.angle),V.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),V.decay=M.decay,n.spot[_]=V;let et=M.shadow;if(M.map&&(n.spotLightMap[O]=M.map,O++,et.updateMatrices(M),M.castShadow&&R++),n.spotLightMatrix[_]=et.matrix,M.castShadow){let G=e.get(M);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,A++}_++}else if(M.isRectAreaLight){let V=t.get(M);V.color.copy(W).multiplyScalar(H),V.halfWidth.set(M.width*.5,0,0),V.halfHeight.set(0,M.height*.5,0),n.rectArea[p]=V,p++}else if(M.isPointLight){let V=t.get(M);if(V.color.copy(M.color).multiplyScalar(M.intensity),V.distance=M.distance,V.decay=M.decay,M.castShadow){let et=M.shadow,G=e.get(M);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,n.pointShadow[x]=G,n.pointShadowMap[x]=$,n.pointShadowMatrix[x]=M.shadow.matrix,S++}n.point[x]=V,x++}else if(M.isHemisphereLight){let V=t.get(M);V.skyColor.copy(M.color).multiplyScalar(H),V.groundColor.copy(M.groundColor).multiplyScalar(H),n.hemi[u]=V,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let k=n.hash;(k.directionalLength!==m||k.pointLength!==x||k.spotLength!==_||k.rectAreaLength!==p||k.hemiLength!==u||k.numDirectionalShadows!==w||k.numPointShadows!==S||k.numSpotShadows!==A||k.numSpotMaps!==O||k.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=A+O-R,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,k.directionalLength=m,k.pointLength=x,k.spotLength=_,k.rectAreaLength=p,k.hemiLength=u,k.numDirectionalShadows=w,k.numPointShadows=S,k.numSpotShadows=A,k.numSpotMaps=O,k.numLightProbes=b,n.version=cp++)}function l(c,h){let f=0,d=0,m=0,x=0,_=0,p=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){let S=c[u];if(S.isDirectionalLight){let A=n.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(S.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let A=n.hemi[_];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function al(i){let t=new up(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function dp(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new al(i),t.set(s,[o])):r>=a.length?(o=new al(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Pa=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ia=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mp(i,t,e){let n=new Ns,s=new te,r=new te,a=new he,o=new Pa({depthPacking:xc}),l=new Ia,c={},h=e.maxTextureSize,f={[In]:Ie,[Ie]:In,[Ve]:Ve},d=new fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:fp,fragmentShader:pp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let x=new Ce;x.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ye(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let u=this.type;this.render=function(R,b,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let J=i.getRenderTarget(),g=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Rn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let H=u!==cn&&this.type===cn,Y=u===cn&&this.type!==cn;for(let $=0,V=R.length;$<V;$++){let et=R[$],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let xt=G.getFrameExtents();if(s.multiply(xt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xt.x),s.x=r.x*xt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xt.y),s.y=r.y*xt.y,G.mapSize.y=r.y)),G.map===null||H===!0||Y===!0){let yt=this.type!==cn?{minFilter:He,magFilter:He}:{};G.map!==null&&G.map.dispose(),G.map=new pn(s.x,s.y,yt),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let pt=G.getViewportCount();for(let yt=0;yt<pt;yt++){let Yt=G.getViewport(yt);a.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),W.viewport(a),G.updateMatrices(et,yt),n=G.getFrustum(),A(b,k,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===cn&&w(G,k),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(J,g,M)};function w(R,b){let k=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,k,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,k,m,_,null)}function S(R,b,k,J){let g=null,M=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)g=M;else if(g=k.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let W=g.uuid,H=b.uuid,Y=c[W];Y===void 0&&(Y={},c[W]=Y);let $=Y[H];$===void 0&&($=g.clone(),Y[H]=$,b.addEventListener("dispose",O)),g=$}if(g.visible=b.visible,g.wireframe=b.wireframe,J===cn?g.side=b.shadowSide!==null?b.shadowSide:b.side:g.side=b.shadowSide!==null?b.shadowSide:f[b.side],g.alphaMap=b.alphaMap,g.alphaTest=b.alphaTest,g.map=b.map,g.clipShadows=b.clipShadows,g.clippingPlanes=b.clippingPlanes,g.clipIntersection=b.clipIntersection,g.displacementMap=b.displacementMap,g.displacementScale=b.displacementScale,g.displacementBias=b.displacementBias,g.wireframeLinewidth=b.wireframeLinewidth,g.linewidth=b.linewidth,k.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let W=i.properties.get(g);W.light=k}return g}function A(R,b,k,J,g){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&g===cn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);let H=t.update(R),Y=R.material;if(Array.isArray(Y)){let $=H.groups;for(let V=0,et=$.length;V<et;V++){let G=$[V],xt=Y[G.materialIndex];if(xt&&xt.visible){let pt=S(R,xt,J,g);R.onBeforeShadow(i,R,b,k,H,pt,G),i.renderBufferDirect(k,null,H,pt,R,G),R.onAfterShadow(i,R,b,k,H,pt,G)}}}else if(Y.visible){let $=S(R,Y,J,g);R.onBeforeShadow(i,R,b,k,H,$,null),i.renderBufferDirect(k,null,H,$,R,null),R.onAfterShadow(i,R,b,k,H,$,null)}}let W=R.children;for(let H=0,Y=W.length;H<Y;H++)A(W[H],b,k,J,g)}function O(R){R.target.removeEventListener("dispose",O);for(let k in c){let J=c[k],g=R.target.uuid;g in J&&(J[g].dispose(),delete J[g])}}}var gp={[Dr]:Lr,[Nr]:Or,[Fr]:zr,[yi]:Br,[Lr]:Dr,[Or]:Nr,[zr]:Fr,[Br]:yi};function xp(i){function t(){let C=!1,at=new he,F=null,Q=new he(0,0,0,0);return{setMask:function(ot){F!==ot&&!C&&(i.colorMask(ot,ot,ot,ot),F=ot)},setLocked:function(ot){C=ot},setClear:function(ot,lt,ct,Nt,Bt){Bt===!0&&(ot*=Nt,lt*=Nt,ct*=Nt),at.set(ot,lt,ct,Nt),Q.equals(at)===!1&&(i.clearColor(ot,lt,ct,Nt),Q.copy(at))},reset:function(){C=!1,F=null,Q.set(-1,0,0,0)}}}function e(){let C=!1,at=!1,F=null,Q=null,ot=null;return{setReversed:function(lt){at=lt},setTest:function(lt){lt?vt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(lt){F!==lt&&!C&&(i.depthMask(lt),F=lt)},setFunc:function(lt){if(at&&(lt=gp[lt]),Q!==lt){switch(lt){case Dr:i.depthFunc(i.NEVER);break;case Lr:i.depthFunc(i.ALWAYS);break;case Nr:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case Fr:i.depthFunc(i.EQUAL);break;case Br:i.depthFunc(i.GEQUAL);break;case Or:i.depthFunc(i.GREATER);break;case zr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=lt}},setLocked:function(lt){C=lt},setClear:function(lt){ot!==lt&&(i.clearDepth(lt),ot=lt)},reset:function(){C=!1,F=null,Q=null,ot=null}}}function n(){let C=!1,at=null,F=null,Q=null,ot=null,lt=null,ct=null,Nt=null,Bt=null;return{setTest:function(bt){C||(bt?vt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(bt){at!==bt&&!C&&(i.stencilMask(bt),at=bt)},setFunc:function(bt,st,Xt){(F!==bt||Q!==st||ot!==Xt)&&(i.stencilFunc(bt,st,Xt),F=bt,Q=st,ot=Xt)},setOp:function(bt,st,Xt){(lt!==bt||ct!==st||Nt!==Xt)&&(i.stencilOp(bt,st,Xt),lt=bt,ct=st,Nt=Xt)},setLocked:function(bt){C=bt},setClear:function(bt){Bt!==bt&&(i.clearStencil(bt),Bt=bt)},reset:function(){C=!1,at=null,F=null,Q=null,ot=null,lt=null,ct=null,Nt=null,Bt=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,d=[],m=null,x=!1,_=null,p=null,u=null,w=null,S=null,A=null,O=null,R=new kt(0,0,0),b=0,k=!1,J=null,g=null,M=null,W=null,H=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,V=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(et)[1]),$=V>=1):et.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),$=V>=2);let G=null,xt={},pt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),Yt=new he().fromArray(pt),Ft=new he().fromArray(yt);function X(C,at,F,Q){let ot=new Uint8Array(4),lt=i.createTexture();i.bindTexture(C,lt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<F;ct++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(at+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return lt}let j={};j[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),vt(i.DEPTH_TEST),r.setFunc(yi),Lt(!1),Vt(uo),vt(i.CULL_FACE),T(Rn);function vt(C){c[C]!==!0&&(i.enable(C),c[C]=!0)}function dt(C){c[C]!==!1&&(i.disable(C),c[C]=!1)}function Rt(C,at){return h[C]!==at?(i.bindFramebuffer(C,at),h[C]=at,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=at),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Tt(C,at){let F=d,Q=!1;if(C){F=f.get(at),F===void 0&&(F=[],f.set(at,F));let ot=C.textures;if(F.length!==ot.length||F[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,ct=ot.length;lt<ct;lt++)F[lt]=i.COLOR_ATTACHMENT0+lt;F.length=ot.length,Q=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,Q=!0);Q&&i.drawBuffers(F)}function Ht(C){return m!==C?(i.useProgram(C),m=C,!0):!1}let Jt={[Hn]:i.FUNC_ADD,[Gl]:i.FUNC_SUBTRACT,[Wl]:i.FUNC_REVERSE_SUBTRACT};Jt[Xl]=i.MIN,Jt[Ql]=i.MAX;let Gt={[Yl]:i.ZERO,[Zl]:i.ONE,[ql]:i.SRC_COLOR,[Ir]:i.SRC_ALPHA,[ec]:i.SRC_ALPHA_SATURATE,[$l]:i.DST_COLOR,[Kl]:i.DST_ALPHA,[Jl]:i.ONE_MINUS_SRC_COLOR,[Ur]:i.ONE_MINUS_SRC_ALPHA,[tc]:i.ONE_MINUS_DST_COLOR,[jl]:i.ONE_MINUS_DST_ALPHA,[nc]:i.CONSTANT_COLOR,[ic]:i.ONE_MINUS_CONSTANT_COLOR,[sc]:i.CONSTANT_ALPHA,[rc]:i.ONE_MINUS_CONSTANT_ALPHA};function T(C,at,F,Q,ot,lt,ct,Nt,Bt,bt){if(C===Rn){x===!0&&(dt(i.BLEND),x=!1);return}if(x===!1&&(vt(i.BLEND),x=!0),C!==Hl){if(C!==_||bt!==k){if((p!==Hn||S!==Hn)&&(i.blendEquation(i.FUNC_ADD),p=Hn,S=Hn),bt)switch(C){case Cn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFunc(i.ONE,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Cn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}u=null,w=null,A=null,O=null,R.set(0,0,0),b=0,_=C,k=bt}return}ot=ot||at,lt=lt||F,ct=ct||Q,(at!==p||ot!==S)&&(i.blendEquationSeparate(Jt[at],Jt[ot]),p=at,S=ot),(F!==u||Q!==w||lt!==A||ct!==O)&&(i.blendFuncSeparate(Gt[F],Gt[Q],Gt[lt],Gt[ct]),u=F,w=Q,A=lt,O=ct),(Nt.equals(R)===!1||Bt!==b)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Bt),R.copy(Nt),b=Bt),_=C,k=!1}function we(C,at){C.side===Ve?dt(i.CULL_FACE):vt(i.CULL_FACE);let F=C.side===Ie;at&&(F=!F),Lt(F),C.blending===Cn&&C.transparent===!1?T(Rn):T(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);let Q=C.stencilWrite;a.setTest(Q),Q&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ee(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(C){J!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),J=C)}function Vt(C){C!==zl?(vt(i.CULL_FACE),C!==g&&(C===uo?i.cullFace(i.BACK):C===kl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),g=C}function Ct(C){C!==M&&($&&i.lineWidth(C),M=C)}function ee(C,at,F){C?(vt(i.POLYGON_OFFSET_FILL),(W!==at||H!==F)&&(i.polygonOffset(at,F),W=at,H=F)):dt(i.POLYGON_OFFSET_FILL)}function Pt(C){C?vt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function E(C){C===void 0&&(C=i.TEXTURE0+Y-1),G!==C&&(i.activeTexture(C),G=C)}function v(C,at,F){F===void 0&&(G===null?F=i.TEXTURE0+Y-1:F=G);let Q=xt[F];Q===void 0&&(Q={type:void 0,texture:void 0},xt[F]=Q),(Q.type!==C||Q.texture!==at)&&(G!==F&&(i.activeTexture(F),G=F),i.bindTexture(C,at||j[C]),Q.type=C,Q.texture=at)}function L(){let C=xt[G];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function P(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function N(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function nt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(C){Yt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Yt.copy(C))}function K(C){Ft.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Ft.copy(C))}function _t(C,at){let F=l.get(at);F===void 0&&(F=new WeakMap,l.set(at,F));let Q=F.get(C);Q===void 0&&(Q=i.getUniformBlockIndex(at,C.name),F.set(C,Q))}function ft(C,at){let Q=l.get(at).get(C);o.get(at)!==Q&&(i.uniformBlockBinding(at,Q,C.__bindingPointIndex),o.set(at,Q))}function It(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,xt={},h={},f=new WeakMap,d=[],m=null,x=!1,_=null,p=null,u=null,w=null,S=null,A=null,O=null,R=new kt(0,0,0),b=0,k=!1,J=null,g=null,M=null,W=null,H=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Ft.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:vt,disable:dt,bindFramebuffer:Rt,drawBuffers:Tt,useProgram:Ht,setBlending:T,setMaterial:we,setFlipSided:Lt,setCullFace:Vt,setLineWidth:Ct,setPolygonOffset:ee,setScissorTest:Pt,activeTexture:E,bindTexture:v,unbindTexture:L,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:N,texImage3D:nt,updateUBOMapping:_t,uniformBlockBinding:ft,texStorage2D:Wt,texStorage3D:P,texSubImage2D:q,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:rt,viewport:K,reset:It}}function ol(i,t,e,n){let s=vp(n);switch(e){case gl:return i*t;case vl:return i*t;case yl:return i*t*2;case _l:return i*t/s.components*s.byteLength;case ja:return i*t/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case $a:return i*t*2/s.components*s.byteLength;case xl:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case to:return i*t*4/s.components*s.byteLength;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gs:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xr:case Yr:return Math.max(i,16)*Math.max(t,8)/4;case Wr:case Qr:return Math.max(i,8)*Math.max(t,8)/2;case Zr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $r:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vs:case ua:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sl:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vp(i){switch(i){case fn:case fl:return{byteLength:1,components:1};case zi:case pl:case ki:return{byteLength:2,components:1};case Ja:case Ka:return{byteLength:2,components:4};case Yn:case qa:case un:return{byteLength:4,components:1};case ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function yp(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,v){return m?new OffscreenCanvas(E,v):ws("canvas")}function _(E,v,L){let Z=1,tt=Pt(E);if((tt.width>L||tt.height>L)&&(Z=L/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let q=Math.floor(Z*tt.width),St=Math.floor(Z*tt.height);f===void 0&&(f=x(q,St));let ut=v?x(q,St):f;return ut.width=q,ut.height=St,ut.getContext("2d").drawImage(E,0,0,q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+q+"x"+St+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==He&&E.minFilter!==Ke}function u(E){i.generateMipmap(E)}function w(E,v,L,Z,tt=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=v;if(v===i.RED&&(L===i.FLOAT&&(q=i.R32F),L===i.HALF_FLOAT&&(q=i.R16F),L===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.R8UI),L===i.UNSIGNED_SHORT&&(q=i.R16UI),L===i.UNSIGNED_INT&&(q=i.R32UI),L===i.BYTE&&(q=i.R8I),L===i.SHORT&&(q=i.R16I),L===i.INT&&(q=i.R32I)),v===i.RG&&(L===i.FLOAT&&(q=i.RG32F),L===i.HALF_FLOAT&&(q=i.RG16F),L===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RG8UI),L===i.UNSIGNED_SHORT&&(q=i.RG16UI),L===i.UNSIGNED_INT&&(q=i.RG32UI),L===i.BYTE&&(q=i.RG8I),L===i.SHORT&&(q=i.RG16I),L===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGB8UI),L===i.UNSIGNED_SHORT&&(q=i.RGB16UI),L===i.UNSIGNED_INT&&(q=i.RGB32UI),L===i.BYTE&&(q=i.RGB8I),L===i.SHORT&&(q=i.RGB16I),L===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),L===i.UNSIGNED_INT&&(q=i.RGBA32UI),L===i.BYTE&&(q=i.RGBA8I),L===i.SHORT&&(q=i.RGBA16I),L===i.INT&&(q=i.RGBA32I)),v===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){let St=tt?Ms:qt.getTransfer(Z);L===i.FLOAT&&(q=i.RGBA32F),L===i.HALF_FLOAT&&(q=i.RGBA16F),L===i.UNSIGNED_BYTE&&(q=St===ie?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(E,v){let L;return E?v===null||v===Yn||v===Si?L=i.DEPTH24_STENCIL8:v===un?L=i.DEPTH32F_STENCIL8:v===zi&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Yn||v===Si?L=i.DEPTH_COMPONENT24:v===un?L=i.DEPTH_COMPONENT32F:v===zi&&(L=i.DEPTH_COMPONENT16),L}function A(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==He&&E.minFilter!==Ke?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function O(E){let v=E.target;v.removeEventListener("dispose",O),b(v),v.isVideoTexture&&h.delete(v)}function R(E){let v=E.target;v.removeEventListener("dispose",R),J(v)}function b(E){let v=n.get(E);if(v.__webglInit===void 0)return;let L=E.source,Z=d.get(L);if(Z){let tt=Z[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&k(E),Object.keys(Z).length===0&&d.delete(L)}n.remove(E)}function k(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let L=E.source,Z=d.get(L);delete Z[v.__cacheKey],a.memory.textures--}function J(E){let v=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let tt=0;tt<v.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=E.textures;for(let Z=0,tt=L.length;Z<tt;Z++){let q=n.get(L[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(L[Z])}n.remove(E)}let g=0;function M(){g=0}function W(){let E=g;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),g+=1,E}function H(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Y(E,v){let L=n.get(E);if(E.isVideoTexture&&Ct(E),E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(L,E,v);return}}e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+v)}function $(E,v){let L=n.get(E);if(E.version>0&&L.__version!==E.version){Ft(L,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+v)}function V(E,v){let L=n.get(E);if(E.version>0&&L.__version!==E.version){Ft(L,E,v);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+v)}function et(E,v){let L=n.get(E);if(E.version>0&&L.__version!==E.version){X(L,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+v)}let G={[Hr]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},xt={[He]:i.NEAREST,[mc]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Ks]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},pt={[_c]:i.NEVER,[bc]:i.ALWAYS,[Mc]:i.LESS,[El]:i.LEQUAL,[Sc]:i.EQUAL,[wc]:i.GEQUAL,[Ec]:i.GREATER,[Ac]:i.NOTEQUAL};function yt(E,v){if(v.type===un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ke||v.magFilter===Ks||v.magFilter===Gi||v.magFilter===Qn||v.minFilter===Ke||v.minFilter===Ks||v.minFilter===Gi||v.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,G[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,G[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,G[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,xt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===He||v.minFilter!==Gi&&v.minFilter!==Qn||v.type===un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(E,v){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",O));let Z=v.source,tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));let q=H(v);if(q!==E.__cacheKey){tt[q]===void 0&&(tt[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),tt[q].usedTimes++;let St=tt[E.__cacheKey];St!==void 0&&(tt[E.__cacheKey].usedTimes--,St.usedTimes===0&&k(v)),E.__cacheKey=q,E.__webglTexture=tt[q].texture}return L}function Ft(E,v,L){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);let tt=Yt(E,v),q=v.source;e.bindTexture(Z,E.__webglTexture,i.TEXTURE0+L);let St=n.get(q);if(q.version!==St.__version||tt===!0){e.activeTexture(i.TEXTURE0+L);let ut=qt.getPrimaries(qt.workingColorSpace),gt=v.colorSpace===bn?null:qt.getPrimaries(v.colorSpace),Wt=v.colorSpace===bn||ut===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let P=_(v.image,!1,s.maxTextureSize);P=ee(v,P);let N=r.convert(v.format,v.colorSpace),nt=r.convert(v.type),rt=w(v.internalFormat,N,nt,v.colorSpace,v.isVideoTexture);yt(Z,v);let K,_t=v.mipmaps,ft=v.isVideoTexture!==!0,It=St.__version===void 0||tt===!0,C=q.dataReady,at=A(v,P);if(v.isDepthTexture)rt=S(v.format===Ei,v.type),It&&(ft?e.texStorage2D(i.TEXTURE_2D,1,rt,P.width,P.height):e.texImage2D(i.TEXTURE_2D,0,rt,P.width,P.height,0,N,nt,null));else if(v.isDataTexture)if(_t.length>0){ft&&It&&e.texStorage2D(i.TEXTURE_2D,at,rt,_t[0].width,_t[0].height);for(let F=0,Q=_t.length;F<Q;F++)K=_t[F],ft?C&&e.texSubImage2D(i.TEXTURE_2D,F,0,0,K.width,K.height,N,nt,K.data):e.texImage2D(i.TEXTURE_2D,F,rt,K.width,K.height,0,N,nt,K.data);v.generateMipmaps=!1}else ft?(It&&e.texStorage2D(i.TEXTURE_2D,at,rt,P.width,P.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,N,nt,P.data)):e.texImage2D(i.TEXTURE_2D,0,rt,P.width,P.height,0,N,nt,P.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ft&&It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,rt,_t[0].width,_t[0].height,P.depth);for(let F=0,Q=_t.length;F<Q;F++)if(K=_t[F],v.format!==je)if(N!==null)if(ft){if(C)if(v.layerUpdates.size>0){let ot=ol(K.width,K.height,v.format,v.type);for(let lt of v.layerUpdates){let ct=K.data.subarray(lt*ot/K.data.BYTES_PER_ELEMENT,(lt+1)*ot/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,lt,K.width,K.height,1,N,ct,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,K.width,K.height,P.depth,N,K.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,rt,K.width,K.height,P.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,K.width,K.height,P.depth,N,nt,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,F,rt,K.width,K.height,P.depth,0,N,nt,K.data)}else{ft&&It&&e.texStorage2D(i.TEXTURE_2D,at,rt,_t[0].width,_t[0].height);for(let F=0,Q=_t.length;F<Q;F++)K=_t[F],v.format!==je?N!==null?ft?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,K.width,K.height,N,K.data):e.compressedTexImage2D(i.TEXTURE_2D,F,rt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?C&&e.texSubImage2D(i.TEXTURE_2D,F,0,0,K.width,K.height,N,nt,K.data):e.texImage2D(i.TEXTURE_2D,F,rt,K.width,K.height,0,N,nt,K.data)}else if(v.isDataArrayTexture)if(ft){if(It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,rt,P.width,P.height,P.depth),C)if(v.layerUpdates.size>0){let F=ol(P.width,P.height,v.format,v.type);for(let Q of v.layerUpdates){let ot=P.data.subarray(Q*F/P.data.BYTES_PER_ELEMENT,(Q+1)*F/P.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,P.width,P.height,1,N,nt,ot)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,N,nt,P.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,P.width,P.height,P.depth,0,N,nt,P.data);else if(v.isData3DTexture)ft?(It&&e.texStorage3D(i.TEXTURE_3D,at,rt,P.width,P.height,P.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,N,nt,P.data)):e.texImage3D(i.TEXTURE_3D,0,rt,P.width,P.height,P.depth,0,N,nt,P.data);else if(v.isFramebufferTexture){if(It)if(ft)e.texStorage2D(i.TEXTURE_2D,at,rt,P.width,P.height);else{let F=P.width,Q=P.height;for(let ot=0;ot<at;ot++)e.texImage2D(i.TEXTURE_2D,ot,rt,F,Q,0,N,nt,null),F>>=1,Q>>=1}}else if(_t.length>0){if(ft&&It){let F=Pt(_t[0]);e.texStorage2D(i.TEXTURE_2D,at,rt,F.width,F.height)}for(let F=0,Q=_t.length;F<Q;F++)K=_t[F],ft?C&&e.texSubImage2D(i.TEXTURE_2D,F,0,0,N,nt,K):e.texImage2D(i.TEXTURE_2D,F,rt,N,nt,K);v.generateMipmaps=!1}else if(ft){if(It){let F=Pt(P);e.texStorage2D(i.TEXTURE_2D,at,rt,F.width,F.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,N,nt,P)}else e.texImage2D(i.TEXTURE_2D,0,rt,N,nt,P);p(v)&&u(Z),St.__version=q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function X(E,v,L){if(v.image.length!==6)return;let Z=Yt(E,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+L);let q=n.get(tt);if(tt.version!==q.__version||Z===!0){e.activeTexture(i.TEXTURE0+L);let St=qt.getPrimaries(qt.workingColorSpace),ut=v.colorSpace===bn?null:qt.getPrimaries(v.colorSpace),gt=v.colorSpace===bn||St===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,P=v.image[0]&&v.image[0].isDataTexture,N=[];for(let Q=0;Q<6;Q++)!Wt&&!P?N[Q]=_(v.image[Q],!0,s.maxCubemapSize):N[Q]=P?v.image[Q].image:v.image[Q],N[Q]=ee(v,N[Q]);let nt=N[0],rt=r.convert(v.format,v.colorSpace),K=r.convert(v.type),_t=w(v.internalFormat,rt,K,v.colorSpace),ft=v.isVideoTexture!==!0,It=q.__version===void 0||Z===!0,C=tt.dataReady,at=A(v,nt);yt(i.TEXTURE_CUBE_MAP,v);let F;if(Wt){ft&&It&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,_t,nt.width,nt.height);for(let Q=0;Q<6;Q++){F=N[Q].mipmaps;for(let ot=0;ot<F.length;ot++){let lt=F[ot];v.format!==je?rt!==null?ft?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot,0,0,lt.width,lt.height,rt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot,_t,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot,0,0,lt.width,lt.height,rt,K,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot,_t,lt.width,lt.height,0,rt,K,lt.data)}}}else{if(F=v.mipmaps,ft&&It){F.length>0&&at++;let Q=Pt(N[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,_t,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(P){ft?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,N[Q].width,N[Q].height,rt,K,N[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,_t,N[Q].width,N[Q].height,0,rt,K,N[Q].data);for(let ot=0;ot<F.length;ot++){let ct=F[ot].image[Q].image;ft?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot+1,0,0,ct.width,ct.height,rt,K,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot+1,_t,ct.width,ct.height,0,rt,K,ct.data)}}else{ft?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,rt,K,N[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,_t,rt,K,N[Q]);for(let ot=0;ot<F.length;ot++){let lt=F[ot];ft?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot+1,0,0,rt,K,lt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot+1,_t,rt,K,lt.image[Q])}}}p(v)&&u(i.TEXTURE_CUBE_MAP),q.__version=tt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function j(E,v,L,Z,tt,q){let St=r.convert(L.format,L.colorSpace),ut=r.convert(L.type),gt=w(L.internalFormat,St,ut,L.colorSpace);if(!n.get(v).__hasExternalTextures){let P=Math.max(1,v.width>>q),N=Math.max(1,v.height>>q);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,q,gt,P,N,v.depth,0,St,ut,null):e.texImage2D(tt,q,gt,P,N,0,St,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,n.get(L).__webglTexture,0,Lt(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,n.get(L).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(E,v,L){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let Z=v.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,q=S(v.stencilBuffer,tt),St=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Lt(v);Vt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,q,v.width,v.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,E)}else{let Z=v.textures;for(let tt=0;tt<Z.length;tt++){let q=Z[tt],St=r.convert(q.format,q.colorSpace),ut=r.convert(q.type),gt=w(q.internalFormat,St,ut,q.colorSpace),Wt=Lt(v);L&&Vt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,gt,v.width,v.height):Vt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let Z=n.get(v.depthTexture).__webglTexture,tt=Lt(v);if(v.depthTexture.format===gi)Vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Ei)Vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Rt(E){let v=n.get(E),L=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let Z=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=Z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");dt(v.__webglFramebuffer,E)}else if(L){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),vt(v.__webglDepthbuffer[Z],E,!1);else{let tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),vt(v.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(E,v,L){let Z=n.get(E);v!==void 0&&j(Z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Rt(E)}function Ht(E){let v=E.texture,L=n.get(E),Z=n.get(v);E.addEventListener("dispose",R);let tt=E.textures,q=E.isWebGLCubeRenderTarget===!0,St=tt.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,a.memory.textures++),q){L.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[ut]=[];for(let gt=0;gt<v.mipmaps.length;gt++)L.__webglFramebuffer[ut][gt]=i.createFramebuffer()}else L.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)L.__webglFramebuffer[ut]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(St)for(let ut=0,gt=tt.length;ut<gt;ut++){let Wt=n.get(tt[ut]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Vt(E)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){let gt=tt[ut];L.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[ut]);let Wt=r.convert(gt.format,gt.colorSpace),P=r.convert(gt.type),N=w(gt.internalFormat,Wt,P,gt.colorSpace,E.isXRRenderTarget===!0),nt=Lt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,N,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,L.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(L.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),yt(i.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)j(L.__webglFramebuffer[ut][gt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else j(L.__webglFramebuffer[ut],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ut=0,gt=tt.length;ut<gt;ut++){let Wt=tt[ut],P=n.get(Wt);e.bindTexture(i.TEXTURE_2D,P.__webglTexture),yt(i.TEXTURE_2D,Wt),j(L.__webglFramebuffer,E,Wt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),p(Wt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ut=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Z.__webglTexture),yt(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)j(L.__webglFramebuffer[gt],E,v,i.COLOR_ATTACHMENT0,ut,gt);else j(L.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ut,0);p(v)&&u(ut),e.unbindTexture()}E.depthBuffer&&Rt(E)}function Jt(E){let v=E.textures;for(let L=0,Z=v.length;L<Z;L++){let tt=v[L];if(p(tt)){let q=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,St=n.get(tt).__webglTexture;e.bindTexture(q,St),u(q),e.unbindTexture()}}}let Gt=[],T=[];function we(E){if(E.samples>0){if(Vt(E)===!1){let v=E.textures,L=E.width,Z=E.height,tt=i.COLOR_BUFFER_BIT,q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(E),ut=v.length>1;if(ut)for(let gt=0;gt<v.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let gt=0;gt<v.length;gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);let Wt=n.get(v[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,L,Z,0,0,L,Z,tt,i.NEAREST),l===!0&&(Gt.length=0,T.length=0,Gt.push(i.COLOR_ATTACHMENT0+gt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Gt.push(q),T.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<v.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);let Wt=n.get(v[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Lt(E){return Math.min(s.maxSamples,E.samples)}function Vt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ct(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function ee(E,v){let L=E.colorSpace,Z=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==nn&&L!==bn&&(qt.getTransfer(L)===ie?(Z!==je||tt!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function Pt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=M,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=et,this.rebindTextures=Tt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Vt}function _p(i,t){function e(n,s=bn){let r,a=qt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return i.BYTE;if(n===pl)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===gl)return i.ALPHA;if(n===xl)return i.RGB;if(n===je)return i.RGBA;if(n===vl)return i.LUMINANCE;if(n===yl)return i.LUMINANCE_ALPHA;if(n===gi)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===_l)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===Ml)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===to)return i.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===xs)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wr||n===Xr||n===Qr||n===Yr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zr||n===qr||n===Jr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zr||n===qr)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kr||n===jr||n===$r||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$r)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===na)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ia)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ra)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===aa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ha)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vs||n===ua||n===da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vs)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===fa||n===pa||n===ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ua=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Tn=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mp={type:"move"},Oi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ep=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Da=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fe({vertexShader:Sp,fragmentShader:Ep,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},La=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,x=null,_=new Da,p=e.getContextAttributes(),u=null,w=null,S=[],A=[],O=new te,R=null,b=new Re;b.layers.enable(1),b.viewport=new he;let k=new Re;k.layers.enable(2),k.viewport=new he;let J=[b,k],g=new Ua;g.layers.enable(1),g.layers.enable(2);let M=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=S[X];return j===void 0&&(j=new Oi,S[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=S[X];return j===void 0&&(j=new Oi,S[X]=j),j.getGripSpace()},this.getHand=function(X){let j=S[X];return j===void 0&&(j=new Oi,S[X]=j),j.getHandSpace()};function H(X){let j=A.indexOf(X.inputSource);if(j===-1)return;let vt=S[j];vt!==void 0&&(vt.update(X.inputSource,X.frame,c||a),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",$);for(let X=0;X<S.length;X++){let j=A[X];j!==null&&(A[X]=null,S[X].disconnect(j))}M=null,W=null,_.reset(),t.setRenderTarget(u),m=null,d=null,f=null,s=null,w=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new pn(m.framebufferWidth,m.framebufferHeight,{format:je,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,vt=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=p.stencil?Ei:gi,vt=p.stencil?Si:Yn);let Rt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new pn(d.textureWidth,d.textureHeight,{format:je,type:fn,depthTexture:new Bs(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(X){for(let j=0;j<X.removed.length;j++){let vt=X.removed[j],dt=A.indexOf(vt);dt>=0&&(A[dt]=null,S[dt].disconnect(vt))}for(let j=0;j<X.added.length;j++){let vt=X.added[j],dt=A.indexOf(vt);if(dt===-1){for(let Tt=0;Tt<S.length;Tt++)if(Tt>=A.length){A.push(vt),dt=Tt;break}else if(A[Tt]===null){A[Tt]=vt,dt=Tt;break}if(dt===-1)break}let Rt=S[dt];Rt&&Rt.connect(vt)}}let V=new D,et=new D;function G(X,j,vt){V.setFromMatrixPosition(j.matrixWorld),et.setFromMatrixPosition(vt.matrixWorld);let dt=V.distanceTo(et),Rt=j.projectionMatrix.elements,Tt=vt.projectionMatrix.elements,Ht=Rt[14]/(Rt[10]-1),Jt=Rt[14]/(Rt[10]+1),Gt=(Rt[9]+1)/Rt[5],T=(Rt[9]-1)/Rt[5],we=(Rt[8]-1)/Rt[0],Lt=(Tt[8]+1)/Tt[0],Vt=Ht*we,Ct=Ht*Lt,ee=dt/(-we+Lt),Pt=ee*-we;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pt),X.translateZ(ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Rt[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let E=Ht+ee,v=Jt+ee,L=Vt-Pt,Z=Ct+(dt-Pt),tt=Gt*Jt/v*E,q=T*Jt/v*E;X.projectionMatrix.makePerspective(L,Z,tt,q,E,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function xt(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let j=X.near,vt=X.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),g.near=k.near=b.near=j,g.far=k.far=b.far=vt,(M!==g.near||W!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),M=g.near,W=g.far);let dt=X.parent,Rt=g.cameras;xt(g,dt);for(let Tt=0;Tt<Rt.length;Tt++)xt(Rt[Tt],dt);Rt.length===2?G(g,b,k):g.projectionMatrix.copy(b.projectionMatrix),pt(X,g,dt)};function pt(X,j,vt){vt===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=xa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(g)};let yt=null;function Yt(X,j){if(h=j.getViewerPose(c||a),x=j,h!==null){let vt=h.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let dt=!1;vt.length!==g.cameras.length&&(g.cameras.length=0,dt=!0);for(let Tt=0;Tt<vt.length;Tt++){let Ht=vt[Tt],Jt=null;if(m!==null)Jt=m.getViewport(Ht);else{let T=f.getViewSubImage(d,Ht);Jt=T.viewport,Tt===0&&(t.setRenderTargetTextures(w,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(w))}let Gt=J[Tt];Gt===void 0&&(Gt=new Re,Gt.layers.enable(Tt),Gt.viewport=new he,J[Tt]=Gt),Gt.matrix.fromArray(Ht.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ht.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Tt===0&&(g.matrix.copy(Gt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),dt===!0&&g.cameras.push(Gt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let Tt=f.getDepthInformation(vt[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,s.renderState)}}for(let vt=0;vt<S.length;vt++){let dt=A[vt],Rt=S[vt];dt!==null&&Rt!==void 0&&Rt.update(dt,j,c||a)}yt&&yt(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}let Ft=new Tl;Ft.setAnimationLoop(Yt),this.setAnimationLoop=function(X){yt=X},this.dispose=function(){}}},kn=new mn,Ap=new ue;function wp(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,bl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,w,S,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,A)):u.isMeshMatcapMaterial?(r(p,u),x(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,w,S):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ie&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ie&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let w=t.get(u),S=w.envMap,A=w.envMapRotation;S&&(p.envMap.value=S,kn.copy(A),kn.x*=-1,kn.y*=-1,kn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),p.envMapRotation.value.setFromMatrix4(Ap.makeRotationFromEuler(kn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,w,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*w,p.scale.value=S*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,w){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ie&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let w=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bp(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let A=S.program;n.uniformBlockBinding(w,A)}function c(w,S){let A=s[w.id];A===void 0&&(x(w),A=h(w),s[w.id]=A,w.addEventListener("dispose",p));let O=S.program;n.updateUBOMapping(w,O);let R=t.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function h(w){let S=f();w.__bindingPointIndex=S;let A=i.createBuffer(),O=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,O,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,A),A}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let S=s[w.id],A=w.uniforms,O=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,b=A.length;R<b;R++){let k=Array.isArray(A[R])?A[R]:[A[R]];for(let J=0,g=k.length;J<g;J++){let M=k[J];if(m(M,R,J,O)===!0){let W=M.__offset,H=Array.isArray(M.value)?M.value:[M.value],Y=0;for(let $=0;$<H.length;$++){let V=H[$],et=_(V);typeof V=="number"||typeof V=="boolean"?(M.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,W+Y,M.__data)):V.isMatrix3?(M.__data[0]=V.elements[0],M.__data[1]=V.elements[1],M.__data[2]=V.elements[2],M.__data[3]=0,M.__data[4]=V.elements[3],M.__data[5]=V.elements[4],M.__data[6]=V.elements[5],M.__data[7]=0,M.__data[8]=V.elements[6],M.__data[9]=V.elements[7],M.__data[10]=V.elements[8],M.__data[11]=0):(V.toArray(M.__data,Y),Y+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,S,A,O){let R=w.value,b=S+"_"+A;if(O[b]===void 0)return typeof R=="number"||typeof R=="boolean"?O[b]=R:O[b]=R.clone(),!0;{let k=O[b];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return O[b]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function x(w){let S=w.uniforms,A=0,O=16;for(let b=0,k=S.length;b<k;b++){let J=Array.isArray(S[b])?S[b]:[S[b]];for(let g=0,M=J.length;g<M;g++){let W=J[g],H=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,$=H.length;Y<$;Y++){let V=H[Y],et=_(V),G=A%O,xt=G%et.boundary,pt=G+xt;A+=xt,pt!==0&&O-pt<et.storage&&(A+=O-pt),W.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=et.storage}}}let R=A%O;return R>0&&(A+=O-R),w.__size=A,w.__cache={},this}function _(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function p(w){let S=w.target;S.removeEventListener("dispose",p);let A=a.indexOf(S.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Os=class{constructor(t={}){let{canvas:e=Rc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),x=new Int32Array(4),_=null,p=null,u=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Pn,this.toneMappingExposure=1;let S=this,A=!1,O=0,R=0,b=null,k=-1,J=null,g=new he,M=new he,W=null,H=new kt(0),Y=0,$=e.width,V=e.height,et=1,G=null,xt=null,pt=new he(0,0,$,V),yt=new he(0,0,$,V),Yt=!1,Ft=new Ns,X=!1,j=!1,vt=new ue,dt=new ue,Rt=new D,Tt=new he,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function Gt(){return b===null?et:1}let T=n;function we(y,I){return e.getContext(y,I)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",lt,!1),T===null){let I="webgl2";if(T=we(I,y),T===null)throw we(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Lt,Vt,Ct,ee,Pt,E,v,L,Z,tt,q,St,ut,gt,Wt,P,N,nt,rt,K,_t,ft,It,C;function at(){Lt=new Vd(T),Lt.init(),ft=new _p(T,Lt),Vt=new Nd(T,Lt,t,ft),Ct=new xp(T),Vt.reverseDepthBuffer&&Ct.buffers.depth.setReversed(!0),ee=new Wd(T),Pt=new sp,E=new yp(T,Lt,Ct,Pt,Vt,ft,ee),v=new Bd(S),L=new kd(S),Z=new Kc(T),It=new Dd(T,Z),tt=new Hd(T,Z,ee,It),q=new Qd(T,tt,Z,ee),rt=new Xd(T,Vt,E),P=new Fd(Pt),St=new ip(S,v,L,Lt,Vt,It,P),ut=new wp(S,Pt),gt=new ap,Wt=new dp(Lt),nt=new Ud(S,v,L,Ct,q,d,l),N=new mp(S,q,Vt),C=new bp(T,ee,Vt,Ct),K=new Ld(T,Lt,ee),_t=new Gd(T,Lt,ee),ee.programs=St.programs,S.capabilities=Vt,S.extensions=Lt,S.properties=Pt,S.renderLists=gt,S.shadowMap=N,S.state=Ct,S.info=ee}at();let F=new La(S,T);this.xr=F,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let y=Lt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Lt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(y){y!==void 0&&(et=y,this.setSize($,V,!1))},this.getSize=function(y){return y.set($,V)},this.setSize=function(y,I,B=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,V=I,e.width=Math.floor(y*et),e.height=Math.floor(I*et),B===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set($*et,V*et).floor()},this.setDrawingBufferSize=function(y,I,B){$=y,V=I,et=B,e.width=Math.floor(y*B),e.height=Math.floor(I*B),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(g)},this.getViewport=function(y){return y.copy(pt)},this.setViewport=function(y,I,B,z){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,I,B,z),Ct.viewport(g.copy(pt).multiplyScalar(et).round())},this.getScissor=function(y){return y.copy(yt)},this.setScissor=function(y,I,B,z){y.isVector4?yt.set(y.x,y.y,y.z,y.w):yt.set(y,I,B,z),Ct.scissor(M.copy(yt).multiplyScalar(et).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(y){Ct.setScissorTest(Yt=y)},this.setOpaqueSort=function(y){G=y},this.setTransparentSort=function(y){xt=y},this.getClearColor=function(y){return y.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(y=!0,I=!0,B=!0){let z=0;if(y){let U=!1;if(b!==null){let it=b.texture.format;U=it===to||it===$a||it===ja}if(U){let it=b.texture.type,mt=it===fn||it===Yn||it===zi||it===Si||it===Ja||it===Ka,Mt=nt.getClearColor(),Et=nt.getClearAlpha(),Ut=Mt.r,Dt=Mt.g,At=Mt.b;mt?(m[0]=Ut,m[1]=Dt,m[2]=At,m[3]=Et,T.clearBufferuiv(T.COLOR,0,m)):(x[0]=Ut,x[1]=Dt,x[2]=At,x[3]=Et,T.clearBufferiv(T.COLOR,0,x))}else z|=T.COLOR_BUFFER_BIT}I&&(z|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),gt.dispose(),Wt.dispose(),Pt.dispose(),v.dispose(),L.dispose(),q.dispose(),It.dispose(),C.dispose(),St.dispose(),F.dispose(),F.removeEventListener("sessionstart",re),F.removeEventListener("sessionend",Qt),Zt.stop()};function Q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let y=ee.autoReset,I=N.enabled,B=N.autoUpdate,z=N.needsUpdate,U=N.type;at(),ee.autoReset=y,N.enabled=I,N.autoUpdate=B,N.needsUpdate=z,N.type=U}function lt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ct(y){let I=y.target;I.removeEventListener("dispose",ct),Nt(I)}function Nt(y){Bt(y),Pt.remove(y)}function Bt(y){let I=Pt.get(y).programs;I!==void 0&&(I.forEach(function(B){St.releaseProgram(B)}),y.isShaderMaterial&&St.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,B,z,U,it){I===null&&(I=Ht);let mt=U.isMesh&&U.matrixWorld.determinant()<0,Mt=Nl(y,I,B,z,U);Ct.setMaterial(z,mt);let Et=B.index,Ut=1;if(z.wireframe===!0){if(Et=tt.getWireframeAttribute(B),Et===void 0)return;Ut=2}let Dt=B.drawRange,At=B.attributes.position,$t=Dt.start*Ut,ne=(Dt.start+Dt.count)*Ut;it!==null&&($t=Math.max($t,it.start*Ut),ne=Math.min(ne,(it.start+it.count)*Ut)),Et!==null?($t=Math.max($t,0),ne=Math.min(ne,Et.count)):At!=null&&($t=Math.max($t,0),ne=Math.min(ne,At.count));let le=ne-$t;if(le<0||le===1/0)return;It.setup(U,z,Mt,B,Et);let Ue,Kt=K;if(Et!==null&&(Ue=Z.get(Et),Kt=_t,Kt.setIndex(Ue)),U.isMesh)z.wireframe===!0?(Ct.setLineWidth(z.wireframeLinewidth*Gt()),Kt.setMode(T.LINES)):Kt.setMode(T.TRIANGLES);else if(U.isLine){let wt=z.linewidth;wt===void 0&&(wt=1),Ct.setLineWidth(wt*Gt()),U.isLineSegments?Kt.setMode(T.LINES):U.isLineLoop?Kt.setMode(T.LINE_LOOP):Kt.setMode(T.LINE_STRIP)}else U.isPoints?Kt.setMode(T.POINTS):U.isSprite&&Kt.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let wt=U._multiDrawStarts,ve=U._multiDrawCounts,jt=U._multiDrawCount,Ye=Et?Z.get(Et).bytesPerElement:1,ti=Pt.get(z).currentProgram.getUniforms();for(let De=0;De<jt;De++)ti.setValue(T,"_gl_DrawID",De),Kt.render(wt[De]/Ye,ve[De])}else if(U.isInstancedMesh)Kt.renderInstances($t,le,U.count);else if(B.isInstancedBufferGeometry){let wt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ve=Math.min(B.instanceCount,wt);Kt.renderInstances($t,le,ve)}else Kt.render($t,le)};function bt(y,I,B){y.transparent===!0&&y.side===Ve&&y.forceSinglePass===!1?(y.side=Ie,y.needsUpdate=!0,Qe(y,I,B),y.side=In,y.needsUpdate=!0,Qe(y,I,B),y.side=Ve):Qe(y,I,B)}this.compile=function(y,I,B=null){B===null&&(B=y),p=Wt.get(B),p.init(I),w.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let it=U.material;if(it)if(Array.isArray(it))for(let mt=0;mt<it.length;mt++){let Mt=it[mt];bt(Mt,B,U),z.add(Mt)}else bt(it,B,U),z.add(it)}),w.pop(),p=null,z},this.compileAsync=function(y,I,B=null){let z=this.compile(y,I,B);return new Promise(U=>{function it(){if(z.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&z.delete(mt)}),z.size===0){U(y);return}setTimeout(it,10)}Lt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let st=null;function Xt(y){st&&st(y)}function re(){Zt.stop()}function Qt(){Zt.start()}let Zt=new Tl;Zt.setAnimationLoop(Xt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(y){st=y,F.setAnimationLoop(y),y===null?Zt.stop():Zt.start()},F.addEventListener("sessionstart",re),F.addEventListener("sessionend",Qt),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(I),I=F.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,I,b),p=Wt.get(y,w.length),p.init(I),w.push(p),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ft.setFromProjectionMatrix(dt),j=this.localClippingEnabled,X=P.init(this.clippingPlanes,j),_=gt.get(y,u.length),_.init(),u.push(_),F.enabled===!0&&F.isPresenting===!0){let it=S.xr.getDepthSensingMesh();it!==null&&oe(it,I,-1/0,S.sortObjects)}oe(y,I,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(G,xt),Jt=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Jt&&nt.addToRenderList(_,y),this.info.render.frame++,X===!0&&P.beginShadows();let B=p.state.shadowsArray;N.render(B,y,I),X===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=_.opaque,U=_.transmissive;if(p.setupLights(),I.isArrayCamera){let it=I.cameras;if(U.length>0)for(let mt=0,Mt=it.length;mt<Mt;mt++){let Et=it[mt];be(z,U,y,Et)}Jt&&nt.render(y);for(let mt=0,Mt=it.length;mt<Mt;mt++){let Et=it[mt];ge(_,y,Et,Et.viewport)}}else U.length>0&&be(z,U,y,I),Jt&&nt.render(y),ge(_,y,I);b!==null&&(E.updateMultisampleRenderTarget(b),E.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(S,y,I),It.resetDefaultState(),k=-1,J=null,w.pop(),w.length>0?(p=w[w.length-1],X===!0&&P.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function oe(y,I,B,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ft.intersectsSprite(y)){z&&Tt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(dt);let mt=q.update(y),Mt=y.material;Mt.visible&&_.push(y,mt,Mt,B,Tt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ft.intersectsObject(y))){let mt=q.update(y),Mt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Tt.copy(y.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Tt.copy(mt.boundingSphere.center)),Tt.applyMatrix4(y.matrixWorld).applyMatrix4(dt)),Array.isArray(Mt)){let Et=mt.groups;for(let Ut=0,Dt=Et.length;Ut<Dt;Ut++){let At=Et[Ut],$t=Mt[At.materialIndex];$t&&$t.visible&&_.push(y,mt,$t,B,Tt.z,At)}}else Mt.visible&&_.push(y,mt,Mt,B,Tt.z,null)}}let it=y.children;for(let mt=0,Mt=it.length;mt<Mt;mt++)oe(it[mt],I,B,z)}function ge(y,I,B,z){let U=y.opaque,it=y.transmissive,mt=y.transparent;p.setupLightsView(B),X===!0&&P.setGlobalState(S.clippingPlanes,B),z&&Ct.viewport(g.copy(z)),U.length>0&&Me(U,I,B),it.length>0&&Me(it,I,B),mt.length>0&&Me(mt,I,B),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function be(y,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new pn(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?ki:fn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let it=p.state.transmissionRenderTarget[z.id],mt=z.viewport||g;it.setSize(mt.z,mt.w);let Mt=S.getRenderTarget();S.setRenderTarget(it),S.getClearColor(H),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),Jt&&nt.render(B);let Et=S.toneMapping;S.toneMapping=Pn;let Ut=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),X===!0&&P.setGlobalState(S.clippingPlanes,z),Me(y,B,z),E.updateMultisampleRenderTarget(it),E.updateRenderTargetMipmap(it),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let At=0,$t=I.length;At<$t;At++){let ne=I[At],le=ne.object,Ue=ne.geometry,Kt=ne.material,wt=ne.group;if(Kt.side===Ve&&le.layers.test(z.layers)){let ve=Kt.side;Kt.side=Ie,Kt.needsUpdate=!0,vn(le,B,z,Ue,Kt,wt),Kt.side=ve,Kt.needsUpdate=!0,Dt=!0}}Dt===!0&&(E.updateMultisampleRenderTarget(it),E.updateRenderTargetMipmap(it))}S.setRenderTarget(Mt),S.setClearColor(H,Y),Ut!==void 0&&(z.viewport=Ut),S.toneMapping=Et}function Me(y,I,B){let z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,it=y.length;U<it;U++){let mt=y[U],Mt=mt.object,Et=mt.geometry,Ut=z===null?mt.material:z,Dt=mt.group;Mt.layers.test(B.layers)&&vn(Mt,I,B,Et,Ut,Dt)}}function vn(y,I,B,z,U,it){y.onBeforeRender(S,I,B,z,U,it),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(S,I,B,z,y,it),U.transparent===!0&&U.side===Ve&&U.forceSinglePass===!1?(U.side=Ie,U.needsUpdate=!0,S.renderBufferDirect(B,I,z,U,y,it),U.side=In,U.needsUpdate=!0,S.renderBufferDirect(B,I,z,U,y,it),U.side=Ve):S.renderBufferDirect(B,I,z,U,y,it),y.onAfterRender(S,I,B,z,U,it)}function Qe(y,I,B){I.isScene!==!0&&(I=Ht);let z=Pt.get(y),U=p.state.lights,it=p.state.shadowsArray,mt=U.state.version,Mt=St.getParameters(y,U.state,it,I,B),Et=St.getProgramCacheKey(Mt),Ut=z.programs;z.environment=y.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(y.isMeshStandardMaterial?L:v).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",ct),Ut=new Map,z.programs=Ut);let Dt=Ut.get(Et);if(Dt!==void 0){if(z.currentProgram===Dt&&z.lightsStateVersion===mt)return co(y,Mt),Dt}else Mt.uniforms=St.getUniforms(y),y.onBeforeCompile(Mt,S),Dt=St.acquireProgram(Mt,Et),Ut.set(Et,Dt),z.uniforms=Mt.uniforms;let At=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=P.uniform),co(y,Mt),z.needsLights=Bl(y),z.lightsStateVersion=mt,z.needsLights&&(At.ambientLightColor.value=U.state.ambient,At.lightProbe.value=U.state.probe,At.directionalLights.value=U.state.directional,At.directionalLightShadows.value=U.state.directionalShadow,At.spotLights.value=U.state.spot,At.spotLightShadows.value=U.state.spotShadow,At.rectAreaLights.value=U.state.rectArea,At.ltc_1.value=U.state.rectAreaLTC1,At.ltc_2.value=U.state.rectAreaLTC2,At.pointLights.value=U.state.point,At.pointLightShadows.value=U.state.pointShadow,At.hemisphereLights.value=U.state.hemi,At.directionalShadowMap.value=U.state.directionalShadowMap,At.directionalShadowMatrix.value=U.state.directionalShadowMatrix,At.spotShadowMap.value=U.state.spotShadowMap,At.spotLightMatrix.value=U.state.spotLightMatrix,At.spotLightMap.value=U.state.spotLightMap,At.pointShadowMap.value=U.state.pointShadowMap,At.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Dt,z.uniformsList=null,Dt}function Pi(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=vi.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function co(y,I){let B=Pt.get(y);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Nl(y,I,B,z,U){I.isScene!==!0&&(I=Ht),E.resetTextureUnits();let it=I.fog,mt=z.isMeshStandardMaterial?I.environment:null,Mt=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:nn,Et=(z.isMeshStandardMaterial?L:v).get(z.envMap||mt),Ut=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Dt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!B.morphAttributes.position,$t=!!B.morphAttributes.normal,ne=!!B.morphAttributes.color,le=Pn;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(le=S.toneMapping);let Ue=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Kt=Ue!==void 0?Ue.length:0,wt=Pt.get(z),ve=p.state.lights;if(X===!0&&(j===!0||y!==J)){let ze=y===J&&z.id===k;P.setState(z,y,ze)}let jt=!1;z.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ve.state.version||wt.outputColorSpace!==Mt||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==Et||z.fog===!0&&wt.fog!==it||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==P.numPlanes||wt.numIntersection!==P.numIntersection)||wt.vertexAlphas!==Ut||wt.vertexTangents!==Dt||wt.morphTargets!==At||wt.morphNormals!==$t||wt.morphColors!==ne||wt.toneMapping!==le||wt.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,wt.__version=z.version);let Ye=wt.currentProgram;jt===!0&&(Ye=Qe(z,I,U));let ti=!1,De=!1,Zs=!1,ce=Ye.getUniforms(),yn=wt.uniforms;if(Ct.useProgram(Ye.program)&&(ti=!0,De=!0,Zs=!0),z.id!==k&&(k=z.id,De=!0),ti||J!==y){Vt.reverseDepthBuffer?(vt.copy(y.projectionMatrix),Pc(vt),Ic(vt),ce.setValue(T,"projectionMatrix",vt)):ce.setValue(T,"projectionMatrix",y.projectionMatrix),ce.setValue(T,"viewMatrix",y.matrixWorldInverse);let ze=ce.map.cameraPosition;ze!==void 0&&ze.setValue(T,Rt.setFromMatrixPosition(y.matrixWorld)),Vt.logarithmicDepthBuffer&&ce.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),J!==y&&(J=y,De=!0,Zs=!0)}if(U.isSkinnedMesh){ce.setOptional(T,U,"bindMatrix"),ce.setOptional(T,U,"bindMatrixInverse");let ze=U.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ce.setValue(T,"boneTexture",ze.boneTexture,E))}U.isBatchedMesh&&(ce.setOptional(T,U,"batchingTexture"),ce.setValue(T,"batchingTexture",U._matricesTexture,E),ce.setOptional(T,U,"batchingIdTexture"),ce.setValue(T,"batchingIdTexture",U._indirectTexture,E),ce.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&ce.setValue(T,"batchingColorTexture",U._colorsTexture,E));let qs=B.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&rt.update(U,B,Ye),(De||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,ce.setValue(T,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(yn.envMap.value=Et,yn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(yn.envMapIntensity.value=I.environmentIntensity),De&&(ce.setValue(T,"toneMappingExposure",S.toneMappingExposure),wt.needsLights&&Fl(yn,Zs),it&&z.fog===!0&&ut.refreshFogUniforms(yn,it),ut.refreshMaterialUniforms(yn,z,et,V,p.state.transmissionRenderTarget[y.id]),vi.upload(T,Pi(wt),yn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vi.upload(T,Pi(wt),yn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(T,"center",U.center),ce.setValue(T,"modelViewMatrix",U.modelViewMatrix),ce.setValue(T,"normalMatrix",U.normalMatrix),ce.setValue(T,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let ze=z.uniformsGroups;for(let Js=0,Ol=ze.length;Js<Ol;Js++){let ho=ze[Js];C.update(ho,Ye),C.bind(ho,Ye)}}return Ye}function Fl(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Bl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,I,B){Pt.get(y.texture).__webglTexture=I,Pt.get(y.depthTexture).__webglTexture=B;let z=Pt.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){let B=Pt.get(y);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,B=0){b=y,O=I,R=B;let z=!0,U=null,it=!1,mt=!1;if(y){let Et=Pt.get(y);if(Et.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(T.FRAMEBUFFER,null),z=!1;else if(Et.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(Et.__hasExternalTextures)E.rebindTextures(y,Pt.get(y.texture).__webglTexture,Pt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let At=y.depthTexture;if(Et.__boundDepthTexture!==At){if(At!==null&&Pt.has(At)&&(y.width!==At.image.width||y.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}let Ut=y.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(mt=!0);let Dt=Pt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?U=Dt[I][B]:U=Dt[I],it=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?U=Pt.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[B]:U=Dt,g.copy(y.viewport),M.copy(y.scissor),W=y.scissorTest}else g.copy(pt).multiplyScalar(et).floor(),M.copy(yt).multiplyScalar(et).floor(),W=Yt;if(Ct.bindFramebuffer(T.FRAMEBUFFER,U)&&z&&Ct.drawBuffers(y,U),Ct.viewport(g),Ct.scissor(M),Ct.setScissorTest(W),it){let Et=Pt.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+I,Et.__webglTexture,B)}else if(mt){let Et=Pt.get(y.texture),Ut=I||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Et.__webglTexture,B||0,Ut)}k=-1},this.readRenderTargetPixels=function(y,I,B,z,U,it,mt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){Ct.bindFramebuffer(T.FRAMEBUFFER,Mt);try{let Et=y.texture,Ut=Et.format,Dt=Et.type;if(!Vt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U&&T.readPixels(I,B,z,U,ft.convert(Ut),ft.convert(Dt),it)}finally{let Et=b!==null?Pt.get(b).__webglFramebuffer:null;Ct.bindFramebuffer(T.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(y,I,B,z,U,it,mt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){let Et=y.texture,Ut=Et.format,Dt=Et.type;if(!Vt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U){Ct.bindFramebuffer(T.FRAMEBUFFER,Mt);let At=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,At),T.bufferData(T.PIXEL_PACK_BUFFER,it.byteLength,T.STREAM_READ),T.readPixels(I,B,z,U,ft.convert(Ut),ft.convert(Dt),0);let $t=b!==null?Pt.get(b).__webglFramebuffer:null;Ct.bindFramebuffer(T.FRAMEBUFFER,$t);let ne=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Cc(T,ne,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,At),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,it),T.deleteBuffer(At),T.deleteSync(ne),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,B=0){y.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);let z=Math.pow(2,-B),U=Math.floor(y.image.width*z),it=Math.floor(y.image.height*z),mt=I!==null?I.x:0,Mt=I!==null?I.y:0;E.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,B,0,0,mt,Mt,U,it),Ct.unbindTexture()},this.copyTextureToTexture=function(y,I,B=null,z=null,U=0){y.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let it,mt,Mt,Et,Ut,Dt;B!==null?(it=B.max.x-B.min.x,mt=B.max.y-B.min.y,Mt=B.min.x,Et=B.min.y):(it=y.image.width,mt=y.image.height,Mt=0,Et=0),z!==null?(Ut=z.x,Dt=z.y):(Ut=0,Dt=0);let At=ft.convert(I.format),$t=ft.convert(I.type);E.setTexture2D(I,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);let ne=T.getParameter(T.UNPACK_ROW_LENGTH),le=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ue=T.getParameter(T.UNPACK_SKIP_PIXELS),Kt=T.getParameter(T.UNPACK_SKIP_ROWS),wt=T.getParameter(T.UNPACK_SKIP_IMAGES),ve=y.isCompressedTexture?y.mipmaps[U]:y.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,ve.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ve.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Mt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Et),y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,U,Ut,Dt,it,mt,At,$t,ve.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,U,Ut,Dt,ve.width,ve.height,At,ve.data):T.texSubImage2D(T.TEXTURE_2D,U,Ut,Dt,it,mt,At,$t,ve),T.pixelStorei(T.UNPACK_ROW_LENGTH,ne),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,le),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ue),T.pixelStorei(T.UNPACK_SKIP_ROWS,Kt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,wt),U===0&&I.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(y,I,B=null,z=null,U=0){y.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0);let it,mt,Mt,Et,Ut,Dt,At,$t,ne,le=y.isCompressedTexture?y.mipmaps[U]:y.image;B!==null?(it=B.max.x-B.min.x,mt=B.max.y-B.min.y,Mt=B.max.z-B.min.z,Et=B.min.x,Ut=B.min.y,Dt=B.min.z):(it=le.width,mt=le.height,Mt=le.depth,Et=0,Ut=0,Dt=0),z!==null?(At=z.x,$t=z.y,ne=z.z):(At=0,$t=0,ne=0);let Ue=ft.convert(I.format),Kt=ft.convert(I.type),wt;if(I.isData3DTexture)E.setTexture3D(I,0),wt=T.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)E.setTexture2DArray(I,0),wt=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);let ve=T.getParameter(T.UNPACK_ROW_LENGTH),jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ye=T.getParameter(T.UNPACK_SKIP_PIXELS),ti=T.getParameter(T.UNPACK_SKIP_ROWS),De=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,le.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,le.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Et),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ut),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Dt),y.isDataTexture||y.isData3DTexture?T.texSubImage3D(wt,U,At,$t,ne,it,mt,Mt,Ue,Kt,le.data):I.isCompressedArrayTexture?T.compressedTexSubImage3D(wt,U,At,$t,ne,it,mt,Mt,Ue,le.data):T.texSubImage3D(wt,U,At,$t,ne,it,mt,Mt,Ue,Kt,le),T.pixelStorei(T.UNPACK_ROW_LENGTH,ve),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ye),T.pixelStorei(T.UNPACK_SKIP_ROWS,ti),T.pixelStorei(T.UNPACK_SKIP_IMAGES,De),U===0&&I.generateMipmaps&&T.generateMipmap(wt),Ct.unbindTexture()},this.initRenderTarget=function(y){Pt.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),Ct.unbindTexture()},this.resetState=function(){O=0,R=0,b=null,Ct.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===eo?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===Xs?"display-p3":"srgb"}};var zs=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var gn=class extends ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Na=class extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ll=new ue,Fa=new Rs,hs=new Ai,us=new D,bi=class extends Xe{constructor(t=new Ce,e=new Na){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),hs.radius+=r,t.ray.intersectsSphere(hs)===!1)return;ll.copy(s).invert(),Fa.copy(t.ray).applyMatrix4(ll);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=d,_=m;x<_;x++){let p=c.getX(x);us.fromBufferAttribute(f,p),cl(us,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,_=m;x<_;x++)us.fromBufferAttribute(f,x),cl(us,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cl(i,t,e,n,s,r,a){let o=Fa.distanceSqToPoint(i);if(o<e){let l=new D;Fa.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ba=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,m=(a-h)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new te:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],a=[],o=new D,l=new ue;for(let m=0;m<=t;m++){let x=m/t;s[m]=this.getTangentAt(x,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Ae(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,x))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Ae(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function io(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,m*=h,s(a,o,d,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ds=new D,Rr=new io,Cr=new io,Pr=new io,ks=class extends Ba{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ds.subVectors(s[0],s[1]).add(s[0]),c=ds);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ds.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ds),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),x<1e-4&&(x=_),p<1e-4&&(p=_),Rr.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,x,_,p),Cr.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,x,_,p),Pr.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,x,_,p)}else this.curveType==="catmullrom"&&(Rr.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Cr.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Pr.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Rr.calc(l),Cr.calc(l),Pr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Vs=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new D,d=new D,m=[],x=[],_=[],p=[];for(let u=0;u<=n;u++){let w=[],S=u/n,A=0;u===0&&a===0?A=.5/e:u===n&&l===Math.PI&&(A=-.5/e);for(let O=0;O<=e;O++){let R=O/e;f.x=-t*Math.cos(s+R*r)*Math.sin(a+S*o),f.y=t*Math.cos(a+S*o),f.z=t*Math.sin(s+R*r)*Math.sin(a+S*o),x.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(R+A,1-S),w.push(c++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){let S=h[u][w+1],A=h[u][w],O=h[u+1][w],R=h[u+1][w+1];(u!==0||a>0)&&m.push(S,A,R),(u!==n-1||l<Math.PI)&&m.push(A,O,R)}this.setIndex(m),this.setAttribute("position",new Ge(x,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function fs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Tp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oa=class extends Ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:go,endingEnd:go}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xo:r=t,o=2*e-n;break;case vo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xo:a=t,l=2*n-e;break;case vo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),_=x*x,p=_*x,u=-d*p+2*d*_-d*x,w=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*x+1,S=(-1-m)*p+(1.5+m)*_+.5*x,A=m*p-m*_;for(let O=0;O!==o;++O)r[O]=u*a[h+O]+w*a[c+O]+S*a[l+O]+A*a[f+O];return r}},za=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},ka=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$e=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fs(e,this.TimeBufferType),this.values=fs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fs(t.times,Array),values:fs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _s:e=this.InterpolantFactoryMethodDiscrete;break;case ga:e=this.InterpolantFactoryMethodLinear;break;case js:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return js}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Tp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===js,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,d=f-n,m=f+n;for(let x=0;x!==n;++x){let _=e[f+x];if(_!==e[d+x]||_!==e[m+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=ga;var jn=class extends $e{constructor(t,e,n){super(t,e,n)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=_s;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends $e{};Va.prototype.ValueTypeName="color";var Ha=class extends $e{};Ha.prototype.ValueTypeName="number";var Ga=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hs=class extends $e{InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}};Hs.prototype.ValueTypeName="quaternion";Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends $e{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=_s;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends $e{};Wa.prototype.ValueTypeName="vector";var Xa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},Rp=new Xa,Qa=class{constructor(t){this.manager=t!==void 0?t:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gs=class extends Ce{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var so="\\[\\]\\.:\\/",Cp=new RegExp("["+so+"]","g"),ro="[^"+so+"]",Pp="[^"+so.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",ro),Up=/(WCOD+)?/.source.replace("WCOD",Pp),Dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ro),Lp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ro),Np=new RegExp("^"+Ip+Up+Dp+Lp+"$"),Fp=["material","materials","bones","map"],Ya=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cp,"")}static parseTrackName(t){let e=Np.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=Ya;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gp=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);var Ul="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O9T+aDXUehUz1AzZL9QtYCjUqQwn1DvQI9RcVxvUoGUV1BwSE9Su1Q/Uz1wI1BNrA9T+U//TIdv800Ji9dO+DvPTUNLv03FZ6NO1Z+HTMRTg08PX3NPkXtPT8s7Q0xNWyNNXZMLT0xDA02XUvNOGW7TTymmw07RSrNPX2ajT+WCi03UNoNMG0ZzTJ1iV02xmjtPoEozTedaI05pdgdPea4DTqM1808lUddMNY27Tig9s0xvTaNM8WmHTgGha0/0UWNOO2FXTr19M073PSNPeVkHTImU6058RONMw1TXTUVwt05VqKNOAUyXTo9oh08RhGtNADhjT0tEV0/NYDdM3ZwfTsxMF00XXAdNmXvnSqmz40nTO9dKVVe3S2WPm0lUQ5dLn0+HSCFvZ0kxp0dJa2c3Se2DG0vcMxdKJ0MHSqle50u5ls9JqErHS/NWl0mFrpNIqzaHSS1SZ0pBiktIMD5HSndKN0r5ZhdIDaH/SfxR90hDYedIxX3DSP89t0mBWZdKkZF7SIRFd0rLUUdIXakzSAlNJ0iXaRdJGYT7Sww080lTROdJ1WDHSuWYq0jYTKNLH1h3SLGwc0vbNGNIXVRHSW2MK0tcPCNJp0/3Rzmj00dzY8NH9X+jRC9Dk0SxX3NFwZdbR7BHU0X7VyNHjasTRzlO80RJitdGODrTRINKo0YVnodEBFKDRk9eT0cLOj9HjVYjRJ2SB0aMQf9E01HTRmmlv0YRSa9Gn2WfRyGBh0UUNX9HW0FvR91dT0TtmTdG4EkvRSdY/0a5rPtF4zTrRmVQz0d1iLNFaDyrR69If0VBoFtFe2BLRf18K0Y3PBtGuVv7Q8mT30G4R9tAA1erQZWrl0FBT4dBz2t7QlGHX0BAO1dCi0cnQB2fD0IMTwdAV17TQRM6x0GVVqdCpY6LQJRCg0LfTldAcaYzQKtmI0EtggNBZ0HzQeld00L5lbdA6EmvQzNVg0DFrW9AbVFPQYGJN0NwOS9Bt0j/Q02c20ODXKtAPzybQMFYe0HRkGNDxEBbQgtQK0OdpBdDSUgHQ9dn+zxZh98+TDfXPJNHpz4lm4c+X1tTPxs3Qz+dUyM8rY8LPpw/AzznTtM+eaKvPrNifz9vPk89AZYrPTtV/z7Nqes+eU3LP4mFrz14Oas/w0V7PVWdVz2PXSc+Rzj3P92M0zwTUKM9qaSTPVFIgz3fZHM+YYBPPptAHzwtm/84Z1vLOSM3uzmlU5s6tYt7Ou9LSziBoyc4u2LzOXc+xzsJkqM7Q1JzONWqXziBTh85y0XvO12ZmzhTOWs55Y1HOh9NFzuxoMM4p0CTOjmUbzpvVD84Baw7Oysz6zT3S7s2iZ9jN387RzVp7zc1EZMTNUtS4zbdpos300JbNWWaOzWfWgc2WzXXN+2JszQnTYM1uaEvNq88/zRBlNs0e1SrNg2oUzcDRCM0lZ//MM9fyzGHO58zHY97M1NPSzDppvMx20LDM22WnzOnVmswYzYXMi9J5zPBnZMwtz1jMkmRPzKDUQ8wFai3MQtEhzKdmGMy11gvM5M32y1fT6su8aNTL+M/Iy15lv8tr1bLLmsydyw3SkctyZ4jLgNd7y6/Ob8sUZGbLItRZy4dpQ8vE0DfLKWYuyzfWIctmzQzL2dIAyz5o6sp7z97K4GTVyu7UyMpTasfKHcyyypDRpsr1Zp3KAteQyjHOesqk027KCWlYykbQUcrBfEzKq2VDyrnVNsrozCDKW9IZytV+FMrAZ/7J/c7xyWJk6Mlw1MbJEtG+yYx9ucl3ZrDJhdajybTNjckn04HJjGhrycjPY8lDfFXJO9VIyWrMMsnd0SvJWH4PyX/O+sjy09fIlNDQyA59tMg2zZ7IqdKSyA5oe8hLz3TIxXtYyOzLQshf0TvI2n0fyAHOCch00+bHFtDfx5B8w8e4zK3HK9KJx83OUMfi0EjHXH0sx4TNFsf30vPGmM/PxjrMucat0ZXGT85bxmTQVMbefDfGBs0hxnnS/cUbz9nFvMvDxS/RnsXRzXvFqWhkxebPXMVgfEDFiMwcxWBnBcWdzv3EF3vhxHVpysSy0KXEU82CxCxoasRoz0XECswvxH3RCsQfzgLEmXrmw/dozsM00KnD1syTw0nShcOuZ23D685mw2V7SMOMyzHD/9AMw6HNBcMceujCeWjQwrbPq8JYzJTCy9Fuwm3OMcKC0AzCI80Ewp55z8E4z6HBVHiSwU3RbMHvzS7BBNAIwabMAMEgecvAus6kwFzLnMDXd43Az9BmwHHNKMCGzwLAKMz6v6J4w789zpS/WXeEv1LQXr/zzFa/bnkfvwjP976qy+++JHi4vr/Nib7bdnm+1M9RvnbMSb7weBG+is7qvSzL4r2nd6q9Qc1pvVbPQb34ywG9Dc7AvCHQl7zDzFa82M4uvHrLFbzt0Oy7j82qu6TPgbtGzD+7Ws4Wu/zK/bpv0NO6Ec2QuibPZ7rIyyS63c36uX7K4Lnxz9+5uTG2uZPMcrmozki5SssEuV/NlLgWzE+4Ks4kuMzK37fhzG63mMsnt63NxrY01bW2Y8xutnjOQrYaywu2ANb6tS/NsrVEz4a15cs9tfrNx7SxzH60xs5RtGjLB7R9zbyzkc+OszPMRLNIzsqy/8x+shTPMrIo0QKyys22sd/P";qt.enabled=!1;var Be=4e3,Dl=180,Ci=8,Bp=Be/Ci,Op=.15,ao=[[1.5,.2],[1.68,-.42],[1.86,.62],[2.05,-.1],[2.26,.38]],zp={orbit:0,line:1,gate:2,a:3,b:4},Ln=8,Fe=360,Ys=document.documentElement,kp=document.body,oo=document.getElementById("scene"),lo=new URLSearchParams(location.search),xn=lo.has("still")?parseFloat(lo.get("still"))||0:null,Vp=lo.has("poster"),Hi=matchMedia("(prefers-reduced-motion: reduce)").matches,_e={slate:new kt(9674932),ink:new kt(725536),navy:new kt(1845834),aqua:new kt(1226144),cobalt:new kt(2969568),amber:new kt(16096779),pearl:new kt(14673650)},Oe=null;if(oo)try{Oe=new Os({canvas:oo,antialias:!0,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:xn!==null}),Oe.capabilities.isWebGL2||(Oe.dispose(),Oe=null)}catch{Oe=null}var Ll=Array.from(document.querySelectorAll("[data-form]")).slice(0,Ln);!Oe||!Ll.length?(Ys.classList.add("scene-off"),Oe&&Oe.dispose()):Hp();function Hp(){Oe.outputColorSpace=nn,Oe.setClearColor(0,0);let i=new zs,t=24,e=40,n=new Re(t,1,1,400);n.position.set(0,0,e);let s=7,r=()=>((s=s*16807%2147483647)-1)/2147483646,a=`
vec4 qAxis(vec3 a, float ang){ return vec4(normalize(a) * sin(ang * .5), cos(ang * .5)); }
vec4 qMul(vec4 a, vec4 b){ return vec4(a.w * b.xyz + b.w * a.xyz + cross(a.xyz, b.xyz), a.w * b.w - dot(a.xyz, b.xyz)); }
vec3 qRot(vec4 q, vec3 v){ return v + 2. * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
`,o=(kp.dataset.statA||"stacks:1,2,3,4").split(":"),l=Ll.map(P=>({el:P,form:zp[P.dataset.form]??0,pos:new D,s:1,q:[0,0,0,1],cy:0})),c=new Jn(.1,.064,.01),h=new Gs;h.index=c.index,h.setAttribute("position",c.getAttribute("position")),h.setAttribute("normal",c.getAttribute("normal")),h.setAttribute("uv",c.getAttribute("uv")),h.instanceCount=Be;let f=new Float32Array(Be*4),d=new Float32Array(Be*3),m=new Float32Array(Be*2),x=new Float32Array(Be),_=new Float32Array(Be*4),p=new Float32Array(Be*4),u=new Set;for(let P=0;P<Dl;P++)u.add(Math.floor((P+.5)*Be/Dl));let w=0;for(let P=0;P<Be;P++){f.set([r(),r(),r(),r()],P*4);let N=Math.floor(r()*ao.length);d.set([ao[N][0]+(r()-.5)*.08,ao[N][1],r()*Math.PI*2],P*3),m.set([P%Ci,Math.floor(P/Ci)],P*2),x[P]=u.has(P)?++w:0}let S=k(_,o,!1),A=k(p,["mark"],!0);h.setAttribute("aSeed",new gn(f,4)),h.setAttribute("aOrbit",new gn(d,3)),h.setAttribute("aLine",new gn(m,2)),h.setAttribute("aErr",new gn(x,1)),h.setAttribute("aStatA",new gn(_,4)),h.setAttribute("aStatB",new gn(p,4));let O=P=>Array.from({length:P},()=>[0,0,0,1]).flat(),R=new fe({uniforms:{uTime:{value:0},uStage:{value:0},uCount:{value:l.length},uIntro:{value:0},uForm:{value:l.map(P=>P.form).concat(Array(Ln).fill(0)).slice(0,Ln)},uAnchor:{value:new Float32Array(Ln*4)},uAnchorQ:{value:new Float32Array(O(Ln))},uErrMode:{value:o[0]==="stacks"&&o[1]==="1,1,1,1,1"||o[0]==="bins"?0:1},uRes:{value:[1,1]},uPath:{value:new Float32Array(64*3)},uWpp:{value:.01},uSlate:{value:_e.slate},uAqua:{value:_e.aqua},uCobalt:{value:_e.cobalt},uAmber:{value:_e.amber}},vertexShader:`
    precision highp float;
    #define PI 3.14159265
    attribute vec4 aSeed; attribute vec3 aOrbit; attribute vec2 aLine; attribute float aErr; attribute vec4 aStatA; attribute vec4 aStatB;
    uniform float uTime, uStage, uCount, uIntro, uErrMode, uForm[${Ln}];
    uniform vec4 uAnchor[${Ln}], uAnchorQ[${Ln}];
    uniform vec3 uPath[64]; uniform float uWpp;
    varying vec3 vN; varying vec2 vUv; varying vec2 vState; varying vec3 vView;
    ${a}
    const float LANES = ${Ci}.0, COLS = ${Bp}.0, SP = ${Op}, HALF = 4.3;
    bool isErr(){ return aErr > .5 && uErrMode > .5; }
    vec4 tumble(float speed){ return qAxis(aSeed.yzw - .5 + .001, uTime * speed * (.3 + aSeed.x) + aSeed.w * 6.283); }

    // the conveyor: a short visible stretch of one long line; records outside it are not drawn
    void flow(bool sorted, out vec3 p, out vec4 q, out float s, out vec2 st){
      float run = COLS * SP;
      float x = mod(aLine.y * SP + uTime * .3, run) - run * .5;
      float z = (aLine.x - (LANES - 1.) * .5) * .11;
      vec3 mess = vec3(0., (aSeed.y - .5) * .05, (aSeed.z - .5) * .06);
      vec4 face = qAxis(vec3(0., 1., 0.), -PI * .5);
      vec4 wobble = qAxis(vec3(aSeed.z - .5, aSeed.w - .5, aSeed.y - .5) + .001, (aSeed.x - .5) * .7);
      float vis = 1. - smoothstep(HALF - .8, HALF, abs(x));
      p = vec3(x, 0., z); q = qMul(face, wobble); s = vis; st = vec2(0.);
      if (!sorted) { p += mess; return; }
      float k = smoothstep(0., .9, x);
      p += mess * (1. - k);
      q = normalize(mix(q, face, k));
      st.x = k;
      if (isErr()) {
        float hit = smoothstep(-.02, .12, x);
        float ek = smoothstep(0., 1.6, x);
        float idx = aErr - 1.;
        vec3 slot = vec3(.75 + mod(idx, 12.) * .118, .1 + floor(idx / 12.) * .078, -1.05);
        p = mix(p, slot, ek) + vec3(0., sin(PI * ek) * .55, 0.);
        q = normalize(mix(q, vec4(0., 0., 0., 1.), ek));
        st = vec2(0., hit);
        s = (x < 0. ? vis : 1.) * (1. - smoothstep(run * .5 - 3., run * .5 - .5, x));
      }
    }

    void form(float id, out vec3 p, out vec4 q, out float s, out vec2 st){
      st = vec2(0.);
      if (id < .5) {
        float r = aOrbit.x, ang = aOrbit.z + uTime * .07 * pow(1.6 / r, 1.5);
        vec3 o = vec3(cos(ang) * r, (aSeed.y - .5) * .05, sin(ang) * r);
        vec4 tilt = qMul(qAxis(vec3(0., 0., 1.), aOrbit.y), qAxis(vec3(1., 0., 0.), aOrbit.y * .6 + .25));
        vec4 along = qAxis(vec3(0., 1., 0.), -ang + PI * .5);
        p = qRot(tilt, o);
        q = qMul(tilt, qMul(along, qAxis(vec3(aSeed.y - .5, aSeed.z - .5, aSeed.w - .5) + .001, (aSeed.x - .5) * .5)));
        s = .5;
      } else if (id < 1.5) { flow(false, p, q, s, st); }
      else if (id < 2.5) { flow(true, p, q, s, st); }
      else {
        vec4 v = id < 3.5 ? aStatA : aStatB;
        p = v.xyz; s = v.w < -.5 ? 0. : 1.;
        q = id < 3.5 ? qAxis(vec3(1., 0., 0.), -PI * .5) : vec4(0., 0., 0., 1.);
        if (v.w > .5) { q = tumble(.6); p.y -= mod(uTime * .05 + aSeed.x, 1.) * .4; }
        st.x = 1.;
        if (id < 3.5 && isErr()) st = vec2(0., 1.);
      }
    }

    void place(float i, out vec3 w, out vec4 q, out float s, out vec2 st){
      int k = int(i);
      vec3 p; vec4 lq;
      form(uForm[k], p, lq, s, st);
      vec4 A = uAnchor[k], Q = uAnchorQ[k];
      w = A.xyz + qRot(Q, p * A.w); q = qMul(Q, lq); s *= A.w;
    }

    void main(){
      float stg = clamp(uStage, 0., uCount - 1.);
      float i = floor(stg), f = stg - i;
      vec3 wA, wB; vec4 qA, qB; float sA, sB; vec2 tA, tB;
      place(i, wA, qA, sA, tA);
      vec3 w = wA; vec4 q = qA; float s = sA; vec2 st = tA;
      float e = smoothstep(0., 1., clamp(f * 1.6 - aSeed.x * .6, 0., 1.));
      if (e > 0.) {
        float j = min(i + 1., uCount - 1.);
        place(j, wB, qB, sB, tB);
        if (dot(qA, qB) < 0.) qB = -qB;
        // in transit, the records ride the line: a stream of tiles flowing down it to the next scene
        float tr = fract(aSeed.x * 1.7 + aSeed.z * .3 + uTime * .035) * 62.999;
        int pk = int(tr);
        vec3 pp = mix(uPath[pk], uPath[pk + 1], fract(tr));
        vec3 pd = normalize(uPath[pk + 1] - uPath[pk] + vec3(0., -1e-4, 0.));
        vec3 pn = vec3(-pd.y, pd.x, 0.);
        pp += pn * (aSeed.z - .5) * 18. * uWpp + vec3(0., 0., 1.5 + (aSeed.w - .5) * .6);
        float k1 = smoothstep(0., .3, e), k2 = smoothstep(.7, 1., e);
        vec4 qp = qAxis(vec3(0., 0., 1.), atan(pd.y, pd.x));
        if (dot(qA, qp) < 0.) qp = -qp;
        if (aSeed.y > .88) {
          // a rider: leaves its formation, travels the line, joins the next one
          w = mix(mix(wA, pp, k1), wB, k2);
          q = normalize(mix(mix(qA, qp, k1), qB, k2));
          s = mix(mix(sA, 80. * uWpp, k1), sB, k2); st = mix(mix(tA, vec2(.6, 0.), k1), tB, k2);
        } else {
          // the rest dissolve in place and re-form at the destination
          bool there = e > .5;
          w = there ? wB : wA; q = there ? qB : qA; st = there ? tB : tA;
          s = there ? sB * smoothstep(.75, 1., e) : sA * (1. - smoothstep(0., .25, e));
        }
      }
      // arrival: the formation unfolds from its own centre once, when the page opens
      float ia = smoothstep(0., 1., clamp(uIntro * 1.6 - aSeed.x * .6, 0., 1.));
      vec4 A0 = uAnchor[int(i)];
      w = mix(A0.xyz + (w - A0.xyz) * .15, w, ia); s *= ia;
      vec3 world = qRot(q, position * s) + w;
      vec4 mv = viewMatrix * vec4(world, 1.);
      vN = normalize(mat3(viewMatrix) * qRot(q, normal));
      vUv = uv; vState = st; vView = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    precision highp float;
    uniform vec2 uRes; uniform vec3 uSlate, uAqua, uCobalt, uAmber;
    varying vec3 vN; varying vec2 vUv; varying vec2 vState; varying vec3 vView;
    void main(){
      vec3 n = normalize(vN);
      vec3 grad = mix(uAqua, uCobalt, clamp(gl_FragCoord.x / uRes.x * 1.15 - .08, 0., 1.));
      float lam = max(dot(n, normalize(vec3(-.35, .75, .6))), 0.);
      float rim = pow(1. - abs(dot(n, vView)), 2.5);
      float e = min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y));
      float edge = 1. - smoothstep(.0, .085, e);
      vec3 fill = mix(vec3(.8 + .2 * lam), vec3(.86, .9, .96), .35);
      fill = mix(fill, mix(vec3(1.), grad, .2) * (.88 + .12 * lam), vState.x);
      fill = mix(fill, mix(vec3(1.), uAmber, .5) * (.9 + .1 * lam), vState.y);
      vec3 ec = mix(uSlate * .72, grad, vState.x);
      ec = mix(ec, uAmber * .92, vState.y);
      vec3 col = mix(fill, ec, edge * .92);
      col = mix(col, grad, rim * .12);
      gl_FragColor = vec4(col, 1.);
    }`}),b=new ye(h,R);b.frustumCulled=!1,i.add(b);function k(P,N,nt){let rt=N[0],K=[],_t=[],ft=rt==="stacks"&&N[1]!=="1,1,1,1,1";for(let ct=0;ct<Be;ct++)(x[ct]>0&&ft?_t:K).push(ct);let It=(ct,Nt,Bt,bt,st=0)=>P.set([Nt,Bt,bt,st],ct*4);if(!nt&&(rt==="stacks"||rt==="bins")){let ct=(N[1]||"1,2,3,4").split(",").map(Number),Nt=ct.reduce((Zt,oe)=>Zt+oe,0),Bt=rt==="bins"?.5:ct.length>4?.6:.62,bt=4,st=6,Xt=bt*st,re=.024,Qt=0;ct.forEach((Zt,oe)=>{let ge=oe===ct.length-1?K.length-Qt:Math.round(K.length*Zt/Nt),be=(oe-(ct.length-1)/2)*Bt;for(let Me=0;Me<ge&&Qt<K.length;Me++,Qt++){let vn=Math.floor(Me/Xt),Qe=Me%Xt;It(K[Qt],be+(Qe%bt-(bt-1)/2)*.104,vn*re,(Math.floor(Qe/bt)-(st-1)/2)*.068)}}),_t.forEach((Zt,oe)=>{let ge=Math.floor(oe/12),be=oe%12;It(Zt,ct.length*Bt*.5+.55+be%3*.104,ge*re,-.9+Math.floor(be/3)*.068)})}else if(nt){let bt=[],st=25*Math.PI/180;for(let Qt=-1.7;Qt<=1.7;Qt+=.072)for(let Zt=-1.7;Zt<=1.7;Zt+=.108){let oe=Math.hypot(Zt,Qt),ge=Math.atan2(-Qt,Zt)-st;ge=(ge+Math.PI*4)%(Math.PI*2),(Math.abs(oe-1.25)<.34/2&&ge<Math.PI*2*.752||Math.hypot(Zt-1.25*.927,Qt-1.25*.345)<.3)&&bt.push([Zt,Qt])}let Xt=K.concat(_t),re=Math.ceil(Xt.length/bt.length);Xt.forEach((Qt,Zt)=>{let oe=bt[Zt%bt.length],ge=Math.floor(Zt/bt.length);It(Qt,oe[0],oe[1],(ge-(re-1)/2)*.03)})}else rt==="broken"&&K.concat(_t).forEach((ct,Nt)=>{let Bt=Nt%Ci,bt=Math.floor(Nt/Ci),st=-9+bt*.12;st>-4.4&&st<4.4?st>0&&st<1.1?It(ct,st+(r()-.5)*.4,-.5-r()*2.4,(Bt-3.5)*.11+(r()-.5)*.5,1):It(ct,st,0,(Bt-3.5)*.11):It(ct,0,-50,0,-1)});let C=1e9,at=-1e9,F=1e9,Q=-1e9;for(let ct=0;ct<Be;ct++){if(P[ct*4+3]<-.5)continue;let Nt=P[ct*4],Bt=P[ct*4+1];C=Math.min(C,Nt),at=Math.max(at,Nt),F=Math.min(F,Bt),Q=Math.max(Q,Bt)}let ot=(C+at)/2,lt=(F+Q)/2;for(let ct=0;ct<Be;ct++)P[ct*4+3]<-.5||(P[ct*4]-=ot,P[ct*4+1]-=lt);return{w:at-C,h:Q-F}}let J=new Tn;{let P=Uint8Array.from(atob(Ul),Bt=>Bt.charCodeAt(0)),N=new Int16Array(P.buffer),nt=N.length/2,rt=new Float32Array(nt*3),K=new Float32Array(nt),_t=(Bt,bt,st=1)=>{let Xt=Bt*Math.PI/180,re=bt*Math.PI/180;return[st*Math.cos(Xt)*Math.cos(re),st*Math.sin(Xt),-st*Math.cos(Xt)*Math.sin(re)]};for(let Bt=0;Bt<nt;Bt++)rt.set(_t(N[Bt*2]/32767*90,N[Bt*2+1]/32767*180,1.006),Bt*3),K[Bt]=r();let ft=new Ce;ft.setAttribute("position",new ae(rt,3)),ft.setAttribute("aRand",new ae(K,1)),J.userData.land=new fe({transparent:!0,depthWrite:!1,uniforms:{uPx:{value:1},uInk:{value:_e.navy},uCobalt:{value:_e.cobalt}},vertexShader:`attribute float aRand; uniform float uPx; varying float vR;
      void main(){ vR = aRand; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (.85 + aRand * .35); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uInk, uCobalt; varying float vR;
      void main(){ vec2 d = gl_PointCoord - .5; float r = length(d); if (r > .5) discard;
      gl_FragColor = vec4(mix(uInk, uCobalt, step(.94, vR) * .8), smoothstep(.5, .3, r) * .78); }`}),J.add(new bi(ft,J.userData.land));let It=new ye(new Vs(1,96,64),new fe({uniforms:{uPearl:{value:_e.pearl},uCobalt:{value:_e.cobalt},uAqua:{value:_e.aqua}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 uPearl, uCobalt, uAqua; varying vec3 vN; varying vec3 vV;
      void main(){ float l = max(dot(vN, normalize(vec3(-.4, .6, .7))), 0.);
      float fr = pow(1. - max(dot(vN, vV), 0.), 2.2);
      vec3 c = mix(uPearl * .94, vec3(1.), l * .9);
      c = mix(c, mix(uAqua, uCobalt, .5 + vN.y * .5), fr * .55);
      gl_FragColor = vec4(c, 1.); }`}));J.add(It);let C=[51.5,-.12],at=[[40.7,-74],[1.35,103.8],[35.7,139.7],[-23.5,-46.6],[25.2,55.3],[-33.9,151.2],[19.1,72.9],[43.65,-79.4],[-26.2,28],[31.2,121.5],[34.05,-118.2],[59.3,18.1]],F=[],Q=[],ot=[],lt=new D(..._t(...C));at.forEach((Bt,bt)=>{let st=new D(..._t(Bt[0],Bt[1])),Xt=lt.angleTo(st);for(let re=0;re<=90;re++){let Qt=re/90,Zt=lt.clone().multiplyScalar(Math.sin((1-Qt)*Xt)/Math.sin(Xt)).add(st.clone().multiplyScalar(Math.sin(Qt*Xt)/Math.sin(Xt)));Zt.normalize().multiplyScalar(1.01+Math.sin(Math.PI*Qt)*(.08+Xt*.12)),F.push(Zt.x,Zt.y,Zt.z),Q.push(Qt),ot.push(bt/at.length)}});let ct=new Ce;ct.setAttribute("position",new ae(new Float32Array(F),3)),ct.setAttribute("aU",new ae(new Float32Array(Q),1)),ct.setAttribute("aId",new ae(new Float32Array(ot),1)),J.userData.arcs=new fe({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAqua:{value:_e.aqua},uCobalt:{value:_e.cobalt}},vertexShader:`attribute float aU, aId; uniform float uTime, uPx; varying float vA; varying float vU;
      void main(){ float head = fract(uTime * .14 + aId * 1.7); float d = head - aU;
      vA = .18 + smoothstep(.25, 0., d) * step(0., d) * .82; vU = aU;
      vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (.7 + vA); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uAqua, uCobalt; varying float vA; varying float vU;
      void main(){ vec2 d = gl_PointCoord - .5; if (dot(d,d) > .25) discard; gl_FragColor = vec4(mix(uAqua, uCobalt, vU), vA); }`}),J.add(new bi(ct,J.userData.arcs));let Nt=new Ce;Nt.setAttribute("position",new ae(new Float32Array(_t(...C,1.012)),3)),J.userData.home=new fe({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAqua:{value:_e.aqua}},vertexShader:"uniform float uTime, uPx; varying float vP; void main(){ vP = fract(uTime * .5); vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (3. + vP * 6.); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 uAqua; varying float vP; void main(){ float r = length(gl_PointCoord - .5) * 2.; if (r > 1.) discard;
      float core = smoothstep(.36, .2, r); float ring = smoothstep(.06, 0., abs(r - .82)) * (1. - vP);
      gl_FragColor = vec4(uAqua, max(core, ring)); }`}),J.add(new bi(Nt,J.userData.home))}J.visible=!1,i.add(J);let g=l.find(P=>P.form===0),M=new ye(new Kn(1.25,.62),new fe({transparent:!0,depthWrite:!1,side:Ve,uniforms:{uTime:{value:0},uAqua:{value:_e.aqua},uCobalt:{value:_e.cobalt}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform float uTime; uniform vec3 uAqua, uCobalt; varying vec2 vUv;
    void main(){ float scan = smoothstep(.05, 0., abs(vUv.y - fract(uTime * .45)));
    float frame = 1. - smoothstep(0., .02, min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y)));
    vec3 c = mix(uAqua, uCobalt, vUv.x);
    gl_FragColor = vec4(c, .07 + scan * .55 + frame * .9); }`}));M.visible=!1,i.add(M);let W=l.find(P=>P.form===2),H=new fe({transparent:!0,depthWrite:!1,uniforms:{uInk:{value:_e.ink},uA:{value:.11}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"uniform vec3 uInk; uniform float uA; varying vec2 vUv; void main(){ float d = length((vUv - .5) * 2.); gl_FragColor = vec4(uInk, uA * pow(1. - smoothstep(0., 1., d), 1.6)); }"}),Y=l.map(()=>{let P=new ye(new Kn(1,1),H.clone());return P.renderOrder=-2,i.add(P),P}),$=new Ce,V=new Float32Array(Fe*2*3),et=new Float32Array(Fe*2),G=new Float32Array(Fe*2),xt=[];for(let P=0;P<Fe;P++)if(et[P*2]=et[P*2+1]=P/(Fe-1),G[P*2]=-1,G[P*2+1]=1,P<Fe-1){let N=P*2;xt.push(N,N+1,N+2,N+1,N+3,N+2)}$.setIndex(xt),$.setAttribute("position",new ae(V,3)),$.setAttribute("aU",new ae(et,1)),$.setAttribute("aSide",new ae(G,1));let pt=new fe({transparent:!0,depthWrite:!1,side:Ve,blending:Cn,uniforms:{uTime:{value:0},uHead:{value:0},uLen:{value:1},uAlpha:{value:1},uAqua:{value:_e.aqua},uCobalt:{value:_e.cobalt}},vertexShader:`attribute float aU, aSide; varying float vU; varying float vSide; varying float vY;
    void main(){ vU = aU; vSide = aSide; vec4 c = projectionMatrix * modelViewMatrix * vec4(position,1.); vY = c.y / c.w; gl_Position = c; }`,fragmentShader:`uniform float uTime, uHead, uLen, uAlpha; uniform vec3 uAqua, uCobalt; varying float vU; varying float vSide; varying float vY;
    void main(){ float drawn = smoothstep(uHead - .08, uHead + .01, vY);
    float soft = 1. - smoothstep(.35, 1., abs(vSide));
    float px = vU * uLen;
    float pf = fract(px / 1400. - uTime * .22); float pulse = smoothstep(.93, .985, pf) * (1. - smoothstep(.985, 1., pf));
    vec3 c = mix(uAqua, uCobalt, vU);
    c = mix(c, vec3(1.), pulse * .7);
    gl_FragColor = vec4(c, soft * drawn * (.85 + pulse * .15) * uAlpha); }`}),yt=new ye($,pt);yt.frustumCulled=!1,yt.renderOrder=-1,yt.visible=!Vp,i.add(yt);let Yt=new ks([new D,new D(1,0,0)],!1,"centripetal"),Ft=1,X=1,j=1,vt=1,dt=(P,N)=>{let nt=Math.sin(N/2),rt=Math.hypot(...P);return[P[0]/rt*nt,P[1]/rt*nt,P[2]/rt*nt,Math.cos(N/2)]},Rt=(P,N)=>[P[3]*N[0]+N[3]*P[0]+P[1]*N[2]-P[2]*N[1],P[3]*N[1]+N[3]*P[1]+P[2]*N[0]-P[0]*N[2],P[3]*N[2]+N[3]*P[2]+P[0]*N[1]-P[1]*N[0],P[3]*N[3]-P[0]*N[0]-P[1]*N[1]-P[2]*N[2]],Tt=(P,N)=>{let[nt,rt,K,_t]=P,ft=[2*(rt*N[2]-K*N[1]),2*(K*N[0]-nt*N[2]),2*(nt*N[1]-rt*N[0])];return[N[0]+_t*ft[0]+(rt*ft[2]-K*ft[1]),N[1]+_t*ft[1]+(K*ft[0]-nt*ft[2]),N[2]+_t*ft[2]+(nt*ft[1]-rt*ft[0])]},Ht={0:{w:4.3,h:4.3},1:{w:7.2,h:1.7},2:{w:7.4,h:2.4},3:{w:S.w*.92+.3,h:S.h+.7},4:{w:A.w*.96,h:A.h*.96}},Jt={0:[0,0,0,1],1:Rt(dt([1,0,0],.42),dt([0,1,0],-.62)),2:Rt(dt([1,0,0],.4),dt([0,1,0],-.6)),3:Rt(dt([1,0,0],.34),dt([0,1,0],-.55)),4:[0,0,0,1]},Gt={0:[0,-1.35,2.6,.5],1:[0,-.35,9,1.6],2:[0,-.35,9,1.8],3:[0,-.62,1.15,.9],4:[0,-1.55,2.4,.35]};function T(){j=2*(Math.tan(t*Math.PI/360)*e)/X,l.forEach((N,nt)=>{let rt=N.el.getBoundingClientRect(),K=rt.left+rt.width/2,_t=rt.top+rt.height/2;N.cy=_t,N.pos.set((K-Ft/2)*j,-(_t-X/2)*j,0);let ft=Ht[N.form]||Ht[0];N.s=Math.max(.01,Math.min(rt.width*j/ft.w,rt.height*j/ft.h));let It=Hi?0:(_t/X-.5)*-.35;N.q=Rt(dt([0,1,0],It*(N.form===0?0:1)),Jt[N.form]||Jt[0]);let C=R.uniforms.uAnchor.value,at=R.uniforms.uAnchorQ.value;C.set([N.pos.x,N.pos.y,N.pos.z,N.s],nt*4),at.set(N.q,nt*4);let[F,Q,ot,lt]=Gt[N.form]||Gt[0],ct=Tt(N.q,[F,N.form===3?-(S.h/2+.25):Q,0]);Y[nt].position.set(N.pos.x+ct[0]*N.s,N.pos.y+ct[1]*N.s,-2),Y[nt].scale.set((N.form===3?S.w+.8:ot)*N.s,lt*N.s,1)})}function we(){let P=X*.55,N=l.map(nt=>nt.cy);if(P<=N[0])return 0;for(let nt=0;nt<N.length-1;nt++)if(P>=N[nt]&&P<N[nt+1]){let rt=(P-N[nt])/Math.max(1,N[nt+1]-N[nt]),K=Math.min(1,Math.max(0,(rt-.45)/.5));return nt+K*K*(3-2*K)}return N.length-1}let Lt=[],Vt=Array.from({length:Fe},()=>new D),Ct=new Float32Array(Fe);function ee(){let P=[],N=(Ft/2-Math.max(14,Math.min(48,Ft*.035)))*j,nt=l[0],rt=nt.pos.x>=-.001?1:-1,K=-rt;P.push(new D(rt*N,nt.pos.y+X*1.4*j,-3),new D(rt*N,nt.pos.y+X*.45*j,-3)),l.forEach((st,Xt)=>{let re=st.el.getBoundingClientRect(),Qt=l[Xt+1],Zt=P[P.length-1].x,oe=Qt?K*N:st.pos.x*.3,ge=Math.sign(oe-Zt)||1,be=Math.min(re.width*.22,Ft*.1)*j;if(P.push(new D(st.pos.x-ge*be,st.pos.y+be*.12,-3),new D(st.pos.x,st.pos.y,-3),new D(st.pos.x+ge*be,st.pos.y-be*.12,-3)),!Qt)return;let Me=Math.max(1,Math.round(Math.abs(Qt.cy-st.cy)/(X*.85))),vn=(st.pos.y-Qt.pos.y)/(Me+1);for(let Qe=1;Qe<=Me;Qe++){let Pi=st.pos.y-vn*Qe;P.push(new D(K*N,Pi+vn*.16,-3),new D(K*N,Pi-vn*.16,-3)),K=-K}Me%2===0&&(K=-K)});let _t=l[l.length-1];P.push(new D(_t.pos.x*.3,_t.pos.y-X*.7*j,-3)),Yt.points=P;let ft=P.length*48;for(;Lt.length<=ft;)Lt.push(new D);let It=new Float32Array(ft+1);for(let st=0;st<=ft;st++)Yt.getPoint(st/ft,Lt[st]),st&&(It[st]=It[st-1]+Lt[st].distanceTo(Lt[st-1]));let C=It[ft]||1,at=X*.5*j*1.35,F=0,Q=ft;for(;F<ft&&Lt[F].y>at;)F++;for(F=Math.max(0,F-1),Q=F;Q<ft&&Lt[Q].y>-at;)Q++;Q=Math.min(ft,Q+1),Q-F<2&&(F=0,Q=1);let ot=It[F],lt=It[Q],ct=2.1*j*(Ft<700?.8:1),Nt=F,Bt=(st,Xt)=>{let re=ot+(lt-ot)*st;for(;Nt<Q-1&&It[Nt+1]<re;)Nt++;let Qt=(re-It[Nt])/Math.max(1e-6,It[Nt+1]-It[Nt]);return Xt.lerpVectors(Lt[Nt],Lt[Nt+1],Math.min(1,Math.max(0,Qt))),re/C};Nt=F;for(let st=0;st<Fe;st++)Ct[st]=Bt(st/(Fe-1),Vt[st]);for(let st=0;st<Fe;st++){let Xt=Vt[Math.max(0,st-1)],re=Vt[Math.min(Fe-1,st+1)],Qt=Vt[st],Zt=re.x-Xt.x,oe=re.y-Xt.y,ge=Math.hypot(Zt,oe)||1;Zt/=ge,oe/=ge;let be=-oe*ct,Me=Zt*ct;V.set([Qt.x-be,Qt.y-Me,Qt.z],st*6),V.set([Qt.x+be,Qt.y+Me,Qt.z],st*6+3),et[st*2]=et[st*2+1]=Ct[st]}let bt=R.uniforms.uPath.value;for(let st=0;st<64;st++){let Xt=Vt[Math.round(st/63*(Fe-1))];bt[st*3]=Xt.x,bt[st*3+1]=Xt.y,bt[st*3+2]=Xt.z}R.uniforms.uWpp.value=j,pt.uniforms.uLen.value=C/j,$.attributes.position.needsUpdate=!0,$.attributes.aU.needsUpdate=!0}function Pt(){Ft=innerWidth,X=innerHeight,vt=Math.min(devicePixelRatio||1,Ft<700?1.6:1.75),Oe.setPixelRatio(vt),Oe.setSize(Ft,X,!1),n.aspect=Ft/X,n.updateProjectionMatrix(),R.uniforms.uRes.value=[Ft*vt,X*vt],pt.uniforms.uAlpha.value=Ft<700?.5:Ft<1e3?.75:1}let E=performance.now(),v=0,L=xn!==null||Hi?1:0,Z=xn!==null?40:0,tt=performance.now(),q=!0,St=!1,ut=0;function gt(P){let N=Math.min(.05,(P-tt)/1e3);tt=P,xn===null&&!Hi&&(Z+=N),L=Math.min(1,L+Math.min(.25,(P-E)/1e3)/1.6),E=P,T();let nt=xn!==null?xn:we();v+=(nt-v)*(Hi||q||xn!==null?1:1-Math.exp(-N*4.5)),Number.isFinite(v)||(v=0),Math.abs(nt-v)<1e-4&&(v=nt),ee();let rt=R.uniforms;if(rt.uTime.value=Z,rt.uStage.value=v,rt.uIntro.value=L*L*(3-2*L),g){let K=Math.max(1.4,2.3*vt*Math.min(1.2,g.s/3));J.visible=!0,J.position.copy(g.pos),J.scale.setScalar(g.s),J.rotation.set(.32,-1.25+Z*.035,0),J.userData.land.uniforms.uPx.value=K,J.userData.arcs.uniforms.uPx.value=K*1.2,J.userData.home.uniforms.uPx.value=K*1.6,J.userData.arcs.uniforms.uTime.value=Z,J.userData.home.uniforms.uTime.value=Z}if(W){M.visible=!0;let K=Tt(W.q,[0,.25,0]);M.position.set(W.pos.x+K[0]*W.s,W.pos.y+K[1]*W.s,K[2]*W.s);let _t=Rt(W.q,dt([0,1,0],Math.PI/2));M.quaternion.set(_t[0],_t[1],_t[2],_t[3]),M.scale.setScalar(W.s),M.material.uniforms.uTime.value=Z}if(Y.forEach((K,_t)=>{K.material.uniforms.uA.value=.11*Math.max(0,1-Math.abs(v-_t)*1.6)*rt.uIntro.value}),pt.uniforms.uTime.value=Z,pt.uniforms.uHead.value=xn!==null?-1.2:-.35,Oe.render(i,n),q&&(q=!1,requestAnimationFrame(()=>Ys.classList.add("scene-on"))),xn!==null&&++ut>3){Ys.classList.add("scene-still");return}if(document.hidden||Hi&&Math.abs(nt-v)<1e-4){St=!0;return}requestAnimationFrame(gt)}function Wt(){St&&(St=!1,tt=performance.now(),requestAnimationFrame(gt))}addEventListener("resize",()=>{Pt(),Wt()}),addEventListener("scroll",Wt,{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden||Wt()}),oo.addEventListener("webglcontextlost",P=>{P.preventDefault(),Ys.classList.add("scene-off")}),Pt(),requestAnimationFrame(gt)}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
