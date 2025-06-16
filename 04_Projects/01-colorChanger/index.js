const btn = document.querySelectorAll('.button');


btn.forEach(function (box){
    const clr = box.getAttribute('id');
    box.addEventListener('click', () => {
        document.querySelector('body').style.backgroundColor = clr;
    });
})