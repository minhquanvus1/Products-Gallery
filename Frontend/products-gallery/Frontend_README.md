# Products Gallery (Frontend):

- For the Frontend, the app is built with React TypeScript, Bootstrap 5, and is deployed on both Render, and AWS S3 Static Website Hosting

- The Frontend techstack also includes: Axios, Vite, React Router, MapBox gl, and FontaweSome.

- For the Frontend, at first, the app was built with React JavaScript, then, it was refactored to React TypeScript for better type checking and code quality.

- The app is recommended to be viewed on the Desktop for the best experience.

## Getting Started

### Pre-requisite and Local Development

- Developers should have Node.js installed in their local machine. If you don't have Node.js installed, you can download it from [Node.js](https://nodejs.org/en/), and npm will be installed with Node.js.

- The Frontend React are installed by using Vite. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: a dev server that provides rich feature enhancements over native ES modules, and a build command that bundles your code with Rollup.

- To install Vite, run the following command in the terminal:

```bash
cd Frontend
cd products-gallery
npm install vite@latest
```

- All the dependencies, libraries used for this Frontend React project are listed in the `package.json` file. To install all the dependencies, run the following command in the terminal:

```bash
cd Frontend
cd products-gallery
npm install
```

- Then, to start the Frontend React, run the following command in the terminal:

```bash
cd Frontend
cd products-gallery
npm run dev
```

- The Frontend React will start running on `http://localhost:3000/`. Open the browser and navigate to `http://localhost:3000/` to see the Frontend React.

## Frontend Structure

- The Frontend React has the following structure:
  - `src/` folder: contains all the src code of the Frontend
    - `components/` folder folder: contains the components of the Frontend
    - `css/` folder: contains the css files of the Frontend
    - `hooks/` folder: contains the hooks of the Frontend
    - `functions/` folder: contains the functions of the Frontend
    - `models/` folder: contains the models of the Frontend
    - `App.tsx` file: contains all the Routes of the Frontend
    - `main.tsx` file: contains the App component
    - `baseURL.js` file: contains the baseURL of the Backend
    - `react-app.d.ts` file: contains the types of the MapBoxDirections
  - `.env` file: contains the MapBox Access Token
  - `.env.development` file: contains the baseURL of the Backend in the Development environment
  - `.env.production` file: contains the baseURL of the Backend in the Production environment
  - `package.json` file: contains all the dependencies, libraries used for the Frontend
  - `vite.config.ts` file: contains the Vite configuration
  - `tsconfig.json` file: contains the TypeScript configuration

**Notice that: in the Frontend components/ folder, there are the `ProductsGalleryPage.tsx` (this is my 1st attempt to do the Infinite Scrolling, and it was used with the `SearchBarTest.tsx` component). However, I didn't use the `ProductsGalleryPage.tsx` and the `SearchBarTest.tsx` in the final version of the Products Gallery Application. Instead, I used the `NewProductsGallery.tsx` component for the Infinite Scrolling feature, because it leverages the Intersection Observer API, which is more efficient and better for performance.**

## Deployment

- The Backend of the app has been deployed on Render. You can access it by clicking on this link: https://products-gallery.onrender.com

## Author:

Quan Tran

## Acknowledgements

- Thanks to Burning Bros Company for the inspiration of the Products Gallery Application
