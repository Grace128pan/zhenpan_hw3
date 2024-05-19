document.getElementById('generate-btn').addEventListener('click', generateDivs);
document.getElementById('clear-btn').addEventListener('click', clearDivs);

function generateDivs() {
    clearDivs();

    const mainContainer = document.getElementById('main-container');
    const startValue = parseInt(document.getElementById('start-value').value);
    const endValue = Math.min(parseInt(document.getElementById('end-value').value), 100);
    const fizzValue = parseInt(document.getElementById('fizz-value').value);
    const buzzValue = parseInt(document.getElementById('buzz-value').value);
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const fizzColor = document.getElementById('fizz-color').value;
    const buzzColor = document.getElementById('buzz-color').value;
    const fizzbuzzColor = document.getElementById('fizzbuzz-color').value;
    const noneColor = document.getElementById('none-color').value;

    for (let i = startValue; i <= endValue; i++) {
        const div = document.createElement('div');
        div.id = `myid${i}`;
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;

        if (i % fizzValue === 0 && i % buzzValue === 0) {
            div.className = 'fizzbuzz';
            div.innerText = 'FizzBuzz';
            div.style.backgroundColor = fizzbuzzColor;
        } else if (i % fizzValue === 0) {
            div.className = 'fizz';
            div.innerText = 'Fizz';
            div.style.backgroundColor = fizzColor;
        } else if (i % buzzValue === 0) {
            div.className = 'buzz';
            div.innerText = 'Buzz';
            div.style.backgroundColor = buzzColor;
        } else {
            div.className = 'number';
            div.innerText = i;
            div.style.backgroundColor = noneColor;
        }
        mainContainer.appendChild(div);
    }
}

function clearDivs() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';
}
