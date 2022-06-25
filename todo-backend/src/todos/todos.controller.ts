import { TodosService } from "./todos.service";
import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
} from "@nestjs/common";
import { CreateTodoDto } from "./dto/todo.dto";
import { UpdateTodoDto } from "./dto/updateTodo.dto";

@Controller("todos")
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

  @Patch("/update/:id")
  update(@Param() params, @Body() todo: UpdateTodoDto) {
    return this.todosService.update(params.id, todo);
  }

  @Delete("/delete/:id")
  delete(@Param() params) {
    return this.todosService.delete(params.id);
  }
}
