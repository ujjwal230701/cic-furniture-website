// ============================================
// STORE CONFIGURATION — Edit this file only!
// ============================================

export const STORE = {
  name: "CIC Furniture",
  tagline: "Premium office furniture for modern Indian workspaces.",
  phone: "+91 XXXXX XXXXX",
  email: "info@cicfurniture.in",
  website: "cicfurniture.in",
  address: "Your Store Address Here",
  hours: "Monday – Saturday, 9:00 AM – 7:00 PM",
  gst: "XXXXXXXXXXXX",
  upi: "cicfurniture@upi",
  whatsapp: "+91 XXXXX XXXXX",
};

export const PRODUCTS = [
  { id: 1, name: "Executive Office Chair", category: "Chairs & Seating", price: 12999, description: "Ergonomic design with lumbar support, breathable mesh back and adjustable armrests.", emoji: "🪑" },
  { id: 2, name: "Height-Adjustable Desk", category: "Desks & Tables", price: 24999, description: "Electric sit-stand desk with memory settings. Promotes healthier working posture.", emoji: "🖥️" },
  { id: 3, name: "3-Drawer Filing Cabinet", category: "Storage & Shelving", price: 8999, description: "Steel construction with central lock. Smooth glide drawers for effortless access.", emoji: "🗄️" },
  { id: 4, name: "Conference Table", category: "Desks & Tables", price: 39999, description: "Seats up to 8. Clean-lined design with cable management. Ideal for boardrooms.", emoji: "📋" },
  { id: 5, name: "Modular Bookshelf", category: "Storage & Shelving", price: 9999, description: "5-tier solid wood unit. Versatile and space-efficient for any office setting.", emoji: "📚" },
  { id: 6, name: "Visitor Chair", category: "Chairs & Seating", price: 5999, description: "Padded seat and back with chrome legs. Available in multiple upholstery options.", emoji: "💺" },
  { id: 7, name: "Desk Organizer Set", category: "Accessories & Misc", price: 1499, description: "Premium organizer with pen holder, document tray and mobile stand.", emoji: "🗂️" },
  { id: 8, name: "Monitor Riser", category: "Accessories & Misc", price: 2499, description: "Adjustable height riser with integrated storage shelf underneath.", emoji: "🖥️" },
];

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

export const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;
