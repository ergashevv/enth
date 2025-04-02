"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const HowItWorks = () => {
  const instructions = [
    {
      number: 1,
      title: "Зарегистрируйся в Ethno Logistics",
      details:
        "Пройдите регистрацию, чтобы получить доступ ко всем сервисам. Получи личный ID номер и адрес за границей."
    },
    {
      number: 2,
      title: "Создай адрес получателя",
      details: "Добавьте новый адрес доставки для удобства получения заказов."
    },
    {
      number: 3,
      title: "Зарегистрируйся на сайте магазина",
      details: "Создайте учетную запись в интернет-магазине для покупок."
    },
    {
      number: 4,
      title: "Приобрести товар в интернет-магазине",
      details:
        "Теперь необходимо приобрести и оплатить доставку на наш склад. Добавь личный ID-номер возле имени или в другой строке, если система не пропускает. Укажи адрес склада и номер склада в строке с телефоном."
    },
    {
      number: 5,
      title: "Зарегистрируй покупку",
      details:
        "Зарегистрируй покупку в личном кабинете на сайте или в приложении, прикрепи чек и укажи номер заказа."
    },
    {
      number: 6,
      title: "Оплати доставку",
      details: "Оплати доставку на сайте или в приложении в удобной валюте."
    },
    {
      number: 7,
      title: "Отправь посылку",
      details:
        "Отправь посылку на указанный склад с ID и всеми необходимыми данными."
    },
    {
      number: 8,
      title: "Получи заказ",
      details: "Курьер доставит покупку в Узбекистане или Кыргызстане."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <main className="mx-auto mt-[60px] sm:mt-[80px] md:mt-[100px]">
      <div className="grid gap-6">
        {instructions.map(({ number, title, details }, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={number}
              className="bg-[#E6F7FF] rounded-3xl p-5 md:p-6 shadow-sm text-left"
            >
              <button
                className="flex items-center justify-between w-full gap-4"
                onClick={() => toggleOpen(index)}
              >
                <div className="flex items-center gap-4 text-left w-full">
                  <div className="w-10 h-10 min-w-[40px] flex items-center justify-center bg-[#0060AE] text-white text-lg font-bold rounded-full">
                    {number}
                  </div>
                  <h3 className="text-[15px] sm:text-base md:text-[16px] font-semibold text-[#0060AE] leading-snug">
                    {title}
                  </h3>
                </div>
                <div
                  className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                    isOpen
                      ? "border-red-500 text-red-500"
                      : "border-[#0060AE] text-[#0060AE]"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-[400px] mt-4" : "max-h-0"}
                `}
              >
                <div
                  className={`
                    ${isOpen ? "border-t border-[#0060AE] pt-4" : ""}
                  `}
                >
                  <p className="text-gray-700 text-sm md:text-[14px] leading-relaxed">
                    {details}
                  </p>

                    <button className="float-right mt-4 px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-50 text-sm">
                      Выбрать магазин
                    </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HowItWorks;
