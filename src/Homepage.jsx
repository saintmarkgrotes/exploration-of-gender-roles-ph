export default function Homepage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
      
      {/* 1. Homepage Section */}
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

      {/* 2. Understanding Gender Roles Section */}
      <section>
        <h2 style={{ color: '#2c3e50', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          2. Understanding Gender Roles
        </h2>

        <article style={{ marginBottom: '25px' }}>
          <h3>Definition and Explanation</h3>
          <p style={{ lineHeight: '1.6', color: '#444' }}>
            Gender roles refer to the social behaviors, attitudes, and activities that a given society considers acceptable, appropriate, or desirable for people based on their perceived sex. These norms shape expectations regarding career paths, domestic duties, emotional expression, and interpersonal relationships.
          </p>
        </article>

        <article style={{ marginBottom: '25px' }}>
          <h3>Gender Roles vs. Biological Sex</h3>
          <p style={{ lineHeight: '1.6', color: '#444' }}>
            It is essential to distinguish between biological attributes and socially constructed roles:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#444' }}>
            <li>
              <strong>Biological Sex:</strong> Refers to the physical, physiological, and biological characteristics (such as chromosomes, hormones, and anatomy) assigned at birth.
            </li>
            <li>
              <strong>Gender Roles:</strong> Refers to the social and cultural constructs, behavioral expectations, and learned behaviors assigned to individuals based on societal standards. While sex is biological, gender roles are socio-cultural and change over time.
            </li>
          </ul>
        </article>

        <article style={{ marginBottom: '25px' }}>
          <h3>Importance of Studying Gender Roles in Society</h3>
          <p style={{ lineHeight: '1.6', color: '#444' }}>
            Studying gender roles allows us to identify how social structures create equality or inequality in fields such as employment, education, and household responsibility. Understanding these constructs helps challenge rigid stereotypes, promotes inclusivity, and supports healthier social developments for individuals of all genders.
          </p>
        </article>
      </section>

    </div>
  );
}