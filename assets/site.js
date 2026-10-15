/* Clarke Systems Group – site script (all pages) */
(function(){
  "use strict";
  var root=document.documentElement;
  /* A new page always opens at the top, or at its #section. Some embedded previewers re-apply the
     previous page's scroll position a moment after loading; any scroll in the first seconds that the
     visitor didn't make is undone. Back and forward keep the browser's own restore. */
  (function(){
    var nav=null;try{nav=performance.getEntriesByType("navigation")[0];}catch(err){}
    if(nav&&nav.type==="back_forward")return;
    var moved=false;
    ["wheel","touchstart","keydown","pointerdown"].forEach(function(t){window.addEventListener(t,function(){moved=true;},{once:true,passive:true,capture:true});});
    function want(){
      var id=decodeURIComponent((location.hash||"").slice(1)),el=id&&document.getElementById(id);
      return el?Math.max(0,Math.round(el.getBoundingClientRect().top+window.pageYOffset-92)):0;
    }
    function hold(){
      if(moved||performance.now()>2000)return;
      var y=want();
      if(Math.abs(window.pageYOffset-y)>4){var bh=root.style.scrollBehavior;root.style.scrollBehavior="auto";window.scrollTo(0,y);root.style.scrollBehavior=bh;}
    }
    window.addEventListener("scroll",hold,{passive:true});
    document.addEventListener("DOMContentLoaded",hold);
    window.addEventListener("load",function(){hold();setTimeout(hold,120);setTimeout(hold,600);});
  })();
  root.classList.add("js");
  var mq=function(q){return !!(window.matchMedia&&window.matchMedia(q).matches);};
  var reduce=mq("(prefers-reduced-motion: reduce)");
  var hasVT=false; /* page swaps use a plain CSS animation: identical in every browser, nothing can stall */
  if(!hasVT)root.classList.add("no-vt");
  var $=function(s,c){return (c||document).querySelector(s);};
  var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};

  /* ---------- reveal (content is visible at rest; only position animates) ---------- */
  var revealIO=null;
  if("IntersectionObserver" in window&&!reduce){
    revealIO=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");revealIO.unobserve(e.target);}});},{rootMargin:"0px 0px -6% 0px",threshold:.06});
  }
  function armReveal(scope){
    if(!scope)return;
    var els=$$(".rv",scope).filter(function(el){return !el.classList.contains("in");});
    if(!revealIO){els.forEach(function(el){el.classList.add("in");});return;}
    els.forEach(function(el){revealIO.observe(el);});
  }

  /* ---------- nav ---------- */
  var navbar=$("#navbar"),lens=$("#lens"),navLinks=$$("#navlinks a"),activeLink=null;
  function placeLens(a){
    if(!lens)return;
    if(!a){lens.style.opacity="0";return;}
    lens.style.width=a.offsetWidth+"px";
    lens.style.transform="translateX("+a.offsetLeft+"px)";
    lens.style.opacity="1";
  }
  function setNav(key){
    var k=(key&&key.indexOf("work")===0)?"work":key;
    activeLink=null;
    navLinks.forEach(function(a){var on=a.getAttribute("data-nav")===k;a.classList.toggle("on",on);if(on){activeLink=a;a.setAttribute("aria-current","page");}else a.removeAttribute("aria-current");});
    placeLens(activeLink);
  }
  navLinks.forEach(function(a){
    a.addEventListener("pointerenter",function(){placeLens(a);});
    a.addEventListener("pointerleave",function(){placeLens(activeLink);});
  });
  window.addEventListener("resize",function(){placeLens(activeLink);});
  function onScroll(){if(navbar)navbar.classList.toggle("tight",window.pageYOffset>30);}
  window.addEventListener("scroll",onScroll,{passive:true});

  var burger=$("#burger"),menu=$("#menu"),bpath=$("#burgerPath"),scrim=$("#scrim");
  function setMenu(open){
    if(!menu||!burger)return;
    var wasOpen=!menu.hidden;
    menu.hidden=!open;
    if(scrim)scrim.hidden=!open;
    root.style.overflow=open?"hidden":"";
    burger.setAttribute("aria-expanded",open?"true":"false");
    burger.setAttribute("aria-label",open?"Close menu":"Open menu");
    if(bpath)bpath.setAttribute("d",open?"M6 6l12 12M18 6L6 18":"M4 9h16M4 15h16");
    var app=$("#app"),foot=$("footer.app");
    [app,foot].forEach(function(el){if(el){if(open)el.setAttribute("inert","");else el.removeAttribute("inert");}});
    if(open){var first=menu.querySelector("a");if(first)first.focus({preventScroll:true});}
    else if(wasOpen&&document.activeElement&&(document.activeElement===document.body||menu.contains(document.activeElement)))burger.focus({preventScroll:true});
  }
  function closeMenu(){setMenu(false);}
  menu&&menu.addEventListener("keydown",function(e){
    if(e.key!=="Tab")return;
    var items=[burger].concat([].slice.call(menu.querySelectorAll("a"))),i=items.indexOf(document.activeElement);
    if(e.shiftKey&&i<=0){e.preventDefault();items[items.length-1].focus();}
    else if(!e.shiftKey&&i===items.length-1){e.preventDefault();items[0].focus();}
  });
  burger&&burger.addEventListener("keydown",function(e){
    if(e.key==="Tab"&&!menu.hidden){var items=[].slice.call(menu.querySelectorAll("a"));e.preventDefault();(e.shiftKey?items[items.length-1]:items[0]).focus();}
  });
  if(burger)burger.addEventListener("click",function(){setMenu(menu.hidden);});
  if(scrim)scrim.addEventListener("click",closeMenu);
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeMenu();});
  window.addEventListener("resize",function(){if(window.innerWidth>1000)closeMenu();});

  /* ---------- page wiring ----------
     Every page is a real page now; links are plain links. The bar marks the current page,
     and on the home page it follows the section in view. */
  var page=document.body.getAttribute("data-page")||"home";
  setNav(page.indexOf("work")===0?"work":page);
  armReveal(document);
  if(page==="home"&&"IntersectionObserver" in window){
    var spy=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting)setNav(e.target.getAttribute("data-spy"));});
    },{rootMargin:"-40% 0px -55% 0px"});
    ["automate","process"].forEach(function(id){var el=document.getElementById(id);if(el){el.setAttribute("data-spy",id);spy.observe(el);}});
    var hero=$(".hero");if(hero){hero.setAttribute("data-spy","home");spy.observe(hero);}
  }
  /* menu closes when an in-page link is chosen */
  if(menu)menu.addEventListener("click",function(e){if(e.target.closest("a"))closeMenu();});

  /* ---------- capability sheet ---------- */
  var CAPS={
    integrate:{kind:"Integrations",title:"Your tools, sharing data automatically.",lead:"Connections between the systems you already use, so information moves on its own and nobody re-types anything.",replaces:["Copying data between systems by hand","Exporting, cleaning and re-uploading files","Records that disagree from one system to the next"],builds:["Orders, invoices and customers kept in sync across your tools","Ticket and project updates that happen automatically","Data pipelines into a database or warehouse","Connectors for any system with an API"],cases:"work-ai-categorisation.html",prefill:"Integrations"},
    report:{kind:"Reporting and dashboards",title:"Reports that build themselves.",lead:"Data pulled, checked and assembled automatically, then delivered to the right people on schedule.",replaces:["Hours each week assembling the same report","Copy-pasting figures between spreadsheets","Numbers nobody fully trusts"],builds:["Scheduled reports by email","Live dashboards in Power BI, Excel or Google Sheets","Automatic data collection from your tools","Alerts when a figure moves outside its range"],cases:"work-launch-qa.html",prefill:"Reporting"},
    qa:{kind:"Quality checks",title:"Errors caught before they go out.",lead:"Automated checks that test every record against your rules and hold back anything that fails, with the reason attached.",replaces:["Spot-checking work by hand before release","Errors found by customers","Chasing people for status updates"],builds:["Rule-based checks on data, listings or documents","Daily tracking of what was done and what failed","Hold-and-fix queues for failed records","Automatic progress reporting"],cases:"work-launch-qa.html",prefill:"Quality checks"},
    schedule:{kind:"Scheduling and capacity",title:"Plans that keep themselves current.",lead:"A system that schedules work against the people and hours you actually have, and re-plans when things change.",replaces:["Rebuilding the plan in a spreadsheet every week","Finding clashes after they happen","Guessing whether the team can take on more work"],builds:["Job and project scheduling across teams and sites","Capacity forecasts that include holidays and absences","Early warnings and resourcing suggestions","Approval flows with a full audit trail"],cases:"work-capacity-planning.html",prefill:"Scheduling"},
    ai:{kind:"AI processing",title:"Sorting and tagging at volume, measured.",lead:"AI applied to real classification and extraction work, chosen on tested accuracy and cost per item.",replaces:["Categorising products or records by hand","Reading documents and emails to pull out the same details","Inconsistent tagging between people"],builds:["Product and content categorisation","Details extracted from documents, PDFs and emails","Data enrichment and clean-up","Accuracy and cost tested before you commit"],cases:"work-ai-categorisation.html",prefill:"AI processing"},
    apps:{kind:"Internal tools",title:"Simple tools for everyday jobs.",lead:"Lightweight apps that replace email chains and shared spreadsheets for the work your team repeats every day.",replaces:["Chasing approvals over email","Shared spreadsheets that break or go out of date","Updates that never reach the right person"],builds:["Request and approval workflows","Trackers that update their own status","Notifications to email, Slack or Teams","A record of who changed what, and when"],cases:"work-capacity-planning.html",prefill:"Internal tools"}
  };
  var sheet=$("#sheet");
  function fillList(ul,items){ul.textContent="";items.forEach(function(t){var li=document.createElement("li");li.textContent=t;ul.appendChild(li);});}
  function openCap(key){
    var c=CAPS[key];if(!c||!sheet)return;
    $("#sheetKind").textContent=c.kind;$("#sheetTitle").textContent=c.title;$("#sheetLead").textContent=c.lead;
    fillList($("#sheetReplaces"),c.replaces);fillList($("#sheetBuilds"),c.builds);
    $("#sheetCase").setAttribute("href",c.cases);
    $("#sheetCta").setAttribute("href","contact.html?topic="+encodeURIComponent(c.prefill).replace(/%20/g,"+"));
    if(typeof sheet.showModal==="function"){try{sheet.showModal();}catch(err){sheet.setAttribute("open","");}}else{sheet.setAttribute("open","");}
    var inner=$(".sheet-in",sheet);if(inner){try{inner.focus({preventScroll:true});}catch(err){}}
    sheet.scrollTop=0;
  }
  function closeSheet(){if(!sheet)return;if(typeof sheet.close==="function"){if(sheet.open)sheet.close();}else{sheet.removeAttribute("open");}}
  $$("[data-cap]").forEach(function(b){b.addEventListener("click",function(){openCap(b.getAttribute("data-cap"));});});
  if(sheet){
    $("#sheetClose").addEventListener("click",closeSheet);
    sheet.addEventListener("click",function(e){if(e.target===sheet)closeSheet();});
  }

  /* ---------- demo / assessment request ----------
     A short structured breakdown, so every demo can be prepared around the visitor's process. */
  var EMAIL="enquiries@clarkesystemsgroup.com";
  var form=$("#brief"),sendBtn=$("#sendBtn"),note=$("#formNote");
  var F={name:$("#f-name"),role:$("#f-role"),company:$("#f-company"),size:$("#f-size"),business:$("#f-business"),process:$("#f-process"),hours:$("#f-hours"),tools:$("#f-tools"),goal:$("#f-goal")};
  var REQ=[
    ["name","Add your name.",function(v){return v.length>=2;}],
    ["role","Add your role.",function(v){return v.length>=2;}],
    ["company","Add your company name.",function(v){return v.length>=2;}],
    ["size","Choose your team size.",function(v){return !!v;}],
    ["business","Add a sentence about what your company does.",function(v){return words(v)>=3;}],
    ["process","Describe the process in a few sentences, so we can prepare for it.",function(v){return words(v)>=15;}],
    ["hours","Choose roughly how long it takes each week.",function(v){return !!v;}]
  ];
  function words(v){return v.split(/\s+/).filter(function(w){return w.length>1;}).length;}
  function val(k){return F[k]?(F[k].value||"").trim():"";}
  var service=null,area=null;
  var PREFILL_MAP={"Integrations":1,"Reporting":1,"Quality checks":1,"Scheduling":1,"AI processing":1,"Internal tools":1};
  var prefillBox=$("#prefill"),prefillVal=$("#prefillVal"),prefillX=$("#prefillX");
  var cTitle=$("#contactTitle"),cLead=$("#contactLead"),modeSw=$("#modeSwitch");
  var MODES={
    demo:{t:"Request a demo.",l:"Every demo is prepared around your process, so we start with a short breakdown. We review each request within one business day and, if it's a good fit, send you times for a 20-minute call.",b:"Request a demo",sw:"Prefer it in writing? Request a written assessment",to:"Assessment",title:"Request a demo · Clarke Systems Group"},
    written:{t:"Request a written assessment.",l:"Send us a short breakdown of the process. We review each request within one business day and, if it's a good fit, send a written outline and estimate within two business days. No call needed.",b:"Request an assessment",sw:"Prefer to talk it through? Request a demo",to:"Demo",title:"Request a written assessment · Clarke Systems Group"}
  };
  function showPrefill(){
    var demo=service==="Demo",M=MODES[demo?"demo":"written"];
    var label=demo?area:(service==="Assessment"?area:([service,area].filter(Boolean).join(" · ")));
    if(prefillBox){prefillBox.hidden=!label;if(prefillVal)prefillVal.textContent=label||"";}
    if(cTitle)cTitle.textContent=M.t;
    if(cLead)cLead.textContent=M.l;
    if(sendBtn)sendBtn.textContent=M.b;
    if(modeSw){modeSw.textContent=M.sw;modeSw.setAttribute("data-topic",M.to);modeSw.setAttribute("href","contact.html?topic="+M.to);}
    if(page==="contact")document.title=M.title;
  }
  function applyPrefill(topic){
    service=null;area=null;
    if(topic){
      if(["Assessment","Build","Support"].indexOf(topic)>-1){service=topic;}
      else if(PREFILL_MAP[topic]){area=topic;}
    }
    if(!service)service="Demo";
    showPrefill();render();
  }
  function setTopic(t){
    try{var u=new URL(location.href);if(t&&t!=="Demo")u.searchParams.set("topic",t);else u.searchParams.delete("topic");history.replaceState(null,"",u.pathname.split("/").pop()+u.search+u.hash);}catch(err){}
  }
  if(modeSw)modeSw.addEventListener("click",function(e){
    if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    e.preventDefault();
    var to=modeSw.getAttribute("data-topic")||"Assessment";
    applyPrefill(to);setTopic(to);
    if(cTitle){cTitle.setAttribute("tabindex","-1");try{cTitle.focus({preventScroll:true});}catch(err){}}
  });
  if(prefillX)prefillX.addEventListener("click",function(){area=null;if(service!=="Demo")service=null;setTopic(service);showPrefill();if(F.process)F.process.focus();});
  function compose(){
    var demo=service==="Demo",co=val("company");
    var subject=(demo?"Demo request":"Written assessment request")+(co?": "+co:"");
    var L=["Hello,",""];
    L.push(demo?"I'd like to request a demo.":"I'd like to request a written assessment.");
    if(service&&!demo&&service!=="Assessment")L.push("Interested in: "+service+".");
    if(area)L.push("Area: "+area+".");
    L.push("","ABOUT US","Name: "+val("name"),"Role: "+val("role"),"Company: "+co,"Team size: "+val("size"),"What we do: "+val("business"));
    L.push("","THE PROCESS",val("process"),"","Time it takes: "+(val("hours")||"").toLowerCase()+" a week");
    if(val("tools"))L.push("Tools involved: "+val("tools"));
    if(val("goal"))L.push("A good result would be: "+val("goal"));
    L.push("","Thanks,",val("name"));
    var bad=REQ.filter(function(r){return !r[2](val(r[0]));});
    return {subject:subject,body:L.join("\n"),bad:bad,ok:!bad.length};
  }
  function mailtoHref(m){return "mailto:"+EMAIL+"?subject="+encodeURIComponent(m.subject)+"&body="+encodeURIComponent(m.body);}
  function fieldEl(k){return k==="size"||k==="hours"?$("#f-"+k+"-btn"):F[k];}
  function setErr(k,msg){var el=$("#err-"+k),f=fieldEl(k);if(!el||!f)return;el.textContent=msg||"";if(msg)f.setAttribute("aria-invalid","true");else f.removeAttribute("aria-invalid");}
  function render(){
    if(!form)return;
    REQ.forEach(function(r){var el=$("#err-"+r[0]);if(el&&el.textContent&&r[2](val(r[0])))setErr(r[0],"");});
  }
  Object.keys(F).forEach(function(k){if(F[k]&&F[k].type!=="hidden")F[k].addEventListener("input",render);});
  /* custom dropdowns: a button that opens a listbox; the choice is kept in a hidden input */
  $$(".dd").forEach(function(box){
    var btn=box.querySelector(".dd-btn"),list=box.querySelector(".dd-list"),input=document.getElementById(box.getAttribute("data-input"));
    if(!btn||!list||!input)return;
    var opts=[].slice.call(list.querySelectorAll('[role="option"]')),act=-1;
    opts.forEach(function(o,i){o.id=list.id+"-o"+i;});
    function setAct(i){act=i;opts.forEach(function(o,j){o.classList.toggle("active",j===i);});if(i>-1){list.setAttribute("aria-activedescendant",opts[i].id);}else list.removeAttribute("aria-activedescendant");}
    function isOpen(){return !list.hidden;}
    function open(){if(isOpen())return;list.hidden=false;btn.setAttribute("aria-expanded","true");var cur=opts.findIndex(function(o){return o.getAttribute("data-v")===input.value;});setAct(cur>-1?cur:0);list.focus({preventScroll:true});}
    function close(refocus){if(!isOpen())return;list.hidden=true;btn.setAttribute("aria-expanded","false");setAct(-1);if(refocus)btn.focus({preventScroll:true});}
    function pick(i){var o=opts[i];if(!o)return;input.value=o.getAttribute("data-v");opts.forEach(function(x){x.setAttribute("aria-selected",x===o?"true":"false");});btn.querySelector(".dd-val").textContent=o.textContent;btn.classList.remove("empty");close(true);render();}
    btn.addEventListener("click",function(){isOpen()?close(true):open();});
    btn.addEventListener("keydown",function(e){if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();open();}});
    list.addEventListener("click",function(e){var o=e.target.closest('[role="option"]');if(o)pick(opts.indexOf(o));});
    list.addEventListener("mousemove",function(e){var o=e.target.closest('[role="option"]');if(o&&opts.indexOf(o)!==act)setAct(opts.indexOf(o));});
    list.addEventListener("keydown",function(e){
      var k=e.key;
      if(k==="ArrowDown"){e.preventDefault();setAct(Math.min(opts.length-1,act+1));}
      else if(k==="ArrowUp"){e.preventDefault();setAct(Math.max(0,act-1));}
      else if(k==="Home"){e.preventDefault();setAct(0);}
      else if(k==="End"){e.preventDefault();setAct(opts.length-1);}
      else if(k==="Enter"||k===" "){e.preventDefault();pick(act);}
      else if(k==="Escape"){e.preventDefault();close(true);}
      else if(k==="Tab"){close(false);}
    });
    document.addEventListener("pointerdown",function(e){if(isOpen()&&!box.contains(e.target))close(false);});
  });
  function needDetail(m){
    REQ.forEach(function(r){setErr(r[0],m.bad.indexOf(r)>-1?r[1]:"");});
    var f=fieldEl(m.bad[0][0]);if(f)f.focus();
  }
  function copyText(text,okEl,okMsg){
    var fail=function(){okEl.textContent="Your email app should open. If it doesn't, email "+EMAIL+" directly.";};
    try{
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){okEl.textContent=okMsg;},fail);}
      else fail();
    }catch(err){fail();}
  }
  /* Send: copy first so nothing is lost, then hand over to the email app. */
  if(form)form.addEventListener("submit",function(e){
    e.preventDefault();
    var m=compose();
    if(!m.ok){needDetail(m);return;}
    copyText("To: "+EMAIL+"\nSubject: "+m.subject+"\n\n"+m.body,note,"Opening your email app. Your request is also copied, so you can paste it into an email to "+EMAIL+" if nothing opens.");
    try{window.location.href=mailtoHref(m);}catch(err){}
  });
  var copyMsg=$("#copyMsg");
  if(copyMsg)copyMsg.addEventListener("click",function(){
    var m=compose();
    if(!m.ok){needDetail(m);return;}
    copyText("To: "+EMAIL+"\nSubject: "+m.subject+"\n\n"+m.body,note,"Request copied. Paste it into an email to "+EMAIL+".");
  });

  /* ---------- pointer light on glass ---------- */
  if(mq("(hover: hover) and (pointer: fine)")&&!reduce){
    var lastG=null,raf=0,px=0,py=0;
    document.addEventListener("pointermove",function(e){
      var g=e.target.closest&&e.target.closest(".glass");
      if(!g)return;lastG=g;px=e.clientX;py=e.clientY;
      if(raf)return;
      raf=requestAnimationFrame(function(){raf=0;var r=lastG.getBoundingClientRect();lastG.style.setProperty("--mx",(px-r.left)+"px");lastG.style.setProperty("--my",(py-r.top)+"px");});
    },{passive:true});
  }

  if(page==="contact"){var tp=null;try{tp=new URLSearchParams(location.search).get("topic");}catch(err){}applyPrefill(tp);}
  render();
  onScroll();
})();
/* Track record: the figures count up once, the first time they come into view */
(function(){
  var els=[].slice.call(document.querySelectorAll(".big[data-count]"));
  if(!els.length||!("IntersectionObserver" in window))return;
  if(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  els.forEach(function(el){el.setAttribute("aria-label",el.textContent);});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;io.unobserve(e.target);
    var el=e.target,to=+el.getAttribute("data-count"),suf=el.hasAttribute("data-suffix")?el.getAttribute("data-suffix"):"+",t0=performance.now(),D=1400;
    (function step(now){var k=Math.min(1,(now-t0)/D),v=Math.round(to*(1-Math.pow(1-k,4)));el.textContent=v.toLocaleString("en-GB")+(k===1?suf:"");if(k<1)requestAnimationFrame(step);})(t0);
  });},{threshold:.6});
  els.forEach(function(el){io.observe(el);});
})();
/* How it works: the line fills and each step lights up as you scroll through it */
(function(){
  var flow=document.getElementById("flow"),fill=document.getElementById("flowFill");
  if(!flow||!fill)return;
  var steps=[].slice.call(flow.querySelectorAll(".fstep")),nodes=steps.map(function(s){return s.querySelector(".fnode");});
  var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches,ticking=false;
  function upd(){
    ticking=false;
    if(!flow.offsetParent)return;
    var H=window.innerHeight,r=flow.getBoundingClientRect();
    var pos=nodes.map(function(n){return n.offsetTop+n.offsetHeight/2+n.parentNode.offsetTop;});
    var start=pos[0],end=pos[pos.length-1],len=Math.max(1,end-start),f;
    flow.style.setProperty("--top",start+"px");
    flow.style.setProperty("--len",len+"px");
    f=reduce?len:Math.max(0,Math.min(len,H*.6-r.top-start));
    fill.style.height=f+"px";
    steps.forEach(function(s,i){s.classList.toggle("on",f>=pos[i]-start-2);});
  }
  function req(){if(!ticking){ticking=true;requestAnimationFrame(upd);}}
  window.addEventListener("scroll",req,{passive:true});
  window.addEventListener("resize",req,{passive:true});
  window.addEventListener("hashchange",function(){setTimeout(req,120);});
  window.addEventListener("load",req);
  req();
})();
