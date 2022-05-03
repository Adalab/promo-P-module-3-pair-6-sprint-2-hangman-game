import { Link, Route } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer">
      <nav>
        <ul>
          <li class="footer__menu-item">
            <Link to class="footer__menu-link" href="#/">
              A jugar
            </Link>
          </li>
          <li class="footer__menu-item">
            <Link class="footer__menu-link active" href="#/instructions">
              ¿Cómo se juega?
            </Link>
          </li>
          <li class="footer__menu-item">
            <Link class="footer__menu-link" href="#/options">
              Más opciones
            </Link>
          </li>
        </ul>
      </nav>
      <small class="footer__copy">© Adalab</small>
    </footer>
  );
};

export default Footer;
