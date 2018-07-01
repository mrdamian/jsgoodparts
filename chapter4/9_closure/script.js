var add_the_handlers = function (nodes) {
  var i;
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = function (i) {
      return function (e) {
        alert(i);
      };
    }(i);
  }
};

var elements = document.body.getElementsByTagName("div");
add_the_handlers(elements);