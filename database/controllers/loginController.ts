import clientPromise from "../index";
import { Collection } from "mongodb";
import { Recipe } from "../../interfaces/Recipe";
import type { WithId, Document } from "mongodb";

export const getClient = async () => {
  const client = await clientPromise;
  return client.db("user_information");
};

export const getLogin = async() => {

}

export const createLogin = async() => {

}

export const editLogin = async() => {
  
}