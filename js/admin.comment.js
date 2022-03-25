const msg = document.getElementById('alert');
const loader = document.getElementById("loader-container");
const alertMessage = document.getElementById("alert-msg");

const getComments = async () => {
    loader.style.display = "flex";
    let result = [];
    const token =localStorage.getItem('token');
    const role =localStorage.getItem('role');
    if(role == 'normal-user'){
        document.getElementById('queries-hide').style.display = 'none';
    }


	fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "comments", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"authorization": 'Bearer '+ token
		},
	})
		.then((response) => response.json())
		.then((json) => {

            loader.style.display = "none";

                // msg.style.display = "flex";
                // setTimeout(function () {
                //     msg.style.display = "none"},5000);
                // alertMessage.innerHTML = `&nbsp;&nbsp; Comments loaded!!😁`;

			result = json.data.comments;
			var counter = 0;
			result?.length
				? (document.getElementById("comments-show").innerHTML = result
						.map(
							(res) => `
                            <div class="container__comment">
       
            <div class="container__content-row">
                <div class="container__content-row--article">
                    <h5 style="font-size: 1.6rem; margin-right: 1rem;">Art</h5><span style="font-size: 1.6rem;">${(counter += 1)}</span>
                </div>
                <span class="container__content-row--date">Feb 02 2022</span>
                <h2 class="container__content-row--title">
                ${res?.blogPost}
                </h2>
                <div class="container__content-row--views">

                    
                    <span style="font-size: 1.6rem;">Commentor: &nbsp;</span>
                    <span class="container__content-row--views-name">${res?.name}</span>

                </div>


                <div class="container__content-row--btns">
                    <button class="container__content-row--edit">Reply comment</button>
                    <button class="container__content-row--delete">Delete</button>
                </div>
            </div>

            <p class="comment">
                It's not an overnight success story. It takes time and hard work. It takes powering through frustration and struggling with hard problems that stretch the limits of your brain. It takes learning new things every single day .

            </p>
        </div>

						`
						)
						.join(""))
				: (document.getElementById(
						"blogs-container"
				  ).innerHTML = `<h1>Sorry , No Blogs yet published</h1>`);
		})
		.catch((err) => console.log(err));
};
getComments();