"use client";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";


const faqData = [
  {
    key: 1,
    number: "1",
    question: "Как зарегистрироваться в Ethno Logistics?",
    answer: "Чтобы зарегистрироваться, перейдите на сайт и заполните форму.",
  },
  {
    key: 2,
    number: "2",
    question: "Как создать адрес получателя?",
    answer: "Вы можете создать адрес получателя в личном кабинете.",
  },
  {
    key: 3,
    number: "3",
    question: "Как приобрести товар в интернет-магазине?",
    answer: "Выберите товар и следуйте инструкциям на сайте.",
  },
];

const FAQ = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* FAQ Title */}
        <h2 className="text-[32px] text-left md:text-[40px] font-bold text-[#0047AB] mb-10">
        FAQ
        </h2>

        {/* Collapse */}
        <Collapse
          accordion
          expandIconPosition="end"
          ghost
          expandIcon={({ isActive }) => (
            <div className="w-9 h-9 flex items-center justify-center border-2 border-[#0047AB] rounded-full">
              <PlusOutlined
                className={`text-[#0047AB] text-[18px] transition-transform duration-300 ${
                  isActive ? "rotate-45" : ""
                }`}
              />
            </div>
          )}
          className="space-y-4 !border-none"
          items={faqData.map((item) => ({
            key: item.key,
            label: (
              <div className="flex items-center">
                <div className="text-[#0047AB] text-[32px] font-bold mr-4 leading-none">
                  {item.number}
                </div>
                <div className="text-[16px] text-[#0D0808] leading-tight text-left">
                  {item.question}
                </div>
              </div>
            ),
            children: (
              <p className="text-[14px] text-[#333] leading-relaxed text-left">
                {item.answer}
              </p>
            ),
            className:
              "!bg-[#E6F3FC] !border-none !shadow-none !rounded-[16px] !px-6 !py-4",
          }))}
        />
      </div>
    </div>
  );
};

export default FAQ;
