interface Option {
    label: string;
    value: string;
    description: string;
}
export default function DeliveryCalculator() {
    const options: Option[] = [
        { label: "Экспресс", value: "Экспресс", description: "3-5 рабочих дней" },
        { label: "Стандарт", value: "Стандарт", description: "5-7 рабочих дней" },
        { label: "Ультра", value: "Ультра", description: "до 36 часов" },
        { label: "Авто", value: "Авто", description: "от 10 рабочих дней" },
        { label: "Авто-эконом", value: "Авто-эконом", description: "15-20 рабочих дней" },
    ];
    return (
        <div className="bg-[#E6F7FF] p-6 rounded-[60px]  w-full mx-auto mt-5">
            <div className="container mx-auto">
                <h2 className="text-[50px] font-bold text-[#0060AE] text-left mb-6">
                    Калькулятор доставки
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-start items-center py-6">
                    <div className="relative w-full sm:w-64">
                        <select className="w-full px-4 py-3 border rounded-2xl bg-white shadow-sm focus:ring text-gray-600 appearance-none">
                            <option value="" hidden>Откуда</option>
                            <option value="tashkent">Toshkent</option>
                            <option value="samarkand">Samarqand</option>
                            <option value="bukhara">Buxoro</option>
                        </select>
                    </div>

                    <div className="relative w-full sm:w-64">
                        <select className="w-full px-4 py-3 border rounded-2xl bg-white shadow-sm focus:ring text-gray-600 appearance-none">
                            <option value="" hidden>Куда</option>
                            <option value="tashkent">Toshkent</option>
                            <option value="samarkand">Samarqand</option>
                            <option value="bukhara">Buxoro</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    <div className="rounded-lg">
                        <h3 className="text-lg font-semibold text-[#0060AE] mb-3">1. Доставка</h3>
                        <div className="border-b border-gray-300 mb-3"></div>
                        <div className="space-y-3">
                            {options.map((option) => (
                                <label key={option.value} className="flex items-start space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value={option.value}
                                        className="text-blue-600 border-gray-300 focus:ring-blue-500 mt-2"
                                    />
                                    <div>
                                        <span>{option.label}</span>
                                        <br />
                                        <span>{option.description}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-[#0060AE] mb-3">2. Тип груза</h3>
                        <div className="border-b border-gray-300 mb-3"></div>
                        {["Документы", "Посылка"].map((type, i) => (
                            <label key={i} className="block mb-2">
                                <input type="radio" name="cargo" className="mr-2" /> {type}
                            </label>
                        ))}

                        <div className="grid grid-cols-4 gap-2 my-3">
                            {["X", "Y", "Z", "M"].map((dim, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    placeholder={dim}
                                    className="p-2 border border-gray-300 rounded-lg text-center"
                                />
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <input type="text" placeholder="м³" className="p-2 border border-gray-300 rounded-lg" />
                            <input type="text" placeholder="КГ" className="p-2 border border-gray-300 rounded-lg" />
                        </div>
                    </div>

                    <div className="bg-white px-4 py-1 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold text-[#0060AE] mb-2">3. Рассчитать цену</h3>
                        <div className="border-b border-gray-300 mb-3"></div>
                        <span className='font-normal'>Специальные услуги</span>
                        <div className="flex flex-col gap-2">
                            {["Надежная упаковка", "Фотоотчет"].map((service, i) => (
                                <label key={i} className="flex items-center mt-2">
                                    <input type="checkbox" className="mr-2" /> {service}, XX$
                                </label>
                            ))}
                        </div>

                        <div className="flex items-center gap-[50px] mt-4">
                            <span className="text-xl font-bold text-[#0060AE]">1 + 2 =</span>
                            <input type="text" className="p-2 border border-gray-300 rounded-lg w-50" />
                        </div>
                        <span className='text-[12px] ml-5'>Подсказка: нажмите на уравнение, чтобы обновить</span>
                        <div className="text-[50px] font-bold text-[#0060AE] mt-4 text-end mr-5">0$</div>
                        <button className="w-2/3 bg-[#0060AE] text-white py-3 rounded-3xl mt-4  mb-5 ml-[30%]">
                            Рассчитать
                        </button>
                    </div>
                </div>

                <div className="flex flex-col mt-4 md:flex-row justify-between">
                    <span className='w-2/3 text-[12px]'>* Цены основаны на сегодняшних тарифах и могут меняться <br /> ежедневно. Свяжитесь с нами для получения точных цен.</span>
                    <button className="w-[240px] mr-5 border-2 border-[#0060AE] text-[#0060AE] py-3  rounded-3xl ">
                        Связаться с нами
                    </button>
                </div>
            </div>
        </div>
    );
}
