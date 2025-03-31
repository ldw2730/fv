import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-subtitle">물리적 공간의 제약을 넘습니다.</h2>
        <h1 className="hero-title">FUTURE VISION</h1>
       
        <div className="hero-additional">
          <p>FUTURE VISION은 <span className="hero-description">고객님의 비지니스를 도움이 되는</span></p>
          <p><span className="hero-description">솔루션을 만들어 내는 것을</span> 지향합니다.</p>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero; 