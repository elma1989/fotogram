import { renderSingleMiniPic } from "./template.js";

async function renderFotos() {
    const refContent = document.querySelector('#foto-content .content');
    const response = await fetch('static/picdata.json');
    const picdata = await response.json();
    refContent.innerHTML = "";
    for (let i = 0; i < picdata.pics.length; i++) {
        refContent.innerHTML += renderSingleMiniPic(picdata.path + picdata.pics[i].file, picdata.pics[i].alt);
    }
}
renderFotos();