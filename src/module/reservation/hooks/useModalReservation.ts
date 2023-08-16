import { useState } from 'react';

function useModalReservation() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return { showModal, openModal, closeModal };
}

export default useModalReservation;
