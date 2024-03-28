import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import logo from '../assets/logo.png';
const Header: React.FC = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
    <div style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt="React Logo" style={{ width: 50, height: 50, marginInline:'10px', borderRadius:'50px' }} />
        <h3>Numbers Puzzle</h3>
    </div>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <TonConnectButton />
      </div>
    </div>
  );
};
export default Header;
