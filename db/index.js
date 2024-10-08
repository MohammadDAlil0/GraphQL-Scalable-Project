import Mongoose from 'mongoose';
import { mongo } from '../config/environment';

let isConnected;
let db;

const connectDB = async () => {
  if (isConnected) return db;

  try {
    db = await Mongoose.connect(mongo.url);
    isConnected = db.connections[0].readyState;
    return db;
  } catch (err) {
    throw new Error(err);
  }
};

export default connectDB;