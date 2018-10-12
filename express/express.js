let express = require("express");
let app = express();
let startDate; //start server date
let currentDate; //current date
let difference;

app.get("/status", function(req, res) {
  currentDate = new Date(); //get current date
  currentDate = Date.parse(currentDate) / 1000; //convert to seconds
  difference = currentDate - startDate; //calc difference current date & start server date

  /* Get Passed Time */
  let time = new Date(null);
  time.setSeconds(difference);
  let timePassed = time.toISOString().substr(11, 8);

  res.send("Прошло времени с запуска сервера - " + timePassed);
});

app.listen(8000, function() {
  startDate = new Date(); //get start server date
  startDate = Date.parse(startDate) / 1000; //convert to seconds

  console.log("Example app listening on port 8000!");
});
