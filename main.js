var button = document.querySelector(".submitButton");
var form = document.querySelector(".formInput");

var message = "Thank you! We will send you more information via email shortly.";

function submit() {
  form.innerHTML = message;
  form.setAttribute('class', 'thankYouMessage')
}

button.addEventListener('click', submit)
