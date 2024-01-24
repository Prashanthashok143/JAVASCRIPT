console.log("removing duplicate elements from array.");

let array1=[1,2,3,3,2,1];
function removeDuplicate(array1)
{
    let emptyarray=[];
    for(i=0;i<array1.length;i++)
    {
        if(emptyarray.indexOf(array1[i])==-1)
        {
            emptyarray.push(array1[i])
        }
    }
    return emptyarray;
}
console.log(removeDuplicate(array1))
console.log(array1)


console.log("returning what and how duplicate elements are there in an array");

let arr=[1,2,3,3,2,6,7,7,7]
for(let i=0;i<arr.length;i++)
{
    let count=1;
    if(arr[i]!=-1)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                count++;
                arr[j]=-1;
            }
        }
        if(count>1)
        {
            console.log(arr[i]+":"+count);
        }
    }
}





