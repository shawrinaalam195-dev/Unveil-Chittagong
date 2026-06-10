document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gallery-container");
    const addImageBtn = document.createElement("button");
   
    addImageBtn.classList.add("add-image-btn");

    document.body.appendChild(addImageBtn);

    addImageBtn.addEventListener("click", function () {
        const newImage = document.createElement("div");
        newImage.classList.add("gallery-item");
        newImage.innerHTML = `<img src="https://source.unsplash.com/200x200/?nature,${Math.random()}" alt="New Image">`;
        galleryContainer.appendChild(newImage);
    });
});




document.getElementById("contactBtn").addEventListener("click", function() {
    window.location.href = "contact.html";
});



