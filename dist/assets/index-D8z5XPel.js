(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const Wo="180",ac=0,lr=1,oc=2,El=1,Tl=2,Dn=3,Fn=0,qt=1,Bt=2,Kn=0,Vi=1,$t=2,cr=3,hr=4,rc=5,ci=100,lc=101,cc=102,hc=103,dc=104,uc=200,fc=201,pc=202,mc=203,Ka=204,Za=205,gc=206,vc=207,_c=208,xc=209,yc=210,Mc=211,bc=212,Sc=213,wc=214,Ja=0,Qa=1,eo=2,Wi=3,to=4,no=5,io=6,so=7,Al=0,Ec=1,Tc=2,Zn=0,Ac=1,Rc=2,Cc=3,Rl=4,Pc=5,Ic=6,Lc=7,Cl=300,Xi=301,$i=302,ao=303,oo=304,da=306,ro=1e3,di=1001,lo=1002,hn=1003,Dc=1004,Ss=1005,Sn=1006,pa=1007,ui=1008,Tn=1009,Pl=1010,Il=1011,us=1012,Xo=1013,mi=1014,wn=1015,vs=1016,$o=1017,qo=1018,fs=1020,Ll=35902,Dl=35899,Ul=1021,Nl=1022,yn=1023,ps=1026,ms=1027,Yo=1028,jo=1029,Fl=1030,Ko=1031,Zo=1033,ta=33776,na=33777,ia=33778,sa=33779,co=35840,ho=35841,uo=35842,fo=35843,po=36196,mo=37492,go=37496,vo=37808,_o=37809,xo=37810,yo=37811,Mo=37812,bo=37813,So=37814,wo=37815,Eo=37816,To=37817,Ao=37818,Ro=37819,Co=37820,Po=37821,Io=36492,Lo=36494,Do=36495,Uo=36283,No=36284,Fo=36285,ko=36286,Uc=3200,Nc=3201,kl=0,Fc=1,qn="",cn="srgb",qi="srgb-linear",oa="linear",mt="srgb",bi=7680,dr=519,kc=512,zc=513,Oc=514,zl=515,Bc=516,Hc=517,Vc=518,Gc=519,ur=35044,fr="300 es",En=2e3,ra=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,o=i.length;a<o;a++)i[a].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=Math.PI/180,zo=180/Math.PI;function _s(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function at(s,e,t){return Math.max(e,Math.min(t,s))}function Wc(s,e){return(s%e+e)%e}function ga(s,e,t){return(1-t)*s+t*e}function Qi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*i+e.x,this.y=a*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,o,r){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=a[o+0],p=a[o+1],v=a[o+2],g=a[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(r===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==p||h!==v){let m=1-r;const u=l*f+c*p+h*v+d*g,S=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){const T=Math.sqrt(w),A=Math.atan2(T,u*S);m=Math.sin(m*A)/T,r=Math.sin(r*A)/T}const M=r*S;if(l=l*m+f*M,c=c*m+p*M,h=h*m+v*M,d=d*m+g*M,m===1-r){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,a,o){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=a[o],f=a[o+1],p=a[o+2],v=a[o+3];return e[t]=r*v+h*d+l*p-c*f,e[t+1]=l*v+h*f+c*d-r*p,e[t+2]=c*v+h*p+r*f-l*d,e[t+3]=h*v-r*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),d=r(a/2),f=l(n/2),p=l(i/2),v=l(a/2);switch(o){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],o=t[1],r=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+r+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(o-i)*p}else if(n>r&&n>d){const p=2*Math.sqrt(1+n-r-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(a+c)/p}else if(r>d){const p=2*Math.sqrt(1+r-n-d);this._w=(a-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-r);this._w=(o-i)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,o=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*r+i*c-a*l,this._y=i*h+o*l+a*r-n*c,this._z=a*h+o*c+n*l-i*r,this._w=o*h-n*r-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,o=this._w;let r=o*e._w+n*e._x+i*e._y+a*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=i,this._z=a,this;const l=1-r*r;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*i-r*n),h=2*(r*t-a*i),d=2*(a*n-o*t);return this.x=t+l*c+o*d-r*h,this.y=n+l*h+r*c-a*d,this.z=i+l*d+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,o=t.x,r=t.y,l=t.z;return this.x=i*l-a*r,this.y=a*o-n*l,this.z=n*r-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new L,pr=new xs;class Je{constructor(e,t,n,i,a,o,r,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,o,r,l,c)}set(e,t,n,i,a,o,r,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],v=n[8],g=i[0],m=i[3],u=i[6],S=i[1],w=i[4],M=i[7],T=i[2],A=i[5],C=i[8];return a[0]=o*g+r*S+l*T,a[3]=o*m+r*w+l*A,a[6]=o*u+r*M+l*C,a[1]=c*g+h*S+d*T,a[4]=c*m+h*w+d*A,a[7]=c*u+h*M+d*C,a[2]=f*g+p*S+v*T,a[5]=f*m+p*w+v*A,a[8]=f*u+p*M+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*r*c-n*a*h+n*r*l+i*a*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],d=h*o-r*c,f=r*l-h*a,p=c*a-o*l,v=t*d+n*f+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(i*c-h*n)*g,e[2]=(r*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*l)*g,e[5]=(i*a-r*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,o,r){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*r)+o+e,-i*c,i*l,-i*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Je;function Ol(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function la(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xc(){const s=la("canvas");return s.style.display="block",s}const mr={};function gs(s){s in mr||(mr[s]=!0,console.warn(s))}function $c(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const gr=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vr=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qc(){const s={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(i,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===mt&&(i.r=Nn(i.r),i.g=Nn(i.g),i.b=Nn(i.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?oa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,o){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[qi]:{primaries:e,whitePoint:n,transfer:oa,toXYZ:gr,fromXYZ:vr,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:gr,fromXYZ:vr,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),s}const ht=qc();function Nn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Si;class Yc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=la("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let o=0;o<a.length;o++)a[o]=Nn(a[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jc=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?a.push(xa(i[o].image)):a.push(xa(i[o]))}else a=xa(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kc=0;const ya=new L;class Yt extends ji{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=di,i=di,a=Sn,o=ui,r=yn,l=Tn,c=Yt.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=_s(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Cl;Yt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(p+1)/2,T=(u+1)/2,A=(h+f)/4,C=(d+g)/4,D=(v+m)/4;return w>M&&w>T?w<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(w),i=A/n,a=C/n):M>T?M<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(M),n=A/i,a=D/i):T<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(T),n=C/a,i=D/a),this.set(n,i,a,t),this}let S=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-v)/S,this.y=(d-g)/S,this.z=(f-h)/S,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zc extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:n.depth},a=new Yt(i);this.textures=[];const o=n.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Zc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bl extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jc extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(a,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const i=e.children;for(let a=0,o=i.length;a<o;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Es.subVectors(this.max,es),wi.subVectors(e.a,es),Ei.subVectors(e.b,es),Ti.subVectors(e.c,es),Hn.subVectors(Ei,wi),Vn.subVectors(Ti,Ei),ei.subVectors(wi,Ti);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ei.z,ei.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ei.z,0,-ei.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ei.y,ei.x,0];return!Ma(t,wi,Ei,Ti,Es)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,wi,Ei,Ti,Es))?!1:(Ts.crossVectors(Hn,Vn),t=[Ts.x,Ts.y,Ts.z],Ma(t,wi,Ei,Ti,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new L,new L,new L,new L,new L,new L,new L,new L],gn=new L,ws=new vi,wi=new L,Ei=new L,Ti=new L,Hn=new L,Vn=new L,ei=new L,es=new L,Es=new L,Ts=new L,ti=new L;function Ma(s,e,t,n,i){for(let a=0,o=s.length-3;a<=o;a+=3){ti.fromArray(s,a);const r=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Qc=new vi,ts=new L,ba=new L;class _i{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qc.setFromPoints(e).getCenter(n);let i=0;for(let a=0,o=e.length;a<o;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ts,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(ba)),this.expandByPoint(ts.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new L,Sa=new L,As=new L,Gn=new L,wa=new L,Rs=new L,Ea=new L;class Qo{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sa.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Sa);const a=e.distanceTo(t)*.5,o=-this.direction.dot(As),r=Gn.dot(this.direction),l=-Gn.dot(As),c=Gn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,v;if(h>0)if(d=o*l-r,f=o*r-l,v=a*h,d>=0)if(f>=-v)if(f<=v){const g=1/h;d*=g,f*=g,p=d*(d+o*f+2*r)+f*(o*d+f+2*l)+c}else f=a,d=Math.max(0,-(o*f+r)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(o*f+r)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*a+r)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(o*a+r)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=o>0?-a:a,d=Math.max(0,-(o*f+r)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Sa).addScaledVector(As,f),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,a=e.radius*e.radius;if(i>a)return null;const o=Math.sqrt(a-i),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||a>i||((a>n||isNaN(n))&&(n=a),(o<i||isNaN(i))&&(i=o),d>=0?(r=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(r=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,a){wa.subVectors(t,e),Rs.subVectors(n,e),Ea.crossVectors(wa,Rs);let o=this.direction.dot(Ea),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Gn.subVectors(this.origin,e);const l=r*this.direction.dot(Rs.crossVectors(Gn,Rs));if(l<0)return null;const c=r*this.direction.dot(wa.cross(Gn));if(c<0||l+c>o)return null;const h=-r*Gn.dot(Ea);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,n,i,a,o,r,l,c,h,d,f,p,v,g,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,o,r,l,c,h,d,f,p,v,g,m)}set(e,t,n,i,a,o,r,l,c,h,d,f,p,v,g,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=a,u[5]=o,u[9]=r,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),a=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=o*h,p=o*d,v=r*h,g=r*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=f-g*c,t[9]=-r*l,t[2]=g-f*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,v=c*h,g=c*d;t[0]=f+g*r,t[4]=v*r-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-r,t[2]=p*r-v,t[6]=g+f*r,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,v=c*h,g=c*d;t[0]=f-g*r,t[4]=-o*d,t[8]=v+p*r,t[1]=p+v*r,t[5]=o*h,t[9]=g-f*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,v=r*h,g=r*d;t[0]=l*h,t[4]=v*c-p,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=p*c-v,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=r*l,g=r*c;t[0]=l*h,t[4]=g-f*d,t[8]=v*d+p,t[1]=d,t[5]=o*h,t[9]=-r*h,t[2]=-c*h,t[6]=p*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=r*l,g=r*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+g,t[5]=o*h,t[9]=p*d-v,t[2]=v*d-p,t[6]=r*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eh,e,th)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Wn.crossVectors(n,on),Wn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Wn.crossVectors(n,on)),Wn.normalize(),Cs.crossVectors(on,Wn),i[0]=Wn.x,i[4]=Cs.x,i[8]=on.x,i[1]=Wn.y,i[5]=Cs.y,i[9]=on.y,i[2]=Wn.z,i[6]=Cs.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],v=n[2],g=n[6],m=n[10],u=n[14],S=n[3],w=n[7],M=n[11],T=n[15],A=i[0],C=i[4],D=i[8],b=i[12],y=i[1],I=i[5],k=i[9],X=i[13],G=i[2],O=i[6],W=i[10],Z=i[14],H=i[3],de=i[7],pe=i[11],we=i[15];return a[0]=o*A+r*y+l*G+c*H,a[4]=o*C+r*I+l*O+c*de,a[8]=o*D+r*k+l*W+c*pe,a[12]=o*b+r*X+l*Z+c*we,a[1]=h*A+d*y+f*G+p*H,a[5]=h*C+d*I+f*O+p*de,a[9]=h*D+d*k+f*W+p*pe,a[13]=h*b+d*X+f*Z+p*we,a[2]=v*A+g*y+m*G+u*H,a[6]=v*C+g*I+m*O+u*de,a[10]=v*D+g*k+m*W+u*pe,a[14]=v*b+g*X+m*Z+u*we,a[3]=S*A+w*y+M*G+T*H,a[7]=S*C+w*I+M*O+T*de,a[11]=S*D+w*k+M*W+T*pe,a[15]=S*b+w*X+M*Z+T*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],o=e[1],r=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],v=e[3],g=e[7],m=e[11],u=e[15];return v*(+a*l*d-i*c*d-a*r*f+n*c*f+i*r*p-n*l*p)+g*(+t*l*p-t*c*f+a*o*f-i*o*p+i*c*h-a*l*h)+m*(+t*c*d-t*r*p-a*o*d+n*o*p+a*r*h-n*c*h)+u*(-i*r*h-t*l*d+t*r*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],v=e[12],g=e[13],m=e[14],u=e[15],S=d*m*c-g*f*c+g*l*p-r*m*p-d*l*u+r*f*u,w=v*f*c-h*m*c-v*l*p+o*m*p+h*l*u-o*f*u,M=h*g*c-v*d*c+v*r*p-o*g*p-h*r*u+o*d*u,T=v*d*l-h*g*l-v*r*f+o*g*f+h*r*m-o*d*m,A=t*S+n*w+i*M+a*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(g*f*a-d*m*a-g*i*p+n*m*p+d*i*u-n*f*u)*C,e[2]=(r*m*a-g*l*a+g*i*c-n*m*c-r*i*u+n*l*u)*C,e[3]=(d*l*a-r*f*a-d*i*c+n*f*c+r*i*p-n*l*p)*C,e[4]=w*C,e[5]=(h*m*a-v*f*a+v*i*p-t*m*p-h*i*u+t*f*u)*C,e[6]=(v*l*a-o*m*a-v*i*c+t*m*c+o*i*u-t*l*u)*C,e[7]=(o*f*a-h*l*a+h*i*c-t*f*c-o*i*p+t*l*p)*C,e[8]=M*C,e[9]=(v*d*a-h*g*a-v*n*p+t*g*p+h*n*u-t*d*u)*C,e[10]=(o*g*a-v*r*a+v*n*c-t*g*c-o*n*u+t*r*u)*C,e[11]=(h*r*a-o*d*a-h*n*c+t*d*c+o*n*p-t*r*p)*C,e[12]=T*C,e[13]=(h*g*i-v*d*i+v*n*f-t*g*f-h*n*m+t*d*m)*C,e[14]=(v*r*i-o*g*i-v*n*l+t*g*l+o*n*m-t*r*m)*C,e[15]=(o*d*i-h*r*i+h*n*l-t*d*l-o*n*f+t*r*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,o=e.x,r=e.y,l=e.z,c=a*o,h=a*r;return this.set(c*o+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*o,0,c*l-i*r,h*l+i*o,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,o){return this.set(1,n,a,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,o=t._y,r=t._z,l=t._w,c=a+a,h=o+o,d=r+r,f=a*c,p=a*h,v=a*d,g=o*h,m=o*d,u=r*d,S=l*c,w=l*h,M=l*d,T=n.x,A=n.y,C=n.z;return i[0]=(1-(g+u))*T,i[1]=(p+M)*T,i[2]=(v-w)*T,i[3]=0,i[4]=(p-M)*A,i[5]=(1-(f+u))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(v+w)*C,i[9]=(m-S)*C,i[10]=(1-(f+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=Ai.set(i[0],i[1],i[2]).length();const o=Ai.set(i[4],i[5],i[6]).length(),r=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const c=1/a,h=1/o,d=1/r;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=r,this}makePerspective(e,t,n,i,a,o,r=En,l=!1){const c=this.elements,h=2*a/(t-e),d=2*a/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i);let v,g;if(l)v=a/(o-a),g=o*a/(o-a);else if(r===En)v=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===ra)v=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,o,r=En,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i);let v,g;if(l)v=1/(o-a),g=o/(o-a);else if(r===En)v=-2/(o-a),g=-(o+a)/(o-a);else if(r===ra)v=-1/(o-a),g=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new L,vn=new Mt,eh=new L(0,0,0),th=new L(1,1,1),Wn=new L,Cs=new L,on=new L,_r=new Mt,xr=new xs;class An{constructor(e=0,t=0,n=0,i=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],o=i[4],r=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(at(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _r.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_r,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xr.setFromEuler(this),this.setFromQuaternion(xr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nh=0;const yr=new L,Ri=new xs,Pn=new Mt,Ps=new L,ns=new L,ih=new L,sh=new xs,Mr=new L(1,0,0),br=new L(0,1,0),Sr=new L(0,0,1),wr={type:"added"},ah={type:"removed"},Ci={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Dt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new L,t=new An,n=new xs,i=new L(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Mr,e)}rotateY(e){return this.rotateOnAxis(br,e)}rotateZ(e){return this.rotateOnAxis(Sr,e)}translateOnAxis(e,t){return yr.copy(e).applyQuaternion(this.quaternion),this.position.add(yr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mr,e)}translateY(e){return this.translateOnAxis(br,e)}translateZ(e){return this.translateOnAxis(Sr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ns,Ps,this.up):Pn.lookAt(Ps,ns,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wr),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ah),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wr),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(r=>({...r})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(a(e.materials,this.material[l]));i.material=r}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(a(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Dt.DEFAULT_UP=new L(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new L,In=new L,Aa=new L,Ln=new L,Pi=new L,Ii=new L,Er=new L,Ra=new L,Ca=new L,Pa=new L,Ia=new Tt,La=new Tt,Da=new Tt;class xn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){_n.subVectors(i,t),In.subVectors(n,t),Aa.subVectors(e,t);const o=_n.dot(_n),r=_n.dot(In),l=_n.dot(Aa),c=In.dot(In),h=In.dot(Aa),d=o*c-r*r;if(d===0)return a.set(0,0,0),null;const f=1/d,p=(c*l-r*h)*f,v=(o*h-r*l)*f;return a.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,i,a,o,r,l){return this.getBarycoord(e,t,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(r,Ln.z),l)}static getInterpolatedAttribute(e,t,n,i,a,o){return Ia.setScalar(0),La.setScalar(0),Da.setScalar(0),Ia.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ia,a.x),o.addScaledVector(La,a.y),o.addScaledVector(Da,a.z),o}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),In.subVectors(e,t),_n.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),In.subVectors(this.a,this.b),_n.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let o,r;Pi.subVectors(i,n),Ii.subVectors(a,n),Ra.subVectors(e,n);const l=Pi.dot(Ra),c=Ii.dot(Ra);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,i);const h=Pi.dot(Ca),d=Ii.dot(Ca);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Pi,o);Pa.subVectors(e,a);const p=Pi.dot(Pa),v=Ii.dot(Pa);if(v>=0&&p<=v)return t.copy(a);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return r=c/(c-v),t.copy(n).addScaledVector(Ii,r);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return Er.subVectors(a,i),r=(d-h)/(d-h+(p-v)),t.copy(i).addScaledVector(Er,r);const u=1/(m+g+f);return o=g*u,r=f*u,t.copy(n).addScaledVector(Pi,o).addScaledVector(Ii,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Ua(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=Wc(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Ua(o,a,e+1/3),this.g=Ua(o,a,e),this.b=Ua(o,a,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=cn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=Vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return ht.workingToColorSpace(Gt.copy(this),e),Math.round(at(Gt.r*255,0,255))*65536+Math.round(at(Gt.g*255,0,255))*256+Math.round(at(Gt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,a=Gt.b,o=Math.max(n,i,a),r=Math.min(n,i,a);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const d=o-r;switch(c=h<=.5?d/(o+r):d/(2-o-r),o){case n:l=(i-a)/d+(i<a?6:0);break;case i:l=(a-n)/d+2;break;case a:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=cn){ht.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Is);const n=ga(Xn.h,Is.h,t),i=ga(Xn.s,Is.s,t),a=ga(Xn.l,Is.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Pe;Pe.NAMES=Vl;let oh=0;class xi extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Vi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Za,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const o=[];for(const r in a){const l=a[r];delete l.metadata,o.push(l)}return o}if(t){const a=i(e.textures),o=i(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yt extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new L,Ls=new it;let rh=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ur,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),a=Zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ur&&(e.usage=this.usage),e}}class Gl extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wl extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lh=0;const pn=new Mt,Na=new Dt,Li=new L,rn=new vi,is=new vi,kt=new L;class Ut extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ol(e)?Wl:Gl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];rn.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const r=t[a];is.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(rn.min,is.min),rn.expandByPoint(kt),kt.addVectors(rn.max,is.max),rn.expandByPoint(kt)):(rn.expandByPoint(is.min),rn.expandByPoint(is.max))}rn.getCenter(n);let i=0;for(let a=0,o=e.count;a<o;a++)kt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let a=0,o=t.length;a<o;a++){const r=t[a],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)kt.fromBufferAttribute(r,c),l&&(Li.fromBufferAttribute(e,c),kt.add(Li)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),r=[],l=[];for(let D=0;D<n.count;D++)r[D]=new L,l[D]=new L;const c=new L,h=new L,d=new L,f=new it,p=new it,v=new it,g=new L,m=new L;function u(D,b,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),f.fromBufferAttribute(a,D),p.fromBufferAttribute(a,b),v.fromBufferAttribute(a,y),h.sub(c),d.sub(c),p.sub(f),v.sub(f);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(I),r[D].add(g),r[b].add(g),r[y].add(g),l[D].add(m),l[b].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,b=S.length;D<b;++D){const y=S[D],I=y.start,k=y.count;for(let X=I,G=I+k;X<G;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const w=new L,M=new L,T=new L,A=new L;function C(D){T.fromBufferAttribute(i,D),A.copy(T);const b=r[D];w.copy(b),w.sub(T.multiplyScalar(T.dot(b))).normalize(),M.crossVectors(A,b);const I=M.dot(l[D])<0?-1:1;o.setXYZW(D,w.x,w.y,w.z,I)}for(let D=0,b=S.length;D<b;++D){const y=S[D],I=y.start,k=y.count;for(let X=I,G=I+k;X<G;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new L,a=new L,o=new L,r=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,a),d.subVectors(i,a),h.cross(d),r.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(v,r.x,r.y,r.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,a),d.subVectors(i,a),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,d=r.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){r.isInterleavedBufferAttribute?p=l[g]*r.data.stride+r.offset:p=l[g]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new Jt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=e(l,n);t.setAttribute(r,c)}const a=this.morphAttributes;for(const r in a){const l=[],c=a[r];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tr=new Mt,ni=new Qo,Ds=new _i,Ar=new L,Us=new L,Ns=new L,Fs=new L,Fa=new L,ks=new L,Rr=new L,zs=new L;class ge extends Dt{constructor(e=new Ut,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++){const r=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(a&&r){ks.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=r[l],d=a[l];h!==0&&(Fa.fromBufferAttribute(d,e),o?ks.addScaledVector(Fa,h):ks.addScaledVector(Fa.sub(t),h))}t.add(ks)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(a),ni.copy(e.ray).recast(e.near),!(Ds.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Ds,Ar)===null||ni.origin.distanceToSquared(Ar)>(e.far-e.near)**2))&&(Tr.copy(a).invert(),ni.copy(e.ray).applyMatrix4(Tr),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let i;const a=this.geometry,o=this.material,r=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(r!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],u=o[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,T=w;M<T;M+=3){const A=r.getX(M),C=r.getX(M+1),D=r.getX(M+2);i=Os(this,u,e,n,c,h,d,A,C,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(r.count,p.start+p.count);for(let m=v,u=g;m<u;m+=3){const S=r.getX(m),w=r.getX(m+1),M=r.getX(m+2);i=Os(this,o,e,n,c,h,d,S,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],u=o[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,T=w;M<T;M+=3){const A=M,C=M+1,D=M+2;i=Os(this,u,e,n,c,h,d,A,C,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,u=g;m<u;m+=3){const S=m,w=m+1,M=m+2;i=Os(this,o,e,n,c,h,d,S,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ch(s,e,t,n,i,a,o,r){let l;if(e.side===qt?l=n.intersectTriangle(o,a,i,!0,r):l=n.intersectTriangle(i,a,o,e.side===Fn,r),l===null)return null;zs.copy(r),zs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(zs);return c<t.near||c>t.far?null:{distance:c,point:zs.clone(),object:s}}function Os(s,e,t,n,i,a,o,r,l,c){s.getVertexPosition(r,Us),s.getVertexPosition(l,Ns),s.getVertexPosition(c,Fs);const h=ch(s,e,t,n,Us,Ns,Fs,Rr);if(h){const d=new L;xn.getBarycoord(Rr,Us,Ns,Fs,d),i&&(h.uv=xn.getInterpolatedAttribute(i,r,l,c,d,new it)),a&&(h.uv1=xn.getInterpolatedAttribute(a,r,l,c,d,new it)),o&&(h.normal=xn.getInterpolatedAttribute(o,r,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:l,c,normal:new L,materialIndex:0};xn.getNormal(Us,Ns,Fs,f.normal),h.face=f,h.barycoord=d}return h}class yi extends Ut{constructor(e=1,t=1,n=1,i=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:o};const r=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,o,a,0),v("z","y","x",1,-1,n,t,-e,o,a,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,a,4),v("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function v(g,m,u,S,w,M,T,A,C,D,b){const y=M/C,I=T/D,k=M/2,X=T/2,G=A/2,O=C+1,W=D+1;let Z=0,H=0;const de=new L;for(let pe=0;pe<W;pe++){const we=pe*I-X;for(let qe=0;qe<O;qe++){const dt=qe*y-k;de[g]=dt*S,de[m]=we*w,de[u]=G,c.push(de.x,de.y,de.z),de[g]=0,de[m]=0,de[u]=A>0?1:-1,h.push(de.x,de.y,de.z),d.push(qe/C),d.push(1-pe/D),Z+=1}}for(let pe=0;pe<D;pe++)for(let we=0;we<C;we++){const qe=f+we+O*pe,dt=f+we+O*(pe+1),ut=f+(we+1)+O*(pe+1),Ke=f+(we+1)+O*pe;l.push(qe,dt,Ke),l.push(dt,ut,Ke),H+=6}r.addGroup(p,H,b),p+=H,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(s){const e={};for(let t=0;t<s.length;t++){const n=Yi(s[t]);for(const i in n)e[i]=n[i]}return e}function hh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const dh={clone:Yi,merge:Xt};var uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uh,this.fragmentShader=fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=hh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $l extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,Cr=new it,Pr=new it;class mn extends $l{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Cr,Pr),t.subVectors(Pr,Cr)}setViewOffset(e,t,n,i,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(a+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Ui=1;class ph extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mn(Di,Ui,e,t);i.layers=this.layers,this.add(i);const a=new mn(Di,Ui,e,t);a.layers=this.layers,this.add(a);const o=new mn(Di,Ui,e,t);o.layers=this.layers,this.add(o);const r=new mn(Di,Ui,e,t);r.layers=this.layers,this.add(r);const l=new mn(Di,Ui,e,t);l.layers=this.layers,this.add(l);const c=new mn(Di,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,o,r,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,r),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ql extends Yt{constructor(e=[],t=Xi,n,i,a,o,r,l,c,h){super(e,t,n,i,a,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mh extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ql(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yi(5,5,5),a=new kn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Kn});a.uniforms.tEquirect.value=t;const o=new ge(i,a),r=t.minFilter;return t.minFilter===ui&&(t.minFilter=Sn),new ph(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(a)}}class lt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gh={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(gh)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class er{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new er(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vh extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _h extends Yt{constructor(e=null,t=1,n=1,i,a,o,r,l,c=hn,h=hn,d,f){super(null,o,r,l,c,h,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir extends Jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ni=new Mt,Lr=new Mt,Bs=[],Dr=new vi,xh=new Mt,ss=new ge,as=new _i;class yh extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ir(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Dr.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Dr)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),as.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(as)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,o=e*a+1;for(let r=0;r<n.length;r++)n[r]=i[o+r]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),e.ray.intersectsSphere(as)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Ni),Lr.multiplyMatrices(n,Ni),ss.matrixWorld=Lr,ss.raycast(e,Bs);for(let o=0,r=Bs.length;o<r;o++){const l=Bs[o];l.instanceId=a,l.object=this,t.push(l)}Bs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _h(new Float32Array(i*this.count),i,this.count,Yo,wn));const a=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const r=this.geometry.morphTargetsRelative?1:1-o,l=i*e;a[l]=r,a.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const za=new L,Mh=new L,bh=new Je;class ri{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=za.subVectors(n,t).cross(Mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bh.getNormalMatrix(e),i=this.coplanarPoint(za).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new _i,Sh=new it(.5,.5),Hs=new L;class tr{constructor(e=new ri,t=new ri,n=new ri,i=new ri,a=new ri,o=new ri){this.planes=[e,t,n,i,a,o]}set(e,t,n,i,a,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(a),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const i=this.planes,a=e.elements,o=a[0],r=a[1],l=a[2],c=a[3],h=a[4],d=a[5],f=a[6],p=a[7],v=a[8],g=a[9],m=a[10],u=a[11],S=a[12],w=a[13],M=a[14],T=a[15];if(i[0].setComponents(c-o,p-h,u-v,T-S).normalize(),i[1].setComponents(c+o,p+h,u+v,T+S).normalize(),i[2].setComponents(c+r,p+d,u+g,T+w).normalize(),i[3].setComponents(c-r,p-d,u-g,T-w).normalize(),n)i[4].setComponents(l,f,m,M).normalize(),i[5].setComponents(c-l,p-f,u-m,T-M).normalize();else if(i[4].setComponents(c-l,p-f,u-m,T-M).normalize(),t===En)i[5].setComponents(c+l,p+f,u+m,T+M).normalize();else if(t===ra)i[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);const t=Sh.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Hs.x=i.normal.x>0?e.max.x:e.min.x,Hs.y=i.normal.y>0?e.max.y:e.min.y,Hs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yl extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ca=new L,ha=new L,Ur=new Mt,os=new Qo,Vs=new _i,Oa=new L,Nr=new L;class wh extends Dt{constructor(e=new Ut,t=new Yl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)ca.fromBufferAttribute(t,i-1),ha.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ca.distanceTo(ha);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=a,e.ray.intersectsSphere(Vs)===!1)return;Ur.copy(i).invert(),os.copy(e.ray).applyMatrix4(Ur);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const u=h.getX(g),S=h.getX(g+1),w=Gs(this,e,os,l,u,S,g);w&&t.push(w)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(p),u=Gs(this,e,os,l,g,m,v-1);u&&t.push(u)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const u=Gs(this,e,os,l,g,g+1,g);u&&t.push(u)}if(this.isLineLoop){const g=Gs(this,e,os,l,v-1,p,v-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++){const r=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function Gs(s,e,t,n,i,a,o){const r=s.geometry.attributes.position;if(ca.fromBufferAttribute(r,i),ha.fromBufferAttribute(r,a),t.distanceSqToSegment(ca,ha,Oa,Nr)>n)return;Oa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Oa);if(!(c<e.near||c>e.far))return{distance:c,point:Nr.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class Oo extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fr=new Mt,Bo=new Qo,Ws=new _i,Xs=new L;class kr extends Dt{constructor(e=new Ut,t=new Oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=a,e.ray.intersectsSphere(Ws)===!1)return;Fr.copy(i).invert(),Bo.copy(e.ray).applyMatrix4(Fr);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,g=p;v<g;v++){const m=c.getX(v);Xs.fromBufferAttribute(d,m),zr(Xs,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p;v<g;v++)Xs.fromBufferAttribute(d,v),zr(Xs,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++){const r=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function zr(s,e,t,n,i,a,o){const r=Bo.distanceSqToPoint(s);if(r<t){const l=new L;Bo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class jl extends Yt{constructor(e,t,n=mi,i,a,o,r=hn,l=hn,c,h=ps,d=1){if(h!==ps&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,a,o,r,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kl extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fi extends Ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const a=[],o=[],r=[],l=[],c=new L,h=new it;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const p=n+d/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(r,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mn extends Ut{constructor(e=1,t=1,n=1,i=32,a=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],d=[],f=[],p=[];let v=0;const g=[],m=n/2;let u=0;S(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(p,2));function S(){const M=new L,T=new L;let A=0;const C=(t-e)/n;for(let D=0;D<=a;D++){const b=[],y=D/a,I=y*(t-e)+e;for(let k=0;k<=i;k++){const X=k/i,G=X*l+r,O=Math.sin(G),W=Math.cos(G);T.x=I*O,T.y=-y*n+m,T.z=I*W,d.push(T.x,T.y,T.z),M.set(O,C,W).normalize(),f.push(M.x,M.y,M.z),p.push(X,1-y),b.push(v++)}g.push(b)}for(let D=0;D<i;D++)for(let b=0;b<a;b++){const y=g[b][D],I=g[b+1][D],k=g[b+1][D+1],X=g[b][D+1];(e>0||b!==0)&&(h.push(y,I,X),A+=3),(t>0||b!==a-1)&&(h.push(I,k,X),A+=3)}c.addGroup(u,A,0),u+=A}function w(M){const T=v,A=new it,C=new L;let D=0;const b=M===!0?e:t,y=M===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),v++;const I=v;for(let k=0;k<=i;k++){const G=k/i*l+r,O=Math.cos(G),W=Math.sin(G);C.x=b*W,C.y=m*y,C.z=b*O,d.push(C.x,C.y,C.z),f.push(0,y,0),A.x=O*.5+.5,A.y=W*.5*y+.5,p.push(A.x,A.y),v++}for(let k=0;k<i;k++){const X=T+k,G=I+k;M===!0?h.push(G,G+1,X):h.push(G+1,G,X),D+=3}c.addGroup(u,D,M===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn extends Mn{constructor(e=1,t=1,n=32,i=1,a=!1,o=0,r=Math.PI*2){super(0,e,t,n,i,a,o,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(e){return new Jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ys extends Ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const a=[],o=[];r(i),c(n),h(),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(a.slice(),3)),this.setAttribute("uv",new gt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(S){const w=new L,M=new L,T=new L;for(let A=0;A<t.length;A+=3)p(t[A+0],w),p(t[A+1],M),p(t[A+2],T),l(w,M,T,S)}function l(S,w,M,T){const A=T+1,C=[];for(let D=0;D<=A;D++){C[D]=[];const b=S.clone().lerp(M,D/A),y=w.clone().lerp(M,D/A),I=A-D;for(let k=0;k<=I;k++)k===0&&D===A?C[D][k]=b:C[D][k]=b.clone().lerp(y,k/I)}for(let D=0;D<A;D++)for(let b=0;b<2*(A-D)-1;b++){const y=Math.floor(b/2);b%2===0?(f(C[D][y+1]),f(C[D+1][y]),f(C[D][y])):(f(C[D][y+1]),f(C[D+1][y+1]),f(C[D+1][y]))}}function c(S){const w=new L;for(let M=0;M<a.length;M+=3)w.x=a[M+0],w.y=a[M+1],w.z=a[M+2],w.normalize().multiplyScalar(S),a[M+0]=w.x,a[M+1]=w.y,a[M+2]=w.z}function h(){const S=new L;for(let w=0;w<a.length;w+=3){S.x=a[w+0],S.y=a[w+1],S.z=a[w+2];const M=m(S)/2/Math.PI+.5,T=u(S)/Math.PI+.5;o.push(M,1-T)}v(),d()}function d(){for(let S=0;S<o.length;S+=6){const w=o[S+0],M=o[S+2],T=o[S+4],A=Math.max(w,M,T),C=Math.min(w,M,T);A>.9&&C<.1&&(w<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),T<.2&&(o[S+4]+=1))}}function f(S){a.push(S.x,S.y,S.z)}function p(S,w){const M=S*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function v(){const S=new L,w=new L,M=new L,T=new L,A=new it,C=new it,D=new it;for(let b=0,y=0;b<a.length;b+=9,y+=6){S.set(a[b+0],a[b+1],a[b+2]),w.set(a[b+3],a[b+4],a[b+5]),M.set(a[b+6],a[b+7],a[b+8]),A.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),D.set(o[y+4],o[y+5]),T.copy(S).add(w).add(M).divideScalar(3);const I=m(T);g(A,y+0,S,I),g(C,y+2,w,I),g(D,y+4,M,I)}}function g(S,w,M,T){T<0&&S.x===1&&(o[w]=S.x-1),M.x===0&&M.z===0&&(o[w]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.vertices,e.indices,e.radius,e.details)}}class nr extends ys{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nr(e.radius,e.detail)}}class zn extends ys{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zn(e.radius,e.detail)}}class Qt extends ys{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qt(e.radius,e.detail)}}class Ms extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,o=t/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,d=e/r,f=t/l,p=[],v=[],g=[],m=[];for(let u=0;u<h;u++){const S=u*f-o;for(let w=0;w<c;w++){const M=w*d-a;v.push(M,-S,0),g.push(0,0,1),m.push(w/r),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<r;S++){const w=S+c*u,M=S+c*(u+1),T=S+1+c*(u+1),A=S+1+c*u;p.push(w,M,A),p.push(M,T,A)}this.setIndex(p),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.widthSegments,e.heightSegments)}}class pi extends Ut{constructor(e=.5,t=1,n=32,i=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const r=[],l=[],c=[],h=[];let d=e;const f=(t-e)/i,p=new L,v=new it;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const u=a+m/n*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,h.push(v.x,v.y)}d+=f}for(let g=0;g<i;g++){const m=g*(n+1);for(let u=0;u<n;u++){const S=u+m,w=S,M=S+n+1,T=S+n+2,A=S+1;r.push(w,M,A),r.push(M,T,A)}}this.setIndex(r),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class dn extends Ut{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+r,Math.PI);let c=0;const h=[],d=new L,f=new L,p=[],v=[],g=[],m=[];for(let u=0;u<=n;u++){const S=[],w=u/n;let M=0;u===0&&o===0?M=.5/t:u===n&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){const A=T/t;d.x=-e*Math.cos(i+A*a)*Math.sin(o+w*r),d.y=e*Math.cos(o+w*r),d.z=e*Math.sin(i+A*a)*Math.sin(o+w*r),v.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),m.push(A+M,1-w),S.push(c++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){const w=h[u][S+1],M=h[u][S],T=h[u+1][S],A=h[u+1][S+1];(u!==0||o>0)&&p.push(w,M,A),(u!==n-1||l<Math.PI)&&p.push(M,T,A)}this.setIndex(p),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ht extends Ut{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const o=[],r=[],l=[],c=[],h=new L,d=new L,f=new L;for(let p=0;p<=n;p++)for(let v=0;v<=i;v++){const g=v/i*a,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),r.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=i;v++){const g=(i+1)*p+v-1,m=(i+1)*(p-1)+v-1,u=(i+1)*(p-1)+v,S=(i+1)*p+v;o.push(g,m,S),o.push(m,u,S)}this.setIndex(o),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ct extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Eh extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Th extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ir extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ah extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ba=new Mt,Or=new L,Br=new L;class Rh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Or.setFromMatrixPosition(e.matrixWorld),t.position.copy(Or),Br.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Br),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zl extends $l{constructor(e=-1,t=1,n=1,i=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,o=n+e,r=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ch extends Rh{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hr extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Ch}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ph extends ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ih extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Vr(s,e,t,n){const i=Lh(n);switch(t){case Ul:return s*e;case Yo:return s*e/i.components*i.byteLength;case jo:return s*e/i.components*i.byteLength;case Fl:return s*e*2/i.components*i.byteLength;case Ko:return s*e*2/i.components*i.byteLength;case Nl:return s*e*3/i.components*i.byteLength;case yn:return s*e*4/i.components*i.byteLength;case Zo:return s*e*4/i.components*i.byteLength;case ta:case na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ho:case fo:return Math.max(s,16)*Math.max(e,8)/4;case co:case uo:return Math.max(s,8)*Math.max(e,8)/2;case po:case mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case xo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case yo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case wo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case To:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Io:case Lo:case Do:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Uo:case No:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fo:case ko:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lh(s){switch(s){case Tn:case Pl:return{byteLength:1,components:1};case us:case Il:case vs:return{byteLength:2,components:1};case $o:case qo:return{byteLength:2,components:4};case mi:case Xo:case wn:return{byteLength:4,components:1};case Ll:case Dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);function Jl(){let s=null,e=!1,t=null,n=null;function i(a,o){t(a,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function Dh(s){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),r.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:d}}function n(r,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,r),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],g=d[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const g=d[p];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(s.deleteBuffer(l.buffer),e.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:i,remove:a,update:o}}var Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,id=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ld=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,au=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,du=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Su=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Au=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ru=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Du=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ou=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ku=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ju=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,af=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Uh,alphahash_pars_fragment:Nh,alphamap_fragment:Fh,alphamap_pars_fragment:kh,alphatest_fragment:zh,alphatest_pars_fragment:Oh,aomap_fragment:Bh,aomap_pars_fragment:Hh,batching_pars_vertex:Vh,batching_vertex:Gh,begin_vertex:Wh,beginnormal_vertex:Xh,bsdfs:$h,iridescence_fragment:qh,bumpmap_pars_fragment:Yh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:Kh,clipping_planes_pars_vertex:Zh,clipping_planes_vertex:Jh,color_fragment:Qh,color_pars_fragment:ed,color_pars_vertex:td,color_vertex:nd,common:id,cube_uv_reflection_fragment:sd,defaultnormal_vertex:ad,displacementmap_pars_vertex:od,displacementmap_vertex:rd,emissivemap_fragment:ld,emissivemap_pars_fragment:cd,colorspace_fragment:hd,colorspace_pars_fragment:dd,envmap_fragment:ud,envmap_common_pars_fragment:fd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:Td,envmap_vertex:gd,fog_vertex:vd,fog_pars_vertex:_d,fog_fragment:xd,fog_pars_fragment:yd,gradientmap_pars_fragment:Md,lightmap_pars_fragment:bd,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:wd,lights_pars_begin:Ed,lights_toon_fragment:Ad,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Id,lights_physical_pars_fragment:Ld,lights_fragment_begin:Dd,lights_fragment_maps:Ud,lights_fragment_end:Nd,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:Hd,map_particle_fragment:Vd,map_particle_pars_fragment:Gd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Xd,morphinstance_vertex:$d,morphcolor_vertex:qd,morphnormal_vertex:Yd,morphtarget_pars_vertex:jd,morphtarget_vertex:Kd,normal_fragment_begin:Zd,normal_fragment_maps:Jd,normal_pars_fragment:Qd,normal_pars_vertex:eu,normal_vertex:tu,normalmap_pars_fragment:nu,clearcoat_normal_fragment_begin:iu,clearcoat_normal_fragment_maps:su,clearcoat_pars_fragment:au,iridescence_pars_fragment:ou,opaque_fragment:ru,packing:lu,premultiplied_alpha_fragment:cu,project_vertex:hu,dithering_fragment:du,dithering_pars_fragment:uu,roughnessmap_fragment:fu,roughnessmap_pars_fragment:pu,shadowmap_pars_fragment:mu,shadowmap_pars_vertex:gu,shadowmap_vertex:vu,shadowmask_pars_fragment:_u,skinbase_vertex:xu,skinning_pars_vertex:yu,skinning_vertex:Mu,skinnormal_vertex:bu,specularmap_fragment:Su,specularmap_pars_fragment:wu,tonemapping_fragment:Eu,tonemapping_pars_fragment:Tu,transmission_fragment:Au,transmission_pars_fragment:Ru,uv_pars_fragment:Cu,uv_pars_vertex:Pu,uv_vertex:Iu,worldpos_vertex:Lu,background_vert:Du,background_frag:Uu,backgroundCube_vert:Nu,backgroundCube_frag:Fu,cube_vert:ku,cube_frag:zu,depth_vert:Ou,depth_frag:Bu,distanceRGBA_vert:Hu,distanceRGBA_frag:Vu,equirect_vert:Gu,equirect_frag:Wu,linedashed_vert:Xu,linedashed_frag:$u,meshbasic_vert:qu,meshbasic_frag:Yu,meshlambert_vert:ju,meshlambert_frag:Ku,meshmatcap_vert:Zu,meshmatcap_frag:Ju,meshnormal_vert:Qu,meshnormal_frag:ef,meshphong_vert:tf,meshphong_frag:nf,meshphysical_vert:sf,meshphysical_frag:af,meshtoon_vert:of,meshtoon_frag:rf,points_vert:lf,points_frag:cf,shadow_vert:hf,shadow_frag:df,sprite_vert:uf,sprite_frag:ff},me={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},bn={basic:{uniforms:Xt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Xt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Xt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Xt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Xt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Xt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Xt([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Xt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Xt([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Xt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Xt([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Xt([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Xt([me.lights,me.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};bn.physical={uniforms:Xt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const $s={r:0,b:0,g:0},si=new An,pf=new Mt;function mf(s,e,t,n,i,a,o){const r=new Pe(0);let l=a===!0?0:1,c,h,d=null,f=0,p=null;function v(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function g(w){let M=!1;const T=v(w);T===null?u(r,l):T&&T.isColor&&(u(T,1),M=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,M){const T=v(M);T&&(T.isCubeTexture||T.mapping===da)?(h===void 0&&(h=new ge(new yi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Yi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),si.copy(M.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pf.makeRotationFromEuler(si)),h.material.toneMapped=ht.getTransfer(T.colorSpace)!==mt,(d!==T||f!==T.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,p=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ge(new Ms(2,2),new kn({name:"BackgroundMaterial",uniforms:Yi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ht.getTransfer(T.colorSpace)!==mt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,p=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,M){w.getRGB($s,Xl(s)),n.buffers.color.setClear($s.r,$s.g,$s.b,M,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,M=1){r.set(w),l=M,u(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(r,l)},render:g,addToRenderList:m,dispose:S}}function gf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let a=i,o=!1;function r(y,I,k,X,G){let O=!1;const W=d(X,k,I);a!==W&&(a=W,c(a.object)),O=p(y,X,k,G),O&&v(y,X,k,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(y,I,k,X),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,I,k){const X=k.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let O=G[I.id];O===void 0&&(O={},G[I.id]=O);let W=O[X];return W===void 0&&(W=f(l()),O[X]=W),W}function f(y){const I=[],k=[],X=[];for(let G=0;G<t;G++)I[G]=0,k[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:X,object:y,attributes:{},index:null}}function p(y,I,k,X){const G=a.attributes,O=I.attributes;let W=0;const Z=k.getAttributes();for(const H in Z)if(Z[H].location>=0){const pe=G[H];let we=O[H];if(we===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),pe===void 0||pe.attribute!==we||we&&pe.data!==we.data)return!0;W++}return a.attributesNum!==W||a.index!==X}function v(y,I,k,X){const G={},O=I.attributes;let W=0;const Z=k.getAttributes();for(const H in Z)if(Z[H].location>=0){let pe=O[H];pe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor));const we={};we.attribute=pe,pe&&pe.data&&(we.data=pe.data),G[H]=we,W++}a.attributes=G,a.attributesNum=W,a.index=X}function g(){const y=a.newAttributes;for(let I=0,k=y.length;I<k;I++)y[I]=0}function m(y){u(y,0)}function u(y,I){const k=a.newAttributes,X=a.enabledAttributes,G=a.attributeDivisors;k[y]=1,X[y]===0&&(s.enableVertexAttribArray(y),X[y]=1),G[y]!==I&&(s.vertexAttribDivisor(y,I),G[y]=I)}function S(){const y=a.newAttributes,I=a.enabledAttributes;for(let k=0,X=I.length;k<X;k++)I[k]!==y[k]&&(s.disableVertexAttribArray(k),I[k]=0)}function w(y,I,k,X,G,O,W){W===!0?s.vertexAttribIPointer(y,I,k,G,O):s.vertexAttribPointer(y,I,k,X,G,O)}function M(y,I,k,X){g();const G=X.attributes,O=k.getAttributes(),W=I.defaultAttributeValues;for(const Z in O){const H=O[Z];if(H.location>=0){let de=G[Z];if(de===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),de!==void 0){const pe=de.normalized,we=de.itemSize,qe=e.get(de);if(qe===void 0)continue;const dt=qe.buffer,ut=qe.type,Ke=qe.bytesPerElement,j=ut===s.INT||ut===s.UNSIGNED_INT||de.gpuType===Xo;if(de.isInterleavedBufferAttribute){const te=de.data,ye=te.stride,Be=de.offset;if(te.isInstancedInterleavedBuffer){for(let De=0;De<H.locationSize;De++)u(H.location+De,te.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let De=0;De<H.locationSize;De++)m(H.location+De);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let De=0;De<H.locationSize;De++)w(H.location+De,we/H.locationSize,ut,pe,ye*Ke,(Be+we/H.locationSize*De)*Ke,j)}else{if(de.isInstancedBufferAttribute){for(let te=0;te<H.locationSize;te++)u(H.location+te,de.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let te=0;te<H.locationSize;te++)m(H.location+te);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let te=0;te<H.locationSize;te++)w(H.location+te,we/H.locationSize,ut,pe,we*Ke,we/H.locationSize*te*Ke,j)}}else if(W!==void 0){const pe=W[Z];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(H.location,pe);break;case 3:s.vertexAttrib3fv(H.location,pe);break;case 4:s.vertexAttrib4fv(H.location,pe);break;default:s.vertexAttrib1fv(H.location,pe)}}}}S()}function T(){D();for(const y in n){const I=n[y];for(const k in I){const X=I[k];for(const G in X)h(X[G].object),delete X[G];delete I[k]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const I=n[y.id];for(const k in I){const X=I[k];for(const G in X)h(X[G].object),delete X[G];delete I[k]}delete n[y.id]}function C(y){for(const I in n){const k=n[I];if(k[y.id]===void 0)continue;const X=k[y.id];for(const G in X)h(X[G].object),delete X[G];delete k[y.id]}}function D(){b(),o=!0,a!==i&&(a=i,c(a.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:r,reset:D,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function vf(s,e,t){let n;function i(c){n=c}function a(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function r(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];t.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g]*f[g];t.update(v,n,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function _f(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==yn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(C){const D=C===vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Tn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==wn&&!D)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:T,maxSamples:A}}function xf(s){const e=this;let t=null,n=0,i=!1,a=!1;const o=new ri,r=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,u=s.get(d);if(!i||v===null||v.length===0||a&&!m)a?h(null):c();else{const S=a?0:n,w=S*4;let M=u.clippingState||null;l.value=M,M=h(v,f,w,p);for(let T=0;T!==w;++T)M[T]=t[T];u.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const u=p+g*4,S=f.matrixWorldInverse;r.getNormalMatrix(S),(m===null||m.length<u)&&(m=new Float32Array(u));for(let w=0,M=p;w!==g;++w,M+=4)o.copy(d[w]).applyMatrix4(S,r),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function yf(s){let e=new WeakMap;function t(o,r){return r===ao?o.mapping=Xi:r===oo&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const r=o.mapping;if(r===ao||r===oo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mh(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Oi=4,Gr=[.125,.215,.35,.446,.526,.582],hi=20,Ha=new Zl,Wr=new Pe;let Va=null,Ga=0,Wa=0,Xa=!1;const li=(1+Math.sqrt(5))/2,Fi=1/li,Xr=[new L(-li,Fi,0),new L(li,Fi,0),new L(-Fi,0,li),new L(Fi,0,li),new L(0,li,-Fi),new L(0,li,Fi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Mf=new L;class $r{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,a={}){const{size:o=256,position:r=Mf}=a;Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Ga,Wa),this._renderer.xr.enabled=Xa,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:vs,format:yn,colorSpace:qi,depthBuffer:!1},i=qr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qr(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bf(a)),this._blurMaterial=Sf(a,e,t)}return i}_compileMaterial(e){const t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,n,i,a){const l=new mn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Wr),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const g=new yt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new ge(new yi,g);let u=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,u=!0):(g.color.copy(Wr),u=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[w],a.y,a.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[w],a.z)):(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[w]));const T=this._cubeSize;qs(i,M*T,w>2?T:0,T,T),d.setRenderTarget(i),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Xi||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yr());const a=i?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=e;const l=this._cubeSize;qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ha)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=Xr[(i-a-1)%Xr.length];this._blur(e,a-1,a,o,r)}t.autoClear=n}_blur(e,t,n,i,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",a),this._halfBlur(o,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ge(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*hi-1),g=a/v,m=isFinite(a)?1+Math.floor(h*g):hi;m>hi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const u=[];let S=0;for(let C=0;C<hi;++C){const D=C/g,b=Math.exp(-D*D/2);u.push(b),C===0?S+=b:C<m&&(S+=2*b)}for(let C=0;C<u.length;C++)u[C]=u[C]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:w}=this;f.dTheta.value=v,f.mipInt.value=w-n;const M=this._sizeLods[i],T=3*M*(i>w-Oi?i-w+Oi:0),A=4*(this._cubeSize-M);qs(t,T,A,3*M,2*M),l.setRenderTarget(t),l.render(d,Ha)}}function bf(s){const e=[],t=[],n=[];let i=s;const a=s-Oi+1+Gr.length;for(let o=0;o<a;o++){const r=Math.pow(2,i);t.push(r);let l=1/r;o>s-Oi?l=Gr[o-s+Oi-1]:o===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,g=3,m=2,u=1,S=new Float32Array(g*v*p),w=new Float32Array(m*v*p),M=new Float32Array(u*v*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,D=A>2?0:-1,b=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];S.set(b,g*v*A),w.set(f,m*v*A);const y=[A,A,A,A,A,A];M.set(y,u*v*A)}const T=new Ut;T.setAttribute("position",new Jt(S,g)),T.setAttribute("uv",new Jt(w,m)),T.setAttribute("faceIndex",new Jt(M,u)),e.push(T),i>Oi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qr(s,e,t){const n=new gi(s,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Sf(s,e,t){const n=new Float32Array(hi),i=new L(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Yr(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function jr(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function sr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wf(s){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===ao||l===oo,h=l===Xi||l===$i;if(c||h){let d=e.get(r);const f=d!==void 0?d.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==f)return t===null&&(t=new $r(s)),d=c?t.fromEquirectangular(r,d):t.fromCubemap(r,d),d.texture.pmremVersion=r.pmremVersion,e.set(r,d),d.texture;if(d!==void 0)return d.texture;{const p=r.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new $r(s)),d=c?t.fromEquirectangular(r):t.fromCubemap(r),d.texture.pmremVersion=r.pmremVersion,e.set(r,d),r.addEventListener("dispose",a),d.texture):null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function a(r){const l=r.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ef(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tf(s,e,t,n){const i={},a=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete i[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],s.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,v=d.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let w=0,M=S.length;w<M;w+=3){const T=S[w+0],A=S[w+1],C=S[w+2];f.push(T,A,A,C,C,T)}}else if(v!==void 0){const S=v.array;g=v.version;for(let w=0,M=S.length/3-1;w<M;w+=3){const T=w+0,A=w+1,C=w+2;f.push(T,A,A,C,C,T)}}else return;const m=new(Ol(f)?Wl:Gl)(f,1);m.version=g;const u=a.get(d);u&&e.remove(u),a.set(d,m)}function h(d){const f=a.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function Af(s,e,t){let n;function i(f){n=f}let a,o;function r(f){a=f.type,o=f.bytesPerElement}function l(f,p){s.drawElements(n,p,a,f*o),t.update(p,n,1)}function c(f,p,v){v!==0&&(s.drawElementsInstanced(n,p,a,f*o,v),t.update(p,n,v))}function h(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,f,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];t.update(m,n,1)}function d(f,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,f,0,g,0,v);let u=0;for(let S=0;S<v;S++)u+=p[S]*g[S];t.update(u,n,1)}}this.setMode=i,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Rf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,r){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=r*(a/3);break;case s.LINES:t.lines+=r*(a/2);break;case s.LINE_STRIP:t.lines+=r*(a-1);break;case s.LINE_LOOP:t.lines+=r*a;break;case s.POINTS:t.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cf(s,e,t){const n=new WeakMap,i=new Tt;function a(o,r,l){const c=o.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(r);if(f===void 0||f.count!==d){let y=function(){D.dispose(),n.delete(r),r.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const v=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,u=r.morphAttributes.position||[],S=r.morphAttributes.normal||[],w=r.morphAttributes.color||[];let M=0;v===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let T=r.attributes.position.count*M,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*d),D=new Bl(C,T,A,d);D.type=wn,D.needsUpdate=!0;const b=M*4;for(let I=0;I<d;I++){const k=u[I],X=S[I],G=w[I],O=T*A*4*I;for(let W=0;W<k.count;W++){const Z=W*b;v===!0&&(i.fromBufferAttribute(k,W),C[O+Z+0]=i.x,C[O+Z+1]=i.y,C[O+Z+2]=i.z,C[O+Z+3]=0),g===!0&&(i.fromBufferAttribute(X,W),C[O+Z+4]=i.x,C[O+Z+5]=i.y,C[O+Z+6]=i.z,C[O+Z+7]=0),m===!0&&(i.fromBufferAttribute(G,W),C[O+Z+8]=i.x,C[O+Z+9]=i.y,C[O+Z+10]=i.z,C[O+Z+11]=G.itemSize===4?i.w:1)}}f={count:d,texture:D,size:new it(T,A)},n.set(r,f),r.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=r.morphTargetsRelative?1:1-v;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:a}}function Pf(s,e,t,n){let i=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Ql=new Yt,Kr=new jl(1,1),ec=new Bl,tc=new Jc,nc=new ql,Zr=[],Jr=[],Qr=new Float32Array(16),el=new Float32Array(9),tl=new Float32Array(4);function Ki(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=Zr[i];if(a===void 0&&(a=new Float32Array(i),Zr[i]=a),e!==0){n.toArray(a,0);for(let o=1,r=0;o!==e;++o)r+=t,s[o].toArray(a,r)}return a}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ua(s,e){let t=Jr[e];t===void 0&&(t=new Int32Array(e),Jr[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function If(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function Df(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function Uf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function Nf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;tl.set(n),s.uniformMatrix2fv(this.addr,!1,tl),Ft(t,n)}}function Ff(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;el.set(n),s.uniformMatrix3fv(this.addr,!1,el),Ft(t,n)}}function kf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Qr.set(n),s.uniformMatrix4fv(this.addr,!1,Qr),Ft(t,n)}}function zf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Ft(t,e)}}function Bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Ft(t,e)}}function Hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Ft(t,e)}}function Vf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Ft(t,e)}}function Wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Ft(t,e)}}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Ft(t,e)}}function $f(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Kr.compareFunction=zl,a=Kr):a=Ql,t.setTexture2D(e||a,i)}function qf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tc,i)}function Yf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nc,i)}function jf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ec,i)}function Kf(s){switch(s){case 5126:return If;case 35664:return Lf;case 35665:return Df;case 35666:return Uf;case 35674:return Nf;case 35675:return Ff;case 35676:return kf;case 5124:case 35670:return zf;case 35667:case 35671:return Of;case 35668:case 35672:return Bf;case 35669:case 35673:return Hf;case 5125:return Vf;case 36294:return Gf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return jf}}function Zf(s,e){s.uniform1fv(this.addr,e)}function Jf(s,e){const t=Ki(e,this.size,2);s.uniform2fv(this.addr,t)}function Qf(s,e){const t=Ki(e,this.size,3);s.uniform3fv(this.addr,t)}function ep(s,e){const t=Ki(e,this.size,4);s.uniform4fv(this.addr,t)}function tp(s,e){const t=Ki(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function np(s,e){const t=Ki(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ip(s,e){const t=Ki(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function sp(s,e){s.uniform1iv(this.addr,e)}function ap(s,e){s.uniform2iv(this.addr,e)}function op(s,e){s.uniform3iv(this.addr,e)}function rp(s,e){s.uniform4iv(this.addr,e)}function lp(s,e){s.uniform1uiv(this.addr,e)}function cp(s,e){s.uniform2uiv(this.addr,e)}function hp(s,e){s.uniform3uiv(this.addr,e)}function dp(s,e){s.uniform4uiv(this.addr,e)}function up(s,e,t){const n=this.cache,i=e.length,a=ua(t,i);Nt(n,a)||(s.uniform1iv(this.addr,a),Ft(n,a));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ql,a[o])}function fp(s,e,t){const n=this.cache,i=e.length,a=ua(t,i);Nt(n,a)||(s.uniform1iv(this.addr,a),Ft(n,a));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||tc,a[o])}function pp(s,e,t){const n=this.cache,i=e.length,a=ua(t,i);Nt(n,a)||(s.uniform1iv(this.addr,a),Ft(n,a));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||nc,a[o])}function mp(s,e,t){const n=this.cache,i=e.length,a=ua(t,i);Nt(n,a)||(s.uniform1iv(this.addr,a),Ft(n,a));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ec,a[o])}function gp(s){switch(s){case 5126:return Zf;case 35664:return Jf;case 35665:return Qf;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return sp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return rp;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}class vp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kf(t.type)}}class _p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gp(t.type)}}class xp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,o=i.length;a!==o;++a){const r=i[a];r.setValue(e,t[r.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function nl(s,e){s.seq.push(e),s.map[e.id]=e}function yp(s,e,t){const n=s.name,i=n.length;for($a.lastIndex=0;;){const a=$a.exec(n),o=$a.lastIndex;let r=a[1];const l=a[2]==="]",c=a[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===i){nl(t,c===void 0?new vp(r,s,e):new _p(r,s,e));break}else{let d=t.map[r];d===void 0&&(d=new xp(r),nl(t,d)),t=d}}}class aa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),o=e.getUniformLocation(t,a.name);yp(a,o,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,o=t.length;a!==o;++a){const r=t[a],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function il(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Mp=37297;let bp=0;function Sp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=i;o<a;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}const sl=new Je;function wp(s){ht._getMatrix(sl,ht.workingColorSpace,s);const e=`mat3( ${sl.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(s)){case oa:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function al(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Sp(s.getShaderSource(e),r)}else return a}function Ep(s,e){const t=wp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tp(s,e){let t;switch(e){case Ac:t="Linear";break;case Rc:t="Reinhard";break;case Cc:t="Cineon";break;case Rl:t="ACESFilmic";break;case Ic:t="AgX";break;case Lc:t="Neutral";break;case Pc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ys=new L;function Ap(){ht.getLuminanceCoefficients(Ys);const s=Ys.x.toFixed(4),e=Ys.y.toFixed(4),t=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function Cp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),o=a.name;let r=1;a.type===s.FLOAT_MAT2&&(r=2),a.type===s.FLOAT_MAT3&&(r=3),a.type===s.FLOAT_MAT4&&(r=4),t[o]={type:a.type,location:s.getAttribLocation(e,o),locationSize:r}}return t}function ls(s){return s!==""}function ol(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(s){return s.replace(Ip,Dp)}const Lp=new Map;function Dp(s,e){let t=Qe[e];if(t===void 0){const n=Lp.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ho(t)}const Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(s){return s.replace(Up,Np)}function Np(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function cl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===El?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function kp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xi:case $i:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zp(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===$i&&(e="ENVMAP_MODE_REFRACTION"),e}function Op(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Al:e="ENVMAP_BLENDING_MULTIPLY";break;case Ec:e="ENVMAP_BLENDING_MIX";break;case Tc:e="ENVMAP_BLENDING_ADD";break}return e}function Bp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hp(s,e,t,n){const i=s.getContext(),a=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=Fp(t),c=kp(t),h=zp(t),d=Op(t),f=Bp(t),p=Rp(t),v=Cp(a),g=i.createProgram();let m,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ls).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ls).join(`
`),u.length>0&&(u+=`
`)):(m=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),u=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Zn?Tp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Ep("linearToOutputTexel",t.outputColorSpace),Ap(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),o=Ho(o),o=ol(o,t),o=rl(o,t),r=Ho(r),r=ol(r,t),r=rl(r,t),o=ll(o),r=ll(r),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===fr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=S+m+o,M=S+u+r,T=il(i,i.VERTEX_SHADER,w),A=il(i,i.FRAGMENT_SHADER,M);i.attachShader(g,T),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(I){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(g)||"",X=i.getShaderInfoLog(T)||"",G=i.getShaderInfoLog(A)||"",O=k.trim(),W=X.trim(),Z=G.trim();let H=!0,de=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,T,A);else{const pe=al(i,T,"vertex"),we=al(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+pe+`
`+we)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(W===""||Z==="")&&(de=!1);de&&(I.diagnostics={runnable:H,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:Z,prefix:u}})}i.deleteShader(T),i.deleteShader(A),D=new aa(i,g),b=Pp(i,g)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Mp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=A,this}let Vp=0;class Gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wp(e),t.set(e,n)),n}}class Wp{constructor(e){this.id=Vp++,this.code=e,this.usedTimes=0}}function Xp(s,e,t,n,i,a,o){const r=new Hl,l=new Gp,c=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,I,k,X){const G=k.fog,O=X.geometry,W=b.isMeshStandardMaterial?k.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),H=Z&&Z.mapping===da?Z.image.height:null,de=v[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,we=pe!==void 0?pe.length:0;let qe=0;O.morphAttributes.position!==void 0&&(qe=1),O.morphAttributes.normal!==void 0&&(qe=2),O.morphAttributes.color!==void 0&&(qe=3);let dt,ut,Ke,j;if(de){const je=bn[de];dt=je.vertexShader,ut=je.fragmentShader}else dt=b.vertexShader,ut=b.fragmentShader,l.update(b),Ke=l.getVertexShaderID(b),j=l.getFragmentShaderID(b);const te=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Be=X.isInstancedMesh===!0,De=X.isBatchedMesh===!0,et=!!b.map,It=!!b.matcap,R=!!Z,ft=!!b.aoMap,We=!!b.lightMap,He=!!b.bumpMap,Ee=!!b.normalMap,vt=!!b.displacementMap,Te=!!b.emissiveMap,Ye=!!b.metalnessMap,Rt=!!b.roughnessMap,wt=b.anisotropy>0,E=b.clearcoat>0,_=b.dispersion>0,z=b.iridescence>0,q=b.sheen>0,ne=b.transmission>0,$=wt&&!!b.anisotropyMap,Ie=E&&!!b.clearcoatMap,le=E&&!!b.clearcoatNormalMap,Le=E&&!!b.clearcoatRoughnessMap,Ae=z&&!!b.iridescenceMap,ae=z&&!!b.iridescenceThicknessMap,ve=q&&!!b.sheenColorMap,Ue=q&&!!b.sheenRoughnessMap,Re=!!b.specularMap,ue=!!b.specularColorMap,$e=!!b.specularIntensityMap,U=ne&&!!b.transmissionMap,oe=ne&&!!b.thicknessMap,ce=!!b.gradientMap,be=!!b.alphaMap,ie=b.alphaTest>0,ee=!!b.alphaHash,Ce=!!b.extensions;let Ve=Zn;b.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ve=s.toneMapping);const pt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:dt,fragmentShader:ut,defines:b.defines,customVertexShaderID:Ke,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:De,batchingColor:De&&X._colorsTexture!==null,instancing:Be,instancingColor:Be&&X.instanceColor!==null,instancingMorph:Be&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qi,alphaToCoverage:!!b.alphaToCoverage,map:et,matcap:It,envMap:R,envMapMode:R&&Z.mapping,envMapCubeUVHeight:H,aoMap:ft,lightMap:We,bumpMap:He,normalMap:Ee,displacementMap:f&&vt,emissiveMap:Te,normalMapObjectSpace:Ee&&b.normalMapType===Fc,normalMapTangentSpace:Ee&&b.normalMapType===kl,metalnessMap:Ye,roughnessMap:Rt,anisotropy:wt,anisotropyMap:$,clearcoat:E,clearcoatMap:Ie,clearcoatNormalMap:le,clearcoatRoughnessMap:Le,dispersion:_,iridescence:z,iridescenceMap:Ae,iridescenceThicknessMap:ae,sheen:q,sheenColorMap:ve,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:ue,specularIntensityMap:$e,transmission:ne,transmissionMap:U,thicknessMap:oe,gradientMap:ce,opaque:b.transparent===!1&&b.blending===Vi&&b.alphaToCoverage===!1,alphaMap:be,alphaTest:ie,alphaHash:ee,combine:b.combine,mapUv:et&&g(b.map.channel),aoMapUv:ft&&g(b.aoMap.channel),lightMapUv:We&&g(b.lightMap.channel),bumpMapUv:He&&g(b.bumpMap.channel),normalMapUv:Ee&&g(b.normalMap.channel),displacementMapUv:vt&&g(b.displacementMap.channel),emissiveMapUv:Te&&g(b.emissiveMap.channel),metalnessMapUv:Ye&&g(b.metalnessMap.channel),roughnessMapUv:Rt&&g(b.roughnessMap.channel),anisotropyMapUv:$&&g(b.anisotropyMap.channel),clearcoatMapUv:Ie&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(b.sheenRoughnessMap.channel),specularMapUv:Re&&g(b.specularMap.channel),specularColorMapUv:ue&&g(b.specularColorMap.channel),specularIntensityMapUv:$e&&g(b.specularIntensityMap.channel),transmissionMapUv:U&&g(b.transmissionMap.channel),thicknessMapUv:oe&&g(b.thicknessMap.channel),alphaMapUv:be&&g(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ee||wt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!O.attributes.uv&&(et||be),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:et&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===mt,decodeVideoTextureEmissive:Te&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bt,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function u(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)y.push(I),y.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(S(y,b),w(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function w(b,y){r.disableAll(),y.supportsVertexTextures&&r.enable(0),y.instancing&&r.enable(1),y.instancingColor&&r.enable(2),y.instancingMorph&&r.enable(3),y.matcap&&r.enable(4),y.envMap&&r.enable(5),y.normalMapObjectSpace&&r.enable(6),y.normalMapTangentSpace&&r.enable(7),y.clearcoat&&r.enable(8),y.iridescence&&r.enable(9),y.alphaTest&&r.enable(10),y.vertexColors&&r.enable(11),y.vertexAlphas&&r.enable(12),y.vertexUv1s&&r.enable(13),y.vertexUv2s&&r.enable(14),y.vertexUv3s&&r.enable(15),y.vertexTangents&&r.enable(16),y.anisotropy&&r.enable(17),y.alphaHash&&r.enable(18),y.batching&&r.enable(19),y.dispersion&&r.enable(20),y.batchingColor&&r.enable(21),y.gradientMap&&r.enable(22),b.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),b.push(r.mask)}function M(b){const y=v[b.type];let I;if(y){const k=bn[y];I=dh.clone(k.uniforms)}else I=b.uniforms;return I}function T(b,y){let I;for(let k=0,X=h.length;k<X;k++){const G=h[k];if(G.cacheKey===y){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Hp(s,y,b,a),h.push(I)),I}function A(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:D}}function $p(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let r=s.get(o);return r===void 0&&(r={},s.set(o,r)),r}function n(o){s.delete(o)}function i(o,r,l){s.get(o)[r]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function qp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function dl(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,p,v,g,m){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},s[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=g,u.group=m),e++,u}function r(d,f,p,v,g,m){const u=o(d,f,p,v,g,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):t.push(u)}function l(d,f,p,v,g,m){const u=o(d,f,p,v,g,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||qp),n.length>1&&n.sort(f||hl),i.length>1&&i.sort(f||hl)}function h(){for(let d=e,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:r,unshift:l,finish:h,sort:c}}function Yp(){let s=new WeakMap;function e(n,i){const a=s.get(n);let o;return a===void 0?(o=new dl,s.set(n,[o])):i>=a.length?(o=new dl,a.push(o)):o=a[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function jp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function Kp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Zp=0;function Jp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qp(s){const e=new jp,t=Kp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,a=new Mt,o=new Mt;function r(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,v=0,g=0,m=0,u=0,S=0,w=0,M=0,T=0,A=0,C=0;c.sort(Jp);for(let b=0,y=c.length;b<y;b++){const I=c[b],k=I.color,X=I.intensity,G=I.distance,O=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*X,d+=k.g*X,f+=k.b*X;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],X);C++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,H=t.get(I);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=W,p++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(k).multiplyScalar(X),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[g]=W;const Z=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,Z.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[g]=Z.matrix,I.castShadow){const H=t.get(I);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=O,M++}g++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(k).multiplyScalar(X),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const Z=I.shadow,H=t.get(I);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=O,n.pointShadowMatrix[v]=I.shadow.matrix,w++}n.point[v]=W,v++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(X),W.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[u]=W,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==S||D.numPointShadows!==w||D.numSpotShadows!==M||D.numSpotMaps!==T||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.directionalLength=p,D.pointLength=v,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=S,D.numPointShadows=w,D.numSpotShadows=M,D.numSpotMaps=T,D.numLightProbes=C,n.version=Zp++)}function l(c,h){let d=0,f=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){const w=c[u];if(w.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(w.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:r,setupView:l,state:n}}function ul(s){const e=new Qp(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function r(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:r,setupLightsView:l,pushLight:a,pushShadow:o}}function em(s){let e=new WeakMap;function t(i,a=0){const o=e.get(i);let r;return o===void 0?(r=new ul(s),e.set(i,[r])):a>=o.length?(r=new ul(s),o.push(r)):r=o[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function im(s,e,t){let n=new tr;const i=new it,a=new it,o=new Tt,r=new Eh({depthPacking:Nc}),l=new Th,c={},h=t.maxTextureSize,d={[Fn]:qt,[qt]:Fn,[Bt]:Bt},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:tm,fragmentShader:nm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ut;v.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ge(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let u=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),y=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Kn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=u!==Dn&&this.type===Dn,G=u===Dn&&this.type!==Dn;for(let O=0,W=A.length;O<W;O++){const Z=A[O],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const de=H.getFrameExtents();if(i.multiply(de),a.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/de.x),i.x=a.x*de.x,H.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/de.y),i.y=a.y*de.y,H.mapSize.y=a.y)),H.map===null||X===!0||G===!0){const we=this.type!==Dn?{minFilter:hn,magFilter:hn}:{};H.map!==null&&H.map.dispose(),H.map=new gi(i.x,i.y,we),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const pe=H.getViewportCount();for(let we=0;we<pe;we++){const qe=H.getViewport(we);o.set(a.x*qe.x,a.y*qe.y,a.x*qe.z,a.y*qe.w),k.viewport(o),H.updateMatrices(Z,we),n=H.getFrustum(),M(C,D,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Dn&&S(H,D),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(b,y,I)};function S(A,C){const D=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new gi(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,D,f,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,D,p,g,null)}function w(A,C,D,b){let y=null;const I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)y=I;else if(y=D.isPointLight===!0?l:r,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=y.uuid,X=C.uuid;let G=c[k];G===void 0&&(G={},c[k]=G);let O=G[X];O===void 0&&(O=y.clone(),G[X]=O,C.addEventListener("dispose",T)),y=O}if(y.visible=C.visible,y.wireframe=C.wireframe,b===Dn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=s.properties.get(y);k.light=D}return y}function M(A,C,D,b,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const X=e.update(A),G=A.material;if(Array.isArray(G)){const O=X.groups;for(let W=0,Z=O.length;W<Z;W++){const H=O[W],de=G[H.materialIndex];if(de&&de.visible){const pe=w(A,de,b,y);A.onBeforeShadow(s,A,C,D,X,pe,H),s.renderBufferDirect(D,null,X,pe,A,H),A.onAfterShadow(s,A,C,D,X,pe,H)}}}else if(G.visible){const O=w(A,G,b,y);A.onBeforeShadow(s,A,C,D,X,O,null),s.renderBufferDirect(D,null,X,O,A,null),A.onAfterShadow(s,A,C,D,X,O,null)}}const k=A.children;for(let X=0,G=k.length;X<G;X++)M(k[X],C,D,b,y)}function T(A){A.target.removeEventListener("dispose",T);for(const D in c){const b=c[D],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const sm={[Ja]:Qa,[eo]:io,[to]:so,[Wi]:no,[Qa]:Ja,[io]:eo,[so]:to,[no]:Wi};function am(s,e){function t(){let U=!1;const oe=new Tt;let ce=null;const be=new Tt(0,0,0,0);return{setMask:function(ie){ce!==ie&&!U&&(s.colorMask(ie,ie,ie,ie),ce=ie)},setLocked:function(ie){U=ie},setClear:function(ie,ee,Ce,Ve,pt){pt===!0&&(ie*=Ve,ee*=Ve,Ce*=Ve),oe.set(ie,ee,Ce,Ve),be.equals(oe)===!1&&(s.clearColor(ie,ee,Ce,Ve),be.copy(oe))},reset:function(){U=!1,ce=null,be.set(-1,0,0,0)}}}function n(){let U=!1,oe=!1,ce=null,be=null,ie=null;return{setReversed:function(ee){if(oe!==ee){const Ce=e.get("EXT_clip_control");ee?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;const Ve=ie;ie=null,this.setClear(Ve)}},getReversed:function(){return oe},setTest:function(ee){ee?te(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ee){ce!==ee&&!U&&(s.depthMask(ee),ce=ee)},setFunc:function(ee){if(oe&&(ee=sm[ee]),be!==ee){switch(ee){case Ja:s.depthFunc(s.NEVER);break;case Qa:s.depthFunc(s.ALWAYS);break;case eo:s.depthFunc(s.LESS);break;case Wi:s.depthFunc(s.LEQUAL);break;case to:s.depthFunc(s.EQUAL);break;case no:s.depthFunc(s.GEQUAL);break;case io:s.depthFunc(s.GREATER);break;case so:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=ee}},setLocked:function(ee){U=ee},setClear:function(ee){ie!==ee&&(oe&&(ee=1-ee),s.clearDepth(ee),ie=ee)},reset:function(){U=!1,ce=null,be=null,ie=null,oe=!1}}}function i(){let U=!1,oe=null,ce=null,be=null,ie=null,ee=null,Ce=null,Ve=null,pt=null;return{setTest:function(je){U||(je?te(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(je){oe!==je&&!U&&(s.stencilMask(je),oe=je)},setFunc:function(je,en,jt){(ce!==je||be!==en||ie!==jt)&&(s.stencilFunc(je,en,jt),ce=je,be=en,ie=jt)},setOp:function(je,en,jt){(ee!==je||Ce!==en||Ve!==jt)&&(s.stencilOp(je,en,jt),ee=je,Ce=en,Ve=jt)},setLocked:function(je){U=je},setClear:function(je){pt!==je&&(s.clearStencil(je),pt=je)},reset:function(){U=!1,oe=null,ce=null,be=null,ie=null,ee=null,Ce=null,Ve=null,pt=null}}}const a=new t,o=new n,r=new i,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,u=null,S=null,w=null,M=null,T=null,A=null,C=new Pe(0,0,0),D=0,b=!1,y=null,I=null,k=null,X=null,G=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Z>=2);let de=null,pe={};const we=s.getParameter(s.SCISSOR_BOX),qe=s.getParameter(s.VIEWPORT),dt=new Tt().fromArray(we),ut=new Tt().fromArray(qe);function Ke(U,oe,ce,be){const ie=new Uint8Array(4),ee=s.createTexture();s.bindTexture(U,ee),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<ce;Ce++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(oe+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return ee}const j={};j[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),r.setClear(0),te(s.DEPTH_TEST),o.setFunc(Wi),He(!1),Ee(lr),te(s.CULL_FACE),ft(Kn);function te(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function ye(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Be(U,oe){return d[U]!==oe?(s.bindFramebuffer(U,oe),d[U]=oe,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=oe),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function De(U,oe){let ce=p,be=!1;if(U){ce=f.get(oe),ce===void 0&&(ce=[],f.set(oe,ce));const ie=U.textures;if(ce.length!==ie.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,Ce=ie.length;ee<Ce;ee++)ce[ee]=s.COLOR_ATTACHMENT0+ee;ce.length=ie.length,be=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,be=!0);be&&s.drawBuffers(ce)}function et(U){return v!==U?(s.useProgram(U),v=U,!0):!1}const It={[ci]:s.FUNC_ADD,[lc]:s.FUNC_SUBTRACT,[cc]:s.FUNC_REVERSE_SUBTRACT};It[hc]=s.MIN,It[dc]=s.MAX;const R={[uc]:s.ZERO,[fc]:s.ONE,[pc]:s.SRC_COLOR,[Ka]:s.SRC_ALPHA,[yc]:s.SRC_ALPHA_SATURATE,[_c]:s.DST_COLOR,[gc]:s.DST_ALPHA,[mc]:s.ONE_MINUS_SRC_COLOR,[Za]:s.ONE_MINUS_SRC_ALPHA,[xc]:s.ONE_MINUS_DST_COLOR,[vc]:s.ONE_MINUS_DST_ALPHA,[Mc]:s.CONSTANT_COLOR,[bc]:s.ONE_MINUS_CONSTANT_COLOR,[Sc]:s.CONSTANT_ALPHA,[wc]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(U,oe,ce,be,ie,ee,Ce,Ve,pt,je){if(U===Kn){g===!0&&(ye(s.BLEND),g=!1);return}if(g===!1&&(te(s.BLEND),g=!0),U!==rc){if(U!==m||je!==b){if((u!==ci||M!==ci)&&(s.blendEquation(s.FUNC_ADD),u=ci,M=ci),je)switch(U){case Vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $t:s.blendFunc(s.ONE,s.ONE);break;case cr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hr:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $t:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case cr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,w=null,T=null,A=null,C.set(0,0,0),D=0,m=U,b=je}return}ie=ie||oe,ee=ee||ce,Ce=Ce||be,(oe!==u||ie!==M)&&(s.blendEquationSeparate(It[oe],It[ie]),u=oe,M=ie),(ce!==S||be!==w||ee!==T||Ce!==A)&&(s.blendFuncSeparate(R[ce],R[be],R[ee],R[Ce]),S=ce,w=be,T=ee,A=Ce),(Ve.equals(C)===!1||pt!==D)&&(s.blendColor(Ve.r,Ve.g,Ve.b,pt),C.copy(Ve),D=pt),m=U,b=!1}function We(U,oe){U.side===Bt?ye(s.CULL_FACE):te(s.CULL_FACE);let ce=U.side===qt;oe&&(ce=!ce),He(ce),U.blending===Vi&&U.transparent===!1?ft(Kn):ft(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),a.setMask(U.colorWrite);const be=U.stencilWrite;r.setTest(be),be&&(r.setMask(U.stencilWriteMask),r.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),r.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(U){y!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),y=U)}function Ee(U){U!==ac?(te(s.CULL_FACE),U!==I&&(U===lr?s.cullFace(s.BACK):U===oc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),I=U}function vt(U){U!==k&&(W&&s.lineWidth(U),k=U)}function Te(U,oe,ce){U?(te(s.POLYGON_OFFSET_FILL),(X!==oe||G!==ce)&&(s.polygonOffset(oe,ce),X=oe,G=ce)):ye(s.POLYGON_OFFSET_FILL)}function Ye(U){U?te(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Rt(U){U===void 0&&(U=s.TEXTURE0+O-1),de!==U&&(s.activeTexture(U),de=U)}function wt(U,oe,ce){ce===void 0&&(de===null?ce=s.TEXTURE0+O-1:ce=de);let be=pe[ce];be===void 0&&(be={type:void 0,texture:void 0},pe[ce]=be),(be.type!==U||be.texture!==oe)&&(de!==ce&&(s.activeTexture(ce),de=ce),s.bindTexture(U,oe||j[U]),be.type=U,be.texture=oe)}function E(){const U=pe[de];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(U){dt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),dt.copy(U))}function Ue(U){ut.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ut.copy(U))}function Re(U,oe){let ce=c.get(oe);ce===void 0&&(ce=new WeakMap,c.set(oe,ce));let be=ce.get(U);be===void 0&&(be=s.getUniformBlockIndex(oe,U.name),ce.set(U,be))}function ue(U,oe){const be=c.get(oe).get(U);l.get(oe)!==be&&(s.uniformBlockBinding(oe,be,U.__bindingPointIndex),l.set(oe,be))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},de=null,pe={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,u=null,S=null,w=null,M=null,T=null,A=null,C=new Pe(0,0,0),D=0,b=!1,y=null,I=null,k=null,X=null,G=null,dt.set(0,0,s.canvas.width,s.canvas.height),ut.set(0,0,s.canvas.width,s.canvas.height),a.reset(),o.reset(),r.reset()}return{buffers:{color:a,depth:o,stencil:r},enable:te,disable:ye,bindFramebuffer:Be,drawBuffers:De,useProgram:et,setBlending:ft,setMaterial:We,setFlipSided:He,setCullFace:Ee,setLineWidth:vt,setPolygonOffset:Te,setScissorTest:Ye,activeTexture:Rt,bindTexture:wt,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:Ae,texImage3D:ae,updateUBOMapping:Re,uniformBlockBinding:ue,texStorage2D:le,texStorage3D:Le,texSubImage2D:q,texSubImage3D:ne,compressedTexSubImage2D:$,compressedTexSubImage3D:Ie,scissor:ve,viewport:Ue,reset:$e}}function om(s,e,t,n,i,a,o){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return p?new OffscreenCanvas(E,_):la("canvas")}function g(E,_,z){let q=1;const ne=wt(E);if((ne.width>z||ne.height>z)&&(q=z/Math.max(ne.width,ne.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(q*ne.width),Ie=Math.floor(q*ne.height);d===void 0&&(d=v($,Ie));const le=_?v($,Ie):d;return le.width=$,le.height=Ie,le.getContext("2d").drawImage(E,0,0,$,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Ie+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(E,_,z,q,ne=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=_;if(_===s.RED&&(z===s.FLOAT&&($=s.R32F),z===s.HALF_FLOAT&&($=s.R16F),z===s.UNSIGNED_BYTE&&($=s.R8)),_===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.R8UI),z===s.UNSIGNED_SHORT&&($=s.R16UI),z===s.UNSIGNED_INT&&($=s.R32UI),z===s.BYTE&&($=s.R8I),z===s.SHORT&&($=s.R16I),z===s.INT&&($=s.R32I)),_===s.RG&&(z===s.FLOAT&&($=s.RG32F),z===s.HALF_FLOAT&&($=s.RG16F),z===s.UNSIGNED_BYTE&&($=s.RG8)),_===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RG8UI),z===s.UNSIGNED_SHORT&&($=s.RG16UI),z===s.UNSIGNED_INT&&($=s.RG32UI),z===s.BYTE&&($=s.RG8I),z===s.SHORT&&($=s.RG16I),z===s.INT&&($=s.RG32I)),_===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGB8UI),z===s.UNSIGNED_SHORT&&($=s.RGB16UI),z===s.UNSIGNED_INT&&($=s.RGB32UI),z===s.BYTE&&($=s.RGB8I),z===s.SHORT&&($=s.RGB16I),z===s.INT&&($=s.RGB32I)),_===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGBA8UI),z===s.UNSIGNED_SHORT&&($=s.RGBA16UI),z===s.UNSIGNED_INT&&($=s.RGBA32UI),z===s.BYTE&&($=s.RGBA8I),z===s.SHORT&&($=s.RGBA16I),z===s.INT&&($=s.RGBA32I)),_===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),_===s.RGBA){const Ie=ne?oa:ht.getTransfer(q);z===s.FLOAT&&($=s.RGBA32F),z===s.HALF_FLOAT&&($=s.RGBA16F),z===s.UNSIGNED_BYTE&&($=Ie===mt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(E,_){let z;return E?_===null||_===mi||_===fs?z=s.DEPTH24_STENCIL8:_===wn?z=s.DEPTH32F_STENCIL8:_===us&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===mi||_===fs?z=s.DEPTH_COMPONENT24:_===wn?z=s.DEPTH_COMPONENT32F:_===us&&(z=s.DEPTH_COMPONENT16),z}function T(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==hn&&E.minFilter!==Sn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){const _=E.target;_.removeEventListener("dispose",A),D(_),_.isVideoTexture&&h.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),y(_)}function D(E){const _=n.get(E);if(_.__webglInit===void 0)return;const z=E.source,q=f.get(z);if(q){const ne=q[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(E),Object.keys(q).length===0&&f.delete(z)}n.remove(E)}function b(E){const _=n.get(E);s.deleteTexture(_.__webglTexture);const z=E.source,q=f.get(z);delete q[_.__cacheKey],o.memory.textures--}function y(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let ne=0;ne<_.__webglFramebuffer[q].length;ne++)s.deleteFramebuffer(_.__webglFramebuffer[q][ne]);else s.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)s.deleteFramebuffer(_.__webglFramebuffer[q]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=E.textures;for(let q=0,ne=z.length;q<ne;q++){const $=n.get(z[q]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(E)}let I=0;function k(){I=0}function X(){const E=I;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),I+=1,E}function G(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function O(E,_){const z=n.get(E);if(E.isVideoTexture&&Ye(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,E,_);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+_)}function W(E,_){const z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){j(z,E,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+_)}function Z(E,_){const z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){j(z,E,_);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+_)}function H(E,_){const z=n.get(E);if(E.version>0&&z.__version!==E.version){te(z,E,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+_)}const de={[ro]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[lo]:s.MIRRORED_REPEAT},pe={[hn]:s.NEAREST,[Dc]:s.NEAREST_MIPMAP_NEAREST,[Ss]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[pa]:s.LINEAR_MIPMAP_NEAREST,[ui]:s.LINEAR_MIPMAP_LINEAR},we={[kc]:s.NEVER,[Gc]:s.ALWAYS,[zc]:s.LESS,[zl]:s.LEQUAL,[Oc]:s.EQUAL,[Vc]:s.GEQUAL,[Bc]:s.GREATER,[Hc]:s.NOTEQUAL};function qe(E,_){if(_.type===wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Sn||_.magFilter===pa||_.magFilter===Ss||_.magFilter===ui||_.minFilter===Sn||_.minFilter===pa||_.minFilter===Ss||_.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,de[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,de[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,de[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,pe[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==Ss&&_.minFilter!==ui||_.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function dt(E,_){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));const q=_.source;let ne=f.get(q);ne===void 0&&(ne={},f.set(q,ne));const $=G(_);if($!==E.__cacheKey){ne[$]===void 0&&(ne[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[$].usedTimes++;const Ie=ne[E.__cacheKey];Ie!==void 0&&(ne[E.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(_)),E.__cacheKey=$,E.__webglTexture=ne[$].texture}return z}function ut(E,_,z){return Math.floor(Math.floor(E/z)/_)}function Ke(E,_,z,q){const $=E.updateRanges;if($.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,z,q,_.data);else{$.sort((ae,ve)=>ae.start-ve.start);let Ie=0;for(let ae=1;ae<$.length;ae++){const ve=$[Ie],Ue=$[ae],Re=ve.start+ve.count,ue=ut(Ue.start,_.width,4),$e=ut(ve.start,_.width,4);Ue.start<=Re+1&&ue===$e&&ut(Ue.start+Ue.count-1,_.width,4)===ue?ve.count=Math.max(ve.count,Ue.start+Ue.count-ve.start):(++Ie,$[Ie]=Ue)}$.length=Ie+1;const le=s.getParameter(s.UNPACK_ROW_LENGTH),Le=s.getParameter(s.UNPACK_SKIP_PIXELS),Ae=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let ae=0,ve=$.length;ae<ve;ae++){const Ue=$[ae],Re=Math.floor(Ue.start/4),ue=Math.ceil(Ue.count/4),$e=Re%_.width,U=Math.floor(Re/_.width),oe=ue,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,$e,U,oe,ce,z,q,_.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Le),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function j(E,_,z){let q=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=s.TEXTURE_3D);const ne=dt(E,_),$=_.source;t.bindTexture(q,E.__webglTexture,s.TEXTURE0+z);const Ie=n.get($);if($.version!==Ie.__version||ne===!0){t.activeTexture(s.TEXTURE0+z);const le=ht.getPrimaries(ht.workingColorSpace),Le=_.colorSpace===qn?null:ht.getPrimaries(_.colorSpace),Ae=_.colorSpace===qn||le===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ae=g(_.image,!1,i.maxTextureSize);ae=Rt(_,ae);const ve=a.convert(_.format,_.colorSpace),Ue=a.convert(_.type);let Re=w(_.internalFormat,ve,Ue,_.colorSpace,_.isVideoTexture);qe(q,_);let ue;const $e=_.mipmaps,U=_.isVideoTexture!==!0,oe=Ie.__version===void 0||ne===!0,ce=$.dataReady,be=T(_,ae);if(_.isDepthTexture)Re=M(_.format===ms,_.type),oe&&(U?t.texStorage2D(s.TEXTURE_2D,1,Re,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Re,ae.width,ae.height,0,ve,Ue,null));else if(_.isDataTexture)if($e.length>0){U&&oe&&t.texStorage2D(s.TEXTURE_2D,be,Re,$e[0].width,$e[0].height);for(let ie=0,ee=$e.length;ie<ee;ie++)ue=$e[ie],U?ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ue.width,ue.height,ve,Ue,ue.data):t.texImage2D(s.TEXTURE_2D,ie,Re,ue.width,ue.height,0,ve,Ue,ue.data);_.generateMipmaps=!1}else U?(oe&&t.texStorage2D(s.TEXTURE_2D,be,Re,ae.width,ae.height),ce&&Ke(_,ae,ve,Ue)):t.texImage2D(s.TEXTURE_2D,0,Re,ae.width,ae.height,0,ve,Ue,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Re,$e[0].width,$e[0].height,ae.depth);for(let ie=0,ee=$e.length;ie<ee;ie++)if(ue=$e[ie],_.format!==yn)if(ve!==null)if(U){if(ce)if(_.layerUpdates.size>0){const Ce=Vr(ue.width,ue.height,_.format,_.type);for(const Ve of _.layerUpdates){const pt=ue.data.subarray(Ve*Ce/ue.data.BYTES_PER_ELEMENT,(Ve+1)*Ce/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Ve,ue.width,ue.height,1,ve,pt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,ae.depth,ve,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Re,ue.width,ue.height,ae.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,ae.depth,ve,Ue,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Re,ue.width,ue.height,ae.depth,0,ve,Ue,ue.data)}else{U&&oe&&t.texStorage2D(s.TEXTURE_2D,be,Re,$e[0].width,$e[0].height);for(let ie=0,ee=$e.length;ie<ee;ie++)ue=$e[ie],_.format!==yn?ve!==null?U?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ue.width,ue.height,ve,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Re,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ue.width,ue.height,ve,Ue,ue.data):t.texImage2D(s.TEXTURE_2D,ie,Re,ue.width,ue.height,0,ve,Ue,ue.data)}else if(_.isDataArrayTexture)if(U){if(oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Re,ae.width,ae.height,ae.depth),ce)if(_.layerUpdates.size>0){const ie=Vr(ae.width,ae.height,_.format,_.type);for(const ee of _.layerUpdates){const Ce=ae.data.subarray(ee*ie/ae.data.BYTES_PER_ELEMENT,(ee+1)*ie/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,ve,Ue,Ce)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ue,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ae.width,ae.height,ae.depth,0,ve,Ue,ae.data);else if(_.isData3DTexture)U?(oe&&t.texStorage3D(s.TEXTURE_3D,be,Re,ae.width,ae.height,ae.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ue,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Re,ae.width,ae.height,ae.depth,0,ve,Ue,ae.data);else if(_.isFramebufferTexture){if(oe)if(U)t.texStorage2D(s.TEXTURE_2D,be,Re,ae.width,ae.height);else{let ie=ae.width,ee=ae.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,Re,ie,ee,0,ve,Ue,null),ie>>=1,ee>>=1}}else if($e.length>0){if(U&&oe){const ie=wt($e[0]);t.texStorage2D(s.TEXTURE_2D,be,Re,ie.width,ie.height)}for(let ie=0,ee=$e.length;ie<ee;ie++)ue=$e[ie],U?ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ve,Ue,ue):t.texImage2D(s.TEXTURE_2D,ie,Re,ve,Ue,ue);_.generateMipmaps=!1}else if(U){if(oe){const ie=wt(ae);t.texStorage2D(s.TEXTURE_2D,be,Re,ie.width,ie.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Ue,ae)}else t.texImage2D(s.TEXTURE_2D,0,Re,ve,Ue,ae);m(_)&&u(q),Ie.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function te(E,_,z){if(_.image.length!==6)return;const q=dt(E,_),ne=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);const $=n.get(ne);if(ne.version!==$.__version||q===!0){t.activeTexture(s.TEXTURE0+z);const Ie=ht.getPrimaries(ht.workingColorSpace),le=_.colorSpace===qn?null:ht.getPrimaries(_.colorSpace),Le=_.colorSpace===qn||Ie===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!Ae&&!ae?ve[ee]=g(_.image[ee],!0,i.maxCubemapSize):ve[ee]=ae?_.image[ee].image:_.image[ee],ve[ee]=Rt(_,ve[ee]);const Ue=ve[0],Re=a.convert(_.format,_.colorSpace),ue=a.convert(_.type),$e=w(_.internalFormat,Re,ue,_.colorSpace),U=_.isVideoTexture!==!0,oe=$.__version===void 0||q===!0,ce=ne.dataReady;let be=T(_,Ue);qe(s.TEXTURE_CUBE_MAP,_);let ie;if(Ae){U&&oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,$e,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){ie=ve[ee].mipmaps;for(let Ce=0;Ce<ie.length;Ce++){const Ve=ie[Ce];_.format!==yn?Re!==null?U?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,Ve.width,Ve.height,Re,Ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,$e,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,Ve.width,Ve.height,Re,ue,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,$e,Ve.width,Ve.height,0,Re,ue,Ve.data)}}}else{if(ie=_.mipmaps,U&&oe){ie.length>0&&be++;const ee=wt(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,Re,ue,ve[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,ve[ee].width,ve[ee].height,0,Re,ue,ve[ee].data);for(let Ce=0;Ce<ie.length;Ce++){const pt=ie[Ce].image[ee].image;U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,pt.width,pt.height,Re,ue,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,$e,pt.width,pt.height,0,Re,ue,pt.data)}}else{U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,ue,ve[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Re,ue,ve[ee]);for(let Ce=0;Ce<ie.length;Ce++){const Ve=ie[Ce];U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,Re,ue,Ve.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,$e,Re,ue,Ve.image[ee])}}}m(_)&&u(s.TEXTURE_CUBE_MAP),$.__version=ne.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ye(E,_,z,q,ne,$){const Ie=a.convert(z.format,z.colorSpace),le=a.convert(z.type),Le=w(z.internalFormat,Ie,le,z.colorSpace),Ae=n.get(_),ae=n.get(z);if(ae.__renderTarget=_,!Ae.__hasExternalTextures){const ve=Math.max(1,_.width>>$),Ue=Math.max(1,_.height>>$);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,$,Le,ve,Ue,_.depth,0,Ie,le,null):t.texImage2D(ne,$,Le,ve,Ue,0,Ie,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),Te(_)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,ne,ae.__webglTexture,0,vt(_)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,ne,ae.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(E,_,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){const q=_.depthTexture,ne=q&&q.isDepthTexture?q.type:null,$=M(_.stencilBuffer,ne),Ie=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=vt(_);Te(_)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,$,_.width,_.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,$,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,$,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,E)}else{const q=_.textures;for(let ne=0;ne<q.length;ne++){const $=q[ne],Ie=a.convert($.format,$.colorSpace),le=a.convert($.type),Le=w($.internalFormat,Ie,le,$.colorSpace),Ae=vt(_);z&&Te(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,Le,_.width,_.height):Te(_)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,Le,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Le,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),O(_.depthTexture,0);const ne=q.__webglTexture,$=vt(_);if(_.depthTexture.format===ps)Te(_)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(_.depthTexture.format===ms)Te(_)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function et(E){const _=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",ne)};q.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=q}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const q=E.texture.mipmaps;q&&q.length>0?De(_.__webglFramebuffer[0],E):De(_.__webglFramebuffer,E)}else if(z){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=s.createRenderbuffer(),Be(_.__webglDepthbuffer[q],E,!1);else{const ne=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,$)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Be(_.__webglDepthbuffer,E,!1);else{const ne=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,$)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function It(E,_,z){const q=n.get(E);_!==void 0&&ye(q.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&et(E)}function R(E){const _=E.texture,z=n.get(E),q=n.get(_);E.addEventListener("dispose",C);const ne=E.textures,$=E.isWebGLCubeRenderTarget===!0,Ie=ne.length>1;if(Ie||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=_.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let Le=0;Le<_.mipmaps.length;Le++)z.__webglFramebuffer[le][Le]=s.createFramebuffer()}else z.__webglFramebuffer[le]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)z.__webglFramebuffer[le]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let le=0,Le=ne.length;le<Le;le++){const Ae=n.get(ne[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&Te(E)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const Le=ne[le];z.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[le]);const Ae=a.convert(Le.format,Le.colorSpace),ae=a.convert(Le.type),ve=w(Le.internalFormat,Ae,ae,Le.colorSpace,E.isXRRenderTarget===!0),Ue=vt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,ve,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,z.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),qe(s.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)ye(z.__webglFramebuffer[le][Le],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le);else ye(z.__webglFramebuffer[le],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(_)&&u(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let le=0,Le=ne.length;le<Le;le++){const Ae=ne[le],ae=n.get(Ae);let ve=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ve=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,ae.__webglTexture),qe(ve,Ae),ye(z.__webglFramebuffer,E,Ae,s.COLOR_ATTACHMENT0+le,ve,0),m(Ae)&&u(ve)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,q.__webglTexture),qe(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)ye(z.__webglFramebuffer[Le],E,_,s.COLOR_ATTACHMENT0,le,Le);else ye(z.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,le,0);m(_)&&u(le),t.unbindTexture()}E.depthBuffer&&et(E)}function ft(E){const _=E.textures;for(let z=0,q=_.length;z<q;z++){const ne=_[z];if(m(ne)){const $=S(E),Ie=n.get(ne).__webglTexture;t.bindTexture($,Ie),u($),t.unbindTexture()}}}const We=[],He=[];function Ee(E){if(E.samples>0){if(Te(E)===!1){const _=E.textures,z=E.width,q=E.height;let ne=s.COLOR_BUFFER_BIT;const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(E),le=_.length>1;if(le)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Le=E.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);const ae=n.get(_[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ae,0)}s.blitFramebuffer(0,0,z,q,0,0,z,q,ne,s.NEAREST),l===!0&&(We.length=0,He.length=0,We.push(s.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(We.push($),He.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,He)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);const ae=n.get(_[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function vt(E){return Math.min(i.maxSamples,E.samples)}function Te(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ye(E){const _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Rt(E,_){const z=E.colorSpace,q=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==qi&&z!==qn&&(ht.getTransfer(z)===mt?(q!==yn||ne!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function wt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=It,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Te}function rm(s,e){function t(n,i=qn){let a;const o=ht.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===$o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pl)return s.BYTE;if(n===Il)return s.SHORT;if(n===us)return s.UNSIGNED_SHORT;if(n===Xo)return s.INT;if(n===mi)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===vs)return s.HALF_FLOAT;if(n===Ul)return s.ALPHA;if(n===Nl)return s.RGB;if(n===yn)return s.RGBA;if(n===ps)return s.DEPTH_COMPONENT;if(n===ms)return s.DEPTH_STENCIL;if(n===Yo)return s.RED;if(n===jo)return s.RED_INTEGER;if(n===Fl)return s.RG;if(n===Ko)return s.RG_INTEGER;if(n===Zo)return s.RGBA_INTEGER;if(n===ta||n===na||n===ia||n===sa)if(o===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ta)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ta)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===ho||n===uo||n===fo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===co)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===po||n===mo)return o===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===go)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vo||n===_o||n===xo||n===yo||n===Mo||n===bo||n===So||n===wo||n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Po)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===vo)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_o)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mo)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Lo||n===Do)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Io)return o===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Do)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===No||n===Fo||n===ko)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Uo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===No)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ko)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const lm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:lm,fragmentShader:cm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dm extends ji{constructor(e,t){super();const n=this;let i=null,a=1,o=null,r="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null;const g=typeof XRWebGLBinding<"u",m=new hm,u={},S=t.getContextAttributes();let w=null,M=null;const T=[],A=[],C=new it;let D=null;const b=new mn;b.viewport=new Tt;const y=new mn;y.viewport=new Tt;const I=[b,y],k=new Ih;let X=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=T[j];return te===void 0&&(te=new ka,T[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=T[j];return te===void 0&&(te=new ka,T[j]=te),te.getGripSpace()},this.getHand=function(j){let te=T[j];return te===void 0&&(te=new ka,T[j]=te),te.getHandSpace()};function O(j){const te=A.indexOf(j.inputSource);if(te===-1)return;const ye=T[te];ye!==void 0&&(ye.update(j.inputSource,j.frame,c||o),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Z);for(let j=0;j<T.length;j++){const te=A[j];te!==null&&(A[j]=null,T[j].disconnect(te))}X=null,G=null,m.reset();for(const j in u)delete u[j];e.setRenderTarget(w),p=null,f=null,d=null,i=null,M=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Be=null,De=null;S.depth&&(De=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?ms:ps,Be=S.stencil?fs:mi);const et={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(et),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new gi(f.textureWidth,f.textureHeight,{format:yn,type:Tn,depthTexture:new jl(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new gi(p.framebufferWidth,p.framebufferHeight,{format:yn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(r),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(j){for(let te=0;te<j.removed.length;te++){const ye=j.removed[te],Be=A.indexOf(ye);Be>=0&&(A[Be]=null,T[Be].disconnect(ye))}for(let te=0;te<j.added.length;te++){const ye=j.added[te];let Be=A.indexOf(ye);if(Be===-1){for(let et=0;et<T.length;et++)if(et>=A.length){A.push(ye),Be=et;break}else if(A[et]===null){A[et]=ye,Be=et;break}if(Be===-1)break}const De=T[Be];De&&De.connect(ye)}}const H=new L,de=new L;function pe(j,te,ye){H.setFromMatrixPosition(te.matrixWorld),de.setFromMatrixPosition(ye.matrixWorld);const Be=H.distanceTo(de),De=te.projectionMatrix.elements,et=ye.projectionMatrix.elements,It=De[14]/(De[10]-1),R=De[14]/(De[10]+1),ft=(De[9]+1)/De[5],We=(De[9]-1)/De[5],He=(De[8]-1)/De[0],Ee=(et[8]+1)/et[0],vt=It*He,Te=It*Ee,Ye=Be/(-He+Ee),Rt=Ye*-He;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Rt),j.translateZ(Ye),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),De[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const wt=It+Ye,E=R+Ye,_=vt-Rt,z=Te+(Be-Rt),q=ft*R/E*wt,ne=We*R/E*wt;j.projectionMatrix.makePerspective(_,z,q,ne,wt,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function we(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let te=j.near,ye=j.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),k.near=y.near=b.near=te,k.far=y.far=b.far=ye,(X!==k.near||G!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,G=k.far),k.layers.mask=j.layers.mask|6,b.layers.mask=k.layers.mask&3,y.layers.mask=k.layers.mask&5;const Be=j.parent,De=k.cameras;we(k,Be);for(let et=0;et<De.length;et++)we(De[et],Be);De.length===2?pe(k,b,y):k.projectionMatrix.copy(b.projectionMatrix),qe(j,k,Be)};function qe(j,te,ye){ye===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(j){return u[j]};let dt=null;function ut(j,te){if(h=te.getViewerPose(c||o),v=te,h!==null){const ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Be=!1;ye.length!==k.cameras.length&&(k.cameras.length=0,Be=!0);for(let R=0;R<ye.length;R++){const ft=ye[R];let We=null;if(p!==null)We=p.getViewport(ft);else{const Ee=d.getViewSubImage(f,ft);We=Ee.viewport,R===0&&(e.setRenderTargetTextures(M,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(M))}let He=I[R];He===void 0&&(He=new mn,He.layers.enable(R),He.viewport=new Tt,I[R]=He),He.matrix.fromArray(ft.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ft.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(We.x,We.y,We.width,We.height),R===0&&(k.matrix.copy(He.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Be===!0&&k.cameras.push(He)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const R=d.getDepthInformation(ye[0]);R&&R.isValid&&R.texture&&m.init(R,i.renderState)}if(De&&De.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let R=0;R<ye.length;R++){const ft=ye[R].camera;if(ft){let We=u[ft];We||(We=new Kl,u[ft]=We);const He=d.getCameraImage(ft);We.sourceTexture=He}}}}for(let ye=0;ye<T.length;ye++){const Be=A[ye],De=T[ye];Be!==null&&De!==void 0&&De.update(Be,te,c||o)}dt&&dt(j,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const Ke=new Jl;Ke.setAnimationLoop(ut),this.setAnimationLoop=function(j){dt=j},this.dispose=function(){}}}const ai=new An,um=new Mt;function fm(s,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Xl(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,S,w,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(a(m,u),v(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),g(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&r(m,u)):u.isPointsMaterial?l(m,u,S,w):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===qt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===qt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const S=e.get(u),w=S.envMap,M=S.envMapRotation;w&&(m.envMap.value=w,ai.copy(M),ai.x*=-1,ai.y*=-1,ai.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(um.makeRotationFromEuler(ai)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function r(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,S,w){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*S,m.scale.value=w*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,S){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const S=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pm(s,e,t,n){let i={},a={},o=[];const r=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const M=w.program;n.uniformBlockBinding(S,M)}function c(S,w){let M=i[S.id];M===void 0&&(v(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",m));const T=w.program;n.updateUBOMapping(S,T);const A=e.render.frame;a[S.id]!==A&&(f(S),a[S.id]=A)}function h(S){const w=d();S.__bindingPointIndex=w;const M=s.createBuffer(),T=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,M),M}function d(){for(let S=0;S<r;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const w=i[S.id],M=S.uniforms,T=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let A=0,C=M.length;A<C;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,y=D.length;b<y;b++){const I=D[b];if(p(I,A,b,T)===!0){const k=I.__offset,X=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let O=0;O<X.length;O++){const W=X[O],Z=g(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,k+G,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,w,M,T){const A=S.value,C=w+"_"+M;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const D=T[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return T[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function v(S){const w=S.uniforms;let M=0;const T=16;for(let C=0,D=w.length;C<D;C++){const b=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,I=b.length;y<I;y++){const k=b[y],X=Array.isArray(k.value)?k.value:[k.value];for(let G=0,O=X.length;G<O;G++){const W=X[G],Z=g(W),H=M%T,de=H%Z.boundary,pe=H+de;M+=de,pe!==0&&T-pe<Z.storage&&(M+=T-pe),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=Z.storage}}}const A=M%T;return A>0&&(M+=T-A),S.__size=M,S.__cache={},this}function g(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete a[w.id]}function u(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},a={}}return{bind:l,update:c,dispose:u}}class mm{constructor(e={}){const{canvas:t=Xc(),context:n=null,depth:i=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=cn;let A=0,C=0,D=null,b=-1,y=null;const I=new Tt,k=new Tt;let X=null;const G=new Pe(0);let O=0,W=t.width,Z=t.height,H=1,de=null,pe=null;const we=new Tt(0,0,W,Z),qe=new Tt(0,0,W,Z);let dt=!1;const ut=new tr;let Ke=!1,j=!1;const te=new Mt,ye=new L,Be=new Tt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function It(){return D===null?H:1}let R=n;function ft(x,N){return t.getContext(x,N)}try{const x={alpha:!0,depth:i,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wo}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ie,!1),R===null){const N="webgl2";if(R=ft(N,x),R===null)throw ft(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let We,He,Ee,vt,Te,Ye,Rt,wt,E,_,z,q,ne,$,Ie,le,Le,Ae,ae,ve,Ue,Re,ue,$e;function U(){We=new Ef(R),We.init(),Re=new rm(R,We),He=new _f(R,We,e,Re),Ee=new am(R,We),He.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),vt=new Rf(R),Te=new $p,Ye=new om(R,We,Ee,Te,He,Re,vt),Rt=new yf(M),wt=new wf(M),E=new Dh(R),ue=new gf(R,E),_=new Tf(R,E,vt,ue),z=new Pf(R,_,E,vt),ae=new Cf(R,He,Ye),le=new xf(Te),q=new Xp(M,Rt,wt,We,He,ue,le),ne=new fm(M,Te),$=new Yp,Ie=new em(We),Ae=new mf(M,Rt,wt,Ee,z,p,l),Le=new im(M,z,He),$e=new pm(R,vt,He,Ee),ve=new vf(R,We,vt),Ue=new Af(R,We,vt),vt.programs=q.programs,M.capabilities=He,M.extensions=We,M.properties=Te,M.renderLists=$,M.shadowMap=Le,M.state=Ee,M.info=vt}U();const oe=new dm(M,R);this.xr=oe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=We.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=We.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(W,Z,!1))},this.getSize=function(x){return x.set(W,Z)},this.setSize=function(x,N,B=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,Z=N,t.width=Math.floor(x*H),t.height=Math.floor(N*H),B===!0&&(t.style.width=x+"px",t.style.height=N+"px"),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(W*H,Z*H).floor()},this.setDrawingBufferSize=function(x,N,B){W=x,Z=N,H=B,t.width=Math.floor(x*B),t.height=Math.floor(N*B),this.setViewport(0,0,x,N)},this.getCurrentViewport=function(x){return x.copy(I)},this.getViewport=function(x){return x.copy(we)},this.setViewport=function(x,N,B,V){x.isVector4?we.set(x.x,x.y,x.z,x.w):we.set(x,N,B,V),Ee.viewport(I.copy(we).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(qe)},this.setScissor=function(x,N,B,V){x.isVector4?qe.set(x.x,x.y,x.z,x.w):qe.set(x,N,B,V),Ee.scissor(k.copy(qe).multiplyScalar(H).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(x){Ee.setScissorTest(dt=x)},this.setOpaqueSort=function(x){de=x},this.setTransparentSort=function(x){pe=x},this.getClearColor=function(x){return x.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,B=!0){let V=0;if(x){let F=!1;if(D!==null){const se=D.texture.format;F=se===Zo||se===Ko||se===jo}if(F){const se=D.texture.type,fe=se===Tn||se===mi||se===us||se===fs||se===$o||se===qo,Se=Ae.getClearColor(),xe=Ae.getClearAlpha(),ze=Se.r,Oe=Se.g,Ne=Se.b;fe?(v[0]=ze,v[1]=Oe,v[2]=Ne,v[3]=xe,R.clearBufferuiv(R.COLOR,0,v)):(g[0]=ze,g[1]=Oe,g[2]=Ne,g[3]=xe,R.clearBufferiv(R.COLOR,0,g))}else V|=R.COLOR_BUFFER_BIT}N&&(V|=R.DEPTH_BUFFER_BIT),B&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Ae.dispose(),$.dispose(),Ie.dispose(),Te.dispose(),Rt.dispose(),wt.dispose(),z.dispose(),ue.dispose(),$e.dispose(),q.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",jt),oe.removeEventListener("sessionend",On),tn.stop()};function ce(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=vt.autoReset,N=Le.enabled,B=Le.autoUpdate,V=Le.needsUpdate,F=Le.type;U(),vt.autoReset=x,Le.enabled=N,Le.autoUpdate=B,Le.needsUpdate=V,Le.type=F}function ie(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ee(x){const N=x.target;N.removeEventListener("dispose",ee),Ce(N)}function Ce(x){Ve(x),Te.remove(x)}function Ve(x){const N=Te.get(x).programs;N!==void 0&&(N.forEach(function(B){q.releaseProgram(B)}),x.isShaderMaterial&&q.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,B,V,F,se){N===null&&(N=De);const fe=F.isMesh&&F.matrixWorld.determinant()<0,Se=Ge(x,N,B,V,F);Ee.setMaterial(V,fe);let xe=B.index,ze=1;if(V.wireframe===!0){if(xe=_.getWireframeAttribute(B),xe===void 0)return;ze=2}const Oe=B.drawRange,Ne=B.attributes.position;let ke=Oe.start*ze,Ze=(Oe.start+Oe.count)*ze;se!==null&&(ke=Math.max(ke,se.start*ze),Ze=Math.min(Ze,(se.start+se.count)*ze)),xe!==null?(ke=Math.max(ke,0),Ze=Math.min(Ze,xe.count)):Ne!=null&&(ke=Math.max(ke,0),Ze=Math.min(Ze,Ne.count));const rt=Ze-ke;if(rt<0||rt===1/0)return;ue.setup(F,V,Se,B,xe);let tt,nt=ve;if(xe!==null&&(tt=E.get(xe),nt=Ue,nt.setIndex(tt)),F.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*It()),nt.setMode(R.LINES)):nt.setMode(R.TRIANGLES);else if(F.isLine){let Fe=V.linewidth;Fe===void 0&&(Fe=1),Ee.setLineWidth(Fe*It()),F.isLineSegments?nt.setMode(R.LINES):F.isLineLoop?nt.setMode(R.LINE_LOOP):nt.setMode(R.LINE_STRIP)}else F.isPoints?nt.setMode(R.POINTS):F.isSprite&&nt.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Fe=F._multiDrawStarts,bt=F._multiDrawCounts,st=F._multiDrawCount,sn=xe?E.get(xe).bytesPerElement:1,Mi=Te.get(V).currentProgram.getUniforms();for(let an=0;an<st;an++)Mi.setValue(R,"_gl_DrawID",an),nt.render(Fe[an]/sn,bt[an])}else if(F.isInstancedMesh)nt.renderInstances(ke,rt,F.count);else if(B.isInstancedBufferGeometry){const Fe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,bt=Math.min(B.instanceCount,Fe);nt.renderInstances(ke,rt,bt)}else nt.render(ke,rt)};function pt(x,N,B){x.transparent===!0&&x.side===Bt&&x.forceSinglePass===!1?(x.side=qt,x.needsUpdate=!0,J(x,N,B),x.side=Fn,x.needsUpdate=!0,J(x,N,B),x.side=Bt):J(x,N,B)}this.compile=function(x,N,B=null){B===null&&(B=x),u=Ie.get(B),u.init(N),w.push(u),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),x!==B&&x.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const V=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const Se=se[fe];pt(Se,B,F),V.add(Se)}else pt(se,B,F),V.add(se)}),u=w.pop(),V},this.compileAsync=function(x,N,B=null){const V=this.compile(x,N,B);return new Promise(F=>{function se(){if(V.forEach(function(fe){Te.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){F(x);return}setTimeout(se,10)}We.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let je=null;function en(x){je&&je(x)}function jt(){tn.stop()}function On(){tn.start()}const tn=new Jl;tn.setAnimationLoop(en),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(x){je=x,oe.setAnimationLoop(x),x===null?tn.stop():tn.start()},oe.addEventListener("sessionstart",jt),oe.addEventListener("sessionend",On),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(N),N=oe.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,N,D),u=Ie.get(x,w.length),u.init(N),w.push(u),te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ut.setFromProjectionMatrix(te,En,N.reversedDepth),j=this.localClippingEnabled,Ke=le.init(this.clippingPlanes,j),m=$.get(x,S.length),m.init(),S.push(m),oe.enabled===!0&&oe.isPresenting===!0){const se=M.xr.getDepthSensingMesh();se!==null&&Bn(se,N,-1/0,M.sortObjects)}Bn(x,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(de,pe),et=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,et&&Ae.addToRenderList(m,x),this.info.render.frame++,Ke===!0&&le.beginShadows();const B=u.state.shadowsArray;Le.render(B,x,N),Ke===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(u.setupLights(),N.isArrayCamera){const se=N.cameras;if(F.length>0)for(let fe=0,Se=se.length;fe<Se;fe++){const xe=se[fe];P(V,F,x,xe)}et&&Ae.render(x);for(let fe=0,Se=se.length;fe<Se;fe++){const xe=se[fe];bs(m,x,xe,xe.viewport)}}else F.length>0&&P(V,F,x,N),et&&Ae.render(x),bs(m,x,N);D!==null&&C===0&&(Ye.updateMultisampleRenderTarget(D),Ye.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(M,x,N),ue.resetDefaultState(),b=-1,y=null,w.pop(),w.length>0?(u=w[w.length-1],Ke===!0&&le.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Bn(x,N,B,V){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ut.intersectsSprite(x)){V&&Be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(te);const fe=z.update(x),Se=x.material;Se.visible&&m.push(x,fe,Se,B,Be.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ut.intersectsObject(x))){const fe=z.update(x),Se=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Be.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Be.copy(fe.boundingSphere.center)),Be.applyMatrix4(x.matrixWorld).applyMatrix4(te)),Array.isArray(Se)){const xe=fe.groups;for(let ze=0,Oe=xe.length;ze<Oe;ze++){const Ne=xe[ze],ke=Se[Ne.materialIndex];ke&&ke.visible&&m.push(x,fe,ke,B,Be.z,Ne)}}else Se.visible&&m.push(x,fe,Se,B,Be.z,null)}}const se=x.children;for(let fe=0,Se=se.length;fe<Se;fe++)Bn(se[fe],N,B,V)}function bs(x,N,B,V){const F=x.opaque,se=x.transmissive,fe=x.transparent;u.setupLightsView(B),Ke===!0&&le.setGlobalState(M.clippingPlanes,B),V&&Ee.viewport(I.copy(V)),F.length>0&&Y(F,N,B),se.length>0&&Y(se,N,B),fe.length>0&&Y(fe,N,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function P(x,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new gi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?vs:Tn,minFilter:ui,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const se=u.state.transmissionRenderTarget[V.id],fe=V.viewport||I;se.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);const Se=M.getRenderTarget(),xe=M.getActiveCubeFace(),ze=M.getActiveMipmapLevel();M.setRenderTarget(se),M.getClearColor(G),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),et&&Ae.render(B);const Oe=M.toneMapping;M.toneMapping=Zn;const Ne=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),Ke===!0&&le.setGlobalState(M.clippingPlanes,V),Y(x,B,V),Ye.updateMultisampleRenderTarget(se),Ye.updateRenderTargetMipmap(se),We.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ze=0,rt=N.length;Ze<rt;Ze++){const tt=N[Ze],nt=tt.object,Fe=tt.geometry,bt=tt.material,st=tt.group;if(bt.side===Bt&&nt.layers.test(V.layers)){const sn=bt.side;bt.side=qt,bt.needsUpdate=!0,Q(nt,B,V,Fe,bt,st),bt.side=sn,bt.needsUpdate=!0,ke=!0}}ke===!0&&(Ye.updateMultisampleRenderTarget(se),Ye.updateRenderTargetMipmap(se))}M.setRenderTarget(Se,xe,ze),M.setClearColor(G,O),Ne!==void 0&&(V.viewport=Ne),M.toneMapping=Oe}function Y(x,N,B){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,se=x.length;F<se;F++){const fe=x[F],Se=fe.object,xe=fe.geometry,ze=fe.group;let Oe=fe.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),Se.layers.test(B.layers)&&Q(Se,N,B,xe,Oe,ze)}}function Q(x,N,B,V,F,se){x.onBeforeRender(M,N,B,V,F,se),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(M,N,B,V,x,se),F.transparent===!0&&F.side===Bt&&F.forceSinglePass===!1?(F.side=qt,F.needsUpdate=!0,M.renderBufferDirect(B,N,V,F,x,se),F.side=Fn,F.needsUpdate=!0,M.renderBufferDirect(B,N,V,F,x,se),F.side=Bt):M.renderBufferDirect(B,N,V,F,x,se),x.onAfterRender(M,N,B,V,F,se)}function J(x,N,B){N.isScene!==!0&&(N=De);const V=Te.get(x),F=u.state.lights,se=u.state.shadowsArray,fe=F.state.version,Se=q.getParameters(x,F.state,se,N,B),xe=q.getProgramCacheKey(Se);let ze=V.programs;V.environment=x.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(x.isMeshStandardMaterial?wt:Rt).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,ze===void 0&&(x.addEventListener("dispose",ee),ze=new Map,V.programs=ze);let Oe=ze.get(xe);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===fe)return _e(x,Se),Oe}else Se.uniforms=q.getUniforms(x),x.onBeforeCompile(Se,M),Oe=q.acquireProgram(Se,xe),ze.set(xe,Oe),V.uniforms=Se.uniforms;const Ne=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ne.clippingPlanes=le.uniform),_e(x,Se),V.needsLights=Xe(x),V.lightsStateVersion=fe,V.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function re(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=aa.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function _e(x,N){const B=Te.get(x);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Ge(x,N,B,V,F){N.isScene!==!0&&(N=De),Ye.resetTextureUnits();const se=N.fog,fe=V.isMeshStandardMaterial?N.environment:null,Se=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:qi,xe=(V.isMeshStandardMaterial?wt:Rt).get(V.envMap||fe),ze=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!B.morphAttributes.position,ke=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color;let rt=Zn;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(rt=M.toneMapping);const tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,nt=tt!==void 0?tt.length:0,Fe=Te.get(V),bt=u.state.lights;if(Ke===!0&&(j===!0||x!==y)){const Wt=x===y&&V.id===b;le.setState(V,x,Wt)}let st=!1;V.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==bt.state.version||Fe.outputColorSpace!==Se||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isBatchedMesh&&Fe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Fe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Fe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Fe.instancingMorph===!1&&F.morphTexture!==null||Fe.envMap!==xe||V.fog===!0&&Fe.fog!==se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==le.numPlanes||Fe.numIntersection!==le.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==Oe||Fe.morphTargets!==Ne||Fe.morphNormals!==ke||Fe.morphColors!==Ze||Fe.toneMapping!==rt||Fe.morphTargetsCount!==nt)&&(st=!0):(st=!0,Fe.__version=V.version);let sn=Fe.currentProgram;st===!0&&(sn=J(V,N,F));let Mi=!1,an=!1,Ji=!1;const Et=sn.getUniforms(),un=Fe.uniforms;if(Ee.useProgram(sn.program)&&(Mi=!0,an=!0,Ji=!0),V.id!==b&&(b=V.id,an=!0),Mi||y!==x){Ee.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Et.setValue(R,"projectionMatrix",x.projectionMatrix),Et.setValue(R,"viewMatrix",x.matrixWorldInverse);const Kt=Et.map.cameraPosition;Kt!==void 0&&Kt.setValue(R,ye.setFromMatrixPosition(x.matrixWorld)),He.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Et.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,an=!0,Ji=!0)}if(F.isSkinnedMesh){Et.setOptional(R,F,"bindMatrix"),Et.setOptional(R,F,"bindMatrixInverse");const Wt=F.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Et.setValue(R,"boneTexture",Wt.boneTexture,Ye))}F.isBatchedMesh&&(Et.setOptional(R,F,"batchingTexture"),Et.setValue(R,"batchingTexture",F._matricesTexture,Ye),Et.setOptional(R,F,"batchingIdTexture"),Et.setValue(R,"batchingIdTexture",F._indirectTexture,Ye),Et.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&Et.setValue(R,"batchingColorTexture",F._colorsTexture,Ye));const fn=B.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&ae.update(F,B,sn),(an||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,Et.setValue(R,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(un.envMap.value=xe,un.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(un.envMapIntensity.value=N.environmentIntensity),an&&(Et.setValue(R,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&Me(un,Ji),se&&V.fog===!0&&ne.refreshFogUniforms(un,se),ne.refreshMaterialUniforms(un,V,H,Z,u.state.transmissionRenderTarget[x.id]),aa.upload(R,re(Fe),un,Ye)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(aa.upload(R,re(Fe),un,Ye),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Et.setValue(R,"center",F.center),Et.setValue(R,"modelViewMatrix",F.modelViewMatrix),Et.setValue(R,"normalMatrix",F.normalMatrix),Et.setValue(R,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Wt=V.uniformsGroups;for(let Kt=0,fa=Wt.length;Kt<fa;Kt++){const Qn=Wt[Kt];$e.update(Qn,sn),$e.bind(Qn,sn)}}return sn}function Me(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Xe(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,N,B){const V=Te.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Te.get(x.texture).__webglTexture=N,Te.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){const B=Te.get(x);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const _t=R.createFramebuffer();this.setRenderTarget=function(x,N=0,B=0){D=x,A=N,C=B;let V=!0,F=null,se=!1,fe=!1;if(x){const xe=Te.get(x);if(xe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)Ye.setupRenderTarget(x);else if(xe.__hasExternalTextures)Ye.rebindTextures(x,Te.get(x.texture).__webglTexture,Te.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ne=x.depthTexture;if(xe.__boundDepthTexture!==Ne){if(Ne!==null&&Te.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(x)}}const ze=x.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(fe=!0);const Oe=Te.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?F=Oe[N][B]:F=Oe[N],se=!0):x.samples>0&&Ye.useMultisampledRTT(x)===!1?F=Te.get(x).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[B]:F=Oe,I.copy(x.viewport),k.copy(x.scissor),X=x.scissorTest}else I.copy(we).multiplyScalar(H).floor(),k.copy(qe).multiplyScalar(H).floor(),X=dt;if(B!==0&&(F=_t),Ee.bindFramebuffer(R.FRAMEBUFFER,F)&&V&&Ee.drawBuffers(x,F),Ee.viewport(I),Ee.scissor(k),Ee.setScissorTest(X),se){const xe=Te.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,B)}else if(fe){const xe=N;for(let ze=0;ze<x.textures.length;ze++){const Oe=Te.get(x.textures[ze]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+ze,Oe.__webglTexture,B,xe)}}else if(x!==null&&B!==0){const xe=Te.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,xe.__webglTexture,B)}b=-1},this.readRenderTargetPixels=function(x,N,B,V,F,se,fe,Se=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){Ee.bindFramebuffer(R.FRAMEBUFFER,xe);try{const ze=x.textures[Se],Oe=ze.format,Ne=ze.type;if(!He.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-V&&B>=0&&B<=x.height-F&&(x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Se),R.readPixels(N,B,V,F,Re.convert(Oe),Re.convert(Ne),se))}finally{const ze=D!==null?Te.get(D).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(x,N,B,V,F,se,fe,Se=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe)if(N>=0&&N<=x.width-V&&B>=0&&B<=x.height-F){Ee.bindFramebuffer(R.FRAMEBUFFER,xe);const ze=x.textures[Se],Oe=ze.format,Ne=ze.type;if(!He.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ke),R.bufferData(R.PIXEL_PACK_BUFFER,se.byteLength,R.STREAM_READ),x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Se),R.readPixels(N,B,V,F,Re.convert(Oe),Re.convert(Ne),0);const Ze=D!==null?Te.get(D).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,Ze);const rt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await $c(R,rt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ke),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,se),R.deleteBuffer(ke),R.deleteSync(rt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,B=0){const V=Math.pow(2,-B),F=Math.floor(x.image.width*V),se=Math.floor(x.image.height*V),fe=N!==null?N.x:0,Se=N!==null?N.y:0;Ye.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,fe,Se,F,se),Ee.unbindTexture()};const nn=R.createFramebuffer(),Ct=R.createFramebuffer();this.copyTextureToTexture=function(x,N,B=null,V=null,F=0,se=null){se===null&&(F!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=F,F=0):se=0);let fe,Se,xe,ze,Oe,Ne,ke,Ze,rt;const tt=x.isCompressedTexture?x.mipmaps[se]:x.image;if(B!==null)fe=B.max.x-B.min.x,Se=B.max.y-B.min.y,xe=B.isBox3?B.max.z-B.min.z:1,ze=B.min.x,Oe=B.min.y,Ne=B.isBox3?B.min.z:0;else{const fn=Math.pow(2,-F);fe=Math.floor(tt.width*fn),Se=Math.floor(tt.height*fn),x.isDataArrayTexture?xe=tt.depth:x.isData3DTexture?xe=Math.floor(tt.depth*fn):xe=1,ze=0,Oe=0,Ne=0}V!==null?(ke=V.x,Ze=V.y,rt=V.z):(ke=0,Ze=0,rt=0);const nt=Re.convert(N.format),Fe=Re.convert(N.type);let bt;N.isData3DTexture?(Ye.setTexture3D(N,0),bt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ye.setTexture2DArray(N,0),bt=R.TEXTURE_2D_ARRAY):(Ye.setTexture2D(N,0),bt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const st=R.getParameter(R.UNPACK_ROW_LENGTH),sn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Mi=R.getParameter(R.UNPACK_SKIP_PIXELS),an=R.getParameter(R.UNPACK_SKIP_ROWS),Ji=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,tt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,tt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ze),R.pixelStorei(R.UNPACK_SKIP_ROWS,Oe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ne);const Et=x.isDataArrayTexture||x.isData3DTexture,un=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const fn=Te.get(x),Wt=Te.get(N),Kt=Te.get(fn.__renderTarget),fa=Te.get(Wt.__renderTarget);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,fa.__webglFramebuffer);for(let Qn=0;Qn<xe;Qn++)Et&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Te.get(x).__webglTexture,F,Ne+Qn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,se,rt+Qn)),R.blitFramebuffer(ze,Oe,fe,Se,ke,Ze,fe,Se,R.DEPTH_BUFFER_BIT,R.NEAREST);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||Te.has(x)){const fn=Te.get(x),Wt=Te.get(N);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,nn),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ct);for(let Kt=0;Kt<xe;Kt++)Et?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,fn.__webglTexture,F,Ne+Kt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fn.__webglTexture,F),un?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Wt.__webglTexture,se,rt+Kt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Wt.__webglTexture,se),F!==0?R.blitFramebuffer(ze,Oe,fe,Se,ke,Ze,fe,Se,R.COLOR_BUFFER_BIT,R.NEAREST):un?R.copyTexSubImage3D(bt,se,ke,Ze,rt+Kt,ze,Oe,fe,Se):R.copyTexSubImage2D(bt,se,ke,Ze,ze,Oe,fe,Se);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else un?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(bt,se,ke,Ze,rt,fe,Se,xe,nt,Fe,tt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(bt,se,ke,Ze,rt,fe,Se,xe,nt,tt.data):R.texSubImage3D(bt,se,ke,Ze,rt,fe,Se,xe,nt,Fe,tt):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,se,ke,Ze,fe,Se,nt,Fe,tt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,se,ke,Ze,tt.width,tt.height,nt,tt.data):R.texSubImage2D(R.TEXTURE_2D,se,ke,Ze,fe,Se,nt,Fe,tt);R.pixelStorei(R.UNPACK_ROW_LENGTH,st),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,sn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Mi),R.pixelStorei(R.UNPACK_SKIP_ROWS,an),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ji),se===0&&N.generateMipmaps&&R.generateMipmap(bt),Ee.unbindTexture()},this.initRenderTarget=function(x){Te.get(x).__webglFramebuffer===void 0&&Ye.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ye.setTextureCube(x,0):x.isData3DTexture?Ye.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ye.setTexture2DArray(x,0):Ye.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,Ee.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const ln=5e3,jn=ln/2,rs=["copper","iron","gold","diamond","adamantite"],zt={copper:{id:"copper",name:"Copper",tier:1,color:"#c9804f",glow:"#8a4a28",mult:1,value:55,weight:46},iron:{id:"iron",name:"Iron",tier:2,color:"#c2ced9",glow:"#76889a",mult:1.55,value:190,weight:28},gold:{id:"gold",name:"Gold",tier:3,color:"#f5c451",glow:"#b8851c",mult:2.25,value:560,weight:16},diamond:{id:"diamond",name:"Diamond",tier:4,color:"#74e7f7",glow:"#1a9fb8",mult:3.15,value:1500,weight:8},adamantite:{id:"adamantite",name:"Adamantite",tier:5,color:"#c58cff",glow:"#7c3aed",mult:4.4,value:4200,weight:2}},ic={sword:{id:"sword",label:"Sword",icon:"⚔",names:["Shortsword","Longsword","Greatblade","Runeblade","Worldcleaver"],speed:1,range:4.6,ranged:!1},bow:{id:"bow",label:"Bow",icon:"➶",names:["Shortbow","Recurve Bow","Warbow","Moonshot Bow","Starfall Bow"],speed:1.1,range:26,ranged:!0},staff:{id:"staff",label:"Staff",icon:"✦",names:["Apprentice Staff","Runed Staff","Archstaff","Aether Staff","Cosmic Staff"],speed:.9,range:24,ranged:!0},dagger:{id:"dagger",label:"Dagger",icon:"†",names:["Knife","Fang Dagger","Shadowfang","Nightglass","Voidfang"],speed:1.35,range:3.6,ranged:!1},scepter:{id:"scepter",label:"Scepter",icon:"☀",names:["Novice Scepter","Sun Scepter","Radiant Scepter","Dawnbringer","Godlight"],speed:.95,range:22,ranged:!0}},gm={plate:{id:"plate",label:"Plate",names:["Cuirass","Cuirass","Cuirass","Aegis","Bulwark"]},leather:{id:"leather",label:"Leather",names:["Jerkin","Jerkin","Jerkin","Jerkin","Jerkin"]},robe:{id:"robe",label:"Robe",names:["Robe","Robe","Robe","Robe","Robe"]},coat:{id:"coat",label:"Coat",names:["Coat","Coat","Coat","Coat","Coat"]},garb:{id:"garb",label:"Garb",names:["Garb","Garb","Garb","Garb","Garb"]},vestment:{id:"vestment",label:"Vestment",names:["Vestment","Vestment","Vestment","Vestment","Vestment"]}};function ar(s,e,t={}){const n=zt[s],i=ic[e],a=n.tier,o=Math.round((9+a*5.5)*(t.dmgMult||1)*10)/10;return{id:t.id||`w_${e}_${s}`,kind:"weapon",type:e,rarity:s,name:`${n.name} ${i.names[a-1]}`,icon:i.icon,atk:o,value:Math.round(n.value*.75),desc:`${i.label} forged of ${n.name.toLowerCase()}. Attack +${o}.`,unique:t.unique||!1}}function or(s,e,t={}){const n=zt[s],i=gm[e],a=n.tier,o=Math.round((5+a*4.2)*10)/10;return{id:t.id||`a_${e}_${s}`,kind:"armor",type:e,rarity:s,name:`${n.name} ${i.names[a-1]}`,icon:"🛡",def:o,value:Math.round(n.value*.7),desc:`${i.label} of ${n.name.toLowerCase()}. Defense +${o}.`,unique:t.unique||!1}}const Pt={swordsman:{id:"swordsman",name:"Swordsman",epithet:"Blade of the Vow",weapon:"sword",armor:"plate",color:"#e09555",accent:"#7b2d2d",icon:"⚔",hp:190,mp:60,atk:15,def:11,speed:8.6,desc:"A steadfast duelist. Heavy strikes and unbreakable guard.",skills:[{name:"Whirlwind",icon:"🌀",mp:16,cd:6,mult:1.9,radius:7.5,kind:"aoe",desc:"A spinning cut that strikes every foe around you."},{name:"Iron Guard",icon:"🛡",mp:12,cd:14,mult:0,radius:0,kind:"guard",desc:"Halve incoming damage for 5 seconds."},{name:"Blade Storm",icon:"✹",mp:28,cd:22,mult:3.2,radius:9,kind:"storm",desc:"A storm of blades erupts, shredding nearby enemies."}]},archer:{id:"archer",name:"Archer",epithet:"Eye of the Gale",weapon:"bow",armor:"leather",color:"#7fbf6a",accent:"#2f5c3a",icon:"➶",hp:150,mp:80,atk:16,def:7,speed:9.4,desc:"A patient hunter. Strikes from afar and never misses twice.",skills:[{name:"Piercing Shot",icon:"➹",mp:14,cd:5,mult:2.3,radius:0,kind:"line",desc:"A piercing arrow that skewers a target for heavy damage."},{name:"Arrow Volley",icon:"☔",mp:22,cd:11,mult:.9,radius:6.5,kind:"rain",desc:"Rain arrows over the target area for 3 seconds."},{name:"Hawk's Mark",icon:"◉",mp:18,cd:16,mult:0,radius:0,kind:"mark",desc:"Mark a foe, increasing all damage it takes by 50%."}]},mage:{id:"mage",name:"Mage",epithet:"Keeper of the Rift",weapon:"staff",armor:"robe",color:"#7aa8ff",accent:"#2b3a7a",icon:"✦",hp:130,mp:140,atk:18,def:5,speed:8.8,desc:"A scholar of raw aether. Fragile, but devastating at range.",skills:[{name:"Fireball",icon:"🔥",mp:18,cd:4,mult:2.2,radius:4.5,kind:"burst",desc:"Hurl a sphere of flame that detonates on impact."},{name:"Frost Nova",icon:"❄",mp:24,cd:9,mult:1.4,radius:7,kind:"frost",desc:"Freeze nearby foes, slowing them for 4 seconds."},{name:"Arcane Rift",icon:"◈",mp:38,cd:18,mult:3.4,radius:8,kind:"rift",desc:"Tear open a rift that consumes everything nearby."}]},alchemy:{id:"alchemy",name:"Alchemist",epithet:"Hand of Transmutation",weapon:"dagger",armor:"coat",color:"#b6d957",accent:"#4d6b24",icon:"⚗",hp:155,mp:120,atk:14,def:8,speed:8.9,desc:"A pragmatic chemist. Poisons, bombs, and impossible cures.",skills:[{name:"Toxic Flask",icon:"☠",mp:15,cd:6,mult:1.2,radius:4,kind:"poison",desc:"Shatter a flask of venom, poisoning foes over time."},{name:"Healing Brew",icon:"♥",mp:26,cd:12,mult:0,radius:0,kind:"heal",desc:"Drink a volatile brew and restore 38% of health."},{name:"Transmute Bomb",icon:"💥",mp:34,cd:17,mult:3,radius:8.5,kind:"bomb",desc:"Unstable gold turns the ground to glass."}]},assassin:{id:"assassin",name:"Assassin",epithet:"Whisper in the Dark",weapon:"dagger",armor:"garb",color:"#b48bd8",accent:"#3a2350",icon:"🗡",hp:145,mp:95,atk:20,def:6,speed:10.4,desc:"A shadow given purpose. Fast, lethal, and always behind you.",skills:[{name:"Shadow Step",icon:"➤",mp:14,cd:6,mult:1.5,radius:16,kind:"blink",desc:"Blink behind a target and strike."},{name:"Backstab",icon:"†",mp:18,cd:7,mult:3.1,radius:0,kind:"single",desc:"A vicious strike against a single foe."},{name:"Death Mark",icon:"☠",mp:24,cd:15,mult:0,radius:0,kind:"execute",desc:"Mark a wounded foe for execution."}]},priest:{id:"priest",name:"Priest",epithet:"Lantern of the Lost",weapon:"scepter",armor:"vestment",color:"#f2df9a",accent:"#8c6d2d",icon:"☀",hp:165,mp:150,atk:13,def:8,speed:8.5,desc:"A healer whose faith cuts like dawn. Sustain and smite.",skills:[{name:"Holy Light",icon:"✧",mp:16,cd:5,mult:1.3,radius:0,kind:"healSmite",desc:"Heal yourself and burn a nearby enemy with holy light."},{name:"Sanctuary",icon:"◯",mp:28,cd:13,mult:0,radius:6,kind:"sanctuary",desc:"Bless the ground, healing you and warding damage."},{name:"Judgment",icon:"✹",mp:36,cd:17,mult:2.8,radius:8,kind:"judgment",desc:"Call down a pillar of searing dawnlight."}]}},Vo={slime_gel:{id:"slime_gel",name:"Slime Gel",icon:"◆",value:3,color:"#7ad17a",desc:"Wobbling, faintly sweet. Alchemists pay well."},wolf_fang:{id:"wolf_fang",name:"Wolf Fang",icon:"♦",value:6,color:"#e8e0cf",desc:"A curved fang, still warm."},boar_tusk:{id:"boar_tusk",name:"Boar Tusk",icon:"❯",value:8,color:"#e2c99a",desc:"Trophy of a stubborn beast."},coin_pouch:{id:"coin_pouch",name:"Stolen Coin Pouch",icon:"◉",value:14,color:"#f5c451",desc:"Someone else's savings."},treant_bark:{id:"treant_bark",name:"Ironbark",icon:"▮",value:12,color:"#7d5c3a",desc:"Bark hard as iron, humming with old growth."},golem_core:{id:"golem_core",name:"Golem Core",icon:"⬢",value:18,color:"#ff8a4a",desc:"A fist-sized ember of living stone."},scorpion_venom:{id:"scorpion_venom",name:"Venom Sac",icon:"◍",value:16,color:"#b6d957",desc:"Handle with care. Or don't."},drake_scale:{id:"drake_scale",name:"Drake Scale",icon:"⬟",value:24,color:"#e0603a",desc:"Scorched and shimmering."},frost_tear:{id:"frost_tear",name:"Frozen Tear",icon:"❄",value:18,color:"#a8e8ff",desc:"It never melts. It never stops weeping."},revenant_ash:{id:"revenant_ash",name:"Rime Ash",icon:"✦",value:22,color:"#c7d8e8",desc:"Cold ash from a cold memory."},bog_pearl:{id:"bog_pearl",name:"Bog Pearl",icon:"◍",value:26,color:"#9cb6a3",desc:"The mire makes strange jewels."},void_shard:{id:"void_shard",name:"Void Shard",icon:"◆",value:32,color:"#b48bd8",desc:"A sliver of somewhere else."},heart_shard:{id:"heart_shard",name:"Aetherheart Shard",icon:"✹",value:900,color:"#ffcf6a",desc:"A fragment of the world's own heart. It beats."}},sc={moss_slime:{id:"moss_slime",name:"Moss Slime",family:"slime",level:1,hp:40,atk:5,def:1,speed:3,xp:12,gold:[2,5],loot:["slime_gel"],lootChance:.8,scale:.9,color:"#79b85f",zone:"verdant"},grey_wolf:{id:"grey_wolf",name:"Grey Wolf",family:"wolf",level:2,hp:55,atk:7,def:2,speed:6,xp:18,gold:[3,7],loot:["wolf_fang"],lootChance:.7,scale:1,color:"#8a94a0",zone:"verdant"},wild_boar:{id:"wild_boar",name:"Wild Boar",family:"boar",level:3,hp:85,atk:9,def:3,speed:5.2,xp:26,gold:[4,9],loot:["boar_tusk"],lootChance:.75,scale:1.05,color:"#7a5a44",zone:"verdant"},bandit:{id:"bandit",name:"Bandit Scout",family:"bandit",level:4,hp:95,atk:11,def:4,speed:5.8,xp:34,gold:[10,22],loot:["coin_pouch"],lootChance:.8,scale:1,color:"#6b5a4a",zone:"verdant"},treant:{id:"treant",name:"Hollow Treant",family:"treant",level:6,hp:190,atk:14,def:7,speed:3.4,xp:70,gold:[12,26],loot:["treant_bark"],lootChance:.9,scale:1.5,color:"#6b5138",elite:!0,zone:"verdant"},cinder_slime:{id:"cinder_slime",name:"Cinder Slime",family:"slime",level:5,hp:100,atk:12,def:4,speed:3.4,xp:44,gold:[6,14],loot:["slime_gel"],lootChance:.55,scale:1,color:"#e0603a",zone:"ember"},scorpion:{id:"scorpion",name:"Ember Scorpion",family:"scorpion",level:6,hp:135,atk:15,def:6,speed:5,xp:58,gold:[8,18],loot:["scorpion_venom"],lootChance:.7,scale:1.1,color:"#c25a35",zone:"ember"},ash_bandit:{id:"ash_bandit",name:"Ash Bandit",family:"bandit",level:7,hp:170,atk:17,def:6,speed:6,xp:72,gold:[18,36],loot:["coin_pouch"],lootChance:.8,scale:1.1,color:"#4a3d3d",zone:"ember"},magma_golem:{id:"magma_golem",name:"Magma Golem",family:"golem",level:8,hp:260,atk:20,def:11,speed:3.2,xp:98,gold:[16,30],loot:["golem_core"],lootChance:.85,scale:1.3,color:"#5a3330",zone:"ember"},cinder_drake:{id:"cinder_drake",name:"Cinder Drake",family:"drake",level:10,hp:360,atk:26,def:10,speed:6.6,xp:150,gold:[30,60],loot:["drake_scale"],lootChance:.9,scale:1.4,color:"#8c3a2a",elite:!0,zone:"ember"},frost_wisp:{id:"frost_wisp",name:"Frost Wisp",family:"wisp",level:8,hp:150,atk:18,def:5,speed:5.4,xp:90,gold:[10,20],loot:["frost_tear"],lootChance:.75,scale:1,color:"#a8e8ff",zone:"frost"},ice_wolf:{id:"ice_wolf",name:"Ice Wolf",family:"wolf",level:9,hp:210,atk:22,def:8,speed:7.2,xp:110,gold:[12,24],loot:["wolf_fang"],lootChance:.7,scale:1.15,color:"#c8dce8",zone:"frost"},glacier_golem:{id:"glacier_golem",name:"Glacier Golem",family:"golem",level:11,hp:340,atk:26,def:14,speed:3,xp:165,gold:[18,34],loot:["golem_core"],lootChance:.8,scale:1.4,color:"#9fc4d8",zone:"frost"},revenant:{id:"revenant",name:"Rime Revenant",family:"revenant",level:12,hp:300,atk:30,def:10,speed:5.2,xp:185,gold:[22,44],loot:["revenant_ash"],lootChance:.8,scale:1.15,color:"#b8ccdc",zone:"frost"},snow_drake:{id:"snow_drake",name:"Snow Drake",family:"drake",level:13,hp:480,atk:34,def:13,speed:6.2,xp:240,gold:[38,70],loot:["drake_scale"],lootChance:.9,scale:1.5,color:"#dbeaf2",elite:!0,zone:"frost"},bog_lurker:{id:"bog_lurker",name:"Bog Lurker",family:"slime",level:12,hp:320,atk:28,def:9,speed:3.6,xp:180,gold:[20,40],loot:["bog_pearl"],lootChance:.65,scale:1.3,color:"#6c8a6a",zone:"umbra"},voidling:{id:"voidling",name:"Voidling",family:"wisp",level:14,hp:300,atk:34,def:11,speed:6.4,xp:230,gold:[24,48],loot:["void_shard"],lootChance:.75,scale:1.05,color:"#b48bd8",zone:"umbra"},mire_hag:{id:"mire_hag",name:"Mire Hag",family:"hag",level:15,hp:400,atk:38,def:12,speed:4.6,xp:270,gold:[28,54],loot:["bog_pearl"],lootChance:.8,scale:1.2,color:"#4c5a48",zone:"umbra"},shadow_knight:{id:"shadow_knight",name:"Shadow Knight",family:"knight",level:16,hp:520,atk:44,def:16,speed:5.6,xp:330,gold:[40,80],loot:["void_shard"],lootChance:.85,scale:1.25,color:"#33323f",zone:"umbra"},abyss_warden:{id:"abyss_warden",name:"Abyss Warden",family:"knight",level:18,hp:700,atk:52,def:18,speed:5.4,xp:450,gold:[60,110],loot:["void_shard"],lootChance:.9,scale:1.5,color:"#241f33",elite:!0,zone:"umbra"},boss:{id:"boss",name:"The Ashen Sovereign",family:"boss",level:25,hp:4200,atk:62,def:22,speed:5.2,xp:3e3,gold:[600,900],loot:["heart_shard"],lootChance:1,scale:2.2,color:"#2c2434",boss:!0,zone:"umbra"}},St={verdant:{id:"verdant",name:"Heartwood Vale",subtitle:"Where the world still remembers green",center:[-1250,-1150],color:"#5f9448",soil:"#6f9e4b",accent:"#9fce6a",sky:"#a9c9e8",fog:"#9db8c8",settlement:"Verdant Watch",monsters:["moss_slime","grey_wolf","wild_boar","bandit","treant"],story:"The first ward was planted here, in soil older than names."},ember:{id:"ember",name:"Cinderspire Wastes",subtitle:"Ash remembers every fire",center:[1400,-1150],color:"#8c4434",soil:"#7a3b2a",accent:"#e0603a",sky:"#d8a37a",fog:"#b08870",settlement:"Emberwatch",monsters:["cinder_slime","scorpion","ash_bandit","magma_golem","cinder_drake"],story:"The second ward burned, and the mountain has never cooled."},frost:{id:"frost",name:"Frostmere Reach",subtitle:"A silence that keeps its promises",center:[-1400,1200],color:"#b7cfda",soil:"#dce8ee",accent:"#8fd8ef",sky:"#a8c6da",fog:"#c4d6e0",settlement:"Frosthearth",monsters:["frost_wisp","ice_wolf","glacier_golem","revenant","snow_drake"],story:"The third ward sleeps under the ice, dreaming of a warmer oath."},umbra:{id:"umbra",name:"Umbral Mire",subtitle:"Everything sunk here is still listening",center:[1400,1200],color:"#55634f",soil:"#44503f",accent:"#9b7fc0",sky:"#6c6f8a",fog:"#7d8397",settlement:"Mirefall",monsters:["bog_lurker","voidling","mire_hag","shadow_knight","abyss_warden"],story:"The fourth ward was never lost. It was taken."}},Yn={elder:{id:"elder",name:"Elder Maren",role:"Keeper of the Chronicle",zone:"hub",color:"#d8c7a0",accent:"#6d4f8c",hat:"hood",staff:!0,story:!0},orin:{id:"orin",name:"Orin the Smith",role:"Weaponsmith",zone:"hub",color:"#a8754f",accent:"#4a2f20",hat:"band",vendor:"forge"},bram:{id:"bram",name:"Bram Provisioner",role:"General Goods",zone:"hub",color:"#8ab06a",accent:"#3d5a2c",hat:"cap",vendor:"goods"},lyra:{id:"lyra",name:"Lyra the Loomkeeper",role:"Astral Loom",zone:"hub",color:"#c9a8e8",accent:"#5a3a80",hat:"circlet",gacha:!0,story:!0},saelis:{id:"saelis",name:"Warden Saelis",role:"Verdant Warden",zone:"verdant",color:"#7fbf6a",accent:"#2f5c3a",hat:"antler",staff:!0,story:!0,warden:"verdant"},fen:{id:"fen",name:"Fen the Trader",role:"Wandering Merchant",zone:"verdant",color:"#c7a86a",accent:"#5e4a2a",hat:"cap",vendor:"travel"},orla:{id:"orla",name:"Orla the Hermit",role:"Keeper of Old Tales",zone:"verdant",color:"#9db08a",accent:"#41503a",hat:"hood",story:!0,traveler:!0},ignis:{id:"ignis",name:"Warden Ignis",role:"Ember Warden",zone:"ember",color:"#e0603a",accent:"#5c2418",hat:"helm",staff:!0,story:!0,warden:"ember"},kael:{id:"kael",name:"Kael the Cinder",role:"Arms Dealer",zone:"ember",color:"#b5503a",accent:"#3a1c16",hat:"band",vendor:"arms"},ash:{id:"ash",name:"The Ashen Chronicler",role:"Keeper of Burned Pages",zone:"ember",color:"#8a7a72",accent:"#3a2a26",hat:"hood",story:!0,traveler:!0},yrsa:{id:"yrsa",name:"Warden Yrsa",role:"Frost Warden",zone:"frost",color:"#a8d8e8",accent:"#2c5868",hat:"crown",staff:!0,story:!0,warden:"frost"},niva:{id:"niva",name:"Niva of the Hearth",role:"Frostmarch Trader",zone:"frost",color:"#d8e8f0",accent:"#486070",hat:"circlet",vendor:"travel"},maiden:{id:"maiden",name:"The Frostbound Maiden",role:"A Voice in the Ice",zone:"frost",color:"#d0e4ee",accent:"#4a6a7a",hat:"veil",story:!0,traveler:!0},morthos:{id:"morthos",name:"Warden Morthos",role:"Umbral Warden",zone:"umbra",color:"#9b7fc0",accent:"#33243f",hat:"hood",staff:!0,story:!0,warden:"umbra"},sable:{id:"sable",name:"Sable the Quiet",role:"Mire Broker",zone:"umbra",color:"#7a8a84",accent:"#2a3430",hat:"veil",vendor:"dark"},oracle:{id:"oracle",name:"The Mire Oracle",role:"She Who Listens",zone:"umbra",color:"#8fa89a",accent:"#3a4a40",hat:"veil",story:!0,traveler:!0}},js={forge:{name:"Orin the Smith",tagline:"Steel remembers every hand that shaped it.",rarity:["iron","gold"],goods:["weapon","armor"]},goods:{name:"Bram Provisioner",tagline:"Everything a traveler needs. Nothing they don't.",rarity:["copper","iron"],goods:["weapon","armor","potion"]},travel:{name:"Wandering Merchant",tagline:"The road is my shopfront.",rarity:["iron","gold"],goods:["potion","armor"]},arms:{name:"Arms Dealer",tagline:"For the ash-born and the ash-bound.",rarity:["gold","diamond"],goods:["weapon","armor","potion"]},dark:{name:"Mire Broker",tagline:"I sell what the mire spits back out.",rarity:["gold","diamond"],goods:["weapon","armor","potion"]}},Bi={health:{id:"potion_health",name:"Cinderhealth Draught",icon:"🧪",value:28,kind:"potion",desc:"Restores 45% health. Tastes of burnt honey.",heal:.45},mana:{id:"potion_mana",name:"Aetherdew Vial",icon:"⚗",value:30,kind:"potion",desc:"Restores 50% mana. Cold going down.",mana:.5}},fl={glasses:"Eyewear",hair:"Hair Accessory",outfit:"Outfit",skin:"Weapon Skin"},zi=[{id:"spec_copper",slot:"glasses",rarity:"copper",name:"Copper Spectacles",model:"round",color:"#c9804f"},{id:"spec_iron",slot:"glasses",rarity:"iron",name:"Iron Aviators",model:"aviator",color:"#c2ced9"},{id:"spec_gold",slot:"glasses",rarity:"gold",name:"Gilded Monocle",model:"monocle",color:"#f5c451"},{id:"spec_diamond",slot:"glasses",rarity:"diamond",name:"Prism Visor",model:"visor",color:"#74e7f7"},{id:"spec_adam",slot:"glasses",rarity:"adamantite",name:"Voidstar Lenses",model:"void",color:"#c58cff"},{id:"hair_vine",slot:"hair",rarity:"copper",name:"Verdant Blossom",model:"flower",color:"#e78ab0"},{id:"hair_feather",slot:"hair",rarity:"iron",name:"Ember Quill",model:"feather",color:"#e0603a"},{id:"hair_diadem",slot:"hair",rarity:"gold",name:"Frost Diadem",model:"diadem",color:"#a8e8ff"},{id:"hair_crown",slot:"hair",rarity:"diamond",name:"Mire Crown",model:"crown",color:"#c084fc"},{id:"hair_halo",slot:"hair",rarity:"adamantite",name:"Astral Halo",model:"halo",color:"#ffe28a"},{id:"fit_wayfarer",slot:"outfit",rarity:"copper",name:"Wayfarer's Garb",model:"wayfarer",colors:["#7a6a52","#c9b98f","#4a3f2f"],cape:"#8a4a3a"},{id:"fit_duelist",slot:"outfit",rarity:"iron",name:"Ember Duelist",model:"duelist",colors:["#5a2a22","#b5503a","#2e1a16"],cape:"#e0603a"},{id:"fit_frost",slot:"outfit",rarity:"gold",name:"Frostweave Robe",model:"frost",colors:["#3a5a6a","#a8d8e8","#22333d"],cape:"#b8e8f8"},{id:"fit_night",slot:"outfit",rarity:"diamond",name:"Nightbloom Cloak",model:"night",colors:["#2a2233","#6a4a8a","#181420"],cape:"#9b7fc0"},{id:"fit_regalia",slot:"outfit",rarity:"adamantite",name:"Adamant Regalia",model:"regalia",colors:["#2a2440","#c58cff","#4a3a70"],cape:"#e8d8ff"},{id:"skin_copper",slot:"skin",rarity:"copper",name:"Copper Filigree",model:"copper",color:"#c9804f"},{id:"skin_iron",slot:"skin",rarity:"iron",name:"Iron Edge",model:"iron",color:"#c2ced9"},{id:"skin_sun",slot:"skin",rarity:"gold",name:"Sunforged",model:"sun",color:"#ffcf6a"},{id:"skin_crystal",slot:"skin",rarity:"diamond",name:"Crystal Resonance",model:"crystal",color:"#74e7f7"},{id:"skin_void",slot:"skin",rarity:"adamantite",name:"Voidreaver",model:"void",color:"#c58cff"}],cs=Object.fromEntries(zi.map(s=>[s.id,s])),qa={copper:50,iron:27,gold:14,diamond:7,adamantite:2},pl=[{kind:"hunt",title:"Cull the {monster}",text:"The roads are unsafe. Slay {count} {monster} and return for payment.",min:3,max:6},{kind:"gather",title:"Gather {loot}",text:"An alchemist needs {count} {loot}. Bring them back intact.",min:2,max:5},{kind:"deliver",title:"A Word to {npc}",text:"Carry a sealed letter to {npc}. Do not read it. (You will read it.)",min:1,max:1},{kind:"explore",title:"Eyes on {poi}",text:"Scout {poi} and report what you find. Do not linger after dark.",min:1,max:1}],Ya={normal:{id:"normal",name:"A Quiet Seal",color:"#9db8c8",icon:"◯",text:"You seal the Aetherheart without ceremony. The world does not thank you; it does not know your name. But the sky stays where it is, and children in the vale grow up believing the ground is solid. Perhaps that is enough."},bad:{id:"bad",name:"The Hollow Crown",color:"#c0475a",icon:"♛",text:"You take the Heart into yourself. Power floods every vein; the world bends like reeds. For a season you are worshipped. Then the whispers begin — every voice in the mire, every ash in the wind. You are not its keeper. You are its door."},happy:{id:"happy",name:"Dawn of the Sixth Ward",color:"#ffd479",icon:"☀",text:"Four wardens kneel. Four sigils burn. With the Heart restored, the valley blooms in a single night, and for the first time in a century the roads are safe after dark. They will write songs about the day the wardens chose a stranger. You will be embarrassed by all of them."},bittersweet:{id:"bittersweet",name:"The Keeper's Vigil",color:"#8fb8d8",icon:"✦",text:"The Heart cannot be carried and cannot be left. So you bind it to yourself, and stay. The wardens promise to return every year. Some do. The seasons blur. Once, a traveler asks your name, and you find you have forgotten it — but the valley is green, and that is your answer."},secret:{id:"secret",name:"The Name Beneath the World",color:"#c58cff",icon:"✹",text:"You speak the name the wardens never dared: AETHERFALL. The Heart is not a thing to be sealed or worn. It is a door, and it has been knocking for a thousand years. You open it — not to take power, but to let the world remember what it is. The mire lifts. The ash cools. Somewhere, four wardens weep with relief. And the sky, at last, exhales."}},ja=new Map;function Ot(s,e={}){const t=s+JSON.stringify(e);if(!e.unique&&ja.has(t))return ja.get(t);const n=new ct({color:s,roughness:e.roughness??.82,metalness:e.metalness??.05,flatShading:e.flat!==!1,emissive:e.emissive||"#000000",emissiveIntensity:e.emissiveIntensity??0,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side||Fn});return e.unique||ja.set(t,n),n}function K(s,e,t,n,i={}){const a=new ge(new yi(s,e,t),i.material||Ot(n,i));return a.castShadow=i.shadow!==!1,a.receiveShadow=!0,i.x!==void 0&&a.position.set(i.x,i.y||0,i.z||0),a}function xt(s,e,t={}){const n=new ge(new dn(s,t.seg||8,t.seg2||6),t.material||Ot(e,t));return n.castShadow=t.shadow!==!1,n.receiveShadow=!0,t.x!==void 0&&n.position.set(t.x,t.y||0,t.z||0),n}function At(s,e,t,n,i={}){const a=new ge(new Mn(s,e,t,i.seg||6),i.material||Ot(n,i));return a.castShadow=i.shadow!==!1,a.receiveShadow=!0,i.x!==void 0&&a.position.set(i.x,i.y||0,i.z||0),a}function ot(s,e,t,n={}){const i=new ge(new Jn(s,e,n.seg||6),n.material||Ot(t,n));return i.castShadow=n.shadow!==!1,i.receiveShadow=!0,n.x!==void 0&&i.position.set(n.x,n.y||0,n.z||0),i}function Ks(s,e,t){const n=new lt,i=K(e,s,e,t,{y:-s/2,roughness:.75});return n.add(i),n}function Hi(s,e,t=null){const n=new lt,i=e||"#cfd8e0",a=t||null,o="#3a2a1e",r=a?{emissive:a,emissiveIntensity:1.6}:{metalness:.65,roughness:.28};if(s==="sword"){const l=K(.16,1.5,.045,i,{y:1,unique:!0,...r});l.geometry.translate(0,0,0);const c=new ge(new Jn(.14,.34,4),l.material);c.position.y=1.9,c.castShadow=!0,n.add(l,c),n.add(K(.46,.09,.12,"#b8863a",{y:.25})),n.add(At(.05,.05,.32,o,{y:.08})),n.add(xt(.09,"#b8863a",{y:-.1})),n.add(K(.04,1.3,.06,"#ffffff",{y:.98,opacity:.18,transparent:!0,emissive:a||"#000"}))}else if(s==="bow"){const l=new ge(new Ht(.72,.045,5,16,Math.PI*1.1),Ot(i,r));l.rotation.z=Math.PI*.45,l.position.y=.7,l.castShadow=!0,n.add(l);const c=new Yl({color:"#e8e2d0"}),h=[new L(.28,.06,0),new L(.05,.68,0),new L(.28,1.3,0)];n.add(new wh(new Ut().setFromPoints(h),c)),n.add(K(.09,.3,.09,o,{y:.68}));for(let d=0;d<3;d++)n.add(K(.02,.5,.02,"#d8cdb0",{y:1.18-d*.16,x:.34+d*.01,z:.08}))}else if(s==="staff"){const l=At(.055,.065,2.1,"#5a4430",{y:1});n.add(l);const c=new ge(new zn(.23,1),new ct({color:a||i,emissive:a||i,emissiveIntensity:1.8,roughness:.2,metalness:.4,flatShading:!0}));c.position.y=2.12,c.castShadow=!0,n.add(c);for(let h=0;h<3;h++){const d=new ge(new Ht(.32+h*.07,.018,4,16),Ot(i,{metalness:.7}));d.position.y=2.12,d.rotation.x=.9+h*.5,d.rotation.y=h*.7,n.add(d)}n.add(K(.2,.08,.2,"#b8863a",{y:1.94}))}else if(s==="dagger"){const l=K(.11,.85,.035,i,{y:.62,...r}),c=new ge(new Jn(.085,.28,4),l.material);c.position.y=1.18,n.add(l,c),n.add(K(.3,.07,.1,"#8a6a3a",{y:.18})),n.add(At(.045,.05,.26,o,{y:.02})),n.add(K(.05,.5,.05,"#ffffff",{y:.62,opacity:.16,transparent:!0,emissive:a||"#000"}))}else if(s==="scepter"){n.add(At(.05,.06,1.9,"#6a5030",{y:.9}));const l=new ge(new Ht(.3,.05,5,18),Ot("#d8b56a",{metalness:.8,roughness:.3}));l.position.y=1.98,l.castShadow=!0,n.add(l);const c=new ge(new zn(.16,1),new ct({color:a||"#ffe9a0",emissive:a||"#ffd479",emissiveIntensity:2}));c.position.y=1.98,n.add(c);for(let h=0;h<6;h++){const d=K(.03,.22,.03,"#f0d68a",{emissive:a||"#ffd479",emissiveIntensity:.8});d.position.set(Math.cos(h/6*Math.PI*2)*.32,1.98+Math.sin(h/6*Math.PI*2)*.32,0),d.rotation.z=h/6*Math.PI*2,n.add(d)}}return n.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),n}function ml(s={}){const e=s.job||"swordsman",t=Pt[e]||Pt.swordsman,n=!!s.npc,i=s.skin||"#e8b98f",a=s.hair||(e==="priest"?"#e8dfc0":e==="mage"?"#d8e8ff":"#4a3426"),o=s.color||t.color,r=s.accent||t.accent,l="#2b2622",c=new lt,h=new lt;c.add(h);const d=Ks(.78,.19,"#3d3a3a");d.position.set(-.15,.82,0);const f=Ks(.78,.19,"#3d3a3a");f.position.set(.15,.82,0);for(const G of[d,f]){const O=K(.22,.2,.32,l,{y:-.78,z:.04});G.add(O)}h.add(d,f);const p=new lt;p.position.y=.82,h.add(p);const v=K(.52,.62,.32,o,{y:.33,roughness:.7});p.add(v),p.add(K(.55,.1,.35,r,{y:.02})),p.add(K(.12,.62,.34,r,{y:.33,z:.005,opacity:.9})),p.add(K(.3,.12,.34,r,{y:.56}));const g=K(.24,.16,.3,r,{x:-.34,y:.58,z:0,roughness:.6}),m=K(.24,.16,.3,r,{x:.34,y:.58,z:0,roughness:.6});p.add(g,m);const u=Ks(.58,.15,o);u.position.set(-.36,.56,0);const S=xt(.09,i,{y:-.6});u.add(S);const w=Ks(.58,.15,o);w.position.set(.36,.56,0);const M=xt(.09,i,{y:-.6});w.add(M),p.add(u,w);const T=new lt;T.position.y=.82,p.add(T);const A=xt(.25,i,{y:.02,seg:10,seg2:8});T.add(A),T.add(K(.18,.1,.04,i,{y:-.05,z:.23}));const C=xt(.265,a,{y:.09,z:-.02,seg:10,seg2:6});C.scale.set(1,.8,1),T.add(C);const D=new yt({color:"#221a14"});for(const G of[-1,1]){const O=new ge(new dn(.032,6,5),D);O.position.set(G*.09,.02,.225),T.add(O)}const b=new lt;b.position.set(0,.62,-.17),p.add(b);const y=K(.5,1,.05,s.cape||r,{y:-.5,z:-.02,roughness:.9});if(b.add(y),b.rotation.x=-.1,e==="mage"||e==="priest"||e==="alchemy"){const G=ot(.42,.85,o,{y:-.35,seg:8});h.add(G)}else if(e==="archer")p.add(K(.1,.72,.36,r,{y:.32,z:0,rotationZ:.6}));else if(e==="assassin"){const G=ot(.3,.35,l,{y:.22,z:-.02,seg:6});T.add(G),p.add(K(.5,.24,.3,l,{y:.44,opacity:.9}))}else e==="swordsman"&&p.add(K(.48,.18,.36,"#b8b0a0",{y:.38,metalness:.5,roughness:.4}));if(n){const G=s.hat;if(G==="hood"){const O=ot(.33,.4,s.accent||"#4a3a5a",{y:.2,z:-.03,seg:7});T.add(O)}else if(G==="cap"){const O=ot(.3,.22,s.accent||"#5a4a2a",{y:.24,seg:8});T.add(O)}else if(G==="band")T.add(At(.27,.27,.06,s.accent||"#6a4a2a",{y:.17}));else if(G==="circlet"){const O=new ge(new Ht(.24,.022,4,14),Ot("#e8d078",{metalness:.8,roughness:.3}));O.position.y=.2,O.rotation.x=Math.PI/2,T.add(O)}else if(G==="helm")T.add(K(.48,.22,.48,"#8a7a62",{y:.14,metalness:.5})),T.add(K(.05,.2,.05,"#e0603a",{x:0,y:.42,emissive:"#e0603a",emissiveIntensity:.8}));else if(G==="crown"){const O=new lt;for(let W=0;W<5;W++){const Z=ot(.05,.18,"#c8e4f0",{y:.2,emissive:"#a8e8ff",emissiveIntensity:.4});Z.position.set(Math.cos(W/5*Math.PI*2)*.19,.22,Math.sin(W/5*Math.PI*2)*.19),O.add(Z)}T.add(O)}else if(G==="veil"){const O=K(.5,.5,.06,s.accent||"#3a4a40",{y:-.1,z:-.22,opacity:.85,transparent:!0});T.add(O)}else if(G==="antler")for(const O of[-1,1]){const W=K(.04,.35,.04,"#8a6a42",{x:O*.18,y:.34});W.rotation.z=O*.5;const Z=K(.03,.22,.03,"#8a6a42",{x:O*.29,y:.48});Z.rotation.z=O*.9,T.add(W,Z)}if(s.staff){const O=At(.04,.05,2,"#5a4430",{y:-.1});O.position.set(-.36,.1,.12);const W=new ge(new Qt(.12),new ct({color:s.accent||"#a8e8ff",emissive:s.accent||"#a8e8ff",emissiveIntensity:1.2}));W.position.set(-.36,1.1,.12),p.add(O,W)}}const I=new lt;I.position.set(0,-.62,.02),w.add(I);const k={jobId:e,weaponType:t.weapon,weaponSkin:null,parts:{hips:h,torso:p,head:T,armL:u,armR:w,legL:d,legR:f,capePivot:b,cape:y,chest:v,hair:C,skull:A,weaponGroup:I},base:{bodyCol:o,trimCol:r,hairCol:a,cape:s.cape||r},cosmetics:{},phase:Math.random()*10};function X(G,O,W){for(k.weaponType=G;I.children.length;)I.remove(I.children[0]);const Z=Hi(G,O,W);I.add(Z),k.weaponGroup=Z}return X(t.weapon,s.weaponSkin||null,s.weaponGlow||null),c.userData=k,c.userData.animate=(G,O=0,W=null,Z=null)=>{const H=G+k.phase,de=Math.min(1,O),pe=Math.sin(H*9)*.62*de;if(d.rotation.x=pe,f.rotation.x=-pe,u.rotation.x=-pe*.85,w.rotation.x=pe*.6,u.rotation.z=.05,w.rotation.z=-.05,h.position.y=Math.abs(Math.sin(H*9))*.045*de,p.rotation.y=Math.sin(H*3)*.02,T.rotation.y=Math.sin(H*1.4)*.05,b.rotation.x=-.1-de*.38+Math.sin(H*5)*.03,W!==null){const we=Math.max(0,Math.min(1,W)),qe=Math.sin(we*Math.PI);w.rotation.x=-1.6*qe,w.rotation.z=-.7*qe,p.rotation.y=-.45*qe}if(Z!==null){const we=Math.max(0,Math.min(1,Z));u.rotation.x=-1.1*Math.sin(we*Math.PI),w.rotation.x=-1.4*Math.sin(we*Math.PI),T.rotation.x=-.12*Math.sin(we*Math.PI)}else T.rotation.x=0},c}function vm(s,e){const t=s.userData,n=t.parts.head;t.parts.torso,t.parts.hips,t.cosmeticGroup||(t.cosmeticGroup=new lt,n.add(t.cosmeticGroup));const i=t.cosmeticGroup;for(;i.children.length;)i.remove(i.children[0]);const a=e.outfit?cs[e.outfit]:null,o=e.glasses?cs[e.glasses]:null,r=e.hair?cs[e.hair]:null,l=e.skin?cs[e.skin]:null,c=a?a.colors[0]:t.base.bodyCol,h=a?a.colors[1]:t.base.trimCol,d=a?a.colors[2]:t.base.trimCol;if(t.parts.chest.material=Ot(c,{roughness:.7}),t.parts.legL.children[0].material=Ot(d),t.parts.legR.children[0].material=Ot(d),t.parts.torso.children.forEach((p,v)=>{p.isMesh&&p!==t.parts.chest&&(v===1||v===3)&&(p.material=Ot(h))}),t.parts.cape.material=Ot(a?a.cape:t.base.cape,{roughness:.9}),t.parts.armL.children[0].material=Ot(c),t.parts.armR.children[0].material=Ot(c),t.parts.hair.material=Ot(t.base.hairCol),o){const p=Ot(o.color,{metalness:.75,roughness:.2,emissive:o.model==="void"?o.color:"#000000",emissiveIntensity:o.model==="void"?1.2:0});if(o.model==="monocle"){const v=new ge(new Ht(.085,.016,4,12),p);v.position.set(.09,.03,.23),i.add(v),i.add(K(.015,.3,.015,o.color,{x:.16,y:-.12,z:.24}))}else if(o.model==="visor"){const v=K(.42,.09,.04,o.color,{y:.03,z:.23,emissive:o.color,emissiveIntensity:1.4,unique:!0});i.add(v)}else if(o.model==="void")for(const v of[-1,1]){const g=new ge(new Qt(.075),p);g.position.set(v*.1,.03,.24),i.add(g)}else{for(const v of[-1,1]){const g=new ge(new Ht(.075,.014,4,12),p);g.position.set(v*.1,.03,.23),i.add(g)}i.add(K(.1,.012,.012,o.color,{y:.03,z:.23})),o.model==="aviator"&&i.add(K(.4,.04,.02,o.color,{y:.07,z:.22}))}}if(r){const p=Ot(r.color,{emissive:r.model==="halo"||r.model==="diadem"||r.model==="crown"?r.color:"#000000",emissiveIntensity:r.model==="halo"?1.6:.5,metalness:.6});if(r.model==="flower")for(let v=0;v<5;v++){const g=xt(.045,r.color,{unique:!0});g.material=p,g.position.set(-.19+Math.cos(v/5*Math.PI*2)*.05,.24+Math.sin(v/5*Math.PI*2)*.05,.08),i.add(g)}else if(r.model==="feather"){const v=ot(.055,.42,r.color,{x:.16,y:.36,z:-.04,emissive:r.color,emissiveIntensity:.3});v.rotation.z=-.45,i.add(v)}else if(r.model==="diadem"){const v=new ge(new Ht(.23,.02,4,16),p);v.rotation.x=Math.PI/2,v.position.y=.18,i.add(v),i.add(ot(.05,.14,r.color,{y:.27,z:.16,emissive:r.color,emissiveIntensity:.8}))}else if(r.model==="crown")for(let v=0;v<5;v++){const g=ot(.035,.16,r.color,{unique:!0});g.material=p,g.position.set(Math.cos(v/5*Math.PI*2)*.18,.25,Math.sin(v/5*Math.PI*2)*.18),i.add(g)}else if(r.model==="halo"){const v=new ge(new Ht(.24,.026,5,20),p);v.rotation.x=Math.PI/2,v.position.y=.46,i.add(v);const g=new ge(new Ht(.24,.08,4,20),new yt({color:r.color,transparent:!0,opacity:.18,blending:$t,depthWrite:!1}));g.rotation.x=Math.PI/2,g.position.y=.46,i.add(g)}}for(a?t.parts.cape.scale.set(a.model==="regalia"?1.15:1,a.model==="frost"?1.15:1,1):t.parts.cape.scale.set(1,1,1);t.parts.weaponGroup.children.length;)t.parts.weaponGroup.remove(t.parts.weaponGroup.children[0]);const f=Hi(t.weaponType,l?l.color:null,l?l.color:null);t.parts.weaponGroup.add(f)}function _m(s){const e=new lt,t=s.color||"#888888",n=new Pe(t).multiplyScalar(.6).getStyle(),i=new yt({color:s.family==="wisp"?"#e8f6ff":"#ffcf6a"});let a=()=>{};const o=(r,l,c,h,d=.045)=>{for(const f of[-1,1]){const p=new ge(new dn(d,5,4),i);p.position.set(f*l,c,h),r.add(p)}};if(s.family==="slime"){const r=xt(.75,t,{y:.62,seg:10,seg2:8,roughness:.35});r.scale.set(1.1,.85,1.1),e.add(r),o(e,.22,.78,.65,.06),e.add(xt(.28,n,{y:.95,x:.1,z:.2,roughness:.3})),a=l=>{const c=1+Math.sin(l*2.4+e.userData.phase)*.06;r.scale.set(1.1*(2-c),.85*c,1.1*(2-c)),r.position.y=.6*c}}else if(s.family==="wolf"){const r=s.id==="ice_wolf"?.9:1,l=K(.62*r,.55,1.35,t,{y:.95});e.add(l);const c=K(.5,.45,.55,t,{y:1.18,z:.72});e.add(c),e.add(K(.28,.22,.4,n,{y:1.06,z:1.02})),o(c,.16,.04,.28,.05);for(const d of[-1,1]){const f=ot(.12,.28,n,{x:d*.16,y:1.47,z:.62});e.add(f)}e.add(K(.16,.16,.7,n,{y:1.08,z:-.9,rotationX:.3}));const h=[];for(const[d,f]of[[-.24,.45],[.24,.45],[-.24,-.45],[.24,-.45]]){const p=K(.16,.7,.16,n,{x:d,y:.36,z:f});e.add(p),h.push(p)}a=d=>{const f=Math.sin(d*8+e.userData.phase)*.4;h[0].rotation.x=f,h[3].rotation.x=f,h[1].rotation.x=-f,h[2].rotation.x=-f}}else if(s.family==="boar"){const r=xt(.7,t,{y:.8,seg:8,seg2:6});r.scale.set(1,.9,1.45),e.add(r);const l=K(.55,.5,.5,n,{y:.85,z:.9});e.add(l),e.add(K(.3,.25,.22,"#c8a888",{y:.72,z:1.16}));for(const h of[-1,1])e.add(ot(.06,.32,"#f0e6d0",{x:h*.2,y:.82,z:1.15,rotationX:-.7}));o(l,.18,.1,.26,.045),e.add(ot(.25,.3,n,{y:.35,z:-.4,rotationX:.6}));const c=[];for(const[h,d]of[[-.38,.55],[.38,.55],[-.38,-.55],[.38,-.55]]){const f=K(.18,.62,.18,n,{x:h,y:.31,z:d});e.add(f),c.push(f)}a=h=>{const d=Math.sin(h*7)*.35;c[0].rotation.x=d,c[3].rotation.x=d,c[1].rotation.x=-d,c[2].rotation.x=-d}}else if(s.family==="scorpion"){const r=xt(.5,t,{y:.55,seg:8,seg2:6});r.scale.set(1,.7,1.5),e.add(r);const l=K(.5,.35,.4,n,{y:.55,z:.85});e.add(l),o(l,.16,.05,.22,.04);const c=[];for(const f of[-1,1]){const p=K(.12,.12,.55,n,{x:f*.5,y:.55,z:1.05,rotationY:f*.4}),v=xt(.22,t,{x:f*.62,y:.55,z:1.3,seg:6,seg2:5});v.scale.set(.8,.5,1.1),e.add(p,v),c.push(v)}let h=new lt;h.position.set(0,.65,-.55),e.add(h);for(let f=0;f<4;f++){const p=xt(.22-f*.03,n,{y:.14,z:-.22,seg:6,seg2:5});p.position.set(0,.18+f*.12,-.18),h.add(p)}const d=ot(.1,.35,"#e8b04a",{y:.7,z:-.2,emissive:"#e8b04a",emissiveIntensity:.5});h.add(d);for(const[f,p]of[[-.45,.35],[.45,.35],[-.5,-.2],[.5,-.2],[-.4,-.5],[.4,-.5]]){const v=K(.08,.5,.08,n,{x:f,y:.28,z:p});v.rotation.z=f>0?.4:-.4,e.add(v)}a=f=>{c[0].position.y=.55+Math.sin(f*4)*.05,c[1].position.y=.55-Math.sin(f*4)*.05,h.rotation.x=Math.sin(f*2)*.08}}else if(s.family==="golem"){const r=new ge(new zn(.4,0),new ct({color:t,emissive:s.id==="glacier_golem"?"#8fd8ef":"#ff6a2a",emissiveIntensity:1.6,flatShading:!0}));r.position.y=1.15,e.add(r),e.add(K(.9,.75,.6,t,{y:1.35,roughness:1})),e.add(K(.6,.55,.7,n,{y:.7}));for(const l of[-1,1]){const c=K(.3,.95,.3,t,{x:l*.68,y:1.45,z:0});c.rotation.z=l*.25,e.add(c);const h=K(.42,.42,.42,n,{x:l*.82,y:.92,z:0});e.add(h);const d=K(.35,.6,.35,n,{x:l*.24,y:.3});e.add(d);const f=ot(.12,.5,s.id==="glacier_golem"?"#c8f0ff":"#ff8a4a",{x:l*.3,y:1.9,emissive:s.id==="glacier_golem"?"#8fd8ef":"#ff5a1a",emissiveIntensity:.8});f.rotation.z=l*.3,e.add(f)}a=l=>{r.rotation.y=l*.8,r.material.emissiveIntensity=1.3+Math.sin(l*3)*.4}}else if(s.family==="wisp"){const r=new ge(new zn(.5,1),new ct({color:t,emissive:t,emissiveIntensity:1.8,transparent:!0,opacity:.85,flatShading:!0}));r.position.y=1.2,e.add(r);const l=new ge(new Ht(.7,.03,4,20),new yt({color:t,transparent:!0,opacity:.6,blending:$t}));l.position.y=1.2,e.add(l);const c=[];for(let d=0;d<5;d++){const f=new ge(new Qt(.09),new ct({color:t,emissive:t,emissiveIntensity:1}));f.position.set(Math.cos(d/5*Math.PI*2)*.85,1.2+Math.sin(d/5*Math.PI*2)*.3,Math.sin(d/5*Math.PI*2)*.85),e.add(f),c.push(f)}const h=new ge(new Jn(.35,1.2,6,1,!0),new yt({color:t,transparent:!0,opacity:.16,side:Bt,blending:$t,depthWrite:!1}));h.position.y=.5,h.rotation.x=Math.PI,e.add(h),a=d=>{r.position.y=1.15+Math.sin(d*2.5)*.18,l.rotation.y=d*1.5,l.rotation.x=.5+Math.sin(d)*.2,c.forEach((f,p)=>{f.rotation.y=d*2+p})}}else if(s.family==="drake"){const r=xt(.72,t,{y:1.15,seg:8,seg2:6});r.scale.set(1,.9,1.6),e.add(r);const l=At(.22,.32,.9,t,{y:1.6,z:.9,rotationX:.5});e.add(l);const c=K(.45,.38,.75,t,{y:2,z:1.4});e.add(c),e.add(K(.3,.2,.4,n,{y:1.92,z:1.78})),o(c,.14,.07,.35,.05);for(const h of[-1,1]){const d=ot(.06,.4,"#e8dcc8",{x:h*.15,y:2.28,z:1.3});d.rotation.x=-.4,e.add(d);const f=K(.08,.9,1.3,n,{x:h*.75,y:1.55,z:-.2});f.rotation.z=h*.5,f.rotation.x=-.2,e.add(f);const p=K(.06,.5,.9,t,{x:h*1.05,y:2.1,z:-.5});p.rotation.z=h*.7,e.add(p)}for(let h=0;h<4;h++){const d=ot(.18-h*.03,.55,t,{y:1.05,z:-1.2-h*.35});d.rotation.x=Math.PI/2,e.add(d)}for(const[h,d]of[[-.35,.35],[.35,.35],[-.35,-.55],[.35,-.55]])e.add(K(.22,.8,.22,n,{x:h,y:.4,z:d}));for(let h=0;h<4;h++)e.add(ot(.1,.35,n,{y:1.75,z:.5-h*.4}));a=h=>{c.rotation.x=Math.sin(h*1.5)*.06,r.position.y=1.15+Math.sin(h*1.8)*.04}}else if(s.family==="treant"){const r=At(.42,.6,2,"#6b5138",{y:1,seg:7});e.add(r);const l=K(.7,.55,.6,"#5a4430",{y:2.15});e.add(l),o(l,.15,.02,.31,.05);for(const c of[-1,1]){const h=At(.1,.16,1,"#5a4430",{x:c*.6,y:1.75,z:.1});h.rotation.z=c*.7,e.add(h);const d=ot(.12,.35,"#4a3828",{x:c*1.05,y:1.4,z:.1});d.rotation.z=c*.5,e.add(d)}for(let c=0;c<6;c++){const h=ot(.6-c*.05,.7,"#5f8a45",{y:2.55+c*.12,x:Math.cos(c)*.2,z:Math.sin(c)*.2,seg:5});e.add(h)}e.add(K(.18,.18,.18,"#e8b04a",{y:1.8,x:0,z:.45,emissive:"#ffcf6a",emissiveIntensity:.4})),a=c=>{l.rotation.y=Math.sin(c*.8)*.15,e.children.forEach((h,d)=>{d>7&&(h.rotation.z=Math.sin(c+d)*.03)})}}else if(s.family==="revenant"){const r=ot(.55,1.5,t,{y:.8,seg:7});e.add(r);const l=K(.5,.6,.3,n,{y:1.55});e.add(l);const c=xt(.25,"#c8d8e4",{y:1.95,seg:8,seg2:6});e.add(c),o(c,.09,.02,.22,.035);for(const f of[-1,1]){const p=K(.14,.7,.14,n,{x:f*.36,y:1.55,z:.1});p.rotation.z=f*.3,e.add(p)}const h=Hi("sword","#b8e8ff","#8fd8ef");h.scale.setScalar(.7),h.position.set(.45,1.1,.2),h.rotation.z=-.4,e.add(h);const d=xt(.12,"#8fd8ef",{y:2.3,emissive:"#8fd8ef",emissiveIntensity:2,shadow:!1});e.add(d),a=f=>{c.rotation.y=Math.sin(f*1.2)*.2,d.position.y=2.3+Math.sin(f*3)*.1}}else if(s.family==="hag"){const r=ot(.62,1.6,t,{y:.8,seg:7});e.add(r),e.add(K(.4,.5,.3,n,{y:1.6}));const l=xt(.24,"#8a9a78",{y:2,seg:8,seg2:6});e.add(l),o(l,.09,.02,.21,.035);for(const h of[-1,1]){const d=ot(.05,.28,"#4a5a3a",{x:h*.16,y:2.26,z:-.02});d.rotation.z=h*.4,e.add(d)}const c=Hi("staff","#8a6a9a","#c58cff");c.scale.setScalar(.8),c.position.set(-.55,.4,.15),e.add(c),a=h=>{l.rotation.y=Math.sin(h*.9)*.25,l.rotation.z=.08}}else if(s.family==="knight"||s.family==="bandit"){const r=s.family==="bandit",l=r?.95:1.15,c=t,h=K(.6*l,.7,.35,c,{y:1.25});e.add(h);const d=xt(.26,r?"#d8a888":"#252530",{y:1.85,seg:8});e.add(d),r?(e.add(ot(.32,.35,"#3a3428",{y:1.98,z:-.02,seg:7})),o(d,.09,.02,.22,.035)):(e.add(K(.5,.22,.5,n,{y:1.82})),o(d,.09,.02,.21,.035));for(const p of[-1,1]){const v=K(.24,.18,.3,n,{x:p*.36,y:1.5});e.add(v);const g=K(.16,.66,.16,c,{x:p*.4,y:1.15});e.add(g),e.add(K(.2,.72,.22,n,{x:p*.18,y:.45}))}const f=Hi(r?"dagger":"sword",r?"#b8b0a0":"#9a8ac0",r?null:"#c58cff");f.position.set(.55,.95,.1),f.rotation.z=-.25,r||f.scale.setScalar(1.15),e.add(f),r||e.add(ot(.08,.4,"#c58cff",{x:-.2,y:2.15,emissive:"#c58cff",emissiveIntensity:1})),a=p=>{e.rotation.z=Math.sin(p*1.5)*.01}}else if(s.family==="boss"){const r=K(1.3,1.5,.8,t,{y:2.3});e.add(r),e.add(K(1,.5,.7,"#3a2a3a",{y:1.4}));for(const p of[-1,1]){e.add(K(.45,.4,.55,"#4a3a4a",{x:p*.85,y:2.9}));const v=K(.32,1.2,.32,"#3a3038",{x:p*.9,y:2.2});v.rotation.z=p*.15,e.add(v);const g=K(.4,1.2,.45,"#2a2430",{x:p*.35,y:.65});e.add(g);const m=ot(.1,.8,"#c8b090",{x:p*.4,y:3.8});m.rotation.z=p*.3,e.add(m)}const l=K(.62,.6,.6,"#1a1620",{y:3.45});e.add(l);const c=new yt({color:"#ff5a3a"});for(const p of[-1,1]){const v=new ge(new dn(.07,6,5),c);v.position.set(p*.15,3.5,.31),e.add(v)}const h=new lt;h.position.y=3.85;for(let p=0;p<6;p++){const v=ot(.07,.42,"#ff8a4a",{emissive:"#ff5a1a",emissiveIntensity:1.4});v.position.set(Math.cos(p/6*Math.PI*2)*.34,0,Math.sin(p/6*Math.PI*2)*.34),h.add(v)}e.add(h);const d=Hi("sword","#b09a9a","#ff5a2a");d.scale.setScalar(2),d.position.set(1.1,1.7,.35),d.rotation.z=-.2,e.add(d);const f=[];for(let p=0;p<6;p++){const v=new ge(new Qt(.16),new ct({color:"#c58cff",emissive:"#7c3aed",emissiveIntensity:1.5}));v.position.set(Math.cos(p)*1.8,2.6+Math.sin(p*1.7)*.7,Math.sin(p)*1.8),e.add(v),f.push(v)}e.scale.setScalar(s.scale/2.2*1.1),a=p=>{h.rotation.y=p*.5,f.forEach((v,g)=>{v.position.y=2.6+Math.sin(p+g)*.5,v.rotation.y=p+g}),r.position.y=2.3+Math.sin(p*1.4)*.03}}return e.userData.phase=Math.random()*10,e.userData.animate=a,e.userData.def=s,e.userData.labelY=s.boss?4.8:2.4,e}function gl(s,e={}){const t=new lt,n=rr(e.seed||1),i={tavern:"#6a3a32",smithy:"#463a3a",house:"#5a4a3a",tower:"#3a4450",temple:"#3f5a6a",shop:"#5a4a5a",tent:"#3a4a5a"},a=["#cdbb9a","#c0b18f","#b8a888","#d0c2a0"],o=a[Math.floor(n()*a.length)],r="#5a4230",l=i[s]||"#5a4030";let c=9,h=8,d=5;s==="tavern"&&(c=13,h=10,d=5.5),s==="smithy"&&(c=10,h=9,d=4.6),s==="tower"&&(c=7,h=7,d=11),s==="temple"&&(c=11,h=11,d=6),s==="tent"&&(c=7,h=6,d=3.2),s==="shop"&&(c=11,h=8,d=4.8),e.scale&&(c*=e.scale,h*=e.scale,d*=e.scale),t.add(K(c+1.2,1,h+1.2,"#857a68",{y:.5})),t.add(K(c,d,h,o,{y:.9+d/2}));for(const g of[-1,1]){for(const m of[-1,1])t.add(K(.3,d,.3,r,{x:g*(c/2-.15),y:.9+d/2,z:m*(h/2-.15)}));t.add(K(.26,.26,h,r,{x:g*(c/2-.15),y:1,z:0})),t.add(K(.26,.26,h,r,{x:g*(c/2-.15),y:.9+d-.2,z:0}));for(const m of[-1,1])t.add(K(c,.24,.24,r,{y:.9+d-.2,z:m*(h/2-.15)}))}if(s==="tower"){const g=ot(c*.82,5.5,l,{y:.9+d+2.75,seg:8});t.add(g),t.add(At(.04,.04,1.4,"#3a3a3a",{y:.9+d+6})),t.add(K(1.3,.7,.04,"#8a4a3a",{y:.9+d+6.4,x:.55}))}else if(s==="tent")t.add(ot(c*.95,5,l,{y:1+d,seg:4})),t.add(K(c*.4,d*.8,.15,"#2a2a30",{y:1+d*.4,z:h/2*.8}));else{const g=ot(Math.max(c,h)*.82,4.4,l,{y:.9+d+2.2,seg:4});if(g.rotation.y=Math.PI/4,t.add(g),t.add(K(.18,.18,h*1.15,r,{y:.9+d+4.3})),s==="temple"&&t.add(ot(.3,1.6,"#d8c890",{y:.9+d+5})),s==="smithy"||s==="tavern"){t.add(K(1,2.4,1,"#7a6a5a",{x:c*.3,y:.9+d+1.6,z:-h*.2}));for(let m=0;m<3;m++){const u=xt(.4+m*.2,"#c8c0b8",{x:c*.3,y:.9+d+3.2+m*.9,z:-h*.2,opacity:.16-m*.04,transparent:!0,shadow:!1});t.add(u)}}}const f=K(1.7,3,.2,"#3a2a20",{y:1.5+.9,z:h/2+.06});t.add(f),t.add(K(2.2,.2,.3,"#8a6a4a",{y:.9+3.05,z:h/2+.1})),t.add(xt(.07,"#e8c46a",{x:.55,y:.9+1.6,z:h/2+.18,metalness:.9}));const p=new ct({color:"#ffcf6a",emissive:"#ffb04a",emissiveIntensity:1.1,roughness:.4}),v=(g,m,u,S=0,w=1)=>{const M=new ge(new yi(1.1*w,1.2*w,.12),p);M.position.set(g,m,u),M.rotation.y=S,t.add(M),S===0&&(t.add(K(1.4*w,.16,.2,r,{x:g,y:m+.72*w,z:u})),t.add(K(1.4*w,.16,.2,r,{x:g,y:m-.72*w,z:u})))};if(v(-c*.28,.9+d*.62,h/2+.07,0,.9),v(c*.28,.9+d*.62,h/2+.07,0,.9),d>5&&v(0,.9+d*.35,h/2+.07,0,.7),v(-c/2-.07,.9+d*.6,0,Math.PI/2,.8),v(c/2+.07,.9+d*.6,0,Math.PI/2,.8),s!=="tower"){const g=K(2.2,1.1,.12,"#5a4230",{x:-c*.38,y:.9+d*.5,z:h/2+.6});t.add(g),t.add(K(.12,1.4,.12,r,{x:-c*.38,y:.9+d*.85,z:h/2+.55}));const m=xt(.22,"#ffe0a0",{x:c*.4,y:.9+2.6,z:h/2+.45,emissive:"#ffcf6a",emissiveIntensity:2.2,shadow:!1});t.add(m),t.add(K(.3,.5,.3,"#2a2a2a",{x:c*.4,y:.9+2.95,z:h/2+.45}))}if(s==="tavern"||s==="shop"||s==="smithy"){const g=K(c*.9,.14,2.2,e.accent||"#8a3a3a",{y:3.8,z:h/2+1.2});g.rotation.x=-.18,t.add(g);for(const m of[-1,1])t.add(K(.12,2.9,.12,r,{x:m*c*.42,y:.9+1.45,z:h/2+2.1}))}if(s==="smithy"&&(t.add(K(2.2,1.4,1.6,"#3a2a2a",{x:-c*.55,y:1.6,z:h/2+1.6})),t.add(K(1.4,.5,1,"#ff7a2a",{x:-c*.55,y:2,z:h/2+1.5,emissive:"#ff5a1a",emissiveIntensity:2.4}))),s==="temple"||s==="tavern")for(const g of[-1,1]){const m=K(.7,2.2,.05,e.accent||"#7a4a8a",{x:g*(c/2+.1),y:4.1000000000000005,z:h/2-.4});t.add(m)}return t.position.y=e.y||0,t.rotation.y=e.rot||0,t.userData.collider={x:e.x||0,z:e.z||0,r:Math.max(c,h)*.58},t.userData.type=s,t}function xm(s="#a8e8ff",e=1){const t=new lt,n="#8a8a80",i="#6a6a62";t.add(At(5,5.6,.7,i,{y:.35,seg:8})),t.add(At(3.8,4.2,.5,n,{y:.9,seg:8}));for(const r of[-1,1])t.add(K(.8,5.2,.8,n,{x:r*2.2,y:3.4,z:0})),t.add(K(1.1,.5,1.1,i,{x:r*2.2,y:6.2,z:0}));t.add(K(5.4,.7,1,n,{y:6.2})),t.add(ot(.5,1.2,i,{y:7.1}));const a=new ge(new Qt(.75,0),new ct({color:s,emissive:s,emissiveIntensity:1.6,roughness:.2,metalness:.3,transparent:!0,opacity:.9,flatShading:!0}));a.position.y=4.2,t.add(a);const o=new ge(new Ht(1.3,.03,4,24),new yt({color:s,transparent:!0,opacity:.5,blending:$t}));o.position.y=4.2,o.rotation.x=Math.PI/2,t.add(o);for(let r=0;r<4;r++){const l=ot(.5,1.8,i,{x:Math.cos(r/4*Math.PI*2)*5.6,y:1,z:Math.sin(r/4*Math.PI*2)*5.6});t.add(l)}return t.userData.animate=r=>{a.rotation.y=r*.6,a.position.y=4.2+Math.sin(r*1.5)*.2,o.rotation.z=r*.3},t.userData.collider={x:0,z:0,r:5},t}function ym(s="#74e7f7"){const e=new lt;e.add(At(1.7,2,.6,"#5a5a56",{y:.3,seg:6})),e.add(At(1.1,1.3,.5,"#7a7a72",{y:.8,seg:6}));const t=new ge(new Qt(.55,0),new ct({color:s,emissive:s,emissiveIntensity:1.8,flatShading:!0}));t.position.y=2.2,e.add(t);const n=new ge(new Ht(1.1,.04,4,20),new yt({color:s,transparent:!0,opacity:.5,blending:$t}));return n.position.y=2.2,n.rotation.x=Math.PI/2,e.add(n),e.userData.animate=i=>{t.rotation.y=i,t.position.y=2.2+Math.sin(i*2)*.12,n.rotation.z=i*.5},e.userData.collider={x:0,z:0,r:1.8},e}function vl(){const s=new lt;for(const t of[-1,1])s.add(K(.25,3.4,.25,"#5a4230",{x:t*1.6,y:1.7}));const e=K(3.6,2,.22,"#6a4e36",{y:2.5});s.add(e),s.add(K(3.9,.2,.3,"#4a3428",{y:3.5})),s.add(K(3,1.5,.05,"#c8b88a",{y:2.5,z:.15}));for(let t=0;t<4;t++)s.add(K(.55,.7,.03,"#f0e6c8",{x:-1.1+t*.7,y:2.55+t%2*.18,z:.19,rotationZ:(t-1.5)*.04}));return s.add(xt(.16,"#ffcf6a",{x:1.9,y:3.2,emissive:"#ffcf6a",emissiveIntensity:1.6,shadow:!1})),s.userData.collider={x:0,z:0,r:1.8},s}function Mm(){const s=new lt;s.add(At(7.2,7.8,1,"#9a9488",{y:.5,seg:10}));const e=new ge(new Mn(6.4,6.4,.2,18),new ct({color:"#5aa8c8",emissive:"#3a8aaa",emissiveIntensity:.35,transparent:!0,opacity:.85,roughness:.15,metalness:.3}));e.position.y=.95,s.add(e),s.add(At(1.4,1.9,1.2,"#8a8478",{y:1.6,seg:8})),s.add(At(.55,.8,3.2,"#8a8478",{y:3.4,seg:8}));const t=xt(1.2,"#b0aa9c",{y:5.2,seg:10,seg2:8});t.scale.set(1.2,.7,1.2),s.add(t);const n=new ge(new zn(.45,1),new ct({color:"#c8f0ff",emissive:"#74e7f7",emissiveIntensity:1.8}));n.position.y=6.3,s.add(n);for(let i=0;i<6;i++){const a=new ge(new Mn(.06,.12,1.8,4),new yt({color:"#9fd8e8",transparent:!0,opacity:.45}));a.position.set(Math.cos(i/6*Math.PI*2)*2.2,4.4,Math.sin(i/6*Math.PI*2)*2.2),a.rotation.z=Math.cos(i/6*Math.PI*2)*.4,a.rotation.x=Math.sin(i/6*Math.PI*2)*.4,s.add(a)}for(let i=0;i<4;i++){const a=i/4*Math.PI*2+.4,o=K(1,1.8,1,"#8a8478",{x:Math.cos(a)*8.6,y:.9,z:Math.sin(a)*8.6}),r=K(.6,1.6,.5,"#a8a094",{x:Math.cos(a)*8.6,y:2.6,z:Math.sin(a)*8.6});s.add(o,r)}return s.userData.collider={x:0,z:0,r:7.6},s.userData.animate=i=>{n.rotation.y=i*.7,n.position.y=6.3+Math.sin(i*1.7)*.15},s}function bm(s=1){const e=new lt,t=rr(s),n="#6a6a60";for(let a=0;a<6;a++){const o=t()*Math.PI*2,r=3+t()*8,l=2+t()*7,c=At(.7,.85,l,n,{x:Math.cos(o)*r,y:l/2,z:Math.sin(o)*r,seg:6});c.rotation.z=(t()-.5)*.4,c.rotation.x=(t()-.5)*.3,e.add(c)}e.add(K(7,.8,3,n,{y:.4,rotationY:t()*3}));const i=new ge(new Qt(.5,0),new ct({color:"#c58cff",emissive:"#9b7fc0",emissiveIntensity:1.5}));return i.position.y=2.2,e.add(i),e.userData.animate=a=>{i.rotation.y=a,i.position.y=2.2+Math.sin(a*2)*.15},e}function _l(){const s=new lt;for(let n=0;n<5;n++){const i=At(.12,.16,1.6,"#4a3626",{y:.25,seg:5});i.rotation.z=Math.PI/2,i.rotation.y=n/5*Math.PI,s.add(i)}const e=ot(.45,1.2,"#ff8a3a",{y:1,emissive:"#ff6a2a",emissiveIntensity:2.2,shadow:!1,seg:5});s.add(e);const t=ot(.25,.8,"#ffd479",{y:.9,emissive:"#ffcf6a",emissiveIntensity:2.4,shadow:!1,seg:4});return s.add(t),s.userData.animate=n=>{e.scale.y=1+Math.sin(n*8)*.15,t.scale.y=1+Math.sin(n*11)*.2},s}function rr(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Zs(s,e){const t=Math.sin(s*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)}function Sm(s,e){const t=Math.floor(s),n=Math.floor(e),i=s-t,a=e-n,o=i*i*(3-2*i),r=a*a*(3-2*a),l=Zs(t,n),c=Zs(t+1,n),h=Zs(t,n+1),d=Zs(t+1,n+1);return l*(1-o)*(1-r)+c*o*(1-r)+h*(1-o)*r+d*o*r}function oi(s,e,t=4){let n=.5,i=1,a=0,o=0;for(let r=0;r<t;r++)a+=Sm(s*i,e*i)*n,o+=n,n*=.5,i*=2.03;return a/o}const ki=(s,e,t)=>{const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},Js=(s,e,t)=>s+(e-s)*t;function wm(s){const e=[],t=[],n=[],i=[],a=[],o=[],r=[],l=rr(20261120),c={x:0,z:0,r:260},h={x:1920,z:1880},d=[{zone:"verdant",x:-1250,z:-1150,accent:"#8fe08a"},{zone:"ember",x:1400,z:-1150,accent:"#ff9a5a"},{zone:"frost",x:-1400,z:1200,accent:"#a8e8ff"},{zone:"umbra",x:1400,z:1200,accent:"#c58cff"}];function f(P,Y){const Q=ki(-420,420,P),J=ki(-420,420,Y);return{verdant:(1-Q)*(1-J),ember:Q*(1-J),frost:(1-Q)*J,umbra:Q*J}}function p(P,Y){const Q=oi(P*.0013+11.3,Y*.0013-4.7,4),J=oi(P*.0043-3.1,Y*.0043+8.2,3),re=1-Math.abs(oi(P*.0028+3,Y*.0028+9,3)*2-1),_e=f(P,Y);let Ge=_e.verdant*(3+Q*15+J*2.6)+_e.ember*(2+Q*20+re*16+J*3.2)+_e.frost*(8+Q*13+J*2.2)+_e.umbra*(-2+Q*7.5+J*1.6);const Me=Math.hypot(P,Y);return Ge=Js(2.1,Ge,ki(155,390,Me)),Ge}const v=[{x:0,z:0,r0:165,r1:330,y:2.1}];for(const P of d)v.push({x:P.x,z:P.z,r0:95,r1:210,y:p(P.x,P.z)});v.push({x:h.x,z:h.z,r0:78,r1:180,y:p(h.x,h.z)});const g=[];["verdant","verdant","ember","frost","umbra","ember","frost","umbra"].forEach((P,Y)=>{const Q=St[P].center;let J,re,_e=0;do{const Ge=l()*Math.PI*2,Me=280+l()*620;J=Q[0]+Math.cos(Ge)*Me,re=Q[1]+Math.sin(Ge)*Me,_e++}while(_e<20&&(Math.hypot(J,re)<430||d.some(Ge=>Math.hypot(Ge.x-J,Ge.z-re)<240)||Math.hypot(J-h.x,re-h.z)<260));v.push({x:J,z:re,r0:18,r1:48,y:p(J,re)}),g.push({zone:P,x:J,z:re})});function u(P,Y){let Q=p(P,Y);for(const J of v){const re=Math.hypot(P-J.x,Y-J.z);if(re<J.r1){const _e=ki(J.r0,J.r1,re);Q=Js(J.y,Q,_e)}}return Q}const S={topColor:{value:new Pe("#2a3d68")},midColor:{value:new Pe("#8fa8c8")},horizonColor:{value:new Pe("#f0b888")},sunDir:{value:new L(-.55,.3,-.78).normalize()}},w=new ge(new dn(4200,32,20),new kn({uniforms:S,side:qt,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vWorld; void main(){ vWorld = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 topColor, midColor, horizonColor, sunDir;
        varying vec3 vWorld;
        void main(){
          vec3 d = normalize(vWorld);
          float h = clamp(d.y, -0.15, 1.0);
          vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
          col = mix(col, topColor, smoothstep(0.16, 0.85, h));
          float sun = pow(max(dot(d, sunDir), 0.0), 620.0);
          float glow = pow(max(dot(d, sunDir), 0.0), 9.0);
          col += vec3(1.0, 0.72, 0.42) * sun * 2.2;
          col += vec3(1.0, 0.52, 0.24) * glow * 0.24;
          float ground = smoothstep(0.0, -0.12, d.y);
          col = mix(col, vec3(0.18,0.20,0.24), ground);
          gl_FragColor = vec4(col, 1.0);
        }`}));w.renderOrder=-10,s.add(w);const M=new L(-.55,.3,-.78).normalize().multiplyScalar(3600),T=new ge(new fi(140,32),new yt({color:"#ffe0b0",transparent:!0,opacity:.55,blending:$t,depthWrite:!1,fog:!1}));T.position.copy(M),T.lookAt(0,0,0),w.add(T);const A=new Ut,C=[];for(let P=0;P<500;P++){const Y=l()*Math.PI*2,Q=.18+l()*1.3,J=3900;C.push(Math.cos(Y)*Math.cos(Q)*J,Math.sin(Q)*J,Math.sin(Y)*Math.cos(Q)*J)}A.setAttribute("position",new gt(C,3));const D=new kr(A,new Oo({color:"#dfe8ff",size:5,sizeAttenuation:!1,transparent:!0,opacity:.55,depthWrite:!1,fog:!1}));w.add(D);const b=new Ah("#c8dcf0","#3a3228",1.05);s.add(b);const y=new Hr("#ffd9ac",2.5);y.position.set(-220,300,-320),y.castShadow=!0,y.shadow.mapSize.set(2048,2048),y.shadow.camera.left=-90,y.shadow.camera.right=90,y.shadow.camera.top=90,y.shadow.camera.bottom=-90,y.shadow.camera.near=1,y.shadow.camera.far=900,y.shadow.bias=-8e-4,y.shadow.normalBias=.04,s.add(y),s.add(y.target);const I=new Hr("#6f8fc8",.55);I.position.set(200,140,260),s.add(I);const k=new Ph("#4a5a72",.35);s.add(k),s.fog=new er("#9aa9bc",52e-5);const X=210,G=new Ms(ln,ln,X,X);G.rotateX(-Math.PI/2);const O=G.attributes.position,W=new Float32Array(O.count*3),Z={};for(const[P,Y]of Object.entries(St))Z[P]={soil:new Pe(Y.soil),accent:new Pe(Y.accent),color:new Pe(Y.color)};const H=new Pe;for(let P=0;P<O.count;P++){const Y=O.getX(P),Q=O.getZ(P),J=u(Y,Q);O.setY(P,J);const re=f(Y,Q),_e=oi(Y*.01,Q*.01,2),Ge=oi(Y*.035+41,Q*.035-9,2);H.setRGB(0,0,0);for(const Me of["verdant","ember","frost","umbra"]){const Xe=re[Me];if(Xe<=.001)continue;const _t=Z[Me].soil.clone(),nn=Z[Me].accent.clone();_t.lerp(nn,_e*.55+Ge*.16),_t.multiplyScalar(.82+Ge*.3),H.r+=_t.r*Xe,H.g+=_t.g*Xe,H.b+=_t.b*Xe}if(re.umbra>.3&&J<2&&H.multiplyScalar(.72),re.frost>.4&&H.lerp(new Pe("#eef6fa"),.25+Ge*.2),re.ember>.4){const Me=ki(.55,.78,oi(Y*.006+8,Q*.006-2,3));H.lerp(new Pe("#ff6a2a"),Me*.22)}J>22&&H.lerp(new Pe("#7f8a90"),ki(22,38,J)*.4),W[P*3]=H.r,W[P*3+1]=H.g,W[P*3+2]=H.b}G.setAttribute("color",new Jt(W,3)),G.computeVertexNormals();const de=new ge(G,new ct({vertexColors:!0,roughness:.96,metalness:.02,flatShading:!0}));de.receiveShadow=!0,s.add(de);const pe=new lt;s.add(pe);const we={umbra:new ct({color:"#2e4a44",emissive:"#1e3a34",emissiveIntensity:.3,transparent:!0,opacity:.88,roughness:.16,metalness:.35}),frost:new ct({color:"#9fd0e0",emissive:"#6aa8c0",emissiveIntensity:.22,transparent:!0,opacity:.8,roughness:.1,metalness:.4}),ember:new ct({color:"#ff6a2a",emissive:"#ff5a1a",emissiveIntensity:1.4,transparent:!0,opacity:.92,roughness:.3})};for(let P=0;P<26;P++){const Y=P%3===0?"umbra":P%3===1?"frost":"ember",Q=St[Y].center,J=Q[0]+(l()-.5)*1200,re=Q[1]+(l()-.5)*1200;if(Math.hypot(J,re)<500||d.some(Xe=>Math.hypot(Xe.x-J,Xe.z-re)<190)||Math.hypot(J-h.x,re-h.z)<260)continue;const _e=9+l()*20,Ge=u(J,re)+.28,Me=new ge(new fi(_e,18),we[Y]);if(Me.rotation.x=-Math.PI/2,Me.position.set(J,Ge,re),Me.renderOrder=1,pe.add(Me),Y==="umbra"||Y==="frost")for(let Xe=0;Xe<5;Xe++){const _t=l()*Math.PI*2,nn=_e*(.5+l()*.6),Ct=At(.05,.07,1.2+l()*.8,"#4a5a3a",{x:J+Math.cos(_t)*nn,y:Ge+.6,z:re+Math.sin(_t)*nn,seg:4});Ct.rotation.z=(l()-.5)*.3,pe.add(Ct)}}const qe=new ct({color:"#93815f",roughness:1,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});function dt(P,Y=7){const Q=[];for(let Me=0;Me<P.length-1;Me++){const Xe=P[Me],_t=P[Me+1],nn=Math.max(8,Math.floor(Math.hypot(_t[0]-Xe[0],_t[1]-Xe[1])/24));for(let Ct=0;Ct<nn;Ct++){const x=Ct/nn,N=Js(Xe[0],_t[0],x),B=Js(Xe[1],_t[1],x);Q.push(new L(N,u(N,B)+.12,B))}}Q.push(new L(P.at(-1)[0],u(P.at(-1)[0],P.at(-1)[1])+.12,P.at(-1)[1]));const J=[],re=[];for(let Me=0;Me<Q.length;Me++){const Xe=Q[Me],_t=Q[Math.min(Q.length-1,Me+1)],nn=Q[Math.max(0,Me-1)],Ct=new L().subVectors(_t,nn).setY(0).normalize(),x=new L(-Ct.z,0,Ct.x).multiplyScalar(Y/2);if(J.push(Xe.x+x.x,Xe.y,Xe.z+x.z,Xe.x-x.x,Xe.y,Xe.z-x.z),Me<Q.length-1){const N=Me*2;re.push(N,N+2,N+1,N+1,N+2,N+3)}}const _e=new Ut;_e.setAttribute("position",new gt(J,3)),_e.setIndex(re),_e.computeVertexNormals();const Ge=new ge(_e,qe);Ge.receiveShadow=!0,s.add(Ge)}for(const P of d){const Y=P.x*.52,Q=P.z*.5;dt([[P.x*.09,P.z*.09],[Y+P.z*.05,Q-P.x*.05],[P.x*.86,P.z*.86],[P.x,P.z]],8)}dt([[-1800,300],[-900,260],[-260,60]],5.5),dt([[700,-700],[1200,-260],[1200,60]],5.5),dt([[h.x-170,h.z-40],[h.x-380,h.z-120],[h.x-640,h.z-240]],6);const ut=new Dt;function Ke(P,Y,Q,J){if(!Q.length)return null;const re=new yh(P,Y,Q.length);return re.castShadow=!0,re.receiveShadow=!0,Q.forEach((_e,Ge)=>{ut.position.set(_e.x,_e.y,_e.z),ut.rotation.set(_e.rx||0,_e.ry||0,_e.rz||0),ut.scale.setScalar(_e.s||1),ut.updateMatrix(),re.setMatrixAt(Ge,ut.matrix),_e.color&&re.setColorAt(Ge,_e.color)}),re.instanceMatrix.needsUpdate=!0,re.instanceColor&&(re.instanceColor.needsUpdate=!0),re.frustumCulled=!1,re.name=J,s.add(re),re}function j(P,Y,Q=0){if(Math.hypot(P,Y)<180+Q)return!1;for(const J of d)if(Math.hypot(P-J.x,Y-J.z)<155+Q)return!1;if(Math.hypot(P-h.x,Y-h.z)<160+Q)return!1;for(const J of g)if(Math.hypot(P-J.x,Y-J.z)<52+Q)return!1;return!0}function te(P,Y){const Q=f(P,Y);return Object.entries(Q).sort((J,re)=>re[1]-J[1])[0][0]}const ye=[],Be=[],De=[],et=[],It=[],R=[],ft=[],We=[],He=[],Ee={verdant:{leaf:["#4f8a3c","#66a34a","#7cb858","#3f7634"],trunk:"#5a4430",ground:"#79a858"},ember:{leaf:["#6a3a2e","#8a4534","#5a2e26"],trunk:"#4a3428",ground:"#8a5a42"},frost:{leaf:["#b8d8e0","#cfe6ee","#a0c4d0"],trunk:"#5a5048",ground:"#a8c0c8"},umbra:{leaf:["#4a5a48","#5f6a4f","#3a4538"],trunk:"#3a3230",ground:"#5a6a4a"}};for(let P=0;P<26e3&&ye.length+Be.length+De.length+et.length<2600;P++){const Y=(l()-.5)*(ln-120),Q=(l()-.5)*(ln-120);if(!j(Y,Q))continue;const J=te(Y,Q),re=u(Y,Q);if(oi(Y*.008+70,Q*.008-30,2)<.32)continue;const Ge=Ee[J],Me=new Pe(Ge.leaf[Math.floor(l()*Ge.leaf.length)]),Xe=.75+l()*.7;J==="verdant"?l()<.62?ye.push({x:Y,y:re,z:Q,s:Xe,ry:l()*6.28,color:Me}):Be.push({x:Y,y:re,z:Q,s:Xe*.9,ry:l()*6.28,color:Me}):J==="ember"?l()<.55?De.push({x:Y,y:re,z:Q,s:Xe,ry:l()*6.28,rx:(l()-.5)*.15,color:new Pe("#4a3428")}):ye.push({x:Y,y:re,z:Q,s:Xe*.8,ry:l()*6.28,color:new Pe("#5a3a2a")}):J==="frost"?Be.push({x:Y,y:re,z:Q,s:Xe*(.85+l()*.4),ry:l()*6.28,color:Me}):l()<.5?et.push({x:Y,y:re,z:Q,s:.8+l()*1.3,ry:l()*6.28,color:new Pe(l()<.5?"#7a5a8a":"#4a6a5a")}):De.push({x:Y,y:re,z:Q,s:Xe,ry:l()*6.28,rx:(l()-.5)*.25,color:new Pe("#3a3438")})}for(let P=0;P<11e3&&It.length<1100;P++){const Y=(l()-.5)*(ln-80),Q=(l()-.5)*(ln-80);if(!j(Y,Q,-10))continue;const J=te(Y,Q),re=u(Y,Q),_e=J==="ember"?"#5a4038":J==="frost"?"#8a9aa2":J==="umbra"?"#4a4a44":"#7a7a6a";It.push({x:Y,y:re-.2,z:Q,s:.5+l()*1.8,ry:l()*6.28,rx:l()*.3,color:new Pe(_e)})}for(let P=0;P<9e3&&R.length+We.length+He.length<620;P++){const Y=(l()-.5)*(ln-200),Q=(l()-.5)*(ln-200);if(!j(Y,Q))continue;const J=te(Y,Q);if(J==="verdant")continue;const re=u(Y,Q);J==="ember"?We.push({x:Y,y:re,z:Q,s:.4+l()*1.1,ry:l()*6.28,color:new Pe("#ff7a3a")}):J==="frost"?He.push({x:Y,y:re,z:Q,s:.35+l()*.9,ry:l()*6.28,rz:(l()-.5)*.3,color:new Pe("#b8ecff")}):R.push({x:Y,y:re,z:Q,s:.5+l()*1.2,ry:l()*6.28,color:new Pe("#c58cff")})}for(let P=0;P<22e3&&ft.length<5200;P++){const Y=(l()-.5)*(ln-100),Q=(l()-.5)*(ln-100);if(!j(Y,Q,-30))continue;const J=te(Y,Q);J!=="ember"&&ft.push({x:Y,y:u(Y,Q),z:Q,s:.5+l()*1.2,ry:l()*6.28,color:new Pe(Ee[J].ground)})}const vt=new Mn(.32,.55,4.2,5);vt.translate(0,2.1,0);const Te=new zn(2.5,1);Te.translate(0,5.4,0);const Ye=new Jn(2.4,7.2,6);Ye.translate(0,5,0);const Rt=new Mn(.22,.55,5.4,5);Rt.translate(0,2.7,0);const wt=new Mn(.22,.3,1.6,5);wt.translate(0,.8,0);const E=(P="#ffffff")=>new ct({color:P,roughness:.9,flatShading:!0});Ke(vt,E(),[...ye.map(P=>({...P,color:new Pe("#5a4430")})),...Be.map(P=>({...P,color:new Pe(te(P.x,P.z)==="frost"?"#4a4238":"#4a3828")}))],"trunks"),Ke(Te,E(),ye,"broadleaf"),Ke(Ye,E("#ffffff"),Be.map(P=>({...P,color:new Pe(te(P.x,P.z)==="frost"?"#cfdfe6":P.color)})),"pines"),Ke(Rt,E("#ffffff"),De,"deadwood");const _=new dn(.85,7,4,0,Math.PI*2,0,Math.PI/2);_.translate(0,1.6,0),Ke(wt,E("#d8d0b8"),et.map(P=>({...P,color:new Pe("#c8c0a8")})),"mushstem"),Ke(_,new ct({color:"#ffffff",roughness:.7,emissive:"#3a2a4a",emissiveIntensity:.35,flatShading:!0,side:Bt}),et,"mushrooms"),Ke(new zn(1.1,0),E("#ffffff"),It,"rocks"),Ke(new Qt(.75,0),new ct({color:"#ffffff",emissive:"#b48bd8",emissiveIntensity:1.2,roughness:.2,flatShading:!0}),R,"crystals"),Ke(new Qt(.8,0),new ct({color:"#ffffff",emissive:"#9fe8ff",emissiveIntensity:.9,roughness:.1,transparent:!0,opacity:.85,flatShading:!0}),He,"ice"),Ke(new nr(.7,0),new ct({color:"#ffffff",emissive:"#ff5a1a",emissiveIntensity:1.5,roughness:.6,flatShading:!0}),We,"lavarock");const z=new Jn(.18,.9,3);z.translate(0,.45,0);const q=Ke(z,new ct({color:"#ffffff",roughness:1,flatShading:!0}),ft,"grass");q&&(q.castShadow=!1);const ne=new Ut,$=900,Ie=new Float32Array($*3),le=new Float32Array($);for(let P=0;P<$;P++)Ie[P*3]=(l()-.5)*320,Ie[P*3+1]=l()*26+2,Ie[P*3+2]=(l()-.5)*320,le[P]=l();ne.setAttribute("position",new Jt(Ie,3)),ne.setAttribute("aSeed",new Jt(le,1));const Le=new Oo({color:"#ffe0a8",size:.5,transparent:!0,opacity:.65,blending:$t,depthWrite:!1,sizeAttenuation:!0}),Ae=new kr(ne,Le);Ae.frustumCulled=!1,s.add(Ae);const ae=new lt,ve=new yt({color:"#dfe4ee",transparent:!0,opacity:.19,depthWrite:!1,fog:!1});for(let P=0;P<26;P++){const Y=new lt,Q=3+Math.floor(l()*4);for(let J=0;J<Q;J++){const re=new ge(new dn(12+l()*22,7,5),ve);re.position.set((l()-.5)*60,(l()-.5)*10,(l()-.5)*40),re.scale.y=.35,Y.add(re)}Y.position.set((l()-.5)*3600,190+l()*90,(l()-.5)*3600),Y.userData.speed=1.5+l()*3,ae.add(Y)}s.add(ae);const Ue=new lt;s.add(Ue);const Re=u(0,0),ue=new ge(new fi(54,48),new ct({color:"#a39a86",roughness:.9,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));ue.rotation.x=-Math.PI/2,ue.position.set(0,Re+.18,0),ue.receiveShadow=!0,Ue.add(ue);for(let P=1;P<=3;P++){const Y=new ge(new Ht(14*P,.22,4,64),new ct({color:P===2?"#b8a888":"#8a8474",roughness:.9}));Y.rotation.x=-Math.PI/2,Y.position.set(0,Re+.25,0),Ue.add(Y)}const $e=Mm();$e.position.set(0,Re,0),Ue.add($e),e.push({x:0,z:0,r:8.2,y:Re+6}),r.push($e);function U(P,Y,Q,J=!0,re=1,_e=1,Ge){const Me=u(Y,Q),Xe=gl(P,{x:Y,z:Q,y:Me-.25,rot:J?Math.atan2(-Y,-Q):0,scale:re,seed:_e,accent:Ge});s.add(Xe);const _t=Xe.userData.collider;return e.push(_t),Xe}[["tavern",-56,-34,1.05,"#8a3a3a"],["smithy",58,-30,.95,"#c25a35"],["shop",58,40,.9,"#3f7a6a"],["temple",-58,42,1,"#4a6a8a"],["house",-24,-74,.85,"#7a5a3a"],["house",20,76,.9,"#6a5a4a"],["tower",96,6,1,"#8a6a4a"],["tent",-12,64,1.15,"#5a3a6a"]].forEach(([P,Y,Q,J,re],_e)=>U(P,Y,Q,!0,J,11+_e,re));const ce={x:-12,z:64};for(let P=0;P<4;P++){const Y=P/4*Math.PI*2,Q=xt(.32,"#ffcf6a",{x:ce.x+Math.cos(Y)*7,y:u(ce.x,ce.z)+3.2,z:ce.z+Math.sin(Y)*7,emissive:"#ffcf6a",emissiveIntensity:2.4,shadow:!1});Ue.add(Q)}function be(P,Y,Q,J){const re=u(P,Y),_e=new lt;_e.position.set(P,re,Y),_e.rotation.y=Q;for(const Me of[-1,1])for(const Xe of[-1,1])_e.add(K(.15,2.4,.15,"#5a4230",{x:Me*1.8,y:1.2,z:Xe*1.2}));const Ge=K(4.4,.16,3.2,J,{y:2.6});Ge.rotation.z=.06,_e.add(Ge),_e.add(K(3.4,.7,1.6,"#6a5030",{y:.9,z:.5})),_e.add(K(.9,.45,.8,"#8a6a3a",{x:-1.1,y:1.5,z:.4})),_e.add(xt(.18,"#ffcf6a",{x:1.8,y:2.15,z:1.3,emissive:"#ffcf6a",emissiveIntensity:1.8,shadow:!1})),_e.traverse(Me=>{Me.isMesh&&(Me.castShadow=!0,Me.receiveShadow=!0)}),s.add(_e),e.push({x:P,z:Y,r:2.4})}be(-30,22,.4,"#8a3a3a"),be(26,25,-.4,"#3a6a6a");for(let P=0;P<8;P++){const Y=P/8*Math.PI*2+.2,Q=Math.cos(Y)*33,J=Math.sin(Y)*33,re=u(Q,J),_e=At(.09,.13,4.2,"#3a3430",{x:Q,y:re+2.1,z:J,seg:5});_e.castShadow=!0;const Ge=xt(.34,"#ffe0a0",{x:Q,y:re+4.3,z:J,emissive:"#ffcf6a",emissiveIntensity:2.2,shadow:!1});Ue.add(_e,Ge)}function ie(P,Y,Q,J,re,_e){const Ge=u(J,re),Me=ym(_e);Me.position.set(J,Ge,re),s.add(Me),r.push(Me),e.push({x:J,z:re,r:2.2}),n.push({id:P,name:Y,zone:Q,x:J,z:re,y:Ge,accent:_e,unlocked:!1})}ie("hub","Wayfarer's Rest","hub",0,-30,"#74e7f7"),ie("verdant","Verdant Watch","verdant",-1250,-1055,"#8fe08a"),ie("ember","Emberwatch","ember",1400,-1055,"#ff9a5a"),ie("frost","Frosthearth","frost",-1400,1105,"#a8e8ff"),ie("umbra","Mirefall","umbra",1400,1105,"#c58cff"),t.push({id:"hub",name:"Wayfarer's Rest",type:"town",zone:"hub",x:0,z:0});for(const P of d)t.push({id:P.zone,name:St[P.zone].settlement,type:"town",zone:P.zone,x:P.x,z:P.z});const ee={verdant:{warden:"saelis",vendor:"fen",storyteller:"orla"},ember:{warden:"ignis",vendor:"kael",storyteller:"ash"},frost:{warden:"yrsa",vendor:"niva",storyteller:"maiden"},umbra:{warden:"morthos",vendor:"sable",storyteller:"oracle"}};for(const P of d){const Y=St[P.zone],Q=u(P.x,P.z),J=new lt;J.position.set(P.x,0,P.z),s.add(J);const re=new ge(new fi(30,32),new ct({color:P.zone==="frost"?"#b8c8d0":P.zone==="ember"?"#6a4a3a":P.zone==="umbra"?"#5a5a50":"#8a8a6a",roughness:.95,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));re.rotation.x=-Math.PI/2,re.position.set(P.x,Q+.16,P.z),re.receiveShadow=!0,s.add(re);const _e=xm(P.accent,1);_e.position.set(P.x,Q,P.z),s.add(_e),r.push(_e),e.push({x:P.x,z:P.z,r:5.4}),t.push({id:`shrine_${P.zone}`,name:`${Y.name} Shrine`,type:"shrine",zone:P.zone,x:P.x,z:P.z});const Ge=P.zone==="ember"?["smithy","house","shop"]:P.zone==="frost"?["temple","house","shop"]:P.zone==="umbra"?["tavern","house","tower"]:["tavern","house","shop"],Me=[[-58,-40],[62,-30],[-30,64]];Ge.forEach((ke,Ze)=>{const rt=P.x+Me[Ze][0],tt=P.z+Me[Ze][1],nt=gl(ke,{x:rt,z:tt,y:u(rt,tt)-.2,rot:Math.atan2(P.x-rt,P.z-tt),seed:40+Ze+P.x,accent:P.accent});s.add(nt),e.push(nt.userData.collider)});const Xe=P.x+46,_t=P.z+20,nn=u(Xe,_t),Ct=new lt;Ct.position.set(Xe,nn,_t),Ct.rotation.y=-.8;for(const ke of[-1,1])for(const Ze of[-1,1])Ct.add(K(.15,2.5,.15,"#5a4230",{x:ke*1.9,y:1.25,z:Ze*1.25}));const x=K(4.6,.16,3.4,P.accent,{y:2.7});x.rotation.z=.05,Ct.add(x),Ct.add(K(3.6,.75,1.7,"#6a5030",{y:.9,z:.55})),Ct.add(K(1,.5,.9,"#8a6a3a",{x:-1.2,y:1.5,z:.5})),Ct.add(xt(.18,"#ffcf6a",{x:1.9,y:2.2,z:1.4,emissive:"#ffcf6a",emissiveIntensity:1.8,shadow:!1})),Ct.traverse(ke=>{ke.isMesh&&(ke.castShadow=!0,ke.receiveShadow=!0)}),s.add(Ct),e.push({x:Xe,z:_t,r:2.7});const N=P.x-34,B=P.z+24,V=vl();V.position.set(N,u(N,B),B),V.rotation.y=Math.atan2(P.x-N,P.z-B),s.add(V),e.push({x:N,z:B,r:2.2}),o.push({x:N,z:B,zone:P.zone,name:`${Y.settlement} Quest Board`});const F=P.x+18,se=P.z+44,fe=_l();fe.position.set(F,u(F,se),se),s.add(fe),r.push(fe),e.push({x:F,z:se,r:1.6});const Se=ee[P.zone],xe={x:P.x+10,z:P.z+12},ze={x:P.x+48,z:P.z+26},Oe={x:P.x+16,z:P.z+47};i.push({npc:Se.warden,x:xe.x,z:xe.z,rot:Math.atan2(P.x-xe.x,P.z-xe.z)}),i.push({npc:Se.vendor,x:ze.x,z:ze.z,rot:-.8+Math.PI}),i.push({npc:Se.storyteller,x:Oe.x,z:Oe.z,rot:Math.atan2(F-Oe.x,se-Oe.z)});const Ne=St[P.zone].monsters;for(let ke=0;ke<26;ke++){const Ze=l()*Math.PI*2,rt=180+l()*700,tt=P.x+Math.cos(Ze)*rt,nt=P.z+Math.sin(Ze)*rt;if(Math.abs(tt)>jn-120||Math.abs(nt)>jn-120||Math.hypot(tt,nt)<380||d.some(st=>Math.hypot(st.x-tt,st.z-nt)<150))continue;const Fe=ke<10?Ne.slice(0,3):Ne,bt=Fe[Math.floor(l()*Fe.length)];a.push({type:bt,x:tt,z:nt})}for(let ke=0;ke<2;ke++){const Ze=P.x+(ke?34:-38),rt=P.z-54-ke*8,tt=u(Ze,rt);Ue.add(At(.08,.1,4.6,"#3a3430",{x:Ze,y:tt+2.3,z:rt,seg:5}));const nt=K(.08,1.8,.9,P.accent,{x:Ze+.1,y:tt+3.4,z:rt});Ue.add(nt)}}i.push({npc:"elder",x:0,z:17,rot:Math.PI}),i.push({npc:"orin",x:53,z:-14,rot:.6}),i.push({npc:"bram",x:52,z:51,rot:-.7}),i.push({npc:"lyra",x:-12,z:66,rot:Math.PI});const Ce=[[64,62],[-76,54],[70,-70],[-52,-78],[94,16],[-98,-12]];for(const[P,Y]of Ce)a.push({type:"moss_slime",x:P,z:Y,starter:!0});a.push({type:"grey_wolf",x:108,z:96}),a.push({type:"grey_wolf",x:-118,z:86});const Ve=vl();Ve.position.set(34,u(34,6),6),Ve.rotation.y=-.8,s.add(Ve),e.push({x:34,z:6,r:2.2}),t.push({id:"board_hub",name:"Wayfarer's Quest Board",type:"board",zone:"hub",x:34,z:6}),o.push({x:34,z:6,zone:"hub",name:"Wayfarer's Quest Board"}),g.forEach((P,Y)=>{const Q=u(P.x,P.z),J=bm(Y+3);J.position.set(P.x,Q,P.z),s.add(J),r.push(J);const re=["The Fallen Span","Hollow Chapel","Cinder Barracks","Weeping Stones","The Sunken Court","Ashen Observatory","The Glass Garden","Mouth of Names"],_e={id:`ruin_${Y}`,name:re[Y],type:"ruin",zone:P.zone,x:P.x,z:P.z};t.push(_e);const Ge=St[P.zone].monsters;for(let Me=0;Me<3;Me++){const Xe=l()*Math.PI*2,_t=14+l()*26;a.push({type:Ge[Math.min(Ge.length-1,1+Math.floor(l()*4))],x:P.x+Math.cos(Xe)*_t,z:P.z+Math.sin(Xe)*_t})}});const pt=u(h.x,h.z),je=new lt;je.position.set(h.x,pt,h.z),s.add(je);const en=new ge(new Mn(52,56,1.2,32),new ct({color:"#2a2430",roughness:.85,flatShading:!0}));en.position.y=.6,en.receiveShadow=!0,je.add(en);const jt=new ge(new Ht(48,.5,4,48),new ct({color:"#8a6aa0",emissive:"#6a3a8a",emissiveIntensity:.9}));jt.rotation.x=-Math.PI/2,jt.position.y=1.25,je.add(jt);for(let P=0;P<10;P++){const Y=P/10*Math.PI*2,Q=45,J=Math.cos(Y)*Q,re=Math.sin(Y)*Q,_e=5+P%3*4,Ge=K(2.2,_e,2.2,"#3a3040",{x:J,y:_e/2+1,z:re});if(Ge.rotation.y=Y,je.add(Ge),P%2===0){const Me=_l();Me.scale.setScalar(3),Me.position.set(J*.86,1.2,re*.86),je.add(Me),r.push(Me)}}const On=0,tn=-30;je.add(K(10,2,8,"#241e2a",{x:On,y:2,z:tn})),je.add(K(8,10,2,"#241e2a",{x:On,y:6,z:tn-3})),je.add(K(2,6,6,"#3a3040",{x:On-4,y:4,z:tn})),je.add(K(2,6,6,"#3a3040",{x:On+4,y:4,z:tn}));for(let P=0;P<3;P++){const Y=ot(.5,4,"#c58cff",{x:On+(P-1)*2.2,y:12,z:tn-3,emissive:"#7c3aed",emissiveIntensity:1.3});je.add(Y)}const Bn=new ge(new Qt(3,0),new ct({color:"#ffcf6a",emissive:"#ff9a3a",emissiveIntensity:2,transparent:!0,opacity:.9,flatShading:!0}));Bn.position.set(0,17,-30),je.add(Bn),r.push({userData:{animate:P=>{Bn.rotation.y=P*.4,Bn.position.y=17+Math.sin(P)*.5}}}),e.push({x:h.x,z:h.z-30,r:7}),t.push({id:"boss",name:"The Sundered Throne",type:"boss",zone:"umbra",x:h.x,z:h.z}),ie("throne","Sundered Threshold","umbra",h.x-70,h.z+20,"#ff9a5a"),t.push({id:"waypoint_throne",name:"Sundered Threshold",type:"waypoint",zone:"umbra",x:h.x-70,z:h.z+20}),a.push({type:"boss",x:h.x,z:h.z+8,boss:!0});function bs(P,Y,Q,J){w.position.copy(Q.position),D.material.opacity=.5;for(const Me of r)Me.userData.animate&&Me.userData.animate(Y);ae.children.forEach(Me=>{Me.position.x+=Me.userData.speed*P,Me.position.x>2e3&&(Me.position.x=-2e3)}),Ae.rotation.y=Y*.008,Ae.position.set(J.x,0,J.z),y.position.set(J.x-220,J.y+300,J.z-320),y.target.position.set(J.x,J.y,J.z),y.target.updateMatrixWorld();const re=f(J.x,J.z),_e=Object.entries(re).sort((Me,Xe)=>Xe[1]-Me[1])[0][0],Ge=new Pe(St[_e].fog);s.fog.color.lerp(Ge,Math.min(1,P*.7)),St[_e],Le.color.lerp(new Pe(_e==="ember"?"#ffb07a":_e==="frost"?"#dff4ff":_e==="umbra"?"#c58cff":"#ffe0a8"),Math.min(1,P*.8))}return{heightAt:u,weights:f,zoneAt:te,colliders:e,poi:t,waypoints:n,npcSpawns:i,monsterSpawns:a,boards:o,settlements:d,ruinSpots:g,bossPos:h,hub:c,update:bs,scene:s,bossArena:{x:h.x,z:h.z},zoneFog:St}}class Em{constructor(){this.ctx=null,this.enabled=!0,this.master=null,this.ambientGain=null,this.zone="hub",this.lastNote=0}init(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*3,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);let a=0;for(let p=0;p<t;p++){const v=Math.random()*2-1;a=(a+.02*v)/1.02,i[p]=a*3.5}const o=this.ctx.createBufferSource();o.buffer=n,o.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=480,r.Q.value=.8;const l=this.ctx.createGain();l.gain.value=.05,o.connect(r),r.connect(l),l.connect(this.master),o.start(),this.padGain=this.ctx.createGain(),this.padGain.gain.value=.035;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=700,this.padGain.connect(c),c.connect(this.master),this.padOscs=[],[110,164.81,220,277.18].forEach((p,v)=>{const g=this.ctx.createOscillator();g.type=v%2?"sine":"triangle",g.frequency.value=p;const m=this.ctx.createGain();m.gain.value=.3/(v+1),g.connect(m),m.connect(this.padGain),g.start(),this.padOscs.push(g)}),this.padFilter=c;const d=this.ctx.createOscillator();d.frequency.value=.05;const f=this.ctx.createGain();f.gain.value=180,d.connect(f),f.connect(c.frequency),d.start(),this.setZone("hub")}catch{}}setEnabled(e){this.enabled=e,this.master&&this.master.gain.setTargetAtTime(e?.55:0,this.ctx.currentTime,.2)}setZone(e){if(this.zone=e,!this.ctx)return;const n={hub:110,verdant:130.81,ember:98,frost:146.83,umbra:87.31}[e]||110,i=[1,1.2,1.5,1.78,2];this.padOscs?.forEach((a,o)=>{a.frequency.setTargetAtTime(n*(i[o]||1)*(o%2?1.005:.997),this.ctx.currentTime,2.5)})}tick(e){if(!(!this.ctx||!this.enabled)&&e-this.lastNote>2.8&&(this.lastNote=e,Math.random()<.6)){const t={hub:[440,523.25,659.25],verdant:[523.25,659.25,783.99],ember:[392,466.16,587.33],frost:[587.33,739.99,880],umbra:[349.23,415.3,523.25]},n=t[this.zone]||t.hub;this.note(n[Math.floor(Math.random()*n.length)],.035,3.2,"sine")}}note(e,t=.08,n=.5,i="sine"){if(!this.ctx||!this.enabled)return;const a=this.ctx.currentTime,o=this.ctx.createOscillator(),r=this.ctx.createGain();return o.type=i,o.frequency.value=e,r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(t,a+.015),r.gain.exponentialRampToValueAtTime(8e-4,a+n),o.connect(r),r.connect(this.master),o.start(a),o.stop(a+n+.05),{o,g:r}}noiseBurst(e=.12,t=.15,n=1400){if(!this.ctx||!this.enabled)return;const i=this.ctx.currentTime,a=Math.floor(this.ctx.sampleRate*t),o=this.ctx.createBuffer(1,a,this.ctx.sampleRate),r=o.getChannelData(0);for(let d=0;d<a;d++)r[d]=(Math.random()*2-1)*(1-d/a);const l=this.ctx.createBufferSource();l.buffer=o;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=n,c.Q.value=1.1;const h=this.ctx.createGain();h.gain.value=e,l.connect(c),c.connect(h),h.connect(this.master),l.start(i)}sfx(e){if(!(!this.ctx||!this.enabled))switch(this.ctx.currentTime,e){case"click":this.note(660,.04,.08,"triangle");break;case"hit":this.noiseBurst(.09,.12,2200),this.note(150,.06,.14,"square");break;case"crit":this.noiseBurst(.16,.2,2600),this.note(220,.1,.22,"square"),this.note(440,.06,.16,"triangle");break;case"hurt":this.note(120,.12,.32,"sawtooth"),this.noiseBurst(.08,.18,500);break;case"heal":[523,659,784].forEach((t,n)=>setTimeout(()=>this.note(t,.06,.8,"sine"),n*90));break;case"coin":this.note(1046,.05,.12,"triangle"),setTimeout(()=>this.note(1568,.04,.2,"triangle"),70);break;case"loot":this.note(880,.05,.2,"sine"),setTimeout(()=>this.note(1320,.035,.25,"sine"),80);break;case"level":[440,554,659,880,1108].forEach((t,n)=>setTimeout(()=>this.note(t,.09,1.1,"triangle"),n*110));break;case"skill":this.note(300,.07,.4,"sawtooth"),this.note(600,.04,.3,"sine"),this.noiseBurst(.06,.3,3e3);break;case"magic":[330,440,660,880].forEach((t,n)=>setTimeout(()=>this.note(t,.05,.6,"sine"),n*50)),this.noiseBurst(.07,.4,2400);break;case"death":this.note(220,.09,1.4,"sawtooth"),this.note(110,.08,1.8,"sine");break;case"boss":this.note(55,.2,2.4,"sawtooth"),this.note(82,.14,2,"triangle"),this.noiseBurst(.13,1.2,240);break;case"gacha":[523,659,784,1046].forEach((t,n)=>setTimeout(()=>this.note(t,.05,.8,"sine"),n*60));break;case"legendary":[523,659,784,1046,1318,1568].forEach((t,n)=>setTimeout(()=>this.note(t,.08,1.4,"triangle"),n*100)),this.noiseBurst(.05,1,4e3);break;case"open":this.note(392,.05,.18,"triangle");break;case"quest":[659,784,1046].forEach((t,n)=>setTimeout(()=>this.note(t,.06,.6,"sine"),n*100));break;case"teleport":[880,660,440,330].forEach((t,n)=>setTimeout(()=>this.note(t,.04,.5,"sine"),n*50));break;case"jump":this.note(300,.03,.15,"sine");break}}}const he=s=>document.getElementById(s),Un=(s,e,t)=>Math.min(t,Math.max(e,s)),Qs=(s,e,t)=>s+(e-s)*t,ea="aetherfall_save_v1",Tm={elder:"priest",orin:"swordsman",bram:"archer",lyra:"mage",saelis:"archer",fen:"archer",orla:"mage",ignis:"swordsman",kael:"swordsman",ash:"mage",yrsa:"mage",niva:"priest",maiden:"mage",morthos:"assassin",sable:"assassin",oracle:"mage"},Go=["verdant","ember","frost","umbra"],xl={verdant:"saelis",ember:"ignis",frost:"yrsa",umbra:"morthos"},yl={glasses:"⌐",hair:"✿",outfit:"❦",skin:"⚔"};function Ml(s){const e=Pt[s];return{version:1,job:s,name:"Wanderer",level:1,xp:0,gold:80,tokens:0,hp:e.hp,mp:e.mp,maxHp:e.hp,maxMp:e.mp,atk:e.atk,def:e.def,weapon:null,armor:null,inventory:[],cosmetics:{owned:[],equipped:{}},sigils:[],stage:0,flags:{unity:0,insight:0,greed:0,bossDefeated:!1,endingChosen:!1},tutorial:{step:0,done:!1,traveled:0,rotated:0,kills:0},quests:{side:[],completed:[],offers:{}},endings:[],discovered:["hub"],pos:{x:0,z:34},rotation:Math.PI,kills:0,sideCompleted:0,playtime:0,lastZone:"",lootCounts:{},stats:{distance:0,goldEarned:0,startedAt:Date.now()},savedAt:0}}class Zi{constructor(){this.canvas=he("scene"),this.renderer=new mm({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tl,this.renderer.toneMapping=Rl,this.renderer.toneMappingExposure=1.06,this.renderer.outputColorSpace=cn,this.scene=new vh,this.camera=new mn(55,window.innerWidth/window.innerHeight,.1,6500),this.audio=new Em,this.world=wm(this.scene),this.state=null,this.playerMesh=null,this.npcs=[],this.enemies=[],this.projectiles=[],this.effects=[],this.telegraphs=[],this.timers=[],this.skillCds=[{cd:0,max:1},{cd:0,max:1},{cd:0,max:1}],this.keys={},this.joy={x:0,z:0},this.mode="title",this.modalOpen=!1,this.soundEnabled=!0,this.selectedJob=null,this.time=0,this.titleT=0,this.attackCd=0,this.attackAnimT=0,this.castAnimT=0,this.hurtInvuln=0,this.combatT=0,this.guardUntil=0,this.mark=null,this.targetEnemy=null,this.bossEngaged=!1,this.lastHud=0,this.lastSave=0,this.lastDistCheck=0,this.shake=0,this.cam={yaw:.2,pitch:.3,dist:13,tx:0,ty:0,tz:0},this.camPos=new L,this.camTarget=new L,this.gachaResults=null,this.invTab="gear",this.selectedItem=-1,this.boss=null,this.buildTitle(),this.bindEvents(),this.bindUI(),this.checkSave(),this.setupFX(),this.lastT=performance.now(),this.renderer.setAnimationLoop(()=>this.loop()),this.onResize(),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("beforeunload",()=>this.save()),window.matchMedia("(pointer: coarse)").matches&&document.body.classList.add("touch")}buildTitle(){const e=he("class-grid");e.innerHTML=Object.values(Pt).map(n=>{const i=[n.hp/210,n.atk/22,n.def/13,n.speed/11].map(a=>`<i><b style="width:${Math.min(100,a*100)}%"></b></i>`).join("");return`<button class="class-card" data-job="${n.id}" style="--jc:${n.color}">
        <div class="class-icon">${n.icon}</div>
        <div class="class-info"><b>${n.name}</b><em>${n.epithet}</em><div class="class-bars">${i}</div></div>
      </button>`}).join(""),e.querySelectorAll(".class-card").forEach(n=>{n.addEventListener("click",()=>this.selectJob(n.dataset.job))}),he("btn-new").addEventListener("click",()=>{this.audio.init(),this.existingSave?this.confirmReset():this.beginNew()}),he("btn-continue").addEventListener("click",()=>{this.audio.init(),this.continueGame()}),he("btn-title-help").addEventListener("click",()=>this.openHelp()),he("btn-embark").addEventListener("click",()=>{this.audio.init(),this.selectedJob&&(this.existingSave?this.confirmReset():this.beginNew())});const t=he("btn-title-sound");t.addEventListener("click",()=>{this.soundEnabled=!this.soundEnabled,this.audio.init(),this.audio.setEnabled(this.soundEnabled),t.textContent=this.soundEnabled?"♪ Sound On":"♪ Sound Off"}),this.selectJob(Object.keys(Pt)[0])}selectJob(e){this.selectedJob=e,document.querySelectorAll(".class-card").forEach(n=>n.classList.toggle("selected",n.dataset.job===e));const t=Pt[e];he("class-detail").innerHTML=`<b>${t.epithet}</b> — ${t.desc} Skills: ${t.skills.map(n=>n.name).join(" · ")}.`,he("btn-embark").disabled=!1}checkSave(){try{const e=localStorage.getItem(ea);if(!e)return;const t=JSON.parse(e);if(!t||!Pt[t.job])return;this.existingSave=t;const n=he("btn-continue");n.classList.remove("hidden"),n.textContent=`Continue — ${Pt[t.job].name} · Lv ${t.level||1}`}catch{}}confirmReset(){this.openModal(`<div class="modal-head"><div><h3 class="modal-title">Abandon This Chronicle?</h3>
      <p class="modal-sub">A saved journey already exists. Beginning anew will overwrite it.</p></div>
      <button class="modal-close js-close">×</button></div>
      <div class="modal-foot" style="justify-content:flex-end">
        <button class="btn btn-ghost js-close">Keep My Chronicle</button>
        <button class="btn btn-primary" id="confirm-new">Begin Anew</button>
      </div>`),he("confirm-new").addEventListener("click",()=>{localStorage.removeItem(ea),this.existingSave=null,he("btn-continue").classList.add("hidden"),this.closeModal(),this.beginNew()})}beginNew(){this.state=Ml(this.selectedJob);const e=Pt[this.selectedJob];this.state.inventory.push({...Bi.health,qty:2},{...Bi.mana,qty:1}),this.startPlaying(!1),this.log(`The ${e.name} steps into Wayfarer's Rest.`,"gold")}continueGame(){if(!this.existingSave)return;const e=Ml(this.existingSave.job),t=this.existingSave;this.state={...e,...t,flags:{...e.flags,...t.flags||{}},tutorial:{...e.tutorial,...t.tutorial||{}},quests:{...e.quests,...t.quests||{}},cosmetics:{...e.cosmetics,...t.cosmetics||{}},stats:{...e.stats,...t.stats||{}},lootCounts:t.lootCounts||{},pos:t.pos||e.pos},this.state.inventory||(this.state.inventory=[]),this.startPlaying(!0),this.log("Your chronicle resumes.","gold")}startPlaying(e){this.mode="play",this.recalcStats(),this.state.hp<=0&&(this.state.hp=this.state.maxHp),this.spawnPlayer(),this.spawnNPCs(),this.spawnEnemies(),this.syncWaypoints();const t=Pt[this.state.job];he("portrait-icon").textContent=t.icon,he("player-name").textContent=this.state.name,he("player-job").textContent=t.name,he("attack-icon").textContent=t.icon;for(let n=0;n<3;n++)he("skill-icon-"+n).textContent=t.skills[n].icon,he("skill-name-"+n).textContent=t.skills[n].name;this.cam.tx=this.state.pos.x,this.cam.tz=this.state.pos.z,this.cam.ty=this.ground(this.state.pos.x,this.state.pos.z)+1.6,this.camPos.set(this.cam.tx+Math.sin(this.cam.yaw)*this.cam.dist,this.cam.ty+6,this.cam.tz+Math.cos(this.cam.yaw)*this.cam.dist),he("title-screen").classList.add("gone"),setTimeout(()=>{he("title-screen").style.display="none"},900),he("hud").classList.remove("hidden"),this.zone=null,this.updateZone(!0),this.updateHUD(!0),this.updateQuestUI(),e?this.state.tutorial.done?he("tutorial-tip").classList.add("hidden"):this.showTipForStep():(this.advanceTutorial(0,!0),this.toast("Your story begins.","gold")),this.save()}spawnPlayer(){this.playerMesh&&this.scene.remove(this.playerMesh),this.playerMesh=ml({job:this.state.job}),this.scene.add(this.playerMesh),this.playerMesh.position.set(this.state.pos.x,this.ground(this.state.pos.x,this.state.pos.z),this.state.pos.z),this.playerMesh.rotation.y=this.state.rotation||Math.PI,this.jumpY=0,this.vy=0,this.refreshAppearance()}refreshAppearance(){this.playerMesh&&(this.playerMesh.userData.weaponType=this.state.weapon?.type||Pt[this.state.job].weapon,vm(this.playerMesh,this.state.cosmetics.equipped||{}))}recalcStats(){if(!this.state)return;const e=this.state,t=Pt[e.job],n=e.maxHp||t.hp;e.maxHp=Math.round(t.hp+(e.level-1)*19+(e.armor?.def||0)*1.4),e.maxMp=Math.round(t.mp+(e.level-1)*9),e.atk=Math.round((t.atk+(e.level-1)*2.4+(e.weapon?.atk||0))*10)/10,e.def=Math.round((t.def+(e.level-1)*1.6+(e.armor?.def||0))*10)/10,e.hp=Math.min(e.hp,e.maxHp),e.mp=Math.min(e.mp,e.maxMp),e.maxHp>n&&e.hp>0&&(e.hp=Math.min(e.maxHp,e.hp+(e.maxHp-n)))}ground(e,t){return this.world.heightAt(e,t)}currentZone(e=this.state?.pos.x??0,t=this.state?.pos.z??0){if(Math.hypot(e,t)<235)return"hub";const n=this.world.weights(e,t);return Object.entries(n).sort((i,a)=>a[1]-i[1])[0][0]}zoneName(e=this.currentZone()){return e==="hub"?"Wayfarer's Rest":St[e].name}bindEvents(){window.addEventListener("keydown",t=>{const n=t.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(n)&&t.preventDefault(),this.mode==="play"){if(n==="escape"){this.modalOpen&&this.closeModal();return}this.modalOpen||(this.keys[n]=!0,n==="j"&&this.basicAttack(),n===" "&&this.jump(),n==="e"&&this.doInteract(),n==="h"&&this.usePotion(),n==="i"&&this.openInventory(),n==="m"&&this.openMap(),n==="q"&&this.openJournal(),n==="g"&&this.openGacha(),(n==="?"||n==="/")&&this.openHelp(),["1","2","3"].includes(n)&&this.useSkill(Number(n)-1))}}),window.addEventListener("keyup",t=>{this.keys[t.key.toLowerCase()]=!1}),window.addEventListener("blur",()=>{this.keys={}});const e=this.canvas;e.addEventListener("pointerdown",t=>{this.mode!=="play"||this.modalOpen||(this.drag={id:t.pointerId,x:t.clientX,y:t.clientY,sx:t.clientX,sy:t.clientY,moved:!1,t:performance.now(),type:t.pointerType},e.setPointerCapture(t.pointerId))}),e.addEventListener("pointermove",t=>{if(!this.drag||this.drag.id!==t.pointerId)return;const n=t.clientX-this.drag.x,i=t.clientY-this.drag.y;this.drag.x=t.clientX,this.drag.y=t.clientY,Math.abs(t.clientX-this.drag.sx)+Math.abs(t.clientY-this.drag.sy)>5&&(this.drag.moved=!0),this.cam.yaw-=n*(t.pointerType==="touch"?.007:.0048),this.cam.pitch=Un(this.cam.pitch+i*.0035,.06,.95),this.state&&this.state.tutorial.step===1&&(this.state.tutorial.rotated+=Math.abs(n)+Math.abs(i))}),e.addEventListener("pointerup",t=>{if(!this.drag||this.drag.id!==t.pointerId)return;const n=this.drag;this.drag=null,!n.moved&&n.type==="mouse"&&performance.now()-n.t<450&&this.basicAttack()}),e.addEventListener("pointercancel",()=>{this.drag=null}),e.addEventListener("wheel",t=>{this.mode!=="play"||this.modalOpen||(t.preventDefault(),this.cam.dist=Un(this.cam.dist+Math.sign(t.deltaY)*1.5,7,34))},{passive:!1}),this.bindJoystick(),window.addEventListener("pointerdown",()=>this.audio.init(),{once:!0})}bindJoystick(){const e=he("joystick"),t=he("joy-knob");let n=null;const i=()=>{this.joy.x=0,this.joy.z=0,t.style.transform="translate(-50%, -50%)"};e.addEventListener("pointerdown",o=>{o.stopPropagation(),n=o.pointerId,e.setPointerCapture(n),this.audio.init()}),e.addEventListener("pointermove",o=>{if(o.pointerId!==n)return;const r=e.getBoundingClientRect(),l=r.left+r.width/2,c=r.top+r.height/2;let h=(o.clientX-l)/(r.width*.36),d=(o.clientY-c)/(r.height*.36);const f=Math.hypot(h,d);f>1&&(h/=f,d/=f),this.joy.x=h,this.joy.z=d,t.style.transform=`translate(calc(-50% + ${h*r.width*.3}px), calc(-50% + ${d*r.height*.3}px))`});const a=o=>{o.pointerId===n&&(n=null,i())};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}bindUI(){document.querySelectorAll("[data-menu]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.menu;t==="map"?this.openMap():t==="journal"?this.openJournal():t==="inventory"?this.openInventory():t==="gacha"?this.openGacha():t==="help"&&this.openHelp()})}),he("btn-attack").addEventListener("click",()=>this.basicAttack()),he("btn-potion").addEventListener("click",()=>this.usePotion()),he("btn-jump").addEventListener("click",()=>this.jump()),he("btn-menu-mobile").addEventListener("click",()=>this.openQuickMenu()),document.querySelectorAll(".skill-btn[data-skill]").forEach(e=>{e.addEventListener("click",()=>this.useSkill(Number(e.dataset.skill)))})}onResize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}jump(){this.mode!=="play"||this.modalOpen||this.jumpY<=.01&&(this.vy=6.8,this.audio.sfx("jump"))}loop(){const e=performance.now(),t=Math.min(.05,(e-this.lastT)/1e3);if(this.lastT=e,this.time+=t,this.mode==="title"){this.titleT+=t;const n=this.titleT*.04;this.camera.position.set(Math.cos(n)*148,54+Math.sin(n*.7)*8,Math.sin(n)*148),this.camera.lookAt(0,18,0),this.world.update(t,this.time,this.camera,{x:0,y:4,z:0})}else this.state&&this.updatePlay(t);this.audio.tick(this.time),this.renderer.render(this.scene,this.camera)}updatePlay(e){this.state.playtime+=e,this.updatePlayer(e),this.modalOpen||(this.updateEnemies(e),this.updateCombatTimers(e)),this.updateProjectiles(e),this.updateEffects(e),this.updateTimers(e),this.updateCamera(e),this.world.update(e,this.time,this.camera,this.playerMesh.position),this.updateLabels(),this.updateTargetRing(),this.time-this.lastHud>.08&&(this.lastHud=this.time,this.updateHUD()),this.time-this.lastSave>20&&(this.lastSave=this.time,this.save()),this.time-this.lastDistCheck>.4&&(this.lastDistCheck=this.time,this.checkDiscovery())}updatePlayer(e){if(!this.playerMesh)return;const t=this.state;this.attackCd=Math.max(0,this.attackCd-e),this.hurtInvuln=Math.max(0,this.hurtInvuln-e),this.combatT=Math.max(0,this.combatT-e),this.attackAnimT=Math.max(0,this.attackAnimT-e),this.castAnimT=Math.max(0,this.castAnimT-e);for(const f of this.skillCds)f.cd=Math.max(0,f.cd-e);if(this.combatT<=0?(t.hp=Math.min(t.maxHp,t.hp+e*(t.maxHp*.012)),t.mp=Math.min(t.maxMp,t.mp+e*(t.maxMp*.028))):t.mp=Math.min(t.maxMp,t.mp+e*(t.maxMp*.012)),this.modalOpen){this.playerMesh.userData.animate(this.time,0,null,null);return}const n=this.keys;let i=0,a=0;(n.w||n.arrowup)&&(i+=1),(n.s||n.arrowdown)&&(i-=1),(n.d||n.arrowright)&&(a+=1),(n.a||n.arrowleft)&&(a-=1),i+=-this.joy.z,a+=this.joy.x;const o=Math.hypot(i,a);let r=0;if(o>.05){i/=o,a/=o;const f=(n.shift?1.45:1)*(this.guardUntil>this.time?.8:1),p=Pt[t.job].speed*f,v=(-Math.sin(this.cam.yaw)*i+Math.cos(this.cam.yaw)*a)*p*e,g=(-Math.cos(this.cam.yaw)*i-Math.sin(this.cam.yaw)*a)*p*e;t.pos.x+=v,t.pos.z+=g,t.stats.distance+=Math.hypot(v,g),!t.tutorial.done&&t.tutorial.step===0&&(t.tutorial.traveled+=Math.hypot(v,g),t.tutorial.traveled>22&&this.advanceTutorial(1)),t.rotation=Math.atan2(v,g),r=1}t.pos.x=Un(t.pos.x,-jn+70,jn-70),t.pos.z=Un(t.pos.z,-jn+70,jn-70);for(const f of this.world.colliders){if(Math.abs(f.x-t.pos.x)>30||Math.abs(f.z-t.pos.z)>30)continue;const p=t.pos.x-f.x,v=t.pos.z-f.z,g=Math.hypot(p,v),m=f.r+.6;if(g<m){const u=g>.001?1/g:0;t.pos.x=f.x+p*u*m,t.pos.z=f.z+v*u*m}}(this.jumpY>0||this.vy>0)&&(this.vy-=19*e,this.jumpY=Math.max(0,this.jumpY+this.vy*e),this.jumpY===0&&(this.vy=0));const l=this.ground(t.pos.x,t.pos.z);this.playerMesh.position.set(t.pos.x,l+this.jumpY,t.pos.z);let c=t.rotation-this.playerMesh.rotation.y;c=((c+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,this.playerMesh.rotation.y+=c*Math.min(1,e*14);const h=this.attackAnimT>0?1-this.attackAnimT/.34:null,d=this.castAnimT>0?1-this.castAnimT/.45:null;this.playerMesh.userData.animate(this.time,r,h,d),this.guardMesh&&(this.guardMesh.visible=this.guardUntil>this.time,this.guardMesh.position.copy(this.playerMesh.position).add(new L(0,1.1,0)),this.guardMesh.rotation.y=this.time),this.updateZone(),this.checkTutorialProgress(),this.updateInteractPrompt()}updateCamera(e){if(!this.playerMesh)return;const t=this.playerMesh.position,n=this.camTarget;n.set(Qs(n.x||t.x,t.x,Math.min(1,e*10)),0,Qs(n.z||t.z,t.z,Math.min(1,e*10))),n.y=t.y+1.75,this.cam.ty=n.y;const i=Math.cos(this.cam.pitch),a=this.cam.dist,o=new L(t.x+Math.sin(this.cam.yaw)*a*i,t.y+1.75+Math.sin(this.cam.pitch)*a,t.z+Math.cos(this.cam.yaw)*a*i),r=this.ground(o.x,o.z)+1.4;if(o.y<r&&(o.y=r),this.camPos.lengthSq()===0&&this.camPos.copy(o),this.camPos.lerp(o,Math.min(1,e*8)),this.camera.position.copy(this.camPos),this.shake>0){this.shake=Math.max(0,this.shake-e);const l=this.shake*.55;this.camera.position.x+=(Math.random()-.5)*l,this.camera.position.y+=(Math.random()-.5)*l}this.camera.lookAt(n)}spawnNPCs(){for(const e of this.npcs)e.mesh&&this.scene.remove(e.mesh);for(const e of document.querySelectorAll(".lbl.npc"))e.remove();this.npcs=[];for(const e of this.world.npcSpawns){const t=Yn[e.npc];if(!t)continue;const n=ml({job:Tm[t.id]||"priest",npc:!0,color:t.color,accent:t.accent,hat:t.hat,staff:t.staff,hair:"#3a2e28"}),i=this.ground(e.x,e.z);n.position.set(e.x,i,e.z),n.rotation.y=e.rot||0,this.scene.add(n);const a=document.createElement("div");a.className="lbl npc",a.innerHTML=`<span class="marker"></span><span>${t.name}</span><span class="npc-role">${t.role}</span>`,he("labels").appendChild(a);const o={id:t.id,def:t,mesh:n,x:e.x,z:e.z,y:i,baseRot:e.rot||0,label:a,labelY:2.15,phase:Math.random()*7};this.npcs.push(o)}}updateInteractPrompt(){if(this.modalOpen||!this.playerMesh){he("interact-prompt").classList.add("hidden");return}const e=this.playerMesh.position;let t=null,n=6;for(const i of this.npcs){const a=Math.hypot(i.x-e.x,i.z-e.z);a<n&&(n=a,t={type:"npc",obj:i,text:i.def.vendor?`Trade with ${i.def.name}`:i.def.gacha?"Visit the Astral Loom":`Speak with ${i.def.name}`})}for(const i of this.world.boards)Math.hypot(i.x-e.x,i.z-e.z)<4.5&&(t={type:"board",obj:i,text:"Read the quest board"});for(const i of this.world.waypoints)Math.hypot(i.x-e.x,i.z-e.z)<5&&(t={type:"waypoint",obj:i,text:i.unlocked?"Open the world map":"Attune this waypoint"});t?(he("interact-text").textContent=t.text,he("interact-prompt").classList.remove("hidden")):he("interact-prompt").classList.add("hidden"),this.near=t}doInteract(){if(this.near){if(this.near.type==="npc"){const e=this.near.obj;this.noteTalk(e),e.def.vendor?this.openShop(e):e.def.gacha?this.openGacha():this.openDialogue(e)}else if(this.near.type==="board")this.openBoard(this.near.obj.zone);else if(this.near.type==="waypoint"){const e=this.near.obj;e.unlocked||this.unlockWaypoint(e),this.openMap()}}}noteTalk(e){if(this.state){for(const t of this.state.quests.side)if(t.kind==="deliver"&&t.npcName===e.def.name&&!t.done){t.progress=t.need,this.checkQuests();break}}}syncWaypoints(){const e=new Set(this.state.discovered||[]);for(const t of this.world.waypoints)t.unlocked=e.has(t.id)}unlockWaypoint(e){e.unlocked||(e.unlocked=!0,this.state.discovered.includes(e.id)||this.state.discovered.push(e.id),this.toast(`Waypoint discovered — ${e.name}`,"gold"),this.log(`Waypoint attuned: ${e.name}`,"gold"),this.audio.sfx("teleport"),this.save())}checkDiscovery(){if(!this.state)return;const e=this.state.pos;for(const t of this.world.waypoints)!t.unlocked&&Math.hypot(t.x-e.x,t.z-e.z)<55&&this.unlockWaypoint(t);for(const t of this.state.quests.side)t.kind==="explore"&&!t.done&&t.poi&&Math.hypot(t.poi.x-e.x,t.poi.z-e.z)<45&&(t.progress=t.need,this.checkQuests())}updateZone(e=!1){const t=this.currentZone();(t!==this.zone||e)&&(this.audio.setZone(t),this.zone&&!e?(this.showBanner(this.zoneName(t),t==="hub"?"Sanctuary of the Four Roads":St[t].subtitle),this.log(`Entered ${this.zoneName(t)}.`,"gold")):e&&this.showBanner(this.zoneName(t),t==="hub"?"Sanctuary of the Four Roads":St[t].subtitle),this.zone=t,he("zone-chip").textContent=this.zoneName(t),this.state.lastZone=t)}showBanner(e,t){const n=he("location-banner");he("location-name").textContent=e,he("location-sub").textContent=t||"",n.classList.add("show"),clearTimeout(this._bannerT),this._bannerT=setTimeout(()=>n.classList.remove("show"),3200)}advanceTutorial(e,t=!1){const n=this.state.tutorial;n.step=e,e===2&&!n.gifted&&(n.gifted=!0,this.grantStarterGear()),this.showTipForStep(),t||this.audio.sfx("quest")}showTipForStep(){if(!this.state||this.state.tutorial.done){he("tutorial-tip").classList.add("hidden");return}const e=this.state.tutorial.step,t=[["Move","Use WASD, arrow keys, or the joystick to walk the world."],["Look Around","Drag across the world to rotate the camera. Scroll to zoom."],["A Gift","The Elder left you copper arms. A starter weapon and armor are now equipped."],["Strike","Press J, tap Strike, or click the world to attack a nearby foe."],["First Blood",`Slay the moss slimes near the plaza (${this.state.tutorial.kills}/2).`],["The Elder","Speak with Elder Maren by the fountain. Press E or tap the prompt."]],n=t[e]||t[0];he("tip-title").textContent=n[0],he("tip-text").textContent=n[1],he("tutorial-tip").classList.remove("hidden"),e===2&&setTimeout(()=>{this.state&&!this.state.tutorial.done&&this.state.tutorial.step===2&&this.advanceTutorial(3)},3800)}grantStarterGear(){const e=Pt[this.state.job],t=ar("copper",e.weapon),n=or("copper",e.armor);this.state.weapon=t,this.state.armor=n,this.recalcStats(),this.refreshAppearance(),this.toast(`Tutorial gift — ${t.name} & ${n.name}`,"gold"),this.log("Starter weapon and armor equipped. A gift from Elder Maren.","good"),this.floatText(this.playerMesh.position.clone().add(new L(0,2.4,0)),"GIFT","xp"),this.audio.sfx("level"),this.updateHUD(!0),this.save()}checkTutorialProgress(){if(!this.state||this.state.tutorial.done)return;const e=this.state.tutorial;e.step===1&&e.rotated>.5&&this.advanceTutorial(2),e.step===4&&e.kills>=2&&this.advanceTutorial(5)}completeTutorial(){const e=this.state.tutorial;e.done||(e.done=!0,e.step=6,this.state.stage=1,this.state.tokens+=1,this.gainXp(100),this.gainGold(60,!0),this.toast("Tutorial complete — 1 Gacha Token earned","gold"),this.toast("Main quest: The Four Wards","gold"),this.log('Elder Maren: "Recover the four sigils. The Heart is waking."',"gold"),he("tutorial-tip").classList.add("hidden"),this.audio.sfx("level"),this.updateQuestUI(),this.save())}updateLabels(){if(!this.playerMesh)return;const e=this.playerMesh.position;for(const t of this.npcs){const n=Math.hypot(t.x-e.x,t.z-e.z);if(n>190){t.mesh.visible=!1,t.label.style.display="none";continue}if(t.mesh.visible=!0,n>110){t.label.style.display="none";continue}const i=this.project(t.mesh.position.clone().add(new L(0,t.labelY,0)));if(!i||i.z>1){t.label.style.display="none";continue}t.label.style.display="block",t.label.style.left=i.x+"px",t.label.style.top=i.y+"px";const a=this.getMainTargetNpc()===t.id,o=t.label.querySelector(".marker");if(a?(o.textContent="!",t.label.classList.add("quest")):t.def.story&&!this.state.flags["met_"+t.id]?(o.textContent="?",t.label.classList.remove("quest")):(o.textContent="",t.label.classList.remove("quest")),n<9){const r=Math.atan2(e.x-t.x,e.z-t.z);t.mesh.rotation.y=Qs(t.mesh.rotation.y,r,.08)}else t.mesh.rotation.y=Qs(t.mesh.rotation.y,t.baseRot,.03);t.mesh.userData.animate(this.time+t.phase,0,null,null)}for(const t of this.enemies){if(!t.label)continue;if(t.dead||t.def.boss){t.label.style.display="none";continue}if(Math.hypot(t.mesh.position.x-e.x,t.mesh.position.z-e.z)>72){t.label.style.display="none";continue}const i=this.project(t.mesh.position.clone().add(new L(0,t.labelY*(t.def.scale||1),0)));if(!i||i.z>1){t.label.style.display="none";continue}t.label.style.display="block",t.label.style.left=i.x+"px",t.label.style.top=i.y+"px";const a=t.label.querySelector(".ebar i");a&&(a.style.width=Math.max(0,t.hp/t.maxHp*100)+"%")}}project(e){const t=e.clone().project(this.camera);return{x:(t.x*.5+.5)*window.innerWidth,y:(-t.y*.5+.5)*window.innerHeight,z:t.z}}floatText(e,t,n=""){const i=this.project(e);if(!i||i.z>1)return;const a=document.createElement("div");a.className="floater "+n,a.textContent=t,a.style.left=i.x+(Math.random()-.5)*24+"px",a.style.top=i.y+"px",he("floaters").appendChild(a),setTimeout(()=>a.remove(),1050),he("floaters").children.length>28&&he("floaters").firstChild?.remove()}toast(e,t=""){const n=document.createElement("div");n.className="toast "+t,n.innerHTML=`<span>${t==="gold"?"✦":"•"}</span>${e}`,he("toasts").appendChild(n),setTimeout(()=>n.classList.add("out"),2400),setTimeout(()=>n.remove(),2850),he("toasts").children.length>5&&he("toasts").firstChild?.remove()}log(e,t=""){const n=document.createElement("div");for(n.className="log-line "+t,n.textContent=e,he("log-feed").prepend(n);he("log-feed").children.length>5;)he("log-feed").lastChild.remove()}updateHUD(e=!1){if(!this.state)return;const t=this.state,n=Pt[t.job];he("hp-fill").style.width=Un(t.hp/t.maxHp*100,0,100)+"%",he("mp-fill").style.width=Un(t.mp/t.maxMp*100,0,100)+"%",he("hp-text").textContent=`${Math.ceil(t.hp)} / ${t.maxHp}`,he("mp-text").textContent=`${Math.ceil(t.mp)} / ${t.maxMp}`,he("player-level").textContent=`Lv ${t.level}`;const i=this.xpNeed();he("xp-fill").style.width=Un(t.xp/i*100,0,100)+"%",he("xp-text").textContent=`${Math.floor(t.xp)} / ${i}`,he("gold-text").textContent=t.gold,he("token-text").textContent=t.tokens;const a=this.countItem("potion_health");he("potion-count").textContent=a;for(let o=0;o<3;o++){const r=this.skillCds[o],l=he("skill-cd-"+o);if(!l)continue;const c=r.cd>0?r.cd/r.max:0;l.style.height=c*100+"%",l.style.opacity=c>0?1:0,l.parentElement.classList.toggle("no-mp",t.mp<n.skills[o].mp)}he("attack-icon").textContent=n.icon,e&&(he("portrait-icon").textContent=n.icon,he("zone-chip").textContent=this.zoneName()),this.playerMesh&&this.drawMinimap&&this.drawMinimap()}xpNeed(){return Math.round(50*Math.pow(this.state.level,1.38))}gainXp(e){if(!this.state)return;this.state.xp+=e,this.floatText(this.playerMesh.position.clone().add(new L(0,2.6,0)),`+${Math.round(e)} XP`,"xp");let t=!1;for(;this.state.xp>=this.xpNeed();)this.state.xp-=this.xpNeed(),this.state.level++,t=!0;t&&(this.recalcStats(),this.state.hp=this.state.maxHp,this.state.mp=this.state.maxMp,this.toast(`Level ${this.state.level} — fully restored`,"gold"),this.log(`You reached level ${this.state.level}.`,"good"),this.audio.sfx("level"),this.levelEffect(),this.updateHUD(!0))}gainGold(e,t=!1){this.state&&(this.state.gold+=Math.round(e),this.state.stats.goldEarned+=Math.round(e),t||this.audio.sfx("coin"))}countItem(e){return(this.state?.inventory||[]).reduce((t,n)=>t+(n.id===e?n.qty||1:0),0)}addItem(e,t=1,n=!1){if(!this.state)return;if(["loot","potion"].includes(e.kind)){const a=this.state.inventory.find(o=>o.id===e.id);a?a.qty=(a.qty||1)+t:this.state.inventory.push({...e,qty:t})}else for(let a=0;a<t;a++)this.state.inventory.push({...e,qty:1});e.kind==="loot"&&(this.state.lootCounts[e.id]=(this.state.lootCounts[e.id]||0)+t,this.checkQuests()),n&&this.toast(`Acquired ${e.name}${t>1?" ×"+t:""}`,"rarity"),this.save()}removeItem(e,t=1){const n=this.state.inventory;for(let i=n.length-1;i>=0&&t>0;i--){if(n[i].id!==e)continue;const a=Math.min(t,n[i].qty||1);n[i].qty=(n[i].qty||1)-a,t-=a,n[i].qty<=0&&n.splice(i,1)}}usePotion(){if(!this.state||this.modalOpen)return;if(this.state.hp>=this.state.maxHp){this.toast("Health is already full.");return}if(this.countItem("potion_health")<=0){this.toast("No health potions left. Visit a vendor.");return}this.removeItem("potion_health",1);const e=Math.round(this.state.maxHp*.45);this.state.hp=Math.min(this.state.maxHp,this.state.hp+e),this.floatText(this.playerMesh.position.clone().add(new L(0,2.2,0)),`+${e}`,"heal"),this.healEffect(),this.audio.sfx("heal"),this.updateHUD(!0),this.save()}levelEffect(){if(!this.playerMesh)return;const e=new ge(new Ht(1.2,.08,6,32),new yt({color:"#ffd479",transparent:!0,opacity:.8,blending:$t}));e.rotation.x=Math.PI/2,e.position.copy(this.playerMesh.position).add(new L(0,.4,0)),this.scene.add(e),this.effects.push({mesh:e,life:1.2,max:1.2,update:(t,n)=>{e.scale.setScalar(1+(1-n)*2),e.material.opacity=n*.8,e.position.y+=.02}});for(let t=0;t<12;t++){const n=new ge(new Qt(.12),new yt({color:"#ffe0a0",transparent:!0}));n.position.copy(this.playerMesh.position).add(new L((Math.random()-.5)*1.5,Math.random()*2,(Math.random()-.5)*1.5)),this.scene.add(n),this.effects.push({mesh:n,life:1,max:1,update:(i,a)=>{n.position.y+=.02,n.material.opacity=a,n.rotation.y+=.1}})}}save(){if(this.state)try{this.state.pos={x:this.playerMesh?.position.x??this.state.pos.x,z:this.playerMesh?.position.z??this.state.pos.z},this.state.rotation=this.playerMesh?.rotation.y??this.state.rotation,this.state.savedAt=Date.now(),localStorage.setItem(ea,JSON.stringify(this.state)),this.existingSave=this.state}catch{}}deleteSave(){try{localStorage.removeItem(ea)}catch{}this.existingSave=null}setupFX(){this.targetRing=new ge(new pi(.95,1.18,26),new yt({color:"#ff8a6a",transparent:!0,opacity:.7,side:Bt,depthWrite:!1})),this.targetRing.rotation.x=-Math.PI/2,this.targetRing.visible=!1,this.scene.add(this.targetRing),this.guardMesh=new ge(new dn(1.35,14,10),new yt({color:"#8fd8ef",transparent:!0,opacity:.16,blending:$t,depthWrite:!1})),this.guardMesh.visible=!1,this.scene.add(this.guardMesh),this.playerRing=new ge(new pi(.5,.66,24),new yt({color:"#8fd8ef",transparent:!0,opacity:.35,side:Bt,depthWrite:!1})),this.playerRing.rotation.x=-Math.PI/2,this.scene.add(this.playerRing)}updateTargetRing(){if(!this.playerMesh)return;this.playerRing.position.copy(this.playerMesh.position).add(new L(0,.06,0)),this.playerRing.rotation.z=this.time*.2;let e=null,t=34;for(const n of this.enemies){if(n.dead)continue;const i=Math.hypot(n.mesh.position.x-this.playerMesh.position.x,n.mesh.position.z-this.playerMesh.position.z);i<t&&(t=i,e=n)}if(this.targetEnemy=e,e){this.targetRing.visible=!0,this.targetRing.position.set(e.mesh.position.x,e.mesh.position.y+.08,e.mesh.position.z);const n=e.def.scale||1;this.targetRing.scale.setScalar(n*(1+Math.sin(this.time*4)*.06)),this.targetRing.material.color.set(e.def.boss?"#ff5a3a":"#ff8a6a")}else this.targetRing.visible=!1}schedule(e,t){this.timers.push({t:e,fn:t})}updateTimers(e){for(let t=this.timers.length-1;t>=0;t--){const n=this.timers[t];if(n.t-=e,n.t<=0){try{n.fn()}catch(i){console.error(i)}this.timers.splice(t,1)}}}updateEffects(e){for(let t=this.effects.length-1;t>=0;t--){const n=this.effects[t];n.life-=e;const i=Math.max(0,n.life/n.max);n.update&&n.update(n,i),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry&&n.mesh.geometry.dispose(),n.mesh.material&&n.mesh.material.dispose?.(),this.effects.splice(t,1))}for(let t=this.telegraphs.length-1;t>=0;t--){const n=this.telegraphs[t];n.t-=e,n.mesh.rotation.z+=e*1.5;const i=1+Math.sin(this.time*12)*.03;n.mesh.scale.setScalar(i),n.t<=0&&(this.playerMesh&&Math.hypot(this.playerMesh.position.x-n.x,this.playerMesh.position.z-n.z)<n.r&&this.takeDamage(n.dmg,"The Sovereign"),this.burst(n.x,this.ground(n.x,n.z)+.5,n.z,"#ff7a3a",2.5),this.scene.remove(n.mesh),this.telegraphs.splice(t,1))}}burst(e,t,n,i="#ffd479",a=1.4){const o=new ge(new dn(.6,12,8),new yt({color:i,transparent:!0,opacity:.5,blending:$t,depthWrite:!1}));o.position.set(e,t,n),this.scene.add(o),this.effects.push({mesh:o,life:.5,max:.5,update:(r,l)=>{o.scale.setScalar(1+(1-l)*a*2.5),o.material.opacity=l*.5}})}ring(e,t,n,i="#ffd479",a=5,o=.6){const r=new ge(new pi(a*.75,a,36),new yt({color:i,transparent:!0,opacity:.6,side:Bt,blending:$t,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.set(e,t+.25,n),this.scene.add(r),this.effects.push({mesh:r,life:o,max:o,update:(l,c)=>{r.scale.setScalar(.6+(1-c)*.9),r.material.opacity=c*.6}})}healEffect(){if(this.playerMesh)for(let e=0;e<8;e++){const t=new ge(new Qt(.1),new yt({color:"#9fe0a0",transparent:!0,opacity:.8}));t.position.copy(this.playerMesh.position).add(new L((Math.random()-.5)*1.2,Math.random()*.5,(Math.random()-.5)*1.2)),this.scene.add(t),this.effects.push({mesh:t,life:.9,max:.9,update:(n,i)=>{t.position.y+=.025,t.material.opacity=i*.8}})}}openDialogue(e){if(!this.state)return;const t=this.buildDialogue(e);t&&this.showDialogue(t,e),this.state.flags["met_"+e.id]=!0,this.state.flags["met_announced_"+e.id]||(this.state.flags["met_announced_"+e.id]=!0,this.save())}getMainTargetNpc(){if(!this.state)return null;const e=this.state;if(!e.tutorial.done)return e.tutorial.step>=5?"elder":null;if(e.flags.bossDefeated&&!e.flags.endingChosen)return"elder";if(e.sigils.length<4){const t=Go.find(n=>!e.sigils.includes(n));return t?xl[t]:null}return null}getMainInfo(){const e=this.state;if(!e.tutorial.done){const t=[["Training: First Steps","Walk a little. Use WASD or the joystick."],["Training: Look Around","Drag across the world to rotate your camera."],["Training: A Gift","Your copper starter weapon and armor are being equipped."],["Training: Strike","Press J, click, or tap Strike to attack."],["Training: First Blood",`Slay moss slimes near Wayfarer's Rest (${Math.min(2,e.tutorial.kills)}/2).`],["Training: The Elder","Speak with Elder Maren by the fountain."]],n=t[e.tutorial.step]||t[0];return{title:n[0],objective:n[1]}}if(e.sigils.length<4){const t=Go.find(a=>!e.sigils.includes(a)),n=t?Yn[xl[t]].name:"",i=t?St[t].settlement:"";return{title:"The Four Wards",objective:`Recover the wardens' sigils (${e.sigils.length}/4). Next: ${n} at ${i}.`}}return e.flags.bossDefeated?e.flags.endingChosen?{title:"Aetherfall",objective:"Your ending is written. The world remains open to wander."}:{title:"The Last Word",objective:"Return to Elder Maren at Wayfarer's Rest. The Heart is listening."}:{title:"The Aetherheart",objective:"Defeat the Ashen Sovereign at the Sundered Throne, south-east in the Umbral Mire."}}}function Am(s){s.prototype.spawnEnemies=function(){for(const e of this.enemies)e.mesh&&this.scene.remove(e.mesh),e.label&&e.label.remove();this.enemies=[],this.boss=null;for(const e of this.world.monsterSpawns)e.type==="boss"&&this.state.flags.bossDefeated||this.createEnemyAt(e.type,e.x,e.z,{boss:!!e.boss})},s.prototype.createEnemyAt=function(e,t,n,i={}){const a=sc[e];if(!a)return null;const o=_m(a),r=!!a.boss,l=r?this.ground(t,n)+1.3:this.ground(t,n);r||o.scale.setScalar(a.scale||1),o.position.set(t,l,n),o.rotation.y=i.rot??Math.random()*Math.PI*2,this.scene.add(o);const c=document.createElement("div");c.className="lbl enemy"+(a.elite?" elite":""),c.innerHTML=`<span class="ename">${a.elite?"✦ ":""}${a.name}</span><span class="ebar"><i></i></span>`,c.style.display="none",document.getElementById("labels").appendChild(c);const h={uid:"e"+Math.random().toString(36).slice(2),def:a,mesh:o,label:c,x:t,z:n,home:{x:t,z:n},y:l,hp:a.hp,maxHp:a.hp,level:a.level,dead:!1,respawnT:0,atkCd:Math.random()*1.2,aggroT:0,slowUntil:0,poisonUntil:0,poisonDps:0,poisonTick:0,hurtT:0,phase2:!1,aoeCd:5,labelY:o.userData.labelY||2.4,boss:r};return r&&(this.boss=h,this.bossEngaged=!1),this.enemies.push(h),h},s.prototype.updateEnemies=function(e){if(!this.playerMesh)return;const t=this.playerMesh.position;for(const n of this.enemies){if(n.dead){n.respawnT-=e,n.respawnT<=0&&!n.boss&&(n.dead=!1,n.hp=n.maxHp,n.mesh.visible=!0,n.mesh.position.set(n.home.x,this.ground(n.home.x,n.home.z),n.home.z),n.mesh.rotation.y=Math.random()*6.28,n.aggroT=0);continue}const i=n.mesh.position,a=Math.hypot(t.x-i.x,t.z-i.z);if(a>(n.boss?280:160)){n.mesh.visible=!1,n.mesh.userData.animate?.(this.time+(n.def.level||1),0);continue}n.mesh.visible||(n.mesh.visible=!0);const o=n.boss?52:n.def.elite?18:14;a<o&&(n.aggroT=Math.max(n.aggroT,7)),n.aggroT=Math.max(0,n.aggroT-e);const r=Math.hypot(i.x-n.home.x,i.z-n.home.z);let l=0,c=0,h=0;const d=n.slowUntil>this.time?.42:1,f=n.def.speed*d*(n.boss&&n.phase2?1.3:1);if(n.aggroT>0&&r<(n.boss?90:60)){const p=["wisp","hag"].includes(n.def.family),v=p?9:2.1+(n.def.scale||1)*1.1;if(a>v&&(l=(t.x-i.x)/a,c=(t.z-i.z)/a,h=1),p&&a<20&&n.atkCd<=0&&(n.atkCd=2.7,this.fireEnemyProjectile(n)),!p&&a<v+.8&&n.atkCd<=0){n.atkCd=n.boss?2.1:1.7;const g=n.def.atk*(.85+Math.random()*.3);this.takeDamage(g,n.def.name),n.hurtT=.18}}else if(a<85){const p=n.uid.charCodeAt(1)||1,v=this.time*.35+p*2.1,g=n.home.x+Math.cos(v)*4,m=n.home.z+Math.sin(v*.8)*4,u=Math.hypot(g-i.x,m-i.z);u>1.2&&(l=(g-i.x)/u,c=(m-i.z)/u,h=.55)}if(h>0){i.x+=l*f*h*e,i.z+=c*f*h*e;for(const g of this.world.colliders){if(Math.abs(g.x-i.x)>26||Math.abs(g.z-i.z)>26)continue;const m=i.x-g.x,u=i.z-g.z,S=Math.hypot(m,u),w=g.r+.5;S<w&&S>.001&&(i.x=g.x+m/S*w,i.z=g.z+u/S*w)}i.y=this.ground(i.x,i.z)+(n.boss?1.3:0);let v=Math.atan2(t.x-i.x,t.z-i.z)-i.rotation;v=((v+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,i.rotation+=v*Math.min(1,e*8),n.mesh.userData.animate?.(this.time,1)}else n.mesh.userData.animate?.(this.time,0);if(n.atkCd=Math.max(0,n.atkCd-e),n.poisonUntil>this.time&&(n.poisonTick-=e,n.poisonTick<=0)){n.poisonTick=1;const p=Math.max(2,n.poisonDps);n.hp-=p,this.floatText(i.clone().add(new L(0,1.6,0)),"-"+Math.round(p),"heal"),n.hp<=0&&this.killEnemy(n)}if(n.boss&&n.aggroT>0&&!n.dead){if(!n.phase2&&n.hp<n.maxHp*.5){n.phase2=!0,n.def={...n.def,speed:n.def.speed*1.15},this.toast("The Sovereign is enraged!","gold"),this.log("The Ashen Sovereign calls the mire to his side.","danger"),this.audio.sfx("boss");for(let p=0;p<2;p++){const v=this.createEnemyAt("voidling",n.mesh.position.x+(p?6:-6),n.mesh.position.z+8,{});v&&(v.aggroT=20)}}n.aoeCd-=e,n.aoeCd<=0&&a<44&&(n.aoeCd=n.phase2?6:8.5,this.bossTelegraph(t.x,t.z,6.5,n.phase2?72:54)),a<58&&!this.bossEngaged&&(this.bossEngaged=!0,this.audio.sfx("boss"),this.toast("The Ashen Sovereign awakens.","gold"),this.log('"Four wards. Four failures. You are late, little flame."',"danger"))}if(n.boss){const p=document.getElementById("boss-bar"),v=!n.dead&&(n.aggroT>0||a<60);p.classList.toggle("hidden",!v),document.getElementById("boss-fill").style.width=Un(n.hp/n.maxHp*100,0,100)+"%"}n.hurtT>0&&(n.hurtT-=e)}},s.prototype.updateCombatTimers=function(e){this.skillCds.forEach(t=>{t.cd=Math.max(0,t.cd-e)}),this.mark&&this.mark.until<this.time&&(this.mark=null),this.guardUntil<this.time&&this.guardMesh&&(this.guardMesh.visible=!1),this.boss&&this.boss.dead&&document.getElementById("boss-bar").classList.add("hidden")},s.prototype.bossTelegraph=function(e,t,n,i){const a=new lt,o=new ge(new fi(n,40),new yt({color:"#ff4a2a",transparent:!0,opacity:.16,side:Bt,depthWrite:!1}));o.rotation.x=-Math.PI/2;const r=new ge(new pi(n*.92,n,40),new yt({color:"#ff8a5a",transparent:!0,opacity:.85,side:Bt,depthWrite:!1}));r.rotation.x=-Math.PI/2,a.add(o,r),a.position.set(e,this.ground(e,t)+.3,t),this.scene.add(a),this.telegraphs.push({mesh:a,x:e,z:t,r:n,dmg:i,t:1.3,max:1.3}),this.audio.sfx("magic")},s.prototype.nearestEnemy=function(e=40,t=!0){if(!this.playerMesh)return null;const n=this.playerMesh.position;let i=null,a=e;for(const o of this.enemies){if(t&&o.dead)continue;const r=Math.hypot(o.mesh.position.x-n.x,o.mesh.position.z-n.z);r<a&&(a=r,i=o)}return i},s.prototype.fireEnemyProjectile=function(e){const t=e.mesh.position.clone().add(new L(0,1.5,0)),n=e.def.family==="wisp"?"#a8e8ff":"#c58cff",i=new ge(new dn(.28,8,6),new ct({color:n,emissive:n,emissiveIntensity:2}));i.position.copy(t),this.scene.add(i);const a=e.def.atk*(.85+Math.random()*.3);this.projectiles.push({mesh:i,start:t,targetPos:this.playerMesh.position.clone().add(new L(0,1.2,0)),speed:13,life:3.2,enemyShot:!0,dmg:a}),this.audio.sfx("magic")},s.prototype.updateProjectiles=function(e){for(let t=this.projectiles.length-1;t>=0;t--){const n=this.projectiles[t];n.life-=e;let i=n.targetPos;if(n.target&&!n.target.dead)i=n.target.mesh.position.clone().add(new L(0,1.2,0));else if(n.target&&n.target.dead){this.removeProjectile(n,t);continue}const a=i.clone().sub(n.mesh.position),o=a.length(),r=n.speed*e;if(o<=r+.6||n.life<=0){n.mesh.position.copy(i),n.enemyShot?(this.playerMesh&&i.distanceTo(this.playerMesh.position.clone().add(new L(0,1.2,0)))<2.2&&this.takeDamage(n.dmg,"a spell"),this.burst(i.x,i.y,i.z,"#c58cff",1.2)):n.target&&!n.target.dead&&(this.damageEnemy(n.target,n.dmg,n.crit,n.color),this.burst(i.x,i.y,i.z,n.color||"#ffd479",1),n.onHit&&n.onHit(i)),this.removeProjectile(n,t);continue}n.mesh.position.add(a.normalize().multiplyScalar(r)),n.mesh.userData.spin&&(n.mesh.rotation.z+=e*12)}},s.prototype.removeProjectile=function(e,t){this.scene.remove(e.mesh),e.mesh.geometry?.dispose(),e.mesh.material?.dispose?.(),this.projectiles.splice(t,1)},s.prototype.takeDamage=function(e,t="a monster"){if(!this.state||this.state.hp<=0||this.hurtInvuln>0)return;this.hurtInvuln=.35;let n=Math.max(1,e-this.state.def*.32);this.guardUntil>this.time&&(n*=.5),n=Math.round(n),this.state.hp-=n,this.combatT=6,this.shake=.22;const i=document.getElementById("damage-flash");i.classList.add("hit"),setTimeout(()=>i.classList.remove("hit"),90),this.floatText(this.playerMesh.position.clone().add(new L(0,2.2,0)),"-"+n,"player-hit"),this.audio.sfx("hurt"),this.state.hp<=0&&this.playerDie(t)},s.prototype.playerDie=function(e){this.state.hp=0,this.audio.sfx("death"),this.log(`You were slain by ${e}. The wardens pull you back.`,"danger"),this.toast("You have fallen — returning to Wayfarer's Rest",""),this.playerMesh.userData.animate(this.time,0,null,null);const t=Math.min(this.state.gold,Math.round(this.state.gold*.1));this.state.gold-=t,document.getElementById("zone-fade").classList.add("on"),setTimeout(()=>{this.state.pos.x=0,this.state.pos.z=34,this.state.hp=Math.round(this.state.maxHp*.65),this.state.mp=Math.round(this.state.maxMp*.5),this.playerMesh.position.set(0,this.ground(0,34),34),this.jumpY=0,this.vy=0,this.combatT=0,this.camPos.set(0,this.ground(0,34)+8,50);for(const n of this.enemies)n.boss||(n.aggroT=0);document.getElementById("zone-fade").classList.remove("on"),this.updateHUD(!0),this.save()},700)},s.prototype.damageEnemy=function(e,t,n=!1,i="#ffd479"){if(!e||e.dead)return;const a=this.mark&&this.mark.enemy===e?1.5:1,o=Math.max(1,Math.round(t*a-e.def.def*.5));e.hp-=o,e.aggroT=Math.max(e.aggroT,9),this.combatT=6;const r=e.mesh.position.clone().add(new L(0,(e.def.scale||1)*1.9+.4,0));this.floatText(r,"-"+o,n?"crit":""),n?this.audio.sfx("crit"):this.audio.sfx("hit"),this.burst(e.mesh.position.x,e.mesh.position.y+1,e.mesh.position.z,i,.5),e.hp<=0?this.killEnemy(e):this.updateHUD()},s.prototype.killEnemy=function(e){if(!e||e.dead)return;e.dead=!0,e.hp=0,e.mesh.visible=!1,e.label&&(e.label.style.display="none");const t=e.def;if(this.state.kills++,this.burst(e.mesh.position.x,e.mesh.position.y+1.2,e.mesh.position.z,t.boss?"#ffd479":"#ffb07a",t.boss?4:1.5),this.gainGold(t.gold[0]+Math.random()*(t.gold[1]-t.gold[0])|0),this.gainXp(t.xp),this.log(`${t.name} slain. +${t.xp} XP`,"good"),Math.random()<(t.lootChance??.7)){const n=t.loot[Math.floor(Math.random()*t.loot.length)],i=Vo[n];i&&(this.addItem({...i,kind:"loot"},1),this.floatText(e.mesh.position.clone().add(new L(0,1.6,0)),"+ "+i.name,"loot"))}!this.state.tutorial.done&&this.state.tutorial.step===4&&t.id==="moss_slime"&&(this.state.tutorial.kills++,this.toast(`Moss slimes slain (${Math.min(2,this.state.tutorial.kills)}/2)`),this.showTipForStep(),this.updateQuestUI()),this.noteKill&&this.noteKill(t),t.boss?this.onBossKilled(e):e.respawnT=45+Math.random()*35,this.updateHUD(),this.save()},s.prototype.onBossKilled=function(e){const t=Pt[this.state.job];this.state.flags.bossDefeated=!0,this.state.stage=6,this.toast("The Ashen Sovereign falls.","gold"),this.log("The Sundered Throne goes quiet. The Aetherheart is free.","gold"),this.audio.sfx("legendary"),document.getElementById("boss-bar").classList.add("hidden");const n=ar("adamantite",t.weapon,{unique:!0}),i=or("adamantite",t.armor,{unique:!0});n.name="Adamantite Sovereignblade",n.desc+=" Taken from the Ashen Sovereign.",i.name="Adamantite Sovereignplate",i.desc+=" Taken from the Ashen Sovereign.",this.addItem(n,1),this.addItem(i,1),this.addItem({...Vo.heart_shard,kind:"loot"},1),this.state.tokens+=3,this.gainXp(1200),this.gainGold(750),this.toast("Adamantite relics, a Heart Shard, and 3 Gacha Tokens!","gold"),this.toast("Return to Elder Maren to choose the ending.","gold");const a=this.world.waypoints.find(o=>o.id==="throne");a&&!a.unlocked&&this.unlockWaypoint(a),this.updateQuestUI(),this.save()}}function Rm(s){s.prototype.weaponDef=function(){const e=this.state;return ic[e.weapon?.type||Pt[e.job].weapon]},s.prototype.playerDamage=function(e=1){const t=this.state,n=.1+(t.job==="assassin"?.13:0)+(t.weapon?.rarity==="adamantite"?.05:0),i=Math.random()<n;return{dmg:(t.atk||Pt[t.job].atk)*e*(.88+Math.random()*.24)*(i?1.8:1),crit:i}},s.prototype.basicAttack=function(){if(!this.state||!this.playerMesh||this.modalOpen||this.state.hp<=0||this.attackCd>0)return;const e=this.weaponDef();this.attackCd=.52/e.speed,this.attackAnimT=.34,this.combatT=6,!this.state.tutorial.done&&this.state.tutorial.step===3&&this.advanceTutorial(4);const t=this.playerMesh.position,n=this.playerMesh.rotation.y;if(e.ranged){const o=this.nearestEnemy(e.range+6),r=this.playerDamage(1);if(o)this.castBolt(o,r.dmg,r.crit,e.id==="bow"?"#e0d8b8":e.id==="scepter"?"#ffe9a0":"#8fd8ef");else{const l=t.clone().add(new L(Math.sin(n)*16,1.2,Math.cos(n)*16));this.castBolt(null,0,!1,"#cfe8f0",null,l)}this.audio.sfx("hit");return}const i=e.range+.6;let a=0;for(const o of this.enemies){if(o.dead)continue;const r=o.mesh.position.x-t.x,l=o.mesh.position.z-t.z;if(Math.hypot(r,l)>i+(o.def.scale||1)*.6)continue;const h=Math.atan2(r,l);let d=Math.abs(h-n);if(d=Math.min(d,Math.PI*2-d),d>1.35)continue;const f=this.playerDamage(1);this.damageEnemy(o,f.dmg,f.crit,"#ffd479"),a++}this.slashEffect(n,e.range,a>0),this.audio.sfx(a>0?"hit":"click")},s.prototype.slashEffect=function(e,t,n){const i=new pi(t*.45,t*.95,24,1,-1.1,2.2),a=new ge(i,new yt({color:n?"#ffd479":"#b8c8d0",transparent:!0,opacity:n?.7:.3,side:Bt,blending:$t,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.rotation.z=-e+Math.PI/2,a.position.copy(this.playerMesh.position).add(new L(0,.9,0)),this.scene.add(a),this.effects.push({mesh:a,life:.26,max:.26,update:(o,r)=>{a.material.opacity=r*.65,a.scale.setScalar(1+(1-r)*.15)}})},s.prototype.castBolt=function(e,t,n,i,a=null,o=null){const r=this.playerMesh.position.clone().add(new L(0,1.35,0)),l=new ge(new dn(.2,7,6),new yt({color:i,transparent:!0,opacity:.95}));l.position.copy(r),this.scene.add(l);const c=e?e.mesh.position.clone().add(new L(0,1.2,0)):o||r.clone().add(new L(0,0,10));this.projectiles.push({mesh:l,target:e,targetPos:c,speed:36,life:2.4,dmg:t,crit:n,color:i,onHit:a})},s.prototype.hitArea=function(e,t,n,i,a="#ffd479",o={}){this.ring(e,this.ground(e,t),t,a,n,.55);let r=0;for(const l of this.enemies){if(l.dead||Math.hypot(l.mesh.position.x-e,l.mesh.position.z-t)>n+(l.def.scale||1)*.4)continue;const h=this.playerDamage(i);this.damageEnemy(l,h.dmg,h.crit,a),o.slow&&(l.slowUntil=this.time+4),o.poison&&(l.poisonUntil=this.time+6,l.poisonDps=Math.max(3,this.state.atk*.18),l.poisonTick=.4),r++}return this.shake=Math.max(this.shake,.15),r},s.prototype.healPct=function(e){if(!this.state)return;const t=Math.round(this.state.maxHp*e);this.state.hp=Math.min(this.state.maxHp,this.state.hp+t),this.floatText(this.playerMesh.position.clone().add(new L(0,2.2,0)),"+"+t,"heal"),this.healEffect()},s.prototype.useSkill=function(e){if(!this.state||!this.playerMesh||this.modalOpen||this.state.hp<=0)return;const t=Pt[this.state.job].skills[e];if(!t)return;const n=this.skillCds[e];if(n.cd>0){this.toast(`${t.name} is not ready (${Math.ceil(n.cd)}s)`);return}if(this.state.mp<t.mp){this.toast("Not enough mana."),this.audio.sfx("click");return}this.state.mp-=t.mp,this.skillCds[e]={cd:t.cd,max:t.cd},this.castAnimT=.45,this.combatT=6;const i=this.playerMesh.position,a=this.nearestEnemy(t.range?t.range:30),o=a?a.mesh.position.x:i.x+Math.sin(this.playerMesh.rotation.y)*9,r=a?a.mesh.position.z:i.z+Math.cos(this.playerMesh.rotation.y)*9,l=this.state.job;switch(this.audio.sfx(l==="swordsman"||l==="assassin"?"skill":"magic"),t.kind){case"aoe":this.hitArea(i.x,i.z,t.radius,t.mult,"#ffd479"),this.shake=.28;break;case"guard":this.guardUntil=this.time+5,this.guardMesh.visible=!0,this.toast("Iron Guard — damage halved for 5s");break;case"storm":this.hitArea(i.x,i.z,t.radius,t.mult,"#ffe0a0"),this.schedule(.18,()=>this.hitArea(i.x,i.z,t.radius,t.mult*.55,"#ffcf6a")),this.schedule(.36,()=>this.hitArea(i.x,i.z,t.radius,t.mult*.35,"#ffb04a")),this.shake=.5;break;case"line":{a?this.castBolt(a,0,!1,"#e8f6ff",()=>{this.damageEnemy(a,this.playerDamage(t.mult).dmg,!1,"#e8f6ff"),this.burst(a.mesh.position.x,a.mesh.position.y+1.2,a.mesh.position.z,"#e8f6ff",1.2)}):this.castBolt(null,0,!1,"#e8f6ff");break}case"rain":{const c=o,h=r;for(let d=0;d<3;d++)this.schedule(.2+d*.38,()=>{this.hitArea(c,h,t.radius,t.mult,"#c8e8ff"),this.burst(c+(Math.random()-.5)*6,this.ground(c,h)+3,h+(Math.random()-.5)*6,"#c8e8ff",1.4)});break}case"mark":a?(this.mark={enemy:a,until:this.time+9},this.ring(a.mesh.position.x,this.ground(a.mesh.position.x,a.mesh.position.z),a.mesh.position.z,"#ffcf6a",3,.9),this.floatText(a.mesh.position.clone().add(new L(0,2.6,0)),"MARKED","crit"),this.toast("Hawk's Mark — target takes 50% more damage")):this.toast("No target in range.");break;case"burst":if(a){const c=a;this.castBolt(c,0,!1,"#ff8a3a",()=>{this.hitArea(c.mesh.position.x,c.mesh.position.z,t.radius,t.mult,"#ff9a4a"),this.burst(c.mesh.position.x,c.mesh.position.y+1,c.mesh.position.z,"#ff8a3a",2)})}else this.hitArea(o,r,t.radius,t.mult,"#ff9a4a");break;case"frost":this.hitArea(i.x,i.z,t.radius,t.mult,"#a8e8ff",{slow:!0}),this.toast("Frost Nova — enemies slowed");break;case"rift":this.hitArea(o,r,t.radius,t.mult,"#c58cff"),this.burst(o,this.ground(o,r)+2,r,"#c58cff",3),this.shake=.4;break;case"poison":this.hitArea(o,r,t.radius,t.mult,"#b6d957",{poison:!0}),this.toast("Toxic Flask — enemies poisoned");break;case"heal":this.healPct(.38);break;case"bomb":this.hitArea(o,r,t.radius,t.mult,"#ffcf6a"),this.burst(o,this.ground(o,r)+1,r,"#ffcf6a",3),this.shake=.4;break;case"blink":if(a){const c=a.mesh.position,h=new L(Math.sin(a.mesh.rotation.y),0,Math.cos(a.mesh.rotation.y)).multiplyScalar(-2.2),d=c.x+h.x,f=c.z+h.z;this.burst(i.x,i.y+1,i.z,"#b48bd8",1.4),this.state.pos.x=d,this.state.pos.z=f,this.playerMesh.position.set(d,this.ground(d,f),f),this.burst(d,this.playerMesh.position.y+1,f,"#b48bd8",1.4),this.damageEnemy(a,this.playerDamage(t.mult).dmg,!1,"#c58cff")}else{const c=i.x+Math.sin(this.playerMesh.rotation.y)*8,h=i.z+Math.cos(this.playerMesh.rotation.y)*8;this.state.pos.x=c,this.state.pos.z=h,this.playerMesh.position.set(c,this.ground(c,h),h)}break;case"single":a?(this.damageEnemy(a,this.playerDamage(t.mult).dmg,!1,"#c58cff"),this.burst(a.mesh.position.x,a.mesh.position.y+1.2,a.mesh.position.z,"#b48bd8",1.4)):this.toast("No target in range.");break;case"execute":{if(!a){this.toast("No target in range.");break}const c=a.hp/a.maxHp<.35;this.damageEnemy(a,this.playerDamage(c?6.2:1.6).dmg,c,"#ff8a9a"),this.floatText(a.mesh.position.clone().add(new L(0,3,0)),c?"EXECUTE":"MARKED","crit");break}case"healSmite":this.healPct(.16),a&&(this.damageEnemy(a,this.playerDamage(t.mult).dmg,!1,"#ffe9a0"),this.holyBeam(a.mesh.position.x,a.mesh.position.z));break;case"sanctuary":this.healPct(.2),this.guardUntil=this.time+4,this.guardMesh.visible=!0,this.ring(i.x,this.ground(i.x,i.z),i.z,"#ffe9a0",6,1);break;case"judgment":this.hitArea(o,r,t.radius,t.mult,"#ffe9a0"),this.holyBeam(o,r),this.shake=.35;break}this.updateHUD(!0),this.save()},s.prototype.holyBeam=function(e,t){const n=this.ground(e,t),i=new ge(new Mn(.7,1.4,14,10,1,!0),new yt({color:"#ffe9a0",transparent:!0,opacity:.4,blending:$t,side:Bt,depthWrite:!1}));i.position.set(e,n+7,t),this.scene.add(i),this.effects.push({mesh:i,life:.55,max:.55,update:(a,o)=>{i.material.opacity=o*.45,i.scale.x=i.scale.z=1+(1-o)*.8}})}}function Cm(s){s.prototype.ensureOffers=function(e){return(!this.state.quests.offers[e]||!this.state.quests.offers[e].length)&&(this.state.quests.offers[e]=this.makeOffers(e)),this.state.quests.offers[e]},s.prototype.makeOffers=function(e){const t=e==="hub"?"verdant":e,n=St[t],i=Go.indexOf(t)+1,a=n.monsters.map(d=>sc[d]).filter(Boolean),o=[...new Set(a.flatMap(d=>d.loot))].map(d=>Vo[d]).filter(Boolean),r=Object.values(Yn).filter(d=>d.zone===t).map(d=>d.name),l=this.world.poi.filter(d=>d.zone===t&&["ruin","shrine","town"].includes(d.type)),c=[];return["hunt","gather",e==="hub"?"explore":"deliver"].forEach((d,f)=>{pl.find(g=>g.kind===d)||pl[0];const p={id:"q"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),kind:d,boardZone:e,zoneKey:t,done:!1,progress:0};if(d==="hunt"){const g=a[Math.min(a.length-1,Math.floor(Math.random()*Math.min(4,a.length)))],m=3+Math.floor(Math.random()*3);p.monsterType=g.id,p.monsterName=g.name,p.need=m,p.title=`Cull the ${g.name}`,p.text=`The roads are unsafe. Slay ${m} ${g.name} and return to any quest board.`}else if(d==="gather"){const g=o[Math.floor(Math.random()*o.length)],m=2+Math.floor(Math.random()*3);p.lootId=g.id,p.lootName=g.name,p.need=m,p.title=`Gather ${g.name}`,p.text=`An alchemist needs ${m} ${g.name}. Bring them back intact.`}else if(d==="deliver"){const g=r.length?r[Math.floor(Math.random()*r.length)]:"Elder Maren";p.npcName=g,p.need=1,p.title=`A Word to ${g}`,p.text=`Carry a sealed letter to ${g} in the ${n.name}. Do not read it.`}else{const g=l.length?l[Math.floor(Math.random()*l.length)]:{name:n.settlement,x:n.center[0],z:n.center[1]};p.poi={x:g.x,z:g.z,name:g.name},p.need=1,p.title=`Eyes on ${g.name}`,p.text=`Scout ${g.name} and report what you find. Do not linger after dark.`}const v=1+(p.need-1)*.18;p.rewardGold=Math.round((55+this.state.level*11+i*38)*v),p.rewardXp=Math.round((35+this.state.level*8+i*22)*v),p.rewardToken=Math.random()<.28?2:1,c.push(p)}),c},s.prototype.acceptQuest=function(e){if(!this.state)return;if(this.state.quests.side.length>=4){this.toast("Your mission log is full (4 active).");return}const t={...e,done:!1,progress:0};t.kind==="gather"&&(t.startCount=this.state.lootCounts[t.lootId]||0),this.state.quests.side.push(t);const n=this.state.quests.offers[t.boardZone]||[];this.state.quests.offers[t.boardZone]=n.filter(i=>i.id!==e.id),this.toast(`Mission accepted — ${t.title}`,"gold"),this.log(`Side mission: ${t.title}`,"gold"),this.audio.sfx("quest"),this.updateQuestUI(),this.save()},s.prototype.abandonQuest=function(e){this.state.quests.side=this.state.quests.side.filter(t=>t.id!==e),this.toast("Mission abandoned."),this.updateQuestUI(),this.save()},s.prototype.noteKill=function(e){for(const t of this.state.quests.side)t.kind==="hunt"&&!t.done&&t.monsterType===e.id&&(t.progress=Math.min(t.need,t.progress+1),t.progress>=t.need&&this.completeQuest(t));this.updateQuestUI()},s.prototype.checkQuests=function(){if(this.state){for(const e of[...this.state.quests.side])if(!e.done){if(e.kind==="gather"){const t=this.state.lootCounts[e.lootId]||0;e.progress=Math.min(e.need,Math.max(0,t-(e.startCount||0)))}e.progress>=e.need&&this.completeQuest(e)}this.updateQuestUI()}},s.prototype.completeQuest=function(e){e.done||(e.done=!0,e.progress=e.need,this.state.quests.side=this.state.quests.side.filter(t=>t.id!==e.id),this.state.quests.completed.push({title:e.title,kind:e.kind,zone:e.zoneKey,id:e.id}),this.state.sideCompleted++,this.state.tokens+=e.rewardToken,this.gainGold(e.rewardGold),this.gainXp(e.rewardXp),this.state.quests.offers[e.boardZone]=null,this.toast(`Mission complete — ${e.title}`,"gold"),this.toast(`+${e.rewardGold} gold · +${e.rewardToken} gacha token`,"gold"),this.log(`Mission complete: ${e.title} (+${e.rewardToken} token)`,"good"),this.audio.sfx("level"),this.updateQuestUI(),this.updateHUD(!0),this.save())},s.prototype.updateQuestUI=function(){if(!this.state)return;const e=this.getMainInfo();document.getElementById("main-quest-title").textContent=e.title,document.getElementById("main-quest-obj").textContent=e.objective;const t=document.getElementById("side-quest-list"),n=this.state.quests.side.filter(i=>!i.done).slice(0,3);t.innerHTML=n.map(i=>{const a=i.kind==="hunt"||i.kind==="gather"?` ${i.progress}/${i.need}`:i.kind==="deliver"?" — speak to them":" — scout the site";return`<div class="side-quest-item"><i></i><span><b>${i.title}</b>${a}</span></div>`}).join("")}}const Pm={verdant:"saelis",ember:"ignis",frost:"yrsa",umbra:"morthos"},Im={saelis:{lore:"Before the wards, the vale was a single green thought. The first Warden — my grandmother — cut her palm and planted the sigil in the roots of the eldest tree. The tree is gone. The roots remember.",oath:"Then stand where she stood. The green does not ask for strength; it asks for patience. If the Heart wakes hungry, we will be the roots that hold it.",greed:"Power? The Heart does not give power. It gives a choice, and the choice is always heavier than it looks. The last man who wanted it is now the reason the mire is full of names.",taken:"The Verdant Sigil is yours. It smells of rain and old bark. Take it to the Sundered Throne, and do not let the Sovereign speak your name.",hint:"The Order runs Verdant, Ember, Frost, Umbral. Ignis will try to test you. Let him."},ignis:{lore:"We burned the second ward ourselves. The Heart had begun to dream, and its dreams set the mountain alight. I was the one who lit the pyre. I have not slept without ash in my mouth since.",oath:"You would carry that with me? Then take the Ember Sigil. It will keep you warm in the deep places, and it will remind you what warmth costs.",greed:"The Heart is not a throne. It is a furnace with no door. Sit on it if you like. I will keep your ashes in a nice jar.",taken:"Take the Ember Sigil. Do not open it near anything you love.",hint:"Yrsa is next. She has been asleep for a hundred years and is still the most awake of us."},yrsa:{lore:"Frost is not absence. Frost is memory that has learned to be still. When the third ward broke, I kept every name inside the ice so the mire could not eat them. Sometimes I hear them. Mostly I hear my own.",oath:"An oath made in winter is the only kind that lasts. I will stand with you, stranger, if you can bear the cold that follows.",greed:"You want the Heart? Look at my hands. I held it once, for one breath. I am still cold. The cold is not the price; the cold is the receipt.",taken:"The Frost Sigil. It will not melt. Neither will what you promise today.",hint:"Morthos is last. Do not mistake his courtesy for kindness. The mire taught him both."},morthos:{lore:"The fourth ward was not broken. I gave it away. A voice in the mire promised me my sister back. It kept its promise — she came home for one evening, and she was never alive. The Sovereign has been wearing her face ever since.",oath:"You would bind yourself to that? Then take the Umbral Sigil. It is the only honest one of the four. It never pretends to be light.",greed:"The Heart will make you a king. It will also make you a door. Doors do not get to choose who walks through.",taken:"The Umbral Sigil is yours. When the Sovereign speaks, remember: it is not your sister. It is not anyone.",hint:"The Throne is east, beyond the sunken court. Bring every sigil, and bring a better reason than power."}},Lm={orla:{intro:'Orla sits among the roots with a lap full of unsent letters. "Every traveler asks the same three questions. I only answer the interesting ones."',branches:[{label:"What is the Aetherheart, truly?",text:'"A heart that remembers every promise made over it. Four wardens promised to keep it asleep. Promises rot, dear. Ask each of them what theirs cost — especially the ones who smile."'},{label:"Tell me about the endings.",text:'"Stories end in five ways, child: quietly, greedily, kindly, sadly, or truthfully. The last one requires you to have listened. Listen to all four wardens, and do a little good along the way. The world will show you the hidden door."'}],hint:"Ask each warden what truly happened. Choose the question over the oath. Do three kind errands. Then return to Maren."},ash:{intro:`The Chronicler turns a page of ash with one blackened finger. "I wrote the Sovereign's first name once. Would you like to hear what it cost me to forget it?"`,branches:[{label:"Who was the Sovereign before?",text:'"A hero, naturally. The Heart loves heroes best. He came to the Throne to seal it and stayed to own it. On the seventh day he stopped using his own name. On the eighth, the mire started using it for him."'},{label:"How do I kill something that is already dead?",text:'"You do not. You remind it that it is dead. The Heart is not his. It never was. Strike the crown, not the man. There may be a man left under it. There may not. Either way, finish it."'}],hint:"The mire keeps secrets in threes. Listen, act, and speak the true name at the last."},maiden:{intro:'A figure of pale blue stands barefoot in the snow. She has been there for the length of a long conversation, and will be there after. "You have the look of someone carrying a broken promise."',branches:[{label:"Are you a ghost?",text:'"A memory. Or a warning. The ice keeps what fire cannot. Ask me the name the wardens swallowed."'},{label:"What name do the wardens not speak?",text:'"AETHERFALL. Not the place. The promise. The world was never abandoned; it was left a door and told to forget the knock. If you listen to all four, you may remember it. If you remind them, they may open it."'}],hint:"The name is not a weapon. It is a door. Only speak it if you have listened more than you have conquered."},oracle:{intro:'The Mire Oracle does not turn. "You are late," she says, to a question you have not asked. "The Heart has been counting your choices since the road."',branches:[{label:"What choices have I made?",text:'"You listened, or you swore, or you hungered. Each left a mark on the sigils. The sigils talk to the Heart. The Heart is a poor judge of character and an excellent judge of appetite."'},{label:"How do I reach the fifth ending?",text:'"Four ears, three good deeds, one name. Ask all four wardens what actually happened. The rest is whether you are the kind of person who can hear an answer."'}],hint:"Four wardens asked for lore. Three side missions completed. The name beneath the world will be offered only once."}},Dm={text:'They regard you for a moment, then return to their work. "Roads are long. Keep your coin close and your questions closer."'};function Um(s){s.prototype.buildDialogue=function(e){const t=e.id,n=e.def;return t==="lyra"?this.dialogueLyra():["saelis","ignis","yrsa","morthos"].includes(t)?this.dialogueWarden(t):["orla","ash","maiden","oracle"].includes(t)?this.dialogueStoryteller(t):t==="elder"?this.dialogueElder():{speaker:n.name,role:n.role,color:n.color,start:"start",nodes:{start:{text:Dm.text}}}},s.prototype.dialogueWarden=function(e){const t=Yn[e],n=t.warden,i=Im[e];if(this.state.sigils.includes(n))return{speaker:t.name,role:t.role,color:t.color,start:"start",nodes:{start:{text:`"The ${St[n].name} sigil is already yours. Keep it close, and keep your questions closer." ${i.hint}`,choices:[{label:"Take my leave.",next:null}]}}};const o=`gold:${120+this.state.level*8}`;return{speaker:t.name,role:t.role,color:t.color,start:"start",nodes:{start:{text:`"${i.hint}" They do not offer a hand. "Before the sigil, tell me what you came for."`,choices:[{label:"[Listen] What truly happened here?",next:"lore",effects:["insight"],className:""},{label:"[Oath] I will carry this burden beside you.",next:"oath",effects:["unity"]},{label:"[Ambition] What will the Heart give me?",next:"greed",effects:["greed"],className:"danger"}]},lore:{text:`"${i.lore}"`,choices:[{label:"Take the sigil, and your story with it.",next:"taken",effects:["sigil:"+n,o,"xp:220"]}]},oath:{text:`"${i.oath}"`,choices:[{label:"Take the sigil.",next:"taken",effects:["sigil:"+n,o,"xp:220"]}]},greed:{text:`"${i.greed}"`,choices:[{label:"Take the sigil anyway.",next:"taken",effects:["sigil:"+n,o,"xp:220"]}]},taken:{text:`"${i.taken}" The sigil burns softly in your palm. ${this.state.sigils.length+1>=4?"All four now sing to each other. The Sundered Throne is waiting.":`The other wardens will feel this. ${i.hint}`}`,choices:[{label:"I will not fail.",next:null}]}}}},s.prototype.dialogueStoryteller=function(e){const t=Yn[e],n=Lm[e],i={start:{text:n.intro,choices:[{label:n.branches[0].label,next:"b1"},{label:n.branches[1].label,next:"b2"},{label:"[Insight] Ask what the wardens hide.",next:"hint"},{label:"Farewell.",next:null}]},b1:{text:n.branches[0].text,choices:[{label:"Ask something else.",next:"start"},{label:"Thank you.",next:"reward"}]},b2:{text:n.branches[1].text,choices:[{label:"Ask something else.",next:"start"},{label:"I will remember.",next:"reward"}]},hint:{text:`"${n.hint}"`,choices:[{label:"I understand.",next:"reward"}]},reward:{text:'"Take this. The road pays in strange coin." They press a warm token into your hand.',choices:[{label:"Thank them.",next:null,effects:["storyReward:"+e]}]}};return{speaker:t.name,role:t.role,color:t.color,start:"start",nodes:i}},s.prototype.dialogueLyra=function(){const e=Yn.lyra,t=this.state.tokens;return{speaker:e.name,role:e.role,color:e.color,start:"start",nodes:{start:{text:`"The Astral Loom is patient, but it is not free." Lyra nods at the tokens in your purse: ${t}. "Every token is a side mission someone else was too afraid to finish."`,choices:[{label:"Show me the Loom.",next:null,effects:["openGacha"]},{label:"How do I earn tokens?",next:"how"},{label:"Farewell.",next:null}]},how:{text:'"Side missions. The boards in every settlement pay in tokens — never merchants. One token, one thread of the Loom. Ten threads, ten chances. The Loom remembers what you already own, and pays gold for repeats."',choices:[{label:"Open the Loom.",next:null,effects:["openGacha"]},{label:"Later.",next:null}]}}}},s.prototype.dialogueElder=function(){const e=Yn.elder,t=this.state,n=t.sigils.length,i=t.flags.insight>=4&&t.sideCompleted>=3;if(!t.tutorial.done){if(t.tutorial.step<5){const a=["Take a few steps, child. The ground has missed you.","Turn your eyes across the vale. The world is not going anywhere.","A copper blade and a copper heart — a beginning. Look in your bag.","Strike something. The slimes near the plaza are forgiving.","Two slimes, then come back. Consider it a conversation with the vale."];return{speaker:e.name,role:e.role,color:e.color,start:"start",nodes:{start:{text:`"${a[t.tutorial.step]||a[0]}"`,choices:[{label:"I will return.",next:null}]}}}}return{speaker:e.name,role:e.role,color:e.color,start:"start",nodes:{start:{text:'Elder Maren studies the slime on your boots, then your face. "Good. The vale has been waiting for someone with the decency to get dirty." She sets down a cracked cup. "Before I ask you for anything, tell me: why did you come?"',choices:[{label:"To protect what remains.",next:"protect",effects:["unity"]},{label:"To learn the truth.",next:"truth",effects:["insight"]},{label:"For power.",next:"power",effects:["greed"],className:"danger"}]},protect:{text:'"Then you are already better than the last three who came here with swords." She smiles, tired. "There are four wards. Four sigils. The Heart beneath the world is waking, and the wardens cannot hold it alone."',choices:[{label:"Tell me what to do.",next:"summons",effects:["completeTutorial"]}]},truth:{text:'"The truth is a heavy thing, and I have carried it longer than I should." She presses a token into your hand. "The four wards are failing. Their wardens know why. Ask them what truly happened — not what they were told to say."',choices:[{label:"I will ask.",next:"summons",effects:["completeTutorial"]}]},power:{text:'"I thought you might say that." She does not look disappointed; only old. "Power is a door, child. The Heart is very good at being a door. Go and see what it costs before you decide whose hand turns the key."',choices:[{label:"I will see for myself.",next:"summons",effects:["completeTutorial"]}]},summons:{text:'"Saelis in the green vale. Ignis in the cinders. Yrsa under the frost. Morthos in the mire." She marks each name on a scrap of map. "Bring me their four sigils, and we will decide the fate of the Heart. Take this token. The Loom may amuse you between errands."',choices:[{label:"I will return with the sigils.",next:null}]}}}}return t.flags.bossDefeated&&!t.flags.endingChosen?{speaker:e.name,role:"Keeper of the Chronicle",color:e.color,start:"start",nodes:{start:{text:'You place the four sigils on the fountain rim. They cast no shadow. Elder Maren looks older than the stone. "The Heart is awake, and it is asking. Whatever you choose now will be the last page of this chronicle — and the first of the next."',choices:[{label:"[Restore] Set the sigils and wake the sixth ward.",next:"restore"},{label:"[Claim] Take the Heart into yourself.",next:"claim",className:"danger"},{label:"[Bind] Tie the Heart to your own life and stay.",next:"bind"},{label:i?"[Secret] Speak the name beneath the world: AETHERFALL.":"[Locked] Speak the name beneath the world.",next:i?"secret":"locked",className:"secret"},{label:"[Seal] Seal it quietly and walk away.",next:"seal"}]},restore:{text:'"The wardens will kneel. The Heart will remember what it was before it was afraid." Maren lifts her cup as if to a toast she will not drink. "Say it with me, then."',choices:[{label:"Restore the Aetherheart.",next:null,effects:["ending:restore"]}]},claim:{text:'The fountain water turns to gold. Maren does not stop you. "Doors do not choose their keepers," she says softly. "But they do remember them."',choices:[{label:"Take it. All of it.",next:null,effects:["ending:bad"]}]},bind:{text:'"You understand what binding means? You will not leave. The valley will grow old around you, and you will still be its keeper. There is no song for that." She looks at you for a long moment. "There should be."',choices:[{label:"Then I will be the quiet verse.",next:null,effects:["ending:bittersweet"]}]},secret:{text:`You say the name. The fountain stops mid-flow. Every window in Wayfarer's Rest lights at once — not with fire, but with remembering. "AETHERFALL," Maren breathes. "We were never keeping it asleep. We were keeping it secret."`,choices:[{label:"Open the door. Let the world remember.",next:null,effects:["ending:secret"]}]},locked:{text:"The word is there, just behind your teeth, but it is only a word. You have not listened enough to know what it means. Four wardens asked about their history; three good deeds done. The name will wait.",choices:[{label:"Then I will listen more.",next:null}]},seal:{text:'"A quiet seal. The world will not know your name, and that is its own kind of mercy." She takes the sigils from the rim, one by one, and the fountain resumes as if nothing happened.',choices:[{label:"Seal it.",next:null,effects:["ending:normal"]}]}}}:n>=4?{speaker:e.name,role:"Keeper of the Chronicle",color:e.color,start:"start",nodes:{start:{text:`"All four sigils. I can hear them from here." Maren's hand tightens around her cup. "The Sovereign knows you are coming. He has been waiting a long time to be forgiven — or to be finished. Go to the Sundered Throne, south-east in the mire. Do not let him speak your name."`,choices:[{label:"I will end it.",next:null}]}}}:t.flags.endingChosen?{speaker:e.name,role:"Keeper of the Chronicle",color:e.color,start:"start",nodes:{start:{text:'"The world is still here. That is no small thing." She refills your cup with something that smells of rain. "Stay as long as you like. There are still roads, and the Loom still turns, and the wardens still argue about who was right."',choices:[{label:"I will wander a while longer.",next:null}]}}}:{speaker:e.name,role:"Keeper of the Chronicle",color:e.color,start:"start",nodes:{start:{text:`"${n}/4 sigils. ${n===0?"Start in the north-west vale. Saelis keeps the first ward.":"The next warden is waiting. Follow the sigils; they know the way."}"`,choices:[{label:"Where should I go next?",next:"hint2"},{label:"What happens when all four are gathered?",next:"endings"},{label:"Farewell.",next:null}]},hint2:{text:(()=>{const a=["verdant","ember","frost","umbra"].find(o=>!t.sigils.includes(o));return a?`"${Yn[Pm[a]].name} at ${St[a].settlement}. The sigils are bound in old order, but grief does not care about order. Go."`:'"The Throne. There is nothing else."'})(),choices:[{label:"I understand.",next:null}]},endings:{text:'"When all four are gathered, the Heart will offer you a choice. Restore, claim, bind, seal — or, if you have listened more than you have fought, the old name. There are five endings, child. Only one of them is kind. Only one of them is true."',choices:[{label:"Which is which?",next:"secretHint"},{label:"I will decide when I stand there.",next:null}]},secretHint:{text:'"Kindness is not the same as truth, and truth is not the same as kindness. But the hidden door only opens for someone who asked the wardens what their oaths cost, and did a little good without being paid to."',choices:[{label:"Then I will listen.",next:null}]}}}}}function Nm(s){s.prototype.openModal=function(e,t={}){const n=he("modal-root");this.modalOpen=!0,this.modalOpts=t,n.innerHTML=`<div class="modal-backdrop"><div class="modal ${t.className||""}" style="${t.style||""}">${e}</div></div>`;const i=n.querySelector(".modal-backdrop");return t.dismiss!==!1&&i.addEventListener("click",a=>{a.target===i&&this.closeModal()}),n.querySelectorAll(".js-close").forEach(a=>a.addEventListener("click",()=>this.closeModal())),this.audio.sfx("open"),n.querySelector(".modal")},s.prototype.closeModal=function(){if(!this.modalOpen)return;he("modal-root").innerHTML="",this.modalOpen=!1;const e=this.onModalClose;this.onModalClose=null,e&&e()},s.prototype.modalHead=function(e,t="",n=!0){return`<div class="modal-head"><div><h3 class="modal-title">${e}</h3>${t?`<p class="modal-sub">${t}</p>`:""}</div>${n?'<button class="modal-close js-close">×</button>':""}</div>`},s.prototype.openInventory=function(e=this.invTab||"gear"){this.invTab=e,this.selectedInv=-1,this.openModal(this.modalHead("Satchel & Regalia","Your gear, your trinkets, and the tally of a life on the road.")+'<div class="modal-body" id="inv-body"></div>'),this.renderInventory()},s.prototype.renderInventory=function(){const e=this.state,t=Pt[e.job],n=he("inv-body");if(!n)return;const i=`<div class="tab-row">
      <button class="tab ${this.invTab==="gear"?"active":""}" data-tab="gear">Equipment</button>
      <button class="tab ${this.invTab==="cosmetics"?"active":""}" data-tab="cosmetics">Cosmetics (${e.cosmetics.owned.length}/${zi.length})</button>
    </div>`;if(this.invTab==="cosmetics"){n.innerHTML=i+this.cosmeticsHTML(),this.bindInventoryEvents();return}const a=(r,l,c)=>{const h=r?zt[r.rarity]:null;return`<button class="equip-slot" data-unequip="${c}" style="--ec:${h?h.color:"rgba(255,255,255,.1)"}">
        <span class="es-icon">${r?r.icon:"·"}</span>
        <span><span class="es-label">${l}</span><span class="es-name">${r?r.name:"Empty"}</span></span>
      </button>`},o=10+(e.job==="assassin"?13:0)+"%";n.innerHTML=i+`<div class="inv-layout">
      <div class="equip-col">
        <div class="paper-doll"><div class="pd-icon">${t.icon}</div><div class="pd-name">${e.name}</div><div class="pd-sub">${t.name} · Level ${e.level}</div></div>
        ${a(e.weapon,"Weapon","weapon")}
        ${a(e.armor,"Armor","armor")}
        <div class="stat-list">
          <div><span>Attack</span><b>${e.atk}</b></div>
          <div><span>Defense</span><b>${e.def}</b></div>
          <div><span>Health</span><b>${Math.ceil(e.hp)}/${e.maxHp}</b></div>
          <div><span>Mana</span><b>${Math.ceil(e.mp)}/${e.maxMp}</b></div>
          <div><span>Crit</span><b>${o}</b></div>
          <div><span>Speed</span><b>${t.speed}</b></div>
          <div><span>Gold</span><b>${e.gold}</b></div>
          <div><span>Tokens</span><b>${e.tokens}</b></div>
          <div><span>Kills</span><b>${e.kills}</b></div>
          <div><span>Missions</span><b>${e.sideCompleted}</b></div>
        </div>
      </div>
      <div class="inv-main">
        <div class="inv-toolbar"><span>${e.inventory.length} item(s) · ${e.inventory.reduce((r,l)=>r+(l.qty||1),0)} total</span><span>Select an item to equip or use</span></div>
        <div class="item-grid">${e.inventory.length?e.inventory.map((r,l)=>this.invCard(r,l)).join(""):'<div class="empty-note">Your satchel is empty. Monsters, merchants, and missions will change that.</div>'}</div>
        <div id="inv-detail">${this.invDetailHTML()}</div>
      </div>
    </div>`,this.bindInventoryEvents()},s.prototype.invCard=function(e,t){const n=e.rarity?zt[e.rarity]:null,i=n?n.color:e.kind==="potion"?"#9fe0a0":"#8a9aa8";return`<button class="item-card ${this.state.weapon?.id===e.id&&e.kind==="weapon"||this.state.armor?.id===e.id&&e.kind==="armor"?"equipped":""}" data-inv="${t}" style="--rc:${i}">
      <span class="irar"></span><span class="ii">${e.icon||"◆"}</span>
      <span class="in">${e.name}</span>${(e.qty||1)>1?`<span class="iq">×${e.qty}</span>`:""}
    </button>`},s.prototype.invDetailHTML=function(){const e=this.state.inventory[this.selectedInv];if(!e)return`<div class="item-detail"><div class="id-icon">✦</div><div class="id-body"><div class="id-name" style="color:var(--gold)">A traveler's satchel</div><div class="id-desc">Weapons and armor can be equipped. Potions are used. Loot sells at any vendor. Gacha tokens are spent at the Astral Loom.</div></div></div>`;const t=e.rarity?zt[e.rarity]:null,n=t?t.color:e.kind==="potion"?"#9fe0a0":"#8a9aa8";let i="";return e.kind==="weapon"||e.kind==="armor"?i='<button class="mini-btn" data-action="equip">Equip</button>':e.kind==="potion"?i='<button class="mini-btn" data-action="use">Use</button>':i=`<span class="muted" style="font-size:8px">Sell at a vendor · ${e.value} gold</span>`,`<div class="item-detail" style="--rc:${n}">
      <div class="id-icon" style="color:${n}">${e.icon||"◆"}</div>
      <div class="id-body"><div class="id-name">${e.name}${(e.qty||1)>1?` ×${e.qty}`:""}</div><div class="id-desc">${e.desc||""}${e.value?` · Value ${e.value}g`:""}</div></div>
      <div class="id-actions">${i}</div></div>`},s.prototype.bindInventoryEvents=function(){const e=he("inv-body");e&&(e.querySelectorAll("[data-tab]").forEach(t=>t.addEventListener("click",()=>{this.invTab=t.dataset.tab,this.selectedInv=-1,this.renderInventory()})),e.querySelectorAll("[data-inv]").forEach(t=>t.addEventListener("click",()=>{this.selectedInv=Number(t.dataset.inv),this.renderInventory()})),e.querySelectorAll("[data-action]").forEach(t=>t.addEventListener("click",()=>{t.dataset.action==="equip"?this.equipSelected():this.useSelectedPotion()})),e.querySelectorAll("[data-unequip]").forEach(t=>t.addEventListener("click",()=>this.unequip(t.dataset.unequip))),e.querySelectorAll("[data-cos]").forEach(t=>t.addEventListener("click",()=>this.toggleCosmetic(t.dataset.cos))))},s.prototype.equipSelected=function(){const e=this.state.inventory,t=e[this.selectedInv];if(t){if(t.kind==="weapon"){const n=this.state.weapon;this.state.weapon=t,e.splice(this.selectedInv,1),n&&e.push(n),this.selectedInv=-1,this.recalcStats(),this.refreshAppearance(),this.updateHUD(!0),this.save(),this.toast(`${t.name} equipped`,"rarity"),this.audio.sfx("loot"),this.renderInventory()}else if(t.kind==="armor"){const n=this.state.armor;this.state.armor=t,e.splice(this.selectedInv,1),n&&e.push(n),this.selectedInv=-1,this.recalcStats(),this.refreshAppearance(),this.updateHUD(!0),this.save(),this.toast(`${t.name} equipped`,"rarity"),this.audio.sfx("loot"),this.renderInventory()}}},s.prototype.unequip=function(e){const t=e==="weapon"?this.state.weapon:this.state.armor;if(t){if(this.state.inventory.length>40){this.toast("Satchel is full.");return}this.state.inventory.push(t),e==="weapon"?this.state.weapon=null:this.state.armor=null,this.recalcStats(),this.refreshAppearance(),this.updateHUD(!0),this.toast(`${t.name} stowed.`,""),this.renderInventory(),this.save()}},s.prototype.useSelectedPotion=function(){const e=this.state.inventory[this.selectedInv];if(!(!e||e.kind!=="potion")){if(e.heal){if(this.state.hp>=this.state.maxHp){this.toast("Health is already full.");return}const t=Math.round(this.state.maxHp*e.heal);this.state.hp=Math.min(this.state.maxHp,this.state.hp+t),this.healEffect(),this.audio.sfx("heal"),this.toast(`Recovered ${t} health.`,"")}else e.mana&&(this.state.mp=Math.min(this.state.maxMp,this.state.mp+Math.round(this.state.maxMp*e.mana)),this.audio.sfx("heal"));e.qty=(e.qty||1)-1,e.qty<=0&&(this.state.inventory.splice(this.selectedInv,1),this.selectedInv=-1),this.updateHUD(!0),this.renderInventory(),this.save()}},s.prototype.cosmeticsHTML=function(){const e=new Set(this.state.cosmetics.owned),t=this.state.cosmetics.equipped;return`<div class="inv-toolbar" style="margin-bottom:10px"><span>${e.size} of ${zi.length} unlocked</span><span>Equip from the Astral Loom</span></div>
    <div class="cos-grid">${zi.map(n=>{const i=zt[n.rarity],a=e.has(n.id),o=t[n.slot]===n.id;return`<button class="cos-card ${o?"equipped":""} ${a?"":"locked"}" ${a?`data-cos="${n.id}"`:""} style="--rc:${i.color}">
        <span class="cc-icon" style="color:${a?i.color:"#666"}">${yl[n.slot]}</span>
        <span class="cc-name">${a?n.name:"??? — Loom only"}</span>
        <span class="cc-slot">${fl[n.slot]} · ${i.name}</span>
        ${o?'<span class="gc-new" style="position:static">EQUIPPED</span>':""}
      </button>`}).join("")}</div>`},s.prototype.toggleCosmetic=function(e){const t=cs[e];t&&this.state.cosmetics.owned.includes(e)&&(this.state.cosmetics.equipped[t.slot]===e?delete this.state.cosmetics.equipped[t.slot]:this.state.cosmetics.equipped[t.slot]=e,this.refreshAppearance(),this.toast(this.state.cosmetics.equipped[t.slot]===e?`${t.name} equipped`:`${t.name} removed`,"rarity"),this.audio.sfx("loot"),this.renderInventory(),this.save())},s.prototype.showDialogue=function(e,t){this.dlg={tree:e,npc:t};const n=(e.speaker||"?").replace(/^The\s+/i,"").charAt(0);this.openModal(`<div style="position:relative">
      <button class="modal-close js-close" style="position:absolute;right:14px;top:14px;z-index:2">×</button>
      <div class="dlg-body">
        <div class="dlg-portrait" style="--pc:${e.color}"><span class="dp-face">${n}</span><span class="dp-role">${e.role||""}</span></div>
        <div class="dlg-main"><div class="dlg-name">${e.speaker}<em>${e.role||""}</em></div><div class="dlg-text" id="dlg-text"></div></div>
      </div>
      <div class="dlg-choices" id="dlg-choices"></div>
    </div>`,{className:"dialogue"}),this.goDialogueNode(e.start)},s.prototype.goDialogueNode=function(e){if(!this.dlg)return;const t=this.dlg.tree.nodes[e];if(!t){this.closeModal();return}this.dlg.nodeId=e;const n=he("dlg-text");n&&(n.innerHTML=t.text);const i=he("dlg-choices");if(!i)return;i.innerHTML="";const a=t.choices||[];if(a.length)a.forEach((o,r)=>{const l=document.createElement("button");l.className="dlg-choice "+(o.className||""),l.innerHTML=`<span class="num">${r+1}</span><span>${o.label}</span>`,l.addEventListener("click",()=>{this.audio.sfx("click"),!(o.effects&&this.runEffects(o.effects))&&(o.next?this.goDialogueNode(o.next):this.closeModal())}),i.appendChild(l)});else if(t.next){const o=document.createElement("button");o.className="dlg-choice",o.innerHTML='<span class="num">›</span><span>Continue</span>',o.addEventListener("click",()=>this.goDialogueNode(t.next)),i.appendChild(o)}else{const o=document.createElement("button");o.className="dlg-choice",o.innerHTML='<span class="num">›</span><span>Farewell.</span>',o.addEventListener("click",()=>this.closeModal()),i.appendChild(o)}i.scrollTop=0},s.prototype.runEffects=function(e){let t=!1;for(const n of Array.isArray(e)?e:[e]){const[i,...a]=n.split(":"),o=a.join(":");switch(i){case"unity":this.state.flags.unity++;break;case"insight":this.state.flags.insight++;break;case"greed":this.state.flags.greed++;break;case"gold":this.gainGold(Number(o),!0),this.audio.sfx("coin");break;case"xp":this.gainXp(Number(o));break;case"tokens":this.state.tokens+=Number(o),this.toast(`+${o} Gacha Token`,"gold");break;case"heal":this.healPct(.3);break;case"completeTutorial":this.completeTutorial();break;case"sigil":{if(!this.state.sigils.includes(o)){this.state.sigils.push(o),this.state.stage=this.state.sigils.length>=4?5:1;const r=St[o];this.toast(`${r.name} Sigil recovered (${this.state.sigils.length}/4)`,"gold"),this.log(`Sigil of ${r.name} recovered.`,"gold"),this.audio.sfx("legendary"),this.ring(this.playerMesh.position.x,this.playerMesh.position.y,this.playerMesh.position.z,"#ffd479",4,1.2),this.state.sigils.length>=4&&(this.toast("All four sigils resonate — seek the Sundered Throne.","gold"),this.log("The four sigils sing. The Sundered Throne awaits.","gold"))}this.updateQuestUI(),this.updateHUD(!0),this.save();break}case"storyReward":{const r="rewarded_"+o;this.state.flags[r]||(this.state.flags[r]=!0,this.state.tokens+=1,this.gainGold(45,!0),this.gainXp(90),this.toast("Storyteller reward — 1 Gacha Token","gold"),this.audio.sfx("level"),this.save());break}case"openGacha":this.closeModal(),this._endChain=!0,setTimeout(()=>this.openGacha(),180),t=!0;break;case"ending":this.closeModal(),t=!0,this.triggerEnding(o);break}}return t},s.prototype.triggerEnding=function(e,t=!1){let n=e;e==="restore"&&(n=this.state.flags.unity>=2?"happy":"normal"),Ya[n]&&(this.state.endings.includes(n)||this.state.endings.push(n),this.state.flags.endingChosen=!0,this.state.stage=7,this.state.flags["ending_"+n]=!0,this.audio.sfx(n==="secret"||n==="happy"?"legendary":"death"),this.save(),this.updateQuestUI(),setTimeout(()=>this.showEnding(n),260))},s.prototype.showEnding=function(e){const t=Ya[e],n=this.state;this.openModal(`<div class="ending-body">
      <div class="ending-icon">${t.icon}</div>
      <div class="ending-kicker">${n.endings.length>=5?"All endings remembered":"An ending written"} · ${t.name}</div>
      <h2 class="ending-title">${t.name}</h2>
      <p class="ending-text">${t.text}</p>
      <div class="ending-stats">
        <div><b>${n.level}</b><span>Level</span></div>
        <div><b>${n.kills}</b><span>Foes</span></div>
        <div><b>${n.sideCompleted}</b><span>Missions</span></div>
        <div><b>${n.endings.length}/5</b><span>Endings</span></div>
        <div><b>${Math.floor(n.playtime/60)}m</b><span>Time</span></div>
      </div>
      <div class="ending-actions">
        <button class="btn btn-primary js-end-continue">Continue Exploring</button>
        <button class="btn btn-ghost js-end-chronicle">Open Chronicle</button>
      </div>
    </div>`,{className:"ending-modal",style:`--endcol:${t.color}`,dismiss:!1}),document.querySelectorAll(".js-end-continue").forEach(i=>i.addEventListener("click",()=>{this.closeModal(),this.toast("The world remains open.","gold")})),document.querySelectorAll(".js-end-chronicle").forEach(i=>i.addEventListener("click",()=>{this.closeModal(),this.openJournal()}))},s.prototype.openJournal=function(){const e=this.state,t=this.getMainInfo(),n=e.quests.side,i=e.quests.completed.slice(-6).reverse();this.openModal(this.modalHead("The Chronicle","Quests, endings, and everything the world has told you.")+`<div class="modal-body"><div class="journal-grid">
        <div>
          <div class="section-title">Main Quest</div>
          <div class="quest-card"><h4>${t.title}</h4><p>${t.objective}</p>
            <div class="quest-meta"><span>Sigils <b>${e.sigils.length}/4</b></span><span>Side missions <b>${e.sideCompleted}</b></span><span>Endings <b>${e.endings.length}/5</b></span></div>
          </div>
          <div class="section-title">Active Missions</div>
          ${n.length?n.map(a=>`<div class="quest-card"><h4>${a.title}</h4><p>${a.text}</p>
            <div class="quest-progress"><i style="width:${Un(a.progress/a.need*100,0,100)}%"></i></div>
            <div class="quest-meta"><span>${a.kind==="hunt"||a.kind==="gather"?`${a.progress}/${a.need}`:a.kind==="deliver"?"Speak to them":"Scout the site"}</span><span>Reward <b>${a.rewardGold}g</b> · <b>${a.rewardToken} token</b></span></div>
          </div>`).join(""):'<div class="empty-note">No side missions accepted. Every settlement has a board.</div>'}
          ${i.length?'<div class="section-title" style="margin-top:14px">Completed</div>'+i.map(a=>`<div class="quest-card done"><h4>${a.title}</h4><p>Complete.</p></div>`).join(""):""}
        </div>
        <div>
          <div class="section-title">The Five Endings</div>
          ${rs.map(()=>"").join("")}
          ${Object.values(Ya).map(a=>{const o=e.endings.includes(a.id);return`<div class="ending-mini ${o?"unlocked":"locked"}" style="--ec:${a.color}">
              <span class="em-icon">${a.icon}</span>
              <span>${o?a.name:"Unwritten Ending"}<em>${o?"Recorded in the Chronicle":a.id==="secret"?"Ask all four wardens what happened. Complete 3 missions. Listen.":"A choice yet to be made"}</em></span>
            </div>`}).join("")}
          <div class="section-title" style="margin-top:14px">Lore Remembered</div>
          <div class="lore-list">
            ${e.flags.insight>=1?'<div class="lore-item">The four wards were planted to keep the Aetherheart asleep — not to protect it.</div>':""}
            ${e.flags.unity>=1?'<div class="lore-item">The wardens can be swayed by an oath freely given.</div>':""}
            ${e.flags.insight>=4?'<div class="lore-item">The Heart is a door. The wardens were keeping its name secret, not its power.</div>':""}
            ${e.endings.includes("secret")?'<div class="lore-item">The true name is AETHERFALL. The world has begun to remember it.</div>':""}
            ${e.flags.insight?"":'<div class="lore-item">The wardens know more than they say. Ask them what truly happened.</div>'}
            <div class="lore-item">Gacha tokens come only from side missions and storytellers. The Loom remembers duplicates.</div>
          </div>
          <div class="section-title" style="margin-top:14px">Traveler's Tally</div>
          <div class="stat-list">
            <div><span>Foes slain</span><b>${e.kills}</b></div>
            <div><span>Missions</span><b>${e.sideCompleted}</b></div>
            <div><span>Distance</span><b>${(e.stats.distance/1e3).toFixed(1)} km</b></div>
            <div><span>Gold earned</span><b>${e.stats.goldEarned}</b></div>
          </div>
        </div>
      </div></div>`)},s.prototype.openHelp=function(){const e=[["Move","W A S D / Arrows"],["Attack","J / Click"],["Skills","1 · 2 · 3"],["Interact","E"],["Jump","Space"],["Potion","H"],["Inventory","I"],["Journal","Q"],["World Map","M"],["Astral Loom","G"],["Rotate camera","Drag"],["Zoom","Scroll"]];this.openModal(this.modalHead("How to Play","A field guide to Aetherfall.")+`<div class="modal-body">
      <div class="help-grid">
        <div class="help-card"><h4>Controls</h4>${e.map(([t,n])=>`<div class="key-row"><span>${t}</span><kbd>${n}</kbd></div>`).join("")}</div>
        <div class="help-card"><h4>The Loop</h4><ul>
          <li>Follow the main quest for four sigils, then face the Ashen Sovereign.</li>
          <li>Each of the four biomes has a settlement, a vendor, a quest board, and a warden.</li>
          <li>Accept side missions for gold and <b>gacha tokens</b>. Kill monsters, sell loot to vendors.</li>
          <li>Spend tokens at Lyra's Astral Loom for glasses, hair accessories, outfits, and weapon skins.</li>
          <li>Weapons and armor come in five rarities: copper, iron, gold, diamond, adamantite.</li>
          <li>Adamantite cannot be bought. The Sovereign drops a relic of it.</li>
        </ul></div>
        <div class="help-card"><h4>Combat</h4><p>Every class has three distinct skills bound to 1, 2, and 3. Watch mana and cooldowns. Melee classes cleave; ranged classes fire homing bolts. Potions restore health instantly.</p></div>
        <div class="help-card"><h4>Endings</h4><p>Your choices with the wardens and at the finale determine one of five endings: Normal, Bad, Happy, Bittersweet, or Secret. The Chronicle records each one you discover.</p></div>
        <div class="help-card"><h4>Travel</h4><p>Attune waypoints by walking near them, then fast travel from the world map. Press M anywhere. Dungeons and shrines appear as map markers.</p></div>
        <div class="help-card"><h4>Save & Sound</h4><p>Progress saves automatically every 20 seconds and when you close the tab.</p>
          <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">
            <button class="mini-btn" id="help-sound">${this.soundEnabled?"Sound: On":"Sound: Off"}</button>
            <button class="mini-btn" id="help-save">Save Now</button>
            <button class="mini-btn danger" id="help-reset">Abandon Chronicle</button>
          </div>
        </div>
      </div></div>`),he("help-sound").addEventListener("click",t=>{this.soundEnabled=!this.soundEnabled,this.audio.setEnabled(this.soundEnabled),t.target.textContent=this.soundEnabled?"Sound: On":"Sound: Off"}),he("help-save").addEventListener("click",()=>{this.save(),this.toast("Chronicle saved.","gold")}),he("help-reset").addEventListener("click",()=>{confirm("Abandon this chronicle and return to the title screen? Your save will be deleted.")&&(this.deleteSave(),location.reload())})},s.prototype.openQuickMenu=function(){this.openModal(this.modalHead("Field Menu","Quick access while on the road.")+`<div class="modal-body">
      <div class="tab-row" style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        <button class="tab" data-qm="map">World Map</button>
        <button class="tab" data-qm="journal">Journal</button>
        <button class="tab" data-qm="inventory">Satchel</button>
        <button class="tab" data-qm="gacha">Astral Loom</button>
        <button class="tab" data-qm="help">Help & Save</button>
        <button class="tab" data-qm="close">Resume</button>
      </div>
      <p class="muted" style="font-size:9px;text-align:center">Gold ${this.state.gold} · Tokens ${this.state.tokens} · Level ${this.state.level}</p>
    </div>`),document.querySelectorAll("[data-qm]").forEach(e=>e.addEventListener("click",()=>{const t=e.dataset.qm;this.closeModal(),t==="map"?this.openMap():t==="journal"?this.openJournal():t==="inventory"?this.openInventory():t==="gacha"?this.openGacha():t==="help"&&this.openHelp()}))},s.prototype.openBoard=function(e){if(!this.state)return;this.boardZone=e,this.ensureOffers(e);const t=e==="hub"?"Wayfarer's Rest":St[e].settlement;this.openModal(this.modalHead(`${t} — Quest Board`,"Postings from the road. Missions pay coin and Astral Loom tokens.")+'<div class="modal-body" id="board-body"></div>'),this.renderBoard()},s.prototype.renderBoard=function(){const e=he("board-body");if(!e||!this.state)return;const t=this.boardZone||"hub",n=this.ensureOffers(t),i={hunt:"⚔",gather:"❧",deliver:"✉",explore:"⌖"};e.innerHTML=`<div class="tab-row"><span class="tab active">${n.length} postings</span><span class="tab">${this.state.quests.side.length} / 4 active</span></div>
      <div id="board-offers">${n.length?n.map(a=>`<div class="quest-card">
        <h4>${i[a.kind]||"✦"} ${a.title}</h4><p>${a.text}</p>
        <div class="quest-meta"><span>Reward <b>${a.rewardGold}g</b> · <b>${a.rewardXp} XP</b> · <b>${a.rewardToken} token</b></span><span>${t==="hub"?"Verdant contracts":St[t].name}</span></div>
        <div style="display:flex;justify-content:flex-end;margin-top:8px"><button class="mini-btn" data-accept="${a.id}">Accept Mission</button></div>
      </div>`).join(""):'<div class="empty-note">The board is bare. Ask the keeper to refresh the postings.</div>'}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(230,193,122,.12);flex-wrap:wrap">
        <span class="muted" style="font-size:8px">Active: ${this.state.quests.side.map(a=>a.title).join(" · ")||"none"}</span>
        <button class="mini-btn" id="board-refresh">Refresh Postings · 30g</button>
      </div>`,e.querySelectorAll("[data-accept]").forEach(a=>a.addEventListener("click",()=>{const o=n.find(r=>r.id===a.dataset.accept);o&&(this.acceptQuest(o),this.renderBoard())})),he("board-refresh")?.addEventListener("click",()=>{if(this.state.gold<30){this.toast("You need 30 gold to refresh the board."),this.audio.sfx("click");return}this.state.gold-=30,this.state.quests.offers[t]=null,this.ensureOffers(t),this.updateHUD(!0),this.save(),this.renderBoard(),this.toast("Fresh postings nailed to the board.","gold"),this.audio.sfx("quest")})},s.prototype.shopStockFor=function(e){if(this.shopStocks||(this.shopStocks={}),this.shopStocks[e])return this.shopStocks[e];const t=js[e]||js.goods,n=Pt[this.state.job],i=[];for(const a of t.rarity){if(t.goods.includes("weapon")){const o=ar(a,n.weapon);i.push({...o,price:Math.round(o.value*1.55)})}if(t.goods.includes("armor")){const o=or(a,n.armor);i.push({...o,price:Math.round(o.value*1.55)})}}return t.goods.includes("potion")&&(i.push({...Bi.health,price:Math.round(Bi.health.value*1.3)}),i.push({...Bi.mana,price:Math.round(Bi.mana.value*1.3)})),this.shopStocks[e]=i,i},s.prototype.openShop=function(e){if(!this.state||!e)return;this.shopNpc=e,this.shopVendor=e.def.vendor||"goods",this.shopTab="buy";const t=js[this.shopVendor]||js.goods;this.openModal(this.modalHead(t.name,t.tagline)+'<div class="modal-body" id="shop-body"></div>'),this.renderShop()},s.prototype.renderShop=function(){const e=he("shop-body");if(!e||!this.state)return;const t=this.shopVendor||"goods",n=this.shopStockFor(t),i=this.state,a=`<div class="shop-head">
      <div class="tab-row" style="margin:0">
        <button class="tab ${this.shopTab==="buy"?"active":""}" data-shop-tab="buy">Wares</button>
        <button class="tab ${this.shopTab==="sell"?"active":""}" data-shop-tab="sell">Sell</button>
      </div>
      <div class="wallet"><span>◉ <b>${i.gold}</b> gold</span><span>✦ <b>${i.tokens}</b> tokens</span></div>
    </div>`;let o="";if(this.shopTab==="sell"){const r=i.inventory.map((l,c)=>({it:l,i:c})).filter(({it:l})=>l.value);o=`<div class="section-title">Satchel Goods</div>
        ${r.length?r.map(({it:l,i:c})=>{const h=l.rarity?zt[l.rarity]:null,d=h?h.color:l.kind==="potion"?"#9fe0a0":"#9aa6b0",f=Math.max(1,Math.round((l.value||1)*(l.kind==="loot"?1:.7)));return`<div class="sell-row" style="--rc:${d}">
            <span class="sr-icon">${l.icon||"◆"}</span>
            <span class="sr-name">${l.name}${(l.qty||1)>1?` ×${l.qty}`:""}</span>
            <span class="sr-price">${f} gold</span>
            <button class="mini-btn" data-sell="${c}">Sell</button>
          </div>`}).join(""):'<div class="empty-note">Nothing of value in your satchel. Monsters and ruins are generous.</div>'}`}else o=`<div class="section-title">Today's Wares</div>
        <div class="shop-grid">${n.map((r,l)=>{const c=r.rarity?zt[r.rarity]:null,h=c?c.color:r.kind==="potion"?"#9fe0a0":"#9aa6b0",d=i.gold>=r.price;return`<div class="shop-item" style="--rc:${h}">
            <span class="si-icon">${r.icon||"◆"}</span>
            <span class="si-body"><span class="si-name">${r.name}</span><span class="si-desc">${r.desc||""}</span></span>
            <span class="si-buy"><span class="si-price">${r.price}g</span>
              <button class="mini-btn" data-buy="${l}" ${d?"":"disabled"}>Buy</button></span>
          </div>`}).join("")}</div>`;e.innerHTML=a+o,e.querySelectorAll("[data-shop-tab]").forEach(r=>r.addEventListener("click",()=>{this.shopTab=r.dataset.shopTab,this.renderShop()})),e.querySelectorAll("[data-buy]").forEach(r=>r.addEventListener("click",()=>this.buyShopItem(n[Number(r.dataset.buy)]))),e.querySelectorAll("[data-sell]").forEach(r=>r.addEventListener("click",()=>this.sellInventoryItem(Number(r.dataset.sell))))},s.prototype.buyShopItem=function(e){if(!e||!this.state)return;if(this.state.gold<e.price){this.toast("Not enough gold."),this.audio.sfx("click");return}this.state.gold-=e.price;const{price:t,...n}=e;this.addItem(n,1,!0),this.audio.sfx("coin"),this.toast(`Purchased ${e.name}`,"gold"),this.updateHUD(!0),this.save(),this.renderShop()},s.prototype.sellInventoryItem=function(e){const t=this.state?.inventory[e];if(!t)return;const n=Math.max(1,Math.round((t.value||1)*(t.kind==="loot"?1:.7)));this.removeItem(t.id,1),this.gainGold(n),this.audio.sfx("coin"),this.toast(`Sold ${t.name} for ${n} gold`,"gold"),this.updateHUD(!0),this.save(),this.renderShop()},s.prototype.openGacha=function(){this.state&&(this.gachaResults=this.gachaResults||[],this.openModal(this.modalHead("The Astral Loom","One token, one thread. The Loom remembers what you already own.")+'<div class="modal-body" id="gacha-panel"></div>'),this.renderGachaPanel())},s.prototype.renderGachaPanel=function(){const e=he("gacha-panel");if(!e||!this.state)return;const t=this.state,n=rs.map(a=>`<span><b style="color:${zt[a].color}">${qa[a]}%</b> ${zt[a].name}</span>`).join(""),i=this.gachaResults||[];e.innerHTML=`<div class="loom-hero"><div class="loom-orb">✧</div><div class="loom-title">THE ASTRAL LOOM</div><div class="loom-sub">Threads of the world, woven into form</div></div>
      <div class="token-count">✦ ${t.tokens} gacha token${t.tokens===1?"":"s"} · ${t.cosmetics.owned.length} / ${zi.length} cosmetics unlocked</div>
      <div class="gacha-actions">
        <button class="btn btn-primary" data-roll="1" ${t.tokens<1?"disabled":""}>Weave ×1 · 1 token</button>
        <button class="btn btn-primary" data-roll="10" ${t.tokens<10?"disabled":""}>Weave ×10 · 10 tokens</button>
        <button class="btn btn-ghost" id="gacha-wallet">How to earn tokens</button>
      </div>
      <div class="rates">${n}</div>
      ${i.length?`<div class="section-title">Threads Revealed</div><div class="gacha-results">${i.map(a=>{const o=zt[a.rarity].color;return`<div class="gacha-card" style="--rc:${o}">
          <span class="gc-icon" style="color:${o}">${yl[a.slot]}</span>
          <span class="gc-name">${a.name}</span>
          <span class="gc-slot">${fl[a.slot]} · ${zt[a.rarity].name}</span>
          ${a.isNew?'<span class="gc-new">NEW</span>':`<span class="gc-dupe">+${a.gold}g</span>`}
        </div>`}).join("")}</div>`:'<div class="empty-note">The Loom is still. Every side mission and storyteller pays tokens. One token, one thread.</div>'}
      <div style="display:flex;justify-content:center;gap:8px;margin-top:14px;flex-wrap:wrap">
        <button class="mini-btn" id="gacha-cosmetics">View Cosmetics</button>
        ${i.some(a=>a.isNew)?'<button class="mini-btn" id="gacha-auto">Equip Newest</button>':""}
      </div>`,e.querySelectorAll("[data-roll]").forEach(a=>a.addEventListener("click",()=>this.rollGacha(Number(a.dataset.roll)))),he("gacha-wallet")?.addEventListener("click",()=>{this.gachaResults=this.gachaResults||[],this.toast("Tokens come from side missions and storytellers — never merchants.","gold")}),he("gacha-cosmetics")?.addEventListener("click",()=>{this.closeModal(),this.openInventory("cosmetics")}),he("gacha-auto")?.addEventListener("click",()=>{const a=i.filter(o=>o.isNew).sort((o,r)=>zt[r.rarity].tier-zt[o.rarity].tier)[0];a&&(this.state.cosmetics.equipped[a.slot]=a.id,this.state.cosmetics.owned=[...new Set([...this.state.cosmetics.owned,a.id])],this.refreshAppearance(),this.save(),this.toast(`${a.name} equipped.`,"rarity"),this.audio.sfx("loot"))})},s.prototype.rollGacha=function(e){if(!this.state||this.state.tokens<e){this.toast("Not enough gacha tokens."),this.audio.sfx("click");return}this.state.tokens-=e;const t=[];for(let a=0;a<e;a++){let o=Math.random()*100,r=rs[rs.length-1];for(const f of rs){if(o<qa[f]){r=f;break}o-=qa[f]}const l=zi.filter(f=>f.rarity===r),c=l[Math.floor(Math.random()*l.length)],h=this.state.cosmetics.owned.includes(c.id);let d=0;h?(d=Math.max(8,Math.round(zt[r].value*.25)),this.gainGold(d,!0)):this.state.cosmetics.owned.push(c.id),t.push({...c,isNew:!h,gold:d})}this.gachaResults=t;const n=t.reduce((a,o)=>zt[o.rarity].tier>zt[a.rarity].tier?o:a,t[0]);this.audio.sfx(n&&zt[n.rarity].tier>=4?"legendary":"gacha");const i=t.filter(a=>a.isNew).length;i&&this.log(`Astral Loom: ${i} new cosmetic${i===1?"":"s"} woven.`,"gold"),this.updateHUD(!0),this.save(),this.renderGachaPanel()},s.prototype.openMap=function(){if(!this.state)return;const t=this.world.waypoints.map(n=>{const i=n.zone==="hub"?"Wayfarer's Rest":St[n.zone].settlement;return`<div class="wp-row ${n.unlocked?"":"locked"}">
        <span style="font-size:9px;color:#ddd8ca">${n.name}<em style="display:block;font-style:normal;font-size:7px;letter-spacing:.08em;color:#8a949a;margin-top:2px">${i}</em></span>
        <button class="mini-btn" data-wp="${n.id}" ${n.unlocked?"":"disabled"}>${n.unlocked?"Travel":"Locked"}</button>
      </div>`}).join("");this.openModal(this.modalHead("The Four Wards","Attune a waypoint by walking near it, then travel from this map.")+`<div class="modal-body"><div class="map-wrap">
        <canvas id="worldmap" width="720" height="720"></canvas>
        <div class="map-side">
          <div><div class="section-title">Waypoints</div><div class="waypoint-list">${t}</div></div>
          <div><div class="section-title">Legend</div><div class="map-legend">
            <div><i class="map-dot" style="background:#74e7f7"></i> Attuned waypoint</div>
            <div><i class="map-dot" style="background:#e8c06a"></i> Settlement / shrine</div>
            <div><i class="map-dot" style="background:#8a949a"></i> Ruin</div>
            <div><i class="map-dot" style="background:#e0603a"></i> The Sundered Throne</div>
            <div><i class="map-dot" style="background:#f2ead8"></i> You</div>
          </div></div>
          <div class="help-card" style="padding:10px 12px"><p style="margin:0">Unattuned waypoints show as hollow diamonds. The world is 5,000 × 5,000 paces across.</p></div>
        </div>
      </div></div>`),requestAnimationFrame(()=>this.drawWorldMap()),document.querySelectorAll("[data-wp]").forEach(n=>n.addEventListener("click",()=>this.fastTravel(n.dataset.wp)))},s.prototype.drawWorldMap=function(){const e=he("worldmap");if(!e||!this.state)return;const t=e.getContext("2d"),n=e.width,i=26,a=n-i*2,o=m=>i+(m+jn)/ln*a,r=m=>i+(m+jn)/ln*a;t.clearRect(0,0,n,n),t.fillStyle="#080d12",t.fillRect(0,0,n,n);const l=o(0),c=r(0),h=[[i,i,l-i,c-i,"verdant"],[l,i,n-i-l,c-i,"ember"],[i,c,l-i,n-i-c,"frost"],[l,c,n-i-l,n-i-c,"umbra"]];t.globalAlpha=.24;for(const[m,u,S,w,M]of h)t.fillStyle=St[M].color,t.fillRect(m,u,S,w);t.globalAlpha=1,t.strokeStyle="rgba(230,193,122,.07)",t.lineWidth=1;for(let m=0;m<=10;m++){const u=i+a*(m/10);t.beginPath(),t.moveTo(u,i),t.lineTo(u,n-i),t.stroke(),t.beginPath(),t.moveTo(i,u),t.lineTo(n-i,u),t.stroke()}t.strokeStyle="rgba(230,193,122,.28)",t.setLineDash([7,7]);for(const m of Object.values(St))t.beginPath(),t.moveTo(o(0),r(0)),t.lineTo(o(m.center[0]),r(m.center[1])),t.stroke();t.setLineDash([]),t.strokeStyle="rgba(230,193,122,.24)",t.strokeRect(i,i,a,a),t.strokeStyle="rgba(230,193,122,.1)",t.beginPath(),t.moveTo(l,i),t.lineTo(l,n-i),t.moveTo(i,c),t.lineTo(n-i,c),t.stroke();for(const m of this.world.poi){if(m.type==="waypoint")continue;const u=o(m.x),S=r(m.z);m.type==="town"?(t.fillStyle=m.zone==="hub"?"#f2ead8":"#e8c06a",t.fillRect(u-5,S-5,10,10),t.fillStyle="rgba(242,234,216,.75)",t.font="15px Georgia, serif",t.textAlign="center",t.fillText(m.name,u,S-12)):m.type==="boss"?(t.fillStyle="#e0603a",t.beginPath(),t.arc(u,S,6,0,Math.PI*2),t.fill(),t.strokeStyle="#ffcf6a",t.lineWidth=2,t.beginPath(),t.arc(u,S,12,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(255,210,160,.8)",t.font="14px Georgia, serif",t.fillText("Sundered Throne",u,S+26)):(t.fillStyle=m.type==="ruin"?"rgba(150,162,170,.7)":"rgba(232,192,106,.75)",t.beginPath(),t.moveTo(u,S-3),t.lineTo(u+3,S),t.lineTo(u,S+3),t.lineTo(u-3,S),t.closePath(),t.fill())}for(const m of this.world.waypoints){const u=o(m.x),S=r(m.z);t.beginPath(),t.moveTo(u,S-7),t.lineTo(u+7,S),t.lineTo(u,S+7),t.lineTo(u-7,S),t.closePath(),m.unlocked?(t.fillStyle="#74e7f7",t.fill()):(t.strokeStyle="rgba(116,231,247,.5)",t.lineWidth=1.5,t.stroke())}const d=this.state,f=o(d.pos.x),p=r(d.pos.z),v=Math.sin(d.rotation||0),g=Math.cos(d.rotation||0);t.fillStyle="#f2ead8",t.beginPath(),t.moveTo(f,p),t.lineTo(f+v*13-g*5,p+g*13+v*5),t.lineTo(f+v*13+g*5,p+g*13-v*5),t.closePath(),t.fill(),t.strokeStyle="rgba(242,234,216,.45)",t.beginPath(),t.arc(f,p,11,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(230,193,122,.7)",t.font="16px Georgia, serif",t.textAlign="left",t.fillText("N",i+8,i+18),t.strokeStyle="rgba(230,193,122,.5)",t.beginPath(),t.moveTo(i+10,i+26),t.lineTo(i+10,i+46),t.stroke()},s.prototype.fastTravel=function(e){const t=this.world.waypoints.find(a=>a.id===e);if(!t||!t.unlocked||!this.playerMesh)return;if(Math.hypot(t.x-this.state.pos.x,t.z-this.state.pos.z)<16){this.toast("You are already standing here.","");return}this.closeModal();const n=t.x,i=t.z+20;this.state.pos.x=n,this.state.pos.z=i,this.playerMesh.position.set(n,this.ground(n,i),i),this.jumpY=0,this.vy=0,this.cam.tx=n,this.cam.tz=i,this.camPos.set(n+Math.sin(this.cam.yaw)*this.cam.dist,this.ground(n,i)+8,i+Math.cos(this.cam.yaw)*this.cam.dist),this.camTarget.set(n,this.ground(n,i)+1.75,i),this.zone=null,this.updateZone(!0),this.updateHUD(!0),this.audio.sfx("teleport"),this.toast(`Waypoint travel — ${t.name}`,"gold"),this.log(`Traveled to ${t.name}.`,"gold"),this.save()},s.prototype.drawMinimap=function(){const e=he("minimap");if(!e||!this.playerMesh||!this.state)return;const t=e.getContext("2d"),n=e.width,i=e.height,a=n/2,o=i/2,r=this.playerMesh.position,l=n/950,c=g=>a+(g-r.x)*l,h=g=>o+(g-r.z)*l;t.clearRect(0,0,n,i),t.save(),t.beginPath(),t.arc(a,o,n/2-3,0,Math.PI*2),t.clip(),t.fillStyle="#0a0f14",t.fillRect(0,0,n,i);const d=c(0),f=h(0),p=[[0,0,d,f,"verdant"],[d,0,n-d,f,"ember"],[0,f,d,i-f,"frost"],[d,f,n-d,i-f,"umbra"]];t.globalAlpha=.2;for(const[g,m,u,S,w]of p)t.fillStyle=St[w].color,t.fillRect(g,m,u,S);t.globalAlpha=1,t.strokeStyle="rgba(230,193,122,.07)",t.lineWidth=1;for(let g=-2500;g<=2500;g+=250){const m=c(g);t.beginPath(),t.moveTo(m,0),t.lineTo(m,i),t.stroke()}for(let g=-2500;g<=2500;g+=250){const m=h(g);t.beginPath(),t.moveTo(0,m),t.lineTo(n,m),t.stroke()}t.strokeStyle="rgba(230,193,122,.18)",t.setLineDash([5,6]);for(const g of Object.values(St))t.beginPath(),t.moveTo(c(0),h(0)),t.lineTo(c(g.center[0]),h(g.center[1])),t.stroke();t.setLineDash([]);for(const g of this.world.poi){if(g.type==="waypoint"||Math.hypot(g.x-r.x,g.z-r.z)>650)continue;const m=c(g.x),u=h(g.z);g.type==="town"?(t.fillStyle=g.zone==="hub"?"#f2ead8":"#e8c06a",t.fillRect(m-4,u-4,8,8)):g.type==="boss"?(t.fillStyle="#e0603a",t.beginPath(),t.arc(m,u,5,0,Math.PI*2),t.fill()):(t.fillStyle=g.type==="ruin"?"rgba(150,162,170,.65)":"rgba(232,192,106,.6)",t.fillRect(m-2,u-2,4,4))}for(const g of this.world.waypoints){if(Math.hypot(g.x-r.x,g.z-r.z)>900)continue;const m=c(g.x),u=h(g.z);t.beginPath(),t.moveTo(m,u-5),t.lineTo(m+5,u),t.lineTo(m,u+5),t.lineTo(m-5,u),t.closePath(),g.unlocked?(t.fillStyle="#74e7f7",t.fill()):(t.strokeStyle="rgba(116,231,247,.55)",t.stroke())}for(const g of this.npcs)Math.hypot(g.x-r.x,g.z-r.z)>500||(t.fillStyle=g.def.story?"#ffd479":"rgba(220,210,180,.7)",t.beginPath(),t.arc(c(g.x),h(g.z),3,0,Math.PI*2),t.fill());for(const g of this.enemies)g.dead||Math.hypot(g.mesh.position.x-r.x,g.mesh.position.z-r.z)>330||(t.fillStyle=g.def.boss?"#ff5a3a":g.def.elite?"#ffcf6a":"rgba(224,96,58,.85)",t.beginPath(),t.arc(c(g.mesh.position.x),h(g.mesh.position.z),g.def.boss?6:3,0,Math.PI*2),t.fill());const v=this.playerMesh.rotation.y;t.save(),t.translate(a,o),t.rotate(Math.atan2(Math.sin(v),-Math.cos(v))),t.fillStyle="#f2ead8",t.beginPath(),t.moveTo(0,-10),t.lineTo(7,8),t.lineTo(0,4),t.lineTo(-7,8),t.closePath(),t.fill(),t.restore(),t.strokeStyle="rgba(242,234,216,.28)",t.lineWidth=2,t.beginPath(),t.arc(a,o,15,0,Math.PI*2),t.stroke(),t.restore(),t.strokeStyle="rgba(230,193,122,.28)",t.lineWidth=4,t.beginPath(),t.arc(a,o,n/2-2,0,Math.PI*2),t.stroke()}}Am(Zi);Rm(Zi);Cm(Zi);Um(Zi);Nm(Zi);const hs=document.getElementById("loading"),bl=document.getElementById("loading-fill"),ds=document.getElementById("loading-text");function Sl(s,e){bl&&(bl.style.width=s+"%"),ds&&e&&(ds.textContent=e)}function Fm(s){console.error(s),ds&&(ds.textContent="The world failed to form — see the console for details.",ds.style.color="#e8a090"),hs&&hs.classList.remove("done")}function wl(){try{Sl(18,"Planting the four wards…");const s=new Zi;window.aetherfall=s,Sl(100,"The roads are open."),setTimeout(()=>{hs?.classList.add("done"),setTimeout(()=>{hs&&(hs.style.display="none")},800)},380)}catch(s){Fm(s)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>requestAnimationFrame(()=>setTimeout(wl,30))):requestAnimationFrame(()=>setTimeout(wl,30));
