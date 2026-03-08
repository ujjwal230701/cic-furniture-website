import { S } from "../styles";
import { FEATURES, TRUST_BADGES } from "../config";
import { useProducts } from "../hooks";
import { ProductCard, SectionHeader } from "../components";

export default function HomePage({ nav }) {
  const { products, loading } = useProducts();
  const featured = products.filter(p => p.featured).slice(0, 4);
  const display = featured.length > 0 ? featured : products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <div style={{ background: "#f5f5f0", padding: "80px 40px" }}>
        <div style={{ ...S.container, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>
          <div>
            <div style={S.label}>PREMIUM OFFICE FURNITURE</div>
            <h1 style={S.h1}>Designed for<br />the Modern<br />Workspace.</h1>
            <p style={{ ...S.body, maxWidth: 400, marginBottom: 36 }}>Premium office furniture for modern Indian workspaces. Trusted by businesses across India.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => nav("products")} style={S.btnPrimary}>EXPLORE COLLECTION</button>
              <button onClick={() => nav("contact")} style={S.btnOutline}>CONTACT US</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {loading ? Array(4).fill(0).map((_, i) => (
              <div key={i} style={{ background: "#fff", aspectRatio: "1", border: "1px solid #e8e8e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ color: "#ddd", fontSize: 12 }}>Loading...</div>
              </div>
            )) : display.map(p => (
              <div key={p.id} style={{ background: "#fff", padding: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", aspectRatio: "1", border: "1px solid #e8e8e8", overflow: "hidden" }}>
                {p.image_url
                  ? <img src={p.image_url} alt={p.name} style={{ width: "100%", height: "80%", objectFit: "cover", marginBottom: 8 }} />
                  : <div style={{ fontSize: 40, marginBottom: 8 }}>📦</div>}
                <div style={{ fontSize: 11, fontWeight: 600, textAlign: "center", color: "#333" }}>{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div style={{ borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8", padding: "18px 40px" }}>
        <div style={{ ...S.container, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          {TRUST_BADGES.map(t => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 1, color: "#444" }}>
              <div style={{ width: 5, height: 5, background: "#1a1a1a", borderRadius: "50%" }} />{t.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div style={S.section}>
        <div style={S.container}>
          <SectionHeader label="Why CIC Furniture" title="Built to Last. Designed to Inspire." align="center" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, background: "#e8e8e8" }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ background: "#fff", padding: 36 }}>
                <div style={{ fontSize: 26, marginBottom: 14 }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: 0.5, marginBottom: 10 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div style={{ ...S.section, background: "#f5f5f0" }}>
        <div style={S.container}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={S.label}>OUR COLLECTION</div>
              <h2 style={{ ...S.h2, margin: 0 }}>Featured Products</h2>
            </div>
            <button onClick={() => nav("products")} style={S.btnOutline}>VIEW ALL →</button>
          </div>
          {loading
            ? <div style={{ textAlign: "center", padding: 40, color: "#888" }}>Loading products...</div>
            : <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
                {display.map(p => <ProductCard key={p.id} product={p} nav={nav} />)}
              </div>}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "#1a1a1a", color: "#fff", padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ ...S.label, color: "#555" }}>GET STARTED</div>
          <h2 style={{ ...S.h2, color: "#fff", fontSize: 36 }}>Ready to Transform Your Workspace?</h2>
          <p style={{ color: "#aaa", fontSize: 15, margin: "0 0 32px", lineHeight: 1.7 }}>Get a free consultation and personalised quote. No obligations.</p>
          <button onClick={() => nav("contact")} style={{ ...S.btnPrimary, background: "#fff", color: "#1a1a1a" }}>REQUEST A FREE QUOTE</button>
        </div>
      </div>
    </div>
  );
}
