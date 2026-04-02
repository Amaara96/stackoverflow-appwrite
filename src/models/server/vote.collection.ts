import { Permission } from "node-appwrite";
import { db, voteCollection } from "../name";
import { databases } from "./config";


export default async function createVoteCollection(){
    // creating Collection
    await databases.createCollection(db, voteCollection, voteCollection, [
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users")
    ]);
    console.log("Vote Collection Created")

    // Creating the attributes
    await Promise.all([
        databases.createEnumAttribute(db, voteCollection, "type", ["question", "answer"], true),
        databases.createStringAttribute(db,  voteCollection, "typeId", 50, true),
        databases.createStringAttribute(db, commentCollection, "typeId", 50, true),
        databases.createStringAttribute(db, commentCollection, "authorId", 50, true)
    ]);
    console.log("Comment Attributes Created")
}