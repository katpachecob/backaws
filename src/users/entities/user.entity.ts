
import { Task } from "src/task/entity/task.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class User {
    @Column({ primary: true, generated: true })
    id: number

    @Column()
    fullname: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Task, task => task.user)
    tasks: Task[];
} 
