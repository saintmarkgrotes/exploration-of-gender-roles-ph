import PageLayout from "./PageLayout";

const refs = [
  {
    text: "Villarta, F. (2020). The gender-fluid history of the Philippines [Video]. TED.",
    url: "https://www.ted.com/talks/france_villarta_the_gender_fluid_history_of_the_philippines",
  },
  {
    text: "Rodriguez, L. (2022). Filipinising colonial gender values: A history of gender formation in Philippine higher education. (via PhilPapers / ResearchGate)",
    url: "https://philpapers.org/rec/RODFCG",
  },
  {
    text: "Fluckiger, S. J. (2017). Caquenga and feminine social power in the Philippines. World History Connected, 14(3).",
    url: "https://worldhistoryconnected.press.uillinois.edu/14.3/forum_fluckiger.html",
  },
  {
    text: "Philippine Commission on Women. Gender Equality and Women's Empowerment Plan (GEWE) 2019–2025.",
    url: "https://pcw.gov.ph",
  },
  {
    text: "Philippine Statistics Authority. Gender-related SDG indicators.",
    url: "https://openstat.psa.gov.ph",
  },
  {
    text: "UN Committee on the Elimination of Discrimination against Women (CEDAW). (2021). Ninth periodic report submitted by the Philippines under article 18 of CEDAW.",
    url: "https://www.ecoi.net/en/file/local/2055551/N2127301.pdf",
  },
];

export default function References({ setActivePage }) {
  return (
    <PageLayout
      index={8}
      kicker="Section 9"
      lede="All sources used, properly acknowledged. Search these titles on Google Scholar to verify and read further."
      setActivePage={setActivePage}
    >
      <ol className="refs list-decimal marker:text-pine marker:font-semibold pl-5 text-[14.5px] text-ink-soft space-y-2.5">
        {refs.map((r) => (
          <li key={r.url} className="leading-relaxed pl-1.5">
            {r.text}{" "}
            <a href={r.url} target="_blank" rel="noreferrer" className="break-words">
              {r.url}
            </a>
          </li>
        ))}
      </ol>
    </PageLayout>
  );
}