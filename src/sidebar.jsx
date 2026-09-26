export const PAGES = [
  "Homepage",
  "Understanding Gender Roles",
  "Historical Perspective",
  "Contemporary Gender Roles",
  "Gender Issues and Realities",
  "Analysis and Reflection",
  "Multimedia Section",
  "Conclusion",
  "References",
];

const BUTTON_BASE =
  "relative flex items-baseline gap-2.5 shrink-0 md:shrink text-left rounded-lg border-l-[3px] pl-4 pr-3 py-2.5 text-sm whitespace-nowrap md:whitespace-normal transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#9bc7ac] focus-visible:-outline-offset-2";

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar shrink-0 w-full md:w-66 bg-side text-side-text py-4 md:py-6 sticky top-0 md:h-screen overflow-x-auto md:overflow-y-auto md:overflow-x-visible z-10 shadow-md md:shadow-none">
      <div className="brand flex items-start gap-3 border-b border-white/10 px-4 md:px-5 pb-4 md:pb-5 mb-2 md:mb-3">
        <div className="mark shrink-0 w-8 h-8 mt-0.5 rounded-lg bg-linear-to-br from-pine-dim to-pine flex items-center justify-center font-serif text-[#efe9d8] text-[15px] font-semibold shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
          7
        </div>
        <div>
          <div className="eyebrow text-side-text-dim text-[11.5px] tracking-wide mb-1">
            Project Menu
          </div>
          <div className="name font-serif text-white text-[18px] leading-snug">
            Exploration of Gender Roles
          </div>
        </div>
      </div>
      <nav
        className="menu flex md:flex-col gap-1 px-2.5 py-1.5"
        aria-label="Report sections"
      >
        {PAGES.map((title, i) => (
          <button
            key={title}
            className={
              activePage === i
                ? `${BUTTON_BASE} border-[#9bc7ac] bg-pine-dim/30 text-white`
                : `${BUTTON_BASE} border-transparent text-side-text hover:bg-white/[0.06] hover:text-white`
            }
            aria-current={activePage === i ? "page" : undefined}
            onClick={() => setActivePage(i)}
          >
            <span className="num hidden md:inline-block text-side-text-dim tabular-nums w-4 shrink-0 text-[12.5px]">
              {i + 1}
            </span>
            <span>{title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}