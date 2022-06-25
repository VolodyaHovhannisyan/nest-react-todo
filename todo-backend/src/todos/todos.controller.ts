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

  @Patch(":id")
  update(@Param() id: string, @Body() todo: UpdateTodoDto) {
    return this.todosService.update(id, todo);
  }

  @Delete(":id")
  delete(@Param() id: string) {
    return this.todosService.delete(id);
  }
}
