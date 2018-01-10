var REQUIREMENTS = {
  reqs: ["Cool Kid", "Slayed a Dragon", "Good at Swording"],
  list: document.getElementById("reqs"),
  fragment: document.createDocumentFragment(), 
  element: undefined,
      
  displayREQ: function () {
    for (var i = 0, x = this.reqs.length; i < x; i++) {
      this.element = document.createElement("li");
      this.element.appendChild(document.createTextNode(this.reqs[i]));
      this.fragment.appendChild(this.element);
    }

    this.list.appendChild(this.fragment);    
  }
};
