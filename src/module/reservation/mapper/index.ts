import { Reservation } from '../entities/reservation';
import { ReservationFormData, Reservation as IReservation } from '../types/reservation';

export function ReservationentityToFromData(reservation: IReservation): ReservationFormData {
  return {
    car: reservation.car.id,
    user: reservation.user.id,
    finishDate: reservation.finishDate,
    paymentMethod: reservation.paymentMethod,
    pricePerDay: reservation.pricePerDay.toString(),
    startDate: reservation.startDate,
    statusId: reservation.statusId.toString(),
    totalPrice: reservation.totalPrice.toString(),
  };
}

export function formDataToReservationEntity({
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
