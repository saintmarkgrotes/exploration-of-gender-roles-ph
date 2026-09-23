import PageLayout from "./PageLayout";
import VideoEmbed from "./VideoEmbed";

export default function Multimedia({ setActivePage }) {
  return (
    <PageLayout
      index={6}
      kicker="Section 7"
      lede="Visuals and video that support — not just decorate — the content."
      setActivePage={setActivePage}
    >
      <section className="block">
        <h3>Video</h3>
        <VideoEmbed
          videoId="I6xuJu7gLe0"
          title="The gender-fluid history of the Philippines — France Villarta, TED"
          caption="France Villarta, “The gender-fluid history of the Philippines,” TED@WellsFargo (2020)."
        />
      </section>

      <section className="block">
        <h3>Images</h3>
        <p>
          Add your own historical and contemporary images here. For
          copyright-safe options, search{" "}
          <a href="https://commons.wikimedia.org/wiki/Category:Philippines" target="_blank" rel="noreferrer">
            Wikimedia Commons — Philippines
          </a>{" "}
          or the{" "}
          <a href="https://nhcp.gov.ph/" target="_blank" rel="noreferrer">
            National Historical Commission of the Philippines
          </a>{" "}
          for public-domain and government photos.
        </p>
        <div className="gallery">
          <figure>
            <div className="media-slot" style={{ margin: 0, height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
              Image 1
            </div>
            <figcaption>Caption + source</figcaption>
          </figure>
          <figure>
            <div className="media-slot" style={{ margin: 0, height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
              Image 2
            </div>
            <figcaption>Caption + source</figcaption>
          </figure>
          <figure>
            <div className="media-slot" style={{ margin: 0, height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
              Image 3
            </div>
            <figcaption>Caption + source</figcaption>
          </figure>
        </div>
      </section>
    </PageLayout>
  );
}
