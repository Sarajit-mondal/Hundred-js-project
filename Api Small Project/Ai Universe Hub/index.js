// All data: https://openapi.programming-hero.com/api/ai/tools

// Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

// Single data Example: https://openapi.programming-hero.com/api/ai/tool/01

const findData = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const allAi = await res.json();
  const aiTools = allAi.data.tools;

  createTools(aiTools);
};

// create and set data tools here
const createTools = (aiTools) => {
  console.log(aiTools);
  const aiContainer = document.querySelector(".ai-container");
  aiTools.forEach((tool) => {
    const card = document.createElement("div");
    card.classList.add("card", "w-auto", "bg-base-100", "shadow-xl");
    card.innerHTML = `
    <figure class="px-10 pt-10">
            <img
              src="${tool.image}"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title">${tool.name}</h2>
            <p>1 : <span>${tool.features[0]}</span></p>
            <p>2 : <span>${tool.features[0]}</span></p>
            <p>3 : <span>${tool.features[0]}</span></p>

            <div class="card-actions justify-between">
              <div>
                <h2 class="card-title">You Chat 2.0</h2>
                <small>${tool.published_in}</small>
              </div>
              <button class="btn text-red-500">-></button>
            </div>
          </div> `;
    aiContainer.appendChild(card);
  });
};

findData();
