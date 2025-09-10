import "./style.css";
import createNavbar from "./navbar";
import createFooter from "./footer";

const navbar = createNavbar();
document.body.prepend(navbar);

const footer = createFooter();
document.body.appendChild(footer);
