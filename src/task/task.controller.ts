import { Controller, Get, Post, Put, Delete, Body, Param, ConflictException, NotFoundException, InternalServerErrorException, HttpCode } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './task.service';
import { FindCountryDto } from './dto/find-country.dto';


@Controller('tasks')
export class TasksController {
    constructor(private readonly taskController: TasksService) { }

    @Get()
    findAll() {
        return this.taskController.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        const task = await this.taskController.findOneById(id);
        if (!task) throw new NotFoundException('Task does not exist');
        return task;
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
      return this.taskController.create(createTaskDto);
    }


    @Delete(':id')
    @HttpCode(204)
    async deleteByID(@Param('id') id: string) {
        const deleteTask = await this.taskController.deleteByID(id)
        if (!deleteTask) throw new NotFoundException('Task does not exist')
        return deleteTask
    }

    @Put(':id')
    @HttpCode(203)
    async updateByID(@Param('id') id: string, @Body() body: UpdateTaskDto) {
        try {
            const editTask = await this.taskController.update(id, body)
            if (!editTask) throw new NotFoundException('Task does not exist')
        }
        catch (error) {
            throw error
        }
    }

    @Post('/search')
    async searchByCountry(@Body() body: FindCountryDto) {
        const createTask = await this.taskController.searchByCountry(body)
        return createTask
    }


} 
