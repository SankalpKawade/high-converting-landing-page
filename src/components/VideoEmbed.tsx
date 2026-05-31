interface VideoEmbedProps {
  /** YouTube or Vimeo URL (or raw embed ID) */
  url?: string;
  /** Direct YouTube ID (e.g. 'dQw4w9WgXcQ'). Takes precedence over `url` when provided. */
  youtubeId?: string;
  /** Direct Vimeo ID (e.g. '76979871'). Takes precedence over `url` when provided. */
  vimeoId?: string;
  /** Title for accessibility */
  title?: string;
  /** Optional wrapper class */
  className?: string;
}

/**
 * Extract YouTube video ID from any valid YouTube URL.
 * Returns the ID string or null if not detected.
 */
function extractYouTubeId(raw: string): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  // raw ID (11 chars)
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  // youtu.be/abcdefg
  const short = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (short) return short[1];
  // ?v=abcdefg or &v=abcdefg
  const query = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (query) return query[1];
  // /embed/abcdefg or /shorts/abcdefg
  const embed = trimmed.match(/\/(embed|shorts|v)\/([a-zA-Z0-9_-]{11})/);
  if (embed) return embed[2];
  return null;
}

/**
 * Extract Vimeo video ID from any valid Vimeo URL.
 * Returns the numeric ID string or null if not detected.
 */
function extractVimeoId(raw: string): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  // numeric only
  if (/^\d{6,}$/.test(trimmed)) return trimmed;
  // vimeo.com/123456789
  const match = trimmed.match(/vimeo\.com\/(?:video\/)?(\d{6,})/);
  if (match) return match[1];
  return null;
}

/**
 * Usage examples:
 *
 *   <VideoEmbed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
 *   <VideoEmbed youtubeId="dQw4w9WgXcQ" />
 *   <VideoEmbed url="https://vimeo.com/76979871" />
 *   <VideoEmbed vimeoId="76979871" title="Product demo" />
 */
export default function VideoEmbed({
  url,
  youtubeId,
  vimeoId,
  title = 'Video player',
  className = '',
}: VideoEmbedProps) {
  // Resolve final IDs
  const yt = youtubeId ?? (url ? extractYouTubeId(url) : null);
  const vm = vimeoId ?? (url && !yt ? extractVimeoId(url) : null);

  const src = yt
    ? `https://www.youtube.com/embed/${yt}?rel=0&modestbranding=1`
    : vm
    ? `https://player.vimeo.com/video/${vm}`
    : null;

  if (!src) {
    // Placeholder when nothing configured
    return (
      <div className={`video-embed-container card-accent ${className}`} style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-4xl sm:text-5xl mb-3">🎬</div>
            <p className="text-sm text-[#cbd5e1] mb-2">Video Embed — ready for your link</p>
            <p className="text-xs text-[#94a3b8]">
              Pass a <code className="text-[#00f2ff]">url</code> prop (YouTube or Vimeo),<br />
              or <code className="text-[#00f2ff]">youtubeId</code> / <code className="text-[#00f2ff]">vimeoId</code>.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`video-embed-container card-accent ${className}`}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
      />
    </div>
  );
}
