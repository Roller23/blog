require('dotenv').config()

import {AnyError, Db, MongoClient} from 'mongodb'

const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@blog.wqcdb.mongodb.net/blogDb?retryWrites=true&w=majority`;
const mongoClient = new MongoClient(mongoUri);
let cachedDb = null;

export async function getBlogDb(): Promise<{err: AnyError, db: Db}> {
  return new Promise(resolve => {
    if (cachedDb !== null) {
      return resolve({db: cachedDb, err: null})
    }
    mongoClient.connect(err => {
      if (err) {
        return resolve({db: null, err})
      }
      cachedDb = mongoClient.db("blogDb")
      resolve({db: cachedDb, err})
    });
  });
}