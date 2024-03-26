// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
  
  return drivers.filter(driver => driver.toLowerCase().includes(string.toLowerCase()));;
}
function fuzzyMatch(drivers, letters){
  
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));;

}
function matchName(drivers, name){
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}
