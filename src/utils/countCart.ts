import { getCart } from "../service/cart.service";

//importing function from cart.service.ts-file

export function renderCartCount(): void {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;

  const cart = getCart();
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  countEl.textContent = totalQuantity.toString();
}

//function for presenting cart counting visually beside cart-icon
//getting saved items in cart, calculating quantity for all of them and presenting it visually in cart-count-container