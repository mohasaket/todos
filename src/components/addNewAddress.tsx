import axios from "axios";
import React, { ChangeEvent, useState } from "react";

const AddNewAddress = () => {
  const [states, setState] = useState({ name: "", city: "", error: undefined });
  const handelAdd = () => {
    axios
      .post("http://localhost:4200/adsasd", states)
      .then((s) => {
        setState({ name: "", city: "", error: undefined });
      })
      .catch((e) => {
        setState({
          ...states,
          error: e,
        });
      });
  };

  const handelOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...states,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1>Add New Address</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder=""
              value={states.name}
              onChange={handelOnChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              city
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              placeholder=""
              name="city"
              value={states.city}
              onChange={handelOnChange}
            />
          </div>
          <div className="flex items-center justify-between">
            {states.error ? "error" : ""}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handelAdd}
            >
              add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewAddress;
