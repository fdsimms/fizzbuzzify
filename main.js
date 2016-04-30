
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
          if (coercesToNumber(word) && word != 0) {
            newText[idx] = fizzbuzzParse(word);
          }
        });

        if (text !== newText) {
          var newNode = document.createTextNode(newText.join(" "));
          node.replaceChild(newNode, child);
        }
      }
    }
  }
}

function coercesToNumber (word) {
  return Number(word) === Number(word);
}

function fizzbuzzParse (word) {
  if (word % 3 === 0 && word % 5 === 0) {
    return "fizzbuzz";
  } else if (word % 5 === 0) {
    return "buzz";
  } else if (word % 3 === 0) {
    return "fizz";
  } else {
    return word;
  }
}

replaceText();
