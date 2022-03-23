import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const button = document.querySelector("button[data-start]");
const input = document.querySelector("#datetime-picker")
button.setAttribute("disabled", "");
const dateNow = new Date();
let timerId;
let selectedDate;
let time;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: dateNow,
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDate = selectedDates[0].getTime();
      if(dateNow.getTime()>=selectedDate){
        Notiflix.Notify.warning("Please choose a date in the future");
      }
      else{
        button.removeAttribute("disabled");
      }
    },
  };
flatpickr("#datetime-picker", options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
   return value.padStart(2, "0");
  }
  button.addEventListener("click", ()=>{
    timerId = setInterval(()=>{
      input.setAttribute("disabled", "");
      time = convertMs(selectedDate-new Date().getTime());
      if(time.days<10){
      document.querySelector("span[data-days]").innerHTML=addLeadingZero(String(time.days));}
      else{
        document.querySelector("span[data-days]").innerHTML=time.days;
      }
      document.querySelector("span[data-hours]").innerHTML=addLeadingZero(String(time.hours));
      document.querySelector("span[data-minutes]").innerHTML=addLeadingZero(String(time.minutes));
      document.querySelector("span[data-seconds]").innerHTML=addLeadingZero(String(time.seconds));
    if(time.days===0 && time.hours===0 && time.minutes===0 && time.seconds===0){
      clearInterval(timerId);
    }
    }, 1000);
  })