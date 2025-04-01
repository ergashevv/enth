// components/Footer/Footer.tsx
"use client";

import { FC } from "react";
import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Option } = Select;

interface Country {
    code: string;
    name: string;
    flag: string;
}

const countries: Country[] = [
    { code: "uz", name: "Узбекистан", flag: "uzFlag" },
    { code: "ru", name: "Россия", flag: "russianFlag" },
    { code: "tj", name: "Таджикистан", flag: "tjkFlag" },
    { code: "kz", name: "Казахстан", flag: "kzFlag" },
    { code: "ae", name: "ОАЭ", flag: "baaFlag" },
    { code: "tr", name: "Турция", flag: "turkeyFlag" },
    { code: "cn", name: "Китай", flag: "chinaFlag" },
];

const Footer: FC = () => {
    return (
        <footer className="bg-[#E6F7FF] text-gray-800 pt-12 pb-8">
            <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <Image src="/icons/ethno.svg" alt="Ethno Logistics" width={150} height={50} />
                    <p className="text-[14px] mt-2 font-normal">© Все права защищены</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <ul className="space-y-2 text-[14px] font-normal">
                        <li>
                            <Link href="/bestStores" className="font-normal">
                                Магазины
                            </Link>
                        </li>
                        <li>
                            <Link href="/tariffs" className="font-normal">
                                Тарифы
                            </Link>
                        </li>
                        <li>
                            <Link href="/tracking" className="font-normal">
                                Отследить посылку
                            </Link>
                        </li>
                        <li>
                            <Link href="/works" className="font-normal">
                                Как это работает
                            </Link>
                        </li>
                        <li>
                            <Link href="/company" className="font-normal">
                                О компании
                            </Link>
                        </li>
                        <li>
                            <Link href="/business" className="font-normal">
                                Для бизнеса
                            </Link>
                        </li>
                    </ul>
                    <ul className="space-y-2 text-[14px] font-normal">
                        <li>
                            <Link href="/warehouses" className="font-normal">
                                Адреса складов
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="font-normal">
                                Контакты
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className="font-normal">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="font-normal">
                                Запрещенные товары
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="font-normal">
                                Условия использования
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="font-normal">
                                Политика конфиденциальности
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 md:ml-8">
                    <h1 className="text-[16px] font-normal">Сменить страну</h1>
                    <span className="text-[14px] leading-snug font-normal">
                        Вы можете изменить страну и изучить содержимое сайта для другого региона
                    </span>
                    <Select
                        defaultValue="uz"
                        className="w-full text-left"
                        style={{ width: "100%", height: 45 }}
                        dropdownStyle={{ borderRadius: 12 }}
                    >
                        {countries.map((country) => (
                            <Option value={country.code} key={country.code}>
                                <div className="flex items-center">
                                    <Image
                                        src={`/icons/${country.flag}.svg`}
                                        alt={country.code}
                                        width={25}
                                        height={25}
                                    />
                                    <span className="ml-2 font-normal">{country.name}</span>
                                </div>
                            </Option>
                        ))}
                    </Select>
                    <div className="flex gap-6 justify-center md:justify-start">
                        <Link href="/calculator" className="flex items-center gap-2 text-[14px] font-normal">
                            <Image src="/icons/calculator.svg" alt="Calculator" width={18} height={18} />
                            Калькулятор
                        </Link>
                        <Link href="/login" className="flex items-center gap-2 text-[14px] font-normal">
                            <Image src="/icons/exit.svg" alt="Login" width={18} height={18} />
                            Вход
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto mt-10 px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="md:flex-row items-center gap-4">
                        <div className="flex pb-3  flex-wrap gap-2 justify-center md:justify-start">
                            {["Visa", "Mastercard", "uzcard", "payme", "click", "humo"].map((name) => (
                                <Image
                                    key={name}
                                    src={`/icons/${name}.svg`}
                                    alt={name}
                                    width={40}
                                    height={25}
                                />
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <Link
                                href="https://apps.apple.com/"
                                target="_blank"
                                className="bg-black rounded-lg pt-[6.59px] pr-[21.99px] pb-[7.65px] pl-[12.52px] font-normal"
                            >
                                <Image src="/icons/appStore.svg" alt="App Store" width={100} height={40} />
                            </Link>
                            <Link
                                href="https://play.google.com/"
                                target="_blank"
                                className="bg-black rounded-lg pt-[8.38px] pr-[13.01px] pb-[8.37px] pl-[14.38px] font-normal"
                            >
                                <Image src="/icons/googleStore.svg" alt="Google Play" width={100} height={40} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm whitespace-nowrap font-normal">
                            Designed and Developed By KeylanMedia
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">

                        <div className="flex gap-4">
                            <Link href="https://t.me/" target="_blank" className="font-normal">
                                <Image src="/icons/telegram.svg" alt="Telegram" width={25} height={25} />
                            </Link>
                            <Link href="https://www.facebook.com/" target="_blank" className="font-normal">
                                <Image src="/icons/facebook.svg" alt="Facebook" width={25} height={25} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/" target="_blank" className="font-normal">
                                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={25} height={25} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
