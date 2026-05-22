import{a as s,p as e,w as h,q as g,M as w,L as j,S as y,t as b,O as k,i as S}from"./chunk-OIYGIGL5-CiWQ8Nxc.js";import{o as v}from"./onigiri-DuVJA__0.js";const f="portfolio_auth",i="Huddo121".trim();function N({children:n}){const[t,a]=s.useState(!1),[r,o]=s.useState(""),[p,m]=s.useState(!1),[l,u]=s.useState(!1),c=s.useRef(null);s.useEffect(()=>{if(!i){a(!0),u(!0);return}localStorage.getItem(f)===i&&a(!0),u(!0)},[]),s.useEffect(()=>{l&&!t&&c.current?.focus()},[l,t]);const x=d=>{d.preventDefault(),r===i?(localStorage.setItem(f,i),a(!0)):(m(!0),o(""),setTimeout(()=>m(!1),500),c.current?.focus())};return l?t?e.jsx(e.Fragment,{children:n}):e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50 px-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-8 max-w-md w-full",children:[e.jsxs("div",{className:"text-center space-y-3 w-full",children:[e.jsx("div",{className:"flex justify-center","aria-hidden":"true",children:e.jsx("div",{className:"password-gate-onigiri-float w-12 shrink-0",children:e.jsx("img",{src:v,alt:"",width:48,height:48,draggable:!1,decoding:"async",className:"password-gate-onigiri-img w-12 h-auto select-none"})})}),e.jsx("p",{className:"font-display text-xl md:text-2xl font-medium text-gray-800 whitespace-nowrap",children:"Hey there!"}),e.jsxs("div",{className:"space-y-1.5 w-full",children:[e.jsx("p",{className:"font-sans text-sm md:text-base text-gray-500 leading-[1.55]",children:"I'm adding the final touches to my design portfolio."}),e.jsx("p",{className:"font-sans text-sm md:text-base text-gray-500 leading-[1.55]",children:"Check back here soon — Tulsa"})]})]}),e.jsx("form",{onSubmit:x,style:p?{animation:"shake 0.4s ease-out"}:{},className:"w-full flex justify-center",children:e.jsxs("div",{className:"flex items-stretch border border-black/15 bg-white/70 backdrop-blur-sm overflow-hidden shadow-sm",children:[e.jsx("input",{ref:c,type:"password",value:r,onChange:d=>o(d.target.value),placeholder:"password",autoComplete:"current-password",className:"px-4 py-3 text-sm font-mono bg-transparent outline-none placeholder:text-black/25 w-48 text-black"}),e.jsx("button",{type:"submit",className:"px-4 py-3 text-sm font-sans font-medium text-black/50 hover:text-black hover:bg-black/5 transition-colors border-l border-black/10 cursor-pointer",children:"enter"})]})})]}),e.jsx("style",{children:`
        /* Soft vertical bob */
        @keyframes password-gate-onigiri-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .password-gate-onigiri-float {
          transform-origin: center center;
          animation: password-gate-onigiri-float 4.1s ease-in-out 0.2s infinite
            both;
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
      `})]}):null}const I=()=>[{rel:"icon",type:"image/png",href:"/favicon.png"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Inconsolata:wght@200..900&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"}];function O({children:n}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(w,{}),e.jsx(j,{})]}),e.jsxs("body",{children:[n,e.jsx(y,{}),e.jsx(b,{})]})]})}const T=h(function(){return e.jsx(N,{children:e.jsx(k,{})})}),X=g(function({error:t}){let a="Oops!",r="An unexpected error occurred.",o;return S(t)&&(a=t.status===404?"404":"Error",r=t.status===404?"The requested page could not be found.":t.statusText||r),e.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[e.jsx("h1",{children:a}),e.jsx("p",{children:r}),o]})});export{X as ErrorBoundary,O as Layout,T as default,I as links};
