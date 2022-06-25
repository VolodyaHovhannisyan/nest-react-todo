import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  
  // _id?: mongoose.Schema.Types.ObjectId

  @Prop()
  text: string

  @Prop()
  day: string
 
  @Prop()
  done: boolean  
}

export const TodoSchema = SchemaFactory.createForClass(Todo);