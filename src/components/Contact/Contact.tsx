import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title">주저하지 말고 <span className="highlight" style={{fontWeight: 'bolder'}}>상담하세요!</span></h2>
        <p className="section-description">
        FUTURE VISION은 고객이 원하는 것을 구현하기 위해 최선을 다합니다.<br />
        <strong>고민은 상담으로 해결하세요.</strong> 상담문의를 신청하시면 성심성의껏 빠른 답변 드리겠습니다.
        </p>
        
        
      </div>
      <div className="contact-content2">
        <div className='contact-content2-inner'>
            <h2>Contact Us</h2>
            <div>고객님의 궁금증을 해결해드립니다.</div>
            <div className="contact-button">
                <a href="https://open.kakao.com/" target="_blank" rel="noopener noreferrer" className="kakao-btn">
                    <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" 
                        alt="KakaoTalk Icon" width="24" height="24" />
                    상담하기
                </a>
            </div>
        </div>
      </div>
      
    </section>
  );
};

export default Contact; 