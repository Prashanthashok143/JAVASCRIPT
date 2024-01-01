function myFun(p) 
{
if(p<2)
{
    return "it is not Prime number"; // 0,1 is not prime number
}
for(var s=2;s<p;s++) // 2 is prime and s value should be less than p(value)
    {
        if(p%s==0) //from there we are checking the number(p) divisible by any from 2,3,4,.. if we get remainders 0
       
    {
        return "it is also not a prime number" 
    }
}
return "It is a Prime Number"
}
console.log(myFun(5))