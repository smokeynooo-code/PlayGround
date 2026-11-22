import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.166.1/build/three.module.js';

const canvas=document.querySelector('#game');
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8));
renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.06;

const scene=new THREE.Scene();
scene.background=new THREE.Color('#9aa79f');
scene.fog=new THREE.FogExp2('#9baaa1',.0172);
const camera=new THREE.PerspectiveCamera(67,innerWidth/innerHeight,.1,420);
const clock=new THREE.Clock();

const hemi=new THREE.HemisphereLight('#dfe8da','#26312f',1.72);scene.add(hemi);
const sun=new THREE.DirectionalLight('#ffd7a6',2.35);sun.position.set(-48,65,28);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-90;sun.shadow.camera.right=90;sun.shadow.camera.top=90;sun.shadow.camera.bottom=-90;sun.shadow.bias=-.00015;scene.add(sun);
const fill=new THREE.DirectionalLight('#a9c8c0',.55);fill.position.set(45,28,-50);scene.add(fill);

// Cel-shading ramp shared by the world, characters and animals.
const toonRamp=(()=>{const data=new Uint8Array([58,108,174,226,255]);const t=new THREE.DataTexture(data,data.length,1,THREE.RedFormat);t.minFilter=THREE.NearestFilter;t.magFilter=THREE.NearestFilter;t.needsUpdate=true;return t})();
function toon(color,extra={}){return new THREE.MeshToonMaterial({color,gradientMap:toonRamp,...extra})}

const mats={
  ground:toon('#454f4b'),
  asphalt:toon('#2d3a3b'),
  concrete:toon('#66716b'),
  dark:toon('#162124'),
  rust:toon('#815b49'),
  glass:toon('#526d69',{emissive:'#1e3431',emissiveIntensity:.35}),
  lit:toon('#e4bc77',{emissive:'#c48f45',emissiveIntensity:1.7}),
  neon:toon('#d4ef6a',{emissive:'#a7cb43',emissiveIntensity:1.6}),
  orange:toon('#ff906c',{emissive:'#da553a',emissiveIntensity:1.5}),
  green:toon('#526e4a'),
  leaf:toon('#718b59'),
  water:toon('#6d988b'),
  gold:toon('#d9bd78',{emissive:'#8b6c2e',emissiveIntensity:.28}),
  ivory:toon('#b9bbae'),
  tarp:toon('#5b6657')
};

const world=new THREE.Group();scene.add(world);
const boxGeo=new THREE.BoxGeometry(1,1,1),sphereGeo=new THREE.SphereGeometry(1,12,8),cylGeo=new THREE.CylinderGeometry(1,1,1,10),coneGeo=new THREE.ConeGeometry(1,1,12);
function box(parent,x,y,z,sx,sy,sz,mat,cast=true){const m=new THREE.Mesh(boxGeo,mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=cast;m.receiveShadow=true;parent.add(m);return m}
function sphere(parent,x,y,z,r,mat){const m=new THREE.Mesh(sphereGeo,mat);m.position.set(x,y,z);m.scale.set(r,r,r);m.castShadow=true;parent.add(m);return m}
function cylinder(parent,x,y,z,r1,r2,h,mat,segments=10){const m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,segments),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m}
function cone(parent,x,y,z,r,h,mat,rotX=0,rotZ=0){const m=new THREE.Mesh(coneGeo,mat);m.position.set(x,y,z);m.scale.set(r,h,r);m.rotation.x=rotX;m.rotation.z=rotZ;m.castShadow=true;parent.add(m);return m}
function plane(parent,x,y,z,w,h,mat,rotX=0,rotY=0){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),mat);m.position.set(x,y,z);m.rotation.x=rotX;m.rotation.y=rotY;m.receiveShadow=true;parent.add(m);return m}

// Ground, roads and district-coloured curbs.
const ground=box(world,0,-.55,0,190,1,190,mats.ground,false);ground.receiveShadow=true;
box(world,0,-.03,0,13,.08,178,mats.asphalt,false);
box(world,0,-.025,0,176,.08,11,mats.asphalt,false);
for(let z=-80;z<=80;z+=7)box(world,.13,.025,z,.12,.025,3,mats.concrete,false);
for(let x=-80;x<=80;x+=7)box(world,x,.025,-.13,3,.025,.12,mats.concrete,false);
for(let z=-86;z<87;z+=9){for(const x of [-9.1,9.1])box(world,x,.02,z,2.1,.22,6.8,mats.concrete,false)}
// Crosswalks and drains.
for(let i=-5;i<=5;i++){box(world,i*1.08,.038,-9.6,.62,.025,2.7,new THREE.MeshStandardMaterial({color:'#b1b2a1',roughness:1}),false);box(world,i*1.08,.038,9.6,.62,.025,2.7,new THREE.MeshStandardMaterial({color:'#b1b2a1',roughness:1}),false)}
for(let z=-80;z<85;z+=21){box(world,6.12,.02,z,.28,.04,7,mats.dark,false);box(world,-6.12,.02,z,.28,.04,7,mats.dark,false)}
const districtCurbs=[
  {z1:10,z2:66,color:'#8a6049',glow:'#4b2a20'},
  {z1:-22,z2:8,color:'#a39c83',glow:'#4a4436'},
  {z1:-66,z2:-24,color:'#c3c5b7',glow:'#5b5c50'}
];
for(const d of districtCurbs){
  const len=d.z2-d.z1,mid=(d.z1+d.z2)/2;
  const m=toon(d.color,{emissive:d.glow,emissiveIntensity:.18});
  box(world,-9.55,.075,mid,.4,.06,len,m,false);
  box(world,9.55,.075,mid,.4,.06,len,m,false);
}
// Thin, drifting ground fog to thicken the distance.
let seed=917;function rand(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}
const fogTex=(()=>{const c=document.createElement('canvas');c.width=128;c.height=64;const x=c.getContext('2d');const g=x.createRadialGradient(64,32,4,64,32,60);g.addColorStop(0,'rgba(226,235,226,.5)');g.addColorStop(1,'rgba(226,235,226,0)');x.fillStyle=g;x.fillRect(0,0,128,64);return new THREE.CanvasTexture(c)})();
const fogWisps=[];
for(let i=0;i<8;i++){
  const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:fogTex,transparent:true,opacity:.075,depthWrite:false}));
  sp.position.set(-70+rand()*140,1.1+rand()*2.4,-60+rand()*120);
  sp.scale.set(30+rand()*20,9+rand()*5,1);
  scene.add(sp);fogWisps.push({sp,phase:rand()*9,speed:.25+rand()*.3});
}
// Deterministic random.

// Solid collision volumes. Buildings and cars cannot be walked through.
const colliders=[];
function addCollider(x,z,w,d){colliders.push({x1:x-w/2,x2:x+w/2,z1:z-d/2,z2:z+d/2})}
function zoneOf(z){return z>10?0:z>-22?1:2}
const palettes=[
  ['#463f38','#51483d','#3e4a44','#53463f','#37403e'],
  ['#686a5c','#737868','#5c6864','#7c7565','#646d65'],
  ['#93998e','#a8aa9c','#808e88','#9b9a89','#87928c']
];
const trims=[mats.rust,mats.concrete,mats.gold];
const brightWindowMatrices=[],darkWindowMatrices=[];
const windowMat=new THREE.MeshStandardMaterial({color:'#8f9c8d',emissive:'#4d6b58',emissiveIntensity:.85,roughness:.5});
const goldWindowMat=new THREE.MeshStandardMaterial({color:'#d8c28a',emissive:'#a47f35',emissiveIntensity:.95,roughness:.4});
const darkWindow=new THREE.MeshStandardMaterial({color:'#172729',roughness:.5});
function addWindow(g,x,y,z,sx,sy,sz,mat){const matrix=new THREE.Matrix4().compose(new THREE.Vector3(g.position.x+x,y,g.position.z+z),new THREE.Quaternion(),new THREE.Vector3(sx,sy,sz));(mat===darkWindow?darkWindowMatrices:brightWindowMatrices).push(matrix)}

function makeBuilding(x,z,w,d,h,kind=0,collide=true){
  const g=new THREE.Group();g.position.set(x,0,z);world.add(g);
  if(collide)addCollider(x,z,w,d);
  const zone=zoneOf(z);const palette=palettes[zone];
  const mat=toon(palette[Math.floor(rand()*palette.length)]);
  const trim=trims[zone];
  box(g,0,h/2,0,w,h,d,mat,true);
  // Rounded-looking stepped crown instead of a single hard box.
  box(g,0,h+.18,0,w+.3,.36,d+.3,trim,true);
  box(g,0,h+.72,0,w*.62,.85,d*.62,mat,true);
  if(zone===2)box(g,0,h+1.22,0,w*.3,.28,d*.3,mats.gold,true);
  // Ground-floor band and facade fins soften the silhouette.
  box(g,0,2.35,0,w+.14,.24,d+.14,zone===0?mats.tarp:trim,true);
  for(let fin=-1;fin<=1;fin+=2)box(g,fin*w*.46,h*.6,0,.22,h*.82,d+.2,trim,true);
  for(let yy=3.1;yy<h-1.2;yy+=3.6){
    for(let xx=-w/2+1.4;xx<w/2-1;xx+=2.35){
      if(rand()>.18){const wm=rand()>.4?(zone===2?goldWindowMat:windowMat):darkWindow;addWindow(g,xx,yy,d/2+.03,1.05,1.18,.08,wm);addWindow(g,xx,yy,-d/2-.03,1.05,1.18,.08,wm)}
    }
    for(let zz=-d/2+1.3;zz<d/2;zz+=2.65){
      if(rand()>.28){const wm=rand()>.5?(zone===2?goldWindowMat:windowMat):darkWindow;addWindow(g,w/2+.03,yy,zz,.07,1.08,1.02,wm);addWindow(g,-w/2-.03,yy,zz,.07,1.08,1.02,wm)}
    }
  }
  if(zone===0){
    // Patchwork awnings and tarps.
    if(rand()>.45)box(g,w*.18,3.1,d/2+.55,w*.5,.1,1.2,mats.tarp,true);
    if(rand()>.6)box(g,-w*.2,h+1.05,-d*.12,1,.9,1,mats.rust,true);
  }else if(zone===1){
    // Middle-tier balconies.
    if(kind%2===0)box(g,0,4.1,d/2+.4,w*.62,.14,.9,mats.concrete,true);
    if(kind%3===0)box(g,0,h+.9,0,.5,1.2,.5,mats.dark,true);
  }else{
    // Spire antennae and pale roof decks.
    if(kind%2===0)cylinder(g,w*.24,h+2,d*.1,.07,.11,4,mats.gold,6);
    box(g,0,h+.3,0,w*.78,.16,d*.42,mats.ivory,true);
  }
  return g;
}
// Four blocks are replaced by enterable civic buildings; one becomes the Spire.
const buildingSpecs=[
  [-28,-28,20,20,24],[-49,-24,20,24,37],[-28,-53,20,20,31],[-49,-55,19,17,28],
  [28,-27,22,18,33],[51,-26,20,23,42],[51,-53,19,18,34],
  [-29,30,22,13,29],[-29,51,19,20,34],[28,28,21,19,31],[28,52,18,20,27]
];
buildingSpecs.forEach((s,i)=>makeBuilding(...s,i));
for(let i=0;i<26;i++){let x=-92+rand()*184,z=-100-rand()*31,w=7+rand()*14,h=24+rand()*55,d=7+rand()*13;makeBuilding(x,z,w,d,h,i+7,false)}
function addWindowInstances(matrices,material){if(!matrices.length)return;const mesh=new THREE.InstancedMesh(boxGeo,material,matrices.length);for(let i=0;i<matrices.length;i++)mesh.setMatrixAt(i,matrices[i]);mesh.instanceMatrix.needsUpdate=true;mesh.castShadow=false;mesh.receiveShadow=false;mesh.computeBoundingSphere();world.add(mesh)}
addWindowInstances(brightWindowMatrices,windowMat);addWindowInstances(darkWindowMatrices,darkWindow);

// Perimeter wall, checkpoint gate, and the green beyond.
const wallmat=new THREE.MeshStandardMaterial({color:'#747b71',roughness:1});
for(const x of [-88,-68,-48,-28,28,48,68,88]){box(world,x,5,-72,19,10,2.4,wallmat);addCollider(x,-72,19,2.4)}
for(const x of [-12.1,12.1]){box(world,x,5,-72,13,10,2.4,wallmat);addCollider(x,-72,13,2.4)}
for(const x of [-88,-68,-48,-28,28,48,68,88]){box(world,x,10.2,-72,20,.5,3.2,mats.dark);for(let z=-78;z<=-66;z+=4)box(world,x,10.6,z,.16,1.3,.16,mats.orange,false)}
box(world,0,8.3,-72,10,16,2.8,mats.dark);box(world,-5.7,8,-72,1,16,3.2,mats.concrete);box(world,5.7,8,-72,1,16,3.2,mats.concrete);box(world,0,15,-72,12,2,3.2,mats.concrete);
addCollider(-5.7,-72,1,3.2);addCollider(5.7,-72,1,3.2);
const gateLeft=box(world,-2.4,5.5,-72,4.7,11,.5,mats.rust);const gateRight=box(world,2.4,5.5,-72,4.7,11,.5,mats.rust);
const gateBlocker={x1:-5.7,x2:5.7,z1:-73.4,z2:-70.6,open:false};colliders.push(gateBlocker);
box(world,0,13,-70,5.4,.15,.13,mats.neon,false);
const paradise=new THREE.Group();scene.add(paradise);
const greenGround=new THREE.Mesh(new THREE.PlaneGeometry(190,95,1,1),toon('#5d7651'));greenGround.rotation.x=-Math.PI/2;greenGround.position.set(0,-.42,-120);greenGround.receiveShadow=true;paradise.add(greenGround);
const river=new THREE.Mesh(new THREE.PlaneGeometry(125,12),mats.water);river.rotation.x=-Math.PI/2;river.rotation.z=-.16;river.position.set(0,-.28,-117);paradise.add(river);
for(let i=0;i<36;i++){let x=-92+rand()*184,z=-91-rand()*54;let h=12+rand()*22;cylinder(paradise,x,h*.35,z,.35,.55,h*.7,new THREE.MeshStandardMaterial({color:'#685544'}),7);sphere(paradise,x,h*.84,z,3+rand()*3,mats.leaf);sphere(paradise,x-1,h*.7,z+1,2.4,mats.green)}
for(let i=0;i<9;i++){let hill=sphere(paradise,-110+i*28,-3,-146-rand()*10,20+rand()*15,toon(i%2?'#627d57':'#7f926b'));hill.scale.set(1,.48,.8)}

// Street lamps, trash, rubble and neon.
function lamp(x,z,color='#ffd09a'){
  cylinder(world,x,3,z,.11,.15,6,mats.dark,8);
  const g=new THREE.Group();g.position.set(x,6.05,z);world.add(g);
  sphere(g,0,0,0,.19,new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:1.6}));
  const halo=new THREE.Sprite(new THREE.SpriteMaterial({map:fogTex,transparent:true,opacity:.22,color,depthWrite:false}));halo.scale.set(2.6,2.6,1);g.add(halo);
}
for(let z=-65;z<=65;z+=22){const c=zoneOf(z)===0?'#ffb984':zoneOf(z)===1?'#ffe0b0':'#eaf3d6';lamp(-9.9,z,c);lamp(9.9,z,c)}
function rubble(x,z,s=1){box(world,x,.35,z,1.4*s,.7*s,1.1*s,mats.rust);box(world,x+.75*s,.25,z+.4*s,.7*s,.5*s,.65*s,mats.concrete)}
for(const p of [[-13,-15],[13,-16],[-16,22],[16,23],[-57,5],[57,8],[-44,39],[39,-39],[12,52],[-11,-43]])rubble(...p,.8+rand()*.6);
const trashMetal=new THREE.MeshStandardMaterial({color:'#4d5b55',metalness:.45,roughness:.72});
const bagMat=new THREE.MeshStandardMaterial({color:'#151d1b',roughness:1});
const trashSpots=[];
function trashCan(x,z,tipped=false){const g=new THREE.Group();g.position.set(x,tipped?.12:0,z);world.add(g);cylinder(g,0,.56,0,.37,.43,1.05,trashMetal,12);cylinder(g,0,1.12,0,.39,.39,.12,trashMetal,12);cylinder(g,0,1.22,0,.1,.13,.14,trashMetal,8);box(g,0,.72,0,.08,.42,.02,mats.dark,false);if(tipped){g.rotation.z=1.28;g.position.y=.42;sphere(g,.05,.15,0,.32,bagMat);sphere(g,.55,.1,.12,.22,bagMat)}else{sphere(g,.65,.2,.1,.3,bagMat);sphere(g,.42,.15,.22,.16,bagMat)}trashSpots.push({x,z})}
[[7,18],[10.5,21],[-12,12],[-9,26],[21,14],[13,14],[44,-10],[7,-44],[35,15],[-6,48],[15.6,6],[42.5,14],[-14,38],[14,52]].forEach((p,i)=>trashCan(p[0],p[1],i%4===0));
const neonSigns=[],fires=[];
function neonSign(text,x,y,z,rotY,color='#d4ef6a',wd=5.2,ht=1.3){
  const c=document.createElement('canvas');c.width=512;c.height=128;const ctx=c.getContext('2d');
  let size=58;do{ctx.font=`700 ${size}px "Space Grotesk",sans-serif`;size-=2}while(ctx.measureText(text).width>452&&size>23);
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.shadowColor=color;ctx.shadowBlur=26;ctx.fillStyle=color;ctx.fillText(text,256,67);ctx.shadowBlur=8;ctx.fillText(text,256,67);
  const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;
  const mat=new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,toneMapped:false,side:THREE.DoubleSide});
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(wd,ht),mat);mesh.position.set(x,y,z);mesh.rotation.y=rotY;world.add(mesh);neonSigns.push({mesh,phase:rand()*7});return mesh;
}
function barrelFire(x,z){cylinder(world,x,.45,z,.4,.46,.9,mats.rust,12);const flame=sphere(world,x,1.05,z,.34,mats.orange);flame.scale.set(.34,.55,.34);const l=new THREE.PointLight('#ff8d4f',9,9,2);l.position.set(x,1.25,z);scene.add(l);fires.push({flame,light:l,phase:rand()*6});box(world,x,.9,z,.6,.08,.1,mats.dark,false)}
barrelFire(-13.8,27.2);barrelFire(6.4,44.6);barrelFire(-46,15.5);

// Parked, abandoned cars. Everything here is solid.
const carPalette=['#6f5f4d','#4d5b5e','#75614f','#5d555e','#6b7059','#3d4d55','#7b6d55'];
function parkedCar(x,z,rot,color,abandoned=false){
  const g=new THREE.Group();g.position.set(x,0,z);g.rotation.y=rot;world.add(g);
  const bodyMat=toon(color);
  const darkMat=new THREE.MeshStandardMaterial({color:'#1a2325',roughness:.6});
  box(g,0,.62,0,1.92,.5,4.25,bodyMat,true);
  box(g,0,.94,-.18,1.72,.45,2.15,bodyMat,true);
  box(g,0,1.18,-.18,1.5,.12,1.95,darkMat,true);
  box(g,.96,.98,-.18,.03,.4,1.8,new THREE.MeshStandardMaterial({color:'#243b3d',roughness:.2,metalness:.4}),false);
  box(g,-.96,.98,-.18,.03,.4,1.8,new THREE.MeshStandardMaterial({color:'#243b3d',roughness:.2,metalness:.4}),false);
  for(const wz of [-1.42,1.42])for(const wx of [-.95,.95]){
    const wheel=cylinder(g,wx,.38,wz,.34,.34,.22,darkMat,12);wheel.rotation.z=Math.PI/2;
  }
  for(const lx of [-.62,.62])sphere(g,lx,.66,2.06,.12,mats.lit);
  box(g,0,.6,2.13,1.2,.18,.05,darkMat,false);
  if(abandoned){g.rotation.z=.03;box(g,0,1.28,-.2,.9,.06,.6,mats.rust,false)}
  addCollider(x,z,Math.abs(rot)>.5?4.5:2.05,Math.abs(rot)>.5?2.05:4.5);
}
parkedCar(-4.9,26,0,carPalette[0]);
parkedCar(-4.9,-16,0,carPalette[1]);
parkedCar(4.9,38,Math.PI,carPalette[2],true);
parkedCar(4.9,-36,0,carPalette[3]);
parkedCar(4.9,-56,0,carPalette[4],true);
parkedCar(-34,4.9,Math.PI/2,carPalette[5]);
parkedCar(38,4.9,Math.PI/2,carPalette[6]);
parkedCar(-46,-4.9,Math.PI/2,carPalette[0],true);
parkedCar(44,-4.9,Math.PI/2,carPalette[2]);
// A couple of extra wrecks are shuffled into safe road slots on every visit.
const spareCarSlots=[[-4.9,44,0],[-4.9,49,0],[4.9,18,0],[4.9,-24,0],[-24,4.9,Math.PI/2],[22,4.9,Math.PI/2],[-4.9,-64,0]];
for(let i=0;i<2;i++){
  const slot=spareCarSlots.splice(Math.floor(rand()*spareCarSlots.length),1)[0];
  parkedCar(slot[0],slot[1],slot[2],carPalette[Math.floor(rand()*carPalette.length)],rand()>.5);
}

// District and shop signs.
neonSign('NOODLE 24H',-17.82,4.1,27,Math.PI/2,'#ff9b76',5.1,1.1);
neonSign('SLEEP PODS',17.46,4.1,28,-Math.PI/2,'#d4ef6a',4.8,1.05);
neonSign('FIX / BODY',-17.84,4.2,-27,Math.PI/2,'#9fd9e2',4.7,1.05);
neonSign('MERIDIAN',17.46,4.35,1.8,-Math.PI/2,'#e8ddb5',4.4,.95);
neonSign('AURELIS',-17.84,4.55,-34,Math.PI/2,'#e9d79a',4.6,1.0);
neonSign('LOW QUARTER',-17.84,4.35,49,Math.PI/2,'#ff9b76',5.2,1.0);
neonSign('OPEN',-15.94,3.05,9.6,Math.PI/2,'#d4ef6a',2.1,.72);

// Two small merchants between districts.
box(world,-14.2,.65,31.7,3.2,1.3,2.1,mats.rust,true);box(world,-14.2,1.35,31.7,3.4,.14,2.3,mats.tarp,true);
box(world,14.6,.6,33.2,2.6,1.2,2,mats.dark,true);box(world,14.6,1.26,33.2,2.8,.12,2.2,mats.concrete,true);

// Interior construction.
const interiors=[];
const interiorFloor=toon('#444944');
const interiorWall=toon('#5a625b');
const warmBulb=toon('#ffdca0',{emissive:'#ffb45b',emissiveIntensity:2.2});
function interiorLamp(x,z,color='#ffd09a',power=16){
  sphere(world,x,3.9,z,.13,warmBulb);
  const l=new THREE.PointLight(color,power,14,2);l.position.set(x,3.25,z);scene.add(l);
  box(world,x,4.6,z,.04,.9,.04,mats.dark,false);
}
function buildEnterableBuilding(o){
  const {x,z,w,d,h=5.5,doorSide,doorWidth=3.4,doorOffset=0}=o;
  const t=.6;
  const floor=o.floorMat?toon(o.floorMat.color.getHex()):interiorFloor;
  const wallMat=o.wallMat?toon(o.wallMat.color.getHex()):interiorWall;
  const rugMat=o.rugMat?toon(o.rugMat.color.getHex()):mats.dark;
  const trim=o.trimMat||mats.rust;
  box(world,x,-.02,z,w-.55,.13,d-.55,floor,false);
  box(world,x,.03,z,w-1.6,.02,d-1.6,rugMat,false);
  for(let i=-1;i<=1;i+=2){box(world,x,2.5,z+i*(d/2+.06),w+.28,.16,.12,trim,false);box(world,x,4.5,z+i*(d/2+.06),w+.34,.12,.12,trim,false);box(world,x+i*(w/2+.06),2.5,z,.12,.16,d+.28,trim,false);box(world,x+i*(w/2+.06),4.5,z,.12,.12,d+.34,trim,false)}
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
    const out=doorSide==='+x'?1:-1;box(world,faceX+out*.72,3.55,dc,1.5,.18,doorWidth+1.1,mats.dark,true);
    neonSign(o.sign.text,doorSide==='+x'?x+w/2+.05:x-w/2-.05,4.45,dc,doorSide==='+x'?Math.PI/2:-Math.PI/2,o.sign.color,o.sign.width||5.4,1.05);
    const dl=new THREE.PointLight(o.sign.color,8,10,2);dl.position.set(faceX+out*1.2,3.2,dc);scene.add(dl);
  }else{
    const sideZ=doorSide==='+z'?z-d/2+t/2:z+d/2-t/2;wall(x,sideZ,w-2*t,t);
    const faceZ=doorSide==='+z'?z+d/2-t/2:z-d/2+t/2;const dc=x+doorOffset;
    wall((x-w/2+t+dc-doorWidth/2)/2,faceZ,Math.max(.2,dc-doorWidth/2-(x-w/2+t)),t);
    wall((dc+doorWidth/2+x+w/2-t)/2,faceZ,Math.max(.2,x+w/2-t-(dc+doorWidth/2)),t);
    box(world,dc,(h+3.2)/2,faceZ,doorWidth,h-3.2,t,wallMat,true);
    box(world,dc-doorWidth/2-.09,3.25,faceZ,doorWidth+.48,.2,.26,mats.rust,true);box(world,dc+doorWidth/2+.09,3.25,faceZ,doorWidth+.48,.2,.26,mats.rust,true);
    box(world,dc,3.28,faceZ,doorWidth+.55,.16,.24,mats.rust,false);
    const out=doorSide==='+z'?1:-1;box(world,dc,3.55,faceZ+out*.72,doorWidth+1.1,.18,1.5,mats.dark,true);
    neonSign(o.sign.text,dc,4.45,doorSide==='+z'?z+d/2+.05:z-d/2-.05,doorSide==='+z'?0:Math.PI,o.sign.color,o.sign.width||5.4,1.05);
    const dl=new THREE.PointLight(o.sign.color,8,10,2);dl.position.set(dc,3.2,faceZ+out*1.2);scene.add(dl);
  }
  box(world,x,h+.05,z,w+.02,.24,d+.02,o.roofMat||toon('#39413e'),true);
  for(let i=-1;i<=1;i++)box(world,x,h+.2,z+i*(d/3),w,.22,.22,mats.rust,false);
  for(let i=-1;i<=1;i++)box(world,x+i*(w/3),h+.2,z,.22,.22,d,mats.rust,false);
  box(world,x,h+.36,z-d/2,w+.1,.55,.25,mats.dark,false);box(world,x,h+.36,z+d/2,w+.1,.55,.25,mats.dark,false);
  const built={x,z,w,d,h,name:o.sign.text,wallMat,doorSide,doorWidth,doorOffset,signColor:o.sign.color};interiors.push(built);return built;
}
function propCollider(x,z,w,d){addCollider(x,z,w,d)}
function shelfUnit(x,z,w,h,mat,rows=4,alongX=true){
  box(world,x,h/2,z,alongX?w:.8,h,alongX?.8:w,mat,true);
  for(let i=1;i<=rows;i++){box(world,x,.35+i*(h/(rows+1)),z,alongX?w-.15:.86,.09,alongX?.86:w-.15,mats.dark,false)}
  propCollider(x,z,alongX?w:.8,alongX?.8:w);
}
function crate(x,z,s=1,mat=mats.rust){box(world,x,.35*s,z,.8*s,.7*s,.8*s,mat,true);box(world,x,.72*s,z,.84*s,.06,.84*s,mats.dark,false)}
function plant(x,z,s=1){cylinder(world,x,.35*s,z,.24*s,.32*s,.7*s,mats.rust,7);sphere(world,x,.95*s,z,.5*s,mats.green);sphere(world,x-.25*s,1.15*s,z+.1*s,.34*s,mats.leaf)}
function rug(x,z,w,d,color){const m=toon(color);box(world,x,.055,z,w,.025,d,m,false)}

// Extra dressing that makes every interior feel lived-in, cramped and layered.
function interiorDetail(b,opts={}){
  const {x,z,w,d,h}=b, papers=opts.papers??20, theme=opts.theme||'low';
  const minX=x-w/2+1.05,maxX=x+w/2-1.05,minZ=z-d/2+1.05,maxZ=z+d/2-1.05;
  const doorSide=b.doorSide;
  const nearDoor=(px,pz)=>{
    if(doorSide==='+x')return px>maxX-1.8&&Math.abs(pz-(z+(b.doorOffset||0)))<(b.doorWidth||3.4)/2+.5;
    if(doorSide==='-x')return px<minX+1.8&&Math.abs(pz-(z+(b.doorOffset||0)))<(b.doorWidth||3.4)/2+.5;
    if(doorSide==='+z')return pz>maxZ-1.8&&Math.abs(px-(x+(b.doorOffset||0)))<(b.doorWidth||3.4)/2+.5;
    return pz<minZ+1.8&&Math.abs(px-(x+(b.doorOffset||0)))<(b.doorWidth||3.4)/2+.5;
  };
  // Exposed ceiling joists and dead cable drops.
  for(let i=0;i<4;i++)box(world,x,h-.26,z-d/2+1.6+i*(d-3.2)/3,w-1.1,.1,.1,mats.dark,false);
  for(let i=0;i<9;i++){
    const cx=minX+rand()*(maxX-minX),cz=minZ+rand()*(maxZ-minZ),len=.5+rand()*1.5;
    box(world,cx,h-.42-len/2,cz,.026,len,.026,mats.dark,false);
    if(i%3===0){const bulb=sphere(world,cx,h-.42-len,cz,.07,i%2?mats.lit:mats.orange);bulb.material.emissiveIntensity=1.1}
  }
  // Wall conduit and old posters.
  for(const side of [-1,1]){
    cylinder(world,x+side*(w/2-.42),h*.45,minZ+1.1,.042,.042,h*.72,mats.rust,6);
    for(let i=0;i<2;i++){
      const pz=minZ+1.6+i*(d-3)/1.6;
      if(rand()>.35)box(world,x+side*(w/2-.33),2.35,pz,.035,.8,.55,i%2?mats.orange:mats.lit,false);
    }
  }
  // Scattered papers and flattened cartons.
  for(let i=0;i<papers;i++){
    const px=minX+rand()*(maxX-minX),pz=minZ+rand()*(maxZ-minZ);
    if(nearDoor(px,pz))continue;
    const sheet=box(world,px,.076,pz,.16+rand()*.2,.008,.11+rand()*.14,i%4===0?mats.lit:mats.ivory,false);
    sheet.rotation.y=rand()*Math.PI;
  }
  for(let i=0;i<5;i++){
    const px=minX+.5+rand()*(maxX-minX-1),pz=minZ+.5+rand()*(maxZ-minZ-1);
    if(nearDoor(px,pz))continue;
    const flat=box(world,px,.1,pz,.45+rand()*.3,.16,.34+rand()*.2,i%2?mats.rust:mats.concrete,false);
    flat.rotation.y=rand()*.8;flat.rotation.z=(rand()-.5)*.08;
  }
  // Cans and bottles in the corners. Tipped ones are pure set-dressing.
  for(let i=0;i<7;i++){
    const px=minX+.3+rand()*(maxX-minX-.6),pz=minZ+.3+rand()*(maxZ-minZ-.6);
    if(nearDoor(px,pz))continue;
    const cn=cylinder(world,px,.12,pz,.055,.06,.18,i%2?mats.orange:mats.concrete,8);
    if(rand()>.45)cn.rotation.z=1.45;
  }
  // Stacked crates hug the walls, away from the doorway.
  const corners=[[minX+.8,minZ+.8],[maxX-.8,minZ+.8],[minX+.8,maxZ-.8],[maxX-.8,maxZ-.8]];
  for(const [cx,cz] of corners){
    if(nearDoor(cx,cz))continue;
    const s=.5+rand()*.35;
    crate(cx,cz,s,theme==='high'?mats.gold:rand()>.5?mats.rust:mats.concrete);
    if(rand()>.4)crate(cx+.15,cz+.05,s*.65,mats.dark);
  }
  if(theme==='high'){
    for(let i=0;i<5;i++){
      const px=minX+rand()*(maxX-minX),pz=minZ+rand()*(maxZ-minZ);
      if(nearDoor(px,pz))continue;
      box(world,px,.08,pz,.45,.04,.32,mats.gold,false).rotation.y=rand()*Math.PI;
    }
  }
}

// Chapter one: Transit Archive — cramped public memory.
const archiveHouse=buildEnterableBuilding({x:-27,z:14,w:22,d:16,h:5.4,doorSide:'+x',doorWidth:3.4,sign:{text:'TRANSIT ARCHIVE',color:'#ffb37e',width:6.2},wallMat:new THREE.MeshStandardMaterial({color:'#5d5d52',roughness:.97}),floorMat:new THREE.MeshStandardMaterial({color:'#414843',roughness:.95}),trimMat:mats.rust,rugMat:new THREE.MeshStandardMaterial({color:'#4e4638',roughness:1})});
for(let i=0;i<7;i++){const x=-36.3+i*2.35;shelfUnit(x,7.1,2.1,2.7,mats.rust,5)}
for(let i=0;i<4;i++){const z=8.8+i*2.4;box(world,-37.1,1.15,z,1.15,2.2,1.7,mats.dark,true);for(let j=0;j<4;j++)box(world,-36.55,.6+j*.5,z,.05,.28,1.35,mats.lit,false)}
box(world,-25,1.0,18.4,3.4,.16,1.5,mats.concrete,true);box(world,-25,.48,18.4,2.8,.12,1.1,mats.dark,true);
for(const c of [[-27.4,18.4],[-22.6,18.4]]){box(world,c[0],.53,c[1],.55,.1,.55,mats.rust,true);box(world,c[0],.32,c[1],.1,.5,.1,mats.dark,true)}
for(let i=0;i<9;i++)box(world,-27.5+rand()*3,1.13,18.4-rand()*.5,.38,.03,.5,i%2?mats.lit:mats.concrete,false);
rug(-25,13.4,6,2.4,'#4a5148');
box(world,-19.8,.85,11.2,1.4,1.5,1.2,mats.dark,true);box(world,-19.8,1.65,11.2,1.2,.08,.8,mats.lit,false);
interiorLamp(-31.5,13.6,'#ffc88f');interiorLamp(-22,13.7,'#ffb87d');interiorLamp(-33,18,'#d7a06d',10);

// Chapter two: Signal House — clean, monitored middle-tier office.
const signalHouse=buildEnterableBuilding({x:29,z:3,w:22,d:16,h:5.2,doorSide:'-x',doorWidth:3.4,sign:{text:'THE SIGNAL HOUSE',color:'#9fe4d4',width:6.5},wallMat:new THREE.MeshStandardMaterial({color:'#4c5956',roughness:.97}),floorMat:new THREE.MeshStandardMaterial({color:'#3d4747',roughness:.95}),trimMat:mats.concrete,rugMat:new THREE.MeshStandardMaterial({color:'#4c5b56',roughness:1})});
box(world,29,2.0,-4.2,13,2.8,.3,mats.dark,true);
for(let i=0;i<9;i++){box(world,23.6+i*1.35,2.1,-4.0,1.1,.78,.08,mats.glass,false);box(world,23.6+i*1.35,2.1,-4.06,1.0,.62,.03,i%3?mats.neon:mats.orange,false)}
for(let i=0;i<3;i++){const x=24.5+i*4.2;box(world,x,.78,-1.6,3.4,.16,1.1,mats.dark,true);box(world,x,.4,-1.6,3,.7,.8,mats.concrete,true);box(world,x,1.12,-1.8,.7,.5,.65,mats.glass,false)}
for(let i=0;i<4;i++){box(world,37.4,1.0,-1+i*2.6,1.4,2,1.3,mats.dark,true);for(let j=0;j<4;j++)sphere(world,36.9,1.5,-1+i*2.6-.4+j*.25,.045,j%2?mats.neon:mats.orange)}
box(world,34.8,.55,8.2,2.2,1.0,1.5,mats.rust,true);box(world,34.8,1.1,8.2,1.9,.08,1.2,mats.lit,false);
plant(20.2,9.2,.9);plant(37.6,9.4,.75);rug(27,4.5,5.4,3,'#485752');
interiorLamp(23,1.2,'#cde9dd');interiorLamp(33,1.2,'#a5e3d0');interiorLamp(35,8.6,'#c8b899',9);
const signalDoorLight=new THREE.PointLight('#8fe0d0',6,9,2);signalDoorLight.position.set(17.1,3.1,3);scene.add(signalDoorLight);
const archiveDoorLight=new THREE.PointLight('#ff9e68',6,9,2);archiveDoorLight.position.set(-15.1,3.1,14);scene.add(archiveDoorLight);

// Chapter one: Market 09 — crowded shelves and cold cabinets.
const supermarket=buildEnterableBuilding({x:-51,z:27,w:20,d:18,h:5.6,doorSide:'-z',doorWidth:3.6,sign:{text:'MARKET 09',color:'#bfe8a2',width:5.2},wallMat:new THREE.MeshStandardMaterial({color:'#52624f',roughness:.96}),floorMat:new THREE.MeshStandardMaterial({color:'#777768',roughness:.95}),trimMat:mats.rust,rugMat:new THREE.MeshStandardMaterial({color:'#6b6a58',roughness:1})});
for(let row=0;row<5;row++){
  const z=23.2+row*2.35;
  shelfUnit(-51,z,8.8,1.7,row%2?mats.rust:mats.dark,4);
  for(let i=-3;i<=3;i++){box(world,-51+i*1.15,1.81,z-.4,.55,.22,.24,i%2?mats.orange:mats.lit,false);box(world,-51+i*1.15,1.38,z+.36,.5,.2,.22,i%3?mats.lit:mats.concrete,false)}
}
for(let i=0;i<4;i++){const z=23.4+i*2.4;box(world,-42.8,1.5,z,1.5,2.7,1.7,mats.dark,true);box(world,-43.6,1.55,z,.06,2.2,1.4,mats.glass,false);box(world,-42.8,2.75,z,1.55,.1,1.75,mats.lit,false)}
box(world,-58.4,.8,31.5,2.2,1.5,1.4,mats.dark,true);box(world,-58.4,1.6,31.5,1.9,.13,1.1,mats.rust,false);box(world,-58.4,1.05,31.5,.3,.35,.2,mats.lit,false);propCollider(-58.4,31.5,2.2,1.4);
box(world,-48.4,.6,19.6,1.2,1.1,.9,mats.rust,true);box(world,-47.2,.6,19.7,1,1.1,.8,mats.dark,true);
box(world,-53.6,.32,20.4,1.4,.6,.7,mats.concrete,true);box(world,-53.6,.62,20.4,1.5,.06,.8,mats.rust,false);
for(let i=0;i<5;i++){const z=22.8+i*2.6;box(world,-51,3.35,z,6,.04,.1,mats.dark,false);box(world,-51,3.05,z,1.1,.22,.05,new THREE.MeshStandardMaterial({color:'#d9d6bd',emissive:'#7d7a5a',emissiveIntensity:.5}),false)}
cylinder(world,-59.1,.5,23.2,.3,.34,.8,mats.rust,8);box(world,-58.8,.9,23.2,.08,.75,.08,mats.dark,false);
plant(-44,34.6,.7);rug(-51,20.7,5,1.6,'#5c5b4b');
interiorLamp(-51,27.6,'#bee99e',18);interiorLamp(-56,22,'#d5d9b0',8);

// Chapter one: Civic Police — authority running on old orders.
const police=buildEnterableBuilding({x:-51,z:52,w:19,d:17,h:6.2,doorSide:'-z',doorWidth:3.2,sign:{text:'CIVIC POLICE',color:'#9dc8d8',width:5.8},wallMat:new THREE.MeshStandardMaterial({color:'#46575a',roughness:.96}),floorMat:new THREE.MeshStandardMaterial({color:'#484f50',roughness:.95}),trimMat:mats.concrete,rugMat:new THREE.MeshStandardMaterial({color:'#3f4a4c',roughness:1})});
box(world,-55,.82,48.4,4.2,1.5,1.25,mats.dark,true);box(world,-55,1.63,48.4,3.9,.14,.95,mats.rust,false);box(world,-55,.6,47.9,1.2,.9,.8,mats.concrete,true);propCollider(-55,48.4,4.2,1.25);
for(let i=0;i<4;i++)box(world,-59.4,.55,45.4+i*2.5,1.2,.65,1.1,mats.dark,true);
box(world,-45.2,2.1,47.4,.16,3.4,7.4,mats.dark,true);
for(let i=0;i<12;i++){cylinder(world,-45.1,1.9,44.2+i*.55,.035,.035,3.6,mats.concrete,5);}
box(world,-43.4,.5,50.5,2.6,.85,1,mats.rust,true);box(world,-43.4,.95,50.5,2.4,.12,.85,mats.concrete,false);
for(let i=0;i<5;i++){box(world,-58.6+i*2.4,1.25,59.3,2.1,2.4,.55,mats.dark,true);for(let j=0;j<3;j++)box(world,-58.6+i*2.4,.65+j*.6,59.6,1.8,.3,.04,j%2?mats.lit:mats.concrete,false)}
box(world,-42.2,2.1,54.5,2.6,.1,3.4,mats.glass,false);box(world,-42.2,1.0,54.5,.7,2,.7,mats.dark,true);
box(world,-56,1.0,42.9,2.2,.1,1.2,mats.concrete,true);
interiorLamp(-55,45.8,'#c4d8d8',9);interiorLamp(-47,52,'#9ac9db',13);

// Chapter two: Post Office — the city's second, quieter surveillance.
const postOffice=buildEnterableBuilding({x:51,z:27,w:20,d:18,h:5.5,doorSide:'-z',doorWidth:3.4,sign:{text:'POST OFFICE',color:'#e3c77d',width:5.5},wallMat:new THREE.MeshStandardMaterial({color:'#666052',roughness:.96}),floorMat:new THREE.MeshStandardMaterial({color:'#56544a',roughness:.95}),trimMat:mats.concrete,rugMat:new THREE.MeshStandardMaterial({color:'#5a5443',roughness:1})});
for(let i=0;i<11;i++){for(let j=0;j<7;j++){box(world,42.5,1.0+j*.55,21+i*1.25,.35,.42,.95,mats.rust,false)}}
for(let i=0;i<4;i++){const x=44.5+i*3.4;box(world,x,1.0,34.2,3,1.9,.9,mats.rust,true);for(let j=0;j<3;j++)box(world,x,.6+j*.55,33.7,2.5,.3,.08,mats.dark,false)}
box(world,58.6,.85,26.5,2.4,1.4,7.2,mats.dark,true);box(world,58.6,1.62,26.5,2.1,.14,6.8,mats.rust,false);propCollider(58.6,26.5,2.4,7.2);
for(let i=0;i<7;i++){crate(45+i*1.7,23.3,.7+rand()*.5,i%2?mats.rust:mats.concrete)}
for(let i=0;i<6;i++){box(world,54.5,.55,20.2+i*.9,.8,.9,.55,mats.concrete,true);box(world,54.5,1.04,20.2+i*.9,.7,.06,.45,mats.rust,false)}
box(world,46.8,.7,28.4,1.8,.12,1.1,mats.dark,true);for(const wx of [-.7,.7])cylinder(world,46.8+wx,.3,29.3,.12,.12,.55,mats.dark,8);
box(world,43.6,.7,35.1,1.2,1.2,1.1,mats.dark,true);box(world,43.6,1.28,35.1,1,.05,.8,mats.orange,false);
interiorLamp(51,24,'#e2c77a',15);interiorLamp(57,32,'#cdb476',8);

// Chapter one: House 18 — one warm room in a cold tier.
const residence=buildEnterableBuilding({x:51,z:52,w:20,d:17,h:5.4,doorSide:'-z',doorWidth:2.8,sign:{text:'HOUSE 18',color:'#ffc08a',width:4.4},wallMat:new THREE.MeshStandardMaterial({color:'#62605a',roughness:.96}),floorMat:new THREE.MeshStandardMaterial({color:'#5a5549',roughness:.95}),trimMat:mats.rust,rugMat:new THREE.MeshStandardMaterial({color:'#6a5140',roughness:1})});
box(world,56.6,.38,47.2,4.0,.5,2.35,mats.concrete,true);box(world,56.6,.78,47.2,3.9,.28,2.25,mats.lit,false);box(world,56.6,1.0,46.2,3.8,.5,.4,mats.rust,true);propCollider(56.6,47.2,4,2.35);
box(world,45.6,.73,52.6,3.2,.15,1.8,mats.rust,true);for(const p of [[44.4,51.8],[44.4,53.4],[46.8,51.8],[46.8,53.4]]){box(world,p[0],.4,p[1],.18,.75,.18,mats.dark,true)}
box(world,45,.62,58.9,6.4,1.1,1.2,mats.dark,true);box(world,45,1.18,58.9,6.1,.1,1,mats.concrete,false);sphere(world,45,1.35,58.9,.16,mats.lit);
box(world,57.8,1.6,59.3,1.8,2.1,.7,mats.dark,true);box(world,57.8,.62,59.3,1.5,.55,.75,mats.concrete,true);box(world,57.8,2.68,59.3,1.9,.12,.8,mats.rust,false);
box(world,43.6,.55,49.8,1.1,.9,2.6,mats.rust,true);box(world,43.6,1.0,49.8,1.15,.18,2.5,mats.lit,false);
box(world,42.6,1.7,55.6,.12,1.8,2.8,mats.dark,true);box(world,42.52,1.8,55.6,.05,1.1,1.8,mats.glass,false);
for(let i=0;i<3;i++)box(world,50+i*1.4,3.3,48.5,.09,.03,5.6,mats.dark,false);box(world,48.5,3.0,48.5,1.5,.35,.05,mats.concrete,false);
plant(59,45.4,.8);rug(50,50.5,7,4,'#6a5140');
interiorLamp(51,51.6,'#ffc07f',16);interiorLamp(56,46,'#ffb66d',8);

// Chapter three: Aurelis Spire — the tier that owns the view.
const spire=buildEnterableBuilding({x:28,z:-52,w:19,d:18,h:6.4,doorSide:'+z',doorWidth:3.4,sign:{text:'AURELIS SPIRE',color:'#e9d79a',width:6.4},wallMat:new THREE.MeshStandardMaterial({color:'#9a9c92',roughness:.86}),floorMat:new THREE.MeshStandardMaterial({color:'#b7b5a6',roughness:.72}),trimMat:mats.gold,rugMat:new THREE.MeshStandardMaterial({color:'#6d4b42',roughness:1})});
for(const cx of [21.2,34.8])for(const cz of [-47,-52,-57]){cylinder(world,cx,3.2,cz,.35,.42,6.4,mats.ivory,10);box(world,cx,6.3,cz,.95,.2,.95,mats.gold,false);box(world,cx,.16,cz,1.1,.22,1.1,mats.gold,false)}
box(world,28,3.1,-57.6,9,.35,3.6,mats.ivory,true);box(world,28,3.32,-57.6,8.5,.12,3.1,mats.gold,false);
box(world,28,.36,-57.4,7.6,.58,3.8,mats.dark,true);box(world,28,.68,-57.4,7.2,.1,3.4,mats.gold,false);propCollider(28,-57.4,7.6,3.8);
for(const ex of [22.5,33.5]){box(world,ex,2.2,-60.5,3.4,4.2,.25,mats.dark,true);box(world,ex,2.2,-60.36,3.1,3.8,.05,mats.gold,false);box(world,ex,2.2,-60.33,.06,3.7,1.7,mats.dark,false)}
box(world,28,.06,-50,2.2,.03,11.6,new THREE.MeshStandardMaterial({color:'#7c4438',roughness:1}),false);
box(world,21.8,.58,-49.2,1.4,.85,3.2,mats.rust,true);box(world,21.8,1.02,-49.2,1.35,.2,3.1,mats.lit,false);
box(world,21.8,.58,-52.6,1.4,.85,2.4,mats.rust,true);box(world,21.8,1.02,-52.6,1.35,.2,2.3,mats.lit,false);
box(world,35,.9,-48.4,1.5,1.5,3.4,mats.dark,true);box(world,35,1.68,-48.4,1.3,.12,3,mats.gold,false);for(let i=0;i<3;i++)cylinder(world,35,1.1,-49.4+i*.9,.07,.09,.32,mats.lit,7);
sphere(world,23.6,1.15,-55.2,.6,mats.gold);cylinder(world,23.6,.45,-55.2,.4,.6,.9,mats.dark,10);
for(let i=0;i<5;i++){const c=sphere(world,28,4.9,-51,.12,mats.lit);c.position.x=(i-2)*.45;c.position.y=4.9-Math.abs(i-2)*.16}
const chand=new THREE.PointLight('#ffe3ad',20,16,2);chand.position.set(28,4.2,-51);scene.add(chand);
plant(19.8,-59,.9);plant(36.2,-58.8,.9);rug(28,-48,4,3,'#74483e');
interiorLamp(24,-46,'#ffe3ad',8);interiorLamp(32,-54,'#e9d79b',8);

// Chapter one archive: an overloaded reading hall in the middle of the floor.
for(const t of [[-29.4,12.2,3.3],[-23,17.6,2.4]]){
  box(world,t[0],.82,t[1],t[2],.14,1.3,mats.rust,true);
  box(world,t[0],.9,t[1],t[2]-.1,.04,1.2,mats.dark,false);
  for(const lx of [-1,1])for(const lz of [-1,1])box(world,t[0]+lx*(t[2]/2-.25),.42,t[1]+lz*.5,.12,.8,.12,mats.dark,true);
  for(let i=0;i<5;i++){const s=box(world,t[0]-t[2]/2+.35+rand()*(t[2]-.7),.96,t[1]-.4+rand()*.75,.38,.035,.28,i%2?mats.lit:mats.ivory,false);s.rotation.y=rand()*.9}
  propCollider(t[0],t[1],t[2],1.3);
  for(const side of [-1,1]){
    const chair=box(world,t[0]+side*(t[2]/2+.75),.53,t[1],.55,.1,.55,mats.dark,true);
    chair.rotation.y=Math.PI/2;box(world,t[0]+side*(t[2]/2+.75),.86,t[1]-.2,.55,.65,.08,mats.rust,true);
  }
}
shelfUnit(-34.4,14.6,5.4,2.35,mats.rust,4,false);
for(let i=0;i<3;i++){box(world,-21.4,1.3+i*.55,18.9,2.4,.42,.55,mats.dark,true);for(let j=0;j<5;j++)box(world,-22.4+j*.5,1.3+i*.55,19.2,.34,.32,.06,i%2?mats.lit:mats.concrete,false)}
box(world,-24.8,.75,20.9,2.2,1.4,1.1,mats.dark,true);box(world,-24.8,1.52,20.9,2.05,.08,.95,mats.rust,false);
interiorLamp(-29.4,12.2,'#ffc88f',8);
interiorDetail(archiveHouse,{papers:30,theme:'low'});
interiorDetail(supermarket,{papers:18,theme:'low'});
interiorDetail(police,{papers:16,theme:'mid'});
interiorDetail(signalHouse,{papers:8,theme:'mid'});
interiorDetail(postOffice,{papers:14,theme:'mid'});
interiorDetail(residence,{papers:10,theme:'low'});
interiorDetail(spire,{papers:6,theme:'high'});

// ----- Characters: rounded, cel-shaded, anime-proportioned -----
const eyeGeo=new THREE.SphereGeometry(1,18,14);
function capsuleGeoMake(r,len){return new THREE.CapsuleGeometry(r,len,5,10)}
function buildHuman(o={}){
  const {skin='#c69a79',hair='#2f2724',hairStyle='short',outfit='jacket',cloth='#6f7569',pants='#333d3c',eyes='#4a3428',accent='#d4ef6a',accessory='',height=1}=o;
  const root=new THREE.Group();const body=new THREE.Group();root.add(body);
  const skinM=toon(skin),clothM=toon(cloth),pantsM=toon(pants),hairM=toon(hair),shoeM=toon('#202629'),accentM=toon(accent);
  const isSkirt=outfit==='dress'||outfit==='robe';
  // Legs, pivoted at the hips.
  const legs=[];
  for(const side of [-1,1]){
    const hip=new THREE.Group();hip.position.set(side*.125,.9,0);body.add(hip);
    const leg=new THREE.Mesh(capsuleGeoMake(.082,.58),isSkirt?toon(skin):pantsM);leg.position.y=-.38;hip.add(leg);
    const shoe=new THREE.Mesh(capsuleGeoMake(.09,.14),shoeM);shoe.rotation.z=Math.PI/2;shoe.position.set(0,-.79,.05);hip.add(shoe);
    legs.push(hip);
  }
  // Torso, neck and head.
  const torso=new THREE.Mesh(capsuleGeoMake(.225,.34),clothM);torso.position.y=1.18;torso.scale.z=.82;body.add(torso);
  cylinder(body,0,1.57,0,.075,.085,.12,skinM,8);
  const head=new THREE.Group();head.position.y=1.8;body.add(head);
  const skull=new THREE.Mesh(eyeGeo,skinM);skull.scale.set(.25,.272,.235);head.add(skull);
  sphere(head,-.245,.0,0,.045,skinM);sphere(head,.245,.0,0,.045,skinM);
  // Anime eyes: white, iris, pupil, brow.
  const whiteM=toon('#f7f2e6'),irisM=toon(eyes),pupilM=toon('#14181a'),browM=toon(hair);
  for(const side of [-1,1]){
    const w=new THREE.Mesh(eyeGeo,whiteM);w.position.set(side*.098,.012,.201);w.scale.set(.056,.067,.026);head.add(w);
    const ir=new THREE.Mesh(eyeGeo,irisM);ir.position.set(side*.098,.008,.222);ir.scale.set(.036,.047,.014);head.add(ir);
    const pu=new THREE.Mesh(eyeGeo,pupilM);pu.position.set(side*.098,.003,.233);pu.scale.set(.015,.025,.007);head.add(pu);
    const hl=new THREE.Mesh(eyeGeo,whiteM);hl.position.set(side*.108,.024,.238);hl.scale.set(.008,.01,.004);head.add(hl);
    box(head,side*.098,.062,.224,.108,.013,.012,pupilM,false);
    box(head,side*.098,.11,.207,.092,.015,.018,browM,false);
    sphere(head,side*.145,-.06,.202,.017,toon('#c98d85'));
  }
  sphere(head,0,-.035,.245,.028,skinM);box(head,0,-.11,.218,.07,.012,.012,toon('#7d4b45'),false);
  // Hair styles.
  const cap=new THREE.Mesh(new THREE.SphereGeometry(.27,18,12),hairM);cap.scale.set(1,.76,.9);cap.position.set(0,.1,-.06);head.add(cap);
  const fringe=(x,sx)=>{const f=new THREE.Mesh(eyeGeo,hairM);f.scale.set(sx,.055,.045);f.position.set(x,.202,.172);f.rotation.z=(x>0?-.22:.22);f.castShadow=true;head.add(f);return f};
  if(hairStyle==='short'||hairStyle==='crop'){fringe(-.09,.12,.055);fringe(.06,.14,.055);fringe(.18,.06,.05);box(head,-.24,-.05,.02,.04,.17,.12,hairM,false);box(head,.24,-.05,.02,.04,.17,.12,hairM,false)}
  else if(hairStyle==='long'){fringe(-.08,.16,.06);fringe(.1,.15,.06);const back=new THREE.Mesh(capsuleGeoMake(.14,.34),hairM);back.position.set(0,-.13,-.19);head.add(back);box(head,-.25,-.16,-.05,.05,.35,.16,hairM,false);box(head,.25,-.16,-.05,.05,.35,.16,hairM,false)}
  else if(hairStyle==='bun'){fringe(-.06,.2,.06);sphere(head,0,.23,-.18,.105,hairM)}
  else if(hairStyle==='ponytail'){fringe(-.08,.18,.06);const t=new THREE.Mesh(capsuleGeoMake(.075,.26),hairM);t.position.set(0,-.02,-.28);t.rotation.x=.28;head.add(t);sphere(head,0,.04,-.27,.075,hairM)}
  else if(hairStyle==='spiky'||hairStyle==='mohawk'){
    for(let i=-2;i<=2;i++){const c=cone(head,i*.085,.31,-.02+Math.abs(i)*.03,.055,.2,hairM,0,(i>0?-1:1)*.25);c.rotation.x=-.12}
    if(hairStyle==='spiky'){cone(head,-.15,.25,.03,.05,.16,hairM,0,.55);cone(head,.15,.25,.03,.05,.16,hairM,0,-.55);fringe(-.12,.1,.05);fringe(.1,.11,.05)}
  }
  else if(hairStyle==='bald'){box(head,0,.19,.12,.44,.06,.08,hairM,false)}
  // Outfit silhouettes.
  if(outfit==='coat'){
    const skirt=new THREE.Mesh(new THREE.CylinderGeometry(.235,.35,.8,18),clothM);
    skirt.position.set(0,.84,0);skirt.scale.z=.86;skirt.castShadow=true;skirt.receiveShadow=true;body.add(skirt);
    box(body,0,1.42,0,.44,.07,.34,accentM,false);
    box(body,0,1.19,.205,.035,.64,.02,mats.dark,false);
    box(body,0,.98,.21,.08,.06,.025,accentM,false);
  }else if(outfit==='jacket'){
    box(body,-.13,1.43,.135,.16,.16,.17,toon('#d8d2bf'),false);box(body,.13,1.43,.135,.16,.16,.17,toon('#d8d2bf'),false);
    box(body,0,1.18,.2,.035,.68,.02,mats.dark,false);box(body,0,1.0,.2,.09,.09,.03,accentM,false);
  }else if(outfit==='suit'){
    box(body,-.1,1.38,.16,.16,.2,.15,toon('#e7e3d7'),false);box(body,.1,1.38,.16,.16,.2,.15,toon('#e7e3d7'),false);
    box(body,0,1.22,.205,.07,.36,.025,accentM,false);box(body,0,1.05,.21,.18,.16,.03,accentM,false);
    box(body,0,1.42,0,.44,.08,.38,mats.dark,false);
  }else if(outfit==='uniform'){
    box(body,0,1.43,0,.46,.09,.38,mats.dark,false);box(body,-.22,1.36,.05,.12,.16,.3,accentM,false);box(body,.22,1.36,.05,.12,.16,.3,accentM,false);
    box(body,-.17,1.26,.215,.1,.09,.02,mats.gold,false);box(body,0,1.18,.215,.035,.65,.02,mats.dark,false);
  }else if(outfit==='rags'){
    box(body,-.12,1.02,.2,.2,.26,.03,toon('#7a6a54'),false);box(body,.1,.92,.21,.16,.2,.03,toon('#5b6256'),false);
    box(body,-.2,.8,.02,.18,.2,.34,clothM,true);box(body,.2,.78,.02,.17,.17,.32,clothM,true);
  }else if(outfit==='apron'){
    const apronM=toon('#d8d1b8'),apronDark=toon('#b6ad92');
    box(body,0,1.03,.215,.34,.62,.03,apronM,false);
    box(body,-.12,1.36,.18,.05,.3,.025,apronM,false);box(body,.12,1.36,.18,.05,.3,.025,apronM,false);
    box(body,0,.96,.235,.2,.12,.02,apronDark,false);box(body,0,.7,.22,.1,.14,.02,accentM,false);
  }else if(outfit==='dress'){
    const skirt=new THREE.Mesh(new THREE.CylinderGeometry(.2,.43,.78,14),clothM);skirt.position.y=.77;body.add(skirt);
    box(body,0,1.42,.02,.45,.08,.36,accentM,false);
  }else if(outfit==='robe'){
    const skirt=new THREE.Mesh(new THREE.CylinderGeometry(.22,.48,1.1,14),clothM);skirt.position.y=.62;body.add(skirt);
    box(body,0,1.4,0,.46,.08,.38,accentM,false);
  }
  // Arms with hands, pivoted at the shoulders.
  const arms=[];
  for(const side of [-1,1]){
    const shoulder=new THREE.Group();shoulder.position.set(side*.3,1.43,0);body.add(shoulder);
    const arm=new THREE.Mesh(capsuleGeoMake(.062,.3),clothM);arm.position.y=-.21;shoulder.add(arm);
    sphere(shoulder,0,-.42,0,.075,skinM);
    shoulder.rotation.z=side*.1;
    arms.push(shoulder);
  }
  // Accessories.
  if(accessory==='glasses'){
    for(const side of [-1,1])box(head,side*.1,.015,.245,.12,.1,.015,mats.dark,false);
    box(head,0,.015,.247,.08,.018,.012,mats.dark,false);
  }else if(accessory==='cap'){
    cylinder(head,0,.245,-.01,.24,.24,.12,hairM,12);box(head,0,.2,.24,.34,.035,.28,hairM,false);
  }else if(accessory==='scarf'){
    cylinder(body,0,1.55,0,.19,.2,.11,accentM,12);box(body,.08,1.3,.19,.13,.42,.05,accentM,true);
  }else if(accessory==='mask'){
    box(head,0,-.1,.225,.3,.16,.04,toon('#d9d5c5'),false);
  }else if(accessory==='bandage'){
    box(head,-.18,.12,.13,.14,.08,.2,toon('#d8d0bc'),false);box(body,.18,1.2,.2,.16,.12,.04,toon('#d8d0bc'),false);
  }
  const rig={root,body,head,legs,arms,height,baseArmZ:.1};
  root.scale.setScalar(height);
  root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});
  return rig;
}
// Player avatar.
const player=new THREE.Group();scene.add(player);
const playerRig=buildHuman({skin:'#c99a78',hair:'#2b2523',hairStyle:'spiky',outfit:'coat',cloth:'#b06a4d',pants:'#26383a',eyes:'#3f6b64',accent:'#d4ef6a',accessory:'scarf',height:1.0});
player.add(playerRig.root);
box(playerRig.body,0,1.16,-.27,.34,.44,.16,new THREE.MeshStandardMaterial({color:'#2c3834',roughness:.9}),true);
player.position.set(0,0,15);

// ----- Labels and story terminals -----
const entities=[],labels=[],labelPos=new THREE.Vector3();
function makeLabel(text,color='#d4ef6a'){
  const c=document.createElement('canvas');c.width=512;c.height=128;const ctx=c.getContext('2d');
  ctx.clearRect(0,0,512,128);ctx.fillStyle='rgba(6,14,16,.82)';ctx.fillRect(4,4,504,120);ctx.strokeStyle=color;ctx.lineWidth=3;ctx.strokeRect(4,4,504,120);
  ctx.fillStyle=color;ctx.font='500 31px monospace';ctx.textAlign='center';ctx.fillText(text,256,77);
  const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;
  const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true,depthTest:false}));sp.scale.set(4.4,1.1,1);sp.userData.label=true;labels.push(sp);return sp;
}
function station({id,name,x,z,type='relay',clue='',code=[],puzzle='tone',lore='',accent=mats.neon}){
  const g=new THREE.Group();g.position.set(x,0,z);world.add(g);
  box(g,0,.55,0,1.6,1.1,.95,mats.dark);
  box(g,0,1.12,0,1.28,.12,.8,accent,false);
  box(g,0,1.43,-.22,.92,.58,.09,mats.glass,false);
  box(g,0,1.45,-.28,.7,.36,.025,mats.neon,false);
  for(let k=-1;k<=1;k++)cylinder(g,k*.5,.18,0,.09,.13,.36,mats.concrete,8);
  for(let k=-1;k<=1;k++)box(g,k*.36,1.66,.03,.06,.1,.6,mats.dark,false);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(1.1,.035,6,36),accent);ring.rotation.x=Math.PI/2;ring.position.y=.08;g.add(ring);
  const label=makeLabel(name,type==='gate'?'#ff906c':type==='spireDoor'?'#e9d79a':'#d4ef6a');label.position.set(0,2.55,0);label.userData.labelType='station';g.add(label);
  if(type==='relay'||type==='archive'){for(let i=0;i<3;i++){const orb=sphere(g,0,2.1,0,.105,accent);orb.userData.orb=true;orb.position.x=(i-1)*.26}}
  const obj={id,name,x,z,type,clue,code,puzzle,lore,group:g,active:false,interactRange:4.4};entities.push(obj);return obj;
}
const archive=station({id:'archive',name:'TRANSIT ARCHIVE',x:-27,z:14,type:'archive',puzzle:'tone',code:[1,0,3],accent:mats.orange,
  clue:'Ration shelves, scratched into the desk: MID → LOW → HUSH.',
  lore:'The pass is a sliver of the old city: a promise that movement was once a right, not a receipt.'});
const relay1=station({id:'relay1',name:'RELAY 01',x:-12,z:44,clue:'The low quarter shares its signal: LOW → HIGH → HUSH.',code:[0,2,3],puzzle:'tone',
  lore:'Relay 01 carries the low quarter’s old call. Three tones, no rank, no fee. The first honest thing the city ever gave away.'});
const relay2=station({id:'relay2',name:'RELAY 02',x:29,z:3,clue:'Three promises of the middle tier: clean street (3), locked door (1), quiet voice (5).',code:[3,1,5],puzzle:'dial',
  lore:'The middle tier runs on calibrated comfort. Every promise is numbered, and every number is a fence.'});
const relay3=station({id:'relay3',name:'RELAY 03',x:28,z:-56.4,clue:'The Spire keeps the outer ring lit and the core dark: WEST ON · INNER OFF · CORE OFF · EAST ON.',code:[1,0,0,1],puzzle:'circuit',accent:mats.gold,
  lore:'The Spire’s private circuit routes power outward and keeps the core dark. The dark is where the cost is stored.'});
const exit=station({id:'exit',name:'PERIMETER GATE',x:0,z:-64,type:'gate',accent:mats.orange});
// Checkpoint between the Low Quarter and the Middle Tier.
const checkpoint=(()=>{
  const g=new THREE.Group();g.position.set(4.8,0,8.4);world.add(g);
  box(g,0,1.25,0,1.7,2.5,1.3,mats.dark);box(g,0,2.18,-.68,.86,.5,.06,mats.glass,false);box(g,0,2.18,-.72,.7,.3,.02,mats.neon,false);
  box(g,1.2,.45,0,2.4,.12,.12,mats.rust,true);box(g,2.35,.85,0,.12,.8,.12,mats.orange,true);
  sphere(g,0,2.65,0,.09,mats.orange);
  const label=makeLabel('MERIDIAN CHECK','#e8ddb5');label.position.set(0,3.3,0);label.userData.labelType='station';g.add(label);
  const obj={id:'checkpoint',name:'MERIDIAN CHECK',x:4.8,z:8.4,type:'checkpoint',group:g,interactRange:4.6};entities.push(obj);return obj;
})();
// Spire access marker outside its south door.
const spireDoor=(()=>{
  const g=new THREE.Group();g.position.set(28,0,-41.5);world.add(g);
  for(const sx of [-1.7,1.7]){cylinder(g,sx,1.2,0,.11,.15,2.4,mats.gold,8);sphere(g,sx,2.46,0,.13,mats.lit)}
  box(g,0,2.55,0,3.6,.12,.12,mats.gold,false);
  const label=makeLabel('SPIRE ACCESS','#e9d79a');label.position.set(0,3.3,0);label.userData.labelType='station';g.add(label);
  const obj={id:'spireDoor',name:'SPIRE ACCESS',x:28,z:-41.5,type:'spireDoor',group:g,interactRange:4.4};entities.push(obj);return obj;
})();

// ----- People of the three tiers -----
function makeNpc(o){
  const rig=buildHuman(o);
  const g=new THREE.Group();g.position.set(o.x,0,o.z);g.add(rig.root);world.add(g);
  if(o.pose==='slumped'){rig.body.rotation.z=.28;rig.body.position.y=-.12;rig.root.rotation.z=.06}
  if(o.pose==='lying'){rig.root.rotation.z=Math.PI/2.15;rig.root.position.set(.55,.16,0);g.rotation.y=o.yaw??-.5}
  else g.rotation.y=o.yaw??(rand()*Math.PI*2);
  const label=makeLabel(o.name,o.accent||'#d4ef6a');
  label.position.set(o.pose==='lying'?.9:0,o.pose==='lying'?1.2:2.45,0);label.scale.set(3.1,.78,1);label.userData.labelType='npc';g.add(label);
  const obj={id:o.id,name:o.name,x:o.x,z:o.z,type:'npc',role:o.role,lines:o.lines.slice(),group:g,rig,pose:o.pose||'stand',talkCount:0,talkClock:0,idlePhase:rand()*8,homeYaw:g.rotation.y,active:false,interactRange:3.6};
  entities.push(obj);return obj;
}
makeNpc({id:'npc-mara',name:'MARA',x:-31,z:17.4,role:'ARCHIVE KEEPER',skin:'#b98f6e',hair:'#b8b0a2',hairStyle:'bun',outfit:'coat',cloth:'#7d6653',eyes:'#5c4a3a',accent:'#ffb37e',accessory:'scarf',lines:[
  'The archive used to smell of rain and ticket ink. Now it remembers only the people who never came back.',
  'The pass is behind the desk. The terminal wants the old ration order: middle shelf, low shelf, hush.',
  'The lower city learned to speak in sequences. It was the only language the scanners never bothered to learn.']});
makeNpc({id:'npc-pell',name:'PELL',x:33.4,z:6.15,role:'SIGNAL ENGINEER',skin:'#b78966',hair:'#40342c',hairStyle:'crop',outfit:'uniform',cloth:'#53635f',eyes:'#5c4433',accent:'#9fe4d4',accessory:'bandage',pose:'slumped',lines:[
  'I ran the eastern line until the scanners started counting us like inventory.',
  'The Signal House is middle-tier property now. Their relay wants three promises, not three tones.',
  'Clean street, locked door, quiet voice. Number them in order and the current moves north.']});
makeNpc({id:'npc-sable',name:'SABLE',x:-13,z:25.2,role:'DISPLACED',skin:'#a87d5f',hair:'#3a302b',hairStyle:'long',outfit:'rags',cloth:'#665f50',eyes:'#4b3a2e',accent:'#d4ef6a',pose:'slumped',lines:[
  'They said the shelters were temporary. That was eleven winters ago.',
  'The middle tier gets clean streets. We get the rain that runs off them.',
  'Look for the archive. The poor keep their history in the only building the city forgot to watch.']});
makeNpc({id:'npc-ren',name:'REN',x:15.6,z:-19.8,role:'INJURED COURIER',skin:'#c09472',hair:'#26201d',hairStyle:'short',outfit:'jacket',cloth:'#5d5a52',eyes:'#3f5f55',accent:'#ff906c',pose:'slumped',lines:[
  'A patrol clipped me crossing into the middle tier. They apologised. Then they billed me for the drone.',
  'Relay 01 still answers if you give it the low quarter’s old call: low, high, hush.',
  'The gate is not a door. It is a receipt. You have to prove you are worth opening.']});
makeNpc({id:'npc-noma',name:'NOMA',x:7.4,z:-56.4,role:'NEARLY GONE',skin:'#9c7458',hair:'#2e2724',hairStyle:'long',outfit:'rags',cloth:'#4b514b',eyes:'#4d3a2d',accent:'#ff906c',pose:'lying',lines:[
  'I can see the green from here. Just a sliver over the wall.',
  'The rich built their spire so high they cannot see us anymore. That was the point.',
  'Go. Tell the river I remember it.']});
makeNpc({id:'npc-kesh',name:'KESH',x:6.5,z:42.5,role:'SCAVENGER',skin:'#b88a63',hair:'#1f1c1a',hairStyle:'mohawk',outfit:'rags',cloth:'#6d6a52',eyes:'#6b5233',accent:'#e7c479',lines:[
  'Trade? Bent spoon, two buttons, a story. The story is the only thing that appreciates.',
  'Birds still eat from the bins. That is the last honest economy in this city.',
  'The checkpoint guards only look at your pass. They never look at your face.']});
makeNpc({id:'npc-ori',name:'ORI',x:-49,z:21.5,role:'MARKET CLERK',skin:'#c69b78',hair:'#6b4f38',hairStyle:'ponytail',outfit:'apron',cloth:'#5a7160',eyes:'#47604f',accent:'#bfe8a2',lines:[
  'The shelves are never full. We write shortages down and call them forecasts.',
  'Middle tier orders the same food we do. Ours just arrives without the label.',
  'If you are heading north, take something that smells like home. The checkpoint hates that.']});
makeNpc({id:'npc-voss',name:'VOSS',x:-47,z:55,role:'DISGRACED OFFICER',skin:'#b58c6a',hair:'#6f6a60',hairStyle:'bald',outfit:'uniform',cloth:'#4b5c62',eyes:'#3f4f52',accent:'#9dc8d8',accessory:'cap',lines:[
  'I wore the badge until it got heavier than the gun.',
  'The Meridian Check wants a completed low-quarter signal. Then it opens for exactly one person.',
  'Files in back are copied by hand. No one gives the orders anymore. We just keep obeying the last ones.']});
makeNpc({id:'npc-iya',name:'IYA',x:48,z:30,role:'POST RUNNER',skin:'#b98562',hair:'#3a2c24',hairStyle:'bun',outfit:'jacket',cloth:'#74684f',eyes:'#4f3d2b',accent:'#e3c77d',accessory:'cap',lines:[
  'Letters are the last objects that move without permission.',
  'Everything above the checkpoint is sorted twice. Once for delivery. Once for reading.',
  'The dead-letter bin is the only honest archive in the city.']});
makeNpc({id:'npc-dara',name:'DARA',x:-15,z:18.5,role:'CAFE WORKER',skin:'#c08a66',hair:'#4a2f23',hairStyle:'ponytail',outfit:'apron',cloth:'#7a6353',eyes:'#5c3f2a',accent:'#ff9b76',lines:[
  'Coffee is burnt, water is rationed, and the queue is still out the door.',
  'Middle-tier people tip in promises. I keep a jar.',
  'You look like you are walking somewhere with a reason. Take the alley, not the check.']});
makeNpc({id:'npc-joan',name:'JOAN',x:55,z:56,role:'HOUSE RESIDENT',skin:'#bb9070',hair:'#8b8578',hairStyle:'bun',outfit:'dress',cloth:'#78634f',eyes:'#5d4b39',accent:'#ffc08a',lines:[
  'This room was warm once. I remember because the bed stopped creaking.',
  'The Spire sends down its old furniture. We call it supply. They call it charity.',
  'Do not stay after dark. The patrols sleep, but the machines do not.']});
makeNpc({id:'npc-tamsin',name:'TAMSIN',x:12,z:6.5,role:'MIDDLE-TIER COMMUTER',skin:'#cfa385',hair:'#2b2523',hairStyle:'short',outfit:'suit',cloth:'#5b635e',eyes:'#3f5a63',accent:'#d9d0a8',accessory:'glasses',lines:[
  'I work eight hours for a view of the Spire. It is very efficient. I can see exactly where I am not allowed.',
  'The middle tier is comfortable. That is the trick. Comfort is a fence you do not notice.',
  'The Spire routes power to the outer rings. Keeps the core dark. Keeps us grateful.']});
makeNpc({id:'npc-hale',name:'HALE',x:-12,z:2,role:'TIER BROKER',skin:'#b48a6b',hair:'#5a3f2c',hairStyle:'short',outfit:'suit',cloth:'#6a6350',eyes:'#4b4a3c',accent:'#e8ddb5',accessory:'glasses',lines:[
  'The middle tier sells the illusion of arrival. Most of us are still paying for the elevator.',
  'There is a ledger in the Signal House. It connects every tier’s price to the same quiet number.',
  'A pass is just a receipt that learned to walk. Do not let them see you limping.']});
makeNpc({id:'npc-seraphine',name:'SERAPHINE',x:32,z:-50,role:'SPIRE DIRECTOR',skin:'#d0a586',hair:'#e6dfce',hairStyle:'long',outfit:'dress',cloth:'#2f3b3e',eyes:'#7b6a45',accent:'#e2c477',lines:[
  'From up here the lower city looks like weather. Something to be managed.',
  'The relay is a private circuit. Outer rings lit, inner ring dark. The dark is where we keep the cost.',
  'The gate was never locked for us. It was locked for the version of us that might come back.']});
makeNpc({id:'npc-callum',name:'CALLUM',x:22,z:-46,role:'SPIRE SECURITY',skin:'#8f6a4f',hair:'#1b1b1c',hairStyle:'short',outfit:'uniform',cloth:'#3b474b',eyes:'#5a5f4a',accent:'#e9d79a',accessory:'cap',lines:[
  'I keep the lobby quiet so the people above can hear themselves think.',
  'Three relays: one for each tier. The gate counts them like a debt.',
  'You have a pass. That means someone below still believes in paperwork.']});
makeNpc({id:'npc-aurel',name:'AUREL',x:26,z:-49,role:'SPIRE HEIR',skin:'#caa183',hair:'#2b2624',hairStyle:'spiky',outfit:'suit',cloth:'#303c40',eyes:'#6e6a50',accent:'#e2c477',lines:[
  'My father says the city is a machine for turning fear into rent.',
  'I do not know how to leave. They never taught us the way out, only the way up.',
  'If you open the gate, take someone with you who has never seen the river.']});
makeNpc({id:'npc-esme',name:'ESME',x:33,z:-44.6,role:'SPIRE GUEST',skin:'#c99b7c',hair:'#3d2b25',hairStyle:'long',outfit:'dress',cloth:'#5d4a52',eyes:'#624f42',accent:'#f0c987',lines:[
  'The chandelier is recycled. So is the charity.',
  'I heard the gate opens for anyone with a pass. Anyone. That is what frightens them.',
  'They keep the core dark up here so no one can see how much it costs to shine.']});

// ----- Animals: birds that peck and flee, cats that wander and accept affection -----
const birds=[];
function makeBird(x,z,color='#262e32',accent='#39454a'){
  const g=new THREE.Group();g.position.set(x,0,z);world.add(g);
  const bodyM=toon(color),wingM=toon(accent),bellyM=toon('#8d9a9a'),beakM=toon('#e0a23e'),legM=toon('#b8762f'),white=toon('#f7f2e6'),black=toon('#101416');
  const body=new THREE.Mesh(eyeGeo,bodyM);body.scale.set(.22,.2,.32);body.position.y=.5;g.add(body);
  const belly=new THREE.Mesh(eyeGeo,bellyM);belly.scale.set(.16,.15,.2);belly.position.set(0,.45,.14);g.add(belly);
  const neck=new THREE.Mesh(new THREE.CylinderGeometry(.085,.115,.2,10),bodyM);neck.position.set(0,.675,.15);neck.rotation.x=-.22;g.add(neck);
  const tail=new THREE.Group();tail.position.set(0,.55,-.3);tail.rotation.x=.25;g.add(tail);
  for(const [i,ry] of [[-1,.18],[0,0],[1,-.18]]){const f=new THREE.Mesh(eyeGeo,wingM);f.scale.set(.05,.018,.18);f.position.set(i*.055,0,-.08);f.rotation.y=ry;tail.add(f)}
  const head=new THREE.Group();head.position.set(0,.8,.22);g.add(head);
  const skull=new THREE.Mesh(eyeGeo,bodyM);skull.scale.set(.17,.165,.165);head.add(skull);
  const face=new THREE.Mesh(eyeGeo,bellyM);face.scale.set(.125,.11,.055);face.position.set(0,.005,.14);head.add(face);
  for(const side of [-1,1]){
    const w=new THREE.Mesh(eyeGeo,white);w.position.set(side*.076,.045,.148);w.scale.set(.05,.055,.03);head.add(w);
    const p=new THREE.Mesh(eyeGeo,black);p.position.set(side*.076,.045,.174);p.scale.set(.023,.031,.011);head.add(p);
    const hl=new THREE.Mesh(eyeGeo,white);hl.position.set(side*.085,.062,.183);hl.scale.set(.007,.008,.004);head.add(hl);
  }
  const beak=new THREE.Mesh(coneGeo,beakM);beak.scale.set(.075,.2,.075);beak.rotation.x=Math.PI/2;beak.position.set(0,-.03,.25);beak.castShadow=true;head.add(beak);
  const beakLow=new THREE.Mesh(coneGeo,toon('#b87828'));beakLow.scale.set(.06,.13,.04);beakLow.rotation.x=Math.PI/2;beakLow.position.set(0,-.075,.22);head.add(beakLow);
  for(const side of [-1,1]){
    cylinder(g,side*.075,.17,.02,.017,.022,.34,legM,5);
    box(g,side*.075,.03,.09,.1,.02,.13,legM,false);
  }
  const wings=[];
  for(const side of [-1,1]){
    const pivot=new THREE.Group();pivot.position.set(side*.2,.58,-.02);pivot.rotation.z=side*.08;g.add(pivot);
    const wing=new THREE.Mesh(eyeGeo,wingM);wing.scale.set(.05,.14,.27);wing.position.set(0,-.06,-.05);pivot.add(wing);
    for(let i=0;i<3;i++){const feather=new THREE.Mesh(eyeGeo,wingM);feather.scale.set(.04,.022,.1);feather.position.set(0,-.17,-.15-i*.06);pivot.add(feather)}
    wings.push({pivot,side});
  }
  g.traverse(o=>{if(o.isMesh)o.castShadow=true});
  g.scale.setScalar(.72);
  const a={group:g,head,wings,tail,state:'ground',home:{x,z},phase:rand()*6,heading:rand()*6.28,peck:0,walkT:rand()*3,flyT:0,vel:new THREE.Vector3(),x,z};
  birds.push(a);return a;
}
makeBird(7,19.7);makeBird(10.5,22.3);makeBird(-12,12.9);makeBird(-6.4,49.2);makeBird(21,15.8);makeBird(44,-9.1);makeBird(-14,39.1);
function updateBirds(dt,t){
  for(const a of birds){
    const dx=player.position.x-a.group.position.x,dz=player.position.z-a.group.position.z,dist=Math.hypot(dx,dz);
    if(a.state==='ground'){
      if(dist<4.8&&!gameEnded){
        a.state='fly';a.flyT=2.6;
        const inv=1/Math.max(.001,dist);a.vel.set(dx*inv*5.2,3.9+rand()*1.4,dz*inv*5.2);
        if(dist<.4)a.vel.set(rand()*4-2,4,rand()*4-2);
        continue;
      }
      a.walkT-=dt;
      if(a.walkT<=0){a.walkT=1.6+rand()*3.2;a.heading+=(rand()-.5)*2.4;a.peck=rand()>.45?1.8:0}
      const sp=a.peck>0?.05:.38;
      const nx=a.group.position.x+Math.sin(a.heading)*sp*dt,nz=a.group.position.z+Math.cos(a.heading)*sp*dt;
      if(Math.hypot(nx-a.home.x,nz-a.home.z)<2.6&&!collidesAt(nx,nz,.24)){a.group.position.x=nx;a.group.position.z=nz}
      else a.heading+=1.7;
      a.group.rotation.y=a.heading;
      if(a.peck>0){a.peck-=dt;a.head.rotation.x=Math.sin(t*8+a.phase)*.06+Math.max(0,Math.sin(t*3.4+a.phase))*1.05;a.group.position.y=-Math.abs(Math.sin(t*7+a.phase))*.015}
      else{a.head.rotation.x*=.85;a.group.position.y=Math.abs(Math.sin(t*9+a.phase))*.025}
      for(const w of a.wings)w.pivot.rotation.z=w.side*(.12+Math.sin(t*2+a.phase)*.03);
      a.group.rotation.x=0;
    }else{
      a.flyT-=dt;
      a.group.position.x+=a.vel.x*dt;a.group.position.z+=a.vel.z*dt;
      a.vel.y-=2.5*dt;a.group.position.y=Math.max(0,a.group.position.y+a.vel.y*dt);
      const flap=Math.sin(t*24+a.phase);
      for(const w of a.wings)w.pivot.rotation.z=w.side*(.45+flap*.95);
      a.group.rotation.y=Math.atan2(a.vel.x,a.vel.z);a.group.rotation.x=-.12;
      a.head.rotation.x=-.2;
      if(a.flyT<=0){
        let best=trashSpots[Math.floor(rand()*trashSpots.length)],bestD=-1;
        for(const s of trashSpots){const d=Math.hypot(s.x-player.position.x,s.z-player.position.z);if(d>bestD){bestD=d;best=s}}
        a.home={x:best.x+rand()*2-1,z:best.z+rand()*2-1};
        a.group.position.set(a.home.x,.1,a.home.z);a.group.rotation.x=0;a.group.position.y=0;
        a.state='ground';a.vel.set(0,0,0);a.walkT=1+rand()*2;a.peck=2;
      }
    }
  }
}
const cats=[];
function makeCat(def,index){
  const g=new THREE.Group();g.position.set(def.x,0,def.z);world.add(g);
  const bodyM=toon(def.color),stripeM=toon(def.stripe),whiteM=toon('#e6dcc4'),pinkM=toon('#c98d85'),darkM=toon('#181d1e'),eyeM=toon(def.eyes||'#b8d46a');
  const body=new THREE.Mesh(eyeGeo,bodyM);body.scale.set(.22,.2,.38);body.position.set(0,.4,-.02);g.add(body);
  const chest=new THREE.Mesh(eyeGeo,whiteM);chest.scale.set(.13,.15,.14);chest.position.set(0,.4,.27);g.add(chest);
  for(let i=0;i<3;i++)box(g,0,.585,-.1+i*.14,.29,.02,.05,stripeM,false);
  const head=new THREE.Group();head.position.set(0,.65,.33);g.add(head);
  const skull=new THREE.Mesh(eyeGeo,bodyM);skull.scale.set(.17,.16,.155);head.add(skull);
  const muzzle=new THREE.Mesh(eyeGeo,whiteM);muzzle.scale.set(.095,.07,.085);muzzle.position.set(0,-.05,.13);head.add(muzzle);
  for(const side of [-1,1]){
    const ear=cone(head,side*.09,.15,-.005,.052,.14,bodyM,0,side*.14);ear.scale.z=.55;
    const inner=cone(head,side*.09,.145,.02,.026,.08,pinkM,0,side*.14);inner.scale.z=.4;
    const w=new THREE.Mesh(eyeGeo,whiteM);w.position.set(side*.072,.038,.14);w.scale.set(.042,.048,.022);head.add(w);
    const ir=new THREE.Mesh(eyeGeo,eyeM);ir.position.set(side*.072,.033,.157);ir.scale.set(.025,.035,.012);head.add(ir);
    const p=new THREE.Mesh(eyeGeo,darkM);p.position.set(side*.072,.033,.166);p.scale.set(.009,.025,.006);head.add(p);
    const hl=new THREE.Mesh(eyeGeo,whiteM);hl.position.set(side*.08,.048,.169);hl.scale.set(.007,.008,.004);head.add(hl);
    box(head,side*.072,.082,.158,.078,.01,.01,stripeM,false);
  }
  const nose=new THREE.Mesh(eyeGeo,pinkM);nose.scale.set(.022,.018,.012);nose.position.set(0,-.03,.212);head.add(nose);
  for(const side of [-1,1]){box(head,side*.145,-.038,.155,.2,.006,.006,whiteM,false)}
  const legs=[];
  for(const lx of [-.135,.135])for(const lz of [-.17,.19]){
    const hip=new THREE.Group();hip.position.set(lx,.32,lz);g.add(hip);
    const leg=new THREE.Mesh(capsuleGeoMake(.037,.15),bodyM);leg.position.y=-.13;hip.add(leg);
    sphere(hip,0,-.24,.02,.044,whiteM);legs.push(hip);
  }
  const tail=new THREE.Group();tail.position.set(0,.47,-.38);g.add(tail);
  const t1=new THREE.Mesh(capsuleGeoMake(.036,.15),bodyM);t1.position.set(0,.02,-.08);t1.rotation.x=-.62;tail.add(t1);
  const t2=new THREE.Mesh(capsuleGeoMake(.029,.12),bodyM);t2.position.set(0,.15,-.16);t2.rotation.x=-.3;tail.add(t2);
  const tip=new THREE.Mesh(eyeGeo,stripeM);tip.scale.set(.038,.034,.048);tip.position.set(0,.23,-.18);tail.add(tip);
  g.scale.setScalar(.84);
  g.traverse(o=>{if(o.isMesh)o.castShadow=true});
  const entity={id:'cat-'+index,name:def.name,type:'cat',x:def.x,z:def.z,group:g,interactRange:2.9,cat:null};
  const cat={group:g,head,tail,legs,entity,x:def.x,z:def.z,home:{x:def.x,z:def.z},target:{x:def.x,z:def.z},state:'sit',timer:1+rand()*3,petTimer:0,petCount:0,phase:rand()*8,speed:.55+rand()*.2};
  entity.cat=cat;entities.push(entity);cats.push(cat);return cat;
}
makeCat({x:-18,z:12,color:'#b9783f',stripe:'#7e4b26',eyes:'#b9d66b',name:'GINGER'},0);
makeCat({x:42,z:-8,color:'#3a3d40',stripe:'#25282a',eyes:'#d7c45e',name:'SOOT'},1);
makeCat({x:-44,z:38,color:'#d8c7a4',stripe:'#a99672',eyes:'#8fc7a8',name:'MILK'},2);
makeCat({x:12,z:-34,color:'#6c7a7e',stripe:'#4c585b',eyes:'#c4d074',name:'FOG'},3);
makeCat({x:-33,z:16,color:'#8a6f58',stripe:'#5c4635',eyes:'#b9cf77',name:'PATCH'},4);
function updateCats(dt,t){
  for(const c of cats){
    const p=c.group.position;c.entity.x=p.x;c.entity.z=p.z;
    const dx=player.position.x-p.x,dz=player.position.z-p.z,dist=Math.hypot(dx,dz);
    if(c.petTimer>0){
      c.petTimer-=dt;c.state='petted';
      c.head.rotation.y=Math.sin(t*5+c.phase)*.18;
      c.head.rotation.x=-.12;c.tail.rotation.y=Math.sin(t*9+c.phase)*.7;c.tail.rotation.z=.5;
      c.group.position.y=.02+Math.sin(t*16+c.phase)*.012;
      c.group.rotation.y=Math.atan2(dx,dz);
      continue;
    }
    if(c.state==='petted'){c.state='sit';c.timer=1.5;c.tail.rotation.z=0}
    if(dist<2.1&&c.state!=='sit'){c.state='sit';c.timer=.8;c.group.rotation.y=Math.atan2(dx,dz)}
    if(c.state==='sit'){
      c.timer-=dt;c.group.position.y=.012+Math.sin(t*2+c.phase)*.008;
      c.head.rotation.y=Math.sin(t*.8+c.phase)*.35;c.head.rotation.x=Math.sin(t*1.3+c.phase)*.05;
      c.tail.rotation.y=Math.sin(t*2.2+c.phase)*.45;c.tail.rotation.z=.18;
      for(const leg of c.legs)leg.rotation.x*=.85;
      if(c.timer<=0){c.state='wander';c.timer=2.5+rand()*3;chooseCatTarget(c)}
    }else if(c.state==='groom'){
      c.timer-=dt;c.head.rotation.x=.5;c.head.rotation.y=Math.sin(t*6+c.phase)*.15;
      c.legs[0].rotation.x=-.9;c.tail.rotation.y=Math.sin(t*3+c.phase)*.3;
      if(c.timer<=0){c.state='sit';c.timer=1.5+rand()*2}
    }else if(c.state==='wander'){
      const tx=c.target.x-p.x,tz=c.target.z-p.z,td=Math.hypot(tx,tz);
      if(td<.35||c.timer<=0){c.state=rand()>.3?'sit':'groom';c.timer=1.5+rand()*3;c.group.position.y=0}
      else{
        const nx=p.x+tx/td*c.speed*dt,nz=p.z+tz/td*c.speed*dt;
        if(collidesAt(nx,nz,.32)){chooseCatTarget(c);c.timer=1.4}
        else{p.x=nx;p.z=nz;c.group.rotation.y=Math.atan2(tx,tz);}
        const swing=Math.sin(t*8+c.phase);c.legs[0].rotation.x=swing*.5;c.legs[1].rotation.x=-swing*.5;c.legs[2].rotation.x=-swing*.5;c.legs[3].rotation.x=swing*.5;
        c.group.position.y=Math.abs(swing)*.02;
        c.tail.rotation.y=Math.sin(t*3+c.phase)*.35;c.tail.rotation.z=.15;
        c.head.rotation.x=0;c.head.rotation.y=0;
      }
      c.timer-=dt;
      if(Math.hypot(p.x-c.home.x,p.z-c.home.z)>11)chooseCatTarget(c,true);
    }
  }
}
function chooseCatTarget(c,home=false){
  for(let i=0;i<12;i++){
    const a=rand()*Math.PI*2,r=home?rand()*3:2+rand()*5;
    const tx=(home?c.home.x:c.group.position.x)+Math.sin(a)*r,tz=(home?c.home.z:c.group.position.z)+Math.cos(a)*r;
    if(Math.abs(tx)<8||Math.abs(tz)<8)continue;
    if(Math.abs(tx)>62||Math.abs(tz)>62)continue;
    if(!collidesAt(tx,tz,.4)){c.target.x=tx;c.target.z=tz;return}
  }
  c.target.x=c.home.x;c.target.z=c.home.z;
}
// Optional memory fragments.
const memories=[[-43,-7],[-13,48],[41,-41]].map((p,i)=>{const g=new THREE.Group();g.position.set(p[0],.85,p[1]);world.add(g);const core=new THREE.Mesh(new THREE.OctahedronGeometry(.42,0),mats.lit);core.castShadow=true;g.add(core);const halo=new THREE.Mesh(new THREE.TorusGeometry(.7,.025,5,30),mats.neon);halo.rotation.x=Math.PI/2;g.add(halo);return {group:g,got:false,index:i}});
// Planted shrubs, kept out of roads and interiors.
function insideInterior(x,z,pad=1.2){return interiors.some(i=>Math.abs(x-i.x)<i.w/2+pad&&Math.abs(z-i.z)<i.d/2+pad)}
function interiorAt(x,z,pad=0){return interiors.find(i=>Math.abs(x-i.x)<i.w/2+pad&&Math.abs(z-i.z)<i.d/2+pad)}
for(let i=0;i<80;i++){let x=-62+rand()*124,z=-62+rand()*124;if(Math.abs(x)<11||Math.abs(z)<11||z<-64)continue;if(Math.abs(x)>62||Math.abs(z)>62)continue;if(insideInterior(x,z))continue;const shrub=new THREE.Group();shrub.position.set(x,0,z);world.add(shrub);cylinder(shrub,0,.24,0,.1,.15,.48,mats.rust,6);sphere(shrub,.04,.66,0,.44,rand()>.5?mats.green:mats.leaf)}

// ----- Chapters, objectives and interface -----
const chapters=[
  {name:'THE LOW QUARTER',tag:'Where the city keeps what it discards.'},
  {name:'THE MIDDLE TIER',tag:'Comfort is a controlled substance.'},
  {name:'AURELIS HEIGHTS',tag:'The view is paid for by everyone below.'}
];
const objectives=[
  {title:'Find the Archive',desc:'The old transit archive has a lit doorway on its east side. Step inside and find the terminal.',text:'Enter the east door',target:archive,chapter:1},
  {title:'Recover the Pass',desc:'A transit pass is the only thing the perimeter scanners still recognize. The keeper may know where it is.',text:'Take the pass',target:archive,chapter:1},
  {title:'Wake Relay 01',desc:'The low quarter keeps its signal in the southern plaza. Bring the first relay back online.',text:'Activate Relay 01',target:relay1,chapter:1},
  {title:'Cross the Meridian',desc:'Relay 01 has opened the lower channel. Present your pass at the Meridian Check and enter the middle tier.',text:'Present the pass',target:checkpoint,chapter:2},
  {title:'Tune Relay 02',desc:'The Signal House monitors the middle tier. Its relay answers to three numbered promises, not tones.',text:'Calibrate Relay 02',target:relay2,chapter:2},
  {title:'Enter the Spire',desc:'Relay 02 has lifted the residential lock. The Aurelis Spire controls the last circuit above the city.',text:'Enter the Spire',target:spireDoor,chapter:3},
  {title:'Route Relay 03',desc:'The Spire’s private circuit keeps the outer rings lit and the core dark. Restore power to the gate.',text:'Route Relay 03',target:relay3,chapter:3},
  {title:'Find the Way Out',desc:'The gate has the current it needs. Walk beyond the city wall and see what waits.',text:'Reach the gate',target:exit,chapter:3},
  {title:'The world is yours',desc:'You made it outside. There is no map for what comes next.',text:'Keep walking',target:null,chapter:3}
];
let objectiveIndex=0,pass=false,solved=new Set(),fragments=0,nearby=null,puzzleEntity=null,tones=[-1,-1,-1],dials=[1,1,1],circuits=[0,0,0,0],isStarted=false,gameEnded=false,dialogueOpen=false,dialogueNpc=null,dialogueIndex=0,currentChapter=0,chapterTimer=null;
const $=s=>document.querySelector(s);
function showChapter(n){
  const c=chapters[n-1];const b=$('#chapter-banner');if(!b)return;
  b.querySelector('small').textContent=`CHAPTER 0${n}`;b.querySelector('strong').textContent=c.name;b.querySelector('span').textContent=c.tag;
  b.classList.add('show');clearTimeout(chapterTimer);chapterTimer=setTimeout(()=>b.classList.remove('show'),3600);
}
function setObjective(i){
  objectiveIndex=Math.min(i,objectives.length-1);const o=objectives[objectiveIndex];
  const n=o.chapter||currentChapter||1;
  $('#mission-title').textContent=o.title;$('#mission-desc').textContent=o.desc;$('#objective-text').textContent=o.text;
  $('#step-count').textContent=`${String(Math.min(i+1,8)).padStart(2,'0')} / 08`;
  $('#mission-progress').style.width=`${Math.min(100,(i/8)*100)}%`;
  $('#chapter-label').textContent=`CHAPTER 0${n} · ${chapters[n-1].name}`;
  if(isStarted&&n!==currentChapter&&currentChapter!==0)showChapter(n);
  currentChapter=n;
}
setObjective(0);
const missionCard=$('#mission-card');
function setMissionCollapsed(collapsed){missionCard.classList.toggle('collapsed',collapsed);$('#mission-toggle').textContent=collapsed?'＋':'−';$('#mission-toggle').setAttribute('aria-expanded',String(!collapsed));$('#mission-toggle').setAttribute('aria-label',collapsed?'Expand mission directive':'Minimize mission directive');$('#mission-toggle').title=collapsed?'Expand directive (M)':'Minimize directive (M)'}
$('#mission-toggle').onclick=()=>setMissionCollapsed(!missionCard.classList.contains('collapsed'));
function showToast(text){$('#toast-text').textContent=text;$('#toast').classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>$('#toast').classList.remove('show'),3000)}
let subtitleTimer;
function say(text){const e=$('#subtitle');e.textContent=text;e.classList.add('show');clearTimeout(subtitleTimer);subtitleTimer=setTimeout(()=>e.classList.remove('show'),5200)}
function renderDialogue(){if(!dialogueNpc)return;$('#dialogue-role').textContent=dialogueNpc.role;$('#dialogue-name').textContent=dialogueNpc.name;$('#dialogue-text').textContent=dialogueNpc.lines[dialogueIndex];$('#dialogue-progress').textContent=`${String(dialogueIndex+1).padStart(2,'0')} / ${String(dialogueNpc.lines.length).padStart(2,'0')}`;$('#dialogue-next span').textContent=dialogueIndex===dialogueNpc.lines.length-1?'LEAVE':'KEEP LISTENING'}
function setNpcLabelVisible(npc,visible){if(!npc)return;for(const c of npc.group.children)if(c.isSprite)c.visible=visible}
function openDialogue(npc){
  dialogueOpen=true;dialogueNpc=npc;dialogueIndex=0;npc.talkCount=(npc.talkCount||0)+1;npc.talkClock=0;
  npc.group.rotation.y=Math.atan2(player.position.x-npc.x,player.position.z-npc.z);
  setNpcLabelVisible(npc,false);$('#interact-hint').classList.remove('visible');$('#dialogue-screen').classList.remove('hidden');document.exitPointerLock?.();renderDialogue();
}
function closeDialogue(){setNpcLabelVisible(dialogueNpc,true);dialogueOpen=false;dialogueNpc=null;dialogueIndex=0;$('#dialogue-screen').classList.add('hidden')}
function advanceDialogue(){if(!dialogueOpen)return;if(dialogueIndex<dialogueNpc.lines.length-1){dialogueIndex++;renderDialogue()}else closeDialogue()}
$('#dialogue-next').onclick=advanceDialogue;$('#dialogue-close').onclick=closeDialogue;
function updateObjectiveDistance(){
  const o=objectives[objectiveIndex],target=o.target;
  if(!target){$('#objective-distance').textContent='SAFE';$('#mission-arrow').style.transform='rotate(0deg)';return}
  const dx=target.x-player.position.x,dz=target.z-player.position.z,d=Math.hypot(dx,dz);
  $('#objective-distance').textContent=d<10?'NEAR':`${Math.round(d)} M`;
  const ahead=dx*(-Math.sin(yaw))+dz*(-Math.cos(yaw));const right=dx*Math.cos(yaw)+dz*(-Math.sin(yaw));
  $('#mission-arrow').style.transform=`rotate(${Math.atan2(right,ahead)*180/Math.PI}deg)`;
}
function setLocation(){
  let name='THE LOW QUARTER';
  const x=player.position.x,z=player.position.z;
  if(insideInterior(x,z,0))name=interiorNameAt(x,z);
  else if(z>10)name='THE LOW QUARTER';
  else if(z>-22)name='THE MERIDIAN TIER';
  else if(z>-63)name='AURELIS HEIGHTS';
  else name='PERIMETER GATE';
  $('#location-name').textContent=name;
}
function interiorNameAt(x,z){
  if(Math.abs(x+27)<11&&Math.abs(z-14)<8)return 'TRANSIT ARCHIVE';
  if(Math.abs(x-29)<11&&Math.abs(z-3)<8)return 'THE SIGNAL HOUSE';
  if(Math.abs(x+51)<10&&Math.abs(z-27)<9)return 'MARKET 09';
  if(Math.abs(x+51)<9.5&&Math.abs(z-52)<8.5)return 'CIVIC POLICE';
  if(Math.abs(x-51)<10&&Math.abs(z-27)<9)return 'POST OFFICE';
  if(Math.abs(x-51)<10&&Math.abs(z-52)<8.5)return 'HOUSE 18';
  if(Math.abs(x-28)<9.5&&Math.abs(z+52)<9)return 'AURELIS SPIRE';
  return 'THE LOW QUARTER';
}
// ----- Puzzles: tones, promises, and power routing -----
const toneNames=['LOW','MID','HIGH','HUSH'],toneIcons=['⌄','◇','△','≋'];
function openPuzzle(ent){
  puzzleEntity=ent;document.exitPointerLock?.();tones=[-1,-1,-1];dials=[1,1,1];circuits=[0,0,0,0];
  const body=$('#tone-row');body.innerHTML='';body.className='tone-row';
  $('#puzzle-title').textContent=ent.type==='archive'?'ARCHIVE TERMINAL':ent.puzzle==='tone'?'TUNE THE RELAY':ent.puzzle==='dial'?'CALIBRATE THE PROMISES':'ROUTE THE SPIRE';
  $('#puzzle-clue').textContent=ent.type==='archive'?'A scratched note is taped to the screen: “Pass phrase: MID → LOW → HUSH.”':ent.clue;
  if(ent.puzzle==='tone'){
    $('#puzzle-feedback').textContent='Choose a tone for each of the three slots.';
    for(let i=0;i<3;i++){const b=document.createElement('button');b.className='tone-button';b.dataset.slot=i;b.innerHTML='<b>＋</b><span>SLOT 0'+(i+1)+'</span>';b.onclick=()=>cycleTone(i);body.append(b)}
  }else if(ent.puzzle==='dial'){
    $('#puzzle-feedback').textContent='Each promise is numbered. Set all three dials.';
    const labels=['CLEAN STREET','LOCKED DOOR','QUIET VOICE'];
    for(let i=0;i<3;i++){const b=document.createElement('button');b.className='dial-button';b.dataset.slot=i;b.innerHTML='<b>0'+dials[i]+'</b><span>'+labels[i]+'</span>';b.onclick=()=>cycleDial(i);body.append(b)}
  }else{
    body.className='tone-row circuit';
    $('#puzzle-feedback').textContent='Toggle the four circuits until the pattern matches the clue.';
    const labels=['OUTER WEST','INNER WEST','CORE','OUTER EAST'];
    for(let i=0;i<4;i++){const b=document.createElement('button');b.className='switch-button';b.dataset.slot=i;b.innerHTML='<b>OFF</b><span>'+labels[i]+'</span>';b.onclick=()=>toggleCircuit(i);body.append(b)}
  }
  $('#puzzle-screen').classList.remove('hidden');
}
function cycleTone(i){tones[i]=(tones[i]+1)%4;const b=$(`#tone-row [data-slot="${i}"]`);b.classList.add('selected');b.innerHTML=`<b>${toneIcons[tones[i]]}</b><span>${toneNames[tones[i]]}</span>`}
function cycleDial(i){dials[i]=dials[i]%6+1;const b=$(`#tone-row [data-slot="${i}"]`);const labels=['CLEAN STREET','LOCKED DOOR','QUIET VOICE'];b.innerHTML=`<b>0${dials[i]}</b><span>${labels[i]}</span>`}
function toggleCircuit(i){circuits[i]=circuits[i]?0:1;const b=$(`#tone-row [data-slot="${i}"]`);const labels=['OUTER WEST','INNER WEST','CORE','OUTER EAST'];b.classList.toggle('on',!!circuits[i]);b.innerHTML=`<b>${circuits[i]?'ON':'OFF'}</b><span>${labels[i]}</span>`}
function closePuzzle(){$('#puzzle-screen').classList.add('hidden');puzzleEntity=null}
function submitPuzzle(){
  if(!puzzleEntity)return;const ent=puzzleEntity;let ok=false;
  if(ent.puzzle==='tone'){if(tones.includes(-1)){$('#puzzle-feedback').textContent='Every slot needs a tone.';return}ok=tones.every((v,i)=>v===ent.code[i])}
  else if(ent.puzzle==='dial'){ok=dials.every((v,i)=>v===ent.code[i])}
  else ok=circuits.every((v,i)=>v===ent.code[i]);
  if(!ok){$('#puzzle-feedback').textContent=ent.puzzle==='tone'?'No match. Listen to the clue and try again.':ent.puzzle==='dial'?'The dials reject the promise. Re-read the clue.':'The circuit trips. Check which ring should stay dark.';return}
  closePuzzle();ent.active=true;
  for(const m of ent.group.children)if(m.userData.orb)m.material=mats.lit;
  if(ent.type==='archive'){
    pass=true;setObjective(2);showToast('TRANSIT PASS RECOVERED');say(ent.lore);
  }else if(ent===relay1){
    solved.add(ent.id);setObjective(3);showToast('RELAY 01 // ONLINE');say(ent.lore+' The Meridian Check is listening.');
  }else if(ent===relay2){
    solved.add(ent.id);setObjective(5);showToast('RELAY 02 // ONLINE');say(ent.lore+' The residential lock above the city has released.');
  }else if(ent===relay3){
    solved.add(ent.id);setObjective(7);showToast('RELAY 03 // ONLINE');say(ent.lore+' The perimeter gate is drawing power again.');
  }
  updateObjectiveDistance();
}
$('#puzzle-submit').onclick=submitPuzzle;$('#puzzle-close').onclick=closePuzzle;
// ----- Cat petting -----
const heartTex=(()=>{const c=document.createElement('canvas');c.width=64;c.height=64;const x=c.getContext('2d');x.fillStyle='#ff9bb0';x.beginPath();x.moveTo(32,56);x.bezierCurveTo(6,38,8,16,22,14);x.bezierCurveTo(28,13,32,20,32,24);x.bezierCurveTo(32,20,36,13,42,14);x.bezierCurveTo(56,16,58,38,32,56);x.fill();return new THREE.CanvasTexture(c)})();
const petFx=[];
function petCat(cat){
  cat.petTimer=3.6;cat.petCount++;
  showToast(`${cat.entity.name} // PURRING`);
  const lines=['The cat leans into your hand. For a moment the city is small enough to hold.','A low purr answers. Somewhere above, a window closes.','The cat blinks slowly, then presses its head against your palm.','It rolls onto one shoulder and shows you its belly. You have been chosen.'];
  say(lines[(cat.petCount-1)%lines.length]);
  for(let i=0;i<7;i++){
    const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:heartTex,transparent:true,color:'#ffb3c0',depthWrite:false}));
    sp.position.set(cat.group.position.x+(rand()-.5)*.8,.9+rand()*.6,cat.group.position.z+(rand()-.5)*.8);sp.scale.set(.22,.22,1);scene.add(sp);
    petFx.push({sp,life:1,vy:.5+rand()*.5,phase:rand()*5});
  }
}
function updatePetFx(dt,t){for(let i=petFx.length-1;i>=0;i--){const f=petFx[i];f.life-=dt*.42;f.sp.position.y+=f.vy*dt;f.sp.position.x+=Math.sin(t*4+f.phase)*dt*.08;f.sp.material.opacity=Math.max(0,f.life);if(f.life<=0){scene.remove(f.sp);f.sp.material.dispose();petFx.splice(i,1)}}}
// ----- Conversations and interactions -----
function interact(){
  if(!nearby)return;const ent=nearby;
  if(ent.type==='npc'){openDialogue(ent);return}
  if(ent.type==='cat'){petCat(ent.cat);return}
  if(ent.type==='archive'){
    if(!pass)openPuzzle(ent);
    else{showToast('TRANSIT PASS: CHECKED');say('The archive gives way to the route outside. Keep following the signal.')}
    return;
  }
  if(ent.type==='relay'){
    if(!pass){showToast('ACCESS DENIED // FIND THE TRANSIT PASS');return}
    if(solved.has(ent.id)){showToast(`${ent.name} // SIGNAL STABLE`);return}
    openPuzzle(ent);return;
  }
  if(ent.type==='checkpoint'){
    if(!pass){showToast('MERIDIAN CHECK // PASS REQUIRED');say('The barrier wants a pass, and the pass wants a history you do not have yet.');return}
    if(solved.has('relay1')||objectiveIndex>=4){
      if(objectiveIndex===3){setObjective(4);showToast('MERIDIAN CHECK // OPEN');say('The barrier lifts for one. Behind it, the pavement is cleaner and the cameras are quieter.')}
      else showToast('MERIDIAN CHECK // PASS VERIFIED');
    }else{showToast('MERIDIAN CHECK // LOWER SIGNAL INCOMPLETE');say('The reader is dark. Wake Relay 01 in the low quarter first.')}
    return;
  }
  if(ent.type==='spireDoor'){
    if(objectiveIndex===5){setObjective(6);showToast('SPIRE ACCESS // GRANTED');say('Gold light, cold air, and a lobby that costs more than the street outside.');}
    else if(objectiveIndex>5)showToast('SPIRE ACCESS // OPEN');
    else{showToast('SPIRE ACCESS // RELAY 02 REQUIRED');say('The door reads your pass, then asks for the middle tier’s promise.')}
    return;
  }
  if(ent.type==='gate'){
    if(solved.size<3){showToast('GATE LOCKED // SIGNAL NETWORK INCOMPLETE');say('The terminal stays dark. Bring all three relays online first.');return}
    if(!pass){showToast('ACCESS DENIED // PASS REQUIRED');return}
    if(!gateBlocker.open){
      gateBlocker.open=true;gateLeft.position.x=-8.6;gateRight.position.x=8.6;
      showToast('PERIMETER ACCESS GRANTED');say('The gate is moving. Beyond it, the air looks different. Walk through.');setObjective(7);
    }else showToast('GATE // OPEN');
    return;
  }
}
function checkInteraction(){
  nearby=null;let best=999;
  for(const e of entities){
    const d=Math.hypot(player.position.x-e.x,player.position.z-e.z);
    if(d<(e.interactRange||4.2)&&d<best){best=d;nearby=e}
  }
  if(nearby===archive&&objectiveIndex===0)setObjective(1);
  $('#interact-hint').classList.toggle('visible',!!nearby&&!dialogueOpen);
  if(nearby){
    let text;
    if(nearby.type==='npc')text=`TALK TO ${nearby.name}`;
    else if(nearby.type==='cat')text=`PET ${nearby.name}`;
    else if(nearby.type==='archive')text=pass?'CHECK ARCHIVE':'ACCESS TERMINAL';
    else if(nearby.type==='gate')text='OPEN GATE';
    else if(nearby.type==='checkpoint')text='PRESENT PASS';
    else if(nearby.type==='spireDoor')text='ENTER SPIRE';
    else text=solved.has(nearby.id)?'CHECK RELAY':'TUNE RELAY';
    $('#interact-hint span:last-child').textContent=text;
  }
}
function collectMemories(){
  for(const m of memories){
    if(m.got)continue;
    if(player.position.distanceTo(m.group.position)<1.9){
      m.got=true;world.remove(m.group);fragments++;$('#fragment-count').textContent=`${fragments} / 3`;showToast(`MEMORY FRAGMENT ${fragments} / 3`);
      say(['“The river ran all the way to the sea.”','“I remember rain. Real rain.”','“There were birds over the rooftops.”'][m.index]);
    }
  }
}
function checkEnding(){
  if(objectiveIndex===7&&player.position.z<-78&&!gameEnded){
    gameEnded=true;$('#ending-screen').classList.remove('hidden');document.exitPointerLock?.();
  }
}

// ----- Input and camera -----
const keys={};let yaw=0,pitch=.24,run=false,pointerLocked=false;
document.addEventListener('keydown',e=>{
  keys[e.code]=true;
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();
  if(e.code==='KeyM'&&!e.repeat&&isStarted)setMissionCollapsed(!missionCard.classList.contains('collapsed'));
  if(e.code==='KeyE'&&!e.repeat){if(dialogueOpen)advanceDialogue();else if(isStarted&&$('#puzzle-screen').classList.contains('hidden'))interact()}
  if(e.code==='Escape'){if(dialogueOpen)closeDialogue();else if(!$('#puzzle-screen').classList.contains('hidden'))closePuzzle();else if(isStarted)document.exitPointerLock?.()}
});
document.addEventListener('keyup',e=>keys[e.code]=false);
canvas.addEventListener('click',()=>{if(isStarted&&!isMobile())canvas.requestPointerLock?.()});
document.addEventListener('pointerlockchange',()=>pointerLocked=document.pointerLockElement===canvas);
document.addEventListener('mousemove',e=>{if(pointerLocked){yaw-=e.movementX*.0024;pitch=THREE.MathUtils.clamp(pitch+e.movementY*.0017,-.02,.58)}});
function isMobile(){return matchMedia('(max-width: 700px)').matches||('ontouchstart'in window)}
if(isMobile())document.body.classList.add('mobile');
let touchLook=null;
$('#look-zone').addEventListener('touchstart',e=>{const t=e.changedTouches[0];touchLook={x:t.clientX,y:t.clientY};e.preventDefault()},{passive:false});
$('#look-zone').addEventListener('touchmove',e=>{if(!touchLook)return;const t=e.changedTouches[0];yaw-=(t.clientX-touchLook.x)*.007;pitch=THREE.MathUtils.clamp(pitch+(t.clientY-touchLook.y)*.003,-.02,.58);touchLook={x:t.clientX,y:t.clientY};e.preventDefault()},{passive:false});
$('#look-zone').addEventListener('touchend',()=>touchLook=null);
const touchKeys={};
document.querySelectorAll('[data-move]').forEach(b=>{const key={forward:'KeyW',back:'KeyS',left:'KeyA',right:'KeyD'}[b.dataset.move];const down=e=>{e.preventDefault();touchKeys[key]=true},up=e=>{e.preventDefault();touchKeys[key]=false};b.addEventListener('pointerdown',down);b.addEventListener('pointerup',up);b.addEventListener('pointerleave',up);b.addEventListener('pointercancel',up)});
$('#run-touch').addEventListener('pointerdown',e=>{e.preventDefault();touchKeys.ShiftLeft=true});
['pointerup','pointerleave','pointercancel'].forEach(ev=>$('#run-touch').addEventListener(ev,()=>touchKeys.ShiftLeft=false));
$('#interact-touch').addEventListener('pointerdown',e=>{e.preventDefault();if(dialogueOpen)advanceDialogue();else interact()});
$('#help-button').onclick=()=>{$('#help-screen').classList.remove('hidden');document.exitPointerLock?.()};
$('#help-close').onclick=()=>$('#help-screen').classList.add('hidden');
$('#resume-button').onclick=()=>$('#help-screen').classList.add('hidden');
$('#start-button').onclick=()=>{isStarted=true;$('#start-screen').classList.add('hidden');if(!isMobile())canvas.requestPointerLock?.();say('You wake in the Low Quarter. Find the Archive, and do not trust the clean streets above.');if(currentChapter===1)showChapter(1)};
$('#restart-button').onclick=()=>location.reload();
const mapPanel=$('#map-panel');
$('#map-toggle').onclick=()=>{const collapsed=mapPanel.classList.toggle('collapsed');$('#map-toggle').textContent=collapsed?'＋':'−';$('#map-toggle').setAttribute('aria-expanded',String(!collapsed));$('#map-toggle').setAttribute('aria-label',collapsed?'Expand map':'Minimize map');$('#map-toggle').title=collapsed?'Expand map':'Minimize map'};
// ----- Minimap -----
const map=$('#minimap'),mctx=map.getContext('2d');
const mapBlocks=colliders.filter(c=>!c.open&&((c.x2-c.x1)*(c.z2-c.z1))>60);
function drawMap(){
  const w=map.width,h=map.height,s=.7;
  const pos=(x,z)=>[w/2+x*s,h/2+z*s];
  mctx.clearRect(0,0,w,h);
  const bg=mctx.createLinearGradient(0,0,0,h);
  bg.addColorStop(0,'#c4c5b2');bg.addColorStop(.45,'#929382');bg.addColorStop(1,'#765846');
  mctx.fillStyle=bg;mctx.fillRect(0,0,w,h);
  // Roads.
  mctx.fillStyle='rgba(28,38,40,.72)';
  mctx.fillRect(w/2-6.5*s,0,13*s,h);mctx.fillRect(0,h/2-5.5*s,w,11*s);
  // Buildings.
  for(const c of mapBlocks){
    const x=c.x1*s+w/2,y=c.z1*s+h/2;
    mctx.fillStyle='rgba(226,234,222,.14)';mctx.fillRect(x,y,(c.x2-c.x1)*s,(c.z2-c.z1)*s);
    mctx.strokeStyle='rgba(226,234,222,.22)';mctx.lineWidth=1;mctx.strokeRect(x,y,(c.x2-c.x1)*s,(c.z2-c.z1)*s);
  }
  for(const i of interiors){
    const x=(i.x-i.w/2)*s+w/2,y=(i.z-i.d/2)*s+h/2;
    mctx.fillStyle='rgba(212,239,106,.13)';mctx.fillRect(x,y,i.w*s,i.d*s);
    mctx.strokeStyle='rgba(212,239,106,.34)';mctx.lineWidth=1;mctx.strokeRect(x,y,i.w*s,i.d*s);
  }
  // Tier boundaries and perimeter.
  mctx.setLineDash([3,3]);mctx.strokeStyle='rgba(240,240,215,.32)';
  for(const z of [10,-22]){const y=h/2+z*s;mctx.beginPath();mctx.moveTo(0,y);mctx.lineTo(w,y);mctx.stroke()}
  mctx.setLineDash([]);mctx.strokeStyle='rgba(255,144,108,.55)';mctx.lineWidth=2;mctx.beginPath();mctx.moveTo(0,h/2-72*s);mctx.lineTo(w,h/2-72*s);mctx.stroke();
  // Stations and objectives.
  const now=performance.now()*.004;
  for(const e of entities){
    if(e.type==='npc'||e.type==='cat')continue;
    const [x,y]=pos(e.x,e.z);
    const isGoal=e===objectives[objectiveIndex]?.target;
    mctx.fillStyle=e.type==='gate'?'#ff906c':e.type==='checkpoint'||e.type==='spireDoor'?'#e9d79a':e.active?'#d4ef6a':'#b8c3b8';
    mctx.beginPath();mctx.arc(x,y,isGoal?4.5:2.5,0,Math.PI*2);mctx.fill();
    if(isGoal){mctx.strokeStyle='rgba(255,240,180,'+(.45+Math.sin(now)*.25)+')';mctx.lineWidth=2;mctx.beginPath();mctx.arc(x,y,7+Math.sin(now)*1.5,0,Math.PI*2);mctx.stroke()}
  }
  for(const mem of memories)if(!mem.got){const [x,y]=pos(mem.group.position.x,mem.group.position.z);mctx.fillStyle='#e7c479';mctx.fillRect(x-1.5,y-1.5,3,3)}
  // Cats and parked cars.
  for(const c of cats){const [x,y]=pos(c.group.position.x,c.group.position.z);mctx.fillStyle='#d8c7a4';mctx.fillRect(x-1,y-1,2,2)}
  for(const c of colliders){const a=(c.x2-c.x1)*(c.z2-c.z1);if(a>7&&a<16&&!c.open){const [x,y]=pos((c.x1+c.x2)/2,(c.z1+c.z2)/2);mctx.fillStyle='rgba(20,30,32,.75)';mctx.fillRect(x-2,y-1,4,2)}}
  // Player arrow: the map is north-up, so rotate by -yaw.
  const [px,py]=pos(player.position.x,player.position.z);
  mctx.save();mctx.translate(px,py);mctx.rotate(-yaw);
  mctx.fillStyle='#f4f8e2';mctx.beginPath();mctx.moveTo(0,-7);mctx.lineTo(5,5);mctx.lineTo(0,3);mctx.lineTo(-5,5);mctx.closePath();mctx.fill();
  mctx.strokeStyle='#1a2a24';mctx.lineWidth=1;mctx.stroke();mctx.restore();
  mctx.fillStyle='#eef3df';mctx.font='8px monospace';mctx.fillText('N',w/2-3,9);
  mctx.fillStyle='rgba(238,243,223,.55)';mctx.font='6px monospace';mctx.fillText('HIGH',3,11);mctx.fillText('MID',3,h/2-16);mctx.fillText('LOW',3,h-4);
}
// ----- Collision and movement -----
const PLAYER_RADIUS=.42;
function collidesAt(x,z,r=PLAYER_RADIUS){
  for(const c of colliders){
    if(c.open)continue;
    if(x+r>c.x1&&x-r<c.x2&&z+r>c.z1&&z-r<c.z2)return true;
  }
  return false;
}
function movePlayer(dt){
  const forward=(keys.KeyW||keys.ArrowUp||touchKeys.KeyW?1:0)-(keys.KeyS||keys.ArrowDown||touchKeys.KeyS?1:0);
  const strafe=(keys.KeyD||keys.ArrowRight||touchKeys.KeyD?1:0)-(keys.KeyA||keys.ArrowLeft||touchKeys.KeyA?1:0);
  run=!!(keys.ShiftLeft||keys.ShiftRight||touchKeys.ShiftLeft);
  let dx=0,dz=0;
  if(forward||strafe){
    const len=Math.hypot(forward,strafe),f=forward/len,st=strafe/len;
    dx=(-Math.sin(yaw)*f+Math.cos(yaw)*st);dz=(-Math.cos(yaw)*f-Math.sin(yaw)*st);
    const speed=run?7.9:4.6,step=speed*dt;
    const minZ=gateBlocker.open?-100:-68;
    const nx=THREE.MathUtils.clamp(player.position.x+dx*step,-64,64),nz=THREE.MathUtils.clamp(player.position.z+dz*step,minZ,64);
    if(!collidesAt(nx,player.position.z))player.position.x=nx;
    if(!collidesAt(player.position.x,nz))player.position.z=nz;
    player.rotation.y=Math.atan2(dx,dz);
    const swing=Math.sin(performance.now()*.012*(run?1.5:1));
    playerRig.legs[0].rotation.x=swing*.55;playerRig.legs[1].rotation.x=-swing*.55;
    playerRig.arms[0].rotation.x=-swing*.4;playerRig.arms[1].rotation.x=swing*.4;
    playerRig.body.position.y=Math.abs(swing)*.03;
  }else{
    playerRig.legs[0].rotation.x*=.8;playerRig.legs[1].rotation.x*=.8;
    playerRig.arms[0].rotation.x*=.82;playerRig.arms[1].rotation.x*=.82;
    playerRig.body.position.y*=.8;
  }
}
let activeRoom=null;
function updateCamera(dt){
  const room=interiorAt(player.position.x,player.position.z,0);
  if(room!==activeRoom){
    if(activeRoom){activeRoom.wallMat.opacity=1;activeRoom.wallMat.transparent=false;activeRoom.wallMat.depthWrite=true;activeRoom.wallMat.needsUpdate=true}
    if(room){room.wallMat.opacity=.2;room.wallMat.transparent=true;room.wallMat.depthWrite=false;room.wallMat.needsUpdate=true}
    activeRoom=room;
  }
  if(window.__freezeCamera)return;
  const target=new THREE.Vector3(player.position.x,player.position.y+1.45,player.position.z);
  if(room){
    const desired=new THREE.Vector3(target.x+Math.sin(yaw)*4.7,target.y+1.6,target.z+Math.cos(yaw)*4.7);
    camera.position.lerp(desired,1-Math.exp(-dt*6));
    camera.lookAt(target.x,target.y+.5,target.z);
    return;
  }
  const distance=7.8;
  const horizontal=distance*Math.cos(pitch);
  const desired=new THREE.Vector3(target.x+Math.sin(yaw)*horizontal,target.y+2.2+Math.sin(pitch)*distance,target.z+Math.cos(yaw)*horizontal);
  let safe=1;
  for(let i=1;i<=18;i++){const f=i/18,cx=target.x+(desired.x-target.x)*f,cz=target.z+(desired.z-target.z)*f;if(collidesAt(cx,cz,.24)){safe=Math.max(.14,(i-1)/18);break}}
  const clipped=target.clone().lerp(desired,safe);
  camera.position.lerp(clipped,1-Math.exp(-dt*5));
  camera.lookAt(target.x,target.y+1,target.z);
}
// ----- Animated population -----
function animateHumans(dt,t){
  const damp=1-Math.exp(-dt*7);
  for(const e of entities){
    if(e.type!=='npc')continue;const rig=e.rig;
    const baseY=rig.body.userData.baseY??0;
    if(e===dialogueNpc){
      e.talkClock+=dt;const w=e.talkClock,k=e.talkCount%4;
      const a0=rig.arms[0].rotation,a1=rig.arms[1].rotation;
      let t0x=0,t0z=.1,t1x=0,t1z=-.1,headX=Math.sin(w*3.4)*.07,headY=Math.sin(w*2.1)*.16,bodyZ=0;
      if(k===0){t0x=-.95+Math.sin(w*3.2)*.14;t0z=.52;headY=.24;bodyZ=.025}
      else if(k===1){t0x=-.45+Math.sin(w*2.7)*.1;t0z=.4;t1x=-.35+Math.cos(w*2.9)*.1;t1z=-.35;headX=-.03;headY=Math.sin(w*1.8)*.1}
      else if(k===2){t1x=-1.0+Math.sin(w*3.5)*.12;t1z=-.55;headY=-.2;bodyZ=-.02}
      else{t0x=-.5;t0z=.18;t1x=-.5;t1z=-.18;headX=.09;headY=0;bodyZ=.012}
      a0.x+=(t0x-a0.x)*damp;a0.z+=(t0z-a0.z)*damp;
      a1.x+=(t1x-a1.x)*damp;a1.z+=(t1z-a1.z)*damp;
      rig.head.rotation.x+=(headX-rig.head.rotation.x)*damp;
      rig.head.rotation.y+=(headY-rig.head.rotation.y)*damp;
      rig.body.rotation.z+=(bodyZ-rig.body.rotation.z)*damp;
      rig.body.position.y=baseY+Math.sin(w*2.2)*.006;
    }else{
      rig.head.rotation.x*=.9;rig.head.rotation.y=Math.sin(t*.45+e.idlePhase)*.1;
      rig.arms[0].rotation.x+=(Math.sin(t*.8+e.idlePhase)*.03-rig.arms[0].rotation.x)*damp;
      rig.arms[1].rotation.x+=(-Math.sin(t*.8+e.idlePhase)*.03-rig.arms[1].rotation.x)*damp;
      rig.arms[0].rotation.z+=(.1-rig.arms[0].rotation.z)*damp;
      rig.arms[1].rotation.z+=(-.1-rig.arms[1].rotation.z)*damp;
      rig.body.rotation.z+=(e.pose==='slumped'?0:(0)-rig.body.rotation.z)*damp;
      rig.body.position.y=baseY+Math.sin(t*1.15+e.idlePhase)*.012;
    }
  }
}
for(const e of entities)if(e.type==='npc')e.rig.body.userData.baseY=e.rig.body.position.y;
// ----- World animation -----
function updateWorld(dt,t){
  for(const e of entities){
    if(e.type==='relay'&&!e.active)for(const child of e.group.children)if(child.userData.orb)child.position.y=2+Math.sin(t*2+child.position.x*5)*.11;
  }
  for(const m of memories){m.group.rotation.y+=dt*.7;m.group.position.y=.85+Math.sin(t*2+m.index)*.12}
  for(const tree of paradise.children)if(tree.geometry?.type==='SphereGeometry')tree.rotation.z=Math.sin(t*.3+tree.position.x)*.006;
  for(const s of neonSigns){const flick=.82+Math.sin(t*2.1+s.phase)*.07+Math.sin(t*11.7+s.phase*2)*.035;s.mesh.material.opacity=THREE.MathUtils.clamp(flick,.56,1)}
  for(const f of fires){const p=.9+Math.sin(t*12+f.phase)*.11+Math.sin(t*23+f.phase*2)*.06;f.light.intensity=9*p;f.flame.scale.y=.52+Math.sin(t*15+f.phase)*.08}
  for(const w of fogWisps){w.sp.position.x+=Math.sin(t*.05+w.phase)*dt*w.speed;w.sp.position.z+=dt*w.speed*.2;w.sp.material.opacity=.055+Math.sin(t*.4+w.phase)*.02}
  updateBirds(dt,t);updateCats(dt,t);animateHumans(dt,t);updatePetFx(dt,t);
  for(const label of labels){
    if(!label.visible)continue;label.getWorldPosition(labelPos);
    const d=camera.position.distanceTo(labelPos),base=label.userData.labelType==='npc'?.095:.17;
    const w=THREE.MathUtils.clamp(d*base,label.userData.labelType==='npc'?.35:.6,label.userData.labelType==='npc'?2.4:4.4);
    label.scale.set(w,w*.25,1);
  }
}
// ----- Frame loop -----
let elapsed=0;
function frame(){
  requestAnimationFrame(frame);
  const dt=Math.min(clock.getDelta(),.04);elapsed+=dt;
  if(isStarted&&!dialogueOpen&&$('#puzzle-screen').classList.contains('hidden')){
    movePlayer(dt);checkInteraction();collectMemories();setLocation();updateObjectiveDistance();checkEnding();
  }
  updateCamera(dt);updateWorld(dt,elapsed);drawMap();
  $('#clock').textContent=`${String(6+Math.floor(elapsed/60)).padStart(2,'0')}:${String(Math.floor(elapsed%60)).padStart(2,'0')}`;
  const heading=((Math.round(((yaw*180/Math.PI)%360)+360)%360)+360)%360;
  $('#compass b').textContent=`${String(heading).padStart(3,'0')}°`;
  renderer.render(scene,camera);
}
function resize(){camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8));if(isMobile())document.body.classList.add('mobile')}
window.addEventListener('resize',resize);
camera.position.set(0,5,24);camera.lookAt(0,1,15);drawMap();frame();
// Temporary validation hook (removed after smoke testing).
window.__dbg={player,entities,interiors,cats,birds,colliders,setObjective,openPuzzle,submitPuzzle,interact,petCat,relay1,relay2,relay3,checkpoint,spireDoor,archive,camera,keys,movePlayer,get yaw(){return yaw},get pass(){return pass},get objectiveIndex(){return objectiveIndex},get solved(){return solved},teleport:(x,z)=>{player.position.set(x,0,z);},get nearby(){return nearby}};
