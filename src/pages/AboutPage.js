import { S } from "../styles";
import { STATS } from "../config";
import { PageHero } from "../components";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        label="Our Story"
        title="Furniture That Works As Hard As You Do."
        subtitle="CIC Furniture is a family-run retail outlet committed to bringing premium quality office furniture to Indian businesses of every size."
      />
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
