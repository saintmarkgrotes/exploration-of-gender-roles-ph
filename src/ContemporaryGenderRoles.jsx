import PageLayout from "./PageLayout";

export default function ContemporaryGenderRoles({ setActivePage }) {
  return (
    <PageLayout
      index={3}
      kicker="Section 4"
      lede="Current expectations and experiences across different areas of Filipino life."
      setActivePage={setActivePage}
    >
      <ul className="req">
        <li>Family and household roles</li>
        <li>Education</li>
        <li>Workplace and leadership</li>
        <li>Media representation</li>
        <li>Community life</li>
      </ul>
    </PageLayout>
  );
}
