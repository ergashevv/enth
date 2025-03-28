"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

type Store = {
  id: number;
  name: string;
  image: string;
};

export default function PopularStores() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const stores: Store[] = [
    { id: 1, name: "Магазин 1", image: "https://picsum.photos/600/600?random=1" },
    { id: 2, name: "Магазин 2", image: "https://picsum.photos/600/600?random=2" },
    { id: 3, name: "Магазин 3", image: "https://picsum.photos/600/600?random=3" },
    { id: 4, name: "Магазин 4", image: "https://picsum.photos/600/600?random=4" },
    { id: 5, name: "Магазин 5", image: "https://picsum.photos/600/600?random=5" },
    { id: 6, name: "Магазин 6", image: "https://picsum.photos/600/600?random=6" },
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
    <div className="max-w-[1179px] mx-auto px-4 py-14">
      <h2 className="text-[36px] sm:text-[40px] md:text-[44px] lg:text-[50px] font-bold text-[#E52421] mb-10">
        Популярные магазины
      </h2>

      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-[40px] z-10 bg-[#0060AE] text-white rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors lg:-translate-x-[60px]"
          aria-label="Previous stores"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#0060AE]">
                  {store.name}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-[40px] z-10 bg-[#0060AE] text-white rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors lg:translate-x-[60px]"
          aria-label="Next stores"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-[#0060AE] hover:bg-blue-700 text-white text-[14px] sm:text-[16px] font-medium py-3 px-8 rounded-full transition-colors">
          Больше магазинов
        </button>
      </div>
    </div>
  );
}
