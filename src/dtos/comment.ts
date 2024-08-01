import { IsNumber, IsString } from "class-validator"

export class commentDto{
    @IsString()
    commentText : string

    @IsString()
    user : number

    @IsString()
    post : number

}