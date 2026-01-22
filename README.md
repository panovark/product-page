# OAK 4 D - Product Landing Page

A modern, responsive landing page for the Luxonis OAK 4 D camera product.

## 📚 About This Project

This project showcases a single-page marketing site with:

- React 19 with hooks and modern patterns
- TypeScript for type safety
- Vite for fast development and builds
- SCSS Modules with shared variables and mixins
- Motion for scroll-reveal animations
- Radix UI Dialog for the gallery lightbox
- Playwright for end-to-end tests

## 🏗️ Project Structure

```
product-page/
├── public/                 # Static assets
├── src/
│   ├── components/         # UI sections and shared pieces
│   ├── constants/          # External links
│   ├── styles/             # SCSS variables, mixins, global styles
│   ├── App.tsx
│   └── main.tsx
├── e2e/                    # Playwright tests
├── index.html
├── playwright.config.ts
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or newer)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panovark/product-page
cd product-page
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

```bash
npm run dev
```

App will run on `http://localhost:5173`

## 🧪 Testing

```bash
npm run test
npm run test:ui
```

## 📦 Building for Production

```bash
npm run build
npm run preview
```

## 🛠️ Technologies Used

### Frontend

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **SCSS Modules (Sass)** - Styling
- **Motion** - Animations
- **Radix UI Dialog** - Accessible lightbox
- **Playwright** - End-to-end testing

## 📝 License

This is a learning project created for educational purposes. Product images and branding belong to Luxonis.
