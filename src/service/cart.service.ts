import type { CartItem } from "../models/cart.types";

//importing types form cart.types.ts-file

const CART_STORAGE_KEY = "cart";

//key for localstorage

function loadCart(): CartItem[] {
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  if (!stored) return [];

  try {
    return JSON.parse(stored) as CartItem[];
  } catch {
    return [];
  }
}

//function for trying to get stored items in cart and parse it

function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

//function for saving cart items in localstorage

let cart: CartItem[] = loadCart();

export function getCart(): CartItem[] {
  return cart;
}

//function for getting the items in cart

export function addToCart(item: CartItem): void {
  if (item.quantity <= 0) return;

  const existingItem = cart.find(
    (i) => i.variantID === item.variantID
  );

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
}

//function for adding items in cart, adding 1 if existing or pushing new one

export function increaseQuantity(variantID: string): void {
  const item = cart.find((i) => i.variantID === variantID);
  if (!item) return;

  item.quantity++;
  saveCart(cart);
}

//function for adding 1 to cart quantity if the item is existing and save in localstorage

export function decreaseQuantity(variantID: string): void {
  const item = cart.find((i) => i.variantID === variantID);
  if (!item) return;

  item.quantity--;

  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.variantID !== variantID);
  }

  saveCart(cart);
}

//function for removing 1 from cart quantity if item is existing and save in localstorage

export function removeFromCart(variantID: string): void {
  cart = cart.filter((item) => item.variantID !== variantID);
  saveCart(cart);
}

//function for removing item/items, no matter how many the are

export function getTotalPrice(): number {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

//function for calculating the sum of total price

