var pattern=/^(?=[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@])[A-z0-9@]{9,16}/g
var name1="Prashanth@96030"
var check=name1.match(pattern)
console.log(check);