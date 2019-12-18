console.log("Hello world!");
// basic clock
// show next appointment title.substr, location,/in 1 day/hours/mins

/*
Meeting with blah blah blah
at BUH-q3wewe
in 3 hours (12:15pm)
*/

import document from "document";

import * as appointment from "./appointment";
import * as clock from "./clock";
import { fromEpochSec, timeUntil, trimString } from "../common/utils";

const time = document.getElementById("time");
const title = document.getElementById("title");
const details = document.getElementById("details");

clock.initialize("minutes", data => {
  // Clock ticked, update UI
  time.text = data.time;
  renderAppointment();
});

appointment.initialize(() => {
  // We have fresh calendar data
  clock.tick();
});

function renderAppointment() {
  let event = appointment.next();
  if (event) {
    title.text = event.title.substr(0, 20);
    details.text = `${timeUntil(fromEpochSec(event.startDate))} @ ${
      event.location
    }`;
  } else {
    title.text = "No appointments";
    location.text = "";
    date.text = "";
  }
}
