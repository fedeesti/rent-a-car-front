import MainLayout from '../../../common/components/layout/MainLayout';
import ReservationCard from '../components/card/ReservationCard';
import { Reservation } from '../types/reservation';

const reservation: Reservation = {
  id: 3,
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
};

function ViewReservation() {
  return (
    <MainLayout>
      <ReservationCard reservation={reservation} />
    </MainLayout>
  );
}

export default ViewReservation;
