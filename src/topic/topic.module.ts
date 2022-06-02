import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicController } from './topic.controller';
import { Topic, TopicSchema } from './topic.schema';
import { TopicService } from './topic.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: Topic.name, schema: TopicSchema}
    ])
  ],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}
