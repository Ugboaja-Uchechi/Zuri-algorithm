

//   TASK 1
//         CONVERTING FAHRENHEIT TO CELSIUS

function convertFahrToCelsius(fahrenheit) {
    if (isInputInvalid(fahrenheit)) {
      let errorMessage = '';
  
      if (Array.isArray(fahrenheit)) {
        errorMessage = printErrorMessage(fahrenheit, "array");
      }
     
      else if (fahrenheit !== null && fahrenheit !== undefined && fahrenheit.constructor.name === "Object") {
        errorMessage = printErrorMessage(fahrenheit, typeof fahrenheit);
      } 
      else if (isTypeStringAndIsEmpty(fahrenheit)) {
        errorMessage = printErrorMessage(fahrenheit, typeof fahrenheit);
      } 
      else {
        errorMessage = printErrorMessage(fahrenheit, typeof fahrenheit);
      }
      return errorMessage;
    } else {
      let celsius = ((fahrenheit - 32) * 5) / 9;
      celsius = parseFloat(celsius.toFixed(4));
      return celsius;
    }
  }
  
  function isInputInvalid(input) {
    return (
      isNaN(input) ||
      input === null ||
      input === undefined ||
      input === true || 
      input === false || 
      isTypeStringAndIsEmpty(input) ||
      (Array.isArray(input) && input.length === 0)
    );
  }
  
  function isTypeStringAndIsEmpty(value) {
    return typeof value === "string" && value.trim().length === 0;
  }
  
  function printErrorMessage(value, type) {
    let message = "";
  
    switch (type) {
      case "array":
        message = `[${value}] is not a valid number but a/an ${type}.`;
        break;
      case "object":
        value = JSON.stringify(value);
        message = `${value} is not a valid number but a/an ${type}.`;
        break;
      default:
        message = `${value} is not a valid number but a/an ${type}.`;
        break;
    }
  
    return message;
  }
  
  console.log(convertFahrToCelsius(0));
  console.log(convertFahrToCelsius("0"));

  console.log(convertFahrToCelsius([1, 2, 3]));
  console.log(convertFahrToCelsius({ temp: 0 }));
 

// TASK 2
                     //CHECK YU GI OH

  function checkYuGiOh(n) {
    let result = [];
  
    if (isInputInvalid(n)) {
  
      if (Array.isArray(n)) {
        return `invalid parameter: [${n}]`;
      } 
      else if (n !== null && n !== undefined && n.constructor.name === 'Object') {
        let value = JSON.stringify(n);
        return `invalid parameter: ${value}`;
      }
      return `invalid parameter: ${n}`;
    }
  

    n = Number(n);
  
    for (let i = 1; i <= n; i++) {
  
      let currentValue = '';
  
 
      if (i % 2 === 0) {
        currentValue += 'yu';
      }
  
      if (i % 3 === 0) {
        currentValue += 'gi';
      }
  
      if (i % 5 === 0) {
        currentValue += 'oh';
      }
  

      if (currentValue.length === 4) {
        currentValue = currentValue.slice(0, 2) + "-" + currentValue.slice(2);
      } 
      
      else if (currentValue.length === 6) {
        currentValue = currentValue.slice(0, 2) + "-" + currentValue.slice(2, 4) + "-" + currentValue.slice(4);
      }
  
      if (currentValue.length === 0) {
        result.push(i);
      } else {
        result.push(currentValue);
      }
    }
  
    return result;
  }
  
  console.log(checkYuGiOh(10));
  console.log(checkYuGiOh("5"));
  console.log(checkYuGiOh("fizzbuzz is meh"));