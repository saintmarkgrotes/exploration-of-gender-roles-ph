import { PAGES } from "./sidebar";

const NAV_BUTTON =
  "rounded-md border border-line bg-paper px-4 py-2.5 font-sans text-[13.5px] font-medium text-ink transition-colors duration-150 hover:border-pine hover:text-pine hover:bg-pine-tint active:bg-paper-dim disabled:cursor-default focus-visible:outline-2 focus-visible:outline-pine focus-visible:outline-offset-2";

export default function PageLayout({ index, kicker, lede, setActivePage, children }) {
  return (
    <div className="page max-w-[900px] mx-auto text-left px-5 py-9 sm:px-9 lg:px-[68px] lg:py-[60px] lg:pb-[90px]">
      <div className="page-head flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6 mb-1.5">
        <div>
          <div className="kicker text-pine text-[12.5px] font-semibold tracking-wide mb-2">
            {kicker}
          </div>
          <h1 className="text-[26px] sm:text-[30px] lg:text-[36px] tracking-[-0.01em] mb-3.5">
            {PAGES[index]}
          </h1>
        </div>
        <div className="progress shrink-0 text-left md:text-right pt-1.5">
          <div className="count text-[12px] text-ink-faint tabular-nums mb-1.5">
            {index + 1} / {PAGES.length}
          </div>
          <div className="bar w-full md:w-[100px] h-[3px] rounded bg-line overflow-hidden">
            <span
              className="block h-full bg-pine rounded transition-[width] duration-200"
              style={{ width: `${((index + 1) / PAGES.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
      <p className="lede text-[15.5px] sm:text-[16.5px] leading-relaxed text-ink-soft max-w-[58ch] mb-2">
        {lede}
      </p>

      {children}

      <div className="page-nav flex justify-between mt-12 lg:mt-[52px] pt-5 lg:pt-6 border-t border-line-soft">
        <button
          onClick={() => setActivePage(index - 1)}
          disabled={index === 0}
          style={{ visibility: index === 0 ? "hidden" : "visible" }}
          className={NAV_BUTTON}
        >
          ← Previous
        </button>
        <button
          onClick={() => setActivePage(index + 1)}
          disabled={index === PAGES.length - 1}
          style={{ visibility: index === PAGES.length - 1 ? "hidden" : "visible" }}
          className={NAV_BUTTON}
        >
          Next →
        </button>
      </div>
    </div>
  );
}