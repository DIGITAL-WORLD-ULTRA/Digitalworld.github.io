window.addEventListener('load',() => {
    setTimeout(() => {
        document.querySelector('.preloader').style.transform = "translateY(-100%)";
        document.querySelector('.loader').style.animation = 'null'
    },1000)    
    var toggle = document.querySelector('.toggle');
    toggle.addEventListener('click',() => {
        var links = document.querySelector('.links');
        links.classList.toggle('opened');
        toggle.classList.toggle('cross');
    });
});