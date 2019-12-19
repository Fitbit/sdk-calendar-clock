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
    details.text = `${timeUntil(fromEpochSec(event.startDate))} ${
      event.location ? `@ ${event.location}` : ""
    }`;
  } else {
    title.text = "No appointments";
    details.text = "";
  }
}
