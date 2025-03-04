import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "src/controllers/user.controller";
import { User } from "src/entities/user.entitiy";
import { UserService } from "src/services/user.service";
import { PostModul } from "./post.module";


@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[UserService],
    controllers:[UserController],
    exports:[UserService]
})
export class UserModule{}