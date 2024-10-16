interface VideoDetails {
  title: string;
  server: string;
  ref: string;
  xid: string;
  uwuId: string; // useless field, it's his ads script url. If you want to use it, use an atob() function to decode it.
  episodeId: string;
  hash: string;
  poster: string;
  servers?: Server[];
  seasons?: Season[];
}

interface Season {
  id: string;
  seasonNumber: string;
  episodes: Episode[];
}

interface Episode {
  id: string;
  episodeNumber: string;
  title: string;
}

interface Server {
  name: string;
  hash: string;
}

const API_URL = "https://embed.su";

/*
 * Get the video details
 * @param id TMDB movie or TV show id
 * @param season The season number (for TV shows)
 * @param episode The episode number (for TV shows)
 * @returns The video details
 */
async function getVideo(
  id: number,
  season?: number,
  episode?: number
): Promise<VideoDetails | undefined> {
  let url: string;
  if (season !== undefined && episode !== undefined) {
    url = `${API_URL}/embed/tv/${id}/${season}/${episode}`;
  } else {
    url = `${API_URL}/embed/movie/${id}`;
  }

  const response: Response = await fetch(url);
  if (!response.ok) {
    console.error("Error fetching video details:", response.statusText);
    return;
  }
  const html = await response.text();
  const match = html.match(/window\.vConfig = JSON\.parse\(atob\(`(.+?)`\)\)/);

  if (match && match[1]) {
    const decodedData: VideoDetails = JSON.parse(
      Buffer.from(match[1], "base64").toString()
    );
    const servers = JSON.parse(
      atob(decodedData.hash.split("").reverse().join(""))
    );
    return {
      ...decodedData,
      servers: servers,
    };
  }
  console.error("Unable to extract video details");
}

interface StreamDetails {
  source: string;
  subtitles: Subtitle[];
  skips: any[]; // Too lazy to check a film / series with skips ngl
  format: string;
}

interface Subtitle {
  label: string;
  file: string;
}

/*
 * Get the stream URL
 * @param hash The server hash, not the video hash
 * @returns The stream URL
 */
async function getStreamUrl(hash: string): Promise<StreamDetails> {
  const url = `${API_URL}/api/e/${hash}`;

  const response: Response = await fetch(url);
  const data = await response.json();
  if (response.status === 404) {
    console.error("Error fetching stream details:", data.error);
  }

  return {
    source: data.source,
    subtitles: data.subtitles,
    skips: data.skips,
    format: data.format,
  };
}

// because why not even tho it's useless, it's just a count
function addCount(player: string, referer: string, title: string) {
  const url = "https://pixel.embed.su/count";

  const params = new URLSearchParams({
    p: player,
    r: referer,
    t: title,
  });

  fetch(url, {
    method: "POST",
    body: params,
  }).catch((error) => {
    console.error("Error adding count:", error);
  });
}

export { getVideo, getStreamUrl, addCount };
export type { VideoDetails, StreamDetails, Subtitle };
