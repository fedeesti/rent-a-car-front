import MainLayout from '../../../common/components/layout/MainLayout';
import Header from '../components/table/Header';
import ReservationTable from '../components/table/ReservationTable';
import { Reservation } from '../types/reservation';

const reservations: Reservation[] = [
  {
    id: 1,
    startDate: new Date('2023-08-14'),
    finishDate: new Date('2023-08-20'),
    pricePerDay: 10000,
    totalPrice: 60000,
    paymentMethod: 'debit card',
    statusId: true,
    car: {
      id: 1,
      brand: 'Peugeot',
      model: '207',
      color: 'red',
      img: '1691603653156.jpg',
      kms: 50000,
      passengers: 5,
      price: 10000,
      year: 2017,
      transmission: 'manual',
      airConditioner: true,
    },
    client: {
      id: 1,
      name: 'Javier',
      lastname: 'Milei',
      docType: 'dni',
      docNumber: '12345678',
      nationality: 'Argentina',
      address: 'Av. Libertador 1234',
      phone: '1122334455',
      email: 'javi@gmail.com',
      birthdate: '1960-10-01',
    },
  },
  {
    id: 2,
    startDate: new Date('2023-08-14'),
    finishDate: new Date('2023-08-20'),
    pricePerDay: 10000,
    totalPrice: 60000,
    paymentMethod: 'debit card',
    statusId: false,
    car: {
      id: 1,
      brand: 'Peugeot',
      model: '207',
      color: 'red',
      img: '1691603653156.jpg',
      kms: 50000,
      passengers: 5,
      price: 10000,
      year: 2017,
      transmission: 'manual',
      airConditioner: true,
    },
    client: {
      id: 1,
      name: 'Javier',
      lastname: 'Milei',
      docType: 'dni',
      docNumber: '12345678',
      nationality: 'Argentina',
      address: 'Av. Libertador 1234',
      phone: '1122334455',
      email: 'javi@gmail.com',
      birthdate: '1960-10-01',
    },
  },
  {
    id: 3,
    startDate: new Date('2023-08-14'),
    finishDate: new Date('2023-08-20'),
    pricePerDay: 10000,
    totalPrice: 60000,
    paymentMethod: 'debit card',
    statusId: true,
    car: {
      id: 1,
      brand: 'Peugeot',
      model: '207',
      color: 'red',
      img: '1691603653156.jpg',
      kms: 50000,
      passengers: 5,
      price: 10000,
      year: 2017,
      transmission: 'manual',
      airConditioner: true,
    },
    client: {
      id: 1,
      name: 'Javier',
      lastname: 'Milei',
      docType: 'dni',
      docNumber: '12345678',
      nationality: 'Argentina',
      address: 'Av. Libertador 1234',
      phone: '1122334455',
      email: 'javi@gmail.com',
      birthdate: '1960-10-01',
    },
  },
];

function ReservationList(): JSX.Element {
  return (
    <MainLayout>
      <div className="mx-auto max-w-screen-xl lg:px-12 p-4">
        <div
          className="bg-white relative shadow-md rounded-lg overflow-hidden"
          data-cy="reservation-list-container"
        >
          <Header />
          <ReservationTable reservations={reservations} />
        </div>
      </div>
    </MainLayout>
  );
}

export default ReservationList;
