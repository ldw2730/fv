import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title">주저하지 말고 <span className="highlight">상담하세요!</span></h2>
        <p className="section-description">
          FUTURE VISION은 고객의 원하는 모든 구현하는 위해 최선을 다합니다.<br />
          고객은 상담으로 특별해지고, 아이디어를 검토하시고 컨설팅하게 되는 모든 단계 도와드립니다.
        </p>
        
        <div className="contact-button">
          <a href="https://open.kakao.com/" target="_blank" rel="noopener noreferrer" className="kakao-btn">
            <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" 
                 alt="KakaoTalk Icon" width="24" height="24" />
            상담하기
          </a>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">FUTURE VISION</div>
          <div className="footer-info">
            <p>대표: 홍길동</p>
            <p>사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구 테헤란로 123</p>
            <p>이메일: contact@futurevision.com</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact; 