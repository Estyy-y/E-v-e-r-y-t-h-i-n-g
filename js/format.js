function format(num) {
  if (num.lt(1000)) {
    const whole = num.floor().toNumber();
    if (whole >= 100) {
      // 3 whole digits
      return whole.toString();
    } else if (whole >= 10) {
      // 2 digits, 1 decimal
      return num.toFixed(1);
    } else {
      // 1 digit, 2 decimals
      return num.toFixed(2);
    }
  } else {
    // Scientific notation, x.xxey format
    const exponent = Math.floor(num.log10());
    // Use pow and div for mantissa calculation
    const mantissa = num.div(num.constructor.pow(10, exponent)).toFixed(2);
    return mantissa + "e" + exponent;
  }
}

function formatWhole(num) {
  return num.floor().toString();
}