let urlParams = new URLSearchParams(window.location.search);
let blog_id = urlParams.get('blog');
// const token =localStorage.getItem('token');


const deleteBlog = async () => {
	let result = [];
	fetch("http://127.0.0.1:3000/api/v1/" + "blogs/" + blog_id, {
		method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": 'Bearer '+ token
        },
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.message;
            console.log(result);
            document.getElementById('message-del').innerText = `${result}`

		})
		.catch((err) =>{
            document.getElementById('message-del').innerText = `${err}`
            console.log(err);
        })
};



const del =document.getElementById("delete-blog")

if(del) {

    del.addEventListener('click', (e) =>{
        // e.preventDefault();
        deleteBlog();
        console.log('hiiiiiiiii');
        setTimeout(()=>{
            window.location.href = "/views/blogs.html"
        }, 1000)
    })
}
