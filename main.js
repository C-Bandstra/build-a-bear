
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
  pickCategory();
}

  function pickCategory() {
    if(event.target.classList.contains('hat-button')) {
      highlightHatButton(event);

    } else if(event.target.classList.contains('clothes-button')) {
        highlightClothesButton(event);

    } else if()
  }


  var hats = document.querySelectorAll('.hat-button');

  function highlightHatButton() {
    // debugger
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
