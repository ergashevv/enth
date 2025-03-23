import { CountryCard } from '@/components/country-card'
import Image from 'next/image';
import React from 'react'

const countries = [
    { name: "Россия", flag: "/icons/russianFlag.svg" },
    { name: "Казахстан", flag: "/icons/kzx.svg" },
    { name: "Узбекистан", flag: "/icons/uzFlag.svg" },
    { name: "ОАЭ", flag: "/icons/baaFlag.svg" },
    { name: "Кыргызстан", flag: "/icons/kzFlag.svg" },
    { name: "Турция", flag: "/icons/turkeyFlag.svg" },
    { name: "Таджикистан", flag: "/icons/tjkFlag.svg" },
    { name: "Китай", flag: "/icons/chinaFlag.svg" },
]
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

const BestPage = () => {
    return (
        <main>
            <section className="container mx-auto rounded-4xl bg-[#E6F7FF] py-8 my-8">
                <div className="px-[50px]">
                    <h2 className="text-2xl md:text-[40px] font-bold text-[#0060AE] mb-8">
                        Лучшие магазины
                    </h2>
                    <button className='py-5 px-[59px] my-4 mr-5 border-2 rounded-[20px] bg-white text-[#0060AE] font-semibold'>Все магазины</button>
                    <input
                        className='py-5 px-[40px]  rounded-[20px] bg-white text-gray-600'
                        placeholder='Поиск магазина'
                        style={{ backgroundImage: `url(icons/searchIcon.svg)`, backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'right  30px center' }} />
                    <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {countries.map((country) => (
                            <CountryCard key={country.name} name={country.name} flag={country.flag} />
                        ))}
                    </div>
                </div>
            </section>
            <div className="container mx-auto flex flex-col md:flex-row gap-4  mx-auto">
                <aside className="bg-gray-50 p-[40px] rounded-[40px] shadow-md w-full md:max-w-xs self-start">
                    <h2 className="font-bold mb-3">Все магазины</h2>
                    <ul className="space-y-4 text-gray-700">
                        {[
                            "Одежда, обувь и аксессуары", "Онлайн Молл", "Здоровье и красота", "Украшения и подарки",
                            "Электроника и аксессуары", "Детская одежда и игрушки", "Дом и сад", "Канцелярские товары",
                            "Досуг", "Спорт", "Товары для животных", "Автомобили и аксессуары"
                        ].map((category, index) => (
                            <li key={index} className='font-normal text-[16px] cursor-pointer'><a>{category}</a></li>
                        ))}
                    </ul>
                </aside>

                <div className="flex-1 space-y-4">
                    {stores.map((store, index) => (
                        <div key={index} className="bg-[#E6F7FFCC] px-[46px] py-[53px] flex items-center rounded-[40px] shadow-md space-x-4">
                            <Image src={store.logo} width={64} height={64} alt={store.name} className="w-20 h-auto" />
                            <div>
                                <h3 className="font-bold">{store.name}</h3>
                                <p className="text-gray-600">{store.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default BestPage
