import Link from "next/link"
import Image from "next/image"

export default function Delivery() {
    return (
        <div className="w-full bg-white">
            <div className="container mx-auto p-6 md:py-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            <span className="text-blue-600">Ваш </span>
                            <span className="text-red-500">молниеносный</span>
                            <br className="hidden sm:block" />
                            <span className="text-blue-600">партнер по доставке</span>
                        </h1>
                        <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl">
                            Доставляем документы, посылки, интернет-заказы и коммерческие грузы между следующими странами: Россия,
                            Узбекистан, Турция, Казахстан, Таджикистан, Кыргызстан, Китай, ОАЭ
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="#"
                                className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                            >
                                Узнать стоимость доставки
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex justify-center items-center px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                            >
                                Отследить посылку
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-[613px] h-[467px]">
                        <div
                            className="absolute bottom-0 left-[62px] w-[80%] h-[80%] bg-[#F3C16F] rounded-[2rem]"
                            style={{
                                borderRadius: "50px",
                            }}
                        ></div>

                        {/* Rasm */}
                        <Image
                            src="/icons/deliver.svg"
                            alt="Delivery Person"
                            width={613}
                            height={467}
                            className="relative z-10 object-contain"
                            priority
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

