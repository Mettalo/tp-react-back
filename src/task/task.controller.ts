import { Body, Controller, Post } from '@nestjs/common';
import { Task, TaskDocument } from './task.schema';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService){}

  @Post()
  Create(@Body() createTaskBody: Task): Promise<TaskDocument> {
    return this.taskService.Create(createTaskBody);
  }

}
