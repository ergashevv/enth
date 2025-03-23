"use client";
import Image from "next/image";
import { Button } from "antd";

export const BusinessCard = ({
  title,
  subtitle,
  features,
  pic,
  buttonText
}: {
  title: string;
  subtitle: string;
  features: { title: string; description: string }[];
  pic: string;
  buttonText: string;
}) => {
  return (
    <div className="bg-[#E6F7FF] rounded-[30px] p-6 h-full flex flex-col">
      {/* Rasm qismi */}
      <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
        <Image
          src={pic}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h3 className="text-[#0060AE] font-bold text-[18px] leading-[24px] mb-2">
        {title}
      </h3>
      <p className="text-[#0D0808] text-[14px] leading-[24px] mb-4">
        {subtitle}
      </p>

      <div className="space-y-4 flex-grow">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="flex items-start gap-2 mb-1">
              <div className="w-[5px] h-[5px] bg-[#0060AE] rounded-full mt-2" />
              <h4 className="text-[#0D0808] text-[14px] font-semibold">
                {feature.title}
              </h4>
            </div>
            <p className="text-[#0D0808] mb-3 text-[14px] pl-[17px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <Button
        className="!h-12 !px-8 !text-[16px] !font-semibold !rounded-full hover:!bg-[#0060AE]/10"
        style={{
          border: '2px solid #0060AE',
          color: '#0060AE',
          backgroundColor: 'transparent'
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};