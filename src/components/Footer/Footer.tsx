import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-logo">FUTURE VISION</div>
            <div className="footer-info">
                <p>상호 : 퓨처비전</p>
                <p>대표 : 김범무</p>
                <p>사업자 등록번호 : 546-10-02987</p>
                <p>주소 : 경기도 용인시 기흥구 보정로 115, 5층 a-2호 (보정동, 우영프라자)</p>
            </div>
            <div className="footer-info2">
                <p>Contact Us</p>
                <p>E-mail : kimbummoo@firstfuturevision.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;