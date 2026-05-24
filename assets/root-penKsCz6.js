import{a as t,p as e,q as E,w as C,t as R,M as T,L as I,S as O,v as A,O as Z,i as _}from"./chunk-OIYGIGL5-C1pwSAWx.js";import{H,T as D,E as L}from"./ContactLinks-CFmbuX0u.js";import{o as M}from"./onigiri-DuVJA__0.js";import{C as B}from"./CurrentlyWorking-aYeKVp9w.js";const v="portfolio_auth",u="BigTed123".trim(),X=1500,F=5e3,V=["0s","-0.47s","-0.94s"];function Y({className:a}){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",className:a,children:e.jsx("path",{d:"M5 20h3v2H3v-6h2v4Zm16 2h-5v-2h3v-4h2v6Zm-11-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-2-2h-4v-2h4v2Zm-7-2H5v-3h2v3Zm12 0h-2v-3h2v3ZM5 13H3v-2h2v2Zm16 0h-2v-2h2v2ZM9 9H3v2H1V7h8v2Zm14 2h-2V9h-6V7h8v4ZM11 7H9V3h2v4Zm4 0h-2V3h2v4Zm-2-4h-2V1h2v2Z"})})}function q({children:a}){const[s,n]=t.useState(!1),[o,c]=t.useState(""),[b,g]=t.useState(!1),[d,h]=t.useState(!1),[x,m]=t.useState(!1),[y,p]=t.useState(0),[j,w]=t.useState(!1),f=t.useRef(null),i=t.useRef(null),l=t.useRef(null);t.useEffect(()=>{if(!u){n(!0),h(!0);return}localStorage.getItem(v)===u&&n(!0),h(!0)},[]),t.useEffect(()=>{d&&!s&&f.current?.focus()},[d,s]),t.useEffect(()=>()=>{i.current&&clearTimeout(i.current),l.current&&clearTimeout(l.current)},[]);const S=()=>{w(!0),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{w(!1),l.current=null},F)},k=()=>{x?(m(!1),requestAnimationFrame(()=>m(!0))):m(!0),i.current&&clearTimeout(i.current);const r=y+1;if(r>=3){p(0),S();return}p(r),i.current=setTimeout(()=>{p(0),i.current=null},X)},N=r=>{r.preventDefault(),o===u?(localStorage.setItem(v,u),n(!0)):(g(!0),c(""),setTimeout(()=>g(!1),500),f.current?.focus())};return d?s?e.jsx(e.Fragment,{children:a}):e.jsxs("div",{className:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-6 py-12",children:[e.jsxs("div",{className:"flex flex-col items-start text-left gap-12 md:gap-16 max-w-lg w-full",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h1",{className:"font-display text-[clamp(1.375rem,calc((100vw-7rem)/10),2.25rem)] font-semibold leading-tight text-gray-800 whitespace-nowrap",children:H}),e.jsxs("div",{className:"password-gate-onigiri-float relative w-12 shrink-0",children:[j&&e.jsx("div",{className:"password-gate-confused-stars pointer-events-none","aria-hidden":"true",children:V.map(r=>e.jsx("div",{className:"password-gate-confused-star",style:{animationDelay:r},children:e.jsx(Y,{className:"password-gate-confused-star-icon block text-slate-600"})},r))}),e.jsx("button",{type:"button",onClick:k,"aria-label":"Spin the onigiri",className:"password-gate-onigiri-img-button cursor-pointer border-0 bg-transparent p-0",children:e.jsx("img",{src:M,alt:"",width:48,height:48,draggable:!1,decoding:"async",onAnimationEnd:()=>m(!1),className:["password-gate-onigiri-img w-12 h-auto select-none",x&&"password-gate-onigiri-spin"].filter(Boolean).join(" ")})})]})]}),e.jsx("p",{className:"font-sans text-sm md:text-base text-gray-500 leading-[1.75]",children:D}),e.jsx("p",{className:"font-sans text-sm text-gray-500 leading-relaxed",children:e.jsx(B,{})})]}),e.jsxs("div",{className:"w-full space-y-3",children:[e.jsx("p",{className:"font-sans text-sm text-gray-600",children:"Enter the password provided to visit my portfolio."}),e.jsx("form",{onSubmit:N,style:b?{animation:"shake 0.4s ease-out"}:{},className:"w-full",children:e.jsxs("div",{className:"flex items-stretch w-full border border-black/15 bg-white/70 backdrop-blur-sm overflow-hidden shadow-sm",children:[e.jsx("input",{ref:f,type:"password",value:o,onChange:r=>c(r.target.value),placeholder:"password",autoComplete:"current-password",className:"flex-1 min-w-0 px-4 py-3 text-base md:text-sm font-mono bg-transparent outline-none placeholder:text-black/25 text-black"}),e.jsx("button",{type:"submit",className:"shrink-0 px-4 py-3 text-base md:text-sm font-sans font-medium text-black/50 hover:text-black hover:bg-black/5 transition-colors border-l border-black/10 cursor-pointer",children:"enter"})]})})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-start gap-x-2 gap-y-2",children:[e.jsx("p",{className:"font-sans text-sm text-gray-500",children:"Having trouble getting in? Shoot me an email:"}),e.jsx(L,{className:"text-sm text-gray-700 hover:underline flex items-center gap-2 font-mono"})]})]}),e.jsx("style",{children:`
        /* Soft vertical bob for the onigiri */
        @keyframes password-gate-onigiri-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .password-gate-onigiri-float {
          transform-origin: center center;
          animation: password-gate-onigiri-float 4.1s ease-in-out 0.2s infinite both;
        }
        .password-gate-onigiri-img-button {
          display: block;
        }
        .password-gate-onigiri-img {
          display: block;
          image-rendering: pixelated;
          filter: drop-shadow(0 6px 10px rgba(17, 24, 39, 0.2));
        }
        @keyframes password-gate-onigiri-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(2520deg); }
        }
        .password-gate-onigiri-spin {
          transform-origin: center center;
          animation: password-gate-onigiri-spin 2s cubic-bezier(0.12, 0.85, 0.15, 1) forwards;
        }
        .password-gate-confused-stars {
          position: absolute;
          left: 50%;
          bottom: 100%;
          margin-bottom: 4px;
          width: 0;
          height: 0;
        }
        .password-gate-confused-star {
          position: absolute;
          left: 0;
          top: 0;
          width: 18px;
          height: 18px;
          margin-left: -9px;
          margin-top: -9px;
          animation: password-gate-confused-star-orbit 1.4s linear infinite;
        }
        .password-gate-confused-star-icon {
          image-rendering: pixelated;
        }
        @keyframes password-gate-confused-star-orbit {
          0% {
            transform: translate(32px, -10px) scale(0.85);
            opacity: 0.8;
          }
          25% {
            transform: translate(0, -18px) scale(0.5);
            opacity: 0.35;
          }
          50% {
            transform: translate(-32px, -10px) scale(0.85);
            opacity: 0.8;
          }
          75% {
            transform: translate(0, -4px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translate(32px, -10px) scale(0.85);
            opacity: 0.8;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .password-gate-onigiri-float {
            animation: none;
            transform: none;
          }
          .password-gate-onigiri-spin {
            animation: none;
          }
          .password-gate-confused-star {
            animation: none;
            transform: translate(0, -10px) scale(0.85);
            opacity: 0.7;
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `})]}):null}function G(){const{pathname:a}=E();t.useEffect(()=>{const s=requestAnimationFrame(()=>{window.scrollX!==0&&window.scrollTo(0,window.scrollY)});return()=>cancelAnimationFrame(s)},[a])}const K=()=>[{rel:"icon",type:"image/png",href:"/favicon.png"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Inconsolata:wght@200..900&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"}];function J({children:a}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(T,{}),e.jsx(I,{})]}),e.jsxs("body",{children:[a,e.jsx(O,{}),e.jsx(A,{})]})]})}const Q=C(function(){return G(),e.jsx(q,{children:e.jsx(Z,{})})}),$=R(function({error:s}){let n="Oops!",o="An unexpected error occurred.",c;return _(s)&&(n=s.status===404?"404":"Error",o=s.status===404?"The requested page could not be found.":s.statusText||o),e.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[e.jsx("h1",{children:n}),e.jsx("p",{children:o}),c]})});export{$ as ErrorBoundary,J as Layout,Q as default,K as links};
