import { useState } from 'react'
import Sidebar from './sidebar'
import Homepage from './Homepage'
import UnderstandingGenderRoles from './UnderstandingGenderRoles'
import HistoricalPerspective from './HistoricalPerspective'
import ContemporaryGenderRoles from './ContemporaryGenderRoles'
import GenderIssues from './GenderIssues'
import AnalysisReflection from './AnalysisReflection'
import Multimedia from './Multimedia'
import Conclusion from './Conclusion'
import References from './References'

function App() {
  const [activePage, setActivePage] = useState('Homepage')

  const renderContent = () => {
    switch (activePage) {
      case 'Homepage':
        return <Homepage />
      case 'UnderstandingGenderRoles':
        return <UnderstandingGenderRoles />
      case 'HistoricalPerspective':
        return <HistoricalPerspective />
      case 'ContemporaryGenderRoles':
        return <ContemporaryGenderRoles />
      case 'GenderIssues':
        return <GenderIssues />
      case 'AnalysisReflection':
        return <AnalysisReflection />
      case 'Multimedia':
        return <Multimedia />
      case 'Conclusion':
        return <Conclusion />
      case 'References':
        return <References />
      default:
        return <div><h2>Page Not Found</h2></div>
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', margin: 0, padding: 0 }}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        {renderContent()}
      </div>
    </div>
  )
}

export default App