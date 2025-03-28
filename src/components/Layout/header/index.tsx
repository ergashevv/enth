// components/Header/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { href: "/tracking", label: "Отследить посылку" },
    { href: "/tariffs", label: "Тарифы" },
    { href: "/business", label: "Для бизнеса" },
    { href: "/company", label: "Адреса складов" },
    { href: "/works", label: "Как это работает" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <header className="container mx-auto">
      <div className="py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-4">
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow">
            <Image
              src="/icons/uzFlag.svg"
              alt="Uzbekistan Flag"
              width={30}
              height={20}
              className="rounded"
            />
            <span className="text-sm text-[black]">Узбекистан</span>
          </div>
          <button className="bg-white p-2 rounded-lg text-[black] shadow">RU</button>
          <button className="flex items-center bg-white p-2 rounded-lg text-[black] shadow">
            <Image
              src="/icons/exit.svg"
              alt="Logout"
              width={20}
              height={10}
              className="rounded mr-2"
            />
            Вход
          </button>
        </div>
      </div>

      <div className="px-5 bg-[#E6F7FF] rounded-xl">
        <nav className="flex items-center w-full gap-[50px] h-16">
          <Link href="/">
            <Image
              src="/icons/ethno.svg"
              alt="Ethno Logo"
              width={80}
              height={80}
              className="rounded"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-[50px]">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/calculator" className="flex items-center gap-2 text-[black]">
              <Image
                src="/icons/calculator.svg"
                alt="Calculator"
                width={20}
                height={20}
              />
              Калькулятор
            </Link>
          </div>

          <div className="ml-auto lg:hidden">
            <Button
              type="text"
              icon={isOpen ? <CloseOutlined /> : <MenuOutlined />} 
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </nav>
      </div>

      <Drawer
        placement="right"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        width={300}
        closeIcon={null}
        className="!p-0"
        styles={{ body: { padding: 0, background: '#FFFFFF' }, header: { display: 'none' } }}
      >
        <div className="flex flex-col h-full px-6 py-6 animate-slide-in">
          <div className="flex justify-end mb-6">
            <Button
              type="text"
              icon={<CloseOutlined style={{ fontSize: '18px' }} />} 
              onClick={() => setIsOpen(false)}
              className="hover:text-[#0060AE]"
            />
          </div>

          <div className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-4 text-[16px] font-medium text-[#0060AE] rounded-lg bg-[#F0F7FF] hover:bg-[#E6F7FF] transition-all duration-300 shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/calculator"
              className="flex items-center gap-2 py-2 px-4 text-[16px] font-medium text-[#0060AE] rounded-lg bg-[#F0F7FF] hover:bg-[#E6F7FF] transition-all duration-300 shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/icons/calculator.svg"
                alt="Calculator"
                width={20}
                height={20}
              />
              Калькулятор
            </Link>
          </div>
        </div>
      </Drawer>
    </header>
  );
}