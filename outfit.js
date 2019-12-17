class Outfit {
  constructor(id, title, background){
    this.id= id;
    this.title= title;
    this.garments= [];
    this.background= background;
  }
  addGarment(newGarment){
    this.garments.push(newGarment);
    console.log(this.garments);
  }
  removeGarment(oldGarment){
    this.garments.splice(this.garments.indexOf(oldGarment), 1);
  }
}
