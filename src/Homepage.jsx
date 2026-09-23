import PageLayout from "./PageLayout";

export default function Homepage({ setActivePage }) {
  return (
    <PageLayout
      index={0}
      kicker="Group 7"
      lede="Welcome to our group project. This site explores how social, cultural, and historical expectations shape gender roles, and examines their impact on modern Philippine society."
      setActivePage={setActivePage}
    >
      <div className="info-card">
        <div className="label">Group</div>
        <div className="group">Group 7 — Members</div>
        <ul className="members">
          {[
            "Saint Mark Grotes",
            "Howell Labradores",
            "Loui Jay Legatuna",
            "Arvin Clark Mediante",
            "Stephanie Nabor",
            "Rhiza Mae Dacutanan",
            "Lee Conarco",
            
          ].map((name) => (
            <li key={name}>
              <span className="avatar">
                {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
