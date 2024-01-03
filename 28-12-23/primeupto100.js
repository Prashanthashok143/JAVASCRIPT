for(var i=0;i<=100;i++)
{
    var n=0;
    for(var j=2;j<=i/2;j++)
    {
        if(i%j==0)
        {
            n=1;
            break;
        }
    }
       if(n==0)
       {
        console.log(i);
       } 
           
        
    }
