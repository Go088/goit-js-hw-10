import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as n}from"./assets/vendor-992cd48f.js";const r=document.querySelector("#datetime-picker"),t=document.querySelector("button"),o={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(window.alert("Please choose a date in the future"),t.setAttribute("disabled",!0)):(t.removeAttribute("disabled"),e[0])}};n(r,o);console.log(o.onClose);
//# sourceMappingURL=commonHelpers.js.map