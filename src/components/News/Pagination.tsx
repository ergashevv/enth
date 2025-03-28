"use client";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const Pagination = () => {
  const currentPage = 1;
  const totalPages = 5;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-2 justify-center mt-12 items-center">
      <Button
        shape="circle"
        icon={<LeftOutlined />}
        className="!w-10 sm:!w-12 !h-10 sm:!h-12 !border-none !bg-transparent !flex !items-center !justify-center"
        style={{ color: "#565252" }}
      />

      {pages.map((page) => (
        <Button
          key={page}
          shape="circle"
          className={`!w-10 sm:!w-12 !h-10 sm:!h-12 !flex !items-center !justify-center !p-0 !font-bold !text-base ${
            page === currentPage
              ? "!bg-[#B3B3B3] !text-white !border-none"
              : "!bg-transparent !text-[#565252] !border !border-[#565252]"
          }`}
        >
          {page}
        </Button>
      ))}

      <Button
        shape="circle"
        icon={<RightOutlined />}
        className="!w-10 sm:!w-12 !h-10 sm:!h-12 !border-none !bg-transparent !flex !items-center !justify-center"
        style={{ color: "#565252" }}
      />
    </div>
  );
};