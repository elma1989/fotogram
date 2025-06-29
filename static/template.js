export function renderSingleMiniPic(file, alt, index) {
    return /*html*/`
        <div class="img-wrapper">
            <img src="${file}" alt="${alt}" id="pic${index}">
        </div>
    `
}