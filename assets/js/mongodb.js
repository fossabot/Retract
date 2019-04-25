var mongo = require('mongodb');
var mongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://retract_user1:vATxI%5EKi82rX@retract-thoi0.mongodb.net/test?retryWrites=true";

function createSearch() {
  var choiceItem = document.getElementsByClassName("choices__item");
  var searchList = [];
  var searchResult = [];
  for (var i = 0; i < choiceItem.length; i++) {
    searchList.push(choiceItem[i].getAttribute("data-value"));
  }
  searchList.pop();
  console.log(searchList);
  mongoClient.connect(url, {
    useNewUrlParser: true
  }, function(err, db) {
    if (err) throw err;
    const database = db.db("Retract");
    const collection = database.collection("Tags_Ids");
    console.log("Connected to the Server!");
    // perform actions on the collection object
    for (var i = 0; i < searchList.length; i++) {
      collection.find({
        tag: searchList[i]
      }, {
        projection: {
          category: 0,
          tag: 0
        }
      }).toArray(function(err, result) {
        if (err) throw err;
        searchResult.push(result);
      });
    }
    console.log(searchResult);
    db.close();
  });
}
