let currentStep = 1;

function nextStep(step) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep = step;
    document.getElementById(`step-${currentStep}`).classList.add('active');
}

function prevStep(step) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep = step;
    document.getElementById(`step-${currentStep}`).classList.add('active');
}

function toggleOutro() {
    const outroText = document.getElementById("outro-text");
    outroText.style.display = document.getElementById("outro").checked ? "inline-block" : "none";
}

// Exibe o formulário pop-up quando a página carregar
window.onload = function() {
    document.getElementById("popup-form").style.display = "flex";
    nextStep(1); // Inicia no primeiro passo
};
