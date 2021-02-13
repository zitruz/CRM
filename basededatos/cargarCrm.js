let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

const csvFilePath = 'SeguimientoCRM.csv'
const csv = require('csvtojson')
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err) throw err;
            var dbo = db.db("CRM");
            dbo.collection("crm").insertMany(jsonObj, (err, res) => {
                if (err) throw err;
                console.log("Number of documents inserted: " + res.insertedCount);
                /**
                    Number of documents inserted: 5
                */
                db.close();
            });
        });
    })