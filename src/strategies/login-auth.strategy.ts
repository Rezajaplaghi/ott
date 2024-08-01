import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "src/services/auth.service";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy){
    constructor(public authservice:AuthService){
        super({
            usernameField : 'email'
        });
    };
    async validate(email: string , password: string){
        const user = await this.authservice.validateUser(email,password);
        if(!user){
            throw new UnauthorizedException()
        };

        return user;
    }
}