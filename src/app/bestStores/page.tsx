'use client';

import Image from "next/image";
import { CountryCard } from "@/components/country-card";

const countries = [
    { name: "Россия", flag: "/icons/russianFlag.svg" },
    { name: "Казахстан", flag: "/icons/kzx.svg" },
    { name: "Узбекистан", flag: "/icons/uzFlag.svg" },
    { name: "ОАЭ", flag: "/icons/baaFlag.svg" },
    { name: "Кыргызстан", flag: "/icons/kzFlag.svg" },
    { name: "Турция", flag: "/icons/turkeyFlag.svg" },
    { name: "Таджикистан", flag: "/icons/tjkFlag.svg" },
    { name: "Китай", flag: "/icons/chinaFlag.svg" },
];

const stores = [
    {
        name: "AMAZON.DE",
        description: "Amazon — крупнейший маркетплейс и мировой гигант электронной торговли",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
        name: "ZARA",
        description: "Zara — всемирно известный испанский бренд одежды, часть текстильной империи Inditex Group",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    },
    {
        name: "H&M",
        description: "H&M — шведская компания, крупнейшая в Европе розничная сеть по продаже одежды, обуви, аксессуаров, товаров для дома",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    },
    {
        name: "AMAZON.DE",
        description: "Amazon — крупнейший маркетплейс и мировой гигант электронной торговли",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
];

export default function BestPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container">
                <section className="rounded-3xl bg-[#E6F7FF] py-8 p-8  md:px-12 mt-8 mb-[60]">
                    <h2 className="text-xl sm:text-2xl md:text-[40px] font-bold text-[#0060AE] mb-6 sm:mb-8">
                        Лучшие магазины
                    </h2>

                    <div className="flex flex-wrap gap-4 items-center mb-6">
                        <button className="py-2.5 px-6 border-2 rounded-[20px] bg-white text-[#0060AE] font-semibold text-sm">
                            Все магазины
                        </button>
                        <input
                            className="py-2.5 px-5 rounded-[20px] bg-white text-gray-600 text-sm w-full sm:w-auto"
                            placeholder="Поиск магазина"
                            style={{
                                backgroundImage: `url(/icons/searchIcon.svg)`,
                                backgroundSize: '16px 16px',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 12px center'
                            }}
                        />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {countries.map((country) => (
                            <CountryCard key={country.name} name={country.name} flag={country.flag} />
                        ))}
                    </div>
                </section>

                <div className="">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <aside className="bg-gray-50 p-6 rounded-3xl shadow-md w-full lg:max-w-xs">
                            <h2 className="font-bold mb-3 text-base sm:text-lg">Все магазины</h2>
                            <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                                {[
                                    "Одежда, обувь и аксессуары", "Онлайн Молл", "Здоровье и красота", "Украшения и подарки",
                                    "Электроника и аксессуары", "Детская одежда и игрушки", "Дом и сад", "Канцелярские товары",
                                    "Досуг", "Спорт", "Товары для животных", "Автомобили и аксессуары"
                                ].map((category, index) => (
                                    <li key={index} className="cursor-pointer hover:text-[#0060AE]">{category}</li>
                                ))}
                            </ul>
                        </aside>

                        <div className="flex-1 space-y-4">
                            {stores.map((store, index) => (
                                <div key={index} className="bg-[#E6F7FFCC] px-6 py-6 rounded-3xl shadow-md flex items-center gap-4">
                                    <Image src={store.logo} width={64} height={64} alt={store.name} className="min-w-[64px] h-auto" />
                                    <div className="flex flex-col justify-center">
                                        <h3 className="font-bold text-sm sm:text-base mb-1">{store.name}</h3>
                                        <p className="text-gray-600 text-sm sm:text-base leading-snug">{store.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}