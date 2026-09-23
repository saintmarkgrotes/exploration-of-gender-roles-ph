import PageLayout from "./PageLayout";

export default function AnalysisReflection({ setActivePage }) {
  return (
    <PageLayout
      index={5}
      kicker="Section 6"
      lede="The group's own critical analysis, grounded in credible evidence."
      setActivePage={setActivePage}
    >
      <section className="block">
        <h3>Then vs. Now</h3>
        <p>Compare historical and contemporary gender roles.</p>
      </section>
      <section className="block">
        <h3>What Changed, What Hasn't</h3>
        <p>Identify shifts and challenges that persist today.</p>
      </section>
      <section className="block">
        <h3>Impact</h3>
        <p>Explain how gender expectations affect individuals and society.</p>
      </section>
    </PageLayout>
  );
}
