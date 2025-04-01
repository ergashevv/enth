/* How It Works Page - Full Responsive and Figma-Accurate */

'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import InstructionStep from '@/components/instructionSteps';

export default function HowItWorks() {
    const instructions = [
        {
            text: 'Зарегистрируйся в Ethno Logistics',
            details: 'Зарегистрируйся в кабинете Ethno Logistics или загрузи приложение. Получи личный ID-номер и адреса за границей, на которые иностранный интернет-магазин будет доставлять твои заказы.',
        },
        {
            text: 'Создай адрес получателя',
            details: 'Соверши покупку в иностранном интернет-магазине. Оформляя свой заказ, укажи адрес нашего международного склада и его номер телефона, а возле имени добавь личный ID-номер полученный при регистрации.',
        },
        {
            text: 'Зарегистрируйся на сайте магазина',
            details: 'Зарегистрируй свою интернет-покупку в персональном кабинете Ethno Logistics или в мобильном приложении, подтверди ее отправку, соверши оплату доставки и ожидай прибытия заказа.',
        },
        {
            text: 'Приобрести товар в интернет-магазине',
            details:
                'Получи свою интернет-покупку от курьера в любом удобном месте для тебя в Узбекистане и пользуйся сервисом Ethno Logistics повторно, рекомендуя нас друзьям.',
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="container mx-auto py-10 md:py-16">
                <div className="max-[426px]:flex-wrap flex justify-between grid-cols-1 md:grid-cols-2 gap-10 items-center mt-[30] mb-[102]">
                    <div>
                        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold mb-4 leading-snug">
                            <span className="text-red-600">Самостоятельные</span>
                            <br />
                            <span className="text-[#0060AE]">покупки в зарубежных</span>
                            <br />
                            <span className="text-[#0060AE]">интернет-магазинах</span>
                        </h1>
                        <p className="text-gray-700 mb-6 text-[14px] sm:text-[15px] md:text-base">
                            Купи товары в зарубежном онлайн-магазине, укажи адрес доставки <br /> наш склад, и мы доставим твои покупки к тебе из 8 стран мира!
                        </p>
                        <button className="bg-[#0060AE] rounded-full leading-6 px-6 py-3 text-white text-base font-semibold">
                            К покупкам
                        </button>
                    </div>
                    <div>
                        <Image
                            src="/icons/work.svg"
                            alt="Hero Illustration"
                            width={500}
                            height={400}
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-12">
                <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-semibold text-red-600 mb-10">
                    Как это работает?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-[426px]:mb-[30] mb-[100]">
                    {instructions.map((item, index) => (
                        <div key={index} className="bg-[#E6F7FF] rounded-3xl px-[20] py-[30]">
                            <div className="text-right text-[36px] sm:text-[42px] md:text-[45px] font-bold text-[#0060AE] mb-1">
                                {index + 1}
                            </div>
                            <h3 className="font-montserrat font-bold text-[20px] leading-[24px] tracking-normal text-[#0060AE] mb-[20] sm:text-[18px]">
                                {item.text}
                            </h3>
                            <p className="font-montserrat font-normal text-base leading-[26px] tracking-normal text-[#0D0808]">
                                {item.details}
                            </p>
                            <div className="mt-4 flex justify-end">
                                <button
                                    className={
                                        index === 0 || index === 1
                                            ? "bg-[#0060AE] text-white rounded-full py-[12px] px-[24.5px] text-sm "
                                            : "border border-red-500 text-red-500 rounded-full py-[12px] px-[24.5px] text-sm"
                                    }
                                >
                                    {index === 0
                                        ? "Регистрация"
                                        : index === 1
                                            ? "Каталог магазинов"
                                            : index === 2
                                                ? "В кабинет"
                                                : "Оплатить посылку"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <section className="container mx-auto">
                <div className="mb-5">
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 items-center md:py-16 bg-[#E6F7FF] rounded-[30px] py-[40px] px-[50px]">
                        <div>
                            <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-semibold text-[#0060AE] mb-6">
                                Как это работает?
                            </h2>
                            <p className="text-gray-700 mb-6 text-[14px] sm:text-[15px] md:text-base">
                                Купи товары в зарубежном онлайн-магазине, укажи адрес доставки наш склад, и мы доставим твои покупки к тебе из 8 стран мира — Россия, Узбекистан, Турция, Казахстан, Таджикистан, Кыргызстан, Китай, ОАЭ
                            </p>
                            <button className="border border-red-500 text-red-500 rounded-full px-6 py-2 text-sm">
                                К покупкам
                            </button>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white rounded-full p-4 shadow-lg">
                                    <Play className="h-6 w-6 text-red-500 fill-red-500" />
                                </div>
                            </div>
                            <div className="absolute top-4 right-4">
                                <div className="bg-white p-2 rounded-md">
                                    <span className="font-bold text-blue-800 text-sm">LOGO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto  py-12">
                <h2 className="text-[24px]  md:text-[50px] font-semibold text-[#0060AE] mb-10">
                    Подробная инструкция
                </h2>
                <div className="">
                    <InstructionStep />
                </div>
            </section>
        </main>
    );
}
