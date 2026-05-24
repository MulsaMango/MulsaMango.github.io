import{a as s,p as e,q as h,w as g,t as w,M as y,L as j,S as b,v,O as k,i as N}from"./chunk-OIYGIGL5-C1pwSAWx.js";import{H as S,T as E,E as R}from"./ContactLinks-CFmbuX0u.js";import{o as A}from"./onigiri-DuVJA__0.js";import{C as I}from"./CurrentlyWorking-aYeKVp9w.js";const p="portfolio_auth",i="Huddo121".trim();function L({children:a}){const[t,r]=s.useState(!1),[n,o]=s.useState(""),[u,d]=s.useState(!1),[l,f]=s.useState(!1),c=s.useRef(null);s.useEffect(()=>{if(!i){r(!0),f(!0);return}localStorage.getItem(p)===i&&r(!0),f(!0)},[]),s.useEffect(()=>{l&&!t&&c.current?.focus()},[l,t]);const x=m=>{m.preventDefault(),n===i?(localStorage.setItem(p,i),r(!0)):(d(!0),o(""),setTimeout(()=>d(!1),500),c.current?.focus())};return l?t?e.jsx(e.Fragment,{children:a}):e.jsxs("div",{className:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-6 py-12",children:[e.jsxs("div",{className:"flex flex-col items-start text-left gap-12 md:gap-16 max-w-lg w-full",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h1",{className:"font-display text-[clamp(1.375rem,calc((100vw-7rem)/10),2.25rem)] font-semibold leading-tight text-gray-800 whitespace-nowrap",children:S}),e.jsx("div",{className:"password-gate-onigiri-float w-12 shrink-0","aria-hidden":"true",children:e.jsx("img",{src:A,alt:"",width:48,height:48,draggable:!1,decoding:"async",className:"password-gate-onigiri-img w-12 h-auto select-none"})})]}),e.jsx("p",{className:"font-sans text-sm md:text-base text-gray-500 leading-[1.75]",children:E}),e.jsx("p",{className:"font-sans text-sm text-gray-500 leading-relaxed",children:e.jsx(I,{})})]}),e.jsxs("div",{className:"w-full space-y-3",children:[e.jsx("p",{className:"font-sans text-sm text-gray-600",children:"Enter the password provided to visit my portfolio."}),e.jsx("form",{onSubmit:x,style:u?{animation:"shake 0.4s ease-out"}:{},className:"w-full",children:e.jsxs("div",{className:"flex items-stretch w-full border border-black/15 bg-white/70 backdrop-blur-sm overflow-hidden shadow-sm",children:[e.jsx("input",{ref:c,type:"password",value:n,onChange:m=>o(m.target.value),placeholder:"password",autoComplete:"current-password",className:"flex-1 min-w-0 px-4 py-3 text-base md:text-sm font-mono bg-transparent outline-none placeholder:text-black/25 text-black"}),e.jsx("button",{type:"submit",className:"shrink-0 px-4 py-3 text-base md:text-sm font-sans font-medium text-black/50 hover:text-black hover:bg-black/5 transition-colors border-l border-black/10 cursor-pointer",children:"enter"})]})})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-start gap-x-2 gap-y-2",children:[e.jsx("p",{className:"font-sans text-sm text-gray-500",children:"Having trouble getting in? Shoot me an email:"}),e.jsx(R,{className:"text-sm text-gray-700 hover:underline flex items-center gap-2 font-mono"})]})]}),e.jsx("style",{children:`
        /* Soft vertical bob for the onigiri */
        @keyframes password-gate-onigiri-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .password-gate-onigiri-float {
          transform-origin: center center;
          animation: password-gate-onigiri-float 4.1s ease-in-out 0.2s infinite both;
        }
        .password-gate-onigiri-img {
          display: block;
          image-rendering: pixelated;
          filter: drop-shadow(0 6px 10px rgba(17, 24, 39, 0.2));
        }
        @media (prefers-reduced-motion: reduce) {
          .password-gate-onigiri-float {
            animation: none;
            transform: none;
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `})]}):null}function T(){const{pathname:a}=h();s.useEffect(()=>{const t=requestAnimationFrame(()=>{window.scrollX!==0&&window.scrollTo(0,window.scrollY)});return()=>cancelAnimationFrame(t)},[a])}const P=()=>[{rel:"icon",type:"image/png",href:"/favicon.png"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Inconsolata:wght@200..900&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"}];function Y({children:a}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(y,{}),e.jsx(j,{})]}),e.jsxs("body",{children:[a,e.jsx(b,{}),e.jsx(v,{})]})]})}const q=g(function(){return T(),e.jsx(L,{children:e.jsx(k,{})})}),B=w(function({error:t}){let r="Oops!",n="An unexpected error occurred.",o;return N(t)&&(r=t.status===404?"404":"Error",n=t.status===404?"The requested page could not be found.":t.statusText||n),e.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[e.jsx("h1",{children:r}),e.jsx("p",{children:n}),o]})});export{B as ErrorBoundary,Y as Layout,q as default,P as links};
