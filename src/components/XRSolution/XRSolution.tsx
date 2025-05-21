import React from 'react';
import './XRSolution.css';

const XRSolution: React.FC = () => {
  return (
    <section className="xr-solution" id="xr-solution">
      <div className="xr-content">
        <h2 className="section-title">AR-SOLUTION</h2>
        <p className="section-description" style={{fontWeight: 'bold',color: '#4D4D4D'}}>
          FUTURE VISION은 스크린을 넘어서 사용자에게 다가가도록 돕습니다.<br />
          사용자에게 현실과 가상의 경계를 무너뜨리고 경험하게 하고 고객의 기억에 남기세요.
        </p>
        
        <div className="solution-features">
          <div className="feature">
            <h3>플레이어블</h3>
            <p>단순하게 보는 것 뿐만 아니라 게임처럼 사용자가 상호작용하며 경험하고 체함할 수 있습니다.</p>
          </div>
          
          <div className="feature">
            <h3>웹 어플리케이션</h3>
            <p>사용자가 따로 설치 할 필요 없이 웹 페이지를 통해 경험합니다. 또한 QR로 제공할 수 있습니다.</p>
          </div>
          
          <div className="feature">
            <h3>증강 현실</h3>
            <p>현실과 가상세계를 융합하여 몰입, 참여, 기억, 확신,공유까지 사용자의 전 여정을 강화합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XRSolution; 