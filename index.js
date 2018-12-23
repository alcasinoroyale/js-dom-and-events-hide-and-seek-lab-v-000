function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(cl, id) {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let secnode = node.children[0]

  while (secnode) {
    node = secnode
    secnode = node.children[0]
  }

  return node
}
