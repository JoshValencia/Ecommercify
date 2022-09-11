require("dotenv").config();
const express = require("express");
const app = express();

const mongoDb = require("./mongoDb/init");

mongoDb.connect((err) => {
  if (!err) {
    console.log(`MongoDb - Connected!`);
  }

  if (err) {
    console.error(err);
  }
});

const db = mongoDb.db("store");

const addData = async (collection, data) => {
  const doc = await db.collection(collection).insertOne(data);
  return doc;
};

(async () => {
  //   await addData("details", { storeName: "sample" });
})();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`[STORE] running at PORT ${PORT}`));
