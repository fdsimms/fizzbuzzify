
function replaceText() {
  var elements = document.getElementsByTagName("*");

  for (var i = 0; i < elements.length; i++) {
    var node = elements[i];
    var children = node.childNodes;

    for (var j = 0; j < children.length; j++) {
      var child = children[j];

      if (child.nodeType == 3) {
        var text = child.nodeValue;
        var newText = text.split(" ");
        newText.forEach(function (word, idx) {
          if (word % 3 % word % 5) {
            newText[idx] = "fizzbuzz";
          } else if (word % 5) {
            newText[idx] = "buzz";
          } else if (word % 3) {
            newText[idx] = "fizz";
          }
        });

        if (text !== newText) {
          node.replaceChild(document.createTextNode(newText.join(" ")), child);
        }
      }
    }
  }
}

  console.log('hey')
  replaceText();
