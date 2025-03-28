// components/Footer/Footer.tsx
"use client";

import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const { Option } = Select;

    const countries = [
        { code: 'uz', name: 'Узбекистан', flag: 'uzFlag' },
        { code: 'ru', name: 'Россия', flag: 'russianFlag' },
        { code: 'tj', name: 'Таджикистан', flag: 'tjkFlag' },
        { code: 'kz', name: 'Казахстан', flag: 'kzFlag' },
        { code: 'ae', name: 'ОАЭ', flag: 'baaFlag' },
        { code: 'tr', name: 'Турция', flag: 'turkeyFlag' },
        { code: 'cn', name: 'Китай', flag: 'chinaFlag' }
    ];

    return (
        <footer className="bg-[#E6F7FF] text-gray-800 pt-12 pb-8">
            <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* Logo & Payments */}
                <div className="flex flex-col items-center md:items-start">
                    <Image src="/icons/ethno.svg" alt="Ethno Logistics" width={150} height={50} />
                    <p className="text-[14px] mt-2">© Все права защищены</p>
                    <div className="flex flex-wrap gap-2 mt-10 justify-center md:justify-start">
                        {["Visa", "Mastercard", "uzcard", "payme", "click", "humo"].map((name) => (
                            <Image key={name} src={`/icons/${name}.svg`} alt={name} width={40} height={25} />
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-4">
                    <ul className="space-y-2 text-[14px]">
                        <li><Link href="/bestStores">Магазины</Link></li>
                        <li><Link href="/tariffs">Тарифы</Link></li>
                        <li><Link href="/tracking">Отследить посылку</Link></li>
                        <li><Link href="/works">Как это работает</Link></li>
                        <li><Link href="/company">О компании</Link></li>
                        <li><Link href="/business">Для бизнеса</Link></li>
                    </ul>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link href="/warehouses">Адреса складов</Link></li>
                        <li><Link href="/contact">Контакты</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="#">Запрещенные товары</Link></li>
                        <li><Link href="#">Условия использования</Link></li>
                        <li><Link href="#">Политика конфиденциальности</Link></li>
                    </ul>
                </div>

                {/* Country Select */}
                <div className="flex flex-col gap-3 md:ml-8">
                    <h1 className="text-[16px] font-semibold">Сменить страну</h1>
                    <span className="text-[14px] leading-snug">
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
                                    <Image src={`/icons/${country.flag}.svg`} alt={country.code} width={25} height={25} />
                                    <span className="ml-2">{country.name}</span>
                                </div>
                            </Option>
                        ))}
                    </Select>
                </div>
            </div>

            {/* Bottom */}
            <div className="max-w-[1200px] mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center md:justify-start gap-4">
                    <Link
                        href="https://apps.apple.com/"
                        target="_blank"
                        className="bg-black rounded-lg px-4 py-1 sm:pt-3.5 sm:pb-1 md:pt-2 md:pb-1.5"
                    >
                        <Image src="/icons/appStore.svg" alt="App Store" width={100} height={40} />
                    </Link>
                    <Link
                        href="https://play.google.com/"
                        target="_blank"
                        className="bg-black rounded-lg px-4 py-2 sm:pt-3.5 sm:pb-1 pt-2 md:pb-1.5"
                    >
                        <Image src="/icons/googleStore.svg" alt="Google Play" width={100} height={40} />
                    </Link>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <p className="text-sm mb-2">Designed and Developed By KeylanMedia</p>
                    <div className="flex gap-4">
                        <Link href="https://t.me/" target="_blank">
                            <Image src="/icons/telegram.svg" alt="Telegram" width={25} height={25} />
                        </Link>
                        <Link href="https://www.facebook.com/" target="_blank">
                            <Image src="/icons/facebook.svg" alt="Facebook" width={25} height={25} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/" target="_blank">
                            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={25} height={25} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
