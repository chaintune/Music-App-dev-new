<div className="px-10 mr-[22vw] py-[2vw]">
            <div className="relative overflow-x-auto shadow-md sm:rounded-2xl">
                <div
                    id="search-action-section"
                    className="flex flex-wrap items-center justify-between pb-4 bg-white dark:bg-gray-900 py-4 px-2 gap-4"
                >
                    <div className="flex-grow">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="table-search-users"
                                className="block p-2 pl-8 pr-3 text-sm text-gray-900 rounded-lg w-full bg-gray-50"
                                placeholder="Search"
                            // value={searchQuery}
                            // onChange={handleSearchInputChange}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mr-4 ">
                        <button
                            id="dropdownActionButton"
                            data-dropdown-toggle="dropdownAction"
                            className="inline-flex gap-8 rounded-full py-3 px-4 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                        >
                            <span className="sr-only">Action button</span>
                            Sort by: Most Recent
                            <svg
                                className="w-3 h-3 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        <div
                            id="dropdownAction"
                            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                        >
                            <ul
                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownActionButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Reward
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Promote
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Activate account
                                    </a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Delete User
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <table
                    // ref={tableRef as React.RefObject<HTMLTableElement>}
                    className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center pl-[0vw]">#</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Album
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date Added
                            </th>
                            <th scope="col" className="px-0 py-3">
                                Duration
                            </th>
                        </tr>
                    </thead>
                    {/* {songs.map(project => ( */}
                    <tbody
                    // key={song._id}
                    >
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-600">
                            <td className="px-4">
                                {/* {song._id} */}
                                01
                            </td>
                            <td
                                scope="row"
                                className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                <img
                                    className="w-[3.3vw] h-[3.3vw] rounded-lg"
                                    // src={song.image}
                                    src="https://practicaltyping.com/wp-content/uploads/2022/01/ayanokoji.jpg"
                                    alt="Jese image"
                                />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">
                                        {/* {song.title} */} <p>Feel It Still </p>
                                        {/* {song.singer}*/}<p className="opacity-60">Portugal. The Man</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-4 overflow-auto whitespace-normal max-w-xs">
                                {/* {song.album} */} Woodstock
                            </td>
                            <td className="px-4 py-4 cursor-pointer overflow-auto whitespace-normal max-w-xs">
                                <div className="flex items-center">
                                    {/* {song.date_added} */}  2 days ago
                                </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                2:43
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>