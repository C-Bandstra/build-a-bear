
var closet = [];
var outfit
document.onload = generateId();
//rename backt to outfits before turning it//

var saveBtn = document.querySelector('#save-button', createOutfit);
var wardrobe = document.querySelector('.wardrobe');
wardrobe.addEventListener('click', styleBear);

function styleBear() {
  var item = event.target.getAttribute('id');
  outfit.addGarment(item);
  highlightButton(event);

}


function highlightButton(){
  event.target.classList.add('highlight');
    
}


function createOutfit(id) {
  outfit = new Outfit(id);
  closet.push(outfit);
  console.log(outfit)
}

function generateId() {
var id = Math.random().toString(36).substr(2, 9);
console.log(id);
createOutfit(id);
};
