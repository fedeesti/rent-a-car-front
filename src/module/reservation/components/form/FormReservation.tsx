import { Form, Formik } from 'formik';
import useFormReservation from '../../hooks/useFormReservation';
import { useParams } from 'react-router-dom';

function FormReservation() {
  const { reservationId } = useParams();
  const { formData, onSubmitForm } = useFormReservation();

  return (
    <Formik initialValues={formData} onSubmit={onSubmitForm}>
      {() => (
        <Form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6" data-cy="reservation-form-container">
            <div data-cy="reservation-from-car">
              <label htmlFor="car" className="block mb-2 text-sm font-medium text-gray-900">
                Car
              </label>
              <select
                id="car"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              >
                <option value="">Select car</option>
                {/* {cars.map((car: Car) => (
                  <option key={car.id} value={car.id}>
                    {car.brand} {car.model} - {car.year}
                  </option>
                ))} */}
              </select>
            </div>
            <div data-cy="reservation-from-client">
              <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900">
                Client
              </label>
              <select
                id="client"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              >
                <option value="">Select client</option>
                {/* {users.map((user: User) => (
                  <option key={user.id} value={user.id}>
                    {user.name} {user.lastname}
                  </option>
                ))} */}
              </select>
            </div>
            <div data-cy="reservation-from-start-date">
              <label
                htmlFor="startDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                From
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="1999"
              />
            </div>
            <div data-cy="reservation-from-finish-date">
              <label
                htmlFor="finishDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Until
              </label>
              <input
                type="date"
                name="finishDate"
                id="finishDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="1999"
              />
            </div>
            <div className="w-full" data-cy="reservation-price-per-day">
              <label
                htmlFor="pricePerDay"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price per Day
              </label>
              <input
                type="text"
                name="pricePerDay"
                id="pricePerDay"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type price per Day"
              />
            </div>
            <div data-cy="reservation-total-price">
              <label
                htmlFor="totalPrice"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total price
              </label>
              <input
                type="text"
                name="totalPrice"
                id="totalPrice"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type total price"
              />
            </div>
            <div data-cy="reservation-payment-method">
              <label
                htmlFor="paymentMethod"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Payment Method
              </label>
              <select
                id="paymentMethod"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              >
                <option value="">Select payment method</option>
                <option value="transaction">Transaction</option>
                <option value="debit card">Debit card</option>
                <option value="credit card">Credit card</option>
              </select>
            </div>
            <div data-cy="reservation-status-container">
              <h3
                className="block mb-2 text-sm font-medium text-gray-900"
                data-cy="reservation-status-title"
              >
                Is paid
              </h3>
              <div className="flex gap-2 pl-2">
                <div data-cy="reservation-status-true-container">
                  <input
                    type="radio"
                    name="statusId"
                    value="true"
                    checked={formData.statusId === 'true'}
                  />
                  <label htmlFor="true" className="pl-0.5">
                    Yes
                  </label>
                </div>
                <div data-cy="reservation-status-false-container">
                  <input
                    type="radio"
                    name="statusId"
                    value="false"
                    checked={formData.statusId === 'false'}
                  />
                  <label htmlFor="false" className="pl-0.5">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          {reservationId ? (
            <div
              className="flex items-center justify-between space-x-4 px-6 pt-8"
              data-cy="reservation-form-btn-container"
            >
              <button
                type="submit"
                className="text-white bg-dark-green select-none font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md shadow-dark-green/20 transition-all hover:shadow-lg hover:shadow-dark-green/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                data-cy="reservation-form-btn-update"
              >
                Update reservation
              </button>
              <button
                type="button"
                className="text-red-600 bg-gray-100 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md shadow-red-600/20 transition-all hover:shadow-lg hover:shadow-red-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-cy="reservation-form-btn-delete"
              >
                <svg
                  className="w-5 h-5 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
          ) : (
            <button
              type="submit"
              data-cy="reservation-form-btn-add"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-dark-green rounded-lg  shadow-md shadow-dark-green/20 transition-all hover:shadow-lg hover:shadow-dark-green/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              Add Reservation
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
}
export default FormReservation;
