import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entitiy";
import { Comment } from "./comment.entitiy";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title: string;

    @Column()
    subtitle: string;

    @Column('text')
    content : string;

    @ManyToOne(()=> User , user => user.posts)
    user : User;

    @OneToMany(()=> Comment , comment => comment.post)
    comments : Comment[];

}