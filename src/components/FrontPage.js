import React, { useState } from 'react';
import LeftOfFrontPage from './LeftOfFrontPage';
import RightOfFrontPage from './RightOfFrontPage';
import './styles.css';
import PS5_Logo from "../resources/PS5_Logo.png";

export default function FrontPage() {
  const [shifted, setShifted] = useState(false);

  return (
    <div className="d-flex frontPageContainer">
      <LeftOfFrontPage shifted={shifted} setShifted={setShifted} />
      <RightOfFrontPage />
      <img src={PS5_Logo} alt="PS5_Logo" className="PS5_LogoCenter" />
    </div>
  );
}
