import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
function ListItem({ title, description, date, status, onClick }) {
  return (
    <div className='flex items-start md:items-center justify-between gap-2 md:flex-row flex-col px-2 py-3 bg-white rounded'>
      <div>
        <h1 className='text-sm font-semibold space-y-1'>{title}</h1>
        <p className='text-xs text-gray-600'>{description}</p>
        <span className='text-xs text-gray-500'>{date}</span>
      </div>
      <div>
        <button
          onClick={onClick}
          className='flex items-center gap-2 border text-xs px-2 py-1 md:border-none hover:bg-gray-100 rounded'
        >
          {status === "doing" ? <ArrowLeftIcon /> : ""}
          Transfer to {status === "todo" ? "Doing" : "Todo"}
          {status === "todo" ? <ArrowRightIcon /> : ""}
        </button>
      </div>
    </div>
  );
}

export default ListItem;
