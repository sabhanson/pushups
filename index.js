function dropAndGiveMe(pushups) {
  // this function accepts a variable called pushups as a "parameter"

  if (typeof pushups !== "number") {
    //checks that the argument passed in is actually a number, it must be a number for the rest of our code to work
    console.log("not a number, try again");
    return;
  }

  // the drill sargeant is yelling at the soldier and telling him to do the amount of pushups that was "passed in to the function"
  console.log(
    `DRILL SARGEANT: "You are a terrible soldier... Drop and give me ${pushups}!"`
  );

  // the soldier calls out each time they do a pushup
  for (let index = 0; index <= pushups; index++) {
    console.log(`SOLDIER: "${index}!"`);
  }
}

dropAndGiveMe(20);

// const functionAndTimer = setTimeout(myFunctionToRun, 5000); // 5 seconds until myFunctionToRun goes
