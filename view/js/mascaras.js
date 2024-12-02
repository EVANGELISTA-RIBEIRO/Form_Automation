// Função para exibir a mensagem de erro
function mostrarErro(campo, mensagem) {
  let erroElemento = campo.nextElementSibling; // Procurando o próximo elemento (a mensagem de erro)
  if (!erroElemento || !erroElemento.classList.contains("erro")) {
    erroElemento = document.createElement("div");
    erroElemento.classList.add("erro");
    campo.parentNode.insertBefore(erroElemento, campo.nextSibling); // Inserindo a mensagem de erro
  }
  erroElemento.textContent = mensagem;
}

function limparErro(campo) {
  let erroElemento = campo.nextElementSibling;
  if (erroElemento && erroElemento.classList.contains("erro")) {
    erroElemento.remove(); // Removendo a mensagem de erro
  }
}

// Função para aplicar máscara de celular
function aplicarMascaraTelefone(campo) {
  campo.addEventListener("input", () => {
    let valor = campo.value.replace(/\D/g, ""); // Remove tudo que não for número

    // Aplica a máscara de celular
    if (valor.length > 2 && valor.length <= 7) {
      valor = valor.replace(/^(\d{2})(\d+)/, "($1) $2");
    } else if (valor.length > 7) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d+)/, "($1) $2-$3");
    }

    // Limita a 15 caracteres no total
    campo.value = valor.slice(0, 15);
  });

  campo.addEventListener("blur", () => {
    const regexCelularValido = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!regexCelularValido.test(campo.value)) {
      mostrarErro(
        campo,
        "Número de celular inválido! Use o formato (xx) xxxxx-xxxx."
      );
      campo.value = "";
    } else {
      limparErro(campo); // Limpa o erro caso o valor esteja correto
    }
  });
}

// Função para aplicar máscara de valor monetário
function aplicarMascaraMonetario(campo) {
  campo.addEventListener("input", () => {
    let valor = campo.value.replace(/\D/g, ""); // Remove tudo que não for número

    // Adiciona ponto para separar os centavos
    if (valor.length > 2) {
      valor = valor.replace(/(\d{1})(\d{2})$/, "$1,$2"); // Adiciona a vírgula para os centavos
    }

    // Adiciona o "R$" no início
    if (valor.length > 5) {
      valor = valor.replace(/^(\d+)(\d{2})$/, "R$ $1,$2");
    }

    // Limita o valor a no máximo 15 caracteres (R$ 999.999,99)
    campo.value = "R$ " + valor.slice(0, 15);
  });

  campo.addEventListener("blur", () => {
    const regexMonetarioValido = /^R\$ \d+,\d{2}$/;
    if (!regexMonetarioValido.test(campo.value)) {
      mostrarErro(campo, "Valor inválido! Use o formato R$ 0,00.");
      campo.value = "";
    } else {
      limparErro(campo); // Limpa o erro caso o valor esteja correto
    }
  });
}

// Função para aplicar máscara de centímetros (cm)
function aplicarMascaraCm(campo) {
  campo.addEventListener("input", () => {
    let valor = campo.value.replace(/\D/g, ""); // Remove tudo que não for número

    // Adiciona o "cm" ao final
    if (valor.length > 2) {
      valor = valor.replace(/^(\d+)(\d{2})$/, "$1,$2");
    }

    // Limita a 5 caracteres (999,99 cm)
    campo.value = valor.slice(0, 5) + " cm";
  });

  campo.addEventListener("blur", () => {
    const regexCmValido = /^\d+(\,\d{1,2})? cm$/;
    if (!regexCmValido.test(campo.value)) {
      mostrarErro(campo, "Valor inválido! Use o formato 999,99 cm.");
      campo.value = "";
    } else {
      limparErro(campo); // Limpa o erro caso o valor esteja correto
    }
  });
}

// Função para aplicar máscara de quilogramas (kg)
function aplicarMascaraKg(campo) {
  campo.addEventListener("input", () => {
    let valor = campo.value.replace(/\D/g, ""); // Remove tudo que não for número

    // Adiciona o "kg" ao final
    if (valor.length > 2) {
      valor = valor.replace(/^(\d+)(\d{2})$/, "$1,$2");
    }

    // Limita a 5 caracteres (99,99 kg)
    campo.value = valor.slice(0, 5) + " kg";
  });

  campo.addEventListener("blur", () => {
    const regexKgValido = /^\d+(\,\d{1,2})? kg$/;
    if (!regexKgValido.test(campo.value)) {
      mostrarErro(campo, "Valor inválido! Use o formato 99,99 kg.");
      campo.value = "";
    } else {
      limparErro(campo); // Limpa o erro caso o valor esteja correto
    }
  });
}

// Exporta a função para ser reutilizada
export {
  aplicarMascaraTelefone,
  aplicarMascaraMonetario,
  aplicarMascaraCm,
  aplicarMascaraKg,
};
