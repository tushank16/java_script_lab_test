function sum() {
    var i;
    var sum = 0;
    for(i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
document.getElementById("sum").innerHTML = sum(1, 123, 115, 44, 88);