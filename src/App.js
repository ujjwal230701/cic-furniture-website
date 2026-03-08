import { useState } from "react";
import { Navbar, Footer } from "./components";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [page, setPage] = useState("home");
  const nav = (p) => { setPage(p); window.scrollTo(0, 0); };
  const pages = { home: HomePage, products: ProductsPage, about: AboutPage, contact: ContactPage };
  const Page = pages[page];
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1a1a1a", background: "#fff" }}>
      <Navbar page={page} nav={nav} />
      <Page nav={nav} />
      <Footer nav={nav} />
    </div>
  );
}
