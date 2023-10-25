import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';


@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
exports:[TypeOrmModule]

})
export class TaskModule {}
