import React from "react";
import { RocketIcon } from "@radix-ui/react-icons";
function EmptyState() {
  return (
    <div className='px-3 py-2 flex items-center justify-center text-gray-400 gap-3'>
      <RocketIcon />
      <span className='text-sm font-semibold '>Empty tasks list</span>
    </div>
  );
}

export default EmptyState;
