import { Body, Controller, Get, Post } from '@nestjs/common';
import { Topic, TopicDocument } from './topic.schema';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
  constructor(private topicService: TopicService){}

  @Post()
  Create(@Body() createTopicBody: Topic): Promise<TopicDocument> {
    return this.topicService.Create(createTopicBody);
  }

  @Get()
  async ListAll(): Promise<TopicDocument[]> {
    return this.topicService.ListAll();
  }}
