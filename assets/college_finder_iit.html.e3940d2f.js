import"./modulepreload-polyfill.0d94a2e8.js";/* empty css                 */import{i as d}from"./iit_college_data.7301ec16.js";let g=document.getElementsByName("gender"),m=document.getElementById("stream-select"),u=document.getElementById("rank-input"),f=document.getElementById("sort-by-select"),v=document.getElementById("college-list"),s=0;for(let l of d)l.college_id=s,s++;function r(){let l=Array.from(g).filter(e=>e.checked)[0].value,a=m.value,_=+u.value,o=f.value,i=d.filter(e=>{var t;return((t=e[a][l])==null?void 0:t.close)>_}),p=e=>(t,n)=>(t=e(t),n=e(n),t>n?1:t<n?-1:0),y=o==="close"?e=>e[a][l].close:o==="placement"?e=>-e.placement:e=>e[o];i.sort(p(y));let c="";for(let e of i)c+=`<a href="college_info.html?type=iit&id=${e.college_id}" target="_blank" class="
                            block 
                            px-4 py-2 
                            border-b border-gray-200 
                            w-full 
                            hover:bg-gray-100 hover:text-orange-500 
                            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:text-orange-500 
                            cursor-pointer
                        ">
                            ${e.college_name}
                        </a>`;v.innerHTML=c}for(let l of g)l.addEventListener("change",r);m.addEventListener("change",r);u.addEventListener("input",r);f.addEventListener("change",r);r();
