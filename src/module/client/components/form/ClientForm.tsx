import { ChangeEvent, FormEvent, useState } from 'react';
import { Client } from '../../types/client';

interface IProps {
  initialState: Client;
}

function ClientForm({ initialState }: IProps) {
  const [clientFormData, setClientFormData] = useState<Client>(initialState);
  const { id } = initialState;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setClientFormData({ ...clientFormData, [name]: value });
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setClientFormData({ ...clientFormData, [name]: value });
  };

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let status: string;

      status = id ? 'updated' : 'created';

      console.log(`The client has been ${status} successfully`, clientFormData);
    } catch (error) {
      console.log('Error submitting the form: ', error);
    }
  };

  return (
    <form action="" method="post" onSubmit={onSubmitForm}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6" data-cy="client-form-container">
        <div className="sm:col-span-2" data-cy="client-form-first-name">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type name"
            value={clientFormData.name}
            onChange={onChangeInput}
          />
        </div>
        <div className="w-full" data-cy="client-form-last-name">
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Type last name"
            value={clientFormData.lastname}
            onChange={onChangeInput}
          />
        </div>
        <div data-cy="client-form-nationality">
          <label
            htmlFor="nationality"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nationality
          </label>
          <select
            id="nationality"
            name="nationality"
            value={clientFormData.nationality}
            onChange={onChangeSelect}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          >
            <option value="">Select Nationality</option>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Colombia">Colombia</option>
            <option value="Chile">Chile</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
          </select>
        </div>
        <div data-cy="client-form-doc-type">
          <label
            htmlFor="docType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Document Type
          </label>
          <select
            id="docType"
            name="docType"
            value={clientFormData.docType}
            onChange={onChangeSelect}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          >
            <option value="">Select Document Type</option>
            <option value="dni">DNI</option>
          </select>
        </div>
        <div className="w-full" data-cy="client-form-doc-number">
          <label
            htmlFor="docNumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Document Number
          </label>
          <input
            type="text"
            name="docNumber"
            id="docNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Type Document Number"
            value={clientFormData.docNumber}
            onChange={onChangeInput}
          />
        </div>
        <div data-cy="client-form-address">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Type address"
            value={clientFormData.address}
            onChange={onChangeInput}
          />
        </div>
        <div data-cy="client-form-phone">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Type phone"
            value={clientFormData.phone}
            onChange={onChangeInput}
          />
        </div>
        <div className="w-full" data-cy="client-form-email">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="example@email.com"
            value={clientFormData.email}
            onChange={onChangeInput}
          />
        </div>
        <div className="w-full" data-cy="client-form-birthdate">
          <label
            htmlFor="birthdate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Birthdate
          </label>
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            value={clientFormData.birthdate.split('/').reverse().join('-')}
            onChange={onChangeInput}
          />
        </div>
      </div>
      {id ? (
        <div
          className="flex items-center justify-between space-x-4 px-6 pt-8"
          data-cy="client-form-btn-container"
        >
          <button
            type="submit"
            className="text-white bg-dark-green select-none font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md shadow-dark-green/20 transition-all hover:shadow-lg hover:shadow-dark-green/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            data-cy="client-form-btn-update"
          >
            Update client
          </button>
          <button
            type="button"
            className="text-red-600 bg-gray-100 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md shadow-red-600/20 transition-all hover:shadow-lg hover:shadow-red-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-cy="client-form-btn-delete"
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
            Delete
          </button>
        </div>
      ) : (
        <button
          type="submit"
          data-cy="client-form-btn-add"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-dark-green rounded-lg  shadow-md shadow-dark-green/20 transition-all hover:shadow-lg hover:shadow-dark-green/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        >
          Add Client
        </button>
      )}
    </form>
  );
}

export default ClientForm;
