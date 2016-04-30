function replaceText() {
  var elements = document.getElementsByTagName('*')

  for (i = 0; i < elements.length; i++) {
    var node  = elements[i];
    var children = node.childNodes;

    for (j = 0; j < children.length; j++) {
      var childNode = children[j];

      if (childNode.nodeType == 3) {
        var text = childNode.nodeValue;
        var newText = text.replace(/Bernie Sanders/gi, 'Birdie Sanders');

        if (text !== newText) {
          node.replaceChild(document.createTextNode(newText),childNode);
        }
      }
    }
  }
}


document.addEventListener('DOMContentLoaded', function() {
  replaceText();
});
