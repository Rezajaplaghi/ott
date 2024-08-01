import { IsEmail, IsString } from "class-validator";

export class loginAuthDto{
    @IsString()
    password : string

    @IsString()
    @IsEmail()
    email:string
}