import PageLayout from "./PageLayout";

export default function Homepage({ setActivePage }) {
  return (
    <PageLayout
      index={0}
      kicker="Group 7"
      lede="Welcome to our group project. This site explores how social, cultural, and historical expectations shape gender roles, and examines their impact on modern Philippine society."
      setActivePage={setActivePage}
    >
      <div className="info-card bg-paper-dim border border-line border-l-[3px] border-l-pine rounded-lg px-6 py-6 sm:px-7 my-7 max-w-[64ch] shadow-sm">
        <div className="label text-[12px] text-ink-faint uppercase tracking-wide mb-1">
          Group
        </div>
        <div className="group font-serif text-[19px] text-ink mb-[18px]">
          Group 7 — Members
        </div>
        <ul className="members grid grid-cols-1 sm:grid-cols-2 gap-x-[22px] gap-y-3">
          {[
            "Saint Mark Grotes",
            "Howell Labradores",
            "Loui Jay Legatuna",
            "Arvin Clark Mediante",
            "Stephanie Nabor",
            "Rhiza Mae Dacutanan",
            "Lee Conarco",
            
          ].map((name) => (
            <li key={name} className="flex items-center gap-2.5 text-[14.5px] text-ink">
              <span className="avatar shrink-0 w-[30px] h-[30px] rounded-full bg-paper border border-line text-pine flex items-center justify-center font-serif text-[12.5px] font-semibold">
                {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}