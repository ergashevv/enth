"use client";

import { PlusCircle, MinusCircle } from "lucide-react";
import { useState } from "react";

type InstructionStepProps = {
    number: number;
    text: string;
    details?: string;
    buttonText?: string;
};

const InstructionStep: React.FC<InstructionStepProps> = ({ number, text, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#E6F7FF] rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-blue-600">{number}</span>
                    <span className="font-medium">{text}</span>
                </div>
                {isOpen ? (
                    <MinusCircle className="h-6 w-6 text-red-500" />
                ) : (
                    <PlusCircle className="h-6 w-6 text-blue-500" />
                )}
            </div>

            {isOpen && details && (
                <div className="mt-4 p-4 bg-[#E6F7FF] rounded-lg">
                    <p className="text-sm text-gray-700">{details}</p>
                    <button className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded-full  transition ml-[60%]">
                        Выбрать магазин
                    </button>
                </div>
            )}
        </div>
    );
};

export default InstructionStep;