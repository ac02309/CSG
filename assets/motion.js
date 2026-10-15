/* Clarke Systems Group – motion (all pages).
   Every scroll effect here is a pure function of the scroll position, measured against layout that is read once
   per resize. Scrolling never triggers a layout read, so the page stays smooth at any speed, and a fast
   flick, a slow read or a scroll backwards always lands on the correct frame.

     [data-split]    headline words rise into place once
     [data-fill]     a statement fills in, word by word, as it is read
     [data-drive]    the story: every step listed; the scene plays them once while in view, then rests
     [data-tally]    numbers that add up as they come into view
     [data-focus]    a typographic list whose lines fill in as each one is reached
     [data-strike]   before and after: today's manual work is struck out, the automated version arrives
     [data-draw]     a process line that draws itself through its steps
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

  /* ---------- the story: plays once while in view, every step listed, any step can be chosen ----------
     Each step is a short change into it (MOVE) and then a rest on it (HOLD). The step's text is highlighted from
     the moment the change starts, and its bar fills over its turn. It plays once, from step 1 to step 4, and then
     stays on the finished state; scrolled past before the end, it finishes at once, so it is never left half-built.
     The scene's stage is written to el.csgStage for the 3D. Nothing here depends on the scroll speed. */
  $$("[data-drive]").forEach(function(el){
    var steps=$$("[data-step]",el),n=steps.length,box=el.querySelector(".story-grid")||el,btn=el.querySelector(".story-play");
    if(!n)return;
    var MOVE=1.8,HOLD=3.6,S=MOVE+HOLD,END=n*S,t=MOVE,seen=false,inView=false,paused=reduce,done=false,raf=0,last=0,cur=-1;
    var label=btn&&btn.querySelector("span");
    var ease=function(x){return x*x*(3-2*x);};
    function setBtn(){
      if(!btn)return;
      btn.setAttribute("aria-pressed",paused&&!done?"true":"false");
      label.textContent=done?"Play again":paused?"Play":"Pause";
      btn.classList.toggle("is-done",done);
    }
    function render(){
      var tt=Math.min(t,END-1e-6),j=Math.floor(tt/S),r=tt-j*S,st=r<MOVE&&j>0?j-1+ease(r/MOVE):j;
      el.csgStage=st;
      if(j!==cur){
        cur=j;
        steps.forEach(function(s,i){s.classList.toggle("on",i===j);s.classList.toggle("past",i<j);var b=s.querySelector("button");if(b){if(i===j)b.setAttribute("aria-current","step");else b.removeAttribute("aria-current");}});
      }
      steps.forEach(function(s,i){s.style.setProperty("--t",i<j?1:i>j?0:(done?1:r/S).toFixed(4));});
    }
    function finish(){t=END;done=true;stop();render();setBtn();}
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
    render();setBtn();
    if("IntersectionObserver" in window&&!reduce){
      new IntersectionObserver(function(es){
        es.forEach(function(e){
          inView=e.isIntersecting;
          if(inView){seen=true;run();}
          else{stop();if(seen&&!done&&e.boundingClientRect.top<0)finish();}
        });
      },{threshold:.35}).observe(box);
    }else if(!reduce){inView=true;run();}
    document.addEventListener("visibilitychange",function(){if(document.hidden)stop();else run();});
    steps.forEach(function(s,i){
      var b=s.querySelector("[data-go]");
      if(b)b.addEventListener("click",function(){
        /* a chosen step is shown and the story rests on it; Play continues from there */
        t=i*S+(i===0?MOVE:0);done=false;paused=true;
        if(reduce){t=i*S+MOVE;}
        stop();render();setBtn();
        if(!reduce){var t0=performance.now(),from=i*S,go=function(now){t=Math.min(i*S+MOVE,from+(now-t0)/1000);render();if(t<i*S+MOVE)requestAnimationFrame(go);};if(i>0)requestAnimationFrame(go);}
      });
    });
    if(btn)btn.addEventListener("click",function(){
      if(done){t=MOVE;done=false;paused=false;}
      else paused=!paused;
      setBtn();render();
      if(paused)stop();else run();
    });
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
  if("ResizeObserver" in window){var lastH=0;new ResizeObserver(function(){var h=document.body.offsetHeight;if(h!==lastH){lastH=h;onResize();}}).observe(document.body);}
  measure();
})();
