import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "src/controllers/auth.controller";
import { User } from "src/entities/user.entitiy";
import { jwtAuthGuard } from "src/guards/jwt.guard";
import { AuthService } from "src/services/auth.service";
import { jwtStrategy } from "src/strategies/jwt.strategy";
import { localStrategy } from "src/strategies/login-auth.strategy";

@Module({
    imports:[TypeOrmModule.forFeature([User]),
     PassportModule ,
    JwtModule.register({
        secret:'srcrc',
    })],
    providers:[AuthService , localStrategy , jwtAuthGuard , jwtStrategy],
    controllers:[AuthController]
})
export class AuthModule{}