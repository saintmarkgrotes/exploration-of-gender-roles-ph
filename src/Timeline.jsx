export default function Timeline({ events }) {
  return (
    <ol className="timeline">
      {events.map((e) => (
        <li key={e.year}>
          <div className="timeline-year">{e.year}</div>
          <div className="timeline-dot" />
          <div className="timeline-body">
            <h4>{e.title}</h4>
            <p>{e.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
