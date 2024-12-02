// Aplicando máscaras em campos do form4
import {
  aplicarMascaraMonetario,
  aplicarMascaraCm,
  aplicarMascaraKg,
} from "./mascaras.js";

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
});
