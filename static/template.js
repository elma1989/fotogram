export function renderSingleMiniPic(file, alt) {
    return /*html*/`
        <div class="img-wrapper">
            <img src="${file}" alt="${alt}">
        </div>
    `
}