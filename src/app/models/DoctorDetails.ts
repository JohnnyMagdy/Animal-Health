import { IAppointment } from "./Appointment";
import { ISchedule } from "./Schedule";

export interface IDoctorDetails {
    userName: string,
    specialization: string, //title

    email: string,
    phoneNumber: string,
    
    gender: string,
    normalFees: number,
    
    bio: string,
    
    schedule: ISchedule[],
    slotDuration: number,
    
    // appointments: IAppointment,
}