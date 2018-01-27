let MongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017/myProject";

MongoClient.connect(url, (err, database) => {
    if (err) console.error(err);
    console.log("Connected to DB");
    // console.log(db);
    let db = database.db("myProject");
    let collection = db.collection("newCollection");
    collection.insertMany([{ a: 1 }, { b: 2 }, { c: 3 }], (err, result) => {
        if (err) console.error(err);
        console.log(result);
    });
    collection.find({}, (err, result) => {
        if (err) console.error(err);
        console.log(result);
    });
    // collection.remove({ _id: Object.id("") }, (err, result) => {
    //     if (err) console.error(err);
    //     console.log(result);
    // })
    database.close();
});