// STARS
(function generateStars(){
  const container=document.getElementById('stars');
  const count=window.innerWidth<768?60:120;
  for(let i=0;i<count;i++){
    const s=document.createElement('div');
    s.className='star';
    s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${Math.random()<.2?3:2}px;height:${Math.random()<.2?3:2}px;--dur:${2+Math.random()*4}s;--delay:${Math.random()*5}s;opacity:${0.3+Math.random()*0.7}`;
    container.appendChild(s);
  }
})();

// ROAD MARKINGS
(function generateRoadMarkings(){
  const container=document.getElementById('roadMarkings');
  const roadW=window.innerWidth*5;
  const lineW=80,gap=40;
  let x=0;
  while(x<roadW){
    const line=document.createElement('div');
    line.className='road-line';
    line.style.cssText=`left:${x}px;width:${lineW}px`;
    container.appendChild(line);
    x+=lineW+gap;
  }
})();

// PARTICLES
(function generateParticles(){
  const container=document.getElementById('particles');
  const colors=['rgba(255,80,20,0.8)','rgba(255,150,0,0.7)','rgba(255,255,255,0.6)','rgba(232,25,44,0.7)','rgba(255,200,50,0.8)'];
  for(let i=0;i<30;i++){
    const p=document.createElement('div');
    p.className='particle';
    const size=2+Math.random()*5;
    p.style.cssText=`left:${10+Math.random()*80}%;bottom:${120+Math.random()*80}px;width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};--px:${(Math.random()-0.5)*80}px;--py:${-20-Math.random()*80}px;--pd:${1.5+Math.random()*3}s;--pde:${Math.random()*4}s`;
    container.appendChild(p);
  }
  for(let i=0;i<15;i++){
    const streak=document.createElement('div');
    streak.className='light-streak';
    streak.style.cssText=`right:0;top:${5+Math.random()*30}%;width:${60+Math.random()*200}px;--sd:${1.5+Math.random()*3}s;--sde:${Math.random()*5}s`;
    container.appendChild(streak);
  }
})();

// LOADER
window.addEventListener('load',function(){
  setTimeout(function(){
    const loader=document.getElementById('loader');
    if(loader){loader.classList.add('fade-out');setTimeout(()=>loader.style.display='none',900)}
  },1800);
});