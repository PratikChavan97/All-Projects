const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  let value = textInput.value;

  const lowerCaseValue = value
    .toLowerCase()
    .replace(/_/g, "")
    .replace(/ /g, "")
    .replace(/,/g, "")
    .replaceAll(".", "")
    .replace(/-/g, "")
    .replaceAll("/", "")
    .replaceAll("\\", "")
    .replaceAll("(", "")
    .replaceAll(")", "");
  console.log(lowerCaseValue);

  const reverseValue = lowerCaseValue.split("").reverse().join("");
  console.log(reverseValue);

  if (lowerCaseValue === "") {
    alert("Please input a value");
  } else if (lowerCaseValue === reverseValue) {
    result.textContent = `${value} is a palindrome`;
  } else {
    result.textContent = `${value} is not a palindrome`;
  }
});
