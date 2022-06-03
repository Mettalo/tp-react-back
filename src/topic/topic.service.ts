import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Topic, TopicDocument } from './topic.schema';

@Injectable()
export class TopicService {  
  constructor(@InjectModel(Topic.name) private topicModel: Model<TopicDocument>) {}

  async Create(topic: Topic): Promise<TopicDocument>{
    const newTask = new this.topicModel(topic);
    return newTask.save();
  }

  async ListAll(): Promise<TopicDocument[]>{
    return this.topicModel.find();
  }

  async Delete(id: string): Promise<TopicDocument> {
    return this.topicModel.findByIdAndDelete(id);
  }

  async Edit(id: string, topic : Topic): Promise<TopicDocument> {
    return this.topicModel.findByIdAndUpdate(id, topic, {new: true})
  }
}
