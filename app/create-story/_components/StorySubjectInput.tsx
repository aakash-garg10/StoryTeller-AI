"use client";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function StorySubjectInput({ userSelection }: any) {

  
  return (
    <div>
      <label className="font-bold text-2xl sm:text-3xl md:text-4xl text-primary">1. Subject of the Story</label>
      <Textarea
        onChange={(e) =>
          userSelection({
            fieldValue: e.target.value,
            fieldName: "storySubject",
          })
        }
        placeholder="Write the subject of the story which you want to generate"
        className="mt-3 w-full max-w-lg min-h-[150px] text-lg sm:text-xl md:text-2xl p-5 rounded-lg bg-purple-800 text-primary placeholder:text-white"
        aria-label="Story subject"
      />
    </div>
  );
}

export default StorySubjectInput;
