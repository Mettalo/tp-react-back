import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Task, TaskDocument } from './task.schema';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService){}

  @Post()
  Create(@Body() createTaskBody: Task): Promise<TaskDocument> {
    return this.taskService.Create(createTaskBody);
  }

  @Get()
  async ListAll(): Promise<TaskDocument[]> {
    return this.taskService.ListAll();
  }

  @Delete(':id')
  async Delete(@Param('id') id: string): Promise<TaskDocument> {
    return this.taskService.Delete(id);
  }

  @Patch(':id')
  async Edit(@Param('id') id: string, @Body() task: Task): Promise<TaskDocument> {
    return this.taskService.Edit(id, task);
  }

}
