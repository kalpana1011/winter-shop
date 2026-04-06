import {
  getCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  getTotalPrice,
} from "../service/cart.service";
import { renderCartCount } from "../utils/countCart";

//importing functions form cart.service.ts-file and countCart.ts-file

export function renderCart() {
  const cartItems = getCart();
  const tbody = document.getElementById("cart-items");
  const totalEl = document.getElementById("total-price");

  if (!tbody || !totalEl) return;

  tbody.innerHTML = "";

  cartItems.forEach((item) => {
    const cartItemRow = document.createElement("div");
    cartItemRow.classList.add('cart-item-row')
    cartItemRow.innerHTML = `
          <img src=${item.image} />
          <div class="item-data">
             <span class="item-name">${item.name}</span>
             <span class="item-price">${item.price} €</span>
             <div class="manage-quantity">
              <div class="quantity-container">
                <button class="decrease quantity-icon" data-id="${item.variantID}" onclick=handleDecreaseQuantity("${item.variantID}")>
                  <i class="ri-subtract-line"></i>
                </button>
                <span>${item.quantity}</span>
                <button class="increase quantity-icon" data-id="${item.variantID}" onclick=handleIncreaseQuantity("${item.variantID}")>
                  <i class="ri-add-line"></i>
                </button>
              </div>
              <button class="remove-item" data-id="${item.variantID}" onclick=handleRemoveItem("${item.variantID}")>
                <i class="ri-delete-bin-line"></i>
              </button>
             </div>
          </div>
          <span class="total-price">${item.price * item.quantity} €</span>
        `;
    tbody.appendChild(cartItemRow);
  });

  totalEl.textContent = getTotalPrice().toString() + " €";
  renderCartCount();
}

function updateCartData() {
  renderCart();
  renderCartCount();
}

function handleIncreaseQuantity(variantId: string) {
  increaseQuantity(variantId);
  updateCartData();
}

// to make the function global in module(import/export) we use (window as any);
(window as any).handleIncreaseQuantity = handleIncreaseQuantity;

function handleDecreaseQuantity(variantId: string) {
  decreaseQuantity(variantId);
  updateCartData();
}
(window as any).handleDecreaseQuantity = handleDecreaseQuantity;

function handleRemoveItem(variantId: string) {
  removeFromCart(variantId);
  updateCartData();
}
(window as any).handleRemoveItem = handleRemoveItem;
