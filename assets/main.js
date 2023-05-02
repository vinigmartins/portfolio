const toggleNav = () => {
    let selectEl = document.querySelector('.mobile-nav-toggle')
    if (selectEl) {
        selectEl.addEventListener('click', function (e) {
            let body = document.querySelector('body')
            body.classList.toggle('mobile-nav-active')
            this.classList.toggle('bi-list')
            this.classList.toggle('bi-x')
        })
    }
}

toggleNav()