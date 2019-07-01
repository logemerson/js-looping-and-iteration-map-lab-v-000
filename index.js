// `lowerCaseDrivers` - this function takes an array of drivers, and returns an array of the drivers names in lowercase.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

//`nameToAttributes` - this function takes an array of drivers with their first and last name separated by a space (e.g., ['Bobby Smith', 'Anita Lovelace'], and returns an array of JavaScript objects with `firstName` and `lastName` attributes.

function nameToAttributes(drivers) {
  const driverObjsArr = [];

  drivers.map(function(driver) {
    // driver = 'Kevin Durant'
    const driverObj = {};
    
    const splitDriverArr = driver.split(' ');
    //console.log('splitDriverArr = ...');
    //console.log(splitDriverArr);
    // splitDriverArr = ['Kevin', 'Durant']

    driverObj['firstName'] = splitDriverArr[0];
    driverObj['lastName'] = splitDriverArr[1];

    driverObjsArr.push(driverObj);
  })
  console.log('driverObjsArr = ...')
  console.log(driverObjsArr);
  
  debugger;
  
  return driverObjsArr;
}


// `attributesToPhrase` - this function takes an array of drivers as JavaScript objects and returns a string saying `"<NAME OF DRIVER> is from hometown"` for each JavaScript object in the array.

