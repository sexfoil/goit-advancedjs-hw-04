import{a as v,S,i as h}from"./assets/vendor-b9d7420c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const E="https://pixabay.com/api/",f="40838558-c247548bc4ad52de754856e08",d={key:f,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function P(e){return`${E}?${e}`}function R(e,t){return t.q=e,new URLSearchParams(t)}async function A(e,t={key:f}){const n=R(e,t);return await v.get(P(n))}function g(e,t=20,n=1){return d.per_page=t,d.page=n,A(e,d)}const a={searchForm:document.querySelector(".search-form"),searchButton:document.querySelector('button[type="submit"]'),gallery:document.querySelector(".gallery"),guard:document.querySelector(".js-guard")},u=40;let c=0,l=1,m="";const M={root:null,rootMargin:"150px",treshhold:1},p=new IntersectionObserver($,M);function $(e){e.forEach(t=>{t.isIntersecting&&(l+=1,g(m,u,l).then(o=>{y(o.data),u*l>=c&&(p.unobserve(a.guard),w("We're sorry, but you've reached the end of search results."))}).catch(o=>b(o.message)))})}function C(e){return e.map(({webformatURL:t,largeImageURL:n,tags:o,likes:r,views:s,comments:i,downloads:L})=>`            
                <div class="photo-card">
                    <a href="${n}"><img class="image" src="${t}" alt="${o}" loading="lazy" /></a>
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            <span>${r}</span> 
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            <span>${s}</span>
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            <span>${i}</span>
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            <span>${L}</span>
                        </p>
                    </div>
                </div>            
        `).join("")}function y(e){a.gallery.insertAdjacentHTML("beforeend",C(e.hits)),new S(".gallery a",{captionsData:"alt",captionDelay:250});const{height:t}=a.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}function q(){a.gallery.innerHTML="",c=0,l=1,m=""}function b(e){h.show({message:e,messageColor:"white",backgroundColor:"tomato",timeout:2500,position:"topRight"})}function w(e){h.show({message:e,messageColor:"white",backgroundColor:"green",timeout:3e3,position:"topRight"})}function I(e){e.preventDefault(),q();const t=new FormData(a.searchForm);g(t.get("searchQuery").trim().toLowerCase(),u).then(o=>{if(o.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again.");c=o.data.totalHits,w(`Hooray! We found ${c} images.`),y(o.data),u*l<c&&p.observe(a.guard)}).catch(o=>b(o.message))}a.searchButton.addEventListener("click",I);
//# sourceMappingURL=commonHelpers.js.map
