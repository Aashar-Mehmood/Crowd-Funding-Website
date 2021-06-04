// bookmark Section
const bookmarkContainer = document.querySelector('main div.container div.btns div');
const bookmarkImage = bookmarkContainer.children[0];
const bookmarkText = bookmarkContainer.children[1];
// all Select Reward buttons
const rewardBtns = document.querySelectorAll('section.third button');
// Modal Section
const modalSec = document.getElementById('modal');
// Modal Section All buttons
const continueBtns = document.querySelectorAll('section#modal button');
// Got it Button of thanks section
const gotItBtn = document.getElementById('gotIt');
// Thanks Section 
const thanskSec = document.getElementById('thanks');
// Hamburger image (show PhoneNav)
const showNav = document.getElementById('hamburger');
// close image in phoneNav (hide PhoneNav)
const closeNav = document.querySelector('div.phoneNav div img');
// phone Nav section
const phonNavSec = document.querySelector('div.phoneNav');

function changeMarkImage(){
  const src = bookmarkImage.getAttribute('src');
  if(src == 'images/icon-bookmark.svg'){
    bookmarkImage.setAttribute('src', 'images/bookmarked.svg');
  }
  else{
    bookmarkImage.setAttribute('src', 'images/icon-bookmark.svg');
  }
  bookmarkText.classList.toggle('bookmarked');
}

bookmarkContainer.addEventListener('click', changeMarkImage);

const icons = document.querySelectorAll('section#modal div.container section div.r1 i');
icons.forEach((icon)=>{
  icon.addEventListener('click', (e)=>{
    e.target.classList.toggle('active');
    const sectionArea = e.target.parentElement.parentElement;
    sectionArea.classList.toggle('clicked');
    const r3 = sectionArea.children[2];
    r3.classList.toggle('visible');
  });
});
icons[icons.length-1].style.cursor='initial';

// select reward buttons event listener 
rewardBtns.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    modalSec.style.display ='flex';
 });
})

// close icon event listener
const closeBtn = document.querySelector('i.fas.fa-times');
closeBtn.addEventListener('click', ()=>{
  modalSec.style.display = 'none';
});


//modal continue buttons envent listener
continueBtns.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    thanskSec.style.display = 'flex';
  });
});

// got it button event listener (close the thanks section)
gotItBtn.addEventListener('click', ()=>{
  thanskSec.style.display = 'none';
});

// hamburger image event listener (show phone Nav)
showNav.addEventListener('click', ()=>{
  phonNavSec.classList.add('active');
  showNav.style.display = 'none';
});

// close image event listener (hide phone Nav)
closeNav.addEventListener('click', ()=>{
  phonNavSec.classList.remove('active');
  showNav.style.display = 'block';
});

window.addEventListener('resize',()=>{
  if(window.outerWidth>=480){
    showNav.style.display = 'none';
  }
  else {
    showNav.style.display = 'block';
  }
});