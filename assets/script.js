const emailInput = document.getElementById("email");
const emailConfirmationInput = document.getElementById("emailConfirmation");
const emailError = document.getElementById("emailError");

emailConfirmationInput.addEventListener("input", () => {
  if (emailInput.value !== emailConfirmationInput.value) {
    emailError.textContent = "Emails do not match";
  } else {
    emailError.textContent = "";
  }
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
  if (emailInput.value !== emailConfirmationInput.value) {
    emailError.textContent = "Emails do not match";
    event.preventDefault();
  }
});
