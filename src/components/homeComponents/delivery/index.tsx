"use client";

import Link from "next/link";
import Image from "next/image";

export default function Delivery() {
    return (
        <div className="w-full bg-white">
            <div className="container  pt-24 pb-16  mx-auto mb-5">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-[123px]">

                    <div className="relative w-full max-w-[613px] aspect-[613/467] mx-auto">
                        <div className="absolute bottom-0 left-[10%] w-[80%] h-[80%] bg-[#F3C16F] rounded-[50px] z-0" />
                        <Image
                            src="/icons/deliver.svg"
                            alt="Delivery Person"
                            fill
                            className="object-contain z-10"
                            priority
                        />
                    </div>

                    <div className="text-center lg:text-left w-full">
                        <h1 className="pt-[90px] text-[clamp(32px,5vw,50px)] font-bold leading-[120%] font-montserrat text-blue-600 mb-[24px] lg:mb-[32px]">
                            <span className="text-blue-600">Ваш </span>
                            <span className="text-red-500">молниеносный </span>
                            <span className="block text-blue-600">партнер по доставке</span>
                        </h1>

                        <p className="text-[16px] leading-[26px] font-[400] text-[#1C1C1C] font-montserrat mb-[47px] max-w-[700px] mx-auto lg:mx-0">
                            Доставляем документы, посылки, интернет-заказы и коммерческие грузы между следующими странами: Россия, Узбекистан, Турция, Казахстан, Таджикистан, Кыргызстан, Китай, ОАЭ
                        </p>

                        <div className="flex mb-[50px] gap-1 max-[426px]:flex-wrap max-[426px]:gap-[20px]">
                            <Link
                                href="#"
                                className="inline-flex justify-center items-center px-8 py-3 text-[16px] font-semibold rounded-[130px] bg-[#0060AE] text-white hover:bg-[#004E94] transition-colors min-w-[170px] text-center max-[426px]:w-[80%] max-[426px]:mx-auto"
                            >
                                Узнать стоимость доставки
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex justify-center items-center px-8 py-3 text-[16px] font-semibold rounded-[130px] border-[1.5px] border-[#0060AE] text-[#0060AE] hover:bg-blue-50 transition-colors min-w-[170px] text-center max-[426px]:w-[80%] max-[426px]:mx-auto"
                            >
                                Отследить посылку
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
