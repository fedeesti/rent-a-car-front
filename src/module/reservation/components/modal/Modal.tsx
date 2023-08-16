interface IProps {
  id: number;
  onClose: () => void;
}

function Modal({ id, onClose }: IProps) {
  return (
    <div className="flex flex-col items-center justify-center" onClick={onClose}>
      <div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 transition-all ease-in-out duration-300"
        data-cy="outside-modal-container"
      >
        <div
          className="fixed top-1/2 left-1/2 translate-x-20-negative translate-y-50-negative min-w-sm"
          data-cy="modal-container"
        >
          <div className=" bg-white rounded-lg shadow">
            <button
              type="button"
              data-cy="modal-btn-close"
              onClick={onClose}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3
                className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                data-cy="modal-information"
              >
                Are you sure you want to delete Reservation #{id}?
              </h3>
              <button
                type="button"
                data-cy="modal-btn-confirm"
                className="text-white bg-red-600 select-none focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 shadow-md shadow-red-600/20 transition-all hover:shadow-lg hover:shadow-red-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                data-cy="modal-btn-cancel"
                className="text-gray-500 bg-white select-none focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 shadow-md shadow-gray-900/20 transition-all hover:shadow-lg hover:shadow-gray-900/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={onClose}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
