import { getVideo } from "../src/vidlinkpro";

async function runTests() {
  console.log("Testing vidlinkpro.ts");

  console.log("\nTesting getVideo for a movie:");
  try {
    const movieConfig = await getVideo({ id: "786892", type: "movie" });
    console.log("Movie config:", movieConfig);
  } catch (error) {
    console.error("Error in getVideo for movie:", error);
  }

  console.log("\nTesting getVideo for a TV show:");
  try {
    const tvShowConfig = await getVideo({ id: "48891", season: 1, episode: 1, type: "tv"});
    console.log("TV Show config:", tvShowConfig);
  } catch (error) {
    console.error("Error in getVideo for TV show:", error);
  }

  // Kinda lazy to test anime since the demo on vidlinkpro website doesn't work, but it should work
  // And it seems like the anime endpoint doesn't work because of a cors issue, vidlink.pro needs to fix it
  /*
  console.log("\nTesting getVideo for an anime:");
    try {
        const animeConfig = await getVideo({ id: "5", episode: 1, type: "anime", dub: true, fallback: true });
        console.log("Anime config:", animeConfig);
    } catch (error) {
        console.error("Error in getVideo for anime:", error);
    }
    */
}

runTests();