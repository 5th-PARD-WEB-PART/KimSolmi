import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/MyPage.module.css';
import PostModal from '../components/PostModal';
import { useUserStore } from '../stores/userStore'; // ✅ Zustand import

import {
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaBell,
  FaComment,
  FaUser,
  FaBars,
} from 'react-icons/fa';

export default function MyPage(): JSX.Element {
  const { userName } = useUserStore(); // ✅ 닉네임 가져오기
  const router = useRouter(); // ✅ 라우터 초기화

  const postImages: string[] = [
    '/animal.png',
    '/devweb.png',
    '/post1.png',
    '/defult.png',
    '/defult.png',
    '/defult.png',
    '/defult.png',
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [comments, setComments] = useState<Record<string, string[]>>({});
  const [commentInput, setCommentInput] = useState<string>('');

  const handlePostClick = (postSrc: string) => {
    setSelectedPost(postSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCommentInput('');
  };

  const toggleLike = () => {
    if (selectedPost) {
      setLikes((prev) => ({
        ...prev,
        [selectedPost]: !prev[selectedPost],
      }));
    }
  };

  const handleAddComment = () => {
    if (selectedPost && commentInput.trim() !== '') {
      setComments((prev) => ({
        ...prev,
        [selectedPost]: [...(prev[selectedPost] || []), commentInput],
      }));
      setCommentInput('');
    }
  };

  return (
    <div className={styles.container}>
      {/* 사이드바 */}
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <img src="/Company-logo.png" alt="Logo" className={styles.logo} />
        </div>
        <nav className={styles.menu}>
          <ul>
            <li className={styles.menuItem}>
              <FaHome className={styles.icon} />
              <span className={styles.menuText}>홈</span>
            </li>
            <li className={styles.menuItem}>
              <FaSearch className={styles.icon} />
              <span className={styles.menuText}>검색</span>
            </li>
            <li className={styles.menuItem}>
              <FaPlusSquare className={styles.icon} />
              <span className={styles.menuText}>릴스</span>
            </li>
            <li className={styles.menuItem}>
              <FaComment className={styles.icon} />
              <span className={styles.menuText}>메시지</span>
            </li>
            <li className={styles.menuItem}>
              <FaBell className={styles.icon} />
              <span className={styles.menuText}>알림</span>
            </li>
            <li className={styles.menuItem}>
              <FaPlusSquare className={styles.icon} />
              <span className={styles.menuText}>만들기</span>
            </li>
            <li className={styles.menuItem}>
              <FaUser className={styles.icon} />
              <span className={styles.menuText}>프로필</span>
            </li>
          </ul>
          <div className={styles.sidebarBottom}>
            <li className={styles.menuItem}>
              <FaBars className={styles.icon} />
              <span className={styles.menuText}>더보기</span>
            </li>
          </div>
        </nav>
      </aside>

      {/* 메인 프로필 */}
      <main className={styles.main}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImage}>
            <div className={styles.avatar}>
              <img src="/Yes.png" alt="Profile" className={styles.avatarImage} />
            </div>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profileNameRow}>
              <h2 className={styles.username}>{userName || '사용자'}</h2>
              <button
                className={styles.editProfileButton}
                onClick={() => router.push('/infoedit')} // ✅ 이동 처리
              >
                프로필 편집
              </button>
            </div>
            <div className={styles.profileStats}>
              <span className={styles.stat}>게시물 5</span>
              <span className={styles.stat}>팔로워 1432</span>
              <span className={styles.stat}>팔로우 0</span>
            </div>
          </div>
        </div>

        {/* 피드 목록 */}
        <div className={styles.profileContent}>
          <div className={styles.profileGrid}>
            {postImages.map((src, idx) => (
              <div
                key={idx}
                className={styles.gridItem}
                onClick={() => handlePostClick(src)}
              >
                <img src={src} alt={`Post ${idx + 1}`} className={styles.gridImage} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 모달 */}
      {isModalOpen && selectedPost && (
        <PostModal
          selectedPost={selectedPost}
          comments={comments[selectedPost] || []}
          onClose={handleCloseModal}
          onToggleLike={toggleLike}
          isLiked={likes[selectedPost] || false}
          commentInput={commentInput}
          onChangeCommentInput={setCommentInput}
          onAddComment={handleAddComment}
        />
      )}
    </div>
  );
}
