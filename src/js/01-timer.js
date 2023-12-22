import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector("#datetime-picker");
const button = document.querySelector("[data-start]");
const timerFieldDays = document.querySelector("[data-days]");
const timerFieldHours = document.querySelector("[data-hours]");
const timerFieldMinutes = document.querySelector("[data-minutes]");
const timerFieldSeconds = document.querySelector("[data-seconds]");

let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      iziToast.show({
        title: 'Hey',
        message: 'What would you like to add?'
});
      button.setAttribute("disabled", true); return
    } else {
        button.removeAttribute("disabled");
    }
  },
};

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

const datePicker = flatpickr(input, options);

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function onTimerStart() {
  const selectedDate = datePicker.selectedDates[0];

  userSelectedDate = setInterval(() => {
    const countdown = selectedDate - new Date();
    if (countdown < 0) {
      clearInterval(userSelectedDate);
      return;
    }
    updateTimerFace(convertMs(countdown));
  }, 1000);
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  timerFieldDays.textContent = addLeadingZero(days);
  timerFieldHours.textContent = addLeadingZero(hours);
  timerFieldMinutes.textContent = addLeadingZero(minutes);
  timerFieldSeconds.textContent = addLeadingZero(seconds);
}
button.addEventListener("click", onTimerStart);















