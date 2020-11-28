import mongoose from 'mongoose';

export default function dbConnect(): Promise<typeof mongoose> {
  // if (!process.env.DB_CONNECT_URI) {
  //   console.error('Missing required config option: DB_CONNECT_URI');
  //   process.exit(1);
  // }

  // return mongoose.connect(process.env.DB_CONNECT_URI, {
  //   useNewUrlParser: true,
  //   useFindAndModify: false,
  //   useUnifiedTopology: true,
  // });

  return mongoose.connect('mongodb://localhost:27017/todo-bitpanda', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}
