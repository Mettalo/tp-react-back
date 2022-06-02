import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TaskService {

  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  private tasks: Array<Task> = [];

  Create(task: Task): Promise<TaskDocument>{
    const newTask = new this.taskModel(task);
    return newTask.save();
  }
}
