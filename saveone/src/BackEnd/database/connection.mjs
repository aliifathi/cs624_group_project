import {MongoClient} from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn 

try{
    conn = await client.connect();
}catch(e){
    console.log(e);
}

let db = conn.db("cs624-tp-db");

export default db;