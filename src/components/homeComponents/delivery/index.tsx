"use client";

import Link from "next/link";
import Image from "next/image";

export default function Delivery() {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Block */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[52px] font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-blue-600">Ваш </span>
              <span className="text-red-500">молниеносный</span>
              <span className="block text-blue-600">партнер по доставке</span>
            </h1>
            <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Доставляем документы, посылки, интернет-заказы и коммерческие грузы между следующими странами:<br className="hidden sm:block" /> Россия,
              Узбекистан, Турция, Казахстан, Таджикистан, Кыргызстан, Китай, ОАЭ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-flex justify-center items-center px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base md:text-lg rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Узнать стоимость доставки
              </Link>
              <Link
                href="#"
                className="inline-flex justify-center items-center px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base md:text-lg rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
              >
                Отследить посылку
              </Link>
            </div>
          </div>

          {/* Image Block */}
          <div className="flex-1 w-full max-w-[613px] mx-auto relative aspect-[613/467]">
            <div className="absolute bottom-0 left-[10%] w-[80%] h-[80%] bg-[#F3C16F] rounded-[50px] z-0" />
            <Image
              src="/icons/deliver.svg"
              alt="Delivery Person"
              fill
              className="object-contain z-10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}