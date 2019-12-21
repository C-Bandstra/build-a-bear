
var closet = [];
var outfit

document.onload = generateId();
//rename backt to outfits before turning it//

var saveBtn = document.querySelector('#save-button');
var nameInput = document.querySelector('input');
var cardContainer = document.querySelector('.card-container');
var hatSection = document.querySelector('.hats');
var clothesSection = document.querySelector('.clothes');
var accessoriesSection = document.querySelector('.accessories');
var backgroundsSection = document.querySelector('.backgrounds');
var hatBtns = document.querySelectorAll('.hat-button');
var backgroundBtns = document.querySelectorAll('.backgrounds-button');
var clothesBtns = document.querySelectorAll('.clothes-button');
var accessoriesBtns = document.querySelectorAll('.accessories-button');
var hatImages = document.querySelectorAll('.hat');
var topImages = document.querySelectorAll('.tops');
var accessoriesImages = document.querySelectorAll('.accessory');
var backgroundImages = document.querySelectorAll('.bckgrnd');

hatSection.addEventListener('click', styleBearHats);
clothesSection.addEventListener('click', styleBearTops);
accessoriesSection.addEventListener('click', styleBearAccessories);
backgroundsSection.addEventListener('click', styleBearBackgrounds);
saveBtn.addEventListener('click', createCard);
nameInput.addEventListener('input', disableSaveBtn);

// function saveOutfit (){
//   createCard();
// }
disableSaveBtn();

function disableSaveBtn(){
  if(nameInput.value===''){
    saveBtn.disabled = true;
  } else if (nameInput.value){
    saveBtn.disabled = false;
  }
}

function createCard(){
  cardContainer.insertAdjacentHTML('afterbegin', `<div class="card">
              <h2 class="outfit-name">${nameInput.value}</p>
           </div>`);
  nameInput.value = '';
  disableSaveBtn();
  clearAllBtns();
}

function clearAllBtns(){
  var allBtns = document.querySelectorAll('button');
   for (var i = 0; i < allBtns.length; i++) {
       allBtns[i].classList.remove('highlight');
   }
   clearAllImages();
}

function clearAllImages(){
  var allImgs = document.querySelectorAll('.hide-image');
   for (var i = 0; i < allImgs.length; i++) {
       allImgs[i].classList.remove('show-image');
   }
}

  function styleBearHats() {
    var item = event.target.getAttribute('id');
    var [, category] = item.split('-');
    console.log(category);
    var oldGarment = outfit.garments.find(function(garment){
      if(garment.includes(category)){
        return true;
      }
    })
    console.log(oldGarment);
    if (oldGarment != undefined){
      outfit.removeGarment(oldGarment)
    }
    outfit.addGarment(item);
    pickCategory();
    console.log(event.target.tagName)
    if(event.target.tagName == 'BUTTON') {
      showHatImage();
    }
  }

  function styleBearTops() {
    var item = event.target.getAttribute('id');
    var [, category] = item.split('-');
    console.log(category);
    var oldGarment = outfit.garments.find(function(garment){
      if(garment.includes(category)){
        return true;
      }
    })
    console.log(oldGarment);
    if (oldGarment != undefined){
      outfit.removeGarment(oldGarment)
    }
    outfit.addGarment(item);
    pickCategory();
    console.log(event.target.tagName)
    if(event.target.tagName == 'BUTTON') {
      showTopImage();
    }
  }

  function styleBearAccessories() {
    var item = event.target.getAttribute('id');
    outfit.addGarment(item);
    pickCategory();
    if(event.target.tagName == 'BUTTON') {
       showAccessoriesImage();
    }
  }

  function styleBearBackgrounds () {
    var item = event.target.getAttribute('id');
    outfit.addGarment(item);
    pickCategory();
    if(event.target.tagName == 'BUTTON') {
      showBackgroundImage();
    }
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
    if(event.target.classList.contains('highlight')) {
      event.target.classList.remove('highlight');
    } else {
      for(var i = 0; i < clothesBtns.length; i++) {
        clothesBtns[i].classList.remove('highlight');
      }
      event.target.classList.add('highlight');
    }
  }

  function highlightAccessoriesButton() {
    if(event.target.classList.contains('highlight')) {
      event.target.classList.remove('highlight');
    } else {
      for(var i = 0; i < accessoriesBtns.length; i++) {
      accessoriesBtns[i].classList.remove('highlight');
      }
      event.target.classList.add('highlight');
    }
  }

  function highlightBackgroundsButton() {
    if(event.target.classList.contains('highlight')) {
      event.target.classList.remove('highlight');
    } else {
      for(var i = 0; i < backgroundBtns.length; i++) {
        backgroundBtns[i].classList.remove('highlight');
      }
      event.target.classList.add('highlight');
    }
  }

  function showHatImage() {
    console.log(event.target.dataset.id)
    for(var i = 0; i < hatImages.length; i++) {
      if ((hatImages[i].classList.contains('show-image')) && (hatImages[i].classList.contains('hat'))) {
        hatImages[i].classList.remove('show-image');
      } else if(hatImages[i].id === event.target.dataset.id) {
        hatImages[i].classList.add('show-image')
      }
    }
  }

  function showTopImage() {
    console.log(event.target.dataset.id)
    for(var i = 0; i < topImages.length; i++) {
      if ((topImages[i].classList.contains('show-image')) && (topImages[i].classList.contains('tops'))) {
        topImages[i].classList.remove('show-image');
      } else if(topImages[i].id === event.target.dataset.id) {
        topImages[i].classList.add('show-image')
      }
    }
  }

  function showAccessoriesImage() {
    console.log(event.target.dataset.id)
    for(var i = 0; i < accessoriesImages.length; i++) {
      if ((accessoriesImages[i].classList.contains('show-image')) && (accessoriesImages[i].classList.contains('accessory'))) {
        accessoriesImages[i].classList.remove('show-image');
      } else if(accessoriesImages[i].id === event.target.dataset.id) {
        accessoriesImages[i].classList.add('show-image')
      }
    }
  }

  function showBackgroundImage() {
    console.log(event.target.dataset.id)
    for(var i = 0; i < backgroundImages.length; i++) {
      if ((backgroundImages[i].classList.contains('show-image')) && (backgroundImages[i].classList.contains('bckgrnd'))) {
        backgroundImages[i].classList.remove('show-image');
      } else if(backgroundImages[i].id === event.target.dataset.id) {
        backgroundImages[i].classList.add('show-image')
      }
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
  var id = Math.random().toString(36).substr(2,9);
  console.log(id);
  createOutfit(id);
}
