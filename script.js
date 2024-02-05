const displayPassword = document.querySelector(".result");
const passwordText = document.querySelector(".result").innerText;
const copyButton = document.querySelector(".copy-password");
const copyStatus = document.querySelector(".copied");
const rangeInput = document.querySelector(".rangeInput");
const rangeValue = document.querySelector(".rangeValue");
const generateButton = document.querySelector(".generate");
const checkboxs = document.querySelectorAll(".check-box");

const indicator_1 = document.querySelector(".indicator_1");
const indicator_2 = document.querySelector(".indicator_2");
const indicator_3 = document.querySelector(".indicator_3");
const indicator_4 = document.querySelector(".indicator_4");

// Default Values
const store = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "^",
  "%",
  "@",
  "*",
  "^",
];

// Character Length
let updateRangeValue = () => {
  let length = Number(rangeInput.value);
  rangeValue.innerHTML = length;
  return length;
};
updateRangeValue();

rangeInput.addEventListener("input", updateRangeValue);

// Checkbox
let checkBoxValue = [];
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    let value = checkbox.value;

    if (checkbox.checked) {
      if (!checkBoxValue.includes(value)) {
        checkBoxValue.push(value);
      }
    } else {
      checkBoxValue = checkBoxValue.filter((item) => item !== value);
    }

    updatePasswordStrengthIndicator();
  });
});

// Password Strength Indicator
const updatePasswordStrengthIndicator = () => {
  if (checkBoxValue.length === 1) {
    indicator_1.classList.add("red");
  } else {
    indicator_1.classList.remove("red");
  }

  if (checkBoxValue.length === 2) {
    indicator_1.classList.add("orange");
    indicator_2.classList.add("orange");
  } else {
    indicator_1.classList.remove("orange");
    indicator_2.classList.remove("orange");
  }

  if (checkBoxValue.length === 3) {
    indicator_1.classList.add("yellow");
    indicator_2.classList.add("yellow");
    indicator_3.classList.add("yellow");
  } else {
    indicator_1.classList.remove("yellow");
    indicator_2.classList.remove("yellow");
    indicator_3.classList.remove("yellow");
  }

  if (checkBoxValue.length === 4) {
    indicator_1.classList.add("green");
    indicator_2.classList.add("green");
    indicator_3.classList.add("green");
    indicator_4.classList.add("green");
  } else {
    indicator_1.classList.remove("green");
    indicator_2.classList.remove("green");
    indicator_3.classList.remove("green");
    indicator_4.classList.remove("green");
  }
};

// Generate Random Password
let password = "";

const generatedPassword = () => {
  password = "";

  const length = updateRangeValue();
  let characters = "";

  // Uppercase
  if (checkBoxValue.includes("Uppercase")) {
    const uppercaseLetters = store.filter((element) => /^[A-Z]$/.test(element));
    characters += uppercaseLetters.join("");
  }

  // Lowercase
  if (checkBoxValue.includes("Lowercase")) {
    const lowercaseLetters = store.filter((element) => /^[a-z]$/.test(element));
    characters += lowercaseLetters.join("");
  }

  // Numbers
  if (checkBoxValue.includes("Numbers")) {
    const numbers = store.filter((element) => !isNaN(element));
    characters += numbers.join("");
  }

  // Symbols
  if (checkBoxValue.includes("Symbols")) {
    const symbols = store.filter(
      (element) => isNaN(element) && !/^[a-zA-Z]$/.test(element)
    );
    characters += symbols.join("");
  }

  characters = characters
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  password = characters.slice(0, length);

  updatePasswordStrengthIndicator();
};

// Handle Generate Button
generateButton.addEventListener("click", () => {
  if (checkBoxValue.length > 0) {
    password = "";
    generatedPassword();
    console.log(`Password ${password}`);
    displayPassword.innerText = password;
  } else {
    alert("Please Select Password Type..");
  }
});

// Copy button
copyButton.addEventListener("click", () => {
  if (password.length > 0) {
    const passwordText = displayPassword.innerText;
    const textarea = document.createElement("textarea");
    textarea.value = passwordText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    // Copy Status
    copyStatus.classList.add("visible");
    setTimeout(() => {
      copyStatus.classList.remove("visible");
    }, 1000);
  } else {
    alert("No password generated. Click 'Generate' to create a password.");
  }
});
