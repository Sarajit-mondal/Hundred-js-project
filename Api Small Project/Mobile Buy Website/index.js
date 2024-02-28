// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089
const findData = async (search = "apple", isShowAll) => {
  try {
    const responce = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${search}`
    );
    const data = await responce.json();
    const allData = data.data;
    if (allData.length === 0) {
      const container = document.getElementById("mobile-container");
      container.innerText = "Data not found";
      console.log("nodn found");
      loading(true);
      document.getElementById("show-all").classList.add("hidden");
    } else {
      createAndSetData(allData, isShowAll);
    }
  } catch (error) {
    console.error(error);
    const container = document.getElementById("mobile-container");
    container.innerText = "Data not found";
    loading(true);
    document.getElementById("show-all").classList.add("hidden");
  }
};

//   creatElement and set data
function createAndSetData(alldata, isShowAll) {
  const container = document.getElementById("mobile-container");
  container.innerHTML = "";
  console.log(alldata);

  console.log(isShowAll);
  if (alldata.length > 12 && !isShowAll) {
    document.getElementById("show-all").classList.remove("hidden");
  } else {
    document.getElementById("show-all").classList.add("hidden");
  }

  if (!isShowAll) {
    alldata = alldata.slice(0, 12);
  }
  loading(true);
  alldata.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card card-compact w-auto bg-base-100 shadow-xl">
            <figure>
              <img
                src=${data.image}
                alt="Shoes" class="mx-auto"
              />
            </figure>
            <div class="card-body text-center">
              <h2 class="card-title text-2xl font-bold mx-auto text-nowrap">
                ${data.phone_name}
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered
              </p>
              <p class="text-3xl font-bold">$ <span>500</span></p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary" onclick="handalShowDetails('${data.slug}')" >Show details</button>
              </div>
            </div>
          </div>
    `;
    container.appendChild(div);
  });
}

// handal show details
async function handalShowDetails(id) {
  const respon = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const phone = await respon.json();
  const phoneDetails = phone.data;

  setMobileDetails(phoneDetails);
}

// set phoneDetails modal
function setMobileDetails(details) {
  console.log(details);
  const modalEl = document.getElementById("my_modal_4");
  const boxDiv = document.createElement("div");
  boxDiv.classList.add(
    "modal-box",
    "w-2/4",
    "max-w-5xl",
    "h-[90%]",
    "space-y-5",
    "p-5"
  );
  boxDiv.innerHTML = `
  <h3 class="font-bold text-xl">${details.name}</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p>Storage: <span> 128gb</span></p>
            <p>Display size: <span> 6.4inches</span></p>
            <p>Chipset: <span> Apple A15</span></p>
            <p>Memory: <span> 128GB</span></p>
            <p>slug: <span> ${details.slug}</span></p>
            <p>Release data: <span> ${details.releaseDate}</span></p>
            <p>Brand: <span> ${details.brand}</span></p>
            <p>GPS: <span> ${details.others.GPS}</span></p>

            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button, it will close the modal -->
                <button class="btn bg-red-400">Close</button>
              </form>
  `;
  modalEl.appendChild(boxDiv);

  my_modal_4.showModal();
}

// loding
const loading = (isloading = true) => {
  const loadeEl = document.getElementById("loading");
  if (isloading) {
    loadeEl.classList.add("hidden");
  } else {
    loadeEl.classList.remove("hidden");
  }
};
loading();

// handlesearch
const handleSearch = (isShowAll) => {
  const searchText = document.getElementById("search");
  const value = searchText.value === "" ? "apple" : searchText.value;
  findData(value, isShowAll);
};

document.getElementById("search-btn").addEventListener("click", () => {
  loading(false);
  handleSearch();
});

// show all button
document.getElementById("show-all").addEventListener("click", () => {
  handleSearch(true);
});

findData();
