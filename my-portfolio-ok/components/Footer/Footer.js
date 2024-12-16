import "./Footer.css" ;

const template = () => {
    return `
        <p>Copyrigth 2024- Erik</p>
        <div>
            ${Button("/icons/twitter.png", "Twitter")}
            ${Button("/icons/github.png", "GitHub")}
            ${Button("/icons/linkedin.png", "LinkedIn")}
        </div>
    `;
    }

    const Footer = () => {
        const footer = document.querySelector("footer");
        footer.innerHTML = template();
    };

    export default Footer;