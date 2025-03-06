"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";

export interface fieldData {
  fieldValue: string;
  fieldName: string;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  AgeGroup: string;
  ImageStyle: string;
}
export default function CreateStory() {
  const [formData, setFormData] = useState<formDataType>();

  // Function to handle user selection and to Add DATA to the form
  const onHandleUserSelection = (data: fieldData) => {
    console.log(data);
    setFormData((prev: any) => {
      return { ...prev, [data.fieldName]: data.fieldValue };
    });
  };
  // Function to generate the story
  const handleGenerateStory = () => {};

  return (
    <section className="px-5 pt-32 sm:pt-40 md:pt-40 lg:pt-40 md:px-20 lg:px-40">
      {/* Header */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-primary font-extrabold text-center">CREATE YOUR STORY</h2>
      <p className="text-lg sm:text-xl md:text-2xl text-primary text-center mt-4">
        Unlock your creativity with AI: Craft stories like never before! Let our AI bring your imagination to life, one story at a time.
      </p>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        {/* 1. Subject of the Story */}
        <StorySubjectInput userSelection={onHandleUserSelection} />

        {/* 2. Story Type */}
        <StoryType userSelection={onHandleUserSelection} />

        {/* 3. Age Group */}
        <AgeGroup userSelection={onHandleUserSelection} />

        {/* 4. Image Style */}
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>

      {/* Generate Button */}
      <div className="flex flex-col items-end my-10">
        <Button
          onClick={handleGenerateStory}
          size="lg"
          className="w-full sm:w-auto text-lg md:text-2xl font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity p-10"
        >
          Generate Story
        </Button>
        <span className="text-sm text-muted-foreground mt-2">1 Credit will be used</span>
      </div>
    </section>
  );
}
