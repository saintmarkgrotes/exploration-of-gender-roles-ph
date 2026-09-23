import PageLayout from "./PageLayout";

export default function HistoricalPerspective({ setActivePage }) {
  return (
    <PageLayout
      index={2}
      kicker="Section 3"
      lede="How gender roles in the Philippines developed across different historical periods."
      setActivePage={setActivePage}
    >
      <ul className="req">
        <li>Gender roles in pre-colonial Philippine society</li>
        <li>Changes during the Spanish, American, and other relevant periods</li>
        <li>Key examples of how expectations shifted over time</li>
      </ul>
      <div className="media-slot">Timeline or infographic goes here</div>
    </PageLayout>
  );
}
