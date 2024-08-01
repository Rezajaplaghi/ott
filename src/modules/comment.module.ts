import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentController } from "src/controllers/comment.controller";
import { Comment } from "src/entities/comment.entitiy";
import { CommentService } from "src/services/comment.service";

@Module({
    imports:[TypeOrmModule.forFeature([Comment])],
    controllers:[CommentController],
    providers:[CommentService],
})
export class CommentModule{}