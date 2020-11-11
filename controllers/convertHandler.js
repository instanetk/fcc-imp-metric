/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    let result;

    const array = input.split("");
    let index = [];

    // Find beginning of unit in input string
    for (char of array) {
      let test = /[a-z]/;
      if (char.match(test)) {
        index.push(array.indexOf(char));
      }
    }

    let whole = array.slice(0, index[0]).join("");

    // If number is whole or a fraction
    let fraction = /\//;
    if (whole.match(fraction) === null) {
      result = whole || 1;
    } else {
      console.log("fraction");
      let fract = whole.split("/");
      console.log(fract);
      result = Number(fract[0]) / Number(fract[1]);
    }

    console.log(result);
    return result;
  };

  this.getUnit = function (input) {
    let result;

    const array = input.split("");
    let index = [];

    // Find beginning of unit in input string
    for (char of array) {
      let test = /[a-z]/;
      if (char.match(test)) {
        index.push(array.indexOf(char));
      }
    }
    result = array.slice(index[0]).join("");
    console.log(result);

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    switch (initUnit) {
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      default:
        result = "error";
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;

    console.log(unit, typeof unit);

    switch (unit) {
      case "mi":
        result = { in: "miles", out: "kilometers" };
        break;
      case "km":
        result = { in: "kilometers", out: "miles" };
        break;
      case "gal":
        result = { in: "gallons", out: "liters" };
        break;
      case "l":
        result = { in: "liters", out: "gallons" };
        break;
      case "lbs":
        result = { in: "pounds", out: "kilograms" };
        break;
      case "kg":
        result = { in: "kilograms", out: "pounds" };
        break;
      default:
        result = "error";
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        result = 0;
    }

    console.log(result);
    return result.toFixed(5);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    if (returnUnit === "error" && initNum < 0)
      return { error: "invalid number and unit" };
    if (returnUnit === "error") return { initUnit: "invalid unit" };
    if (initNum < 0) return { initNum: "invalid number" };

    let spellOut = this.spellOutUnit(initUnit);
    let result = {
      initNum: Number(initNum),
      initUnit,
      returnNum: Number(returnNum),
      returnUnit,
      string: `${initNum} ${spellOut.in} converts to ${returnNum} ${spellOut.out}`,
    };

    console.log(result);

    return result;
  };
}

module.exports = ConvertHandler;
