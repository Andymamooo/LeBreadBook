import { getClient } from "../controllers/recipesController";
import { users } from "./user";

async function createCollection() {
  const collectionName = "users";
  try {
    const db = await getClient();
    await db.createCollection(collectionName);
  } catch (err) {
    if (err.code === 48) {
      console.log(`Collection ${collectionName} already exists.`);
    }
    console.error(`Error in creating collection ${err.message}`);
  }
}

async function insertUser() {
  try {
    const db = await getClient();
    await db.insertMany(users);
  } catch (err) {
    console.error(`Error while inserting users ${err.message}`);
  }
}

createCollection()
  .then(() => insertUser())
  .catch((err) => {
    console.error(`error while running createcollection.js ${err.message}`);
  });
