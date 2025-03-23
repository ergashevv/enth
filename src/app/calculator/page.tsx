"use client";

import DeliveryCalculator from "@/components/homeComponents/calculator";
import Image from "next/image";
import TruckImage from "../../../public/calculator.png";// Rasm nomini mos ravishda o'zgartiring

const CalculatorPage = () => {
  return (
    <div className="">
        <div className="rounded-[60px]">
      <div className="container  mb-20 py-10  w-full mx-auto">
         <div className="flex  flex-col md:flex-row items-center justify-between   mt-5">
        <div className=" text-center md:text-left">
          <h1 className="text-[50px] font-bold leading-[120%] text-[#0060AE] text-left mb-6 font-[Montserrat]">
            Рассчитать стоимость перевозки
          </h1>
          <p className="text-[16px] font-normal leading-[26px] text-[#0D0808] text-left font-[Montserrat]">
            Для расчета стоимости перевозки введите параметры груза
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src={TruckImage}
            alt="Truck"
            width={500}
            height={300}
            className="rounded-[50px] object-cover"
          />
        </div>
      </div>
      </div>
      </div> <DeliveryCalculator />
    </div>
  );
};

export default CalculatorPage;
