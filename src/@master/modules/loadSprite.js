let spriteCache = [];

export default function loadSprite(spritePath) {
    return new Promise((resolve, reject) => {
        if (~spriteCache.indexOf(spritePath)) {
            return resolve();
        }

        const ajax = new XMLHttpRequest();
        ajax.open("GET", spritePath, true);
        ajax.send();
        ajax.onload = () => {
            if (ajax.status !== 200) {
                spriteCache = spriteCache.filter(item => item !== spritePath);
                reject();
            } else {
                document.body.insertAdjacentHTML('afterbegin', ajax.responseText);
                resolve();
            }
        };
        spriteCache.push(spritePath);
    });
}
