/**
 * Extrai todos os números de uma string e retorna a soma deles.
 */
function extractAndSumNumbers(str: string): number {
    const numbers = str.match(/\d+/g);
    if (!numbers) return 0;
    return numbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

/**
 * Determina se um planeta é habitável com base na soma total das coordenadas.
 * Um planeta é considerado habitável se a soma for divisível por 12.
 */
function isPlanetHabitable(coordinates: string[]): boolean {
    const totalSum = coordinates.reduce((sum, coord) => sum + extractAndSumNumbers(coord), 0);
    return totalSum % 12 === 0;
}

/**
 * Processa as coordenadas, detalha os passos de extração e soma dos números.
 * Gera uma string HTML com os detalhes do processo.
 */
function processCoordinates(coordinates: string[]): { totalSum: number; processText: string } {
    let processText = '<div class="process-title">Processamento:</div>';
    let totalSum = 0;
    let sums: number[] = [];

    coordinates.forEach((coord, index) => {
        const numbers = coord.match(/\d+/g) || [];
        const sum = numbers.reduce((s, num) => s + parseInt(num, 10), 0);
        sums.push(sum);
        totalSum += sum;

        processText += `
            <div class="process-step">
                <span class="step-number">${index + 1}.</span>
                <span class="coord">"${coord}"</span> → 
                Números: <span class="numbers">${numbers.join('+') || '0'}</span> = 
                <span class="sum">${sum}</span>
            </div>
        `;
    });

    processText += `
        <div class="process-total">
            Soma total: ${sums.join('+')} = 
            <span class="total">${totalSum}</span>
        </div>
        <div class="process-division">
            Divisão por 12: ${totalSum} ÷ 12 = 
            <span class="result">${(totalSum / 12).toFixed(2)}</span>
            (Resto: ${totalSum % 12})
        </div>
    `;

    return { totalSum, processText };
}

/**
 * Função principal acionada ao clicar no botão EXPLORAR.
 * Captura os dados, processa, exibe os resultados e define a habitabilidade.
 */
function solvePlanet(): void {
    const inputElement = document.getElementById('coordinates') as HTMLInputElement | null;
    const processStepsElement = document.getElementById('process-steps');
    const finalResultElement = document.getElementById('final-result');
    const resultContainer = document.querySelector('.result-container');

    // Checagem de cada elemento individual para facilitar o debug
    if (!inputElement) {
        console.error('Elemento com ID "coordinates" não encontrado!');
        return;
    }
    if (!processStepsElement) {
        console.error('Elemento com ID "process-steps" não encontrado!');
        return;
    }
    if (!finalResultElement) {
        console.error('Elemento com ID "final-result" não encontrado!');
        return;
    }
    if (!resultContainer) {
        console.error('Elemento com classe "result-container" não encontrado!');
        return;
    }

    const inputValue = inputElement.value.trim();

    if (inputValue === '') {
        finalResultElement.textContent = 'Por favor, insira coordenadas para análise.';
        return;
    }

    const coordinates = inputValue.split(',').map(coord => coord.trim());

    processStepsElement.innerHTML = '';
    finalResultElement.className = '';
    resultContainer.className = 'result-container';

    const { totalSum, processText } = processCoordinates(coordinates);
    processStepsElement.innerHTML = processText;

    const habitable = isPlanetHabitable(coordinates);

    if (habitable) {
        finalResultElement.textContent = 'Planeta Habitável! 🌍✨';
        finalResultElement.className = 'habitable';
        resultContainer.classList.add('habitable');
    } else {
        finalResultElement.textContent = 'Planeta Inóspito 🚫';
        finalResultElement.className = 'inhospitable';
        resultContainer.classList.add('inhospitable');
    }
}

/**
 * Reseta todos os campos para o estado inicial.
 */
function resetForm(): void {
    const coordinatesInput = document.getElementById('coordinates') as HTMLInputElement | null;
    const processSteps = document.getElementById('process-steps');
    const finalResult = document.getElementById('final-result');
    const resultContainer = document.querySelector('.result-container');

    if (coordinatesInput) coordinatesInput.value = '';
    if (processSteps) processSteps.innerHTML = '';
    if (finalResult) {
        finalResult.textContent = 'Aguardando análise...';
        finalResult.className = '';
    }
    if (resultContainer) resultContainer.className = 'result-container';
}

/**
 * Configura os eventos dos botões quando o DOM estiver completamente carregado.
 */
document.addEventListener('DOMContentLoaded', () => {
    const solveBtn = document.getElementById('solveBtn');
    const resetBtn = document.getElementById('resetBtn');
    const coordinatesInput = document.getElementById('coordinates');

    if (!solveBtn) console.warn('Botão "solveBtn" não encontrado!');
    if (!resetBtn) console.warn('Botão "resetBtn" não encontrado!');
    if (!coordinatesInput) console.warn('Campo "coordinates" não encontrado!');

    if (solveBtn) solveBtn.addEventListener('click', solvePlanet);
    if (resetBtn) resetBtn.addEventListener('click', resetForm);
    if (coordinatesInput) {
        coordinatesInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') solvePlanet();
        });
    }
});
