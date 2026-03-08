import { useState } from "react";
import { S } from "./styles";
import { formatPrice, STORE, CATEGORIES } from "./config";

// ── Navbar ─────────────────────────────────
export function Navbar({ page, nav }) {
  const navItems = [
    { label: "Home", key: "home" },
    { label: "Products", key: "products" },
    { label: "About", key: "about" },
    { label: "Contact", key: "contact" },
  ];
  return (
    <nav style={{ background: "#fff", borderBottom: "1px solid #e8e8e8", padding: "0 40px", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ ...S.container, display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <div onClick={() => nav("home")} style={{ cursor: "pointer" }}>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 3, color: "#1a1a1a" }}>CIC</div>
          <div style={{ fontSize: 8, letterSpacing: 4, color: "#888", marginTop: -2 }}>FURNITURE</div>
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {navItems.map(n => (
            <button key={n.key} onClick={() => nav(n.key)} style={{ background: "none", border: "none", borderBottom: page === n.key ? "2px solid #1a1a1a" : "2px solid transparent", cursor: "pointer", fontSize: 11, fontWeight: page === n.key ? 700 : 400, color: page === n.key ? "#1a1a1a" : "#666", letterSpacing: 1.5, paddingBottom: 4 }}>
              {n.label.toUpperCase()}
            </button>
          ))}
        </div>
        <button onClick={() => nav("contact")} style={S.btnPrimary}>GET A QUOTE</button>
      </div>
    </nav>
  );
}

// ── Footer ─────────────────────────────────
export function Footer({ nav }) {
  const navItems = ["home", "products", "about", "contact"];
  return (
    <footer style={{ background: "#1a1a1a", color: "#fff", padding: "56px 40px 32px" }}>
      <div style={{ ...S.container, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 3 }}>CIC</div>
          <div style={{ fontSize: 8, letterSpacing: 4, color: "#555", marginTop: -2 }}>FURNITURE</div>
          <div style={{ fontSize: 12, color: "#666", marginTop: 16, maxWidth: 220, lineHeight: 1.7 }}>{STORE.tagline}</div>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#555", marginBottom: 16 }}>NAVIGATE</div>
            {navItems.map(n => <div key={n} onClick={() => nav(n)} style={{ fontSize: 13, color: "#aaa", marginBottom: 10, cursor: "pointer", letterSpacing: 0.5, textTransform: "capitalize" }}>{n}</div>)}
          </div>
          <div>
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#555", marginBottom: 16 }}>CONTACT</div>
            {[STORE.email, STORE.website, STORE.phone].map(v => <div key={v} style={{ fontSize: 13, color: "#aaa", marginBottom: 10 }}>{v}</div>)}
          </div>
        </div>
      </div>
      <div style={{ ...S.container, marginTop: 40, paddingTop: 24, borderTop: "1px solid #2a2a2a", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ fontSize: 11, color: "#444" }}>© 2026 CIC Furniture. All rights reserved.</div>
        <div style={{ fontSize: 11, color: "#444" }}>GST: {STORE.gst}</div>
      </div>
    </footer>
  );
}

// ── Product Card ───────────────────────────
export function ProductCard({ product, nav }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e8e8e8" }}>
      <div style={{ background: "#f5f5f0", height: 200, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {product.image_url
          ? <img src={product.image_url} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          : <span style={{ fontSize: 64 }}>📦</span>}
      </div>
      <div style={{ padding: 24 }}>
        <div style={{ fontSize: 10, letterSpacing: 2, color: "#888", marginBottom: 8 }}>{product.category.toUpperCase()}</div>
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{product.name}</div>
        <div style={{ fontSize: 13, color: "#666", marginBottom: 16, lineHeight: 1.6 }}>{product.description}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>{formatPrice(product.price)}</div>
            <div style={{ fontSize: 10, color: "#888", letterSpacing: 1 }}>+ GST</div>
          </div>
          <button onClick={() => nav("contact")} style={S.btnSmall}>ENQUIRE</button>
        </div>
      </div>
    </div>
  );
}

// ── Page Hero ──────────────────────────────
export function PageHero({ label, title, subtitle }) {
  return (
    <div style={{ background: "#f5f5f0", padding: "80px 40px" }}>
      <div style={S.container}>
        {label && <div style={S.label}>{label.toUpperCase()}</div>}
        <h1 style={S.h1}>{title}</h1>
        {subtitle && <p style={{ ...S.body, maxWidth: 560 }}>{subtitle}</p>}
      </div>
    </div>
  );
}

// ── Section Header ─────────────────────────
export function SectionHeader({ label, title, align = "left" }) {
  return (
    <div style={{ textAlign: align, marginBottom: 48 }}>
      {label && <div style={{ ...S.label, textAlign: align }}>{label.toUpperCase()}</div>}
      <h2 style={{ ...S.h2, margin: 0 }}>{title}</h2>
    </div>
  );
}

// ── Contact Info ───────────────────────────
export function ContactInfo() {
  const details = [
    { label: "ADDRESS", value: STORE.address },
    { label: "PHONE & WHATSAPP", value: STORE.phone },
    { label: "EMAIL", value: STORE.email },
    { label: "STORE HOURS", value: STORE.hours },
    { label: "GST NUMBER", value: STORE.gst },
  ];
  return (
    <div>
      <div style={{ ...S.label, marginBottom: 32 }}>CONTACT DETAILS</div>
      {details.map(d => (
        <div key={d.label} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid #e8e8e8" }}>
          <div style={S.label}>{d.label}</div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>{d.value}</div>
        </div>
      ))}
      <div style={{ background: "#f5f5f0", padding: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>QUICK ENQUIRY VIA WHATSAPP</div>
        <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>Send us a message on {STORE.whatsapp} for fast quotes.</div>
      </div>
    </div>
  );
}

// ── Contact Form ───────────────────────────
export function ContactForm() {
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
          <label style={S.label}>{label.toUpperCase()}</label>
          <input type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
            style={{ width: "100%", padding: "10px 0", borderBottom: "1px solid #ddd", border: "none", fontSize: 14, outline: "none", boxSizing: "border-box", background: "transparent" }} />
        </div>
      ))}
      <div style={{ marginBottom: 28 }}>
        <label style={S.label}>YOUR REQUIREMENTS</label>
        <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
          placeholder="e.g. 10 office chairs, budget ₹1,00,000..."
          style={{ width: "100%", padding: "10px 0", borderBottom: "1px solid #ddd", border: "none", fontSize: 14, outline: "none", resize: "none", boxSizing: "border-box", background: "transparent" }} />
      </div>
      <button onClick={() => setSubmitted(true)} style={{ ...S.btnPrimary, width: "100%" }}>SUBMIT ENQUIRY</button>
    </div>
  );
}
