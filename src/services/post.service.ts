import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "src/entities/post.entitiy";
import { Repository } from "typeorm";

@Injectable()
export class PostService{
    constructor(@InjectRepository(Post) private readonly postRepository: Repository<Post>){}

     async getAllPosts(){
        const post = await this.postRepository.find()
        return post;
     };

     async finOne(id:number){
      const post = await this.postRepository.findOne({where:{id}, relations:['user']});
      return post;
     }

     async createPosts(body : any){
        const post = await this.postRepository.create(body);
        this.postRepository.save(post);
        return post;
     };

     async deletePosts(id){
        const post = await this.postRepository.delete(id);
        return post;
     }

     async updatePosts(id : number , body : any){
        const post = await this.postRepository.update(id,body);
        return post;
     }

}