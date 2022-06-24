import { TodosService } from './todos.service';
import { Controller, Get, Post, Delete, Patch } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  findAll() {}

  @Post()
  add() {}

  @Patch()
  update() {}

  @Delete()
  delete() {}
}
