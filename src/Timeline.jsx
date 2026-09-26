export default function Timeline({ events }) {
  return (
    <ol className="timeline list-none my-6 pl-1 border-l-2 border-line">
      {events.map((e) => (
        <li key={e.year} className="relative pb-8 pl-7 last:pb-0">
          <div className="timeline-dot absolute -left-[7px] top-[3px] w-3 h-3 rounded-full bg-paper border-2 border-pine" />
          <div className="timeline-year text-pine text-[12.5px] font-semibold tracking-wide mb-1.5">
            {e.year}
          </div>
          <div className="timeline-body">
            <h4 className="text-[16.5px] mb-1.5">{e.title}</h4>
            <p className="text-[14.5px] text-ink-soft mb-0">{e.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}