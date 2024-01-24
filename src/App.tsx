// Libraries
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Screens
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Shop from "./screens/Shop";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Contact from "./screens/Contact";
// Interfaces
interface ProductProp {
  id: number;
  size: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_thumbnail: string;
  Product_image: {
      id: number;
      image_path: string;
      product_id: number;
      createdAt: string;
      updatedAt: string;
  }[];
  order_id: number | null;
  stock: number;
};

function App() {
  const [cart, setCart] = useState<{product: ProductProp; stock: number;}[]>([]);
  let initialPage = window.location.href.slice(22).replace(/-/g, " ");
  initialPage = initialPage.charAt(0).toUpperCase() + initialPage.slice(1);
  if(initialPage.includes("manage-products")) initialPage = "Manage Products";
  const [currentPage, setCurrentPage] = useState<string>(initialPage);

  const saveLocalCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const getLocalCart = () => {
    const getCart = localStorage.getItem('cart');

    if(getCart) {
      const localCart = JSON.parse(getCart);
      
      if(localCart.length > 0) setCart(localCart);
    } else {
      const localCart:[] = [];
      setCart(localCart);
    }
  }

  useEffect(() => {
    if(initialPage && currentPage) {
      if(currentPage.includes("?category=")) {
        document.title = "Website | " + currentPage.replace("?category=", " - ");
      } else {
        document.title = "Website | " + currentPage;
      }
    } else {
      document.title = "Website | Home";
    }
  }, [currentPage])

  useEffect(() => {
    getLocalCart();
  }, [])

  useEffect(() => {
    saveLocalCart();
  }, [cart])
  
  
  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} cart={cart} />

      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop setCurrentPage={setCurrentPage} />} />
        <Route path="/products/:id" element={<Product setCurrentPage={setCurrentPage} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart setCurrentPage={setCurrentPage} cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout setCurrentPage={setCurrentPage} cart={cart} />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
