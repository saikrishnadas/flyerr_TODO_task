import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../features/todoSlice";

function UserForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();
  const [due, setDue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      todoActions.add_todo({
        title: title,
        message: message,
        due: due,
        id: Math.ceil(Math.random() * 100),
      })
    );
    setTitle("");
    setMessage("");
    setDue("");
  };
  // id: Math.ceil(Math.random() * 100),
  return (
    <div className="flex m-5 h-screen justify-center mt-10">
      <form onSubmit={handleSubmit}>
        <div className="border rounded-lg w-96 shadow-lg">
          <div className="pl-2 pt-4 mb-3 mr-2">
            <p className="mb-1 text-white font-semibold">Title</p>
            <input
              className="border rounded w-full focus:outline-none"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="pl-2 mb-3 pb-4 mr-2">
            <p className="mb-1 text-white font-semibold">Message</p>
            <input
              className="border rounded w-full pb-20 focus:outline-none "
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="pl-2 mb-3 mr-2">
            <p className="mb-1 text-white font-semibold ">Due Date</p>
            <input
              className="border rounded w-full focus:outline-none"
              type="date"
              value={due}
              onChange={(e) => setDue(e.target.value)}
            />
          </div>

          <div className="flex justify-center w-full">
            <button className="flex justify-center bg-black text-white rounded w-40 mt-5 mb-10 h-10 items-center font-semibold shadow-lg hover:bg-gray-800">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
