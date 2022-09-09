export interface IAppointment{
    petOwnerName: string,
    petOwnerImg: string,
    Appointment: Date

    status:string //Upcoming - Previous - Starting soon (within 2 hours)
}