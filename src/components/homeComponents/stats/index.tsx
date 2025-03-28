export default function Stats() {
    const stats = [
      { value: "24000+", text: "зарегистрированных клиентов сервиса" },
      { value: "8", text: "доставляем посылки и грузы из 8 стран мира" },
      { value: "1000", text: "интернет-магазинов в нашем каталоге" },
      { value: "26000+", text: "количество товаров, которые мы доставили" },
    ];
  
    return (
      <div className="container mx-auto w-full py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#DCF4FFB2] rounded-[30px] p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center h-full"
            >
              <span className="text-[36px] sm:text-[40px] lg:text-[50px] font-semibold text-[#0060AE]">
                {stat.value}
              </span>
              <p className="text-[#0D0808] text-[14px] sm:text-[15px] lg:text-[16px] mt-4 max-w-[90%]">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }