import { IsNumber, IsString } from "class-validator";


export class postDto{
    @IsString()
    title : string

    @IsString()
    subtitle : string

    @IsString()
    content : string

    @IsString()
    userId: number
   
}