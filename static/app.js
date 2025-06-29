import { renderSingleMiniPic, renderSingleCardPic } from "./template.js";

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
    const overlay = document.querySelector('.overlay');
    const refFotocard = document.querySelector('.fotocard-content');
    const response = await fetch('static/picdata.json');
    const picdata = await response.json();
    
    if (overlay.classList.contains('d-none')) {
        toggleOverlay();
    }

    refFotocard.addEventListener('click', e => {
        e.stopPropagation();
    });
    refFotocard.innerHTML = renderSingleCardPic(picdata.path + picdata.pics[index].file, picdata.pics[index].alt, picdata.pics[index].caption, index+1, picdata.pics.length);    
    const arrows = document.querySelectorAll('.nav-arrows img');
    if (index == 0) {
        arrows[0].classList.add('d-hide');
    }
    if (index == picdata.pics.length - 1) {
        arrows[1].classList.add('d-hide');
    }
    arrows[0].addEventListener('click', () => {renderFotoCard(index-1);});
    arrows[1].addEventListener('click', () => {renderFotoCard(index+1);});
}


function toggleOverlay() {
    document.querySelector('.overlay').classList.toggle('d-none');
}

renderFotos();
refOverlay.addEventListener('click', () => {
    toggleOverlay();
});