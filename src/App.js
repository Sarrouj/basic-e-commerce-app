import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Slider from "./Components/Slider";
import ProductList from "./Components/ProductList";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Details from "./Components/details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="about" element={<About/>}/>
        <Route path="products/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
