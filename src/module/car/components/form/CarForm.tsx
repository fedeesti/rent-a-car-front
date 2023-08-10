import { formData } from '../../types/car.types';
import useCarForm from '../../hooks/useCarForm';

interface IProps {
  initialState: formData;
}

function CarForm({ initialState }: IProps) {
  const { carFormData, onChangeInput, onChangeSelect, handleImageChange, onSubmitForm } =
    useCarForm(initialState);

  return (
    <form action="" method="post" onSubmit={onSubmitForm} data-cy="add-car-form-container">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2" data-cy="add-car-brand">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand Name
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            placeholder="Type brand name"
            value={carFormData.brand}
            onChange={onChangeInput}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          />
        </div>
        <div className="w-full" data-cy="add-car-model">
          <label
            htmlFor="model"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Model
          </label>
          <input
            type="text"
            name="model"
            id="model"
            placeholder="Type model"
            value={carFormData.model}
            onChange={onChangeInput}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          />
        </div>
        <div className="w-full" data-cy="add-car-color">
          <label
            htmlFor="color"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Color
          </label>
          <input
            type="text"
            name="color"
            id="color"
            placeholder="Type color"
            value={carFormData.color}
            onChange={onChangeInput}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          />
        </div>
        <div data-cy="add-car-kms">
          <label
            htmlFor="kms"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Kilometres
          </label>
          <input
            type="text"
            name="kms"
            id="kms"
            placeholder="12"
            value={carFormData.kms}
            onChange={onChangeInput}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          />
        </div>
        <div data-cy="add-car-passengers">
          <label
            htmlFor="passengers"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Passengers
          </label>
          <input
            type="text"
            name="passengers"
            id="passengers"
            placeholder="4"
            value={carFormData.passengers}
            onChange={onChangeInput}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          />
        </div>
        <div className="w-full" data-cy="add-car-price">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="$2999"
            value={carFormData.price}
            onChange={onChangeInput}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          />
        </div>
        <div className="w-full" data-cy="add-car-year">
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Year
          </label>
          <input
            type="text"
            name="year"
            id="year"
            placeholder="1999"
            value={carFormData.year}
            onChange={onChangeInput}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          />
        </div>
        <div data-cy="add-car-transmission">
          <label
            htmlFor="transmission"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Transmission
          </label>
          <select
            id="transmission"
            name="transmission"
            value={carFormData.transmission}
            onChange={onChangeSelect}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          >
            <option value="">Select Transmission</option>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>
        </div>
        <div data-cy="add-car-air-conditioner">
          <h3 className="block mb-2 text-sm font-medium text-gray-900">Air Conditioner</h3>
          <div className="flex gap-2 pl-2" data-cy="add-air-conditioner-input-container">
            <div>
              <input
                type="radio"
                name="airConditioner"
                value="true"
                checked={carFormData.airConditioner === 'true'}
                onChange={onChangeInput}
                data-cy="add-air-conditioner-input-true"
              />
              <label htmlFor="true" className="pl-0.5">
                Yes
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="airConditioner"
                value="false"
                checked={carFormData.airConditioner === 'false'}
                onChange={onChangeInput}
                data-cy="add-air-conditioner-input-false"
              />
              <label htmlFor="false" className="pl-0.5">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2" data-cy="add-car-update-logo">
          <label className="block mb-2 text-sm font-medium text-gray-800" htmlFor="crestUrl">
            Upload logo
          </label>
          <input
            className="block w-full text-sm text-gray-800 border border-gray-100 rounded-lg cursor-pointer focus:outline-none file:bg-dark-green file:py-1 file:cursor-pointer file:text-white hover:file:bg-light-green"
            id="crestUrl"
            type="file"
            name="crestUrl"
            accept=".png, .jpg, .jpeg, .svg"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-dark-green rounded-lg hover:bg-light-green"
        data-cy="add-car-btn-submit"
      >
        Add Car
      </button>
    </form>
  );
}

export default CarForm;
