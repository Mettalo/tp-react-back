import { IsNotEmpty } from 'class-validator';

export class DeleteTaskDto {
  @IsNotEmpty()
  tasks: string[];
}
