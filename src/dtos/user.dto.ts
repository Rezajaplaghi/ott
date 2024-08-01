import { IsEmail, IsString } from "class-validator"

export class UserDto{
    @IsString()
    first_name : string

    @IsString()
    last_name : string

    @IsEmail()
    email : string
   
}