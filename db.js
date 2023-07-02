const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://arunkrofficial:arunkrofficial@cluster0.koelu3t.mongodb.net/'; 

let db = null;

async function connect() {
  if (db) return db;
  try {
    const client = await MongoClient.connect(url);
    db = client.db('arunkrofficial'); 
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.log('Failed to connect to MongoDB', error);
    throw error;
  }
}

module.exports = connect;
