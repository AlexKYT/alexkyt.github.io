import{ready}from"./ready.js";const isDark=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,highlighter=shiki.getHighlighter({theme:isDark?"github-light":"github-dark"});ready(async()=>{const e=document.querySelectorAll(".kg-gallery-image img");e.forEach(function(e){const t=e.closest(".kg-gallery-image");var r=e.attributes.width.value,e=e.attributes.height.value;t.style.flex=r/e+" 1 0%"});for(const t of document.querySelectorAll("iframe[src*=youtube]"))t.parentNode.classList.add("kg-embed-video")}),ready(async()=>{for(const t of document.querySelectorAll('pre > code[class^="language-"]')){var[,e]=Array.from(t.classList)[0].split("-"),e=(await highlighter).codeToHtml(t.innerText,e);t.parentNode.outerHTML=e}});
//# sourceMappingURL=post.js.map