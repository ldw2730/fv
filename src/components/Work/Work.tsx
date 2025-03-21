import React from 'react';
import './Work.css';

const Work: React.FC = () => {
  const works = [
    {
      id: 1,
      title: 'SLOT MACHINE EVENT',
      image: '/images/slot-machine.jpg',
      category: '게임 디자인'
    },
    {
      id: 2,
      title: '100% 확률 ROULETTE EVENT',
      image: '/images/roulette.jpg',
      category: '이벤트 디자인'
    },
    {
      id: 3,
      title: 'ER Hana',
      image: '/images/er-hana.jpg',
      category: '브랜드 디자인'
    }
  ];

  return (
    <section className="work" id="work">
      <div className="work-content">
        <h2 className="section-title">WORK</h2>
        <p className="section-description">
          FUTURE VISION은 VR과 AR 기술을 통해 현실과 디지털 세계를 자연스럽게 융합하여<br />
          사용자에게 몰입감 있는 모든 시각적 경험적을 제공을 제공합니다.
        </p>
        
        <div className="work-grid">
          {works.map(work => (
            <div key={work.id} className="work-item">
              <div className="work-image">
                <img src={work.image} alt={work.title} />
              </div>
              <div className="work-info">
                <h3>{work.title}</h3>
                <p>{work.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 