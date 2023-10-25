import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';
import { FindCountryDto } from './dto/find-country.dto';
export declare class TasksService {
    private readonly taskService;
    constructor(taskService: Repository<Task>);
    findAll(): Promise<Task[]>;
    findOneById(id: number): Promise<Task>;
    create(createTaskDto: CreateTaskDto): Promise<CreateTaskDto & Task>;
    deleteByID(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: number, newInfoTask: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    searchByCountry(searchInfo: FindCountryDto): Promise<import("openai/resources").CompletionChoice[]>;
    getTasksByUser({ userId }: {
        userId: any;
    }): Promise<Task[]>;
}
