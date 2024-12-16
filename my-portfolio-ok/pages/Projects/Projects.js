// const projects = [

//     {tittle: "Clima App",
//     img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/07/app-tiempo-iphone-2406843.jpg?tf=1200x1200",
//     description: "Una aplicación web que proporciona información meteorológica en tiempo real. Los usuarios pueden buscar cualquier ciudad del mundo y obtener detalles como la temperatura, la humedad y el pronóstico para los próximos días.",
//     technologies: "HTML, CSS, JavaScript, API de OpenWeatherMap",
//     link: "https://example.com/clima-app"},

//     {tittle: "Biblioteca Virtual",
//     img: "https://bibliotecas.larioja.org/images/blog_img/a_biblioteca_virtual.jpg",
//     description: "Una aplicación web que permite a los usuarios gestionar su colección de libros. Los usuarios pueden agregar, editar y eliminar libros, así como marcar sus libros favoritos. Incluye una opción para reseñas y valoraciones de los libros.",
//     technologies: "React, Node.js, Express, MongoDB",
//     link: "https://example.com/biblioteca-virtual"},

//     {tittle: "Calculadora",
//     img: "https://help.apple.com/assets/66EB2D93D8C3BD635E04A0A9/66EB2D97D8C3BD635E04A0AF/es_ES/5250122ee560cee90b3d7cfa2d91695e.png",
//     description: "Una aplicación intuitiva que permite realizar operaciones matemáticas básicas como suma, resta, multiplicación y división. Diseñada con una interfaz amigable y responsive.",
//     technologies: "JavaScript, HTML, CSS",
//     link: "https://example.com/calculator"}
// ]

import "./Projects.css";
import { cleanPage } from "../../utils/cleanPage";
import { Projects } from "/pages/Projects/Projects";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Divider } from "../../components/Divider/Divider";

export const Projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="projects">
    <h2>Featured Projects</h2>
    ${Divider()}
    <div class="projects-container"></div>
    </section>`;
  const container = document.querySelector(".projects-container");
  for (const project of projects) {
    const figure = document.createElement("figure");
    figure.innerHTML = ProjectCard(project);
    container.appendChild(figure);
  }
};