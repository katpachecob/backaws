
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: boolean;

    @ManyToOne(() => User, user => user.tasks)
    user: User;

}