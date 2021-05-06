// CA

const submit = document.querySelector("#submit");

const nameError = document.querySelector(".nameError");
const mailadressError = document.querySelector(".mailadressError");
const subjectError = document.querySelector(".subjectError");
const textboxError = document.querySelector(".textboxError");

submit.onclick = function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const mailadress = document.querySelector("#mailadress").value.trim();
  const subject = document.querySelector("#subject").value.trim();
  const textbox = document.querySelector("#textbox").value.trim();

  if (testLen(name, 5)) {
    nameError.classList.add("hide"); 
    nameError.classList.remove("show");
  } else {
    nameError.classList.add("show");
    nameError.classList.remove("hide");
  }

  if (validateEmail(mailadress)) {
    mailadressError.classList.add("hide");
    mailadressError.classList.remove("show");
  } else {
    mailadressError.classList.add("show");
    mailadressError.classList.remove("hide");
  }

  if (testLen(subject, 15)) {
    subjectError.classList.add("hide");
    subjectError.classList.remove("show");
  } else {
    subjectError.classList.add("show");
    subjectError.classList.remove("hide");
  }

  if (testLen(textbox, 25)) {
    textboxError.classList.add("hide");
    textboxError.classList.remove("show");
  } else {
    textboxError.classList.add("show");
    textboxError.classList.remove("hide");
  }
};

function validateEmail(emailAddy) {
  const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddy);
  return isEmailValid;
}

function testLen(elm, len) {
  if (elm.length > len) {
    return true;
  } else {
    return false;
  }
}