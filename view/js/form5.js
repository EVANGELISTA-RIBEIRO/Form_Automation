// Aplicando máscaras em campos do form5
import {
  aplicarMascaraMonetario,
  aplicarMascaraCm,
  aplicarMascaraKg,
} from "./mascaras.js";

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
            <div class="campo">
                <label for="comprimento-${volumeIndex}">Comprimento (cm)</label>
                <input type="text" id="comprimento-${volumeIndex}" class="mask-cm">
            </div>
            <div class="campo">
                <label for="largura-${volumeIndex}">Largura (cm)</label>
                <input type="text" id="largura-${volumeIndex}" class="mask-cm">
            </div>
            <div class="campo">
                <label for="altura-${volumeIndex}">Altura (cm)</label>
                <input type="text" id="altura-${volumeIndex}" class="mask-cm">
            </div>
            <div class="campo">
                <label for="peso-${volumeIndex}">Peso (kg)</label>
                <input type="text" id="peso-${volumeIndex}" class="mask-kg">
            </div>
        </div>
          <button class="buttonvolume" type="button" onclick="adicionarEquipamento(${volumeIndex})">Adicionar Equipamento</button>
    `;
  container.appendChild(volumeContainer);

  // Aplicar máscaras nos novos campos adicionados
  volumeContainer.querySelectorAll(".mask-cm").forEach((campo) => aplicarMascaraCm(campo));
  volumeContainer.querySelectorAll(".mask-kg").forEach((campo) => aplicarMascaraKg(campo));
}

function adicionarEquipamento(volumeIndex) {
  const volume = document.querySelector(`#volume-${volumeIndex}`);
  if (!volume) {
    console.error(`Volume com índice ${volumeIndex} não encontrado.`);
    return;
  }

  const equipamentosContainer = volume.querySelector(".equipamentos");
  if (!equipamentosContainer) {
    console.error(
      `Contêiner de equipamentos não encontrado no volume ${volumeIndex}.`
    );
    return;
  }

  const equipamentoIndex =
    equipamentosContainer.querySelectorAll('input[id^="cod-sap-"]').length + 1;

  const equipamentoContainer = document.createElement("div");
  equipamentoContainer.innerHTML = `
        <div class="equipamentos">
            <div class="campo">
                <label for="cod-sap-${volumeIndex}-equip-${equipamentoIndex}">COD (SAP) - ${equipamentoIndex}</label>
                <input type="text" id="cod-sap-${volumeIndex}-equip-${equipamentoIndex}">
            </div>
            <div class="campo">
                <label for="part-number-${volumeIndex}-equip-${equipamentoIndex}">Part Number - ${equipamentoIndex}</label>
                <input type="text" id="part-number-${volumeIndex}-equip-${equipamentoIndex}">
            </div>
            <div class="campo">
                <label for="serial-number-${volumeIndex}-equip-${equipamentoIndex}">Serial Number - ${equipamentoIndex}</label>
                <input type="text" id="serial-number-${volumeIndex}-equip-${equipamentoIndex}">
            </div>
            <div class="campo">
                <label for="valor-${volumeIndex}-equip-${equipamentoIndex}">Valor (R$) - ${equipamentoIndex}</label>
                <input type="text" id="valor-${volumeIndex}-equip-${equipamentoIndex}" class="mask-monetario">
            </div>
        </div>
      `;
  equipamentosContainer.appendChild(equipamentoContainer);

  // Aplicar máscara nos novos campos adicionados
  equipamentoContainer.querySelectorAll(".mask-monetario").forEach((campo) => aplicarMascaraMonetario(campo));
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".mask-monetario")
    .forEach((campo) => aplicarMascaraMonetario(campo));
  document
    .querySelectorAll(".mask-cm")
    .forEach((campo) => aplicarMascaraCm(campo));
  document
    .querySelectorAll(".mask-kg")
    .forEach((campo) => aplicarMascaraKg(campo));

  // Torne as funções globalmente acessíveis para uso com onclick
  window.adicionarVolume = adicionarVolume;
  window.adicionarEquipamento = adicionarEquipamento;
});
