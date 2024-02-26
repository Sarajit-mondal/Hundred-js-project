const imgContainer = document.querySelector("#big-img");
const imges = [
  "images/gallery-1.jpg",
  "images/gallery-2.jpg",
  "images/gallery-3.jpg",
  "images/gallery-4.jpg",
];
document.querySelectorAll(".small-img").forEach((imge, index) => {
  imge.addEventListener("click", () => {
    imgContainer.src = imges[index];
  });
});
