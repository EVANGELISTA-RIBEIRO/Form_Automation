// Aplicando máscara no campo telefone
import { aplicarMascaraTelefone } from "./mascaras.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".mask-tel")
    .forEach((campo) => aplicarMascaraTelefone(campo));
});
