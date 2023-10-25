import { Task } from "src/task/entity/task.entity";
export declare class User {
    id: number;
    fullname: string;
    email: string;
    password: string;
    tasks: Task[];
}
