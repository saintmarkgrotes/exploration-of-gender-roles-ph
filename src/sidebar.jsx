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

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="mark">7</div>
        <div>
          <div className="eyebrow">Project Menu</div>
          <div className="name">Exploration of Gender Roles</div>
        </div>
      </div>
      <nav className="menu" aria-label="Report sections">
        {PAGES.map((title, i) => (
          <button
            key={title}
            className={activePage === i ? "active" : ""}
            aria-current={activePage === i ? "page" : undefined}
            onClick={() => setActivePage(i)}
          >
            <span className="num">{i + 1}</span>
            <span>{title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
