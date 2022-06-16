import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { Topic, TopicDocument } from './topic.schema';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
  constructor(private topicService: TopicService){}

  @Post()
  Create(@Body() createTopicDto: CreateTopicDto): Promise<TopicDocument> {
    return this.topicService.Create(createTopicDto);
  }

  @Get()
  async ListAll(): Promise<TopicDocument[]> {
    return this.topicService.ListAll();
  }

  @Delete(':id')
  async Delete(@Param('id') id: string): Promise<TopicDocument>{
    return this.topicService.Delete(id);
  }

  @Patch(':id')
  async Edit(@Param('id') id: string, @Body() topic: Topic): Promise<TopicDocument>{
    return this.topicService.Edit(id, topic)
  }
}
