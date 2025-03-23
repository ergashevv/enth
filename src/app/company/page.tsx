'use client';
import Image from "next/image"
import { CountryCard } from "@/components/country-card"
import { useState } from "react";

export default function Company() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };
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
    const documents = [
        { name: "Запрещенные товары", id: "prohibited" },
        { name: "Общие условия пользования", id: "terms" },
        { name: "Политика в отношении обработки персональных данных", id: "privacy" },
    ]
    return (
        <main className="min-h-screen bg-white">
            <section className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-[50px] font-bold">
                            <span className="text-[#0060AE]">О компании</span>
                            <br />
                            <span className="text-red-500">Ethno Logistics</span>
                        </h1>

                        <div className="space-y-4 text-gray-600">
                            <p>
                                Ethno Logistics — международная транспортно-логистическая компания, работает с 2015 года, обеспечивает
                                полный комплекс услуг по доставке и хранению груза.
                            </p>
                            <p>
                                Доставим груз авиационным и автомобильным видами транспорта. Наша компания предложит индивидуальные
                                условия доставки груза, исходя из ваших основных потребностей.
                            </p>
                            <p>Мы осуществляем доставку документов, посылок, интернет-заказов, коммерческих грузов.</p>
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-4xl overflow-hidden">
                        {isLoading && (
                            <div className="absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse rounded-4xl" />
                        )}
                        <Image
                            src="/icons/company.svg"
                            alt="Delivery person with packages"
                            fill
                            loading="eager"
                            onLoadingComplete={handleImageLoad}
                            className={isLoading ? 'hidden' : 'object-cover'}
                        />
                    </div>

                </div>
            </section>

            <section className="container mx-auto rounded-4xl bg-[#E6F7FF] py-8 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-[40px] font-bold text-[#0060AE] mb-8">
                        Мы осуществляем доставку
                        <br />
                        между следующими странами
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {countries.map((country) => (
                            <CountryCard key={country.name} name={country.name} flag={country.flag} />
                        ))}
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button className="bg-[#0060AE] text-white px-8 py-3 rounded-full  transition-colors">
                            Перейти к покупкам
                        </button>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 md:py-16">
                <h2 className="text-2xl md:text-[40px] font-bold text-[#0060AE] mb-8">Документация</h2>

                <div className="space-y-4 w-full">
                    {documents.map((doc) => (
                        <div
                            key={doc.id}
                            className="bg-[#E6F7FF] rounded-[38px] p-4 md:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                        >
                            <span className="text-gray-900">{doc.name}</span>
                            <button className="bg-none text-[#0060AE] px-6 py-2 rounded-full transition-colors border-2 border-[#0060AE]">
                                Загрузить
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

