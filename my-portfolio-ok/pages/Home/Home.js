import "./Home.css";
import { cleanPage } from '/utils/cleanPage.js';


export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <h1>El portfolio de Erik Portillo</h1>
    <p>Soy un estudiante de DAW con experiencia en proyectos web y aplicaciones. Me apasiona crear soluciones digitales efectivas.</p>
    </section>`;
};