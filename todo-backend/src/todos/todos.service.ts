import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/todo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async findAllTodos() {
    return this.todoModel.find().exec();
  }

  async addTodo(todo: CreateTodoDto) {
    const newTodo = await this.todoModel.create(todo)
    try {
        return await newTodo.save()
      } catch (e) {
        throw new HttpException(e, 400);
      }
  }

  async update(id: string, todo: UpdateTodoDto) {
    const post = await this.todoModel
      .findByIdAndUpdate({ _id: id }, todo)
      .populate('text')
      .populate('day')
      .populate('done');
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async delete() {}
}
