import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        home: './src/pages/home.html',
        productDetails: './src/pages/product-details.html',
        checkout: './src/pages/checkout.html',
        header: './src/pages/header.html',
        footer: './src/pages/footer.html',
        cart: './src/pages/cart.html',
      },
    },
  },
});