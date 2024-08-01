import { IsEmail } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entitiy";
import { Comment } from "./comment.entitiy";
import { HistoryActivity } from "./history-Activity.entitiy";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    first_name:string;

    @Column()
    last_name: string;

    @Column({unique:true})
    @IsEmail()
    email:string

    @Column()
    password: string;

    @CreateDateColumn({type:"timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    createdAt:Date;

    @OneToMany(()=> Post , post => post.user)
    posts : Post[];

    @OneToMany(()=> Comment , comment=> comment.user)
    comments: User[];


    @OneToMany(()=>HistoryActivity , historyactivity=> historyactivity.user)
    history: HistoryActivity[];
}