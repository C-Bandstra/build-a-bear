
var closet = [];
var outfit
document.onload = generateId();
//rename backt to outfits before turning it//

var saveBtn = document.querySelector('#save-button', createOutfit);

var hats = document.querySelector('.hats')
var clothes = document.querySelector('.clothes')
var accessories = document.querySelector('.accessories')
var backgrounds = document.querySelector('.backgrounds')


hats.addEventListener('click', styleBearHats);
clothes.addEventListener('click', styleBearTops);
// accessories.addEventListener('click', styleBearAccessories);
// backgrounds.addEventListener('click', styleBearBackgrounds);


function styleBearHats() {
  var item = event.target.getAttribute('id');
  outfit.addGarment(item);
  pickCategory();
  addHatGarment(event);
  // addTopsGarment(event);
  // displayImage(event);
}

function styleBearTops() {
  var item = event.target.getAttribute('id');
  outfit.addGarment(item);
  pickCategory();
  // addHatGarment(event);
  addTopsGarment(event);
  // displayImage(event);
}

// function styleBearAccessories() {
//   var item = event.target.getAttribute('id');
//   outfit.addGarment(item);
//   pickCategory();
//   // addHatGarment(event);
//   addTopsGarment(event);
//   // displayImage(event);
// }


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
    if(event.target.classList.contains('highlight')) {
      event.target.classList.remove('highlight');
    } else {
      for(var i = 0; i < hats.length; i++) {
        hats[i].classList.remove('highlight');
      }
      event.target.classList.add('highlight');
    }
  }

var clothes = document.querySelectorAll('.clothes-button');

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

  // function displayImage(event) {
  //   if(event.target.classList.contains("hat")) {
  //     addHatGarment(event);
  //   } if(event.target.classList.contains("clothes")) {
  //     addTopsGarment(event);
  //   }
  //
  // }

  var hat = document.querySelectorAll('.hat');

function addHatGarment(event) {
  console.log(event);

  var hatGarment = document.querySelector(`#${event.target.dataset.id}`);

  hat.forEach(node => {
    if(!node.classList.contains('hide')) {
      node.classList.add('hide')
    }
  });

  if(event.target.innerText === `${event.target.innerText}`) {
    hatGarment.classList.toggle('hide');
  }

  // hat.forEach(node => {
  //   console.log(!node.classList.contains('hide'))
  //   if((event.target.dataset.id === node.id) && (!node.classList.contains('hide')))  {
  //     debugger
  //     node.classList.add('hide');
  //   }
  // })

}

var tops = document.querySelectorAll(".tops");

function addTopsGarment(event) {

  console.log(event);
  var topsGarment = document.querySelector(`#${event.target.dataset.id}`);
  tops.forEach(node => {
    if(!node.classList.contains('hide')) {
      node.classList.add('hide') };
  });

  if(event.target.innerText === `${event.target.innerText}`) {
    topsGarment.classList.toggle('hide');
  }
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

// function createTophat() {
//   const tophatImg = document.createElement('img');
//   tophatImg.className = 'tophatImage';
//   tophatImg.innerHTML = `
//   <img src="assets/bab-assets/tophat.png">`
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
