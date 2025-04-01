export default function Stats() {
    const stats = [
      { value: "24000+", text: "зарегистрированных клиентов сервиса" },
      { value: "8", text: "доставляем посылки и грузы из 8 стран мира" },
      { value: "1000", text: "интернет-магазинов в нашем каталоге" },
      { value: "26000+", text: "количество товаров, которые мы доставили" },
    ];
  
    return (
      <section className="container  bg-white py-12">
        <div className="container  mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#DCF4FFB2] rounded-[30px] pt-[26px] pr-[43px] pb-[32px] pl-[40px] sm:px-8 sm:py-10 flex flex-col items-center text-center h-full shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="sm:text-[36px] md:text-[44px] lg:text-[50px] font-montserrat font-semibold text-[50px] leading-[120%] tracking-normal text-[#0060AE]">
                  {stat.value}
                </span>
                <p className=" sm:text-[15px] md:text-[15.5px] lg:text-[16px] font-montserrat font-normal text-[16px] leading-[26px] tracking-normal text-[#0D0808] max-w-[95%] text-left">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  