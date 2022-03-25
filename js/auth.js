


const signupForm = document.querySelector('#signup-form');



let loginForm = document.querySelector('#login-form');
    
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    
    
    auth.signInWithEmailAndPassword(email,password).then( cred=> {

        loginForm.reset();
        window.location.href = "/views/blogs.html";

    }).catch(error => {

        alert("user can't be found");
    });
});
const logout = document.querySelector('.admin__nav-logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
    .then(() => {
        window.location.href = "/index.html";
    })
})


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then( cred => {
        console.log(cred);

        signupForm.reset();
        logIn.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
        auth.signOut().then(() =>{
                console.log('User is Out!')
            })
            
    })

    .catch(error => {

        const errorMessage = error?.message;
        alert(errorMessage || "An error occurred");
    });

});
