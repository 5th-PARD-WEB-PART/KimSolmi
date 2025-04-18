import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/mypage.module.css';
import { useUserStore } from '../stores/userStore';
import {
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaBell,
  FaComment,
  FaUser,
  FaBars,
  FaUserCircle,
} from 'react-icons/fa';

export default function infoeditpage() {
  const router = useRouter();
  const { userName, setUserInfo, phoneOrEmail, fullName, password } = useUserStore();
  const [newUserName, setNewUserName] = useState(userName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo({
      phoneOrEmail,
      fullName,
      userName: newUserName,
      password,
    });
    alert('수정이 완료되었습니다!');
    router.push('/mypage');
  };

  return (
    <div className={styles.container}>
   
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <img src="/Company-logo.png" alt="Logo" className={styles.logo} />
        </div>
        <nav className={styles.menu}>
          <ul>
            <li className={styles.menuItem}><FaHome className={styles.icon} /><span className={styles.menuText}>홈</span></li>
            <li className={styles.menuItem}><FaSearch className={styles.icon} /><span className={styles.menuText}>검색</span></li>
            <li className={styles.menuItem}><FaPlusSquare className={styles.icon} /><span className={styles.menuText}>릴스</span></li>
            <li className={styles.menuItem}><FaComment className={styles.icon} /><span className={styles.menuText}>메시지</span></li>
            <li className={styles.menuItem}><FaBell className={styles.icon} /><span className={styles.menuText}>알림</span></li>
            <li className={styles.menuItem}><FaPlusSquare className={styles.icon} /><span className={styles.menuText}>만들기</span></li>
            <li className={styles.menuItem}><FaUser className={styles.icon} /><span className={styles.menuText}>프로필</span></li>
          </ul>
          <div className={styles.sidebarBottom}>
            <li className={styles.menuItem}><FaBars className={styles.icon} /><span className={styles.menuText}>더보기</span></li>
          </div>
        </nav>
      </aside>


      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>프로필 편집</h2>
        <p className={styles.sectionDescription}>수정할 닉네임을 입력 후 제출해주세요.</p>

        <form onSubmit={handleSubmit} className={styles.editForm}>
          <div className={styles.profileImageEditContainer}>
            <FaUserCircle size={36} color="#ccc" />
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className={styles.inputField}
              placeholder="새 닉네임"
            />
          </div>
          <button type="submit" className={styles.submitButton}>제출</button>
        </form>
      </main>
    </div>
  );
}
