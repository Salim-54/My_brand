
let urlParams = new URLSearchParams(window.location.search);
let blog_id = urlParams.get('blog');

const getArticle = async () => {
	let result = [];
	fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "blogs/" + blog_id, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			let published = new Date(result.sendDate).toDateString();

			document.getElementById("blog-title").innerHTML = result.title;
			document.getElementById("blog-body").innerHTML = result.blogBody;
			document.getElementById("blog-intro").innerHTML = result.introduction;
			document.getElementById("blog-date").innerHTML = published;
			document.getElementById("blog-date-2").innerHTML = published;
			result.comments.forEach(comment => {
			document.getElementById("show-comments").innerHTML += `
			
			<div class="blog__display">
			<div class="blog__display-symbol">NS</div>
			<div class="blog__display-name"><span>${comment.name}</span> <i>05 feb 2022</i></div>
			<p class="blog__display-comment">
				${comment.commentBody}
			</p>
		</div>

			`				
			});

            console.log(result.title);
			// document.getElementById("comments").innerHTML = result.comments.length;
			// document.getElementById("comments-data").innerHTML =
			// 	result.comments.length;
			// document.getElementById("content").innerHTML = result.content;
			// document.getElementById("cover").src = result.cover;
		})
		.catch((err) => console.log(err));
};
getArticle();



























const commentButton = document.getElementById("comment-btn");

async function commentSend() {
    const commenter = document.getElementById("commenter-name").value;
    const comment = document.getElementById("comment").value;
    
	try {
        commentButton.value = "Sending . . .";
        commentButton.style.backgroundColor = "rgba(53, 132, 46, 1)"

		const commentPost = await fetch("https://atlp-mybrand-backend.herokuapp.com/api/v1/" + "comments/" + blog_id, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: commenter,
				commentBody: comment,
			}),
		});

		response = await commentPost.json();
        
        //SUCCESS
    
        document.getElementById("comment-form").reset();

        commentButton.value = "Post";
        commentButton.style.backgroundColor = "#8ba0a9";

        console.log(commentPost.status);
	} catch (error) {

        console.log(error);
	}
}
// const commentBtn = document.getElementById("comment-btn");
commentButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log('okayaaah');
        commentSend();  
});

