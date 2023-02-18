const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

const connectionUrl =
  "mongodb+srv://TestBot:HO3nJlSrsDuP2bDr@ms2-values.8gly0vd.mongodb.net/petValues?retryWrites=true&w=majority";

let allElements = [];

// Connect to the MongoDB database using the connection URL
MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db("petValues");
  

  // Fetch all the elements from the database on server start-up
  db.collection("psx")
    .find()
    .toArray((err, results) => {
      if (err) {
        console.error(err);
        return;
      }

      allElements = results;
    });

  // Handle search requests
  app.post("/search", (req, res) => {
    var { searchTerm, rarity, origin, min, max } = req.body;
    // Filter the elements by search term, filter, and value range
    if (searchTerm) {
      searchTerm = searchTerm.toLowerCase();
    } else {
      searchTerm = "";
    }

    if (!rarity) {
      rarity = "All";
    }
    if (!origin) {
      origin = "All";
    }

    if (!min) {
      min = -Infinity;
    }
    if (!max) {
      max = Infinity;
    }

    let searchResults = allElements.filter((element) =>
      element.petName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (rarity !== "All") {
      searchResults = searchResults.filter(
        (element) => element.Rarity === rarity
      );
    }
    if (origin !== "All") {
      searchResults = searchResults.filter(
        (element) => element.Origin === origin
      );
    }
    searchResults = searchResults.filter(
      (element) => element.Value >= min && element.Value <= max
    );

    res.send(searchResults);
  });

  app.listen(3001, () => {
    console.log("Server listening on port 3001");
  });
  app.use(express.static("public"));
});
