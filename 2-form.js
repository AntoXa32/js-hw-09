import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const a={email:"",message:""},c=document.querySelector(".feedback-form"),m="feedback-form-state";c.addEventListener("input",o=>{const e=o.target,{name:r,value:t}=e;(e.tagName==="INPUT"||e.tagName==="TEXTAREA")&&(a[r]=t,console.log(t)),localStorage.setItem(m,JSON.stringify(a))});
//# sourceMappingURL=2-form.js.map
