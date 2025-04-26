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
    aboutText:
      "Ce site est une liste de la plupart de mes projets et applications basés sur le web hébergés sur tyuxx.gsdistance.org. Tous sont gratuits et open source (jusqu'à présent), et vous pouvez les utiliser et y contribuer librement. N'hésitez pas à les utiliser et à les explorer.",
    about1: "Site officiel de GsDistance",
    about2: "Page de tyuXX sur GsDistance",
    about3: "GitHub de tyuXX",
    about4: "GitHub de GsDistance",
  }),
  new Language("Español", "es-es", {
    themeToggle: "Cambiar tema",
    stuff: "Cosas:",
    desc: "Mis cosas web en GsDistance.org",
    footerText: "2024 tyuXX. Todos los derechos reservados.",
    about: "Acerca de",
    aboutText:
      "Este sitio es una lista de la mayoría de mis proyectos y aplicaciones basados en la web alojados en tyuxx.gsdistance.org. Todos son gratuitos y de código abierto (hasta ahora), y puedes usarlos y contribuir a ellos libremente. Siéntete libre de usarlos y explorarlos.",
    about1: "Sitio web oficial de GsDistance",
    about2: "Página de tyuXX en GsDistance",
    about3: "GitHub de tyuXX",
    about4: "GitHub de GsDistance",
  }),
  new Language("Deutsch", "de-de", {
    themeToggle: "Thema wechseln",
    stuff: "Sachen:",
    desc: "Meine Websachen auf GsDistance.org",
    footerText: "2024 tyuXX. Alle Rechte vorbehalten.",
    about: "Über",
    aboutText:
      "Diese Seite ist eine Liste der meisten meiner webbasierten Projekte und Anwendungen, die auf tyuxx.gsdistance.org gehostet werden. Diese sind alle kostenlos und Open Source (bis jetzt), und Sie können sie frei nutzen und dazu beitragen. Fühlen Sie sich frei, sie zu nutzen und zu erkunden.",
    about1: "Offizielle GsDistance-Website",
    about2: "tyuXX's Seite auf GsDistance",
    about3: "tyuXX's GitHub",
    about4: "GsDistance's GitHub",
  }),
  new Language("English", "en-us", {
    themeToggle: "Toggle Theme",
    stuff: "Stuff:",
    desc: "My web-based stuff on GsDistance.org",
    footerText: "2024 tyuXX. All rights reserved.",
    about: "About",
    aboutText:
      "This site is a list of most of my web-based projects and applications hosted on tyuxx.gsdistance.org. These are all free and open source (as of now), and you can freely use and contiribute to them. Feel free to use and explore.",
    about1: "Official GsDistance Website",
    about2: "tyuXX's Page on GsDistance",
    about3: "tyuXX's GitHub",
    about4: "GsDistance's GitHub",
  }),
  new Language("Türkçe", "tr-tr", {
    themeToggle: "Tema Değiştir",
    stuff: "Şeyler:",
    desc: "GsDistance.org'da web tabanlı araçlarım",
    footerText: "2024 tyuXX. Telif hakları saklıdır.",
    about: "Hakkında",
    aboutText:
      "Bu site, tyuxx.gsdistance.org'da barındırılan çoğu web tabanlı projemin ve uygulamamın bir listesidir. Bunların hepsi ücretsiz ve açık kaynaklıdır (şu anda en azından), bunları özgürce kullanabilir ve rahatça katkıda bulunabilirsiniz. Kullanmakta ve keşfetmekte özgürsünüz.",
    about1: "Resmi GsDistance Web Sitesi",
    about2: "GsDistance'de tyuXX'in sayfası",
    about3: "tyuXX'in GitHub'ı",
    about4: "GsDistance'nin GitHub'ı",
  }),
]);

translator.attachLanguageSelector("#language-select");
recoverLastLanguage();
document.getElementById("language-select").value = activeLanguage;
translator.translatePageToActive();
