import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindCountryDto } from './dto/find-country.dto';
import searchList from 'src/utils/open-ai';



@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly taskService: Repository<Task>,
  
    ) { }

    findAll() {
        return this.taskService.find()
    }

    async findOneById(id: number) {
        return this.taskService.findOneBy({ id })
    }

    async create(createTaskDto: CreateTaskDto) {
        return await this.taskService.save(createTaskDto);
      }
    async deleteByID(id: string) {
        return this.taskService.delete(id)
    }

    async update(id: string, newInfoTask: UpdateTaskDto) {
        return this.taskService.update(id, newInfoTask)
    }

    async searchByCountry(searchInfo: FindCountryDto) {
        const listSearch = await searchList(searchInfo)
        return listSearch
    }
}
