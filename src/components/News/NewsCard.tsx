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
    <div className="bg-[#E6F7FF] p-6 rounded-[24px] shadow-none h-full flex flex-col">
      <div className="relative w-full h-[200px] md:h-[220px] mb-6 rounded-[16px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="font-montserrat font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#0060AE] mb-3">
          {title}
        </h3>

        <p className="text-[#565252] text-sm md:text-base leading-[20px] mb-3">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="text-[#565252] text-xs md:text-sm leading-[18px]">
            {date}
          </div>

          <Button
            className="!h-[44px] !text-sm md:!text-base font-montserrat hover:!border-[#0060AE] hover:!text-[#0060AE]"
            style={{
              border: '1.5px solid #0060AE',
              color: '#0060AE',
              backgroundColor: 'transparent',
              padding: '0 20px',
              borderRadius: '130px'
            }}
          >
            Читать больше
          </Button>
        </div>
      </div>
    </div>
  );
};