import PageLayout from "./PageLayout";

export default function GenderIssues({ setActivePage }) {
  return (
    <PageLayout
      index={4}
      kicker="Section 5"
      lede="Ongoing challenges and inequalities within the Philippine context."
      setActivePage={setActivePage}
    >
      <section className="block mt-9 pt-0 border-t-0">
        <h3 className="text-[19px] mb-3">Gender Stereotypes</h3>
        <p>
          Despite the Philippines' strong global ranking on gender parity,
          deeply held stereotypes persist women are still often judged
          first as mothers or wives, and men who take on caregiving roles
          can face social ridicule rather than support.
        </p>
      </section>

      <section className="block mt-10 pt-8 border-t border-line-soft">
        <h3 className="text-[19px] mb-3">Gender Discrimination and the Wage Gap</h3>
        <p>
          Women's estimated earned income remains below men's for
          comparable work around 71.6% of men's income, according to
          WEF data even though women are well represented in management
          roles. Discrimination shows up less in formal exclusion today and
          more in unequal pay and unequal access to promotion.
        </p>
      </section>

      <section className="block mt-10 pt-8 border-t border-line-soft">
        <h3 className="text-[19px] mb-3">Equal Opportunities in Leadership</h3>
        <div className="stat-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-7">
          <div className="stat bg-paper-dim border border-line rounded-md px-5 py-[18px]">
            <div className="num font-serif text-[27px] font-semibold text-pine leading-[1.1]">21.1%</div>
            <div className="desc text-[12.5px] text-ink-faint leading-relaxed mt-1.5">of ministerial (cabinet) roles held by women in 2025 — down from over 30% in 2006–07 and 2023</div>
          </div>
          <div className="stat bg-paper-dim border border-line rounded-md px-5 py-[18px]">
            <div className="num font-serif text-[27px] font-semibold text-pine leading-[1.1]">38.9%</div>
            <div className="desc text-[12.5px] text-ink-faint leading-relaxed mt-1.5">of parliamentary seats held by women (WEF, 2025)</div>
          </div>
        </div>
        <p>
          Political empowerment is consistently the Philippines' weakest
          sub-index in the Global Gender Gap Report a sign that legal
          equality has not fully translated into equal representation at
          the top levels of government.
        </p>
      </section>

      <section className="block mt-10 pt-8 border-t border-line-soft">
        <h3 className="text-[19px] mb-3">Gender-Based Violence</h3>
        <div className="stat-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-7">
          <div className="stat bg-paper-dim border border-line rounded-md px-5 py-[18px]">
            <div className="num font-serif text-[27px] font-semibold text-pine leading-[1.1]">14.0%</div>
            <div className="desc text-[12.5px] text-ink-faint leading-relaxed mt-1.5">of women aged 15–49 have experienced physical or sexual violence (2022 NDHS, PSA)</div>
          </div>
          <div className="stat bg-paper-dim border border-line rounded-md px-5 py-[18px]">
            <div className="num font-serif text-[27px] font-semibold text-pine leading-[1.1]">17.5%</div>
            <div className="desc text-[12.5px] text-ink-faint leading-relaxed mt-1.5">experienced physical, sexual, or emotional violence from an intimate partner (PSA, 2022)</div>
          </div>
          <div className="stat bg-paper-dim border border-line rounded-md px-5 py-[18px]">
            <div className="num font-serif text-[27px] font-semibold text-pine leading-[1.1]">8,055</div>
            <div className="desc text-[12.5px] text-ink-faint leading-relaxed mt-1.5">RA 9262 (Anti-VAWC) cases reported to the PNP in 2023</div>
          </div>
        </div>
        <p>
          Among women who experienced violence and sought help, most turned
          to their own family (65%) rather than police or formal services
          suggesting that support systems still rely heavily on the
          household rather than institutions.
        </p>
      </section>

      <p className="source-note text-[12.5px] text-ink-faint -mt-2">
        Sources: Philippine Statistics Authority, 2022 National Demographic
        and Health Survey; World Economic Forum, Global Gender Gap Report
        2025 (see References).
      </p>
    </PageLayout>
  );
}