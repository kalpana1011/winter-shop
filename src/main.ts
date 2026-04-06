import { initHome } from "./scripts/home";
import { initProductDetails } from "./scripts/productDetails";
import { initCart } from "./scripts/initCart";
import { renderCartCount } from "./utils/countCart";
import { initCheckout } from "./scripts/checkout";
import "./styles/main.scss";
import { initHeader } from "./scripts/header";

type PageKey =
  | "home"
  | "product-details"
  | "checkout"
  | "shop"
  | "newarrivals"
  | "discover"
  | "about"
  | "cart"
  | "header"
  | "footer"
  | "success";

const headerContainer = document.getElementById("main-header") as HTMLElement;
const footerContainer = document.getElementById("main-footer") as HTMLElement;
const appContainer = document.getElementById("app-container") as HTMLElement;

// Maps url path to specific javascript function.

const routes: Record<string, () => void> = {
  "/": renderHome,
  "/home": renderHome,
  "/productDetails": renderProductDetails,
  "/checkout": renderCheckout,
  "/cart": renderCart,
  "/success": renderSuccess,
};

// it load the respective script file after loading its corresponding html file
export const scriptForPages: Record<string, () => void> = {
  header: initHeader,
  home: initHome,
  "product-details": initProductDetails,
  cart: initCart,
  checkout: initCheckout,
};

async function renderHeader(): Promise<void> {
  await loadPage("header", headerContainer);
}

async function renderFooter(): Promise<void> {
  await loadPage("footer", footerContainer);
}

async function renderHome(): Promise<void> {
  await loadPage("home", appContainer);
}

async function renderProductDetails(): Promise<void> {
  await loadPage("product-details", appContainer);
}

async function renderCart(): Promise<void> {
  await loadPage("cart", appContainer);
}

async function renderCheckout(): Promise<void> {
  await loadPage("checkout", appContainer);
}
async function renderSuccess(): Promise<void> {
  await loadPage("success", appContainer);
}

async function router(): Promise<void> {
  // Get the current path (e.g., "/product-details")
  const path = window.location.pathname;

  appContainer.innerHTML = "";

  const view = routes[path] || renderHome;
  await view();
}
// loadPage include 3 stage fetch / inject as html text/ run script for pages
async function loadPage(
  page: PageKey,
  containerToLoadInto: HTMLElement,
): Promise<void> {
  let htmlData = "";
  try {
    // Fetch the external HTML file
    const response = await fetch(`./src/pages/${page}.html`);

    htmlData = await response.text();
    if (containerToLoadInto) {
      containerToLoadInto.innerHTML = htmlData;
    }

    if (scriptForPages[page]) {
      console.log(`Initializing logic for: ${page}`);
      scriptForPages[page]();
    }
  } catch (error) {
    htmlData = `<h1>Error</h1><p>Failed to load the page.</p>`;
    console.error(error);
  }
}

// INITIALIZE APP
async function init(): Promise<void> {
  console.log("App initialized");
  await renderHeader();
  renderCartCount();
  await router();
  await renderFooter();
}

init();
