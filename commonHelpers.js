import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-651d7991.js";const f=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");o.disabled=!0;let s=null;const F={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){if(e[0]<new Date){m.show({message:"Please choose a date in the future",position:"topCenter",messageSize:"16",backgroundColor:"#EF4040",messageColor:"#FFF"}),o.disabled=!0;return}else o.disabled=!1}};function C(e){const c=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:u,seconds:i}}const D=l(f,F);function n(e){return String(e).padStart(2,0)}function b(){const e=D.selectedDates[0];s=setInterval(()=>{const t=e-new Date;if(t<0){clearInterval(s);return}g(C(t))},1e3),o.disabled=!0}function g({days:e,hours:t,minutes:r,seconds:a}){h.textContent=n(e),y.textContent=n(t),S.textContent=n(r),p.textContent=n(a)}o.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
