import PageLayout from "./PageLayout";

export default function GenderIssues({ setActivePage }) {
  return (
    <PageLayout
      index={4}
      kicker="Section 5"
      lede="Ongoing challenges and inequalities within the Philippine context."
      setActivePage={setActivePage}
    >
      <section className="block">
        <h3>Gender Stereotypes</h3>
        <p>
          Despite the Philippines' strong global ranking on gender parity,
          deeply held stereotypes persist women are still often judged
          first as mothers or wives, and men who take on caregiving roles
          can face social ridicule rather than support.
        </p>
      </section>

      <section className="block">
        <h3>Gender Discrimination and the Wage Gap</h3>
        <p>
          Women's estimated earned income remains below men's for
          comparable work around 71.6% of men's income, according to
          WEF data even though women are well represented in management
          roles. Discrimination shows up less in formal exclusion today and
          more in unequal pay and unequal access to promotion.
        </p>
      </section>

      <section className="block">
        <h3>Equal Opportunities in Leadership</h3>
        <div className="stat-row">
          <div className="stat">
            <div className="num">21.1%</div>
            <div className="desc">of ministerial (cabinet) roles held by women in 2025 — down from over 30% in 2006–07 and 2023</div>
          </div>
          <div className="stat">
            <div className="num">38.9%</div>
            <div className="desc">of parliamentary seats held by women (WEF, 2025)</div>
          </div>
        </div>
        <p>
          Political empowerment is consistently the Philippines' weakest
          sub-index in the Global Gender Gap Report a sign that legal
          equality has not fully translated into equal representation at
          the top levels of government.
        </p>
      </section>

      <section className="block">
        <h3>Gender-Based Violence</h3>
        <div className="stat-row">
          <div className="stat">
            <div className="num">14.0%</div>
            <div className="desc">of women aged 15–49 have experienced physical or sexual violence (2022 NDHS, PSA)</div>
          </div>
          <div className="stat">
            <div className="num">17.5%</div>
            <div className="desc">experienced physical, sexual, or emotional violence from an intimate partner (PSA, 2022)</div>
          </div>
          <div className="stat">
            <div className="num">8,055</div>
            <div className="desc">RA 9262 (Anti-VAWC) cases reported to the PNP in 2023</div>
          </div>
        </div>
        <p>
          Among women who experienced violence and sought help, most turned
          to their own family (65%) rather than police or formal services
          suggesting that support systems still rely heavily on the
          household rather than institutions.
        </p>
      </section>

      <p className="source-note">
        Sources: Philippine Statistics Authority, 2022 National Demographic
        and Health Survey; World Economic Forum, Global Gender Gap Report
        2025 (see References).
      </p>
    </PageLayout>
  );
}
