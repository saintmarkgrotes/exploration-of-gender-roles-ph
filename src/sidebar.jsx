export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'Homepage', label: '1. Homepage' },
    { id: 'UnderstandingGenderRoles', label: '2. Understanding Gender Roles' },
    { id: 'HistoricalPerspective', label: '3. Historical Perspective' },
    { id: 'ContemporaryGenderRoles', label: '4. Contemporary Gender Roles' },
    { id: 'GenderIssues', label: '5. Gender Issues and Realities' },
    { id: 'AnalysisReflection', label: '6. Analysis and Reflection' },
    { id: 'Multimedia', label: '7. Multimedia Section' },
    { id: 'Conclusion', label: '8. Conclusion' },
    { id: 'References', label: '9. References' }
  ];

  return (
    <div style={{
      width: '280px',
      backgroundColor: '#f1f1f1',
      borderRight: '1px solid #ccc',
      height: '100vh',
      position: 'sticky',
      top: 0,
      overflowY: 'auto'
    }}>
      <div style={{ padding: '20px', backgroundColor: '#e2e2e2', borderBottom: '1px solid #ccc' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Project Menu</h3>
      </div>
      
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActivePage(item.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '15px 20px',
                backgroundColor: activePage === item.id ? '#04AA6D' : 'transparent',
                color: activePage === item.id ? 'white' : 'black',
                border: 'none',
                borderBottom: '1px solid #ddd',
                cursor: 'pointer',
                fontSize: '15px',
                display: 'block',
                transition: '0.3s'
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}