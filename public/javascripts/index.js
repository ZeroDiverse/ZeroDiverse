const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');

btnOpen.addEventListener('click', () => {
    document.querySelector('.navbar-main .btn-open').style.display = 'none';
    document.querySelector('.navbar-main').style.width = '80%';
    document.querySelector('main').style.opacity = '0.3';
    document.querySelector('footer').style.opacity = '0.3';
    setTimeout(() => {
        document.querySelector('.navbar-main .btn-close').style.display = 'block';
    }, 200)
})

btnClose.addEventListener('click', () => {
    document.querySelector('.navbar-main .btn-close').style.display = 'none';
    document.querySelector('.navbar-main').style.width = '0%';
    document.querySelector('main').style.opacity = '1';
    document.querySelector('footer').style.opacity = '1';
    setTimeout(() => {
        document.querySelector('.navbar-main .btn-open').style.display = 'block';
    }, 200)
})

const introduction = document.querySelector('#introduction');
const arrow = document.querySelector('.down-arrow');
const options = {
    root: null,
    threshold: 0,
    rootMargin: '-400px 0px 0px 0px'
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            arrow.style.visibility = 'visible';
            arrow.style.opacity = '1';
        }
        else {
            arrow.style.opacity = '0';
            setTimeout(() => {
                arrow.style.visibility = 'hidden';
            }, 600)
        }
    })
}, options);

observer.observe(introduction);