export interface IAppointment {
    appointmentId: number,
    customerName: string,
    isCancelled: boolean,
    doctorName: string,
    startTime: Date,
    endTime: Date,
    price: number,
}