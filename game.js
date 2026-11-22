import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.166.1/build/three.module.js';

const canvas=document.querySelector('#game');
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8));
renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.12;
const scene=new THREE.Scene();scene.background=new THREE.Color('#a5aca0');scene.fog=new THREE.FogExp2('#9ba69b',.0095);
const camera=new THREE.PerspectiveCamera(67,innerWidth/innerHeight,.1,420);
const clock=new THREE.Clock();
const hemi=new THREE.HemisphereLight('#d3ded0','#273130',2.05);scene.add(hemi);
const sun=new THREE.DirectionalLight('#ffd6a2',2.6);sun.position.set(-48,65,28);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-90;sun.shadow.camera.right=90;sun.shadow.camera.top=90;sun.shadow.camera.bottom=-90;sun.shadow.bias=-.00015;scene.add(sun);
const fill=new THREE.DirectionalLight('#9cbbb3',.48);fill.position.set(45,28,-50);scene.add(fill);
const mats={ground:new THREE.MeshStandardMaterial({color:'#394341',roughness:1}),asphalt:new THREE.MeshStandardMaterial({color:'#232e30',roughness:.92}),concrete:new THREE.MeshStandardMaterial({color:'#65706a',roughness:.93}),dark:new THREE.MeshStandardMaterial({color:'#162124',roughness:.82}),rust:new THREE.MeshStandardMaterial({color:'#815b49',roughness:.9}),glass:new THREE.MeshStandardMaterial({color:'#526d69',roughness:.34,metalness:.2}),lit:new THREE.MeshStandardMaterial({color:'#e4bc77',emissive:'#c48f45',emissiveIntensity:1.6}),neon:new THREE.MeshStandardMaterial({color:'#d4ef6a',emissive:'#a7cb43',emissiveIntensity:1.5}),orange:new THREE.MeshStandardMaterial({color:'#ff906c',emissive:'#da553a',emissiveIntensity:1.5}),green:new THREE.MeshStandardMaterial({color:'#526e4a',roughness:1}),leaf:new THREE.MeshStandardMaterial({color:'#718b59',roughness:1}),water:new THREE.MeshStandardMaterial({color:'#6d988b',roughness:.26,metalness:.3})};
const world=new THREE.Group();scene.add(world);
const boxGeo=new THREE.BoxGeometry(1,1,1),sphereGeo=new THREE.SphereGeometry(1,12,8),cylGeo=new THREE.CylinderGeometry(1,1,1,10);
function box(parent,x,y,z,sx,sy,sz,mat,cast=true){const m=new THREE.Mesh(boxGeo,mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=cast;m.receiveShadow=true;parent.add(m);return m}
function sphere(parent,x,y,z,r,mat){const m=new THREE.Mesh(sphereGeo,mat);m.position.set(x,y,z);m.scale.set(r,r,r);m.castShadow=true;parent.add(m);return m}
function cylinder(parent,x,y,z,r1,r2,h,mat,segments=10){const m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,segments),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m}
const ground=box(world,0,-.55,0,190,1,190,mats.ground,false);ground.receiveShadow=true;
// Road network, broken lanes and islands
box(world,0,-.03,0,13,.08,178,mats.asphalt,false);box(world,0,-.025,0,176,.08,11,mats.asphalt,false);
for(let z=-80;z<=80;z+=7){box(world,.13,.025,z, .12,.025,3,mats.concrete,false)}
for(let x=-80;x<=80;x+=7){box(world,x,.025,-.13,3,.025,.12,mats.concrete,false)}
// Sidewalks and small broken concrete slabs
for(let z=-86;z<87;z+=9){for(const x of [-9.1,9.1])box(world,x,.02,z,2.1,.22,6.8,mats.concrete,false)}
for(let x=-85;x<87;x+=10){for(const z of [-8.2,8.2])box(world,x,.03,z,7,.24,1.7,mats.concrete,false)}
// Painted crosswalks, drains and storm lines
for(let i=-5;i<=5;i++){box(world,i*1.08,.038,-9.6,.62,.025,2.7,new THREE.MeshStandardMaterial({color:'#b1b2a1',roughness:1}),false);box(world,i*1.08,.038,9.6,.62,.025,2.7,new THREE.MeshStandardMaterial({color:'#b1b2a1',roughness:1}),false)}
for(let z=-80;z<85;z+=21){box(world,6.12,.02,z,.28,.04,7,mats.dark,false);box(world,-6.12,.02,z,.28,.04,7,mats.dark,false)}
// City block buildings, silhouettes, windows and rooftop equipment
const buildingMats=['#263538','#344243','#3a4541','#273239','#424b43','#303c3d'].map(c=>new THREE.MeshStandardMaterial({color:c,roughness:.98}));
const windowMat=new THREE.MeshStandardMaterial({color:'#839083',emissive:'#455c50',emissiveIntensity:.7,roughness:.5});
const darkWindow=new THREE.MeshStandardMaterial({color:'#172729',roughness:.5});
const brightWindowMatrices=[],darkWindowMatrices=[];
function addWindow(g,x,y,z,sx,sy,sz,mat){const matrix=new THREE.Matrix4().compose(new THREE.Vector3(g.position.x+x,y,g.position.z+z),new THREE.Quaternion(),new THREE.Vector3(sx,sy,sz));(mat===windowMat?brightWindowMatrices:darkWindowMatrices).push(matrix)}
let seed=917;function rand(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}
// Solid-city collision volumes. Buildings are not walk-through; doors are handled separately.
const colliders=[];function addCollider(x,z,w,d){colliders.push({x1:x-w/2,x2:x+w/2,z1:z-d/2,z2:z+d/2})}
function makeBuilding(x,z,w,d,h,kind=0){const g=new THREE.Group();g.position.set(x,0,z);world.add(g);addCollider(x,z,w,d);let mat=buildingMats[Math.floor(rand()*buildingMats.length)];box(g,0,h/2,0,w,h,d,mat,true);box(g,0,h+.25,0,w+.2,.5,d+.2,mats.dark,true);
  for(let yy=3;yy<h-1;yy+=3.8){for(let xx=-w/2+1.5;xx<w/2-1;xx+=2.4){if(rand()>.16){let wm=rand()>.42?windowMat:darkWindow;addWindow(g,xx,yy,d/2+.03,1.05,1.2,.08,wm);addWindow(g,xx,yy,-d/2-.03,1.05,1.2,.08,wm)} }for(let zz=-d/2+1.4;zz<d/2;zz+=2.7){if(rand()>.3){addWindow(g,w/2+.03,yy,zz,.07,1.1,1.05,rand()>.5?windowMat:darkWindow);addWindow(g,-w/2-.03,yy,zz,.07,1.1,1.05,rand()>.6?windowMat:darkWindow)}}}
  if(kind%3===0){box(g,-w*.22,h+.9,-d*.1,1.1,1.3,1.2,mats.rust);cylinder(g,w*.2,h+1.2,d*.15,.22,.28,2.4,mats.dark,8)}
  if(kind%4===0)box(g,w*.18,h+1,0,w*.5,.14,.15,mats.orange,false);
  return g}
// Deliberate sight corridors around plaza and five blocks
const buildingSpecs=[[-28,-28,20,20,24],[-49,-24,20,24,37],[-28,-53,20,20,31],[-49,-55,19,17,28],[28,-27,22,18,33],[51,-26,20,23,42],[28,-52,19,21,28],[51,-53,19,18,34],[-29,27,22,18,29],[-51,27,20,21,39],[-29,51,19,20,34],[-51,52,19,19,26],[28,28,21,19,31],[51,27,20,22,42],[28,52,18,20,27],[51,52,20,19,35]];
buildingSpecs.forEach((s,i)=>makeBuilding(...s,i));
// Tower skyline past the perimeter
for(let i=0;i<26;i++){let x=-92+rand()*184,z=-100-rand()*31,w=8+rand()*15,h=25+rand()*54,d=8+rand()*14;makeBuilding(x,z,w,d,h,i+7)}
function addWindowInstances(matrices,material){if(!matrices.length)return;const mesh=new THREE.InstancedMesh(boxGeo,material,matrices.length);for(let i=0;i<matrices.length;i++)mesh.setMatrixAt(i,matrices[i]);mesh.instanceMatrix.needsUpdate=true;mesh.castShadow=false;mesh.receiveShadow=false;mesh.computeBoundingSphere();world.add(mesh)}
addWindowInstances(brightWindowMatrices,windowMat);addWindowInstances(darkWindowMatrices,darkWindow);
// Boundary wall and checkpoint, with view through exit
const wallmat=new THREE.MeshStandardMaterial({color:'#747b71',roughness:1});
for(const x of [-88,-68,-48,-28,28,48,68,88])box(world,x,5,-72,19,10,2.4,wallmat);
for(const x of [-88,-68,-48,-28,28,48,68,88]){box(world,x,10.2,-72,20,.5,3.2,mats.dark);for(let z=-78;z<=-66;z+=4)box(world,x,10.6,z,.16,1.3,.16,mats.orange,false)}
box(world,0,8.3,-72,10,16,2.8,mats.dark);box(world,-6,6,-72,1.1,12,4,mats.rust);box(world,6,6,-72,1.1,12,4,mats.rust);
// Aperture arch, gate doors and warning sign
box(world,-5.7,8,-72,1,16,3.2,mats.concrete);box(world,5.7,8,-72,1,16,3.2,mats.concrete);box(world,0,15,-72,12,2,3.2,mats.concrete);
const gateLeft=box(world,-2.4,5.5,-72,4.7,11,.5,mats.rust);const gateRight=box(world,2.4,5.5,-72,4.7,11,.5,mats.rust);
box(world,0,13,-70,5.4,.15,.13,mats.neon,false);
// Paradise landscape beyond wall
const paradise=new THREE.Group();scene.add(paradise);
const greenGround=new THREE.Mesh(new THREE.PlaneGeometry(190,95,1,1),new THREE.MeshStandardMaterial({color:'#5d7651',roughness:1}));greenGround.rotation.x=-Math.PI/2;greenGround.position.set(0,-.42,-120);greenGround.receiveShadow=true;paradise.add(greenGround);
const river=new THREE.Mesh(new THREE.PlaneGeometry(125,12),mats.water);river.rotation.x=-Math.PI/2;river.rotation.z=-.16;river.position.set(0,-.28,-117);paradise.add(river);
for(let i=0;i<36;i++){let x=-92+rand()*184,z=-91-rand()*54;let h=12+rand()*22;let trunk=cylinder(paradise,x,h*.35,z,.35,.55,h*.7,new THREE.MeshStandardMaterial({color:'#685544'}),7);sphere(paradise,x,h*.84,z,3+rand()*3,mats.leaf);sphere(paradise,x-1,h*.7,z+1,2.4,mats.green)}
for(let i=0;i<9;i++){let hill=sphere(paradise,-110+i*28,-3,-146-rand()*10,20+rand()*15,new THREE.MeshStandardMaterial({color:i%2?'#627d57':'#7f926b',roughness:1}));hill.scale.set(1,.48,.8)}
// Atmospheric towers, cables and clutter props
function lamp(x,z){cylinder(world,x,3,z,.12,.16,6,mats.dark,8);box(world,x,6.1,z,.8,.17,.25,mats.lit,false)}
for(let z=-65;z<=65;z+=22){lamp(-9.9,z);lamp(9.9,z)}
function rubble(x,z,s=1){box(world,x,.35,z,1.4*s,.7*s,1.1*s,mats.rust);box(world,x+.75*s,.25,z+.4*s,.7*s,.5*s,.65*s,mats.concrete)}
for(const p of [[-13,-15],[13,-16],[-16,22],[16,23],[-57,5],[57,8],[-44,39],[39,-39],[12,52],[-11,-43]])rubble(...p,.8+rand()*.6);
// Player avatar
const player=new THREE.Group();scene.add(player);
const avatar=new THREE.Group();player.add(avatar);
const coat=new THREE.MeshStandardMaterial({color:'#ad684b',roughness:.92}),shirt=new THREE.MeshStandardMaterial({color:'#d2c19a',roughness:.9}),pants=new THREE.MeshStandardMaterial({color:'#24383a',roughness:.85}),skin=new THREE.MeshStandardMaterial({color:'#bd9677',roughness:.9}),bagmat=new THREE.MeshStandardMaterial({color:'#25302d',roughness:.9});
box(avatar,0,1.15,0,.68,.86,.38,coat);box(avatar,0,1.52,0,.72,.24,.42,shirt);sphere(avatar,0,1.85,0,.25,skin);box(avatar,0,2.04,-.015,.48,.12,.42,mats.dark);box(avatar,0,.65,0,.56,.25,.32,pants);const legL=box(avatar,-.17,.32,0,.21,.53,.24,pants),legR=box(avatar,.17,.32,0,.21,.53,.24,pants);box(avatar,0,1.18,-.28,.38,.48,.18,bagmat);box(avatar,-.41,1.15,0,.15,.58,.2,coat);box(avatar,.41,1.15,0,.15,.58,.2,coat);box(avatar,0,1.86,.235,.13,.07,.02,mats.lit,false);
player.position.set(0,0,15);
// Interactable stations and destination markers
const entities=[],labels=[],labelPos=new THREE.Vector3();
function makeLabel(text,color='#d4ef6a'){const c=document.createElement('canvas');c.width=512;c.height=128;const ctx=c.getContext('2d');ctx.clearRect(0,0,512,128);ctx.fillStyle='rgba(6,14,16,.82)';ctx.fillRect(4,4,504,120);ctx.strokeStyle=color;ctx.lineWidth=3;ctx.strokeRect(4,4,504,120);ctx.fillStyle=color;ctx.font='500 33px monospace';ctx.textAlign='center';ctx.fillText(text,256,77);const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true,depthTest:false}));sp.scale.set(4.4,1.1,1);sp.userData.label=true;labels.push(sp);return sp}
function station({id,name,x,z,type='relay',clue='',code=[],accent=mats.neon}){const g=new THREE.Group();g.position.set(x,0,z);world.add(g);box(g,0,.55,0,1.45,1.1,.95,mats.dark);box(g,0,1.12,0,1.12,.1,.76,accent,false);box(g,0,1.43,-.23,.86,.55,.09,mats.glass,false);box(g,0,1.44,-.29,.62,.32,.025,mats.neon,false);for(let k=-1;k<=1;k++){cylinder(g,k*.48,.18,0,.09,.13,.36,mats.concrete,8)}const ring=new THREE.Mesh(new THREE.TorusGeometry(1.05,.035,6,36),accent);ring.rotation.x=Math.PI/2;ring.position.y=.08;g.add(ring);const label=makeLabel(name,type==='gate'?'#ff906c':'#d4ef6a');label.position.set(0,2.55,0);label.userData.labelType='station';g.add(label);if(type==='relay'){for(let i=0;i<3;i++){const orb=sphere(g,0,2.1,0,.11,accent);orb.userData.orb=true;orb.position.x=(i-1)*.25}}const obj={id,name,x,z,type,clue,code,group:g,active:false};entities.push(obj);return obj}
const archive=station({id:'archive',name:'TRANSIT ARCHIVE',x:-27,z:4,type:'archive',accent:mats.orange});
const relay1=station({id:'relay1',name:'RELAY 01',x:-2,z:-29,clue:'An old mark reads: LOW → HIGH → HUSH.',code:[0,2,3]});
const relay2=station({id:'relay2',name:'RELAY 02',x:29,z:3,clue:'Someone carved: MID → HUSH → LOW.',code:[1,3,0],accent:new THREE.MeshStandardMaterial({color:'#80c9d0',emissive:'#3e9a9e',emissiveIntensity:1.5})});
const relay3=station({id:'relay3',name:'RELAY 03',x:3,z:37,clue:'Chalk on the base says: HIGH → MID → LOW.',code:[2,1,0],accent:new THREE.MeshStandardMaterial({color:'#d6a9ec',emissive:'#9961b6',emissiveIntensity:1.5})});
const exit=station({id:'exit',name:'PERIMETER GATE',x:0,z:-64,type:'gate',accent:mats.orange});
// Neon signs, enterable interiors, street props, and the people who still live here.
const neonSigns=[],fires=[];
function neonSign(text,x,y,z,rotY,color='#d4ef6a',wd=5.2,ht=1.3){
  const c=document.createElement('canvas');c.width=512;c.height=128;const ctx=c.getContext('2d');
  let size=58;do{ctx.font=`700 ${size}px "Space Grotesk",sans-serif`;size-=2}while(ctx.measureText(text).width>452&&size>23);
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.shadowColor=color;ctx.shadowBlur=26;ctx.fillStyle=color;ctx.fillText(text,256,67);ctx.shadowBlur=8;ctx.fillText(text,256,67);
  const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;
  const mat=new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,toneMapped:false,side:THREE.DoubleSide});
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(wd,ht),mat);mesh.position.set(x,y,z);mesh.rotation.y=rotY;world.add(mesh);neonSigns.push({mesh,phase:rand()*7});return mesh;
}
const interiorWall=new THREE.MeshStandardMaterial({color:'#5a625b',roughness:.96});
const interiorFloor=new THREE.MeshStandardMaterial({color:'#444944',roughness:.94});
const warmBulb=new THREE.MeshStandardMaterial({color:'#ffdca0',emissive:'#ffb45b',emissiveIntensity:2.2});
function interiorLamp(x,z,color='#ffd09a'){sphere(world,x,3.75,z,.12,warmBulb);const l=new THREE.PointLight(color,17,13,2);l.position.set(x,3.35,z);scene.add(l);box(world,x,4.55,z,.04,.85,.04,mats.dark,false)}
function buildEnterableBuilding(o){
  const {x,z,w,d,h=5.5,doorSide,doorWidth=3.4,doorOffset=0}=o;const t=.6;const floor=o.floorMat||interiorFloor;const wallMat=o.wallMat||interiorWall;
  box(world,x,-.02,z,w-.55,.13,d-.55,floor,false);
  const wall=(cx,cz,sw,sd)=>{box(world,cx,h/2,cz,sw,h,sd,wallMat,true);addCollider(cx,cz,sw,sd)};
  wall(x,z-d/2+t/2,w,t);wall(x,z+d/2-t/2,w,t);
  if(doorSide==='+x'||doorSide==='-x'){
    const sideX=doorSide==='+x'?x-w/2+t/2:x+w/2-t/2;wall(sideX,z,t,d-2*t);
    const faceX=doorSide==='+x'?x+w/2-t/2:x-w/2+t/2;const dc=z+doorOffset;
    wall(faceX,(z-d/2+t+dc-doorWidth/2)/2,t,Math.max(.2,dc-doorWidth/2-(z-d/2+t)));
    wall(faceX,(dc+doorWidth/2+z+d/2-t)/2,t,Math.max(.2,z+d/2-t-(dc+doorWidth/2)));
    box(world,faceX,(h+3.2)/2,dc,t,h-3.2,doorWidth,wallMat,true);
    box(world,faceX,3.25,dc-doorWidth/2-.09,.26,.2,doorWidth+.48,mats.rust,true);box(world,faceX,3.25,dc+doorWidth/2+.09,.26,.2,doorWidth+.48,mats.rust,true);
    box(world,faceX,3.28,dc,.24,.16,doorWidth+.55,mats.rust,false);
    const out=doorSide==='+x'?1:.0;box(world,faceX+(out? .72:-.72),3.55,dc,1.5,.18,doorWidth+1.1,mats.dark,true);
    neonSign(o.sign.text,doorSide==='+x'?x+w/2+.04:x-w/2-.04,4.45,dc,doorSide==='+x'?Math.PI/2:-Math.PI/2,o.sign.color,o.sign.width||5.4,1.05);
  }else{
    const sideZ=doorSide==='+z'?z-d/2+t/2:z+d/2-t/2;wall(x,sideZ,w-2*t,t);
    const faceZ=doorSide==='+z'?z+d/2-t/2:z-d/2+t/2;const dc=x+doorOffset;
    wall((x-w/2+t+dc-doorWidth/2)/2,faceZ,Math.max(.2,dc-doorWidth/2-(x-w/2+t)),t);
    wall((dc+doorWidth/2+x+w/2-t)/2,faceZ,Math.max(.2,x+w/2-t-(dc+doorWidth/2)),t);
    box(world,dc,(h+3.2)/2,faceZ,doorWidth,h-3.2,t,wallMat,true);
    box(world,dc-doorWidth/2-.09,3.25,faceZ,doorWidth+.48,.2,.26,mats.rust,true);box(world,dc+doorWidth/2+.09,3.25,faceZ,doorWidth+.48,.2,.26,mats.rust,true);
    box(world,dc,3.28,faceZ,doorWidth+.55,.16,.24,mats.rust,false);
    const out=doorSide==='+z'?1:-1;box(world,dc,3.55,faceZ+out*.72,doorWidth+1.1,.18,1.5,mats.dark,true);
    neonSign(o.sign.text,dc,4.45,doorSide==='+z'?z+d/2+.04:z-d/2-.04,doorSide==='+z'?0:Math.PI,o.sign.color,o.sign.width||5.4,1.05);
  }
  // A cutaway roof keeps the interior readable in third person.
  for(let i=-1;i<=1;i++)box(world,x,h+.1,z+i*(d/3),w,.22,.22,mats.rust,false);
  for(let i=-1;i<=1;i++)box(world,x+i*(w/3),h+.1,z,.22,.22,d,mats.rust,false);
  box(world,x,h+.28,z-d/2,w+.1,.55,.25,mats.dark,false);box(world,x,h+.28,z+d/2,w+.1,.55,.25,mats.dark,false);
  return {x,z,w,d,h};
}
const archiveHouse=buildEnterableBuilding({x:-27,z:4,w:22,d:16,h:5.4,doorSide:'+x',doorWidth:3.4,sign:{text:'TRANSIT ARCHIVE',color:'#ffb37e',width:6.2},wallMat:new THREE.MeshStandardMaterial({color:'#5d5d52',roughness:.97}),floorMat:new THREE.MeshStandardMaterial({color:'#414843',roughness:.95})});
const signalHouse=buildEnterableBuilding({x:29,z:3,w:22,d:16,h:5.2,doorSide:'-x',doorWidth:3.4,sign:{text:'THE SIGNAL HOUSE',color:'#9fe4d4',width:6.5},wallMat:new THREE.MeshStandardMaterial({color:'#4c5956',roughness:.97}),floorMat:new THREE.MeshStandardMaterial({color:'#3d4747',roughness:.95})});
// Named enterable civic and commercial buildings
const supermarket=buildEnterableBuilding({x:-51,z:27,w:20,d:18,h:5.6,doorSide:'-z',doorWidth:3.6,sign:{text:'MARKET 09',color:'#bfe8a2',width:5.2},wallMat:new THREE.MeshStandardMaterial({color:'#52624f',roughness:.96}),floorMat:new THREE.MeshStandardMaterial({color:'#777768',roughness:.95})});
const police=buildEnterableBuilding({x:-51,z:52,w:19,d:17,h:6.2,doorSide:'-z',doorWidth:3.2,sign:{text:'CIVIC POLICE',color:'#9dc8d8',width:5.8},wallMat:new THREE.MeshStandardMaterial({color:'#46575a',roughness:.96}),floorMat:new THREE.MeshStandardMaterial({color:'#484f50',roughness:.95})});
const postOffice=buildEnterableBuilding({x:51,z:27,w:20,d:18,h:5.5,doorSide:'-z',doorWidth:3.4,sign:{text:'POST OFFICE',color:'#e3c77d',width:5.5},wallMat:new THREE.MeshStandardMaterial({color:'#666052',roughness:.96}),floorMat:new THREE.MeshStandardMaterial({color:'#56544a',roughness:.95})});
const residence=buildEnterableBuilding({x:51,z:52,w:20,d:17,h:5.4,doorSide:'-z',doorWidth:2.8,sign:{text:'HOUSE 18',color:'#ffc08a',width:4.4},wallMat:new THREE.MeshStandardMaterial({color:'#62605a',roughness:.96}),floorMat:new THREE.MeshStandardMaterial({color:'#5a5549',roughness:.95})});
// Market: aisles, shelves, refrigerators and a cashier counter
for(let row=-2;row<=2;row++){
  box(world,-51,.55,27+row*2.2,10,.18,.9,mats.dark,true);
  box(world,-51,1.05,27+row*2.2,10,.42,.12,row%2?mats.rust:mats.concrete,true);
  for(let i=-4;i<=4;i+=2)sphere(world,-51+i*.9,1.18,27+row*2.2,.18,i%2?mats.orange:mats.lit);
}
for(let i=0;i<4;i++){box(world,-44+i*1.2,1.25,20.4,1.05,2.5,.7,mats.glass,true);box(world,-44+i*1.2,.35,20.4,.75,.55,.55,mats.dark,true)}
box(world,-57.4,.85,27.5,2.8,1.55,1.15,mats.dark,true);box(world,-57.4,1.7,27.5,2.5,.18,.9,mats.rust,false);cylinder(world,-57.4,1.05,27.5,.18,.22,.35,mats.lit,8);
interiorLamp(-51,27.5,'#bee99e');
// Police: desk, records wall, holding bench and lit duty map
box(world,-51,.75,45.7,5.5,1.5,1.2,mats.dark,true);box(world,-51,1.55,45.7,5.1,.16,.9,mats.rust,false);
for(let i=0;i<5;i++)box(world,-55+i*2,1.1,54.2,1.35,.18,.5,i%2?mats.concrete:mats.rust,true);
box(world,-45.8,2.1,52.5,2.8,.12,2.2,mats.neon,false);box(world,-45.8,1.15,52.5,.65,2.1,.65,mats.dark,true);
interiorLamp(-51,52,'#9ac9db');
// Post office: sorting cages, counters and mail parcels
for(let i=0;i<4;i++){box(world,45+i*3.2,.95,20.8,2.7,1.9,.8,mats.rust,true);for(let j=0;j<3;j++)box(world,45+i*3.2,.75+j*.55,21.25,2.2,.3,.08,mats.dark,false)}
box(world,51,.85,30.5,8.2,1.35,1.1,mats.dark,true);box(world,51,1.58,30.5,7.8,.18,.85,mats.rust,false);
for(let i=0;i<6;i++)box(world,48+i*1.2,1.2,33.8,.8,.9,.65,i%2?mats.concrete:mats.rust,true);
interiorLamp(51,27.5,'#e2c77a');
// House: bed, table, chairs, cabinet and kitchen
box(world,51,.38,45.6,4.2,.55,2.4,mats.concrete,true);box(world,51,.92,45.6,4.1,.35,2.3,mats.lit,false);
box(world,45.5,.72,52.5,3.4,.18,1.8,mats.rust,true);for(const x of [44,47]){box(world,x,.4,51.1,.22,.8,.22,mats.dark,true);box(world,x,.4,53.9,.22,.8,.22,mats.dark,true)}
box(world,57,1.1,52.8,1.2,2.2,.8,mats.rust,true);box(world,57,2.05,52.8,.85,.18,.75,mats.dark,false);
box(world,57,1.05,57.4,1.8,2.1,.8,mats.glass,true);box(world,57,.38,57.4,1.5,.55,.7,mats.concrete,true);
interiorLamp(51,52,'#ffc07f');
// Warm interior dressing
for(const p of [[-33,-2],[-21,-2],[-32,9],[-22,9]])box(world,p[0],.6,p[1],1.25,1.1,.62,mats.rust,true);
for(let i=0;i<5;i++){box(world,-35.4,.55+i*.33,-2.8,2.1,.16,.45,mats.dark,false);box(world,-35.2,.75+i*.33,-2.8,1.2,.12,.3,i%2?mats.lit:mats.concrete,false)}
box(world,-31.5,1.2,.2,4.2,.12,1.2,mats.concrete,true);box(world,-33.1,.58,.2,.3,1.25,1.05,mats.dark,true);box(world,-29.9,.58,.2,.3,1.25,1.05,mats.dark,true);
for(const p of [[24,-2.5],[25.2,-2.5],[26.4,-2.5],[34,-2.5],[35.2,-2.5]])box(world,p[0],.8,p[1],1,.38,.8,Math.round(p[0])%2?mats.concrete:mats.rust,true);
box(world,33.3,.58,7.7,2.2,.22,1.1,mats.dark,true);box(world,33.3,.72,7.7,1.8,.1,.75,mats.green,false);box(world,33.3,1.0,8.1,2.1,.5,.08,mats.rust,true);
box(world,26.2,.55,-2.9,1.1,1.1,1.1,mats.dark,true);box(world,24.8,1.0,1.6,1.5,2,1,mats.rust,true);
interiorLamp(-31.5,3.6,'#ffc88f');interiorLamp(-22,3.7,'#ffb87d');interiorLamp(33,2.2,'#a5e3d0');interiorLamp(25,3.6,'#a5d7cf');
const archiveDoorLight=new THREE.PointLight('#ff9e68',7,9,2);archiveDoorLight.position.set(-15.1,3.1,4);scene.add(archiveDoorLight);
const signalDoorLight=new THREE.PointLight('#8fe0d0',7,9,2);signalDoorLight.position.set(17.1,3.1,3);scene.add(signalDoorLight);
// Flickering shop signs outside the solid blocks
neonSign('NOODLE 24H',-17.82,4.1,27,Math.PI/2,'#ff9b76',5.1,1.1);
neonSign('SLEEP PODS',17.46,4.1,28,-Math.PI/2,'#d4ef6a',4.8,1.05);
neonSign('FIX / BODY',-17.84,4.2,-27,Math.PI/2,'#9fd9e2',4.7,1.05);
neonSign('NIGHT MARKET',16.96,4.15,-27,-Math.PI/2,'#f4b4d5',5.4,1.1);
neonSign('OPEN',-15.94,3.05,9.6,Math.PI/2,'#d4ef6a',2.1,.72);
// Street furniture and the small evidence of lives lived outside the system
const trashMetal=new THREE.MeshStandardMaterial({color:'#4d5b55',metalness:.45,roughness:.72});
const bagMat=new THREE.MeshStandardMaterial({color:'#151d1b',roughness:1});
function trashCan(x,z,tipped=false){const g=new THREE.Group();g.position.set(x,tipped?.12:0,z);world.add(g);cylinder(g,0,.56,0,.37,.43,1.05,trashMetal,12);cylinder(g,0,1.12,0,.39,.39,.12,trashMetal,12);cylinder(g,0,1.22,0,.1,.13,.14,trashMetal,8);box(g,0,.72,0,.08,.42,.02,mats.dark,false);if(tipped){g.rotation.z=1.28;g.position.y=.42;sphere(g,.05,.15,0,.32,bagMat);sphere(g,.55,.1,.12,.22,bagMat)}else sphere(g,.65,.2,.1,.3,bagMat)}
[[7,18],[10.5,21],[-12,12],[-9,26],[21,14],[13,14],[44,-10],[7,-44],[35,15],[-6,48],[15.6,6],[42.5,14],[-14,38],[14,52]].forEach((p,i)=>trashCan(p[0],p[1],i%4===0));
function barrelFire(x,z){cylinder(world,x,.45,z,.4,.46,.9,mats.rust,12);const flame=sphere(world,x,1.05,z,.34,mats.orange);flame.scale.set(.34,.55,.34);const l=new THREE.PointLight('#ff8d4f',9,9,2);l.position.set(x,1.25,z);scene.add(l);fires.push({flame,light:l,phase:rand()*6});box(world,x,.9,z,.6,.08,.1,mats.dark,false)}
barrelFire(-13.8,27.2);barrelFire(6.4,44.6);
const npcMat=(c)=>new THREE.MeshStandardMaterial({color:c,roughness:.94});
function makeNpc({id,name,x,z,role,lines,accent='#d4ef6a',pose='stand',cloth='#6f7569'}){
  const g=new THREE.Group();g.position.set(x,0,z);world.add(g);const body=new THREE.Group();g.add(body);
  const c=npcMat(cloth),c2=npcMat('#343d3a'),sk=npcMat('#aa856a'),band=npcMat('#c9c2aa');
  box(body,0,1.08,0,.58,.78,.32,c,true);box(body,0,1.4,0,.6,.18,.36,npcMat('#b0a586'),true);sphere(body,0,1.73,0,.23,sk);box(body,0,1.93,0,.42,.11,.36,c2);
  const l1=box(body,-.15,.45,0,.18,.72,.22,c2,true),l2=box(body,.15,.45,0,.18,.72,.22,c2,true);
  box(body,-.36,1.05,0,.13,.55,.18,c,true);box(body,.36,1.03,.03,.13,.5,.18,c,true);
  if(pose==='slumped'||pose==='lying'){body.rotation.z=pose==='lying'?Math.PI/2.15:.36;body.position.y=pose==='lying'?-.2:-.18;g.position.y=pose==='lying'?.12:0;if(pose==='lying'){l1.rotation.z=.1;l2.rotation.z=-.2}}
  if(pose==='lying'||pose==='slumped'){box(body,0,1.03,.2,.9,.22,.56,npcMat('#7b6250'),true);if(role.includes('INJURED')){box(body,.17,1.75,.16,.28,.12,.1,band,false);box(body,-.31,1.0,.2,.2,.12,.08,band,false)}}
  if(pose==='stand'){box(body,.1,2.15,-.02,.03,.7,.03,mats.dark,false);box(body,.1,2.53,-.02,.5,.09,.09,mats.dark,false)}
  const label=makeLabel(name,accent);label.position.set(0,pose==='lying'?1.25:2.35,0);label.scale.set(2.9,.73,1);label.userData.labelType='npc';g.add(label);
  const obj={id,name,x,z,type:'npc',role,lines:lines.slice(),group:g,active:false};entities.push(obj);return obj;
}
makeNpc({id:'npc-mara',name:'MARA',x:-31.2,z:7.4,role:'ARCHIVE KEEPER',cloth:'#7d6653',accent:'#ffb37e',lines:['The archive used to smell of rain and ticket ink. Now it only remembers the people who never came back.','I kept the pass behind the desk. Take it. The gate still answers to a living hand.','When you get outside, don’t look back until the wall is small. That’s the only rule I have left.']});
makeNpc({id:'npc-pell',name:'PELL',x:33.4,z:6.15,role:'INJURED COURIER',cloth:'#53635f',accent:'#9fe4d4',pose:'slumped',lines:['I ran the eastern line until the scanners started counting us like inventory.','My leg is done. But the relay in the back still hums if you give it the right three tones.','Clue? MID, HUSH, LOW. I wrote it on my glove before the dust took the rest.']});
makeNpc({id:'npc-sable',name:'SABLE',x:-13,z:25.2,role:'DISPLACED',cloth:'#665f50',accent:'#d4ef6a',pose:'slumped',lines:['They said the shelters were temporary. That was eleven winters ago.','The city keeps us alive, but it won’t let us live. There’s a difference. I feel it in my knees.','If you find the archive, look for the pass. My daughter had one. She never made it to the gate.']});
makeNpc({id:'npc-ren',name:'REN',x:15.6,z:-19.8,role:'INJURED',cloth:'#5d5a52',accent:'#ff906c',pose:'slumped',lines:['A patrol drone clipped me at the crossing. I crawled into the gutter and played dead.','Listen. The relays are old emergency channels. Tune them and the wall forgets to be a wall.','Take my bandage if you need it. I’m not using it anymore.']});
makeNpc({id:'npc-noma',name:'NOMA',x:7.4,z:-56.4,role:'NEARLY GONE',cloth:'#4b514b',accent:'#ff906c',pose:'lying',lines:['I can see the green from here. Just a sliver over the wall.','I waited too long. The gate only opens for people with somewhere left to go.','Go. Tell the river I remember it.']});
makeNpc({id:'npc-kesh',name:'KESH',x:6.5,z:42.5,role:'SCAVENGER',cloth:'#6d6a52',accent:'#e7c479',lines:['Trade? I’ve got a bent spoon, two buttons, and a story you probably won’t believe.','The sign over the noodle place flickers at midnight. Some say it’s the old city dreaming.','Keep your eyes on the doorways. That’s where the city hides its people.']});
makeNpc({id:'npc-ori',name:'ORI',x:-44,z:31,role:'MARKET CLERK',cloth:'#5a7160',accent:'#bfe8a2',lines:['The shelves are never full anymore. We write shortages down and call them forecasts.','There is clean water behind the glass. Not much, but enough for one person.','The police still pretend ration stamps mean anything.']});
makeNpc({id:'npc-voss',name:'VOSS',x:-47,z:55,role:'DISGRACED OFFICER',cloth:'#4b5c62',accent:'#9dc8d8',lines:['I wore the badge until it started feeling heavier than the gun.','The files in back are copied by hand. Commands arrive, but no one gives them anymore.','You have the look of someone planning to leave. I envy the plan.']});
makeNpc({id:'npc-iya',name:'IYA',x:47,z:31,role:'POST RUNNER',cloth:'#74684f',accent:'#e3c77d',lines:['Letters are the last objects that move without permission.','That is, unless the sorting room catches them. Then they join the inventory.','If you pass a green postbox, leave a mark. Someone will understand.']});
makeNpc({id:'npc-joan',name:'JOAN',x:55,z:56,role:'RESIDENT',cloth:'#78634f',accent:'#ffc08a',lines:['This room was warm once. I remember because the bed frame stopped creaking.','Don’t take the street after dark. The patrols sleep, but the machines don’t.','You should keep going while the sky is still undecided.']});
makeNpc({id:'npc-tamsin',name:'TAMSIN',x:-8,z:-36,role:'REGULAR CITIZEN',cloth:'#65715f',accent:'#d4ef6a',lines:['Half the block left. The rest of us learned to use fewer words.','The relays are not for machines. They are for us—to prove we can still agree on an answer.','There used to be a café there. Still tastes like bitter coffee when I close my eyes.']});
// Roaming animals: cats, dogs and crows
const animals=[];
function makeAnimal(kind,x,z){
  const g=new THREE.Group();g.position.set(x,0,z);world.add(g);
  const mat=npcMat(kind==='crow'?'#171f20':kind==='dog'?'#706351':'#4f5450');
  if(kind==='crow'){sphere(g,0,.95,0,.28,mat);box(g,0,.62,.12,.12,.32,.12,mat,true);box(g,-.32,.9,.03,.7,.08,.28,mat,true);box(g,.32,.9,.03,.7,.08,.28,mat,true);box(g,0,.72,-.3,.12,.12,.42,mat,true)}
  else if(kind==='dog'){box(g,0,.48,0,.82,.48,.42,mat,true);sphere(g,.5,.63,.05,.28,mat);box(g,.52,.43,.55,.12,.38,.12,mat,true);for(const lx of [-.27,.27])box(g,lx,.18,0,.12,.42,.12,mat,true)}
  else {sphere(g,0,.38,0,.32,mat);box(g,-.1,.72,.02,.12,.2,.12,mat,true);box(g,.1,.72,.02,.12,.2,.12,mat,true);box(g,.2,.35,.25,.08,.32,.08,mat,true);box(g,-.2,.35,.25,.08,.32,.08,mat,true)}
  const a={kind,group:g,x,z,baseX:x,baseZ:z,phase:rand()*6,speed:.18+rand()*.22,turn:rand()>0.5?1:-1};animals.push(a);return a;
}
makeAnimal('cat',-18,18);makeAnimal('cat',42,-18);makeAnimal('cat',-39,58);
makeAnimal('dog',18,19);makeAnimal('dog',-48,-38);
makeAnimal('crow',-12,-20);makeAnimal('crow',44,18);makeAnimal('crow',5,50);
// Memory fragments as optional pieces of the world's lost story
const memories=[[-43,-7],[-13,48],[41,-41]].map((p,i)=>{const g=new THREE.Group();g.position.set(p[0],.85,p[1]);world.add(g);const core=new THREE.Mesh(new THREE.OctahedronGeometry(.42,0),mats.lit);core.castShadow=true;g.add(core);const halo=new THREE.Mesh(new THREE.TorusGeometry(.7,.025,5,30),mats.neon);halo.rotation.x=Math.PI/2;g.add(halo);return {group:g,got:false,index:i}});
// Add planted grass / small shrubs, clustered in courtyards
for(let i=0;i<90;i++){let x=-62+rand()*124,z=-62+rand()*124;if(Math.abs(x)<12||Math.abs(z)<12||z<-68)continue;if(Math.abs(x)>62||Math.abs(z)>62)continue;if(Math.abs(x+27)<12&&Math.abs(z-4)<9)continue;if(Math.abs(x-29)<12&&Math.abs(z-3)<9)continue;const shrub=new THREE.Group();shrub.position.set(x,0,z);world.add(shrub);cylinder(shrub,0,.3,0,.12,.18,.6,mats.rust,6);sphere(shrub,.05,.83,0,.65,rand()>.5?mats.green:mats.leaf)}
// Objectives
const objectives=[
 {title:'Find the Archive',desc:'The old transit archive has a lit doorway on its east side. Step inside and find the terminal.',text:'Enter the east door',target:archive},
 {title:'Recover the Pass',desc:'A transit pass is the only thing the perimeter scanners still recognize. The keeper may know where it is.',text:'Take the pass',target:archive},
 {title:'Wake the Signal',desc:'Relay 01 stands in the open signal yard between the towers. Bring it back online.',text:'Activate Relay 01',target:relay1},
 {title:'Follow the Current',desc:'The signal moves through the eastern blocks. Relay 02 waits inside the Signal House, through its west door.',text:'Activate Relay 02',target:relay2},
 {title:'Complete the Circuit',desc:'One relay remains in the western spur. The perimeter gate is beginning to respond.',text:'Activate Relay 03',target:relay3},
 {title:'Find the Way Out',desc:'The gate has opened. Walk beyond the city wall and see what waits.',text:'Reach the gate',target:exit},
 {title:'The world is yours',desc:'You made it outside. There is no map for what comes next.',text:'Keep walking',target:null}
];
let objectiveIndex=0,pass=false,solved=new Set(),fragments=0,nearby=null,puzzleEntity=null,tones=[-1,-1,-1],isStarted=false,gameEnded=false,dialogueOpen=false,dialogueNpc=null,dialogueIndex=0;
const $=s=>document.querySelector(s);
function setObjective(i){objectiveIndex=Math.min(i,objectives.length-1);const o=objectives[objectiveIndex];$('#mission-title').textContent=o.title;$('#mission-desc').textContent=o.desc;$('#objective-text').textContent=o.text;$('#step-count').textContent=`${String(Math.min(i+1,6)).padStart(2,'0')} / 06`;$('#mission-progress').style.width=`${Math.min(100,(i/6)*100)}%`;}
setObjective(0);
const missionCard=$('#mission-card');function setMissionCollapsed(collapsed){missionCard.classList.toggle('collapsed',collapsed);$('#mission-toggle').textContent=collapsed?'＋':'−';$('#mission-toggle').setAttribute('aria-expanded',String(!collapsed));$('#mission-toggle').setAttribute('aria-label',collapsed?'Expand mission directive':'Minimize mission directive');$('#mission-toggle').title=collapsed?'Expand directive (M)':'Minimize directive (M)'}
$('#mission-toggle').onclick=()=>setMissionCollapsed(!missionCard.classList.contains('collapsed'));
function showToast(text){$('#toast-text').textContent=text;$('#toast').classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>$('#toast').classList.remove('show'),2800)}
let subtitleTimer;function say(text){const e=$('#subtitle');e.textContent=text;e.classList.add('show');clearTimeout(subtitleTimer);subtitleTimer=setTimeout(()=>e.classList.remove('show'),4400)}
function renderDialogue(){if(!dialogueNpc)return;$('#dialogue-role').textContent=dialogueNpc.role;$('#dialogue-name').textContent=dialogueNpc.name;$('#dialogue-text').textContent=dialogueNpc.lines[dialogueIndex];$('#dialogue-progress').textContent=`${String(dialogueIndex+1).padStart(2,'0')} / ${String(dialogueNpc.lines.length).padStart(2,'0')}`;$('#dialogue-next span').textContent=dialogueIndex===dialogueNpc.lines.length-1?'LEAVE':'KEEP LISTENING'}
function setNpcLabelVisible(npc,visible){if(!npc)return;for(const c of npc.group.children)if(c.isSprite)c.visible=visible}
function openDialogue(npc){dialogueOpen=true;dialogueNpc=npc;dialogueIndex=0;setNpcLabelVisible(npc,false);$('#interact-hint').classList.remove('visible');$('#dialogue-screen').classList.remove('hidden');document.exitPointerLock?.();renderDialogue()}
function closeDialogue(){setNpcLabelVisible(dialogueNpc,true);dialogueOpen=false;dialogueNpc=null;dialogueIndex=0;$('#dialogue-screen').classList.add('hidden')}
function advanceDialogue(){if(!dialogueOpen)return;if(dialogueIndex<dialogueNpc.lines.length-1){dialogueIndex++;renderDialogue()}else closeDialogue()}
$('#dialogue-next').onclick=advanceDialogue;$('#dialogue-close').onclick=closeDialogue;
function setLocation(){let name='THE LOW QUARTER';const x=player.position.x,z=player.position.z;if(Math.hypot(x+27,z-4)<18)name='TRANSIT ARCHIVE';else if(Math.hypot(x+2,z+29)<18)name='SIGNAL YARD';else if(Math.hypot(x-29,z-3)<18)name='EAST BLOCK';else if(Math.hypot(x-3,z-37)<18)name='WESTERN SPUR';else if(z<-57)name='PERIMETER';else if(z>48)name='SOUTH MARKET';$('#location-name').textContent=name}
function updateObjectiveDistance(){const o=objectives[objectiveIndex],target=o.target;if(!target){$('#objective-distance').textContent='SAFE';$('#mission-arrow').style.transform='rotate(0deg)';return}const dx=target.x-player.position.x,dz=target.z-player.position.z,d=Math.hypot(dx,dz);$('#objective-distance').textContent=d<10?'NEAR':`${Math.round(d)} M`;const ahead=dx*(-Math.sin(yaw))+dz*(-Math.cos(yaw));const right=dx*Math.cos(yaw)+dz*(-Math.sin(yaw));$('#mission-arrow').style.transform=`rotate(${Math.atan2(right,ahead)*180/Math.PI}deg)`;}
function openPuzzle(ent){puzzleEntity=ent;document.exitPointerLock?.();tones=[-1,-1,-1];$('#tone-row').innerHTML='';$('#puzzle-title').textContent=ent.type==='archive'?'ARCHIVE TERMINAL':'TUNE THE RELAY';$('#puzzle-clue').textContent=ent.type==='archive'?'The terminal blinks awake. A scratched note is taped to the screen: “Pass phrase: MID → LOW → HUSH.”':'The display flickers. '+ent.clue;$('#puzzle-feedback').textContent='Choose a tone for each of the three slots.';for(let i=0;i<3;i++){const b=document.createElement('button');b.className='tone-button';b.dataset.slot=i;b.innerHTML=`<b>＋</b><span>SLOT 0${i+1}</span>`;b.onclick=()=>cycleTone(i);$('#tone-row').append(b)}$('#puzzle-screen').classList.remove('hidden')}
const toneNames=['LOW','MID','HIGH','HUSH'];const toneIcons=['⌄','◇','△','≋'];function cycleTone(i){tones[i]=(tones[i]+1)%4;const b=$(`#tone-row [data-slot="${i}"]`);b.classList.add('selected');b.innerHTML=`<b>${toneIcons[tones[i]]}</b><span>${toneNames[tones[i]]}</span>`}
function closePuzzle(){$('#puzzle-screen').classList.add('hidden');puzzleEntity=null}
function submitPuzzle(){if(tones.includes(-1)){$('#puzzle-feedback').textContent='Every slot needs a tone.';return}const target=puzzleEntity.type==='archive'?[1,0,3]:puzzleEntity.code;if(tones.some((t,i)=>t!==target[i])){$('#puzzle-feedback').textContent='No match. Listen to the clue and try again.';return}const ent=puzzleEntity;closePuzzle();if(ent.type==='archive'){pass=true;ent.active=true;setObjective(2);showToast('TRANSIT PASS RECOVERED');say('The city has been calling this place unsafe for so long. What if it was only afraid of being left?')}else{solved.add(ent.id);ent.active=true;for(const m of ent.group.children)if(m.userData.orb)m.material=mats.lit;if(ent===relay1)setObjective(3);if(ent===relay2)setObjective(4);if(ent===relay3)setObjective(5);showToast(`${ent.name} // ONLINE`);say(ent===relay3?'A sequence of green lights runs toward the north wall. The gate is opening.':'The signal answers. Somewhere far away, something old wakes up.')}updateObjectiveDistance()}
$('#puzzle-submit').onclick=submitPuzzle;$('#puzzle-close').onclick=closePuzzle;
function completeObjective(){if(objectiveIndex===0){setObjective(1);showToast('ARCHIVE TERMINAL DETECTED')}else if(objectiveIndex===5){gameEnded=true;$('#ending-screen').classList.remove('hidden')} }
function interact(){if(!nearby)return;const ent=nearby;if(ent.type==='npc'){openDialogue(ent);return}if(ent.type==='archive'){if(!pass)openPuzzle(ent);else{showToast('TRANSIT PASS: CHECKED');say('The archive gives way to the route outside. Keep following the signal.')}return}if(ent.type==='relay'){if(!pass){showToast('ACCESS DENIED // FIND THE TRANSIT PASS');return}if(solved.has(ent.id)){showToast(`${ent.name} // SIGNAL STABLE`);return}openPuzzle(ent);return}if(ent.type==='gate'){if(solved.size<3){showToast('GATE LOCKED // SIGNAL NETWORK INCOMPLETE');say('The terminal stays dark. Bring all three relays online first.');return}if(!pass){showToast('ACCESS DENIED // PASS REQUIRED');return}gateLeft.position.x=-8.5;gateRight.position.x=8.5;showToast('PERIMETER ACCESS GRANTED');say('The gate is moving. Beyond it, the air looks different.');setObjective(6);gameEnded=true;$('#ending-screen').classList.remove('hidden')}}
// Input / camera controls
const keys={};let yaw=0,pitch=.24,run=false;let pointerLocked=false;document.addEventListener('keydown',e=>{keys[e.code]=true;if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();if(e.code==='KeyM'&&!e.repeat&&isStarted)setMissionCollapsed(!missionCard.classList.contains('collapsed'));if(e.code==='KeyE'&&!e.repeat){if(dialogueOpen)advanceDialogue();else if(isStarted&&$('#puzzle-screen').classList.contains('hidden'))interact()}if(e.code==='Escape'){if(dialogueOpen)closeDialogue();else if(!$('#puzzle-screen').classList.contains('hidden'))closePuzzle();else if(isStarted)document.exitPointerLock?.()}});document.addEventListener('keyup',e=>keys[e.code]=false);
canvas.addEventListener('click',()=>{if(isStarted&&!isMobile())canvas.requestPointerLock?.()});document.addEventListener('pointerlockchange',()=>pointerLocked=document.pointerLockElement===canvas);document.addEventListener('mousemove',e=>{if(pointerLocked){yaw-=e.movementX*.0024;pitch=THREE.MathUtils.clamp(pitch+e.movementY*.0017,-.02,.58)} });
function isMobile(){return matchMedia('(max-width: 700px)').matches||('ontouchstart'in window)}if(isMobile())document.body.classList.add('mobile');
let touchLook=null;$('#look-zone').addEventListener('touchstart',e=>{const t=e.changedTouches[0];touchLook={x:t.clientX,y:t.clientY};e.preventDefault()},{passive:false});$('#look-zone').addEventListener('touchmove',e=>{if(!touchLook)return;const t=e.changedTouches[0];yaw-=(t.clientX-touchLook.x)*.007;pitch=THREE.MathUtils.clamp(pitch+(t.clientY-touchLook.y)*.003,-.02,.58);touchLook={x:t.clientX,y:t.clientY};e.preventDefault()},{passive:false});$('#look-zone').addEventListener('touchend',()=>touchLook=null);
const touchKeys={};document.querySelectorAll('[data-move]').forEach(b=>{const key={forward:'KeyW',back:'KeyS',left:'KeyA',right:'KeyD'}[b.dataset.move];const down=e=>{e.preventDefault();touchKeys[key]=true},up=e=>{e.preventDefault();touchKeys[key]=false};b.addEventListener('pointerdown',down);b.addEventListener('pointerup',up);b.addEventListener('pointerleave',up);b.addEventListener('pointercancel',up)});$('#run-touch').addEventListener('pointerdown',e=>{e.preventDefault();touchKeys.ShiftLeft=true});['pointerup','pointerleave','pointercancel'].forEach(ev=>$('#run-touch').addEventListener(ev,()=>touchKeys.ShiftLeft=false));$('#interact-touch').addEventListener('pointerdown',e=>{e.preventDefault();if(dialogueOpen)advanceDialogue();else interact()});
$('#help-button').onclick=()=>{$('#help-screen').classList.remove('hidden');document.exitPointerLock?.()};$('#help-close').onclick=()=>$('#help-screen').classList.add('hidden');$('#resume-button').onclick=()=>$('#help-screen').classList.add('hidden');$('#start-button').onclick=()=>{isStarted=true;$('#start-screen').classList.add('hidden');if(!isMobile())canvas.requestPointerLock?.();say('You wake to a city holding its breath. Find the Archive.');};$('#restart-button').onclick=()=>location.reload();
// Minimap / discovery
const map=$('#minimap'),mctx=map.getContext('2d');function drawMap(){const w=map.width,h=map.height;mctx.clearRect(0,0,w,h);mctx.fillStyle='rgba(13,28,30,.96)';mctx.fillRect(0,0,w,h);mctx.strokeStyle='rgba(193,215,196,.12)';mctx.lineWidth=1;for(let i=10;i<w;i+=20){mctx.beginPath();mctx.moveTo(i,0);mctx.lineTo(i,h);mctx.stroke();mctx.beginPath();mctx.moveTo(0,i);mctx.lineTo(w,i);mctx.stroke()}mctx.strokeStyle='#6d7770';mctx.lineWidth=4;mctx.strokeRect(8,8,w-16,h-16);mctx.fillStyle='#283638';mctx.fillRect(w/2-8,8,16,h-16);mctx.fillRect(8,h/2-7,w-16,14);const mapPos=(x,z)=>[w/2+x*1.02,h/2+z*1.02];for(const e of entities){if(e.type==='npc')continue;const [x,y]=mapPos(e.x,e.z);mctx.fillStyle=e.type==='gate'?'#ff906c':e.active?'#d4ef6a':'#80928b';mctx.beginPath();mctx.arc(x,y,e===objectives[objectiveIndex]?.target?5:3,0,Math.PI*2);mctx.fill()}for(const mem of memories)if(!mem.got){const [x,y]=mapPos(mem.group.position.x,mem.group.position.z);mctx.fillStyle='#e7c479';mctx.fillRect(x-2,y-2,4,4)}const [px,py]=mapPos(player.position.x,player.position.z);mctx.save();mctx.translate(px,py);mctx.rotate(-yaw);mctx.fillStyle='#eff4dd';mctx.beginPath();mctx.moveTo(0,-7);mctx.lineTo(5,5);mctx.lineTo(0,3);mctx.lineTo(-5,5);mctx.fill();mctx.restore();mctx.fillStyle='#d2e8c8';mctx.font='8px monospace';mctx.fillText('N',w/2-3,8)}
function checkInteraction(){nearby=null;let best=999;for(const e of entities){const d=Math.hypot(player.position.x-e.x,player.position.z-e.z);if(d<4.2&&d<best){best=d;nearby=e}}if(nearby===archive&&objectiveIndex===0){setObjective(1);showToast('ARCHIVE TERMINAL DETECTED')}$('#interact-hint').classList.toggle('visible',!!nearby&&!dialogueOpen);if(nearby){const text=nearby.type==='npc'?`TALK TO ${nearby.name}`:nearby.type==='archive'?(pass?'CHECK ARCHIVE':'ACCESS TERMINAL'):nearby.type==='gate'?'OPEN GATE':solved.has(nearby.id)?'CHECK RELAY':'TUNE RELAY';$('#interact-hint span:last-child').textContent=text}}
function collectMemories(){for(const m of memories){if(m.got)continue;if(player.position.distanceTo(m.group.position)<1.9){m.got=true;world.remove(m.group);fragments++;$('#fragment-count').textContent=`${fragments} / 3`;showToast(`MEMORY FRAGMENT ${fragments} / 3`);say(['“The river ran all the way to the sea.”','“I remember rain. Real rain.”','“There were birds over the rooftops.”'][m.index])}}}
// movement collision boundaries
const PLAYER_RADIUS=.42;function collidesAt(x,z,r=PLAYER_RADIUS){for(const c of colliders)if(x+r>c.x1&&x-r<c.x2&&z+r>c.z1&&z-r<c.z2)return true;return false}
function movePlayer(dt){const forward=(keys.KeyW||keys.ArrowUp||touchKeys.KeyW?1:0)-(keys.KeyS||keys.ArrowDown||touchKeys.KeyS?1:0);const strafe=(keys.KeyD||keys.ArrowRight||touchKeys.KeyD?1:0)-(keys.KeyA||keys.ArrowLeft||touchKeys.KeyA?1:0);run=!!(keys.ShiftLeft||keys.ShiftRight||touchKeys.ShiftLeft);let dx=0,dz=0;if(forward||strafe){const len=Math.hypot(forward,strafe);const f=forward/len,s=strafe/len;dx=(-Math.sin(yaw)*f+Math.cos(yaw)*s);dz=(-Math.cos(yaw)*f-Math.sin(yaw)*s);const speed=run?8.2:4.7;const step=speed*dt;const nx=THREE.MathUtils.clamp(player.position.x+dx*step,-64,64),nz=THREE.MathUtils.clamp(player.position.z+dz*step,-68,64);if(!collidesAt(nx,player.position.z))player.position.x=nx;if(!collidesAt(player.position.x,nz))player.position.z=nz;avatar.rotation.y=Math.atan2(dx,dz);const swing=Math.sin(performance.now()*.012*(run?1.5:1));legL.rotation.x=swing*.42;legR.rotation.x=-swing*.42;avatar.position.y=Math.abs(swing)*.035}else{legL.rotation.x*=.8;legR.rotation.x*=.8;avatar.position.y=0}}
function updateCamera(dt){const distance=7.8;const target=new THREE.Vector3(player.position.x,player.position.y+1.45,player.position.z);const horizontal=distance*Math.cos(pitch);const desired=new THREE.Vector3(target.x+Math.sin(yaw)*horizontal,target.y+2.2+Math.sin(pitch)*distance,target.z+Math.cos(yaw)*horizontal);let safe=1;for(let i=1;i<=18;i++){const f=i/18,cx=target.x+(desired.x-target.x)*f,cz=target.z+(desired.z-target.z)*f;if(collidesAt(cx,cz,.24)){safe=Math.max(.14,(i-1)/18);break}}const clipped=target.clone().lerp(desired,safe);camera.position.lerp(clipped,1-Math.exp(-dt*5));camera.lookAt(target.x,target.y+1,target.z);}
function updateWorld(dt,t){for(const e of entities){if(e.type==='relay'&&!e.active){for(const child of e.group.children)if(child.userData.orb){child.position.y=2+Math.sin(t*2+child.position.x*5)*.11}}}
for(const a of animals){const w=a.phase+t*a.speed;const radius=a.kind==='crow'?3.8:2.6;a.group.position.x=a.baseX+Math.sin(w)*radius*a.turn;a.group.position.z=a.baseZ+Math.cos(w*.78)*radius*.55;a.group.rotation.y=-w*a.turn+a.turn*.2;if(a.kind==='crow'){a.group.position.y=.12+Math.abs(Math.sin(w*2))*(.3);for(const child of a.group.children)child.rotation.z=Math.sin(w*3)*.08}}
for(const m of memories){m.group.rotation.y+=dt*.7;m.group.position.y=.85+Math.sin(t*2+m.index)*.12}for(const tree of paradise.children)if(tree.geometry?.type==='SphereGeometry')tree.rotation.z=Math.sin(t*.3+tree.position.x)*.006;for(const s of neonSigns){const flick=.82+Math.sin(t*2.1+s.phase)*.07+Math.sin(t*11.7+s.phase*2)*.035;s.mesh.material.opacity=THREE.MathUtils.clamp(flick,.56,1)}for(const f of fires){const p=.9+Math.sin(t*12+f.phase)*.11+Math.sin(t*23+f.phase*2)*.06;f.light.intensity=9*p;f.flame.scale.y=.52+Math.sin(t*15+f.phase)*.08}for(const label of labels){if(!label.visible)continue;label.getWorldPosition(labelPos);const d=camera.position.distanceTo(labelPos),w=label.userData.labelType==='npc'?THREE.MathUtils.clamp(d*.095,.35,2.4):THREE.MathUtils.clamp(d*.17,.6,4.4);label.scale.set(w,w*.25,1)}}
let elapsed=0;function frame(){requestAnimationFrame(frame);const dt=Math.min(clock.getDelta(),.04);elapsed+=dt;if(isStarted&&(!$('#puzzle-screen').classList.contains('hidden')||dialogueOpen)){}else if(isStarted){movePlayer(dt);checkInteraction();collectMemories();setLocation();updateObjectiveDistance()}updateCamera(dt);updateWorld(dt,elapsed);drawMap();$('#clock').textContent=`${String(6+Math.floor(elapsed/60)).padStart(2,'0')}:${String(Math.floor(elapsed%60)).padStart(2,'0')}`;const heading=((Math.round(((yaw*180/Math.PI)%360)+360)%360)+360)%360;$('#compass b').textContent=`${String(heading).padStart(3,'0')}°`;renderer.render(scene,camera)}
function resize(){camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8));if(isMobile())document.body.classList.add('mobile')};window.addEventListener('resize',resize);
// Initial map and cinematic framing
camera.position.set(0,5,24);camera.lookAt(0,1,15);drawMap();frame();
