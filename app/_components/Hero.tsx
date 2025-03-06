"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust path if needed

export default function Hero() {
  return (
    <section className="px-4 sm:px-10 md:px-28 lg:px-44 pt-10 h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white font-extrabold leading-tight mb-6">
            Craft Magical Stories for Kids in Minutes
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-light mb-8">
            Create fun and personalized stories that bring your child&apos;s adventures to life and
            spark their passion for reading. It only takes a few seconds!
          </p>
          <Link href="/create-story">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg md:text-2xl font-bold bg-purple-600 p-8 text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Create Story
            </Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <Image
            src="/hero.png"
            alt="Hero illustration"
            width={700}
            height={400}
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[700px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}