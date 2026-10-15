/* Clarke Systems Group – motion (all pages).
   Every scroll effect here is a pure function of the scroll position, measured against layout that is read once
   per resize. Scrolling never triggers a layout read, so the page stays smooth at any speed, and a fast
   flick, a slow read or a scroll backwards always lands on the correct frame.

     [data-split]    headline words rise into place once
     [data-fill]     a statement fills in, word by word, as it is read
     [data-drive]    the story: every step listed; the scene plays them once while in view, then rests, replays on return
     [data-tally]    numbers that count up quickly once in view, always complete by the middle of the screen
     [data-focus]    a typographic list whose lines fill in as each one is reached
     [data-strike]   before and after: today's manual work is struck out, the automated version arrives
     [data-draw]     a process line that draws itself through its steps
     .fold           sections fold up into place as they arrive
     .build-rail     a stack of blocks in the right margin, one per section, built as the page is read
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
  function layoutTop(el){var y=0;while(el){y+=el.offsetTop;el=el.offsetParent;}return y;}

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

  /* ---------- the story: plays once while in view, every step listed, any step can be chosen ----------
     Each step is a short change into it (MOVE) and then a rest on it (HOLD). The step's text is highlighted from
     the moment the change starts, and its bar fills over its turn. It plays from step 1 to step 4, rests on the
     finished state, and plays again from step 1 whenever it comes back on screen after leaving it.
     The scene's stage is written to el.csgStage for the 3D. Nothing here depends on the scroll speed. */
  $$("[data-drive]").forEach(function(el){
    var steps=$$("[data-step]",el),n=steps.length,box=el.querySelector(".story-grid")||el;
    if(!n)return;
    var MOVE=1.1,HOLD=1.7,S=MOVE+HOLD,END=n*S,t=MOVE,seen=false,inView=false,paused=reduce,done=false,raf=0,last=0,cur=-1;
    var ease=function(x){return x*x*(3-2*x);};
    function render(){
      var tt=Math.min(t,END-1e-6),j=Math.floor(tt/S),r=tt-j*S,st=r<MOVE&&j>0?j-1+ease(r/MOVE):j;
      el.csgStage=st;
      if(j!==cur){
        cur=j;
        steps.forEach(function(s,i){s.classList.toggle("on",i===j);s.classList.toggle("past",i<j);var b=s.querySelector("button");if(b){if(i===j)b.setAttribute("aria-current","step");else b.removeAttribute("aria-current");}});
      }
      steps.forEach(function(s,i){s.style.setProperty("--t",i<j?1:i>j?0:(done?1:r/S).toFixed(4));});
    }
    function finish(){t=END;done=true;stop();render();}
    function tick(now){
      raf=0;
      /* real elapsed time, so a slow frame never slows the story down */
      t+=Math.min(.5,(now-last)/1000);last=now;
      if(t>=END){finish();return;}
      render();run();
    }
    function run(){if(!raf&&inView&&!paused&&!done&&!document.hidden){last=performance.now();raf=requestAnimationFrame(tick);}}
    function stop(){if(raf){cancelAnimationFrame(raf);raf=0;}}
    el.csgStage=0;
    if(reduce){done=true;t=END;}
    render();
    if("IntersectionObserver" in window&&!reduce){
      /* playing needs a third of it on screen; it replays from step 1 each time it comes back after leaving the
         screen completely, so it can always be seen again, and a small scroll never restarts it */
      var left=false;
      new IntersectionObserver(function(es){
        es.forEach(function(e){
          if(!e.isIntersecting)left=true;
          inView=e.isIntersecting&&e.intersectionRatio>=.34;
          if(inView){
            if(left&&seen){t=MOVE;done=false;render();}
            seen=true;left=false;run();
          }else stop();
        });
      },{threshold:[0,.35]}).observe(box);
    }else if(!reduce){inView=true;run();}
    document.addEventListener("visibilitychange",function(){if(document.hidden)stop();else run();});
    steps.forEach(function(s,i){
      var b=s.querySelector("[data-go]");
      if(b)b.addEventListener("click",function(){
        /* a chosen step plays its change, then the story carries on from there */
        t=reduce?i*S+MOVE:i*S+(i===0?MOVE:0);done=reduce;paused=reduce;
        stop();render();run();
      });
    });
  });

  /* ---------- numbers that add up as they come into view ---------- */
  $$("[data-tally]").forEach(function(el){
    var to=+el.getAttribute("data-tally"),txt=el.textContent,suf=txt.replace(/^[\d,.\s]+/,""),m={el:el,t:0,state:0};
    if(reduce)return;
    el.textContent="0";
    function show(v,end){el.textContent=v.toLocaleString("en-GB")+(end?suf:"");}
    function done(){m.state=2;show(to,true);}
    m.measure=function(){m.t=top(el);};
    m.update=function(){
      if(m.state===2)return;
      var at=m.t-Y;
      if(at<VH*.5){done();return;}
      if(m.state===0&&at<VH*.9){
        m.state=1;var t0=performance.now(),D=800;
        (function step(now){if(m.state===2)return;var k=Math.min(1,(now-t0)/D);if(k>=1){done();return;}show(Math.round(to*(1-Math.pow(1-k,3))),false);requestAnimationFrame(step);})(t0);
      }
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

  /* ---------- one call to action on screen: hide the navigation's while a page button is visible ---------- */
  var ctas=$$("[data-cta]");
  if(ctas.length&&"IntersectionObserver" in window){
    var seen=new Set();
    var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)seen.add(e.target);else seen.delete(e.target);});root.classList.toggle("cta-shown",seen.size>0);},{rootMargin:"-56px 0px 0px 0px"});
    ctas.forEach(function(el){cio.observe(el);});
  }

  /* ---------- reading progress ---------- */
  var bar=document.querySelector(".progress i");
  if(bar)parts.push({measure:function(){DOC=Math.max(1,document.documentElement.scrollHeight-VH);},update:function(){bar.style.transform="scaleX("+clamp(Y/DOC,0,1).toFixed(4)+")";}});

  /* ---------- sections fold up into place ----------
     Each section after the first rises like a panel hinged at its top edge: tilted back while its top is in the
     lower part of the screen, flat by the time it reaches the reading area. Pure function of scroll; flat (no
     transform at all) whenever it is not moving, so sticky headings and layout are untouched. */
  var folds=reduce?[]:$$("main > section, main > div > section").filter(function(sec,i,all){return !sec.classList.contains("hero")&&sec!==all[0]&&!sec.closest(".hero");});
  folds.forEach(function(sec){
    var m={el:sec,t:0,last:-1};
    sec.classList.add("fold");
    m.measure=function(){m.t=layoutTop(sec);};
    m.update=function(){
      var at=m.t-Y,q=clamp((at-VH*.6)/(VH*.4),0,1);
      q=Math.round(q*1000)/1000;
      if(q===m.last)return;m.last=q;
      if(q<=0){sec.style.transform="";sec.style.opacity="";return;}
      var e=q*q*(3-2*q);
      sec.style.transform="perspective(100rem) translate3d(0,"+(e*2.5).toFixed(3)+"rem,0) rotateX("+(-e*8).toFixed(3)+"deg) scale("+(1-e*.035).toFixed(4)+")";
      sec.style.opacity=(1-e*.45).toFixed(3);
    };
    parts.push(m);
  });

  /* ---------- the build stack: one block per section in the right margin ----------
     Blocks below the reader's section are placed; the current one drops into place as the section is read;
     the rest wait as outlines. Wide screens only, where the margin has room. Hover names the section. */
  (function(){
    var secs=$$("main > section, main > div > section").filter(function(sec){return sec.querySelector("h1,h2");});
    if(secs.length<3||reduce)return;
    var rail=document.createElement("div");rail.className="build-rail";rail.setAttribute("aria-hidden","true");
    var blocks=secs.map(function(sec,i){
      if(!sec.id)sec.id="s"+(i+1);
      var h=sec.querySelector("h1,h2"),a=document.createElement("a");
      a.className="br-b";a.href="#"+sec.id;a.tabIndex=-1;
      a.innerHTML="<i></i><span></span>";a.querySelector("span").textContent=(h.textContent||"").replace(/\s+/g," ").trim().replace(/\.$/,"");
      rail.insertBefore(a,rail.firstChild);
      return a;
    });
    document.body.appendChild(rail);
    var m={t:[],h:[],cur:-1};
    m.measure=function(){m.t=secs.map(layoutTop);m.h=secs.map(function(s){return s.offsetHeight;});};
    m.update=function(){
      var line=Y+VH*.5,cur=0;
      for(var i=0;i<secs.length;i++)if(m.t[i]<=line)cur=i;
      var f=clamp((line-m.t[cur])/Math.max(1,Math.min(m.h[cur],VH)),0,1);
      if(cur!==m.cur){m.cur=cur;blocks.forEach(function(b,i){b.classList.toggle("on",i===cur);b.classList.toggle("set",i<cur);});}
      blocks[cur].style.setProperty("--d",(1-f*f*(3-2*f)).toFixed(3));
    };
    parts.push(m);
  })();

  /* ---------- soft light under the pointer ---------- */
  if(fine&&!reduce){
    document.addEventListener("pointermove",function(e){
      var c=e.target.closest&&e.target.closest(".spot");if(!c)return;
      var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left).toFixed(0)+"px");c.style.setProperty("--my",(e.clientY-r.top).toFixed(0)+"px");
    },{passive:true});
  }

  /* ---------- the loop: measure on resize, update on scroll ---------- */
  var ticking=false;
  function measure(){
    VH=window.innerHeight;VW=document.documentElement.clientWidth;
    /* measure the page flat: folded sections are reset first, then put back by update() */
    folds.forEach(function(f){f.style.transform="";});
    parts.forEach(function(m){if(m.last!==undefined)m.last=-1;if(m.measure)m.measure();});update();
  }
  function update(){ticking=false;Y=window.pageYOffset;parts.forEach(function(m){m.update();});}
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(update);}}
  var rt=0;
  function onResize(){clearTimeout(rt);rt=setTimeout(measure,120);}
  window.addEventListener("scroll",onScroll,{passive:true});
  window.addEventListener("resize",onResize);
  window.addEventListener("load",measure);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measure);
  if("ResizeObserver" in window){var lastH=0;new ResizeObserver(function(){var h=document.body.offsetHeight;if(h!==lastH){lastH=h;onResize();}}).observe(document.body);}
  measure();
})();
