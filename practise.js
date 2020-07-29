 // select all the class which may be needed
 const hamburgerIcon = document.querySelector('.hamburger-menu');
 const navigation = document.getElementById('navigation');
 const mainContainer = document.getElementById('main-container')
 const closeBtn = document.querySelector('.cross-menu');


 // set click event in the hamburger menu
 hamburgerIcon.addEventListener('click',function(){
     navigation.classList.toggle('show-menu');
     mainContainer.classList.toggle('show-body');
 })

 //set click event in the close btn
 closeBtn.addEventListener('click',function(){
    navigation.classList.remove('show-menu');
    mainContainer.classList.remove('show-body');
 })