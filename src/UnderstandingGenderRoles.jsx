import PageLayout from "./PageLayout";

export default function UnderstandingGenderRoles({ setActivePage }) {
  return (
    <PageLayout
      index={1}
      kicker="Section 2"
      lede="What gender roles are, how they differ from biological sex, and why studying them matters."
      setActivePage={setActivePage}
    >
      <section className="block">
        <h3>Definition and Explanation</h3>
        <p>
          Gender roles are socially constructed expectations and norms that dictate how
          individuals should behave, dress, and present themselves based on their
          perceived or assigned gender.
        </p>
      </section>

      <section className="block">
        <h3>Gender Roles vs. Biological Sex</h3>
        <p>
          While biological sex refers to the objective physical, genetic, and physiological
          attributes (such as chromosomes and anatomy) that categorize individuals as male,
          female, or intersex, gender roles are purely cultural. They are learned behaviors
          that can vary significantly across different societies and historical periods.
        </p>
      </section>

      <section className="block">
        <h3>Importance of Studying Gender Roles</h3>
        <p>
          Studying gender roles is crucial for recognizing and challenging systemic
          inequalities. It helps us understand how societal structures can limit individual
          potential and opportunity.
        </p>
      </section>
    </PageLayout>
  );
}
