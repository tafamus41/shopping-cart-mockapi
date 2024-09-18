import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-light app">
      <Navbar />
      <Routes>
        <Routes exact path="/" element={<Main />} />
        <Routes exact path="/products" element={<NewProduct />} />
        <Routes exact path="/new-product" element={<ProductList />} />
        <Routes exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
