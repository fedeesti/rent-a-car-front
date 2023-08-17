import { Reservation } from '../entities/reservation';
import { ReservationFormData } from '../types/reservation';

function formDataToReservationEntity({
  car,
  user,
  finishDate,
  paymentMethod,
  pricePerDay,
  startDate,
  statusId,
  totalPrice,
}: ReservationFormData): Reservation {
  return new Reservation(
    Number(car),
    Number(user),
    finishDate,
    paymentMethod,
    Number(pricePerDay),
    startDate,
    statusId,
    Number(totalPrice),
  );
}

export default formDataToReservationEntity;
