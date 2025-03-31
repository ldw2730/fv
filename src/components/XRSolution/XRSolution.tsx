import React from 'react';
import './XRSolution.css';

const XRSolution: React.FC = () => {
  return (
    <section className="xr-solution" id="xr-solution">
      <div className="xr-content">
        <h2 className="section-title">XR-SOLUTION</h2>
        <p className="section-description" style={{fontWeight: 'bold',color: '#4D4D4D'}}>
          사용자는 실제 공간에 제품을 불러와 배치됩니다.<br />
          색상과 옵션을 선택할 수 있습니다. 제품이 내 공간에 어떻게 어울릴지 확인합니다.
        </p>
        
        <div className="solution-features">
          <div className="feature">
            <h3>몰입형 경험</h3>
            <p>고객은 단순한 쇼핑을 넘어서, AR 공간에서 제품을 미리 경험합니다.</p>
          </div>
          
          <div className="feature">
            <h3>간편한 체험</h3>
            <p>복잡한 장비 없이도 스마트폰 하나로 언제 어디서나 내 공간에 제품을 직접 배치하고 체험할 수 있습니다.</p>
          </div>
          
          <div className="feature">
            <h3>웹 기반 서비스</h3>
            <p>고객이 최종 결과물을 직접 체험할 기회를 제공함으로써 구매 여부를 판단하는데 도움을 줍니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XRSolution; 