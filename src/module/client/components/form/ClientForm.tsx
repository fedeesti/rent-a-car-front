import { ChangeEvent, FormEvent, useState } from 'react';

interface IFormData {
  name: string;
  lastname: string;
  docType: string;
  docNumber: string;
  nationality: string;
  address: string;
  phone: string;
  email: string;
  birthdate: string;
}

const INITIAL_VALUES: IFormData = {
  name: '',
  lastname: '',
  docType: '',
  docNumber: '',
  nationality: '',
  address: '',
  phone: '',
  email: '',
  birthdate: '',
};

function ClientForm() {
  const [clientFormData, setClientFormData] = useState<IFormData>(INITIAL_VALUES);

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
      console.log('The client has been created successfully', clientFormData);
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
            onChange={onChangeInput}
          />
        </div>
      </div>
      <button
        type="submit"
        data-cy="client-form-btn-add"
        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-dark-green rounded-lg  shadow-md shadow-dark-green/20 transition-all hover:shadow-lg hover:shadow-dark-green/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      >
        Add Client
      </button>
    </form>
  );
}

export default ClientForm;
