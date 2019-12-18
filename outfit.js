class Outfit {
  constructor(id, title, garments, background){
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
    console.log(this.garments);
    this.garments.splice(this.garments.indexOf(oldGarment), 1);
    console.log(this.garments);
  }
}
