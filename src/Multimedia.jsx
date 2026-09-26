import PageLayout from "./PageLayout";
import VideoEmbed from "./VideoEmbed";

import babaylanLeadership from "./assets/pic1.jpg";
import babaylanAlchemy from "./assets/pic2.jpg";


export default function Multimedia({ setActivePage }) {
  return (
    <PageLayout
      index={6}
      kicker="Section 7"
      lede="Images and video that give a face to the babaylan and the gender-fluid roles they held in precolonial Philippine society."
      setActivePage={setActivePage}
    >
      <section className="block mt-9 pt-0 border-t-0">
        <h3 className="text-[19px] mb-3">Video</h3>
        <VideoEmbed
          videoId="I6xuJu7gLe0"
          title="The gender-fluid history of the Philippines — France Villarta, TED"
          caption="France Villarta, “The gender-fluid history of the Philippines,” TED@WellsFargo (2020)."
        />
      </section>

      <section className="block mt-10 pt-8 border-t border-line-soft">
        <h3 className="text-[19px] mb-3">Images</h3>
        <p>
          Two visual representations of the babaylan, showing their important roles as spiritual leaders, healers, 
          and respected figures in precolonial Filipino communities. 
          The images also show the traditional appearance and cultural significance of the babaylan.
        </p>
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          <figure className="m-0 border border-line rounded-md overflow-hidden bg-paper-dim shadow-sm">
            <img
              src={babaylanLeadership}
              alt="Illustration of babaylan women in ceremonial dress"
              className="block w-full h-55 object-cover object-[center_20%]"
            />
            <figcaption className="px-3 py-2.5 text-[12.5px] text-ink-faint leading-relaxed">Babaylan women held leadership and ritual authority in precolonial communities. Source: Rising Filipinas.</figcaption>
          </figure>
          <figure className="m-0 border border-line rounded-md overflow-hidden bg-paper-dim shadow-sm">
            <img
              src={babaylanAlchemy}
              alt="Illustration of a babaylan preparing herbal remedies over a fire"
              className="block w-full h-55 object-cover object-[center_25%]"
            />
            <figcaption className="px-3 py-2.5 text-[12.5px] text-ink-faint leading-relaxed">“Alchemy of a Babaylan,” digital illustration by Gromyko. Source: DeviantArt.</figcaption>
             </figure>
        </div>
      </section>
    </PageLayout>
  );
}