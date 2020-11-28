import {
  Express,
} from 'express';

import todoSetupRoutes from './todo';

const prefix = '/api/v1';

const todoRoutes = todoSetupRoutes(prefix);

export default function setupRoutes(app: Express) {
  todoRoutes(app);
}
