import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment } from "src/entities/comment.entitiy";
import { Repository } from "typeorm";

@Injectable()
export class CommentService{

    constructor(@InjectRepository(Comment) private readonly commentRepository:Repository<Comment>){}

    async getAllComment(){
        const comment = await this.commentRepository.find();
        return comment;
    };

    async getOneComment(id:number){
        const comment = await this.commentRepository.findOne({where:{id}});
        return comment;
    };

    async createComment(body:any){
        const comment = await this.commentRepository.create(body);
        this.commentRepository.save(comment);
        return comment;
    };

    async deleteComment(id){
        const post = await this.commentRepository.delete(id);
        return post;
     }

     async updateComment(id : number , body : any){
        const post = await this.commentRepository.update(id,body);
        return post;
     }

}