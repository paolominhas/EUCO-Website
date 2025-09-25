# Project Title: The Official Website for Edinburgh University Chamber Orchestra

[![Deployment Status](https://img.shields.io/vercel/deployment/paolominhas/EUCO-Website/main?label=Vercel)](https://euco-website.vercel.app)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpaolominhas%2FEUCO-Website)
[![Build Status](https://img.shields.io/github/actions/workflow/status/paolominhas/EUCO-Website/ci.yml?branch=main)](https://github.com/paolominhas/EUCO-Website/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This is the official public-facing website for Edinburgh University Chamber Orchestra. It serves as our second most important form of media (after our instagram) with concert information, ticket sales, and news.

![A screenshot of the website homepage (25/09/25).](public/backgrounds/hero-photo.jpg)

## Table of Contents

- [About The Project](#about-the-project)
  - [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)

## About The Project

This project is a complete rewrite of our original website, designed to be fast, modern, and easy to maintain. It's a single-page application (SPA) built with React.

### Tech Stack

This project is built with the following technologies:
* **Framework:** [React](https://reactjs.org/) (using [Vite](https://vitejs.dev/))
* **Routing:** [React Router](https://reactrouter.com/)
* **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)
* **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

Follow these instructions to set up the project for local development.

### Prerequisites

You must have Node.js and npm installed on your machine.
* **Node.js** (v18.x or later)
* **npm** (v9.x or later)

You can check your versions with `node -v` and `npm -v`.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
    cd your-repo
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    This project requires API keys and other secrets to run.
    Create a new file named `.env.local` in the root of the project by copying the example file:
    ```bash
    cp .env.example .env.local
    ```
    Now, open `.env.local` and fill in the required values (e.g., your API keys for a ticketing service or CMS).

## Project Structure

The `src` folder is organized as follows:

```
src/
├── assets/         # Static assets like images and fonts
├── components/     # Reusable UI components (Button, Card, etc.)
├── features/       # Redux Toolkit slices and features
├── hooks/          # Custom React hooks
├── lib/            # Third-party library configurations (e.g., Axios instance)
├── pages/          # Top-level page components
├── styles/         # Global CSS and Tailwind configuration
├── utils/          # Utility functions
└── App.jsx         # Main app component with routing
└── main.jsx        # Entry point of the application
```

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev` or `npm start`
    Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

-   `npm test`
    Launches the test runner in interactive watch mode.

-   `npm run build`
    Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

-   `npm run lint`
    Lints the codebase using ESLint to find and fix problems.

## Testing

We use Vitest for unit tests and React Testing Library for component testing.
* To run all tests: `npm test`
* To get a test coverage report: `npm run coverage`

All test files are located alongside the code they are testing, with a `.test.jsx` extension.

## Deployment

This site is automatically deployed using **Vercel**.
* A push to the `main` branch triggers a **production deployment**.
* A push to any other branch (e.g., in a pull request) triggers a **preview deployment** with a unique URL.

All environment variables for deployment must be configured in the Vercel project settings.

## License

Distributed under the MIT License. See `LICENSE` for more information.
