function adicionarVolume() {
  const container = document.getElementById("volumes-container");
  if (!container) {
    console.error("O contêiner volumes-container não foi encontrado no DOM.");
    return;
  }

  const volumeIndex = document.querySelectorAll(".volume").length + 1; // Número do volume
  const volumeContainer = document.createElement("div");
  volumeContainer.classList.add("volume");
  volumeContainer.id = `volume-${volumeIndex}`; // ID único para o volume
  volumeContainer.innerHTML = `
        <h2>Volume ${volumeIndex}</h2>
        <div class="equipamentos">
            <label for="comprimento-${volumeIndex}">Comprimento (cm)</label>
            <input type="text" id="comprimento-${volumeIndex}" class="mask-cm">
            <label for="largura-${volumeIndex}">Largura (cm)</label>
            <input type="text" id="largura-${volumeIndex}" class="mask-cm">
            <label for="altura-${volumeIndex}">Altura (cm)</label>
            <input type="text" id="altura-${volumeIndex}" class="mask-cm">
            <label for="peso-${volumeIndex}">Peso (kg)</label>
            <input type="text" id="peso-${volumeIndex}" class="mask-kg">
        </div>
        <button type="button" onclick="adicionarEquipamento(${volumeIndex})">Adicionar Equipamento</button>
    `;
  container.appendChild(volumeContainer);
}

function adicionarEquipamento(volumeIndex) {
  // Localiza o volume pelo ID único
  const volume = document.querySelector(`#volume-${volumeIndex}`);
  if (!volume) {
    console.error(`Volume com índice ${volumeIndex} não encontrado.`);
    return;
  }

  // Localiza o contêiner de equipamentos
  const equipamentosContainer = volume.querySelector(".equipamentos");
  if (!equipamentosContainer) {
    console.error(
      `Contêiner de equipamentos não encontrado no volume ${volumeIndex}.`
    );
    return;
  }

  // Conta os equipamentos já adicionados (verifica quantos elementos de entrada existem)
  const equipamentoIndex =
    equipamentosContainer.querySelectorAll('input[id^="cod-sap-"]').length + 1;

  // Cria o novo equipamento
  const equipamentoContainer = document.createElement("div");
  equipamentoContainer.innerHTML = `
        <label for="cod-sap-${volumeIndex}-equip-${equipamentoIndex}">COD (SAP) - ${equipamentoIndex}</label>
        <input type="text" id="cod-sap-${volumeIndex}-equip-${equipamentoIndex}">
        <label for="part-number-${volumeIndex}-equip-${equipamentoIndex}">Part Number - ${equipamentoIndex}</label>
        <input type="text" id="part-number-${volumeIndex}-equip-${equipamentoIndex}">
        <label for="serial-number-${volumeIndex}-equip-${equipamentoIndex}">Serial Number - ${equipamentoIndex}</label>
        <input type="text" id="serial-number-${volumeIndex}-equip-${equipamentoIndex}">
        <label for="valor-${volumeIndex}-equip-${equipamentoIndex}">Valor (R$) - ${equipamentoIndex}</label>
        <input type="text" id="valor-${volumeIndex}-equip-${equipamentoIndex}" class="mask-monetario">
    `;
  equipamentosContainer.appendChild(equipamentoContainer);
}
