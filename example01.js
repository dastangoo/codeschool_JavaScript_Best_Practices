var armory = { addSword: function (sword) {
    // this.swords = this.swords ? this.swords : [];
    // this.swords = this.swords || [];
    this.swords =  [] || this.swords ;
    this.swords.push(sword);
  }
};

armory.addSword("Broadsword");
armory.addSword("Katana");
armory.addSword("Claymore");
armory.addSword("Scimitar");
console.log(armory);

// var result1 = 42 || undefined;
var result1 = undefined || 42;
console.log(result1);


// var result2 = ["Sweet", "array"] || 0;
var result2 = 0 || ["Sweet", "array"];
console.log(result2);

// var result3 = { type: "ring", stone: "diamond" } || "";
var result3 = "" || { type: "ring", stone: "diamond" };
console.log(result3);

