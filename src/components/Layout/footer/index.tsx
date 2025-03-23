'use client';

import { Select } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const { Option } = Select;
    return (
        <footer className="bg-[#E6F7FF] text-gray-800 py-8 border-t border-blue-300">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <Image src="/icons/ethno.svg" alt="Ethno Logistics" width={150} height={50} />
                    <p className="text-sm mt-2">© Все права защищены</p>
                    <div className="flex space-x-2 mt-[100px]">
                        <Image src="/icons/Visa.svg" alt="Visa" width={40} height={25} />
                        <Image src="/icons/Mastercard.svg" alt="MasterCard" width={40} height={25} />
                        <Image src="/icons/uzcard.svg" alt="PayPal" width={40} height={25} />
                        <Image src="/icons/payme.svg" alt="PayPal" width={40} height={25} />
                        <Image src="/icons/click.svg" alt="PayPal" width={40} height={25} />
                        <Image src="/icons/humo.svg" alt="PayPal" width={40} height={25} />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <ul className="space-y-2 text-[14px]">
                            <li><Link href="/bestStores">Магазины</Link></li>
                            <li><Link href="/tariffs">Тарифы</Link></li>
                            <li><Link href="/tracking">Отследить посылку</Link></li>
                            <li><Link href="/works">Как это работает</Link></li>
                            <li><Link href="/company">О компании</Link></li>
                            <li><Link href="#">Для бизнеса</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2 text-[14px]">
                            <li><Link href="#">Адреса складов</Link></li>
                            <li><Link href="/contact">Контакты</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="#">Запрещенные товары</Link></li>
                            <li><Link href="#">Условия использования</Link></li>
                            <li><Link href="#">Политика конфиденциальности</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-left mr-10 gap-3 md:ml-[50px] ">
                    <h1 className='text-[16px] items-left'>Сменить страну</h1>
                    <span className='text-[14px]'>Вы можете изменить страну и изучить содержимое сайта для другого региона</span>
                    <div className="">
                        <Select defaultValue="uz" className="w-full" style={{ width: 180, height: 45, }}>
                            <Option value="uz" key="uz">
                                <div className="flex items-center">
                                    <Image src="/icons/uzFlag.svg" alt="uz" width={25} height={25} />
                                    <span className="ml-2 ">Узбекистан</span>
                                </div>
                            </Option>
                            <Option value="ru" key="ru">
                                <div className="flex items-center">
                                    <Image src="/icons/russianFlag.svg" alt="ru" width={25} height={25} />
                                    <span className="ml-2">Россия</span>
                                </div>
                            </Option>
                        </Select>
                    </div>

                </div>
                <div className="flex space-x-2 mt-2 items-center">
                    <Link href="https://apps.apple.com/uz/app/globe-3d-planet-earth-guide/id1501301782?mt=12" target="_blank" className='bg-[black] py-1 px-4 rounded-lg'><Image src="/icons/appStore.svg" alt="App Store" width={100} height={40} /></Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.jmsys.earth3d&pcampaignid=web_share"
                        target="_blank" className='bg-[black] py-[7px] px-4 rounded-lg'><Image src="/icons/googleStore.svg" alt="Google Play" width={100} height={40} /></Link>
                </div>
                <p className="text-sm mt-4">Designed and Developed By KeylanMedia</p>
                <div className="mt-4 flex space-x-4 justify-end mr-16">
                    <Link href="https://t.me/" target='_blank'><Image src="/icons/telegram.svg" alt="Telegram" width={25} height={25} /></Link>
                    <Link href="https://www.facebook.com/" target='_blank'><Image src="/icons/facebook.svg" alt="Facebook" width={25} height={25} /></Link>
                    <Link href="https://www.linkedin.com/in/" target='_blank'><Image src="/icons/linkedin.svg" alt="LinkedIn" width={25} height={25} /></Link>
                </div>
            </div>
        </footer>
    );
}
