document.onload = generateId();
var outfits =[];

var saveBtn = document.querySelector('#save-button', saveOutfit);

function saveOutfit(id){
  var outfit= new Outfit(id, title, garments, background);
  outfits.push(outfit);
}

function generateId() {
var id= Math.random().toString(36).substr(2, 9);
console.log(id);
return id;
};
