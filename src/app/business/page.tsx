'use client';

import Image from "next/image";
import { BusinessCard } from "@/components/business/BusinessCard";

export default function BusinessPage() {
  const solutions = [
    {
      title: "Я продаю на маркетплейсе",
      subtitle: "Доставка заказов с Ozon и Яндекс Маркет",
      features: [
        {
          title: "Автоматическая регистрация заказов",
          description: "Все заказы с маркетплейса попадают в личный кабинет Boxberry."
        },
        {
          title: "Удобный трекинг посылок",
          description: "Отследить заказы можно в личном кабинете Boxberry, а статус доставки передается в личный кабинет маркетплейса."
        },
        {
          title: "Обновление информации",
          description: "Адреса новых отделений Boxberry автоматически обновляются на карте маркетплейса."
        }
      ],
      image: "/icons/marketplace.png",
      buttonText: "Подключиться к Boxberry"
    },
    {
      title: "У меня свой интернет-магазин",
      subtitle: "Надежная доставка по России и за рубеж",
      features: [
        {
          title: "Единый личный кабинет",
          description: "Оформление всех заказов, интеграция с CMS."
        },
        {
          title: "Отслеживание и возвраты",
          description: "Удобные опции возврата, уведомления клиентов."
        },
        {
          title: "Сервис для продавцов",
          description: "Инструменты для оценки и повышения качества сервиса."
        }
      ],
      image: "/icons/marketplace.png",
      buttonText: "Стать клиентом Boxberry"
    },
    {
      title: "Я продаю в соцсетях",
      subtitle: "Отправка заказов напрямую из Telegram и ВКонтакте",
      features: [
        {
          title: "Удобные шаблоны",
          description: "Быстрое создание посылок по шаблонам."
        },
        {
          title: "Интеграция с мессенджерами",
          description: "Создание посылок напрямую из чатов."
        },
        {
          title: "Статусы и уведомления",
          description: "Уведомления клиентов о доставке."
        }
      ],
      image: "/icons/marketplace.png",
      buttonText: "Узнать подробнее"
    },
    {
      title: "Я лидер отрасли",
      subtitle: "Индивидуальные логистические и IT-решения для вашего бизнеса",
      features: [
        {
          title: "Автоматизация и гибкие настройки",
          description: "Интеграция под любой бизнес-процесс."
        },
        {
          title: "Поддержка и SLA",
          description: "Выделенный менеджер и контроль качества."
        },
        {
          title: "Надежность",
          description: "Работаем с крупнейшими брендами и компаниями."
        }
      ],
      image: "/icons/marketplace.png",
      buttonText: "Оставить заявку"
    },
    {
      title: "Я мультиселлер",
      subtitle: "Гибкие решения для организации доставки для клиентов",
      features: [
        {
          title: "Все заказы в одном месте",
          description: "Универсальная платформа для работы с разными каналами продаж."
        },
        {
          title: "Интеграция с маркетплейсами",
          description: "Поддержка API, CMS, CRM для автоматизации."
        },
        {
          title: "Контроль и отчетность",
          description: "Единый интерфейс управления логистикой."
        }
      ],
      image: "/icons/marketplace.png",
      buttonText: "Стать клиентом Boxberry"
    },
    {
      title: "Соберу свою доставку",
      subtitle: "Подходящие модули на нужную часть логистики",
      features: [
        {
          title: "Выбор по модулям",
          description: "Только нужные решения: от склада до вручения."
        },
        {
          title: "Интеграция с платформами",
          description: "Готовые интеграции для быстрого запуска."
        },
        {
          title: "Индивидуальный расчет",
          description: "Подбор под конкретные задачи."
        }
      ],
      image: "/icons/marketplace.png",
      buttonText: "Получить персональное предложение"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-[32px] sm:text-[42px] md:text-[50px] font-bold">
                <span className="text-[#F5040B]">Решения</span>{" "}
                <span className="text-[#0060AE] block">для бизнеса</span>
              </h1>
              <p className="text-base md:text-lg text-[#0D0808]">
                Доставка для вашего бизнеса от 150 ₽ за заказ. <br /> Настройте логистику по своему запросу.
              </p>
              <button className="bg-[#0060AE] text-white px-6 py-3 rounded-full">
                Оставить заявку
              </button>
            </div>
            <div className="relative w-full h-[250px] sm:h-[320px] md:h-[419px] rounded-[40px] overflow-hidden">
              <Image
                src="/icons/business-hero.png"
                fill
                alt="Business Solutions"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
        <h2 className="text-[28px] sm:text-[36px] md:text-[50px] font-bold text-[#0060AE] mb-12 text-center">
          Подходим для бизнеса любого масштаба
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <BusinessCard key={index} pic={solution.image} {...solution} />
          ))}
        </div>
      </section>
    </div>
  );
}