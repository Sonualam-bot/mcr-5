import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import { RecipeContextProvider } from "./context/RecipeContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeContextProvider>
        <App />
      </RecipeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

