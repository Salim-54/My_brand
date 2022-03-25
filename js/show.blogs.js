const showAllBlogs = async () => {
	let result = [];
	let code = [];
    let machine = [];
    let life = [];

	fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "blogs", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((jsonData) => {
			result = jsonData.data;
			code = result.filter(kind => kind.category == 'code');
			machine = result.filter(kind => kind.category == 'machine');
			life = result.filter(kind => kind.category == 'life');


            life.forEach(b=>{
                // const code = b.category=="code";
                // const machine = b.category=="machine"
                // const life = b.category=="life"

                document.getElementById(`blog-list-3`).innerHTML += `
                <div class="card__content card__content-3" data-tab="3">
                <img class="card__content-img" src="/img/article.png" alt="Article image">
                <h2 class="card__content-heading">${b.title}</h2>
                <p class="card__content-paragraph">
                    Django was not easy at all for me. Then turned into some freelancing as a teenager. Then I got into startups and the web development agency life style.
                    Yes, you heard me right. I've worked for myself, for others, and my own companies. But it gets better.
    
                </p>
                <a href="./article.html?blog=${b._id}" class="card__content-btn card__tabs-tab--3">
                    Read more . .
                </a>
                
            </div>
                						`
            })

            machine.forEach(b=>{
                // const code = b.category=="code";
                // const machine = b.category=="machine"
                // const life = b.category=="life"

                document.getElementById(`blog-list-2`).innerHTML += `
                <div class="card__content card__content-2" data-tab="2">
                <img class="card__content-img" src="/img/article.png" alt="Article image">
                <h2 class="card__content-heading">${b.title}</h2>
                <p class="card__content-paragraph">
                    Django was not easy at all for me. Then turned into some freelancing as a teenager. Then I got into startups and the web development agency life style.
                    Yes, you heard me right. I've worked for myself, for others, and my own companies. But it gets better.
    
                </p>
                <a href="./article.html?blog=${b._id}" class="card__content-btn card__tabs-tab--2">
                    Read more . .
                </a>
                
            </div>
                						`
            })

            // ${res.title}
			code.forEach(b=>{
                // const code = b.category=="code";
                // const machine = b.category=="machine"
                // const life = b.category=="life"

                document.getElementById(`blog-list-1`).innerHTML += `
                <div class="card__content card__content-1" data-tab="1">
                <img class="card__content-img" src="/img/article.png" alt="Article image">
                <h2 class="card__content-heading">${b.title}</h2>
                <p class="card__content-paragraph">
                    Django was not easy at all for me. Then turned into some freelancing as a teenager. Then I got into startups and the web development agency life style.
                    Yes, you heard me right. I've worked for myself, for others, and my own companies. But it gets better.
    
                </p>
                <a href="./article.html?blog=${b._id}" class="card__content-btn card__tabs-tab--1">
                    Read more . .
                </a>
                
            </div>
                						`
            })
        })
		.catch((err) => console.log(err));
};

showAllBlogs();









const subscription = async function () {

	const subscribe = document.getElementById("subscribe").value;
	const subscribeBtn = document.getElementById("subscribe-btn").value

		try {
			const newSubscriber = await fetch("http://127.0.0.1:3000/api/v1/" + "subscribe", {
				method: "POST",
				headers: {
                    "Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: subscribe,
				}),
			});
			response = await newSubscriber.json();
            console.log(subscribe);

		} catch (error) {
			console.log(error);
		}
}

document.getElementById("subscribe-btn").addEventListener("click", e =>{
    e.preventDefault();
    subscription();  
    console.log('hiiiiiiiii');
})