"use client"
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

  return (
    <div className="bg-[#E6F7FF] p-6 sm:p-10 rounded-[60px] w-full mx-auto mt-5">
      <div className="max-w-[1179px] mx-auto">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold text-[#0060AE] mb-10">
          Калькулятор доставки
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {['Откуда', 'Куда'].map((label) => (
            <div key={label} className="w-full sm:w-1/2 relative">
              <select
                className="appearance-none w-full h-[64px] bg-white rounded-[30px] px-6 text-lg text-[#0D0808] shadow-inner focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  {label}
                </option>
                <option value="tashkent">Ташкент</option>
                <option value="samarkand">Самарканд</option>
                <option value="bukhara">Бухара</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-5 transform -translate-y-1/2 w-10 h-10 bg-[#E6F7FF] rounded-[6px] border border-[#909090] flex items-center justify-center">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#333"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-[#0060AE] mb-3">1. Доставка</h3>
            <div className="border-b border-gray-300 mb-3"></div>
            <div className="flex flex-col gap-3">
              {options.map((option) => (
                <label key={option.value} className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="delivery"
                    checked={deliveryType === option.value}
                    onChange={() => setDeliveryType(option.value)}
                    className="mt-1"
                  />
                  <div>
                    <span>{option.label}</span>
                    <br />
                    <span className="text-sm text-gray-500">{option.description}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#0060AE] mb-3">2. Тип груза</h3>
            <div className="border-b border-gray-300 mb-3"></div>
            {['Документы', 'Посылка'].map((type) => (
              <label key={type} className="block mb-2">
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

            <label className="block font-medium mt-4 mb-2">Размеры упаковки (коробки)</label>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {['X', 'Y', 'Z'].map((dim) => (
                <input
                  key={dim}
                  type="number"
                  placeholder={dim}
                  className="p-3 rounded-xl border border-gray-400 text-center placeholder:text-gray-500 bg-transparent"
                />
              ))}
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="p-3 rounded-xl border border-gray-400 bg-transparent"
              >
                {['мм', 'см', 'дм', 'м'].map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <input type="text" placeholder="м³" className="p-3 rounded-xl border border-gray-400 text-end bg-transparent" />
              <input type="text" placeholder="КГ" className="p-3 rounded-xl border border-gray-400 text-end bg-transparent" />
            </div>
          </div>

          <div className="bg-white px-4 py-5 rounded-[30px] shadow-md">
            <h3 className="text-lg font-semibold text-[#0060AE] mb-3">3. Рассчитать цену</h3>
            <div className="border-b border-gray-300 mb-3"></div>
            <span className='block mb-2 text-sm'>Специальные услуги</span>
            <div className="flex flex-col gap-2">
              {["Надежная упаковка", "Фотоотчет"].map((service) => (
                <label key={service} className="flex items-center">
                  <input type="checkbox" className="mr-2" /> {service}, XX$
                </label>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-4">
              <span className="text-xl font-bold text-[#0060AE]">1 + 2 =</span>
              <input type="text" className="p-2 border border-gray-300 rounded-xl w-[100px]" />
            </div>
            <span className='text-xs ml-1 text-gray-500'>Подсказка: нажмите на уравнение, чтобы обновить</span>
            <div className="text-[50px] font-bold text-[#0060AE] mt-4 text-right">0$</div>
            <button className="w-full bg-[#0060AE] text-white py-3 rounded-3xl mt-4 hover:bg-blue-700 transition">
              Рассчитать
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-6 items-start md:items-center gap-4">
          <span className='text-xs text-[#0D0808]'>
            * Цены основаны на сегодняшних тарифах и могут меняться ежедневно. <br className="hidden md:block" />
            Свяжитесь с нами для получения точных цен.
          </span>
          <button className="w-full md:w-[240px] border border-[#0060AE] text-[#0060AE] py-3 rounded-3xl hover:bg-[#E6F7FF] transition font-semibold">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
}