
var closet = [];
document.onload = generateId();
//rename backt to outfits before turning it//

var saveBtn = document.querySelector('#save-button', createOutfit);
var wardrobe = document.querySelector('.wardrobe');

wardrobe.addEventListener('click', styleBear);

function styleBear() {
  console.log(event.target.getAttribute('id'));
}


function createOutfit(id) {
  var outfit = new Outfit(id);
  closet.push(outfit);
  console.log(outfit)
}

function generateId() {
var id = Math.random().toString(36).substr(2, 9);
console.log(id);
createOutfit(id);
};
