import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/register.module.css';
import { useUserStore } from '../stores/userStore';

export default function registerpage() {
  const router = useRouter();
  const {
    phoneOrEmail,
    fullName,
    userName,
    password,
    setUserInfo,
  } = useUserStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //모든 필드를 다 입력
    if (!phoneOrEmail || !fullName || !userName || !password) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    console.log('가입 정보:', { phoneOrEmail, fullName, userName, password });
    router.push('/mypage');
  };

  const handleLoginClick = () => {
    router.push('/mypage');
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topContainer}>
        <div className={styles.logo}>
          <Image
            src="/Company-logo.png"
            alt="Logo"
            width={200}
            height={60}
            priority
          />
        </div>

        <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="휴대폰 번호 또는 이메일 주소"
            value={phoneOrEmail}
            onChange={(e) =>
              setUserInfo({
                phoneOrEmail: e.target.value,
                fullName,
                userName,
                password,
              })
            }
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="성명"
            value={fullName}
            onChange={(e) =>
              setUserInfo({
                phoneOrEmail,
                fullName: e.target.value,
                userName,
                password,
              })
            }
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="사용자 이름"
            value={userName}
            onChange={(e) =>
              setUserInfo({
                phoneOrEmail,
                fullName,
                userName: e.target.value,
                password,
              })
            }
          />
          <input
            type="password"
            className={styles.inputField}
            placeholder="비밀번호"
            value={password}
            onChange={(e) =>
              setUserInfo({
                phoneOrEmail,
                fullName,
                userName,
                password: e.target.value,
              })
            }
          />

          <p className={styles.infoText}>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.{' '}
            <a href="#" style={{ color: '#0095f6' }}>더 알아보기</a>
          </p>

          <button type="submit" className={styles.submitButton}>가입</button>
        </form>
      </div>

      <div className={styles.bottomContainer}>
        <p className={styles.loginText}>
          계정이 있으신가요?
          <span onClick={handleLoginClick} className={styles.loginLink}>로그인</span>
        </p>
      </div>
    </div>
  );
}
