let navBtn = document.querySelector('#nav-toggle')
let links = document.querySelector('.nav-list')

navBtn.addEventListener('click', function() {
    links.classList.toggle('show-links')
})