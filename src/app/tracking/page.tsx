"use client"

import Image from "next/image"

export default function TrackingPage() {
    return (
        <main className="min-h-screen bg-white py-[68]">
            <div className="container px-4 py-8 md:py-14 font-montserrat">
                {/* Top section: Title + Form + Image */}
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                    {/* Left side - Title and form */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold text-[#0060AE] mb-6 sm:mb-10 leading-[120%]">
                            Отслеживание  посылок
                        </h1>

                        <form className="w-full">
                            <label className="text-[16px] font-semibold leading-[24px] text-[#0D0808] block mb-2">
                                Трек-номер посылки
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        className="w-full border border-[#909090] rounded-[6px] py-[6px] px-[16px]"
                                        placeholder="Введите номер"
                                    />
                                </div>

                                <div className="flex items-center justify-end">
                                    <label className="text-[14px] font-semibold leading-[24px] text-[#0060AE] block mr-[10px]">
                                        1 + 2 =
                                    </label>
                                    <input
                                        type="text"
                                        className="border border-[#909090] rounded-[6px] py-[6px] px-[16px]"
                                        placeholder="Введите ответ"
                                    />
                                </div>
                            </div>
                            <p className="text-xs text-right mt-2 sm:mt-[7px] mb-6 sm:mb-[30px] ml-1 text-[#909090] font-normal">
                                Подсказка: нажмите на уравнение, чтобы обновить
                            </p>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto py-[12px] px-[40px] bg-[#0060AE] text-white rounded-full hover:bg-blue-700 transition-colors text-[16px] font-medium"
                                >
                                    Поиск
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right side - Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <Image
                            src="/icons/tracking.png"
                            alt="Человек работает с ноутбуком"
                            width={450}
                            height={342}
                            className="w-full h-auto max-w-[450px] rounded-2xl"
                        />
                    </div>
                </div>

                {/* Bottom section: Results + Button */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 mt-8 lg:mt-10">
                    {/* Info Cards */}
                    <div className="flex flex-col gap-4 w-full sm:w-auto">
                        {[
                            { label: "Дата создания", value: "01.01.2000" },
                            { label: "Направление", value: "Направление" },
                            { label: "Статус", value: "Статус" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="w-full sm:w-[500px] md:w-[600px] h-[80px] bg-[#E6F7FF] rounded-[30px] px-[30px] py-[27px] flex items-center"
                            >
                                <span className="text-[#0D0808] text-[16px] font-normal leading-[26px]">
                                    {item.label}
                                </span>
                                <div className="flex-grow flex justify-center">
                                    <span className="text-[#0D0808] text-[16px] font-normal leading-[26px] text-center">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button (centered on mobile, 60% width) */}
                    <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                        <button className="bg-[#0060AE] text-white text-[14px] sm:text-[16px] py-3 px-6 rounded-full hover:bg-blue-700 transition-colors font-medium w-[60%] mx-auto sm:w-auto">
                            Распечатать накладную
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
