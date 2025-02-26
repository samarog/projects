// If you lived until 90, how many days, weeks and months you have left?

function lifeInWeeks(age) {

  let daysWhen90 = 90 * 365;
  let weeksWhen90 = 90 * 52;
  let monthsWhen90 = 90 * 12;

  let currentDayAge = age * 365;
  let currentWeekAge = age * 52;
  let currentMonthAge = age * 12;

  if (age >= 80 && age <= 89) {
    console.log (`Tick tock, tick tock. It's the final countdown, piririruuu. You are ${age} years old. You have ${daysWhen90 - currentDayAge} days, ${weeksWhen90 - currentWeekAge} weeks, and ${monthsWhen90 - currentMonthAge} months left.`)
  }
  
  else if (age >= 90) {
     console.log (`My man, you already met your Creator.`)
  }

  else {
    console.log(`You are ${age} years old. You have ${daysWhen90 - currentDayAge} days, ${weeksWhen90 - currentWeekAge} weeks, and ${monthsWhen90 - currentMonthAge} months left.`)
  }

} 