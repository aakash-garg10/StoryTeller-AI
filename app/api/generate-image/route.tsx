import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // console.log("Data=>", data);
    const { prompt } = data;
    // Ensure prompt is provided
    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Define the API options
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/image/generation",
      headers: {
        authorization: `Bearer ${process.env.EDEN_AI_API_KEY}`,
      },
      data: {
        providers: "replicate/classic",
        text: prompt,
        resolution: "512x512",
      },
    };
    // Make the Axios request
    const response = await axios.request(options);
    console.log("Response=>", response.data["replicate/classic"].items[0].image_resource_url);

    // Extract the image URL from the response (adjust based on actual response structure)
    const imageUrl = response.data["replicate/classic"].items[0].image_resource_url || "No image URL returned";

    // Return the response as JSON
    return NextResponse.json({ imageUrl }, { status: 200 });
  } catch (error) {
    // Log the error for debugging
    console.error("Error generating image:", error);

    // Return an error response
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
  }
}
