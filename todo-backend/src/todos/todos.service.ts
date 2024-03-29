import {
  ConflictException,
  HttpException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTodoDto } from "./dto/todo.dto";
import { UpdateTodoDto } from "./dto/updateTodo.dto";
import { Todo, TodoDocument } from "./schemas/todo.schema";

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async findAllTodos() {
    return await this.todoModel.find();
  }

  async addTodo(todo: CreateTodoDto) {
    const newTodo = this.todoModel.create(todo);
    try {
      return newTodo;
    } catch (e) {
      throw new ConflictException(e.message);
    }
  }
 
  async update(id: string, todo: UpdateTodoDto) {
    const updatedTodo = await this.todoModel
      .findByIdAndUpdate(id, todo)
      .setOptions({ new: true });
    if (!updatedTodo) {
      throw new NotFoundException('Something went wrong');
    }
    return updatedTodo;
  }

  async delete(id: string) {
    const result = await this.todoModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException('Something went wrong');
    }
    return "Success";
  }
}
