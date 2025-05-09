import React from "react";

const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();

    return json.items || [];
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
}

function App() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const queryResults = await fetchResults(query);
    setResults(queryResults);

    setQuery("");
  }

  function handleInputChange(event) {
    const newQuery = event.target.value;
    setQuery(newQuery);
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
          value={query}
          onChange={handleInputChange}
          required
        />

        <button
          type="submit"
          className="py-2.5 px-5 m-2 bg-cyan-700 text-white rounded-md shadow-sm shadow-gray-600 cursor-pointer"
        >
          Search
        </button>
      </form>
      <h2 className="text-center text-3xl font-bold pb-3">Results</h2>
      <div className="flex flex-col items-center">
        {results.map((result) => (
          <div
            key={result.id}
            className="bg-white m-2 p-4 border w-sm rounded-lg shadow-black shadow-md"
          >
            <img
              src={result.avatar_url}
              alt="Profile"
              width="80"
              height="80"
              className="rounded-full m-auto w-20 h-20"
            />
            <p className="text-lg text-center">Username: {result.login}</p>
            {results.name && <p>Name: {result.name}</p>}
            <a
              href={result.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 hover:underline block text-center"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
