"use client";
import Image from 'next/image';
import React, { useState } from 'react'

export interface OptionData {
    lable: string;
    imageUrl: string;
}

function AgeGroup({userSelection}: any) {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const OptionList = [
      {
        lable: "0-2 Years",
        imageUrl: "/02Years.png",
      },
      {
        lable: "3-5 Years",
        imageUrl: "/35Years.png",
      },
      {
        lable: "5-8 Years",
        imageUrl: "/58Years.png",
      },
    ];
  
      const onUserSelection = (data: OptionData) => {
        // console.log(data);
        setSelectedType(data.lable);
        userSelection({
            fieldValue: data?.lable,
            fieldName: "AgeGroup",
        });
      };

    return (
      <div>
        <label className="font-bold text-2xl sm:text-3xl md:text-4xl text-primary">3. Age Group</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-3">
          {OptionList.map((item, index) => (
            <div
              key={item.lable}
              onClick={() => onUserSelection(item)}
              className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 rounded-xl border-2 
                  ${selectedType === item.lable ? "grayscale-0 border-primary" : "border-transparent"}
                  `}
            >
              <h3 className="absolute bottom-2 left-0 right-0 text-lg sm:text-xl md:text-2xl text-white text-center">{item.lable}</h3>
              <Image src={item.imageUrl} alt={item.lable} width={300} height={260} className="object-cover h-[200px] sm:h-[260px] rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    );
}

export default AgeGroup