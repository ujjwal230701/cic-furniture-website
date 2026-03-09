import { useState } from "react";
import { S } from "../styles";
import { formatPrice } from "../config";
import { useProductImages } from "../hooks";

export default function ProductPage({ product, nav }) {
  const extraImages = useProductImages(product.id);
  const allImages = product.image_url
    ? [{ image_url: product.image_url }, ...extraImages]
    : extraImages;
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div>
      {/* Back button */}
      <div style={{ padding: "20px 40px", borderBottom: "1px solid #e8e8e8" }}>
        <button onClick={() => nav("products")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#666", display: "flex", alignItems: "center", gap: 8 }}>
          ← Back to Products
        </button>
      </div>

      <div style={{ ...S.section }}>
        <div style={{ ...S.container, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60 }}>

          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div style={{ background: "#f5f5f0", height: 400, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: 12 }}>
              {allImages.length > 0
                ? <img src={allImages[activeImg]?.image_url} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                : <span style={{ fontSize: 80 }}>📦</span>}
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {allImages.map((img, i) => (
                  <div key={i} onClick={() => setActiveImg(i)} style={{ width: 72, height: 72, border: activeImg === i ? "2px solid #1a1a1a" : "1px solid #ddd", overflow: "hidden", cursor: "pointer", background: "#f5f5f0" }}>
                    <img src={img.image_url} alt={`thumb-${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#888", marginBottom: 12 }}>{product.category?.toUpperCase()}</div>
            <h1 style={{ ...S.h1, fontSize: 32, marginBottom: 16 }}>{product.name}</h1>
            {product.sku && <div style={{ fontSize: 12, color: "#aaa", marginBottom: 16 }}>SKU: {product.sku}</div>}
            <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{formatPrice(product.price)}</div>
            <div style={{ fontSize: 11, color: "#888", letterSpacing: 1, marginBottom: 24 }}>EXCLUSIVE OF GST</div>

            {product.description && (
              <div style={{ ...S.body, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8e8e8" }}>
                {product.description}
              </div>
            )}

            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              <div style={{ padding: "6px 14px", background: product.in_stock ? "#f0fff4" : "#fff5f5", color: product.in_stock ? "#38a169" : "#e53e3e", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>
                {product.in_stock ? "✓ IN STOCK" : "✗ OUT OF STOCK"}
              </div>
              <div style={{ padding: "6px 14px", background: "#f5f5f0", fontSize: 11, fontWeight: 600, letterSpacing: 1 }}>
                EMI AVAILABLE
              </div>
              <div style={{ padding: "6px 14px", background: "#f5f5f0", fontSize: 11, fontWeight: 600, letterSpacing: 1 }}>
                FREE INSTALLATION
              </div>
            </div>

            <button onClick={() => nav("contact")} style={{ ...S.btnPrimary, width: "100%", padding: "16px", fontSize: 13, marginBottom: 12 }}>
              ENQUIRE NOW
            </button>
            <div style={{ fontSize: 12, color: "#888", textAlign: "center" }}>
              We'll get back to you within 24 hours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
