const menuHighlights = [
  {
    name: "[PLACEHOLDER: Dish name]",
    description: "[PLACEHOLDER: 1-2 sentence description for this signature dish]",
    badges: ["[PLACEHOLDER: Dietary tag]", "[PLACEHOLDER: Popular tag]"],
    image: "assets/images/falafel_photo.png"
  },
  {
    name: "[PLACEHOLDER: Dish name]",
    description: "[PLACEHOLDER: Description]",
    badges: ["[PLACEHOLDER: Tag]", "[PLACEHOLDER: Tag]"],
    image: "assets/images/falafel_photo.png"
  },
  {
    name: "[PLACEHOLDER: Dish name]",
    description: "[PLACEHOLDER: Description]",
    badges: ["[PLACEHOLDER: Tag]"],
    image: "assets/images/show.food_.alibaba.jpg"
  },
  {
    name: "[PLACEHOLDER: Dish name]",
    description: "[PLACEHOLDER: Description]",
    badges: ["[PLACEHOLDER: Tag]"],
    image: "assets/images/ahlibabas-shop.jpg"
  }
];

const orderingSteps = [
  "Pick your items in the Square storefront and choose the pickup window that fits your schedule.",
  "Use the order notes for sauce requests, extra napkins, or delivery instructions for curbside handoff.",
  "Check out securely with Square—your card is charged immediately and the ticket prints on our line.",
  "Head to the Ahli Baba's counter, give us the name on the order, and we’ll hand off your food fresh off the grill."
];

const vendingConcepts = [
  {
    name: "Poncho's Stand",
    summary: "Fresh tacos and street-fare pop-up for festivals and campus events.",
    specialties: ["Tacos", "Street corn", "Churros"],
    footprints: ["10x10"],
    image: "assets/images/ponchos-stand.jpg"
  },
  {
    name: "Ahli Baba's Stand",
    summary: "Signature kabobs, bowls, and fries served fast from our classic stand.",
    specialties: ["Kabobs", "Falafel", "Garlic fries"],
    footprints: ["10x15"],
    image: "assets/images/ahli-babas-stand.JPG"
  },
  {
    name: "Burger Ranch Stand",
    summary: "Smash burgers and hand-cut fries with crowd-friendly toppings.",
    specialties: ["Smash burgers", "Fries", "Shakes"],
    footprints: ["10x10"],
    image: "assets/images/Burger-ranch-stand.jpg"
  }
];

const truckStops = [
  {
    title: "[PLACEHOLDER: Stop title]",
    detail: "[PLACEHOLDER: Schedule + notes]"
  },
  {
    title: "[PLACEHOLDER: Stop title]",
    detail: "[PLACEHOLDER: Schedule + notes]"
  },
  {
    title: "[PLACEHOLDER: Stop title]",
    detail: "[PLACEHOLDER: Schedule + notes]"
  }
];

const createBadge = text => {
  const span = document.createElement("span");
  span.className = "rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700";
  span.textContent = text;
  return span;
};

const renderMenu = () => {
  const container = document.getElementById("menu-grid");
  if (!container) return;
  container.innerHTML = "";
  menuHighlights.forEach(item => {
    const card = document.createElement("article");
    card.className = "rounded-3xl border border-white bg-white shadow-lg overflow-hidden flex flex-col";

    card.innerHTML = `
      <figure class="aspect-video overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="h-full w-full object-cover" />
      </figure>
      <div class="flex flex-1 flex-col gap-4 p-6">
        <div class="space-y-2">
          <h3 class="font-subhead text-2xl font-semibold text-slate-900">${item.name}</h3>
          <p class="text-base leading-relaxed text-slate-600">${item.description}</p>
        </div>
        <div class="flex flex-wrap gap-2">
        </div>
      </div>
    `;

    const badgeWrap = card.querySelector("div.flex.flex-wrap");
    item.badges.forEach(badge => badgeWrap.appendChild(createBadge(badge)));
    container.appendChild(card);
  });
};

const renderOrderingSteps = () => {
  const list = document.getElementById("ordering-steps");
  if (!list) return;
  list.innerHTML = "";
  orderingSteps.forEach((step, index) => {
    const li = document.createElement("li");
    li.className = "flex items-start gap-3";
    li.innerHTML = `
      <span class="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-babaMaroon/10 text-babaMaroon font-semibold">${
        index + 1
      }</span>
      <p class="text-sm text-slate-700">${step}</p>
    `;
    list.appendChild(li);
  });
};

const renderConcepts = () => {
  const grid = document.getElementById("concepts-grid");
  if (!grid) return;
  grid.innerHTML = "";
  vendingConcepts.forEach(concept => {
    const card = document.createElement("article");
    card.className = "rounded-3xl border border-white bg-white shadow-lg overflow-hidden flex flex-col";
    card.innerHTML = `
      <figure class="aspect-[4/3] overflow-hidden">
        <img src="${concept.image}" alt="${concept.name}" class="h-full w-full object-cover" />
      </figure>
      <div class="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-slate-500">${concept.footprints.join(
            " \u2022 "
          )} footprints</p>
          <h3 class="font-subhead mt-1 text-2xl font-semibold text-slate-900">${concept.name}</h3>
          <p class="text-base leading-relaxed text-slate-600">${concept.summary}</p>
        </div>
        <ul class="space-y-2 text-sm text-slate-700">
          ${concept.specialties
            .map(item => `<li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-babaMaroon"></span>${item}</li>`)
            .join("")}
        </ul>
      </div>
    `;
    const img = card.querySelector("img");
    if (img) {
      img.addEventListener("error", () => {
        img.src = "assets/images/store-front.jpg";
      });
    }
    grid.appendChild(card);
  });
};

const renderTruckStops = () => {
  const grid = document.getElementById("truck-stops");
  if (!grid) return;
  grid.innerHTML = "";
  truckStops.forEach(stop => {
    const card = document.createElement("div");
    card.className = "rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4";
    card.innerHTML = `
      <p class="text-sm font-semibold text-slate-900">${stop.title}</p>
      <p class="text-sm text-slate-600">${stop.detail}</p>
    `;
    grid.appendChild(card);
  });
};

const highlightNav = () => {
  const currentPage = document.body?.dataset?.page;
  if (!currentPage) return;
  document.querySelectorAll("[data-nav]").forEach(link => {
    if (link.dataset.nav === currentPage) {
      link.classList.add("text-babaGold");
      link.classList.add("underline");
      link.setAttribute("aria-current", "page");
    }
  });
};

// Ensure the Square iframe on the ordering page fills the viewport
const sizeOrderingIframe = () => {
  const isOrdering = document.body?.dataset?.page === "ordering";
  if (!isOrdering) return;
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const iframe = document.querySelector("main iframe");
  if (!iframe) return;
  const headerH = header?.offsetHeight || 0;
  const footerH = footer?.offsetHeight || 0;
  const available = Math.max(window.innerHeight - headerH - footerH, 0);
  iframe.style.height = `${available}px`;
};

const init = () => {
  highlightNav();
  renderMenu();
  renderOrderingSteps();
  renderConcepts();
  renderTruckStops();
  sizeOrderingIframe();
};

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", sizeOrderingIframe);
window.addEventListener("resize", sizeOrderingIframe);

