import "./../css/header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo-container">
        <div className="header-logo"></div>
      </div>
      <h1 className="header-title">BattleTanks</h1>
      <div className="header-links">Here goes links</div>
    </div>
  );
}

export default Header;
