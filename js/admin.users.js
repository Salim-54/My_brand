const msg = document.getElementById('alert');
const loader = document.getElementById("loader-container");
const alertMessage = document.getElementById("alert-msg");

const getUsers = async () => {
    loader.style.display = "flex";
    let result = [];
    const token =localStorage.getItem('token');
    const role =localStorage.getItem('role');
    if(role == 'normal-user'){
        document.getElementById('queries-hide').style.display = 'none';
        // document.getElementById('delete-user').classList.add('delete-hide');
    }

	fetch("http://127.0.0.1:3000/api/v1/" + "users", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"authorization": 'Bearer '+ token
		},
	})
		.then((response) => response.json())
		.then((json) => {

            loader.style.display = "none";

            //     msg.style.display = "flex"; ${(counter += 1)}
            //     setTimeout(function () {
            //         msg.style.display = "none"},5000);
            //     alertMessage.innerHTML = `&nbsp;&nbsp; Welcome ${email}!`;


			result = json.data.users;
			var counter = 0;
			result?.length
				? (document.getElementById("users-show").innerHTML = result
						.map(
							(res) => `
                            <div class="container__content-row">
                            <div class="container__content-row--user">
                                <h5 style="font-size: 1.6rem; margin-right: 2rem;"></h5>${(counter += 1)}
                            </div>
                            <h2 class="container__content-row--name">
                            ${res?.name}
                            </h2>
                            <span class="container__content-row--email">${res?.email}</span>
                            <div class="container__content-row-b">
            
                                <img class="container__content-row--img" src="/img/file.png" alt="files">
                                <span class="container__content-row--nbr">3</span>
                                <span>Blogs</span>
            
                            </div>
               
                            <div class="container__content-row--date">
                                <span class="container__content-row--date-now">${res?.role}</span>
                            </div>
            
                            <div class="container__content-row--btns">
                                <button class="container__content-row--edit">Contact the user</button>
                                <button class="container__content-row--delete delete-user" >Delete user</button>
                            </div>
                        </div>

						`
						)
						.join(""))
				: (document.getElementById("users-show").innerHTML = `<h1>OOOOOOHHHHH SORRY YOU ARE NOT ADMIN</h1>`);

                if(role == 'normal-user'){
                    // document.getElementById('queries-hide').classList.add('delete-hide');
                    document.querySelectorAll('.delete-user').forEach(del =>{
                        del.classList.add('delete-hide');
                    })
                }
            
		})
		.catch((err) => {
            console.log(err)
            document.getElementById("users-show").innerHTML = `<h1>OOOOOOHHHHH SORRY YOU ARE NOT ADMIN</h1>`;
        });
};
getUsers();