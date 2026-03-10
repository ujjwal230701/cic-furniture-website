import { S } from "./styles";
import { formatPrice, STORE, CATEGORIES } from "./config";
import { useEffect, useRef, useState } from "react";
import { supabase } from "./supabaseClient";


// ── Navbar ─────────────────────────────────
export function Navbar({ page, nav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", key: "home" },
    { label: "Products", key: "products" },
    { label: "About", key: "about" },
    { label: "Contact", key: "contact" },
  ];
  const goTo = (key) => { nav(key); setMenuOpen(false); };

  return (
    <>
      <nav style={{ background: "#fff", borderBottom: "1px solid #e8e8e8", padding: "0 24px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div onClick={() => goTo("home")} style={{ cursor: "pointer" }}>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 3, color: "#1a1a1a" }}>CIC</div>
            <div style={{ fontSize: 8, letterSpacing: 4, color: "#888", marginTop: -2 }}>FURNITURE</div>
          </div>
          <div className="desktop-nav" style={{ display: "flex", gap: 28 }}>
            {navItems.map(n => (
              <button key={n.key} onClick={() => goTo(n.key)} style={{ background: "none", border: "none", borderBottom: page === n.key ? "2px solid #1a1a1a" : "2px solid transparent", cursor: "pointer", fontSize: 11, fontWeight: page === n.key ? 700 : 400, color: page === n.key ? "#1a1a1a" : "#666", letterSpacing: 1.5, paddingBottom: 4 }}>
                {n.label.toUpperCase()}
              </button>
            ))}
          </div>
          <button onClick={() => goTo("contact")} className="desktop-nav" style={{ ...S.btnPrimary, fontSize: 10 }}>GET A QUOTE</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-nav" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, color: "#1a1a1a", padding: 4 }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
  <div className="mobile-nav" style={{ position: "fixed", top: 64, left: 0, right: 0, bottom: 0, background: "#fff", zIndex: 99, padding: 24, display: "flex", flexDirection: "column", gap: 4 }}>
    {navItems.map(n => (
      <button key={n.key} onClick={() => goTo(n.key)}
        style={{ width: "100%", background: page === n.key ? "#f5f5f0" : "none", border: "none", borderLeft: page === n.key ? "3px solid #1a1a1a" : "3px solid transparent", cursor: "pointer", fontSize: 16, fontWeight: page === n.key ? 700 : 400, color: "#1a1a1a", letterSpacing: 1.5, padding: "16px 20px", textAlign: "left", display: "block" }}>
        {n.label}
      </button>
    ))}
    <button onClick={() => goTo("contact")} style={{ ...S.btnPrimary, width: "100%", marginTop: 16, padding: 16, fontSize: 13, display: "block" }}>
      GET A QUOTE
    </button>
  </div>
)}


      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: block !important; }
        }
      `}</style>
    </>
  );
}


// ── Footer ─────────────────────────────────
export function Footer({ nav }) {
  const navItems = ["home", "products", "about", "contact"];
  return (
    <footer style={{ background: "#1a1a1a", color: "#fff", padding: "48px 24px 28px" }}>
      <div style={{ ...S.container, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 3 }}>CIC</div>
          <div style={{ fontSize: 8, letterSpacing: 4, color: "#555", marginTop: -2 }}>FURNITURE</div>
          <div style={{ fontSize: 12, color: "#666", marginTop: 14, lineHeight: 1.7 }}>Premium office furniture for modern Indian workspaces.</div>
        </div>
        <div>
          <div style={{ fontSize: 9, letterSpacing: 3, color: "#555", marginBottom: 14 }}>NAVIGATE</div>
          {navItems.map(n => <div key={n} onClick={() => nav(n)} style={{ fontSize: 13, color: "#aaa", marginBottom: 10, cursor: "pointer", textTransform: "capitalize" }}>{n}</div>)}
        </div>
        <div>
          <div style={{ fontSize: 9, letterSpacing: 3, color: "#555", marginBottom: 14 }}>CONTACT</div>
          {[STORE.email, STORE.website, STORE.phone].map(v => <div key={v} style={{ fontSize: 13, color: "#aaa", marginBottom: 10 }}>{v}</div>)}
        </div>
      </div>
      <div style={{ ...S.container, marginTop: 32, paddingTop: 20, borderTop: "1px solid #2a2a2a", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ fontSize: 11, color: "#444" }}>© 2026 CIC Furniture. All rights reserved.</div>
        <div style={{ fontSize: 11, color: "#444" }}>GST: {STORE.gst}</div>
      </div>
    </footer>
  );
}


// ── Product Card Image Swiper ──────────────
function CardSwiper({ images, activeImg, setActiveImg, onTouchStart, onTouchEnd }) {
  return (
    <div style={{ position: "relative", background: "#f5f5f0", height: 220, overflow: "hidden" }}
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

      {images.length > 0
        ? <img src={images[activeImg]} alt="product" style={{ width: "100%", height: "100%", objectFit: "contain", padding: 12 }} />
        : <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}><span style={{ fontSize: 64 }}>📦</span></div>}

      {images.length > 1 && (
        <>
          {activeImg > 0 && (
            <button onClick={e => { e.stopPropagation(); setActiveImg(i => i - 1); }}
              style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.85)", border: "none", width: 28, height: 28, cursor: "pointer", fontSize: 14 }}>‹</button>
          )}
          {activeImg < images.length - 1 && (
            <button onClick={e => { e.stopPropagation(); setActiveImg(i => i + 1); }}
              style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.85)", border: "none", width: 28, height: 28, cursor: "pointer", fontSize: 14 }}>›</button>
          )}
          <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 4 }}>
            {images.map((_, i) => (
              <div key={i} onClick={e => { e.stopPropagation(); setActiveImg(i); }}
                style={{ width: 6, height: 6, borderRadius: "50%", background: activeImg === i ? "#1a1a1a" : "rgba(0,0,0,0.3)", cursor: "pointer" }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Product Card Info ──────────────────────
function CardInfo({ product, nav }) {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ fontSize: 10, letterSpacing: 2, color: "#888", marginBottom: 8 }}>{product.category?.toUpperCase()}</div>
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{product.name}</div>
      <div style={{ fontSize: 13, color: "#666", marginBottom: 16, lineHeight: 1.6 }}>{product.description}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{formatPrice(product.price)}</div>
          <div style={{ fontSize: 10, color: "#888", letterSpacing: 1 }}>+ GST</div>
        </div>
        <button onClick={e => { e.stopPropagation(); nav("contact"); }} style={S.btnSmall}>ENQUIRE</button>
      </div>
    </div>
  );
}

// ── Product Card ───────────────────────────
export function ProductCard({ product, nav }) {
  const [images, setImages] = useState([]);
  const [activeImg, setActiveImg] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const base = product.image_url ? [product.image_url] : [];
    supabase.from("products_images").select("image_url").eq("product_id", product.id).order("sort_order")
      .then(({ data }) => setImages([...base, ...(data || []).map(d => d.image_url)]));
  }, [product.id]);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) setActiveImg(i => Math.min(i + 1, images.length - 1));
    else if (diff < -40) setActiveImg(i => Math.max(i - 1, 0));
    touchStartX.current = null;
  };

  return (
    <div onClick={() => nav("product", product)} style={{ background: "#fff", border: "1px solid #e8e8e8", cursor: "pointer" }}>
      <CardSwiper images={images} activeImg={activeImg} setActiveImg={setActiveImg} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} />
      <CardInfo product={product} nav={nav} />
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
