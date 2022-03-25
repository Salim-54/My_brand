const token =localStorage.getItem('token');
const createBlog = async function () {
	const title = document.getElementById("blog-title").value;
	const introduction = document.getElementById("intro-area").value;
	const blogBody = document.getElementById("body").value;
	const category = document.getElementById("category").value

		try {
			const newBlog = await fetch("http://127.0.0.1:3000/api/v1/" + "blogs", {
				method: "POST",
				headers: {
                    "Content-Type": "application/json",
                    "authorization": 'Bearer '+ token
				},
				body: JSON.stringify({

					title: title,
					introduction: introduction,
					blogBody: blogBody,
					category: category,
				}),
			});
			response = await newBlog.json();
            console.log(title);
            console.log(introduction);
            console.log(category);
            console.log(blogBody);

		} catch (error) {
			console.log(error);
		}
}

document.getElementById("create-blog-btn").addEventListener("click", e =>{
    e.preventDefault();
    createBlog();  
    console.log('hiiiiiiiii');
})