
const btn = document.querySelector('#btn')
const img = document.getElementById('img')

btn.addEventListener('click', () => {
    img.classList.toggle('show')
    alert('Une intrusion à lieu !!')
})

//**************************************************
const mouseEvent = document.querySelector('.mouseEvent')
const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')

mouseEvent.addEventListener('mousemove', (e) => {
    console.log(e)
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

    if (e.x > 500) {
        document.body.style.filter = "blur(3px)";
    }
    else {
        document.body.style.filter = "none";
    }
})

//************************************************
document.getElementById('input').addEventListener('input', (e) => {
    vertical.innerHTML = e.target.value;
    console.log(e.target.value);
})

const theme = document.querySelectorAll('.theme')