import Fuse from "fuse.js";
import { PRODUCT_LIST } from "../data/productList";

export function initHeader() {
  const closeIcon = document.getElementById("close-icon");
  if (closeIcon) {
    closeIcon.addEventListener("click", () => {
      toggleSideMenu();
    });
  }

  const navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      toggleSideMenu();
    });
  }

  const sideMenuLinks = document.querySelectorAll(".side-menu-link");
  if (sideMenuLinks && sideMenuLinks.length > 0) {
    sideMenuLinks.forEach((element) => {
      element.addEventListener("click", () => {
        toggleSideMenu();
      });
    });
  }

  /** Search Functionality */
  const searchInputs = document.querySelectorAll(
    'input[type="text"]',
  ) as NodeListOf<HTMLInputElement>;
  if (searchInputs) {
    searchInputs.forEach((searchInput) => {
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        if (!query || query.length < 2) {
          console.log("Please enter at least 2 characters to search.");
          return;
        }
        const searchOptions = {
          includeScore: true,
          threshold: 0.4,
          // Search in `author` and in `tags` array
          keys: ["name", "description", "category"],
        };

        const fuse = new Fuse(PRODUCT_LIST, searchOptions);
        const result = fuse.search(query);
        console.log("Search results:", result);

        const searchResultContainers = document.querySelectorAll(
          ".search-results-list",
        ) as NodeListOf<HTMLElement>;
        if (searchResultContainers) {
          searchResultContainers.forEach((searchResultContainer) => {
            searchResultContainer.innerHTML = "";
            searchResultContainer.classList.add("search-results-list-show");

            result.forEach(({ item }) => {
              const listItem = document.createElement("span");
              listItem.textContent = item.name;
              searchResultContainer.appendChild(listItem);
              listItem.addEventListener("click", () => {
                window.location.href = `/productDetails?id=${item.id}`;
              });
            });
          });
        }
      });
    });
  }
}

function toggleSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu?.classList.toggle("show");
}
