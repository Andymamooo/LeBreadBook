import clientPromise from "../index";
import { Collection } from "mongodb";
import { Recipe } from "../../interfaces/Recipe";
const bcrypt = require("bcrypt");
export const getClient = async () => {
  const client = await clientPromise;
  return client.db("user_information");
};

export const getLogin = async () => {};

export const createLogin = async (login) => {
  try {
    
    // const db = await getClient();
    // const col = db.collection("accounts");
    // const submittedLogin = await col.insertOne(login);
    // return submittedLogin;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const hashPass = async (pass: string) => {
  try {
    //rounds defines the security of the hash, higher
    //the number the more secure it is, but the longer it takes to generate
    const rounds = 10;
    const result = await bcrypt.hash(pass, rounds);
    console.log(result);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const comparePass = async (pass: string) => {};
export const editLogin = async () => {};
