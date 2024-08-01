import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostController } from "src/controllers/post.controller";
import { Post } from "src/entities/post.entitiy";
import { PostService } from "src/services/post.service";
import { UserModule } from "./user.module";



@Module({
    imports:[TypeOrmModule.forFeature([Post]), UserModule],
    controllers:[PostController],
    providers:[PostService],
})
export class PostModul{}