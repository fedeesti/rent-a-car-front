import { Link } from 'react-router-dom';
import rentACarLogo from '../../assets/images/rent-a-car.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-dark-green" data-cy="navbar-container">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              data-cy="open-menu-mobile"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link to="/" className="flex ml-2 md:mr-24">
              <img
                src={rentACarLogo}
                className="h-8 mr-3"
                alt="FlowBite Logo"
                data-cy="navbar-logo"
              />
              <span
                className="self-center text-xl font-semibold sm:text-2xl text-white whitespace-nowrap"
                data-cy="navbar-title"
              >
                Rent a car
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
