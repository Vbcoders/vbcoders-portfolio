const glow=document.querySelector('.cursor-glow');
if(glow) window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

/* VBCoders experience layer — turns the portfolio into an interactive product showcase. */
const experienceStyle=document.createElement('style');
experienceStyle.textContent=`
.vb-progress{position:fixed;left:0;top:0;height:2px;width:0;background:linear-gradient(90deg,#8b5cf6,#22d3ee);z-index:9999;box-shadow:0 0 18px #8b5cf6;pointer-events:none}
.vb-lab{max-width:var(--max);margin:0 auto;padding:110px 24px 30px}.vb-lab-shell{position:relative;overflow:hidden;border:1px solid var(--line);border-radius:24px;background:radial-gradient(circle at 80% 0,#8b5cf61c,transparent 35%),linear-gradient(145deg,#10182a,#090e17);padding:55px}.vb-lab-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:55px;align-items:center}.vb-lab h2{font:600 clamp(38px,5vw,64px)/1.02 'Space Grotesk';letter-spacing:-.05em;margin:0}.vb-lab h2 em{font-style:normal;background:linear-gradient(90deg,#fff,#a78bfa,#67e8f9);-webkit-background-clip:text;color:transparent}.vb-lab-copy{color:#8491a6;max-width:460px;margin:20px 0 28px}.vb-lab-kicker{font:700 10px monospace;letter-spacing:.18em;color:#a78bfa}.vb-builder{border:1px solid #ffffff12;background:#080d16cc;border-radius:18px;padding:22px;box-shadow:0 30px 90px #0008}.vb-builder-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.vb-builder-top span{font:11px monospace;color:#687489}.vb-live{display:flex;align-items:center;gap:7px;font:10px monospace;color:#4ade80}.vb-live i{width:6px;height:6px;border-radius:50%;background:#4ade80;box-shadow:0 0 12px #4ade80}.vb-choice{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.vb-choice button{min-height:86px;border:1px solid #ffffff10;border-radius:12px;background:#101827;color:#9ca8bb;text-align:left;padding:13px;cursor:pointer;transition:.25s}.vb-choice button:hover,.vb-choice button.active{border-color:#8b5cf655;background:linear-gradient(145deg,#19162d,#101827);color:#fff;transform:translateY(-2px)}.vb-choice strong{display:block;font:600 14px 'Space Grotesk';margin-bottom:5px}.vb-choice small{font-size:10px;color:#647188}.vb-result{margin-top:13px;padding:17px;border-radius:12px;background:#0d1421;border:1px solid #ffffff0b;display:flex;justify-content:space-between;align-items:center;gap:15px}.vb-result span{font-size:11px;color:#748197}.vb-result strong{display:block;color:#fff;font:600 17px 'Space Grotesk';margin-top:3px}.vb-result b{font:700 13px monospace;color:#67e8f9;white-space:nowrap}.vb-stats{max-width:var(--max);margin:0 auto;padding:30px 24px 90px;display:grid;grid-template-columns:repeat(4,1fr);gap:1px}.vb-stat{padding:25px;border-left:1px solid var(--line)}.vb-stat:first-child{border-left:0}.vb-stat strong{display:block;font:600 clamp(30px,4vw,46px) 'Space Grotesk';letter-spacing:-.05em}.vb-stat span{font-size:11px;color:#69758a;text-transform:uppercase;letter-spacing:.12em}.vb-proof{display:flex;gap:10px;flex-wrap:wrap;margin-top:25px}.vb-proof span{border:1px solid var(--line);border-radius:999px;padding:7px 10px;color:#7f8ba0;font:10px monospace}.vb-tilt{transform-style:preserve-3d}.vb-builder button:focus-visible,.btn:focus-visible,a:focus-visible{outline:2px solid #22d3ee;outline-offset:3px}
@media(max-width:900px){.vb-lab-grid{grid-template-columns:1fr}.vb-lab-shell{padding:35px}.vb-stats{grid-template-columns:1fr 1fr}.vb-stat:nth-child(3){border-left:0}.vb-choice{grid-template-columns:1fr}}
@media(max-width:600px){.vb-lab{padding:70px 18px 20px}.vb-lab-shell{padding:27px 20px}.vb-stats{padding:25px 18px 65px}.vb-stat{padding:20px 14px}.vb-stat strong{font-size:30px}}
`;
document.head.appendChild(experienceStyle);

const progress=document.createElement('div');progress.className='vb-progress';document.body.appendChild(progress);
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?(scrollY/max)*100:0)+'%'});

const marquee=document.querySelector('.marquee');
if(marquee){
  const lab=document.createElement('section');lab.className='vb-lab reveal';lab.id='build-lab';
  lab.innerHTML=`<div class="vb-lab-shell vb-tilt"><div class="vb-lab-grid"><div><p class="vb-lab-kicker">05 / THE BUILD LAB</p><h2>Don't just <em>look around.</em><br>Try building.</h2><p class="vb-lab-copy">Pick what you want to create. This tiny product configurator shows how VBCoders thinks: understand the need, shape the product, then ship it.</p><div class="vb-proof"><span>NO TEMPLATE FEEL</span><span>BUILT AROUND YOU</span><span>READY TO SCALE</span></div></div><div class="vb-builder"><div class="vb-builder-top"><span>vbcoders.configurator</span><span class="vb-live"><i></i>LIVE</span></div><div class="vb-choice"><button class="active" data-type="website"><strong>Website</strong><small>Brand + leads</small></button><button data-type="app"><strong>Android App</strong><small>Product + users</small></button><button data-type="software"><strong>Business Tool</strong><small>Work + automation</small></button></div><div class="vb-result"><div><span>Suggested starting build</span><strong id="vbResultTitle">Business Website</strong></div><b id="vbResultPrice">₹2,999+</b></div></div></div></div></section>`;
  marquee.insertAdjacentElement('afterend',lab);
  lab.querySelectorAll('.vb-choice button').forEach(btn=>btn.addEventListener('click',()=>{
    lab.querySelectorAll('.vb-choice button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
    const data={website:['Business Website','₹2,999+'],app:['Android App / MVP','₹7,999+'],software:['Custom Business Software','₹10,000+']}[btn.dataset.type];
    document.getElementById('vbResultTitle').textContent=data[0];document.getElementById('vbResultPrice').textContent=data[1];
  }));
}

const statsWrap=document.querySelector('.solutions');
if(statsWrap){
  const stats=document.createElement('div');stats.className='vb-stats';stats.innerHTML=`<div class="vb-stat"><strong data-count="6">0</strong><span>Core build areas</span></div><div class="vb-stat"><strong data-count="1">0</strong><span>Direct developer</span></div><div class="vb-stat"><strong>∞</strong><span>Ideas welcome</span></div><div class="vb-stat"><strong>24/7</strong><span>Product lives online</span></div>`;
  statsWrap.insertAdjacentElement('afterend',stats);
  const statObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.querySelectorAll('[data-count]').forEach(el=>{const end=Number(el.dataset.count);let n=0;const step=Math.max(1,Math.ceil(end/12));const timer=setInterval(()=>{n+=step;if(n>=end){n=end;clearInterval(timer)}el.textContent=n},55)});statObserver.unobserve(entry.target)}),{threshold:.4});statObserver.observe(stats);
}

const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

/* Subtle 3D movement on the build lab — disabled for touch devices. */
const tilt=document.querySelector('.vb-tilt');
if(tilt && matchMedia('(pointer:fine)').matches){tilt.addEventListener('pointermove',e=>{const r=tilt.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`perspective(1100px) rotateX(${y*-2}deg) rotateY(${x*2}deg)`});tilt.addEventListener('pointerleave',()=>tilt.style.transform='')}

const quoteForm=document.getElementById('quoteForm');
if(quoteForm)quoteForm.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const service=document.getElementById('service').value;const message=document.getElementById('message').value.trim();const status=document.getElementById('formStatus');const text=encodeURIComponent(`Hi VBCoders, I'm ${name}. I need a ${service}.\n\n${message}`);window.open(`https://wa.me/919000000000?text=${text}`,'_blank');status.textContent='Opening WhatsApp…';});
