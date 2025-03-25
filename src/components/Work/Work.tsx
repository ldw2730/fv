import React from 'react';
import './Work.css';
// 이미지 import
import slotMachineImage from '../../assets/images/slot-machine.png';
import rouletteImage from '../../assets/images/roulette.png';
import erHanaImage from '../../assets/images/er-hana.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Work: React.FC = () => {
  const works = [
    {
      id: 1,
      title: 'SLOT MACHINE EVENT',
      image: slotMachineImage,
      category: '게임 디자인'
    },
    {
      id: 2,
      title: '100% 확률 ROULETTE EVENT',
      image: rouletteImage,
      category: '이벤트 디자인'
    },
    {
      id: 3,
      title: 'ER Hana',
      image: erHanaImage,
      category: '브랜드 디자인'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="work" id="work">
      <div className="work-content">
        <h2 className="section-title">WORK</h2>
        <p className="section-description">
          FUTURE VISION은 VR과 AR 기술을 통해 현실과 디지털 세계를 자연스럽게 융합하여<br />
          사용자에게 몰입감 있는 모든 시각적 경험적을 제공을 제공합니다.
        </p>
        
        <div className="work-slider">
          <Slider {...sliderSettings}>
            {works.map(work => (
              <div key={work.id} className="work-item">
                <div className="work-image">
                  <img src={work.image} alt={work.title} loading="lazy" />
                </div>
                <div className="work-info">
                  <h3>{work.title}</h3>
                  <p>{work.category}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Work; 