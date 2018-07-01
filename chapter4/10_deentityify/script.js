Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

String.method('deentityify', function () {

  // The entity table. It maps entity names to
  // characters.
  var entity = {
    quot: '"',
    lt: '<',
    gt: '>'
  };

  // Return the deentityify method.
  return function () {
    // This is the deentityify method. It calls the string
    // replace method, looking for substrings that start
    // with '&' and end with ';'. If the characters in
    // between are in the entity table, then replace the
    // entity with the character from the table. It uses
    // a regular expression (Chapter 7).
    return this.replace(/&([^&;]+);/g,
      function (a, b, c) {
        var r = entity[b];
        return typeof r === 'string' ? r : a;
      }
    );
  };
}());

document.writeln('&lt;&quot;&gt'.deentityify());

// ********* Replace arguments sample
//
// function replacer(match, p1, p2, p3, offset, string) {
//   // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//   return [p1, p2, p3].join(' - ');
// }
// var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// console.log(newString);  // abc - 12345 - #$*%
