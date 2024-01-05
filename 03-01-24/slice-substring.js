//Diff Btwn slice and substring
var str1="Prashanth"
var str2=str1.slice()
var str3=str1.substring()
console.log(str2) 
console.log(str3) // If,we give empty strings,gives same output as before.

var str4=str1.slice(1,1)
var str5=str1.substring(1,1)
console.log(str4) 
console.log(str5) // if we give starting and ending position same values,output will empty.

var str6=str1.slice(3,1) // In slice,if the ending value is less than starting value ,it return empty.
var str7=str1.slice(3,10) // In slice,if the ending value greaterthan given string length ,return the output from starting value.
var str8=str1.substring(4,1) // In substring, if the starting value is greater than ending value then values will be swiped
var str9=str1.substring("hi",1) // if we give NaN or empty ,it will considered as 0. 
var str10=str1.slice(-1)
var str11=str1.substring(-1) // the negative values not accepted in substring method.
console.log(str6);
console.log(str7);
console.log(str8);
console.log(str9);
console.log(str10);
console.log(str11);


