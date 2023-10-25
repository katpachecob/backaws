import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './task.service';
import { FindCountryDto } from './dto/find-country.dto';
export declare class TasksController {
    private readonly taskController;
    constructor(taskController: TasksService);
    findAll(): Promise<import("./entity/task.entity").Task[]>;
    findOne(id: number): Promise<import("./entity/task.entity").Task>;
    create(createTaskDto: CreateTaskDto): Promise<CreateTaskDto & import("./entity/task.entity").Task>;
    deleteByID(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: number, body: UpdateTaskDto): Promise<void>;
    searchByCountry(body: FindCountryDto): Promise<import("openai/resources").CompletionChoice[]>;
}
