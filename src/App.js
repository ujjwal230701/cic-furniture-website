import { useState } from "react";

const products = [
  { id: 1, name: "Executive Office Chair", category: "Chairs & Seating", price: 12999, description: "Ergonomic design with lumbar support, breathable mesh back and adjustable armrests.", emoji: "🪑" },
  { id: 2, name: "Height-Adjustable Desk", category: "Desks & Tables", price: 24999, description: "Electric sit-stand desk with memory settings. Promotes healthier working posture.", emoji: "🖥️" },
  { id: 3, name: "3-Drawer Filing Cabinet", category: "Storage & Shelving", price: 8999, description: "Steel construction with central lock. Smooth glide drawers for effortless access.", emoji: "🗄️" },
  { id: 4, name: "Conference Table", category: "Desks & Tables", price: 39999, description: "Seats up to 8. Clean-lined design with cable management. Ideal for boardrooms.", emoji: "📋" },
  { id: 5, name: "Modular Bookshelf", category: "Storage & Shelving", price: 9999, description: "5-tier solid wood unit. Versatile and space-efficient for any office setting.", emoji: "📚" },
  { id: 6, name: "Visitor Chair", category: "Chairs & Seating", price: 5999, description: "Padded seat and back with chrome legs. Available in multiple upholstery options.", emoji: "💺" },
  { id: 7, name: "Desk Organizer Set", category: "Accessories & Misc", price: 1499, description: "Premium organizer with pen holder, document tray and mobile stand.", emoji: "🗂️" },
  { id: 8, name: "Monitor Riser", category: "Accessories & Misc", price: 2499, description: "Adjustable height riser with integrated storage shelf underneath.", emoji: "🖥️" },
];

const categories = ["All", "Chairs & Seating", "Desks & Tables", "Storage & Shelving", "Accessories & Misc"];
const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

export default function CICFurniture() {
  const [page, setPage] = useState("home");
  const [filterCat, setFilterCat] = useState("All");
  const [contactForm, setContactForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const filtered = products.filter(p => filterCat === "All" || p.category === filterCat);
  const nav = (p) => { setPage(p); window.scrollTo(0, 0); };

  const navItems = [
    { label: "Home", key: "home" },
    { label: "Products", key: "products" },
    { label: "About", key: "about" },
    { label: "Contact", key: "contact" },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1a1a1a", background: "#fff", margin: 0 }}>

      {/* Navbar */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e8e8e8", padding: "0 40px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
          <div onClick={() => nav("home")} style={{ cursor: "pointer" }}>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 3, color: "#1a1a1a" }}>CIC</div>
            <div style={{ fontSize: 9, letterSpacing: 4, color: "#888", marginTop: -2 }}>FURNITURE</div>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {navItems.map(n => (
              <button key={n.key} onClick={() => nav(n.key)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, fontWeight: page === n.key ? 700 : 400, color: page === n.key ? "#1a1a1a" : "#666", letterSpacing: 1, borderBottom: page === n.key ? "2px solid #1a1a1a" : "2px solid transparent", paddingBottom: 4 }}>
                {n.label.toUpperCase()}
              </button>
            ))}
          </div>
          <button onClick={() => nav("contact")} style={{ background: "#1a1a1a", color: "#fff", border: "none", padding: "10px 20px", fontSize: 12, fontWeight: 600, letterSpacing: 1, cursor: "pointer" }}>
            GET A QUOTE
          </button>
        </div>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div>
          {/* Hero */}
          <div style={{ background: "#f5f5f0", minHeight: 560, display: "flex", alignItems: "center", padding: "80px 40px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", width: "100%" }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 20 }}>PREMIUM OFFICE FURNITURE</div>
                <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.1, margin: "0 0 24px", color: "#1a1a1a" }}>
                  Designed for<br />the Modern<br />Workspace.
                </h1>
                <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, margin: "0 0 36px", maxWidth: 400 }}>
                  Premium office furniture crafted for productivity, comfort, and lasting quality. Trusted by businesses across India.
                </p>
                <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={() => nav("products")} style={{ background: "#1a1a1a", color: "#fff", border: "none", padding: "14px 28px", fontSize: 13, fontWeight: 600, letterSpacing: 1, cursor: "pointer" }}>
                    EXPLORE COLLECTION
                  </button>
                  <button onClick={() => nav("contact")} style={{ background: "transparent", color: "#1a1a1a", border: "1px solid #1a1a1a", padding: "14px 28px", fontSize: 13, fontWeight: 600, letterSpacing: 1, cursor: "pointer" }}>
                    CONTACT US
                  </button>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {products.slice(0, 4).map(p => (
                  <div key={p.id} style={{ background: "#fff", padding: 24, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", aspectRatio: "1", border: "1px solid #e8e8e8" }}>
                    <div style={{ fontSize: 48, marginBottom: 8 }}>{p.emoji}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, textAlign: "center", color: "#333" }}>{p.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div style={{ borderBottom: "1px solid #e8e8e8", borderTop: "1px solid #e8e8e8", padding: "20px 40px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              {["GST Invoice Provided", "Pan-India Delivery", "Free Installation", "EMI Available", "After-Sales Support"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 600, letterSpacing: 1, color: "#444" }}>
                  <div style={{ width: 6, height: 6, background: "#1a1a1a", borderRadius: "50%" }} />
                  {t.toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div style={{ padding: "80px 40px", background: "#fff" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 12 }}>WHY CIC FURNITURE</div>
                <h2 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>Built to Last. Designed to Inspire.</h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, background: "#e8e8e8" }}>
                {[
                  { icon: "◈", title: "Premium Materials", desc: "Carefully selected materials built for durability and long-term performance in Indian conditions." },
                  { icon: "◎", title: "Ergonomic Design", desc: "Every product designed with human comfort in mind, reducing fatigue and improving productivity." },
                  { icon: "◉", title: "Competitive Pricing", desc: "Best-in-class quality at honest prices. No hidden costs. EMI available on all orders." },
                  { icon: "◌", title: "Dedicated Support", desc: "From selection to installation and beyond — our team is with you every step of the way." },
                ].map(f => (
                  <div key={f.title} style={{ background: "#fff", padding: 40 }}>
                    <div style={{ fontSize: 28, marginBottom: 16, color: "#1a1a1a" }}>{f.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, letterSpacing: 0.5 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Products */}
          <div style={{ padding: "80px 40px", background: "#f5f5f0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 10 }}>OUR COLLECTION</div>
                  <h2 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>Featured Products</h2>
                </div>
                <button onClick={() => nav("products")} style={{ background: "none", border: "1px solid #1a1a1a", padding: "10px 20px", fontSize: 12, fontWeight: 600, letterSpacing: 1, cursor: "pointer" }}>VIEW ALL →</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
                {products.slice(0, 4).map(p => (
                  <div key={p.id} style={{ background: "#fff", border: "1px solid #e8e8e8" }}>
                    <div style={{ background: "#f5f5f0", height: 200, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>{p.emoji}</div>
                    <div style={{ padding: 24 }}>
                      <div style={{ fontSize: 10, letterSpacing: 2, color: "#888", marginBottom: 8 }}>{p.category.toUpperCase()}</div>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{p.name}</div>
                      <div style={{ fontSize: 13, color: "#666", marginBottom: 16, lineHeight: 1.6 }}>{p.description}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontSize: 18, fontWeight: 700 }}>{formatPrice(p.price)}</div>
                          <div style={{ fontSize: 10, color: "#888", letterSpacing: 1 }}>+ GST</div>
                        </div>
                        <button onClick={() => nav("contact")} style={{ background: "#1a1a1a", color: "#fff", border: "none", padding: "8px 16px", fontSize: 11, fontWeight: 600, letterSpacing: 1, cursor: "pointer" }}>ENQUIRE</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: "#1a1a1a", color: "#fff", padding: "80px 40px", textAlign: "center" }}>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 16 }}>GET STARTED</div>
              <h2 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 16px" }}>Ready to Transform Your Workspace?</h2>
              <p style={{ color: "#aaa", fontSize: 15, margin: "0 0 32px", lineHeight: 1.7 }}>Get a free consultation and personalised quote for your office. No obligations.</p>
              <button onClick={() => nav("contact")} style={{ background: "#fff", color: "#1a1a1a", border: "none", padding: "14px 32px", fontSize: 13, fontWeight: 700, letterSpacing: 1, cursor: "pointer" }}>REQUEST A FREE QUOTE</button>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCTS */}
      {page === "products" && (
        <div style={{ padding: "60px 40px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 10 }}>OUR RANGE</div>
            <h1 style={{ fontSize: 40, fontWeight: 700, margin: "0 0 8px" }}>All Products</h1>
            <p style={{ color: "#666", fontSize: 14 }}>All prices exclusive of GST · EMI available on orders above ₹10,000</p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {categories.map(c => (
              <button key={c} onClick={() => setFilterCat(c)} style={{ padding: "8px 18px", border: "1px solid", borderColor: filterCat === c ? "#1a1a1a" : "#ddd", background: filterCat === c ? "#1a1a1a" : "#fff", color: filterCat === c ? "#fff" : "#444", fontSize: 11, fontWeight: 600, letterSpacing: 1, cursor: "pointer" }}>
                {c.toUpperCase()}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {filtered.map(p => (
              <div key={p.id} style={{ background: "#fff", border: "1px solid #e8e8e8" }}>
                <div style={{ background: "#f5f5f0", height: 180, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>{p.emoji}</div>
                <div style={{ padding: 24 }}>
                  <div style={{ fontSize: 10, letterSpacing: 2, color: "#888", marginBottom: 8 }}>{p.category.toUpperCase()}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: "#666", marginBottom: 16, lineHeight: 1.6 }}>{p.description}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 700 }}>{formatPrice(p.price)}</div>
                      <div style={{ fontSize: 10, color: "#888", letterSpacing: 1 }}>+ GST</div>
                    </div>
                    <button onClick={() => nav("contact")} style={{ background: "#1a1a1a", color: "#fff", border: "none", padding: "8px 16px", fontSize: 11, fontWeight: 600, letterSpacing: 1, cursor: "pointer" }}>ENQUIRE</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <div>
          <div style={{ background: "#f5f5f0", padding: "80px 40px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 16 }}>OUR STORY</div>
              <h1 style={{ fontSize: 52, fontWeight: 700, margin: "0 0 24px", maxWidth: 600, lineHeight: 1.1 }}>Furniture That Works As Hard As You Do.</h1>
              <p style={{ fontSize: 16, color: "#555", maxWidth: 560, lineHeight: 1.8 }}>CIC Furniture is a family-run retail outlet committed to bringing premium quality office furniture to Indian businesses of every size.</p>
            </div>
          </div>
          <div style={{ padding: "80px 40px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 60 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 16 }}>OUR MISSION</div>
                <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8 }}>To provide Indian businesses with furniture that combines international design standards with local practicality — at honest, transparent prices. We believe every workspace deserves quality without compromise.</p>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 16 }}>OUR VALUES</div>
                <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8 }}>Quality, transparency and long-term relationships. We're not just a furniture store — we're a workspace partner. From initial consultation to after-sales service, we stand behind every product we sell.</p>
              </div>
            </div>
            <div style={{ maxWidth: 1200, margin: "60px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1, background: "#e8e8e8" }}>
              {[["500+", "Happy Clients"], ["100+", "Products"], ["4", "Categories"], ["5★", "Rated"]].map(([num, label]) => (
                <div key={label} style={{ background: "#f5f5f0", padding: 40, textAlign: "center" }}>
                  <div style={{ fontSize: 40, fontWeight: 800, color: "#1a1a1a" }}>{num}</div>
                  <div style={{ fontSize: 11, letterSpacing: 2, color: "#888", marginTop: 8 }}>{label.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <div>
          <div style={{ background: "#f5f5f0", padding: "80px 40px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 16 }}>GET IN TOUCH</div>
              <h1 style={{ fontSize: 52, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>Let's Find the Right<br />Furniture For You.</h1>
            </div>
          </div>
          <div style={{ padding: "80px 40px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 32 }}>CONTACT DETAILS</div>
                {[
                  { label: "ADDRESS", value: "Plot no. 305, Industrial Area, Phase 2, Chandigarh" },
                  { label: "PHONE & WHATSAPP", value: "+91 9501798358" },
                  { label: "EMAIL", value: "furniturecic@gmail.com" },
                  { label: "STORE HOURS", value: "Monday – Saturday, 9:00 AM – 7:00 PM" },
                  { label: "GST NUMBER", value: "ATHYFGTYS3R" },
                ].map(c => (
                  <div key={c.label} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid #e8e8e8" }}>
                    <div style={{ fontSize: 10, letterSpacing: 2, color: "#888", marginBottom: 6 }}>{c.label}</div>
                    <div style={{ fontSize: 15, color: "#1a1a1a", fontWeight: 500 }}>{c.value}</div>
                  </div>
                ))}
                <div style={{ background: "#f5f5f0", padding: 24, marginTop: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>QUICK ENQUIRY VIA WHATSAPP</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>Prefer WhatsApp? Send us a message directly for fast quotes and order confirmation.</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 4, color: "#888", marginBottom: 32 }}>SEND AN ENQUIRY</div>
                {submitted ? (
                  <div style={{ padding: 40, border: "1px solid #e8e8e8", textAlign: "center" }}>
                    <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
                    <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Enquiry Received</div>
                    <div style={{ color: "#666", fontSize: 14 }}>We'll get back to you within 24 hours.</div>
                    <button onClick={() => setSubmitted(false)} style={{ marginTop: 24, background: "#1a1a1a", color: "#fff", border: "none", padding: "10px 20px", fontSize: 12, fontWeight: 600, letterSpacing: 1, cursor: "pointer" }}>SEND ANOTHER</button>
                  </div>
                ) : (
                  <div>
                    {[["Full Name", "name", "text"], ["Phone Number", "phone", "tel"], ["Email Address", "email", "email"]].map(([label, key, type]) => (
                      <div key={key} style={{ marginBottom: 20 }}>
                        <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "#888", marginBottom: 8 }}>{label.toUpperCase()}</label>
                        <input type={type} value={contactForm[key]} onChange={e => setContactForm({ ...contactForm, [key]: e.target.value })}
                          style={{ width: "100%", padding: "12px 0", borderBottom: "1px solid #1a1a1a", border: "none", borderBottom: "1px solid #ddd", fontSize: 14, outline: "none", boxSizing: "border-box", background: "transparent" }} />
                      </div>
                    ))}
                    <div style={{ marginBottom: 28 }}>
                      <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "#888", marginBottom: 8 }}>YOUR REQUIREMENTS</label>
                      <textarea value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })} rows={4}
                        placeholder="e.g. 10 office chairs, budget ₹1,00,000..."
                        style={{ width: "100%", padding: "12px 0", borderBottom: "1px solid #ddd", border: "none", borderBottom: "1px solid #ddd", fontSize: 14, outline: "none", resize: "none", boxSizing: "border-box", background: "transparent" }} />
                    </div>
                    <button onClick={() => setSubmitted(true)} style={{ background: "#1a1a1a", color: "#fff", border: "none", padding: "14px 32px", fontSize: 12, fontWeight: 700, letterSpacing: 1, cursor: "pointer", width: "100%" }}>SUBMIT ENQUIRY</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ background: "#1a1a1a", color: "#fff", padding: "48px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 3 }}>CIC</div>
            <div style={{ fontSize: 8, letterSpacing: 4, color: "#666", marginTop: -2 }}>FURNITURE</div>
            <div style={{ fontSize: 12, color: "#666", marginTop: 16, maxWidth: 240, lineHeight: 1.6 }}>Premium office furniture for modern Indian workspaces.</div>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 2, color: "#666", marginBottom: 16 }}>NAVIGATE</div>
              {navItems.map(n => <div key={n.key} onClick={() => nav(n.key)} style={{ fontSize: 13, color: "#aaa", marginBottom: 10, cursor: "pointer", letterSpacing: 0.5 }}>{n.label}</div>)}
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 2, color: "#666", marginBottom: 16 }}>CONTACT</div>
              <div style={{ fontSize: 13, color: "#aaa", marginBottom: 10 }}>furniturecic@gmail.com</div>
              <div style={{ fontSize: 13, color: "#aaa", marginBottom: 10 }}>cicfurniture.in</div>
              <div style={{ fontSize: 13, color: "#aaa" }}>+91 9501798358</div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "32px auto 0", paddingTop: 24, borderTop: "1px solid #333", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontSize: 11, color: "#555" }}>© 2026 CIC Furniture. All rights reserved.</div>
          <div style={{ fontSize: 11, color: "#555" }}>GST Reg: OJLS6NINXSR</div>
        </div>
      </footer>
    </div>
  );
}
