var mongo = require('mongodb');
var mongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://retract_Admin:tDAC11%40zUw34@retract-e6doe.mongodb.net/test?retryWrites=true";
const client = new mongoClient(url, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("retract_db").collection("tags");
  // perform actions on the collection object
  console.log("Connected to the Server!");
  client.close();
});
