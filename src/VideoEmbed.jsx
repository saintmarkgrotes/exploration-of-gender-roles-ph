export default function VideoEmbed({ videoId, title, caption }) {
  return (
    <figure className="video-embed">
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
