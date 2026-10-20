// Demostración ilustrativa: NO usa IA real ni evalúa el texto ingresado.
function simulateIACall() {
    const query = document.getElementById('ia-query').value.trim();
    const channel = document.getElementById('channel-type').value;
    const output = document.getElementById('ia-response');

    if (!query) {
        output.innerText = 'Escribe un ejemplo de solicitud para ver la demostración.';
        return;
    }

    output.innerText = 'Preparando el ejemplo...\n';

    setTimeout(() => {
        output.innerText += '1. Se recibe la solicitud y se ordena la información.\n';
    }, 800);

    setTimeout(() => {
        output.innerText += '2. La IA prepara un análisis preliminar como apoyo (en esta demostración, no se ejecuta).\n';
    }, 1600);

    setTimeout(() => {
        const destino = channel === 'B2G'
            ? 'El equipo de convenios revisa la propuesta con el comité humano.'
            : 'El equipo de la Escuela revisa la postulación con el comité humano.';
        output.innerText += '3. ' + destino + '\n\nRecuerda: este es un ejemplo ilustrativo. La decisión final siempre es de personas.';
    }, 2400);
}
