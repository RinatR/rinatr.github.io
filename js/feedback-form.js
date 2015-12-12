var link = document.querySelector(".contact-btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var cancel = document.querySelector(".cancel-btn");
var form = popup.querySelector("form");
var user_name = popup.querySelector("[name='name-field']");
var email = popup.querySelector("[name='email-field']");
var feedback = popup.querySelector("[name='feedback-field']");
var storage_name = localStorage.getItem("user_name");
var storage_email = localStorage.getItem("email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-error");
  popup.classList.add("modal-content-show");
    if(storage_name && storage_email) {
      user_name.value = storage_name;
      email.value = storage_email;
      feedback.focus();
    } else {
      user_name.focus();
    }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

cancel.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
})

form.addEventListener("submit", function(event) {
  if(!user_name.value || !email.value || !feedback.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("user_name", user_name.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (event) {
  if(event.keyCode === 27) {
    if(popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
