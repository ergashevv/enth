import Image from "next/image";

const services = [
  {
    title: "Авиаперевозки",
    description:
      "Самый востребованный вид транспортировки. Современные воздушные суда позволяют перевозить груз практически любого веса и размера. Основные преимущества авиаперевозки грузов — это быстрая доставка, широкая география и минимальные риски.",
    image: "/icons/service-1.png",
  },
  {
    title: "Наземные перевозки",
    description:
      "Автомобильные перевозки грузов по-прежнему лидирующий вид транспортировки. Использование автотранспорта позволяет проложить гибкий маршрут перевозки. На современных грузовых автомобилях можно перевозить любые виды и объёмы грузов, включая опасные и негабаритные.",
    image: "/icons/service-2.png",
  },
  {
    title: "Решения для бизнеса",
    description:
      "Мы сотрудничаем с производителями, интернет-магазинами, импортёрами и экспортёрами. Предоставляем услуги и поддержку в различных областях бизнеса. Помогаем с увеличением производства, развитием онлайн-продаж, организацией импорта и экспорта товаров.",
    image: "/icons/service-3.png",
  },
  {
    title: "Частным лицам",
    description:
      "Мы предоставляем полный комплекс услуг авиаперевозки грузов и автомобильной перевозки для физических лиц.",
    image: "/icons/service-4.png",
  },
  {
    title: "ETHNO Buyer",
    description:
      "Услуга по организации выкупа товаров с любых онлайн-магазинов России и Турции с последующей их доставкой.",
    image: "/icons/service-5.png",
  },
  {
    title: "Трансграничные перевозки",
    description:
      "Мы являемся профессионалами в сфере наземных перевозок с более чем 12-летним опытом. Отправлено более 100 тыс. отправлений.",
    image: "/icons/service-6.png",
  },
];

export default function Services() {
  return (
    <section className="container py-16 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[50px] font-bold text-left mb-10 text-[#0060AE]">
        Услуги
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-[30px] overflow-hidden bg-[#E6F7FF] p-6 flex flex-col h-full transition-transform hover:scale-[1.01] hover:shadow-md"
          >
            <div className="w-full h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] relative rounded-[20px] overflow-hidden">
              <Image
                src={`${service.image}`}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-5 text-[#0060AE] leading-snug">
              {service.title}
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-base text-gray-600 mt-2 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
