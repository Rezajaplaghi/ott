import { IsEmail, IsNumber, IsString } from "class-validator";

export class authUserDto{
    @IsString()
    first_name : string

    @IsString()
    last_name : string

    @IsString()
    password : string

    @IsString()
    @IsEmail()
    email:string
}