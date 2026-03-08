import { useState } from "react";
import { S } from "../styles";
import { CATEGORIES } from "../config";
import { useProducts } from "../hooks";
import { ProductCard } from "../components";

export default function ProductsPage({ nav }) {
  const { products, loading } = useProducts();
  const [filterCat, setFilterCat] = useState("All");
  const filtered = products.filter(p => filterCat === "All" || p.category === filterCat);

  return (
    <div style={{ ...S.section, maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={S.label}>OUR RANGE</div>
        <h1 style={S.h1}>All Products</h1>
        <p style={{ color: "#666", fontSize: 13, letterSpacing: 0.5 }}>All prices exclusive of GST · EMI available on orders above ₹10,000</p>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => setFilterCat(c)} style={{ padding: "8px 18px", border: "1px solid", borderColor: filterCat === c ? "#1a1a1a" : "#ddd", background: filterCat === c ? "#1a1a1a" : "#fff", color: filterCat === c ? "#fff" : "#444", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, cursor: "pointer" }}>
            {c.toUpperCase()}
          </button>
        ))}
      </div>
      {loading ? (
        <div style={{ textAlign: "center", padding: 60, color: "#888" }}>Loading products...</div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: 60, color: "#888" }}>No products found.</div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {filtered.map(p => <ProductCard key={p.id} product={p} nav={nav} />)}
        </div>
      )}
    </div>
  );
}
