"use client";
import { Button } from "antd";

export const Pagination = () => {
  return (
    <div className="flex gap-2 justify-center mt-12">
      {[1, 2, 3].map((page) => (
        <Button
          key={page}
          className={`!w-12 !h-12 !rounded-full !flex !items-center !justify-center ${
            page === 1 
              ? "!bg-[#56525280] !border-none" 
              : "!bg-transparent !border !border-[#565252]"
          }`}
          style={{
            color: page === 1 ? "#FFFFFF" : "#565252",
            fontSize: "18px",
            fontWeight: 700
          }}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};