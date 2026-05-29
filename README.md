# Digital Banking & Fintech Landing Page

A premium, modern, and highly responsive landing page for digital banking and fintech solutions, built using **React** and **Vite**. The project showcases a clean layout, modern UI/UX elements, micro-animations, and a highly modular component architecture.

## 🚀 Key Features

- **Modern & Premium Design**: Incorporates glassmorphism, gradient accents, smooth micro-animations, and responsive layouts tailored for Fintech web platforms.
- **Responsive Architecture**: Fully responsive design adapting beautifully across desktop, tablet, and mobile viewing environments.
- **Modular Sections**: Built entirely with React functional components ensuring high maintainability. Key sections include:
  - Hero Section
  - Solutions / Cloud Banking
  - Digital Banking & AML Compliance (Marquee / Moving Stripe Integration)
  - Fintech Insights & News
  - Paperless Branch Experience
  - Responsive Footer with dynamic link routing.
- **Optimized Performance**: Scaffolded with Vite for extremely fast Hot Module Replacement (HMR) and optimized production builds.

## 💻 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: Tailwind CSS (Utility-first CSS framework) for rapid and customizable styling
- **Linting**: ESLint for clean code architecture

## 📁 Project Structure

```text
├── src/
│   ├── assets/                 # Images, icons, and graphical assets
│   ├── components/             # Reusable UI components
│   │   ├── layout/             # Shared layout components (e.g., Footer.jsx)
│   │   └── ui/                 # Reusable smaller UI atoms (e.g., Button.jsx)
│   ├── pages/                  # Page-level components
│   │   ├── sections/           # Individual sections of the landing page
│   │   │   ├── AmlBankingSection.jsx
│   │   │   ├── DigitalBankingSection.jsx
│   │   │   ├── FintechSection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── ...
│   │   └── HomePage.jsx        # Main assembler for all sections
│   ├── App.jsx                 # Root application component
│   └── main.jsx                # React entry point
├── public/                     # Static public assets
├── package.json                # Dependencies and scripts
└── vite.config.js              # Vite configuration
```

## 🛠️ Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites

- **Node.js** (v16.x or newer recommended)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd "Frame 74"
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the local development server with HMR:

```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to view the application.

## 📜 Available Scripts

In the project directory, you can run the following scripts:

- **`npm run dev`**: Starts the Vite development server.
- **`npm run build`**: Compiles and bundles the application for production deployment.
- **`npm run preview`**: Boots up a local web server that serves the production build.
- **`npm run lint`**: Runs ESLint to find and optionally fix problems in the JavaScript code.

## 🤝 Contribution & Maintenance

To create or modify a section on the landing page:
1. Create your component in the `src/pages/sections/` directory.
2. Import and drop your component into the `<main>` wrapper inside `src/pages/HomePage.jsx`.

---
*Developed with focus on aesthetics and performance.*
