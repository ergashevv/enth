"use client"

import { Dropdown } from "antd";
import { useState } from "react";

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

  const [deliveryType, setDeliveryType] = useState("Стандарт");
  const [cargoType, setCargoType] = useState("Документы");
  const [unit, setUnit] = useState("см");
  const countries = [
    { label: "Узбекистан" },
    { label: "Россия" },
    { label: "Кыргызстан" },
    { label: "Таджикистан" },
    { label: "Казахстан" },
    { label: "ОАЭ" },
    { label: "Турция" },
    { label: "Китай" },
  ];

  const countryMenuItems = countries.map((country, index) => ({
    key: index.toString(),
    label: country.label,
  }));
  return (
    <div className="bg-[#E6F7FF] py-10 px-4 sm:px-6 lg:px-8 rounded-[60px] w-full mx-auto mt-10 font-montserrat mb-[100]">
      <div className="container">
        <h2 className="text-[#0060AE] text-[36px] sm:text-[42px] md:text-[50px] font-bold leading-[120%] mb-10">
          Калькулятор доставки
        </h2>
        <div className="flex xs:w-full xl:w-[67%] flex-col sm:flex-row gap-5 mb-10">
          {['Откуда', 'Куда'].map((label) => (
            <Dropdown
              key={label}
              menu={{ items: countryMenuItems }}
              placement="bottomLeft"
              arrow
            >
              <div className="w-full relative flex items-center bg-white h-[64px] rounded-[30px] px-6 text-[18px] leading-[24px] text-[#0D0808] shadow-inner focus:outline-none font-montserrat cursor-pointer">
                <span>{label}</span>
                <div className="pointer-events-none absolute top-1/2 right-5 transform -translate-y-1/2 w-[40px] h-[40px] bg-[#E6F7FF] rounded-[6px] border border-[#909090] flex items-center justify-center">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Dropdown>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-[20px]">
            <h3 className="text-[16px] font-bold text-[#0060AE] mb-2 leading-[24px]">1. Доставка</h3>
            <hr className="border-b border-gray-300 mb-3" />
            <div className="flex flex-col gap-3">
              {options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-start gap-2 cursor-pointer text-[16px] leading-[24px] text-[#0D0808] font-normal"
                >
                  <input
                    type="radio"
                    name="delivery"
                    checked={deliveryType === option.value}
                    onChange={() => setDeliveryType(option.value)}
                    className="mt-[5px]"
                  />
                  <div>
                    <span className="font-normal text-[#0D0808]">{option.label}</span>
                    <br />
                    <span className="font-normal text-[#0D0808]">{option.description}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-[20px]">
            <h3 className="text-[16px] font-bold text-[#0060AE] mb-2 leading-[24px]">2. Тип груза</h3>
            <hr className="border-b border-gray-300 mb-3" />
            {["Документы", "Посылка"].map((type) => (
              <label key={type} className="block mb-2 text-[16px] leading-[24px] text-[#0D0808] font-normal">
                <input
                  type="radio"
                  name="cargo"
                  checked={cargoType === type}
                  onChange={() => setCargoType(type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}

            <label className="block font-normal mt-4 mb-2 text-[16px] leading-[24px] text-[#0D0808]">
              Размеры упаковки (коробки)
            </label>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {["X", "Y", "Z"].map((dim) => (
                <input
                  key={dim}
                  type="number"
                  placeholder={dim}
                  className="p-3 rounded-xl border border-gray-400 text-center placeholder:text-gray-500 bg-transparent text-[14px] text-[#0D0808] font-normal"
                />
              ))}
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="p-3 rounded-xl border border-gray-400 bg-transparent text-[14px] text-[#0D0808] font-normal"
              >
                {["мм", "см", "дм", "м"].map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block mb-1 text-[16px] text-[#0D0808] font-normal leading-[24px]">Общий объем</label>
                <input type="text" placeholder="м³" className="p-3 rounded-xl border border-gray-400 text-end bg-transparent text-[14px] w-full text-[#0D0808] font-normal" />
              </div>
              <div>
                <label className="block mb-1 text-[16px] text-[#0D0808] font-normal leading-[24px]">Вес брутто</label>
                <input type="text" placeholder="КГ" className="p-3 rounded-xl border border-gray-400 text-end bg-transparent text-[14px] w-full text-[#0D0808] font-normal" />
              </div>
            </div>
          </div>

          <div className="bg-white px-6 py-6 rounded-[30px] shadow-md">
            <h3 className="text-[16px] font-bold text-[#0060AE] mb-2 leading-[24px]">3. Рассчитать цену</h3>
            <hr className="border-b border-gray-300 mb-3" />
            <span className='block mb-2 text-sm font-semibold text-[#0D0808]'>Специальные услуги</span>
            <div className="flex flex-col gap-2 mb-4">
              {["Надежная упаковка", "Фотоотчет"].map((service) => (
                <label key={service} className="flex items-center text-[14px] text-[#0D0808] font-normal">
                  <input type="checkbox" className="mr-2" /> {service}, XX$
                </label>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-2 justify-between">
              <span className="text-xl pl-[35px] font-bold text-[#0060AE]">1 + 2 =</span>
              <input type="text" className="p-2 border w-[57%] border-gray-300 rounded-xl  text-center text-[14px] text-[#0D0808] font-normal" />
            </div>
            <span className='text-xs text-gray-500'>Подсказка: нажмите на уравнение, чтобы обновить</span>
            <div className="text-[50px] font-bold text-[#0060AE] mt-4 text-right">0$</div>
            <button className="w-[190px] float-right bg-[#0060AE] text-white py-3 rounded-[30px] mt-4 hover:bg-blue-700 transition font-bold text-[16px]">
              Рассчитать
            </button>
          </div>
        </div>

        <div className="flex xl:pr-[27px] flex-col md:flex-row justify-between mt-10 items-start md:items-center gap-4">
          <p className='xl:text-[18px] sm:text-[12px] text-[#0D0808] leading-[20px] max-w-xl font-normal'>
            * Цены основаны на сегодняшних тарифах и могут меняться ежедневно. Свяжитесь с нами для получения точных цен.
          </p>
          <button className="w-full xl:w-[190px] md:w-[240px] border border-[#0060AE] text-[#0060AE] py-3 rounded-[30px] hover:bg-[#E6F7FF] transition font-bold text-[16px]">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
}


