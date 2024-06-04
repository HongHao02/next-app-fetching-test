export interface User{
    id: number, 
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}
export interface GetUserResponse{
    data?: User[]
}