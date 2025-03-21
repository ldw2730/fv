import React from 'react';
import './XRSolution.css';

const XRSolution: React.FC = () => {
  return (
    <section className="xr-solution" id="xr-solution">
      <div className="xr-content">
        <h2 className="section-title">XR-SOLUTION</h2>
        <p className="section-description">
          사용자는 실재감 공간에 제품을 물리와 배치됩니다.<br />
          색상과 움직임 선택할 수 있습니다. 제품이 내 공간에 어떻게 어울릴지 확인합니다.
        </p>
        
        <div className="solution-features">
          <div className="feature">
            <h3>물리형 경험</h3>
            <p>고객은 다양한 프로젝트 참여자, AR 및 VR에서 새롭게 하여 경험합니다.</p>
          </div>
          
          <div className="feature">
            <h3>간편한 체험</h3>
            <p>현장 방문없이 VR 공간에서 제품을 직접 체험하고 확인할 수 있습니다.</p>
          </div>
          
          <div className="feature">
            <h3>웹 기반 서비스</h3>
            <p>고객의 요청 사항을 반영하여 제작한 가상공간을 웹에서 바로 확인할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XRSolution; 