// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
1
const findMatching = (drivers, string) => drivers.filter(driver =>  driver.toLowerCase() === string.toLowerCase() )

const fuzzyMatch = (drivers,string)=> drivers.filter(driver=> driver.startsWith(string)=>true;)
