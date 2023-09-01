const inputField = document.querySelectorAll("input");
const small = document.querySelectorAll("small");
const span = document.querySelectorAll("span");
const btn = document.querySelector(".btn");
const eye = document.querySelector(".input .fa-eye");
const eyeslash = document.querySelector(".input .fa-eye-slash");
const showBtn = document.querySelector(".input span2");

const uppercaseRegex = /[A-Z]/; // Regular expression to match an uppercase letter
const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/; // Regular expression to match special characters
const LowerCaseRegex = /[a-z]/;
const DigitRegex = /\d/;


function validateInput(input, small, span) {
  if (input.value === "") {
    small.style.display = "flex";
    span.style.display = "block";
    input.classList.add("error");
    showBtn.style.display = "none";
  } else {
    small.style.display = "none";
    span.style.display = "none";
    input.classList.remove("error");
    showBtn.style.display = "block";
  }
}

  


for (let i = 0; i < inputField.length; i++) {
  inputField[i].addEventListener("keyup", function () {
    validateInput(inputField[i], small[i], span[i]);
  });
}

showBtn.addEventListener("click", function () {
  eye.classList.toggle("active");
  eyeslash.classList.toggle("active");
  if (eye.classList.contains("active")) {
    password.type = "password";
  } else {
    password.type = "text";
  }
});

// the correct one
// Assuming inputField[3] represents your input field element

inputField[3].addEventListener("keyup", function () {
  const password = inputField[3].value; // Get the password from the input field

  const hasMinimumLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+[\]{};':"\\|,.<>?/]+/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);

  if (
    hasMinimumLength &&
    hasUppercase &&
    hasSpecialChar &&
    hasLowercase &&
    hasDigit
  ) {
    // small[3].style.display = "flex";
    // small[3].textContent = "correct password";
    // small[3].style.color = "green";
    // showBtn[3].style.display = "block";

    // console.log('correct');
  } else {
    small[3].style.display = "flex";
    small[3].textContent = "Invalid password";
    small[3].style.color = "red";
    span[3].style.display = "block";
    showBtn.style.display = "none";
    // console.log('invalid password');
  }
});

btn.addEventListener("click", function (e) {
  // e.preventDefault();
  for (let i = 0; i < inputField.length; i++) {
    validateInput(inputField[i], small[i], span[i]);
  }
});



