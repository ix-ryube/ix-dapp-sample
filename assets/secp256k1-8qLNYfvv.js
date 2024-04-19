import{H as Gt,i as It,j as wt,t as Wt,o as be,w as ge,r as G,k as Xt,m as Qt,p as lt,q as Jt,s as V,v as gt,u as M,x as k,y as zt,z as we,A as Ot,B as me,C as Tt,D as ye,E as xe,F as Ee,G as Ft}from"./index-VQ6zznw0.js";function pe(e,n,t,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(n,t,r);const s=BigInt(32),o=BigInt(4294967295),f=Number(t>>s&o),i=Number(t&o),c=r?4:0,a=r?0:4;e.setUint32(n+c,f,r),e.setUint32(n+a,i,r)}class Be extends Gt{constructor(n,t,r,s){super(),this.blockLen=n,this.outputLen=t,this.padOffset=r,this.isLE=s,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(n),this.view=It(this.buffer)}update(n){wt(this);const{view:t,buffer:r,blockLen:s}=this;n=Wt(n);const o=n.length;for(let f=0;f<o;){const i=Math.min(s-this.pos,o-f);if(i===s){const c=It(n);for(;s<=o-f;f+=s)this.process(c,f);continue}r.set(n.subarray(f,f+i),this.pos),this.pos+=i,f+=i,this.pos===s&&(this.process(t,0),this.pos=0)}return this.length+=n.length,this.roundClean(),this}digestInto(n){wt(this),be(n,this),this.finished=!0;const{buffer:t,view:r,blockLen:s,isLE:o}=this;let{pos:f}=this;t[f++]=128,this.buffer.subarray(f).fill(0),this.padOffset>s-f&&(this.process(r,0),f=0);for(let l=f;l<s;l++)t[l]=0;pe(r,s-8,BigInt(this.length*8),o),this.process(r,0);const i=It(n),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const a=c/4,b=this.get();if(a>b.length)throw new Error("_sha2: outputLen bigger than state");for(let l=0;l<a;l++)i.setUint32(4*l,b[l],o)}digest(){const{buffer:n,outputLen:t}=this;this.digestInto(n);const r=n.slice(0,t);return this.destroy(),r}_cloneInto(n){n||(n=new this.constructor),n.set(...this.get());const{blockLen:t,buffer:r,length:s,finished:o,destroyed:f,pos:i}=this;return n.length=s,n.pos=i,n.finished=o,n.destroyed=f,s%t&&n.buffer.set(r),n}}const ve=(e,n,t)=>e&n^~e&t,Se=(e,n,t)=>e&n^e&t^n&t,Ae=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),F=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),tt=new Uint32Array(64);class Ie extends Be{constructor(){super(64,32,8,!1),this.A=F[0]|0,this.B=F[1]|0,this.C=F[2]|0,this.D=F[3]|0,this.E=F[4]|0,this.F=F[5]|0,this.G=F[6]|0,this.H=F[7]|0}get(){const{A:n,B:t,C:r,D:s,E:o,F:f,G:i,H:c}=this;return[n,t,r,s,o,f,i,c]}set(n,t,r,s,o,f,i,c){this.A=n|0,this.B=t|0,this.C=r|0,this.D=s|0,this.E=o|0,this.F=f|0,this.G=i|0,this.H=c|0}process(n,t){for(let l=0;l<16;l++,t+=4)tt[l]=n.getUint32(t,!1);for(let l=16;l<64;l++){const I=tt[l-15],B=tt[l-2],m=G(I,7)^G(I,18)^I>>>3,u=G(B,17)^G(B,19)^B>>>10;tt[l]=u+tt[l-7]+m+tt[l-16]|0}let{A:r,B:s,C:o,D:f,E:i,F:c,G:a,H:b}=this;for(let l=0;l<64;l++){const I=G(i,6)^G(i,11)^G(i,25),B=b+I+ve(i,c,a)+Ae[l]+tt[l]|0,u=(G(r,2)^G(r,13)^G(r,22))+Se(r,s,o)|0;b=a,a=c,c=i,i=f+B|0,f=o,o=s,s=r,r=B+u|0}r=r+this.A|0,s=s+this.B|0,o=o+this.C|0,f=f+this.D|0,i=i+this.E|0,c=c+this.F|0,a=a+this.G|0,b=b+this.H|0,this.set(r,s,o,f,i,c,a,b)}roundClean(){tt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const mt=ge(()=>new Ie);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const C=BigInt(0),R=BigInt(1),ot=BigInt(2),_e=BigInt(3),Nt=BigInt(4),$t=BigInt(5),Dt=BigInt(8);BigInt(9);BigInt(16);function U(e,n){const t=e%n;return t>=C?t:n+t}function qe(e,n,t){if(t<=C||n<C)throw new Error("Expected power/modulo > 0");if(t===R)return C;let r=R;for(;n>C;)n&R&&(r=r*e%t),e=e*e%t,n>>=R;return r}function K(e,n,t){let r=e;for(;n-- >C;)r*=r,r%=t;return r}function Lt(e,n){if(e===C||n<=C)throw new Error(`invert: expected positive integers, got n=${e} mod=${n}`);let t=U(e,n),r=n,s=C,o=R;for(;t!==C;){const i=r/t,c=r%t,a=s-o*i;r=t,t=c,s=o,o=a}if(r!==R)throw new Error("invert: does not exist");return U(s,n)}function Oe(e){const n=(e-R)/ot;let t,r,s;for(t=e-R,r=0;t%ot===C;t/=ot,r++);for(s=ot;s<e&&qe(s,n,e)!==e-R;s++);if(r===1){const f=(e+R)/Nt;return function(c,a){const b=c.pow(a,f);if(!c.eql(c.sqr(b),a))throw new Error("Cannot find square root");return b}}const o=(t+R)/ot;return function(i,c){if(i.pow(c,n)===i.neg(i.ONE))throw new Error("Cannot find square root");let a=r,b=i.pow(i.mul(i.ONE,s),t),l=i.pow(c,o),I=i.pow(c,t);for(;!i.eql(I,i.ONE);){if(i.eql(I,i.ZERO))return i.ZERO;let B=1;for(let u=i.sqr(I);B<a&&!i.eql(u,i.ONE);B++)u=i.sqr(u);const m=i.pow(b,R<<BigInt(a-B-1));b=i.sqr(m),l=i.mul(l,m),I=i.mul(I,b),a=B}return l}}function Ne(e){if(e%Nt===_e){const n=(e+R)/Nt;return function(r,s){const o=r.pow(s,n);if(!r.eql(r.sqr(o),s))throw new Error("Cannot find square root");return o}}if(e%Dt===$t){const n=(e-$t)/Dt;return function(r,s){const o=r.mul(s,ot),f=r.pow(o,n),i=r.mul(s,f),c=r.mul(r.mul(i,ot),f),a=r.mul(i,r.sub(c,r.ONE));if(!r.eql(r.sqr(a),s))throw new Error("Cannot find square root");return a}}return Oe(e)}const Le=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function te(e){const n={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},t=Le.reduce((r,s)=>(r[s]="function",r),n);return gt(e,t)}function He(e,n,t){if(t<C)throw new Error("Expected power > 0");if(t===C)return e.ONE;if(t===R)return n;let r=e.ONE,s=n;for(;t>C;)t&R&&(r=e.mul(r,s)),s=e.sqr(s),t>>=R;return r}function Re(e,n){const t=new Array(n.length),r=n.reduce((o,f,i)=>e.is0(f)?o:(t[i]=o,e.mul(o,f)),e.ONE),s=e.inv(r);return n.reduceRight((o,f,i)=>e.is0(f)?o:(t[i]=e.mul(o,t[i]),e.mul(o,f)),s),t}function ee(e,n){const t=n!==void 0?n:e.toString(2).length,r=Math.ceil(t/8);return{nBitLength:t,nByteLength:r}}function Te(e,n,t=!1,r={}){if(e<=C)throw new Error(`Expected Field ORDER > 0, got ${e}`);const{nBitLength:s,nByteLength:o}=ee(e,n);if(o>2048)throw new Error("Field lengths over 2048 bytes are not supported");const f=Ne(e),i=Object.freeze({ORDER:e,BITS:s,BYTES:o,MASK:Xt(s),ZERO:C,ONE:R,create:c=>U(c,e),isValid:c=>{if(typeof c!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);return C<=c&&c<e},is0:c=>c===C,isOdd:c=>(c&R)===R,neg:c=>U(-c,e),eql:(c,a)=>c===a,sqr:c=>U(c*c,e),add:(c,a)=>U(c+a,e),sub:(c,a)=>U(c-a,e),mul:(c,a)=>U(c*a,e),pow:(c,a)=>He(i,c,a),div:(c,a)=>U(c*Lt(a,e),e),sqrN:c=>c*c,addN:(c,a)=>c+a,subN:(c,a)=>c-a,mulN:(c,a)=>c*a,inv:c=>Lt(c,e),sqrt:r.sqrt||(c=>f(i,c)),invertBatch:c=>Re(i,c),cmov:(c,a,b)=>b?a:c,toBytes:c=>t?Qt(c,o):lt(c,o),fromBytes:c=>{if(c.length!==o)throw new Error(`Fp.fromBytes: expected ${o}, got ${c.length}`);return t?Jt(c):V(c)}});return Object.freeze(i)}function ne(e){if(typeof e!="bigint")throw new Error("field order must be bigint");const n=e.toString(2).length;return Math.ceil(n/8)}function re(e){const n=ne(e);return n+Math.ceil(n/2)}function Ue(e,n,t=!1){const r=e.length,s=ne(n),o=re(n);if(r<16||r<o||r>1024)throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);const f=t?V(e):Jt(e),i=U(f,n-R)+R;return t?Qt(i,s):lt(i,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ce=BigInt(0),_t=BigInt(1);function Ze(e,n){const t=(s,o)=>{const f=o.negate();return s?f:o},r=s=>{const o=Math.ceil(n/s)+1,f=2**(s-1);return{windows:o,windowSize:f}};return{constTimeNegate:t,unsafeLadder(s,o){let f=e.ZERO,i=s;for(;o>Ce;)o&_t&&(f=f.add(i)),i=i.double(),o>>=_t;return f},precomputeWindow(s,o){const{windows:f,windowSize:i}=r(o),c=[];let a=s,b=a;for(let l=0;l<f;l++){b=a,c.push(b);for(let I=1;I<i;I++)b=b.add(a),c.push(b);a=b.double()}return c},wNAF(s,o,f){const{windows:i,windowSize:c}=r(s);let a=e.ZERO,b=e.BASE;const l=BigInt(2**s-1),I=2**s,B=BigInt(s);for(let m=0;m<i;m++){const u=m*c;let h=Number(f&l);f>>=B,h>c&&(h-=I,f+=_t);const d=u,w=u+Math.abs(h)-1,x=m%2!==0,v=h<0;h===0?b=b.add(t(x,o[d])):a=a.add(t(v,o[w]))}return{p:a,f:b}},wNAFCached(s,o,f,i){const c=s._WINDOW_SIZE||1;let a=o.get(s);return a||(a=this.precomputeWindow(s,c),c!==1&&o.set(s,i(a))),this.wNAF(c,a,f)}}}function se(e){return te(e.Fp),gt(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...ee(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ke(e){const n=se(e);gt(n,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:t,Fp:r,a:s}=n;if(t){if(!r.eql(s,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof t!="object"||typeof t.beta!="bigint"||typeof t.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...n})}const{bytesToNumberBE:Ve,hexToBytes:Pe}=me,it={Err:class extends Error{constructor(n=""){super(n)}},_parseInt(e){const{Err:n}=it;if(e.length<2||e[0]!==2)throw new n("Invalid signature integer tag");const t=e[1],r=e.subarray(2,t+2);if(!t||r.length!==t)throw new n("Invalid signature integer: wrong length");if(r[0]&128)throw new n("Invalid signature integer: negative");if(r[0]===0&&!(r[1]&128))throw new n("Invalid signature integer: unnecessary leading zero");return{d:Ve(r),l:e.subarray(t+2)}},toSig(e){const{Err:n}=it,t=typeof e=="string"?Pe(e):e;if(!(t instanceof Uint8Array))throw new Error("ui8a expected");let r=t.length;if(r<2||t[0]!=48)throw new n("Invalid signature tag");if(t[1]!==r-2)throw new n("Invalid signature: incorrect length");const{d:s,l:o}=it._parseInt(t.subarray(2)),{d:f,l:i}=it._parseInt(o);if(i.length)throw new n("Invalid signature: left bytes after parsing");return{r:s,s:f}},hexFromSig(e){const n=a=>Number.parseInt(a[0],16)&8?"00"+a:a,t=a=>{const b=a.toString(16);return b.length&1?`0${b}`:b},r=n(t(e.s)),s=n(t(e.r)),o=r.length/2,f=s.length/2,i=t(o),c=t(f);return`30${t(f+o+4)}02${c}${s}02${i}${r}`}},Y=BigInt(0),H=BigInt(1),et=BigInt(2),yt=BigInt(3),Kt=BigInt(4);function ze(e){const n=ke(e),{Fp:t}=n,r=n.toBytes||((m,u,h)=>{const d=u.toAffine();return M(Uint8Array.from([4]),t.toBytes(d.x),t.toBytes(d.y))}),s=n.fromBytes||(m=>{const u=m.subarray(1),h=t.fromBytes(u.subarray(0,t.BYTES)),d=t.fromBytes(u.subarray(t.BYTES,2*t.BYTES));return{x:h,y:d}});function o(m){const{a:u,b:h}=n,d=t.sqr(m),w=t.mul(d,m);return t.add(t.add(w,t.mul(m,u)),h)}if(!t.eql(t.sqr(n.Gy),o(n.Gx)))throw new Error("bad generator point: equation left != right");function f(m){return typeof m=="bigint"&&Y<m&&m<n.n}function i(m){if(!f(m))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function c(m){const{allowedPrivateKeyLengths:u,nByteLength:h,wrapPrivateKey:d,n:w}=n;if(u&&typeof m!="bigint"){if(m instanceof Uint8Array&&(m=Ot(m)),typeof m!="string"||!u.includes(m.length))throw new Error("Invalid key");m=m.padStart(h*2,"0")}let x;try{x=typeof m=="bigint"?m:V(k("private key",m,h))}catch{throw new Error(`private key must be ${h} bytes, hex or bigint, not ${typeof m}`)}return d&&(x=U(x,w)),i(x),x}const a=new Map;function b(m){if(!(m instanceof l))throw new Error("ProjectivePoint expected")}class l{constructor(u,h,d){if(this.px=u,this.py=h,this.pz=d,u==null||!t.isValid(u))throw new Error("x required");if(h==null||!t.isValid(h))throw new Error("y required");if(d==null||!t.isValid(d))throw new Error("z required")}static fromAffine(u){const{x:h,y:d}=u||{};if(!u||!t.isValid(h)||!t.isValid(d))throw new Error("invalid affine point");if(u instanceof l)throw new Error("projective point not allowed");const w=x=>t.eql(x,t.ZERO);return w(h)&&w(d)?l.ZERO:new l(h,d,t.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(u){const h=t.invertBatch(u.map(d=>d.pz));return u.map((d,w)=>d.toAffine(h[w])).map(l.fromAffine)}static fromHex(u){const h=l.fromAffine(s(k("pointHex",u)));return h.assertValidity(),h}static fromPrivateKey(u){return l.BASE.multiply(c(u))}_setWindowSize(u){this._WINDOW_SIZE=u,a.delete(this)}assertValidity(){if(this.is0()){if(n.allowInfinityPoint&&!t.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:u,y:h}=this.toAffine();if(!t.isValid(u)||!t.isValid(h))throw new Error("bad point: x or y not FE");const d=t.sqr(h),w=o(u);if(!t.eql(d,w))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:u}=this.toAffine();if(t.isOdd)return!t.isOdd(u);throw new Error("Field doesn't support isOdd")}equals(u){b(u);const{px:h,py:d,pz:w}=this,{px:x,py:v,pz:A}=u,E=t.eql(t.mul(h,A),t.mul(x,w)),p=t.eql(t.mul(d,A),t.mul(v,w));return E&&p}negate(){return new l(this.px,t.neg(this.py),this.pz)}double(){const{a:u,b:h}=n,d=t.mul(h,yt),{px:w,py:x,pz:v}=this;let A=t.ZERO,E=t.ZERO,p=t.ZERO,S=t.mul(w,w),Z=t.mul(x,x),L=t.mul(v,v),q=t.mul(w,x);return q=t.add(q,q),p=t.mul(w,v),p=t.add(p,p),A=t.mul(u,p),E=t.mul(d,L),E=t.add(A,E),A=t.sub(Z,E),E=t.add(Z,E),E=t.mul(A,E),A=t.mul(q,A),p=t.mul(d,p),L=t.mul(u,L),q=t.sub(S,L),q=t.mul(u,q),q=t.add(q,p),p=t.add(S,S),S=t.add(p,S),S=t.add(S,L),S=t.mul(S,q),E=t.add(E,S),L=t.mul(x,v),L=t.add(L,L),S=t.mul(L,q),A=t.sub(A,S),p=t.mul(L,Z),p=t.add(p,p),p=t.add(p,p),new l(A,E,p)}add(u){b(u);const{px:h,py:d,pz:w}=this,{px:x,py:v,pz:A}=u;let E=t.ZERO,p=t.ZERO,S=t.ZERO;const Z=n.a,L=t.mul(n.b,yt);let q=t.mul(h,x),P=t.mul(d,v),z=t.mul(w,A),W=t.add(h,d),g=t.add(x,v);W=t.mul(W,g),g=t.add(q,P),W=t.sub(W,g),g=t.add(h,w);let y=t.add(x,A);return g=t.mul(g,y),y=t.add(q,z),g=t.sub(g,y),y=t.add(d,w),E=t.add(v,A),y=t.mul(y,E),E=t.add(P,z),y=t.sub(y,E),S=t.mul(Z,g),E=t.mul(L,z),S=t.add(E,S),E=t.sub(P,S),S=t.add(P,S),p=t.mul(E,S),P=t.add(q,q),P=t.add(P,q),z=t.mul(Z,z),g=t.mul(L,g),P=t.add(P,z),z=t.sub(q,z),z=t.mul(Z,z),g=t.add(g,z),q=t.mul(P,g),p=t.add(p,q),q=t.mul(y,g),E=t.mul(W,E),E=t.sub(E,q),q=t.mul(W,P),S=t.mul(y,S),S=t.add(S,q),new l(E,p,S)}subtract(u){return this.add(u.negate())}is0(){return this.equals(l.ZERO)}wNAF(u){return B.wNAFCached(this,a,u,h=>{const d=t.invertBatch(h.map(w=>w.pz));return h.map((w,x)=>w.toAffine(d[x])).map(l.fromAffine)})}multiplyUnsafe(u){const h=l.ZERO;if(u===Y)return h;if(i(u),u===H)return this;const{endo:d}=n;if(!d)return B.unsafeLadder(this,u);let{k1neg:w,k1:x,k2neg:v,k2:A}=d.splitScalar(u),E=h,p=h,S=this;for(;x>Y||A>Y;)x&H&&(E=E.add(S)),A&H&&(p=p.add(S)),S=S.double(),x>>=H,A>>=H;return w&&(E=E.negate()),v&&(p=p.negate()),p=new l(t.mul(p.px,d.beta),p.py,p.pz),E.add(p)}multiply(u){i(u);let h=u,d,w;const{endo:x}=n;if(x){const{k1neg:v,k1:A,k2neg:E,k2:p}=x.splitScalar(h);let{p:S,f:Z}=this.wNAF(A),{p:L,f:q}=this.wNAF(p);S=B.constTimeNegate(v,S),L=B.constTimeNegate(E,L),L=new l(t.mul(L.px,x.beta),L.py,L.pz),d=S.add(L),w=Z.add(q)}else{const{p:v,f:A}=this.wNAF(h);d=v,w=A}return l.normalizeZ([d,w])[0]}multiplyAndAddUnsafe(u,h,d){const w=l.BASE,x=(A,E)=>E===Y||E===H||!A.equals(w)?A.multiplyUnsafe(E):A.multiply(E),v=x(this,h).add(x(u,d));return v.is0()?void 0:v}toAffine(u){const{px:h,py:d,pz:w}=this,x=this.is0();u==null&&(u=x?t.ONE:t.inv(w));const v=t.mul(h,u),A=t.mul(d,u),E=t.mul(w,u);if(x)return{x:t.ZERO,y:t.ZERO};if(!t.eql(E,t.ONE))throw new Error("invZ was invalid");return{x:v,y:A}}isTorsionFree(){const{h:u,isTorsionFree:h}=n;if(u===H)return!0;if(h)return h(l,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:u,clearCofactor:h}=n;return u===H?this:h?h(l,this):this.multiplyUnsafe(n.h)}toRawBytes(u=!0){return this.assertValidity(),r(l,this,u)}toHex(u=!0){return Ot(this.toRawBytes(u))}}l.BASE=new l(n.Gx,n.Gy,t.ONE),l.ZERO=new l(t.ZERO,t.ONE,t.ZERO);const I=n.nBitLength,B=Ze(l,n.endo?Math.ceil(I/2):I);return{CURVE:n,ProjectivePoint:l,normPrivateKeyToScalar:c,weierstrassEquation:o,isWithinCurveOrder:f}}function $e(e){const n=se(e);return gt(n,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...n})}function De(e){const n=$e(e),{Fp:t,n:r}=n,s=t.BYTES+1,o=2*t.BYTES+1;function f(g){return Y<g&&g<t.ORDER}function i(g){return U(g,r)}function c(g){return Lt(g,r)}const{ProjectivePoint:a,normPrivateKeyToScalar:b,weierstrassEquation:l,isWithinCurveOrder:I}=ze({...n,toBytes(g,y,_){const N=y.toAffine(),O=t.toBytes(N.x),T=M;return _?T(Uint8Array.from([y.hasEvenY()?2:3]),O):T(Uint8Array.from([4]),O,t.toBytes(N.y))},fromBytes(g){const y=g.length,_=g[0],N=g.subarray(1);if(y===s&&(_===2||_===3)){const O=V(N);if(!f(O))throw new Error("Point is not on curve");const T=l(O);let $=t.sqrt(T);const D=($&H)===H;return(_&1)===1!==D&&($=t.neg($)),{x:O,y:$}}else if(y===o&&_===4){const O=t.fromBytes(N.subarray(0,t.BYTES)),T=t.fromBytes(N.subarray(t.BYTES,2*t.BYTES));return{x:O,y:T}}else throw new Error(`Point of length ${y} was invalid. Expected ${s} compressed bytes or ${o} uncompressed bytes`)}}),B=g=>Ot(lt(g,n.nByteLength));function m(g){const y=r>>H;return g>y}function u(g){return m(g)?i(-g):g}const h=(g,y,_)=>V(g.slice(y,_));class d{constructor(y,_,N){this.r=y,this.s=_,this.recovery=N,this.assertValidity()}static fromCompact(y){const _=n.nByteLength;return y=k("compactSignature",y,_*2),new d(h(y,0,_),h(y,_,2*_))}static fromDER(y){const{r:_,s:N}=it.toSig(k("DER",y));return new d(_,N)}assertValidity(){if(!I(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!I(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(y){return new d(this.r,this.s,y)}recoverPublicKey(y){const{r:_,s:N,recovery:O}=this,T=p(k("msgHash",y));if(O==null||![0,1,2,3].includes(O))throw new Error("recovery id invalid");const $=O===2||O===3?_+n.n:_;if($>=t.ORDER)throw new Error("recovery id 2 or 3 invalid");const D=O&1?"03":"02",X=a.fromHex(D+B($)),Q=c($),ct=i(-T*Q),dt=i(N*Q),J=a.BASE.multiplyAndAddUnsafe(X,ct,dt);if(!J)throw new Error("point at infinify");return J.assertValidity(),J}hasHighS(){return m(this.s)}normalizeS(){return this.hasHighS()?new d(this.r,i(-this.s),this.recovery):this}toDERRawBytes(){return zt(this.toDERHex())}toDERHex(){return it.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return zt(this.toCompactHex())}toCompactHex(){return B(this.r)+B(this.s)}}const w={isValidPrivateKey(g){try{return b(g),!0}catch{return!1}},normPrivateKeyToScalar:b,randomPrivateKey:()=>{const g=re(n.n);return Ue(n.randomBytes(g),n.n)},precompute(g=8,y=a.BASE){return y._setWindowSize(g),y.multiply(BigInt(3)),y}};function x(g,y=!0){return a.fromPrivateKey(g).toRawBytes(y)}function v(g){const y=g instanceof Uint8Array,_=typeof g=="string",N=(y||_)&&g.length;return y?N===s||N===o:_?N===2*s||N===2*o:g instanceof a}function A(g,y,_=!0){if(v(g))throw new Error("first arg must be private key");if(!v(y))throw new Error("second arg must be public key");return a.fromHex(y).multiply(b(g)).toRawBytes(_)}const E=n.bits2int||function(g){const y=V(g),_=g.length*8-n.nBitLength;return _>0?y>>BigInt(_):y},p=n.bits2int_modN||function(g){return i(E(g))},S=Xt(n.nBitLength);function Z(g){if(typeof g!="bigint")throw new Error("bigint expected");if(!(Y<=g&&g<S))throw new Error(`bigint expected < 2^${n.nBitLength}`);return lt(g,n.nByteLength)}function L(g,y,_=q){if(["recovered","canonical"].some(st=>st in _))throw new Error("sign() legacy options not supported");const{hash:N,randomBytes:O}=n;let{lowS:T,prehash:$,extraEntropy:D}=_;T==null&&(T=!0),g=k("msgHash",g),$&&(g=k("prehashed msgHash",N(g)));const X=p(g),Q=b(y),ct=[Z(Q),Z(X)];if(D!=null){const st=D===!0?O(t.BYTES):D;ct.push(k("extraEntropy",st))}const dt=M(...ct),J=X;function At(st){const ft=E(st);if(!I(ft))return;const kt=c(ft),at=a.BASE.multiply(ft).toAffine(),j=i(at.x);if(j===Y)return;const ut=i(kt*i(J+j*Q));if(ut===Y)return;let Vt=(at.x===j?0:2)|Number(at.y&H),Pt=ut;return T&&m(ut)&&(Pt=u(ut),Vt^=1),new d(j,Pt,Vt)}return{seed:dt,k2sig:At}}const q={lowS:n.lowS,prehash:!1},P={lowS:n.lowS,prehash:!1};function z(g,y,_=q){const{seed:N,k2sig:O}=L(g,y,_),T=n;return we(T.hash.outputLen,T.nByteLength,T.hmac)(N,O)}a.BASE._setWindowSize(8);function W(g,y,_,N=P){var at;const O=g;if(y=k("msgHash",y),_=k("publicKey",_),"strict"in N)throw new Error("options.strict was renamed to lowS");const{lowS:T,prehash:$}=N;let D,X;try{if(typeof O=="string"||O instanceof Uint8Array)try{D=d.fromDER(O)}catch(j){if(!(j instanceof it.Err))throw j;D=d.fromCompact(O)}else if(typeof O=="object"&&typeof O.r=="bigint"&&typeof O.s=="bigint"){const{r:j,s:ut}=O;D=new d(j,ut)}else throw new Error("PARSE");X=a.fromHex(_)}catch(j){if(j.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(T&&D.hasHighS())return!1;$&&(y=n.hash(y));const{r:Q,s:ct}=D,dt=p(y),J=c(ct),At=i(dt*J),st=i(Q*J),ft=(at=a.BASE.multiplyAndAddUnsafe(X,At,st))==null?void 0:at.toAffine();return ft?i(ft.x)===Q:!1}return{CURVE:n,getPublicKey:x,getSharedSecret:A,sign:z,verify:W,ProjectivePoint:a,Signature:d,utils:w}}function Ke(e,n){const t=e.ORDER;let r=Y;for(let m=t-H;m%et===Y;m/=et)r+=H;const s=r,o=et<<s-H-H,f=o*et,i=(t-H)/f,c=(i-H)/et,a=f-H,b=o,l=e.pow(n,i),I=e.pow(n,(i+H)/et);let B=(m,u)=>{let h=l,d=e.pow(u,a),w=e.sqr(d);w=e.mul(w,u);let x=e.mul(m,w);x=e.pow(x,c),x=e.mul(x,d),d=e.mul(x,u),w=e.mul(x,m);let v=e.mul(w,d);x=e.pow(v,b);let A=e.eql(x,e.ONE);d=e.mul(w,I),x=e.mul(v,h),w=e.cmov(d,w,A),v=e.cmov(x,v,A);for(let E=s;E>H;E--){let p=E-et;p=et<<p-H;let S=e.pow(v,p);const Z=e.eql(S,e.ONE);d=e.mul(w,h),h=e.mul(h,h),S=e.mul(v,h),w=e.cmov(d,w,Z),v=e.cmov(S,v,Z)}return{isValid:A,value:w}};if(e.ORDER%Kt===yt){const m=(e.ORDER-yt)/Kt,u=e.sqrt(e.neg(n));B=(h,d)=>{let w=e.sqr(d);const x=e.mul(h,d);w=e.mul(w,x);let v=e.pow(w,m);v=e.mul(v,x);const A=e.mul(v,u),E=e.mul(e.sqr(v),d),p=e.eql(E,h);let S=e.cmov(A,v,p);return{isValid:p,value:S}}}return B}function je(e,n){if(te(e),!e.isValid(n.A)||!e.isValid(n.B)||!e.isValid(n.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const t=Ke(e,n.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return r=>{let s,o,f,i,c,a,b,l;s=e.sqr(r),s=e.mul(s,n.Z),o=e.sqr(s),o=e.add(o,s),f=e.add(o,e.ONE),f=e.mul(f,n.B),i=e.cmov(n.Z,e.neg(o),!e.eql(o,e.ZERO)),i=e.mul(i,n.A),o=e.sqr(f),a=e.sqr(i),c=e.mul(a,n.A),o=e.add(o,c),o=e.mul(o,f),a=e.mul(a,i),c=e.mul(a,n.B),o=e.add(o,c),b=e.mul(s,f);const{isValid:I,value:B}=t(o,a);l=e.mul(s,r),l=e.mul(l,B),b=e.cmov(b,f,I),l=e.cmov(l,B,I);const m=e.isOdd(r)===e.isOdd(l);return l=e.cmov(e.neg(l),l,m),b=e.div(b,i),{x:b,y:l}}}function Me(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return Tt(e);throw new Error("DST must be Uint8Array or string")}const Ye=V;function nt(e,n){if(e<0||e>=1<<8*n)throw new Error(`bad I2OSP call: value=${e} length=${n}`);const t=Array.from({length:n}).fill(0);for(let r=n-1;r>=0;r--)t[r]=e&255,e>>>=8;return new Uint8Array(t)}function Ge(e,n){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e[r]^n[r];return t}function ht(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function Ut(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function We(e,n,t,r){ht(e),ht(n),Ut(t),n.length>255&&(n=r(M(Tt("H2C-OVERSIZE-DST-"),n)));const{outputLen:s,blockLen:o}=r,f=Math.ceil(t/s);if(f>255)throw new Error("Invalid xmd length");const i=M(n,nt(n.length,1)),c=nt(0,o),a=nt(t,2),b=new Array(f),l=r(M(c,e,a,nt(0,1),i));b[0]=r(M(l,nt(1,1),i));for(let B=1;B<=f;B++){const m=[Ge(l,b[B-1]),nt(B+1,1),i];b[B]=r(M(...m))}return M(...b).slice(0,t)}function Xe(e,n,t,r,s){if(ht(e),ht(n),Ut(t),n.length>255){const o=Math.ceil(2*r/8);n=s.create({dkLen:o}).update(Tt("H2C-OVERSIZE-DST-")).update(n).digest()}if(t>65535||n.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return s.create({dkLen:t}).update(e).update(nt(t,2)).update(n).update(nt(n.length,1)).digest()}function jt(e,n,t){gt(t,{DST:"stringOrUint8Array",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:r,k:s,m:o,hash:f,expand:i,DST:c}=t;ht(e),Ut(n);const a=Me(c),b=r.toString(2).length,l=Math.ceil((b+s)/8),I=n*o*l;let B;if(i==="xmd")B=We(e,a,I,f);else if(i==="xof")B=Xe(e,a,I,s,f);else if(i==="_internal_pass")B=e;else throw new Error('expand must be "xmd" or "xof"');const m=new Array(n);for(let u=0;u<n;u++){const h=new Array(o);for(let d=0;d<o;d++){const w=l*(d+u*o),x=B.subarray(w,w+l);h[d]=U(Ye(x),r)}m[u]=h}return m}function Qe(e,n){const t=n.map(r=>Array.from(r).reverse());return(r,s)=>{const[o,f,i,c]=t.map(a=>a.reduce((b,l)=>e.add(e.mul(b,r),l)));return r=e.div(o,f),s=e.mul(s,e.div(i,c)),{x:r,y:s}}}function Je(e,n,t){if(typeof n!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(r,s){const o=jt(r,2,{...t,DST:t.DST,...s}),f=e.fromAffine(n(o[0])),i=e.fromAffine(n(o[1])),c=f.add(i).clearCofactor();return c.assertValidity(),c},encodeToCurve(r,s){const o=jt(r,1,{...t,DST:t.encodeDST,...s}),f=e.fromAffine(n(o[0])).clearCofactor();return f.assertValidity(),f}}}class oe extends Gt{constructor(n,t){super(),this.finished=!1,this.destroyed=!1,ye(n);const r=Wt(t);if(this.iHash=n.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const s=this.blockLen,o=new Uint8Array(s);o.set(r.length>s?n.create().update(r).digest():r);for(let f=0;f<o.length;f++)o[f]^=54;this.iHash.update(o),this.oHash=n.create();for(let f=0;f<o.length;f++)o[f]^=106;this.oHash.update(o),o.fill(0)}update(n){return wt(this),this.iHash.update(n),this}digestInto(n){wt(this),xe(n,this.outputLen),this.finished=!0,this.iHash.digestInto(n),this.oHash.update(n),this.oHash.digestInto(n),this.destroy()}digest(){const n=new Uint8Array(this.oHash.outputLen);return this.digestInto(n),n}_cloneInto(n){n||(n=Object.create(Object.getPrototypeOf(this),{}));const{oHash:t,iHash:r,finished:s,destroyed:o,blockLen:f,outputLen:i}=this;return n=n,n.finished=s,n.destroyed=o,n.blockLen=f,n.outputLen=i,n.oHash=t._cloneInto(n.oHash),n.iHash=r._cloneInto(n.iHash),n}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const ie=(e,n,t)=>new oe(e,n).update(t).digest();ie.create=(e,n)=>new oe(e,n);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Fe(e){return{hash:e,hmac:(n,...t)=>ie(e,n,Ee(...t)),randomBytes:Ft}}function tn(e,n){const t=r=>De({...e,...Fe(r)});return Object.freeze({...t(n),create:t})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Bt=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),xt=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),ce=BigInt(1),Et=BigInt(2),Mt=(e,n)=>(e+n/Et)/n;function fe(e){const n=Bt,t=BigInt(3),r=BigInt(6),s=BigInt(11),o=BigInt(22),f=BigInt(23),i=BigInt(44),c=BigInt(88),a=e*e*e%n,b=a*a*e%n,l=K(b,t,n)*b%n,I=K(l,t,n)*b%n,B=K(I,Et,n)*a%n,m=K(B,s,n)*B%n,u=K(m,o,n)*m%n,h=K(u,i,n)*u%n,d=K(h,c,n)*h%n,w=K(d,i,n)*u%n,x=K(w,t,n)*b%n,v=K(x,f,n)*m%n,A=K(v,r,n)*a%n,E=K(A,Et,n);if(!rt.eql(rt.sqr(E),e))throw new Error("Cannot find square root");return E}const rt=Te(Bt,void 0,void 0,{sqrt:fe}),vt=tn({a:BigInt(0),b:BigInt(7),Fp:rt,n:xt,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const n=xt,t=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-ce*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),s=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),o=t,f=BigInt("0x100000000000000000000000000000000"),i=Mt(o*e,n),c=Mt(-r*e,n);let a=U(e-i*t-c*s,n),b=U(-i*r-c*o,n);const l=a>f,I=b>f;if(l&&(a=n-a),I&&(b=n-b),a>f||b>f)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:l,k1:a,k2neg:I,k2:b}}}},mt),St=BigInt(0),ae=e=>typeof e=="bigint"&&St<e&&e<Bt,en=e=>typeof e=="bigint"&&St<e&&e<xt,Yt={};function pt(e,...n){let t=Yt[e];if(t===void 0){const r=mt(Uint8Array.from(e,s=>s.charCodeAt(0)));t=M(r,r),Yt[e]=t}return mt(M(t,...n))}const Ct=e=>e.toRawBytes(!0).slice(1),Ht=e=>lt(e,32),qt=e=>U(e,Bt),bt=e=>U(e,xt),Zt=vt.ProjectivePoint,nn=(e,n,t)=>Zt.BASE.multiplyAndAddUnsafe(e,n,t);function Rt(e){let n=vt.utils.normPrivateKeyToScalar(e),t=Zt.fromPrivateKey(n);return{scalar:t.hasEvenY()?n:bt(-n),bytes:Ct(t)}}function ue(e){if(!ae(e))throw new Error("bad x: need 0 < x < p");const n=qt(e*e),t=qt(n*e+BigInt(7));let r=fe(t);r%Et!==St&&(r=qt(-r));const s=new Zt(e,r,ce);return s.assertValidity(),s}function le(...e){return bt(V(pt("BIP0340/challenge",...e)))}function rn(e){return Rt(e).bytes}function sn(e,n,t=Ft(32)){const r=k("message",e),{bytes:s,scalar:o}=Rt(n),f=k("auxRand",t,32),i=Ht(o^V(pt("BIP0340/aux",f))),c=pt("BIP0340/nonce",i,s,r),a=bt(V(c));if(a===St)throw new Error("sign failed: k is zero");const{bytes:b,scalar:l}=Rt(a),I=le(b,s,r),B=new Uint8Array(64);if(B.set(b,0),B.set(Ht(bt(l+I*o)),32),!de(B,r,s))throw new Error("sign: Invalid signature produced");return B}function de(e,n,t){const r=k("signature",e,64),s=k("message",n),o=k("publicKey",t,32);try{const f=ue(V(o)),i=V(r.subarray(0,32));if(!ae(i))return!1;const c=V(r.subarray(32,64));if(!en(c))return!1;const a=le(Ht(i),Ct(f),s),b=nn(f,c,bt(-a));return!(!b||!b.hasEvenY()||b.toAffine().x!==i)}catch{return!1}}const un={getPublicKey:rn,sign:sn,verify:de,utils:{randomPrivateKey:vt.utils.randomPrivateKey,lift_x:ue,pointToBytes:Ct,numberToBytesBE:lt,bytesToNumberBE:V,taggedHash:pt,mod:U}},on=Qe(rt,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(n=>BigInt(n)))),cn=je(rt,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:rt.create(BigInt("-11"))}),he=Je(vt.ProjectivePoint,e=>{const{x:n,y:t}=cn(rt.create(e[0]));return on(n,t)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:rt.ORDER,m:1,k:128,expand:"xmd",hash:mt}),ln=he.hashToCurve,dn=he.encodeToCurve;export{dn as encodeToCurve,ln as hashToCurve,un as schnorr,vt as secp256k1};
