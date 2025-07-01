import { picdata } from "./picdata.js";
import { renderSingleMiniPic, renderSingleCardPic } from "./template.js";

const refOverlay = document.querySelector('.overlay');

function renderFotos() {
    const refContent = document.querySelector('.fotoarea');
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

function renderFotoCard(index) {
    const overlay = document.querySelector('.overlay');
    const refFotocard = document.querySelector('.fotocard-content');
    
    if (overlay.classList.contains('d-none')) {
        toggleOverlay();
    }

    refFotocard.addEventListener('click', e => {
        e.stopPropagation();
    });
    refFotocard.innerHTML = renderSingleCardPic(picdata.path + picdata.pics[index].file, picdata.pics[index].alt, picdata.pics[index].caption, index+1, picdata.pics.length);    
    
    const img = document.querySelector('.fotocard-content figure img');
    const caption = document.querySelector('.fotocard-content figure figcaption');
    const arrows = document.querySelectorAll('.nav-arrows img');
    const counter = document.querySelector('.nav-arrows span span');

    if (index == 0) {
        arrows[0].classList.add('d-hide');
    }
    if (index == picdata.pics.length - 1) {
        arrows[1].classList.add('d-hide');
    }
    arrows[0].addEventListener('click', () => {
        if (index > 0) {
            index--;
            if (index == 0) {
                arrows[0].classList.add('d-hide');
            } else {
                arrows[0].classList.remove('d-hide');
            }
            if (index == picdata.pics.length - 1) {
                arrows[1].classList.add('d-hide');
            } else {
                arrows[1].classList.remove('d-hide');
            }
            img.setAttribute('src', picdata.path + picdata.pics[index].file);
            img.setAttribute('alt', picdata.pics[index].alt);
            caption.textContent = picdata.pics[index].caption;
            counter.textContent = index + 1;
        }
    });
    arrows[1].addEventListener('click', () => {
        if (index < picdata.pics.length - 1) {
            index++;
            if (index == 0) {
                arrows[0].classList.add('d-hide');
            } else {
                arrows[0].classList.remove('d-hide');
            }
            if (index == picdata.pics.length - 1) {
                arrows[1].classList.add('d-hide');
            } else {
                arrows[1].classList.remove('d-hide');
            }
            img.setAttribute('src', picdata.path + picdata.pics[index].file);
            img.setAttribute('alt', picdata.pics[index].alt);
            caption.textContent = picdata.pics[index].caption;
            counter.textContent = index + 1;
        }
    });
}


function toggleOverlay() {
    document.querySelector('.overlay').classList.toggle('d-none');
}

renderFotos();
refOverlay.addEventListener('click', () => {
    toggleOverlay();
});