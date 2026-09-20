import { useState } from 'react'
import Homepage from './Homepage'
import UnderstandingGenderRoles from './UnderstandingGenderRoles'
import Sidebar from './sidebar'

function App() {
  const [activePage, setActivePage] = useState('Homepage')

  const renderContent = () => {
    switch (activePage) {
      case 'Homepage':
        return <Homepage />
      case 'UnderstandingGenderRoles':
        return <UnderstandingGenderRoles />
      case 'HistoricalPerspective':
        return <div><h2>3. Historical Perspective</h2><p>sino mag butang sa sulod?</p></div>
      default:
        return <div><h2>Work in Progress</h2><p>waray pa</p></div>
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