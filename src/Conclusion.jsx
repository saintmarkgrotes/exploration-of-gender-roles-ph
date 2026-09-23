import PageLayout from "./PageLayout";

export default function Conclusion({ setActivePage }) {
  return (
    <PageLayout
      index={7}
      kicker="Section 8"
      lede="A summary of the group's findings and overall insight."
      setActivePage={setActivePage}
    >
      <p>
        Summarize the most important findings from your research, and close with the
        group's overall insight about gender roles in the Philippine context.
      </p>
    </PageLayout>
  );
}
