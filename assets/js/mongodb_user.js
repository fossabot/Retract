var mongo = require('mongodb');
var mongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://retract_user1:vATxI%5EKi82rX@rusers-wvf4k.mongodb.net/test?retryWrites=true";

function UserVerif() {
  mongoClient.connect(url, {
    useNewUrlParser: true
  }, function(err, db) {
    if (err) throw err;
    const database = db.db("User_Verification");
    const collection = database.collection("User_MainFrame");
    console.log("Connected to the Server!");
    // perform actions on the collection object
    db.close();
  });
}
