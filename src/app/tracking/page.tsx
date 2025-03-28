"use client"

import { Col, Form, Input, Row } from "antd"
import Image from "next/image"

export default function TrackingPage() {
  const [form] = Form.useForm()
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold text-[#0060AE] mb-8">
              Отслеживание <br /> посылок
            </h1>

            <Form form={form} layout="vertical">
              <Row gutter={[16, 16]} justify="start">
                <Col xs={24} sm={12} md={10}>
                  <Form.Item
                    label={<strong>Трек-номер посылки</strong>}
                    name="trackingNumber"
                    rules={[{ required: true, message: "Trek-raqam kiriting!" }]}
                  >
                    <Input size="large" className="rounded-xl" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={12} md={10}>
                  <Form.Item
                    label={<strong className="text-[#0060AE] text-lg">1+2=</strong>}
                    name="captcha"
                    rules={[{ required: true, message: "Captcha ni to‘ldiring!" }]}
                  >
                    <Input size="large" className="rounded-xl" />
                  </Form.Item>
                  <p className="text-xs mt-[-12px] ml-1 text-gray-500">
                    Подсказка: нажмите на уравнение, чтобы обновить
                  </p>
                </Col>

                <Col xs={24} md={4} className="flex items-end">
                  <button className="w-full md:w-auto px-8 py-3 bg-[#0060AE] text-white rounded-full hover:bg-blue-700 transition-colors">
                    Поиск
                  </button>
                </Col>
              </Row>
            </Form>

            <div className="space-y-4 mt-10">
              <div className="flex justify-between items-center px-6 py-5 bg-[#E6F7FF] rounded-2xl text-sm sm:text-base">
                <span>Дата создания</span>
                <span className="font-medium">01.01.2000</span>
              </div>
              <div className="flex justify-between items-center px-6 py-5 bg-[#E6F7FF] rounded-2xl text-sm sm:text-base">
                <span>Направление</span>
                <span className="font-medium">Направление</span>
              </div>
              <div className="flex justify-between items-center px-6 py-5 bg-[#E6F7FF] rounded-2xl text-sm sm:text-base">
                <span>Статус</span>
                <span className="font-medium">Статус</span>
              </div>
            </div>
          </div>

          {/* Right image and button */}
          <div className="order-1 lg:order-2 flex flex-col justify-start items-center gap-6">
            <Image
              src="/icons/tracking.png"
              alt="Человек работает с ноутбуком"
              width={450}
              height={342}
              className="w-full h-auto rounded-2xl"
            />
            <button className="bg-[#0060AE] text-white text-sm sm:text-base py-3 px-6 rounded-full w-full sm:w-auto hover:bg-blue-700 transition-colors">
              Распечатать накладную
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}