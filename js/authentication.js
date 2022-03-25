const msg = document.getElementById('alert');
const loader = document.getElementById("loader-container");
const alertMessage = document.getElementById("alert-msg");


async function loginUser() {
	const email = document.getElementById("login-email").value;
	const password = document.getElementById("login-password").value;
	try {
        loader.style.display = "flex";
		const SignIn = await fetch("http://127.0.0.1:3000/api/v1/" + "users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		}).then((res) => res.json())
        .then((response) => {
			if (response.status === "success") {
                loader.style.display = "none";

                msg.style.display = "flex";
                setTimeout(function () {
                    msg.style.display = "none"},5000);
                alertMessage.innerHTML = `&nbsp;&nbsp; Welcome ${email}!`;

                localStorage.setItem("token", response.token);
                localStorage.setItem("role",response.data.role);

                console.log(response.token)
                setTimeout(()=>{
                    location.href = "../views/blogs.html";
                }, 2000)
            } else {
                loader.style.display = "none";
                msg.style.display = "flex";
                setTimeout(function () {
                    msg.style.display = "none"},3000);
                alertMessage.innerHTML = "&nbsp;&nbsp; Error ocurred!!"
    
            }
		})
        response = await SignIn.json();
        console.log(response);

	} catch (error) {
        msg.style.display = "flex";
        setTimeout(function () {
            msg.style.display = "none"},3000);
        // alertMessage.innerHTML = "&nbsp;&nbsp; Erroryyy ocurred!!"
        console.log(error);
	}
}


async function signUpUser() {
	const email = document.getElementById("signup-email").value;
	const password = document.getElementById("signup-password").value;
	const username = document.getElementById("signup-name").value;

	try {

        loader.style.display = "flex";
		const SignUp = await fetch("http://127.0.0.1:3000/api/v1/" + "users/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: username,
				email: email,
				password: password,
			}),
		});
		response = await SignUp.json();
		if (SignUp.status == 201 && response.token) {
                loader.style.display = "none";

                msg.style.display = "flex";
                setTimeout(function () {
                msg.style.display = "none"},5000);
                alertMessage.innerHTML = `&nbsp;&nbsp; Welcome ${username}!`
                localStorage.setItem("token", "Bearer " + response.token);
                localStorage.setItem("role",response.data.role);
                setTimeout(()=>{
                    location.href = "../views/blogs.html";
                }, 3000)
             

		} else {
            loader.style.display = "none";
            msg.style.display = "flex";
            setTimeout(function () {
                msg.style.display = "none"},2000);
            alertMessage.innerHTML = "&nbsp;&nbsp; Error ocurred!!"
		}
	} catch (error) {
        msg.style.display = "flex";
        setTimeout(function () {
            msg.style.display = "none"},3000);
        // alertMessage.innerHTML = "&nbsp;&nbsp; Erroryyy ocurred!!"
        console.log(error);
	}
}







const loginButton = document.getElementById("login-btn");
const signUpButton = document.getElementById("signup-btn");


loginButton.addEventListener('click', e =>{
    e.preventDefault();
    loginUser() ;
});
signUpButton.addEventListener('click', e =>{
    e.preventDefault();
    signUpUser() ;
})

























































// const token = localStorage.getItem("token")
// if (token) {
//     window.location = "../views/blogs.html";
// }

// async function loginUser() {
//     const emailInput = document.getElementById("login-email");
//     const passwordInput = document.getElementById("login-password");
//     const loader = document.getElementById("container-loader");
//     const msg = document.getElementById('alert');
    
    
    
//     // const btn = document.getElementById("query-btn");
//     const loginBtn = document.getElementById("login-btn");
//     const alertMessage = document.getElementById("alert-msg");
// 	try {
//         loginBtn.value = "Sending . . .";
//         loginBtn.style.backgroundColor = "rgba(53, 132, 46, 1)"

// 		const loggingUser = await fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "users/login", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({
// 				email: emailInput,
// 				password: passwordInput,
// 			}).then(res  => {
//                 if(res){
//                     res.json().then(({data})=>{
//                         localStorage.setItem("token", data.token)
//                         window.location("../views/blogs.html")
//                     })
//                     .catch(() => {
//                         throw Error("Error")
//                     })

//             } else {
//                 throw Error("Error")
            
//                 }
//             })
// 		});

// 		// response = await loggingUser.json();
        
//         //SUCCESS
//         alertMessage.innerHTML = "&nbsp;&nbsp; Welcome back!!"
//         msg.style.display = "flex";
//         loader.style.display = "flex";
//         setTimeout(()=>msg.style.display = "none" ,2000);
//         document.getElementById("login-form").reset();

//         loginBtn.value = "Login";
//         loginBtn.style.backgroundColor = "#8ba0a9";

//         console.log(loggingUser.status);
// 	} catch (error) {
//         // FAILED
//         // alertMessage.innerHTML = "&nbsp;&nbsp; Message sent successfully!!"
//         // msg.style.display = "flex";
//         // setTimeout(()=>msg.style.display = "none" ,2000);
//         console.log(error);
// 	}
// }


// document.getElementById("query-form").addEventListener("submit", function (event) {


//     event.preventDefault();

//         querySend();
//     }
// );



















// function loginUser(event) {
    // const emailInput = document.getElementById("login-email");
    // const passwordInput = document.getElementById("login-password");
    // const loginBtn = document.getElementById("login-btn");
    // const loader = document.getElementById("container-loader");


//     // validations here!!


//     loader.style.display = "flex";
//     loginBtn.value = "Logging in...";
//     const email = emailInput.value;
//     const password = passwordInput.value;
//     const formData = new FormData();
//     formData.append('password', password);
//     formData.append('email', email);
//     fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "users/login", {
//         method: "POST", 
//         body: formData
//     })
//         .then(response => {
//             loader.style.display = "none";
//             if (response.ok) {
//                 response.json().then(({data}) => {
//                     localStorage.setItem("token", data.token)
//                     window.location = "../views/blogs.html";
//                 })
//                     .catch(() => {
//                         throw Error("Error")
//                     })

//             } else {
//                 throw Error("Error")
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//             loginBtn.innerText = "Login";
//         });
// }


// const loginForm = document.getElementById('login-form');

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     loginUser();
// });