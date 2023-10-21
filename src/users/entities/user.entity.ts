import {  Column, Entity } from "typeorm";

@Entity()
export class User {
    @Column({primary:true, generated:true})
    id: number

    @Column()
    fullname: string;

    @Column({unique:true})    
    email: string;

    @Column()
    password:string;
}
