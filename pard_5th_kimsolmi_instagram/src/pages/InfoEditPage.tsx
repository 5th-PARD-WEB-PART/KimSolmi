import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useUserStore } from '../stores/userStore';

export default function InfoEditPage() {
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
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>프로필 편집</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '8px' }}>닉네임</label>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          제출
        </button>
      </form>
    </div>
  );
}
