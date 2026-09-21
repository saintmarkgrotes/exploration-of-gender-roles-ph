export default function Homepage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
      
      <header style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ color: '#2c3e50' }}>Exploration of Gender Roles</h1>
        
        <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          <h2 style={{ marginTop: 0, color: '#34495e' }}>Group 7</h2>
          <p><strong>Members:</strong></p>
          <ul style={{ lineHeight: '1.6' }}>
            <li>Saint Mark Grotes</li>
            <li>Howell Labradores</li>
            <li>Loui Jay Legatuna</li>
            <li>Arvin Clark Mediante</li>
            <li>Stephanie Nabor</li>
            <li>Lee Conarco</li>
          </ul>
        </div>

        <div>
          <h3>Topic Overview</h3>
          <p style={{ lineHeight: '1.6', color: '#555' }}>
            Welcome to our group project. This page explores how social, cultural, and historical expectations shape gender roles, and examines their impact on modern society.
          </p>
        </div>
      </header>

    </div>
  );
}