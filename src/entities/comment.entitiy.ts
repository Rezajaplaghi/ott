import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entitiy";
import { Post } from "./post.entitiy";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('text')
    commentText: string;

    @ManyToOne(()=> User , user => user.comments)
    user: User;

    @ManyToOne(()=> Post , post => post.comments)
    post: Post;

    @CreateDateColumn({type:"timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    createdAt:Date;
}