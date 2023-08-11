function HomePage() {
  return (
    <div className="h-screen p-4 sm:ml-56">
      <div className="p-4 rounded-lg mt-14">
        <p className="mb-6 text-2xl font-bold" data-cy="home-title">
          Overview
        </p>
        <div className="grid grid-cols-3 gap-4 mb-4" data-cy="overview-details">
          <div className="shadow rounded-lg py-3 px-5 bg-white" data-cy="overview-car-details">
            <div className="flex flex-row justify-between items-center">
              <div>
                <h6 className="text-2xl">Cars</h6>
                <h4 className="text-black text-4xl font-bold text-left">23</h4>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#14B8A6"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-left flex flex-row justify-start items-center">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#14B8A6"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
              <p>
                <span className="text-teal-500 font-bold">7%</span> since last month
              </p>
            </div>
          </div>
          <div className="shadow rounded-lg py-3 px-5 bg-white" data-cy="overview-client-details">
            <div className="flex flex-row justify-between items-center">
              <div>
                <h6 className="text-2xl">Clients</h6>
                <h4 className="text-black text-4xl font-bold text-left">352</h4>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#14B8A6"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-left flex flex-row justify-start items-center">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#14B8A6"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
              <p>
                <span className="text-teal-500 font-bold">33,7%</span> since last month
              </p>
            </div>
          </div>
          <div
            className="shadow rounded-lg py-3 px-5 bg-white"
            data-cy="overview-reservation-details"
          >
            <div className="flex flex-row justify-between items-center">
              <div>
                <h6 className="text-2xl">Reservations</h6>
                <h4 className="text-black text-4xl font-bold text-left">1720</h4>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#14B8A6"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-left flex flex-row justify-start items-center">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#14B8A6"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
              <p>
                <span className="text-teal-500 font-bold">17,2%</span> since last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
