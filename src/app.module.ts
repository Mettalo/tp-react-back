import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TopicController } from './topic/topic.controller';
import { TopicModule } from './topic/topic.module';
import { TopicService } from './topic/topic.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tp-task'),
    TaskModule,
    TopicModule  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
