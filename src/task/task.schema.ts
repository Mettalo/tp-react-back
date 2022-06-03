import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Topic } from 'src/topic/topic.schema';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  recurrent: string;

  @Prop()
  priority: number;

  @Prop({
    ref: Topic.name,
    type: mongoose.Schema.Types.ObjectId
  })
  topicId: mongoose.ObjectId

}

export const TaskSchema = SchemaFactory.createForClass(Task);
