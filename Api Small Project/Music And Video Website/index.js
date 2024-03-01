/*
All category : - https://openapi.programming-hero.com/api/videos/categories

ALL data by categoryId
URL Format: - https://openapi.programming-hero.com/api/videos/category/${id}

Example: - https://openapi.programming-hero.com/api/videos/category/1000
*/
const btnContainer = document.getElementById("btn-container");
const allCategory = document.getElementById("video-music-container");
const sortBtn = document.getElementById("sort-by-view");

let id = "1000";
let isSort = false;

// create btn
const creatBtn = async () => {
  const url = "https://openapi.programming-hero.com/api/videos/categories";
  const res = await fetch(url);
  const { data } = await res.json();

  for (let i of data) {
    const btn = document.createElement("button");
    btn.className =
      "btn py-2 px-4 bg-gray-500 text-white font-bold rounded-lg btnAll";
    btn.innerText = i.category;
    // btn click
    btn.addEventListener("click", () => {
      const btnAll = document.querySelectorAll(".btnAll");
      id = i.category_id;
      creatAllCategory(i.category_id);
      for (let b of btnAll) {
        b.classList.remove("bg-red-500");
      }

      btn.classList.add("bg-red-500");
    });
    btnContainer.appendChild(btn);
    // frist btn bg color set
    const fristBtn = btnContainer.firstElementChild;
    if (!fristBtn.classList.contains("bg-red-500")) {
      fristBtn.classList.add("bg-red-500");
    }
  }
};

// creat all category
const creatAllCategory = async (id, isSort) => {
  const url = ` https://openapi.programming-hero.com/api/videos/category/${id}`;
  const res = await fetch(url);
  const { data } = await res.json();
  //   data not found
  if (data.length === 0) {
    document.getElementById("drawing").classList.remove("hidden");
  } else {
    document.getElementById("drawing").classList.add("hidden");
  }
  //  sort by views
  if (isSort) {
    data.sort((a, b) => {
      const frist = a.others.views;
      const second = b.others.views;
      const fristNumber = parseFloat(frist.replace("k", "")) || 0;
      const secondNumber = parseFloat(second.replace("k", "")) || 0;
      return secondNumber - fristNumber;
    });
  }
  allCategory.innerHTML = "";
  data.forEach((d) => {
    const dates = d.others?.posted_date || 0;
    const date = parseInt(dates);
    const minutes = date / 60;
    const hour = parseInt(minutes / 60);
    const min = date % 60;

    console.log(hour, min);
    const div = document.createElement("div");
    div.className = "card card-compact w-auto bg-base-100 shadow-xl";
    div.innerHTML = `
            <figure class="w-full relative">
              <img
                src="${d.thumbnail}" class="h-48 w-full"
                alt="Shoes"
              />
              <span
                class="absolute right-3 bottom-3 bg-gray-700 px-3 py-1 rounded-xl text-white font-bold"
                >${hour}hrs ${min} min ago</span>
            </figure>
            <div class="card-body">
              <div class="flex space-x-3">
                <img src="${d.authors[0].profile_picture}" alt="" class="w-16 h-16 rounded-full" />
                <h2 class="card-title">${d.authors[0].profile_name}</h2>
              </div>
              <p>${d.title}<span></span></p>
              <p>${d.others.views}</p>
            </div> `;
    allCategory.appendChild(div);
  });
  console.log(data);
};

sortBtn.addEventListener("click", () => {
  isSort = true;
  creatAllCategory(id, isSort);
  console.log("sorBtn");
});

creatAllCategory("1000");
creatBtn();
