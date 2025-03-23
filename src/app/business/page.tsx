import { BusinessCard } from "@/components/business/BusinessCard";
import Image from "next/image";

export default function BusinessPage() {
    const solutions = [
        {
            title: "Я продаю на маркетплейсе",
            subtitle: "Доставка заказов с Ozon и Яндекс Маркет",
            features: [
                {
                    title: "Автоматическая регистрация заказов",
                    description: "все заказы с маркетплейса попадают в личный кабинет Boxberry"
                },
                {
                    title: "Удобный трекинг посылок",
                    description: "отследить заказы можно в личном кабинете Boxberry, а статус доставки передается в личный кабинет маркетплейса"
                },
                {
                    title: "Обновление информации",
                    description: "адреса новых отделений Boxberry автоматически обновляются на карте маркетплейса"
                }
            ],
            image: "/icons/marketplace.png",
            buttonText: "Подключиться к Boxberry"
        },
        {
            title: "Я продаю на маркетплейсе",
            subtitle: "Доставка заказов с Ozon и Яндекс Маркет",
            features: [
                {
                    title: "Автоматическая регистрация заказов",
                    description: "все заказы с маркетплейса попадают в личный кабинет Boxberry"
                },
                {
                    title: "Удобный трекинг посылок",
                    description: "отследить заказы можно в личном кабинете Boxberry, а статус доставки передается в личный кабинет маркетплейса"
                },
                {
                    title: "Обновление информации",
                    description: "адреса новых отделений Boxberry автоматически обновляются на карте маркетплейса"
                }
            ],
            image: "/icons/marketplace.png",
            buttonText: "Подключиться к Boxberry"
        },
        {
            title: "Я продаю на маркетплейсе",
            subtitle: "Доставка заказов с Ozon и Яндекс Маркет",
            features: [
                {
                    title: "Автоматическая регистрация заказов",
                    description: "все заказы с маркетплейса попадают в личный кабинет Boxberry"
                },
                {
                    title: "Удобный трекинг посылок",
                    description: "отследить заказы можно в личном кабинете Boxberry, а статус доставки передается в личный кабинет маркетплейса"
                },
                {
                    title: "Обновление информации",
                    description: "адреса новых отделений Boxberry автоматически обновляются на карте маркетплейса"
                }
            ],
            image: "/icons/marketplace.png",
            buttonText: "Подключиться к Boxberry"
        },
        {
            title: "Я продаю на маркетплейсе",
            subtitle: "Доставка заказов с Ozon и Яндекс Маркет",
            features: [
                {
                    title: "Автоматическая регистрация заказов",
                    description: "все заказы с маркетплейса попадают в личный кабинет Boxberry"
                },
                {
                    title: "Удобный трекинг посылок",
                    description: "отследить заказы можно в личном кабинете Boxberry, а статус доставки передается в личный кабинет маркетплейса"
                },
                {
                    title: "Обновление информации",
                    description: "адреса новых отделений Boxberry автоматически обновляются на карте маркетплейса"
                }
            ],
            image: "/icons/marketplace.png",
            buttonText: "Подключиться к Boxberry"
        },
        {
            title: "Я продаю на маркетплейсе",
            subtitle: "Доставка заказов с Ozon и Яндекс Маркет",
            features: [
                {
                    title: "Автоматическая регистрация заказов",
                    description: "все заказы с маркетплейса попадают в личный кабинет Boxberry"
                },
                {
                    title: "Удобный трекинг посылок",
                    description: "отследить заказы можно в личном кабинете Boxberry, а статус доставки передается в личный кабинет маркетплейса"
                },
                {
                    title: "Обновление информации",
                    description: "адреса новых отделений Boxberry автоматически обновляются на карте маркетплейса"
                }
            ],
            image: "/icons/marketplace.png",
            buttonText: "Подключиться к Boxberry"
        },
        {
            title: "Я продаю на маркетплейсе",
            subtitle: "Доставка заказов с Ozon и Яндекс Маркет",
            features: [
                {
                    title: "Автоматическая регистрация заказов",
                    description: "все заказы с маркетплейса попадают в личный кабинет Boxberry"
                },
                {
                    title: "Удобный трекинг посылок",
                    description: "отследить заказы можно в личном кабинете Boxberry, а статус доставки передается в личный кабинет маркетплейса"
                },
                {
                    title: "Обновление информации",
                    description: "адреса новых отделений Boxberry автоматически обновляются на карте маркетплейса"
                }
            ],
            image: "/icons/marketplace.png",
            buttonText: "Подключиться к Boxberry"
        },
        //... boshqa kartalar
    ];
    return (
        <div className="min-h-screen">
            <div className="relative bg-gradient-to-r from-[#FFFFFF] to-[#FFFE]">
                <div className="max-w-7xl mx-auto  py-20">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h1 className="text-[50px] font-bold text-[#F5040B] leading-tight">
                                Решения для бизнеса
                            </h1>
                            <p className="text-lg text-[#0D0808]">
                                Доставка для вашего бизнеса от 150 ₽ за заказ<br />
                                Настройте логистику по своему запросу
                            </p>
                            <button className="bg-[#0060AE] text-white px-8 py-3 rounded-full">
                                Оставить заявку
                            </button>
                        </div>
                        <div className="relative h-[419px] rounded-[50px] overflow-hidden">
                            <Image
                                src="/icons/business-hero.png"
                                fill
                                alt="Business Solutions"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-[50px] font-bold text-[#0060AE] mb-16 text-center">
                    Подходим для бизнеса любого масштаба
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <BusinessCard key={index} pic={solution.image} {...solution} />
                    ))}
                </div>
            </div>

        </div>
    );
}