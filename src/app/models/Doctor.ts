export interface IDoctorResult{
    content: IDoctor[],
    totalPages:number,
    currentPage:number
}

export interface IDoctor {
    id: string,
    userName: string,
    phoneNumber: string,
    isActivated: boolean
}