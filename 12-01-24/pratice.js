console.log("1")

async function second()
{
  await new Promise((resolve)=>
  {
    setTimeout(()=> {
      console.log("2");
      resolve();
    }, 3000);
  })
  console.log("3")
}
second();


