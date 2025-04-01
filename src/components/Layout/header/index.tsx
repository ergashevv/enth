"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Drawer, Dropdown } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

export function Header() {
  const countries = [
    { label: "Узбекистан", icon: "/icons/uzFlag.svg", code: "UZ" },
    { label: "Россия", icon: "/icons/russianFlag.svg", code: "RU" },
    { label: "Кыргызстан", icon: "/icons/kzFlag.svg", code: "KG" },
    { label: "Таджикистан", icon: "/icons/tjkFlag.svg", code: "TJ" },
    { label: "Казахстан", icon: "/icons/kzFlag.svg", code: "KZ" },
    { label: "ОАЭ", icon: "/icons/baaFlag.svg", code: "AE" },
    { label: "Турция", icon: "/icons/turkeyFlag.svg", code: "TR" },
    { label: "Китай", icon: "/icons/chinaFlag.svg", code: "CN" },
  ];

  // Dastlabki qiymat sifatida "Узбекистан" ni o'rnatamiz
  const [selectedCountry, setSelectedCountry] = useState({
    label: "Узбекистан",
    icon: "/icons/uzFlag.svg",
    code: "UZ",
  });
  const [isOpen, setIsOpen] = useState(false);

  // Dropdown uchun menyu elementlari
  const countryMenuItems = countries.map((country, index) => ({
    key: index,
    label: (
      <div
        className="flex items-center gap-2"
        onClick={() => setSelectedCountry(country)}
      >
        <Image src={country.icon} alt={country.label} width={24} height={16} />
        <span className="text-black text-sm font-montserrat">{country.label}</span>
      </div>
    ),
  }));

  // API orqali foydalanuvchining mamlakatini aniqlash
  useEffect(() => {
    async function fetchUserCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const userCountry = countries.find((c) => c.code === data.country_code) || selectedCountry;
        setSelectedCountry(userCountry);
      } catch (error) {
        console.error("Geolokatsiya API xatosi:", error);
      }
    }
    fetchUserCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  

  const navigationLinks = [
    { href: "/tracking", label: "Отследить посылку" },
    { href: "/tariffs", label: "Тарифы" },
    { href: "/business", label: "Для бизнеса" },
    { href: "/company", label: "Адреса складов" },
    { href: "/works", label: "Как это работает" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <header className="w-full bg-white font-montserrat">
      {/* Top actions */}
      <div className="py-2">
        <div className="container px-4 flex justify-end items-center gap-3">
          <Dropdown menu={{ items: countryMenuItems }} placement="bottomLeft" arrow>
            <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow cursor-pointer">
              <Image
                src={selectedCountry.icon}
                alt={selectedCountry.label}
                width={30}
                height={20}
              />
              <span className="text-sm text-black">{selectedCountry.label}</span>
            </div>
          </Dropdown>
          <button className="bg-white p-2 rounded-lg text-black shadow text-sm">RU</button>
          <button className="flex items-center bg-white p-2 rounded-lg text-black shadow text-sm">
            <Image
              src="/icons/exit.svg"
              alt="Logout"
              width={20}
              height={10}
              className="mr-2"
            />
            Вход
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <div className="container bg-[#E6F7FF] mx-auto px-4 rounded-[15px]">
          <nav className="flex items-center h-16 justify-between">
            <Link href="/">
              <Image src="/icons/ethno.svg" alt="Ethno Logo" width={80} height={80} />
            </Link>
            <div className="hidden lg:flex items-center gap-[32px] xl:gap-[33px]">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 text-[16px] leading-6 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/calculator"
                className="flex items-center gap-2 text-black text-[16px] leading-6 whitespace-nowrap"
              >
                <Image src="/icons/calculator.svg" alt="Calculator" width={20} height={20} />
                Калькулятор
              </Link>
            </div>
            <div className="flex lg:hidden items-center">
              <Button
                type="text"
                icon={isOpen ? <CloseOutlined /> : <MenuOutlined />}
                onClick={() => setIsOpen(!isOpen)}
                className="text-xl"
              />
            </div>
          </nav>
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        placement="left"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        width="100%"
        closeIcon={null}
        className="!p-0"
        styles={{
          body: { padding: 0, background: "#FFFFFF" },
          header: { display: "none" },
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-200">
            <Link href="/">
              <Image src="/icons/ethno.svg" alt="Ethno Logo" width={60} height={60} />
            </Link>
            <Button
              type="text"
              icon={<CloseOutlined style={{ fontSize: "20px" }} />}
              onClick={() => setIsOpen(false)}
              className="hover:ext-[#0060AE]"
            />
          </div>
          <div className="flex flex-col px-6 pt-6 gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[18px] text-black! font-medium border-b border-gray-100 pb-2 hover:text-[#0060AE] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/calculator"
              className="flex items-center gap-2 text-[18px] text-black font-medium border-b border-gray-100 pb-2 hover:text-[#0060AE] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Image src="/icons/calculator.svg" alt="Calculator" width={20} height={20} />
              <span className="text-black">Калькулятор</span>
            </Link>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
