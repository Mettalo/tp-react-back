import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Topic, TopicDocument } from './topic.schema';

@Injectable()
export class TopicService {  
  constructor(@InjectModel(Topic.name) private taskModel: Model<TopicDocument>) {}

  async Create(topic: Topic): Promise<TopicDocument>{
    const newTask = new this.taskModel(topic);
    return newTask.save();
  }

  async ListAll(): Promise<TopicDocument[]>{
    return this.taskModel.find();
  }
}
