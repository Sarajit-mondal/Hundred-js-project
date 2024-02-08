const watchBtn = document.querySelector(".btn");
const movieContain = document.querySelector(".movie-contain");
const videoContain = document.querySelector(".video-contain");
const closeIcon = document.querySelector("span");
const videoEl = document.querySelector("video");

watchBtn.addEventListener("click", () => {
  movieContain.classList.toggle("hidden");
  videoContain.classList.toggle("hidden");
});
closeIcon.addEventListener("click", () => {
  movieContain.classList.toggle("hidden");
  videoContain.classList.toggle("hidden");
  videoEl.pause();
  videoEl.currentTime = 0;
});
