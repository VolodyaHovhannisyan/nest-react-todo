import { TodosService } from "./todos.service";
import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Req,
  Param,
} from "@nestjs/common";
import { CreateTodoDto } from "./dto/todo.dto";
import { UpdateTodoDto } from "./dto/updateTodo.dto";

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAllTodos();
  }

  @Post("add")
  add(@Body() todo: CreateTodoDto) {
    return this.todosService.addTodo(todo);
  }

  @Patch('/update/:id')
  update(@Param() params, @Body() todo: UpdateTodoDto) {
    console.log('todo', todo)
    console.log('id', params.id)
    return 'ok' 
    // this.todosService.update(params.id, todo);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.todosService.delete(params.id);
  }
}
