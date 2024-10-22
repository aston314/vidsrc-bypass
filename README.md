# vidsrc-bypass

vidsrc-bypass is a TypeScript utility library for interacting with vidsrc and embed.su APIs. It provides functions to fetch video details, stream URLs, and perform other related operations.

## Features

- Fetch video details from embed.su
- Get stream URLs from embed.su
- Generate VRF (Verification) tokens for vidsrc.rip
- Fetch video configurations from vidsrc.rip
- Get stream URLs from vidsrc.rip
- TypeScript support with type definitions
- Get stream URLs from vidlink.pro
- Get stream URLs and Manga from vidsrc.icu

## Installation

To install the dependencies, run:

```bash
npm install
```

## Usage

This library exports functions for both embed.su, vidsrc.rip and vidlink.pro. Here's a brief overview of the main functions:

### embed.su

```typescript
import { getEmbedSuVideo, getEmbedSuStreamUrl } from 'vidsrc-bypass';

// Get video details (TMDB ID)
const movieDetails = await getEmbedSuVideo(310131);  // For movies
const tvShowDetails = await getEmbedSuVideo(48891, 1, 1);  // For TV shows (series ID, season, episode)

// Get stream URL
const streamDetails = await getEmbedSuStreamUrl(movieDetails.servers[0].hash);
```

### vidsrc.rip

```typescript

import { getVidSrcRipVideo, getVidSrcRipStreamUrl, generateVRF } from 'vidsrc-bypass';

// Get video configuration (TMDB/IMDB ID)
const videoConfig = await getVidSrcRipVideo('872585');

// Get stream URL
const streamUrl = await getVidSrcRipStreamUrl('flixhq', '872585');
```

### vidlink.pro

```typescript
import { getVidLinkProVideo } from 'vidsrc-bypass';

// For movies (TMDB ID, type)
const movieVideo = await getVidLinkProVideo({ id: "786892", type: "movie" }); 
// For TV shows (TMDB series ID, season, episode, type) 
const tvShowVideo = await getVidLinkProVideo({ id: "48891", season: 1, episode: 1, type: "tv"});
// For anime (MAL ID,episode, type, dub/sub, fallback)
const animeVideo = getVidLinkProVideo({ id: "5", episode: 1, type: "anime", dub: true, fallback: true });
``` 

## License

This project is open source. However, please note that it is intended for educational purposes only. Ensure you comply with all relevant laws and terms of service when using this library.

## Disclaimer

This project is not affiliated with, endorsed by, or connected to vidsrc, embed.su, or any related services. It is an independent tool created for educational purposes. Use responsibly and at your own risk.