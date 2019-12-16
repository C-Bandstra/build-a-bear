var outfits =[];
var saveBtn = document.querySelector('#save-button');
var ID = generateId()

saveBtn.addEventListener('click', saveOutfit);

function saveOutfit(){
  var outfit= new Outfit(id, title, garments, background);
  outfits.push(outfit);
}

function generateId() {
  ID= '_' + Math.random().toString(36).substr(2, 9);
};
