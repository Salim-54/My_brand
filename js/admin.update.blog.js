let urlParams = new URLSearchParams(window.location.search);
let blog_id = urlParams.get('blog');
$('#body').trumbowyg();

const loadBlog = async () => {
	let result = [];
	fetch("http://127.0.0.1:3000/api/v1/" + "blogs/" + blog_id, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
            document.getElementById("blog-title").value = result.title;
            document.getElementById("intro-area").value = result.introduction;
            $('#body').trumbowyg('html', result.blogBody)
            document.getElementById("category").value = result.category;
		})
		.catch((err) => console.log(err));
};
loadBlog();

const token =localStorage.getItem('token');
const createBlog = async function () {
	const title = document.getElementById("blog-title").value;
	const introduction = document.getElementById("intro-area").value;
	const blogBody = document.getElementById("body").value;
	const category = document.getElementById("category").value

		try {
			const newBlog = await fetch("http://127.0.0.1:3000/api/v1/" + "blogs/" + blog_id, {
				method: "PATCH",
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
    // document.getElementById("blog-title").reset();
    document.getElementById("intro-area").reset();
    // $('#body').trumbowyg('html', );
    // document.getElementById("category");

    console.log('hiiiiiiiii');
})