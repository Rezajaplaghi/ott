import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { authUserDto } from "src/dtos/auth.dto";
import { User } from "src/entities/user.entitiy";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";


@Injectable()
export class AuthService{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async crate(data : authUserDto){
        const passwords = await bcrypt.hash(data.password , 15);
        const Data={
            first_name : data.first_name,
            last_name : data.last_name,
            email: data.email,
            password : passwords
        }
        const user = await this.userRepository.create(Data);
        this.userRepository.save(user);
        return user;
    };

    async validateUser(email:string , password:string){
        const user = await this.userRepository.findOne({
            where:{
                email
            }
        });

        if(!user){
            throw new BadRequestException()
        };
        
        if(!await bcrypt.compare(password, user.password)){
            throw new UnauthorizedException()
        };

        return user;
    }
}