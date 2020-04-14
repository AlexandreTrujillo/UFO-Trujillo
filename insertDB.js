const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");

let url = "mongodb://localhost:27017/";

csvtojson()
  .fromFile("cas&temoignages.csv")
  .then(csvData => {
    console.log(csvData);

    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client
          .db("angular")
          .collection("ufo")
          .drop(function (err) {
            if (err) {};
          });

        client
          .db("angular")
          .collection("ufo")
          .insertMany(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });
