"use client";
import Image from "next/image";

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
    <div className="bg-[#E6F7FF] rounded-[30px] p-[15px] h-full flex flex-col">
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

      <button
        className="py-[12px] px-[5px] mt-[30px] rounded-[130px] text-white bg-[#0060AE] text-[16px] font-montserrat font-semibold text-base leading-6 tracking-normal text-center align-middle"

      >
        {buttonText}
      </button>
    </div>
  );
};