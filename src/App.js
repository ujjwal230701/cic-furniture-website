import { useState } from "react";
import { Navbar, Footer } from "./components";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const nav = (p, data = null) => {
    setPage(p);
    if (data) setSelectedProduct(data);
    window.scrollTo(0, 0);
  };

  const pages = {
    home: () => <HomePage nav={nav} />,
    products: () => <ProductsPage nav={nav} />,
    about: () => <AboutPage nav={nav} />,
    contact: () => <ContactPage nav={nav} />,
    product: () => <ProductPage product={selectedProduct} nav={nav} />,
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1a1a1a", background: "#fff" }}>
      <Navbar page={page} nav={nav} />
      {pages[page]?.()}
      <Footer nav={nav} />
    </div>
  );
}
