import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Work.css';
import { works } from '../../data/workList.json';

const Work: React.FC = () => {
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
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="work" id="work">
      <div className="work-content">
        <h2 className="section-title">WORK</h2>
        <p className="section-description">
            FUTURE VISION은 VR과 AR 기술을 통해 현실과 디지털 세계를 자연스럽게 융합하여
            사용자에게 몰입감 있는 시각적 상호작용 경험을 제공합니다.
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