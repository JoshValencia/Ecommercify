const { MongoClient, ServerApiVersion } = require("mongodb");
const { MONGO_DB_USER, MONGO_DB_PASSWORD } = process.env;

const uri = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.zcrllaz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
