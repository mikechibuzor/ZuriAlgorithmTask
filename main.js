function convertFahrToCelsius(fahrenheit) {
  // store type
  const paramType = typeof fahrenheit;
  let errorMessage;

  // since only a number and string type is accepted
  if (paramType === "number" || paramType == "string") {
    const celsius = ((parseInt(fahrenheit) - 32) * (5 / 9)).toFixed(4);
    console.log(celsius);
    return celsius;
  } else {
    //  JSON.stringify method is used to format the error message in the format it is to be outputted
    errorMessage = `${JSON.stringify(
      fahrenheit
    )} is not a valid number but a/n ${paramType}`;
    console.log(errorMessage);
    return errorMessage;
  }
}

// Test cases
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({ temp: 0 });

/*----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------*/

function checkYuGiOh(n) {
  const cast2Number = parseInt(n);
  let arrOfNumbers = [];

  if (cast2Number) {
    //   initialiazing arrOfNumbers from 1 to n
    for (let i = 1; i <= n; i++) {
      arrOfNumbers.push(i);
    }
    const outputArray = arrOfNumbers.map((number) => multipleChecker(number));
    console.log(JSON.stringify(outputArray));
  } else {
    console.log(`invalid parameter: ${JSON.stringify(n)}`);
  }
}

/*--------------------------------------------------------------------------------------
    helper function that checks whether a particular element in an array is 
    a multiple of 2 or(and)3 or(and) 5
----------------------------------------------------------------------------------------*/
function multipleChecker(arrElement) {
  let validMultiple = "";

  if (arrElement % 2 === 0) {
    validMultiple += validMultiple ? "-yu" : "yu";
  }
  if (arrElement % 3 === 0) {
    validMultiple += validMultiple ? "-gi" : "gi";
  }
  if (arrElement % 5 === 0) {
    validMultiple += validMultiple ? "-oh" : "oh";
  }
  if (arrElement % 2 !== 0 && arrElement % 3 !== 0 && arrElement % 5 !== 0) {
    validMultiple = arrElement;
  }

  return validMultiple;
}

// Test cases
checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh");
