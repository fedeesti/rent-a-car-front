import { Link, NavLink } from 'react-router-dom';
import rentACarLogo from '../../assets/images/rent-a-car.png';

export default function Navbar() {
  return (
    <nav
      className="border-gray-200 bg-dark-green dark:bg-gray-800 dark:border-gray-700"
      data-cy="navbar-container"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src={rentACarLogo}
            className="h-8 mr-3"
            alt="Rent a car Logo"
            data-cy="navbar-logo"
          />
          <span
            className="self-center text-2xl font-semibold whitespace-nowrap text-light-green dark:text-white"
            data-cy="navbar-title"
          >
            Rent a car
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-light-green rounded-lg md:hidden"
          data-cy="open-menu-mobile"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" data-cy="menu-container">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }: { isActive: boolean }): string => {
                  return `block py-2 pl-3 pr-4 hover:text-white text-light-green rounded md:p-0
                  ${isActive && 'text-white'}`;
                }}
                data-cy="nav-link-home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className={({ isActive }: { isActive: boolean }): string => {
                  return `block py-2 pl-3 pr-4 hover:text-white text-light-green rounded md:p-0
                  ${isActive && 'text-white'}`;
                }}
                data-cy="nav-link-cars"
              >
                Cars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className={({ isActive }: { isActive: boolean }): string => {
                  return `block py-2 pl-3 pr-4 hover:text-white text-light-green rounded md:p-0
                  ${isActive && 'text-white'}`;
                }}
                data-cy="nav-link-clients"
              >
                Clients
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className={({ isActive }: { isActive: boolean }): string => {
                  return `block py-2 pl-3 pr-4 hover:text-white text-light-green rounded md:p-0
                  ${isActive && 'text-white'}`;
                }}
                data-cy="nav-link-reservations"
              >
                Reservations
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
