
var closet = [];
var outfit
var outfitName
var cardContainer = document.querySelector('.card-container');

document.onload = onPageLoad();
//rename backt to outfits before turning it//

var saveBtn = document.querySelector('#save-button');
var nameInput = document.querySelector('input');
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
cardContainer.addEventListener('click', removeSavedOutfit);



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
  if (outfit.title===nameInput.value){
    outfitName = nameInput.value;
    nameInput.value = '';
    disableSaveBtn();
    clearAllBtns();
    console.log(outfitName);
    saveOutfit(outfitName);
  } else {
    outfitName = nameInput.value;
    createCardInHtml(nameInput.value)
    nameInput.value = '';
    disableSaveBtn();
    clearAllBtns();
    console.log(outfitName);
    saveOutfit(outfitName);
  }
}

function createCardInHtml(displayValue) {
  cardContainer.insertAdjacentHTML('afterbegin', `<div class="card">
              <h2 class="outfit-name">${displayValue}</h2>
              <img class="close-icon"
              src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Close-icon.png">
           </div>`);
}

function saveOutfit(){
  outfit.title= outfitName;
  localStorage.setItem(outfitName, JSON.stringify(outfit));
  generateId();
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

function styleBear(style){
  var item = event.target.getAttribute('id');
  var [, category] = item.split('-');
  var oldGarment = outfit.garments.find(function(garment){
    if(garment.includes(category)){
      return true;
    }
  })
  if (oldGarment != undefined){
    outfit.removeGarment(oldGarment)
  }
  if (!event.target.classList.contains('highlight')){
    outfit.addGarment(item);
  }
  pickCategory();
  if(event.target.tagName == 'BUTTON') {
    style();
  }
}

  function styleBearHats() {
    styleBear(showHatImage);
  }

  function styleBearTops() {
    styleBear(showTopImage);
  }

  function styleBearAccessories() {
    styleBear(showAccessoriesImage);
  }

  function styleBearBackgrounds () {
    var item = event.target.getAttribute('id');
    outfit.background = item;
    pickCategory();
    if (!event.target.classList.contains('highlight')){
      outfit.background='';
    }
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
    for(var i = 0; i < hatImages.length; i++) {
      if ((hatImages[i].classList.contains('show-image')) && (hatImages[i].classList.contains('hat'))) {
        hatImages[i].classList.remove('show-image');
      } else if(hatImages[i].id === event.target.dataset.id) {
        hatImages[i].classList.add('show-image')
      }
    }
  }

  function showTopImage() {
    for(var i = 0; i < topImages.length; i++) {
      if ((topImages[i].classList.contains('show-image')) && (topImages[i].classList.contains('tops'))) {
        topImages[i].classList.remove('show-image');
      } else if(topImages[i].id === event.target.dataset.id) {
        topImages[i].classList.add('show-image')
      }
    }
  }

  function showAccessoriesImage() {
    for(var i = 0; i < accessoriesImages.length; i++) {
      if ((accessoriesImages[i].classList.contains('show-image')) && (accessoriesImages[i].classList.contains('accessory'))) {
        accessoriesImages[i].classList.remove('show-image');
      } else if(accessoriesImages[i].id === event.target.dataset.id) {
        accessoriesImages[i].classList.add('show-image')
      }
    }
  }

  function showBackgroundImage() {
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
}

function generateId() {
  var id = Math.random().toString(36).substr(2,9);
  createOutfit(id);
}

function onPageLoad(){
  generateId();
  loadSavedOutfits();
}

function loadSavedOutfits(){
  Object.keys(localStorage).forEach(function(savedCardTitle) {
    createCardInHtml(savedCardTitle);
  })
  Object.values(localStorage).forEach(function(savedCard){
    var outfitObj = JSON.parse(savedCard);
    closet.push(new Outfit(outfitObj.id, outfitObj.title, outfitObj.garments, outfitObj.background));
  })
}
//maybe rename to handleCardClick
//remo
function removeSavedOutfit(event){
  if (event.target.classList.contains('close-icon')){

      event.target.parentElement.remove();
      localStorage.removeItem(event.target.parentElement.innerText.trim());
      console.log('remove saved outfit');
      clearAllBtns();
    }
     else {
    populateInput(event);
  }

  }

function populateInput(event) {
  console.log('populate event');
     //remove all clothes from BEAR
     //remove all highlights from buttons
    clearAllBtns();
     //fill in input field with card title
    var outfitTitle;
    if(event.target.classList.contains('outfit-name')) {
    outfitTitle = event.target.innerHTML;
    }
    else {
    outfitTitle = event.target.firstElementChild.innerHTML;
    }
    nameInput.value = outfitTitle;
    redressBear(outfitTitle);
 }
//     //trigger click events on appropriate buttons
  function redressBear(outfitTitle) {
    var values = Object.values(localStorage);
    var bearType;
    for(let i = 0, len = values.length; i < len; i++) {
    var item = JSON.parse(values[i]);
    debugger
    if (item.title === outfitTitle) {
      bearType = item;
       }
     }
  if(bearType) {
        if(bearType.background !== '') {
          document.getElementById(bearType.background).click();
              debugger
          saveBtn.disabled = false;
        }
    }
  for(let i = 0, len = bearType.garments.length; i < len; i++) {
          document.getElementById(bearType.garments[i]).click();
          saveBtn.disabled = false;
        }
        console.log(bearType.garments);
  resetID(bearType);
}

function resetID(bearType){
  outfit= (new Outfit(bearType.id, bearType.title, bearType.garments, bearType.background));
}
