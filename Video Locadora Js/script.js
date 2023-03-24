const inTitle = document.getElementById('inTitle');
const inDuraction = document.getElementById('inDuraction');
const outTilte = document.getElementById('outTitle');
const outDuraction = document.getElementById('outDuraction');
const buttonConverter = document.getElementById('btnConverter');

buttonConverter.addEventListener('click', () => {
    let tilte = inTitle.value;
    let duraction = Number(inDuraction.value);

    let hours = Math.floor(duraction / 60);
    let minutes = duraction % 60;

    outTilte.textContent = tilte;
    outDuraction.textContent = `${hours} horas e ${minutes} minuto(s)`;
});
