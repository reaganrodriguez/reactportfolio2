import React from 'react';
import NavTabs from "./NavTabs";
function Header() {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  return (<>
    <NavTabs/>
    <header style={headerStyle}>
      <h1>My Portfolio</h1>
    </header>
    </>
  );
}

export default Header;
