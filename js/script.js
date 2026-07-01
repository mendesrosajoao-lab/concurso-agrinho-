document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade do Modo Escuro
    const btnDarkMode = document.getElementById('toggle-dark-mode');
    
    btnDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 2. Validador do Quiz de Fake News
    const quizForm = document.getElementById('quiz-form');
    const resultadoDiv = document.getElementById('quiz-resultado');

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede a página de recarregar

        const q1 = quizForm.elements['q1'].value;
        const q2 = quizForm.elements['q2'].value;

        if (!q1 || !q2) {
            resultadoDiv.style.color = 'orange';
            resultadoDiv.textContent = '⚠️ Por favor, responda a todas as perguntas antes de enviar!';
            return;
        }

        let acertos = 0;
        if (q1 === 'correto') acertos++;
        if (q2 === 'correto') acertos++;

        if (acertos === 2) {
            resultadoDiv.style.color = 'green';
            resultadoDiv.textContent = '🎉 Excelente! Você acertou todas as questões e sabe se proteger da desinformação!';
        } else {
            resultadoDiv.style.color = 'red';
            resultadoDiv.textContent = `❌ Você acertou ${acertos} de 2. Revise as dicas acima para melhorar sua segurança digital!`;
        }
    });
});
