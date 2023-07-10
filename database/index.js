const Recipe = require('./models/recipes')
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/lebreadbookDB');
  await console.log('Connected to MongoDB')
}

main().catch(err => console.log(err));