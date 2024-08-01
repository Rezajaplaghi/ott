import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "src/dtos/user.dto";
import { User } from "src/entities/user.entitiy";
import { Repository } from "typeorm";

@Injectable()
export class UserService{
    constructor(@InjectRepository(User) private readonly userRepository : Repository<User>){}
    
    async findOne(id : number){
        const user = await this.userRepository.findOne({where:{id}, relations:['posts']});
        return user;
    };

    async findAllUser(){
        const user = await this.userRepository.find();
        return user;
    };

    async UpdateUser(id : number , body: UserDto){
        const user = await this.userRepository.update(id,body);
        return user;
    };

    async deleteUser(id:number){
        const user = await this.userRepository.delete(id);
        return user;
    };
    
}