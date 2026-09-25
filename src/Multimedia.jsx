import PageLayout from "./PageLayout";
import VideoEmbed from "./VideoEmbed";

import babaylanLeadership from "./assets/pic1.jpg";
import babaylanAlchemy from "./assets/pic2.jpg";
import babaylansGroup from "./assets/pic3.webp";
import tradeShoreline from "./assets/pic4.jpg";

export default function Multimedia({ setActivePage }) {
  return (
    <PageLayout
      index={6}
      kicker="Section 7"
      lede="Images and video that give a face to the babaylan and the gender-fluid roles they held in precolonial Philippine society."
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
          Two visual representations of the babaylan, showing their important roles as spiritual leaders, healers, 
          and respected figures in precolonial Filipino communities. 
          The images also show the traditional appearance and cultural significance of the babaylan.
        </p>
        <div className="gallery">
          <figure>
            <img
              src={babaylanLeadership}
              alt="Illustration of babaylan women in ceremonial dress"
              style={{ width: "100%", height: 220, objectFit: "cover", objectPosition: "center 20%" }}
            />
            <figcaption>Babaylan women held leadership and ritual authority in precolonial communities. Source: Rising Filipinas.</figcaption>
          </figure>
          <figure>
            <img
              src={babaylanAlchemy}
              alt="Illustration of a babaylan preparing herbal remedies over a fire"
              style={{ width: "100%", height: 220, objectFit: "cover", objectPosition: "center 25%" }}
            />
            <figcaption>“Alchemy of a Babaylan,” digital illustration by Gromyko. Source: DeviantArt.</figcaption>
             </figure>
        </div>
      </section>
    </PageLayout>
  );
}
