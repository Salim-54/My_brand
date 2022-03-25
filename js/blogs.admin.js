const sideBar = document.getElementById('container__side')

const slideBtn = document.getElementById('slide');
slideBtn.addEventListener('click', (e) => {
    sideBar.classList.toggle('show')
})