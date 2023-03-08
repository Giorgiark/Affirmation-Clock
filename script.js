// CLOCK
const time = document.getElementById("time");
const ampm = document.getElementById("ampm");
const day = document.getElementById("day");

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampmValue = "AM";
  
  if (hours >= 12) {
    ampmValue = "PM";
    hours -= 12;
  }
  
  if (hours === 0) {
    hours = 12;
  }
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  
  time.innerHTML = `${hours}:${minutes}:${seconds}`;
  ampm.innerHTML = ampmValue;
  day.innerHTML = now.toLocaleDateString('en-US', { weekday: 'long' });
}

setInterval(updateClock, 1000);

//Modal and customization

const setting = document.getElementById("setting");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const customText = document.getElementById("custom-text");
const saveButton = document.getElementById("save-button");
const text = document.getElementById("text");
const counter = document.getElementById("counter");

document.addEventListener("mousemove", showSetting);
document.addEventListener("click", showSetting);

function showSetting() {
  setting.style.display = "block";
}

setting.addEventListener("click", function() {
  setting.style.display = "none";
  modal.style.display = "block";
});

// Close the modal when the user clicks the x button or outside the modal
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Save the custom text when the user clicks the save button
saveButton.addEventListener("click", function() {
  if (customText.value.length > 25) {
    alert("The text must be less than 25 characters");
    return;
  }
  text.innerHTML = customText.value;
  modal.style.display = "none";
});

customText.addEventListener("input", function(){
  counter.innerHTML = `Characters remaining: ${25 - customText.value.length}`;
});

let timeoutId;

document.addEventListener("mousemove", showSetting);
document.addEventListener("click", showSetting);

function showSetting() {
  setting.style.display = "block";
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function() {
    setting.style.display = "none";
  }, 2000);
}

setting.addEventListener("click", function() {
  setting.style.display = "none";
  modal.style.display = "block";
});