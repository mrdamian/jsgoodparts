var callCount = 0;
var fibonacci = function (n) {
  callCount++;
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

for (var i = 0; i <= 10; i += 1) {
  document.writeln(`// ${i} : ${fibonacci(i)} <br>`);
}

document.writeln(`// CallCount ${callCount}<br>`);
document.writeln(`Memoization version <br>`);

callCount = 0;

var fibonacciMemoized = function () {
  var memo = [];
  var fib = function (n) {
    callCount++;
    var result = memo[n];
    if (typeof result !== 'number') {
      result = n < 2 ? n : fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
}();

for (var i = 0; i <= 10; i += 1) {
  document.writeln(`// ${i} : ${fibonacciMemoized(i)} <br>`);
}

document.writeln(`// CallCount ${callCount}<br>`);

document.writeln(`General memoization pattern <br>`);
callCount = 0;

var memoizer = function (memo, fundamental) {
  var memoShell = function (n) {
    callCount++;
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fundamental(memoShell, n);
      memo[n] = result;
    }
    return result;
  };
  return memoShell;
};

var fibonacciUsingMomoizer = memoizer([0, 1], function (shell, n) {
  return shell(n - 1) + shell(n - 2);
});


for (var i = 0; i <= 10; i += 1) {
  document.writeln(`// ${i} : ${fibonacciUsingMomoizer(i)} <br>`);
}
document.writeln(`// CallCount ${callCount}<br>`);

var factorial = memoizer([1, 1], function (shell, n) {
  return n * shell(n - 1);
});

document.writeln(`// 5! = ${factorial(5)}<br>`);