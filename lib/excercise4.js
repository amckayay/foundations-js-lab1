/* ----------------- Hungry Lion ----------------------------------------
 As long as the lion is well-fed, he doesn't take too much heed of the
 humans that pass through. Unfortunately, the new caretaker is a little
 absent minded.

 The lion needs 4 meals per day on average to stay happy. You're going to
 figure out how many days it took before the lion decided to supplement his
 diet with the caretaker.
*/


/*
 TODO: 20 points
 Cycle through the days in mealsPerDay. At each day, print out the average
 number of meals/day the lion got since the new caretaker started.
 tooHungryDay should receive the number of days before the lion started
 pondering protein supplements (the first day the average dips below 4
 meals)
*/
exports.numDays = function() {
// number of times the new caretaker fed the lion. one array entry per day
  var mealsPerDay = [ 5, 4, 3, 6, 2, 4, 3, 4, 5, 1 ],
    tooHungryDay;
  // TODO: Implement

  day1 = mealsPerDay[0]/4;
  day2 = (mealsPerDay[0]+mealsPerDay[1])/8;
  day3 = (mealsPerDay[0]+mealsPerDay[1]+mealsPerDay[2])/12;
  day4 = (mealsPerDay[0]+mealsPerDay[1]+mealsPerDay[2]+mealsPerDay[3])/16;
  day5 = (mealsPerDay[0]+mealsPerDay[1]+mealsPerDay[2]+mealsPerDay[3]+mealsPerDay[4])/20;
  day6 = (mealsPerDay[0]+mealsPerDay[1]+mealsPerDay[2]+mealsPerDay[3]+mealsPerDay[4]+mealsPerDay[5])/24;
  day7 = (mealsPerDay[0]+mealsPerDay[1]+mealsPerDay[2]+mealsPerDay[3]+mealsPerDay[4]+mealsPerDay[5]+mealsPerDay[6])/28;


  tooHungryDay = mealsPerDay[6];
  return tooHungryDay;
};

/*
iterate through all the days.
at each day, calculate the averate up to that day
*/
