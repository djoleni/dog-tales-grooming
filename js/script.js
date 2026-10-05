const $=s=>document.querySelector(s),nv=$('#nv');
const sc=()=>nv.classList.toggle('sc',scrollY>40);sc();
// hero: pauziraj JS i CSS animacije kad nije vidljiv
let hv=true;const hero=$('#top');new IntersectionObserver(es=>{hv=es[es.length-1].isIntersecting;hero.classList.toggle('off',!hv);nv.classList.toggle('bf',!hv)},{rootMargin:'-70px 0px 0px 0px'}).observe(hero);
$('#bg').onclick=()=>$('#ln').classList.toggle('on');document.querySelectorAll('#ln a').forEach(a=>a.onclick=()=>$('#ln').classList.remove('on'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);const b=e.target.querySelector('[data-n]');if(b){const n=+b.dataset.n,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1500,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const W=["grooming","kupanje","šišanje","nega"],el=$('#fx'),fx='wave';
if(fx=='type'){let i=0,j=0,d=0;(function t(){const w=W[i];j+=d?-1:1;el.textContent=w.slice(0,j);let s=d?45:95;if(!d&&j==w.length){d=1;s=1400}else if(d&&j==0){d=0;i=(i+1)%W.length;s=300}setTimeout(t,s)})()}
else if(fx=='swap'){let i=0;el.style.transition='opacity .4s,transform .4s';setInterval(()=>{el.style.opacity=0;el.style.transform='translateY(14px)';setTimeout(()=>{i=(i+1)%W.length;el.textContent=W[i];el.style.opacity=1;el.style.transform='none'},400)},2200)}
else if(fx=='none')el.style.display='none';
else{let ci=0;const X='!<>-_/[]{}=+*^?#',cyc=(f,ms)=>{f(W[0]);setInterval(()=>{if(!hv)return;ci=(ci+1)%W.length;f(W[ci])},ms)};
if(fx=='wave')cyc(w=>{el.innerHTML=[...w].map((c,i)=>'<i style="display:inline-block;font-style:normal;animation:ltr .6s '+i*45+'ms backwards">'+(c==' '?'&nbsp;':c)+'</i>').join('')},2600);
else if(fx=='scramble')cyc(w=>{let f=0;const t=setInterval(()=>{el.textContent=[...w].map((c,i)=>i<f/2?c:X[Math.random()*X.length|0]).join('');if(++f>w.length*2+2){el.textContent=w;clearInterval(t)}},40)},2800);
else if(fx=='blur'){el.style.transition='filter .5s,opacity .5s';cyc(w=>{el.style.filter='blur(14px)';el.style.opacity=0;setTimeout(()=>{el.textContent=w;el.style.filter='none';el.style.opacity=1},500)},2600)}
else if(fx=='flip'){el.style.transition='transform .45s';el.style.transformOrigin='50% 100%';cyc(w=>{el.style.transform='rotateX(90deg)';setTimeout(()=>{el.textContent=w;el.style.transform='none'},450)},2400)}}
const ha='ltr',h1=$('h1');
if(ha!='none'){const t=h1.firstChild;if(t&&t.nodeType==3){const f=document.createDocumentFragment();t.nodeValue.split(' ').forEach((w,k,a)=>{const s=document.createElement('span');s.style.whiteSpace='nowrap';[...w].forEach((c,i)=>{const q=document.createElement('span');q.textContent=c;q.style.cssText='display:inline-block;animation:'+ha+' .8s '+(k*200+i*50)+'ms backwards';s.appendChild(q)});f.appendChild(s);if(k<a.length-1)f.appendChild(document.createTextNode(' '))});h1.replaceChild(f,t)}}
document.querySelectorAll('.slw').forEach(w=>{const g=w.querySelector('.gl');w.querySelector('.pv').onclick=()=>g.scrollBy({left:-g.clientWidth*.8,behavior:'smooth'});w.querySelector('.nx').onclick=()=>g.scrollBy({left:g.clientWidth*.8,behavior:'smooth'})});
const gw=$('#gw'),pg=$('#pg');if(gw)addEventListener('pointermove',e=>gw.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)');
// jedan rAF-throttled scroll handler: nav + progress bar (transform umesto width, bez layout-a)
let mx=1,tk=0;const up=()=>{tk=0;sc();if(pg)pg.style.transform='scaleX('+Math.min(scrollY/mx,1)+')'},cm=()=>{mx=Math.max(document.documentElement.scrollHeight-innerHeight,1);up()};
addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(up)},{passive:true});addEventListener('resize',cm,{passive:true});new ResizeObserver(cm).observe(document.body);cm();
document.querySelectorAll('.tb button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tb button').forEach(x=>x.classList.toggle('on',x==b));document.querySelectorAll('.cat').forEach(c=>c.style.display=!b.dataset.c||c.dataset.c==b.dataset.c?'':'none');document.querySelector('.pl').classList.toggle('one',!!b.dataset.c)});
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const t=a.getAttribute('href')=='#top'?document.body:document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}});
const gm=$('#gm');if(gm)gm.onclick=()=>{document.querySelectorAll('.gl img.hid').forEach(i=>i.classList.remove('hid'));gm.remove()};
const lb=$('#lb'),li=lb.querySelector('img');let L=[],ix=0;const show=n=>{ix=(n+L.length)%L.length;li.src=L[ix].src};
document.querySelectorAll('.gl img').forEach(i=>i.onclick=()=>{L=[...document.querySelectorAll('.gl img:not(.hid)')];ix=L.indexOf(i);li.src=i.src;lb.classList.add('on')});
lb.querySelector('.lbp').onclick=e=>{e.stopPropagation();show(ix-1)};lb.querySelector('.lbn').onclick=e=>{e.stopPropagation();show(ix+1)};lb.onclick=()=>lb.classList.remove('on');
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key=='Escape')lb.classList.remove('on');if(e.key=='ArrowLeft')show(ix-1);if(e.key=='ArrowRight')show(ix+1)});
let tx=0;lb.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)show(ix+(d<0?1:-1))});