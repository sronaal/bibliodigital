window.addEventListener('scroll', () => {

    const header = document.querySelector('header')

    if (window.scrollY > 10) {
        header.classList.add('scroll')
    }


    else {
        header.classList.remove('scroll')
    }
})