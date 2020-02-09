const email = document.getElementsByName("email");
const error = document.querySelector(".email-error");

function validateInput() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email[0].value.length < 1 || !email[0].value.match(mailformat)) {
    email[0].style.border = "2px solid hsl(354, 100%, 66%)";
    error.style.display = "block";
  } else {
    email[0].style.border = "1px solid hsl(223, 100%, 88%)";
    error.style.display = "none";
  }
}
