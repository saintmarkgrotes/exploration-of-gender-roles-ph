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
        Our research shows a country of real contrasts. The Philippines
        ranks 20th out of 148 countries and 1st in Asia in the World
        Economic Forum's 2025 Global Gender Gap Report, with near full
        parity in education and strong female representation in
        management. At the same time, women still earn less than men for
        comparable work, hold fewer than 40% of ministerial and
        parliamentary seats, and 1 in 7 have experienced physical or sexual
        violence.
      </p>
      <p>
        Historically, this isn't entirely new pre-colonial Filipino
        society gave women more standing than the domestic ideal that
        colonization later imposed, and the country has spent the decades
        since independence rebuilding legal equality piece by piece.
      </p>
      <p>
        Our group's overall insight is that gender equality in the
        Philippines is not a finished story it is a legal framework that
        has outpaced cultural change. Continued progress will depend on
        closing that gap: enforcing the laws already in place, and shifting
        the everyday expectations that still shape who does the housework,
        who gets promoted, and who gets believed when they ask for help.
      </p>
    </PageLayout>
  );
}
