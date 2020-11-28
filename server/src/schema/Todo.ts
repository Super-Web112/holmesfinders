import {
  Document,
  Schema,
  PaginateModel,
  model,
} from 'mongoose';
import paginate from 'mongoose-paginate-v2';

interface Todo extends Document {
  description: string;
  done: boolean;
}

const TodoSchema = new Schema({
  description: String,
  done: Boolean,
}, {
  toJSON: { versionKey: false },
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

TodoSchema.plugin(paginate);

interface TodoModel<T extends Document> extends PaginateModel<T> { }

const Todo = model<Todo>('Todo', TodoSchema) as TodoModel<Todo>;

export default Todo;
