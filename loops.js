
//for of
const dailyRoutine=["Wakeup","Eat","Sleep"];
for(let routine of dailyRoutine){
   console.log(routine);
}

//for each
const daily=["Wakeup","Eat","Sleep"];
daily.forEach(function(routine){
    console.log(routine);
})

//for in
const dailyRoutines=["Wakeup","Eat","Sleep"];
for(let routine in dailyRoutines){
    console.log(routine);
}