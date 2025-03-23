"use client";
import { Button } from "antd";
import Image from "next/image";

export const NewsCard = ({ 
  title, 
  description, 
  date,
  image 
}: {
  title: string;
  description: string;
  date: string;
  image: string;
}) => {
  return (
    <div className="bg-[#E6F7FF] p-6 rounded-2xl shadow-none h-full flex flex-col">
      {/* Rasm qismi */}
      <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <h3 className="font-montserrat font-bold text-[28px] leading-[34px] text-[#0060AE] mb-3">
        {title}
      </h3>
      
      <p className="text-[#565252] text-base mb-4 flex-grow">
        {description}
      </p>
      
      <div className="mt-auto">
        <div className="text-[#565252] text-sm mb-3">{date}</div>
        <Button
          className="w-full font-montserrat !h-12 !text-lg !rounded-lg hover:!border-[#0060AE] hover:!text-[#0060AE]"
          style={{
            border: '2px solid #0060AE',
            color: '#0060AE',
            backgroundColor: 'transparent'
          }}
        >
          Читать больше
        </Button>
      </div>
    </div>
  );
};