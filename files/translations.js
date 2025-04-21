import {
  Translator,
  Language,
  activeLanguage,
  recoverLastLanguage,
} from "../tyuLIB/lib/ddcTranslate/translator.js";

const translator = new Translator([
  new Language("Français", "fr-fr", {
    themeToggle: "Changer de thème",
    stuff: "Choses:",
    desc: "Mes trucs web sur GsDistance.org",
    footerText: "2024 tyuXX. Tous droits réservés.",
    about: "À propos",
  }),
  new Language("Español", "es-es", {
    themeToggle: "Cambiar tema",
    stuff: "Cosas:",
    desc: "Mis cosas web en GsDistance.org",
    footerText: "2024 tyuXX. Todos los derechos reservados.",
    about: "Acerca de",
  }),
  new Language("Deutsch", "de-de", {
    themeToggle: "Thema wechseln",
    stuff: "Sachen:",
    desc: "Meine Websachen auf GsDistance.org",
    footerText: "2024 tyuXX. Alle Rechte vorbehalten.",
    about: "Über",
  }),
  new Language("English", "en-us", {
    themeToggle: "Toggle Theme",
    stuff: "Stuff:",
    desc: "My web-based stuff on GsDistance.org",
    footerText: "2024 tyuXX. All rights reserved.",
    about: "About",
  }),
]);

translator.attachLanguageSelector("#language-select");
recoverLastLanguage();
document.getElementById("language-select").value = activeLanguage;
translator.translatePageToActive();
