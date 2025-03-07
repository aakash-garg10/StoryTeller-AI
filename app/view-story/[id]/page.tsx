"use client";

import db from "@/config/db";
import { StoryData } from "@/config/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import BookCoverPage from "../_components/BookCoverPage";
import StoryPages from "../_components/StoryPages";

function ViewStory({ params }: any) {
  const [story, setStory] = useState<any>(null);

  useEffect(() => {
    console.log(params.id);
    getStory();
  }, []);

  const getStory = async () => {
    const result: any = await db.select().from(StoryData).where(eq(StoryData.storyId, params.id));
    console.log(result[0]);

    setStory(result[0]);
  };


  // Handle loading, error, and no-story states
  if (story === null) {
    return (
      <div className="p-4 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-10 md:px-20 lg:px-40 flex flex-col items-center min-h-screen ">
      {/* Story Title */}
      <h2 className="font-bold text-3xl sm:text-4xl text-center p-6 text-white rounded-lg my-12 bg-gray-900/70 backdrop-blur-md border-b border-gray-800/50 z-50">{story.output.title}</h2>
      {/* @ts-ignore */}
      <HTMLFlipBook width={500} height={500} showCover={true}>
        <div>
          <BookCoverPage imageUrl={story.coverImage} />
        </div>
        {[...Array(story?.output?.chapters?.length)].map((item, index) => (
          <div key={index} className="bg-purple-50 p-10 border">
            <StoryPages storyChapter={story?.output?.chapters[index]} />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default ViewStory;
