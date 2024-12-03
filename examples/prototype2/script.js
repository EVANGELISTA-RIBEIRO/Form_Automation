// function adicionarVolume() {
//   const volumeContainer = document.createElement("div");
//   volumeContainer.classList.add("volume");
//   volumeContainer.innerHTML = `
//         <h2>Volume ${document.querySelectorAll(".volume").length + 1}</h2>
//         <label for="cod-sap">COD (SAP)</label>
//         <input type="text" id="cod-sap">
//         <div class="equipamentos">
//                     <label for="alias">Alias</label>
//                     <input type="text" id="alias">
//                     <label for="comprimento">Comprimento (cm)</label>
//                     <input type="text" id="comprimento" class="mask-cm">
//                     <label for="largura">Largura (cm)</label>
//                     <input type="text" id="largura" class="mask-cm">
//                     <label for="altura">Altura (cm)</label>
//                     <input type="text" id="altura" class="mask-cm">
//                     <label for="peso">Peso (kg)</label>
//                     <input type="text" id="peso" class="mask-kg">
//                     <label for="valor">Valor (R$)</label>
//                     <input type="text" id="valor" class="mask-kg">
//                     <label for="part-number">Part Number</label>
//                     <input type="text" id="part-number">
//                     <label for="serial-number">Serial Number</label>
//                     <input type="text" id="serial-number">
//         </div>
//         <button type="button" onclick="adicionarEquipamento()">Adicionar Equipamento</button>
//     `;
//   document.getElementById("volumes-container").appendChild(volumeContainer);
// }

// function adicionarEquipamento() {
//   const volume = event.target.closest(".volume");
//   const equipamentoContainer = document.createElement("div");
//   equipamentoContainer.innerHTML = `
//         <label for="cod-sap">COD (SAP)</label>
//         <input type="text" id="cod-sap">
//         <label for="part-number">Part Number</label>
//         <input type="text" id="part-number">
//         <label for="serial-number">Serial Number</label>
//         <input type="text" id="serial-number">
//     `;
//   volume.querySelector(".equipamentos").appendChild(equipamentoContainer);
// }

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
        <label for="cod-sap-volume-${volumeIndex}">COD (SAP)</label>
        <input type="text" id="cod-sap-volume-${volumeIndex}">
        <div class="equipamentos">
            <label for="alias-volume-${volumeIndex}-equip-1">Alias</label>
            <input type="text" id="alias-volume-${volumeIndex}-equip-1">
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

  // Conta os equipamentos adicionados no contêiner
  const equipamentoIndex =
    equipamentosContainer.querySelectorAll('input[id^="alias-volume"]').length +
    1;

  // Cria o novo equipamento
  const equipamentoContainer = document.createElement("div");
  equipamentoContainer.innerHTML = `
        <label for="alias-volume-${volumeIndex}-equip-${equipamentoIndex}">Alias</label>
        <input type="text" id="alias-volume-${volumeIndex}-equip-${equipamentoIndex}">
    `;
  equipamentosContainer.appendChild(equipamentoContainer);
}
