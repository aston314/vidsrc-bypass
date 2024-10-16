import { getVideo, getStreamUrl, generateVRF } from "../vidsrcrip";

async function runTests() {
  console.log("Testing vidsrcrip.ts");

  console.log("\nTesting getVideo:");
  try {
    const videoConfig = await getVideo("872585");
    console.log("Video config:", videoConfig);
  } catch (error) {
    console.error("Error in getVideo:", error);
  }

  // Kinda lazy to test tv shows since the demo on vidsrc website doesn't work, but it should work

  console.log("\nTesting getStreamUrl:");
  try {
    const streamUrl = await getStreamUrl("flixhq", "872585");
    console.log("Stream URL:", streamUrl);
  } catch (error) {
    console.error("Error in getStreamUrl:", error);
  }

  console.log("\nTesting generateVRF:");
  const key = "testkey";
  const message = "/api/source/flixhq/299536";
  const vrf = generateVRF(key, message);
  console.log("Generated VRF:", vrf);
}

runTests();
