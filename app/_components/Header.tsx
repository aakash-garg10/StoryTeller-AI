"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const MenuList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create Story",
      path: "/create-story",
    },
    {
      name: "Explore Stories",
      path: "/explore",
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/70 backdrop-blur-md border-b border-gray-800/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold">
              StoryTeller
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {MenuList.map((item) => (
              <Link key={item.name} href={item.path} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white" aria-label="Open mobile menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900/90 backdrop-blur-md border-l border-gray-800/50 w-screen">
                <div className="flex flex-col space-y-4 mt-4">
                {MenuList.map((item) => (
                  <Link key={item.name} href={item.path} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                    {item.name}
                  </Link>
                ))}
                 
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
