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
  /* Conversion events. Sent only when an analytics provider that supports events (Plausible) is configured. */
  window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments);};
  function track(name,props){try{if(document.querySelector('script[src*="plausible.io"]'))window.plausible(name,props?{props:props}:undefined);}catch(err){}}
  document.addEventListener("click",function(e){
    var a=e.target.closest&&e.target.closest("a");if(!a)return;
    var t=a.getAttribute("data-track");
    if(t)track(t);
    else if(/^mailto:/.test(a.getAttribute("href")||""))track("Email click");
    else if(/contact\.html/.test(a.getAttribute("href")||""))track("CTA click",{page:document.body.getAttribute("data-page")||"",label:(a.textContent||"").trim().slice(0,40)});
  });
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
    var k=(key&&key.indexOf("work")===0)?"work":(key&&key.indexOf("guide")===0)?"guides":key;
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
    integrate:{kind:"Integrations",title:"Systems that share data automatically.",lead:"Reliable connections between the platforms you already use, so information flows without manual re-entry.",replaces:["Manual data entry between systems","Exporting, cleansing and re-uploading files","Inconsistent records across platforms"],builds:["Orders, invoices and customer records synchronised across systems","Automated ticket and project updates","Data pipelines into databases and warehouses","Custom connectors for any system with an API"],cases:"work-ai-categorisation.html",prefill:"Integrations"},
    report:{kind:"Reporting and dashboards",title:"Reporting that runs itself.",lead:"Data collected, validated and assembled automatically, then delivered to the right people on schedule.",replaces:["Hours spent compiling the same reports each week","Copying figures between spreadsheets","Figures that cannot be relied on"],builds:["Scheduled email reporting","Live dashboards in Power BI, Excel or Google Sheets","Automated data collection across systems","Alerts when metrics move outside tolerance"],cases:"work-launch-qa.html",prefill:"Reporting"},
    qa:{kind:"Quality checks",title:"Errors intercepted before release.",lead:"Automated validation that tests every record against your rules and quarantines failures, with the reason recorded.",replaces:["Manual spot-checks before release","Errors discovered by customers","Chasing status updates"],builds:["Rule-based validation of data, listings and documents","Daily tracking of completed and failed work","Exception queues for remediation","Automated progress reporting"],cases:"work-launch-qa.html",prefill:"Quality checks"},
    schedule:{kind:"Scheduling and capacity",title:"Plans that stay current.",lead:"Scheduling engines that allocate work against real capacity and re-plan automatically as conditions change.",replaces:["Rebuilding plans in spreadsheets every week","Conflicts discovered after the fact","Uncertainty about available capacity"],builds:["Job and project scheduling across teams and sites","Capacity forecasting, including leave and absence","Early-warning alerts and resourcing recommendations","Approval workflows with a full audit trail"],cases:"work-capacity-planning.html",prefill:"Scheduling"},
    ai:{kind:"AI processing",title:"Classification at scale, measured.",lead:"AI applied to classification and extraction, with models selected on tested accuracy and cost per item.",replaces:["Manual product or record categorisation","Re-keying details from documents and emails","Inconsistent tagging across a team"],builds:["Product and content categorisation","Data extraction from documents, PDFs and email","Data enrichment and cleansing","Accuracy and cost benchmarking before commitment"],cases:"work-ai-categorisation.html",prefill:"AI processing"},
    apps:{kind:"Internal tools",title:"Purpose-built internal tools.",lead:"Applications that replace email chains and shared spreadsheets for the work your team repeats every day.",replaces:["Approvals chased over email","Spreadsheets that break or fall out of date","Updates that never reach the right people"],builds:["Request and approval workflows","Trackers that update their own status","Notifications to email, Slack or Teams","A full record of every change"],cases:"work-capacity-planning.html",prefill:"Internal tools"}
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
  var F={name:$("#f-name"),email:$("#f-email"),role:$("#f-role"),company:$("#f-company"),size:$("#f-size"),business:$("#f-business"),process:$("#f-process"),hours:$("#f-hours"),tools:$("#f-tools"),goal:$("#f-goal")};
  var REQ=[
    ["name","Add your name.",function(v){return v.length>=2;}],
    ["email","Add a valid work email.",function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);}],
    ["company","Add your company name.",function(v){return v.length>=2;}],
    ["business","Briefly describe what your company does.",function(v){return words(v)>=3;}],
    ["size","Select your team size.",function(v){return !!v;}],
    ["process","Add a little more detail: who does it, how often and what goes wrong.",function(v){return words(v)>=8;}],
    ["hours","Select the approximate hours spent each week.",function(v){return !!v;}]
  ];
  function words(v){return v.split(/\s+/).filter(function(w){return w.length>1;}).length;}
  function val(k){return F[k]?(F[k].value||"").trim():"";}
  var service=null,area=null;
  var PREFILL_MAP={"Integrations":1,"Reporting":1,"Quality checks":1,"Scheduling":1,"AI processing":1,"Internal tools":1,"Founding client programme":1,"Catalogue check":1};
  var prefillBox=$("#prefill"),prefillVal=$("#prefillVal"),prefillX=$("#prefillX");
  var cTitle=$("#contactTitle"),cLead=$("#contactLead"),modeSw=$("#modeSwitch");
  var MODES={
    demo:{t:"Request a demo.",l:"Every demo is built around your operations, so we start with a brief. We review every request within one business day. If we can deliver measurable value, we propose times for a 20-minute session.",b:"Request a demo",sw:"Request a written assessment instead",to:"Assessment",title:"Request a demo · Clarke Systems Group"},
    written:{t:"Request a written assessment.",l:"Send a short brief of the process. We review every request within one business day. If we can deliver measurable value, you receive a written outline and estimate within two business days. No call required.",b:"Request an assessment",sw:"Request a demo instead",to:"Demo",title:"Request a written assessment · Clarke Systems Group"}
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
    L.push("","ABOUT US","Name: "+val("name"),"Email: "+val("email"),"Role: "+(val("role")||"Not given"),"Company: "+co,"Team size: "+val("size"),"What we do: "+val("business"));
    L.push("","THE PROCESS",val("process"),"","Hours spent: "+(val("hours")||"").toLowerCase()+" a week");
    if(val("tools"))L.push("Tools involved: "+val("tools"));
    if(val("goal"))L.push("Desired outcome: "+val("goal"));
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
  /* Send. The request is posted directly: to Netlify Forms by default, or to data-endpoint when one is set.
     If the post fails, it is copied and handed to the visitor's email app instead, so nothing is lost. */
  var NETLIFY=!!(form&&form.hasAttribute("data-netlify")&&!(form.getAttribute("data-endpoint")||"").trim());
  var ENDPOINT=form?((form.getAttribute("data-endpoint")||"").trim()||(NETLIFY&&/^https?:$/.test(location.protocol)?"/":"")):"",BOOKING=form?(form.getAttribute("data-booking")||"").trim():"";
  var viaNote=$("#viaNote"),trap=$("#f-website");
  if(ENDPOINT){var cmb=$("#copyMsg");if(cmb)cmb.style.display="none";}
  if(ENDPOINT&&viaNote)viaNote.innerHTML='Your request comes straight to the engineer who will review it. Prefer to write directly? Email <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>. Your details are used as set out in our <a href="privacy.html">privacy notice</a>.';
  function viaEmail(m,msg){
    track("Email fallback");
    copyText("To: "+EMAIL+"\nSubject: "+m.subject+"\n\n"+m.body,note,msg||"Opening your email app. Your request is also copied, so you can paste it into an email to "+EMAIL+" if nothing opens.");
    try{window.location.href=mailtoHref(m);}catch(err){}
  }
  function sent(){
    var demo=service==="Demo",box=document.createElement("div");
    box.className="sent";box.setAttribute("tabindex","-1");
    box.innerHTML='<span class="sent-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><h2 class="h-m">Request received.</h2><p></p>';
    box.querySelector("p").textContent=demo?"Thank you, "+val("name").split(" ")[0]+". Your brief is with the engineer who will review it. You will hear back within one business day"+(BOOKING?", or you can choose a time for the 20-minute demo now.":", with proposed times for a 20-minute demo."):"Thank you, "+val("name").split(" ")[0]+". Your brief is with the engineer who will review it. You will hear back within one business day, and receive your written outline within two.";
    if(demo&&BOOKING){var a=document.createElement("a");a.className="btn btn-p";a.href=BOOKING;a.target="_blank";a.rel="noopener";a.textContent="Choose a time now";box.appendChild(a);}
    form.innerHTML="";form.appendChild(box);
    track(demo?"Demo request":"Assessment request",{topic:area||"None"});
    try{box.focus({preventScroll:false});}catch(err){}
  }
  if(form)form.addEventListener("submit",function(e){
    e.preventDefault();
    var m=compose();
    if(!m.ok){needDetail(m);return;}
    if(!ENDPOINT||!window.fetch){viaEmail(m);return;}
    if(trap&&trap.value){sent();return;}
    sendBtn.disabled=true;sendBtn.setAttribute("aria-busy","true");var label=sendBtn.textContent;sendBtn.textContent="Sending…";note.textContent="";
    var hid={subject:m.subject,request:service==="Demo"?"Demo":"Written assessment",topic:area||""};
    Object.keys(hid).forEach(function(k){var el=$("#f-"+k);if(el)el.value=hid[k];});
    var req=NETLIFY?{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(form)).toString()}
      :{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(Object.assign(Object.fromEntries(new FormData(form)),{_subject:m.subject,message:m.body}))};
    fetch(ENDPOINT,req)
      .then(function(r){if(!r.ok)throw new Error(r.status);sent();})
      .catch(function(){sendBtn.disabled=false;sendBtn.removeAttribute("aria-busy");sendBtn.textContent=label;viaEmail(m,"We couldn't send that directly, so we're opening your email app instead. Your request is also copied, so you can paste it into an email to "+EMAIL+".");});
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
/* Services: estimate what one manual process costs, and how quickly a starting build pays back */
(function(){
  var f=document.getElementById("roiCalc");if(!f)return;
  var h=document.getElementById("roiHours"),r=document.getElementById("roiRate"),sh=document.getElementById("roiShare");
  var ho=document.getElementById("roiHoursOut"),so=document.getElementById("roiShareOut");
  var oc=document.getElementById("roiCost"),ot=document.getElementById("roiTime"),op=document.getElementById("roiPay"),opl=document.getElementById("roiPayLabel");
  var WEEKS=46,BUILD=1250,gbp=function(v){return "£"+Math.round(v).toLocaleString("en-GB");};
  function calc(){
    var hours=Math.max(0,+h.value||0),rate=Math.min(500,Math.max(0,+r.value||0)),share=(+sh.value||0)/100;
    ho.textContent=hours+(hours===1?" hour":" hours");so.textContent=Math.round(share*100)+"%";
    oc.textContent=gbp(hours*rate*WEEKS);
    ot.textContent=Math.round(hours*share*WEEKS).toLocaleString("en-GB")+" hours";
    var weekly=hours*share*rate;
    if(weekly>0){var w=Math.ceil(BUILD/weekly);op.textContent=w>WEEKS?"Over a year":w+(w===1?" week":" weeks");opl.textContent=w>WEEKS?"to recover a build starting at £1,250, so this process may not be the place to start":"to recover a build starting at £1,250";}
    else{op.textContent="–";opl.textContent="to recover a build starting at £1,250";}
  }
  f.addEventListener("input",calc);calc();
})();
