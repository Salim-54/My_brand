async function querySend() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("query").value;
    const telNumber = document.getElementById("number").value;
    const msg = document.getElementById('alert');
    const danger = document.getElementsByClassName('rectangle');

    
    const btn = document.getElementById("query-btn");
    const alertMessage = document.getElementById("alert-msg");
	try {
        btn.value = "Sending . . .";
        btn.style.backgroundColor = "rgba(53, 132, 46, 1)"

		const queryPost = await fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "queries", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				fullName: name,
				message: message,
				email: email,
				telNumber: telNumber,
			}),
		});

		response = await queryPost.json();
        
        //SUCCESS
        alertMessage.innerHTML = "&nbsp;&nbsp; Message sent successfully!!"
        msg.style.display = "flex";
        setTimeout(()=>msg.style.display = "none" ,2000);
        document.getElementById("query-form").reset();

        btn.value = "Send Query";
        btn.style.backgroundColor = "#8ba0a9";

        console.log(queryPost.status);
	} catch (error) {
        // FAILED
        // alertMessage.innerHTML = "&nbsp;&nbsp; Message sent successfully!!"
        // msg.style.display = "flex";
        // setTimeout(()=>msg.style.display = "none" ,2000);
        console.log(error);
	}
}


document.getElementById("query-form").addEventListener("submit", function (event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("query");
    const msg = document.getElementById('alert');
    const alertBody = document.getElementById("rectangle");
    const alertMessage = document.getElementById("alert-msg");
    var emailReg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    event.preventDefault();

    if(name.value.length < 4){
        name.style.border = "0.1rem solid #ff0909";
        name.classList.add('contact-email');
        alertBody.style.backgroundColor = 'red'
        alertMessage.innerHTML = "&nbsp;&nbsp; Form is not valid!!"
        msg.style.display = "flex";
        setTimeout(function () {
            msg.style.display = "none";
            alertBody.style.backgroundColor = 'rgba(53, 132, 46, 1)' },3000);
    } else if(!emailReg.test(email.value)) {
        alertBody.style.backgroundColor = 'red'
        alertMessage.innerHTML = "&nbsp;&nbsp; Form is not valid!!"
        msg.style.display = "flex";
        setTimeout(function () {
            msg.style.display = "none";
            alertBody.style.backgroundColor = 'rgba(53, 132, 46, 1)' },3000);

        email.style.border = "0.1rem solid #ff0909";
        email.classList.add('contact-email');  

    } else if (message.value.length < 3) {
        message.style.border = "0.1rem solid #ff0909";
        message.classList.add('contact-email');
        alertBody.style.backgroundColor = 'red'
        alertMessage.innerHTML = "&nbsp;&nbsp; Form is not valid!!"
        msg.style.display = "flex";
        setTimeout(function () {
            msg.style.display = "none";
            alertBody.style.backgroundColor = 'rgba(53, 132, 46, 1)' },3000);
    }
    else {
        name.style.border ="0.1rem solid #525d62";
        name.classList.remove('contact-email');
        email.style.border ="0.1rem solid #525d62";
        email.classList.remove('contact-email');
        message.style.border ="0.1rem solid #525d62";
        message.classList.remove('contact-email');
        querySend();
    }
});
