import './Header.css';
import logo from '../assets/logo.svg'
function Header() {

  const scrollToApropos = () => {
    const apropos = document.getElementById('apropos-section');
    if (apropos) {
      apropos.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const menu = document.getElementById('menu-section');
    if (menu) {
      menu.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="hedearclass">
      <div className="nav-left">
        <div className="all-content" onClick={scrollToApropos} style={{ cursor: 'pointer' }}>À propos</div>
        <div onClick={scrollToMenu} style={{ cursor: 'pointer' }}>Menu</div>
      </div>

      {/* LOGO FIXE AU CENTRE */}
      <img src={logo} alt="Logo" className="logo" />

      {/* RIGHT */}
      <div className="nav-right">
        <div className="all-content" onClick={scrollToFooter} style={{ cursor: 'pointer' }}>Contact</div>
        <button >Réserver</button>
      </div>
    </div>    
    </>
  )
}

export default Header