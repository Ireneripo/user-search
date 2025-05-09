import React from "react";

const API_URL = "https://api.github.com";

function App() {



  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <>
      <h1 className="text-center text-4xl mt-8 mb-16 font-bold">
        Project 5: User Search
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center my-8"
      >
        <label htmlFor="item-input"></label>
        <input
          id="item-input"
          className="bg-white border-2 border-b-gray-600 rounded-md p-2 m-2 min-w-1/6"
          type="text"
          name="item"
          placeholder="Enter a username or email"
          required
        />

        <button
          type="submit"
          className="py-2.5 px-5 m-2 bg-cyan-700 text-white rounded-md shadow-sm shadow-gray-600 cursor-pointer"
        >
          Search
        </button>
      </form>
    </>
  );
}

export default App;
