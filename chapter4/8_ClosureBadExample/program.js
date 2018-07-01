var add_the_handlers = function(nodes) {
	var i;
	for (i = 0; i < nodes.length; i++) {
		nodes[i].onclick = function(e) {
			alert(i);
		}
	}
}		

function getChildNodes(node) {
    var children = new Array();
    for(var child in node.childNodes) {
        if(node.childNodes[child].tagName == 'DIV') {
            children.push(node.childNodes[child]);
        }
    }
    return children;
}

var target = document.getElementById("parentDiv");
var nodes = getChildNodes(target);
add_the_handlers(nodes);