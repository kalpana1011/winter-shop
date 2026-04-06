import { renderCheckoutCart } from "../cart/checkout.page";

export function initCheckout(): void {
  renderCheckoutCart();

  const checkoutForm = document.getElementById("checkout-form");
  checkoutForm?.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    window.location.href = "/success";
  });
}
