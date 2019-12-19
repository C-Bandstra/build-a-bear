
var closet = [];
var outfit

document.onload = generateId();
//rename backt to outfits before turning it//

var saveBtn = document.querySelector('#save-button', createOutfit);
var hatSection = document.querySelector('.hats')
var clothesSection = document.querySelector('.clothes')
var accessoriesSection = document.querySelector('.accessories')
var backgroundsSection = document.querySelector('.backgrounds')
var hatBtns = document.querySelectorAll('.hat-button');
var backgroundBtns = document.querySelectorAll('.backgrounds-button')
var clothesBtns = document.querySelectorAll('.clothes-button');
var accessoriesBtns = document.querySelectorAll('.accessories-button')
var hatImages = document.querySelectorAll('.hat');
var topImages = document.querySelectorAll(".tops");


hatSection.addEventListener('click', styleBearHats);
clothesSection.addEventListener('click', styleBearTops);
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

  function highlightHatButton() {
    if(event.target.classList.contains('highlight')) {
      event.target.classList.remove('highlight');
    } else {
      for(var i = 0; i < hatBtns.length; i++) {
        hatBtns[i].classList.remove('highlight');
      }
      event.target.classList.add('highlight');
    }
  }

  function highlightClothesButton() {
    for(var i = 0; i < clothesBtns.length; i++) {
      clothesBtns[i].classList.remove('highlight');
    }
    event.target.classList.add('highlight');
  }

  function highlightAccessoriesButton() {
    for(var i = 0; i < accessoriesBtns.length; i++) {
      accessoriesBtns[i].classList.remove('highlight');
    }
    event.target.classList.add('highlight');
  }

  function highlightBackgroundsButton() {
    for(var i = 0; i < backgroundBtns.length; i++) {
      backgroundBtns[i].classList.remove('highlight');
    }
    event.target.classList.add('highlight');
  }

  function addHatGarment(event) {
    console.log(event);
    var hatGarment = document.querySelector(`#${event.target.dataset.id}`);
    hatImages.forEach(node => {
      if(!node.classList.contains('hide')) {
      node.classList.add('hide')
      }
    });
      if(event.target.innerText === `${event.target.innerText}`) {
        hatGarment.classList.toggle('hide');
  }
}
  // hat.forEach(node => {
  //   console.log(!node.classList.contains('hide'))
  //   if((event.target.dataset.id === node.id) && (!node.classList.contains('hide')))  {
  //     debugger
  //     node.classList.add('hide');
  //   }
  // })

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






  function createOutfit(id) {
    outfit = new Outfit(id);
    closet.push(outfit);
    console.log(outfit)
}

  function generateId() {
    var id = Math.random().toString(36).substr(2, 9);
    console.log(id);
    createOutfit(id);
}
