let express = require("express");
let app = express();
const fs = require("fs");

let startDate; //start server date
let filePath = __dirname + "/api/events.json";

/* Status */
app.get("/status", function(req, res) {
  let currentDate = new Date(); //get current date
  currentDate = Date.parse(currentDate) / 1000; //convert to seconds
  let difference = currentDate - startDate; //calc difference current date & start server date

  /* Get Passed Time */
  let time = new Date(null);
  time.setSeconds(difference);
  let timePassed = time.toISOString().substr(11, 8);

  res.send("Прошло времени с запуска сервера - " + timePassed);
});

/* Events */
app.get("/api/events", function(req, res, next) {
  let typeValues = req.query.type;

  /* If Have Param */
  if (typeValues) {
    let typesArray = typeValues.split(":"); //received types
    let eventsTypes = []; //events types

    /* Read Json */
    fs.readFile(filePath, function(err, data) {
      if (err) {
        throw err;
      }

      let jsondata = JSON.parse(data);

      /* Get Event Type */
      let events = jsondata.events;
      events.forEach(event => {
        if (eventsTypes.indexOf(event.type) == -1) eventsTypes.push(event.type);
      });

      for (let i = 0; i < typesArray.length; i++) {
        //if incorrect
        if (eventsTypes.indexOf(typesArray[i]) == -1) {
          res.status(400).send("incorrect type");
          return;
        } else if (i == typesArray.length - 1) {
          res.send("ok");
        }
      }
    });
  } else if (req.url === "/api/events") {
    res.sendFile(__dirname + "/api/events.json");
  } else {
    next();
  }
});

/* Other Requests  */
app.use(err);

function err(req, res) {
  res.status(404).send("<h1>Page not found</h1>");
}

/* Start */
app.listen(8000, function() {
  startDate = new Date(); //get start server date
  startDate = Date.parse(startDate) / 1000; //convert to seconds

  console.log("Example app listening on port 8000!");
});
