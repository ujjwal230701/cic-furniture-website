import { S } from "../styles";
import { PageHero, ContactInfo, ContactForm } from "../components";

export default function ContactPage() {
  return (
    <div>
      <PageHero label="Get In Touch" title="Let's Find the Right Furniture For You." />
      <div style={S.section}>
        <div style={{ ...S.container, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 80 }}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
