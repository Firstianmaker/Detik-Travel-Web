const images = document.querySelectorAll(".image-container img");
const heroSection = document.querySelector(".hero");
const imageContainer = document.getElementById("image-container");

let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", (event) => {
    const clickedImage = event.target;
    const backgroundImageUrl = clickedImage.src;
    heroSection.style.backgroundImage = `url(${backgroundImageUrl})`;

    // Update current index
    currentIndex = index;

    // Swap the images
    if (index === 1) {
      // Store the first and last images
      const firstImage = images[0];
      const lastImage = images[2];

      // Remove the first image from the container
      imageContainer.removeChild(firstImage);

      // Insert the first image after the last image
      imageContainer.insertBefore(firstImage, lastImage.nextSibling);

      // Move the last image to the first position
      imageContainer.insertBefore(lastImage, firstImage);
    }
  });
});
