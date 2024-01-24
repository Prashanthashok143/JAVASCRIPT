// asceding order
var a=[1,2,3,4,5]
a.sort(function (a,b)
{
return a-b;
})
console.log(a)


//desceding order
var b=[1,2,3,4,5]
b.sort(function (c,d)
{
return d-c;
})
console.log(b)


var a1=[4,5,2,3,1]
console.log(a1,"Convert into asceding and desceding order")
for(var i=0;i<a1.length;i++)
{
    for(j=0;j<a1.length;j++)
    {
        if(a1[j]>a1[j+1]) // here we,change ">" to "<" we get asceding order
        {
            var num=a1[j];
            a1[j]=a1[j+1];
            a1[j+1]=num;
        }
    }
}
console.log(a1);



var a1=[4,5,2,3,1]
for(i=0;i<a1.length;i++)
{
  for(j=i+1;j<a1.length;j++)
  {
    if(a1[i]<a1[j])  // here we,change "<" to ">" we get asceding order
    {
      var num=a1[i];
      a1[i]=a1[j];
      a1[j]=num;
    }
  }
  
}
console.log(a1)


