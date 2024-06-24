export interface userType{
        id:number
        name:string
        email:string
        role_name: string,
        active: boolean,
        image:string|null
        role_id: number,
}

export interface addUserType{
    name:string
    email:string
    role_id: number,
    active: boolean,
    password:string,
    image:string|null
}