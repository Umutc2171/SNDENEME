import { useState } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ setIsSearchShow }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = localStorage.getItem("user");
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="global-notification">
        <p>SN BİLGİSAYAR VE GÜVENLİK SİSTEMLERİ!</p>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile" onClick={toggleMenu}>
              <i className="bi bi-list"></i>
            </div>
            
            <div className="header-left"></div>
            <div className={`header-center ${menuOpen ? 'open' : ''}`} id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to="/"
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      Ana Sayfa
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to="/Hizmetlerimiz"
                      className={`menu-link ${pathname === "/Hizmetlerimiz" && "active"}`}
                    >
                      HİZMETLERİMİZ
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="/Hizmetlerimiz/Bilgisayar">Bilgisayar Ve Leptop Hizmetlerimiz</a>
                        </li>
                        <li>
                          <a href="/Hizmetlerimiz/Kamera">Kamera Hizmetlerimiz</a>
                        </li>
                        <li>
                          <a href="/Hizmetlerimiz/İp-Kamera">İp Kamera Hizmetlerimiz</a>
                        </li>
                        <li>
                          <a href="/Hizmetlerimiz/Alarm">Alarm Hizmetlerimiz</a>
                        </li>
                        <li>
                          <a href="/Hizmetlerimiz/ServerK">Server Kurulum Hizmetlerimiz</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to="/Mağaza"
                      className={`menu-link ${pathname === "/Mağaza" && "active"}`}
                    >
                      Mağaza
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to="/İletişim"
                      className={`menu-link ${pathname === "/İletişim" && "active"}`}
                    >
                      İLETİŞİM
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi bi-x-circle" id="close-sidebar" onClick={toggleMenu}></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to="/Hesap" className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (window.confirm("Çıkış Yapmak İstediğinize Emin Misiniz?")) {
                        localStorage.removeItem("user");
                        window.location.href = "/";
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setIsSearchShow: PropTypes.func,
};

export default Header;
