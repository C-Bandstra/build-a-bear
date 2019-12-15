var outfits =[];
var saveBtn = document.querySelector('#save-button');

saveBtn.addEventListener('click', saveOutfit);

function saveOutfit(){
  var outfit= new Outfit(id, title, garments, background);
  outfits.push(outfit);
}
