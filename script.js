const contenedor = document.querySelector('.face');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = contenedor.getBoundingClientRect();
    
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    contenedor.style.boxShadow = `${x * 0.2}px ${y * 0.2}px 30px rgba(91, 91, 56, 0.8)`;
});

function cambiarColorOjos() {
    let elementos = document.getElementsByClassName("eye-retina");
    let colorRandom = "#" + Math.floor(Math.random() * 16777215).toString(16);

    elementos[0].style.backgroundColor = colorRandom;
    elementos[1].style.backgroundColor = colorRandom;
    
}

