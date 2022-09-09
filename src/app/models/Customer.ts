export interface ICustomerResult{
    content:ICustomer[],
    totalPages:number,
    currentPage:number
}

export interface ICustomer{
    id: string,
    name: string,
}