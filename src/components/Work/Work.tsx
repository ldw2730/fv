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
  description?: string;
}

// 모달 컴포넌트 정의
const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({ onClose, children }) => (
  <div className="modal-backdrop" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>×</button>
      {children}
    </div>
  </div>
);

const Work: React.FC = () => {
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('모두');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        // 1. work 폴더 내 파일 목록 가져오기
        const res = await fetch('https://api.github.com/repos/ldw2730/fv/contents/works?ref=gh-pages');
        const files = await res.json();

        // 2. 마크다운 파일만 필터링
        const mdFiles = files.filter((file: any) => file.name.endsWith('.md'));

        // 3. 각 마크다운 파일 fetch 및 파싱
        const worksData = await Promise.all(
          mdFiles.map(async (file: any) => {
            const mdRes = await fetch(file.download_url);
            const md = await mdRes.text();
            const { data, content } = matter(md);
            return { ...data, description: content };
          })
        );
        setWorks(worksData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchWorks();
  }, []);

  // 카테고리 목록 및 개수 추출
  const categories = Array.from(new Set(works.map(work => work.category)));
  const categoryCounts = works.reduce((acc, work) => {
    acc[work.category] = (acc[work.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const totalCount = works.length;

  // 카테고리 필터링
  const filteredWorks = selectedCategory === '모두'
    ? works
    : works.filter(work => work.category === selectedCategory);

  const totalPages = Math.ceil(filteredWorks.length / itemsPerPage);

  const displayedWorks = showAll
    ? filteredWorks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredWorks.slice(0, 3);

  const handleViewMore = () => {
    setShowAll(true);
    setCurrentPage(1);
  };

  // 카테고리 변경 시 페이지 초기화
  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
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
        {/* 카테고리 바 */}
        {showAll && (
          <div className="category-bar">
            <button
              className={selectedCategory === '모두' ? 'active' : ''}
              onClick={() => handleCategoryClick('모두')}
            >
              모두 <span>({totalCount})</span>
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat} <span>({categoryCounts[cat]})</span>
              </button>
            ))}
          </div>
        )}
        {!showAll && (
          <div className='view-more' onClick={handleViewMore}>View More</div>
        )}
        <div className={showAll ? 'work-grid' : 'work-slider'}>
          {displayedWorks.map(work => (
            <div key={work.id} className="work-item" onClick={() => setSelectedWork(work)}>
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
        {/* 모달 렌더링 */}
        {selectedWork && (
          <Modal onClose={() => setSelectedWork(null)}>
            <h2>{selectedWork.title}</h2>
            <div style={{marginTop: '16px', whiteSpace: 'pre-line', textAlign:'start'}}>{selectedWork.description}</div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Work; 