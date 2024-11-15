function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEl = document.createElement("img")
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    })
}

async function getPhotos() {
    try {
        const data= await fetch('https://jsonplaceholder.typicode.com/photos')
        const photos = await data.json('');
    if (!photos.length) {
        console.log('error on return value')
    } else {
        onSuccess(photos)
    }
    } 
    catch(error) {
        onError(error)
    }
}

function onSuccess(photos) {
    renderPhotos(photos);
}

function onError(error) {
    console.log(`Error`, error);
}

async function start() {
    getPhotos()
}



start();