
// PASSWORD TOGGLE
let password = document.getElementById("password");
let toggleBtn = document.getElementById("toggleBtn");
let checkbox = document.getElementById("checkToggle");

function togglePassword() {
  if(password.type === "password"){
    password.type = "text";
    toggleBtn.innerText = "Hide";
    checkbox.checked = true;
  } else {
    password.type = "password";
    toggleBtn.innerText = "Show";
    checkbox.checked = false;
  }
}

toggleBtn.addEventListener("click", togglePassword);

checkbox.addEventListener("change", function() {
  if(checkbox.checked){
    password.type = "text";
    toggleBtn.innerText = "Hide";
  } else {
    password.type = "password";
    toggleBtn.innerText = "Show";
  }
});


// COUNTER
let count = 0;
let display = document.getElementById("count");

document.getElementById("inc").addEventListener("click", function() {
  count++;
  updateDisplay();
});

document.getElementById("dec").addEventListener("click", function() {
  count--;
  updateDisplay();
});

document.getElementById("reset").addEventListener("click", function() {
  count = 0;
  updateDisplay();
});

function updateDisplay(){
  display.innerText = count;

  if(count > 0){
    display.style.color = "green";
  } 
  else if(count < 0){
    display.style.color = "red";
  } 
  else {
    display.style.color = "black";
  }
}