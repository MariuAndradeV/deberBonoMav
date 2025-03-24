
Este proyecto implementa dos interacciones principales:

Interacción con mousemove: 
Decidi mover la sombra de una persona en función de la posición del cursor para simular una proyección dinámica.

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = contenedor.getBoundingClientRect();
        
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        contenedor.style.boxShadow = `${x * 0.2}px ${y * 0.2}px 30px rgba(91, 91, 56, 0.8)`;
    });

Interacción con onclick: 
Al presionar el botón, se cambia el color de los ojos de la figura con un color aleatorio, generado mediante Math.random().

    let colorRandom = "#" + Math.floor(Math.random() * 16777215).toString(16);

Diseño
El diseño de las interacciones es original, sin basarse en referencias externas.

Uso de ChatGPT:
Se solicitó ayuda a ChatGPT para ubicar correctamente la proyección de la sombra en la interacción mousemove, asegurando que el efecto visual fuera coherente con el movimiento del cursor.

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    contenedor.style.boxShadow = `${x * 0.2}px ${y * 0.2}px 30px rgba(91, 91, 56, 0.8)`;
