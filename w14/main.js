function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEl = document.createElement("img")
        imgEl.setAttribute("src", img.thumbnailURL);
        document.getElementById("output").appendChild(imgEl);
    })
}

async function getPhotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await response.json('');
        onSuccess(data)
    } 
    catch(error) {
        console.log(`Error`, error);
    }
}

async function start() {
    getPhotos()
}

function onSuccess(photos) {
    renderPhotos(photos);
}
 
function onError(error) {
    console.log(`Error`, error);
}

start();