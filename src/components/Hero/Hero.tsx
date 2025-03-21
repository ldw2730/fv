import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-subtitle">물리적 공간의 제약을 넘습니다.</h2>
        <h1 className="hero-title">FUTURE VISION<span className="dot">.</span></h1>
        <p className="hero-description">
          FUTURE VISION은 그래픽과 테크니컬을 도전한 뒤로<br />
          솔루션을 만들어내는 장을 지향합니다.
        </p>
        <div className="hero-additional">
          <p>당분 제품을 잘 이해게 내 제품을 지향한 활까요?</p>
          <p>직접 메타버스 눈으로 보는 것이 가려에 가장 오래 남습니다.</p>
          <p>구체를 말씀하는 고객이 원신을 가지게 하세요.</p>
          <p>FUTURE VISION은 스크린을 넘어서 고객을 설득하는 길 입니다.</p>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero; 