import PageLayout from "./PageLayout";

export default function Multimedia({ setActivePage }) {
  return (
    <PageLayout
      index={6}
      kicker="Section 7"
      lede="Visuals and video that support — not just decorate — the content."
      setActivePage={setActivePage}
    >
      <div className="media-slot">Video embed</div>
      <div className="media-slot">Image / infographic gallery</div>
      <div className="media-slot">Chart or timeline</div>
    </PageLayout>
  );
}
