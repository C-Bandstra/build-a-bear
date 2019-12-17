class Outfit {
  constructor(id, title, garments, background){
    this.id= id;
    this.title= title;
    this.garments= ["top-hat", "tuxedo", "earrings", "sun-hat"];
    this.background= background;
  }
  addGarment(newGarment){
    // newGarment= 'sun-hat';
    // ['top-hat']
    // check if garments find '-hat'if does, removeGarment('top-hat');
    this.garments.push(newGarment);
  }
  removeGarment(oldGarment){
    // this.garments.splice(this.garments.indexOf(oldGarment), 1);

  }
}

 {id:1, title:"fancypants", garments:["hat", "bowtie", "fancypants"], background:"beach", addGarment: function(){}, removeGarment: function(){}}
