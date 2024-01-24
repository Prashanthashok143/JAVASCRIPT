var str = "MADAM";
var rev = "";
for (i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
if (rev == str) {
  console.log("isPalindrome");
} else {
  console.log("is notPalindrome");
}

