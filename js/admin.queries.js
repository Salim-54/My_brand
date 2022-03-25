const msg = document.getElementById('alert');
const loader = document.getElementById("loader-container");
const alertMessage = document.getElementById("alert-msg");

const getQueries = async () => {
    loader.style.display = "flex";
    let result = [];
    const token =localStorage.getItem('token');

	fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "queries", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"authorization": 'Bearer '+ token
		},
	})
		.then((response) => response.json())
		.then((json) => {

            loader.style.display = "none";

            //     msg.style.display = "flex";
            //     setTimeout(function () {
            //         msg.style.display = "none"},5000);
            //     alertMessage.innerHTML = `&nbsp;&nbsp; Welcome ${email}!`;
            
			result = json.data.queries;
			var counter = 0;
			result?.length
				? (document.getElementById("queries-container").innerHTML = result
						.map(
							(res) => `
			<div class="container__query">
            <div class="container__content-row">
                <div class="container__content-row--user">
                    <h5 style="font-size: 1.6rem; margin-right: 2rem;"></h5>0${(counter += 1)}
                </div>
                <h2 class="container__content-row--name">
                ${res?.fullName}
                </h2>
                <span class="container__content-row--email">${res?.email}</span>
                <div class="container__content-row-b">

                    <img class="container__content-row--img" src="/img/phone.png" alt="files">
                    <span class="container__content-row--nbr">${res?.telNumber}</span>

                </div>
   
                <div class="container__content-row--date">
                    <span class="container__content-row--date-now">15 Feb 2023</span>
                </div>

                <div class="container__content-row--btns">
                    <button class="container__content-row--edit">Contact sender</button>
                    <button class="container__content-row--delete">Delete query</button>
                </div>
            </div>

            <p class="query">${res?.message}</p>
        </div>

						`
						)
						.join(""))
				: (document.getElementById("queries-container").innerHTML = `<h1>Sorry , No Queries yet published</h1>`);
		})
		.catch((err) => {
            console.log(err);
            (document.getElementById("queries-container").innerHTML = `<h1>Ooooooh, Sorry , You have to be admin to access this Page!!😥😥😥
            <br> click here to request a functionality <a href="/index.html"></a>!!!</h1>`);
        })
            
            
};
getQueries();
