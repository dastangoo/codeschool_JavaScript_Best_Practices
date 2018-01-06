var list = document.getElementById('kotwList'),
    kotw = ["Jenna Rangespike", "Neric Farthing", "Darkin Stonefield"],
    fragement = document.createDocumentFragment(),
    element;
for (var i = 0, x = kotw.length; i < x; i++) {
  element = document.createElement("li");
  element.appendChild(document.createTextNode(kotw[i]));
  // list.appendChild(element);
  fragement.appendChild(element);
}
list.appendChild(fragement);