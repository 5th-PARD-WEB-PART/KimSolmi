import React from 'react';
import styles from '../styles/MyPage.module.css';
import { FaHeart, FaRegHeart, FaComment, FaShare } from 'react-icons/fa';

interface PostModalProps {
  selectedPost: string;
  comments: string[];
  onClose: () => void;
  onToggleLike: () => void;
  isLiked: boolean;
  commentInput: string;
  onChangeCommentInput: (value: string) => void;
  onAddComment: () => void;
}

export default function PostModal({
  selectedPost,
  comments,
  onClose,
  onToggleLike,
  isLiked,
  commentInput,
  onChangeCommentInput,
  onAddComment,
}: PostModalProps): JSX.Element {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalImageContainer}>
          <img src={selectedPost} alt="Selected Post" className={styles.modalImage} />
        </div>
        <div className={styles.modalRight}>
          <div className={styles.modalHeader}>thisissolmi</div>

          <ul className={styles.commentList}>
            {comments.map((comment, i) => (
              <li key={i} className={styles.commentItem}>

            
                <img
                  src="/Yes.png"
                  alt="user icon"
                  className={styles.commentProfileIcon}
                />
                <span className={styles.commentText}><strong>thisissolmi</strong> {comment}</span>
              </li>
            ))}
          </ul>

          <div className={styles.modalFooter}>
            <div className={styles.likeSection}>
              <button onClick={onToggleLike} className={styles.likeButton}>
                {isLiked ? <FaHeart color="red" size={20} /> : <FaRegHeart size={20} />}
              </button>

              <button className={styles.likeButton}>
                <FaComment size={20} />
              </button>

              <button className={styles.likeButton}>
                <FaShare size={20} />
              </button>
            </div>

            <div className={styles.commentInputWrapper}>
              <input
                type="text"
                placeholder="댓글 달기..."
                value={commentInput}
                onChange={(e) => onChangeCommentInput(e.target.value)}
                className={styles.commentInput}
              />
              <button
                onClick={onAddComment}
                className={styles.commentButton}
                disabled={commentInput.trim() === ''}
              >
                게시
              </button>
            </div>
          </div>
        </div>
        <button className={styles.closeButton} onClick={onClose}>×</button>
      </div>
    </div>
  );
}
