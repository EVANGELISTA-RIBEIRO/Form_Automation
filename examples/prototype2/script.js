function adicionarVolume() {
  const volumeContainer = document.createElement("div");
  volumeContainer.classList.add("volume");
  volumeContainer.innerHTML = `
        <h2>Volume ${document.querySelectorAll(".volume").length + 1}</h2>
        <label for="cod-sap">COD (SAP)</label>
        <input type="text" id="cod-sap">
        <div class="equipamentos">
            <label for="alias">Alias</label>
            <input type="text" id="alias">
        </div>
        <button type="button" onclick="adicionarEquipamento()">Adicionar Equipamento</button>
    `;
  document.getElementById("volumes-container").appendChild(volumeContainer);
}

function adicionarEquipamento() {
  const volume = event.target.closest(".volume");
  const equipamentoContainer = document.createElement("div");
  equipamentoContainer.innerHTML = `
        <label for="alias">Alias</label>
        <input type="text" id="alias">
    `;
  volume.querySelector(".equipamentos").appendChild(equipamentoContainer);
}
