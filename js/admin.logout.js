const logoutUser = document.getElementById("logout-btn");
const token = localStorage.getItem("token")



if (!token) {
    window.location = "../index.html"
}


logoutUser.addEventListener('click', e =>{
    console.log('hiiiiii');
        msg.style.display = "flex";
        setTimeout(function () {
        msg.style.display = "none"},5000);
        alertMessage.innerHTML = `&nbsp;&nbsp; You are logging out!`
        localStorage.removeItem("token");
        localStorage.removeItem("role");

        setTimeout(()=>{
            window.location.href = "../index.html"
        }, 3000)
});