import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert("Please choose a date in the future");
      button.setAttribute("disabled", true); return
    } else {
        button.removeAttribute("disabled");
    }
  },
};

const datePicker = flatpickr(input, options);
let userSelectedDate = datePicker.selectedDates[0];

let timeDifference = new Date() - datePicker.selectedDates[0];

console.log(timeDifference);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}













