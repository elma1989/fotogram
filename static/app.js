import { renderSingleMiniPic } from "./template.js";

let currentPictureIndex = 0;
let maxPicture = 0;

async function renderFotos() {
    const refContent = document.querySelector('.fotoarea');
    const response = await fetch('static/picdata.json');
    const picdata = await response.json();
    refContent.innerHTML = "";
    maxPicture = picdata.pics.length
    for (let i = 0; i < maxPicture; i++) {
        refContent.innerHTML += renderSingleMiniPic(picdata.path + picdata.pics[i].file, picdata.pics[i].alt, i+1);
    }
    const fotos = document.querySelectorAll('.img-wrapper img');
    fotos.forEach(
        foto => {
            foto.addEventListener('click', e => {
                currentPictureIndex = Number(String(e.currentTarget.getAttribute('id')).slice(3)) - 1;
                console.log(currentPictureIndex);
            });
        }
    );
}

renderFotos();