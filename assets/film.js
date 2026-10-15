/* Clarke Systems Group film. Source: src/film. Includes three.js (MIT licence). */
(()=>{var Ka="169";var ac=0,Po=1,oc=2;var Rl=1,lc=2,an=3,En=0,ve=1,Ge=2,je=0,fi=1,Fe=2,Io=3,Uo=4,cc=5,zn=100,hc=101,uc=102,dc=103,fc=104,pc=200,mc=201,gc=202,vc=203,Fr=204,Br=205,xc=206,yc=207,_c=208,Mc=209,Sc=210,Ec=211,bc=212,Ac=213,wc=214,Or=0,zr=1,kr=2,vi=3,Vr=4,Hr=5,Gr=6,Wr=7,Cl=0,Tc=1,Rc=2,Sn=0,ja=1,$a=2,to=3,eo=4,Cc=5,no=6,io=7;var Pl=300,xi=301,yi=302,Xr=303,Qr=304,Ys=306,Yr=1e3,Hn=1001,Zr=1002,Ne=1003,Pc=1004;var Yi=1005;var We=1006,rr=1007;var Gn=1008;var un=1009,Il=1010,Ul=1011,ki=1012,so=1013,Wn=1014,ln=1015,Pe=1016,ro=1017,ao=1018,_i=1020,Dl=35902,Ll=1021,Nl=1022,Xe=1023,Fl=1024,Bl=1025,pi=1026,Mi=1027,Ol=1028,oo=1029,zl=1030,lo=1031;var co=1033,vs=33776,xs=33777,ys=33778,_s=33779,Jr=35840,qr=35841,Kr=35842,jr=35843,$r=36196,ta=37492,ea=37496,na=37808,ia=37809,sa=37810,ra=37811,aa=37812,oa=37813,la=37814,ca=37815,ha=37816,ua=37817,da=37818,fa=37819,pa=37820,ma=37821,Ms=36492,ga=36494,va=36495,kl=36283,xa=36284,ya=36285,_a=36286;var Es=2300,Ma=2301,ar=2302,Do=2400,Lo=2401,No=2402;var Ic=3200,Uc=3201;var Dc=0,Lc=1,Mn="",qe="srgb",Tn="srgb-linear",ho="display-p3",Zs="display-p3-linear",bs="linear",jt="srgb",As="rec709",ws="p3";var jn=7680;var Fo=519,Nc=512,Fc=513,Bc=514,Vl=515,Oc=516,zc=517,kc=518,Vc=519,Bo=35044;var Oo="300 es",cn=2e3,Ts=2001,bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var or=Math.PI/180,Sa=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function Hc(i,t){return(i%t+t)%t}function lr(i,t,e){return(1-e)*i+e*t}function Ui(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],x=n[8],_=s[0],p=s[3],u=s[6],b=s[1],E=s[4],A=s[7],L=s[2],R=s[5],T=s[8];return r[0]=a*_+o*b+l*L,r[3]=a*p+o*E+l*R,r[6]=a*u+o*A+l*T,r[1]=c*_+h*b+d*L,r[4]=c*p+h*E+d*R,r[7]=c*u+h*A+d*T,r[2]=f*_+m*b+x*L,r[5]=f*p+m*E+x*R,r[8]=f*u+m*A+x*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,x=e*d+n*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(cr.makeScale(t,e)),this}rotate(t){return this.premultiply(cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},cr=new zt;function Hl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gc(){let i=Rs("canvas");return i.style.display="block",i}var zo={};function Ss(i){i in zo||(zo[i]=!0,console.warn(i))}function Wc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xc(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qc(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ko=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vo=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Di={[Tn]:{transfer:bs,primaries:As,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[qe]:{transfer:jt,primaries:As,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Zs]:{transfer:bs,primaries:ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(ko)},[ho]:{transfer:jt,primaries:ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(ko).convertLinearToSRGB()}},Yc=new Set([Tn,Zs]),Xt={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Yc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Di[t].toReference,s=Di[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Di[i].primaries},getTransfer:function(i){return i===Mn?bs:Di[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Di[t].luminanceCoefficients)}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $n,Ea=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=Rs("canvas")),$n.width=t.width,$n.height=t.height;let n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Rs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zc=0,Cs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ur(s[a].image)):r.push(ur(s[a]))}else r=ur(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jc=0,Be=class i extends bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=We,a=Gn,o=Xe,l=un,c=i.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Hi(),this.name="",this.source=new Cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yr:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yr:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Pl;Be.DEFAULT_ANISOTROPY=1;var ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],x=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,A=(m+1)/2,L=(u+1)/2,R=(h+f)/4,T=(d+_)/4,N=(x+p)/4;return E>A&&E>L?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=T/n):A>L?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=R/s,r=N/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=N/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-x)*(p-x)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(d-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ba=class extends bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Cs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pe=class extends ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ps=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],x=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=x,t[e+3]=_;return}if(d!==_||l!==f||c!==m||h!==x){let p=1-o,u=l*f+c*m+h*x+d*_,b=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){let L=Math.sqrt(E),R=Math.atan2(L,u*b);p=Math.sin(p*R)/L,o=Math.sin(o*R)/L}let A=o*b;if(l=l*p+f*A,c=c*p+m*A,h=h*p+x*A,d=d*p+_*A,p===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+h*d+l*m-c*f,t[e+1]=l*x+h*f+c*d-o*m,t[e+2]=c*x+h*m+o*f-l*d,t[e+3]=h*x-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*x,this._y=c*m*d-f*h*x,this._z=c*h*x+f*m*d,this._w=c*h*d-f*m*x;break;case"YXZ":this._x=f*h*d+c*m*x,this._y=c*m*d-f*h*x,this._z=c*h*x-f*m*d,this._w=c*h*d+f*m*x;break;case"ZXY":this._x=f*h*d-c*m*x,this._y=c*m*d+f*h*x,this._z=c*h*x+f*m*d,this._w=c*h*d-f*m*x;break;case"ZYX":this._x=f*h*d-c*m*x,this._y=c*m*d+f*h*x,this._z=c*h*x-f*m*d,this._w=c*h*d+f*m*x;break;case"YZX":this._x=f*h*d+c*m*x,this._y=c*m*d+f*h*x,this._z=c*h*x-f*m*d,this._w=c*h*d-f*m*x;break;case"XZY":this._x=f*h*d-c*m*x,this._y=c*m*d-f*h*x,this._z=c*h*x+f*m*d,this._w=c*h*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ho.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dr.copy(this).projectOnVector(t),this.sub(dr)}reflect(t){return this.sub(dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dr=new D,Ho=new An,Xn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(r,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(t.matrixWorld),this.union(Zi)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),Ji.subVectors(this.max,Li),ti.subVectors(t.a,Li),ei.subVectors(t.b,Li),ni.subVectors(t.c,Li),mn.subVectors(ei,ti),gn.subVectors(ni,ei),Un.subVectors(ti,ni);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Un.z,Un.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Un.z,0,-Un.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Un.y,Un.x,0];return!fr(e,ti,ei,ni,Ji)||(e=[1,0,0,0,1,0,0,0,1],!fr(e,ti,ei,ni,Ji))?!1:(qi.crossVectors(mn,gn),e=[qi.x,qi.y,qi.z],fr(e,ti,ei,ni,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},tn=[new D,new D,new D,new D,new D,new D,new D,new D],ke=new D,Zi=new Xn,ti=new D,ei=new D,ni=new D,mn=new D,gn=new D,Un=new D,Li=new D,Ji=new D,qi=new D,Dn=new D;function fr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Dn.fromArray(i,r);let o=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),l=t.dot(Dn),c=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qc=new Xn,Ni=new D,pr=new D,Si=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);let e=Ni.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ni,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(pr)),this.expandByPoint(Ni.copy(t.center).sub(pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},en=new D,mr=new D,Ki=new D,vn=new D,gr=new D,ji=new D,vr=new D,Is=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.origin).addScaledVector(this.direction,e),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){mr.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(mr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ki),o=vn.dot(this.direction),l=-vn.dot(Ki),c=vn.lengthSq(),h=Math.abs(1-a*a),d,f,m,x;if(h>0)if(d=a*l-o,f=a*o-l,x=r*h,d>=0)if(f>=-x)if(f<=x){let _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mr).addScaledVector(Ki,f),m}intersectSphere(t,e){en.subVectors(t.center,this.origin);let n=en.dot(this.direction),s=en.dot(en)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,s,r){gr.subVectors(e,t),ji.subVectors(n,t),vr.crossVectors(gr,ji);let a=this.direction.dot(vr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);let l=o*this.direction.dot(ji.crossVectors(vn,ji));if(l<0)return null;let c=o*this.direction.dot(gr.cross(vn));if(c<0||l+c>a)return null;let h=-o*vn.dot(vr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,f,m,x,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,f,m,x,_,p)}set(t,e,n,s,r,a,o,l,c,h,d,f,m,x,_,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),a=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*d,x=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+x*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=x+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,x=c*h,_=c*d;e[0]=f+_*o,e[4]=x*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-x,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,x=c*h,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*d,x=o*h,_=o*d;e[0]=l*h,e[4]=x*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,x=o*l,_=o*c;e[0]=l*h,e[4]=_-f*d,e[8]=x*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+x,e[10]=f-_*d}else if(t.order==="XZY"){let f=a*l,m=a*c,x=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=a*h,e[9]=m*d-x,e[2]=x*d-m,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kc,t,jc)}lookAt(t,e,n){let s=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),xn.crossVectors(n,Re),xn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),xn.crossVectors(n,Re)),xn.normalize(),$i.crossVectors(Re,xn),s[0]=xn.x,s[4]=$i.x,s[8]=Re.x,s[1]=xn.y,s[5]=$i.y,s[9]=Re.y,s[2]=xn.z,s[6]=$i.z,s[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],x=n[2],_=n[6],p=n[10],u=n[14],b=n[3],E=n[7],A=n[11],L=n[15],R=s[0],T=s[4],N=s[8],$=s[12],v=s[1],M=s[5],V=s[9],z=s[13],W=s[2],K=s[6],O=s[10],tt=s[14],H=s[3],pt=s[7],ot=s[11],bt=s[15];return r[0]=a*R+o*v+l*W+c*H,r[4]=a*T+o*M+l*K+c*pt,r[8]=a*N+o*V+l*O+c*ot,r[12]=a*$+o*z+l*tt+c*bt,r[1]=h*R+d*v+f*W+m*H,r[5]=h*T+d*M+f*K+m*pt,r[9]=h*N+d*V+f*O+m*ot,r[13]=h*$+d*z+f*tt+m*bt,r[2]=x*R+_*v+p*W+u*H,r[6]=x*T+_*M+p*K+u*pt,r[10]=x*N+_*V+p*O+u*ot,r[14]=x*$+_*z+p*tt+u*bt,r[3]=b*R+E*v+A*W+L*H,r[7]=b*T+E*M+A*K+L*pt,r[11]=b*N+E*V+A*O+L*ot,r[15]=b*$+E*z+A*tt+L*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],x=t[3],_=t[7],p=t[11],u=t[15];return x*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*m-n*l*m)+_*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*h-n*c*h)+u*(-s*o*h-e*l*d+e*o*f+s*a*d-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],x=t[12],_=t[13],p=t[14],u=t[15],b=d*p*c-_*f*c+_*l*m-o*p*m-d*l*u+o*f*u,E=x*f*c-h*p*c-x*l*m+a*p*m+h*l*u-a*f*u,A=h*_*c-x*d*c+x*o*m-a*_*m-h*o*u+a*d*u,L=x*d*l-h*_*l-x*o*f+a*_*f+h*o*p-a*d*p,R=e*b+n*E+s*A+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=b*T,t[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*u-n*f*u)*T,t[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*u+n*l*u)*T,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*m-n*l*m)*T,t[4]=E*T,t[5]=(h*p*r-x*f*r+x*s*m-e*p*m-h*s*u+e*f*u)*T,t[6]=(x*l*r-a*p*r-x*s*c+e*p*c+a*s*u-e*l*u)*T,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*T,t[8]=A*T,t[9]=(x*d*r-h*_*r-x*n*m+e*_*m+h*n*u-e*d*u)*T,t[10]=(a*_*r-x*o*r+x*n*c-e*_*c-a*n*u+e*o*u)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*m-e*o*m)*T,t[12]=L*T,t[13]=(h*_*s-x*d*s+x*n*f-e*_*f-h*n*p+e*d*p)*T,t[14]=(x*o*s-a*_*s-x*n*l+e*_*l+a*n*p-e*o*p)*T,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*f+e*o*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,x=r*d,_=a*h,p=a*d,u=o*d,b=l*c,E=l*h,A=l*d,L=n.x,R=n.y,T=n.z;return s[0]=(1-(_+u))*L,s[1]=(m+A)*L,s[2]=(x-E)*L,s[3]=0,s[4]=(m-A)*R,s[5]=(1-(f+u))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(x+E)*T,s[9]=(p-b)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ii.set(s[0],s[1],s[2]).length(),a=ii.set(s[4],s[5],s[6]).length(),o=ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ve.copy(this);let c=1/r,h=1/a,d=1/o;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=d,Ve.elements[9]*=d,Ve.elements[10]*=d,e.setFromRotationMatrix(Ve),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=cn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(o===cn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ts)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),f=(e+t)*c,m=(n+s)*h,x,_;if(o===cn)x=(a+r)*d,_=-2*d;else if(o===Ts)x=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ii=new D,Ve=new oe,Kc=new D(0,0,0),jc=new D(1,1,1),xn=new D,$i=new D,Re=new D,Go=new oe,Wo=new An,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$c=0,Xo=new D,si=new An,nn=new oe,ts=new D,Fi=new D,th=new D,eh=new An,Qo=new D(1,0,0),Yo=new D(0,1,0),Zo=new D(0,0,1),Jo={type:"added"},nh={type:"removed"},ri={type:"childadded",child:null},xr={type:"childremoved",child:null},Oe=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new dn,n=new An,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new zt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(Qo,t)}rotateY(t){return this.rotateOnAxis(Yo,t)}rotateZ(t){return this.rotateOnAxis(Zo,t)}translateOnAxis(t,e){return Xo.copy(t).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qo,t)}translateY(t){return this.translateOnAxis(Yo,t)}translateZ(t){return this.translateOnAxis(Zo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Fi,ts,this.up):nn.lookAt(ts,Fi,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),si.setFromRotationMatrix(nn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jo),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nh),xr.child=t,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jo),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,eh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Oe.DEFAULT_UP=new D(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var He=new D,sn=new D,yr=new D,rn=new D,ai=new D,oi=new D,qo=new D,_r=new D,Mr=new D,Sr=new D,Er=new ie,br=new ie,Ar=new ie,kn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),He.subVectors(t,e),s.cross(He);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){He.subVectors(s,e),sn.subVectors(n,e),yr.subVectors(t,e);let a=He.dot(He),o=He.dot(sn),l=He.dot(yr),c=sn.dot(sn),h=sn.dot(yr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rn.x),l.addScaledVector(a,rn.y),l.addScaledVector(o,rn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Er.setScalar(0),br.setScalar(0),Ar.setScalar(0),Er.fromBufferAttribute(t,e),br.fromBufferAttribute(t,n),Ar.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Er,r.x),a.addScaledVector(br,r.y),a.addScaledVector(Ar,r.z),a}static isFrontFacing(t,e,n,s){return He.subVectors(n,e),sn.subVectors(t,e),He.cross(sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),He.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ai.subVectors(s,n),oi.subVectors(r,n),_r.subVectors(t,n);let l=ai.dot(_r),c=oi.dot(_r);if(l<=0&&c<=0)return e.copy(n);Mr.subVectors(t,s);let h=ai.dot(Mr),d=oi.dot(Mr);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ai,a);Sr.subVectors(t,r);let m=ai.dot(Sr),x=oi.dot(Sr);if(x>=0&&m<=x)return e.copy(r);let _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(oi,o);let p=h*x-m*d;if(p<=0&&d-h>=0&&m-x>=0)return qo.subVectors(r,s),o=(d-h)/(d-h+(m-x)),e.copy(s).addScaledVector(qo,o);let u=1/(p+_+f);return a=_*u,o=f*u,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},es={h:0,s:0,l:0};function wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=Hc(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wr(a,r,t+1/3),this.g=wr(a,r,t),this.b=wr(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=Gl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Xt.fromWorkingColorSpace(ge.copy(this),t),Math.round(Ae(ge.r*255,0,255))*65536+Math.round(Ae(ge.g*255,0,255))*256+Math.round(Ae(ge.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ge.copy(this),e);let n=ge.r,s=ge.g,r=ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=qe){Xt.fromWorkingColorSpace(ge.copy(this),t);let e=ge.r,n=ge.g,s=ge.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(es);let n=lr(yn.h,es.h,e),s=lr(yn.s,es.s,e),r=lr(yn.l,es.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ge=new Nt;Nt.NAMES=Gl;var ih=0,Qn=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=fi,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fr,this.blendDst=Br,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fr&&(n.blendSrc=this.blendSrc),this.blendDst!==Br&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ei=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ae=new D,ns=new Bt,se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ns.fromBufferAttribute(this,e),ns.applyMatrix3(t),this.setXY(e,ns.x,ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bo&&(t.usage=this.usage),t}};var Ds=class extends se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ls=class extends se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends se{constructor(t,e,n){super(new Float32Array(t),e,n)}},sh=0,Le=new oe,Tr=new Oe,li=new D,Ce=new Xn,Bi=new Xn,de=new D,xe=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hl(t)?Ls:Ds)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return Tr.lookAt(t),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ce.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(de.addVectors(Ce.min,Bi.min),Ce.expandByPoint(de),de.addVectors(Ce.max,Bi.max),Ce.expandByPoint(de)):(Ce.expandByPoint(Bi.min),Ce.expandByPoint(Bi.max))}Ce.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)de.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(de));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)de.fromBufferAttribute(o,c),l&&(li.fromBufferAttribute(t,c),de.add(li)),s=Math.max(s,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new D,l[N]=new D;let c=new D,h=new D,d=new D,f=new Bt,m=new Bt,x=new Bt,_=new D,p=new D;function u(N,$,v){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,$),d.fromBufferAttribute(n,v),f.fromBufferAttribute(r,N),m.fromBufferAttribute(r,$),x.fromBufferAttribute(r,v),h.sub(c),d.sub(c),m.sub(f),x.sub(f);let M=1/(m.x*x.y-x.x*m.y);isFinite(M)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(M),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(M),o[N].add(_),o[$].add(_),o[v].add(_),l[N].add(p),l[$].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let N=0,$=b.length;N<$;++N){let v=b[N],M=v.start,V=v.count;for(let z=M,W=M+V;z<W;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let E=new D,A=new D,L=new D,R=new D;function T(N){L.fromBufferAttribute(s,N),R.copy(L);let $=o[N];E.copy($),E.sub(L.multiplyScalar(L.dot($))).normalize(),A.crossVectors(R,$);let M=A.dot(l[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,M)}for(let N=0,$=b.length;N<$;++N){let v=b[N],M=v.start,V=v.count;for(let z=M,W=M+V;z<W;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){let x=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),m=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let u=0;u<h;u++)f[x++]=c[m++]}return new se(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ko=new oe,Ln=new Is,is=new Si,jo=new D,ss=new D,rs=new D,as=new D,Rr=new D,os=new D,$o=new D,ls=new D,le=class extends Oe{constructor(t=new xe,e=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Rr.fromBufferAttribute(d,t),a?os.addScaledVector(Rr,h):os.addScaledVector(Rr.sub(e),h))}e.add(os)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(is.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(is,jo)===null||Ln.origin.distanceToSquared(jo)>(t.far-t.near)**2))&&(Ko.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(Ko),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let p=f[x],u=a[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,L=E;A<L;A+=3){let R=o.getX(A),T=o.getX(A+1),N=o.getX(A+2);s=cs(this,u,t,n,c,h,d,R,T,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){let b=o.getX(p),E=o.getX(p+1),A=o.getX(p+2);s=cs(this,a,t,n,c,h,d,b,E,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let p=f[x],u=a[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,L=E;A<L;A+=3){let R=A,T=A+1,N=A+2;s=cs(this,u,t,n,c,h,d,R,T,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){let b=p,E=p+1,A=p+2;s=cs(this,a,t,n,c,h,d,b,E,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function rh(i,t,e,n,s,r,a,o){let l;if(t.side===ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===En,o),l===null)return null;ls.copy(o),ls.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ls);return c<e.near||c>e.far?null:{distance:c,point:ls.clone(),object:i}}function cs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ss),i.getVertexPosition(l,rs),i.getVertexPosition(c,as);let h=rh(i,t,e,n,ss,rs,as,$o);if(h){let d=new D;kn.getBarycoord($o,ss,rs,as,d),s&&(h.uv=kn.getInterpolatedAttribute(s,o,l,c,d,new Bt)),r&&(h.uv1=kn.getInterpolatedAttribute(r,o,l,c,d,new Bt)),a&&(h.normal=kn.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};kn.getNormal(ss,rs,as,f.normal),h.face=f,h.barycoord=d}return h}var wn=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(d,2));function x(_,p,u,b,E,A,L,R,T,N,$){let v=A/T,M=L/N,V=A/2,z=L/2,W=R/2,K=T+1,O=N+1,tt=0,H=0,pt=new D;for(let ot=0;ot<O;ot++){let bt=ot*M-z;for(let Vt=0;Vt<K;Vt++){let Ht=Vt*v-V;pt[_]=Ht*b,pt[p]=bt*E,pt[u]=W,c.push(pt.x,pt.y,pt.z),pt[_]=0,pt[p]=0,pt[u]=R>0?1:-1,h.push(pt.x,pt.y,pt.z),d.push(Vt/T),d.push(1-ot/N),tt+=1}}for(let ot=0;ot<N;ot++)for(let bt=0;bt<T;bt++){let Vt=f+bt+K*ot,Ht=f+bt+K*(ot+1),Q=f+(bt+1)+K*(ot+1),j=f+(bt+1)+K*ot;l.push(Vt,Ht,j),l.push(Ht,Q,j),H+=6}o.addGroup(m,H,$),m+=H,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ye(i){let t={};for(let e=0;e<i.length;e++){let n=bi(i[e]);for(let s in n)t[s]=n[s]}return t}function ah(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var Rn={clone:bi,merge:ye},oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ns=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_n=new D,tl=new Bt,el=new Bt,_e=class extends Ns{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,tl,el),e.subVectors(el,tl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ci=-90,hi=1,wa=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _e(ci,hi,t,e);s.layers=this.layers,this.add(s);let r=new _e(ci,hi,t,e);r.layers=this.layers,this.add(r);let a=new _e(ci,hi,t,e);a.layers=this.layers,this.add(a);let o=new _e(ci,hi,t,e);o.layers=this.layers,this.add(o);let l=new _e(ci,hi,t,e);l.layers=this.layers,this.add(l);let c=new _e(ci,hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Fs=class extends Be{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ta=class extends pe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ve,blending:je});r.uniforms.tEquirect.value=e;let a=new le(s,r),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=We),new wa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Cr=new D,ch=new D,hh=new zt,on=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Cr.subVectors(n,e).cross(ch.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Cr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hh.getNormalMatrix(t),s=this.coplanarPoint(Cr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nn=new Si,hs=new D,Bs=class{constructor(t=new on,e=new on,n=new on,s=new on,r=new on,a=new on){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],x=s[9],_=s[10],p=s[11],u=s[12],b=s[13],E=s[14],A=s[15];if(n[0].setComponents(l-r,f-c,p-m,A-u).normalize(),n[1].setComponents(l+r,f+c,p+m,A+u).normalize(),n[2].setComponents(l+a,f+h,p+x,A+b).normalize(),n[3].setComponents(l-a,f-h,p-x,A-b).normalize(),n[4].setComponents(l-o,f-d,p-_,A-E).normalize(),e===cn)n[5].setComponents(l+o,f+d,p+_,A+E).normalize();else if(e===Ts)n[5].setComponents(o,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(hs.x=s.normal.x>0?t.max.x:t.min.x,hs.y=s.normal.y>0?t.max.y:t.min.y,hs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function uh(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<d.length;m++){let x=d[f],_=d[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,x=d.length;m<x;m++){let _=d[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Yn=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,m=[],x=[],_=[],p=[];for(let u=0;u<h;u++){let b=u*f-a;for(let E=0;E<c;E++){let A=E*d-r;x.push(A,-b,0),_.push(0,0,1),p.push(E/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){let E=b+c*u,A=b+c*(u+1),L=b+1+c*(u+1),R=b+1+c*u;m.push(E,A,R),m.push(A,L,R)}this.setIndex(m),this.setAttribute("position",new Me(x,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fh=`#ifdef USE_ALPHAHASH
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
#endif`,ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
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
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_h=`#ifdef USE_BATCHING
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
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
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
#endif`,wh=`#ifdef USE_BUMPMAP
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
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nh=`#define PI 3.141592653589793
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
} // validated`,Fh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bh=`vec3 transformedNormal = objectNormal;
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
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`
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
}`,Wh=`#ifdef USE_ENVMAP
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
#endif`,Xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,Yh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$h=`#ifdef USE_GRADIENTMAP
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
}`,tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iu=`uniform bool receiveShadow;
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
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cu=`PhysicalMaterial material;
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
#endif`,hu=`struct PhysicalMaterial {
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
}`,uu=`
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
#endif`,du=`#if defined( RE_IndirectDiffuse )
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
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mu=`#if defined( USE_POINTS_UV )
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
#endif`,Su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lu=`#ifdef USE_NORMALMAP
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
#endif`,Nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ku=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qu=`float getShadowMask() {
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
}`,Ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ju=`#ifdef USE_SKINNING
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
#endif`,$u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,td=`#ifdef USE_SKINNING
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
#endif`,ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
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
#endif`,ad=`#ifdef USE_TRANSMISSION
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
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dd=`uniform sampler2D t2D;
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
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`#include <common>
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
}`,xd=`#if DEPTH_PACKING == 3200
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
}`,yd=`#define DISTANCE
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
}`,_d=`#define DISTANCE
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
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`uniform float scale;
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
}`,bd=`uniform vec3 diffuse;
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
}`,Ad=`#include <common>
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
}`,wd=`uniform vec3 diffuse;
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
}`,Td=`#define LAMBERT
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
}`,Rd=`#define LAMBERT
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
}`,Cd=`#define MATCAP
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
}`,Pd=`#define MATCAP
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
}`,Id=`#define NORMAL
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
}`,Ud=`#define NORMAL
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
}`,Dd=`#define PHONG
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
}`,Ld=`#define PHONG
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
}`,Nd=`#define STANDARD
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
}`,Fd=`#define STANDARD
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
}`,Bd=`#define TOON
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
}`,Od=`#define TOON
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
}`,zd=`uniform float size;
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
}`,kd=`uniform vec3 diffuse;
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
}`,Vd=`#include <common>
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
}`,Hd=`uniform vec3 color;
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
}`,Gd=`uniform float rotation;
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
}`,Wd=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:dh,alphahash_pars_fragment:fh,alphamap_fragment:ph,alphamap_pars_fragment:mh,alphatest_fragment:gh,alphatest_pars_fragment:vh,aomap_fragment:xh,aomap_pars_fragment:yh,batching_pars_vertex:_h,batching_vertex:Mh,begin_vertex:Sh,beginnormal_vertex:Eh,bsdfs:bh,iridescence_fragment:Ah,bumpmap_pars_fragment:wh,clipping_planes_fragment:Th,clipping_planes_pars_fragment:Rh,clipping_planes_pars_vertex:Ch,clipping_planes_vertex:Ph,color_fragment:Ih,color_pars_fragment:Uh,color_pars_vertex:Dh,color_vertex:Lh,common:Nh,cube_uv_reflection_fragment:Fh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:Oh,displacementmap_vertex:zh,emissivemap_fragment:kh,emissivemap_pars_fragment:Vh,colorspace_fragment:Hh,colorspace_pars_fragment:Gh,envmap_fragment:Wh,envmap_common_pars_fragment:Xh,envmap_pars_fragment:Qh,envmap_pars_vertex:Yh,envmap_physical_pars_fragment:su,envmap_vertex:Zh,fog_vertex:Jh,fog_pars_vertex:qh,fog_fragment:Kh,fog_pars_fragment:jh,gradientmap_pars_fragment:$h,lightmap_pars_fragment:tu,lights_lambert_fragment:eu,lights_lambert_pars_fragment:nu,lights_pars_begin:iu,lights_toon_fragment:ru,lights_toon_pars_fragment:au,lights_phong_fragment:ou,lights_phong_pars_fragment:lu,lights_physical_fragment:cu,lights_physical_pars_fragment:hu,lights_fragment_begin:uu,lights_fragment_maps:du,lights_fragment_end:fu,logdepthbuf_fragment:pu,logdepthbuf_pars_fragment:mu,logdepthbuf_pars_vertex:gu,logdepthbuf_vertex:vu,map_fragment:xu,map_pars_fragment:yu,map_particle_fragment:_u,map_particle_pars_fragment:Mu,metalnessmap_fragment:Su,metalnessmap_pars_fragment:Eu,morphinstance_vertex:bu,morphcolor_vertex:Au,morphnormal_vertex:wu,morphtarget_pars_vertex:Tu,morphtarget_vertex:Ru,normal_fragment_begin:Cu,normal_fragment_maps:Pu,normal_pars_fragment:Iu,normal_pars_vertex:Uu,normal_vertex:Du,normalmap_pars_fragment:Lu,clearcoat_normal_fragment_begin:Nu,clearcoat_normal_fragment_maps:Fu,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:Ou,opaque_fragment:zu,packing:ku,premultiplied_alpha_fragment:Vu,project_vertex:Hu,dithering_fragment:Gu,dithering_pars_fragment:Wu,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:Qu,shadowmap_pars_fragment:Yu,shadowmap_pars_vertex:Zu,shadowmap_vertex:Ju,shadowmask_pars_fragment:qu,skinbase_vertex:Ku,skinning_pars_vertex:ju,skinning_vertex:$u,skinnormal_vertex:td,specularmap_fragment:ed,specularmap_pars_fragment:nd,tonemapping_fragment:id,tonemapping_pars_fragment:sd,transmission_fragment:rd,transmission_pars_fragment:ad,uv_pars_fragment:od,uv_pars_vertex:ld,uv_vertex:cd,worldpos_vertex:hd,background_vert:ud,background_frag:dd,backgroundCube_vert:fd,backgroundCube_frag:pd,cube_vert:md,cube_frag:gd,depth_vert:vd,depth_frag:xd,distanceRGBA_vert:yd,distanceRGBA_frag:_d,equirect_vert:Md,equirect_frag:Sd,linedashed_vert:Ed,linedashed_frag:bd,meshbasic_vert:Ad,meshbasic_frag:wd,meshlambert_vert:Td,meshlambert_frag:Rd,meshmatcap_vert:Cd,meshmatcap_frag:Pd,meshnormal_vert:Id,meshnormal_frag:Ud,meshphong_vert:Dd,meshphong_frag:Ld,meshphysical_vert:Nd,meshphysical_frag:Fd,meshtoon_vert:Bd,meshtoon_frag:Od,points_vert:zd,points_frag:kd,shadow_vert:Vd,shadow_frag:Hd,sprite_vert:Gd,sprite_frag:Wd},rt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Ke={basic:{uniforms:ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:ye([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:ye([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:ye([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:ye([rt.points,rt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:ye([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:ye([rt.common,rt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:ye([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:ye([rt.sprite,rt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:ye([rt.common,rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:ye([rt.lights,rt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ke.physical={uniforms:ye([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var us={r:0,b:0,g:0},Fn=new dn,Xd=new oe;function Qd(i,t,e,n,s,r,a){let o=new Nt(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function x(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function _(b){let E=!1,A=x(b);A===null?u(o,l):A&&A.isColor&&(u(A,1),E=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,E){let A=x(E);A&&(A.isCubeTexture||A.mapping===Ys)?(h===void 0&&(h=new le(new wn(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:bi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fn.copy(E.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xd.makeRotationFromEuler(Fn)),h.material.toneMapped=Xt.getTransfer(A.colorSpace)!==jt,(d!==A||f!==A.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new le(new Yn(2,2),new Kt({name:"BackgroundMaterial",uniforms:bi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(A.colorSpace)!==jt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,E){b.getRGB(us,Wl(i)),n.buffers.color.setClear(us.r,us.g,us.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:_,addToRenderList:p}}function Yd(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,M,V,z,W){let K=!1,O=d(z,V,M);r!==O&&(r=O,c(r.object)),K=m(v,z,V,W),K&&x(v,z,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,A(v,M,V,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,M,V){let z=V.wireframe===!0,W=n[v.id];W===void 0&&(W={},n[v.id]=W);let K=W[M.id];K===void 0&&(K={},W[M.id]=K);let O=K[z];return O===void 0&&(O=f(l()),K[z]=O),O}function f(v){let M=[],V=[],z=[];for(let W=0;W<e;W++)M[W]=0,V[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:V,attributeDivisors:z,object:v,attributes:{},index:null}}function m(v,M,V,z){let W=r.attributes,K=M.attributes,O=0,tt=V.getAttributes();for(let H in tt)if(tt[H].location>=0){let ot=W[H],bt=K[H];if(bt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(bt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(bt=v.instanceColor)),ot===void 0||ot.attribute!==bt||bt&&ot.data!==bt.data)return!0;O++}return r.attributesNum!==O||r.index!==z}function x(v,M,V,z){let W={},K=M.attributes,O=0,tt=V.getAttributes();for(let H in tt)if(tt[H].location>=0){let ot=K[H];ot===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor));let bt={};bt.attribute=ot,ot&&ot.data&&(bt.data=ot.data),W[H]=bt,O++}r.attributes=W,r.attributesNum=O,r.index=z}function _(){let v=r.newAttributes;for(let M=0,V=v.length;M<V;M++)v[M]=0}function p(v){u(v,0)}function u(v,M){let V=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;V[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),W[v]!==M&&(i.vertexAttribDivisor(v,M),W[v]=M)}function b(){let v=r.newAttributes,M=r.enabledAttributes;for(let V=0,z=M.length;V<z;V++)M[V]!==v[V]&&(i.disableVertexAttribArray(V),M[V]=0)}function E(v,M,V,z,W,K,O){O===!0?i.vertexAttribIPointer(v,M,V,W,K):i.vertexAttribPointer(v,M,V,z,W,K)}function A(v,M,V,z){_();let W=z.attributes,K=V.getAttributes(),O=M.defaultAttributeValues;for(let tt in K){let H=K[tt];if(H.location>=0){let pt=W[tt];if(pt===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),pt!==void 0){let ot=pt.normalized,bt=pt.itemSize,Vt=t.get(pt);if(Vt===void 0)continue;let Ht=Vt.buffer,Q=Vt.type,j=Vt.bytesPerElement,yt=Q===i.INT||Q===i.UNSIGNED_INT||pt.gpuType===so;if(pt.isInterleavedBufferAttribute){let gt=pt.data,q=gt.stride,Z=pt.offset;if(gt.isInstancedInterleavedBuffer){for(let it=0;it<H.locationSize;it++)u(H.location+it,gt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let it=0;it<H.locationSize;it++)p(H.location+it);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let it=0;it<H.locationSize;it++)E(H.location+it,bt/H.locationSize,Q,ot,q*j,(Z+bt/H.locationSize*it)*j,yt)}else{if(pt.isInstancedBufferAttribute){for(let gt=0;gt<H.locationSize;gt++)u(H.location+gt,pt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let gt=0;gt<H.locationSize;gt++)p(H.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let gt=0;gt<H.locationSize;gt++)E(H.location+gt,bt/H.locationSize,Q,ot,bt*j,bt/H.locationSize*gt*j,yt)}}else if(O!==void 0){let ot=O[tt];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(H.location,ot);break;case 3:i.vertexAttrib3fv(H.location,ot);break;case 4:i.vertexAttrib4fv(H.location,ot);break;default:i.vertexAttrib1fv(H.location,ot)}}}}b()}function L(){N();for(let v in n){let M=n[v];for(let V in M){let z=M[V];for(let W in z)h(z[W].object),delete z[W];delete M[V]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;let M=n[v.id];for(let V in M){let z=M[V];for(let W in z)h(z[W].object),delete z[W];delete M[V]}delete n[v.id]}function T(v){for(let M in n){let V=n[M];if(V[v.id]===void 0)continue;let z=V[v.id];for(let W in z)h(z[W].object),delete z[W];delete V[v.id]}}function N(){$(),a=!0,r!==s&&(r=s,c(r.object))}function $(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:$,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Zd(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x];e.update(m,n,1)}function l(c,h,d,f){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let x=0;for(let _=0;_<d;_++)x+=h[_];for(let _=0;_<f.length;_++)e.update(x,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Xe&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let N=T===Pe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ln&&!N)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:A,vertexTextures:L,maxSamples:R}}function qd(i){let t=this,e=null,n=0,s=!1,r=!1,a=new on,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let x=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,E=b*4,A=u.clippingState||null;l.value=A,A=h(x,f,E,m);for(let L=0;L!==E;++L)A[L]=e[L];u.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,x){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,x!==!0||p===null){let u=m+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let E=0,A=m;E!==_;++E,A+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(p,A),p[A+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Kd(i){let t=new WeakMap;function e(a,o){return o===Xr?a.mapping=xi:o===Qr&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Xr||o===Qr)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ta(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vi=class extends Ns{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},di=4,nl=[.125,.215,.35,.446,.526,.582],Vn=20,Pr=new Vi,il=new Nt,Ir=null,Ur=0,Dr=0,Lr=!1,On=(1+Math.sqrt(5))/2,ui=1/On,sl=[new D(-On,ui,0),new D(On,ui,0),new D(-ui,0,On),new D(ui,0,On),new D(0,On,-ui),new D(0,On,ui),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Os=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ir,Ur,Dr),this._renderer.xr.enabled=Lr,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Pe,format:Xe,colorSpace:Tn,depthBuffer:!1},s=rl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jd(r)),this._blurMaterial=$d(r,t,e)}return s}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,n,s){let o=new _e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(il),h.toneMapping=Sn,h.autoClear=!1;let m=new Ei({name:"PMREM.Background",side:ve,depthWrite:!1,depthTest:!1}),x=new le(new wn,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(il),_=!0);for(let u=0;u<6;u++){let b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let E=this._cubeSize;ds(s,b*E,u>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xi||t.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Pr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sl[(s-r-1)%sl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new le(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vn-1),_=r/x,p=isFinite(r)?1+Math.floor(h*_):Vn;p>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);let u=[],b=0;for(let T=0;T<Vn;++T){let N=T/_,$=Math.exp(-N*N/2);u.push($),T===0?b+=$:T<p&&(b+=2*$)}for(let T=0;T<u.length;T++)u[T]=u[T]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=x,f.mipInt.value=E-n;let A=this._sizeLods[s],L=3*A*(s>E-di?s-E+di:0),R=4*(this._cubeSize-A);ds(e,L,R,3*A,2*A),l.setRenderTarget(e),l.render(d,Pr)}};function jd(i){let t=[],e=[],n=[],s=i,r=i-di+1+nl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-di?l=nl[a-i+di-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,x=6,_=3,p=2,u=1,b=new Float32Array(_*x*m),E=new Float32Array(p*x*m),A=new Float32Array(u*x*m);for(let R=0;R<m;R++){let T=R%3*2/3-1,N=R>2?0:-1,$=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];b.set($,_*x*R),E.set(f,p*x*R);let v=[R,R,R,R,R,R];A.set(v,u*x*R)}let L=new xe;L.setAttribute("position",new se(b,_)),L.setAttribute("uv",new se(E,p)),L.setAttribute("faceIndex",new se(A,u)),t.push(L),s>di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rl(i,t,e){let n=new pe(i,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $d(i,t,e){let n=new Float32Array(Vn),s=new D(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uo(),fragmentShader:`

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
		`,blending:je,depthTest:!1,depthWrite:!1})}function al(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:je,depthTest:!1,depthWrite:!1})}function ol(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:je,depthTest:!1,depthWrite:!1})}function uo(){return`

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
	`}function tf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Xr||l===Qr,h=l===xi||l===yi;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Os(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Os(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ef(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function nf(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);for(let x in f.morphAttributes){let _=f.morphAttributes[x];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let x in f)t.update(f[x],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let x in m){let _=m[x];for(let p=0,u=_.length;p<u;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,x=d.attributes.position,_=0;if(m!==null){let b=m.array;_=m.version;for(let E=0,A=b.length;E<A;E+=3){let L=b[E+0],R=b[E+1],T=b[E+2];f.push(L,R,R,T,T,L)}}else if(x!==void 0){let b=x.array;_=x.version;for(let E=0,A=b.length/3-1;E<A;E+=3){let L=E+0,R=E+1,T=E+2;f.push(L,R,R,T,T,L)}}else return;let p=new(Hl(f)?Ls:Ds)(f,1);p.version=_;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function sf(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,f*a,x),e.update(m,n,x))}function h(f,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,x);let p=0;for(let u=0;u<x;u++)p+=m[u];e.update(p,n,1)}function d(f,m,x,_){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,x);let u=0;for(let b=0;b<x;b++)u+=m[b];for(let b=0;b<_.length;b++)e.update(u,n,_[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function rf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function af(i,t,e){let n=new WeakMap,s=new ie;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let $=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",$)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;m===!0&&(E=1),x===!0&&(E=2),_===!0&&(E=3);let A=o.attributes.position.count*E,L=1;A>t.maxTextureSize&&(L=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let R=new Float32Array(A*L*4*d),T=new Ps(R,A,L,d);T.type=ln,T.needsUpdate=!0;let N=E*4;for(let v=0;v<d;v++){let M=p[v],V=u[v],z=b[v],W=A*L*4*v;for(let K=0;K<M.count;K++){let O=K*N;m===!0&&(s.fromBufferAttribute(M,K),R[W+O+0]=s.x,R[W+O+1]=s.y,R[W+O+2]=s.z,R[W+O+3]=0),x===!0&&(s.fromBufferAttribute(V,K),R[W+O+4]=s.x,R[W+O+5]=s.y,R[W+O+6]=s.z,R[W+O+7]=0),_===!0&&(s.fromBufferAttribute(z,K),R[W+O+8]=s.x,R[W+O+9]=s.y,R[W+O+10]=s.z,R[W+O+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new Bt(A,L)},n.set(o,f),o.addEventListener("dispose",$)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function of(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var zs=class extends Be{constructor(t,e,n,s,r,a,o,l,c,h=pi){if(h!==pi&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=Wn),n===void 0&&h===Mi&&(n=_i),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ql=new Be,ll=new zs(1,1),Yl=new Ps,Zl=new Aa,Jl=new Fs,cl=[],hl=[],ul=new Float32Array(16),dl=new Float32Array(9),fl=new Float32Array(4);function Ti(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=cl[s];if(r===void 0&&(r=new Float32Array(s),cl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function he(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Js(i,t){let e=hl[t];e===void 0&&(e=new Int32Array(t),hl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),he(e,t)}}function hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),he(e,t)}}function uf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),he(e,t)}}function df(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;fl.set(n),i.uniformMatrix2fv(this.addr,!1,fl),he(e,n)}}function ff(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;dl.set(n),i.uniformMatrix3fv(this.addr,!1,dl),he(e,n)}}function pf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;ul.set(n),i.uniformMatrix4fv(this.addr,!1,ul),he(e,n)}}function mf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),he(e,t)}}function vf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),he(e,t)}}function xf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),he(e,t)}}function yf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _f(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),he(e,t)}}function Mf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),he(e,t)}}function Sf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),he(e,t)}}function Ef(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ll.compareFunction=Vl,r=ll):r=Ql,e.setTexture2D(t||r,s)}function bf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zl,s)}function Af(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jl,s)}function wf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yl,s)}function Tf(i){switch(i){case 5126:return lf;case 35664:return cf;case 35665:return hf;case 35666:return uf;case 35674:return df;case 35675:return ff;case 35676:return pf;case 5124:case 35670:return mf;case 35667:case 35671:return gf;case 35668:case 35672:return vf;case 35669:case 35673:return xf;case 5125:return yf;case 36294:return _f;case 36295:return Mf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return wf}}function Rf(i,t){i.uniform1fv(this.addr,t)}function Cf(i,t){let e=Ti(t,this.size,2);i.uniform2fv(this.addr,e)}function Pf(i,t){let e=Ti(t,this.size,3);i.uniform3fv(this.addr,e)}function If(i,t){let e=Ti(t,this.size,4);i.uniform4fv(this.addr,e)}function Uf(i,t){let e=Ti(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Df(i,t){let e=Ti(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lf(i,t){let e=Ti(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Nf(i,t){i.uniform1iv(this.addr,t)}function Ff(i,t){i.uniform2iv(this.addr,t)}function Bf(i,t){i.uniform3iv(this.addr,t)}function Of(i,t){i.uniform4iv(this.addr,t)}function zf(i,t){i.uniform1uiv(this.addr,t)}function kf(i,t){i.uniform2uiv(this.addr,t)}function Vf(i,t){i.uniform3uiv(this.addr,t)}function Hf(i,t){i.uniform4uiv(this.addr,t)}function Gf(i,t,e){let n=this.cache,s=t.length,r=Js(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ql,r[a])}function Wf(i,t,e){let n=this.cache,s=t.length,r=Js(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zl,r[a])}function Xf(i,t,e){let n=this.cache,s=t.length,r=Js(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jl,r[a])}function Qf(i,t,e){let n=this.cache,s=t.length,r=Js(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yl,r[a])}function Yf(i){switch(i){case 5126:return Rf;case 35664:return Cf;case 35665:return Pf;case 35666:return If;case 35674:return Uf;case 35675:return Df;case 35676:return Lf;case 5124:case 35670:return Nf;case 35667:case 35671:return Ff;case 35668:case 35672:return Bf;case 35669:case 35673:return Of;case 5125:return zf;case 36294:return kf;case 36295:return Vf;case 36296:return Hf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return Wf;case 35680:case 36300:case 36308:case 36293:return Xf;case 36289:case 36303:case 36311:case 36292:return Qf}}var Ra=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tf(e.type)}},Ca=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yf(e.type)}},Pa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Nr=/(\w+)(\])?(\[|\.)?/g;function pl(i,t){i.seq.push(t),i.map[t.id]=t}function Zf(i,t,e){let n=i.name,s=n.length;for(Nr.lastIndex=0;;){let r=Nr.exec(n),a=Nr.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){pl(e,c===void 0?new Ra(o,i,t):new Ca(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Pa(o),pl(e,d)),e=d}}}var gi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Zf(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ml(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jf=37297,qf=0;function Kf(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function jf(i){let t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(i),n;switch(t===e?n="":t===ws&&e===As?n="LinearDisplayP3ToLinearSRGB":t===As&&e===ws&&(n="LinearSRGBToLinearDisplayP3"),i){case Tn:case Zs:return[n,"LinearTransferOETF"];case qe:case ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Kf(i.getShaderSource(t),a)}else return s}function $f(i,t){let e=jf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function tp(i,t){let e;switch(t){case ja:e="Linear";break;case $a:e="Reinhard";break;case to:e="Cineon";break;case eo:e="ACESFilmic";break;case no:e="AgX";break;case io:e="Neutral";break;case Cc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fs=new D;function ep(){Xt.getLuminanceCoefficients(fs);let i=fs.x.toFixed(4),t=fs.y.toFixed(4),e=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function np(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function ip(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Oi(i){return i!==""}function vl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(rp,op)}var ap=new Map;function op(i,t){let e=Ot[t];if(e===void 0){let n=ap.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ia(e)}var lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(i){return i.replace(lp,cp)}function cp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _l(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function hp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function up(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xi:case yi:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function fp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cl:t="ENVMAP_BLENDING_MULTIPLY";break;case Tc:t="ENVMAP_BLENDING_MIX";break;case Rc:t="ENVMAP_BLENDING_ADD";break}return t}function pp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mp(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=hp(e),c=up(e),h=dp(e),d=fp(e),f=pp(e),m=np(e),x=ip(r),_=s.createProgram(),p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Oi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Oi).join(`
`),u.length>0&&(u+=`
`)):(p=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),u=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Sn?tp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,$f("linearToOutputTexel",e.outputColorSpace),ep(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),a=Ia(a),a=vl(a,e),a=xl(a,e),o=Ia(o),o=vl(o,e),o=xl(o,e),a=yl(a),o=yl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let E=b+p+a,A=b+u+o,L=ml(s,s.VERTEX_SHADER,E),R=ml(s,s.FRAGMENT_SHADER,A);s.attachShader(_,L),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(M){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(R).trim(),K=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,R);else{let tt=gl(s,L,"vertex"),H=gl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+V+`
`+tt+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||W==="")&&(O=!1);O&&(M.diagnostics={runnable:K,programLog:V,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:u}})}s.deleteShader(L),s.deleteShader(R),N=new gi(s,_),$=sp(s,_)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let $;this.getAttributes=function(){return $===void 0&&T(this),$};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Jf)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}var gp=0,Ua=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Da(t),e.set(t,n)),n}},Da=class{constructor(t){this.id=gp++,this.code=t,this.usedTimes=0}};function vp(i,t,e,n,s,r,a){let o=new Us,l=new Ua,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures,x=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function u(v,M,V,z,W){let K=z.fog,O=W.geometry,tt=v.isMeshStandardMaterial?z.environment:null,H=(v.isMeshStandardMaterial?e:t).get(v.envMap||tt),pt=H&&H.mapping===Ys?H.image.height:null,ot=_[v.type];v.precision!==null&&(x=s.getMaxPrecision(v.precision),x!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",x,"instead."));let bt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Vt=bt!==void 0?bt.length:0,Ht=0;O.morphAttributes.position!==void 0&&(Ht=1),O.morphAttributes.normal!==void 0&&(Ht=2),O.morphAttributes.color!==void 0&&(Ht=3);let Q,j,yt,gt;if(ot){let Ee=Ke[ot];Q=Ee.vertexShader,j=Ee.fragmentShader}else Q=v.vertexShader,j=v.fragmentShader,l.update(v),yt=l.getVertexShaderID(v),gt=l.getFragmentShaderID(v);let q=i.getRenderTarget(),Z=W.isInstancedMesh===!0,it=W.isBatchedMesh===!0,_t=!!v.map,At=!!v.matcap,w=!!H,Qt=!!v.aoMap,ct=!!v.lightMap,Rt=!!v.bumpMap,Mt=!!v.normalMap,Pt=!!v.displacementMap,lt=!!v.emissiveMap,S=!!v.metalnessMap,g=!!v.roughnessMap,P=v.anisotropy>0,k=v.clearcoat>0,Y=v.dispersion>0,X=v.iridescence>0,xt=v.sheen>0,st=v.transmission>0,ht=P&&!!v.anisotropyMap,kt=k&&!!v.clearcoatMap,et=k&&!!v.clearcoatNormalMap,mt=k&&!!v.clearcoatRoughnessMap,Ut=X&&!!v.iridescenceMap,St=X&&!!v.iridescenceThicknessMap,ut=xt&&!!v.sheenColorMap,Ft=xt&&!!v.sheenRoughnessMap,It=!!v.specularMap,Gt=!!v.specularColorMap,C=!!v.specularIntensityMap,at=st&&!!v.transmissionMap,G=st&&!!v.thicknessMap,J=!!v.gradientMap,dt=!!v.alphaMap,vt=v.alphaTest>0,Wt=!!v.alphaHash,re=!!v.extensions,Se=Sn;v.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Se=i.toneMapping);let Yt={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:Q,fragmentShader:j,defines:v.defines,customVertexShaderID:yt,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:x,batching:it,batchingColor:it&&W._colorsTexture!==null,instancing:Z,instancingColor:Z&&W.instanceColor!==null,instancingMorph:Z&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Tn,alphaToCoverage:!!v.alphaToCoverage,map:_t,matcap:At,envMap:w,envMapMode:w&&H.mapping,envMapCubeUVHeight:pt,aoMap:Qt,lightMap:ct,bumpMap:Rt,normalMap:Mt,displacementMap:m&&Pt,emissiveMap:lt,normalMapObjectSpace:Mt&&v.normalMapType===Lc,normalMapTangentSpace:Mt&&v.normalMapType===Dc,metalnessMap:S,roughnessMap:g,anisotropy:P,anisotropyMap:ht,clearcoat:k,clearcoatMap:kt,clearcoatNormalMap:et,clearcoatRoughnessMap:mt,dispersion:Y,iridescence:X,iridescenceMap:Ut,iridescenceThicknessMap:St,sheen:xt,sheenColorMap:ut,sheenRoughnessMap:Ft,specularMap:It,specularColorMap:Gt,specularIntensityMap:C,transmission:st,transmissionMap:at,thicknessMap:G,gradientMap:J,opaque:v.transparent===!1&&v.blending===fi&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:vt,alphaHash:Wt,combine:v.combine,mapUv:_t&&p(v.map.channel),aoMapUv:Qt&&p(v.aoMap.channel),lightMapUv:ct&&p(v.lightMap.channel),bumpMapUv:Rt&&p(v.bumpMap.channel),normalMapUv:Mt&&p(v.normalMap.channel),displacementMapUv:Pt&&p(v.displacementMap.channel),emissiveMapUv:lt&&p(v.emissiveMap.channel),metalnessMapUv:S&&p(v.metalnessMap.channel),roughnessMapUv:g&&p(v.roughnessMap.channel),anisotropyMapUv:ht&&p(v.anisotropyMap.channel),clearcoatMapUv:kt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:St&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&p(v.sheenRoughnessMap.channel),specularMapUv:It&&p(v.specularMap.channel),specularColorMapUv:Gt&&p(v.specularColorMap.channel),specularIntensityMapUv:C&&p(v.specularIntensityMap.channel),transmissionMapUv:at&&p(v.transmissionMap.channel),thicknessMapUv:G&&p(v.thicknessMap.channel),alphaMapUv:dt&&p(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Mt||P),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!O.attributes.uv&&(_t||dt),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:_t&&v.map.isVideoTexture===!0&&Xt.getTransfer(v.map.colorSpace)===jt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ge,flipSided:v.side===ve,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function b(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let V in v.defines)M.push(V),M.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(E(M,v),A(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function E(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function A(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),v.push(o.mask)}function L(v){let M=_[v.type],V;if(M){let z=Ke[M];V=Rn.clone(z.uniforms)}else V=v.uniforms;return V}function R(v,M){let V;for(let z=0,W=h.length;z<W;z++){let K=h[z];if(K.cacheKey===M){V=K,++V.usedTimes;break}}return V===void 0&&(V=new mp(i,M,v,r),h.push(V)),V}function T(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function N(v){l.remove(v)}function $(){l.dispose()}return{getParameters:u,getProgramCacheKey:b,getUniforms:L,acquireProgram:R,releaseProgram:T,releaseShaderCache:N,programs:h,dispose:$}}function xp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function yp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ml(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,x,_,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:_,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function o(d,f,m,x,_,p){let u=a(d,f,m,x,_,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,x,_,p){let u=a(d,f,m,x,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||yp),n.length>1&&n.sort(f||Ml),s.length>1&&s.sort(f||Ml)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function _p(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Sl,i.set(n,[a])):s>=r.length?(a=new Sl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Nt};break;case"SpotLight":e={position:new D,direction:new D,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Sp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ep=0;function bp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ap(i){let t=new Mp,e=Sp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new oe,a=new oe;function o(c){let h=0,d=0,f=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let m=0,x=0,_=0,p=0,u=0,b=0,E=0,A=0,L=0,R=0,T=0;c.sort(bp);for(let $=0,v=c.length;$<v;$++){let M=c[$],V=M.color,z=M.intensity,W=M.distance,K=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=V.r*z,d+=V.g*z,f+=V.b*z;else if(M.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(M.sh.coefficients[O],z);T++}else if(M.isDirectionalLight){let O=t.get(M);if(O.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let tt=M.shadow,H=e.get(M);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=M.shadow.matrix,b++}n.directional[m]=O,m++}else if(M.isSpotLight){let O=t.get(M);O.position.setFromMatrixPosition(M.matrixWorld),O.color.copy(V).multiplyScalar(z),O.distance=W,O.coneCos=Math.cos(M.angle),O.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),O.decay=M.decay,n.spot[_]=O;let tt=M.shadow;if(M.map&&(n.spotLightMap[L]=M.map,L++,tt.updateMatrices(M),M.castShadow&&R++),n.spotLightMatrix[_]=tt.matrix,M.castShadow){let H=e.get(M);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=K,A++}_++}else if(M.isRectAreaLight){let O=t.get(M);O.color.copy(V).multiplyScalar(z),O.halfWidth.set(M.width*.5,0,0),O.halfHeight.set(0,M.height*.5,0),n.rectArea[p]=O,p++}else if(M.isPointLight){let O=t.get(M);if(O.color.copy(M.color).multiplyScalar(M.intensity),O.distance=M.distance,O.decay=M.decay,M.castShadow){let tt=M.shadow,H=e.get(M);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,H.shadowCameraNear=tt.camera.near,H.shadowCameraFar=tt.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=K,n.pointShadowMatrix[x]=M.shadow.matrix,E++}n.point[x]=O,x++}else if(M.isHemisphereLight){let O=t.get(M);O.skyColor.copy(M.color).multiplyScalar(z),O.groundColor.copy(M.groundColor).multiplyScalar(z),n.hemi[u]=O,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==m||N.pointLength!==x||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==u||N.numDirectionalShadows!==b||N.numPointShadows!==E||N.numSpotShadows!==A||N.numSpotMaps!==L||N.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,N.directionalLength=m,N.pointLength=x,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=u,N.numDirectionalShadows=b,N.numPointShadows=E,N.numSpotShadows=A,N.numSpotMaps=L,N.numLightProbes=T,n.version=Ep++)}function l(c,h){let d=0,f=0,m=0,x=0,_=0,p=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){let E=c[u];if(E.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(E.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(E.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){let A=n.hemi[_];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function El(i){let t=new Ap(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function wp(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new El(i),t.set(s,[o])):r>=a.length?(o=new El(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var La=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Na=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rp=`uniform sampler2D shadow_pass;
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
}`;function Cp(i,t,e){let n=new Bs,s=new Bt,r=new Bt,a=new ie,o=new La({depthPacking:Uc}),l=new Na,c={},h=e.maxTextureSize,d={[En]:ve,[ve]:En,[Ge]:Ge},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Tp,fragmentShader:Rp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let x=new xe;x.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new le(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let u=this.type;this.render=function(R,T,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let $=i.getRenderTarget(),v=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),V=i.state;V.setBlending(je),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let z=u!==an&&this.type===an,W=u===an&&this.type!==an;for(let K=0,O=R.length;K<O;K++){let tt=R[K],H=tt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let pt=H.getFrameExtents();if(s.multiply(pt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,H.mapSize.y=r.y)),H.map===null||z===!0||W===!0){let bt=this.type!==an?{minFilter:Ne,magFilter:Ne}:{};H.map!==null&&H.map.dispose(),H.map=new pe(s.x,s.y,bt),H.map.texture.name=tt.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let ot=H.getViewportCount();for(let bt=0;bt<ot;bt++){let Vt=H.getViewport(bt);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),V.viewport(a),H.updateMatrices(tt,bt),n=H.getFrustum(),A(T,N,H.camera,tt,this.type)}H.isPointLightShadow!==!0&&this.type===an&&b(H,N),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget($,v,M)};function b(R,T){let N=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pe(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,N,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,N,m,_,null)}function E(R,T,N,$){let v=null,M=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)v=M;else if(v=N.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let V=v.uuid,z=T.uuid,W=c[V];W===void 0&&(W={},c[V]=W);let K=W[z];K===void 0&&(K=v.clone(),W[z]=K,T.addEventListener("dispose",L)),v=K}if(v.visible=T.visible,v.wireframe=T.wireframe,$===an?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let V=i.properties.get(v);V.light=N}return v}function A(R,T,N,$,v){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===an)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let z=t.update(R),W=R.material;if(Array.isArray(W)){let K=z.groups;for(let O=0,tt=K.length;O<tt;O++){let H=K[O],pt=W[H.materialIndex];if(pt&&pt.visible){let ot=E(R,pt,$,v);R.onBeforeShadow(i,R,T,N,z,ot,H),i.renderBufferDirect(N,null,z,ot,R,H),R.onAfterShadow(i,R,T,N,z,ot,H)}}}else if(W.visible){let K=E(R,W,$,v);R.onBeforeShadow(i,R,T,N,z,K,null),i.renderBufferDirect(N,null,z,K,R,null),R.onAfterShadow(i,R,T,N,z,K,null)}}let V=R.children;for(let z=0,W=V.length;z<W;z++)A(V[z],T,N,$,v)}function L(R){R.target.removeEventListener("dispose",L);for(let N in c){let $=c[N],v=R.target.uuid;v in $&&($[v].dispose(),delete $[v])}}}var Pp={[Or]:zr,[kr]:Gr,[Vr]:Wr,[vi]:Hr,[zr]:Or,[Gr]:kr,[Wr]:Vr,[Hr]:vi};function Ip(i){function t(){let C=!1,at=new ie,G=null,J=new ie(0,0,0,0);return{setMask:function(dt){G!==dt&&!C&&(i.colorMask(dt,dt,dt,dt),G=dt)},setLocked:function(dt){C=dt},setClear:function(dt,vt,Wt,re,Se){Se===!0&&(dt*=re,vt*=re,Wt*=re),at.set(dt,vt,Wt,re),J.equals(at)===!1&&(i.clearColor(dt,vt,Wt,re),J.copy(at))},reset:function(){C=!1,G=null,J.set(-1,0,0,0)}}}function e(){let C=!1,at=!1,G=null,J=null,dt=null;return{setReversed:function(vt){at=vt},setTest:function(vt){vt?yt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(vt){G!==vt&&!C&&(i.depthMask(vt),G=vt)},setFunc:function(vt){if(at&&(vt=Pp[vt]),J!==vt){switch(vt){case Or:i.depthFunc(i.NEVER);break;case zr:i.depthFunc(i.ALWAYS);break;case kr:i.depthFunc(i.LESS);break;case vi:i.depthFunc(i.LEQUAL);break;case Vr:i.depthFunc(i.EQUAL);break;case Hr:i.depthFunc(i.GEQUAL);break;case Gr:i.depthFunc(i.GREATER);break;case Wr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=vt}},setLocked:function(vt){C=vt},setClear:function(vt){dt!==vt&&(i.clearDepth(vt),dt=vt)},reset:function(){C=!1,G=null,J=null,dt=null}}}function n(){let C=!1,at=null,G=null,J=null,dt=null,vt=null,Wt=null,re=null,Se=null;return{setTest:function(Yt){C||(Yt?yt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Yt){at!==Yt&&!C&&(i.stencilMask(Yt),at=Yt)},setFunc:function(Yt,Ee,$e){(G!==Yt||J!==Ee||dt!==$e)&&(i.stencilFunc(Yt,Ee,$e),G=Yt,J=Ee,dt=$e)},setOp:function(Yt,Ee,$e){(vt!==Yt||Wt!==Ee||re!==$e)&&(i.stencilOp(Yt,Ee,$e),vt=Yt,Wt=Ee,re=$e)},setLocked:function(Yt){C=Yt},setClear:function(Yt){Se!==Yt&&(i.clearStencil(Yt),Se=Yt)},reset:function(){C=!1,at=null,G=null,J=null,dt=null,vt=null,Wt=null,re=null,Se=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,f=[],m=null,x=!1,_=null,p=null,u=null,b=null,E=null,A=null,L=null,R=new Nt(0,0,0),T=0,N=!1,$=null,v=null,M=null,V=null,z=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,O=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(tt)[1]),K=O>=1):tt.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),K=O>=2);let H=null,pt={},ot=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),Vt=new ie().fromArray(ot),Ht=new ie().fromArray(bt);function Q(C,at,G,J){let dt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(C,vt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<G;Wt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(at+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return vt}let j={};j[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),yt(i.DEPTH_TEST),r.setFunc(vi),ct(!1),Rt(Po),yt(i.CULL_FACE),w(je);function yt(C){c[C]!==!0&&(i.enable(C),c[C]=!0)}function gt(C){c[C]!==!1&&(i.disable(C),c[C]=!1)}function q(C,at){return h[C]!==at?(i.bindFramebuffer(C,at),h[C]=at,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=at),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Z(C,at){let G=f,J=!1;if(C){G=d.get(at),G===void 0&&(G=[],d.set(at,G));let dt=C.textures;if(G.length!==dt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Wt=dt.length;vt<Wt;vt++)G[vt]=i.COLOR_ATTACHMENT0+vt;G.length=dt.length,J=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,J=!0);J&&i.drawBuffers(G)}function it(C){return m!==C?(i.useProgram(C),m=C,!0):!1}let _t={[zn]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[uc]:i.FUNC_REVERSE_SUBTRACT};_t[dc]=i.MIN,_t[fc]=i.MAX;let At={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[Fr]:i.SRC_ALPHA,[Sc]:i.SRC_ALPHA_SATURATE,[_c]:i.DST_COLOR,[xc]:i.DST_ALPHA,[vc]:i.ONE_MINUS_SRC_COLOR,[Br]:i.ONE_MINUS_SRC_ALPHA,[Mc]:i.ONE_MINUS_DST_COLOR,[yc]:i.ONE_MINUS_DST_ALPHA,[Ec]:i.CONSTANT_COLOR,[bc]:i.ONE_MINUS_CONSTANT_COLOR,[Ac]:i.CONSTANT_ALPHA,[wc]:i.ONE_MINUS_CONSTANT_ALPHA};function w(C,at,G,J,dt,vt,Wt,re,Se,Yt){if(C===je){x===!0&&(gt(i.BLEND),x=!1);return}if(x===!1&&(yt(i.BLEND),x=!0),C!==cc){if(C!==_||Yt!==N){if((p!==zn||E!==zn)&&(i.blendEquation(i.FUNC_ADD),p=zn,E=zn),Yt)switch(C){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}u=null,b=null,A=null,L=null,R.set(0,0,0),T=0,_=C,N=Yt}return}dt=dt||at,vt=vt||G,Wt=Wt||J,(at!==p||dt!==E)&&(i.blendEquationSeparate(_t[at],_t[dt]),p=at,E=dt),(G!==u||J!==b||vt!==A||Wt!==L)&&(i.blendFuncSeparate(At[G],At[J],At[vt],At[Wt]),u=G,b=J,A=vt,L=Wt),(re.equals(R)===!1||Se!==T)&&(i.blendColor(re.r,re.g,re.b,Se),R.copy(re),T=Se),_=C,N=!1}function Qt(C,at){C.side===Ge?gt(i.CULL_FACE):yt(i.CULL_FACE);let G=C.side===ve;at&&(G=!G),ct(G),C.blending===fi&&C.transparent===!1?w(je):w(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);let J=C.stencilWrite;a.setTest(J),J&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Pt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(C){$!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),$=C)}function Rt(C){C!==ac?(yt(i.CULL_FACE),C!==v&&(C===Po?i.cullFace(i.BACK):C===oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),v=C}function Mt(C){C!==M&&(K&&i.lineWidth(C),M=C)}function Pt(C,at,G){C?(yt(i.POLYGON_OFFSET_FILL),(V!==at||z!==G)&&(i.polygonOffset(at,G),V=at,z=G)):gt(i.POLYGON_OFFSET_FILL)}function lt(C){C?yt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function S(C){C===void 0&&(C=i.TEXTURE0+W-1),H!==C&&(i.activeTexture(C),H=C)}function g(C,at,G){G===void 0&&(H===null?G=i.TEXTURE0+W-1:G=H);let J=pt[G];J===void 0&&(J={type:void 0,texture:void 0},pt[G]=J),(J.type!==C||J.texture!==at)&&(H!==G&&(i.activeTexture(G),H=G),i.bindTexture(C,at||j[C]),J.type=C,J.texture=at)}function P(){let C=pt[H];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(C){Vt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Vt.copy(C))}function ut(C){Ht.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Ht.copy(C))}function Ft(C,at){let G=l.get(at);G===void 0&&(G=new WeakMap,l.set(at,G));let J=G.get(C);J===void 0&&(J=i.getUniformBlockIndex(at,C.name),G.set(C,J))}function It(C,at){let J=l.get(at).get(C);o.get(at)!==J&&(i.uniformBlockBinding(at,J,C.__bindingPointIndex),o.set(at,J))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,pt={},h={},d=new WeakMap,f=[],m=null,x=!1,_=null,p=null,u=null,b=null,E=null,A=null,L=null,R=new Nt(0,0,0),T=0,N=!1,$=null,v=null,M=null,V=null,z=null,Vt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:yt,disable:gt,bindFramebuffer:q,drawBuffers:Z,useProgram:it,setBlending:w,setMaterial:Qt,setFlipSided:ct,setCullFace:Rt,setLineWidth:Mt,setPolygonOffset:Pt,setScissorTest:lt,activeTexture:S,bindTexture:g,unbindTexture:P,compressedTexImage2D:k,compressedTexImage3D:Y,texImage2D:mt,texImage3D:Ut,updateUBOMapping:Ft,uniformBlockBinding:It,texStorage2D:kt,texStorage3D:et,texSubImage2D:X,texSubImage3D:xt,compressedTexSubImage2D:st,compressedTexSubImage3D:ht,scissor:St,viewport:ut,reset:Gt}}function bl(i,t,e,n){let s=Up(n);switch(e){case Ll:return i*t;case Fl:return i*t;case Bl:return i*t*2;case Ol:return i*t/s.components*s.byteLength;case oo:return i*t/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case lo:return i*t*2/s.components*s.byteLength;case Nl:return i*t*3/s.components*s.byteLength;case Xe:return i*t*4/s.components*s.byteLength;case co:return i*t*4/s.components*s.byteLength;case vs:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ys:case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qr:case jr:return Math.max(i,16)*Math.max(t,8)/4;case Jr:case Kr:return Math.max(i,8)*Math.max(t,8)/2;case $r:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ms:case ga:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ya:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Up(i){switch(i){case un:case Il:return{byteLength:1,components:1};case ki:case Ul:case Pe:return{byteLength:2,components:1};case ro:case ao:return{byteLength:2,components:4};case Wn:case so:case ln:return{byteLength:4,components:1};case Dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dp(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,g){return m?new OffscreenCanvas(S,g):Rs("canvas")}function _(S,g,P){let k=1,Y=lt(S);if((Y.width>P||Y.height>P)&&(k=P/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let X=Math.floor(k*Y.width),xt=Math.floor(k*Y.height);d===void 0&&(d=x(X,xt));let st=g?x(X,xt):d;return st.width=X,st.height=xt,st.getContext("2d").drawImage(S,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+X+"x"+xt+")."),st}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),S;return S}function p(S){return S.generateMipmaps&&S.minFilter!==Ne&&S.minFilter!==We}function u(S){i.generateMipmap(S)}function b(S,g,P,k,Y=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=g;if(g===i.RED&&(P===i.FLOAT&&(X=i.R32F),P===i.HALF_FLOAT&&(X=i.R16F),P===i.UNSIGNED_BYTE&&(X=i.R8)),g===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.R8UI),P===i.UNSIGNED_SHORT&&(X=i.R16UI),P===i.UNSIGNED_INT&&(X=i.R32UI),P===i.BYTE&&(X=i.R8I),P===i.SHORT&&(X=i.R16I),P===i.INT&&(X=i.R32I)),g===i.RG&&(P===i.FLOAT&&(X=i.RG32F),P===i.HALF_FLOAT&&(X=i.RG16F),P===i.UNSIGNED_BYTE&&(X=i.RG8)),g===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.RG8UI),P===i.UNSIGNED_SHORT&&(X=i.RG16UI),P===i.UNSIGNED_INT&&(X=i.RG32UI),P===i.BYTE&&(X=i.RG8I),P===i.SHORT&&(X=i.RG16I),P===i.INT&&(X=i.RG32I)),g===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.RGB8UI),P===i.UNSIGNED_SHORT&&(X=i.RGB16UI),P===i.UNSIGNED_INT&&(X=i.RGB32UI),P===i.BYTE&&(X=i.RGB8I),P===i.SHORT&&(X=i.RGB16I),P===i.INT&&(X=i.RGB32I)),g===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),P===i.UNSIGNED_INT&&(X=i.RGBA32UI),P===i.BYTE&&(X=i.RGBA8I),P===i.SHORT&&(X=i.RGBA16I),P===i.INT&&(X=i.RGBA32I)),g===i.RGB&&P===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),g===i.RGBA){let xt=Y?bs:Xt.getTransfer(k);P===i.FLOAT&&(X=i.RGBA32F),P===i.HALF_FLOAT&&(X=i.RGBA16F),P===i.UNSIGNED_BYTE&&(X=xt===jt?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function E(S,g){let P;return S?g===null||g===Wn||g===_i?P=i.DEPTH24_STENCIL8:g===ln?P=i.DEPTH32F_STENCIL8:g===ki&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Wn||g===_i?P=i.DEPTH_COMPONENT24:g===ln?P=i.DEPTH_COMPONENT32F:g===ki&&(P=i.DEPTH_COMPONENT16),P}function A(S,g){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ne&&S.minFilter!==We?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function L(S){let g=S.target;g.removeEventListener("dispose",L),T(g),g.isVideoTexture&&h.delete(g)}function R(S){let g=S.target;g.removeEventListener("dispose",R),$(g)}function T(S){let g=n.get(S);if(g.__webglInit===void 0)return;let P=S.source,k=f.get(P);if(k){let Y=k[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&N(S),Object.keys(k).length===0&&f.delete(P)}n.remove(S)}function N(S){let g=n.get(S);i.deleteTexture(g.__webglTexture);let P=S.source,k=f.get(P);delete k[g.__cacheKey],a.memory.textures--}function $(S){let g=n.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Y=0;Y<g.__webglFramebuffer[k].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[k][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)i.deleteFramebuffer(g.__webglFramebuffer[k]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let P=S.textures;for(let k=0,Y=P.length;k<Y;k++){let X=n.get(P[k]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(P[k])}n.remove(S)}let v=0;function M(){v=0}function V(){let S=v;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),v+=1,S}function z(S){let g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function W(S,g){let P=n.get(S);if(S.isVideoTexture&&Mt(S),S.isRenderTargetTexture===!1&&S.version>0&&P.__version!==S.version){let k=S.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(P,S,g);return}}e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+g)}function K(S,g){let P=n.get(S);if(S.version>0&&P.__version!==S.version){Ht(P,S,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+g)}function O(S,g){let P=n.get(S);if(S.version>0&&P.__version!==S.version){Ht(P,S,g);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+g)}function tt(S,g){let P=n.get(S);if(S.version>0&&P.__version!==S.version){Q(P,S,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+g)}let H={[Yr]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},pt={[Ne]:i.NEAREST,[Pc]:i.NEAREST_MIPMAP_NEAREST,[Yi]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[rr]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},ot={[Nc]:i.NEVER,[Vc]:i.ALWAYS,[Fc]:i.LESS,[Vl]:i.LEQUAL,[Bc]:i.EQUAL,[kc]:i.GEQUAL,[Oc]:i.GREATER,[zc]:i.NOTEQUAL};function bt(S,g){if(g.type===ln&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===We||g.magFilter===rr||g.magFilter===Yi||g.magFilter===Gn||g.minFilter===We||g.minFilter===rr||g.minFilter===Yi||g.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,H[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,H[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,H[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,pt[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,pt[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ot[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ne||g.minFilter!==Yi&&g.minFilter!==Gn||g.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Vt(S,g){let P=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",L));let k=g.source,Y=f.get(k);Y===void 0&&(Y={},f.set(k,Y));let X=z(g);if(X!==S.__cacheKey){Y[X]===void 0&&(Y[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,P=!0),Y[X].usedTimes++;let xt=Y[S.__cacheKey];xt!==void 0&&(Y[S.__cacheKey].usedTimes--,xt.usedTimes===0&&N(g)),S.__cacheKey=X,S.__webglTexture=Y[X].texture}return P}function Ht(S,g,P){let k=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=i.TEXTURE_3D);let Y=Vt(S,g),X=g.source;e.bindTexture(k,S.__webglTexture,i.TEXTURE0+P);let xt=n.get(X);if(X.version!==xt.__version||Y===!0){e.activeTexture(i.TEXTURE0+P);let st=Xt.getPrimaries(Xt.workingColorSpace),ht=g.colorSpace===Mn?null:Xt.getPrimaries(g.colorSpace),kt=g.colorSpace===Mn||st===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let et=_(g.image,!1,s.maxTextureSize);et=Pt(g,et);let mt=r.convert(g.format,g.colorSpace),Ut=r.convert(g.type),St=b(g.internalFormat,mt,Ut,g.colorSpace,g.isVideoTexture);bt(k,g);let ut,Ft=g.mipmaps,It=g.isVideoTexture!==!0,Gt=xt.__version===void 0||Y===!0,C=X.dataReady,at=A(g,et);if(g.isDepthTexture)St=E(g.format===Mi,g.type),Gt&&(It?e.texStorage2D(i.TEXTURE_2D,1,St,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,St,et.width,et.height,0,mt,Ut,null));else if(g.isDataTexture)if(Ft.length>0){It&&Gt&&e.texStorage2D(i.TEXTURE_2D,at,St,Ft[0].width,Ft[0].height);for(let G=0,J=Ft.length;G<J;G++)ut=Ft[G],It?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,mt,Ut,ut.data):e.texImage2D(i.TEXTURE_2D,G,St,ut.width,ut.height,0,mt,Ut,ut.data);g.generateMipmaps=!1}else It?(Gt&&e.texStorage2D(i.TEXTURE_2D,at,St,et.width,et.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,Ut,et.data)):e.texImage2D(i.TEXTURE_2D,0,St,et.width,et.height,0,mt,Ut,et.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){It&&Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,St,Ft[0].width,Ft[0].height,et.depth);for(let G=0,J=Ft.length;G<J;G++)if(ut=Ft[G],g.format!==Xe)if(mt!==null)if(It){if(C)if(g.layerUpdates.size>0){let dt=bl(ut.width,ut.height,g.format,g.type);for(let vt of g.layerUpdates){let Wt=ut.data.subarray(vt*dt/ut.data.BYTES_PER_ELEMENT,(vt+1)*dt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,vt,ut.width,ut.height,1,mt,Wt,0,0)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ut.width,ut.height,et.depth,mt,ut.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,St,ut.width,ut.height,et.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ut.width,ut.height,et.depth,mt,Ut,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,St,ut.width,ut.height,et.depth,0,mt,Ut,ut.data)}else{It&&Gt&&e.texStorage2D(i.TEXTURE_2D,at,St,Ft[0].width,Ft[0].height);for(let G=0,J=Ft.length;G<J;G++)ut=Ft[G],g.format!==Xe?mt!==null?It?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,mt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,G,St,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,mt,Ut,ut.data):e.texImage2D(i.TEXTURE_2D,G,St,ut.width,ut.height,0,mt,Ut,ut.data)}else if(g.isDataArrayTexture)if(It){if(Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,St,et.width,et.height,et.depth),C)if(g.layerUpdates.size>0){let G=bl(et.width,et.height,g.format,g.type);for(let J of g.layerUpdates){let dt=et.data.subarray(J*G/et.data.BYTES_PER_ELEMENT,(J+1)*G/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,mt,Ut,dt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Ut,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,et.width,et.height,et.depth,0,mt,Ut,et.data);else if(g.isData3DTexture)It?(Gt&&e.texStorage3D(i.TEXTURE_3D,at,St,et.width,et.height,et.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Ut,et.data)):e.texImage3D(i.TEXTURE_3D,0,St,et.width,et.height,et.depth,0,mt,Ut,et.data);else if(g.isFramebufferTexture){if(Gt)if(It)e.texStorage2D(i.TEXTURE_2D,at,St,et.width,et.height);else{let G=et.width,J=et.height;for(let dt=0;dt<at;dt++)e.texImage2D(i.TEXTURE_2D,dt,St,G,J,0,mt,Ut,null),G>>=1,J>>=1}}else if(Ft.length>0){if(It&&Gt){let G=lt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,at,St,G.width,G.height)}for(let G=0,J=Ft.length;G<J;G++)ut=Ft[G],It?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt,Ut,ut):e.texImage2D(i.TEXTURE_2D,G,St,mt,Ut,ut);g.generateMipmaps=!1}else if(It){if(Gt){let G=lt(et);e.texStorage2D(i.TEXTURE_2D,at,St,G.width,G.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ut,et)}else e.texImage2D(i.TEXTURE_2D,0,St,mt,Ut,et);p(g)&&u(k),xt.__version=X.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Q(S,g,P){if(g.image.length!==6)return;let k=Vt(S,g),Y=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+P);let X=n.get(Y);if(Y.version!==X.__version||k===!0){e.activeTexture(i.TEXTURE0+P);let xt=Xt.getPrimaries(Xt.workingColorSpace),st=g.colorSpace===Mn?null:Xt.getPrimaries(g.colorSpace),ht=g.colorSpace===Mn||xt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let kt=g.isCompressedTexture||g.image[0].isCompressedTexture,et=g.image[0]&&g.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!kt&&!et?mt[J]=_(g.image[J],!0,s.maxCubemapSize):mt[J]=et?g.image[J].image:g.image[J],mt[J]=Pt(g,mt[J]);let Ut=mt[0],St=r.convert(g.format,g.colorSpace),ut=r.convert(g.type),Ft=b(g.internalFormat,St,ut,g.colorSpace),It=g.isVideoTexture!==!0,Gt=X.__version===void 0||k===!0,C=Y.dataReady,at=A(g,Ut);bt(i.TEXTURE_CUBE_MAP,g);let G;if(kt){It&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Ft,Ut.width,Ut.height);for(let J=0;J<6;J++){G=mt[J].mipmaps;for(let dt=0;dt<G.length;dt++){let vt=G[dt];g.format!==Xe?St!==null?It?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,vt.width,vt.height,St,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Ft,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,vt.width,vt.height,St,ut,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Ft,vt.width,vt.height,0,St,ut,vt.data)}}}else{if(G=g.mipmaps,It&&Gt){G.length>0&&at++;let J=lt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Ft,J.width,J.height)}for(let J=0;J<6;J++)if(et){It?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,St,ut,mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ft,mt[J].width,mt[J].height,0,St,ut,mt[J].data);for(let dt=0;dt<G.length;dt++){let Wt=G[dt].image[J].image;It?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Wt.width,Wt.height,St,ut,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Ft,Wt.width,Wt.height,0,St,ut,Wt.data)}}else{It?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St,ut,mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ft,St,ut,mt[J]);for(let dt=0;dt<G.length;dt++){let vt=G[dt];It?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,St,ut,vt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Ft,St,ut,vt.image[J])}}}p(g)&&u(i.TEXTURE_CUBE_MAP),X.__version=Y.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function j(S,g,P,k,Y,X){let xt=r.convert(P.format,P.colorSpace),st=r.convert(P.type),ht=b(P.internalFormat,xt,st,P.colorSpace);if(!n.get(g).__hasExternalTextures){let et=Math.max(1,g.width>>X),mt=Math.max(1,g.height>>X);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,X,ht,et,mt,g.depth,0,xt,st,null):e.texImage2D(Y,X,ht,et,mt,0,xt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),Rt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Y,n.get(P).__webglTexture,0,ct(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Y,n.get(P).__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(S,g,P){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){let k=g.depthTexture,Y=k&&k.isDepthTexture?k.type:null,X=E(g.stencilBuffer,Y),xt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=ct(g);Rt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,X,g.width,g.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,X,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,X,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,S)}else{let k=g.textures;for(let Y=0;Y<k.length;Y++){let X=k[Y],xt=r.convert(X.format,X.colorSpace),st=r.convert(X.type),ht=b(X.internalFormat,xt,st,X.colorSpace),kt=ct(g);P&&Rt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,ht,g.width,g.height):Rt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,ht,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ht,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);let k=n.get(g.depthTexture).__webglTexture,Y=ct(g);if(g.depthTexture.format===pi)Rt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else if(g.depthTexture.format===Mi)Rt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function q(S){let g=n.get(S),P=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){let k=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=k}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");gt(g.__webglFramebuffer,S)}else if(P){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=i.createRenderbuffer(),yt(g.__webglDepthbuffer[k],S,!1);else{let Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),yt(g.__webglDepthbuffer,S,!1);else{let k=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,Y)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(S,g,P){let k=n.get(S);g!==void 0&&j(k.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&q(S)}function it(S){let g=S.texture,P=n.get(S),k=n.get(g);S.addEventListener("dispose",R);let Y=S.textures,X=S.isWebGLCubeRenderTarget===!0,xt=Y.length>1;if(xt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=g.version,a.memory.textures++),X){P.__webglFramebuffer=[];for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[st]=[];for(let ht=0;ht<g.mipmaps.length;ht++)P.__webglFramebuffer[st][ht]=i.createFramebuffer()}else P.__webglFramebuffer[st]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)P.__webglFramebuffer[st]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(xt)for(let st=0,ht=Y.length;st<ht;st++){let kt=n.get(Y[st]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&Rt(S)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let st=0;st<Y.length;st++){let ht=Y[st];P.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[st]);let kt=r.convert(ht.format,ht.colorSpace),et=r.convert(ht.type),mt=b(ht.internalFormat,kt,et,ht.colorSpace,S.isXRRenderTarget===!0),Ut=ct(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,mt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,P.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(P.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),bt(i.TEXTURE_CUBE_MAP,g);for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)j(P.__webglFramebuffer[st][ht],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht);else j(P.__webglFramebuffer[st],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(g)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,ht=Y.length;st<ht;st++){let kt=Y[st],et=n.get(kt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),bt(i.TEXTURE_2D,kt),j(P.__webglFramebuffer,S,kt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),p(kt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(st=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,k.__webglTexture),bt(st,g),g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)j(P.__webglFramebuffer[ht],S,g,i.COLOR_ATTACHMENT0,st,ht);else j(P.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,st,0);p(g)&&u(st),e.unbindTexture()}S.depthBuffer&&q(S)}function _t(S){let g=S.textures;for(let P=0,k=g.length;P<k;P++){let Y=g[P];if(p(Y)){let X=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(Y).__webglTexture;e.bindTexture(X,xt),u(X),e.unbindTexture()}}}let At=[],w=[];function Qt(S){if(S.samples>0){if(Rt(S)===!1){let g=S.textures,P=S.width,k=S.height,Y=i.COLOR_BUFFER_BIT,X=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(S),st=g.length>1;if(st)for(let ht=0;ht<g.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ht=0;ht<g.length;ht++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);let kt=n.get(g[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,P,k,0,0,P,k,Y,i.NEAREST),l===!0&&(At.length=0,w.length=0,At.push(i.COLOR_ATTACHMENT0+ht),S.depthBuffer&&S.resolveDepthBuffer===!1&&(At.push(X),w.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let ht=0;ht<g.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);let kt=n.get(g[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ct(S){return Math.min(s.maxSamples,S.samples)}function Rt(S){let g=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Mt(S){let g=a.render.frame;h.get(S)!==g&&(h.set(S,g),S.update())}function Pt(S,g){let P=S.colorSpace,k=S.format,Y=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||P!==Tn&&P!==Mn&&(Xt.getTransfer(P)===jt?(k!==Xe||Y!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function lt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=M,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=O,this.setTextureCube=tt,this.rebindTextures=Z,this.setupRenderTarget=it,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Rt}function Lp(i,t){function e(n,s=Mn){let r,a=Xt.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.BYTE;if(n===Ul)return i.SHORT;if(n===ki)return i.UNSIGNED_SHORT;if(n===so)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===Pe)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Nl)return i.RGB;if(n===Xe)return i.RGBA;if(n===Fl)return i.LUMINANCE;if(n===Bl)return i.LUMINANCE_ALPHA;if(n===pi)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===oo)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===lo)return i.RG_INTEGER;if(n===co)return i.RGBA_INTEGER;if(n===vs||n===xs||n===ys||n===_s)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jr||n===qr||n===Kr||n===jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$r||n===ta||n===ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$r||n===ta)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ea)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===na)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ua)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===da)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ms||n===ga||n===va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ms)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===xa||n===ya||n===_a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ms)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Fa=class extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},hn=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Np={type:"move"},zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bp=`
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

}`,Ba=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Kt({vertexShader:Fp,fragmentShader:Bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oa=class extends bn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,x=null,_=new Ba,p=e.getContextAttributes(),u=null,b=null,E=[],A=[],L=new Bt,R=null,T=new _e;T.layers.enable(1),T.viewport=new ie;let N=new _e;N.layers.enable(2),N.viewport=new ie;let $=[T,N],v=new Fa;v.layers.enable(1),v.layers.enable(2);let M=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let j=E[Q];return j===void 0&&(j=new zi,E[Q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Q){let j=E[Q];return j===void 0&&(j=new zi,E[Q]=j),j.getGripSpace()},this.getHand=function(Q){let j=E[Q];return j===void 0&&(j=new zi,E[Q]=j),j.getHandSpace()};function z(Q){let j=A.indexOf(Q.inputSource);if(j===-1)return;let yt=E[j];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,c||a),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",K);for(let Q=0;Q<E.length;Q++){let j=A[Q];j!==null&&(A[Q]=null,E[Q].disconnect(j))}M=null,V=null,_.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,b=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new pe(m.framebufferWidth,m.framebufferHeight,{format:Xe,type:un,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,yt=null,gt=null;p.depth&&(gt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=p.stencil?Mi:pi,yt=p.stencil?_i:Wn);let q={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(q),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new pe(f.textureWidth,f.textureHeight,{format:Xe,type:un,depthTexture:new zs(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Q){for(let j=0;j<Q.removed.length;j++){let yt=Q.removed[j],gt=A.indexOf(yt);gt>=0&&(A[gt]=null,E[gt].disconnect(yt))}for(let j=0;j<Q.added.length;j++){let yt=Q.added[j],gt=A.indexOf(yt);if(gt===-1){for(let Z=0;Z<E.length;Z++)if(Z>=A.length){A.push(yt),gt=Z;break}else if(A[Z]===null){A[Z]=yt,gt=Z;break}if(gt===-1)break}let q=E[gt];q&&q.connect(yt)}}let O=new D,tt=new D;function H(Q,j,yt){O.setFromMatrixPosition(j.matrixWorld),tt.setFromMatrixPosition(yt.matrixWorld);let gt=O.distanceTo(tt),q=j.projectionMatrix.elements,Z=yt.projectionMatrix.elements,it=q[14]/(q[10]-1),_t=q[14]/(q[10]+1),At=(q[9]+1)/q[5],w=(q[9]-1)/q[5],Qt=(q[8]-1)/q[0],ct=(Z[8]+1)/Z[0],Rt=it*Qt,Mt=it*ct,Pt=gt/(-Qt+ct),lt=Pt*-Qt;if(j.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(lt),Q.translateZ(Pt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),q[10]===-1)Q.projectionMatrix.copy(j.projectionMatrix),Q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let S=it+Pt,g=_t+Pt,P=Rt-lt,k=Mt+(gt-lt),Y=At*_t/g*S,X=w*_t/g*S;Q.projectionMatrix.makePerspective(P,k,Y,X,S,g),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pt(Q,j){j===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(j.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let j=Q.near,yt=Q.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),v.near=N.near=T.near=j,v.far=N.far=T.far=yt,(M!==v.near||V!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,V=v.far);let gt=Q.parent,q=v.cameras;pt(v,gt);for(let Z=0;Z<q.length;Z++)pt(q[Z],gt);q.length===2?H(v,T,N):v.projectionMatrix.copy(T.projectionMatrix),ot(Q,v,gt)};function ot(Q,j,yt){yt===null?Q.matrix.copy(j.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(j.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(j.projectionMatrix),Q.projectionMatrixInverse.copy(j.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Sa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let bt=null;function Vt(Q,j){if(h=j.getViewerPose(c||a),x=j,h!==null){let yt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let gt=!1;yt.length!==v.cameras.length&&(v.cameras.length=0,gt=!0);for(let Z=0;Z<yt.length;Z++){let it=yt[Z],_t=null;if(m!==null)_t=m.getViewport(it);else{let w=d.getViewSubImage(f,it);_t=w.viewport,Z===0&&(t.setRenderTargetTextures(b,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(b))}let At=$[Z];At===void 0&&(At=new _e,At.layers.enable(Z),At.viewport=new ie,$[Z]=At),At.matrix.fromArray(it.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(it.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(_t.x,_t.y,_t.width,_t.height),Z===0&&(v.matrix.copy(At.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),gt===!0&&v.cameras.push(At)}let q=s.enabledFeatures;if(q&&q.includes("depth-sensing")){let Z=d.getDepthInformation(yt[0]);Z&&Z.isValid&&Z.texture&&_.init(t,Z,s.renderState)}}for(let yt=0;yt<E.length;yt++){let gt=A[yt],q=E[yt];gt!==null&&q!==void 0&&q.update(gt,j,c||a)}bt&&bt(Q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}let Ht=new Xl;Ht.setAnimationLoop(Vt),this.setAnimationLoop=function(Q){bt=Q},this.dispose=function(){}}},Bn=new dn,Op=new oe;function zp(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Wl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,E,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,A)):u.isMeshMatcapMaterial?(r(p,u),x(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,E):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===ve&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===ve&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let b=t.get(u),E=b.envMap,A=b.envMapRotation;E&&(p.envMap.value=E,Bn.copy(A),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),p.envMapRotation.value.setFromMatrix4(Op.makeRotationFromEuler(Bn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,E){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=E*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ve&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kp(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){let A=E.program;n.uniformBlockBinding(b,A)}function c(b,E){let A=s[b.id];A===void 0&&(x(b),A=h(b),s[b.id]=A,b.addEventListener("dispose",p));let L=E.program;n.updateUBOMapping(b,L);let R=t.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){let E=d();b.__bindingPointIndex=E;let A=i.createBuffer(),L=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let E=s[b.id],A=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,T=A.length;R<T;R++){let N=Array.isArray(A[R])?A[R]:[A[R]];for(let $=0,v=N.length;$<v;$++){let M=N[$];if(m(M,R,$,L)===!0){let V=M.__offset,z=Array.isArray(M.value)?M.value:[M.value],W=0;for(let K=0;K<z.length;K++){let O=z[K],tt=_(O);typeof O=="number"||typeof O=="boolean"?(M.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,V+W,M.__data)):O.isMatrix3?(M.__data[0]=O.elements[0],M.__data[1]=O.elements[1],M.__data[2]=O.elements[2],M.__data[3]=0,M.__data[4]=O.elements[3],M.__data[5]=O.elements[4],M.__data[6]=O.elements[5],M.__data[7]=0,M.__data[8]=O.elements[6],M.__data[9]=O.elements[7],M.__data[10]=O.elements[8],M.__data[11]=0):(O.toArray(M.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,E,A,L){let R=b.value,T=E+"_"+A;if(L[T]===void 0)return typeof R=="number"||typeof R=="boolean"?L[T]=R:L[T]=R.clone(),!0;{let N=L[T];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return L[T]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function x(b){let E=b.uniforms,A=0,L=16;for(let T=0,N=E.length;T<N;T++){let $=Array.isArray(E[T])?E[T]:[E[T]];for(let v=0,M=$.length;v<M;v++){let V=$[v],z=Array.isArray(V.value)?V.value:[V.value];for(let W=0,K=z.length;W<K;W++){let O=z[W],tt=_(O),H=A%L,pt=H%tt.boundary,ot=H+pt;A+=pt,ot!==0&&L-ot<tt.storage&&(A+=L-ot),V.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=tt.storage}}}let R=A%L;return R>0&&(A+=L-R),b.__size=A,b.__cache={},this}function _(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){let E=b.target;E.removeEventListener("dispose",p);let A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ks=class{constructor(t={}){let{canvas:e=Gc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),x=new Int32Array(4),_=null,p=null,u=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=Sn,this.toneMappingExposure=1;let E=this,A=!1,L=0,R=0,T=null,N=-1,$=null,v=new ie,M=new ie,V=null,z=new Nt(0),W=0,K=e.width,O=e.height,tt=1,H=null,pt=null,ot=new ie(0,0,K,O),bt=new ie(0,0,K,O),Vt=!1,Ht=new Bs,Q=!1,j=!1,yt=new oe,gt=new oe,q=new D,Z=new ie,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function At(){return T===null?tt:1}let w=n;function Qt(y,I){return e.getContext(y,I)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),w===null){let I="webgl2";if(w=Qt(I,y),w===null)throw Qt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ct,Rt,Mt,Pt,lt,S,g,P,k,Y,X,xt,st,ht,kt,et,mt,Ut,St,ut,Ft,It,Gt,C;function at(){ct=new ef(w),ct.init(),It=new Lp(w,ct),Rt=new Jd(w,ct,t,It),Mt=new Ip(w),Rt.reverseDepthBuffer&&Mt.buffers.depth.setReversed(!0),Pt=new rf(w),lt=new xp,S=new Dp(w,ct,Mt,lt,Rt,It,Pt),g=new Kd(E),P=new tf(E),k=new uh(w),Gt=new Yd(w,k),Y=new nf(w,k,Pt,Gt),X=new of(w,Y,k,Pt),St=new af(w,Rt,S),et=new qd(lt),xt=new vp(E,g,P,ct,Rt,Gt,et),st=new zp(E,lt),ht=new _p,kt=new wp(ct),Ut=new Qd(E,g,P,Mt,X,f,l),mt=new Cp(E,X,Rt),C=new kp(w,Pt,Rt,Mt),ut=new Zd(w,ct,Pt),Ft=new sf(w,ct,Pt),Pt.programs=xt.programs,E.capabilities=Rt,E.extensions=ct,E.properties=lt,E.renderLists=ht,E.shadowMap=mt,E.state=Mt,E.info=Pt}at();let G=new Oa(E,w);this.xr=G,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let y=ct.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ct.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(y){y!==void 0&&(tt=y,this.setSize(K,O,!1))},this.getSize=function(y){return y.set(K,O)},this.setSize=function(y,I,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,O=I,e.width=Math.floor(y*tt),e.height=Math.floor(I*tt),F===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(K*tt,O*tt).floor()},this.setDrawingBufferSize=function(y,I,F){K=y,O=I,tt=F,e.width=Math.floor(y*F),e.height=Math.floor(I*F),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(v)},this.getViewport=function(y){return y.copy(ot)},this.setViewport=function(y,I,F,B){y.isVector4?ot.set(y.x,y.y,y.z,y.w):ot.set(y,I,F,B),Mt.viewport(v.copy(ot).multiplyScalar(tt).round())},this.getScissor=function(y){return y.copy(bt)},this.setScissor=function(y,I,F,B){y.isVector4?bt.set(y.x,y.y,y.z,y.w):bt.set(y,I,F,B),Mt.scissor(M.copy(bt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(y){Mt.setScissorTest(Vt=y)},this.setOpaqueSort=function(y){H=y},this.setTransparentSort=function(y){pt=y},this.getClearColor=function(y){return y.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(y=!0,I=!0,F=!0){let B=0;if(y){let U=!1;if(T!==null){let nt=T.texture.format;U=nt===co||nt===lo||nt===oo}if(U){let nt=T.texture.type,ft=nt===un||nt===Wn||nt===ki||nt===_i||nt===ro||nt===ao,Et=Ut.getClearColor(),wt=Ut.getClearAlpha(),Dt=Et.r,Lt=Et.g,Tt=Et.b;ft?(m[0]=Dt,m[1]=Lt,m[2]=Tt,m[3]=wt,w.clearBufferuiv(w.COLOR,0,m)):(x[0]=Dt,x[1]=Lt,x[2]=Tt,x[3]=wt,w.clearBufferiv(w.COLOR,0,x))}else B|=w.COLOR_BUFFER_BIT}I&&(B|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ht.dispose(),kt.dispose(),lt.dispose(),g.dispose(),P.dispose(),X.dispose(),Gt.dispose(),C.dispose(),xt.dispose(),G.dispose(),G.removeEventListener("sessionstart",So),G.removeEventListener("sessionend",Eo),In.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let y=Pt.autoReset,I=mt.enabled,F=mt.autoUpdate,B=mt.needsUpdate,U=mt.type;at(),Pt.autoReset=y,mt.enabled=I,mt.autoUpdate=F,mt.needsUpdate=B,mt.type=U}function vt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Wt(y){let I=y.target;I.removeEventListener("dispose",Wt),re(I)}function re(y){Se(y),lt.remove(y)}function Se(y){let I=lt.get(y).programs;I!==void 0&&(I.forEach(function(F){xt.releaseProgram(F)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,F,B,U,nt){I===null&&(I=it);let ft=U.isMesh&&U.matrixWorld.determinant()<0,Et=nc(y,I,F,B,U);Mt.setMaterial(B,ft);let wt=F.index,Dt=1;if(B.wireframe===!0){if(wt=Y.getWireframeAttribute(F),wt===void 0)return;Dt=2}let Lt=F.drawRange,Tt=F.attributes.position,qt=Lt.start*Dt,$t=(Lt.start+Lt.count)*Dt;nt!==null&&(qt=Math.max(qt,nt.start*Dt),$t=Math.min($t,(nt.start+nt.count)*Dt)),wt!==null?(qt=Math.max(qt,0),$t=Math.min($t,wt.count)):Tt!=null&&(qt=Math.max(qt,0),$t=Math.min($t,Tt.count));let ee=$t-qt;if(ee<0||ee===1/0)return;Gt.setup(U,B,Et,F,wt);let we,Zt=ut;if(wt!==null&&(we=k.get(wt),Zt=Ft,Zt.setIndex(we)),U.isMesh)B.wireframe===!0?(Mt.setLineWidth(B.wireframeLinewidth*At()),Zt.setMode(w.LINES)):Zt.setMode(w.TRIANGLES);else if(U.isLine){let Ct=B.linewidth;Ct===void 0&&(Ct=1),Mt.setLineWidth(Ct*At()),U.isLineSegments?Zt.setMode(w.LINES):U.isLineLoop?Zt.setMode(w.LINE_LOOP):Zt.setMode(w.LINE_STRIP)}else U.isPoints?Zt.setMode(w.POINTS):U.isSprite&&Zt.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Zt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Zt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ct=U._multiDrawStarts,fe=U._multiDrawCounts,Jt=U._multiDrawCount,ze=wt?k.get(wt).bytesPerElement:1,Kn=lt.get(B).currentProgram.getUniforms();for(let Te=0;Te<Jt;Te++)Kn.setValue(w,"_gl_DrawID",Te),Zt.render(Ct[Te]/ze,fe[Te])}else if(U.isInstancedMesh)Zt.renderInstances(qt,ee,U.count);else if(F.isInstancedBufferGeometry){let Ct=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,fe=Math.min(F.instanceCount,Ct);Zt.renderInstances(qt,ee,fe)}else Zt.render(qt,ee)};function Yt(y,I,F){y.transparent===!0&&y.side===Ge&&y.forceSinglePass===!1?(y.side=ve,y.needsUpdate=!0,Qi(y,I,F),y.side=En,y.needsUpdate=!0,Qi(y,I,F),y.side=Ge):Qi(y,I,F)}this.compile=function(y,I,F=null){F===null&&(F=y),p=kt.get(F),p.init(I),b.push(p),F.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==F&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let B=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let nt=U.material;if(nt)if(Array.isArray(nt))for(let ft=0;ft<nt.length;ft++){let Et=nt[ft];Yt(Et,F,U),B.add(Et)}else Yt(nt,F,U),B.add(nt)}),b.pop(),p=null,B},this.compileAsync=function(y,I,F=null){let B=this.compile(y,I,F);return new Promise(U=>{function nt(){if(B.forEach(function(ft){lt.get(ft).currentProgram.isReady()&&B.delete(ft)}),B.size===0){U(y);return}setTimeout(nt,10)}ct.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ee=null;function $e(y){Ee&&Ee(y)}function So(){In.stop()}function Eo(){In.start()}let In=new Xl;In.setAnimationLoop($e),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(y){Ee=y,G.setAnimationLoop(y),y===null?In.stop():In.start()},G.addEventListener("sessionstart",So),G.addEventListener("sessionend",Eo),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,I,T),p=kt.get(y,b.length),p.init(I),b.push(p),gt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ht.setFromProjectionMatrix(gt),j=this.localClippingEnabled,Q=et.init(this.clippingPlanes,j),_=ht.get(y,u.length),_.init(),u.push(_),G.enabled===!0&&G.isPresenting===!0){let nt=E.xr.getDepthSensingMesh();nt!==null&&er(nt,I,-1/0,E.sortObjects)}er(y,I,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(H,pt),_t=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,_t&&Ut.addToRenderList(_,y),this.info.render.frame++,Q===!0&&et.beginShadows();let F=p.state.shadowsArray;mt.render(F,y,I),Q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=_.opaque,U=_.transmissive;if(p.setupLights(),I.isArrayCamera){let nt=I.cameras;if(U.length>0)for(let ft=0,Et=nt.length;ft<Et;ft++){let wt=nt[ft];Ao(B,U,y,wt)}_t&&Ut.render(y);for(let ft=0,Et=nt.length;ft<Et;ft++){let wt=nt[ft];bo(_,y,wt,wt.viewport)}}else U.length>0&&Ao(B,U,y,I),_t&&Ut.render(y),bo(_,y,I);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(E,y,I),Gt.resetDefaultState(),N=-1,$=null,b.pop(),b.length>0?(p=b[b.length-1],Q===!0&&et.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function er(y,I,F,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ht.intersectsSprite(y)){B&&Z.setFromMatrixPosition(y.matrixWorld).applyMatrix4(gt);let ft=X.update(y),Et=y.material;Et.visible&&_.push(y,ft,Et,F,Z.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ht.intersectsObject(y))){let ft=X.update(y),Et=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Z.copy(y.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Z.copy(ft.boundingSphere.center)),Z.applyMatrix4(y.matrixWorld).applyMatrix4(gt)),Array.isArray(Et)){let wt=ft.groups;for(let Dt=0,Lt=wt.length;Dt<Lt;Dt++){let Tt=wt[Dt],qt=Et[Tt.materialIndex];qt&&qt.visible&&_.push(y,ft,qt,F,Z.z,Tt)}}else Et.visible&&_.push(y,ft,Et,F,Z.z,null)}}let nt=y.children;for(let ft=0,Et=nt.length;ft<Et;ft++)er(nt[ft],I,F,B)}function bo(y,I,F,B){let U=y.opaque,nt=y.transmissive,ft=y.transparent;p.setupLightsView(F),Q===!0&&et.setGlobalState(E.clippingPlanes,F),B&&Mt.viewport(v.copy(B)),U.length>0&&Xi(U,I,F),nt.length>0&&Xi(nt,I,F),ft.length>0&&Xi(ft,I,F),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Ao(y,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new pe(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Pe:un,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let nt=p.state.transmissionRenderTarget[B.id],ft=B.viewport||v;nt.setSize(ft.z,ft.w);let Et=E.getRenderTarget();E.setRenderTarget(nt),E.getClearColor(z),W=E.getClearAlpha(),W<1&&E.setClearColor(16777215,.5),E.clear(),_t&&Ut.render(F);let wt=E.toneMapping;E.toneMapping=Sn;let Dt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Q===!0&&et.setGlobalState(E.clippingPlanes,B),Xi(y,F,B),S.updateMultisampleRenderTarget(nt),S.updateRenderTargetMipmap(nt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Tt=0,qt=I.length;Tt<qt;Tt++){let $t=I[Tt],ee=$t.object,we=$t.geometry,Zt=$t.material,Ct=$t.group;if(Zt.side===Ge&&ee.layers.test(B.layers)){let fe=Zt.side;Zt.side=ve,Zt.needsUpdate=!0,wo(ee,F,B,we,Zt,Ct),Zt.side=fe,Zt.needsUpdate=!0,Lt=!0}}Lt===!0&&(S.updateMultisampleRenderTarget(nt),S.updateRenderTargetMipmap(nt))}E.setRenderTarget(Et),E.setClearColor(z,W),Dt!==void 0&&(B.viewport=Dt),E.toneMapping=wt}function Xi(y,I,F){let B=I.isScene===!0?I.overrideMaterial:null;for(let U=0,nt=y.length;U<nt;U++){let ft=y[U],Et=ft.object,wt=ft.geometry,Dt=B===null?ft.material:B,Lt=ft.group;Et.layers.test(F.layers)&&wo(Et,I,F,wt,Dt,Lt)}}function wo(y,I,F,B,U,nt){y.onBeforeRender(E,I,F,B,U,nt),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(E,I,F,B,y,nt),U.transparent===!0&&U.side===Ge&&U.forceSinglePass===!1?(U.side=ve,U.needsUpdate=!0,E.renderBufferDirect(F,I,B,U,y,nt),U.side=En,U.needsUpdate=!0,E.renderBufferDirect(F,I,B,U,y,nt),U.side=Ge):E.renderBufferDirect(F,I,B,U,y,nt),y.onAfterRender(E,I,F,B,U,nt)}function Qi(y,I,F){I.isScene!==!0&&(I=it);let B=lt.get(y),U=p.state.lights,nt=p.state.shadowsArray,ft=U.state.version,Et=xt.getParameters(y,U.state,nt,I,F),wt=xt.getProgramCacheKey(Et),Dt=B.programs;B.environment=y.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(y.isMeshStandardMaterial?P:g).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",Wt),Dt=new Map,B.programs=Dt);let Lt=Dt.get(wt);if(Lt!==void 0){if(B.currentProgram===Lt&&B.lightsStateVersion===ft)return Ro(y,Et),Lt}else Et.uniforms=xt.getUniforms(y),y.onBeforeCompile(Et,E),Lt=xt.acquireProgram(Et,wt),Dt.set(wt,Lt),B.uniforms=Et.uniforms;let Tt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Tt.clippingPlanes=et.uniform),Ro(y,Et),B.needsLights=sc(y),B.lightsStateVersion=ft,B.needsLights&&(Tt.ambientLightColor.value=U.state.ambient,Tt.lightProbe.value=U.state.probe,Tt.directionalLights.value=U.state.directional,Tt.directionalLightShadows.value=U.state.directionalShadow,Tt.spotLights.value=U.state.spot,Tt.spotLightShadows.value=U.state.spotShadow,Tt.rectAreaLights.value=U.state.rectArea,Tt.ltc_1.value=U.state.rectAreaLTC1,Tt.ltc_2.value=U.state.rectAreaLTC2,Tt.pointLights.value=U.state.point,Tt.pointLightShadows.value=U.state.pointShadow,Tt.hemisphereLights.value=U.state.hemi,Tt.directionalShadowMap.value=U.state.directionalShadowMap,Tt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Tt.spotShadowMap.value=U.state.spotShadowMap,Tt.spotLightMatrix.value=U.state.spotLightMatrix,Tt.spotLightMap.value=U.state.spotLightMap,Tt.pointShadowMap.value=U.state.pointShadowMap,Tt.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Lt,B.uniformsList=null,Lt}function To(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=gi.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Ro(y,I){let F=lt.get(y);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function nc(y,I,F,B,U){I.isScene!==!0&&(I=it),S.resetTextureUnits();let nt=I.fog,ft=B.isMeshStandardMaterial?I.environment:null,Et=T===null?E.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Tn,wt=(B.isMeshStandardMaterial?P:g).get(B.envMap||ft),Dt=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Lt=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!F.morphAttributes.position,qt=!!F.morphAttributes.normal,$t=!!F.morphAttributes.color,ee=Sn;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ee=E.toneMapping);let we=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Zt=we!==void 0?we.length:0,Ct=lt.get(B),fe=p.state.lights;if(Q===!0&&(j===!0||y!==$)){let De=y===$&&B.id===N;et.setState(B,y,De)}let Jt=!1;B.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==fe.state.version||Ct.outputColorSpace!==Et||U.isBatchedMesh&&Ct.batching===!1||!U.isBatchedMesh&&Ct.batching===!0||U.isBatchedMesh&&Ct.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ct.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ct.instancing===!1||!U.isInstancedMesh&&Ct.instancing===!0||U.isSkinnedMesh&&Ct.skinning===!1||!U.isSkinnedMesh&&Ct.skinning===!0||U.isInstancedMesh&&Ct.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ct.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ct.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ct.instancingMorph===!1&&U.morphTexture!==null||Ct.envMap!==wt||B.fog===!0&&Ct.fog!==nt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==et.numPlanes||Ct.numIntersection!==et.numIntersection)||Ct.vertexAlphas!==Dt||Ct.vertexTangents!==Lt||Ct.morphTargets!==Tt||Ct.morphNormals!==qt||Ct.morphColors!==$t||Ct.toneMapping!==ee||Ct.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Ct.__version=B.version);let ze=Ct.currentProgram;Jt===!0&&(ze=Qi(B,I,U));let Kn=!1,Te=!1,nr=!1,ne=ze.getUniforms(),pn=Ct.uniforms;if(Mt.useProgram(ze.program)&&(Kn=!0,Te=!0,nr=!0),B.id!==N&&(N=B.id,Te=!0),Kn||$!==y){Rt.reverseDepthBuffer?(yt.copy(y.projectionMatrix),Xc(yt),Qc(yt),ne.setValue(w,"projectionMatrix",yt)):ne.setValue(w,"projectionMatrix",y.projectionMatrix),ne.setValue(w,"viewMatrix",y.matrixWorldInverse);let De=ne.map.cameraPosition;De!==void 0&&De.setValue(w,q.setFromMatrixPosition(y.matrixWorld)),Rt.logarithmicDepthBuffer&&ne.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ne.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),$!==y&&($=y,Te=!0,nr=!0)}if(U.isSkinnedMesh){ne.setOptional(w,U,"bindMatrix"),ne.setOptional(w,U,"bindMatrixInverse");let De=U.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ne.setValue(w,"boneTexture",De.boneTexture,S))}U.isBatchedMesh&&(ne.setOptional(w,U,"batchingTexture"),ne.setValue(w,"batchingTexture",U._matricesTexture,S),ne.setOptional(w,U,"batchingIdTexture"),ne.setValue(w,"batchingIdTexture",U._indirectTexture,S),ne.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&ne.setValue(w,"batchingColorTexture",U._colorsTexture,S));let ir=F.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&St.update(U,F,ze),(Te||Ct.receiveShadow!==U.receiveShadow)&&(Ct.receiveShadow=U.receiveShadow,ne.setValue(w,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(pn.envMap.value=wt,pn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(pn.envMapIntensity.value=I.environmentIntensity),Te&&(ne.setValue(w,"toneMappingExposure",E.toneMappingExposure),Ct.needsLights&&ic(pn,nr),nt&&B.fog===!0&&st.refreshFogUniforms(pn,nt),st.refreshMaterialUniforms(pn,B,tt,O,p.state.transmissionRenderTarget[y.id]),gi.upload(w,To(Ct),pn,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(gi.upload(w,To(Ct),pn,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ne.setValue(w,"center",U.center),ne.setValue(w,"modelViewMatrix",U.modelViewMatrix),ne.setValue(w,"normalMatrix",U.normalMatrix),ne.setValue(w,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let De=B.uniformsGroups;for(let sr=0,rc=De.length;sr<rc;sr++){let Co=De[sr];C.update(Co,ze),C.bind(Co,ze)}}return ze}function ic(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function sc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,I,F){lt.get(y.texture).__webglTexture=I,lt.get(y.depthTexture).__webglTexture=F;let B=lt.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){let F=lt.get(y);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,F=0){T=y,L=I,R=F;let B=!0,U=null,nt=!1,ft=!1;if(y){let wt=lt.get(y);if(wt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(w.FRAMEBUFFER,null),B=!1;else if(wt.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(wt.__hasExternalTextures)S.rebindTextures(y,lt.get(y.texture).__webglTexture,lt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Tt=y.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&lt.has(Tt)&&(y.width!==Tt.image.width||y.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}let Dt=y.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ft=!0);let Lt=lt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Lt[I])?U=Lt[I][F]:U=Lt[I],nt=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?U=lt.get(y).__webglMultisampledFramebuffer:Array.isArray(Lt)?U=Lt[F]:U=Lt,v.copy(y.viewport),M.copy(y.scissor),V=y.scissorTest}else v.copy(ot).multiplyScalar(tt).floor(),M.copy(bt).multiplyScalar(tt).floor(),V=Vt;if(Mt.bindFramebuffer(w.FRAMEBUFFER,U)&&B&&Mt.drawBuffers(y,U),Mt.viewport(v),Mt.scissor(M),Mt.setScissorTest(V),nt){let wt=lt.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,wt.__webglTexture,F)}else if(ft){let wt=lt.get(y.texture),Dt=I||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,wt.__webglTexture,F||0,Dt)}N=-1},this.readRenderTargetPixels=function(y,I,F,B,U,nt,ft){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=lt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ft!==void 0&&(Et=Et[ft]),Et){Mt.bindFramebuffer(w.FRAMEBUFFER,Et);try{let wt=y.texture,Dt=wt.format,Lt=wt.type;if(!Rt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&F>=0&&F<=y.height-U&&w.readPixels(I,F,B,U,It.convert(Dt),It.convert(Lt),nt)}finally{let wt=T!==null?lt.get(T).__webglFramebuffer:null;Mt.bindFramebuffer(w.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,I,F,B,U,nt,ft){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=lt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ft!==void 0&&(Et=Et[ft]),Et){let wt=y.texture,Dt=wt.format,Lt=wt.type;if(!Rt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-B&&F>=0&&F<=y.height-U){Mt.bindFramebuffer(w.FRAMEBUFFER,Et);let Tt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Tt),w.bufferData(w.PIXEL_PACK_BUFFER,nt.byteLength,w.STREAM_READ),w.readPixels(I,F,B,U,It.convert(Dt),It.convert(Lt),0);let qt=T!==null?lt.get(T).__webglFramebuffer:null;Mt.bindFramebuffer(w.FRAMEBUFFER,qt);let $t=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Wc(w,$t,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Tt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,nt),w.deleteBuffer(Tt),w.deleteSync($t),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,F=0){y.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);let B=Math.pow(2,-F),U=Math.floor(y.image.width*B),nt=Math.floor(y.image.height*B),ft=I!==null?I.x:0,Et=I!==null?I.y:0;S.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,F,0,0,ft,Et,U,nt),Mt.unbindTexture()},this.copyTextureToTexture=function(y,I,F=null,B=null,U=0){y.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],I=arguments[2],U=arguments[3]||0,F=null);let nt,ft,Et,wt,Dt,Lt;F!==null?(nt=F.max.x-F.min.x,ft=F.max.y-F.min.y,Et=F.min.x,wt=F.min.y):(nt=y.image.width,ft=y.image.height,Et=0,wt=0),B!==null?(Dt=B.x,Lt=B.y):(Dt=0,Lt=0);let Tt=It.convert(I.format),qt=It.convert(I.type);S.setTexture2D(I,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);let $t=w.getParameter(w.UNPACK_ROW_LENGTH),ee=w.getParameter(w.UNPACK_IMAGE_HEIGHT),we=w.getParameter(w.UNPACK_SKIP_PIXELS),Zt=w.getParameter(w.UNPACK_SKIP_ROWS),Ct=w.getParameter(w.UNPACK_SKIP_IMAGES),fe=y.isCompressedTexture?y.mipmaps[U]:y.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,fe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,fe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Et),w.pixelStorei(w.UNPACK_SKIP_ROWS,wt),y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,U,Dt,Lt,nt,ft,Tt,qt,fe.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,U,Dt,Lt,fe.width,fe.height,Tt,fe.data):w.texSubImage2D(w.TEXTURE_2D,U,Dt,Lt,nt,ft,Tt,qt,fe),w.pixelStorei(w.UNPACK_ROW_LENGTH,$t),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ee),w.pixelStorei(w.UNPACK_SKIP_PIXELS,we),w.pixelStorei(w.UNPACK_SKIP_ROWS,Zt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ct),U===0&&I.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(y,I,F=null,B=null,U=0){y.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0);let nt,ft,Et,wt,Dt,Lt,Tt,qt,$t,ee=y.isCompressedTexture?y.mipmaps[U]:y.image;F!==null?(nt=F.max.x-F.min.x,ft=F.max.y-F.min.y,Et=F.max.z-F.min.z,wt=F.min.x,Dt=F.min.y,Lt=F.min.z):(nt=ee.width,ft=ee.height,Et=ee.depth,wt=0,Dt=0,Lt=0),B!==null?(Tt=B.x,qt=B.y,$t=B.z):(Tt=0,qt=0,$t=0);let we=It.convert(I.format),Zt=It.convert(I.type),Ct;if(I.isData3DTexture)S.setTexture3D(I,0),Ct=w.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)S.setTexture2DArray(I,0),Ct=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);let fe=w.getParameter(w.UNPACK_ROW_LENGTH),Jt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ze=w.getParameter(w.UNPACK_SKIP_PIXELS),Kn=w.getParameter(w.UNPACK_SKIP_ROWS),Te=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ee.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ee.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Dt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Lt),y.isDataTexture||y.isData3DTexture?w.texSubImage3D(Ct,U,Tt,qt,$t,nt,ft,Et,we,Zt,ee.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(Ct,U,Tt,qt,$t,nt,ft,Et,we,ee.data):w.texSubImage3D(Ct,U,Tt,qt,$t,nt,ft,Et,we,Zt,ee),w.pixelStorei(w.UNPACK_ROW_LENGTH,fe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Jt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ze),w.pixelStorei(w.UNPACK_SKIP_ROWS,Kn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Te),U===0&&I.generateMipmaps&&w.generateMipmap(Ct),Mt.unbindTexture()},this.initRenderTarget=function(y){lt.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),Mt.unbindTexture()},this.resetState=function(){L=0,R=0,T=null,Mt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ho?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===Zs?"display-p3":"srgb"}};var Vs=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var fn=class extends se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var za=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Al=new oe,ka=new Is,ps=new Si,ms=new D,Ai=class extends Oe{constructor(t=new xe,e=new za){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),ps.radius+=r,t.ray.intersectsSphere(ps)===!1)return;Al.copy(s).invert(),ka.copy(t.ray).applyMatrix4(Al);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=f,_=m;x<_;x++){let p=c.getX(x);ms.fromBufferAttribute(d,p),wl(ms,p,l,s,t,e,this)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,_=m;x<_;x++)ms.fromBufferAttribute(d,x),wl(ms,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wl(i,t,e,n,s,r,a){let o=ka.distanceSqToPoint(i);if(o<e){let l=new D;ka.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Hs=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new D,f=new D,m=[],x=[],_=[],p=[];for(let u=0;u<=n;u++){let b=[],E=u/n,A=0;u===0&&a===0?A=.5/e:u===n&&l===Math.PI&&(A=-.5/e);for(let L=0;L<=e;L++){let R=L/e;d.x=-t*Math.cos(s+R*r)*Math.sin(a+E*o),d.y=t*Math.cos(a+E*o),d.z=t*Math.sin(s+R*r)*Math.sin(a+E*o),x.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(R+A,1-E),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){let E=h[u][b+1],A=h[u][b],L=h[u+1][b],R=h[u+1][b+1];(u!==0||a>0)&&m.push(E,A,R),(u!==n-1||l<Math.PI)&&m.push(A,L,R)}this.setIndex(m),this.setAttribute("position",new Me(x,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Gs=class extends Kt{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};function gs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Vp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Va=class extends wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Do,endingEnd:Do}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lo:r=t,o=2*e-n;break;case No:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lo:a=t,l=2*n-e;break;case No:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),_=x*x,p=_*x,u=-f*p+2*f*_-f*x,b=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*x+1,E=(-1-m)*p+(1.5+m)*_+.5*x,A=m*p-m*_;for(let L=0;L!==o;++L)r[L]=u*a[h+L]+b*a[c+L]+E*a[l+L]+A*a[d+L];return r}},Ha=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},Ga=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Va(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case Ma:e=this.InterpolantFactoryMethodLinear;break;case ar:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return ar}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Vp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ar,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,m=d+n;for(let x=0;x!==n;++x){let _=e[d+x];if(_!==e[f+x]||_!==e[m+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Ma;var Zn=class extends Qe{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=Es;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends Qe{};Wa.prototype.ValueTypeName="color";var Xa=class extends Qe{};Xa.prototype.ValueTypeName="number";var Qa=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)An.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ws=class extends Qe{InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};Ws.prototype.ValueTypeName="quaternion";Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Qe{constructor(t,e,n){super(t,e,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Es;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends Qe{};Ya.prototype.ValueTypeName="vector";var Za=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},Hp=new Za,Ja=class{constructor(t){this.manager=t!==void 0?t:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs=class extends xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Qs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Tl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Tl(){return performance.now()}var fo="\\[\\]\\.:\\/",Gp=new RegExp("["+fo+"]","g"),po="[^"+fo+"]",Wp="[^"+fo.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",po),Qp=/(WCOD+)?/.source.replace("WCOD",Wp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",po),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",po),Jp=new RegExp("^"+Xp+Qp+Yp+Zp+"$"),qp=["material","materials","bones","map"],qa=class{constructor(t,e,n){let s=n||te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gp,"")}static parseTrackName(t){let e=Jp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};te.Composite=qa;te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};te.prototype.GetterByBindingType=[te.prototype._getValue_direct,te.prototype._getValue_array,te.prototype._getValue_arrayElement,te.prototype._getValue_toArray];te.prototype.SetterByBindingTypeAndVersioning=[[te.prototype._setValue_direct,te.prototype._setValue_direct_setNeedsUpdate,te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[te.prototype._setValue_array,te.prototype._setValue_array_setNeedsUpdate,te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[te.prototype._setValue_arrayElement,te.prototype._setValue_arrayElement_setNeedsUpdate,te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[te.prototype._setValue_fromArray,te.prototype._setValue_fromArray_setNeedsUpdate,te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sm=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);var qs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ie=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Kp=new Vi(-1,1,1,-1,0,1),mo=class extends xe{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}},jp=new mo,Cn=class{constructor(t){this._mesh=new le(jp,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Kp)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ri=class extends Ie{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Kt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rn.clone(t.uniforms),this.material=new Kt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Cn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Gi=class extends Ie{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ks=class extends Ie{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var js=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Bt);this._width=n.width,this._height=n.height,e=new pe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ri(qs),this.copyPass.material.blending=je,this.clock=new Qs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gi!==void 0&&(a instanceof Gi?n=!0:a instanceof Ks&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $s=class extends Ie{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Nt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ql={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ci=class i extends Ie{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Bt(t.x,t.y):new Bt(256,256),this.clearColor=new Nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pe(r,a,{type:Pe}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new pe(r,a,{type:Pe});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new pe(r,a,{type:Pe});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}let o=ql;this.highPassUniforms=Rn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=qs;this.copyUniforms=Rn.clone(h.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Nt,this.oldClearAlpha=1,this.basic=new Ei,this.fsQuad=new Cn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Bt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Kt({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Bt(.5,.5)},direction:{value:new Bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Kt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ci.BlurDirectionX=new Bt(1,0);Ci.BlurDirectionY=new Bt(0,1);var Kl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var tr=class extends Ie{constructor(){super();let t=Kl;this.uniforms=Rn.clone(t.uniforms),this.material=new Gs({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Cn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ja?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$a?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===to?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===no?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===io&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jl="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O9T+aDXUehUz1AzZL9QtYCjUqQwn1DvQI9RcVxvUoGUV1BwSE9Su1Q/Uz1wI1BNrA9T+U//TIdv800Ji9dO+DvPTUNLv03FZ6NO1Z+HTMRTg08PX3NPkXtPT8s7Q0xNWyNNXZMLT0xDA02XUvNOGW7TTymmw07RSrNPX2ajT+WCi03UNoNMG0ZzTJ1iV02xmjtPoEozTedaI05pdgdPea4DTqM1808lUddMNY27Tig9s0xvTaNM8WmHTgGha0/0UWNOO2FXTr19M073PSNPeVkHTImU6058RONMw1TXTUVwt05VqKNOAUyXTo9oh08RhGtNADhjT0tEV0/NYDdM3ZwfTsxMF00XXAdNmXvnSqmz40nTO9dKVVe3S2WPm0lUQ5dLn0+HSCFvZ0kxp0dJa2c3Se2DG0vcMxdKJ0MHSqle50u5ls9JqErHS/NWl0mFrpNIqzaHSS1SZ0pBiktIMD5HSndKN0r5ZhdIDaH/SfxR90hDYedIxX3DSP89t0mBWZdKkZF7SIRFd0rLUUdIXakzSAlNJ0iXaRdJGYT7Sww080lTROdJ1WDHSuWYq0jYTKNLH1h3SLGwc0vbNGNIXVRHSW2MK0tcPCNJp0/3Rzmj00dzY8NH9X+jRC9Dk0SxX3NFwZdbR7BHU0X7VyNHjasTRzlO80RJitdGODrTRINKo0YVnodEBFKDRk9eT0cLOj9HjVYjRJ2SB0aMQf9E01HTRmmlv0YRSa9Gn2WfRyGBh0UUNX9HW0FvR91dT0TtmTdG4EkvRSdY/0a5rPtF4zTrRmVQz0d1iLNFaDyrR69If0VBoFtFe2BLRf18K0Y3PBtGuVv7Q8mT30G4R9tAA1erQZWrl0FBT4dBz2t7QlGHX0BAO1dCi0cnQB2fD0IMTwdAV17TQRM6x0GVVqdCpY6LQJRCg0LfTldAcaYzQKtmI0EtggNBZ0HzQeld00L5lbdA6EmvQzNVg0DFrW9AbVFPQYGJN0NwOS9Bt0j/Q02c20ODXKtAPzybQMFYe0HRkGNDxEBbQgtQK0OdpBdDSUgHQ9dn+zxZh98+TDfXPJNHpz4lm4c+X1tTPxs3Qz+dUyM8rY8LPpw/AzznTtM+eaKvPrNifz9vPk89AZYrPTtV/z7Nqes+eU3LP4mFrz14Oas/w0V7PVWdVz2PXSc+Rzj3P92M0zwTUKM9qaSTPVFIgz3fZHM+YYBPPptAHzwtm/84Z1vLOSM3uzmlU5s6tYt7Ou9LSziBoyc4u2LzOXc+xzsJkqM7Q1JzONWqXziBTh85y0XvO12ZmzhTOWs55Y1HOh9NFzuxoMM4p0CTOjmUbzpvVD84Baw7Oysz6zT3S7s2iZ9jN387RzVp7zc1EZMTNUtS4zbdpos300JbNWWaOzWfWgc2WzXXN+2JszQnTYM1uaEvNq88/zRBlNs0e1SrNg2oUzcDRCM0lZ//MM9fyzGHO58zHY97M1NPSzDppvMx20LDM22WnzOnVmswYzYXMi9J5zPBnZMwtz1jMkmRPzKDUQ8wFai3MQtEhzKdmGMy11gvM5M32y1fT6su8aNTL+M/Iy15lv8tr1bLLmsydyw3SkctyZ4jLgNd7y6/Ob8sUZGbLItRZy4dpQ8vE0DfLKWYuyzfWIctmzQzL2dIAyz5o6sp7z97K4GTVyu7UyMpTasfKHcyyypDRpsr1Zp3KAteQyjHOesqk027KCWlYykbQUcrBfEzKq2VDyrnVNsrozCDKW9IZytV+FMrAZ/7J/c7xyWJk6Mlw1MbJEtG+yYx9ucl3ZrDJhdajybTNjckn04HJjGhrycjPY8lDfFXJO9VIyWrMMsnd0SvJWH4PyX/O+sjy09fIlNDQyA59tMg2zZ7IqdKSyA5oe8hLz3TIxXtYyOzLQshf0TvI2n0fyAHOCch00+bHFtDfx5B8w8e4zK3HK9KJx83OUMfi0EjHXH0sx4TNFsf30vPGmM/PxjrMucat0ZXGT85bxmTQVMbefDfGBs0hxnnS/cUbz9nFvMvDxS/RnsXRzXvFqWhkxebPXMVgfEDFiMwcxWBnBcWdzv3EF3vhxHVpysSy0KXEU82CxCxoasRoz0XECswvxH3RCsQfzgLEmXrmw/dozsM00KnD1syTw0nShcOuZ23D685mw2V7SMOMyzHD/9AMw6HNBcMceujCeWjQwrbPq8JYzJTCy9Fuwm3OMcKC0AzCI80Ewp55z8E4z6HBVHiSwU3RbMHvzS7BBNAIwabMAMEgecvAus6kwFzLnMDXd43Az9BmwHHNKMCGzwLAKMz6v6J4w789zpS/WXeEv1LQXr/zzFa/bnkfvwjP976qy+++JHi4vr/Nib7bdnm+1M9RvnbMSb7weBG+is7qvSzL4r2nd6q9Qc1pvVbPQb34ywG9Dc7AvCHQl7zDzFa82M4uvHrLFbzt0Oy7j82qu6TPgbtGzD+7Ws4Wu/zK/bpv0NO6Ec2QuibPZ7rIyyS63c36uX7K4Lnxz9+5uTG2uZPMcrmozki5SssEuV/NlLgWzE+4Ks4kuMzK37fhzG63mMsnt63NxrY01bW2Y8xutnjOQrYaywu2ANb6tS/NsrVEz4a15cs9tfrNx7SxzH60xs5RtGjLB7R9zbyzkc+OszPMRLNIzsqy/8x+shTPMrIo0QKyys22sd/P";var Pn=[99,100,99,100],Ue=(i,t)=>[i,t,99,100],qn=[{pos:[0,0,0],scale:1.2,opacity:0},{pos:[0,0,0],scale:1.2,opacity:0}],go={pos:[-2.4,.95,2.7],look:[.9,.2,-.35],shift:.17,fov:34},vo={home:{forms:[0,1,2,3,4],scroll:"chapters",rest:0,statA:{type:"stacks",heights:[1,2,3,4],color:3},statB:{type:"mark",color:1,y:.95},globe:[{pos:[0,0,0],scale:1.3,opacity:1},{pos:[30,3.2,-10],scale:8,opacity:.7},{pos:[30,3.2,-10],scale:8,opacity:.45},{pos:[30,3.2,-10],scale:8,opacity:0},{pos:[30,3.2,-10],scale:8,opacity:0}],cameras:[{pos:[.2,.35,7.9],look:[0,.05,0],shift:.27,fov:34},{pos:[-7.6,.62,2.3],look:[3,.18,-.6],shift:.15,fov:36},go,{pos:[3.1,2.15,4.4],look:[0,.72,0],shift:.18,fov:34},{pos:[0,.95,8.6],look:[0,.95,0],shift:.28,fov:34}],visibility:{grid:[.45,1,3.35,3.85],rails:[.45,1,2.35,2.85],gate:[1.3,1.85,2.5,2.95]}},work:{forms:[0,2],intro:!0,rest:1,globe:qn,cameras:[go,go],dolly:[1.2,.2,.6],visibility:{grid:Ue(.2,.8),rails:Ue(.2,.8),gate:Ue(.4,.9)}},qa:{forms:[0,2],intro:!0,rest:1,globe:qn,cameras:[{pos:[-1.5,.8,2.3],look:[1.3,.35,-.7],shift:.2,fov:34},{pos:[-1.5,.8,2.3],look:[1.3,.35,-.7],shift:.2,fov:34}],dolly:[.8,.3,.4],visibility:{grid:Ue(.2,.8),rails:Ue(.2,.8),gate:Ue(.4,.9)}},capacity:{forms:[0,3],intro:!0,rest:1,globe:qn,errors:!1,statA:{type:"stacks",heights:[1,1,1,1,1],color:3,gap:.6,errors:"valid"},cameras:[{pos:[3.2,1.9,4.6],look:[0,.5,0],shift:.25,fov:34},{pos:[3.2,1.9,4.6],look:[0,.5,0],shift:.25,fov:34}],dolly:[-1.4,.6,.4],visibility:{grid:Ue(.2,.8),rails:Pn,gate:Pn}},ai:{forms:[0,3],intro:!0,rest:1,globe:qn,errors:!1,statA:{type:"stacks",heights:[6,3,5,2,4,3,5,2],color:1,gap:.5,errors:"valid"},cameras:[{pos:[3.4,1.8,4.9],look:[0,.45,0],shift:.25,fov:34},{pos:[3.4,1.8,4.9],look:[0,.45,0],shift:.25,fov:34}],dolly:[-1.6,.5,.3],visibility:{grid:Ue(.2,.8),rails:Pn,gate:Pn}},services:{forms:[0,2],intro:!0,rest:1,globe:qn,cameras:[{pos:[-.6,1.15,4.4],look:[.5,.15,-.2],shift:.18,fov:34},{pos:[-.6,1.15,4.4],look:[.5,.15,-.2],shift:.18,fov:34}],dolly:[-3,.4,-.6],visibility:{grid:Ue(.2,.8),rails:Ue(.2,.8),gate:Ue(.4,.9)}},contact:{forms:[0,0],intro:!1,rest:0,globeYaw:-1.45,globeSpin:.008,globe:[{pos:[0,0,0],scale:1.3,opacity:1},{pos:[0,0,0],scale:1.3,opacity:1}],cameras:[{pos:[0,.4,6.6],look:[0,.1,0],shift:.22,fov:34},{pos:[0,.4,6.6],look:[0,.1,0],shift:.22,fov:34}],dolly:[.4,-.3,.8],visibility:{}},quiet:{forms:[0,1],intro:!0,rest:1,globe:qn,glow:.75,cameras:[{pos:[-6.5,1.7,3],look:[5,0,-1.4],shift:.16,fov:36},{pos:[-6.5,1.7,3],look:[5,0,-1.4],shift:.16,fov:36}],dolly:[3.5,-.3,0],visibility:{grid:Ue(.2,.8),rails:Ue(.2,.8),gate:Pn}},broken:{forms:[0,3],intro:!0,rest:1,globe:qn,errors:!1,statA:{type:"broken",color:2,errors:"valid"},cameras:[{pos:[-3.4,.9,3.3],look:[.9,-.35,0],shift:.15,fov:36},{pos:[-3.4,.9,3.3],look:[.9,-.35,0],shift:.15,fov:36}],visibility:{grid:Pn,rails:Pn,gate:Pn}}};var xo=[[1.5,.2],[1.68,-.42],[1.86,.62],[2.05,-.1],[2.26,.38]],Ye=4e3,$l=180,Ii=8,$p=Ye/Ii,tm=.16,yo=document.documentElement,em=document.body,_o=document.getElementById("film"),nm=em.getAttribute("data-shot")||"quiet",ue=vo[nm]||vo.quiet,Mo=new URLSearchParams(location.search),Ze=Mo.has("still")?parseFloat(Mo.get("still"))||0:null,Pi=matchMedia("(prefers-reduced-motion: reduce)").matches,Wi=()=>innerWidth<900,tc=!Mo.has("hq")&&((navigator.hardwareConcurrency||8)<=2||(navigator.deviceMemory||8)<=2);function ec(){yo.classList.add("film-off")}var Je=null;if(_o)try{Je=new ks({canvas:_o,antialias:!0,powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:Ze!==null}),Je.capabilities.isWebGL2||(Je.dispose(),Je=null)}catch{Je=null}Je?im():ec();function im(){Je.setClearColor(0,1);let i=new Vs,t=new _e(34,1,.05,220),e={paper:new Nt(15593458),line:new Nt(3465410),fault:new Nt(16757051),reach:new Nt(8230399),steel:new Nt(6121589)},n=7,s=()=>((n=n*16807%2147483647)-1)/2147483646,r=`
vec4 qAxis(vec3 a, float ang){ return vec4(normalize(a) * sin(ang * .5), cos(ang * .5)); }
vec4 qMul(vec4 a, vec4 b){ return vec4(a.w * b.xyz + b.w * a.xyz + cross(a.xyz, b.xyz), a.w * b.w - dot(a.xyz, b.xyz)); }
vec3 qRot(vec4 q, vec3 v){ return v + 2. * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
`;function a(){let q=new wn(.1,.064,.008),Z=new Xs;Z.index=q.index,Z.setAttribute("position",q.getAttribute("position")),Z.setAttribute("normal",q.getAttribute("normal")),Z.setAttribute("uv",q.getAttribute("uv")),Z.instanceCount=Ye;let it=new Float32Array(Ye*4),_t=new Float32Array(Ye*3),At=new Float32Array(Ye*2),w=new Float32Array(Ye),Qt=new Float32Array(Ye*4),ct=new Float32Array(Ye*4),Rt=new Set;for(let P=0;P<$l;P++)Rt.add(Math.floor((P+.5)*Ye/$l));let Mt=0;for(let P=0;P<Ye;P++){it.set([s(),s(),s(),s()],P*4);let k=Math.floor(s()*xo.length);_t.set([xo[k][0]+(s()-.5)*.08,xo[k][1],s()*Math.PI*2],P*3),At.set([P%Ii,Math.floor(P/Ii)],P*2),w[P]=Rt.has(P)?++Mt:0}Z.setAttribute("aSeed",new fn(it,4)),Z.setAttribute("aOrbit",new fn(_t,3)),Z.setAttribute("aLine",new fn(At,2)),Z.setAttribute("aErr",new fn(w,1));let Pt=new fn(Qt,4),lt=new fn(ct,4);Z.setAttribute("aStatA",Pt),Z.setAttribute("aStatB",lt),o(Qt,ue.statA,w),o(ct,ue.statB,w);let S=new Kt({uniforms:{uTime:{value:0},uStage:{value:0},uForm:{value:ue.forms.concat([0,0,0,0,0]).slice(0,6)},uGlobePos:{value:new D},uGlobeScale:{value:1},uGateX:{value:0},uFlow:{value:.32},uErrMode:{value:ue.errors===!1?0:1},uStatColA:{value:ue.statA?.color??0},uStatColB:{value:ue.statB?.color??0},uPaper:{value:e.paper},uLine:{value:e.line},uFault:{value:e.fault},uReach:{value:e.reach},uFogNear:{value:9},uFogFar:{value:30},uGlow:{value:1}},vertexShader:`
      precision highp float;
      #define PI 3.14159265
      attribute vec4 aSeed; attribute vec3 aOrbit; attribute vec2 aLine; attribute float aErr; attribute vec4 aStatA; attribute vec4 aStatB;
      uniform float uTime, uStage, uForm[6], uGlobeScale, uGateX, uFlow, uErrMode, uStatColA, uStatColB;
      uniform vec3 uGlobePos, uPaper, uLine, uFault, uReach;
      varying vec3 vN; varying vec2 vUv; varying vec3 vCol; varying float vGlow; varying float vDepth; varying vec3 vView;
      ${r}
      const float LANES = ${Ii}.0, COLS = ${$p}.0, SP = ${tm};
      bool isErr(){ return aErr > .5 && uErrMode > .5; }
      vec4 tumble(float speed){ return qAxis(aSeed.yzw - .5 + .001, uTime * speed * (.3 + aSeed.x) + aSeed.w * 6.283); }

      void flow(bool sorted, out vec3 p, out vec4 q, out float s, out vec3 c, out float g){
        float run = COLS * SP;
        float xr = mod(aLine.y * SP + uTime * uFlow, run);
        float x = xr - run * .62;
        float z = (aLine.x - (LANES - 1.) * .5) * .11;
        vec3 mess = vec3(0., (aSeed.y - .5) * .05, (aSeed.z - .5) * .06);
        vec4 face = qAxis(vec3(0., 1., 0.), -PI * .5);
        vec4 wobble = qAxis(vec3(aSeed.z - .5, aSeed.w - .5, aSeed.y - .5) + .001, (aSeed.x - .5) * .7);
        p = vec3(x, 0., z); q = qMul(face, wobble); s = 1.; c = uPaper; g = .55;
        float fade = 1. - smoothstep(run * .38 - 4., run * .38 - .5, x);
        if (!sorted) { p += mess; s = fade; return; }
        float k = smoothstep(0., .9, x - uGateX);
        p += mess * (1. - k);
        q = normalize(mix(q, face, k));
        if (isErr()) {
          float hit = smoothstep(-.02, .12, x - uGateX);
          float ek = smoothstep(0., 1.6, x - uGateX);
          float idx = aErr - 1.;
          vec3 slot = vec3(uGateX + .75 + mod(idx, 12.) * .118, .02 + floor(idx / 12.) * .078, -1.05);
          vec3 lp = p;
          p = mix(lp, slot, ek) + vec3(0., sin(PI * ek) * .55, 0.);
          q = normalize(mix(q, vec4(0., 0., 0., 1.), ek));
          c = mix(uPaper, uFault, hit); g = mix(.55, 1.25, hit);
          s = 1. - smoothstep(run * .38 - 2.5, run * .38 - .5, x);
        } else {
          c = mix(uPaper, uLine, k); g = mix(.55, 1.05, k); s = fade;
        }
      }

      vec3 statColour(float mode, vec3 at){
        if (mode < .5) return uLine;
        if (mode < 1.5) return mix(uLine, uReach, clamp(at.x * .32 + .5, 0., 1.));
        return uPaper;
      }

      void form(float id, out vec3 p, out vec4 q, out float s, out vec3 c, out float g){
        if (id < .5) {                       // orbit around the globe
          float r = aOrbit.x, ang = aOrbit.z + uTime * .07 * pow(1.6 / r, 1.5);
          vec3 o = vec3(cos(ang) * r, (aSeed.y - .5) * .05, sin(ang) * r);
          vec4 tilt = qMul(qAxis(vec3(0., 0., 1.), aOrbit.y), qAxis(vec3(1., 0., 0.), aOrbit.y * .6 + .25));
          vec4 along = qAxis(vec3(0., 1., 0.), -ang + PI * .5);
          p = uGlobePos + qRot(tilt, o) * uGlobeScale;
          q = qMul(tilt, qMul(along, qAxis(vec3(aSeed.y - .5, aSeed.z - .5, aSeed.w - .5) + .001, (aSeed.x - .5) * .5)));
          s = .42; c = uPaper; g = .6;
        } else if (id < 1.5) { flow(false, p, q, s, c, g); }
        else if (id < 2.5) { flow(true, p, q, s, c, g); }
        else {
          vec4 st = id < 3.5 ? aStatA : aStatB; float mode = id < 3.5 ? uStatColA : uStatColB;
          p = st.xyz; s = st.w < -.5 ? 0. : 1.;
          q = mode > 2.5 ? qAxis(vec3(1., 0., 0.), -PI * .5) : vec4(0., 0., 0., 1.);
          if (mode > 1.5 && mode < 2.5) { q = qAxis(vec3(0., 1., 0.), -PI * .5); }
          if (mode > 2.5) mode = 0.;
          if (st.w > .5) { q = tumble(.6); p.y -= mod(uTime * .05 + aSeed.x, 1.) * .4; }
          c = statColour(mode, p); g = mode > 1.5 && mode < 2.5 ? .55 : 1.;
          if (isErr()) { c = uFault; }
        }
      }

      void main(){
        float st = clamp(uStage, 0., 4.999);
        float i = floor(st), f = st - i;
        int ia = int(i), ib = min(ia + 1, 5);
        vec3 pA, cA, pB, cB; vec4 qA, qB; float sA, gA, sB, gB;
        form(uForm[ia], pA, qA, sA, cA, gA);
        vec3 p = pA; vec4 q = qA; float s = sA; vec3 c = cA; float g = gA;
        float e = smoothstep(0., 1., clamp(f * 1.75 - aSeed.x * .75, 0., 1.));
        if (e > 0.) {
          form(uForm[ib], pB, qB, sB, cB, gB);
          if (dot(qA, qB) < 0.) qB = -qB;
          p = mix(pA, pB, e) + vec3(0., sin(PI * e) * (.25 + aSeed.y * .6), 0.);
          q = normalize(mix(qA, qB, e)); s = mix(sA, sB, e); c = mix(cA, cB, e); g = mix(gA, gB, e);
        }
        vec3 world = qRot(q, position * s) + p;
        vec4 mv = viewMatrix * vec4(world, 1.);
        vN = normalize(mat3(viewMatrix) * qRot(q, normal));
        vUv = uv; vCol = c; vGlow = g; vDepth = -mv.z; vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      precision highp float;
      uniform float uFogNear, uFogFar, uGlow;
      varying vec3 vN; varying vec2 vUv; varying vec3 vCol; varying float vGlow; varying float vDepth; varying vec3 vView;
      void main(){
        vec3 n = normalize(vN);
        float lam = max(dot(n, normalize(vec3(.35, .8, .55))), 0.);
        float rim = pow(1. - abs(dot(n, vView)), 3.);
        float e = min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y));
        float edge = 1. - smoothstep(.0, .07, e);
        vec3 col = vCol * (.035 + .2 * lam) + vCol * rim * .35 + vCol * edge * vGlow * 1.35 * uGlow;
        col *= 1. - smoothstep(uFogNear, uFogFar, vDepth);
        gl_FragColor = vec4(col, 1.);
      }`}),g=new le(Z,S);return g.frustumCulled=!1,{mesh:g,mat:S,statA:Pt,statB:lt}}function o(q,Z,it){if(!Z)return;let _t=[],At=[];for(let ct=0;ct<Ye;ct++)(it[ct]>0&&Z.errors!=="valid"?At:_t).push(ct);let w=(ct,Rt,Mt,Pt,lt=0)=>q.set([Rt,Mt,Pt,lt],ct*4),Qt=ct=>ct.forEach(Rt=>w(Rt,0,-50,0,-1));if(Z.type==="stacks"){let ct=Z.heights,Rt=ct.reduce((k,Y)=>k+Y,0),Mt=Z.gap??.62,Pt=4,lt=6,S=Pt*lt,g=.024,P=0;ct.forEach((k,Y)=>{let X=Y===ct.length-1?_t.length-P:Math.round(_t.length*k/Rt),xt=(Y-(ct.length-1)/2)*Mt;for(let st=0;st<X&&P<_t.length;st++,P++){let ht=Math.floor(st/S),kt=st%S;w(_t[P],xt+(kt%Pt-(Pt-1)/2)*.104,ht*g,(Math.floor(kt/Pt)-(lt-1)/2)*.068)}}),At.forEach((k,Y)=>{let X=Math.floor(Y/12),xt=Y%12;w(k,ct.length*Mt*.5+.55+xt%3*.104,X*g,-.9+Math.floor(xt/3)*.068)})}else if(Z.type==="mark"){let Pt=[],lt=25*Math.PI/180;for(let g=-1.7;g<=1.7;g+=.072)for(let P=-1.7;P<=1.7;P+=.108){let k=Math.hypot(P,g),Y=Math.atan2(-g,P)-lt;Y=(Y+Math.PI*4)%(Math.PI*2);let X=Math.abs(k-1.25)<.34/2&&Y<Math.PI*2*.752,xt=Math.hypot(P-1.25*.927,g-1.25*.345);(X||xt<.3)&&Pt.push([P,g])}let S=Math.ceil(_t.length/Pt.length);_t.forEach((g,P)=>{let k=Pt[P%Pt.length],Y=Math.floor(P/Pt.length);w(g,k[0],k[1]+(Z.y??.9),(Y-(S-1)/2)*.03)}),Qt(At)}else Z.type==="broken"&&_t.concat(At).forEach((ct,Rt)=>{let Mt=Rt%Ii,Pt=Math.floor(Rt/Ii),lt=-9+Pt*.12;lt>0&&lt<1.3?w(ct,lt+(s()-.5)*.4,-.6-s()*3.2,(Mt-3.5)*.11+(s()-.5)*.5,1):w(ct,lt,0,(Mt-3.5)*.11)})}function l(){let q=new hn,Z=Uint8Array.from(atob(jl),St=>St.charCodeAt(0)),it=new Int16Array(Z.buffer),_t=Wi()?2:1,At=Math.floor(it.length/2/_t),w=new Float32Array(At*3),Qt=new Float32Array(At),ct=(St,ut,Ft=1)=>{let It=St*Math.PI/180,Gt=ut*Math.PI/180;return[Ft*Math.cos(It)*Math.cos(Gt),Ft*Math.sin(It),-Ft*Math.cos(It)*Math.sin(Gt)]};for(let St=0;St<At;St++){let ut=it[St*2*_t]/32767*90,Ft=it[St*2*_t+1]/32767*180;w.set(ct(ut,Ft),St*3),Qt[St]=s()}let Rt=new xe;Rt.setAttribute("position",new se(w,3)),Rt.setAttribute("aRand",new se(Qt,1));let Mt=new Kt({transparent:!0,depthWrite:!1,blending:Fe,uniforms:{uOpacity:{value:1},uScale:{value:1},uDpr:{value:1},uCol:{value:e.steel},uHi:{value:e.paper}},vertexShader:`
      attribute float aRand; uniform float uScale, uDpr; varying float vFace; varying float vR;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.);
        vFace = dot(normalize(mat3(modelViewMatrix) * position), normalize(-mv.xyz));
        vR = aRand;
        gl_PointSize = (2.2 + aRand * .9) * uDpr * uScale * (5. / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uOpacity; uniform vec3 uCol, uHi; varying float vFace; varying float vR;
      void main(){
        vec2 d = gl_PointCoord - .5; if (dot(d, d) > .25) discard;
        float front = smoothstep(-.1, .45, vFace);
        vec3 c = mix(mix(uCol, uHi, .35), uHi, step(.97, vR) * .7) * (.12 + .88 * front) * .9;
        gl_FragColor = vec4(c * uOpacity, 1.);
      }`});q.add(new Ai(Rt,Mt));let Pt=new Kt({transparent:!0,depthWrite:!1,blending:Fe,side:ve,uniforms:{uOpacity:{value:1},uCol:{value:e.reach}},vertexShader:"varying float vF; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vec3 n = normalize(normalMatrix * normal); vF = pow(1. - abs(dot(n, normalize(-mv.xyz))), 4.); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uOpacity; uniform vec3 uCol; varying float vF; void main(){ gl_FragColor = vec4(uCol * vF * .3 * uOpacity, 1.); }"});q.add(new le(new Hs(1.06,64,48),Pt));let lt=[51.5,-.12],S=[[40.7,-74],[43.65,-79.4],[19.4,-99.1],[-23.5,-46.6],[25.2,55.3],[19.1,72.9],[1.35,103.8],[-33.9,151.2],[35.7,139.7],[31.2,121.5],[-26.2,28],[59.3,18.1],[40.4,-3.7],[48.9,2.35],[52.5,13.4],[45.5,9.2],[52.4,4.9],[37.6,127],[-37.8,145],[34.05,-118.2],[41.9,-87.6],[47.6,-122.3],[25.8,-80.2],[55.7,12.6],[50.1,14.4],[52.2,21],[38.7,-9.1],[41,29],[30,31.2],[-34.6,-58.4],[13.75,100.5],[22.3,114.2]],g=[0,4,6,8,3,7,5,19,10,9,1,30],P=[],k=[];S.forEach(St=>{P.push(...ct(St[0],St[1],1.004)),k.push(0)}),P.push(...ct(lt[0],lt[1],1.006)),k.push(1);let Y=new xe;Y.setAttribute("position",new se(new Float32Array(P),3)),Y.setAttribute("aKind",new se(new Float32Array(k),1));let X=new Kt({transparent:!0,depthWrite:!1,blending:Fe,uniforms:{uOpacity:{value:1},uTime:{value:0},uDpr:{value:1},uLine:{value:e.line},uPaper:{value:e.paper}},vertexShader:`attribute float aKind; uniform float uDpr, uTime; varying float vK; varying float vFace;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vFace = dot(normalize(mat3(modelViewMatrix)*position), normalize(-mv.xyz)); vK = aKind;
      gl_PointSize = (aKind > .5 ? 9. + sin(uTime * 2.4) * 2. : 5.) * uDpr * (5. / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uOpacity; uniform vec3 uLine, uPaper; varying float vK; varying float vFace;
      void main(){ vec2 d = gl_PointCoord - .5; float r = length(d); if (r > .5) discard; float a = smoothstep(.5, .1, r) * smoothstep(-.05, .3, vFace);
      gl_FragColor = vec4(mix(uLine, uPaper, vK) * a * 1.6 * uOpacity, 1.); }`});q.add(new Ai(Y,X));let xt=90,st=[],ht=[],kt=[],et=new D(...ct(lt[0],lt[1]));g.forEach((St,ut)=>{let Ft=new D(...ct(S[St][0],S[St][1])),It=et.angleTo(Ft);for(let Gt=0;Gt<=xt;Gt++){let C=Gt/xt,at=new D().copy(et).multiplyScalar(Math.sin((1-C)*It)/Math.sin(It)).add(new D().copy(Ft).multiplyScalar(Math.sin(C*It)/Math.sin(It)));at.normalize().multiplyScalar(1.004+Math.sin(Math.PI*C)*(.08+It*.12)),st.push(at.x,at.y,at.z),ht.push(C),kt.push(ut/g.length)}});let mt=new xe;mt.setAttribute("position",new se(new Float32Array(st),3)),mt.setAttribute("aU",new se(new Float32Array(ht),1)),mt.setAttribute("aId",new se(new Float32Array(kt),1));let Ut=new Kt({transparent:!0,depthWrite:!1,blending:Fe,uniforms:{uOpacity:{value:1},uTime:{value:0},uDpr:{value:1},uReach:{value:e.reach},uLine:{value:e.line}},vertexShader:`attribute float aU, aId; uniform float uTime, uDpr; varying float vA; varying float vU; varying float vFace;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vFace = dot(normalize(mat3(modelViewMatrix)*position), normalize(-mv.xyz));
      float head = fract(uTime * .16 + aId * 1.7); float d = head - aU;
      vA = .16 + smoothstep(.22, 0., d) * step(0., d) * .95; vU = aU;
      gl_PointSize = (1.5 + vA * 1.6) * uDpr * (5. / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uOpacity; uniform vec3 uReach, uLine; varying float vA; varying float vU; varying float vFace;
      void main(){ vec2 d = gl_PointCoord - .5; if (dot(d,d) > .25) discard; float f = smoothstep(-.35, .2, vFace);
      gl_FragColor = vec4(mix(uReach, uLine, vU) * vA * f * uOpacity, 1.); }`});return q.add(new Ai(mt,Ut)),q.rotation.x=.32,{group:q,mats:[Mt,Pt,X,Ut],landMat:Mt,markMat:X,arcMat:Ut}}function c(){let q=new le(new Yn(160,160),new Kt({transparent:!0,depthWrite:!1,blending:Fe,uniforms:{uOpacity:{value:0},uCol:{value:e.steel},uLine:{value:e.line}},vertexShader:"varying vec3 vW; varying float vD; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform float uOpacity; uniform vec3 uCol, uLine; varying vec3 vW; varying float vD;
      float gl(vec2 p, float s){ vec2 g = abs(fract(p / s - .5) - .5) / fwidth(p / s); return 1. - min(min(g.x, g.y), 1.); }
      void main(){ float minor = gl(vW.xz, .5) * .35, major = gl(vW.xz, 2.5) * .8;
      float fade = 1. - smoothstep(4., 34., vD);
      gl_FragColor = vec4(uCol * max(minor, major) * fade * .3 * uOpacity, 1.); }`}));q.rotation.x=-Math.PI/2,q.position.y=-.06;let Z=new Kt({transparent:!0,depthWrite:!1,blending:Fe,uniforms:{uOpacity:{value:0},uCol:{value:e.line},uTime:{value:0}},vertexShader:"varying vec3 vW; varying float vD; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform float uOpacity, uTime; uniform vec3 uCol; varying vec3 vW; varying float vD;
      void main(){ float pulse = .55 + .45 * smoothstep(.92, 1., fract(vW.x * .08 - uTime * .12));
      gl_FragColor = vec4(uCol * pulse * (1. - smoothstep(8., 40., vD)) * 1.1 * uOpacity, 1.); }`}),it=new hn;[-.47,.47].forEach(w=>{let Qt=new le(new wn(90,.006,.006),Z);Qt.position.set(-8,-.05,w),it.add(Qt)});let _t=new Kt({transparent:!0,depthWrite:!1,blending:Fe,side:Ge,uniforms:{uOpacity:{value:0},uTime:{value:0},uCol:{value:e.line},uPaper:{value:e.paper}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform float uOpacity, uTime; uniform vec3 uCol, uPaper; varying vec2 vUv;
      void main(){ float scan = smoothstep(.04, 0., abs(vUv.y - fract(uTime * .45)));
      float frame = 1. - smoothstep(0., .012, min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y)));
      float fill = .05 + .03 * step(.5, fract(vUv.y * 24.));
      vec3 c = uCol * (fill + scan * .9) + uPaper * frame * 1.4;
      gl_FragColor = vec4(c * uOpacity, 1.); }`}),At=new le(new Yn(1.25,.62),_t);return At.rotation.y=Math.PI/2,At.position.set(0,.25,0),{grid:q,rails:it,gate:At,gridMat:q.material,railMat:Z,gateMat:_t}}let h=a(),d=l(),f=c();i.add(h.mesh,d.group,f.grid,f.rails,f.gate);let m=null,x=null,_=null,p=!tc&&!Wi();function u(){let q=new pe(2,2,{type:Pe,samples:4});m=new js(Je,q),m.addPass(new $s(i,t)),x=new Ci(new Bt(2,2),.62,.32,.62),m.addPass(x),m.addPass(new tr),_=new Ri({uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new Bt(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime; uniform vec2 uRes; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main(){ vec2 c = vUv - .5; float r2 = dot(c, c);
      vec2 off = c * r2 * .006;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      col *= 1. - smoothstep(.18, .75, r2) * .55;
      col += (h(vUv * uRes + fract(uTime) * 91.7) - .5) * .028;
      gl_FragColor = vec4(col, 1.); }`}),m.addPass(_)}if(p)try{u()}catch{m=null}let b=(q,Z,it)=>q+(Z-q)*it,E=q=>new D(...q),A=q=>q*q*(3-2*q),L=ue.cameras.map(q=>({pos:E(q.pos),look:E(q.look),shift:q.shift??.2,fov:q.fov??34})),R=ue.scroll==="chapters"?Array.from(document.querySelectorAll("[data-stage]")):[];function T(){if(!R.length)return null;let q=scrollY+innerHeight*.55,Z=R.map(it=>({top:it.getBoundingClientRect().top+scrollY,stage:parseFloat(it.dataset.stage)}));for(let it=Z.length-1;it>=0;it--)if(q>=Z[it].top){let _t=Z[it+1];if(!_t)return Z[it].stage;let At=(q-Z[it].top)/Math.max(1,_t.top-Z[it].top);return b(Z[it].stage,_t.stage,A(Math.min(1,Math.max(0,(At-.45)/.55))))}return Z[0]?.stage??0}let N=ue.intro&&!Pi&&Ze===null?0:ue.rest,$=N,M=performance.now(),V=Ze!==null?40:0,z=0,W=new D,K=new D,O=new D,tt=new D,H=0,pt=34,ot=!0;function bt(q){let Z=Math.min(L.length-1,Math.floor(q)),it=Math.min(L.length-1,Z+1),_t=A(q-Z);return W.lerpVectors(L[Z].pos,L[it].pos,_t),K.lerpVectors(L[Z].look,L[it].look,_t),{shift:b(L[Z].shift,L[it].shift,_t),fov:b(L[Z].fov,L[it].fov,_t)}}function Vt(q){let Z=ue.globe;if(!Z)return{pos:[0,0,0],scale:1,opacity:0};let it=Math.min(Z.length-1,Math.floor(q)),_t=Math.min(Z.length-1,it+1),At=A(q-it),w=Z[it],Qt=Z[_t];return{pos:w.pos.map((ct,Rt)=>b(ct,Qt.pos[Rt],At)),scale:b(w.scale,Qt.scale,At),opacity:b(w.opacity,Qt.opacity,At)}}let Ht=(q,Z,it,_t,At)=>Math.min(Math.max((q-Z)/Math.max(1e-4,it-Z),0),1)*(1-Math.min(Math.max((q-_t)/Math.max(1e-4,At-_t),0),1));function Q(){let q=Math.min(devicePixelRatio||1,Wi()?1.5:tc?1.25:1.75),Z=innerWidth,it=innerHeight;Je.setPixelRatio(q),Je.setSize(Z,it,!1),t.aspect=Z/it,m&&(m.setPixelRatio(q),m.setSize(Z,it),x.setSize(Z*q*.5,it*q*.5),_.uniforms.uRes.value.set(Z*q,it*q)),[d.landMat,d.markMat,d.arcMat].forEach(_t=>_t.uniforms.uDpr.value=q*(it/900))}addEventListener("resize",Q),Q();function j(q){let Z=Math.min(.05,(q-M)/1e3);M=q,Ze===null&&!Pi&&(V+=Z);let it=T();it!==null?$=it:ue.intro&&($=Ze!==null?Ze:ue.rest),Ze!==null&&($=Ze);let _t=Pi||Ze!==null||ot?1:1-Math.exp(-Z*(ue.intro&&it===null?1.1:2.6));N+=($-N)*_t,Math.abs($-N)<1e-4&&(N=$);let At=bt(N),w=R.length?0:Math.min(1,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight));W.add(E(ue.dolly||[0,0,0]).multiplyScalar(w));let Qt=Pi||Ze!==null?0:1;W.x+=Math.sin(V*.21)*.05*Qt,W.y+=Math.sin(V*.17+1)*.035*Qt;let ct=ot?1:1-Math.exp(-Z*4);O.lerp(W,ct),tt.lerp(K,ct),ot&&(O.copy(W),tt.copy(K)),H=b(H,Wi()?0:At.shift,ct),pt=b(pt,At.fov*(Wi()?1.25:1),ct),t.position.copy(O),t.lookAt(tt),t.fov=pt;let Rt=innerWidth,Mt=innerHeight;t.setViewOffset(Rt,Mt,-H*Rt,0,Rt,Mt),t.updateProjectionMatrix();let Pt=Vt(N);d.group.position.set(...Pt.pos),d.group.scale.setScalar(Pt.scale),d.group.rotation.y=(ue.globeYaw??0)+V*(ue.globeSpin??.045),d.group.visible=Pt.opacity>.002,d.mats.forEach(g=>g.uniforms.uOpacity.value=Pt.opacity),d.landMat.uniforms.uScale.value=Math.sqrt(Pt.scale/1.3),d.markMat.uniforms.uTime.value=V,d.arcMat.uniforms.uTime.value=V;let lt=h.mat.uniforms;lt.uTime.value=V,lt.uStage.value=N,lt.uGlobePos.value.set(...Pt.pos),lt.uGlobeScale.value=Pt.scale,lt.uGlow.value=ue.glow??1;let S=ue.visibility||{};if(f.gridMat.uniforms.uOpacity.value=S.grid?Ht(N,...S.grid):0,f.railMat.uniforms.uOpacity.value=S.rails?Ht(N,...S.rails):0,f.gateMat.uniforms.uOpacity.value=S.gate?Ht(N,...S.gate):0,f.railMat.uniforms.uTime.value=V,f.gateMat.uniforms.uTime.value=V,f.grid.visible=f.gridMat.uniforms.uOpacity.value>.002,f.rails.visible=f.railMat.uniforms.uOpacity.value>.002,f.gate.visible=f.gateMat.uniforms.uOpacity.value>.002,m?(_.uniforms.uTime.value=V,m.render(Z)):Je.render(i,t),ot&&(ot=!1,requestAnimationFrame(()=>yo.classList.add("film-on"))),z++,Ze!==null&&z>3){yo.classList.add("film-still");return}if(Pi&&Math.abs($-N)<1e-4&&R.length){yt=!0;return}if(Pi&&!R.length){yt=!0;return}requestAnimationFrame(j)}let yt=!1,gt=()=>{yt&&(yt=!1,M=performance.now(),requestAnimationFrame(j))};addEventListener("scroll",gt,{passive:!0}),addEventListener("resize",gt),document.addEventListener("visibilitychange",()=>{document.hidden||(M=performance.now())}),_o.addEventListener("webglcontextlost",q=>{q.preventDefault(),ec()}),requestAnimationFrame(j)}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
