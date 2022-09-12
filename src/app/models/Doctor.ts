export interface IDoctorResult {
    content: IDoctor[],
    totalPages: number,
    currentPage: number
}

export interface IDoctorDeleteResult {
    isSuccess: boolean,
    message: string
}

export interface IDoctor {
    id: string,
    userName: string,
    phoneNumber: string,
    isActivated: boolean
}