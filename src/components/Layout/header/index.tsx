"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button, Drawer } from "antd"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navigationLinks = [
        { href: "/tracking", label: "Отследить посылку" },
        { href: "/tariffs", label: "Тарифы" },
        { href: "/business", label: "Для бизнеса" },
        { href: "/warehouses", label: "Адреса складов" },
        { href: "/works", label: "Как это работает" },
        { href: "/contact", label: "Контакты" },
    ]

    return (
        <header className="container mx-auto">
            <div className="py-2">
                <div className="container mx-auto px-4 flex justify-end items-center gap-4">
                    <div className="flex items-center gap-2  bg-white p-2 rounded-lg shadow">
                        <Image
                            src="/icons/uzFlag.svg?height=20&width=30"
                            alt="Uzbekistan Flag"
                            width={30}
                            height={20}
                            className="rounded"
                        />
                        <span className="text-sm text-[black]">Узбекистан</span>
                    </div>
                    <button className="bg-white p-2 rounded-lg text-[black] shadow">
                        RU
                    </button>
                    <button className="flex items-center bg-white p-2 rounded-lg text-[black] shadow">
                        <Image
                            src="/icons/exit.svg?height=10&width=20"
                            alt="Uzbekistan Flag"
                            width={20}
                            height={10}
                            className="rounded mr-2"
                        />
                        Вход
                    </button>
                </div>
            </div>
            <div className="px-5 bg-[#E6F7FF] rounded-xl">
                <div>
                    <nav className="flex items-center w-full gap-[50px] h-16">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/icons/ethno.svg"
                                alt="Uzbekistan Flag"
                                width={80}
                                height={80}
                                className="rounded"
                            />
                        </Link>
                        <div className="hidden lg:flex items-center gap-6 gap-[50px]">
                            {navigationLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                            <div className="hidden lg:flex gap-2 text-[black]">
                               <Link href={'/calculator'}>  <button className="flex items-center gap-2">
                                    <Image
                                        src="/icons/calculator.svg"
                                        alt="Uzbekistan Flag"
                                        width={20}
                                        height={20}
                                        className="rounded"
                                    />
                                    Калькулятор
                                </button></Link>
                            </div>
                        </div>
                        <div className="ml-[60%] md:ml-[70%] lg:hidden">
                            <Button
                                type="text"
                                icon={isOpen ? <CloseOutlined /> : <MenuOutlined />}
                                onClick={() => setIsOpen(!isOpen)}
                            />
                        </div>

                    </nav>
                </div>
            </div>

            <Drawer
                placement="right"
                onClose={() => setIsOpen(false)}
                open={isOpen}
                width={300}
                closeIcon={null}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-end p-4">
                        <Button type="text" icon={<CloseOutlined />} onClick={() => setIsOpen(false)} />
                    </div>
                    <div className="flex flex-col">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="py-3">
                            <Button type="text" className="flex items-center gap-2">
                                <Image
                                    src="/icons/calculator.svg"
                                    alt="Uzbekistan Flag"
                                    width={20}
                                    height={20}
                                    className="rounded"
                                />
                                Калькулятор
                            </Button>
                        </div>

                    </div>
                </div>
            </Drawer>
        </header>
    )
}

