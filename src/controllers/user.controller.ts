import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { UserDto } from "src/dtos/user.dto";
import { PostService } from "src/services/post.service";
import { UserService } from "src/services/user.service";

@Controller('user')
export class UserController{
    constructor(public userservice: UserService){}
    
    @Get('/:id')
    async findOn(@Param('id', ParseIntPipe) id: number){
        const user = await this.userservice.findOne(id);
        return user;
    }

    @Get()
    async findAllUser(){
        const user = await this.userservice.findAllUser();
        return user;
    };

    @Patch('/:id')
    async UpdateUser(@Param('id' , ParseIntPipe) id: number , @Body() body:UserDto){
        const user =await this.userservice.UpdateUser(id, body);
        const result = user.affected == 1 ? 'update user' : 'not user update';
         return{
             'message': result
         };
    
    };

    @Delete('/:id')
    async deleteUser(@Param('id' , ParseIntPipe) id: number){
        const user =await this.userservice.deleteUser(id);
        const result = user.affected == 1 ? 'deleteuser' : 'not user delete';
        return{
        'message': result
        };
    };
}