/* Clarke Systems Group – motion (all pages).
   Every effect here is a pure function of the scroll position, measured against layout that is read once
   per resize. Scrolling never triggers a layout read, so the page stays smooth at any speed, and a fast
   flick, a slow read or a scroll backwards always lands on the correct frame.

     [data-split]    headline words rise into place once
     [data-fill]     a statement fills in, word by word, as it is read
     [data-drive]    scrollytelling: the [data-step] being read drives the scene beside it
     [data-tally]    numbers that add up as they come into view
     [data-focus]    a typographic list whose lines fill in as each one is reached
     [data-strike]   before and after: today's manual work is struck out, the automated version arrives
     [data-draw]     a process line that draws itself through its steps
     [data-thread]   anchors for one line that runs down the page through them, drawn as you scroll
     .spot           cards that catch a soft light under the pointer
*/
(function(){
  "use strict";
  var root=document.documentElement;
  var reduce=!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);
  var fine=!!(window.matchMedia&&matchMedia("(hover: hover) and (pointer: fine)").matches);
  var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};
  var clamp=function(x,a,b){return x<a?a:x>b?b:x;};
  var VH=window.innerHeight,VW=window.innerWidth,Y=window.pageYOffset,DOC=1;
  var parts=[];
  function top(el){var r=el.getBoundingClientRect();return r.top+window.pageYOffset;}

  /* wrap every word of an element's text in spans, keeping inner markup (strong, em, line spans) */
  function wrapWords(el,outer,inner){
    var n=0,walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null),nodes=[],t;
    while((t=walk.nextNode()))nodes.push(t);
    nodes.forEach(function(node){
      var bits=node.nodeValue.split(/(\s+)/),frag=document.createDocumentFragment();
      bits.forEach(function(b){
        if(!b)return;
        if(/^\s+$/.test(b)){frag.appendChild(document.createTextNode(b));return;}
        var o=document.createElement("span");o.className=outer;
        if(inner){var i=document.createElement("span");i.className=inner;i.style.setProperty("--i",n);i.textContent=b;o.appendChild(i);}
        else{o.textContent=b;o.style.setProperty("--i",n);}
        n++;frag.appendChild(o);
      });
      node.parentNode.replaceChild(frag,node);
    });
    return n;
  }

  /* ---------- headlines: words rise into place ---------- */
  var splits=$$("[data-split]");
  splits.forEach(function(el){wrapWords(el,"w","wi");});
  if(splits.length){
    if(reduce||!("IntersectionObserver" in window))splits.forEach(function(el){el.classList.add("in");});
    else{
      var sio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");sio.unobserve(e.target);}});},{rootMargin:"0px 0px -6% 0px"});
      splits.forEach(function(el){sio.observe(el);});
    }
  }

  if(reduce){root.classList.add("motion-off");}

  /* ---------- statements: filled in as they are read ---------- */
  $$("[data-fill]").forEach(function(el){
    var n=wrapWords(el,"fw"),words=$$(".fw",el),m={el:el,t:0,h:1,last:-1};
    if(reduce){words.forEach(function(w){w.style.opacity=1;});return;}
    m.measure=function(){m.t=top(el);m.h=el.offsetHeight;};
    m.update=function(){
      var p=clamp((Y+VH*.86-m.t)/(m.h+VH*.42),0,1);
      if(Math.abs(p-m.last)<.002)return;m.last=p;
      var f=p*n*1.12;
      for(var i=0;i<n;i++){words[i].style.opacity=(.16+.84*clamp(f-i,0,1)).toFixed(3);}
    };
    parts.push(m);
  });

  /* ---------- scrollytelling: the text scrolls as normal; the step being read drives the scene ----------
     The reading line is the middle of the free screen (below the scene on phones, where it sits on top).
     The scene's stage is written to el.csgStage for the 3D: whole numbers at rest, blends between. */
  var ease=function(a,b,x){var t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
  $$("[data-drive]").forEach(function(el){
    var steps=$$("[data-step]",el),n=steps.length,pin=el.querySelector(".scrolly-pin"),m={el:el,c:[],line:.5,cur:-1};
    if(!n)return;
    el.csgStage=0;
    m.measure=function(){
      m.c=steps.map(function(s){return top(s)+s.offsetHeight/2;});
      var stacked=pin&&getComputedStyle(el.querySelector(".scrolly-grid")).gridTemplateColumns.split(" ").length<2;
      m.line=stacked?(pin.offsetHeight+(parseFloat(getComputedStyle(pin).top)||0)+VH)/2:VH*.5;
    };
    m.update=function(){
      var L=Y+m.line,c=m.c,st;
      if(L<=c[0])st=0;
      else if(L>=c[n-1])st=n-1;
      else{var k=0;while(k<n-2&&L>=c[k+1])k++;st=k+ease(.3,.7,(L-c[k])/(c[k+1]-c[k]));}
      el.csgStage=st;
      var a=Math.round(st);
      if(a!==m.cur){m.cur=a;steps.forEach(function(s,i){s.classList.toggle("on",i===a);s.classList.toggle("past",i<a);});}
    };
    parts.push(m);
  });

  /* ---------- numbers that add up as they come into view ---------- */
  $$("[data-tally]").forEach(function(el){
    var to=+el.getAttribute("data-tally"),txt=el.textContent,suf=txt.replace(/^[\d,.\s]+/,""),m={el:el,t:0,last:-1};
    if(reduce)return;
    m.measure=function(){m.t=top(el);};
    m.update=function(){
      var p=clamp((Y+VH*.95-m.t)/(VH*.45),0,1),e=1-Math.pow(1-p,3),v=Math.round(to*e);
      if(v===m.last)return;m.last=v;
      el.textContent=v.toLocaleString("en-GB")+(p>=1?suf:"");
    };
    parts.push(m);
  });

  /* ---------- typographic list: the line at the centre is in focus ---------- */
  $$("[data-focus]").forEach(function(el){
    var items=$$(":scope > *",el),m={el:el,c:[]};
    if(reduce){items.forEach(function(it){it.style.setProperty("--f",1);});return;}
    m.measure=function(){m.c=items.map(function(it){return top(it)+it.offsetHeight/2;});};
    m.update=function(){
      var mid=Y+VH*.62;
      items.forEach(function(it,i){it.style.setProperty("--f",clamp(1-(m.c[i]-mid)/(VH*.3),0,1).toFixed(3));});
    };
    parts.push(m);
  });

  /* ---------- before and after ---------- */
  $$("[data-strike]").forEach(function(el){
    var before=$$(".before li",el),after=$$(".after li",el),m={el:el,t:0,h:1};
    if(reduce){before.forEach(function(li){li.classList.add("x");});after.forEach(function(li){li.classList.add("y");});return;}
    m.measure=function(){m.t=top(el);m.h=el.offsetHeight;};
    m.update=function(){
      var p=clamp((Y+VH*.8-m.t)/(m.h*.9+VH*.2),0,1);
      before.forEach(function(li,i){li.classList.toggle("x",p>(i+.6)/(before.length+1.4));});
      after.forEach(function(li,i){li.classList.toggle("y",p>(i+.9)/(after.length+1.4));});
    };
    parts.push(m);
  });

  /* ---------- a process line that draws itself ---------- */
  $$("[data-draw]").forEach(function(el){
    var steps=$$(".step",el),m={el:el,t:0,h:1,o:[]};
    if(reduce){el.style.setProperty("--p",1);steps.forEach(function(s){s.classList.add("on");});return;}
    m.measure=function(){m.t=top(el);m.h=el.offsetHeight;var vert=getComputedStyle(el).gridTemplateColumns.split(" ").length<2;m.o=steps.map(function(s,i){return vert?(top(s)-m.t+24)/m.h:(i+.02)/steps.length;});};
    m.update=function(){
      var p=clamp((Y+VH*.62-m.t)/m.h,0,1);
      el.style.setProperty("--p",p.toFixed(4));
      steps.forEach(function(s,i){s.classList.toggle("on",p>=m.o[i]);});
    };
    parts.push(m);
  });

  /* ---------- one line down the page, through every anchor ---------- */
  var anchors=$$("[data-thread]").filter(function(a){return !a.closest("[data-drive]");}),main=document.getElementById("main");
  if(anchors.length>1&&main&&!reduce){
    var NS="http://www.w3.org/2000/svg";
    var svg=document.createElementNS(NS,"svg");svg.setAttribute("class","thread");svg.setAttribute("aria-hidden","true");svg.setAttribute("focusable","false");
    svg.innerHTML='<defs><linearGradient id="thrG" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#12b5a0"/><stop offset="1" stop-color="#2d4fe0"/></linearGradient><radialGradient id="thrH"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="#12b5a0"/><stop offset="1" stop-color="#12b5a0" stop-opacity="0"/></radialGradient></defs><path class="thr-base"/><path class="thr-line"/><circle class="thr-head" r="9" fill="url(#thrH)"/>';
    main.insertBefore(svg,main.firstChild);
    var pBase=svg.querySelector(".thr-base"),pLine=svg.querySelector(".thr-line"),head=svg.querySelector(".thr-head");
    var tm={len:1,ys:[],ls:[],xs:[],on:false,mt:0};
    tm.measure=function(){
      tm.on=VW>=900;svg.style.display=tm.on?"":"none";if(!tm.on)return;
      tm.mt=top(main);
      var W=main.clientWidth,H=main.offsetHeight,g=Math.max(20,(VW-Math.min(VW,1240))/2*.5+16);
      svg.setAttribute("viewBox","0 0 "+W+" "+H);svg.style.height=H+"px";
      /* the line keeps to the gutter on the side of the next anchor, and swings in through each one */
      var ml=main.getBoundingClientRect().left,P=anchors.map(function(a){
        var r=a.getBoundingClientRect(),y=r.top+window.pageYOffset-tm.mt+r.height/2;
        return [r.left+r.width/2-ml,y];
      });
      var gx=function(x){return x>W/2?W-g:g;},pts=[];
      P.forEach(function(q,i){
        if(i>0){
          var pr=P[i-1],gap=q[1]-pr[1];
          if(gap>VH*.9){pts.push([gx(pr[0]),pr[1]+VH*.38]);pts.push([gx(q[0]),q[1]-VH*.38]);}
          else pts.push([(gx(pr[0])+gx(q[0]))/2,(pr[1]+q[1])/2]);
        }
        pts.push(q);
      });
      /* a smooth curve through the points: each tangent scaled to its own segment, so long and short runs never overshoot */
      var unit=function(x,y){var l=Math.hypot(x,y)||1;return [x/l,y/l];};
      var d="M"+pts[0][0].toFixed(1)+" "+pts[0][1].toFixed(1);
      for(var i=0;i<pts.length-1;i++){
        var p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;
        var dist=Math.hypot(p2[0]-p1[0],p2[1]-p1[1])/3,T1=unit(p2[0]-p0[0],p2[1]-p0[1]),T2=unit(p3[0]-p1[0],p3[1]-p1[1]);
        var c1=[p1[0]+T1[0]*dist,p1[1]+T1[1]*dist],c2=[p2[0]-T2[0]*dist,p2[1]-T2[1]*dist];
        c1[0]=clamp(c1[0],g*.5,W-g*.5);c2[0]=clamp(c2[0],g*.5,W-g*.5);
        d+=" C"+c1[0].toFixed(1)+" "+c1[1].toFixed(1)+" "+c2[0].toFixed(1)+" "+c2[1].toFixed(1)+" "+p2[0].toFixed(1)+" "+p2[1].toFixed(1);
      }
      pBase.setAttribute("d",d);pLine.setAttribute("d",d);
      tm.len=pLine.getTotalLength();
      pLine.style.strokeDasharray=tm.len+" "+tm.len;
      tm.ys=[];tm.ls=[];tm.xs=[];
      for(var k=0;k<=400;k++){var l=tm.len*k/400,pt=pLine.getPointAtLength(l);tm.ls.push(l);tm.ys.push(pt.y);tm.xs.push(pt.x);}
    };
    tm.update=function(){
      if(!tm.on)return;
      var yy=Y+VH*.72-tm.mt,k=0;
      while(k<400&&tm.ys[k+1]<=yy)k++;
      if(k<400&&tm.ys[k+1]<yy)k=400;
      var f=k<400?clamp((yy-tm.ys[k])/Math.max(.001,tm.ys[k+1]-tm.ys[k]),0,1):0;
      var l=k<400?tm.ls[k]+(tm.ls[k+1]-tm.ls[k])*f:tm.len;
      var x=k<400?tm.xs[k]+(tm.xs[k+1]-tm.xs[k])*f:tm.xs[400],y=k<400?tm.ys[k]+(tm.ys[k+1]-tm.ys[k])*f:tm.ys[400];
      if(yy<tm.ys[0]){l=0;x=tm.xs[0];y=tm.ys[0];}
      pLine.style.strokeDashoffset=(tm.len-l).toFixed(1);
      head.setAttribute("cx",x.toFixed(1));head.setAttribute("cy",y.toFixed(1));
      head.style.opacity=l>2&&l<tm.len-2?1:0;
    };
    parts.push(tm);
  }

  /* ---------- reading progress ---------- */
  var bar=document.querySelector(".progress i");
  if(bar)parts.push({measure:function(){DOC=Math.max(1,document.documentElement.scrollHeight-VH);},update:function(){bar.style.transform="scaleX("+clamp(Y/DOC,0,1).toFixed(4)+")";}});

  /* ---------- soft light under the pointer ---------- */
  if(fine&&!reduce){
    document.addEventListener("pointermove",function(e){
      var c=e.target.closest&&e.target.closest(".spot");if(!c)return;
      var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left).toFixed(0)+"px");c.style.setProperty("--my",(e.clientY-r.top).toFixed(0)+"px");
    },{passive:true});
  }

  /* ---------- the loop: measure on resize, update on scroll ---------- */
  var ticking=false;
  function measure(){VH=window.innerHeight;VW=document.documentElement.clientWidth;parts.forEach(function(m){if(m.measure)m.measure();});update();}
  function update(){ticking=false;Y=window.pageYOffset;parts.forEach(function(m){m.update();});}
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(update);}}
  var rt=0;
  function onResize(){clearTimeout(rt);rt=setTimeout(measure,120);}
  window.addEventListener("scroll",onScroll,{passive:true});
  window.addEventListener("resize",onResize);
  window.addEventListener("load",measure);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measure);
  if("ResizeObserver" in window){var lastH=0;new ResizeObserver(function(){var h=document.body.offsetHeight;if(Math.abs(h-lastH)>40){lastH=h;onResize();}}).observe(document.body);}
  measure();
})();
