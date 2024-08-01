import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { authUserDto } from "src/dtos/auth.dto";
import { loginAuthDto } from "src/dtos/login-auth.dto";
import { localGuard } from "src/guards/login-auth.guard";
import { AuthService } from "src/services/auth.service";

@Controller('auth')
export class AuthController{
    constructor(public authservice : AuthService , public jwtsrvice:JwtService){}

    @Post('/regester')
    async creatUser(@Body() body:authUserDto){
        const user = await this.authservice.crate(body);
        return user;
    }

    @Post('/login')
    @UseGuards(localGuard)
    async login(@Body() body:loginAuthDto , @Request() req){
        return{
            token: this.jwtsrvice.sign({
                id: req.user.id,
                email : req.user.email
            })
        }
    }
}