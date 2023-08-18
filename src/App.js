import './App.css';

import { Routes, Route } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Header } from "./component/Header";
import { RecipeDetail } from "./detail/RecipeDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:recipeId" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
