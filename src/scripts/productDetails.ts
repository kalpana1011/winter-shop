import { PRODUCT_LIST } from "../data/productList";
import type { Product, Variant } from "../models/product";
import productDemoImg from "../assets/eira-3.png";
import { addToCart as addCartService } from "../service/cart.service";
import { renderCartCount } from "../utils/countCart";
import type { CartItem } from "../models/cart.types";

let selectedVariant: Variant | null = null;
let product: Product;
export function initProductDetails(): void {
  console.log("Product Details initialized");
  const productId = getProductIdFromURL();
  console.log("Product ID from URL:", productId);
  if (productId) {
    product = PRODUCT_LIST.find((p) => p.id === productId) as Product;
    if (product) {
      selectedVariant = product.variants ? product.variants[0] : null;
      displayProductDetails(product);
    } else {
      console.error("Product not found for ID:", productId);
    }
  } else {
    console.error("No product ID found in URL");
  }
}


function getProductIdFromURL(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function displayProductDetails(product: Product): void {
  console.log("Found product:", product);
  const productDetailsContainer = document.getElementById(
    "product-details-container"
  );
  console.log("Selected variant:", selectedVariant);
  if (productDetailsContainer) {
    productDetailsContainer.innerHTML = `
          <div class="product-details-grid">
            <div class="left-container">
              <div class="image-gallery">
                ${
                  selectedVariant?.images &&
                  selectedVariant.images.length > 0 &&
                  selectedVariant?.images?.map((imgSrc) => {
                    return `<img src="${imgSrc}" alt="${product.name}" />`;
                  })
                }
              </div>
              <img src="${productDemoImg}" alt="Demo Image" class="demo-image"/>
          </div>
            
          <div class="right-container">
            <div class="product-title">
              <span class="product-name">${product.name}</span>
              <i class="ri-heart-line" style="font-size: 2rem;"></i>
            </div>
            <p class="art-number">ART. NO: ${product.articleNumber}</p>
            
            <div class="variant-selection-container">
              <p class="title">Color</p>

              <div class="color-options-container">
                ${product.availableVariantsOptions?.color
                  ?.map((colorVariant) => {
                    let className = "color-item-container";
                    if (
                      selectedVariant &&
                      colorVariant.value === selectedVariant.color
                    ) {
                      className += " selected-color-container";
                    }
                    return `
                      <div class="${className}" onclick="handleSelectColor('${colorVariant.value}', '${colorVariant.image}')">
                        <img src="${colorVariant.image}" alt="${product.name} - ${colorVariant.value}" class="color-image" />
                        <p class="color-label">${colorVariant.value}</p>
                      </div>
                    `;
                  })
                  .join("")}
              </div>

              <p class="title">Available Sizes</p>

              <div class="size-options-container">
                ${product.availableVariantsOptions?.size
                  ?.map((sizeVariant) => {
                    let className = "size-button";
                    if (
                      selectedVariant &&
                      sizeVariant === selectedVariant.size
                    ) {
                      className += " selected-size-button";
                    }
                    return `<button class="${className}" onclick="handleSelectSize('${sizeVariant}')">${sizeVariant}</button>`;
                  })
                  .join("")}
              </div>
            </div>
            
            <div class="price-container">

             ${
               selectedVariant && getPriceForVariant()
                 ? `<p class="price">${getPriceForVariant()} EUR</p>`
                 : "<p class='out-of-stock'>Out of stock</p>"
             } 
            </div>

            <button id="add-to-cart-button" class="add-to-cart-button" ${
              selectedVariant && getPriceForVariant() ? "" : "disabled"
            }>
              Add to Cart 
            </button> 
            <div class="product-description-container">
              <span class="title">Description:</span>
              <p class="product-description">${product.description}</p>
            </div>

            <img src="${product.sizeChartImg}" alt="Size Chart" class="size-chart-image"/>
           </div>
       </div>
            `;
   const addToCartBtn = document.getElementById("add-to-cart-button");
   if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
      addToCart();
      showSnackbar();
    });
  }
 }
}

let snackbarTimeout:any; 

function showSnackbar() {
  const snackbar = document.getElementById("snackbar");
  if (!snackbar) {
    return;
  }
  clearTimeout(snackbarTimeout);
  
  snackbar!.className = "show";

  snackbarTimeout = setTimeout(() => {
    snackbar!.className = snackbar!.className.replace("show", "");
  }, 4000);
}

function handleSelectColor(colorValue: string, colorImage: string): void {
  console.log("Selected color:", colorValue);
  if (!selectedVariant) {
    console.error("No variant selected");
    return;
  }
  selectedVariant = {
    ...selectedVariant,
    color: colorValue,
    images: colorImage ? [colorImage] : selectedVariant.images,
  };
  product && displayProductDetails(product);
}
(window as any).handleSelectColor = handleSelectColor;

function handleSelectSize(sizeValue: string): void {
  console.log("Selected size:", sizeValue);
  if (!selectedVariant) {
    console.error("No variant selected");
    return;
  }
  selectedVariant = {
    ...selectedVariant,
    size: sizeValue,
  };
  product && displayProductDetails(product);
}
(window as any).handleSelectSize = handleSelectSize;

function getPriceForVariant(): number | null {
  if (!selectedVariant) {
    return null;
  }

  const matchedVariant = product.variants?.find(
    (variant) =>
      variant.color === selectedVariant?.color &&
      variant.size === selectedVariant?.size
  );

  if (matchedVariant) {
    console.log("Match found:", matchedVariant);
    selectedVariant = {
      ...selectedVariant,
      price: matchedVariant.price,
    } as Variant;
  } else {
    console.log("No matching variant found");
    selectedVariant = {
      ...selectedVariant,
      price: null,
    } as Variant;
  }
  
  return selectedVariant.price;
}

function addToCart(): void {
  if (!selectedVariant) {
    console.error("No variant selected to add to cart");
    return;
  }

  const item: CartItem = {
    productId: product.id,
    variantID: `${product.id}-${selectedVariant.color}-${selectedVariant.size}`,
    name: `${product.name} (${selectedVariant.color}, ${selectedVariant.size})`,
    price: selectedVariant.price!,
    quantity: 1,
    image: selectedVariant.images![0]
  };

  addCartService(item);
  renderCartCount();
  console.log("Added to cart:", item); 
}



