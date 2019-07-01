// `lowerCaseDrivers` - this function takes an array of drivers, and returns an array of the drivers names in lowercase.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

//`nameToAttributes` - this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with `firstName` and `lastName` attributes.

function nameToAttributes(drivers) {
  const driverArr = [];
  debugger;

  return drivers.map(function(driver) {
    const fName = driver[0];
    const lName = driver[1];
    const newDriver = {}
    
    newDriver['firstName'] = fName;
    newDriver['lastName'] = lName;
    driverArr.push(newDriver);
  })

  return driverArr;
}


// `attributesToPhrase` - this function takes an array of drivers as JavaScript objects and returns a string saying `"<NAME OF DRIVER> is from hometown"` for each JavaScript object in the array.

