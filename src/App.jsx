import { useState } from "react";
import "./App.css";
import Sidebar from "./sidebar";
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

  return (
    <div className="layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main>
        <ActivePage setActivePage={setActivePage} />
      </main>
    </div>
  );
}
