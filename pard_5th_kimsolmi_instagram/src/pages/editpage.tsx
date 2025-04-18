import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/EditPage.module.css';
import PostModal from '../components/PostModal'; // 모달 컴포넌트 import

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



    <button> 
      제출
    </button>

    
      
    </div>
  );
}
