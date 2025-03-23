export default function Stats() {
    const stats = [
        { value: "24000+", text: "зарегистрированных клиентов сервиса" },
        { value: "8", text: "доставляем посылки и грузы из 8 стран мира" },
        { value: "1000", text: "интернет-магазинов в нашем каталоге" },
        { value: "26000+", text: "количество товаров, которые мы доставили" },
    ]

    return (
        <div className="container mx-auto w-full flex flex-wrap justify-between py-16 ">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-[#DCF4FFB2] rounded-[40px] py-[50px] w-full sm:w-[300px] flex flex-col items-center text-center my-3"
                >
                    <span className="text-[50px] font-medium text-[#0060AE] flex justify-start items-start">{stat.value}</span>
                    <p className="text-[#0D0808] text-[16px] max-w-[60%] pt-3 text-base/6 font-normal">{stat.text}</p>
                </div>
            ))}
        </div>
    )
}
