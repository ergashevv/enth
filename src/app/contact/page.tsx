import { CountryCard } from "@/components/country-card"

const Contact = () => {
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
    return (
        <>
            <section className="my-5" >
                <div className="container">
                    <div className="rounded-4xl  bg-[#E6F7FF] p-[20px]">


                        <h2 className="text-2xl md:text-[40px] font-bold text-[#0060AE] mb-8">
                            Контакты
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {countries.map((country) => (
                                <CountryCard key={country.name} name={country.name} flag={country.flag} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact