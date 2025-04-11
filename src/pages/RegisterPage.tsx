// pages/Register.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Register.module.css';

export default function RegisterPage() {
  const router = useRouter();

  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // 가입 처리
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('가입 정보:', { phoneOrEmail, fullName, userName, password });
    // 서버에 가입 요청 로직 등을 추가
  };

  const handleLoginClick = () => {
    router.push('/mypage')
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topContainer}>
        <div className={styles.logo}>
          <Image
            src="/Company-logo.png" 

            alt="Instagram Logo"
            width={200}
            height={60}
            priority
          />
        </div>
        <br></br>

        <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
        <br>
        </br>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="휴대폰 번호 또는 이메일 주소"
            value={phoneOrEmail}
            onChange={(e) => setPhoneOrEmail(e.target.value)}
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="성명"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="사용자 이름"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            className={styles.inputField}
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className={styles.infoText}>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.{' '}
            <a href="#" style={{ color: '#0095f6' }}>
              더 알아보기
            </a>
          </p>

          <button type="submit" className={styles.submitButton}>
            가입
          </button>
        </form>
      </div>

      {/* 하단 박스 */}
      <div className={styles.bottomContainer}>
        <p className={styles.loginText}>
          계정이 있으신가요?
          <span onClick={handleLoginClick} className={styles.loginLink}>
            로그인
          </span>
        </p>
      </div>
    </div>
  );
}
