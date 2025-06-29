import { renderSingleMiniPic } from "./template.js";

const refOverlay = document.querySelector('.overlay');

async function renderFotos() {
    const refContent = document.querySelector('.fotoarea');
    const response = await fetch('static/picdata.json');
    const picdata = await response.json();
    refContent.innerHTML = "";
    for (let i = 0; i < picdata.pics.length; i++) {
        refContent.innerHTML += renderSingleMiniPic(picdata.path + picdata.pics[i].file, picdata.pics[i].alt, i+1);
    }
    const fotos = document.querySelectorAll('.img-wrapper img');
    fotos.forEach(
        foto => {
            foto.addEventListener('click', e => {
                renderFotoCard(Number(String(e.currentTarget.getAttribute('id')).slice(3)) - 1);
            });
        }
    );
}

async function renderFotoCard(index) {
    toggleOverlay();
}


function toggleOverlay() {
    console.log(document.querySelector('.overlay').classList.toggle('d-none'));
}

renderFotos();
refOverlay.addEventListener('click', () => {
    toggleOverlay();
});