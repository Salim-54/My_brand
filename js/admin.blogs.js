let urlParams = new URLSearchParams(window.location.search);
let blog_id = urlParams.get('blog');

const msg = document.getElementById('alert');
const loader = document.getElementById("loader-container");
const alertMessage = document.getElementById("alert-msg");

const getBlogs = async () => {
    loader.style.display = "flex";
    let result = [];
    const token =localStorage.getItem('token');
    const role =localStorage.getItem('role');
    if(role == 'normal-user'){
        document.getElementById('queries-hide').style.display = 'none';
    }


	fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "blogs", {
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

			result = json.data;
			var counter = 0;
			result?.length
				? (document.getElementById("blogs-container").innerHTML = result
						.map(
							(res) => `
                            <div class="container__content-row">
                            <div class="container__content-row--article">
                                <h5 style="font-size: 1.6rem; margin-right: 2rem;">Art</h5><span>${(counter += 1)}</span>
                            </div>
                            <h2 class="container__content-row--title">
                            ${res?.title}
                            </h2>
                            <span class="container__content-row--date">Feb 02 2022</span>
                            <div class="container__content-row--likes">
            
                                <img src="/img/category.svg" alt="Likes" class="container__content-row--likes-like">
                                <span class="container__content-row--likes-nbr"></span>
                                <span>${res?.category}</span>
            
                            </div>
                            <div class="container__content-row--comments">
                                <span class="container__content-row--comments-comment">${res?.comments.length}&nbsp</span><span>comments</span>
                            </div>
            
                            <div class="container__content-row--btns">
                                <a id="" href="/views/update.blog.html?blog=${res?._id}"><button class="container__content-row--edit">Edit blog</button></a>
                                <a href="/views/delete.html?blog=${res?._id}"><button class="container__content-row--delete">Delete</button> </a>
                            </div>
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
getBlogs();


