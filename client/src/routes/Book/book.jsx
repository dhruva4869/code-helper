import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fuse from 'fuse.js';


function Book() {
  const baseUrl = "http://localhost:8000/api/books";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fuse = new Fuse(data, { keys: ['title'], includeScore: true });


  useEffect(() => {

    // const filteredResults = data.filter((item) =>
    //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    if (searchTerm !== '') {
      const results = fuse.search(searchTerm);
      setSearchResults(results.map((result) => result.item));
    } 
    // setSearchResults(filteredResults);


    const fetchData = async () => {
      try {

        let url = baseUrl;
        if (selectedCategory) {
          url += `?category=${selectedCategory}`
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Error fetching data. Please try again later.");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedCategory, searchTerm]);




  return (
    <div>
      <main className='bg-white px-10 dark:bg-slate-900 py-10'>

        <section className="min-h-screen ">
          <div className="bg-slate-900"> <br />
          <h1 className="text-white text-xl font-serif text-center my-10">Search Engine</h1>


          <form>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search"
                class="block w-full p-4 my-3 ps-10 text-sm text-gray-900 
                border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 
                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500 h-14" placeholder="Search Problem.."
                onChange={(e) => setSearchTerm(e.target.value)} required />

              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>


          {searchTerm !== '' && (
            <div className="max-h-32 overflow-hidden">
              <ul >
                {searchResults.map((item) => (
                  <li key={item._id} className="p-2 bg-gray-800 rounded-xl m-1 text-slate-300">
                    <Link to={`../problems/${item.slug}`}>
                      <h4>{item.title}</h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}




          <br /><br />
            <div className="carousel w-full h-96 my-7 relative">
              <div id="item1" className='carousel-item w-full relative '>
                <img className='w-full h-full object-cover opacity-70 rounded-xl drop-shadow-xl' src="https://wallpapercave.com/wp/wp4664584.jpg" alt="Background Image" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-10 py-10">
                  <h2 className="text-5xl py-2 text-violet-50 font-medium md:text-6xl font-serif animate-pulse"> Top Questions ❓</h2>
                  <h3 className="text-2xl py-2 text-pink-200 font-mono">A collection of the best Questions, Topic wise 📑</h3>
                </div>
              </div>


              <div id="item2" className='carousel-item w-full relative'>
                <img className='w-full h-full object-cover opacity-70 rounded-xl drop-shadow-xl' src="https://wallpapercave.com/wp/wp12630136.jpg" alt="Background Image" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-10 py-10">
                  <h2 className="text-5xl py-2 text-violet-50 font-medium md:text-6xl font-serif animate-pulse"> Recommender System 💹</h2>
                  <h3 className="text-2xl py-2 text-white font-mono">Consisting of a highly flexible search engine 📑</h3>
                  <p className="text-md py-5 leading-8  text-red-50 max-w-xl mx-auto md:text-xl">
                    Stop wasting time finding the right material 🧐, because here, you have it all<br></br>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full py-3 gap-2">
              <a href="#item1" className="btn btn-xs">1</a>
              <a href="#item2" className="btn btn-xs">2</a>
            </div>

          </div>
          <br />

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 text-gray-100">Category</div>
            <select tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-900 rounded-box w-52" onChange={(e) => setSelectedCategory(e.target.value)}>
              {/* <select > */}
              <option value="">All (click once more)</option>
              <option value="linked-list">Linked-List</option>
              <option value="hash">Hash</option>
              <option value="bfs">BFS</option>
              <option value="dfs">DFS</option>
              <option value="dp">DP</option>
              <option value="binary-search">Binary Search</option>
              <option value="sliding-window">Sliding Window</option>
              {/* </select> */}
            </select>
          </div>


          <br /><br />

          <Link to="/addproblem" className="text-2xl text-red-100 font-serif bg-zinc-700 rounded-md p-2"> +Add</Link>

          <br /><br />
          <div className="bg-gradient-to-r from-gray-700 via-slate-800 to-gray-700 rounded-xl p-4 m-4">
            <span className="text-lg font-serif text-slate-100 text-center justify-center items-center">This is the Esteemed collection of coding examples and problems, over the entire internet, topic wise, handpicked for your faster and easier preparation</span>
          </div>
          <br /> <br /> <br />
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ul className="books">
              {data.map((item) => (
                <li key={item._id}>
                  <Link to={`/problems/${item.slug}`}>
                    <img
                      src={`http://localhost:8000/uploads/${item.thumbnail}`}
                      alt={item.title}
                    />
                    <h3 className="text-md text-white">{item.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          )}

        </section>




      </main>


      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}




    </div>
  )
}

export default Book