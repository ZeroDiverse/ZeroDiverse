const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');

btnOpen.addEventListener('click', () => {
    document.querySelector('.navbar-main .btn-open').style.display = 'none';
    document.querySelector('.navbar-main').style.width = '80%';
    setTimeout(() => {
        document.querySelector('.navbar-main .btn-close').style.display = 'block';
    }, 200)
})

btnClose.addEventListener('click', () => {
    document.querySelector('.navbar-main .btn-close').style.display = 'none';
    document.querySelector('.navbar-main').style.width = '0%';
    setTimeout(() => {
        document.querySelector('.navbar-main .btn-open').style.display = 'block';
    }, 200)
})