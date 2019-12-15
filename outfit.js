class Outfit {
  constructor(id, title, garments, background){
    this.id= id;
    this.title= title;
    this.garments= garments;
    this.background= background;
  }
  addGarment(newGarment){
    this.garments.push(newGarment);
  }
  removeGarment(oldGarment){
    this.garments.splice(this.garments.indexOf(oldGarment), 1);
  }
}
