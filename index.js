// code your solution here
// Define the saturdayFun function declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define the mondayWork function expression
  const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  // Define the wrapAdjective function
  function wrapAdjective(flair = '*') {
    return function (adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  
