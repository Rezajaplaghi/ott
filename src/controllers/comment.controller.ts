import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { commentDto } from "src/dtos/comment";
import { CommentService } from "src/services/comment.service";


@Controller('comment')
export class CommentController{
    constructor(private commentservice:CommentService){}

    @Get()
    async getAllComment(){
        const comment = await this.commentservice.getAllComment();
        return comment;
    };

    @Get('/:id')
    async getOneComment(@Param('id' , ParseIntPipe) id:number){
        const comment = await this.commentservice.getOneComment(id);
        return comment;
    };

    @Post()
    async createComment(@Body() body:commentDto){
        const comment = await this.commentservice.createComment(body);
        return comment;
    };

    @Delete('/:id')
    async deleteComment(@Param('id', ParseIntPipe) id: number){
      const comment = await this.commentservice.deleteComment(id);
      const result = comment.affected == 1 ? 'deletepost' : 'not post delete';
      return{
          'message': result
      };
    };
  
    @Patch('/:id')
    async updateComment(@Param('id', ParseIntPipe) id: number ,@Body() body:commentDto){
      const post = await this.commentservice.updateComment(id , body);
      const result = post.affected == 1 ? 'updatePost' : 'not post update';
      return{
          'message': result
      };
    };
}