import { useState, useEffect } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Sidebar, { PAGES } from "./sidebar";
import Homepage from "./Homepage";
import UnderstandingGenderRoles from "./UnderstandingGenderRoles";
import HistoricalPerspective from "./HistoricalPerspective";
import ContemporaryGenderRoles from "./ContemporaryGenderRoles";
import GenderIssues from "./GenderIssues";
import AnalysisReflection from "./AnalysisReflection";
import Multimedia from "./Multimedia";
import Conclusion from "./Conclusion";
import References from "./References";

const PAGE_COMPONENTS = [
  Homepage,
  UnderstandingGenderRoles,
  HistoricalPerspective,
  ContemporaryGenderRoles,
  GenderIssues,
  AnalysisReflection,
  Multimedia,
  Conclusion,
  References,
];

export default function App() {
  const [activePage, setActivePage] = useState(0);
  const ActivePage = PAGE_COMPONENTS[activePage];

  // Keep the browser tab title in sync with the active section
  useEffect(() => {
    document.title = `${PAGES[activePage]} — Exploration of Gender Roles`;
  }, [activePage]);

  // Left/Right arrow keys move between sections (ignored while typing in a field)
  useEffect(() => {
    function handleKeyDown(e) {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key === "ArrowRight") {
        setActivePage((p) => Math.min(p + 1, PAGES.length - 1));
      } else if (e.key === "ArrowLeft") {
        setActivePage((p) => Math.max(p - 1, 0));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ErrorBoundary>
      <div className="layout">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main>
          <ErrorBoundary key={activePage}>
            <ActivePage setActivePage={setActivePage} />
          </ErrorBoundary>
        </main>
      </div>
    </ErrorBoundary>
  );
}
