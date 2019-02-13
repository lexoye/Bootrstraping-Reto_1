function imageCreator(value) {
    let image = document.createElement("img");
    image.src = value.image;
    image.classList.add("character");
    document.body.appendChild(image);

    // let imageParent = document.getElementById("character-pic");
    // imageParent.innerHTML = value.image;
    // document.getElementById("character-pic").src = value.image;
    // document.getElementById("character-pic2").src = value.image;
    // document.getElementById("character-pic3").src = value.image;
}

// API Call

fetch('https://rickandmortyapi.com/api/character').then((value) => {
    return value.json();
}).then((value) => {
    console.log(value);
    return value.results.forEach(imageCreator);
})

