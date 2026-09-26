import PageLayout from "./PageLayout";

export default function AnalysisReflection({ setActivePage }) {
  return (
    <PageLayout
      index={5}
      kicker="Section 6"
      lede="The group's own critical analysis, grounded in credible evidence."
      setActivePage={setActivePage}
    >
      <section className="block mt-9 pt-0 border-t-0">
        <h3 className="text-[19px] mb-3">Then vs. Now</h3>
        <p>
          Pre-colonial Filipino society gave women religious authority and
          property rights that many contemporary societies did not have at
          the time. Spanish colonization narrowed this to a domestic ideal,
          and while independence era laws restored formal equality, our
          research suggests the pendulum never fully swung back to
          pre-colonial levels of women's autonomy it settled somewhere
          in between, formal equality on paper, with cultural expectations
          still catching up.
        </p>
      </section>

      <section className="block mt-10 pt-8 border-t border-line-soft">
        <h3 className="text-[19px] mb-3">What Changed, What Hasn't</h3>
        <p>
          What changed: legal protections now exist that didn't in earlier
          eras the 1987 Constitution, the Magna Carta of Women (2009), and
          RA 9262 give women recourse that colonial era women did not have.
          Education is close to fully equal, and the Philippines is
          consistently ranked Asia's most gender-equal country.
        </p>
        <p>
          What hasn't changed: the expectation that women carry
          disproportionate caregiving and household work, a persistent
          income gap in the workplace, low representation in top political
          roles, and rates of gender-based violence that have declined but
          not disappeared.
        </p>
      </section>

      <section className="block mt-10 pt-8 border-t border-line-soft">
        <h3 className="text-[19px] mb-3">Impact</h3>
        <p>
          The gap between the Philippines' strong global ranking and the
          lived statistics we found a wage gap, underrepresentation in
          leadership, and reported violence shows that national-level
          progress doesn't automatically reach every household. Our
          takeaway as a group is that policy change and cultural change
          move at different speeds, and closing that gap needs both legal
          enforcement and a shift in everyday expectations about what men
          and women are "supposed" to do.
        </p>
      </section>
    </PageLayout>
  );
}