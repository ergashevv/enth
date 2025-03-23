"use client"
import Image from "next/image"
import { Play } from "lucide-react"
import InstructionStep from "@/components/instructionSteps";

export default function Home() {
    const instructions = [
        {
            text: "Зарегистрируйся в Ethno Logistics",
            details: "Пройдите регистрацию, чтобы получить доступ ко всем сервисам.",
        },
        {
            text: "Создай адрес получателя",
            details: "Добавьте новый адрес доставки для удобства получения заказов.",
        },
        {
            text: "Зарегистрируйся на сайте магазина",
            details: "Создайте учетную запись в интернет-магазине для покупок.",
        },
        {
            text: "Приобрести товар в интернет-магазине",
            details:
                "Теперь необходимо приобрести и оплатить доставку на наш склад. На этапе оформления заказа возле своего имени добавь личный ID-номер, полученный при регистрации...",
            buttonText: "Выбрать магазин",
        },
    ];
    return (
        <main className="min-h-screen bg-white">
            <section className="container mx-auto px-4 py-12 md:py-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
                    <div>
                        <h1 className="text-[50px] font-bold mb-4">
                            <span className="text-red-600">Самостоятельные</span> <br />
                            <span className="text-[#0060AE]">покупки в зарубежных</span> <br />
                            <span className="text-[#0060AE]">интернет-магазинах</span>
                        </h1>
                        <p className="text-gray-700 mb-6">
                            Купи товары в зарубежном онлайн-магазине, укажи адрес доставки наш склад, и мы доставим твои покупки к
                            тебе из 8 стран мира!
                        </p>
                        <button className="bg-[#0060AE] rounded-[50px] px-6 h-auto py-2 text-white">
                            К покупкам
                        </button>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <Image
                            src="/icons/work.svg"
                            alt="Человек с ноутбуком"
                            width={500}
                            height={400}
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12">
                <h2 className="text-[50px] font-semibold text-red-600 mb-10">Как это работает?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Step 1 */}
                    <div className="bg-[#E6F7FF] rounded-3xl p-6">
                        <div className="text-right text-[45px] font-bold text-[#0060AE]">1</div>
                        <h3 className="text-blue-800 font-semibold mb-3">Регистрация в Ethno Logistics</h3>
                        <p className="text-gray-700 text-sm">
                            Зарегистрируйся на сайте Ethno Logistics или скачай приложение. Получи личный ID номер и адрес за
                            границей, на который иностранный интернет-магазин будет доставлять твои заказы.
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-[#0060AE] hover:bg-blue-800 rounded-full px-8 h-auto py-3 text-sm text-white">
                                Регистрация
                            </button>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-[#E6F7FF] rounded-3xl p-6">
                        <div className="text-right text-[45px] font-bold text-[#0060AE] mb-4">2</div>
                        <h3 className="text-blue-800 font-semibold mb-3">Соверши покупку в магазине</h3>
                        <p className="text-gray-700 text-sm">
                            Соверши покупку в иностранном интернет-магазине. Оформляя свой заказ, укажи адрес нашего международного
                            склада и его номер телефона, а также укажи добавленный ID-номер получателя при регистрации.
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-[#0060AE]  rounded-full px-6 h-auto py-3 text-sm text-white">
                                Каталог магазинов
                            </button>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-[#E6F7FF] rounded-3xl p-6">
                        <div className="text-right text-[45px] font-bold text-[#0060AE] mb-4">3</div>
                        <h3 className="text-blue-800 font-semibold mb-3">Зарегистрируй покупку</h3>
                        <p className="text-gray-700 text-sm">
                            Зарегистрируй свою интернет-покупку в персональном кабинете на сайте Ethno Logistics и мобильном
                            приложении, прикрепи чек оплаты, сообщи нам о доставке и номере прибытия заказа.
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button className="border border-red-500 text-red-500 rounded-full px-8 h-auto py-3 text-sm"
                            >
                                В кабинет
                            </button>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-[#E6F7FF] rounded-3xl p-6">
                        <div className="text-right text-[45px] font-bold text-[#0060AE] mb-4">4</div>
                        <h3 className="text-blue-800 font-semibold mb-3">Получи свою посылку</h3>
                        <p className="text-gray-700 text-sm">
                            Получи свою интернет-покупку от курьера в любой удобной точке для тебя в Узбекистане и Кыргызстане. Ethno
                            Logistics поможет, расскажет как заказать.
                        </p>
                        <div className="mt-[30px] flex justify-end">
                            <button className="border border-red-500 text-red-500 rounded-full px-8 h-auto py-3 text-sm"
                            >
                                Оплатить посылку
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="container mx-auto px-[50px] py-12 md:py-14 bg-[#E6F7FF] rounded-[40px]">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
                    <div>
                        <h2 className="text-[50px] font-semibold text-[#0060AE] mb-6">Как это работает?</h2>
                        <p className="text-gray-700 mb-6">
                            Купи товары в зарубежном онлайн-магазине, укажи адрес доставки наш склад, и мы доставим твои покупки к
                            тебе из 8 стран мира — Россия, Узбекистан, Турция, Казахстан, Таджикистан, Кыргызстан, Китай, ОАЭ
                        </p>
                        <button className="border border-red-500 text-red-500 rounded-full px-6 h-auto py-3">
                            К покупкам
                        </button>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden bg-gray-200 aspect-video h-[230px] w-[90%]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white rounded-full p-4 shadow-lg">
                                <Play className="h-6 w-6 text-red-500 fill-red-500" />
                            </div>
                        </div>
                        <div className="absolute top-4 right-4">
                            <div className="bg-white p-2 rounded-md">
                                <span className="font-bold text-blue-800">LOGO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Instructions */}
            <section className="container mx-auto px-4 py-12  rounded-3xl mb-12 mt-5">
                <h2 className="text-[50px] font-semibold text-[#0060AE] mb-10">Подробная инструкция</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {instructions.map((item, index) => (
                        <InstructionStep
                            key={index}
                            number={index + 1}
                            text={item.text}
                            details={item.details}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

