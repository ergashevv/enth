"use client"

import DeliveryCalculator from "@/components/homeComponents/calculator"
import HowItWorks from "@/components/instructionSteps"
import Image from "next/image"

export default function Warehouse() {
    const data = [
        { label: "Адрес", value: "Фатих, махалле Катип Касим, улица Катип Касым Джамии, 5. 1.Kat" },
        { label: "Город", value: "Стамбул" },
        { label: "Область", value: "Стамбул" },
        { label: "Индекс", value: "62702" },
        { label: "Страна", value: "Турция" },
        { label: "Телефон", value: "+90 551 747 95 59" },
        { label: "Контакт", value: "Кахрамон Мирзаев" },
    ]

    return (
        <div className="mt-5">
            <div className="container mx-auto  py-10 flex flex-col lg:flex-row gap-6 font-montserrat">
                <div className="lg:w-[580px] h-auto lg:h-[636px] flex-shrink-0">
                    <Image
                        src="/icons/turkey.png"
                        alt="Turkey"
                        width={580}
                        height={636}
                        className="rounded-[30px]  w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1 xl:w-[50%] bg-[#E6F7FF] rounded-[30px] xl:p-[20px] sm:p-8 md:p-10 flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[#0060AE] text-[26px] sm:text-[32px] font-bold">Турция</h2>
                        <Image src="/icons/turkeyFlag.svg" alt="Flag" width={32} height={24} />
                    </div>

                    {data.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-full bg-white rounded-[20px] px-[20px] py-[7px] flex justify-between items-center text-[16px] leading-[26px] text-[#0D0808]"
                        >
                            <span className="font-normal w-[35%] sm:w-[25%] truncate">{item.label}</span>
                            <span className="font-normal w-[60%] truncate">{item.value}</span>
                            <Image
                                src="/icons/copy.svg"
                                alt="copy"
                                width={18}
                                height={18}
                                className="cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <section className="container mx-auto mt-[40px] py-12">
                <h2 className="text-[24px]  md:text-[50px] font-semibold text-[#0060AE] mb-10">
                    Подробная инструкция
                </h2>
                <div className="">
                    <HowItWorks />
                </div>
            </section>
            <div className="container">
                <DeliveryCalculator/>
            </div>
        </div>
    )
}
