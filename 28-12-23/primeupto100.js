let count = 0;
for (let i = 2; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) count++;
  }

  if (count == 2)
    //the number divided by itself and by one so,count is 2
    {
 console.log(i); // if we place count inside if statement, (next line )
  }             // if the condition is true ok,we making count as 0 (next line)
  count = 0;    // if the cond is false ,how gonna we make count as 0. and
}               // there previous increments are there next cond fails




