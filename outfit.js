class Outfit {
  constructor(id){
    this.id= id;
    this.title= '';
    this.garments= [];
    this.background= '';
  }
  addGarment(newGarment){
    this.garments.push(newGarment);
    // console.log(this.garments);
  }
  removeGarment(oldGarment){
    // console.log(this.garments);
    this.garments.splice(this.garments.indexOf(oldGarment), 1);
    // console.log(this.garments);
  }
}
