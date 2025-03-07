"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useState } from "react";

export function CustomLoader({ isLoading }: any) {
  const [isOpen, setIsOpen] = useState(false);

  // Open the dialog automatically when the component mounts
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
    {isLoading && <Dialog open={isOpen}>
      <DialogContent className="w-full p-10 flex flex-col items-center justify-center bg-white">
        <Image src={"/loader.gif"} alt="loader" width={200} height={200} />
        <h2 className="text-2xl font-bold text-purple-600 text-center">Please wait..... Story is generating.....</h2>
      </DialogContent>
    </Dialog>
    }</>
  );
}
