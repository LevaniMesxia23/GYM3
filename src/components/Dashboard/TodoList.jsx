import React from "react";

function TodoList() {
  return (
    <div className="bg-[#323232] w-full px-7 rounded-2xl py-8">

        <div className=" flex justify-between items-center">
          <h1 className="text-white text-[1.5rem] mb-3">To Do List</h1>
          <div className=" flex gap-4">
            <div className="bg-[#D7FD44] w-14 h-14 rounded-full flex items-center justify-center">
              <img className="w-4 h-4 " src="/plus.png" alt="" />
            </div>
            <div className="bg-[#D7FD44] w-14 h-14 rounded-full flex items-center justify-center">
              <img className="w-4 h-4 " src="/pen.png" alt="" />
            </div>
          </div>
        </div>

    </div>
  );
}

export default TodoList;
