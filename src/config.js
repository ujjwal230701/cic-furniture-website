// ============================================
// STORE CONFIGURATION — Edit this file only!
// ============================================

export const SUPABASE_URL = "https://snjnphnxhoucvlnryqlb.supabase.co";
export const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuam5waG54aG91Y3ZsbnJ5cWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NTExNjMsImV4cCI6MjA4ODUyNzE2M30.INa33D6ETTxbXMIR0aKNQiQShTN6_kEkQWBPMD3Burw";

export const STORE = {
  name: "CIC Furniture",
  tagline: "Premium office furniture for modern Indian workspaces.",
  phone: "+91 9501798358",
  email: "furnniturecic@gmail.com",
  website: "cicfurniture.in",
  address: "305, Industrial Area Phase II, Chandigarh, 160002",
  hours: "Monday – Saturday, 9:00 AM – 7:00 PM",
  gst: "PLWAJUH69O",
  upi: "9501798358@paytm",
  whatsapp: "+919501798358",
};

export const CATEGORIES = ["All", "Chairs & Seating", "Desks & Tables", "Storage & Shelving", "Accessories & Misc"];

export const FEATURES = [
  { icon: "◈", title: "Premium Materials", desc: "Carefully selected materials built for durability and long-term performance in Indian conditions." },
  { icon: "◎", title: "Ergonomic Design", desc: "Every product designed with human comfort in mind, reducing fatigue and improving productivity." },
  { icon: "◉", title: "Competitive Pricing", desc: "Best-in-class quality at honest prices. No hidden costs. EMI available on all orders." },
  { icon: "◌", title: "Dedicated Support", desc: "From selection to installation and beyond — our team is with you every step of the way." },
];

export const TRUST_BADGES = [
  "GST Invoice Provided",
  "Pan-India Delivery",
  "Free Installation",
  "EMI Available",
  "After-Sales Support",
];

export const STATS = [
  ["500+", "Happy Clients"],
  ["100+", "Products"],
  ["4", "Categories"],
  ["5★", "Rated"],
];

export const formatPrice = (p) => `₹${p.toLocaleString("en-IN")}`;
