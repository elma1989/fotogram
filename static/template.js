export function renderSingleMiniPic(file, alt, index) {
    return /*html*/`
        <div class="img-wrapper">
            <img src="${file}" alt="${alt}" id="pic${index}">
        </div>
    `
}

export function renderSingleCardPic (file, alt, caption) {
    return /*html*/`
        <figure>
            <img src="${file}" alt="${alt}">
            <figcaption>${caption}</figcaption>
        </figure>
    `
}