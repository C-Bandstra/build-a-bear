
var closet = [];
var outfit
document.onload = generateId();
//rename backt to outfits before turning it//

var saveBtn = document.querySelector('#save-button', createOutfit);
var wardrobe = document.querySelector('.wardrobe');
wardrobe.addEventListener('click', styleBear);


function styleBear() {
  var item = event.target.getAttribute('id');
  var category = item.split('-');
  // console.log(category);
  var oldGarment = outfit.garments.find(function(garment){
    if(garment.includes(category[1])){
      return true;
    }
  })
  if (oldGarment != undefined){
    outfit.removeGarment(oldGarment)
  }
  outfit.addGarment(item);
  pickCategory();
}

  function pickCategory() {
    if(event.target.classList.contains('hat-button')) {
      highlightHatButton(event);

    } else if(event.target.classList.contains('clothes-button')) {
        highlightClothesButton(event);

    } else if(event.target.classList.contains('accessories-button')) {
        highlightAccessoriesButton(event);

    } else if(event.target.classList.contains('backgrounds-button')) {
        highlightBackgroundsButton(event);
    }
 }

  var hats = document.querySelectorAll('.hat-button');

  function highlightHatButton() {
    for(var i = 0; i < hats.length; i++) {
      hats[i].classList.remove('highlight');
    }
    event.target.classList.add('highlight');
  }

var clothes = document.querySelectorAll('.clothes-button')

  function highlightClothesButton() {

    for(var i = 0; i < clothes.length; i++) {
      clothes[i].classList.remove('highlight');
    }
    event.target.classList.add('highlight');
  }

var accessories = document.querySelectorAll('.accessories-button')

  function highlightAccessoriesButton() {

    for(var i = 0; i < accessories.length; i++) {
      accessories[i].classList.remove('highlight');
    }
    event.target.classList.add('highlight');
  }

var backgrounds = document.querySelectorAll('.backgrounds-button')

  function highlightBackgroundsButton() {

    for(var i = 0; i < backgrounds.length; i++) {
      backgrounds[i].classList.remove('highlight');
    }
    event.target.classList.add('highlight');
  }





// function highlightButton(){
  // var activeButton = event.target;
  //   console.log(activeButton);
  //   console.log(event)
  //   var test = ('.'+ activeButton);
  // var garment = document.querySelectorAll(`.${activeButton}`);
  //   console.log(test);
  //   activeButton.classList.remove('highlight');
  // event.target.classList.add('highlight');
  //   console.log(event);

  //   var hats = document.querySelector('.hats');
  //   var hatBtn = hats.getElementsByClassName('hat-button');
  //
  //   function test() {
  //   for (var i = 0; i < hatBtn.length; i++) {
  //     hatBtn[i].addEventListener('click', function() {
  //       var activeHatBtn = document.getElementsByClassName('highlight');
  //       activeHatBtn[0].className = activeHatBtn[0].className.replace('highlight', '');
  //       this.className += 'highlight';
  //     });
  //   }
  // }

// }




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
