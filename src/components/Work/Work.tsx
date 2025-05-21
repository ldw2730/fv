import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Work.css';
import matter from 'gray-matter';

interface WorkItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const Work: React.FC = () => {
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        // 1. work 폴더 내 파일 목록 가져오기
        const res = await fetch('https://api.github.com/repos/ldw2730/fv/contents/work?ref=gh-pages');
        const files = await res.json();

        // 2. 마크다운 파일만 필터링
        const mdFiles = files.filter((file: any) => file.name.endsWith('.md'));

        // 3. 각 마크다운 파일 fetch 및 파싱
        const worksData = await Promise.all(
          mdFiles.map(async (file: any) => {
            const mdRes = await fetch(file.download_url);
            const md = await mdRes.text();
            const { data } = matter(md);
            return data;
          })
        );
        setWorks(worksData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchWorks();
  }, []);

  const totalPages = Math.ceil(works.length / itemsPerPage);

  const displayedWorks = showAll
    ? works.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : works.slice(0, 3);

  const handleViewMore = () => {
    setShowAll(true);
    setCurrentPage(1);
  };

  return (
    <section className="work" id="work">
      <div className="work-content">
        <h2 className="section-title">WORK</h2>
        <p className="section-description">
            FUTURE VISION은 VR과 AR 기술을 통해 현실과 디지털 세계를 자연스럽게 융합하여
            사용자에게 몰입감 있는 시각적 상호작용 경험을 제공합니다.
        </p>
        {!showAll && (
          <div className='view-more' onClick={handleViewMore}>View More</div>
        )}
        <div className={showAll ? 'work-grid' : 'work-slider'}>
          {displayedWorks.map(work => (
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
        </div>
        {showAll && (
          <div className="pagination">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={currentPage === idx + 1 ? 'active' : ''}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Work; 