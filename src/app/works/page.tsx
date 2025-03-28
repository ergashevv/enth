/* How It Works Page - Full Responsive and Figma-Accurate */

'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import InstructionStep from '@/components/instructionSteps';

export default function HowItWorks() {
  const instructions = [
    {
      text: 'Зарегистрируйся в Ethno Logistics',
      details: 'Пройдите регистрацию, чтобы получить доступ ко всем сервисам.',
    },
    {
      text: 'Создай адрес получателя',
      details: 'Добавьте новый адрес доставки для удобства получения заказов.',
    },
    {
      text: 'Зарегистрируйся на сайте магазина',
      details: 'Создайте учетную запись в интернет-магазине для покупок.',
    },
    {
      text: 'Приобрести товар в интернет-магазине',
      details:
        'Теперь необходимо приобрести и оплатить доставку на наш склад. На этапе оформления заказа возле своего имени добавь личный ID-номер, полученный при регистрации...',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold mb-4 leading-snug">
              <span className="text-red-600">Самостоятельные</span>
              <br />
              <span className="text-[#0060AE]">покупки в зарубежных</span>
              <br />
              <span className="text-[#0060AE]">интернет-магазинах</span>
            </h1>
            <p className="text-gray-700 mb-6 text-[14px] sm:text-[15px] md:text-base">
              Купи товары в зарубежном онлайн-магазине, укажи адрес доставки наш склад, и мы доставим твои покупки к тебе из 8 стран мира!
            </p>
            <button className="bg-[#0060AE] rounded-full px-6 py-3 text-white text-sm font-medium">
              К покупкам
            </button>
          </div>
          <div>
            <Image
              src="/icons/work.svg"
              alt="Hero Illustration"
              width={500}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-semibold text-red-600 mb-10">
          Как это работает?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {instructions.map((item, index) => (
            <div key={index} className="bg-[#E6F7FF] rounded-3xl p-6">
              <div className="text-right text-[36px] sm:text-[42px] md:text-[45px] font-bold text-[#0060AE] mb-4">
                {index + 1}
              </div>
              <h3 className="text-blue-800 font-semibold mb-2 text-[16px] sm:text-[18px]">
                {item.text}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.details}
              </p>
              <div className="mt-4 flex justify-end">
                <button className="border border-red-500 text-red-500 rounded-full px-6 py-2 text-sm">
                  {index === 0 ? 'Регистрация' : index === 1 ? 'Каталог магазинов' : index === 2 ? 'В кабинет' : 'Оплатить посылку'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Block */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-[#E6F7FF] rounded-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-semibold text-[#0060AE] mb-6">
              Как это работает?
            </h2>
            <p className="text-gray-700 mb-6 text-[14px] sm:text-[15px] md:text-base">
              Купи товары в зарубежном онлайн-магазине, укажи адрес доставки наш склад, и мы доставим твои покупки к тебе из 8 стран мира — Россия, Узбекистан, Турция, Казахстан, Таджикистан, Кыргызстан, Китай, ОАЭ
            </p>
            <button className="border border-red-500 text-red-500 rounded-full px-6 py-2 text-sm">
              К покупкам
            </button>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Play className="h-6 w-6 text-red-500 fill-red-500" />
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-white p-2 rounded-md">
                <span className="font-bold text-blue-800 text-sm">LOGO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Instructions */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-semibold text-[#0060AE] mb-10">
          Подробная инструкция
        </h2>
        <div className="">
            <InstructionStep  />
        </div>
      </section>
    </main>
  );
}
