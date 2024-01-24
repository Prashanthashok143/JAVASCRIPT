var a1=[1,2,3,4,5]
a1.sort(function(a,b){return b-a;})
console.log(a1[0],"1st Largest Number");
console.log(a1[2],"3rd Largest Number")

console.log("Normal Method")


var a=[1,2,3,4,5]
for(i=0;i<a.length;i++)
{
  for(j=i+1;j<a.length;j++)
  {
    if(a[i]<a[j])
    {
      let num=a[i];
      a[i]=a[j];
      a[j]=num;
    }
  }
  
}
console.log(a)
console.log(a[0])
console.log(a[2])