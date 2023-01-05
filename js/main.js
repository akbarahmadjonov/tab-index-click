const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form-input");
const elPositiveButton = document.querySelector(".pos-btn");
const elNegativeButton = document.querySelector(".neg-btn");
const elNeutralButton = document.querySelector(".neu-btn");
const elResult = document.querySelector(".js-res");
const elAlertErr = document.querySelector(".alert-error");

// Call a function
function indexUp(index, node) {
  if (index.value == 1) {
    node.textContent = "Positive";
    elPositiveButton.classList.add("active-color");
    //* Attach text
  } else {
    elPositiveButton.classList.remove("active-color");
  }
  if (index.value == 2) {
    node.textContent = "Negative";
    elNegativeButton.classList.add("active-color");
    //* Attach text
  } else {
    elNegativeButton.classList.remove("active-color");
  }
  if (index.value == 3) {
    node.textContent = "Neutral";
    elNeutralButton.classList.add("active-color");
    //* Attach text
  } else {
    elNeutralButton.classList.remove("active-color");
  }
  //* Checks if the number entered by the user is valid
  if (index.value > 3) {
    elAlertErr.classList.remove("d-none");
  } else {
    elAlertErr.classList.add("d-none");
  }
  elFormInput.value = "";
}
// indexUp(elFormInput, elResult);

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  //   if (evt.target(elNegativeButton)) {
  //     elResult.textContent = "NEGATIVE";
  //   }

  elPositiveButton.addEventListener("click", (evt) => {
    if (elPositiveButton) {
      elResult.textContent = "POSITIVE";
      elResult.setAttribute("class", "active-color mt-4");
    }
  });

  elNegativeButton.addEventListener("click", (evt) => {
    if (elNegativeButton) {
      elResult.textContent = "NEGATIVE";
      elResult.setAttribute("class", "active-color mt-4");
    }
  });

  elNeutralButton.addEventListener("click", (evt) => {
    if (elNeutralButton) {
      elResult.textContent = "NEUTRAL";
      elResult.setAttribute("class", "active-color mt-4");
    }
  });

  indexUp(elFormInput, elResult);
});
