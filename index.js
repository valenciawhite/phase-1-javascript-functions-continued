function razzle(lawyer = "Billy", target = "'em"){
    console.log(`${lawyer} razzle-dazzles ${target}!`);
}

function demoChain(name) {
  const part1 = "hi";
  return function () {
    const part2 = "there";
    return function () {
      console.log(`${part1.toUpperCase()} ${part2} ${name}`);
    };
  };
}


//  Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate". Run learn to verify you've gotten the first set of tests passing before continuing with the lesson.

//Make a function 
function saturdayFun(satActivity = "roller-skate"){
    console.log(`This Saturday, I want to ${satActivity}!`);
    return `This Saturday, I want to ${satActivity}!`;
}

function mondayWork(monActivity = "go to the office"){
    return `This Monday, I will ${monActivity}.`;
}

function wrapAdjective(detailFlair = "*"){
    const innerFunction = function (adjChoice = "special"){
        return `You are ${detailFlair}${adjChoice}${detailFlair}!`;
    };
    return innerFunction;
    }

