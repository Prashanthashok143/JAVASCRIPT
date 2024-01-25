//fake Api call
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((result)=>console.log(result));

// old method
let oldMethod=new XMLHttpRequest();
oldMethod.open("GET","https://jsonplaceholder.typicode.com/users")
oldMethod.send();
oldMethod.onload=function()
{
    if(oldMethod.status!==200)
    {
        console.log("error");
    }
    else
    {
        console.log(oldMethod.response);
    }
}
oldMethod.onerror=function()
{
    console.log("error");
}
console.log(oldMethod.status)
