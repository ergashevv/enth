'use client';

import Image from "next/image";
import DeliveryCalculator from "@/components/homeComponents/calculator";
import TruckImage from "../../../public/calculator.png";

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-white pt-8">
      <section className="container mx-auto px-4 md:px-12">
        <div className="rounded-[60px] bg-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-[28px] sm:text-[36px] md:text-[50px] font-bold leading-[120%] text-[#0060AE] mb-4 font-[Montserrat]">
                Калькулятор доставки
              </h1>
              <p className="text-base sm:text-lg text-[#0D0808] font-[Montserrat]">
                Введите параметры груза, чтобы узнать точную стоимость доставки
              </p>
            </div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[500px]">
              <Image
                src={TruckImage}
                alt="Грузовик"
                width={500}
                height={300}
                className="rounded-[30px] object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 px-4 sm:px-6 md:px-12">
        <div className="bg-[#E6F7FF] p-6 sm:p-10 rounded-[60px] w-full mx-auto">
          <DeliveryCalculator />
        </div>
      </section>
    </div>
  );
}