import PageLayout from "./PageLayout";
import Timeline from "./Timeline";

const events = [
  {
    year: "Pre-colonial",
    title: "Egalitarian societies, women as spiritual leaders",
    text: "Historical accounts describe relatively egalitarian barangay societies where women could own property, divorce, and lead as chieftains. Women dominated the babaylan class healers and spiritual leaders and some babaylan were transfeminine.",
  },
  {
    year: "1521–1898",
    title: "Spanish colonial period",
    text: "Catholic institutions replaced the babaylan's religious role with priests. Women's education emphasized piety, modesty, and domestic duty, confining most roles to the home.",
  },
  {
    year: "1898–1946",
    title: "American colonial period",
    text: "Public education expanded access for women, and new careers opened up (teaching, clerical work, trade). Victorian ideals of womanhood still shaped expectations around purity and domesticity.",
  },
  {
    year: "1946–present",
    title: "Independence to contemporary Philippines",
    text: "Legal reforms including the 1987 Constitution's equality clause and the 2009 Magna Carta of Women formalized gender equality, even as cultural expectations continue to evolve.",
  },
];

export default function HistoricalPerspective({ setActivePage }) {
  return (
    <PageLayout
      index={2}
      kicker="Section 3"
      lede="How gender roles in the Philippines developed across different historical periods."
      setActivePage={setActivePage}
    >
      <Timeline events={events} />
      <p style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>
        Sources: see the References section for the scholarly and TED Talk
        sources behind this timeline.
      </p>
    </PageLayout>
  );
}
