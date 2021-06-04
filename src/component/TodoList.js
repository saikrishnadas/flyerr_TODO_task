import React from "react";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { todoActions, selectTodo } from "../features/todoSlice";
import { XCircleIcon } from "@heroicons/react/solid";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  const handleDelete = (id) => {
    dispatch(todoActions.completed_todo(id));
    dispatch(todoActions.delete_todo(id));
  };
  return (
    <div className="flex flex-col m-5 h-screen items-center mt-10 pb-5">
      <div className="h-screen w-full border-l border-r border-white rounded-lg lg:w-1/2">
        <h1 className="text-white font-bold text-xl text-center underline">
          YOUR TODO
        </h1>
        <>
          {todos.map((todo) => (
            <div className="w-11/12 ml-7 mt-5 pb-2 bg-gray-300 rounded-lg">
              <div className="flex pt-1 items-center justify-between">
                <div className="flex pt-1 items-center">
                  <p className="pl-2 font-bold text-lg pr-3">{todo.title}</p>
                  <p className="text-sm text-gray-600">{todo.due}</p>
                </div>
                <div>
                  <XCircleIcon
                    onClick={() => handleDelete(todo.id)}
                    className="bg-gray-400 mr-8 rounded-2xl w-5 h-5 text-red-700"
                  >
                    x
                  </XCircleIcon>
                </div>
              </div>

              <p className="pl-2">{todo.message}</p>
            </div>
          ))}
        </>
      </div>
      <Footer />
    </div>
  );
}

export default TodoList;
