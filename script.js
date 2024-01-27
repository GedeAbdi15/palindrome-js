// fungsi mengecek palindrome

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

// fungsi tombol
function checkPalindrome() {
  const inputElement = document.getElementById("inputan");
  const hasilElement = document.getElementById("result");
  const statusElement = document.getElementById("status");
  const inputString = inputElement.value;
  const inputResult = inputString.split("").reverse().join("");

  if (isPalindrome(inputString)) {
    hasilElement.textContent = inputResult;
    statusElement.textContent = "Palindrome";
  } else {
    hasilElement.textContent = inputResult;
    statusElement.textContent = "Bukan palindrome";
  }
}
