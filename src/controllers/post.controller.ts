import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post} from "@nestjs/common";
import { postDto } from "src/dtos/post.dto";
import { PostService } from "src/services/post.service";
import { UserService } from "src/services/user.service";


@Controller('post')
export class PostController{
    constructor(public postservice: PostService , public userservice: UserService){}
  @Get()
  async getAllPosts(){
    const post = await this.postservice.getAllPosts();
    return post;
  };

  @Get('/:id')
  async findOn(@Param('id', ParseIntPipe) id: number){
    const post = await this.postservice.finOne(id);
    if(!post){
      return '404'
    }
    return post;
  }
  
  @Post('/create')
  async createPosts(@Body() body:postDto){
    const user = await this.userservice.findOne(body.userId);
    const data={
      title: body.title,
      subtitle: body.subtitle,
      content: body.content,
      user: body.userId
    }
    const post = await this.postservice.createPosts(data);
    return post;
  };

  @Delete('/:id')
  async deletePosts(@Param('id', ParseIntPipe) id: number){
    const post = await this.postservice.deletePosts(id);
    const result = post.affected == 1 ? 'deletepost' : 'not post delete';
    return{
        'message': result
    };
  };

  @Patch('/:id')
  async updatePosts(@Param('id', ParseIntPipe) id: number ,@Body() body:postDto){
    const post = await this.postservice.updatePosts(id , body);
    const result = post.affected == 1 ? 'updatePost' : 'not post update';
    return{
        'message': result
    };
  }
}