import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entitiy";

@Entity()
export class HistoryActivity{
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(()=> User , user=> user.history)
    user: User;

    @CreateDateColumn()
    regester: Date;

    @CreateDateColumn()
    login: Date;
    
    @CreateDateColumn()
    createPost: Date;
    
    @CreateDateColumn()
    createComment: Date;
    
}