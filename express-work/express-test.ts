import express from "express";
import fs from "fs";

const app: express.Application = express();

let startDateTime: number; //start server date
let filePath = __dirname + "/api/events.json";

interface Event {
  type: string;
  events: Array<object>;
}

/* Status */
app.get("/status", function(req: express.Request, res: express.Response) {
  let currentDate = new Date(); //get current date
  let dateSeconds = Date.parse(currentDate.toString()) / 1000; //convert to seconds
  let difference = dateSeconds - startDateTime; //calc difference current date & start server date

  /* Get Passed Time */
  let time = new Date(+0);
  time.setSeconds(difference);

  let timePassed = time.toISOString().substr(11, 8);

  res.send("Прошло времени с запуска сервера - " + timePassed);
});

/* Events */
app.get("/api/events", function(
  req: express.Request,
  res: express.Response,
  next: Function
) {
  let typeValues = req.query.type;

  /* If Have Param */
  if (typeValues) {
    let typesArray = typeValues.split(":"); //received types
    let eventsTypes: Array<string> = []; //events types

    /* Read Json */
    fs.readFile(filePath, function(err, data) {
      if (err) {
        throw err;
      }

      let jsondata: object = JSON.parse(data.toString("utf8"));

      /* Get Event Type */
      let evData = jsondata as Event;
      let events = evData.events;
      events.forEach(event => {
        let evData = event as Event;
        if (eventsTypes.indexOf(evData.type) == -1)
          eventsTypes.push(evData.type);
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

function err(req: express.Request, res: express.Response) {
  res.status(404).send("<h1>Page not found</h1>");
}

/* Start */
app.listen(8000, function() {
  let startDate = new Date(); //get start server date
  startDateTime = Date.parse(startDate.toString()) / 1000; //convert to seconds

  console.log("Example app listening on port 8000!");
});
