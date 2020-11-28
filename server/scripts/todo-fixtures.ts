import {
  LoremIpsum,
  // eslint-disable-next-line
} from 'lorem-ipsum';

import dbConnect from '../src/db';
import Todo from '../src/schema/Todo';

async function main() {
  let todoCount = 100;
  const argCount = parseInt(process.env.npm_config_todo_count ?? '', 10);

  if (argCount > 0) {
    todoCount = argCount;
  }

  const mongoose = await dbConnect();
  const lorem = new LoremIpsum();
  const items = [...(new Array(todoCount))].map(() => ({
    description: lorem.generateSentences(1),
    done: Math.random() > 0.75,
  }));

  await Todo.insertMany(items);

  mongoose.disconnect();

  console.log(`Inserted ${todoCount} ToDo items.`);
}

main();
