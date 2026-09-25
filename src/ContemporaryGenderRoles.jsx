import PageLayout from "./PageLayout";

export default function ContemporaryGenderRoles({ setActivePage }) {
  return (
    <PageLayout
      index={3}
      kicker="Section 4"
      lede="Current expectations and experiences across different areas of Filipino life."
      setActivePage={setActivePage}
    >
      <section className="block">
        <h3>Family and Household Roles</h3>
        <p>
          Even as more Filipino women work outside the home, household and
          caregiving duties are still largely expected to fall on women a
          pattern often called the "double burden." Men are still widely
          expected to be the primary provider, while women are expected to
          manage the household regardless of their own employment status.
        </p>
      </section>

      <section className="block">
        <h3>Education</h3>
        <p>
          The Philippines has long maintained near-full gender parity in
          education. In the 2025 Global Gender Gap Report, the country's
          educational attainment score stood at 98.8% though for the
          first time, boys' primary school net enrollment slightly
          surpassed girls', a small shift worth watching.
        </p>
      </section>

      <section className="block">
        <h3>Workplace and Leadership</h3>
        <div className="stat-row">
          <div className="stat">
            <div className="num">79%</div>
            <div className="desc">Economic participation parity score the highest in East Asia & the Pacific (WEF, 2025)</div>
          </div>
          <div className="stat">
            <div className="num">43.4%</div>
            <div className="desc">of Philippine firms have a female top manager (WEF, 2025)</div>
          </div>
          <div className="stat">
            <div className="num">71.6%</div>
            <div className="desc">Women's estimated income as a share of men's for similar work (WEF, 2023)</div>
          </div>
        </div>
        <p>
          Filipino women are well represented in management, but the
          overall labor force is still male-dominated (about 16.7 million
          working women versus 23.8 million working men), and a wage gap
          persists even where women lead.
        </p>
      </section>

      <section className="block">
        <h3>Media Representation</h3>
        <p>
          Philippine television and film have long relied on familiar
          gender types the self-sacrificing mother, the domineering
          mother-in-law, the ambitious but "unlucky in love" career woman
          alongside a growing but still limited number of roles that show
          women in leadership or men in caregiving roles.
        </p>
      </section>

      <section className="block">
        <h3>Community Life</h3>
        <p>
          Women's participation in local governance has grown gradually
          the proportion of local government seats held by women rose from
          about 15–24% in 2019 to roughly 20–33% in 2022, depending on the
          position, still short of the 50% target set for 2030.
        </p>
      </section>

      <p className="source-note">
        Sources: World Economic Forum, Global Gender Gap Report 2025; Philippine
        Statistics Authority, SDG Goal 5 Watch (see References).
      </p>
    </PageLayout>
  );
}
