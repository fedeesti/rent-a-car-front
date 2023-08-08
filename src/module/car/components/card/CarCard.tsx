import { Link } from 'react-router-dom';
import { Car } from '../../assets/types/car.types';

interface PropTypes {
  car: Car;
}

function CarCard({ car }: PropTypes): JSX.Element {
  return (
    <div
      className="relative flex m-auto w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      data-cy="car-card-container"
    >
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={car.img} alt="car logo" data-cy="car-card-logo" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h5
            className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"
            data-cy="car-card-title"
          >
            {car.brand} {car.model}
          </h5>
        </div>

        <div
          className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow"
          data-cy="car-card-details-container"
        >
          <div className="flex items-start justify-between" data-cy="car-card-year-container">
            <p className="font-bold" data-cy="car-card-year-title">
              Year:
            </p>
            <p className="mr-2" data-cy="car-card-year-description">
              {car.year}
            </p>
          </div>
          <div
            className="flex items-center justify-between pt-4"
            data-cy="car-card-color-container"
          >
            <p className="font-bold" data-cy="car-card-color-title">
              Color:
            </p>
            <p className="mr-2" data-cy="car-card-color-description">
              {car.color}
            </p>
          </div>
          <div
            className="flex items-center justify-between pt-4"
            data-cy="car-card-price-container"
          >
            <p className="font-bold" data-cy="car-card-price-title">
              Price per day:
            </p>
            <p className="mr-2" data-cy="car-card-price-description">
              {car.price}
            </p>
          </div>
          <div className="flex items-center justify-between pt-4" data-cy="car-card-kms-container">
            <p className="font-bold" data-cy="car-card-kms-title">
              Kilometres:
            </p>
            <p className="mr-2" data-cy="car-card-kms-description">
              {car.kms}
            </p>
          </div>
          <div
            className="flex items-center justify-between pt-4"
            data-cy="car-card-passengers-container"
          >
            <p className="font-bold" data-cy="car-card-passengers-title">
              Passengers:
            </p>
            <p className="mr-2" data-cy="car-card-passengers-description">
              {car.passengers}
            </p>
          </div>
          <div
            className="flex items-center justify-between pt-4"
            data-cy="car-card-transmission-container"
          >
            <p className="font-bold" data-cy="car-card-transmission-title">
              Transmision:
            </p>
            <p className="mr-2" data-cy="car-card-transmission-description">
              {car.transmission}
            </p>
          </div>
          <div
            className="flex items-center justify-between pt-4"
            data-cy="car-card-air-conditioner-container"
          >
            <p className="font-bold" data-cy="car-card-air-conditioner-title">
              Air conditioner:
            </p>
            <p className="mr-2" data-cy="car-card-air-conditioner-description">
              {car.airConditioner ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-around space-x-4 p-6 pt-3"
        data-cy="car-card-btn-container"
      >
        <button
          type="submit"
          className="text-white bg-dark-green select-none font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md shadow-dark-green/20 transition-all hover:shadow-lg hover:shadow-dark-green/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          data-cy="car-card-btn-update"
        >
          <Link to={`/car/${car.id}/update`}>Update car</Link>
        </button>
        <button
          type="button"
          className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md shadow-red-600/20 transition-all hover:shadow-lg hover:shadow-red-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-cy="car-card-btn-delete"
        >
          <svg
            className="w-5 h-5 mr-1 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <Link to={`/car/${car.id}/delete`}>Delete</Link>
        </button>
      </div>
    </div>
  );
}

export default CarCard;
