export { getStreamUrl as getEmbedSuStreamUrl, getVideo as getEmbedSuVideo } from './embed-su';
export { getStreamUrl as getVidSrcRipStreamUrl, getVideo as getVidSrcRipVideo } from './vidsrcrip';
export { getVideo as getVidLinkProVideo } from './vidlinkpro';
export { getData as getVidSrcIcuData } from './vidsrcicu';
export type { StreamDetails, Subtitle, VideoDetails } from './embed-su';
export type { Stream, VideoConfig } from './vidsrcrip';  
export type { Caption, EncryptedData, Stream as VidLinkStream, Video, VideoParams, AnimeParams as VidLinkAnimeParams, MovieParams as VidLinkMovieParams, TVParams as VidLinkTVParams } from './vidlinkpro';
export type { Anime, AnimeParams as VidSrcIcuAnimeParams, Manga, MangaParams as VidSrcIcuMangaParams } from './vidsrcicu';
// don't want to test the package so if it doesn't work with javascript, it's not my problem
// if you're using this it means you're a big boy and you know what you're doing + you're using typescript

