import React from "react";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { selectCompleted } from "../features/todoSlice";

function CompletedTodo() {
  const completed = useSelector(selectCompleted);

  return (
    <div className="flex flex-col m-5 h-screen items-center mt-10 pb-5">
      <div className="h-screen w-full border-l border-r border-white rounded-lg lg:w-1/2">
        <h1 className="text-white font-bold text-xl text-center underline">
          COMPLETED TODO
        </h1>
        <>
          {completed.map((item) => (
            <div className="w-11/12 ml-7 mt-5 pb-2 bg-gray-300 rounded-lg">
              <div className="flex pt-1 items-center">
                <p className="pl-2 font-bold text-lg pr-3">{item.title}</p>
                <p className="text-sm text-gray-600">{item.due}</p>
              </div>
              <p className="pl-2">{item.message}</p>
            </div>
          ))}
        </>
      </div>
      <Footer />
    </div>
  );
}

export default CompletedTodo;
