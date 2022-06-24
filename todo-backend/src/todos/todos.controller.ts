import { TodosService } from './todos.service';
import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  findAll() {}

  @Post()
  add() {}

  @Put()
  update() {}

  @Delete()
  delete() {}
}
