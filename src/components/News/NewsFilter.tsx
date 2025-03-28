"use client";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

export const SearchFilter = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="bg-[#E6F7FF] p-4 sm:p-6 rounded-[24px] mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex gap-2 flex-wrap">
          <Button 
            onClick={() => setActiveTab("all")}
            className={`!h-[48px] sm:!h-[56px] !px-6 sm:!px-8 !text-sm sm:!text-base !font-bold font-montserrat !rounded-[16px] !border-2 transition-all duration-200
              ${activeTab === "all" 
                ? '!border-[#0060AE] !text-[#0060AE]' 
                : '!border-transparent !text-[#1D1D1B]'}`}
          >
            Все новости
          </Button>
          <Button 
            onClick={() => setActiveTab("sale")}
            className={`!h-[48px] sm:!h-[56px] !px-6 sm:!px-8 !text-sm sm:!text-base !font-bold font-montserrat !rounded-[16px] !border-2 transition-all duration-200
              ${activeTab === "sale" 
                ? '!border-[#0060AE] !text-[#0060AE]' 
                : '!border-transparent !text-[#1D1D1B]'}`}
          >
            Акции
          </Button>
        </div>

        <Input
          placeholder="Поиск..."
          allowClear
          prefix={<SearchOutlined style={{ color: '#565252' }} />}
          className="!w-full md:!w-[260px] !h-[48px] sm:!h-[60px] !rounded-[16px] !text-base font-montserrat !px-4 !border-none"
        />
      </div>
    </div>
  );
};
