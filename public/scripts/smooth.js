document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    if (submitButton) {
        submitButton.addEventListener("click", albumSubmit);
    }

    function albumSubmit(e) {
        const artistSelect = document.getElementById("artist");
        if (artistSelect.value === "Select an Artist") {
            alert("Please select a valid artist.");
            e.preventDefault();
            return;
        }
    }

    const addButton = document.getElementById("addButton");
    if(addButton){
        addButton.addEventListener("click", addTrack);
    }

    let divCounter = 0;

    function addTrack() {
        const element = document.getElementById("tracks");
        const newDiv = document.createElement("div");

        const newTrackInput = document.createElement("input");
        newTrackInput.setAttribute("type", "text" + divCounter);
        newTrackInput.setAttribute("name", "The track");
        newTrackInput.setAttribute("id", "tracks" + divCounter);

        const delButton = document.createElement("button");
        delButton.setAttribute("class", "deleteButton");
        delButton.setAttribute("type", "button");
        delButton.setAttribute("id", "deleteButton");
        delButton.setAttribute("name", "Delete the track");

        const delButtonImage = document.createElement("img");
        delButtonImage.setAttribute("src", "trash-can.png");
        delButtonImage.setAttribute("alt", "Delete Button");
        delButtonImage.setAttribute("id", "trashImage");

        delButton.appendChild(delButtonImage);
        newDiv.append(newTrackInput, delButton);
        element.append(newDiv);

        divCounter++
        updateFormAndNavHeight();
    }

    const trashImage = document.getElementById("trashImage");
    if(trashImage){
        trashImage.addEventListener("click", trashRemove);
    }

    function trashRemove(e){
        if (e.target.tagName == "BUTTON") {
            let parentDiv = e.target.parentElement;
            parentDiv.remove();
            updateFormAndNavHeight();
        }
    }

    const removeButton = document.getElementById("tracks");
    if(removeButton){
        removeButton.addEventListener("click", removeTrack);
    }

    function removeTrack(e) {
        if (e.target.tagName == "BUTTON") {
            let parentDiv = e.target.parentElement;
            parentDiv.remove();
            updateFormAndNavHeight();
        }
    }

    const createAlbumsButton = document.getElementById("createAlbumsButton");
    if(createAlbumsButton){
        createAlbumsButton.addEventListener("click", createAlbumPage);
    }

    function createAlbumPage() {
        window.location.href = '/create';
    }

    const homeButton = document.getElementById("homeButton");
    if(homeButton){
        homeButton.addEventListener("click", homePage);
    }

    function homePage() {
        window.location.href = '/index';
    }

    function formAndNavHeight(){
        const height = 42 + 'vw';
        const formElement = document.querySelector('form');
        const navElement = document.querySelector('nav');

        formElement.style.height = height;
        navElement.style.height = height;
    }


    function updateFormAndNavHeight() {
        const trackCount = document.getElementById("tracks").childElementCount;
        const baseHeight = 42;
        const additionalHeight = trackCount * 4;
        const newHeight = baseHeight + additionalHeight + 'vw';

        const formElement = document.querySelector('form');
        const navElement = document.querySelector('nav');

        formElement.style.height = newHeight;
        navElement.style.height = newHeight;
    }

    if (window.location.pathname == 'album.store'){
        updateFormAndNavHeight();
    } else {
        formAndNavHeight();
    }
});
