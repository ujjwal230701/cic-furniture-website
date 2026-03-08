import { useState } from "react";
import { STORE, PRODUCTS, CATEGORIES, FEATURES, TRUST_BADGES, STATS, formatPrice } from "./config";
import { Navbar, Footer, ProductCard, PageHero, SectionHeader, ContactInfo, S } from "./components";

// ── Contact Form ───────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return (
    <div style={{ padding: 40, border: "1px solid #e8e8e8", textAlign: "center" }}>
      <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Enquiry Received</div>
      <div style={{ color: "#666", fontSize: 14 }}>We'll get back to you within 24 hours.</div>
      <button onClick={() => setSubmitted(false)} style={{ ...S.btnPrimary, marginTop: 24 }}>SEND ANOTHER</button>
    </div>
  );
  return (
    <div>
      <div style={{ ...S.label, marginBottom: 32 }}>SEND AN ENQUIRY</div>
      {[["Full Name", "name", "text"], ["Phone Number", "phone", "tel"], ["Email Address", "email", "email"]].map(([label, key, type]) => (
        <div key={key} style={{ marginBottom: 20 }}>
          <label style={{ ...S.label }}>{label.toUpperCase()}</label>
          <input type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
            style={{ width: "100%", padding: "10px 0", borderBottom: "1px solid #ddd", border: "none", borderBottom: "1px solid #ddd", fontSize: 14, outline: "none", boxSizing: "border-box", background: "transparent" }} />
        </div>
      ))}
      <div style={{ marginBottom: 28 }}>
        <label style={S.label}>YOUR REQUIREMENTS</label>
        <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
          placeholder={`e.g. 10 office chairs, budget ₹1,00,000...`}
          style={{ width: "100%", padding: "10px 0", borderBottom: "1px solid #ddd", border: "none", borderBottom: "1px solid #ddd", fontSize: 14, outline: "none", resize: "none", boxSizing: "border-box", background: "transparent" }} />
      </div>
      <button onClick={() => setSubmitted(true)} style={{ ...S.btnPrimary, width: "100%" }}>SUBMIT ENQUIRY</button>
    </div>
  );
}

// ── Pages ──────────────────────────────────
function HomePage({ nav }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: "#f5f5f0", padding: "80px 40px" }}>
        <div style={{ ...S.container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div style={S.label}>PREMIUM OFFICE FURNITURE</div>
            <h1 style={S.h1}>Designed for<br />the Modern<br />Workspace.</h1>
            <p style={{ ...S.body, maxWidth: 400, marginBottom: 36 }}>{STORE.tagline} Trusted by businesses across India.</p>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => nav("products")} style={S.btnPrimary}>EXPLORE COLLECTION</button>
              <button onClick={() => nav("contact")} style={S.btnOutline}>CONTACT US</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {PRODUCTS.slice(0, 4).map(p => (
              <div key={p.id} style={{ background: "#fff", padding: 24, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", aspectRatio: "1", border: "1px solid #e8e8e8" }}>
                <div style={{ fontSize: 40, marginBottom: 8 }}>{p.emoji}</div>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {PRODUCTS.slice(0, 4).map(p => <ProductCard key={p.id} product={p} nav={nav} />)}
          </div>
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

function ProductsPage({ nav }) {
  const [filterCat, setFilterCat] = useState("All");
  const filtered = PRODUCTS.filter(p => filterCat === "All" || p.category === filterCat);
  return (
    <div style={{ ...S.section, ...S.container, margin: "0 auto" }}>
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        {filtered.map(p => <ProductCard key={p.id} product={p} nav={nav} />)}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <PageHero label="Our Story" title={"Furniture That Works\nAs Hard As You Do."} subtitle="CIC Furniture is a family-run retail outlet committed to bringing premium quality office furniture to Indian businesses of every size." />
      <div style={S.section}>
        <div style={S.container}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 60, marginBottom: 60 }}>
            <div>
              <div style={S.label}>OUR MISSION</div>
              <p style={S.body}>To provide Indian businesses with furniture that combines international design standards with local practicality — at honest, transparent prices. We believe every workspace deserves quality without compromise.</p>
            </div>
            <div>
              <div style={S.label}>OUR VALUES</div>
              <p style={S.body}>Quality, transparency and long-term relationships. We're not just a furniture store — we're a workspace partner. From initial consultation to after-sales service, we stand behind every product we sell.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1, background: "#e8e8e8" }}>
            {STATS.map(([num, label]) => (
              <div key={label} style={{ background: "#f5f5f0", padding: 40, textAlign: "center" }}>
                <div style={{ fontSize: 40, fontWeight: 800 }}>{num}</div>
                <div style={{ fontSize: 10, letterSpacing: 2, color: "#888", marginTop: 8 }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <PageHero label="Get In Touch" title={"Let's Find the Right\nFurniture For You."} />
      <div style={S.section}>
        <div style={{ ...S.container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

// ── App Root ───────────────────────────────
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
