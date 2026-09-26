export default function VideoEmbed({ videoId, title, caption }) {
  return (
    <figure className="video-embed my-5">
      <div className="video-frame relative pt-[56.25%] rounded-md overflow-hidden border border-line bg-black shadow-sm">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
      {caption && (
        <figcaption className="text-[12.5px] text-ink-faint leading-relaxed mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}