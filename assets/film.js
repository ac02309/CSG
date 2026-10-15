/* Clarke Systems Group film. Source: src/film. Includes three.js (MIT licence). */
(()=>{var Pl=0,$a=1,Il=2;var jo=1,Ul=2,je=3,yn=0,Se=1,ze=2,xn=0,ai=1,to=2,eo=3,no=4,Dl=5,Un=100,Ll=101,Nl=102,Fl=103,Bl=104,Ol=200,zl=201,kl=202,Vl=203,xr=204,vr=205,Hl=206,Gl=207,Wl=208,Xl=209,Ql=210,Yl=211,Zl=212,Jl=213,ql=214,yr=0,_r=1,Mr=2,hi=3,Sr=4,Er=5,Ar=6,wr=7,$o=0,Kl=1,jl=2,vn=0,$l=1,tc=2,ec=3,nc=4,ic=5,sc=6,rc=7;var tl=300,ui=301,di=302,br=303,Tr=304,Ds=306,Rr=1e3,Nn=1001,Cr=1002,Ie=1003,ac=1004;var Li=1005;var ke=1006,ks=1007;var Fn=1008;var nn=1009,el=1010,nl=1011,Ci=1012,Da=1013,Bn=1014,tn=1015,Pi=1016,La=1017,Na=1018,fi=1020,il=35902,sl=1021,rl=1022,Ve=1023,al=1024,ol=1025,oi=1026,pi=1027,ll=1028,Fa=1029,cl=1030,Ba=1031;var Oa=1033,ss=33776,rs=33777,as=33778,os=33779,Pr=35840,Ir=35841,Ur=35842,Dr=35843,Lr=36196,Nr=37492,Fr=37496,Br=37808,Or=37809,zr=37810,kr=37811,Vr=37812,Hr=37813,Gr=37814,Wr=37815,Xr=37816,Qr=37817,Yr=37818,Zr=37819,Jr=37820,qr=37821,ls=36492,Kr=36494,jr=36495,hl=36283,$r=36284,ta=36285,ea=36286;var hs=2300,na=2301,Vs=2302,io=2400,so=2401,ro=2402;var oc=3200,lc=3201;var cc=0,hc=1,mn="",Ge="srgb",Xe="srgb-linear",za="display-p3",Ls="display-p3-linear",us="linear",jt="srgb",ds="rec709",fs="p3";var Xn=7680;var ao=519,uc=512,dc=513,fc=514,ul=515,pc=516,mc=517,gc=518,xc=519,oo=35044;var lo="300 es",en=2e3,ps=2001,_n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hs=Math.PI/180,ia=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[i&255]+de[i>>8&255]+de[i>>16&255]+de[i>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function vc(i,t){return(i%t+t)%t}function Gs(i,t,e){return(1-e)*i+e*t}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Jt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],p=n[2],m=n[5],v=n[8],_=s[0],d=s[3],u=s[6],w=s[1],S=s[4],A=s[7],F=s[2],C=s[5],R=s[8];return r[0]=a*_+o*w+l*F,r[3]=a*d+o*S+l*C,r[6]=a*u+o*A+l*R,r[1]=c*_+h*w+f*F,r[4]=c*d+h*S+f*C,r[7]=c*u+h*A+f*R,r[2]=p*_+m*w+v*F,r[5]=p*d+m*S+v*C,r[8]=p*u+m*A+v*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,p=o*l-h*r,m=c*r-a*l,v=e*f+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=p*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ws.makeScale(t,e)),this}rotate(t){return this.premultiply(Ws.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ws.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ws=new Ft;function dl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yc(){let i=ms("canvas");return i.style.display="block",i}var co={};function cs(i){i in co||(co[i]=!0,console.warn(i))}function _c(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mc(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sc(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ho=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uo=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Si={[Xe]:{transfer:us,primaries:ds,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ge]:{transfer:jt,primaries:ds,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ls]:{transfer:us,primaries:fs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(uo),fromReference:i=>i.applyMatrix3(ho)},[za]:{transfer:jt,primaries:fs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(uo),fromReference:i=>i.applyMatrix3(ho).convertLinearToSRGB()}},Ec=new Set([Xe,Ls]),Wt={enabled:!0,_workingColorSpace:Xe,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ec.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Si[t].toReference,s=Si[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Si[i].primaries},getTransfer:function(i){return i===mn?us:Si[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Si[t].luminanceCoefficients)}};function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qn,sa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=ms("canvas")),Qn.width=t.width,Qn.height=t.height;let n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ms("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ac=0,gs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qs(s[a].image)):r.push(Qs(s[a]))}else r=Qs(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wc=0,De=class i extends _n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=ke,a=Fn,o=Ve,l=nn,c=i.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Ii(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Cr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Cr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=tl;De.DEFAULT_ANISOTROPY=1;var ne=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],p=l[1],m=l[5],v=l[9],_=l[2],d=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(v-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(v+d)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,A=(m+1)/2,F=(u+1)/2,C=(h+p)/4,R=(f+_)/4,z=(v+d)/4;return S>A&&S>F?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=R/n):A>F?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=C/s,r=z/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=R/r,s=z/r),this.set(n,s,r,e),this}let w=Math.sqrt((d-v)*(d-v)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(d-v)/w,this.y=(f-_)/w,this.z=(p-h)/w,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ra=class extends _n{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new gs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends ra{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xs=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var aa=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],p=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=v,t[e+3]=_;return}if(f!==_||l!==p||c!==m||h!==v){let d=1-o,u=l*p+c*m+h*v+f*_,w=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){let F=Math.sqrt(S),C=Math.atan2(F,u*w);d=Math.sin(d*C)/F,o=Math.sin(o*C)/F}let A=o*w;if(l=l*d+p*A,c=c*d+m*A,h=h*d+v*A,f=f*d+_*A,d===1-o){let F=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=F,c*=F,h*=F,f*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],p=r[a+1],m=r[a+2],v=r[a+3];return t[e]=o*v+h*f+l*m-c*p,t[e+1]=l*v+h*p+c*f-o*m,t[e+2]=c*v+h*m+o*p-l*f,t[e+3]=h*v-o*f-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),p=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=p*h*f+c*m*v,this._y=c*m*f-p*h*v,this._z=c*h*v+p*m*f,this._w=c*h*f-p*m*v;break;case"YXZ":this._x=p*h*f+c*m*v,this._y=c*m*f-p*h*v,this._z=c*h*v-p*m*f,this._w=c*h*f+p*m*v;break;case"ZXY":this._x=p*h*f-c*m*v,this._y=c*m*f+p*h*v,this._z=c*h*v+p*m*f,this._w=c*h*f-p*m*v;break;case"ZYX":this._x=p*h*f-c*m*v,this._y=c*m*f+p*h*v,this._z=c*h*v-p*m*f,this._w=c*h*f+p*m*v;break;case"YZX":this._x=p*h*f+c*m*v,this._y=c*m*f+p*h*v,this._z=c*h*v-p*m*f,this._w=c*h*f-p*m*v;break;case"XZY":this._x=p*h*f-c*m*v,this._y=c*m*f-p*h*v,this._z=c*h*v+p*m*f,this._w=c*h*f+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],p=n+o+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ys.copy(this).projectOnVector(t),this.sub(Ys)}reflect(t){return this.sub(Ys.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ys=new B,fo=new Mn,On=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fe):Fe.fromBufferAttribute(r,a),Fe.applyMatrix4(t.matrixWorld),this.expandByPoint(Fe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ni.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ni.copy(n.boundingBox)),Ni.applyMatrix4(t.matrixWorld),this.union(Ni)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fe),Fe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ei),Fi.subVectors(this.max,Ei),Yn.subVectors(t.a,Ei),Zn.subVectors(t.b,Ei),Jn.subVectors(t.c,Ei),cn.subVectors(Zn,Yn),hn.subVectors(Jn,Zn),wn.subVectors(Yn,Jn);let e=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-wn.z,wn.y,cn.z,0,-cn.x,hn.z,0,-hn.x,wn.z,0,-wn.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-wn.y,wn.x,0];return!Zs(e,Yn,Zn,Jn,Fi)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,Yn,Zn,Jn,Fi))?!1:(Bi.crossVectors(cn,hn),e=[Bi.x,Bi.y,Bi.z],Zs(e,Yn,Zn,Jn,Fi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ye=[new B,new B,new B,new B,new B,new B,new B,new B],Fe=new B,Ni=new On,Yn=new B,Zn=new B,Jn=new B,cn=new B,hn=new B,wn=new B,Ei=new B,Fi=new B,Bi=new B,bn=new B;function Zs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bn.fromArray(i,r);let o=s.x*Math.abs(bn.x)+s.y*Math.abs(bn.y)+s.z*Math.abs(bn.z),l=t.dot(bn),c=e.dot(bn),h=n.dot(bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var bc=new On,Ai=new B,Js=new B,mi=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);let e=Ai.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ai,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(Js)),this.expandByPoint(Ai.copy(t.center).sub(Js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ze=new B,qs=new B,Oi=new B,un=new B,Ks=new B,zi=new B,js=new B,vs=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qs.copy(t).add(e).multiplyScalar(.5),Oi.copy(e).sub(t).normalize(),un.copy(this.origin).sub(qs);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Oi),o=un.dot(this.direction),l=-un.dot(Oi),c=un.lengthSq(),h=Math.abs(1-a*a),f,p,m,v;if(h>0)if(f=a*l-o,p=a*o-l,v=r*h,f>=0)if(p>=-v)if(p<=v){let _=1/h;f*=_,p*=_,m=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p<=-v?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=v?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(qs).addScaledVector(Oi,p),m}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);let n=Ze.dot(this.direction),s=Ze.dot(Ze)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,s,r){Ks.subVectors(e,t),zi.subVectors(n,t),js.crossVectors(Ks,zi);let a=this.direction.dot(js),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,t);let l=o*this.direction.dot(zi.crossVectors(un,zi));if(l<0)return null;let c=o*this.direction.dot(Ks.cross(un));if(c<0||l+c>a)return null;let h=-o*un.dot(js);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,a,o,l,c,h,f,p,m,v,_,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,p,m,v,_,d)}set(t,e,n,s,r,a,o,l,c,h,f,p,m,v,_,d){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=v,u[11]=_,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/qn.setFromMatrixColumn(t,0).length(),r=1/qn.setFromMatrixColumn(t,1).length(),a=1/qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let p=a*h,m=a*f,v=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+v*c,e[5]=p-_*c,e[9]=-o*l,e[2]=_-p*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){let p=l*h,m=l*f,v=c*h,_=c*f;e[0]=p+_*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-v,e[6]=_+p*o,e[10]=a*l}else if(t.order==="ZXY"){let p=l*h,m=l*f,v=c*h,_=c*f;e[0]=p-_*o,e[4]=-a*f,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*h,e[9]=_-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let p=a*h,m=a*f,v=o*h,_=o*f;e[0]=l*h,e[4]=v*c-m,e[8]=p*c+_,e[1]=l*f,e[5]=_*c+p,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let p=a*l,m=a*c,v=o*l,_=o*c;e[0]=l*h,e[4]=_-p*f,e[8]=v*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*f+v,e[10]=p-_*f}else if(t.order==="XZY"){let p=a*l,m=a*c,v=o*l,_=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=p*f+_,e[5]=a*h,e[9]=m*f-v,e[2]=v*f-m,e[6]=o*h,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tc,t,Rc)}lookAt(t,e,n){let s=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),dn.crossVectors(n,be),dn.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),dn.crossVectors(n,be)),dn.normalize(),ki.crossVectors(be,dn),s[0]=dn.x,s[4]=ki.x,s[8]=be.x,s[1]=dn.y,s[5]=ki.y,s[9]=be.y,s[2]=dn.z,s[6]=ki.z,s[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],p=n[9],m=n[13],v=n[2],_=n[6],d=n[10],u=n[14],w=n[3],S=n[7],A=n[11],F=n[15],C=s[0],R=s[4],z=s[8],ot=s[12],x=s[1],M=s[5],G=s[9],V=s[13],Y=s[2],et=s[6],H=s[10],st=s[14],Q=s[3],ft=s[7],gt=s[11],_t=s[15];return r[0]=a*C+o*x+l*Y+c*Q,r[4]=a*R+o*M+l*et+c*ft,r[8]=a*z+o*G+l*H+c*gt,r[12]=a*ot+o*V+l*st+c*_t,r[1]=h*C+f*x+p*Y+m*Q,r[5]=h*R+f*M+p*et+m*ft,r[9]=h*z+f*G+p*H+m*gt,r[13]=h*ot+f*V+p*st+m*_t,r[2]=v*C+_*x+d*Y+u*Q,r[6]=v*R+_*M+d*et+u*ft,r[10]=v*z+_*G+d*H+u*gt,r[14]=v*ot+_*V+d*st+u*_t,r[3]=w*C+S*x+A*Y+F*Q,r[7]=w*R+S*M+A*et+F*ft,r[11]=w*z+S*G+A*H+F*gt,r[15]=w*ot+S*V+A*st+F*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],p=t[10],m=t[14],v=t[3],_=t[7],d=t[11],u=t[15];return v*(+r*l*f-s*c*f-r*o*p+n*c*p+s*o*m-n*l*m)+_*(+e*l*m-e*c*p+r*a*p-s*a*m+s*c*h-r*l*h)+d*(+e*c*f-e*o*m-r*a*f+n*a*m+r*o*h-n*c*h)+u*(-s*o*h-e*l*f+e*o*p+s*a*f-n*a*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],p=t[10],m=t[11],v=t[12],_=t[13],d=t[14],u=t[15],w=f*d*c-_*p*c+_*l*m-o*d*m-f*l*u+o*p*u,S=v*p*c-h*d*c-v*l*m+a*d*m+h*l*u-a*p*u,A=h*_*c-v*f*c+v*o*m-a*_*m-h*o*u+a*f*u,F=v*f*l-h*_*l-v*o*p+a*_*p+h*o*d-a*f*d,C=e*w+n*S+s*A+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=w*R,t[1]=(_*p*r-f*d*r-_*s*m+n*d*m+f*s*u-n*p*u)*R,t[2]=(o*d*r-_*l*r+_*s*c-n*d*c-o*s*u+n*l*u)*R,t[3]=(f*l*r-o*p*r-f*s*c+n*p*c+o*s*m-n*l*m)*R,t[4]=S*R,t[5]=(h*d*r-v*p*r+v*s*m-e*d*m-h*s*u+e*p*u)*R,t[6]=(v*l*r-a*d*r-v*s*c+e*d*c+a*s*u-e*l*u)*R,t[7]=(a*p*r-h*l*r+h*s*c-e*p*c-a*s*m+e*l*m)*R,t[8]=A*R,t[9]=(v*f*r-h*_*r-v*n*m+e*_*m+h*n*u-e*f*u)*R,t[10]=(a*_*r-v*o*r+v*n*c-e*_*c-a*n*u+e*o*u)*R,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*m-e*o*m)*R,t[12]=F*R,t[13]=(h*_*s-v*f*s+v*n*p-e*_*p-h*n*d+e*f*d)*R,t[14]=(v*o*s-a*_*s-v*n*l+e*_*l+a*n*d-e*o*d)*R,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*p+e*o*p)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,p=r*c,m=r*h,v=r*f,_=a*h,d=a*f,u=o*f,w=l*c,S=l*h,A=l*f,F=n.x,C=n.y,R=n.z;return s[0]=(1-(_+u))*F,s[1]=(m+A)*F,s[2]=(v-S)*F,s[3]=0,s[4]=(m-A)*C,s[5]=(1-(p+u))*C,s[6]=(d+w)*C,s[7]=0,s[8]=(v+S)*R,s[9]=(d-w)*R,s[10]=(1-(p+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=qn.set(s[0],s[1],s[2]).length(),a=qn.set(s[4],s[5],s[6]).length(),o=qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Be.copy(this);let c=1/r,h=1/a,f=1/o;return Be.elements[0]*=c,Be.elements[1]*=c,Be.elements[2]*=c,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=f,Be.elements[9]*=f,Be.elements[10]*=f,e.setFromRotationMatrix(Be),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=en){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),m,v;if(o===en)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ps)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=en){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),p=(e+t)*c,m=(n+s)*h,v,_;if(o===en)v=(a+r)*f,_=-2*f;else if(o===ps)v=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qn=new B,Be=new re,Tc=new B(0,0,0),Rc=new B(1,1,1),dn=new B,ki=new B,be=new B,po=new re,mo=new Mn,rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return po.makeRotationFromQuaternion(t),this.setFromRotationMatrix(po,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mo.setFromEuler(this),this.setFromQuaternion(mo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cc=0,go=new B,Kn=new Mn,Je=new re,Vi=new B,wi=new B,Pc=new B,Ic=new Mn,xo=new B(1,0,0),vo=new B(0,1,0),yo=new B(0,0,1),_o={type:"added"},Uc={type:"removed"},jn={type:"childadded",child:null},$s={type:"childremoved",child:null},Le=class i extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new rn,n=new Mn,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Ft}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(xo,t)}rotateY(t){return this.rotateOnAxis(vo,t)}rotateZ(t){return this.rotateOnAxis(yo,t)}translateOnAxis(t,e){return go.copy(t).applyQuaternion(this.quaternion),this.position.add(go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xo,t)}translateY(t){return this.translateOnAxis(vo,t)}translateZ(t){return this.translateOnAxis(yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vi.copy(t):Vi.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(wi,Vi,this.up):Je.lookAt(Vi,wi,this.up),this.quaternion.setFromRotationMatrix(Je),s&&(Je.extractRotation(s.matrixWorld),Kn.setFromRotationMatrix(Je),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_o),jn.child=t,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uc),$s.child=t,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_o),jn.child=t,this.dispatchEvent(jn),jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,Pc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Ic,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),p=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new B(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oe=new B,qe=new B,tr=new B,Ke=new B,$n=new B,ti=new B,Mo=new B,er=new B,nr=new B,ir=new B,sr=new ne,rr=new ne,ar=new ne,Dn=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Oe.subVectors(t,e),s.cross(Oe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Oe.subVectors(s,e),qe.subVectors(n,e),tr.subVectors(t,e);let a=Oe.dot(Oe),o=Oe.dot(qe),l=Oe.dot(tr),c=qe.dot(qe),h=qe.dot(tr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*l-o*h)*p,v=(a*h-o*l)*p;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ke)===null?!1:Ke.x>=0&&Ke.y>=0&&Ke.x+Ke.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ke)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ke.x),l.addScaledVector(a,Ke.y),l.addScaledVector(o,Ke.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return sr.setScalar(0),rr.setScalar(0),ar.setScalar(0),sr.fromBufferAttribute(t,e),rr.fromBufferAttribute(t,n),ar.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(sr,r.x),a.addScaledVector(rr,r.y),a.addScaledVector(ar,r.z),a}static isFrontFacing(t,e,n,s){return Oe.subVectors(n,e),qe.subVectors(t,e),Oe.cross(qe).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),qe.subVectors(this.a,this.b),Oe.cross(qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;$n.subVectors(s,n),ti.subVectors(r,n),er.subVectors(t,n);let l=$n.dot(er),c=ti.dot(er);if(l<=0&&c<=0)return e.copy(n);nr.subVectors(t,s);let h=$n.dot(nr),f=ti.dot(nr);if(h>=0&&f<=h)return e.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector($n,a);ir.subVectors(t,r);let m=$n.dot(ir),v=ti.dot(ir);if(v>=0&&m<=v)return e.copy(r);let _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(ti,o);let d=h*v-m*f;if(d<=0&&f-h>=0&&m-v>=0)return Mo.subVectors(r,s),o=(f-h)/(f-h+(m-v)),e.copy(s).addScaledVector(Mo,o);let u=1/(d+_+p);return a=_*u,o=p*u,e.copy(n).addScaledVector($n,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Hi={h:0,s:0,l:0};function or(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=vc(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=or(a,r,t+1/3),this.g=or(a,r,t),this.b=or(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=fl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return Wt.fromWorkingColorSpace(fe.copy(this),t),Math.round(Me(fe.r*255,0,255))*65536+Math.round(Me(fe.g*255,0,255))*256+Math.round(Me(fe.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(fe.copy(this),e);let n=fe.r,s=fe.g,r=fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(fe.copy(this),e),t.r=fe.r,t.g=fe.g,t.b=fe.b,t}getStyle(t=Ge){Wt.fromWorkingColorSpace(fe.copy(this),t);let e=fe.r,n=fe.g,s=fe.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(Hi);let n=Gs(fn.h,Hi.h,e),s=Gs(fn.s,Hi.s,e),r=Gs(fn.l,Hi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fe=new Bt;Bt.NAMES=fl;var Dc=0,zn=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ai,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xr,this.blendDst=vr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xr&&(n.blendSrc=this.blendSrc),this.blendDst!==vr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_s=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var se=new B,Gi=new Jt,ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oo,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gi.fromBufferAttribute(this,e),Gi.applyMatrix3(t),this.setXY(e,Gi.x,Gi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oo&&(t.usage=this.usage),t}};var Ms=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ss=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ue=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lc=0,Pe=new re,lr=new Le,ei=new B,Te=new On,bi=new On,ce=new B,Ee=class i extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dl(t)?Ss:Ms)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return lr.lookAt(t),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Te.setFromBufferAttribute(r),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(ce.addVectors(Te.min,bi.min),Te.expandByPoint(ce),ce.addVectors(Te.max,bi.max),Te.expandByPoint(ce)):(Te.expandByPoint(bi.min),Te.expandByPoint(bi.max))}Te.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ce.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(t,c),ce.add(ei)),s=Math.max(s,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new B,l[z]=new B;let c=new B,h=new B,f=new B,p=new Jt,m=new Jt,v=new Jt,_=new B,d=new B;function u(z,ot,x){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,ot),f.fromBufferAttribute(n,x),p.fromBufferAttribute(r,z),m.fromBufferAttribute(r,ot),v.fromBufferAttribute(r,x),h.sub(c),f.sub(c),m.sub(p),v.sub(p);let M=1/(m.x*v.y-v.x*m.y);isFinite(M)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(M),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(M),o[z].add(_),o[ot].add(_),o[x].add(_),l[z].add(d),l[ot].add(d),l[x].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let z=0,ot=w.length;z<ot;++z){let x=w[z],M=x.start,G=x.count;for(let V=M,Y=M+G;V<Y;V+=3)u(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let S=new B,A=new B,F=new B,C=new B;function R(z){F.fromBufferAttribute(s,z),C.copy(F);let ot=o[z];S.copy(ot),S.sub(F.multiplyScalar(F.dot(ot))).normalize(),A.crossVectors(C,ot);let M=A.dot(l[z])<0?-1:1;a.setXYZW(z,S.x,S.y,S.z,M)}for(let z=0,ot=w.length;z<ot;++z){let x=w[z],M=x.start,G=x.count;for(let V=M,Y=M+G;V<Y;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(t)for(let p=0,m=t.count;p<m;p+=3){let v=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,p=new c.constructor(l.length*h),m=0,v=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let u=0;u<h;u++)p[v++]=c[m++]}return new ae(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let p=c[h],m=t(p,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},So=new re,Tn=new vs,Wi=new mi,Eo=new B,Xi=new B,Qi=new B,Yi=new B,cr=new B,Zi=new B,Ao=new B,Ji=new B,pe=class extends Le{constructor(t=new Ee,e=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Zi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(cr.fromBufferAttribute(f,t),a?Zi.addScaledVector(cr,h):Zi.addScaledVector(cr.sub(e),h))}e.add(Zi)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(r),Tn.copy(t.ray).recast(t.near),!(Wi.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Wi,Eo)===null||Tn.origin.distanceToSquared(Eo)>(t.far-t.near)**2))&&(So.copy(r).invert(),Tn.copy(t.ray).applyMatrix4(So),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){let d=p[v],u=a[d.materialIndex],w=Math.max(d.start,m.start),S=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let A=w,F=S;A<F;A+=3){let C=o.getX(A),R=o.getX(A+1),z=o.getX(A+2);s=qi(this,u,t,n,c,h,f,C,R,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=v,u=_;d<u;d+=3){let w=o.getX(d),S=o.getX(d+1),A=o.getX(d+2);s=qi(this,a,t,n,c,h,f,w,S,A),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){let d=p[v],u=a[d.materialIndex],w=Math.max(d.start,m.start),S=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let A=w,F=S;A<F;A+=3){let C=A,R=A+1,z=A+2;s=qi(this,u,t,n,c,h,f,C,R,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=v,u=_;d<u;d+=3){let w=d,S=d+1,A=d+2;s=qi(this,a,t,n,c,h,f,w,S,A),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function Nc(i,t,e,n,s,r,a,o){let l;if(t.side===Se?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===yn,o),l===null)return null;Ji.copy(o),Ji.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ji);return c<e.near||c>e.far?null:{distance:c,point:Ji.clone(),object:i}}function qi(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xi),i.getVertexPosition(l,Qi),i.getVertexPosition(c,Yi);let h=Nc(i,t,e,n,Xi,Qi,Yi,Ao);if(h){let f=new B;Dn.getBarycoord(Ao,Xi,Qi,Yi,f),s&&(h.uv=Dn.getInterpolatedAttribute(s,o,l,c,f,new Jt)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,o,l,c,f,new Jt)),a&&(h.normal=Dn.getInterpolatedAttribute(a,o,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new B,materialIndex:0};Dn.getNormal(Xi,Qi,Yi,p.normal),h.face=p,h.barycoord=f}return h}var kn=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],p=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(f,2));function v(_,d,u,w,S,A,F,C,R,z,ot){let x=A/R,M=F/z,G=A/2,V=F/2,Y=C/2,et=R+1,H=z+1,st=0,Q=0,ft=new B;for(let gt=0;gt<H;gt++){let _t=gt*M-V;for(let kt=0;kt<et;kt++){let zt=kt*x-G;ft[_]=zt*w,ft[d]=_t*S,ft[u]=Y,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[d]=0,ft[u]=C>0?1:-1,h.push(ft.x,ft.y,ft.z),f.push(kt/R),f.push(1-gt/z),st+=1}}for(let gt=0;gt<z;gt++)for(let _t=0;_t<R;_t++){let kt=p+_t+et*gt,zt=p+_t+et*(gt+1),J=p+(_t+1)+et*(gt+1),b=p+(_t+1)+et*gt;l.push(kt,zt,b),l.push(zt,J,b),Q+=6}o.addGroup(m,Q,ot),m+=Q,p+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function me(i){let t={};for(let e=0;e<i.length;e++){let n=gi(i[e]);for(let s in n)t[s]=n[s]}return t}function Fc(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var Bc={clone:gi,merge:me},Oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,he=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oc,this.fragmentShader=zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=Fc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Es=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=en}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pn=new B,wo=new Jt,bo=new Jt,ge=class extends Es{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,wo,bo),e.subVectors(bo,wo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ni=-90,ii=1,oa=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ge(ni,ii,t,e);s.layers=this.layers,this.add(s);let r=new ge(ni,ii,t,e);r.layers=this.layers,this.add(r);let a=new ge(ni,ii,t,e);a.layers=this.layers,this.add(a);let o=new ge(ni,ii,t,e);o.layers=this.layers,this.add(o);let l=new ge(ni,ii,t,e);l.layers=this.layers,this.add(l);let c=new ge(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,p,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},As=class extends De{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ui,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},la=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new As(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new he({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:xn});r.uniforms.tEquirect.value=e;let a=new pe(s,r),o=e.minFilter;return e.minFilter===Fn&&(e.minFilter=ke),new oa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},hr=new B,kc=new B,Vc=new Ft,$e=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hr.subVectors(n,e).cross(kc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(hr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vc.getNormalMatrix(t),s=this.coplanarPoint(hr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rn=new mi,Ki=new B,ws=class{constructor(t=new $e,e=new $e,n=new $e,s=new $e,r=new $e,a=new $e){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=en){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],m=s[8],v=s[9],_=s[10],d=s[11],u=s[12],w=s[13],S=s[14],A=s[15];if(n[0].setComponents(l-r,p-c,d-m,A-u).normalize(),n[1].setComponents(l+r,p+c,d+m,A+u).normalize(),n[2].setComponents(l+a,p+h,d+v,A+w).normalize(),n[3].setComponents(l-a,p-h,d-v,A-w).normalize(),n[4].setComponents(l-o,p-f,d-_,A-S).normalize(),e===en)n[5].setComponents(l+o,p+f,d+_,A+S).normalize();else if(e===ps)n[5].setComponents(o,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(t){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ki.x=s.normal.x>0?t.max.x:t.min.x,Ki.y=s.normal.y>0?t.max.y:t.min.y,Ki.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ml(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hc(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<f.length;m++){let v=f[p],_=f[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++p,f[p]=_)}f.length=p+1;for(let m=0,v=f.length;m<v;m++){let _=f[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vn=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,p=e/l,m=[],v=[],_=[],d=[];for(let u=0;u<h;u++){let w=u*p-a;for(let S=0;S<c;S++){let A=S*f-r;v.push(A,-w,0),_.push(0,0,1),d.push(S/o),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){let S=w+c*u,A=w+c*(u+1),F=w+1+c*(u+1),C=w+1+c*u;m.push(S,A,C),m.push(A,F,C)}this.setIndex(m),this.setAttribute("position",new Ue(v,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Gc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wc=`#ifdef USE_ALPHAHASH
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
#endif`,Xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
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
#endif`,qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kc=`#ifdef USE_BATCHING
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
#endif`,jc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$c=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nh=`#ifdef USE_IRIDESCENCE
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
#endif`,ih=`#ifdef USE_BUMPMAP
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
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dh=`#define PI 3.141592653589793
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
} // validated`,fh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ph=`vec3 transformedNormal = objectNormal;
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
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",_h=`
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
}`,Mh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,Ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wh=`#ifdef USE_ENVMAP
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
#endif`,bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ph=`#ifdef USE_GRADIENTMAP
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
}`,Ih=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lh=`uniform bool receiveShadow;
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
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kh=`PhysicalMaterial material;
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
#endif`,Vh=`struct PhysicalMaterial {
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
}`,Hh=`
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
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jh=`#if defined( USE_POINTS_UV )
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
#endif`,$h=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,su=`#ifdef USE_MORPHTARGETS
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
#endif`,ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ou=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uu=`#ifdef USE_NORMALMAP
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
#endif`,du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Au=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tu=`float getShadowMask() {
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
}`,Ru=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cu=`#ifdef USE_SKINNING
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
#endif`,Pu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iu=`#ifdef USE_SKINNING
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
#endif`,Uu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fu=`#ifdef USE_TRANSMISSION
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
#endif`,Bu=`#ifdef USE_TRANSMISSION
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
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gu=`uniform sampler2D t2D;
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
}`,Wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`#include <common>
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
}`,Ju=`#if DEPTH_PACKING == 3200
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
}`,qu=`#define DISTANCE
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
}`,Ku=`#define DISTANCE
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
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`uniform float scale;
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
}`,ed=`uniform vec3 diffuse;
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
}`,nd=`#include <common>
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
}`,id=`uniform vec3 diffuse;
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
}`,sd=`#define LAMBERT
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
}`,rd=`#define LAMBERT
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
}`,ad=`#define MATCAP
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
}`,od=`#define MATCAP
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
}`,ld=`#define NORMAL
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
}`,cd=`#define NORMAL
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
}`,hd=`#define PHONG
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
}`,ud=`#define PHONG
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
}`,dd=`#define STANDARD
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
}`,fd=`#define STANDARD
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
}`,pd=`#define TOON
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
}`,md=`#define TOON
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
}`,gd=`uniform float size;
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
}`,xd=`uniform vec3 diffuse;
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
}`,vd=`#include <common>
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
}`,yd=`uniform vec3 color;
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
}`,_d=`uniform float rotation;
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
}`,Md=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Gc,alphahash_pars_fragment:Wc,alphamap_fragment:Xc,alphamap_pars_fragment:Qc,alphatest_fragment:Yc,alphatest_pars_fragment:Zc,aomap_fragment:Jc,aomap_pars_fragment:qc,batching_pars_vertex:Kc,batching_vertex:jc,begin_vertex:$c,beginnormal_vertex:th,bsdfs:eh,iridescence_fragment:nh,bumpmap_pars_fragment:ih,clipping_planes_fragment:sh,clipping_planes_pars_fragment:rh,clipping_planes_pars_vertex:ah,clipping_planes_vertex:oh,color_fragment:lh,color_pars_fragment:ch,color_pars_vertex:hh,color_vertex:uh,common:dh,cube_uv_reflection_fragment:fh,defaultnormal_vertex:ph,displacementmap_pars_vertex:mh,displacementmap_vertex:gh,emissivemap_fragment:xh,emissivemap_pars_fragment:vh,colorspace_fragment:yh,colorspace_pars_fragment:_h,envmap_fragment:Mh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:Eh,envmap_pars_vertex:Ah,envmap_physical_pars_fragment:Nh,envmap_vertex:wh,fog_vertex:bh,fog_pars_vertex:Th,fog_fragment:Rh,fog_pars_fragment:Ch,gradientmap_pars_fragment:Ph,lightmap_pars_fragment:Ih,lights_lambert_fragment:Uh,lights_lambert_pars_fragment:Dh,lights_pars_begin:Lh,lights_toon_fragment:Fh,lights_toon_pars_fragment:Bh,lights_phong_fragment:Oh,lights_phong_pars_fragment:zh,lights_physical_fragment:kh,lights_physical_pars_fragment:Vh,lights_fragment_begin:Hh,lights_fragment_maps:Gh,lights_fragment_end:Wh,logdepthbuf_fragment:Xh,logdepthbuf_pars_fragment:Qh,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:Zh,map_fragment:Jh,map_pars_fragment:qh,map_particle_fragment:Kh,map_particle_pars_fragment:jh,metalnessmap_fragment:$h,metalnessmap_pars_fragment:tu,morphinstance_vertex:eu,morphcolor_vertex:nu,morphnormal_vertex:iu,morphtarget_pars_vertex:su,morphtarget_vertex:ru,normal_fragment_begin:au,normal_fragment_maps:ou,normal_pars_fragment:lu,normal_pars_vertex:cu,normal_vertex:hu,normalmap_pars_fragment:uu,clearcoat_normal_fragment_begin:du,clearcoat_normal_fragment_maps:fu,clearcoat_pars_fragment:pu,iridescence_pars_fragment:mu,opaque_fragment:gu,packing:xu,premultiplied_alpha_fragment:vu,project_vertex:yu,dithering_fragment:_u,dithering_pars_fragment:Mu,roughnessmap_fragment:Su,roughnessmap_pars_fragment:Eu,shadowmap_pars_fragment:Au,shadowmap_pars_vertex:wu,shadowmap_vertex:bu,shadowmask_pars_fragment:Tu,skinbase_vertex:Ru,skinning_pars_vertex:Cu,skinning_vertex:Pu,skinnormal_vertex:Iu,specularmap_fragment:Uu,specularmap_pars_fragment:Du,tonemapping_fragment:Lu,tonemapping_pars_fragment:Nu,transmission_fragment:Fu,transmission_pars_fragment:Bu,uv_pars_fragment:Ou,uv_pars_vertex:zu,uv_vertex:ku,worldpos_vertex:Vu,background_vert:Hu,background_frag:Gu,backgroundCube_vert:Wu,backgroundCube_frag:Xu,cube_vert:Qu,cube_frag:Yu,depth_vert:Zu,depth_frag:Ju,distanceRGBA_vert:qu,distanceRGBA_frag:Ku,equirect_vert:ju,equirect_frag:$u,linedashed_vert:td,linedashed_frag:ed,meshbasic_vert:nd,meshbasic_frag:id,meshlambert_vert:sd,meshlambert_frag:rd,meshmatcap_vert:ad,meshmatcap_frag:od,meshnormal_vert:ld,meshnormal_frag:cd,meshphong_vert:hd,meshphong_frag:ud,meshphysical_vert:dd,meshphysical_frag:fd,meshtoon_vert:pd,meshtoon_frag:md,points_vert:gd,points_frag:xd,shadow_vert:vd,shadow_frag:yd,sprite_vert:_d,sprite_frag:Md},ct={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},We={basic:{uniforms:me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:me([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:me([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:me([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:me([ct.points,ct.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:me([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:me([ct.common,ct.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:me([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:me([ct.sprite,ct.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:me([ct.common,ct.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:me([ct.lights,ct.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};We.physical={uniforms:me([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var ji={r:0,b:0,g:0},Cn=new rn,Sd=new re;function Ed(i,t,e,n,s,r,a){let o=new Bt(0),l=r===!0?0:1,c,h,f=null,p=0,m=null;function v(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function _(w){let S=!1,A=v(w);A===null?u(o,l):A&&A.isColor&&(u(A,1),S=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(w,S){let A=v(S);A&&(A.isCubeTexture||A.mapping===Ds)?(h===void 0&&(h=new pe(new kn(1,1,1),new he({name:"BackgroundCubeMaterial",uniforms:gi(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Cn.copy(S.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sd.makeRotationFromEuler(Cn)),h.material.toneMapped=Wt.getTransfer(A.colorSpace)!==jt,(f!==A||p!==A.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=A,p=A.version,m=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new pe(new Vn(2,2),new he({name:"BackgroundMaterial",uniforms:gi(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(A.colorSpace)!==jt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||p!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=A,p=A.version,m=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,S){w.getRGB(ji,pl(i)),n.buffers.color.setClear(ji.r,ji.g,ji.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:_,addToRenderList:d}}function Ad(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(x,M,G,V,Y){let et=!1,H=f(V,G,M);r!==H&&(r=H,c(r.object)),et=m(x,V,G,Y),et&&v(x,V,G,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,A(x,M,G,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function f(x,M,G){let V=G.wireframe===!0,Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let et=Y[M.id];et===void 0&&(et={},Y[M.id]=et);let H=et[V];return H===void 0&&(H=p(l()),et[V]=H),H}function p(x){let M=[],G=[],V=[];for(let Y=0;Y<e;Y++)M[Y]=0,G[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:G,attributeDivisors:V,object:x,attributes:{},index:null}}function m(x,M,G,V){let Y=r.attributes,et=M.attributes,H=0,st=G.getAttributes();for(let Q in st)if(st[Q].location>=0){let gt=Y[Q],_t=et[Q];if(_t===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),gt===void 0||gt.attribute!==_t||_t&&gt.data!==_t.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function v(x,M,G,V){let Y={},et=M.attributes,H=0,st=G.getAttributes();for(let Q in st)if(st[Q].location>=0){let gt=et[Q];gt===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor));let _t={};_t.attribute=gt,gt&&gt.data&&(_t.data=gt.data),Y[Q]=_t,H++}r.attributes=Y,r.attributesNum=H,r.index=V}function _(){let x=r.newAttributes;for(let M=0,G=x.length;M<G;M++)x[M]=0}function d(x){u(x,0)}function u(x,M){let G=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;G[x]=1,V[x]===0&&(i.enableVertexAttribArray(x),V[x]=1),Y[x]!==M&&(i.vertexAttribDivisor(x,M),Y[x]=M)}function w(){let x=r.newAttributes,M=r.enabledAttributes;for(let G=0,V=M.length;G<V;G++)M[G]!==x[G]&&(i.disableVertexAttribArray(G),M[G]=0)}function S(x,M,G,V,Y,et,H){H===!0?i.vertexAttribIPointer(x,M,G,Y,et):i.vertexAttribPointer(x,M,G,V,Y,et)}function A(x,M,G,V){_();let Y=V.attributes,et=G.getAttributes(),H=M.defaultAttributeValues;for(let st in et){let Q=et[st];if(Q.location>=0){let ft=Y[st];if(ft===void 0&&(st==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),st==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor)),ft!==void 0){let gt=ft.normalized,_t=ft.itemSize,kt=t.get(ft);if(kt===void 0)continue;let zt=kt.buffer,J=kt.type,b=kt.bytesPerElement,L=J===i.INT||J===i.UNSIGNED_INT||ft.gpuType===Da;if(ft.isInterleavedBufferAttribute){let k=ft.data,tt=k.stride,it=ft.offset;if(k.isInstancedInterleavedBuffer){for(let Et=0;Et<Q.locationSize;Et++)u(Q.location+Et,k.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Et=0;Et<Q.locationSize;Et++)d(Q.location+Et);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Et=0;Et<Q.locationSize;Et++)S(Q.location+Et,_t/Q.locationSize,J,gt,tt*b,(it+_t/Q.locationSize*Et)*b,L)}else{if(ft.isInstancedBufferAttribute){for(let k=0;k<Q.locationSize;k++)u(Q.location+k,ft.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let k=0;k<Q.locationSize;k++)d(Q.location+k);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let k=0;k<Q.locationSize;k++)S(Q.location+k,_t/Q.locationSize,J,gt,_t*b,_t/Q.locationSize*k*b,L)}}else if(H!==void 0){let gt=H[st];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(Q.location,gt);break;case 3:i.vertexAttrib3fv(Q.location,gt);break;case 4:i.vertexAttrib4fv(Q.location,gt);break;default:i.vertexAttrib1fv(Q.location,gt)}}}}w()}function F(){z();for(let x in n){let M=n[x];for(let G in M){let V=M[G];for(let Y in V)h(V[Y].object),delete V[Y];delete M[G]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;let M=n[x.id];for(let G in M){let V=M[G];for(let Y in V)h(V[Y].object),delete V[Y];delete M[G]}delete n[x.id]}function R(x){for(let M in n){let G=n[M];if(G[x.id]===void 0)continue;let V=G[x.id];for(let Y in V)h(V[Y].object),delete V[Y];delete G[x.id]}}function z(){ot(),a=!0,r!==s&&(r=s,c(r.object))}function ot(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:ot,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:d,disableUnusedAttributes:w}}function wd(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v];e.update(m,n,1)}function l(c,h,f,p){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],h[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,f);let v=0;for(let _=0;_<f;_++)v+=h[_];for(let _=0;_<p.length;_++)e.update(v,n,p[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ve&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let z=R===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==tn&&!z)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){let R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:F,maxSamples:C}}function Td(i){let t=this,e=null,n=0,s=!1,r=!1,a=new $e,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,m){let v=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,u=i.get(f);if(!s||v===null||v.length===0||r&&!d)r?h(null):c();else{let w=r?0:n,S=w*4,A=u.clippingState||null;l.value=A,A=h(v,p,S,m);for(let F=0;F!==S;++F)A[F]=e[F];u.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,p,m,v){let _=f!==null?f.length:0,d=null;if(_!==0){if(d=l.value,v!==!0||d===null){let u=m+_*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(d===null||d.length<u)&&(d=new Float32Array(u));for(let S=0,A=m;S!==_;++S,A+=4)a.copy(f[S]).applyMatrix4(w,o),a.normal.toArray(d,A),d[A+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Rd(i){let t=new WeakMap;function e(a,o){return o===br?a.mapping=ui:o===Tr&&(a.mapping=di),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===br||o===Tr)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new la(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ca=class extends Es{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ri=4,To=[.125,.215,.35,.446,.526,.582],Ln=20,ur=new ca,Ro=new Bt,dr=null,fr=0,pr=0,mr=!1,In=(1+Math.sqrt(5))/2,si=1/In,Co=[new B(-In,si,0),new B(In,si,0),new B(-si,0,In),new B(si,0,In),new B(0,In,-si),new B(0,In,si),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dr,fr,pr),this._renderer.xr.enabled=mr,t.scissorTest=!1,$i(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Pi,format:Ve,colorSpace:Xe,depthBuffer:!1},s=Po(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Po(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cd(r)),this._blurMaterial=Pd(r,t,e)}return s}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,ur)}_sceneToCubeUV(t,e,n,s){let o=new ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ro),h.toneMapping=vn,h.autoClear=!1;let m=new _s({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),v=new pe(new kn,m),_=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(Ro),_=!0);for(let u=0;u<6;u++){let w=u%3;w===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):w===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let S=this._cubeSize;$i(s,w*S,u>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ui||t.mapping===di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;$i(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ur)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Co[(s-r-1)%Co.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new pe(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ln-1),_=r/v,d=isFinite(r)?1+Math.floor(h*_):Ln;d>Ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ln}`);let u=[],w=0;for(let R=0;R<Ln;++R){let z=R/_,ot=Math.exp(-z*z/2);u.push(ot),R===0?w+=ot:R<d&&(w+=2*ot)}for(let R=0;R<u.length;R++)u[R]=u[R]/w;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:S}=this;p.dTheta.value=v,p.mipInt.value=S-n;let A=this._sizeLods[s],F=3*A*(s>S-ri?s-S+ri:0),C=4*(this._cubeSize-A);$i(e,F,C,3*A,2*A),l.setRenderTarget(e),l.render(f,ur)}};function Cd(i){let t=[],e=[],n=[],s=i,r=i-ri+1+To.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ri?l=To[a-i+ri-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,_=3,d=2,u=1,w=new Float32Array(_*v*m),S=new Float32Array(d*v*m),A=new Float32Array(u*v*m);for(let C=0;C<m;C++){let R=C%3*2/3-1,z=C>2?0:-1,ot=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];w.set(ot,_*v*C),S.set(p,d*v*C);let x=[C,C,C,C,C,C];A.set(x,u*v*C)}let F=new Ee;F.setAttribute("position",new ae(w,_)),F.setAttribute("uv",new ae(S,d)),F.setAttribute("faceIndex",new ae(A,u)),t.push(F),s>ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Po(i,t,e){let n=new sn(i,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pd(i,t,e){let n=new Float32Array(Ln),s=new B(0,1,0);return new he({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ka(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Io(){return new he({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Uo(){return new he({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ka(){return`

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
	`}function Id(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===br||l===Tr,h=l===ui||l===di;if(c||h){let f=t.get(o),p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new bs(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new bs(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ud(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dd(i,t,e,n){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);for(let v in p.morphAttributes){let _=p.morphAttributes[v];for(let d=0,u=_.length;d<u;d++)t.remove(_[d])}p.removeEventListener("dispose",a),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(f){let p=f.attributes;for(let v in p)t.update(p[v],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let v in m){let _=m[v];for(let d=0,u=_.length;d<u;d++)t.update(_[d],i.ARRAY_BUFFER)}}function c(f){let p=[],m=f.index,v=f.attributes.position,_=0;if(m!==null){let w=m.array;_=m.version;for(let S=0,A=w.length;S<A;S+=3){let F=w[S+0],C=w[S+1],R=w[S+2];p.push(F,C,C,R,R,F)}}else if(v!==void 0){let w=v.array;_=v.version;for(let S=0,A=w.length/3-1;S<A;S+=3){let F=S+0,C=S+1,R=S+2;p.push(F,C,C,R,R,F)}}else return;let d=new(dl(p)?Ss:Ms)(p,1);d.version=_;let u=r.get(f);u&&t.remove(u),r.set(f,d)}function h(f){let p=r.get(f);if(p){let m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Ld(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*a),e.update(m,n,1)}function c(p,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,p*a,v),e.update(m,n,v))}function h(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,v);let d=0;for(let u=0;u<v;u++)d+=m[u];e.update(d,n,1)}function f(p,m,v,_){if(v===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<p.length;u++)c(p[u]/a,m[u],_[u]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,_,0,v);let u=0;for(let w=0;w<v;w++)u+=m[w];for(let w=0;w<_.length;w++)e.update(u,n,_[w])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Nd(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fd(i,t,e){let n=new WeakMap,s=new ne;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==f){let ot=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",ot)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],S=0;m===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let A=o.attributes.position.count*S,F=1;A>t.maxTextureSize&&(F=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let C=new Float32Array(A*F*4*f),R=new xs(C,A,F,f);R.type=tn,R.needsUpdate=!0;let z=S*4;for(let x=0;x<f;x++){let M=d[x],G=u[x],V=w[x],Y=A*F*4*x;for(let et=0;et<M.count;et++){let H=et*z;m===!0&&(s.fromBufferAttribute(M,et),C[Y+H+0]=s.x,C[Y+H+1]=s.y,C[Y+H+2]=s.z,C[Y+H+3]=0),v===!0&&(s.fromBufferAttribute(G,et),C[Y+H+4]=s.x,C[Y+H+5]=s.y,C[Y+H+6]=s.z,C[Y+H+7]=0),_===!0&&(s.fromBufferAttribute(V,et),C[Y+H+8]=s.x,C[Y+H+9]=s.y,C[Y+H+10]=s.z,C[Y+H+11]=V.itemSize===4?s.w:1)}}p={count:f,texture:R,size:new Jt(A,F)},n.set(o,p),o.addEventListener("dispose",ot)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Bd(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ts=class extends De{constructor(t,e,n,s,r,a,o,l,c,h=oi){if(h!==oi&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oi&&(n=Bn),n===void 0&&h===pi&&(n=fi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gl=new De,Do=new Ts(1,1),xl=new xs,vl=new aa,yl=new As,Lo=[],No=[],Fo=new Float32Array(16),Bo=new Float32Array(9),Oo=new Float32Array(4);function yi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lo[s];if(r===void 0&&(r=new Float32Array(s),Lo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ns(i,t){let e=No[t];e===void 0&&(e=new Int32Array(t),No[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Od(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2fv(this.addr,t),le(e,t)}}function kd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;i.uniform3fv(this.addr,t),le(e,t)}}function Vd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4fv(this.addr,t),le(e,t)}}function Hd(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Oo.set(n),i.uniformMatrix2fv(this.addr,!1,Oo),le(e,n)}}function Gd(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Bo.set(n),i.uniformMatrix3fv(this.addr,!1,Bo),le(e,n)}}function Wd(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Fo.set(n),i.uniformMatrix4fv(this.addr,!1,Fo),le(e,n)}}function Xd(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2iv(this.addr,t),le(e,t)}}function Yd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3iv(this.addr,t),le(e,t)}}function Zd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4iv(this.addr,t),le(e,t)}}function Jd(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2uiv(this.addr,t),le(e,t)}}function Kd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3uiv(this.addr,t),le(e,t)}}function jd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4uiv(this.addr,t),le(e,t)}}function $d(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Do.compareFunction=ul,r=Do):r=gl,e.setTexture2D(t||r,s)}function tf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vl,s)}function ef(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yl,s)}function nf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xl,s)}function sf(i){switch(i){case 5126:return Od;case 35664:return zd;case 35665:return kd;case 35666:return Vd;case 35674:return Hd;case 35675:return Gd;case 35676:return Wd;case 5124:case 35670:return Xd;case 35667:case 35671:return Qd;case 35668:case 35672:return Yd;case 35669:case 35673:return Zd;case 5125:return Jd;case 36294:return qd;case 36295:return Kd;case 36296:return jd;case 35678:case 36198:case 36298:case 36306:case 35682:return $d;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return ef;case 36289:case 36303:case 36311:case 36292:return nf}}function rf(i,t){i.uniform1fv(this.addr,t)}function af(i,t){let e=yi(t,this.size,2);i.uniform2fv(this.addr,e)}function of(i,t){let e=yi(t,this.size,3);i.uniform3fv(this.addr,e)}function lf(i,t){let e=yi(t,this.size,4);i.uniform4fv(this.addr,e)}function cf(i,t){let e=yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hf(i,t){let e=yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function uf(i,t){let e=yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function df(i,t){i.uniform1iv(this.addr,t)}function ff(i,t){i.uniform2iv(this.addr,t)}function pf(i,t){i.uniform3iv(this.addr,t)}function mf(i,t){i.uniform4iv(this.addr,t)}function gf(i,t){i.uniform1uiv(this.addr,t)}function xf(i,t){i.uniform2uiv(this.addr,t)}function vf(i,t){i.uniform3uiv(this.addr,t)}function yf(i,t){i.uniform4uiv(this.addr,t)}function _f(i,t,e){let n=this.cache,s=t.length,r=Ns(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||gl,r[a])}function Mf(i,t,e){let n=this.cache,s=t.length,r=Ns(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vl,r[a])}function Sf(i,t,e){let n=this.cache,s=t.length,r=Ns(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yl,r[a])}function Ef(i,t,e){let n=this.cache,s=t.length,r=Ns(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xl,r[a])}function Af(i){switch(i){case 5126:return rf;case 35664:return af;case 35665:return of;case 35666:return lf;case 35674:return cf;case 35675:return hf;case 35676:return uf;case 5124:case 35670:return df;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return xf;case 36295:return vf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return Ef}}var ha=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sf(e.type)}},ua=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Af(e.type)}},da=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},gr=/(\w+)(\])?(\[|\.)?/g;function zo(i,t){i.seq.push(t),i.map[t.id]=t}function wf(i,t,e){let n=i.name,s=n.length;for(gr.lastIndex=0;;){let r=gr.exec(n),a=gr.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zo(e,c===void 0?new ha(o,i,t):new ua(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new da(o),zo(e,f)),e=f}}}var ci=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);wf(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ko(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var bf=37297,Tf=0;function Rf(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Cf(i){let t=Wt.getPrimaries(Wt.workingColorSpace),e=Wt.getPrimaries(i),n;switch(t===e?n="":t===fs&&e===ds?n="LinearDisplayP3ToLinearSRGB":t===ds&&e===fs&&(n="LinearSRGBToLinearDisplayP3"),i){case Xe:case Ls:return[n,"LinearTransferOETF"];case Ge:case za:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Vo(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rf(i.getShaderSource(t),a)}else return s}function Pf(i,t){let e=Cf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function If(i,t){let e;switch(t){case $l:e="Linear";break;case tc:e="Reinhard";break;case ec:e="Cineon";break;case nc:e="ACESFilmic";break;case sc:e="AgX";break;case rc:e="Neutral";break;case ic:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ts=new B;function Uf(){Wt.getLuminanceCoefficients(ts);let i=ts.x.toFixed(4),t=ts.y.toFixed(4),e=ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Df(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ti).join(`
`)}function Lf(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nf(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ti(i){return i!==""}function Ho(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Go(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ff=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(i){return i.replace(Ff,Of)}var Bf=new Map;function Of(i,t){let e=Nt[t];if(e===void 0){let n=Bf.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fa(e)}var zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(i){return i.replace(zf,kf)}function kf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xo(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Vf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ul?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===je&&(t="SHADOWMAP_TYPE_VSM"),t}function Hf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case di:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case di:t="ENVMAP_MODE_REFRACTION";break}return t}function Wf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $o:t="ENVMAP_BLENDING_MULTIPLY";break;case Kl:t="ENVMAP_BLENDING_MIX";break;case jl:t="ENVMAP_BLENDING_ADD";break}return t}function Xf(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qf(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Vf(e),c=Hf(e),h=Gf(e),f=Wf(e),p=Xf(e),m=Df(e),v=Lf(r),_=s.createProgram(),d,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ti).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ti).join(`
`),u.length>0&&(u+=`
`)):(d=[Xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),u=[Xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==vn?If("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Pf("linearToOutputTexel",e.outputColorSpace),Uf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),a=fa(a),a=Ho(a,e),a=Go(a,e),o=fa(o),o=Ho(o,e),o=Go(o,e),a=Wo(a),o=Wo(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",e.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=w+d+a,A=w+u+o,F=ko(s,s.VERTEX_SHADER,S),C=ko(s,s.FRAGMENT_SHADER,A);s.attachShader(_,F),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(M){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(F).trim(),Y=s.getShaderInfoLog(C).trim(),et=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,C);else{let st=Vo(s,F,"vertex"),Q=Vo(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+G+`
`+st+`
`+Q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||Y==="")&&(H=!1);H&&(M.diagnostics={runnable:et,programLog:G,vertexShader:{log:V,prefix:d},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(F),s.deleteShader(C),z=new ci(s,_),ot=Nf(s,_)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let ot;this.getAttributes=function(){return ot===void 0&&R(this),ot};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,bf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=C,this}var Yf=0,pa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ma(t),e.set(t,n)),n}},ma=class{constructor(t){this.id=Yf++,this.code=t,this.usedTimes=0}};function Zf(i,t,e,n,s,r,a){let o=new ys,l=new pa,c=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,m=s.vertexTextures,v=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,M,G,V,Y){let et=V.fog,H=Y.geometry,st=x.isMeshStandardMaterial?V.environment:null,Q=(x.isMeshStandardMaterial?e:t).get(x.envMap||st),ft=Q&&Q.mapping===Ds?Q.image.height:null,gt=_[x.type];x.precision!==null&&(v=s.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));let _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,kt=_t!==void 0?_t.length:0,zt=0;H.morphAttributes.position!==void 0&&(zt=1),H.morphAttributes.normal!==void 0&&(zt=2),H.morphAttributes.color!==void 0&&(zt=3);let J,b,L,k;if(gt){let ye=We[gt];J=ye.vertexShader,b=ye.fragmentShader}else J=x.vertexShader,b=x.fragmentShader,l.update(x),L=l.getVertexShaderID(x),k=l.getFragmentShaderID(x);let tt=i.getRenderTarget(),it=Y.isInstancedMesh===!0,Et=Y.isBatchedMesh===!0,Mt=!!x.map,xt=!!x.matcap,T=!!Q,Vt=!!x.aoMap,Ct=!!x.lightMap,Tt=!!x.bumpMap,At=!!x.normalMap,Ot=!!x.displacementMap,rt=!!x.emissiveMap,E=!!x.metalnessMap,g=!!x.roughnessMap,D=x.anisotropy>0,X=x.clearcoat>0,K=x.dispersion>0,Z=x.iridescence>0,lt=x.sheen>0,j=x.transmission>0,nt=D&&!!x.anisotropyMap,Rt=X&&!!x.clearcoatMap,$=X&&!!x.clearcoatNormalMap,dt=X&&!!x.clearcoatRoughnessMap,It=Z&&!!x.iridescenceMap,Pt=Z&&!!x.iridescenceThicknessMap,vt=lt&&!!x.sheenColorMap,Ht=lt&&!!x.sheenRoughnessMap,Lt=!!x.specularMap,qt=!!x.specularColorMap,P=!!x.specularIntensityMap,pt=j&&!!x.transmissionMap,W=j&&!!x.thicknessMap,q=!!x.gradientMap,ht=!!x.alphaMap,mt=x.alphaTest>0,Gt=!!x.alphaHash,ie=!!x.extensions,ve=vn;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ve=i.toneMapping);let Xt={shaderID:gt,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:b,defines:x.defines,customVertexShaderID:L,customFragmentShaderID:k,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:Et,batchingColor:Et&&Y._colorsTexture!==null,instancing:it,instancingColor:it&&Y.instanceColor!==null,instancingMorph:it&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Xe,alphaToCoverage:!!x.alphaToCoverage,map:Mt,matcap:xt,envMap:T,envMapMode:T&&Q.mapping,envMapCubeUVHeight:ft,aoMap:Vt,lightMap:Ct,bumpMap:Tt,normalMap:At,displacementMap:m&&Ot,emissiveMap:rt,normalMapObjectSpace:At&&x.normalMapType===hc,normalMapTangentSpace:At&&x.normalMapType===cc,metalnessMap:E,roughnessMap:g,anisotropy:D,anisotropyMap:nt,clearcoat:X,clearcoatMap:Rt,clearcoatNormalMap:$,clearcoatRoughnessMap:dt,dispersion:K,iridescence:Z,iridescenceMap:It,iridescenceThicknessMap:Pt,sheen:lt,sheenColorMap:vt,sheenRoughnessMap:Ht,specularMap:Lt,specularColorMap:qt,specularIntensityMap:P,transmission:j,transmissionMap:pt,thicknessMap:W,gradientMap:q,opaque:x.transparent===!1&&x.blending===ai&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:mt,alphaHash:Gt,combine:x.combine,mapUv:Mt&&d(x.map.channel),aoMapUv:Vt&&d(x.aoMap.channel),lightMapUv:Ct&&d(x.lightMap.channel),bumpMapUv:Tt&&d(x.bumpMap.channel),normalMapUv:At&&d(x.normalMap.channel),displacementMapUv:Ot&&d(x.displacementMap.channel),emissiveMapUv:rt&&d(x.emissiveMap.channel),metalnessMapUv:E&&d(x.metalnessMap.channel),roughnessMapUv:g&&d(x.roughnessMap.channel),anisotropyMapUv:nt&&d(x.anisotropyMap.channel),clearcoatMapUv:Rt&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:$&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&d(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&d(x.sheenRoughnessMap.channel),specularMapUv:Lt&&d(x.specularMap.channel),specularColorMapUv:qt&&d(x.specularColorMap.channel),specularIntensityMapUv:P&&d(x.specularIntensityMap.channel),transmissionMapUv:pt&&d(x.transmissionMap.channel),thicknessMapUv:W&&d(x.thicknessMap.channel),alphaMapUv:ht&&d(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(At||D),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!H.attributes.uv&&(Mt||ht),fog:!!et,useFog:x.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:Y.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&Wt.getTransfer(x.map.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ze,flipSided:x.side===Se,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function w(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let G in x.defines)M.push(G),M.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(S(M,x),A(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function S(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function A(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),x.push(o.mask)}function F(x){let M=_[x.type],G;if(M){let V=We[M];G=Bc.clone(V.uniforms)}else G=x.uniforms;return G}function C(x,M){let G;for(let V=0,Y=h.length;V<Y;V++){let et=h[V];if(et.cacheKey===M){G=et,++G.usedTimes;break}}return G===void 0&&(G=new Qf(i,M,x,r),h.push(G)),G}function R(x){if(--x.usedTimes===0){let M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function z(x){l.remove(x)}function ot(){l.dispose()}return{getParameters:u,getProgramCacheKey:w,getUniforms:F,acquireProgram:C,releaseProgram:R,releaseShaderCache:z,programs:h,dispose:ot}}function Jf(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function qf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yo(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,p,m,v,_,d){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:d},i[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=_,u.group=d),t++,u}function o(f,p,m,v,_,d){let u=a(f,p,m,v,_,d);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(f,p,m,v,_,d){let u=a(f,p,m,v,_,d);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,p){e.length>1&&e.sort(f||qf),n.length>1&&n.sort(p||Qo),s.length>1&&s.sort(p||Qo)}function h(){for(let f=t,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Kf(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Yo,i.set(n,[a])):s>=r.length?(a=new Yo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jf(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Bt};break;case"SpotLight":e={position:new B,direction:new B,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function $f(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var tp=0;function ep(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function np(i){let t=new jf,e=$f(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new re,a=new re;function o(c){let h=0,f=0,p=0;for(let ot=0;ot<9;ot++)n.probe[ot].set(0,0,0);let m=0,v=0,_=0,d=0,u=0,w=0,S=0,A=0,F=0,C=0,R=0;c.sort(ep);for(let ot=0,x=c.length;ot<x;ot++){let M=c[ot],G=M.color,V=M.intensity,Y=M.distance,et=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=G.r*V,f+=G.g*V,p+=G.b*V;else if(M.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(M.sh.coefficients[H],V);R++}else if(M.isDirectionalLight){let H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let st=M.shadow,Q=e.get(M);Q.shadowIntensity=st.intensity,Q.shadowBias=st.bias,Q.shadowNormalBias=st.normalBias,Q.shadowRadius=st.radius,Q.shadowMapSize=st.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=M.shadow.matrix,w++}n.directional[m]=H,m++}else if(M.isSpotLight){let H=t.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(G).multiplyScalar(V),H.distance=Y,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,n.spot[_]=H;let st=M.shadow;if(M.map&&(n.spotLightMap[F]=M.map,F++,st.updateMatrices(M),M.castShadow&&C++),n.spotLightMatrix[_]=st.matrix,M.castShadow){let Q=e.get(M);Q.shadowIntensity=st.intensity,Q.shadowBias=st.bias,Q.shadowNormalBias=st.normalBias,Q.shadowRadius=st.radius,Q.shadowMapSize=st.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=et,A++}_++}else if(M.isRectAreaLight){let H=t.get(M);H.color.copy(G).multiplyScalar(V),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),n.rectArea[d]=H,d++}else if(M.isPointLight){let H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){let st=M.shadow,Q=e.get(M);Q.shadowIntensity=st.intensity,Q.shadowBias=st.bias,Q.shadowNormalBias=st.normalBias,Q.shadowRadius=st.radius,Q.shadowMapSize=st.mapSize,Q.shadowCameraNear=st.camera.near,Q.shadowCameraFar=st.camera.far,n.pointShadow[v]=Q,n.pointShadowMap[v]=et,n.pointShadowMatrix[v]=M.shadow.matrix,S++}n.point[v]=H,v++}else if(M.isHemisphereLight){let H=t.get(M);H.skyColor.copy(M.color).multiplyScalar(V),H.groundColor.copy(M.groundColor).multiplyScalar(V),n.hemi[u]=H,u++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;let z=n.hash;(z.directionalLength!==m||z.pointLength!==v||z.spotLength!==_||z.rectAreaLength!==d||z.hemiLength!==u||z.numDirectionalShadows!==w||z.numPointShadows!==S||z.numSpotShadows!==A||z.numSpotMaps!==F||z.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=A+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,z.directionalLength=m,z.pointLength=v,z.spotLength=_,z.rectAreaLength=d,z.hemiLength=u,z.numDirectionalShadows=w,z.numPointShadows=S,z.numSpotShadows=A,z.numSpotMaps=F,z.numLightProbes=R,n.version=tp++)}function l(c,h){let f=0,p=0,m=0,v=0,_=0,d=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){let S=c[u];if(S.isDirectionalLight){let A=n.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),f++}else if(S.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),m++}else if(S.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){let A=n.point[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){let A=n.hemi[_];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:n}}function Zo(i){let t=new np(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ip(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Zo(i),t.set(s,[o])):r>=a.length?(o=new Zo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ga=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rp=`uniform sampler2D shadow_pass;
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
}`;function ap(i,t,e){let n=new ws,s=new Jt,r=new Jt,a=new ne,o=new ga({depthPacking:lc}),l=new xa,c={},h=e.maxTextureSize,f={[yn]:Se,[Se]:yn,[ze]:ze},p=new he({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:sp,fragmentShader:rp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let v=new Ee;v.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pe(v,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let u=this.type;this.render=function(C,R,z){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;let ot=i.getRenderTarget(),x=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),G=i.state;G.setBlending(xn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let V=u!==je&&this.type===je,Y=u===je&&this.type!==je;for(let et=0,H=C.length;et<H;et++){let st=C[et],Q=st.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let ft=Q.getFrameExtents();if(s.multiply(ft),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,Q.mapSize.y=r.y)),Q.map===null||V===!0||Y===!0){let _t=this.type!==je?{minFilter:Ie,magFilter:Ie}:{};Q.map!==null&&Q.map.dispose(),Q.map=new sn(s.x,s.y,_t),Q.map.texture.name=st.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let gt=Q.getViewportCount();for(let _t=0;_t<gt;_t++){let kt=Q.getViewport(_t);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),G.viewport(a),Q.updateMatrices(st,_t),n=Q.getFrustum(),A(R,z,Q.camera,st,this.type)}Q.isPointLightShadow!==!0&&this.type===je&&w(Q,z),Q.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(ot,x,M)};function w(C,R){let z=t.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new sn(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,z,p,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,z,m,_,null)}function S(C,R,z,ot){let x=null,M=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(M!==void 0)x=M;else if(x=z.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=x.uuid,V=R.uuid,Y=c[G];Y===void 0&&(Y={},c[G]=Y);let et=Y[V];et===void 0&&(et=x.clone(),Y[V]=et,R.addEventListener("dispose",F)),x=et}if(x.visible=R.visible,x.wireframe=R.wireframe,ot===je?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,z.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=i.properties.get(x);G.light=z}return x}function A(C,R,z,ot,x){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===je)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let V=t.update(C),Y=C.material;if(Array.isArray(Y)){let et=V.groups;for(let H=0,st=et.length;H<st;H++){let Q=et[H],ft=Y[Q.materialIndex];if(ft&&ft.visible){let gt=S(C,ft,ot,x);C.onBeforeShadow(i,C,R,z,V,gt,Q),i.renderBufferDirect(z,null,V,gt,C,Q),C.onAfterShadow(i,C,R,z,V,gt,Q)}}}else if(Y.visible){let et=S(C,Y,ot,x);C.onBeforeShadow(i,C,R,z,V,et,null),i.renderBufferDirect(z,null,V,et,C,null),C.onAfterShadow(i,C,R,z,V,et,null)}}let G=C.children;for(let V=0,Y=G.length;V<Y;V++)A(G[V],R,z,ot,x)}function F(C){C.target.removeEventListener("dispose",F);for(let z in c){let ot=c[z],x=C.target.uuid;x in ot&&(ot[x].dispose(),delete ot[x])}}}var op={[yr]:_r,[Mr]:Ar,[Sr]:wr,[hi]:Er,[_r]:yr,[Ar]:Mr,[wr]:Sr,[Er]:hi};function lp(i){function t(){let P=!1,pt=new ne,W=null,q=new ne(0,0,0,0);return{setMask:function(ht){W!==ht&&!P&&(i.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){P=ht},setClear:function(ht,mt,Gt,ie,ve){ve===!0&&(ht*=ie,mt*=ie,Gt*=ie),pt.set(ht,mt,Gt,ie),q.equals(pt)===!1&&(i.clearColor(ht,mt,Gt,ie),q.copy(pt))},reset:function(){P=!1,W=null,q.set(-1,0,0,0)}}}function e(){let P=!1,pt=!1,W=null,q=null,ht=null;return{setReversed:function(mt){pt=mt},setTest:function(mt){mt?L(i.DEPTH_TEST):k(i.DEPTH_TEST)},setMask:function(mt){W!==mt&&!P&&(i.depthMask(mt),W=mt)},setFunc:function(mt){if(pt&&(mt=op[mt]),q!==mt){switch(mt){case yr:i.depthFunc(i.NEVER);break;case _r:i.depthFunc(i.ALWAYS);break;case Mr:i.depthFunc(i.LESS);break;case hi:i.depthFunc(i.LEQUAL);break;case Sr:i.depthFunc(i.EQUAL);break;case Er:i.depthFunc(i.GEQUAL);break;case Ar:i.depthFunc(i.GREATER);break;case wr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=mt}},setLocked:function(mt){P=mt},setClear:function(mt){ht!==mt&&(i.clearDepth(mt),ht=mt)},reset:function(){P=!1,W=null,q=null,ht=null}}}function n(){let P=!1,pt=null,W=null,q=null,ht=null,mt=null,Gt=null,ie=null,ve=null;return{setTest:function(Xt){P||(Xt?L(i.STENCIL_TEST):k(i.STENCIL_TEST))},setMask:function(Xt){pt!==Xt&&!P&&(i.stencilMask(Xt),pt=Xt)},setFunc:function(Xt,ye,Qe){(W!==Xt||q!==ye||ht!==Qe)&&(i.stencilFunc(Xt,ye,Qe),W=Xt,q=ye,ht=Qe)},setOp:function(Xt,ye,Qe){(mt!==Xt||Gt!==ye||ie!==Qe)&&(i.stencilOp(Xt,ye,Qe),mt=Xt,Gt=ye,ie=Qe)},setLocked:function(Xt){P=Xt},setClear:function(Xt){ve!==Xt&&(i.clearStencil(Xt),ve=Xt)},reset:function(){P=!1,pt=null,W=null,q=null,ht=null,mt=null,Gt=null,ie=null,ve=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,p=[],m=null,v=!1,_=null,d=null,u=null,w=null,S=null,A=null,F=null,C=new Bt(0,0,0),R=0,z=!1,ot=null,x=null,M=null,G=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,H=0,st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(st)[1]),et=H>=1):st.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),et=H>=2);let Q=null,ft={},gt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),kt=new ne().fromArray(gt),zt=new ne().fromArray(_t);function J(P,pt,W,q){let ht=new Uint8Array(4),mt=i.createTexture();i.bindTexture(P,mt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<W;Gt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(pt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return mt}let b={};b[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),b[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),b[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),b[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),L(i.DEPTH_TEST),r.setFunc(hi),Ct(!1),Tt($a),L(i.CULL_FACE),T(xn);function L(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function k(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function tt(P,pt){return h[P]!==pt?(i.bindFramebuffer(P,pt),h[P]=pt,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function it(P,pt){let W=p,q=!1;if(P){W=f.get(pt),W===void 0&&(W=[],f.set(pt,W));let ht=P.textures;if(W.length!==ht.length||W[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Gt=ht.length;mt<Gt;mt++)W[mt]=i.COLOR_ATTACHMENT0+mt;W.length=ht.length,q=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,q=!0);q&&i.drawBuffers(W)}function Et(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let Mt={[Un]:i.FUNC_ADD,[Ll]:i.FUNC_SUBTRACT,[Nl]:i.FUNC_REVERSE_SUBTRACT};Mt[Fl]=i.MIN,Mt[Bl]=i.MAX;let xt={[Ol]:i.ZERO,[zl]:i.ONE,[kl]:i.SRC_COLOR,[xr]:i.SRC_ALPHA,[Ql]:i.SRC_ALPHA_SATURATE,[Wl]:i.DST_COLOR,[Hl]:i.DST_ALPHA,[Vl]:i.ONE_MINUS_SRC_COLOR,[vr]:i.ONE_MINUS_SRC_ALPHA,[Xl]:i.ONE_MINUS_DST_COLOR,[Gl]:i.ONE_MINUS_DST_ALPHA,[Yl]:i.CONSTANT_COLOR,[Zl]:i.ONE_MINUS_CONSTANT_COLOR,[Jl]:i.CONSTANT_ALPHA,[ql]:i.ONE_MINUS_CONSTANT_ALPHA};function T(P,pt,W,q,ht,mt,Gt,ie,ve,Xt){if(P===xn){v===!0&&(k(i.BLEND),v=!1);return}if(v===!1&&(L(i.BLEND),v=!0),P!==Dl){if(P!==_||Xt!==z){if((d!==Un||S!==Un)&&(i.blendEquation(i.FUNC_ADD),d=Un,S=Un),Xt)switch(P){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFunc(i.ONE,i.ONE);break;case eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case no:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}u=null,w=null,A=null,F=null,C.set(0,0,0),R=0,_=P,z=Xt}return}ht=ht||pt,mt=mt||W,Gt=Gt||q,(pt!==d||ht!==S)&&(i.blendEquationSeparate(Mt[pt],Mt[ht]),d=pt,S=ht),(W!==u||q!==w||mt!==A||Gt!==F)&&(i.blendFuncSeparate(xt[W],xt[q],xt[mt],xt[Gt]),u=W,w=q,A=mt,F=Gt),(ie.equals(C)===!1||ve!==R)&&(i.blendColor(ie.r,ie.g,ie.b,ve),C.copy(ie),R=ve),_=P,z=!1}function Vt(P,pt){P.side===ze?k(i.CULL_FACE):L(i.CULL_FACE);let W=P.side===Se;pt&&(W=!W),Ct(W),P.blending===ai&&P.transparent===!1?T(xn):T(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);let q=P.stencilWrite;a.setTest(q),q&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ot(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):k(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(P){ot!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),ot=P)}function Tt(P){P!==Pl?(L(i.CULL_FACE),P!==x&&(P===$a?i.cullFace(i.BACK):P===Il?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):k(i.CULL_FACE),x=P}function At(P){P!==M&&(et&&i.lineWidth(P),M=P)}function Ot(P,pt,W){P?(L(i.POLYGON_OFFSET_FILL),(G!==pt||V!==W)&&(i.polygonOffset(pt,W),G=pt,V=W)):k(i.POLYGON_OFFSET_FILL)}function rt(P){P?L(i.SCISSOR_TEST):k(i.SCISSOR_TEST)}function E(P){P===void 0&&(P=i.TEXTURE0+Y-1),Q!==P&&(i.activeTexture(P),Q=P)}function g(P,pt,W){W===void 0&&(Q===null?W=i.TEXTURE0+Y-1:W=Q);let q=ft[W];q===void 0&&(q={type:void 0,texture:void 0},ft[W]=q),(q.type!==P||q.texture!==pt)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(P,pt||b[P]),q.type=P,q.texture=pt)}function D(){let P=ft[Q];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(P){kt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),kt.copy(P))}function vt(P){zt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),zt.copy(P))}function Ht(P,pt){let W=l.get(pt);W===void 0&&(W=new WeakMap,l.set(pt,W));let q=W.get(P);q===void 0&&(q=i.getUniformBlockIndex(pt,P.name),W.set(P,q))}function Lt(P,pt){let q=l.get(pt).get(P);o.get(pt)!==q&&(i.uniformBlockBinding(pt,q,P.__bindingPointIndex),o.set(pt,q))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Q=null,ft={},h={},f=new WeakMap,p=[],m=null,v=!1,_=null,d=null,u=null,w=null,S=null,A=null,F=null,C=new Bt(0,0,0),R=0,z=!1,ot=null,x=null,M=null,G=null,V=null,kt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:L,disable:k,bindFramebuffer:tt,drawBuffers:it,useProgram:Et,setBlending:T,setMaterial:Vt,setFlipSided:Ct,setCullFace:Tt,setLineWidth:At,setPolygonOffset:Ot,setScissorTest:rt,activeTexture:E,bindTexture:g,unbindTexture:D,compressedTexImage2D:X,compressedTexImage3D:K,texImage2D:dt,texImage3D:It,updateUBOMapping:Ht,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:$,texSubImage2D:Z,texSubImage3D:lt,compressedTexSubImage2D:j,compressedTexSubImage3D:nt,scissor:Pt,viewport:vt,reset:qt}}function Jo(i,t,e,n){let s=cp(n);switch(e){case sl:return i*t;case al:return i*t;case ol:return i*t*2;case ll:return i*t/s.components*s.byteLength;case Fa:return i*t/s.components*s.byteLength;case cl:return i*t*2/s.components*s.byteLength;case Ba:return i*t*2/s.components*s.byteLength;case rl:return i*t*3/s.components*s.byteLength;case Ve:return i*t*4/s.components*s.byteLength;case Oa:return i*t*4/s.components*s.byteLength;case ss:case rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case as:case os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ir:case Dr:return Math.max(i,16)*Math.max(t,8)/4;case Pr:case Ur:return Math.max(i,8)*Math.max(t,8)/2;case Lr:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Or:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case kr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ls:case Kr:case jr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hl:case $r:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ta:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cp(i){switch(i){case nn:case el:return{byteLength:1,components:1};case Ci:case nl:case Pi:return{byteLength:2,components:1};case La:case Na:return{byteLength:2,components:4};case Bn:case Da:case tn:return{byteLength:4,components:1};case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hp(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,h=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,g){return m?new OffscreenCanvas(E,g):ms("canvas")}function _(E,g,D){let X=1,K=rt(E);if((K.width>D||K.height>D)&&(X=D/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Z=Math.floor(X*K.width),lt=Math.floor(X*K.height);f===void 0&&(f=v(Z,lt));let j=g?v(Z,lt):f;return j.width=Z,j.height=lt,j.getContext("2d").drawImage(E,0,0,Z,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+lt+")."),j}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function d(E){return E.generateMipmaps&&E.minFilter!==Ie&&E.minFilter!==ke}function u(E){i.generateMipmap(E)}function w(E,g,D,X,K=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=g;if(g===i.RED&&(D===i.FLOAT&&(Z=i.R32F),D===i.HALF_FLOAT&&(Z=i.R16F),D===i.UNSIGNED_BYTE&&(Z=i.R8)),g===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.R8UI),D===i.UNSIGNED_SHORT&&(Z=i.R16UI),D===i.UNSIGNED_INT&&(Z=i.R32UI),D===i.BYTE&&(Z=i.R8I),D===i.SHORT&&(Z=i.R16I),D===i.INT&&(Z=i.R32I)),g===i.RG&&(D===i.FLOAT&&(Z=i.RG32F),D===i.HALF_FLOAT&&(Z=i.RG16F),D===i.UNSIGNED_BYTE&&(Z=i.RG8)),g===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RG8UI),D===i.UNSIGNED_SHORT&&(Z=i.RG16UI),D===i.UNSIGNED_INT&&(Z=i.RG32UI),D===i.BYTE&&(Z=i.RG8I),D===i.SHORT&&(Z=i.RG16I),D===i.INT&&(Z=i.RG32I)),g===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),D===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),D===i.UNSIGNED_INT&&(Z=i.RGB32UI),D===i.BYTE&&(Z=i.RGB8I),D===i.SHORT&&(Z=i.RGB16I),D===i.INT&&(Z=i.RGB32I)),g===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),D===i.UNSIGNED_INT&&(Z=i.RGBA32UI),D===i.BYTE&&(Z=i.RGBA8I),D===i.SHORT&&(Z=i.RGBA16I),D===i.INT&&(Z=i.RGBA32I)),g===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),g===i.RGBA){let lt=K?us:Wt.getTransfer(X);D===i.FLOAT&&(Z=i.RGBA32F),D===i.HALF_FLOAT&&(Z=i.RGBA16F),D===i.UNSIGNED_BYTE&&(Z=lt===jt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(E,g){let D;return E?g===null||g===Bn||g===fi?D=i.DEPTH24_STENCIL8:g===tn?D=i.DEPTH32F_STENCIL8:g===Ci&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Bn||g===fi?D=i.DEPTH_COMPONENT24:g===tn?D=i.DEPTH_COMPONENT32F:g===Ci&&(D=i.DEPTH_COMPONENT16),D}function A(E,g){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ie&&E.minFilter!==ke?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function F(E){let g=E.target;g.removeEventListener("dispose",F),R(g),g.isVideoTexture&&h.delete(g)}function C(E){let g=E.target;g.removeEventListener("dispose",C),ot(g)}function R(E){let g=n.get(E);if(g.__webglInit===void 0)return;let D=E.source,X=p.get(D);if(X){let K=X[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&z(E),Object.keys(X).length===0&&p.delete(D)}n.remove(E)}function z(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let D=E.source,X=p.get(D);delete X[g.__cacheKey],a.memory.textures--}function ot(E){let g=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let K=0;K<g.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[X][K]);else i.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)i.deleteFramebuffer(g.__webglFramebuffer[X]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let D=E.textures;for(let X=0,K=D.length;X<K;X++){let Z=n.get(D[X]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(D[X])}n.remove(E)}let x=0;function M(){x=0}function G(){let E=x;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),x+=1,E}function V(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function Y(E,g){let D=n.get(E);if(E.isVideoTexture&&At(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){let X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(D,E,g);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+g)}function et(E,g){let D=n.get(E);if(E.version>0&&D.__version!==E.version){zt(D,E,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+g)}function H(E,g){let D=n.get(E);if(E.version>0&&D.__version!==E.version){zt(D,E,g);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+g)}function st(E,g){let D=n.get(E);if(E.version>0&&D.__version!==E.version){J(D,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+g)}let Q={[Rr]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[Cr]:i.MIRRORED_REPEAT},ft={[Ie]:i.NEAREST,[ac]:i.NEAREST_MIPMAP_NEAREST,[Li]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[ks]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},gt={[uc]:i.NEVER,[xc]:i.ALWAYS,[dc]:i.LESS,[ul]:i.LEQUAL,[fc]:i.EQUAL,[gc]:i.GEQUAL,[pc]:i.GREATER,[mc]:i.NOTEQUAL};function _t(E,g){if(g.type===tn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===ke||g.magFilter===ks||g.magFilter===Li||g.magFilter===Fn||g.minFilter===ke||g.minFilter===ks||g.minFilter===Li||g.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Q[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Q[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Q[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ft[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ft[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,gt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ie||g.minFilter!==Li&&g.minFilter!==Fn||g.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function kt(E,g){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",F));let X=g.source,K=p.get(X);K===void 0&&(K={},p.set(X,K));let Z=V(g);if(Z!==E.__cacheKey){K[Z]===void 0&&(K[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[Z].usedTimes++;let lt=K[E.__cacheKey];lt!==void 0&&(K[E.__cacheKey].usedTimes--,lt.usedTimes===0&&z(g)),E.__cacheKey=Z,E.__webglTexture=K[Z].texture}return D}function zt(E,g,D){let X=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=i.TEXTURE_3D);let K=kt(E,g),Z=g.source;e.bindTexture(X,E.__webglTexture,i.TEXTURE0+D);let lt=n.get(Z);if(Z.version!==lt.__version||K===!0){e.activeTexture(i.TEXTURE0+D);let j=Wt.getPrimaries(Wt.workingColorSpace),nt=g.colorSpace===mn?null:Wt.getPrimaries(g.colorSpace),Rt=g.colorSpace===mn||j===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let $=_(g.image,!1,s.maxTextureSize);$=Ot(g,$);let dt=r.convert(g.format,g.colorSpace),It=r.convert(g.type),Pt=w(g.internalFormat,dt,It,g.colorSpace,g.isVideoTexture);_t(X,g);let vt,Ht=g.mipmaps,Lt=g.isVideoTexture!==!0,qt=lt.__version===void 0||K===!0,P=Z.dataReady,pt=A(g,$);if(g.isDepthTexture)Pt=S(g.format===pi,g.type),qt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Pt,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,Pt,$.width,$.height,0,dt,It,null));else if(g.isDataTexture)if(Ht.length>0){Lt&&qt&&e.texStorage2D(i.TEXTURE_2D,pt,Pt,Ht[0].width,Ht[0].height);for(let W=0,q=Ht.length;W<q;W++)vt=Ht[W],Lt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt.width,vt.height,dt,It,vt.data):e.texImage2D(i.TEXTURE_2D,W,Pt,vt.width,vt.height,0,dt,It,vt.data);g.generateMipmaps=!1}else Lt?(qt&&e.texStorage2D(i.TEXTURE_2D,pt,Pt,$.width,$.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,dt,It,$.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,$.width,$.height,0,dt,It,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Lt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Pt,Ht[0].width,Ht[0].height,$.depth);for(let W=0,q=Ht.length;W<q;W++)if(vt=Ht[W],g.format!==Ve)if(dt!==null)if(Lt){if(P)if(g.layerUpdates.size>0){let ht=Jo(vt.width,vt.height,g.format,g.type);for(let mt of g.layerUpdates){let Gt=vt.data.subarray(mt*ht/vt.data.BYTES_PER_ELEMENT,(mt+1)*ht/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,mt,vt.width,vt.height,1,dt,Gt,0,0)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,vt.width,vt.height,$.depth,dt,vt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Pt,vt.width,vt.height,$.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,vt.width,vt.height,$.depth,dt,It,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Pt,vt.width,vt.height,$.depth,0,dt,It,vt.data)}else{Lt&&qt&&e.texStorage2D(i.TEXTURE_2D,pt,Pt,Ht[0].width,Ht[0].height);for(let W=0,q=Ht.length;W<q;W++)vt=Ht[W],g.format!==Ve?dt!==null?Lt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,vt.width,vt.height,dt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Pt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt.width,vt.height,dt,It,vt.data):e.texImage2D(i.TEXTURE_2D,W,Pt,vt.width,vt.height,0,dt,It,vt.data)}else if(g.isDataArrayTexture)if(Lt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Pt,$.width,$.height,$.depth),P)if(g.layerUpdates.size>0){let W=Jo($.width,$.height,g.format,g.type);for(let q of g.layerUpdates){let ht=$.data.subarray(q*W/$.data.BYTES_PER_ELEMENT,(q+1)*W/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,$.width,$.height,1,dt,It,ht)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,dt,It,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,$.width,$.height,$.depth,0,dt,It,$.data);else if(g.isData3DTexture)Lt?(qt&&e.texStorage3D(i.TEXTURE_3D,pt,Pt,$.width,$.height,$.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,dt,It,$.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,$.width,$.height,$.depth,0,dt,It,$.data);else if(g.isFramebufferTexture){if(qt)if(Lt)e.texStorage2D(i.TEXTURE_2D,pt,Pt,$.width,$.height);else{let W=$.width,q=$.height;for(let ht=0;ht<pt;ht++)e.texImage2D(i.TEXTURE_2D,ht,Pt,W,q,0,dt,It,null),W>>=1,q>>=1}}else if(Ht.length>0){if(Lt&&qt){let W=rt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,pt,Pt,W.width,W.height)}for(let W=0,q=Ht.length;W<q;W++)vt=Ht[W],Lt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,dt,It,vt):e.texImage2D(i.TEXTURE_2D,W,Pt,dt,It,vt);g.generateMipmaps=!1}else if(Lt){if(qt){let W=rt($);e.texStorage2D(i.TEXTURE_2D,pt,Pt,W.width,W.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,It,$)}else e.texImage2D(i.TEXTURE_2D,0,Pt,dt,It,$);d(g)&&u(X),lt.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function J(E,g,D){if(g.image.length!==6)return;let X=kt(E,g),K=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+D);let Z=n.get(K);if(K.version!==Z.__version||X===!0){e.activeTexture(i.TEXTURE0+D);let lt=Wt.getPrimaries(Wt.workingColorSpace),j=g.colorSpace===mn?null:Wt.getPrimaries(g.colorSpace),nt=g.colorSpace===mn||lt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Rt=g.isCompressedTexture||g.image[0].isCompressedTexture,$=g.image[0]&&g.image[0].isDataTexture,dt=[];for(let q=0;q<6;q++)!Rt&&!$?dt[q]=_(g.image[q],!0,s.maxCubemapSize):dt[q]=$?g.image[q].image:g.image[q],dt[q]=Ot(g,dt[q]);let It=dt[0],Pt=r.convert(g.format,g.colorSpace),vt=r.convert(g.type),Ht=w(g.internalFormat,Pt,vt,g.colorSpace),Lt=g.isVideoTexture!==!0,qt=Z.__version===void 0||X===!0,P=K.dataReady,pt=A(g,It);_t(i.TEXTURE_CUBE_MAP,g);let W;if(Rt){Lt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Ht,It.width,It.height);for(let q=0;q<6;q++){W=dt[q].mipmaps;for(let ht=0;ht<W.length;ht++){let mt=W[ht];g.format!==Ve?Pt!==null?Lt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht,0,0,mt.width,mt.height,Pt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht,Ht,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht,0,0,mt.width,mt.height,Pt,vt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht,Ht,mt.width,mt.height,0,Pt,vt,mt.data)}}}else{if(W=g.mipmaps,Lt&&qt){W.length>0&&pt++;let q=rt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Ht,q.width,q.height)}for(let q=0;q<6;q++)if($){Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,dt[q].width,dt[q].height,Pt,vt,dt[q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ht,dt[q].width,dt[q].height,0,Pt,vt,dt[q].data);for(let ht=0;ht<W.length;ht++){let Gt=W[ht].image[q].image;Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht+1,0,0,Gt.width,Gt.height,Pt,vt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht+1,Ht,Gt.width,Gt.height,0,Pt,vt,Gt.data)}}else{Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Pt,vt,dt[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ht,Pt,vt,dt[q]);for(let ht=0;ht<W.length;ht++){let mt=W[ht];Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht+1,0,0,Pt,vt,mt.image[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht+1,Ht,Pt,vt,mt.image[q])}}}d(g)&&u(i.TEXTURE_CUBE_MAP),Z.__version=K.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function b(E,g,D,X,K,Z){let lt=r.convert(D.format,D.colorSpace),j=r.convert(D.type),nt=w(D.internalFormat,lt,j,D.colorSpace);if(!n.get(g).__hasExternalTextures){let $=Math.max(1,g.width>>Z),dt=Math.max(1,g.height>>Z);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,Z,nt,$,dt,g.depth,0,lt,j,null):e.texImage2D(K,Z,nt,$,dt,0,lt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Tt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,n.get(D).__webglTexture,0,Ct(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,n.get(D).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function L(E,g,D){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let X=g.depthTexture,K=X&&X.isDepthTexture?X.type:null,Z=S(g.stencilBuffer,K),lt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=Ct(g);Tt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,Z,g.width,g.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,Z,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Z,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,E)}else{let X=g.textures;for(let K=0;K<X.length;K++){let Z=X[K],lt=r.convert(Z.format,Z.colorSpace),j=r.convert(Z.type),nt=w(Z.internalFormat,lt,j,Z.colorSpace),Rt=Ct(g);D&&Tt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,nt,g.width,g.height):Tt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,nt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,nt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function k(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);let X=n.get(g.depthTexture).__webglTexture,K=Ct(g);if(g.depthTexture.format===oi)Tt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(g.depthTexture.format===pi)Tt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function tt(E){let g=n.get(E),D=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){let K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=X}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");k(g.__webglFramebuffer,E)}else if(D){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=i.createRenderbuffer(),L(g.__webglDepthbuffer[X],E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),L(g.__webglDepthbuffer,E,!1);else{let X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(E,g,D){let X=n.get(E);g!==void 0&&b(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&tt(E)}function Et(E){let g=E.texture,D=n.get(E),X=n.get(g);E.addEventListener("dispose",C);let K=E.textures,Z=E.isWebGLCubeRenderTarget===!0,lt=K.length>1;if(lt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=g.version,a.memory.textures++),Z){D.__webglFramebuffer=[];for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[j]=[];for(let nt=0;nt<g.mipmaps.length;nt++)D.__webglFramebuffer[j][nt]=i.createFramebuffer()}else D.__webglFramebuffer[j]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let j=0;j<g.mipmaps.length;j++)D.__webglFramebuffer[j]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(lt)for(let j=0,nt=K.length;j<nt;j++){let Rt=n.get(K[j]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Tt(E)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let nt=K[j];D.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[j]);let Rt=r.convert(nt.format,nt.colorSpace),$=r.convert(nt.type),dt=w(nt.internalFormat,Rt,$,nt.colorSpace,E.isXRRenderTarget===!0),It=Ct(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,D.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),L(D.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),_t(i.TEXTURE_CUBE_MAP,g);for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0)for(let nt=0;nt<g.mipmaps.length;nt++)b(D.__webglFramebuffer[j][nt],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt);else b(D.__webglFramebuffer[j],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);d(g)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let j=0,nt=K.length;j<nt;j++){let Rt=K[j],$=n.get(Rt);e.bindTexture(i.TEXTURE_2D,$.__webglTexture),_t(i.TEXTURE_2D,Rt),b(D.__webglFramebuffer,E,Rt,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,0),d(Rt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),_t(j,g),g.mipmaps&&g.mipmaps.length>0)for(let nt=0;nt<g.mipmaps.length;nt++)b(D.__webglFramebuffer[nt],E,g,i.COLOR_ATTACHMENT0,j,nt);else b(D.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,j,0);d(g)&&u(j),e.unbindTexture()}E.depthBuffer&&tt(E)}function Mt(E){let g=E.textures;for(let D=0,X=g.length;D<X;D++){let K=g[D];if(d(K)){let Z=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,lt=n.get(K).__webglTexture;e.bindTexture(Z,lt),u(Z),e.unbindTexture()}}}let xt=[],T=[];function Vt(E){if(E.samples>0){if(Tt(E)===!1){let g=E.textures,D=E.width,X=E.height,K=i.COLOR_BUFFER_BIT,Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(E),j=g.length>1;if(j)for(let nt=0;nt<g.length;nt++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let nt=0;nt<g.length;nt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[nt]);let Rt=n.get(g[nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,D,X,0,0,D,X,K,i.NEAREST),l===!0&&(xt.length=0,T.length=0,xt.push(i.COLOR_ATTACHMENT0+nt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(xt.push(Z),T.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let nt=0;nt<g.length;nt++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,lt.__webglColorRenderbuffer[nt]);let Rt=n.get(g[nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Ct(E){return Math.min(s.maxSamples,E.samples)}function Tt(E){let g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function At(E){let g=a.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function Ot(E,g){let D=E.colorSpace,X=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==Xe&&D!==mn&&(Wt.getTransfer(D)===jt?(X!==Ve||K!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function rt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=M,this.setTexture2D=Y,this.setTexture2DArray=et,this.setTexture3D=H,this.setTextureCube=st,this.rebindTextures=it,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=b,this.useMultisampledRTT=Tt}function up(i,t){function e(n,s=mn){let r,a=Wt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===La)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===el)return i.BYTE;if(n===nl)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===Da)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===sl)return i.ALPHA;if(n===rl)return i.RGB;if(n===Ve)return i.RGBA;if(n===al)return i.LUMINANCE;if(n===ol)return i.LUMINANCE_ALPHA;if(n===oi)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===cl)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===Oa)return i.RGBA_INTEGER;if(n===ss||n===rs||n===as||n===os)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ss)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ss)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pr||n===Ir||n===Ur||n===Dr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lr||n===Nr||n===Fr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lr||n===Nr)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Br||n===Or||n===zr||n===kr||n===Vr||n===Hr||n===Gr||n===Wr||n===Xr||n===Qr||n===Yr||n===Zr||n===Jr||n===qr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Br)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Or)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ls||n===Kr||n===jr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ls)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hl||n===$r||n===ta||n===ea)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ls)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$r)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var va=class extends ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},gn=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},dp={type:"move"},Ri=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let d=e.getJointPose(_,n),u=this._getHandJoint(c,_);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pp=`
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

}`,ya=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new he({vertexShader:fp,fragmentShader:pp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_a=class extends _n{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,p=null,m=null,v=null,_=new ya,d=e.getContextAttributes(),u=null,w=null,S=[],A=[],F=new Jt,C=null,R=new ge;R.layers.enable(1),R.viewport=new ne;let z=new ge;z.layers.enable(2),z.viewport=new ne;let ot=[R,z],x=new va;x.layers.enable(1),x.layers.enable(2);let M=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let b=S[J];return b===void 0&&(b=new Ri,S[J]=b),b.getTargetRaySpace()},this.getControllerGrip=function(J){let b=S[J];return b===void 0&&(b=new Ri,S[J]=b),b.getGripSpace()},this.getHand=function(J){let b=S[J];return b===void 0&&(b=new Ri,S[J]=b),b.getHandSpace()};function V(J){let b=A.indexOf(J.inputSource);if(b===-1)return;let L=S[b];L!==void 0&&(L.update(J.inputSource,J.frame,c||a),L.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",et);for(let J=0;J<S.length;J++){let b=A[J];b!==null&&(A[J]=null,S[J].disconnect(b))}M=null,G=null,_.reset(),t.setRenderTarget(u),m=null,p=null,f=null,s=null,w=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",et),d.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){let b={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,b),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new sn(m.framebufferWidth,m.framebufferHeight,{format:Ve,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let b=null,L=null,k=null;d.depth&&(k=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,b=d.stencil?pi:oi,L=d.stencil?fi:Bn);let tt={colorFormat:e.RGBA8,depthFormat:k,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(tt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new sn(p.textureWidth,p.textureHeight,{format:Ve,type:nn,depthTexture:new Ts(p.textureWidth,p.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,b),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function et(J){for(let b=0;b<J.removed.length;b++){let L=J.removed[b],k=A.indexOf(L);k>=0&&(A[k]=null,S[k].disconnect(L))}for(let b=0;b<J.added.length;b++){let L=J.added[b],k=A.indexOf(L);if(k===-1){for(let it=0;it<S.length;it++)if(it>=A.length){A.push(L),k=it;break}else if(A[it]===null){A[it]=L,k=it;break}if(k===-1)break}let tt=S[k];tt&&tt.connect(L)}}let H=new B,st=new B;function Q(J,b,L){H.setFromMatrixPosition(b.matrixWorld),st.setFromMatrixPosition(L.matrixWorld);let k=H.distanceTo(st),tt=b.projectionMatrix.elements,it=L.projectionMatrix.elements,Et=tt[14]/(tt[10]-1),Mt=tt[14]/(tt[10]+1),xt=(tt[9]+1)/tt[5],T=(tt[9]-1)/tt[5],Vt=(tt[8]-1)/tt[0],Ct=(it[8]+1)/it[0],Tt=Et*Vt,At=Et*Ct,Ot=k/(-Vt+Ct),rt=Ot*-Vt;if(b.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(rt),J.translateZ(Ot),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),tt[10]===-1)J.projectionMatrix.copy(b.projectionMatrix),J.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{let E=Et+Ot,g=Mt+Ot,D=Tt-rt,X=At+(k-rt),K=xt*Mt/g*E,Z=T*Mt/g*E;J.projectionMatrix.makePerspective(D,X,K,Z,E,g),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ft(J,b){b===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(b.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let b=J.near,L=J.far;_.texture!==null&&(_.depthNear>0&&(b=_.depthNear),_.depthFar>0&&(L=_.depthFar)),x.near=z.near=R.near=b,x.far=z.far=R.far=L,(M!==x.near||G!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,G=x.far);let k=J.parent,tt=x.cameras;ft(x,k);for(let it=0;it<tt.length;it++)ft(tt[it],k);tt.length===2?Q(x,R,z):x.projectionMatrix.copy(R.projectionMatrix),gt(J,x,k)};function gt(J,b,L){L===null?J.matrix.copy(b.matrixWorld):(J.matrix.copy(L.matrixWorld),J.matrix.invert(),J.matrix.multiply(b.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(b.projectionMatrix),J.projectionMatrixInverse.copy(b.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ia*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let _t=null;function kt(J,b){if(h=b.getViewerPose(c||a),v=b,h!==null){let L=h.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let k=!1;L.length!==x.cameras.length&&(x.cameras.length=0,k=!0);for(let it=0;it<L.length;it++){let Et=L[it],Mt=null;if(m!==null)Mt=m.getViewport(Et);else{let T=f.getViewSubImage(p,Et);Mt=T.viewport,it===0&&(t.setRenderTargetTextures(w,T.colorTexture,p.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(w))}let xt=ot[it];xt===void 0&&(xt=new ge,xt.layers.enable(it),xt.viewport=new ne,ot[it]=xt),xt.matrix.fromArray(Et.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Et.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),it===0&&(x.matrix.copy(xt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),k===!0&&x.cameras.push(xt)}let tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){let it=f.getDepthInformation(L[0]);it&&it.isValid&&it.texture&&_.init(t,it,s.renderState)}}for(let L=0;L<S.length;L++){let k=A[L],tt=S[L];k!==null&&tt!==void 0&&tt.update(k,b,c||a)}_t&&_t(J,b),b.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:b}),v=null}let zt=new ml;zt.setAnimationLoop(kt),this.setAnimationLoop=function(J){_t=J},this.dispose=function(){}}},Pn=new rn,mp=new re;function gp(i,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,pl(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,w,S,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(d,u):u.isMeshToonMaterial?(r(d,u),f(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u)):u.isMeshStandardMaterial?(r(d,u),p(d,u),u.isMeshPhysicalMaterial&&m(d,u,A)):u.isMeshMatcapMaterial?(r(d,u),v(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),_(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(a(d,u),u.isLineDashedMaterial&&o(d,u)):u.isPointsMaterial?l(d,u,w,S):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Se&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Se&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let w=t.get(u),S=w.envMap,A=w.envMapRotation;S&&(d.envMap.value=S,Pn.copy(A),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),d.envMapRotation.value.setFromMatrix4(mp.makeRotationFromEuler(Pn)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function a(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function o(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,w,S){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*w,d.scale.value=S*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,w){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Se&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,u){u.matcap&&(d.matcap.value=u.matcap)}function _(d,u){let w=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xp(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let A=S.program;n.uniformBlockBinding(w,A)}function c(w,S){let A=s[w.id];A===void 0&&(v(w),A=h(w),s[w.id]=A,w.addEventListener("dispose",d));let F=S.program;n.updateUBOMapping(w,F);let C=t.render.frame;r[w.id]!==C&&(p(w),r[w.id]=C)}function h(w){let S=f();w.__bindingPointIndex=S;let A=i.createBuffer(),F=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,A),A}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let S=s[w.id],A=w.uniforms,F=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,R=A.length;C<R;C++){let z=Array.isArray(A[C])?A[C]:[A[C]];for(let ot=0,x=z.length;ot<x;ot++){let M=z[ot];if(m(M,C,ot,F)===!0){let G=M.__offset,V=Array.isArray(M.value)?M.value:[M.value],Y=0;for(let et=0;et<V.length;et++){let H=V[et],st=_(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,G+Y,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,Y),Y+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,S,A,F){let C=w.value,R=S+"_"+A;if(F[R]===void 0)return typeof C=="number"||typeof C=="boolean"?F[R]=C:F[R]=C.clone(),!0;{let z=F[R];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return F[R]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function v(w){let S=w.uniforms,A=0,F=16;for(let R=0,z=S.length;R<z;R++){let ot=Array.isArray(S[R])?S[R]:[S[R]];for(let x=0,M=ot.length;x<M;x++){let G=ot[x],V=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,et=V.length;Y<et;Y++){let H=V[Y],st=_(H),Q=A%F,ft=Q%st.boundary,gt=Q+ft;A+=ft,gt!==0&&F-gt<st.storage&&(A+=F-gt),G.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=st.storage}}}let C=A%F;return C>0&&(A+=F-C),w.__size=A,w.__cache={},this}function _(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function d(w){let S=w.target;S.removeEventListener("dispose",d);let A=a.indexOf(S.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Rs=class{constructor(t={}){let{canvas:e=yc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),v=new Int32Array(4),_=null,d=null,u=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=vn,this.toneMappingExposure=1;let S=this,A=!1,F=0,C=0,R=null,z=-1,ot=null,x=new ne,M=new ne,G=null,V=new Bt(0),Y=0,et=e.width,H=e.height,st=1,Q=null,ft=null,gt=new ne(0,0,et,H),_t=new ne(0,0,et,H),kt=!1,zt=new ws,J=!1,b=!1,L=new re,k=new re,tt=new B,it=new ne,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function xt(){return R===null?st:1}let T=n;function Vt(y,I){return e.getContext(y,I)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",mt,!1),T===null){let I="webgl2";if(T=Vt(I,y),T===null)throw Vt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ct,Tt,At,Ot,rt,E,g,D,X,K,Z,lt,j,nt,Rt,$,dt,It,Pt,vt,Ht,Lt,qt,P;function pt(){Ct=new Ud(T),Ct.init(),Lt=new up(T,Ct),Tt=new bd(T,Ct,t,Lt),At=new lp(T),Tt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),Ot=new Nd(T),rt=new Jf,E=new hp(T,Ct,At,rt,Tt,Lt,Ot),g=new Rd(S),D=new Id(S),X=new Hc(T),qt=new Ad(T,X),K=new Dd(T,X,Ot,qt),Z=new Bd(T,K,X,Ot),Pt=new Fd(T,Tt,E),$=new Td(rt),lt=new Zf(S,g,D,Ct,Tt,qt,$),j=new gp(S,rt),nt=new Kf,Rt=new ip(Ct),It=new Ed(S,g,D,At,Z,p,l),dt=new ap(S,Z,Tt),P=new xp(T,Ot,Tt,At),vt=new wd(T,Ct,Ot),Ht=new Ld(T,Ct,Ot),Ot.programs=lt.programs,S.capabilities=Tt,S.extensions=Ct,S.properties=rt,S.renderLists=nt,S.shadowMap=dt,S.state=At,S.info=Ot}pt();let W=new _a(S,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let y=Ct.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ct.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(y){y!==void 0&&(st=y,this.setSize(et,H,!1))},this.getSize=function(y){return y.set(et,H)},this.setSize=function(y,I,N=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=y,H=I,e.width=Math.floor(y*st),e.height=Math.floor(I*st),N===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(et*st,H*st).floor()},this.setDrawingBufferSize=function(y,I,N){et=y,H=I,st=N,e.width=Math.floor(y*N),e.height=Math.floor(I*N),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(x)},this.getViewport=function(y){return y.copy(gt)},this.setViewport=function(y,I,N,O){y.isVector4?gt.set(y.x,y.y,y.z,y.w):gt.set(y,I,N,O),At.viewport(x.copy(gt).multiplyScalar(st).round())},this.getScissor=function(y){return y.copy(_t)},this.setScissor=function(y,I,N,O){y.isVector4?_t.set(y.x,y.y,y.z,y.w):_t.set(y,I,N,O),At.scissor(M.copy(_t).multiplyScalar(st).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(y){At.setScissorTest(kt=y)},this.setOpaqueSort=function(y){Q=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(y=!0,I=!0,N=!0){let O=0;if(y){let U=!1;if(R!==null){let at=R.texture.format;U=at===Oa||at===Ba||at===Fa}if(U){let at=R.texture.type,ut=at===nn||at===Bn||at===Ci||at===fi||at===La||at===Na,yt=It.getClearColor(),St=It.getClearAlpha(),Ut=yt.r,Dt=yt.g,wt=yt.b;ut?(m[0]=Ut,m[1]=Dt,m[2]=wt,m[3]=St,T.clearBufferuiv(T.COLOR,0,m)):(v[0]=Ut,v[1]=Dt,v[2]=wt,v[3]=St,T.clearBufferiv(T.COLOR,0,v))}else O|=T.COLOR_BUFFER_BIT}I&&(O|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),N&&(O|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),nt.dispose(),Rt.dispose(),rt.dispose(),g.dispose(),D.dispose(),Z.dispose(),qt.dispose(),P.dispose(),lt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Xa),W.removeEventListener("sessionend",Qa),An.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let y=Ot.autoReset,I=dt.enabled,N=dt.autoUpdate,O=dt.needsUpdate,U=dt.type;pt(),Ot.autoReset=y,dt.enabled=I,dt.autoUpdate=N,dt.needsUpdate=O,dt.type=U}function mt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Gt(y){let I=y.target;I.removeEventListener("dispose",Gt),ie(I)}function ie(y){ve(y),rt.remove(y)}function ve(y){let I=rt.get(y).programs;I!==void 0&&(I.forEach(function(N){lt.releaseProgram(N)}),y.isShaderMaterial&&lt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,N,O,U,at){I===null&&(I=Et);let ut=U.isMesh&&U.matrixWorld.determinant()<0,yt=bl(y,I,N,O,U);At.setMaterial(O,ut);let St=N.index,Ut=1;if(O.wireframe===!0){if(St=K.getWireframeAttribute(N),St===void 0)return;Ut=2}let Dt=N.drawRange,wt=N.attributes.position,Zt=Dt.start*Ut,Kt=(Dt.start+Dt.count)*Ut;at!==null&&(Zt=Math.max(Zt,at.start*Ut),Kt=Math.min(Kt,(at.start+at.count)*Ut)),St!==null?(Zt=Math.max(Zt,0),Kt=Math.min(Kt,St.count)):wt!=null&&(Zt=Math.max(Zt,0),Kt=Math.min(Kt,wt.count));let te=Kt-Zt;if(te<0||te===1/0)return;qt.setup(U,O,yt,N,St);let Ae,Qt=vt;if(St!==null&&(Ae=X.get(St),Qt=Ht,Qt.setIndex(Ae)),U.isMesh)O.wireframe===!0?(At.setLineWidth(O.wireframeLinewidth*xt()),Qt.setMode(T.LINES)):Qt.setMode(T.TRIANGLES);else if(U.isLine){let bt=O.linewidth;bt===void 0&&(bt=1),At.setLineWidth(bt*xt()),U.isLineSegments?Qt.setMode(T.LINES):U.isLineLoop?Qt.setMode(T.LINE_LOOP):Qt.setMode(T.LINE_STRIP)}else U.isPoints?Qt.setMode(T.POINTS):U.isSprite&&Qt.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))Qt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let bt=U._multiDrawStarts,ue=U._multiDrawCounts,Yt=U._multiDrawCount,Ne=St?X.get(St).bytesPerElement:1,Wn=rt.get(O).currentProgram.getUniforms();for(let we=0;we<Yt;we++)Wn.setValue(T,"_gl_DrawID",we),Qt.render(bt[we]/Ne,ue[we])}else if(U.isInstancedMesh)Qt.renderInstances(Zt,te,U.count);else if(N.isInstancedBufferGeometry){let bt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,ue=Math.min(N.instanceCount,bt);Qt.renderInstances(Zt,te,ue)}else Qt.render(Zt,te)};function Xt(y,I,N){y.transparent===!0&&y.side===ze&&y.forceSinglePass===!1?(y.side=Se,y.needsUpdate=!0,Di(y,I,N),y.side=yn,y.needsUpdate=!0,Di(y,I,N),y.side=ze):Di(y,I,N)}this.compile=function(y,I,N=null){N===null&&(N=y),d=Rt.get(N),d.init(I),w.push(d),N.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),y!==N&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let O=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let at=U.material;if(at)if(Array.isArray(at))for(let ut=0;ut<at.length;ut++){let yt=at[ut];Xt(yt,N,U),O.add(yt)}else Xt(at,N,U),O.add(at)}),w.pop(),d=null,O},this.compileAsync=function(y,I,N=null){let O=this.compile(y,I,N);return new Promise(U=>{function at(){if(O.forEach(function(ut){rt.get(ut).currentProgram.isReady()&&O.delete(ut)}),O.size===0){U(y);return}setTimeout(at,10)}Ct.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ye=null;function Qe(y){ye&&ye(y)}function Xa(){An.stop()}function Qa(){An.start()}let An=new ml;An.setAnimationLoop(Qe),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(y){ye=y,W.setAnimationLoop(y),y===null?An.stop():An.start()},W.addEventListener("sessionstart",Xa),W.addEventListener("sessionend",Qa),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,I,R),d=Rt.get(y,w.length),d.init(I),w.push(d),k.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),zt.setFromProjectionMatrix(k),b=this.localClippingEnabled,J=$.init(this.clippingPlanes,b),_=nt.get(y,u.length),_.init(),u.push(_),W.enabled===!0&&W.isPresenting===!0){let at=S.xr.getDepthSensingMesh();at!==null&&Fs(at,I,-1/0,S.sortObjects)}Fs(y,I,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(Q,ft),Mt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Mt&&It.addToRenderList(_,y),this.info.render.frame++,J===!0&&$.beginShadows();let N=d.state.shadowsArray;dt.render(N,y,I),J===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=_.opaque,U=_.transmissive;if(d.setupLights(),I.isArrayCamera){let at=I.cameras;if(U.length>0)for(let ut=0,yt=at.length;ut<yt;ut++){let St=at[ut];Za(O,U,y,St)}Mt&&It.render(y);for(let ut=0,yt=at.length;ut<yt;ut++){let St=at[ut];Ya(_,y,St,St.viewport)}}else U.length>0&&Za(O,U,y,I),Mt&&It.render(y),Ya(_,y,I);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(S,y,I),qt.resetDefaultState(),z=-1,ot=null,w.pop(),w.length>0?(d=w[w.length-1],J===!0&&$.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Fs(y,I,N,O){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)N=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||zt.intersectsSprite(y)){O&&it.setFromMatrixPosition(y.matrixWorld).applyMatrix4(k);let ut=Z.update(y),yt=y.material;yt.visible&&_.push(y,ut,yt,N,it.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||zt.intersectsObject(y))){let ut=Z.update(y),yt=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),it.copy(y.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),it.copy(ut.boundingSphere.center)),it.applyMatrix4(y.matrixWorld).applyMatrix4(k)),Array.isArray(yt)){let St=ut.groups;for(let Ut=0,Dt=St.length;Ut<Dt;Ut++){let wt=St[Ut],Zt=yt[wt.materialIndex];Zt&&Zt.visible&&_.push(y,ut,Zt,N,it.z,wt)}}else yt.visible&&_.push(y,ut,yt,N,it.z,null)}}let at=y.children;for(let ut=0,yt=at.length;ut<yt;ut++)Fs(at[ut],I,N,O)}function Ya(y,I,N,O){let U=y.opaque,at=y.transmissive,ut=y.transparent;d.setupLightsView(N),J===!0&&$.setGlobalState(S.clippingPlanes,N),O&&At.viewport(x.copy(O)),U.length>0&&Ui(U,I,N),at.length>0&&Ui(at,I,N),ut.length>0&&Ui(ut,I,N),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Za(y,I,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new sn(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?Pi:nn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let at=d.state.transmissionRenderTarget[O.id],ut=O.viewport||x;at.setSize(ut.z,ut.w);let yt=S.getRenderTarget();S.setRenderTarget(at),S.getClearColor(V),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),Mt&&It.render(N);let St=S.toneMapping;S.toneMapping=vn;let Ut=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),J===!0&&$.setGlobalState(S.clippingPlanes,O),Ui(y,N,O),E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let wt=0,Zt=I.length;wt<Zt;wt++){let Kt=I[wt],te=Kt.object,Ae=Kt.geometry,Qt=Kt.material,bt=Kt.group;if(Qt.side===ze&&te.layers.test(O.layers)){let ue=Qt.side;Qt.side=Se,Qt.needsUpdate=!0,Ja(te,N,O,Ae,Qt,bt),Qt.side=ue,Qt.needsUpdate=!0,Dt=!0}}Dt===!0&&(E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at))}S.setRenderTarget(yt),S.setClearColor(V,Y),Ut!==void 0&&(O.viewport=Ut),S.toneMapping=St}function Ui(y,I,N){let O=I.isScene===!0?I.overrideMaterial:null;for(let U=0,at=y.length;U<at;U++){let ut=y[U],yt=ut.object,St=ut.geometry,Ut=O===null?ut.material:O,Dt=ut.group;yt.layers.test(N.layers)&&Ja(yt,I,N,St,Ut,Dt)}}function Ja(y,I,N,O,U,at){y.onBeforeRender(S,I,N,O,U,at),y.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(S,I,N,O,y,at),U.transparent===!0&&U.side===ze&&U.forceSinglePass===!1?(U.side=Se,U.needsUpdate=!0,S.renderBufferDirect(N,I,O,U,y,at),U.side=yn,U.needsUpdate=!0,S.renderBufferDirect(N,I,O,U,y,at),U.side=ze):S.renderBufferDirect(N,I,O,U,y,at),y.onAfterRender(S,I,N,O,U,at)}function Di(y,I,N){I.isScene!==!0&&(I=Et);let O=rt.get(y),U=d.state.lights,at=d.state.shadowsArray,ut=U.state.version,yt=lt.getParameters(y,U.state,at,I,N),St=lt.getProgramCacheKey(yt),Ut=O.programs;O.environment=y.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(y.isMeshStandardMaterial?D:g).get(y.envMap||O.environment),O.envMapRotation=O.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",Gt),Ut=new Map,O.programs=Ut);let Dt=Ut.get(St);if(Dt!==void 0){if(O.currentProgram===Dt&&O.lightsStateVersion===ut)return Ka(y,yt),Dt}else yt.uniforms=lt.getUniforms(y),y.onBeforeCompile(yt,S),Dt=lt.acquireProgram(yt,St),Ut.set(St,Dt),O.uniforms=yt.uniforms;let wt=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=$.uniform),Ka(y,yt),O.needsLights=Rl(y),O.lightsStateVersion=ut,O.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Dt,O.uniformsList=null,Dt}function qa(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=ci.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Ka(y,I){let N=rt.get(y);N.outputColorSpace=I.outputColorSpace,N.batching=I.batching,N.batchingColor=I.batchingColor,N.instancing=I.instancing,N.instancingColor=I.instancingColor,N.instancingMorph=I.instancingMorph,N.skinning=I.skinning,N.morphTargets=I.morphTargets,N.morphNormals=I.morphNormals,N.morphColors=I.morphColors,N.morphTargetsCount=I.morphTargetsCount,N.numClippingPlanes=I.numClippingPlanes,N.numIntersection=I.numClipIntersection,N.vertexAlphas=I.vertexAlphas,N.vertexTangents=I.vertexTangents,N.toneMapping=I.toneMapping}function bl(y,I,N,O,U){I.isScene!==!0&&(I=Et),E.resetTextureUnits();let at=I.fog,ut=O.isMeshStandardMaterial?I.environment:null,yt=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xe,St=(O.isMeshStandardMaterial?D:g).get(O.envMap||ut),Ut=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Dt=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),wt=!!N.morphAttributes.position,Zt=!!N.morphAttributes.normal,Kt=!!N.morphAttributes.color,te=vn;O.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(te=S.toneMapping);let Ae=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Qt=Ae!==void 0?Ae.length:0,bt=rt.get(O),ue=d.state.lights;if(J===!0&&(b===!0||y!==ot)){let Ce=y===ot&&O.id===z;$.setState(O,y,Ce)}let Yt=!1;O.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ue.state.version||bt.outputColorSpace!==yt||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==St||O.fog===!0&&bt.fog!==at||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==$.numPlanes||bt.numIntersection!==$.numIntersection)||bt.vertexAlphas!==Ut||bt.vertexTangents!==Dt||bt.morphTargets!==wt||bt.morphNormals!==Zt||bt.morphColors!==Kt||bt.toneMapping!==te||bt.morphTargetsCount!==Qt)&&(Yt=!0):(Yt=!0,bt.__version=O.version);let Ne=bt.currentProgram;Yt===!0&&(Ne=Di(O,I,U));let Wn=!1,we=!1,Bs=!1,ee=Ne.getUniforms(),ln=bt.uniforms;if(At.useProgram(Ne.program)&&(Wn=!0,we=!0,Bs=!0),O.id!==z&&(z=O.id,we=!0),Wn||ot!==y){Tt.reverseDepthBuffer?(L.copy(y.projectionMatrix),Mc(L),Sc(L),ee.setValue(T,"projectionMatrix",L)):ee.setValue(T,"projectionMatrix",y.projectionMatrix),ee.setValue(T,"viewMatrix",y.matrixWorldInverse);let Ce=ee.map.cameraPosition;Ce!==void 0&&Ce.setValue(T,tt.setFromMatrixPosition(y.matrixWorld)),Tt.logarithmicDepthBuffer&&ee.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ee.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),ot!==y&&(ot=y,we=!0,Bs=!0)}if(U.isSkinnedMesh){ee.setOptional(T,U,"bindMatrix"),ee.setOptional(T,U,"bindMatrixInverse");let Ce=U.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ee.setValue(T,"boneTexture",Ce.boneTexture,E))}U.isBatchedMesh&&(ee.setOptional(T,U,"batchingTexture"),ee.setValue(T,"batchingTexture",U._matricesTexture,E),ee.setOptional(T,U,"batchingIdTexture"),ee.setValue(T,"batchingIdTexture",U._indirectTexture,E),ee.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&ee.setValue(T,"batchingColorTexture",U._colorsTexture,E));let Os=N.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&Pt.update(U,N,Ne),(we||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,ee.setValue(T,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ln.envMap.value=St,ln.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&I.environment!==null&&(ln.envMapIntensity.value=I.environmentIntensity),we&&(ee.setValue(T,"toneMappingExposure",S.toneMappingExposure),bt.needsLights&&Tl(ln,Bs),at&&O.fog===!0&&j.refreshFogUniforms(ln,at),j.refreshMaterialUniforms(ln,O,st,H,d.state.transmissionRenderTarget[y.id]),ci.upload(T,qa(bt),ln,E)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ci.upload(T,qa(bt),ln,E),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ee.setValue(T,"center",U.center),ee.setValue(T,"modelViewMatrix",U.modelViewMatrix),ee.setValue(T,"normalMatrix",U.normalMatrix),ee.setValue(T,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Ce=O.uniformsGroups;for(let zs=0,Cl=Ce.length;zs<Cl;zs++){let ja=Ce[zs];P.update(ja,Ne),P.bind(ja,Ne)}}return Ne}function Tl(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Rl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,I,N){rt.get(y.texture).__webglTexture=I,rt.get(y.depthTexture).__webglTexture=N;let O=rt.get(y);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=N===void 0,O.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){let N=rt.get(y);N.__webglFramebuffer=I,N.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,N=0){R=y,F=I,C=N;let O=!0,U=null,at=!1,ut=!1;if(y){let St=rt.get(y);if(St.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(T.FRAMEBUFFER,null),O=!1;else if(St.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(St.__hasExternalTextures)E.rebindTextures(y,rt.get(y.texture).__webglTexture,rt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let wt=y.depthTexture;if(St.__boundDepthTexture!==wt){if(wt!==null&&rt.has(wt)&&(y.width!==wt.image.width||y.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}let Ut=y.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ut=!0);let Dt=rt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?U=Dt[I][N]:U=Dt[I],at=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?U=rt.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[N]:U=Dt,x.copy(y.viewport),M.copy(y.scissor),G=y.scissorTest}else x.copy(gt).multiplyScalar(st).floor(),M.copy(_t).multiplyScalar(st).floor(),G=kt;if(At.bindFramebuffer(T.FRAMEBUFFER,U)&&O&&At.drawBuffers(y,U),At.viewport(x),At.scissor(M),At.setScissorTest(G),at){let St=rt.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+I,St.__webglTexture,N)}else if(ut){let St=rt.get(y.texture),Ut=I||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,St.__webglTexture,N||0,Ut)}z=-1},this.readRenderTargetPixels=function(y,I,N,O,U,at,ut){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){At.bindFramebuffer(T.FRAMEBUFFER,yt);try{let St=y.texture,Ut=St.format,Dt=St.type;if(!Tt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-O&&N>=0&&N<=y.height-U&&T.readPixels(I,N,O,U,Lt.convert(Ut),Lt.convert(Dt),at)}finally{let St=R!==null?rt.get(R).__webglFramebuffer:null;At.bindFramebuffer(T.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(y,I,N,O,U,at,ut){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){let St=y.texture,Ut=St.format,Dt=St.type;if(!Tt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-O&&N>=0&&N<=y.height-U){At.bindFramebuffer(T.FRAMEBUFFER,yt);let wt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,wt),T.bufferData(T.PIXEL_PACK_BUFFER,at.byteLength,T.STREAM_READ),T.readPixels(I,N,O,U,Lt.convert(Ut),Lt.convert(Dt),0);let Zt=R!==null?rt.get(R).__webglFramebuffer:null;At.bindFramebuffer(T.FRAMEBUFFER,Zt);let Kt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await _c(T,Kt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,wt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,at),T.deleteBuffer(wt),T.deleteSync(Kt),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,N=0){y.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);let O=Math.pow(2,-N),U=Math.floor(y.image.width*O),at=Math.floor(y.image.height*O),ut=I!==null?I.x:0,yt=I!==null?I.y:0;E.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,N,0,0,ut,yt,U,at),At.unbindTexture()},this.copyTextureToTexture=function(y,I,N=null,O=null,U=0){y.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1],I=arguments[2],U=arguments[3]||0,N=null);let at,ut,yt,St,Ut,Dt;N!==null?(at=N.max.x-N.min.x,ut=N.max.y-N.min.y,yt=N.min.x,St=N.min.y):(at=y.image.width,ut=y.image.height,yt=0,St=0),O!==null?(Ut=O.x,Dt=O.y):(Ut=0,Dt=0);let wt=Lt.convert(I.format),Zt=Lt.convert(I.type);E.setTexture2D(I,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);let Kt=T.getParameter(T.UNPACK_ROW_LENGTH),te=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ae=T.getParameter(T.UNPACK_SKIP_PIXELS),Qt=T.getParameter(T.UNPACK_SKIP_ROWS),bt=T.getParameter(T.UNPACK_SKIP_IMAGES),ue=y.isCompressedTexture?y.mipmaps[U]:y.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,ue.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ue.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,yt),T.pixelStorei(T.UNPACK_SKIP_ROWS,St),y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,U,Ut,Dt,at,ut,wt,Zt,ue.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,U,Ut,Dt,ue.width,ue.height,wt,ue.data):T.texSubImage2D(T.TEXTURE_2D,U,Ut,Dt,at,ut,wt,Zt,ue),T.pixelStorei(T.UNPACK_ROW_LENGTH,Kt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,te),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ae),T.pixelStorei(T.UNPACK_SKIP_ROWS,Qt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,bt),U===0&&I.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(y,I,N=null,O=null,U=0){y.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,O=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0);let at,ut,yt,St,Ut,Dt,wt,Zt,Kt,te=y.isCompressedTexture?y.mipmaps[U]:y.image;N!==null?(at=N.max.x-N.min.x,ut=N.max.y-N.min.y,yt=N.max.z-N.min.z,St=N.min.x,Ut=N.min.y,Dt=N.min.z):(at=te.width,ut=te.height,yt=te.depth,St=0,Ut=0,Dt=0),O!==null?(wt=O.x,Zt=O.y,Kt=O.z):(wt=0,Zt=0,Kt=0);let Ae=Lt.convert(I.format),Qt=Lt.convert(I.type),bt;if(I.isData3DTexture)E.setTexture3D(I,0),bt=T.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)E.setTexture2DArray(I,0),bt=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);let ue=T.getParameter(T.UNPACK_ROW_LENGTH),Yt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ne=T.getParameter(T.UNPACK_SKIP_PIXELS),Wn=T.getParameter(T.UNPACK_SKIP_ROWS),we=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,te.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,te.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,St),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ut),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Dt),y.isDataTexture||y.isData3DTexture?T.texSubImage3D(bt,U,wt,Zt,Kt,at,ut,yt,Ae,Qt,te.data):I.isCompressedArrayTexture?T.compressedTexSubImage3D(bt,U,wt,Zt,Kt,at,ut,yt,Ae,te.data):T.texSubImage3D(bt,U,wt,Zt,Kt,at,ut,yt,Ae,Qt,te),T.pixelStorei(T.UNPACK_ROW_LENGTH,ue),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Yt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ne),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,we),U===0&&I.generateMipmaps&&T.generateMipmap(bt),At.unbindTexture()},this.initRenderTarget=function(y){rt.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),At.unbindTexture()},this.resetState=function(){F=0,C=0,R=null,At.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===za?"display-p3":"srgb",e.unpackColorSpace=Wt.workingColorSpace===Ls?"display-p3":"srgb"}};var Cs=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var an=class extends ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Ma=class extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qo=new re,Sa=new vs,es=new mi,ns=new B,xi=class extends Le{constructor(t=new Ee,e=new Ma){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(s),es.radius+=r,t.ray.intersectsSphere(es)===!1)return;qo.copy(s).invert(),Sa.copy(t.ray).applyMatrix4(qo);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=p,_=m;v<_;v++){let d=c.getX(v);ns.fromBufferAttribute(f,d),Ko(ns,d,l,s,t,e,this)}}else{let p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=p,_=m;v<_;v++)ns.fromBufferAttribute(f,v),Ko(ns,v,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ko(i,t,e,n,s,r,a){let o=Sa.distanceSqToPoint(i);if(o<e){let l=new B;Sa.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ps=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new B,p=new B,m=[],v=[],_=[],d=[];for(let u=0;u<=n;u++){let w=[],S=u/n,A=0;u===0&&a===0?A=.5/e:u===n&&l===Math.PI&&(A=-.5/e);for(let F=0;F<=e;F++){let C=F/e;f.x=-t*Math.cos(s+C*r)*Math.sin(a+S*o),f.y=t*Math.cos(a+S*o),f.z=t*Math.sin(s+C*r)*Math.sin(a+S*o),v.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),d.push(C+A,1-S),w.push(c++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){let S=h[u][w+1],A=h[u][w],F=h[u+1][w],C=h[u+1][w+1];(u!==0||a>0)&&m.push(S,A,C),(u!==n-1||l<Math.PI)&&m.push(A,F,C)}this.setIndex(m),this.setAttribute("position",new Ue(v,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function is(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ea=class extends vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:io,endingEnd:io}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case so:r=t,o=2*e-n;break;case ro:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case so:a=t,l=2*n-e;break;case ro:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,v=(n-e)/(s-e),_=v*v,d=_*v,u=-p*d+2*p*_-p*v,w=(1+p)*d+(-1.5-2*p)*_+(-.5+p)*v+1,S=(-1-m)*d+(1.5+m)*_+.5*v,A=m*d-m*_;for(let F=0;F!==o;++F)r[F]=u*a[h+F]+w*a[c+F]+S*a[l+F]+A*a[f+F];return r}},Aa=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*f+a[l+p]*h;return r}},wa=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},He=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=is(e,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:is(t.times,Array),values:is(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ea(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case hs:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case Vs:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return Vs}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&vp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vs,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,p=f-n,m=f+n;for(let v=0;v!==n;++v){let _=e[f+v];if(_!==e[p+v]||_!==e[m+v]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,p=a*n;for(let m=0;m!==n;++m)e[p+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};He.prototype.TimeBufferType=Float32Array;He.prototype.ValueBufferType=Float32Array;He.prototype.DefaultInterpolation=na;var Hn=class extends He{constructor(t,e,n){super(t,e,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=hs;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends He{};ba.prototype.ValueTypeName="color";var Ta=class extends He{};Ta.prototype.ValueTypeName="number";var Ra=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Is=class extends He{InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}};Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends He{constructor(t,e,n){super(t,e,n)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=hs;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends He{};Ca.prototype.ValueTypeName="vector";var Pa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}},yp=new Pa,Ia=class{constructor(t){this.manager=t!==void 0?t:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Ee{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Va="\\[\\]\\.:\\/",_p=new RegExp("["+Va+"]","g"),Ha="[^"+Va+"]",Mp="[^"+Va.replace("\\.","")+"]",Sp=/((?:WC+[\/:])*)/.source.replace("WC",Ha),Ep=/(WCOD+)?/.source.replace("WCOD",Mp),Ap=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ha),wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ha),bp=new RegExp("^"+Sp+Ep+Ap+wp+"$"),Tp=["material","materials","bones","map"],Ua=class{constructor(t,e,n){let s=n||$t.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$t=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_p,"")}static parseTrackName(t){let e=bp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$t.Composite=Ua;$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray];$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Np=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var _l="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O9T+aDXUehUz1AzZL9QtYCjUqQwn1DvQI9RcVxvUoGUV1BwSE9Su1Q/Uz1wI1BNrA9T+U//TIdv800Ji9dO+DvPTUNLv03FZ6NO1Z+HTMRTg08PX3NPkXtPT8s7Q0xNWyNNXZMLT0xDA02XUvNOGW7TTymmw07RSrNPX2ajT+WCi03UNoNMG0ZzTJ1iV02xmjtPoEozTedaI05pdgdPea4DTqM1808lUddMNY27Tig9s0xvTaNM8WmHTgGha0/0UWNOO2FXTr19M073PSNPeVkHTImU6058RONMw1TXTUVwt05VqKNOAUyXTo9oh08RhGtNADhjT0tEV0/NYDdM3ZwfTsxMF00XXAdNmXvnSqmz40nTO9dKVVe3S2WPm0lUQ5dLn0+HSCFvZ0kxp0dJa2c3Se2DG0vcMxdKJ0MHSqle50u5ls9JqErHS/NWl0mFrpNIqzaHSS1SZ0pBiktIMD5HSndKN0r5ZhdIDaH/SfxR90hDYedIxX3DSP89t0mBWZdKkZF7SIRFd0rLUUdIXakzSAlNJ0iXaRdJGYT7Sww080lTROdJ1WDHSuWYq0jYTKNLH1h3SLGwc0vbNGNIXVRHSW2MK0tcPCNJp0/3Rzmj00dzY8NH9X+jRC9Dk0SxX3NFwZdbR7BHU0X7VyNHjasTRzlO80RJitdGODrTRINKo0YVnodEBFKDRk9eT0cLOj9HjVYjRJ2SB0aMQf9E01HTRmmlv0YRSa9Gn2WfRyGBh0UUNX9HW0FvR91dT0TtmTdG4EkvRSdY/0a5rPtF4zTrRmVQz0d1iLNFaDyrR69If0VBoFtFe2BLRf18K0Y3PBtGuVv7Q8mT30G4R9tAA1erQZWrl0FBT4dBz2t7QlGHX0BAO1dCi0cnQB2fD0IMTwdAV17TQRM6x0GVVqdCpY6LQJRCg0LfTldAcaYzQKtmI0EtggNBZ0HzQeld00L5lbdA6EmvQzNVg0DFrW9AbVFPQYGJN0NwOS9Bt0j/Q02c20ODXKtAPzybQMFYe0HRkGNDxEBbQgtQK0OdpBdDSUgHQ9dn+zxZh98+TDfXPJNHpz4lm4c+X1tTPxs3Qz+dUyM8rY8LPpw/AzznTtM+eaKvPrNifz9vPk89AZYrPTtV/z7Nqes+eU3LP4mFrz14Oas/w0V7PVWdVz2PXSc+Rzj3P92M0zwTUKM9qaSTPVFIgz3fZHM+YYBPPptAHzwtm/84Z1vLOSM3uzmlU5s6tYt7Ou9LSziBoyc4u2LzOXc+xzsJkqM7Q1JzONWqXziBTh85y0XvO12ZmzhTOWs55Y1HOh9NFzuxoMM4p0CTOjmUbzpvVD84Baw7Oysz6zT3S7s2iZ9jN387RzVp7zc1EZMTNUtS4zbdpos300JbNWWaOzWfWgc2WzXXN+2JszQnTYM1uaEvNq88/zRBlNs0e1SrNg2oUzcDRCM0lZ//MM9fyzGHO58zHY97M1NPSzDppvMx20LDM22WnzOnVmswYzYXMi9J5zPBnZMwtz1jMkmRPzKDUQ8wFai3MQtEhzKdmGMy11gvM5M32y1fT6su8aNTL+M/Iy15lv8tr1bLLmsydyw3SkctyZ4jLgNd7y6/Ob8sUZGbLItRZy4dpQ8vE0DfLKWYuyzfWIctmzQzL2dIAyz5o6sp7z97K4GTVyu7UyMpTasfKHcyyypDRpsr1Zp3KAteQyjHOesqk027KCWlYykbQUcrBfEzKq2VDyrnVNsrozCDKW9IZytV+FMrAZ/7J/c7xyWJk6Mlw1MbJEtG+yYx9ucl3ZrDJhdajybTNjckn04HJjGhrycjPY8lDfFXJO9VIyWrMMsnd0SvJWH4PyX/O+sjy09fIlNDQyA59tMg2zZ7IqdKSyA5oe8hLz3TIxXtYyOzLQshf0TvI2n0fyAHOCch00+bHFtDfx5B8w8e4zK3HK9KJx83OUMfi0EjHXH0sx4TNFsf30vPGmM/PxjrMucat0ZXGT85bxmTQVMbefDfGBs0hxnnS/cUbz9nFvMvDxS/RnsXRzXvFqWhkxebPXMVgfEDFiMwcxWBnBcWdzv3EF3vhxHVpysSy0KXEU82CxCxoasRoz0XECswvxH3RCsQfzgLEmXrmw/dozsM00KnD1syTw0nShcOuZ23D685mw2V7SMOMyzHD/9AMw6HNBcMceujCeWjQwrbPq8JYzJTCy9Fuwm3OMcKC0AzCI80Ewp55z8E4z6HBVHiSwU3RbMHvzS7BBNAIwabMAMEgecvAus6kwFzLnMDXd43Az9BmwHHNKMCGzwLAKMz6v6J4w789zpS/WXeEv1LQXr/zzFa/bnkfvwjP976qy+++JHi4vr/Nib7bdnm+1M9RvnbMSb7weBG+is7qvSzL4r2nd6q9Qc1pvVbPQb34ywG9Dc7AvCHQl7zDzFa82M4uvHrLFbzt0Oy7j82qu6TPgbtGzD+7Ws4Wu/zK/bpv0NO6Ec2QuibPZ7rIyyS63c36uX7K4Lnxz9+5uTG2uZPMcrmozki5SssEuV/NlLgWzE+4Ks4kuMzK37fhzG63mMsnt63NxrY01bW2Y8xutnjOQrYaywu2ANb6tS/NsrVEz4a15cs9tfrNx7SxzH60xs5RtGjLB7R9zbyzkc+OszPMRLNIzsqy/8x+shTPMrIo0QKyys22sd/P";Wt.enabled=!1;var Re=4e3,Ml=180,_i=8,Rp=Re/_i,Cp=.15,Sn=8,Ga=[[1.5,.2],[1.68,-.42],[1.86,.62],[2.05,-.1],[2.26,.38]],Pp={orbit:0,line:1,gate:2,a:3,b:4,scatter:5,grid:6},Sl=24,El=40,Wa=document.documentElement,Ip=document.body,Al=new URLSearchParams(location.search),on=Al.has("still")?parseFloat(Al.get("still"))||0:null,En=matchMedia("(prefers-reduced-motion: reduce)").matches,Up=matchMedia("(hover: hover) and (pointer: fine)").matches,xe={slate:new Bt(9674932),ink:new Bt(725536),navy:new Bt(1845834),aqua:new Bt(1226144),cobalt:new Bt(2969568),amber:new Bt(16096779),pearl:new Bt(14673650)},wl=Array.from(document.querySelectorAll("[data-form],[data-forms]"));function Dp(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}wl.length&&(Dp()?Lp():Wa.classList.add("scene-off"));function Lp(){let i=7,t=()=>((i=i*16807%2147483647)-1)/2147483646,e=(b,L,k)=>{let tt=Math.min(1,Math.max(0,(k-b)/(L-b)));return tt*tt*(3-2*tt)},n=(b,L,k)=>Math.min(k,Math.max(L,b)),s=(Ip.dataset.statA||"stacks:1,2,3,4").split(":"),r=new Float32Array(Re*4),a=new Float32Array(Re*3),o=new Float32Array(Re*2),l=new Float32Array(Re),c=new Float32Array(Re*4),h=new Float32Array(Re*4);{let b=new Set;for(let k=0;k<Ml;k++)b.add(Math.floor((k+.5)*Re/Ml));let L=0;for(let k=0;k<Re;k++){r.set([t(),t(),t(),t()],k*4);let tt=Math.floor(t()*Ga.length);a.set([Ga[tt][0]+(t()-.5)*.08,Ga[tt][1],t()*Math.PI*2],k*3),o.set([k%_i,Math.floor(k/_i)],k*2),l[k]=b.has(k)?++L:0}}let f=v(c,s,!1),p=v(h,["mark"],!0),m=s[0]==="stacks"&&s[1]==="1,1,1,1,1"||s[0]==="bins"?0:1;function v(b,L,k){let tt=L[0],it=[],Et=[],Mt=tt==="stacks"&&L[1]!=="1,1,1,1,1";for(let rt=0;rt<Re;rt++)(l[rt]>0&&Mt?Et:it).push(rt);let xt=(rt,E,g,D,X=0)=>b.set([E,g,D,X],rt*4);if(!k&&(tt==="stacks"||tt==="bins")){let rt=(L[1]||"1,2,3,4").split(",").map(Number),E=rt.reduce((j,nt)=>j+nt,0),g=tt==="bins"?.5:rt.length>4?.6:.62,D=4,X=6,K=D*X,Z=.024,lt=0;rt.forEach((j,nt)=>{let Rt=nt===rt.length-1?it.length-lt:Math.round(it.length*j/E),$=(nt-(rt.length-1)/2)*g;for(let dt=0;dt<Rt&&lt<it.length;dt++,lt++){let It=Math.floor(dt/K),Pt=dt%K;xt(it[lt],$+(Pt%D-(D-1)/2)*.104,It*Z,(Math.floor(Pt/D)-(X-1)/2)*.068)}}),Et.forEach((j,nt)=>{let Rt=Math.floor(nt/12),$=nt%12;xt(j,rt.length*g*.5+.55+$%3*.104,Rt*Z,-.9+Math.floor($/3)*.068)})}else if(k){let D=[],X=25*Math.PI/180;for(let lt=-1.7;lt<=1.7;lt+=.072)for(let j=-1.7;j<=1.7;j+=.108){let nt=Math.hypot(j,lt),Rt=Math.atan2(-lt,j)-X;Rt=(Rt+Math.PI*4)%(Math.PI*2),(Math.abs(nt-1.25)<.34/2&&Rt<Math.PI*2*.752||Math.hypot(j-1.25*.927,lt-1.25*.345)<.3)&&D.push([j,lt])}let K=it.concat(Et),Z=Math.ceil(K.length/D.length);K.forEach((lt,j)=>{let nt=D[j%D.length],Rt=Math.floor(j/D.length);xt(lt,nt[0],nt[1],(Rt-(Z-1)/2)*.03)})}else tt==="broken"&&it.concat(Et).forEach((rt,E)=>{let g=E%_i,D=Math.floor(E/_i),X=-9+D*.12;X>-4.4&&X<4.4?X>0&&X<1.1?xt(rt,X+(t()-.5)*.4,-.5-t()*2.4,(g-3.5)*.11+(t()-.5)*.5,1):xt(rt,X,0,(g-3.5)*.11):xt(rt,0,-50,0,-1)});let T=1e9,Vt=-1e9,Ct=1e9,Tt=-1e9;for(let rt=0;rt<Re;rt++){if(b[rt*4+3]<-.5)continue;let E=b[rt*4],g=b[rt*4+1];T=Math.min(T,E),Vt=Math.max(Vt,E),Ct=Math.min(Ct,g),Tt=Math.max(Tt,g)}let At=(T+Vt)/2,Ot=(Ct+Tt)/2;for(let rt=0;rt<Re;rt++)b[rt*4+3]<-.5||(b[rt*4]-=At,b[rt*4+1]-=Ot);return{w:Vt-T,h:Tt-Ct}}let _=(b,L,k=1)=>{let tt=b*Math.PI/180,it=L*Math.PI/180;return[k*Math.cos(tt)*Math.cos(it),k*Math.sin(tt),-k*Math.cos(tt)*Math.sin(it)]},d=null;function u(){if(d)return d;let b=Uint8Array.from(atob(_l),Tt=>Tt.charCodeAt(0)),L=new Int16Array(b.buffer),k=L.length/2,tt=new Float32Array(k*3),it=new Float32Array(k);for(let Tt=0;Tt<k;Tt++)tt.set(_(L[Tt*2]/32767*90,L[Tt*2+1]/32767*180,1.006),Tt*3),it[Tt]=t();let Et=[51.5,-.12],Mt=[[40.7,-74],[1.35,103.8],[35.7,139.7],[-23.5,-46.6],[25.2,55.3],[-33.9,151.2],[19.1,72.9],[43.65,-79.4],[-26.2,28],[31.2,121.5],[34.05,-118.2],[59.3,18.1]],xt=[],T=[],Vt=[],Ct=new B(..._(...Et));return Mt.forEach((Tt,At)=>{let Ot=new B(..._(Tt[0],Tt[1])),rt=Ct.angleTo(Ot);for(let E=0;E<=90;E++){let g=E/90,D=Ct.clone().multiplyScalar(Math.sin((1-g)*rt)/Math.sin(rt)).add(Ot.clone().multiplyScalar(Math.sin(g*rt)/Math.sin(rt)));D.normalize().multiplyScalar(1.01+Math.sin(Math.PI*g)*(.08+rt*.12)),xt.push(D.x,D.y,D.z),T.push(g),Vt.push(At/Mt.length)}}),d={pos:tt,rand:it,apos:new Float32Array(xt),au:new Float32Array(T),aid:new Float32Array(Vt),home:new Float32Array(_(...Et,1.012))},d}let w=`
vec4 qAxis(vec3 a, float ang){ return vec4(normalize(a) * sin(ang * .5), cos(ang * .5)); }
vec4 qMul(vec4 a, vec4 b){ return vec4(a.w * b.xyz + b.w * a.xyz + cross(a.xyz, b.xyz), a.w * b.w - dot(a.xyz, b.xyz)); }
vec3 qRot(vec4 q, vec3 v){ return v + 2. * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
`,S=(b,L)=>{let k=Math.sin(L/2),tt=Math.hypot(...b);return[b[0]/tt*k,b[1]/tt*k,b[2]/tt*k,Math.cos(L/2)]},A=(b,L)=>[b[3]*L[0]+L[3]*b[0]+b[1]*L[2]-b[2]*L[1],b[3]*L[1]+L[3]*b[1]+b[2]*L[0]-b[0]*L[2],b[3]*L[2]+L[3]*b[2]+b[0]*L[1]-b[1]*L[0],b[3]*L[3]-b[0]*L[0]-b[1]*L[1]-b[2]*L[2]],F=(b,L)=>{let[k,tt,it,Et]=b,Mt=[2*(tt*L[2]-it*L[1]),2*(it*L[0]-k*L[2]),2*(k*L[1]-tt*L[0])];return[L[0]+Et*Mt[0]+(tt*Mt[2]-it*Mt[1]),L[1]+Et*Mt[1]+(it*Mt[0]-k*Mt[2]),L[2]+Et*Mt[2]+(k*Mt[1]-tt*Mt[0])]},C={0:{w:4.6,h:4.4},1:{w:7.2,h:1.9},2:{w:7.4,h:2.6},3:{w:f.w*.92+.3,h:f.h+.8},4:{w:p.w*.96,h:p.h*.96},5:{w:4.6,h:3},6:{w:8,h:3.4}},R={0:[0,0,0,1],1:A(S([1,0,0],.42),S([0,1,0],-.62)),2:A(S([1,0,0],.4),S([0,1,0],-.6)),3:A(S([1,0,0],.34),S([0,1,0],-.55)),4:[0,0,0,1],5:[0,0,0,1],6:A(S([1,0,0],-.62),S([0,1,0],-.28))},z={0:[0,-1.4,2.6,.5],1:[0,-.4,8,1.4],2:[0,-.4,8,1.6],3:[0,-(f.h/2+.25),f.w+.8,.9],4:[0,-1.6,2.4,.35],5:[0,-1.7,4.2,.6],6:[0,-1.5,7,.9]},ot=`
  precision highp float;
  #define PI 3.14159265
  attribute vec4 aSeed; attribute vec3 aOrbit; attribute vec2 aLine; attribute float aErr; attribute vec4 aStatA; attribute vec4 aStatB;
  uniform float uTime, uStage, uCount, uIntro, uErrMode, uAH, uForm[${Sn}];
  uniform vec4 uAnchor[${Sn}], uAnchorQ[${Sn}];
  varying vec3 vN; varying vec2 vUv; varying vec2 vState; varying vec3 vView;
  ${w}
  const float LANES = ${_i}.0, COLS = ${Rp}.0, SP = ${Cp}, HALF = 4.3;
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
    else if (id < 4.5) {
      vec4 v = id < 3.5 ? aStatA : aStatB;
      p = v.xyz; s = v.w < -.5 ? 0. : 1.;
      q = id < 3.5 ? qAxis(vec3(1., 0., 0.), -PI * .5) : vec4(0., 0., 0., 1.);
      if (v.w > .5) { q = tumble(.6); p.y -= mod(uTime * .05 + aSeed.x, 1.) * .4; }
      st.x = 1.;
      if (id < 3.5 && isErr()) st = vec2(0., 1.);
    } else if (id < 5.5) {
      // loose records: spread across inboxes and spreadsheets, drifting
      vec3 dir = normalize(aSeed.yzw - .5 + vec3(.0013, .0007, .0011));
      vec3 c = dir * pow(fract(aSeed.x * 7.31 + aSeed.w * 3.7), .42) * vec3(2.25, 1.3, 1.25);
      c += vec3(sin(uTime * .35 + aSeed.x * 31.), cos(uTime * .29 + aSeed.y * 23.), sin(uTime * .23 + aSeed.z * 17.)) * .07;
      p = c; q = tumble(.22); s = .95;
    } else {
      // a live sheet: every record in its row, a soft update rippling across it
      float i = aLine.x + aLine.y * LANES;
      float col = mod(i, 80.), row = floor(i / 80.);
      p = vec3((col - 39.5) * .1, (row - 24.5) * .068, 0.);
      float wave = sin(col * .16 - uTime * 1.1 + row * .05);
      p.z = wave * .045;
      q = vec4(0., 0., 0., 1.); s = 1.;
      st.x = .55 + .45 * smoothstep(.6, 1., wave);
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
    // results are built, not dropped: records arrive bottom layer first, so the stacks rise as you scroll
    float hB = clamp(aStatA.y / uAH + .5, 0., 1.);
    float j = min(i + 1., uCount - 1.);
    bool buildB = uForm[int(j)] > 2.5 && uForm[int(j)] < 3.5;
    float order = buildB ? hB * .88 + aSeed.x * .12 : aSeed.x;
    float e = smoothstep(0., 1., clamp(buildB ? f * 2.4 - order * 1.4 : f * 1.6 - order * .6, 0., 1.));
    if (e > 0.) {
      place(j, wB, qB, sB, tB);
      if (dot(qA, qB) < 0.) qB = -qB;
      float span = .5 * (uAnchor[int(i)].w + uAnchor[int(j)].w);
      vec3 arc = vec3((aSeed.z - .5) * 2.4, (aSeed.y - .5) * 1.6 + .5, (aSeed.w - .5) * 2.4) * span * sin(PI * e);
      w = mix(wA, wB, e) + arc * (buildB ? .45 : 1.);
      q = normalize(mix(qA, qB, e)); s = mix(sA, sB, e); st = mix(tA, tB, e);
    }
    // arrival: the formation unfolds from its own centre the first time it is seen
    bool buildA = uForm[int(i)] > 2.5 && uForm[int(i)] < 3.5 && f < .01;
    float ia = smoothstep(0., 1., clamp(buildA ? uIntro * 2.2 - (hB * .88 + aSeed.x * .12) * 1.2 : uIntro * 1.6 - aSeed.x * .6, 0., 1.));
    vec3 c0 = uAnchor[int(i)].xyz;
    if (buildA) w = mix(w + vec3(0., 1.6, 0.) * uAnchor[int(i)].w, w, ia);
    else w = mix(c0 + (w - c0) * .2 + vec3(0., -.4, 0.) * uAnchor[int(i)].w, w, ia);
    s *= ia;
    vec3 world = qRot(q, position * s) + w;
    vec4 mv = viewMatrix * vec4(world, 1.);
    vN = normalize(mat3(viewMatrix) * qRot(q, normal));
    vUv = uv; vState = st; vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }`,x=`
  precision highp float;
  uniform vec2 uRes; uniform vec3 uSlate, uAqua, uCobalt, uAmber;
  varying vec3 vN; varying vec2 vUv; varying vec2 vState; varying vec3 vView;
  void main(){
    vec3 n = normalize(vN);
    vec3 grad = mix(uAqua, uCobalt, clamp(gl_FragCoord.x / uRes.x * 1.2 - .1, 0., 1.));
    float lam = max(dot(n, normalize(vec3(-.35, .75, .6))), 0.);
    float rim = pow(1. - abs(dot(n, vView)), 2.5);
    float e = min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y));
    float edge = 1. - smoothstep(.0, .085, e);
    vec3 fill = mix(vec3(.8 + .2 * lam), vec3(.86, .9, .96), .35);
    fill = mix(fill, mix(vec3(1.), grad, .22) * (.88 + .12 * lam), vState.x);
    fill = mix(fill, mix(vec3(1.), uAmber, .5) * (.9 + .1 * lam), vState.y);
    vec3 ec = mix(uSlate * .72, grad, vState.x);
    ec = mix(ec, uAmber * .92, vState.y);
    vec3 col = mix(fill, ec, edge * .92);
    col = mix(col, grad, rim * .12);
    gl_FragColor = vec4(col, 1.);
  }`,M=[],G={x:0,y:0,tx:0,ty:0},V=on!==null?40:12,Y=performance.now(),et=!1,H=innerHeight;function st(b){let L=document.createElement("canvas");L.className="view",L.setAttribute("aria-hidden","true"),b.appendChild(L);let k;try{if(k=new Rs({canvas:L,antialias:!0,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:on!==null}),!k.capabilities.isWebGL2)throw new Error("webgl2")}catch{return L.remove(),b.classList.add("view-off"),null}k.outputColorSpace=Xe,k.setClearColor(0,0),L.addEventListener("webglcontextlost",E=>{E.preventDefault(),b.classList.add("view-off")});let tt=(b.dataset.forms||b.dataset.form||"orbit").split(",").map(E=>Pp[E.trim()]??0).slice(0,Sn),it=new Cs,Et=new ge(Sl,1,1,400);Et.position.set(0,0,El);let Mt=new kn(.1,.064,.01),xt=new Us;xt.index=Mt.index,xt.setAttribute("position",Mt.getAttribute("position")),xt.setAttribute("normal",Mt.getAttribute("normal")),xt.setAttribute("uv",Mt.getAttribute("uv")),xt.instanceCount=Re,xt.setAttribute("aSeed",new an(r,4)),xt.setAttribute("aOrbit",new an(a,3)),xt.setAttribute("aLine",new an(o,2)),xt.setAttribute("aErr",new an(l,1)),xt.setAttribute("aStatA",new an(c,4)),xt.setAttribute("aStatB",new an(h,4));let T=new he({uniforms:{uTime:{value:0},uStage:{value:0},uCount:{value:tt.length},uIntro:{value:0},uForm:{value:tt.concat(Array(Sn).fill(0)).slice(0,Sn)},uAnchor:{value:new Float32Array(Sn*4)},uAnchorQ:{value:new Float32Array(Sn*4)},uErrMode:{value:m},uAH:{value:Math.max(.01,f.h)},uRes:{value:[1,1]},uSlate:{value:xe.slate},uAqua:{value:xe.aqua},uCobalt:{value:xe.cobalt},uAmber:{value:xe.amber}},vertexShader:ot,fragmentShader:x}),Vt=new pe(xt,T);Vt.frustumCulled=!1,it.add(Vt);let Ct=new pe(new Vn(1,1),new he({transparent:!0,depthWrite:!1,uniforms:{uInk:{value:xe.ink},uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"uniform vec3 uInk; uniform float uA; varying vec2 vUv; void main(){ float d = length((vUv - .5) * 2.); gl_FragColor = vec4(uInk, uA * pow(1. - smoothstep(0., 1., d), 1.6)); }"}));Ct.renderOrder=-2,it.add(Ct);let Tt=null,At=null;tt.includes(0)&&(Tt=Q(it)),tt.includes(2)&&(At=new pe(new Vn(1.25,.62),new he({transparent:!0,depthWrite:!1,side:ze,uniforms:{uTime:{value:0},uA:{value:1},uAqua:{value:xe.aqua},uCobalt:{value:xe.cobalt}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform float uTime, uA; uniform vec3 uAqua, uCobalt; varying vec2 vUv;
        void main(){ float scan = smoothstep(.05, 0., abs(vUv.y - fract(uTime * .45)));
        float frame = 1. - smoothstep(0., .02, min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y)));
        vec3 c = mix(uAqua, uCobalt, vUv.x);
        gl_FragColor = vec4(c, (.07 + scan * .55 + frame * .9) * uA); }`})),it.add(At));let Ot=b.closest("[data-drive]"),rt={el:b,canvas:L,renderer:k,scene:it,camera:Et,mat:T,shadow:Ct,globe:Tt,gate:At,forms:tt,drive:Ot,scales:tt.map(()=>1),intro:on!==null||En?1:0,visible:!1,w:0,h:0,frames:0,dpr:1};return ft(rt),rt}function Q(b){let L=u(),k=new gn,tt=new Ee;tt.setAttribute("position",new ae(L.pos,3)),tt.setAttribute("aRand",new ae(L.rand,1));let it=new he({transparent:!0,depthWrite:!1,uniforms:{uPx:{value:1},uInk:{value:xe.navy},uCobalt:{value:xe.cobalt}},vertexShader:`attribute float aRand; uniform float uPx; varying float vR;
      void main(){ vR = aRand; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (.85 + aRand * .35); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uInk, uCobalt; varying float vR;
      void main(){ vec2 d = gl_PointCoord - .5; float r = length(d); if (r > .5) discard;
      gl_FragColor = vec4(mix(uInk, uCobalt, step(.94, vR) * .8), smoothstep(.5, .3, r) * .78); }`});k.add(new xi(tt,it));let Et=new pe(new Ps(1,96,64),new he({uniforms:{uPearl:{value:xe.pearl},uCobalt:{value:xe.cobalt},uAqua:{value:xe.aqua}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 uPearl, uCobalt, uAqua; varying vec3 vN; varying vec3 vV;
      void main(){ float l = max(dot(vN, normalize(vec3(-.4, .6, .7))), 0.);
      float fr = pow(1. - max(dot(vN, vV), 0.), 2.2);
      vec3 c = mix(uPearl * .94, vec3(1.), l * .9);
      c = mix(c, mix(uAqua, uCobalt, .5 + vN.y * .5), fr * .55);
      gl_FragColor = vec4(c, 1.); }`}));k.add(Et);let Mt=new Ee;Mt.setAttribute("position",new ae(L.apos,3)),Mt.setAttribute("aU",new ae(L.au,1)),Mt.setAttribute("aId",new ae(L.aid,1));let xt=new he({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAqua:{value:xe.aqua},uCobalt:{value:xe.cobalt}},vertexShader:`attribute float aU, aId; uniform float uTime, uPx; varying float vA; varying float vU;
      void main(){ float head = fract(uTime * .14 + aId * 1.7); float d = head - aU;
      vA = .18 + smoothstep(.25, 0., d) * step(0., d) * .82; vU = aU;
      vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (.7 + vA); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uAqua, uCobalt; varying float vA; varying float vU;
      void main(){ vec2 d = gl_PointCoord - .5; if (dot(d,d) > .25) discard; gl_FragColor = vec4(mix(uAqua, uCobalt, vU), vA); }`});k.add(new xi(Mt,xt));let T=new Ee;T.setAttribute("position",new ae(L.home,3));let Vt=new he({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAqua:{value:xe.aqua}},vertexShader:"uniform float uTime, uPx; varying float vP; void main(){ vP = fract(uTime * .5); vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (3. + vP * 6.); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 uAqua; varying float vP; void main(){ float r = length(gl_PointCoord - .5) * 2.; if (r > 1.) discard;
      float core = smoothstep(.36, .2, r); float ring = smoothstep(.06, 0., abs(r - .82)) * (1. - vP);
      gl_FragColor = vec4(uAqua, max(core, ring)); }`});return k.add(new xi(T,Vt)),k.userData={land:it,arcs:xt,home:Vt},b.add(k),k}function ft(b){let L=Math.max(1,b.canvas.clientWidth),k=Math.max(1,b.canvas.clientHeight);if(L===b.w&&k===b.h&&devicePixelRatio===b.ratio)return;b.ratio=devicePixelRatio,b.w=L,b.h=k;let tt=Math.min(devicePixelRatio||1,L*k>7e5?1.5:1.75);b.renderer.setPixelRatio(tt),b.renderer.setSize(L,k,!1),b.camera.aspect=L/k,b.camera.updateProjectionMatrix(),b.mat.uniforms.uRes.value=[L*tt,k*tt],b.dpr=tt;let it=2*Math.tan(Sl*Math.PI/360)*El/k,Et=b.el.clientWidth*it,Mt=b.el.clientHeight*it;b.scales=b.forms.map(xt=>Math.min(Et/C[xt].w,Mt/C[xt].h)*.94)}function gt(b){if(on!==null)return n(on,0,b.forms.length-1);if(!b.drive||b.forms.length<2)return 0;let L=b.drive.csgStage;return typeof L=="number"&&Number.isFinite(L)?n(L,0,b.forms.length-1):0}function _t(b,L){ft(b);let k=b.el.getBoundingClientRect(),tt=n((k.top+k.height/2)/H-.5,-1,1),it=gt(b);if(b.shown===void 0||En||on!==null)b.shown=it;else{let j=b.forms[Math.min(b.forms.length-1,Math.ceil(Math.min(it,b.shown+.999)))]===3?.45:.6,nt=it-b.shown,Rt=j*Math.min(L,.05);b.shown=Math.abs(nt)<=Rt?it:b.shown+Math.sign(nt)*Rt}let Et=b.shown;En||(b.intro=Math.min(1,b.intro+L/(b.forms[0]===3?2.4:1.3)));let Mt=En?[0,0,0,1]:A(S([0,1,0],-tt*.3+G.x*.22),S([1,0,0],tt*.1+G.y*.12)),xt=b.mat.uniforms.uAnchor.value,T=b.mat.uniforms.uAnchorQ.value;b.forms.forEach((lt,j)=>{xt.set([0,0,0,b.scales[j]],j*4),T.set(A(Mt,R[lt]),j*4)});let Vt=b.mat.uniforms;Vt.uTime.value=V,Vt.uStage.value=Et,Vt.uIntro.value=e(0,1,b.intro);let Ct=Math.round(Et),Tt=1-Math.min(1,Math.abs(Et-Ct)*2.2),At=b.forms[Ct],Ot=b.scales[Ct],rt=A(Mt,R[At]),[E,g,D,X]=z[At],K=F(rt,[E,g,0]);b.shadow.position.set(K[0]*Ot,K[1]*Ot,-2),b.shadow.scale.set(D*Ot,X*Ot,1),b.shadow.material.uniforms.uA.value=.1*Tt*Vt.uIntro.value;let Z=lt=>{let j=0;return b.forms.forEach((nt,Rt)=>{nt===lt&&(j=Math.max(j,1-Math.min(1,Math.abs(Et-Rt)*1.6)))}),j};if(b.globe){let lt=Z(0),j=b.forms.indexOf(0),nt=b.scales[j]*e(0,1,lt)*(.6+.4*Vt.uIntro.value);b.globe.visible=nt>.001,b.globe.scale.setScalar(Math.max(.001,nt)),b.globe.quaternion.set(...A(Mt,A(S([1,0,0],.32),S([0,1,0],-1.25+V*.035))));let Rt=Math.max(1.4,2.3*b.dpr*Math.min(1.2,b.scales[j]/3)),$=b.globe.userData;$.land.uniforms.uPx.value=Rt,$.arcs.uniforms.uPx.value=Rt*1.2,$.home.uniforms.uPx.value=Rt*1.6,$.arcs.uniforms.uTime.value=V,$.home.uniforms.uTime.value=V}if(b.gate){let lt=Z(2),j=b.forms.indexOf(2),nt=b.scales[j],Rt=A(Mt,R[2]),$=F(Rt,[0,.25,0]);b.gate.visible=lt>.01,b.gate.position.set($[0]*nt,$[1]*nt,$[2]*nt),b.gate.quaternion.set(...A(Rt,S([0,1,0],Math.PI/2))),b.gate.scale.setScalar(nt),b.gate.material.uniforms.uTime.value=V,b.gate.material.uniforms.uA.value=lt*Vt.uIntro.value}b.renderer.render(b.scene,b.camera),b.frames++}function kt(b){let L=Math.min(.1,(b-Y)/1e3);Y=b,on===null&&!En&&(V+=Math.min(L,.05)),G.x+=(G.tx-G.x)*Math.min(1,L*3),G.y+=(G.ty-G.y)*Math.min(1,L*3);let k=!1;for(let it of M)it.visible&&(_t(it,L),k=!0);let tt=M.every(it=>!it.visible||it.frames>3);on!==null&&tt&&Wa.classList.add("scene-still"),k&&!document.hidden&&(!(En||on!==null)||!tt)?requestAnimationFrame(kt):et=!1}function zt(){et||(et=!0,Y=performance.now(),requestAnimationFrame(kt))}let J=new IntersectionObserver(b=>{for(let L of b){let k=M.find(tt=>tt.el===L.target);if(!k&&L.isIntersecting){if(k=st(L.target),!k){J.unobserve(L.target);continue}M.push(k)}k&&(k.visible=L.isIntersecting)}zt()},{rootMargin:"25% 0px 25% 0px"});wl.forEach(b=>J.observe(b)),addEventListener("resize",()=>{H=innerHeight,zt()}),addEventListener("scroll",()=>{if(En)for(let b of M)b.frames=0;zt()},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden||zt()}),Up&&!En&&addEventListener("pointermove",b=>{G.tx=b.clientX/innerWidth-.5,G.ty=b.clientY/innerHeight-.5,zt()},{passive:!0}),Wa.classList.add("scene-on")}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
