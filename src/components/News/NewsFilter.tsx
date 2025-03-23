"use client";
import { Button, Input } from "antd";

export const SearchFilter = () => {
  return (
    <div className="bg-[#E6F7FF] p-6 rounded-2xl mb-8">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          <Button 
            className="!bg-white !h-14 !px-8 !text-base !font-bold !rounded-xl !border-2 !border-[#E6F7FF] hover:!border-[#0060AE]"
          >
            Все новости
          </Button>
          <Button 
            className="!bg-white !h-14 !px-8 !text-base !font-bold !rounded-xl !border-2 !border-[#E6F7FF] hover:!border-[#0060AE]"
          >
            Акции
          </Button>
        </div>
        
        <Input
          placeholder="Поиск..."
          className="!w-[240px] !h-[60px] !ml-auto !rounded-xl !text-base"
          allowClear
        />
      </div>
    </div>
  );
};