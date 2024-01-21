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
import Contact from "./screens/Contact";

function App() {
  let initialPage = window.location.href.slice(22).replace(/-/g, " ");
  initialPage = initialPage.charAt(0).toUpperCase() + initialPage.slice(1);

  if(initialPage.includes("manage-products")) initialPage = "Manage Products";

  const [currentPage, setCurrentPage] = useState<string>(initialPage);

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

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />

      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop setCurrentPage={setCurrentPage} />} />
        <Route path="/products/:id" element={<Product setCurrentPage={setCurrentPage} />} />
        <Route path="/cart" element={<Cart setCurrentPage={setCurrentPage} />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
