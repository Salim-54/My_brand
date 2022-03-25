'use strict'

const btns = document.querySelectorAll('.popup__login-heading--btn');
const login = document.querySelector('.popup__login');
const closing = document.querySelector('.popup__login-close');
const popupLink =  document.querySelector('.landing__nav-links--link---popup');
const popup = document.querySelector('.popup');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.landing__nav-links');
const navListBlogs = document.querySelector('.articles__nav-links')



document.querySelectorAll('.scrolls').forEach(function(el) {
    el.addEventListener('click', function(e){
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior : 'smooth'});

    });
});


const loginText = document.querySelector(".title-text .login");
const logIn = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");


signupBtn.onclick = (()=>{
  logIn.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  logIn.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});




popupLink.addEventListener('click', (e) => {

    e.preventDefault();

    // console.log(e.target);
    popup.style.cssText = `
    opacity: 1; 
    visibility: visible;
  `; 
});

// popup.addEventListener('click', (e) => {
//     e.stopPropagation();

//     popup.style.display = 'none';
// });

closing.addEventListener('click', () => {
    popup.style.display = 'none'; 
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');

})

document.querySelectorAll('.landing__nav-links--link').forEach(n => {
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navList.classList.remove('active'); 
 


  })
});
hamburger.addEventListener('click', () => {
  navListBlogs.classList.toggle('active');
  

})

document.querySelectorAll('.articles__nav-links--link').forEach(n => {
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navListBlogs.classList.remove('active');  

  })
});

//  SENDING A QUERY MESSAGE!!   //


