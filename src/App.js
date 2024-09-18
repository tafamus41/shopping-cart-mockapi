import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import MyNavbar from "./components/MyNavbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-light app">
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/products" element={<NewProduct />} />
        <Route exact path="/new-product" element={<ProductList />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
