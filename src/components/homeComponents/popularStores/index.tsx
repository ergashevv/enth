"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Store = {
    id: number;
    name: string;
    image: string;
}

export default function PopularStores() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsToShow, setItemsToShow] = useState(3)

    const stores: Store[] = [
        { id: 1, name: "Магазин 1", image: "https://picsum.photos/600/600?random=1" },
        { id: 2, name: "Магазин 2", image: "https://picsum.photos/600/600?random=2" },
        { id: 3, name: "Магазин 3", image: "https://picsum.photos/600/600?random=3" },
        { id: 4, name: "Магазин 4", image: "https://picsum.photos/600/600?random=4" },
        { id: 5, name: "Магазин 5", image: "https://picsum.photos/600/600?random=5" },
        { id: 6, name: "Магазин 6", image: "https://picsum.photos/600/600?random=6" },
    ]

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 640) {
                setItemsToShow(1)
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2)
            } else {
                setItemsToShow(3)
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const visibleItems = () => {
        const result = []
        for (let i = 0; i < itemsToShow; i++) {
            const index = (currentIndex + i) % stores.length
            result.push(stores[index])
        }
        return result
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? stores.length - 1 : prevIndex - 1
        )
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stores.length)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl md:text-[50px] font-bold text-red-500 mb-8">
                Популярные магазины
            </h2>

            <div className="relative">
                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-[40px] z-10 bg-[#0060AE] text-white rounded-full p-2 shadow-md hover:bg-blue-700 transition-colors lg:-translate-x-[55px]"
                    aria-label="Previous stores"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Carousel Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {visibleItems().map((store) => (
                        <div
                            key={store.id}
                            className="bg-blue-50 rounded-3xl p-4 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <div className="aspect-square relative rounded-2xl overflow-hidden bg-white mb-4">
                                <Image
                                    src={store.image || "/placeholder.svg"}
                                    alt={`${store.name} image`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                    onError={(e) => {
                                        // Fallback to placeholder if image fails to load
                                        const target = e.target as HTMLImageElement;
                                        target.src = `/placeholder.svg?height=300&width=350&text=${store.name}`;
                                    }}
                                />
                            </div>
                            <h3 className="text-[#0060AE] text-xl font-semibold">{store.name}</h3>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-[40px]  z-10 bg-[#0060AE] text-white rounded-full p-2 shadow-md hover:bg-blue-700 transition-colors lg:translate-x-[55px]"
                    aria-label="Next stores"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>

            {/* More Stores Button */}
            <div className="flex justify-center mt-8">
                <button className="bg-[#0060AE] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
                    Больше магазинов
                </button>
            </div>
        </div>
    )
}
