import { PAGES } from "./sidebar";

export default function PageLayout({ index, kicker, lede, setActivePage, children }) {
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <div className="kicker">{kicker}</div>
          <h1>{PAGES[index]}</h1>
        </div>
        <div className="progress">
          <div className="count">{index + 1} / {PAGES.length}</div>
          <div className="bar">
            <span style={{ width: `${((index + 1) / PAGES.length) * 100}%` }} />
          </div>
        </div>
      </div>
      <p className="lede">{lede}</p>

      {children}

      <div className="page-nav">
        <button
          onClick={() => setActivePage(index - 1)}
          disabled={index === 0}
          style={{ visibility: index === 0 ? "hidden" : "visible" }}
        >
          ← Previous
        </button>
        <button
          onClick={() => setActivePage(index + 1)}
          disabled={index === PAGES.length - 1}
          style={{ visibility: index === PAGES.length - 1 ? "hidden" : "visible" }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
