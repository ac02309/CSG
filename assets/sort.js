/* ---------- The sort: scroll-driven WebGL background ----------
   One field of light-points tells the story as you scroll the home page:
   a slowly turning galaxy of unsorted data (hero) is drawn out into two intertwined
   silk ribbons (what we automate), packed into a lattice that a plane of light scans,
   ejecting the errors in amber (track record), rebuilt as four rising columns
   (how it works) and finally spell out Clarke Systems Group in the footer.
   Formations sit in empty space and travel with the page. Never interactive,
   off for reduced motion, falls back to the static mark without WebGL. */
(function(){
  var cv=document.getElementById("sort");
  if(!cv)return;
  var root=document.documentElement;
  var reduceQ=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):null;
  if(reduceQ&&reduceQ.matches){cv.remove();return;}
  var gl=null;
  try{gl=cv.getContext("webgl",{alpha:true,premultipliedAlpha:true,antialias:false,depth:false,stencil:false,powerPreference:"low-power"});}catch(e){}
  if(!gl){cv.remove();return;}

  var home=document.querySelector('.view[data-view="home"]');
  var markEl=document.querySelector(".foot-word");
  var LOGO_PATHS=["M11.24 5.53A5.4 5.4 0 1 0 11.24 12.47","M24.34 5.23A3.8 2.65 0 1 0 20.9 9A3.8 2.65 0 1 1 17.46 12.77","M39.44 5.53A5.4 5.4 0 1 0 40.7 9H36.3"];

  var VS=[
  "precision highp float;",
  "attribute vec4 aSeed;attribute vec3 aGal;attribute vec3 aRib;attribute vec4 aLat;attribute vec3 aBar;attribute vec3 aLogo;",
  "uniform float uTime,uPr,uScan,uDpr,uGain,uSizeMul,uAlphaMul;uniform vec2 uRes;uniform vec4 uF[5];uniform vec4 uMask;",
  "uniform vec3 uInk,uAcc,uWarn,uBlue,uHi;",
  "varying vec3 vCol;varying float vA;",
  "const float PI=3.14159265;",
  "vec3 rotY(vec3 p,float a){float c=cos(a),s=sin(a);return vec3(c*p.x+s*p.z,p.y,-s*p.x+c*p.z);}",
  "vec3 rotX(vec3 p,float a){float c=cos(a),s=sin(a);return vec3(p.x,c*p.y-s*p.z,s*p.y+c*p.z);}",
  "vec3 rotZ(vec3 p,float a){float c=cos(a),s=sin(a);return vec3(c*p.x-s*p.y,s*p.x+c*p.y,p.z);}",
  "vec3 proj(vec3 p,vec4 F){float s=3.2/(3.2-p.z);return vec3(F.x+p.x*s*F.z,F.y-p.y*s*F.z,s);}",
  "float depth(float s){return .45+.55*smoothstep(.75,1.3,s);}",
  "void form(int k,out vec2 pos,out float sz,out vec3 col,out float a){",
  "  float t=uTime;vec3 p;vec3 q;",
  "  if(k==0){",
  "    float r=aGal.x;float th=aGal.y+t*.022/(.3+r);",
  "    p=rotZ(rotX(vec3(cos(th)*r,aGal.z,sin(th)*r),1.02),-.38);",
  "    q=proj(p,uF[0]);pos=q.xy;",
  "    float bok=step(.988,aSeed.w);",
  "    sz=(1.3+aSeed.y*1.9)*q.z+bok*(7.+aSeed.z*12.);",
  "    col=mix(uHi,uAcc,smoothstep(0.,.32,r));col=mix(col,uBlue,smoothstep(.35,1.,r)*(.35+.65*aSeed.z));",
  "    a=(.45+.55*(1.-smoothstep(0.,1.3,r)))*(.65+.35*sin(t*.9+aSeed.x*40.))*depth(q.z);",
  "    float inM=smoothstep(uMask.x-40.,uMask.x+20.,pos.x)*smoothstep(uMask.z+40.,uMask.z-20.,pos.x)*smoothstep(uMask.y-40.,uMask.y+20.,pos.y)*smoothstep(uMask.w+40.,uMask.w-20.,pos.y);",
  "    a=mix(a,.05,bok)*uF[0].w*(1.-.72*inM);",
  "  }else if(k==1){",
  "    float u=fract(aRib.x+t*.011);float side=step(.5,aSeed.z);",
  "    float ph=u*6.2832*1.05+t*.17;",
  "    float tw=u*6.2832*.75+t*.11+side*1.9;",
  "    float v=aRib.y*.15;",
  "    float y=sin(ph+side*PI)*.21;float z=cos(ph*.8+side*PI)*.26;",
  "    p=rotX(vec3((u*2.-1.)*1.55,y+v*cos(tw),z+v*sin(tw)+aRib.z*.012),.16);",
  "    q=proj(p,uF[1]);pos=q.xy;",
  "    float edge=pow(abs(aRib.y),5.);",
  "    sz=(1.3+aSeed.y*1.4+edge*.8)*q.z;",
  "    col=mix(uAcc,uBlue,clamp(u*.9+side*.25,0.,1.));col=mix(col,uHi,edge*.4);",
  "    a=(.3+.8*edge)*smoothstep(0.,.14,u)*smoothstep(1.,.86,u)*depth(q.z)*uF[1].w;",
  "  }else if(k==2){",
  "    float ty=aLat.w;vec3 m=aLat.xyz;",
  "    if(ty>2.5){vec3 t1=normalize(cross(m,vec3(0.,1.,0.)));vec3 t2=cross(m,t1);float ph=fract(t*.16+aSeed.z);float ang=aSeed.y*6.2832;m=normalize(m+(cos(ang)*t1+sin(ang)*t2)*(.012+ph*.11));}",
  "    p=rotX(rotY(m,.35+t*.022),.32);",
  "    float bx=mix(-1.15,1.15,uScan);float passed=smoothstep(bx+.04,bx-.04,p.x);",
  "    float scanning=step(.002,uScan)*step(uScan,.998);",
  "    float front=smoothstep(-.3,.45,p.z);",
  "    float flag=step(.5,ty)*step(ty,1.5)*step(aSeed.x,.014);",
  "    float push=flag*smoothstep(bx,bx-.35,p.x);",
  "    p*=.95;",
  "    float glow=exp(-abs(p.x-bx)*12.)*scanning*front;",
  "    q=proj(p,uF[2]);pos=q.xy;",
  "    float rim=pow(1.-abs(p.z)/.95,6.);",
  "    if(ty<.5){sz=(1.1+aSeed.y*.6)*q.z;col=mix(uBlue,uHi,rim*.3);a=(.05+.14*front+rim*.07);}",
  "    else if(ty<1.5){sz=(1.35+aSeed.y*.9+push*1.2+glow*1.4)*q.z;col=mix(uAcc,uHi,.12+glow*.6);col=mix(col,uWarn,push);a=(.1+.62*front)*(.75+.25*passed)+push*.5*front+glow*.5+rim*.04;}",
  "    else if(ty<2.5){sz=(3.+aSeed.y*1.5)*q.z;col=mix(uHi,uAcc,.25);a=(.25+.75*front)*(.75+.25*sin(t*2.+aSeed.x*6.));}",
  "    else{float ph=fract(t*.16+aSeed.z);sz=(1.6)*q.z;col=uAcc;a=(1.-ph)*(.15+.85*front)*.9;}",
  "    a*=uF[2].w;",
  "  }else if(k==3){",
  "    vec3 m=aBar;float ci=floor((m.x+1.)/.5);",
  "    float hk=ci<.5?.42:(ci<1.5?.66:(ci<2.5?.9:1.18));",
  "    float top=smoothstep(hk-.05,hk,m.y+.58);",
  "    p=rotX(rotY(m,-.62+sin(t*.16)*.12),.3);",
  "    q=proj(p,uF[3]);pos=q.xy;",
  "    float lv=ci/3.;float cx=-.75+ci*.5;",
  "    float edge=step(abs(abs(m.x-cx)-.15),.004)*step(abs(abs(m.z)-.15),.004);",
  "    sz=(1.25+aSeed.y*.8+edge*.6)*q.z;",
  "    col=mix(uBlue,uAcc,lv);col=mix(col,uHi,top*.55+edge*.2);",
  "    a=(.26+.2*lv+top*.4+edge*.3)*depth(q.z)*uF[3].w;",
  "  }else{",
  "    vec3 m=aLogo;",
  "    p=rotY(m,sin(t*.26)*.05);",
  "    q=proj(p,uF[4]);pos=q.xy;",
  "    float sw=exp(-pow((m.x-(fract(t*.065)*3.6-1.8))*2.4,2.));",
  "    sz=(1.7+aSeed.y*1.3)*q.z*clamp(uF[4].z/520.,.5,1.);",
  "    col=mix(uAcc,uHi,aSeed.z*.3+sw*.55);",
  "    a=(.3+sw*.3)*(.82+.18*sin(t*1.2+aSeed.x*50.))*uF[4].w;",
  "  }",
  "}",
  "void main(){",
  "  float pr=clamp(uPr,0.,4.);float base=floor(min(pr,3.9999));float raw=pr-base;int kb=int(base);",
  "  vec2 pA;float sA;vec3 cA;float aA;form(kb,pA,sA,cA,aA);",
  "  vec2 pos=pA;float sz=sA;vec3 col=cA;float a=aA;",
  "  float e=raw>0.?smoothstep(0.,1.,raw*1.5-.25+(aSeed.x-.5)*.5):0.;",
  "  if(e>0.){",
  "    vec2 pB;float sB;vec3 cB;float aB;form(kb+1,pB,sB,cB,aB);",
  "    vec2 d=pB-pA;vec2 n=vec2(-d.y,d.x);",
  "    pos=mix(pA,pB,e)+n*sin(PI*e)*(aSeed.y-.5)*.55;",
  "    sz=mix(sA,sB,e);col=mix(cA,cB,e);a=mix(aA,aB,e)*(1.-.25*sin(PI*e));",
  "  }",
  "  vec2 c=pos/uRes*2.-1.;gl_Position=vec4(c.x,-c.y,0.,1.);",
  "  gl_PointSize=min(max(sz,1.5)*uSizeMul,64.)*uDpr;vCol=col;vA=a*uGain*uAlphaMul;",
  "}"].join("\n");
  var FS="precision mediump float;uniform float uSoft;varying vec3 vCol;varying float vA;void main(){vec2 c=gl_PointCoord*2.-1.;float d=dot(c,c);if(d>1.)discard;float f=1.-d;f=mix(f*f*(3.-2.*f),exp(-d*4.5)*(1.-d),uSoft);float a=vA*f;gl_FragColor=vec4(vCol*a,a);}";

  function sh(type,src){var s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){throw new Error(gl.getShaderInfoLog(s));}return s;}
  var prog;
  try{
    prog=gl.createProgram();
    gl.attachShader(prog,sh(gl.VERTEX_SHADER,VS));gl.attachShader(prog,sh(gl.FRAGMENT_SHADER,FS));
    gl.linkProgram(prog);
    if(!gl.getProgramParameter(prog,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(prog));
  }catch(err){if(window.console)console.warn("sort: "+err.message);cv.remove();return;}
  gl.useProgram(prog);
  root.classList.add("sort-gl");
  var U={};["uTime","uPr","uScan","uDpr","uGain","uSizeMul","uAlphaMul","uSoft","uMask","uRes","uF","uInk","uAcc","uWarn","uBlue","uHi"].forEach(function(n){U[n]=gl.getUniformLocation(prog,n);});
  var buf=gl.createBuffer();

  var W=0,H=0,DPR=1,N=0,mobile=null,dark=true;
  var lowEnd=(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4)||(navigator.deviceMemory&&navigator.deviceMemory<=4);
  var D={hero:null,work:null,proc:null,mark:null,autoTop:0,max:0},stacked=false;
  var holds=[],beamA=0,beamB=1,prS=0,scanS=0;
  var running=false,last=0,t=0;

  function rgb(h,fb){h=(h||"").trim();if(h[0]!=="#")return fb;if(h.length===4)h="#"+h[1]+h[1]+h[2]+h[2]+h[3]+h[3];var n=parseInt(h.slice(1),16);return [((n>>16)&255)/255,((n>>8)&255)/255,(n&255)/255];}
  function readColors(){
    var cs=getComputedStyle(root);
    var bg=rgb(cs.getPropertyValue("--bg"),[.95,.95,.96]);
    dark=(bg[0]+bg[1]+bg[2])/3<.5;
    var acc=rgb(cs.getPropertyValue("--accent"),dark?[.25,.82,.72]:[.06,.48,.42]);
    var warn=rgb(cs.getPropertyValue("--warn"),dark?[.95,.65,.29]:[.72,.4,.04]);
    gl.useProgram(prog);
    gl.uniform3fv(U.uAcc,acc);gl.uniform3fv(U.uWarn,warn);
    if(dark){gl.uniform3f(U.uInk,.78,.84,.92);gl.uniform3f(U.uBlue,.38,.5,1);gl.uniform3f(U.uHi,.92,1,.98);}
    else{gl.uniform3f(U.uInk,.2,.25,.32);gl.uniform3f(U.uBlue,.22,.32,.78);gl.uniform3f(U.uHi,.03,.24,.22);}
  }

  function gauss(){var u=1-Math.random(),v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(6.2832*v);}
  var LOGO_ASPECT=.14;
  function logoSamples(n){
    var txt="Clarke Systems Group",fs=160,c=document.createElement("canvas"),x=c.getContext("2d");
    var font="650 "+fs+"px Geist, sans-serif";
    x.font=font;try{x.letterSpacing=(-.05*fs)+"px";}catch(e){}
    var m=x.measureText(txt),asc=m.actualBoundingBoxAscent||fs*.75,desc=m.actualBoundingBoxDescent||fs*.2;
    var w=Math.ceil(m.width)+8,h=Math.ceil(asc+desc)+8;
    c.width=w;c.height=h;x.font=font;try{x.letterSpacing=(-.05*fs)+"px";}catch(e){}
    x.fillStyle="#fff";x.fillText(txt,4,4+asc);
    var d=x.getImageData(0,0,w,h).data,pts=[];
    for(var yy=0;yy<h;yy+=1)for(var xx=0;xx<w;xx+=1){if(d[(yy*w+xx)*4+3]>150)pts.push(xx,yy);}
    var tw=m.width||w;LOGO_ASPECT=(asc+desc)/tw;
    var out=[],L=pts.length/2;
    for(var i=0;i<n;i++){
      var k=Math.floor(Math.random()*L)*2,px=pts[k]+Math.random()-.5,py=pts[k+1]+Math.random()-.5;
      out.push(L?[(px-4-tw/2)/(tw/2),-(py-4-(asc+desc)/2)/(tw/2),(Math.random()-.5)*.02]:[0,0,0]);
    }
    return out;
  }

  var LAND="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//8AFb///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///+x/////76fAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gD/p////////AAAAAAAAAACxBwAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAA///uAf//////+AAAABrvwAAAAAAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAeHznn/h////////4AAAABXsAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAEcIA5MfAI///////8AAAAAPFAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAABoCGc8X/AH///////4AAAAAAAAAAAAAB4AAAAB9+AAAAAAAAAAAAAAAAAAAAAD/wMzz8AAAP/////2AAAAAAAAAAAAD4AAAA////AAAB/oAAAAAAAAAAAAAACAwACAcAAAAP/////+AAAAAAAAAAAAMAAAAX///6AAAAAAAAAAAAAAAAAAAAP+Ac8+M/gAAD////+8AAAAAAAAAAAA4AAAH///+O+HAAHAAAAAAAAAAAAAAAf/+4/Y/94AAD////+wAAAAAAAAAAABwAHhH///////8AHwAAAAAwAAAAAAAAON/8E4//9AADf////gAAAAAAAAAAABwAPZ+///////4nv/gAAAAAAAH8gAAAAAP+A8f//8AA3///ogAAAAAABtgAAAAAfv/////////////8AAAAAB///+B/2H/+DnDxf8AAz////AAAAAAA//wAAAA8Pv//////////////9H8wAP////////QsDPzwD8AAf///wAAAAAAG///wIBe/3+/////////////////+AD////////+//fz4Y/wA7//4AAAAAAAD///+I////v//////////////////4EP///////////5gD/8A///gAAAAAAAf//5+P///8//////////////////7w/////////////qAD+QAP/wABr8AAAAf8f+D///////////////////////AwAf///////////zwx/AAP/wAAP8AAAB/4/+f//////////////////////4AMAf//////////+DBAbwAH/AAADAAAAN/j/////////////////////////+AAH///////////4AwgHQAD/AAAAAAAAf/H///////////////////////n/6AAP///////////wAA/AAAB+AAAAAAAB/+H//////////////////////jP+AAAH/9z////////gAA/wAAAMAAAAAACB//D7////////////////////+A/YAAAA/xAD///////gAA/wQAAAAAAAAAAB9/Ab///////////////////+ODgAAAAAB0AAX//////4AA/94AAAAAAAAAYA5+C///////////////////4AAHQAAAAABcAAP//////8AAf/+AAAAAAAAB8AA+i///////////////////wAAfgAAAAAMAAAC///////wAf/+AAAAAAAAAYAOeH///////////////////AAA/gAAAABQAAADf//////8Af//AAAAAAAAAcAPQH//////////////////8AAA/AAAAAEAAAAAP///////z///4AAAAAAADuAEDv//////////////////+AAA+AAAAAAAAAABP///////x///8AAAAAAAPHAf/////////////////////4AA8AAAAAAAAAAAn///////x///8AAAAAAAPPx//////////////////////6AA4AAAAAAAAAAAD///////////6AAAAAAAAPH//////////////////////6AAwAAAAAAAAAAAC///////////kAAAAAAAAQP//////////////////////zAAAAAAAAAAAAAABv////////+MMAAAAAAAAC///////////////////////7AAAAAAAAAAAAAAAL////////7wPgAAAAAAAf///////////////////////yAAAAAAAAAAAAAAAP/////////gCgAAAAAAAD///////////////////////iAAAAAAAAAAAAAAAP/////////pAAAAAAAAAD/////vP////////////////BAAAAAAAAAAAAAAAP/////////+AAAAAAAAAB//v//GP///////////////+AAAAAAAAAAAAAAAAP////////8wAAAAAAAAAB//P/+EP///////////////8CAAAAAAAAAAAAAAAP////////wgAAAAAAAADj/jz/+AD///////////////4HgAAAAAAAAAAAAAAP////////gAAAAAAAAAH/4Fw/4AA//////////////+ACAAAAAAAAAAAAAAAP////////gAAAAAAAAAH/wAcP8PA//////////////8AAAAAAAAAAAAAAAAAP///////8AAAAAAAAAAH/gMHfV///////////////v4AMAAAAAAAAAAAAAAAP///////8AAAAAAAAAAH/IMCOH//////////////+ZwAMAAAAAAAAAAAAAAAH///////oAAAAAAAQAAH/AACGP//////////////8BwAMAAAAAAAAAAAAAAAH///////wAAAAAAAAAAH+AAYDH//////////////+g4AYAAAAAAAAAAAAAAAD///////wAAAAAAAAAAAgf+AABs//////////////g4D4AAAAAAAAAAAAAAAB///////wAAAAAAAAAAAh/+AAAA//////////////A4fwAAAAAAAAAAAAAAAB///////gAAAAAAAAAAB//8AAAA//////////////Ah2AAAAAAAAAAAAAAAAAP/////+AAAAAAAAAAAD//+AAAB//////////////gjwAAAAAAAAAAAAAAAAAH/////4AAAAAAAAAAQH///4GAB//////////////gBAAAAAAAAAAAAAAAAAAG/////4AAAAAAAAAAAP///8PwD//////////////gCAAAAAAAAAAAAAAAAAACf////4AAAAAAAAAAAP////v////////////////gAAAAAAAAAAAAAAAAAAABv//xAYAAAAAAAAAAAP//////3//H///////////gAAAAAAAAAAAAAAAAAAAAv//AAYAAAAAAAAAAAf/////////H///////////wAAAAAAAAAAAAAAAAAAAB3/+AAcAAAAAAAAAAB///////8//h///////////gAAAAAAAAAAAAAAAAAAAAZ/+AAMAAAAAAAAAAD///////8//wH//////////AAAAAAAAAAAAAAAAAAAAAJ/+AAEAAAAAAAAAAH///////+f/wB/f////////AAAAAAAAAAAAAAAAAAAAAI/8AAAAAAAAAAAAAH///////+f/44Af///////8QAAAAAAAAAAAAAAAAAAAACf8AAAAAAAAAAAAAP///////+H//+AP///////4gAAAAAAAAAAAAAAAAAAAAAP8AAvAAAAAAAAAAP////////H///AD///////ggAAAAAAAAAAAAAAAAAAAAAH8AQBggAAAAAAAAf////////n//+ADf/4P//YAAAAAAAAAAAAAAAAAAAAAAAH+A4AYAAAAAAAAAP////////j//+AAf/4H/+IAAAAAAAAAAAAAAAgAAAAAAAH/B4ABwAAAAAAAAP////////h//8AAf/gD/8YAAAAAAAAAAAAAAAAAAAAAAAD/lwAD8AAAAAAAAP////////x//4AAf/AD/8QAAAAAAAAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAP////////4//gAAf+AB/+AAwAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAAP////////4f+AAAf8AD//AAwAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAf////////8/8AAAPwAAP/gAgAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAf////////+fgAAAPwAAP/gAwAAAAAAAAAAAAAAAAAAAAAAAA/AAAAAAAAAAAf/////////eAAAAHwAAP/gAsAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAf/////////gBAAAHwAAM/gAKAAAAAAAAAAAAAAAAAAAAAAAADABIAAAAAAAAH/////////gIAAADwAAEfgALAAAAAAAAAAAAAAAAAAAAAAAADgPfIAAAAAAAH/////////34AAADwAAIPABIAAAAAAAAAAAAAAAAAAAAAAAAAyPf+AAAAAAAD//////////4AAADoAAIEACBAAAAAAAAAAAAAAAAAAAAAAAAA8///AAAAAAAB//////////wAAABIAAMAAEHAAAAAAAAAAAAAAAAAAAAAAAAAE///gAAAAAAB//////////wAAAAMAAEAAADgIAAAAAAAAAAAAAAAAAAAAAAAAf//wAAAAAAAf/////////gAAAAMAADAAMDAAAAAAAAAAAAAAAAAAAAAAAAAA////gAAAAAAP/B///////gAAAAAABDgAeAAAAAAAAAAAAAAAAAAAAAAAAAAAf///wAAAAAACAA3//////AAAAAAAAxgA+AAAAAAAAAAAAAAAAAAAAAAAAAAAf///4AAAAAAAAAD/////+AAAAAAAAZgB8BAAAAAAAAAAAAAAAAAAAAAAAAAB////4AAAAAAAAAD/////8AAAAAAAAMwH8AIAAAAAAAAAAAAAAAAAAAAAAAAB////8AAAAAAAAAD/////wAAAAAAAAHQf8AIAAAAAAAAAAAAAAAAAAAAAAAAD////4AAAAAAAAAH/////gAAAAAAAAHgf8cIAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAH/////AAAAAAAAAD4f8ASgAAAAAAAAAAAAAAAAAAAAAAAH////+4AAAAAAAAH/////AAAAAAAAABwP50QwAAAAAAAAAAAAAAAAAAAAAAAH/////+AAAAAAAAD////+AAAAAAAAAB8P5wAL4AgAAAAAAAAAAAAAAAAAAAAD//////4AAAAAAAB////8AAAAAAAAAA8AxQif/AAAAAAAAAAAAAAAAAAAAAAH//////8AAAAAAAA////4AAAAAAAAAAcAAQAD/gAAAAAAAAAAAAAAAAAAAAAH///////gAAAAAAA////4AAAAAAAAAAMABAAI/ywAAAAAAAAAAAAAAAAAAAAD///////gAAAAAAA////4AAAAAAAAAADgAAAIf8BAAAAAAAAAAAAAAAAAAAAD///////gAAAAAAAf///4AAAAAAAAAAB+AABA/4AAAAAAAAAAAAAAAAAAAAAB///////gAAAAAAAf///4AAAAAAAAAAAAfsgAOMAAAAAAAAAAAAAAAAAAAAAA///////AAAAAAAAf///8AAAAAAAAAAAABCAAAGgAAAAAAAAAAAAAAAAAAAAA///////AAAAAAAAP///+AAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAAAAAAAAAf/////+AAAAAAAAP///8AAAAAAAAAAAAAACgCAEAAAAAAAAAAAAAAAAAAAAAf/////8AAAAAAAAf///8AQAAAAAAAAAAAAB+CAAAAAAAQAAAAAAAAAAAAAAAP/////4AAAAAAAAf///+AQAAAAAAAAAAAAD8DAAAAAAAAAAAAAAAAAAAAAAAP/////4AAAAAAAA////+AwAAAAAAAAAAAA38DgAAAAAAAAAAAAAAAAAAAAAAH/////4AAAAAAAA////+BwAAAAAAAAAAAD/8HgAAAAAAAAAAAAAAAAAAAAAAB/////4AAAAAAAA////8PwAAAAAAAAAAAH//XgAABABAAAAAgAAAAAAAAAAAAf////4AAAAAAAA////wPgAAAAAAAAAAAP//3wAAAAAAAAAAAAAAAAAAAAAAAP////wAAAAAAAA////gPgAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAP////wAAAAAAAAf//+APgAAAAAAAAAAAf///8AAAAAAAAAAAAAAAAAAAAAAAP////wAAAAAAAAf//+APgEAAAAAAAAAD////+AAIAAAAAAAAAIAAAAAAAAAAP////gAAAAAAAAP//+AfAAAAAAAAAAAf////+AAEAAAAAAAAAAAAAAAAAAAAP////AAAAAAAAAP///AfAAAAAAAAAAA//////AAAAAAAAAAAAAAAAAAAAAAAP///4AAAAAAAAAP//+APAAAAAAAAAAA//////gAAAAAAAAAAAAAAAAAAAAAAf///gAAAAAAAAAH//+AOAAAAAAAAAAB//////wAAAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAH//4AEAAAAAAAAAAA//////4AAAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAH//4AAAAAAAAAAAAB//////4AAAAAAAAAAAAAAAAAAAAAAf///AAAAAAAAAAH//4AAAAAAAAAAAAA//////8AAAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAD//wAAAAAAAAAAAAAf/////8AAAAAAAAAAAAAAAAAAAAAAf//8AAAAAAAAAAB//gAAAAAAAAAAAAAf/////4AAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAB//gAAAAAAAAAAAAAf/////4AAAAAAAAAAAAAAAAAAAAAA///wAAAAAAAAAAA//AAAAAAAAAAAAAAP/////4AAAAAAAAAAAAAAAAAAAAAAf//wAAAAAAAAAAA/+AAAAAAAAAAAAAAP/AP//wAAAAAAAAAAAAAAAAAAAAAA//vgAAAAAAAAAAA/4AAAAAAAAAAAAAAP8AG//gAAAAAAAAAAAAAAAAAAAAAA//3AAAAAAAAAAAAQAAAAAAAAAAAAAAAOAAF//gAAAAAAAAAAAAAAAAAAAAAB//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAABAAAAAAAAAAAAAAAAAAB//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAgAAAAAAAAAAAAAAAAAD//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAQAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAAAcAAAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAADQAAAAAAAAAAAAAAAAAD/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAHAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAOAAAAAAAAAAAAAAAAAAF/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",landBits=null;
  function isLand(lat,lon){
    if(!landBits){var bin=atob(LAND);landBits=new Uint8Array(bin.length);for(var j=0;j<bin.length;j++)landBits[j]=bin.charCodeAt(j);}
    var r=Math.min(179,Math.max(0,Math.floor(90-lat))),c=Math.min(359,Math.max(0,Math.floor(lon+180))),idx=r*360+c;
    return (landBits[idx>>3]>>(7-(idx&7)))&1;
  }
  function sph(lat,lon){var a=lat*Math.PI/180,b=lon*Math.PI/180;return [Math.cos(a)*Math.sin(b),Math.sin(a),Math.cos(a)*Math.cos(b)];}
  function fib(M,fn){var ga=Math.PI*(3-Math.sqrt(5));for(var k=0;k<M;k++){var y=1-(k+.5)/M*2,lat=Math.asin(y)*180/Math.PI,lon=((k*ga*180/Math.PI)%360+540)%360-180;fn(lat,lon);}}
  function globePoints(n){
    var CITIES=[[51.5,-0.1],[40.7,-74],[37.8,-122.4],[52.5,13.4],[48.9,2.3],[-33.9,151.2]];
    var core=mobile?6:10,ring=mobile?14:26,special=CITIES.length*(core+ring);
    var rest=n-special,landN=Math.round(rest*.8),oceanN=rest-landN;
    var land=[],ocean=[];
    fib(Math.round(landN/.236),function(la,lo){if(isLand(la,lo))land.push(sph(la,lo));});
    fib(Math.max(1,Math.round(oceanN/.76)),function(la,lo){if(!isLand(la,lo))ocean.push(sph(la,lo));});
    var out=[],k;
    for(k=0;k<landN;k++){var L=land[Math.floor(k*land.length/landN)]||land[k%land.length];out.push([L[0],L[1],L[2],1]);}
    for(k=0;k<oceanN;k++){var O=ocean[Math.floor(k*ocean.length/oceanN)]||ocean[k%ocean.length];out.push([O[0],O[1],O[2],0]);}
    CITIES.forEach(function(c,ci){
      var P=sph(c[0],c[1]);
      for(k=0;k<core;k++){var j=.006;var v=[P[0]+(Math.random()-.5)*j,P[1]+(Math.random()-.5)*j,P[2]+(Math.random()-.5)*j],l=Math.hypot(v[0],v[1],v[2]);out.push([v[0]/l,v[1]/l,v[2]/l,2]);}
      for(k=0;k<ring;k++)out.push([P[0],P[1],P[2],3,k/ring,ci/CITIES.length]);
    });
    // shuffle so formations do not map region-to-region
    for(k=out.length-1;k>0;k--){var r=Math.floor(Math.random()*(k+1)),tmp=out[k];out[k]=out[r];out[r]=tmp;}
    return out;
  }
  function build(){
    var side=lowEnd?(mobile?13:17):(mobile?16:22);N=side*side*side;
    var S=20,data=new Float32Array(N*S),logo=logoSamples(N),glb=globePoints(N);
    var HB=[.42,.66,.9,1.18],HT=HB[0]+HB[1]+HB[2]+HB[3];
    for(var i=0;i<N;i++){
      var o=i*S,r1=Math.random(),r2=Math.random(),r3=Math.random(),r4=Math.random();
      data[o]=r1;data[o+1]=r2;data[o+2]=r3;data[o+3]=r4;
      // galaxy: three spiral arms, a dense core and a thin halo of dust
      var gr,gth,gh;
      var gq=Math.random();
      if(gq<.14){gr=.15+Math.random()*1.25;gth=Math.random()*6.2832;gh=gauss()*.1;}
      else if(gq<.26){gr=Math.abs(gauss())*.085;gth=Math.random()*6.2832;gh=gauss()*.055;}
      else{var arm=Math.floor(Math.random()*2);gr=.06+Math.pow(Math.random(),1.15)*1.0;gth=arm*3.1416+gr*5.2+gauss()*(.24-.1*gr);gh=gauss()*.035*(1.1-gr);}
      data[o+4]=gr;data[o+5]=gth;data[o+6]=gh;
      // ribbon
      data[o+7]=Math.random();data[o+8]=Math.random()*2-1;data[o+9]=gauss();
      // globe: land, faint ocean, city markers and their pulse rings
      var G=glb[i];data[o+10]=G[0];data[o+11]=G[1];data[o+12]=G[2];data[o+13]=G[3];if(G[3]>2.5){data[o+1]=G[4];data[o+2]=G[5];}
      // four columns, faces denser than the inside
      var f=(i+.5)/N*HT,ci=0,acc=0;while(ci<3&&f>acc+HB[ci]){acc+=HB[ci];ci++;}
      var bw=.15,bx=-.75+ci*.5,hb=HB[ci],px,py,pz,sel=Math.random(),sx=Math.random()<.5?-1:1,sz2=Math.random()<.5?-1:1;
      if(sel<.38){px=sx*bw;pz=sz2*bw;py=Math.random()*hb;}
      else if(sel<.62){py=hb;px=(Math.random()*2-1)*bw;pz=(Math.random()*2-1)*bw;if(Math.random()<.5){if(Math.random()<.5)px=sx*bw;else pz=sz2*bw;}}
      else if(sel<.92){py=Math.round(Math.random()*hb/.055)*.055;if(Math.random()<.5){px=sx*bw;pz=(Math.random()*2-1)*bw;}else{pz=sz2*bw;px=(Math.random()*2-1)*bw;}}
      else{py=0;if(Math.random()<.5){px=sx*bw;pz=(Math.random()*2-1)*bw;}else{pz=sz2*bw;px=(Math.random()*2-1)*bw;}}
      data[o+14]=bx+px;data[o+15]=py-.58;data[o+16]=pz;
      // logo
      data[o+17]=logo[i][0];data[o+18]=logo[i][1];data[o+19]=logo[i][2];
    }
    gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);
    var names=[["aSeed",4,0],["aGal",3,4],["aRib",3,7],["aLat",4,10],["aBar",3,14],["aLogo",3,17]];
    names.forEach(function(a){var loc=gl.getAttribLocation(prog,a[0]);if(loc<0)return;gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,a[1],gl.FLOAT,false,S*4,a[2]*4);});
  }

  function docRect(el){
    var x=0,y=0,e=el;
    while(e){x+=e.offsetLeft;y+=e.offsetTop;e=e.offsetParent;}
    return {left:x,top:y,width:el.offsetWidth,height:el.offsetHeight};
  }
  function headField(head){
    if(!head)return null;
    var r=docRect(head),wrap=head.parentElement,wr=docRect(wrap);
    var pr=parseFloat(getComputedStyle(wrap).paddingRight)||20;
    var tw=0;[].forEach.call(head.children,function(ch){var w=ch.offsetWidth;if(ch.tagName==="H2"){var rg=document.createRange();rg.selectNodeContents(ch);w=rg.getBoundingClientRect().width;}tw=Math.max(tw,w);});
    var right=wr.left+wr.width-pr,free=right-(r.left+Math.min(r.width,tw||r.width)+48);
    var cy=r.top+r.height/2;
    if(!mobile&&free>=240){var w=Math.min(free,560);return {x:right-w/2,y:cy-34,s:Math.min(w*.42,(r.height/2+68)/1.02,230),a:1};}
    stacked=true;
    var ss=mobile?Math.min(W*.25,92):108;return {x:r.left+ss*1.1,y:r.top-(mobile?108:118),s:ss,a:1};
  }
  /* How it works sits in two columns on desktop: the shape fills the left column, under the heading */
  function procField(head){
    if(!head)return null;
    var split=head.parentElement&&head.parentElement.classList.contains("flow-split"),flowEl=document.getElementById("flow");
    if(!split||!flowEl||mobile||window.innerWidth<=1000)return headField(head);
    var r=docRect(head),f=docRect(flowEl),colW=Math.max(160,f.left-r.left-40);
    var below=Math.max(160,f.top+f.height-(r.top+r.height));
    var s=Math.min(colW*.36,below*.34,190);
    return {x:r.left+colW*.46,y:r.top+r.height+below*.48,s:s,a:1};
  }
  function layout(){
    var small=window.innerWidth<900;
    DPR=Math.min(window.devicePixelRatio||1,small?2.5:1.5);
    var budget=(small?3400000:3000000)/(window.innerWidth*window.innerHeight);if(DPR*DPR>budget)DPR=Math.max(.75,Math.sqrt(budget));
    W=window.innerWidth;H=window.innerHeight;
    cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);
    cv.style.width="100%";cv.style.height="100%";
    gl.viewport(0,0,cv.width,cv.height);
    var m=W<900;if(m!==mobile){mobile=m;build();}
    measure();
  }
  function measure(){
    if(!home||home.hidden)return;
    var auto=document.getElementById("automate"),demo=home.querySelector(".hero .demo");
    D.autoTop=auto?docRect(auto).top:H;
    var hs=home.querySelector(".hero"),hr=hs?docRect(hs):{top:0,height:H};
    D.hero=mobile?{x:W*.5,y:hr.top+hr.height*.9,s:W*1.05,a:.8}:{x:W*.5,y:hr.top+hr.height*.94,s:Math.min(W*.8,1240),a:1};
    var ht=home.querySelector('.hero-top');D.mask=ht?docRect(ht):null;
    stacked=false;
    D.work=headField(home.querySelector('[aria-labelledby="workTitle"] .head'));
    D.proc=procField(home.querySelector('#process .head'));
    if(root.classList.contains("sort-stack")!==stacked){root.classList.toggle("sort-stack",stacked);D.work=headField(home.querySelector('[aria-labelledby="workTitle"] .head'));D.proc=procField(home.querySelector('#process .head'));}
    D.mark=null;
    if(markEl){var mr=docRect(markEl);if(mr.width>10)D.mark={x:mr.left+mr.width/2,y:mr.top+mr.height*.46,s:mr.width/2,a:mobile?1.6:1};}
    D.max=Math.max(0,root.scrollHeight-H);
    var c2=D.work?D.work.y-H/2:D.autoTop+H;
    var c3=D.proc?D.proc.y-H/2:c2+H;
    var c4=D.mark?Math.min(D.mark.y-H*.6,D.max):D.max;
    holds=[[0,D.autoTop-H*.95],[D.autoTop-H*.5,c2-H*.62],[c2-H*.14,c2+H*.22],[c3-H*.14,c3+H*.22],[c4-H*.1,Infinity]];
    for(var k=0;k<holds.length;k++){
      if(k>0)holds[k][0]=Math.max(holds[k][0],holds[k-1][1]+H*.15);
      holds[k][1]=Math.max(holds[k][1],holds[k][0]);
    }
    beamA=c2-H*.3;beamB=c2+H*.16;
  }
  function progress(y){
    for(var k=0;k<holds.length;k++){
      if(y<=holds[k][1])return (y>=holds[k][0]||k===0)?k:k-1+(y-holds[k-1][1])/(holds[k][0]-holds[k-1][1]);
    }
    return holds.length-1;
  }
  var FV=new Float32Array(20);
  function setF(i,f,sy,fixed){
    if(!f){FV[i*4]=-9999;FV[i*4+1]=-9999;FV[i*4+2]=1;FV[i*4+3]=0;return;}
    FV[i*4]=f.x;FV[i*4+1]=fixed?f.y:f.y-sy;FV[i*4+2]=f.s;FV[i*4+3]=f.a;
  }

  var lastDraw=0,lastScrollT=0;
  window.addEventListener("scroll",function(){lastScrollT=performance.now();},{passive:true});
  function frame(now){
    if(!running)return;
    var active=(now-lastScrollT<1400)||Math.abs(prS-progress(window.pageYOffset))>.002;
    var minGap=active?(lowEnd?31:0):(lowEnd?48:31);
    if(now-lastDraw<minGap){requestAnimationFrame(frame);return;}
    lastDraw=now;
    var rdt=Math.min(.25,(now-(last||now))/1000),dt=Math.min(.05,rdt);last=now;t+=dt;
    var sy=window.pageYOffset;
    var k=1-Math.exp(-rdt*1.9);
    prS+=(progress(sy)-prS)*k;
    scanS+=(Math.min(1,Math.max(0,(sy-beamA)/(beamB-beamA)))-scanS)*k;
    if(Math.abs(prS-Math.round(prS))<1e-4)prS=Math.round(prS);
    setF(0,D.hero,sy,false);
    setF(1,{x:W/2,y:H*.56,s:mobile?W*.5:W*.36,a:mobile?.75:1},sy,true);
    setF(2,D.work,sy,false);setF(3,D.proc,sy,false);setF(4,D.mark,sy,false);
    gl.useProgram(prog);
    gl.uniform1f(U.uTime,t);gl.uniform1f(U.uPr,prS);gl.uniform1f(U.uScan,scanS);
    gl.uniform1f(U.uDpr,DPR);gl.uniform1f(U.uGain,(dark?(mobile?1.3:1.6):(mobile?1.3:1.6))*(lowEnd?1.4:1));
    gl.uniform2f(U.uRes,W,H);gl.uniform4fv(U.uF,FV);
    var M=D.mask;if(M)gl.uniform4f(U.uMask,M.left,M.top-sy,M.left+M.width,M.top+M.height-sy);else gl.uniform4f(U.uMask,-1e4,-1e4,-1e4,-1e4);
    gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    if(dark)gl.blendFunc(gl.ONE,gl.ONE);else gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
    if(dark&&!(lowEnd&&mobile)){gl.uniform1f(U.uSizeMul,mobile?4.5:6);gl.uniform1f(U.uAlphaMul,mobile?.1:.085);gl.uniform1f(U.uSoft,1);gl.drawArrays(gl.POINTS,0,N);}
    gl.uniform1f(U.uSizeMul,1);gl.uniform1f(U.uAlphaMul,1);gl.uniform1f(U.uSoft,0);
    gl.drawArrays(gl.POINTS,0,N);
    requestAnimationFrame(frame);
  }
  function setRunning(){
    var onHome=!!(home&&!home.hidden);
    var should=onHome&&!document.hidden;
    cv.classList.toggle("on",onHome);
    root.classList.toggle("sort-live",onHome);
    if(should&&!running){running=true;last=0;measure();prS=progress(window.pageYOffset);requestAnimationFrame(frame);}
    else if(!should&&running){running=false;}
  }
  cv.addEventListener("webglcontextlost",function(e){e.preventDefault();running=false;root.classList.remove("sort-live","sort-gl","sort-stack");cv.remove();});
  readColors();
  layout();
  var rzT=0;
  window.addEventListener("resize",function(){
    clearTimeout(rzT);
    rzT=setTimeout(layout,60);
  },{passive:true});
  window.addEventListener("load",measure);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){build();measure();});
  document.addEventListener("visibilitychange",setRunning);
  window.addEventListener("hashchange",function(){setTimeout(function(){measure();setRunning();},80);});
  window.addEventListener("popstate",function(){setTimeout(setRunning,80);});
  if(home&&window.MutationObserver){new MutationObserver(function(){setTimeout(function(){measure();setRunning();},40);}).observe(home,{attributes:true,attributeFilter:["hidden"]});}
  if(window.MutationObserver){new MutationObserver(readColors).observe(root,{attributes:true,attributeFilter:["data-theme"]});}
  if(window.matchMedia){var dm=matchMedia("(prefers-color-scheme: dark)");if(dm.addEventListener)dm.addEventListener("change",readColors);}
  if(window.ResizeObserver){
    /* Re-measure on the next frame, and only when a size really changed, so measuring never feeds back into the observer */
    var roRaf=0,roW=-1,roH=-1;
    var ro=new ResizeObserver(function(){
      if(roRaf)return;
      roRaf=requestAnimationFrame(function(){
        roRaf=0;
        var w=document.body.offsetWidth,h=home?home.offsetHeight:0;
        if(w===roW&&h===roH)return;
        roW=w;roH=h;measure();
      });
    });
    if(home)ro.observe(home);ro.observe(document.body);
  }
  setRunning();
})();
