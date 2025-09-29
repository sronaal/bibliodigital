window.addEventListener('scroll', () => {

    const header = document.querySelector('header')

    if (window.scrollY > 10) {
        header.classList.add('scroll')
    }

    if (window.scrollY > 10) {
        titleMenu.classList.add('animate__backInDown')
    }

    else {
        header.classList.remove('scroll')
    }
})