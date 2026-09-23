import PageLayout from "./PageLayout";

export default function References({ setActivePage }) {
  return (
    <PageLayout
      index={8}
      kicker="Section 9"
      lede="All sources used, properly acknowledged."
      setActivePage={setActivePage}
    >
      <ol className="refs">
        <li>Add books, journal articles, and government sources here.</li>
        <li>Add credible websites, images, and videos with proper attribution.</li>
      </ol>
    </PageLayout>
  );
}
