import"./modulepreload-polyfill.0d94a2e8.js";/* empty css                 */import{n as f}from"./nit_and_iiit_college_data.35cd7a00.js";let y=document.getElementsByName("gender"),p=document.getElementById("state-select"),h=document.getElementById("stream-select"),v=document.getElementById("rank-input"),E=document.getElementById("sort-by-select"),k=document.getElementById("college-list"),_=0;for(let t of f)t.college_id=_,_++;function r(){let t=Array.from(y).filter(e=>e.checked)[0].value,s=p.value,o=h.value,i=+v.value,a=E.value,d=f.filter(e=>{var l,n,g,m,u;return e.type=="nit"?((g=(n=(l=e==null?void 0:e[o])==null?void 0:l[s==e.state?"home_state":"other_state"])==null?void 0:n[t])==null?void 0:g.close)>i:((u=(m=e==null?void 0:e[o])==null?void 0:m[t])==null?void 0:u.close)>i}),b=e=>(l,n)=>(l=e(l),n=e(n),l>n?1:l<n?-1:0),B=a==="close"?e=>e.type=="nit"?e[o][s==e.state?"home_state":"other_state"][t].close:e[o][t].close:a==="placement"?e=>-e.placement:e=>e[a];d.sort(b(B));let c="";for(let e of d)c+=`<a href="college_info.html?type=nit_and_iiit&id=${e.college_id}" target="_blank" class="
                            block 
                            px-4 py-2 
                            border-b border-gray-200 
                            w-full 
                            first:rounded-t-lg last:rounded-b-lg 
                            hover:bg-gray-100 hover:text-orange-500 
                            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:text-orange-500 
                            cursor-pointer
                        ">
                            ${e.college_name}
                        </a>`;k.innerHTML=c}for(let t of y)t.addEventListener("change",r);p.addEventListener("change",r);h.addEventListener("change",r);v.addEventListener("input",r);E.addEventListener("change",r);r();
