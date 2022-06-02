import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TopicDocument = Topic & Document;

@Schema()
export class Topic {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  color: string;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
