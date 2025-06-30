export function renderSingleMiniPic(file, alt, index) {
    return /*html*/`
        <div class="img-wrapper">
            <img src="${file}" alt="${alt}" id="pic${index}">
        </div>
    `
}

export function renderSingleCardPic (file, alt, caption, index, total) {
    return /*html*/`
        <figure>
            <img src="${file}" alt="${alt}">
            <figcaption>${caption}</figcaption>
        </figure>
        <div class="nav-arrows">
            <img src="img/left.svg">
            <span>${index} von ${total}</span>
            <img src="img/right.svg">
        </div>
    `
}