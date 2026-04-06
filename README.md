# ❄️ The Winter Shop

A premium, high-fidelity e-commerce storefront built to demonstrate the translation of complex Figma designs into a modular, type-safe frontend architecture.

---

## 🎨 Design Reference

This project is a pixel-perfect implementation of the **[Optimus Design System](https://www.figma.com/design/y5tWPL6A79QFevf07iqKdd/Optimus?node-id=475-1295&t=iP79bP9wokH71bTs-1)**.

> **Note:** This is a frontend-only showcase project. It simulates an e-commerce experience using mock data services to demonstrate UI/UX implementation without a live backend.

---

## 🛠 Tech Stack

| Technology     | Purpose                                       |
| :------------- | :-------------------------------------------- |
| **Vite**       | Next-generation frontend tooling and bundling |
| **TypeScript** | Strict type-safety and object modeling        |
| **SCSS**       | Modular styling with variables and nesting    |
| **HTML5**      | Semantic structure for SEO and accessibility  |

---

## 📂 Project Architecture

The project follows a modular directory structure for scalability:

- **`src/models/`** – TypeScript interfaces defining the data shapes (Products, User, Cart).
- **`src/service/`** – Logic for data simulation and state management.
- **`src/pages/`** – Main view templates and layout configurations.
- **`src/styles/`** – Centralized SCSS including mixins, variables, and resets.
- **`src/utils/`** – Reusable helper functions for formatting and calculations.

---

## 🚀 Getting Started

### 1. Installation

Clone the repository and install the necessary dependencies:

```bash
git clone [https://github.com/your-username/the-winter-shop.git](https://github.com/your-username/the-winter-shop.git)
cd the-winter-shop
npm install
```

### 2. Development

Launch the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### 3. Production Build

To compile TypeScript and optimize assets for deployment:

```bash
npm run build
```

## ✨ Key Implementation Features

- Design Fidelity: Exact adherence to the Optimus Figma design system, including typography scales, spacing, and grid layouts.

- Type Safety: Robust use of TypeScript models to ensure data integrity across the service and UI layers.

- Modular Styling: Clean SCSS architecture using modern Sass features for maintainable and scalable CSS.

- Optimized Performance: Fast development cycles and lean production bundles powered by Vite.
