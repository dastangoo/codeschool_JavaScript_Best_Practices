var HOFMASTER = {
  list: ["Jar Treen", "Maximo Rarter", "Pol Grist"],
  hof: document.getElementById("hof"),
  fragment: document.createDocumentFragment(), 
  element: undefined,
  
  displayHOF: function() {
    for (var i = 0, x = this.list.length; i < x; i++) {
      this.element = document.createElement("li");
      this.element.appendChild(document.createTextNode(this.list[i]));
      this.fragment.appendChild(this.element);
    }

    this.hof.appendChild(this.fragment);  
  },
  BIOGRAPHIES: {
    "Jar Treen": "Some Text",
    "Maximo Rarter": "Some Text",
    "Pol Grist": "Some Text",
    list: [],
    unfoldBio: function (member) {
      
    }
  }
};

