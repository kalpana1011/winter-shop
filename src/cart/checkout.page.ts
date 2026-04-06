import {  getCart, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice } from "../service/cart.service";
import { renderCartCount } from "../utils/countCart";
import { renderCart } from "./cartPage";

//importing functions form cart.service.ts-file and countCart.ts-file

export function renderCheckoutCart() {
  const cartItems = getCart();
  const priceBreakdownContainer = document.getElementById("price-breakdown");
  const cartItemsContainer = document.getElementById("cart-items");

  if (!cartItemsContainer || !priceBreakdownContainer) return;

  cartItemsContainer.innerHTML = " ";

//loop over the  productlist  using id's(item.name, item.image, item.variant.id).
// creating HTML and use onclick functions for the buttons  to increase, decrease, and remove the product quantity.
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
                <button class="decrease quantity-icon" data-id="${item.variantID}" onclick=handleDecreaseQuantityCheckout("${item.variantID}")>
                  <i class="ri-subtract-line"></i>
                </button>
                <span>${item.quantity}</span>
                <button class="increase quantity-icon" data-id="${item.variantID}" onclick=handleIncreaseQuantityCheckout("${item.variantID}")>
                  <i class="ri-add-line"></i>
                </button>
              </div>
              <button class="remove-item" data-id="${item.variantID}" onclick=handleRemoveItemCheckout("${item.variantID}")>
                <i class="ri-delete-bin-line"></i>
              </button>
             </div>
          </div>
          <span class="total-price">${item.price * item.quantity} €</span>
        `;
    cartItemsContainer.appendChild(cartItemRow);
  });

  const subTotalPrice = getTotalPrice();
  const deliveryCharges = 49;
 // creating HTML for product price, shipping charges, and total amount ( product price + shipping).
  priceBreakdownContainer.innerHTML = `
      <div class="price-row">
        <span class="title">Sub-total:</span>
        <span class="price-value">${subTotalPrice} EUR</span>
      </div>

      <div class="price-row">
        <span class="title">Delivery:</span>
        <span class="price-value">${deliveryCharges} EUR</span>
      </div>

      <div class="price-row">
        <span class="title">Total:</span>
        <span class="price-value">${subTotalPrice + deliveryCharges} EUR</span>
      </div>
  `;

  renderCartCount();
  renderCart();
}

function updateCartData () {
  renderCheckoutCart();
  renderCartCount();
}

// functions for  rendaring increase, decrease, and remove quantity.(cart.page)
function handleIncreaseQuantityCheckout(variantId: string) {
  increaseQuantity(variantId);
  updateCartData();
}
(window as any).handleIncreaseQuantityCheckout = handleIncreaseQuantityCheckout;

function handleDecreaseQuantityCheckout(variantId: string) {
  decreaseQuantity(variantId);
  updateCartData();
}
(window as any).handleDecreaseQuantityCheckout = handleDecreaseQuantityCheckout;

function handleRemoveItemCheckout(variantId: string) {
  removeFromCart(variantId);
  updateCartData();
}
(window as any).handleRemoveItemCheckout = handleRemoveItemCheckout;
