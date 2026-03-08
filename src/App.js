import { useState } from "react";

const products = [
  { id: 1, name: "Executive Office Chair", category: "Chairs & Seating", price: 12999, description: "Premium ergonomic chair with lumbar support and adjustable armrests.", emoji: "🪑" },
  { id: 2, name: "Height-Adjustable Desk", category: "Desks & Tables", price: 24999, description: "Modern standing desk for a healthier and more productive work experience.", emoji: "🖥️" },
  { id: 3, name: "Filing Cabinet", category: "Storage & Shelving", price: 8999, description: "3-drawer steel filing cabinet with lock for secure document storage.", emoji: "🗄️" },
  { id: 4, name: "Conference Table", category: "Desks & Tables", price: 39999, description: "Seats up to 8 people. Perfect for boardrooms and meeting spaces.", emoji: "📋" },
  { id: 5, name: "Bookshelf Unit", category: "Storage & Shelving", price: 9999, description: "5-tier solid wood bookshelf. Elegant, sturdy and space-saving.", emoji: "📚" },
  { id: 6, name: "Visitor Chair", category: "Chairs & Seating", price: 5999, description: "Comfortable padded visitor chair. Available in multiple colours.", emoji: "💺" },
  { id: 7, name: "Desk Organizer Set", category: "Accessories & Misc", price: 1499, description: "Keep your workspace tidy with this premium organizer set.", emoji: "🗂️" },
  { id: 8, name: "Monitor Stand", category: "Accessories & Misc", price: 2499, description: "Adjustable monitor riser with storage space underneath.", emoji: "🖥️" },
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
    <div style={{ fontFamily: "system-ui, sans-serif", color: "#2d3748", background: "#fff" }}>

      {/* Navbar */}
      <nav style={{ background: "#1a1a2e", color: "white", padding: "0 24px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, flexWrap: "wrap", gap: 8 }}>
          <div onClick={() => nav("home")} style={{ cursor: "pointer" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#f6c90e", letterSpacing: 1 }}>CIC FURNITURE</div>
            <div style={{ fontSize: 10, opacity: 0.7, letterSpacing: 2 }}>QUALITY YOU CAN FEEL</div>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {navItems.map(n => (
              <button key={n.key} onClick={() => nav(n.key)} style={{ background: page === n.key ? "#f6c90e" : "transparent", color: page === n.key ? "#1a1a2e" : "white", border: "none", padding: "8px 14px", borderRadius: 6, cursor: "pointer", fontWeight: 600, fontSize: 13 }}>{n.label}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div>
          {/* Hero */}
          <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", color: "white", padding: "80px 24px", textAlign: "center" }}>
            <div style={{ maxWidth: 700, margin: "0 auto" }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>🪑</div>
              <h1 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2 }}>
                Apne Office Ko Banayein <span style={{ color: "#f6c90e" }}>Khaas</span>
              </h1>
              <p style={{ fontSize: 17, opacity: 0.85, margin: "0 0 10px", lineHeight: 1.6 }}>
                Premium office furniture for modern Indian workspaces.
              </p>
              <p style={{ fontSize: 14, opacity: 0.65, margin: "0 0 32px" }}>
                🇮🇳 Proudly serving customers across India
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={() => nav("products")} style={{ background: "#f6c90e", color: "#1a1a2e", border: "none", padding: "14px 28px", borderRadius: 8, fontWeight: 800, fontSize: 16, cursor: "pointer" }}>
                  Products देखें →
                </button>
                <button onClick={() => nav("contact")} style={{ background: "transparent", color: "white", border: "2px solid white", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
                  हमसे बात करें
                </button>
              </div>
            </div>
          </div>

          {/* Trust Bar */}
          <div style={{ background: "#f6c90e", padding: "14px 24px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>
              {["✅ GST Invoice Available", "🚚 Pan-India Delivery", "🛠️ Free Installation", "📞 24/7 Customer Support"].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div style={{ padding: "60px 24px", background: "#f7fafc" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 8, color: "#1a1a2e" }}>CIC Furniture क्यों चुनें?</h2>
              <p style={{ textAlign: "center", color: "#718096", marginBottom: 36, fontSize: 14 }}>Why thousands of Indian businesses trust us</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                {[
                  { icon: "🏆", title: "Premium Quality", desc: "ISI certified materials. Built to last for years in Indian conditions." },
                  { icon: "💰", title: "Best Prices", desc: "Competitive pricing with EMI options available. No hidden charges." },
                  { icon: "🚚", title: "Pan-India Delivery", desc: "We deliver across India. Fast and reliable logistics partners." },
                  { icon: "📄", title: "GST Invoice", desc: "Proper GST billing for all purchases. Claim your input tax credit." },
                ].map(f => (
                  <div key={f.title} style={{ background: "white", borderRadius: 12, padding: 22, textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                    <div style={{ fontSize: 36, marginBottom: 10 }}>{f.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: "#1a1a2e" }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#718096", lineHeight: 1.5 }}>{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Products */}
          <div style={{ padding: "60px 24px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 8, color: "#1a1a2e" }}>Featured Products</h2>
              <p style={{ textAlign: "center", color: "#718096", marginBottom: 36, fontSize: 14 }}>Our most popular picks — loved by Indian businesses</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
                {products.slice(0, 4).map(p => (
                  <div key={p.id} style={{ border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                    <div style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)", height: 120, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56 }}>{p.emoji}</div>
                    <div style={{ padding: 16 }}>
                      <div style={{ fontSize: 11, color: "#f6c90e", fontWeight: 700, background: "#1a1a2e", display: "inline-block", padding: "2px 8px", borderRadius: 99, marginBottom: 8 }}>{p.category}</div>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{p.name}</div>
                      <div style={{ fontSize: 13, color: "#718096", marginBottom: 12, lineHeight: 1.4 }}>{p.description}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontSize: 18, fontWeight: 800, color: "#0f3460" }}>{formatPrice(p.price)}</div>
                          <div style={{ fontSize: 11, color: "#718096" }}>+ GST • EMI available</div>
                        </div>
                        <button onClick={() => nav("contact")} style={{ background: "#f6c90e", color: "#1a1a2e", border: "none", padding: "7px 14px", borderRadius: 6, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Enquire</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: 32 }}>
                <button onClick={() => nav("products")} style={{ background: "#1a1a2e", color: "white", border: "none", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>सभी Products देखें →</button>
              </div>
            </div>
          </div>

          {/* Payment options */}
          <div style={{ background: "#f7fafc", padding: "40px 24px", textAlign: "center" }}>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <h3 style={{ fontWeight: 800, color: "#1a1a2e", marginBottom: 16 }}>Accepted Payment Methods</h3>
              <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", fontSize: 14, fontWeight: 600, color: "#4a5568" }}>
                {["💳 Credit/Debit Card", "📱 UPI", "🏦 Net Banking", "📲 PhonePe / GPay / Paytm", "🏪 Cash on Delivery"].map(p => (
                  <span key={p} style={{ background: "white", padding: "8px 16px", borderRadius: 99, boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: "#f6c90e", padding: "50px 24px", textAlign: "center" }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#1a1a2e", margin: "0 0 10px" }}>अपने Office के लिए Free Quote लें!</h2>
            <p style={{ fontSize: 15, color: "#1a1a2e", opacity: 0.75, margin: "0 0 24px" }}>No obligations. Just a friendly conversation about your needs.</p>
            <button onClick={() => nav("contact")} style={{ background: "#1a1a2e", color: "white", border: "none", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>Free Quote पाएं →</button>
          </div>
        </div>
      )}

      {/* PRODUCTS */}
      {page === "products" && (
        <div style={{ padding: "40px 24px", maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>Our Products</h1>
          <p style={{ color: "#718096", marginBottom: 8, fontSize: 14 }}>All prices exclusive of GST • EMI available on orders above ₹10,000</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28, marginTop: 16 }}>
            {categories.map(c => (
              <button key={c} onClick={() => setFilterCat(c)} style={{ padding: "8px 16px", borderRadius: 99, border: "2px solid", borderColor: filterCat === c ? "#1a1a2e" : "#e2e8f0", background: filterCat === c ? "#1a1a2e" : "white", color: filterCat === c ? "white" : "#4a5568", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>{c}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {filtered.map(p => (
              <div key={p.id} style={{ border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)", height: 120, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56 }}>{p.emoji}</div>
                <div style={{ padding: 16 }}>
                  <div style={{ fontSize: 11, color: "#f6c90e", fontWeight: 700, background: "#1a1a2e", display: "inline-block", padding: "2px 8px", borderRadius: 99, marginBottom: 8 }}>{p.category}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: "#718096", marginBottom: 12, lineHeight: 1.4 }}>{p.description}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#0f3460" }}>{formatPrice(p.price)}</div>
                      <div style={{ fontSize: 11, color: "#718096" }}>+ GST</div>
                    </div>
                    <button onClick={() => nav("contact")} style={{ background: "#f6c90e", color: "#1a1a2e", border: "none", padding: "7px 14px", borderRadius: 6, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Enquire</button>
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
          <div style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)", color: "white", padding: "60px 24px", textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🏢</div>
            <h1 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 12px" }}>About CIC Furniture</h1>
            <p style={{ fontSize: 15, opacity: 0.8, maxWidth: 600, margin: "0 auto" }}>एक परिवार, एक दुकान, एक वादा — quality जो टिके।</p>
          </div>
          <div style={{ padding: "50px 24px", maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, marginBottom: 40 }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 12 }}>हमारी कहानी</h2>
                <p style={{ color: "#4a5568", lineHeight: 1.8 }}>CIC Furniture एक family-run retail outlet है जो Indian businesses को premium quality office furniture provide करती है। हम मानते हैं कि हर workspace को ऐसा furniture deserve करता है जो functional भी हो और सुंदर भी।</p>
              </div>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 12 }}>हमारा Mission</h2>
                <p style={{ color: "#4a5568", lineHeight: 1.8 }}>Honest prices पर best office furniture देना, साथ में genuine after-sales support। हम सिर्फ furniture नहीं बेचते — हम आपको एक better workspace बनाने में help करते हैं।</p>
              </div>
            </div>

            <div style={{ background: "#f7fafc", borderRadius: 16, padding: 28, textAlign: "center", marginBottom: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 20 }}>Numbers में CIC</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 16 }}>
                {[["500+", "खुश Customers"], ["4", "Product Categories"], ["100+", "Products"], ["5⭐", "Customer Rating"]].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontSize: 30, fontWeight: 800, color: "#0f3460" }}>{num}</div>
                    <div style={{ fontSize: 13, color: "#718096" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#fff8e1", border: "1px solid #f6c90e", borderRadius: 12, padding: 20 }}>
              <div style={{ fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>🇮🇳 Made for India</div>
              <p style={{ fontSize: 14, color: "#4a5568", margin: 0, lineHeight: 1.6 }}>Our furniture is designed keeping Indian office environments in mind — built to handle India's climate, built for Indian spaces, and priced for Indian budgets. GST invoices provided for all purchases.</p>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <div>
          <div style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)", color: "white", padding: "60px 24px", textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>📞</div>
            <h1 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 12px" }}>बात करें हमसे</h1>
            <p style={{ fontSize: 15, opacity: 0.8 }}>We'd love to help you find the perfect furniture for your office.</p>
          </div>
          <div style={{ padding: "50px 24px", maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e", marginBottom: 20 }}>Contact Details</h2>
                {[
                  { icon: "📍", label: "Address", value: "Your Store Address Here" },
                  { icon: "📞", label: "Phone / WhatsApp", value: "+91 XXXXX XXXXX" },
                  { icon: "📧", label: "Email", value: "info@cicfurniture.in" },
                  { icon: "🕐", label: "Store Hours", value: "सोम–शनि: सुबह 9 बजे – शाम 7 बजे" },
                  { icon: "📱", label: "UPI ID", value: "cicfurniture@upi" },
                ].map(c => (
                  <div key={c.label} style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 22 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: "#1a1a2e" }}>{c.label}</div>
                      <div style={{ fontSize: 14, color: "#718096" }}>{c.value}</div>
                    </div>
                  </div>
                ))}

                <div style={{ background: "#f0fff4", border: "1px solid #9ae6b4", borderRadius: 10, padding: 14, marginTop: 8 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#276749", marginBottom: 4 }}>💬 WhatsApp पर Order करें</div>
                  <div style={{ fontSize: 13, color: "#4a5568" }}>Quick quotes and order confirmations on WhatsApp. Just send us a message!</div>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e", marginBottom: 20 }}>enquiry भेजें</h2>
                {submitted ? (
                  <div style={{ background: "#f0fff4", border: "1px solid #9ae6b4", borderRadius: 12, padding: 24, textAlign: "center" }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
                    <div style={{ fontWeight: 700, color: "#276749", fontSize: 16 }}>Enquiry मिल गई!</div>
                    <div style={{ color: "#4a5568", fontSize: 14, marginTop: 6 }}>हम जल्द ही आपसे संपर्क करेंगे।</div>
                    <button onClick={() => setSubmitted(false)} style={{ marginTop: 16, background: "#1a1a2e", color: "white", border: "none", padding: "8px 18px", borderRadius: 8, cursor: "pointer", fontWeight: 600 }}>Another Enquiry</button>
                  </div>
                ) : (
                  <div>
                    {[["आपका नाम *", "name", "text"], ["Mobile Number *", "phone", "tel"], ["Email Address", "email", "email"]].map(([label, key, type]) => (
                      <div key={key} style={{ marginBottom: 12 }}>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4a5568", marginBottom: 4 }}>{label}</label>
                        <input type={type} value={contactForm[key]} onChange={e => setContactForm({ ...contactForm, [key]: e.target.value })}
                          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, boxSizing: "border-box" }} />
                      </div>
                    ))}
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4a5568", marginBottom: 4 }}>आपकी जरूरत बताएं</label>
                      <textarea value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })} rows={4}
                        placeholder="जैसे: 10 office chairs चाहिए, budget ₹50,000..."
                        style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, boxSizing: "border-box", resize: "vertical" }} />
                    </div>
                    <button onClick={() => setSubmitted(true)} style={{ width: "100%", background: "#1a1a2e", color: "white", border: "none", padding: 14, borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>Enquiry भेजें →</button>
                    <div style={{ fontSize: 12, color: "#718096", textAlign: "center", marginTop: 8 }}>या सीधे WhatsApp करें: +91 XXXXX XXXXX</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ background: "#1a1a2e", color: "white", padding: "32px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#f6c90e", marginBottom: 4 }}>CIC FURNITURE</div>
          <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 16 }}>Quality You Can Feel • cicfurniture.in</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 16 }}>
            {navItems.map(n => <span key={n.key} onClick={() => nav(n.key)} style={{ fontSize: 13, opacity: 0.7, cursor: "pointer" }}>{n.label}</span>)}
          </div>
          <div style={{ fontSize: 12, opacity: 0.4, marginBottom: 4 }}>© 2026 CIC Furniture. All rights reserved.</div>
          <div style={{ fontSize: 11, opacity: 0.35 }}>GST Registration No: XXXXXXXXXXXX</div>
        </div>
      </footer>
    </div>
  );
}
