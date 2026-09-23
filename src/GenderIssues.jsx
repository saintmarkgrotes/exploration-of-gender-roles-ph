import PageLayout from "./PageLayout";

export default function GenderIssues({ setActivePage }) {
  return (
    <PageLayout
      index={4}
      kicker="Section 5"
      lede="Ongoing challenges and inequalities within the Philippine context."
      setActivePage={setActivePage}
    >
      <ul className="req">
        <li>Gender stereotypes</li>
        <li>Gender discrimination</li>
        <li>Equal opportunities</li>
        <li>Representation in media</li>
        <li>Gender-based inequalities</li>
      </ul>
      <p>Present each issue with respectful, evidence-based discussion and credible sources.</p>
    </PageLayout>
  );
}
