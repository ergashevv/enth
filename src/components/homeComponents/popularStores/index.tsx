"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type Store = {
    id: number;
    name: string;
    image: string;
};

export default function PopularStores() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    const stores: Store[] = [
        { id: 1, name: "Магазин 1", image: "/icons/store.png" },
        { id: 2, name: "Магазин 2", image: "/icons/store.png" },
        { id: 3, name: "Магазин 3", image: "/icons/store.png" },
        { id: 4, name: "Магазин 4", image: "/icons/store.png" },
        { id: 5, name: "Магазин 5", image: "/icons/store.png" },
        { id: 6, name: "Магазин 6", image: "/icons/store.png" },
      ];
      

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 640) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const visibleItems = () => {
        const result = [];
        for (let i = 0; i < itemsToShow; i++) {
            const index = (currentIndex + i) % stores.length;
            result.push(stores[index]);
        }
        return result;
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? stores.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stores.length);
    };

    return (
        <section className="w-full bg-white xl:py-14">
            <div className="mx-auto xl:px-4 pt-5">
                <div className="container">
                    <h2 className="  text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold text-[#E52421] mb-[50px] leading-tight">
                        Популярные магазины
                    </h2>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handlePrev}
                                className="shrink-0 bg-[#0060AE] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors"
                                aria-label="Previous stores"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                                <AnimatePresence mode="wait">
                                    {visibleItems().map((store) => (
                                        <motion.div
                                            key={store.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4 }}
                                            className="bg-[#E6F7FF] rounded-[30px] px-4 pb-5 pt-4 overflow-hidden transition-transform hover:scale-[1.01] shadow-sm hover:shadow-md"
                                        >
                                            <div className="aspect-square relative rounded-2xl overflow-hidden bg-white mb-3">
                                                <Image
                                                    src={store.image || "/placeholder.svg"}
                                                    alt={store.name}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#0060AE] font-montserrat">
                                                {store.name}
                                            </h3>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <button
                                onClick={handleNext}
                                className="shrink-0 bg-[#0060AE] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors"
                                aria-label="Next stores"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => router.push("/bestStores")}
                        className="bg-[#0060AE] hover:bg-blue-700 text-white text-[14px] sm:text-[16px] font-medium py-3 px-8 rounded-full transition-colors font-montserrat"
                    >
                        Больше магазинов
                    </button>
                </div>
            </div>
        </section>
    );
}
