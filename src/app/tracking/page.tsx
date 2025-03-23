"use client"

import { Col, Form, Input, Row } from "antd"
import Image from "next/image"

export default function TrackingPage() {
    const [form] = Form.useForm()
    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-3xl md:text-[50px] font-bold text-[#0060AE] my-8">
                            Отслеживание
                            <br />
                            посылок
                        </h1>

                        <Form form={form} layout="vertical">
                            <Row gutter={[16, 16]} justify="start">
                                <Col xs={24} sm={10}>
                                    <Form.Item label={<strong>Трек-номер посылки</strong>} name="trackingNumber" rules={[{ required: true, message: "Trek-raqam kiriting!" }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={10}>
                                    <Form.Item label={<strong>2+2 =</strong>} name="captcha" rules={[{ required: true, message: "Captcha ni to‘ldiring!" }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={6} style={{ display: "flex", alignItems: "flex-end" }}>
                                    <button className="px-12 py-3 bg-[#0060AE] text-white border rounded-full">Поиск</button>
                                </Col>
                            </Row>
                        </Form>
                        <div className="space-y-4 mt-[60px]">
                            <div className="flex justify-between pl-[30px] pr-[200px] py-[27px] bg-[#E6F7FF] rounded-3xl">
                                <span>Дата создания</span>
                                <span className="w-1/3">{"01.01.2000"}</span>
                            </div>
                            <div className="flex justify-between pl-[30px] pr-[200px] py-[27px] bg-[#E6F7FF] rounded-3xl">
                                <span>Направление</span>
                                <span className="w-1/3">{"Направление"}</span>
                            </div>
                            <div className="flex justify-between pl-[30px] pr-[200px] py-[27px] bg-[#E6F7FF] rounded-3xl">
                                <span>Статус</span>
                                <span className="w-1/3">{"Статус"}</span>
                            </div>
                        </div>

                    </div>
                    <div className="order-1 lg:order-2  lg:flex justify-center items-center lg:space-y-4 flex flex-col justify-between">
                        <Image
                            src="/icons/tracking.svg"
                            alt="Человек работает с ноутбуком"
                            width={450}
                            height={342}
                            className="w-full h-auto rounded-2xl"
                        />
                        <button className="bg-[#0060AE] text-white py-3 rounded-full w-full md:w-auto px-8">
                            Распечатать накладную
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
