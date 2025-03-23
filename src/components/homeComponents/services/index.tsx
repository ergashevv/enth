import Image from "next/image";

const services = [
    {
        title: "Авиаперевозки",
        description:
            "Самый востребованный вид транспортировки. Современные воздушные суда позволяют перевозить груз практически любого веса и размера...",
    },
    {
        title: "Наземные перевозки",
        description: "Автомобильные перевозки грузов по-прежнему лидирующий вид транспортировки. Использование автотранспорта позволяет проложить гибкий маршрут перевозки. На современных грузовых автомобилях можно перевозить любые виды и объёмы грузов, включая опасные и негабаритные",
    },
    {
        title: "Решения для бизнеса",
        description:
            "Мы сотрудничаем с производителями, интернет-магазинами, импортёрами и экспортёрами. Предоставляем услуги и поддержку в различных областях...",
    },
    {
        title: "Частным лицам",
        description:
            "Мы предоставляем полный комплекс услуг авиаперевозки грузов и автомобильной перевозки для физических лиц.",
    },
    {
        title: "ETHNO Buyer",
        description:
            "Услуга по организации выкупа товаров с любых онлайн-магазинов России и Турции с последующей их доставкой.",
    },
    {
        title: "Трансграничные перевозки",
        description:
            "Мы являемся профессионалами в сфере наземных перевозок с более чем 12-летним опытом и отправили более 100 тыс. отправлений.",
    },
];

export default function Services() {
    return (
        <section className="container mx-auto py-20 px-4 ">
            <h2 className="text-[50px] font-bold text-left mb-6 text-[#0060AE]">Услуги</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="shadow-lg rounded-2xl overflow-hidden p-5 bg-[#E6F7FF]"
                    >
                        <div className="w-full h-48 relative">
                            <Image
                                src={`https://picsum.photos/300/350?random=${index}`}
                                alt={service.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg w-[300px] h-[350px]"

                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4 text-[#0060AE]">{service.title}</h3>
                        <p className="text-gray-600 mt-2 text-[14px] text-base/7">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
