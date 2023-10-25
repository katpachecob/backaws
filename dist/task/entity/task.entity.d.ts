import { User } from "src/users/entities/user.entity";
export declare class Task {
    id: number;
    title: string;
    description: string;
    status: boolean;
    user: User;
}
