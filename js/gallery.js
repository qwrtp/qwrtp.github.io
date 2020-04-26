function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img")
  let mainImage = document.querySelector("#gallery-photo img");
  let currentClass = "current";
  thumbnails.forEach((thumbnail) => {

    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener("click", function() {

      // Set clicked image as display image
      mainImage.setAttribute("src", newImageSrc);
      let newImageAlt = thumbnail.dataset.title;
      mainImage.setAttribute("alt", newImageAlt);

      // Change which thumbnail image is current
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update image info
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = document.querySelector(".title");
      let description = document.querySelector(".description");

      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;

  });
});
}
