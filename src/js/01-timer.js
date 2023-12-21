import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");

let userSelectedDate = "";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert("Please choose a date in the future");
      button.setAttribute("disabled", true);
    } else {
      button.removeAttribute("disabled");
      userSelectedDate = selectedDates[0];
    }
  },
};

flatpickr(input, options);

console.log(options.onClose);


