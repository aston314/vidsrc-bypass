import { getVideo, getStreamUrl, addCount } from "../embed-su";

async function runTests() {
  console.log("Testing embed-su.ts");

  console.log("\nTesting getVideo:");
  let movieConfig;
  let tvShowConfig;
  try {
    // Test for a movie
    movieConfig = await getVideo(310131);
    console.log("Movie config:", movieConfig);

    // Test for a TV show
    tvShowConfig = await getVideo(48891, 1, 1);
    console.log("TV Show config:", tvShowConfig);
  } catch (error) {
    console.error("Error in getVideo:", error);
  }

  console.log("\nTesting getStreamUrl:");
  try {
    const streamDetails = await getStreamUrl(movieConfig.servers[0].hash);
    console.log("Stream details:", streamDetails);
  } catch (error) {
    console.error("Error in getStreamUrl:", error);
  }

  console.log("\nTesting addCount:");
  try {
    await addCount("sheeeesh", "imasigma", "spicycontentinyourdmsgrrrr");
    console.log("addCount completed successfully");
  } catch (error) {
    console.error("Error in addCount:", error);
  }
}

runTests();
